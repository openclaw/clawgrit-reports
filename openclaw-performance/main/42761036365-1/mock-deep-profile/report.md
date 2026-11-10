# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm agent turn took 20862ms, over threshold 15000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm agent turn took 20862ms, over threshold 15000ms |
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
| Run ID | `kova-261110-051847-79a183` |
| Generated | 2026-11-10T05:32:14.503Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[219.8%, 305.8%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 27 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 20862ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2010.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (281ms), but OpenClaw spent 18975ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2010.8 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 27ms | 1485.4MB | n/a | 230.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 326.8% | 18713ms | 20862ms | 16726ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 27ms | 1485.4 MB | 2480.1 MB | n/a | n/a | status-cli max CPU interval \[219.8%, 305.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2280.7 MB | 18713ms | 20862ms | warm agent turn took 20862ms, over threshold 15000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2207.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 390.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2010.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 326.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1249.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 390.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1585.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 246.4% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1485.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 230.5% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 80.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 326.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 501.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 186.1% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 463.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 204.4% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261110-051847-79a183/kova-gateway-performance-man-d48bd949-kova-261110-051847-79a183
Measurements:
- startup: listening 0ms; health 27ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 27ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 27ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1485.4 MB; tracked total 2480.1 MB; max CPU 230.5%; samples 135; roles gateway-tree 1585.9MB/246.4%, command-tree 859.1MB/305.8%, gateway 1485.4MB/230.5%, status-cli 859.1MB/305.8%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2075.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/6
- Violations:
  - status-cli max CPU interval \[219.8%, 305.8%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261110-051847-79a183/kova-agent-cold-warm-message-2c26dd1d-kova-261110-051847-79a183
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 2010.8 MB; tracked total 2280.7 MB; max CPU 326.8%; samples 203; roles command-tree 2207.2MB/390.2%, agent-process 2010.8MB/326.8%, status-cli 1249.1MB/390.2%, agent-cli 375.6MB/228.8%; performance thresholds skipped 15 (instrumented)
- agent: turn 20862ms; cold/warm 18713ms/20862ms; cold-warm delta 0ms; pre-provider 18975ms; provider 281ms; metadata scans 14 (750.3ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 20754.55ms; max 20862ms; pre-provider p95 18862.55ms
- agent CLI attribution: cold known 9749ms / unattributed 6977ms; warm known 13109ms / unattributed 5866ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3743.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 71/45/3
- Violations:
  - warm agent turn took 20862ms, over threshold 15000ms
  - warm provider was fast (281ms), but OpenClaw spent 18975ms before provider work.
- Agent turns:
  - cold: total 18713ms; pre-provider 16726ms; provider 7ms; post-provider 1980ms; response true
    - active window: metadata scans 7 (331.33ms total, max 114.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 16726ms; provider 7ms; post-provider 1980ms; unknown 5698.17ms; source agent.prepare 10085.39ms; plugins.metadata.scan 942.44ms
  - warm: total 20862ms; pre-provider 18975ms; provider 281ms; post-provider 1606ms; response true
    - active window: metadata scans 7 (418.97ms total, max 136.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 18975ms; provider 281ms; post-provider 1606ms; unknown 7947.17ms; source agent.prepare 10085.39ms; plugins.metadata.scan 942.44ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 16726 ms | 9749 ms | 6977 ms | 7 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261110-051847-79a183/kova-agent-cold-warm-message-2c26dd1d-kova-261110-051847-79a183/openclaw/timeline.jsonl |
  | warm | 18975 ms | 13109 ms | 5866 ms | 281 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261110-051847-79a183/kova-agent-cold-warm-message-2c26dd1d-kova-261110-051847-79a183/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 4907 ms | 1562 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4283 ms | 1121 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3508 ms | 1732 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 331 ms | 114 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 299 ms | 299 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 5813 ms | 3743 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 5803 ms | 1727 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 4973 ms | 1627 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 419 ms | 137 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 391 ms | 391 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261110-051847-79a183-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261110-051847-79a183-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261110-051847-79a183-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261110-051847-79a183/kova-gateway-performance-man-d48bd949-kova-261110-051847-79a183
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261110-051847-79a183/kova-agent-cold-warm-message-2c26dd1d-kova-261110-051847-79a183

## Target Cleanup

- Runtime: `kova-local-mwa8pd6n-3mw-50c1e38d`
- Result: removed
- Duration: 710ms

