# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm provider was fast (1ms), but OpenClaw spent 12561ms before provider work.

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm provider was fast (1ms), but OpenClaw spent 12561ms before provider work. |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260930-052706-8c2791` |
| Generated | 2026-09-30T05:30:43.189Z |
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
| BLOCKED | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[328.9%, 353.7%\] crosses threshold 340%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 31 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[328.9%, 385.8%\] crosses threshold 360%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 31 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[291.7%, 344.6%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1402.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[291.7%, 311.1%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1402.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 12561ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1402.8 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 31ms | 1165.6MB | n/a | 353.7% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 311.1% | 13439ms | 14182ms | 11902ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 31ms | 1165.6 MB | 2374.7 MB | n/a | n/a | gateway max CPU interval \[328.9%, 353.7%\] crosses threshold 340%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1585 MB | 13439ms | 14182ms | agent-cli max CPU interval \[291.7%, 344.6%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1511.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 347.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1338.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 385.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1402.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 311.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1165.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 353.7% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1092.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 347.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 202.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 344.6% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 576.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 211.6% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 407.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 194% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260930-052706-8c2791/kova-gateway-performance-man-d48bd949-kova-260930-052706-8c2791
Measurements:
- startup: listening 2ms; health 31ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 29ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 29ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1165.6 MB; tracked total 2374.7 MB; max CPU 353.7%; samples 132; roles gateway-tree 1338.6MB/385.8%, gateway 1165.6MB/353.7%, command-tree 1083.6MB/292.9%, status-cli 1083.6MB/292.9%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 2386.18ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 20/20/14
- Violations:
  - gateway max CPU interval \[328.9%, 353.7%\] crosses threshold 340%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[328.9%, 385.8%\] crosses threshold 360%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260930-052706-8c2791/kova-agent-cold-warm-message-2c26dd1d-kova-260930-052706-8c2791
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1402.8 MB; tracked total 1585 MB; max CPU 311.1%; samples 146; roles command-tree 1511.6MB/347.1%, agent-process 1402.8MB/311.1%, status-cli 1092.5MB/347.1%, agent-cli 202.4MB/344.6%; performance thresholds skipped 15 (instrumented)
- agent: turn 14182ms; cold/warm 13439ms/14182ms; cold-warm delta 0ms; pre-provider 12561ms; provider 1ms; metadata scans 10 (334.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14144.85ms; max 14182ms; pre-provider p95 12528.05ms
- agent CLI attribution: cold known 7807ms / unattributed 4095ms; warm known 7975ms / unattributed 4586ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2690.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 53/47/14
- Violations:
  - agent-cli max CPU interval \[291.7%, 344.6%\] crosses threshold 300%; CPU measurement is inconclusive
  - agent-process max CPU interval \[291.7%, 311.1%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm provider was fast (1ms), but OpenClaw spent 12561ms before provider work.
- Agent turns:
  - cold: total 13439ms; pre-provider 11902ms; provider 34ms; post-provider 1503ms; response true
    - active window: metadata scans 5 (158.75ms total, max 92.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11902ms; provider 34ms; post-provider 1503ms; unknown 7278.23ms; source agent.prepare 4098.12ms; plugins.metadata.scan 525.65ms
  - warm: total 14182ms; pre-provider 12561ms; provider 1ms; post-provider 1620ms; response true
    - active window: metadata scans 5 (175.84ms total, max 85.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12561ms; provider 1ms; post-provider 1620ms; unknown 7937.23ms; source agent.prepare 4098.12ms; plugins.metadata.scan 525.65ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11902 ms | 7807 ms | 4095 ms | 34 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260930-052706-8c2791/kova-agent-cold-warm-message-2c26dd1d-kova-260930-052706-8c2791/openclaw/timeline.jsonl |
  | warm | 12561 ms | 7975 ms | 4586 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260930-052706-8c2791/kova-agent-cold-warm-message-2c26dd1d-kova-260930-052706-8c2791/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 3596 ms | 1038 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3457 ms | 1972 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 2262 ms | 1027 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 159 ms | 93 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 84 ms | 84 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4204 ms | 2691 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 3480 ms | 979 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1835 ms | 677 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 170 ms | 86 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 101 ms | 101 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260930-052706-8c2791-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260930-052706-8c2791-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260930-052706-8c2791-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260930-052706-8c2791/kova-gateway-performance-man-d48bd949-kova-260930-052706-8c2791
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260930-052706-8c2791/kova-agent-cold-warm-message-2c26dd1d-kova-260930-052706-8c2791

## Target Cleanup

- Runtime: `kova-local-munny50y-3su-c0c146a2`
- Result: removed
- Duration: 688ms

