# Kova OpenClaw Runtime Report

> **◐ [INCOMPLETE]** — invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn

## Verdict

| Field | Value |
|---|---|
| Verdict | INCOMPLETE |
| Reason | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 1 (INCOMPLETE:1) |

## Proof Completeness

- Completeness: incomplete: 1
- Required obligations: 22 total, 1 missing, 0 failed
- Categories: command: 7, invariant: 12, artifact: 1, cleanup: 1, collector: 1

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | cold-agent-turn had no valid provider HTTP response status evidence |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260721-060930-60c789` |
| Generated | 2026-07-21T06:10:35.888Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
| Repeat / parallel | 1 / 1 |
| Auth | live (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 1 |
| Scenarios | 1 |
| States | 1 |
| INCOMPLETE | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260721-060930-60c789/kova-agent-cold-warm-message-2c26dd1d-kova-260721-060930-60c789/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | INCOMPLETE:1 | n/a | 0MB | n/a | 154.9% | 6457ms | 6472ms | 4491ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | INCOMPLETE | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 985 MB | 6457ms | 6472ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 985 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 985 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 985 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 560.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: INCOMPLETE
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260721-060930-60c789/kova-agent-cold-warm-message-2c26dd1d-kova-260721-060930-60c789
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 985 MB; tracked total 985 MB; max CPU 154.9%; samples 19; roles agent-cli 985MB/154.9%, command-tree 985MB/156.8%, agent-process 985MB/154.9%, status-cli 560.2MB/156.8%
- agent: turn 6472ms; cold/warm 6457ms/6472ms; cold-warm delta 0ms; pre-provider 4280ms; provider 1593ms; metadata scans 8 (211.06ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6471.25ms; max 6472ms; pre-provider p95 4480.45ms
- agent CLI attribution: cold known 111ms / unattributed 4380ms; warm known 99ms / unattributed 4181ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.01ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6457ms; pre-provider 4491ms; provider 1380ms; post-provider 586ms; response true
    - active window: metadata scans 4 (111.07ms total, max 63.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4491ms; provider 1380ms; post-provider 586ms; unknown 3933.48ms; source plugins.metadata.scan 557.52ms
  - warm: total 6472ms; pre-provider 4280ms; provider 1593ms; post-provider 599ms; response true
    - active window: metadata scans 4 (99.99ms total, max 55.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4280ms; provider 1593ms; post-provider 599ms; unknown 3722.48ms; source plugins.metadata.scan 557.52ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4491 ms | 111 ms | 4380 ms | 1380 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260721-060930-60c789/kova-agent-cold-warm-message-2c26dd1d-kova-260721-060930-60c789/openclaw/timeline.jsonl |
  | warm | 4280 ms | 99 ms | 4181 ms | 1593 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260721-060930-60c789/kova-agent-cold-warm-message-2c26dd1d-kova-260721-060930-60c789/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 111 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 99 ms | 55 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260721-060930-60c789-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260721-060930-60c789-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260721-060930-60c789-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260721-060930-60c789/kova-agent-cold-warm-message-2c26dd1d-kova-260721-060930-60c789

## Target Cleanup

- Runtime: `kova-local-mru97772-42d-8669d226`
- Result: removed
- Duration: 406ms

