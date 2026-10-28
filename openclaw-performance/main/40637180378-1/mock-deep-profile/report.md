# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1575.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1767.5 MB, gateway 1575.7 MB, command-tree 1228.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1575.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1767.5 MB, gateway 1575.7 MB, command-tree 1228.2 MB |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261028-052019-0913a9` |
| Generated | 2026-10-28T05:31:21.952Z |
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
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1575.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1767.5 MB, gateway 1575.7 MB, command-tree 1228.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 44 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1767.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 44 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[292.1%, 316%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2052.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 16405ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2052.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 14862ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2052.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 44ms | 1575.7MB | n/a | 232.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 316% | 15015ms | 16405ms | 13230ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 44ms | 1575.7 MB | 2790.6 MB | n/a | n/a | gateway peak RSS 1575.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1767.5 MB, gateway 1575.7 MB, command-tree 1228.2 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2368.4 MB | 15015ms | 16405ms | agent-process max CPU interval \[292.1%, 316%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2295.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 413.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2052.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 316% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1288.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 413.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1767.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 264.9% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1575.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 232.8% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 95.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 316% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 620.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 211% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 475.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 185% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261028-052019-0913a9/kova-gateway-performance-man-d48bd949-kova-261028-052019-0913a9
Measurements:
- startup: listening 1ms; health 44ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 43ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 43ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1575.7 MB; tracked total 2790.6 MB; max CPU 232.8%; samples 114; roles gateway-tree 1767.5MB/264.9%, command-tree 1228.2MB/329.6%, gateway 1575.7MB/232.8%, status-cli 1228.2MB/329.6%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2277.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 23/23/12
- Violations:
  - gateway peak RSS 1575.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1767.5 MB, gateway 1575.7 MB, command-tree 1228.2 MB
  - gateway-tree peak RSS 1767.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261028-052019-0913a9/kova-agent-cold-warm-message-2c26dd1d-kova-261028-052019-0913a9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 2052.4 MB; tracked total 2368.4 MB; max CPU 316%; samples 163; roles command-tree 2295.6MB/413.3%, agent-process 2052.4MB/316%, status-cli 1288.6MB/413.3%, agent-cli 412MB/229.2%; performance thresholds skipped 15 (instrumented)
- agent: turn 16405ms; cold/warm 15015ms/16405ms; cold-warm delta 0ms; pre-provider 14862ms; provider 1ms; metadata scans 14 (584.8ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 16335.5ms; max 16405ms; pre-provider p95 14780.4ms
- agent CLI attribution: cold known 8525ms / unattributed 4705ms; warm known 10574ms / unattributed 4288ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2888.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 75/44/4
- Violations:
  - agent-process max CPU interval \[292.1%, 316%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm agent turn took 16405ms, over threshold 15000ms
  - warm provider was fast (1ms), but OpenClaw spent 14862ms before provider work.
- Agent turns:
  - cold: total 15015ms; pre-provider 13230ms; provider 2ms; post-provider 1783ms; response true
    - active window: metadata scans 7 (304.06ms total, max 109.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13230ms; provider 2ms; post-provider 1783ms; unknown 4940.15ms; source agent.prepare 7537.84ms; plugins.metadata.scan 752.01ms
  - warm: total 16405ms; pre-provider 14862ms; provider 1ms; post-provider 1542ms; response true
    - active window: metadata scans 7 (280.74ms total, max 101.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14862ms; provider 1ms; post-provider 1542ms; unknown 6572.15ms; source agent.prepare 7537.84ms; plugins.metadata.scan 752.01ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 13230 ms | 8525 ms | 4705 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261028-052019-0913a9/kova-agent-cold-warm-message-2c26dd1d-kova-261028-052019-0913a9/openclaw/timeline.jsonl |
  | warm | 14862 ms | 10574 ms | 4288 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261028-052019-0913a9/kova-agent-cold-warm-message-2c26dd1d-kova-261028-052019-0913a9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3668 ms | 1195 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3349 ms | 1502 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3275 ms | 1727 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 367 ms | 367 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 303 ms | 109 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4967 ms | 2889 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4262 ms | 1812 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3589 ms | 1206 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 364 ms | 364 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 281 ms | 102 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261028-052019-0913a9-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261028-052019-0913a9-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261028-052019-0913a9-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261028-052019-0913a9/kova-gateway-performance-man-d48bd949-kova-261028-052019-0913a9
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261028-052019-0913a9/kova-agent-cold-warm-message-2c26dd1d-kova-261028-052019-0913a9

## Target Cleanup

- Runtime: `kova-local-mvro1a16-3ej-d28acbc8`
- Result: removed
- Duration: 559ms

