# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm agent turn took 16422ms, over threshold 15000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm agent turn took 16422ms, over threshold 15000ms |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261109-052440-37c493` |
| Generated | 2026-11-09T05:37:13.833Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[236.4%, 329.2%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 284 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 16422ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2042 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 14837ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2042 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 284ms | 1542.9MB | n/a | 236.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 326.7% | 16169ms | 16422ms | 14394ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 284ms | 1542.9 MB | 2584.4 MB | n/a | n/a | status-cli max CPU interval \[236.4%, 329.2%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2313.9 MB | 16169ms | 16422ms | warm agent turn took 16422ms, over threshold 15000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2241 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 377.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2042 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 326.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1264.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 341% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1646.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 256% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1542.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 236.9% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 95.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 326.7% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 512.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 203.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 511.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.6% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261109-052440-37c493/kova-gateway-performance-man-d48bd949-kova-261109-052440-37c493
Measurements:
- startup: listening 1ms; health 284ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 283ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 283ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1542.9 MB; tracked total 2584.4 MB; max CPU 236.9%; samples 129; roles gateway-tree 1646.7MB/256%, command-tree 867.3MB/329.2%, gateway 1542.9MB/236.9%, status-cli 867.3MB/329.2%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 1827.09ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/6
- Violations:
  - status-cli max CPU interval \[236.4%, 329.2%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261109-052440-37c493/kova-agent-cold-warm-message-2c26dd1d-kova-261109-052440-37c493
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 2042 MB; tracked total 2313.9 MB; max CPU 326.7%; samples 170; roles command-tree 2241MB/377.6%, agent-process 2042MB/326.7%, status-cli 1264.8MB/341%, agent-cli 322.9MB/204.1%; performance thresholds skipped 15 (instrumented)
- agent: turn 16422ms; cold/warm 16169ms/16422ms; cold-warm delta 0ms; pre-provider 14837ms; provider 1ms; metadata scans 14 (550.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 16409.35ms; max 16422ms; pre-provider p95 14814.85ms
- agent CLI attribution: cold known 8772ms / unattributed 5622ms; warm known 10226ms / unattributed 4611ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2896.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 71/45/3
- Violations:
  - warm agent turn took 16422ms, over threshold 15000ms
  - warm provider was fast (1ms), but OpenClaw spent 14837ms before provider work.
- Agent turns:
  - cold: total 16169ms; pre-provider 14394ms; provider 3ms; post-provider 1772ms; response true
    - active window: metadata scans 7 (300.21ms total, max 105.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14394ms; provider 3ms; post-provider 1772ms; unknown 7221.99ms; source agent.prepare 6457.34ms; plugins.metadata.scan 714.67ms
  - warm: total 16422ms; pre-provider 14837ms; provider 1ms; post-provider 1584ms; response true
    - active window: metadata scans 7 (249.99ms total, max 91.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14837ms; provider 1ms; post-provider 1584ms; unknown 7664.99ms; source agent.prepare 6457.34ms; plugins.metadata.scan 714.67ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 14394 ms | 8772 ms | 5622 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261109-052440-37c493/kova-agent-cold-warm-message-2c26dd1d-kova-261109-052440-37c493/openclaw/timeline.jsonl |
  | warm | 14837 ms | 10226 ms | 4611 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261109-052440-37c493/kova-agent-cold-warm-message-2c26dd1d-kova-261109-052440-37c493/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 4392 ms | 1413 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3791 ms | 1771 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3048 ms | 1138 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 299 ms | 106 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 272 ms | 272 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 5054 ms | 2896 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 4248 ms | 1418 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3410 ms | 1104 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 275 ms | 275 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 249 ms | 92 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261109-052440-37c493-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261109-052440-37c493-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261109-052440-37c493-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261109-052440-37c493/kova-gateway-performance-man-d48bd949-kova-261109-052440-37c493
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261109-052440-37c493/kova-agent-cold-warm-message-2c26dd1d-kova-261109-052440-37c493

## Target Cleanup

- Runtime: `kova-local-mw8th37i-3st-e3bb9df5`
- Result: removed
- Duration: 572ms

