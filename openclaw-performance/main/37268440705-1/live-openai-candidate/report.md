# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1208.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1308.7 MB, agent-process 1208.9 MB, status-cli 616.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1208.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1308.7 MB, agent-process 1208.9 MB, status-cli 616.8 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261005-053628-0d267a` |
| Generated | 2026-10-05T05:38:52.134Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 1 / 1 |
| Auth | live (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 1 |
| Scenarios | 1 |
| States | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1208.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1308.7 MB, agent-process 1208.9 MB, status-cli 616.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1208.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 11642ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1208.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 11355ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1208.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 11642ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1208.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 11355ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1208.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1367ms), but OpenClaw spent 11642ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1208.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 212.9% | 13394ms | 13180ms | 11642ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1308.7 MB | 13394ms | 13180ms | agent-process peak RSS 1208.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1308.7 MB, agent-process 1208.9 MB, status-cli 616.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1308.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 222.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1208.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 616.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 188.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 187.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 84.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261005-053628-0d267a/kova-agent-cold-warm-message-2c26dd1d-kova-261005-053628-0d267a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1208.9 MB; tracked total 1308.7 MB; max CPU 212.9%; samples 38; roles command-tree 1308.7MB/222.9%, agent-process 1208.9MB/212.9%, status-cli 616.8MB/188.4%, agent-cli 187.6MB/84.8%
- agent: turn 13394ms; cold/warm 13394ms/13180ms; cold-warm delta 214ms; pre-provider 11642ms; provider 1367ms; metadata scans 12 (345.48ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 13383.3ms; max 13394ms; pre-provider p95 11627.65ms
- agent CLI attribution: cold known 5976ms / unattributed 5666ms; warm known 6518ms / unattributed 4837ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2605.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1208.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1308.7 MB, agent-process 1208.9 MB, status-cli 616.8 MB
  - cold agent spent 11642ms before provider work, over threshold 10000ms
  - warm agent spent 11355ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 11642ms, over threshold 10000ms
  - warm pre-provider latency was 11355ms, over threshold 10000ms
  - cold provider was fast (1367ms), but OpenClaw spent 11642ms before provider work.
- Agent turns:
  - cold: total 13394ms; pre-provider 11642ms; provider 1367ms; post-provider 385ms; response true
    - active window: metadata scans 6 (171.04ms total, max 76.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11642ms; provider 1367ms; post-provider 385ms; unknown 10027.09ms; source agent.prepare 831.88ms; plugins.metadata.scan 783.03ms
  - warm: total 13180ms; pre-provider 11355ms; provider 1485ms; post-provider 340ms; response true
    - active window: metadata scans 6 (174.44ms total, max 76.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11355ms; provider 1485ms; post-provider 340ms; unknown 9740.09ms; source agent.prepare 831.88ms; plugins.metadata.scan 783.03ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11642 ms | 5976 ms | 5666 ms | 1367 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261005-053628-0d267a/kova-agent-cold-warm-message-2c26dd1d-kova-261005-053628-0d267a/openclaw/timeline.jsonl |
  | warm | 11355 ms | 6518 ms | 4837 ms | 1485 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261005-053628-0d267a/kova-agent-cold-warm-message-2c26dd1d-kova-261005-053628-0d267a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 7259 ms | 2390 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 962 ms | 597 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 305 ms | 128 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 170 ms | 76 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 7554 ms | 2605 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1321 ms | 776 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 529 ms | 305 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 174 ms | 77 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261005-053628-0d267a-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261005-053628-0d267a-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261005-053628-0d267a-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261005-053628-0d267a/kova-agent-cold-warm-message-2c26dd1d-kova-261005-053628-0d267a

## Target Cleanup

- Runtime: `kova-local-muuthgb5-3sx-0aa393ac`
- Result: removed
- Duration: 483ms

