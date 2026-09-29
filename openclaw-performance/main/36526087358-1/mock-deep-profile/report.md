# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1636 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.6 MB, gateway 1636 MB, command-tree 1227.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1636 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.6 MB, gateway 1636 MB, command-tree 1227.3 MB |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260929-052659-970f60` |
| Generated | 2026-09-29T05:30:35.258Z |
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
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1636 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.6 MB, gateway 1636 MB, command-tree 1227.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 61 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1808.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 61 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[273%, 378.9%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1623.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[273%, 310.6%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1623.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 12515ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1623.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 61ms | 1636MB | n/a | 300.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 310.6% | 10188ms | 14023ms | 9278ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 61ms | 1636 MB | 2982.1 MB | n/a | n/a | gateway peak RSS 1636 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.6 MB, gateway 1636 MB, command-tree 1227.3 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1805.5 MB | 10188ms | 14023ms | agent-cli max CPU interval \[273%, 378.9%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1808.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 332.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 196.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 378.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1732.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 378.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1636 MB (scenario gateway-performance/many-bundled-plugins); CPU 300.1% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1227.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 355.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1623.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 310.6% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 506.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 204.2% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 396.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 192% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260929-052659-970f60/kova-gateway-performance-man-d48bd949-kova-260929-052659-970f60
Measurements:
- startup: listening 0ms; health 61ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 61ms; post-ready p95 4ms; failures 0; final failures 0; slowest startup-sample/cold-start 61ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1636 MB; tracked total 2982.1 MB; max CPU 300.1%; samples 106; roles gateway-tree 1808.6MB/332.1%, gateway 1636MB/300.1%, command-tree 1227.3MB/270.1%, status-cli 1227.3MB/270.1%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1707.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 16/16/14
- Violations:
  - gateway peak RSS 1636 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.6 MB, gateway 1636 MB, command-tree 1227.3 MB
  - gateway-tree peak RSS 1808.6 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260929-052659-970f60/kova-agent-cold-warm-message-2c26dd1d-kova-260929-052659-970f60
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1623.4 MB; tracked total 1805.5 MB; max CPU 310.6%; samples 129; roles command-tree 1732.3MB/378.9%, agent-cli 196.1MB/378.9%, agent-process 1623.4MB/310.6%, status-cli 1082.8MB/355.7%; performance thresholds skipped 15 (instrumented)
- agent: turn 14023ms; cold/warm 10188ms/14023ms; cold-warm delta 0ms; pre-provider 12515ms; provider 1ms; metadata scans 8 (250.95ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 13831.25ms; max 14023ms; pre-provider p95 12353.15ms
- agent CLI attribution: cold known 6788ms / unattributed 2490ms; warm known 8378ms / unattributed 4137ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3444.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 41/41/18
- Violations:
  - agent-cli max CPU interval \[273%, 378.9%\] crosses threshold 300%; CPU measurement is inconclusive
  - agent-process max CPU interval \[273%, 310.6%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm provider was fast (1ms), but OpenClaw spent 12515ms before provider work.
- Agent turns:
  - cold: total 10188ms; pre-provider 9278ms; provider 2ms; post-provider 908ms; response true
    - active window: metadata scans 4 (127.73ms total, max 63.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9278ms; provider 2ms; post-provider 908ms; unknown 5393.67ms; source agent.prepare 3486.38ms; plugins.metadata.scan 397.95ms
  - warm: total 14023ms; pre-provider 12515ms; provider 1ms; post-provider 1507ms; response true
    - active window: metadata scans 4 (123.22ms total, max 71.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12515ms; provider 1ms; post-provider 1507ms; unknown 8630.67ms; source agent.prepare 3486.38ms; plugins.metadata.scan 397.95ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9278 ms | 6788 ms | 2490 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260929-052659-970f60/kova-agent-cold-warm-message-2c26dd1d-kova-260929-052659-970f60/openclaw/timeline.jsonl |
  | warm | 12515 ms | 8378 ms | 4137 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260929-052659-970f60/kova-agent-cold-warm-message-2c26dd1d-kova-260929-052659-970f60/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3629 ms | 2502 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2705 ms | 727 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1654 ms | 742 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 128 ms | 64 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 72 ms | 72 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4809 ms | 3445 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2988 ms | 813 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1833 ms | 676 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 124 ms | 72 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 73 ms | 73 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260929-052659-970f60-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260929-052659-970f60-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260929-052659-970f60-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260929-052659-970f60/kova-gateway-performance-man-d48bd949-kova-260929-052659-970f60
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260929-052659-970f60/kova-agent-cold-warm-message-2c26dd1d-kova-260929-052659-970f60

## Target Cleanup

- Runtime: `kova-local-mum8i51f-3sq-dd62f3e5`
- Result: removed
- Duration: 575ms

