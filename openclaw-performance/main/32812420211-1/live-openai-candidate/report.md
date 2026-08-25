# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 1 (PASS:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260825-052056-09e963` |
| Generated | 2026-08-25T05:22:47.132Z |
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
| PASS | 1 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 125% | 3736ms | 3533ms | 2489ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 665.7 MB | 3736ms | 3533ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 665.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 536.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 125% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 478.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 129.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 17.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260825-052056-09e963/kova-agent-cold-warm-message-2c26dd1d-kova-260825-052056-09e963
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 536.6 MB; tracked total 665.7 MB; max CPU 125%; samples 13; roles command-tree 665.7MB/159.8%, agent-process 536.6MB/125%, status-cli 478.9MB/159.8%, agent-cli 129.1MB/17.3%
- agent: turn 3736ms; cold/warm 3736ms/3533ms; cold-warm delta 203ms; pre-provider 2489ms; provider 1093ms; metadata scans 74 (1225.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3725.85ms; max 3736ms; pre-provider p95 2481.7ms
- agent CLI attribution: cold known 1813ms / unattributed 676ms; warm known 1582ms / unattributed 761ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 812.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3736ms; pre-provider 2489ms; provider 1093ms; post-provider 154ms; response true
    - active window: metadata scans 42 (664.67ms total, max 45.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2489ms; provider 1093ms; post-provider 154ms; unknown 0ms; source plugins.metadata.scan 2340.34ms; agent.prepare 176.64ms
  - warm: total 3533ms; pre-provider 2343ms; provider 1047ms; post-provider 143ms; response true
    - active window: metadata scans 32 (561.17ms total, max 33.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2343ms; provider 1047ms; post-provider 143ms; unknown 0ms; source plugins.metadata.scan 2340.34ms; agent.prepare 176.64ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2489 ms | 1813 ms | 676 ms | 1093 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260825-052056-09e963/kova-agent-cold-warm-message-2c26dd1d-kova-260825-052056-09e963/openclaw/timeline.jsonl |
  | warm | 2343 ms | 1582 ms | 761 ms | 1047 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260825-052056-09e963/kova-agent-cold-warm-message-2c26dd1d-kova-260825-052056-09e963/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 2361 ms | 813 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x12, `agent.startup` x11 | 40 | 0 | 639 ms | 46 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 404 ms | 273 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 92 ms | 23 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x12, `agent.startup` x7 | 19 | 0 | 19 ms | 1 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 7 ms | 7 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1664 ms | 513 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x7, `startup` x12, `agent.startup` x11 | 30 | 0 | 533 ms | 34 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 487 ms | 336 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 87 ms | 23 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x6, `agent.startup` x9 | 15 | 0 | 20 ms | 2 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260825-052056-09e963-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260825-052056-09e963-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260825-052056-09e963-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260825-052056-09e963/kova-agent-cold-warm-message-2c26dd1d-kova-260825-052056-09e963

## Target Cleanup

- Runtime: `kova-local-mt87vjxu-41f-92a2a4f7`
- Result: removed
- Duration: 507ms

