import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

const workflow = readFileSync(new URL('../.github/workflows/clawsweeper-dispatch.yml', import.meta.url), 'utf8');
const group = workflow.match(/^  group: (.+)$/m)[1];
const cancellation = workflow.match(/^  cancel-in-progress: (.+)$/m)[1];

function context(eventName, action, overrides = {}) {
  return {
    repository: 'example/reports',
    event_name: eventName,
    actor: 'maintainer',
    run_id: 100,
    event: {
      action,
      issue: { number: eventName === 'pull_request_target' ? '' : 4 },
      pull_request: { number: eventName === 'pull_request_target' ? 4 : '' },
      comment: { id: eventName === 'issue_comment' ? 200 : '' },
    },
    ...overrides,
  };
}

// These expressions use the operators shared by Actions and JavaScript, with
// nonempty string/number IDs and empty strings for absent payload properties.
function evaluate(expression, github) {
  return runInNewContext(expression, {
    github,
    endsWith: (value, suffix) => value.toLowerCase().endsWith(suffix.toLowerCase()),
  }, { timeout: 1000 });
}

function key(github) {
  return group.replace(/\$\{\{(.*?)\}\}/g, (_, expression) => evaluate(expression, github));
}

function cancels(github) {
  return evaluate(cancellation.match(/^\$\{\{(.*)\}\}$/)[1], github);
}

test('item edits and PR synchronization cannot evict a command', () => {
  const command = key(context('issue_comment', 'created'));
  for (const [event, action] of [['issues', 'edited'], ['pull_request_target', 'edited'], ['pull_request_target', 'synchronize']]) {
    assert.notEqual(key(context(event, action)), command);
  }
});

test('different comments are independent, while an edit supersedes its own comment', () => {
  const first = context('issue_comment', 'created');
  const second = context('issue_comment', 'created');
  second.event.comment.id++;
  assert.notEqual(key(first), key(second));
  assert.equal(key(first), key(context('issue_comment', 'edited')));
  assert.equal(cancels(first), false);
  assert.equal(cancels(context('issue_comment', 'edited')), true);
});

test('skipped bot label events cannot replace a queued human event', () => {
  for (const event of ['issues', 'pull_request_target']) {
    for (const action of ['labeled', 'unlabeled']) {
      assert.notEqual(key(context(event, action, { actor: 'automation[bot]' })), key(context(event, action)));
    }
    assert.equal(key(context(event, 'edited', { actor: 'automation[bot]' })), key(context(event, 'edited')));
  }
});

test('metadata changes for one item still share a concurrency group', () => {
  for (const event of ['issues', 'pull_request_target']) {
    const initial = key(context(event, 'opened'));
    for (const action of ['reopened', 'edited', 'labeled', 'unlabeled']) {
      assert.equal(key(context(event, action)), initial);
    }
  }
  assert.equal(key(context('pull_request_target', 'synchronize')), key(context('pull_request_target', 'ready_for_review')));
});

test('unrelated repositories and item numbers are independent', () => {
  const first = context('issues', 'edited');
  const otherItem = context('issues', 'edited');
  otherItem.event.issue.number++;
  assert.notEqual(key(first), key(otherItem));
  assert.notEqual(key(first), key(context('issues', 'edited', { repository: 'other/reports' })));
});

test('only superseding actions cancel a running dispatch', () => {
  for (const action of ['opened', 'reopened', 'created', 'edited', 'synchronize', 'ready_for_review', 'labeled', 'unlabeled']) {
    assert.equal(cancels(context('pull_request_target', action)), ['edited', 'synchronize', 'ready_for_review'].includes(action));
  }
});
