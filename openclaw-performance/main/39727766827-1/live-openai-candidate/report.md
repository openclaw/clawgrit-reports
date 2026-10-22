# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1443.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1629.4 MB, agent-process 1443.2 MB, status-cli 1063.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1443.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1629.4 MB, agent-process 1443.2 MB, status-cli 1063.7 MB |
| Blocking findings | 11 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261022-052516-8f0f17` |
| Generated | 2026-10-22T05:30:04.319Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1443.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1629.4 MB, agent-process 1443.2 MB, status-cli 1063.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1629.4 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn took 45568ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 43859ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 45208ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 43318ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn took 45568ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 45208ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 43859ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 43318ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1362ms), but OpenClaw spent 43859ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 230.6% | 45568ms | 45208ms | 43859ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1629.4 MB | 45568ms | 45208ms | agent-process peak RSS 1443.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1629.4 MB, agent-process 1443.2 MB, status-cli 1063.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1629.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 244.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1443.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 230.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1063.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 267.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 135.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261022-052516-8f0f17/kova-agent-cold-warm-message-2c26dd1d-kova-261022-052516-8f0f17
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1443.2 MB; tracked total 1629.4 MB; max CPU 230.6%; samples 103; roles command-tree 1629.4MB/244.6%, agent-process 1443.2MB/230.6%, status-cli 1063.7MB/179.1%, agent-cli 267.5MB/135.7%
- agent: turn 45568ms; cold/warm 45568ms/45208ms; cold-warm delta 360ms; pre-provider 43859ms; provider 1362ms; metadata scans 12 (389.01ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 45550ms; max 45568ms; pre-provider p95 43831.95ms
- agent CLI attribution: cold known 23592ms / unattributed 20267ms; warm known 22912ms / unattributed 20406ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 19006.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1443.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1629.4 MB, agent-process 1443.2 MB, status-cli 1063.7 MB
  - command-tree peak RSS 1629.4 MB exceeded threshold 1400 MB
  - cold agent turn took 45568ms, over threshold 45000ms
  - cold agent spent 43859ms before provider work, over threshold 10000ms
  - warm agent turn took 45208ms, over threshold 45000ms
  - warm agent spent 43318ms before provider work, over threshold 10000ms
  - cold agent turn took 45568ms, over threshold 45000ms
  - warm agent turn took 45208ms, over threshold 15000ms
  - cold pre-provider latency was 43859ms, over threshold 10000ms
  - warm pre-provider latency was 43318ms, over threshold 10000ms
  - cold provider was fast (1362ms), but OpenClaw spent 43859ms before provider work.
- Agent turns:
  - cold: total 45568ms; pre-provider 43859ms; provider 1362ms; post-provider 347ms; response true
    - active window: metadata scans 6 (200.53ms total, max 88.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 43859ms; provider 1362ms; post-provider 347ms; unknown 40561.49ms; source agent.prepare 2430.31ms; plugins.metadata.scan 867.2ms
  - warm: total 45208ms; pre-provider 43318ms; provider 1606ms; post-provider 284ms; response true
    - active window: metadata scans 6 (188.48ms total, max 85.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 43318ms; provider 1606ms; post-provider 284ms; unknown 40020.49ms; source agent.prepare 2430.31ms; plugins.metadata.scan 867.2ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 43859 ms | 23592 ms | 20267 ms | 1362 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261022-052516-8f0f17/kova-agent-cold-warm-message-2c26dd1d-kova-261022-052516-8f0f17/openclaw/timeline.jsonl |
  | warm | 43318 ms | 22912 ms | 20406 ms | 1606 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261022-052516-8f0f17/kova-agent-cold-warm-message-2c26dd1d-kova-261022-052516-8f0f17/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 39411 ms | 19007 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3185 ms | 1988 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 978 ms | 442 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 199 ms | 89 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 164 ms | 164 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 37174 ms | 18227 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3392 ms | 2156 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1452 ms | 675 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 190 ms | 86 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 154 ms | 154 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261022-052516-8f0f17-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261022-052516-8f0f17-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261022-052516-8f0f17-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261022-052516-8f0f17/kova-agent-cold-warm-message-2c26dd1d-kova-261022-052516-8f0f17

## Target Cleanup

- Runtime: `kova-local-mvj3kisa-3ee-218f2c37`
- Result: removed
- Duration: 527ms

