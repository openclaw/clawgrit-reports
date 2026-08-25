# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 2 (PASS:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260825-052102-b23f04` |
| Generated | 2026-08-25T05:23:28.402Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 1 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 2 |
| Scenarios | 2 |
| States | 2 |
| PASS | 2 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5870ms | 595.4MB | n/a | 122% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 138% | 5270ms | 4944ms | 4332ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5870ms | 595.4 MB | 1173.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 894.1 MB | 5270ms | 4944ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 822.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 261% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 673.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 138% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 505.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 645.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 595.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 122% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 480.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 595.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 115% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 377.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 139% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260825-052102-b23f04/kova-agent-cold-warm-message-2c26dd1d-kova-260825-052102-b23f04
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 673.1 MB; tracked total 894.1 MB; max CPU 138%; samples 55; roles command-tree 822.7MB/261%, agent-process 673.1MB/138%, agent-cli 505.9MB/200%, status-cli 645.1MB/193.7%; performance thresholds skipped 15 (instrumented)
- agent: turn 5270ms; cold/warm 5270ms/4944ms; cold-warm delta 326ms; pre-provider 4332ms; provider 3ms; metadata scans 70 (1419.65ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5253.7ms; max 5270ms; pre-provider p95 4325.4ms
- agent CLI attribution: cold known 3252ms / unattributed 1080ms; warm known 2989ms / unattributed 1211ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 922.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 8/8/8
- Agent turns:
  - cold: total 5270ms; pre-provider 4332ms; provider 3ms; post-provider 935ms; response true
    - active window: metadata scans 41 (810.93ms total, max 51.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4332ms; provider 3ms; post-provider 935ms; unknown 1548.77ms; source plugins.metadata.scan 1902.56ms; agent.prepare 880.67ms
  - warm: total 4944ms; pre-provider 4200ms; provider 1ms; post-provider 743ms; response true
    - active window: metadata scans 29 (608.72ms total, max 51.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4200ms; provider 1ms; post-provider 743ms; unknown 1416.77ms; source plugins.metadata.scan 1902.56ms; agent.prepare 880.67ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4332 ms | 3252 ms | 1080 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260825-052102-b23f04/kova-agent-cold-warm-message-2c26dd1d-kova-260825-052102-b23f04/openclaw/timeline.jsonl |
  | warm | 4200 ms | 2989 ms | 1211 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260825-052102-b23f04/kova-agent-cold-warm-message-2c26dd1d-kova-260825-052102-b23f04/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 3101 ms | 922 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 932 ms | 458 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 773 ms | 51 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 508 ms | 200 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 83 ms | 83 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x16, `agent.startup` x6 | 22 | 0 | 22 ms | 1 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 2422 ms | 886 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1008 ms | 519 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 580 ms | 52 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 375 ms | 229 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 120 ms | 120 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260825-052102-b23f04-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260825-052102-b23f04-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260825-052102-b23f04-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260825-052102-b23f04/kova-gateway-performance-man-d48bd949-kova-260825-052102-b23f04
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260825-052102-b23f04/kova-agent-cold-warm-message-2c26dd1d-kova-260825-052102-b23f04

## Target Cleanup

- Runtime: `kova-local-mt87voay-40r-dd8f3230`
- Result: removed
- Duration: 459ms

