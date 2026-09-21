# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[229.7%, 269.6%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[229.7%, 269.6%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 2 (BLOCKED:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260921-052942-8f4f27` |
| Generated | 2026-09-21T05:33:14.505Z |
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
| BLOCKED | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[229.7%, 269.6%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 205 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 188.1%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 205 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[229.7%, 564.3%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 205 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[151.8%, 244.9%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 205 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[248.5%, 310.2%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1180.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 205ms | 1004MB | n/a | 269.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | BLOCKED:1 | n/a | 0MB | n/a | 271.9% | 6770ms | 8159ms | 6170ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 205ms | 1004 MB | 2011.7 MB | n/a | n/a | gateway max CPU interval \[229.7%, 269.6%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1355.8 MB | 6770ms | 8159ms | agent-cli max CPU interval \[248.5%, 310.2%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1283.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 310.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1170.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 564.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1283.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 310.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 211.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 376.2% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1180.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 271.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1004 MB (scenario gateway-performance/many-bundled-plugins); CPU 269.6% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 768.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 289.3% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 385 MB (scenario gateway-performance/many-bundled-plugins); CPU 180.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260921-052942-8f4f27/kova-gateway-performance-man-d48bd949-kova-260921-052942-8f4f27
Measurements:
- startup: listening 1ms; health 205ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 204ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 204ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1004 MB; tracked total 2011.7 MB; max CPU 269.6%; samples 73; roles gateway-tree 1170.9MB/564.3%, gateway 1004MB/269.6%, uncategorized 211.2MB/376.2%, command-tree 768.7MB/263.8%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2216.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 14/14/13
- Violations:
  - gateway max CPU interval \[229.7%, 269.6%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 188.1%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[229.7%, 564.3%\] crosses threshold 300%; CPU measurement is inconclusive
  - status-cli max CPU interval \[151.8%, 244.9%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260921-052942-8f4f27/kova-agent-cold-warm-message-2c26dd1d-kova-260921-052942-8f4f27
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1180.1 MB; tracked total 1355.8 MB; max CPU 271.9%; samples 315; roles agent-cli 1283.4MB/310.2%, command-tree 1283.4MB/310.2%, agent-process 1180.1MB/271.9%, status-cli 719.9MB/289.3%; performance thresholds skipped 17 (instrumented)
- agent: turn 8159ms; cold/warm 6770ms/8159ms; cold-warm delta 0ms; pre-provider 7615ms; provider 1ms; metadata scans 16 (572.66ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8089.55ms; max 8159ms; pre-provider p95 7542.75ms
- agent CLI attribution: cold known 4476ms / unattributed 1694ms; warm known 5544ms / unattributed 2071ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59583.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 44/44/18
- Violations:
  - agent-cli max CPU interval \[248.5%, 310.2%\] crosses threshold 300%; CPU measurement is inconclusive
- Agent turns:
  - cold: total 6770ms; pre-provider 6170ms; provider 2ms; post-provider 598ms; response true
    - active window: metadata scans 9 (324.05ms total, max 63.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6170ms; provider 2ms; post-provider 598ms; unknown 4242.78ms; source agent.prepare 1212.5ms; plugins.metadata.scan 714.72ms
  - warm: total 8159ms; pre-provider 7615ms; provider 1ms; post-provider 543ms; response true
    - active window: metadata scans 7 (248.61ms total, max 56.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7615ms; provider 1ms; post-provider 543ms; unknown 5687.78ms; source agent.prepare 1212.5ms; plugins.metadata.scan 714.72ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6170 ms | 4476 ms | 1694 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260921-052942-8f4f27/kova-agent-cold-warm-message-2c26dd1d-kova-260921-052942-8f4f27/openclaw/timeline.jsonl |
  | warm | 7615 ms | 5544 ms | 2071 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260921-052942-8f4f27/kova-agent-cold-warm-message-2c26dd1d-kova-260921-052942-8f4f27/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 4545 ms | 1791 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1435 ms | 614 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 609 ms | 182 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 324 ms | 64 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 81 ms | 81 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 73 ms | 73 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x31 | 31 | 0 | 5218 ms | 2752 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1598 ms | 775 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 604 ms | 179 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x6 | 7 | 0 | 248 ms | 56 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 93 ms | 93 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 75 ms | 75 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260921-052942-8f4f27-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260921-052942-8f4f27-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260921-052942-8f4f27-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260921-052942-8f4f27/kova-gateway-performance-man-d48bd949-kova-260921-052942-8f4f27
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260921-052942-8f4f27/kova-agent-cold-warm-message-2c26dd1d-kova-260921-052942-8f4f27

## Target Cleanup

- Runtime: `kova-local-muat2ttd-3p5-d12a8c3f`
- Result: removed
- Duration: 494ms

