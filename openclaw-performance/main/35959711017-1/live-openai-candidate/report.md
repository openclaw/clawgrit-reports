# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1123.9 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1217.6 MB, agent-process 1123.9 MB, status-cli 563.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1123.9 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1217.6 MB, agent-process 1123.9 MB, status-cli 563.5 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260924-052501-d75407` |
| Generated | 2026-09-24T05:27:16.562Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1123.9 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1217.6 MB, agent-process 1123.9 MB, status-cli 563.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1123.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 12825ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1123.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 12825ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1123.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1462ms), but OpenClaw spent 12825ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1123.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 166.4% | 14583ms | 11859ms | 12825ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1217.6 MB | 14583ms | 11859ms | agent-process peak RSS 1123.9 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1217.6 MB, agent-process 1123.9 MB, status-cli 563.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1217.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1123.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 563.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.4% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 176.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 146.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 93.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 114.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260924-052501-d75407/kova-agent-cold-warm-message-2c26dd1d-kova-260924-052501-d75407
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1123.9 MB; tracked total 1217.6 MB; max CPU 166.4%; samples 33; roles command-tree 1217.6MB/176.4%, agent-process 1123.9MB/166.4%, status-cli 563.5MB/176.4%, package-manager 176.2MB/146.7%
- agent: turn 14583ms; cold/warm 14583ms/11859ms; cold-warm delta 2724ms; pre-provider 12825ms; provider 1462ms; metadata scans 21 (645.8ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14446.8ms; max 14583ms; pre-provider p95 12681.2ms
- agent CLI attribution: cold known 8320ms / unattributed 4505ms; warm known 5433ms / unattributed 4516ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4573.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1123.9 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1217.6 MB, agent-process 1123.9 MB, status-cli 563.5 MB
  - cold agent spent 12825ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 12825ms, over threshold 10000ms
  - cold provider was fast (1462ms), but OpenClaw spent 12825ms before provider work.
- Agent turns:
  - cold: total 14583ms; pre-provider 12825ms; provider 1462ms; post-provider 296ms; response true
    - active window: metadata scans 15 (455.59ms total, max 78.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12825ms; provider 1462ms; post-provider 296ms; unknown 10904.69ms; source plugins.metadata.scan 1208.86ms; agent.prepare 711.45ms
  - warm: total 11859ms; pre-provider 9949ms; provider 1392ms; post-provider 518ms; response true
    - active window: metadata scans 6 (190.21ms total, max 71.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9949ms; provider 1392ms; post-provider 518ms; unknown 8028.69ms; source plugins.metadata.scan 1208.86ms; agent.prepare 711.45ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12825 ms | 8320 ms | 4505 ms | 1462 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260924-052501-d75407/kova-agent-cold-warm-message-2c26dd1d-kova-260924-052501-d75407/openclaw/timeline.jsonl |
  | warm | 9949 ms | 5433 ms | 4516 ms | 1392 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260924-052501-d75407/kova-agent-cold-warm-message-2c26dd1d-kova-260924-052501-d75407/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x43 | 43 | 0 | 13796 ms | 4574 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 586 ms | 234 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x12, `startup`, `agent.startup` x2 | 15 | 0 | 456 ms | 79 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 406 ms | 150 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x12, `agent.startup` x2 | 14 | 0 | 28 ms | 3 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x13 | 13 | 0 | 7560 ms | 2668 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 903 ms | 431 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 305 ms | 146 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 191 ms | 72 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260924-052501-d75407-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260924-052501-d75407-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260924-052501-d75407-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260924-052501-d75407/kova-agent-cold-warm-message-2c26dd1d-kova-260924-052501-d75407

## Target Cleanup

- Runtime: `kova-local-muf38ced-3q8-d040ba55`
- Result: removed
- Duration: 489ms

