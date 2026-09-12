# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[192.1%, 426.8%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[192.1%, 426.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, PASS:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260912-052219-453619` |
| Generated | 2026-09-12T05:24:40.560Z |
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
| PASS | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[192.1%, 426.8%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 9 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 243.9%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 9 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[192.1%, 426.8%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 9 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[191.5%, 239.9%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 9ms | 672.2MB | n/a | 426.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 239.9% | 4738ms | 7397ms | 4164ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 9ms | 672.2 MB | 1331.5 MB | n/a | n/a | gateway max CPU interval \[192.1%, 426.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 948.3 MB | 4738ms | 7397ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 875.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 276.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 672.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 426.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 875.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 276.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 672.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 426.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 787 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 239.9% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 74.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 243.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 654.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 239.9% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 79.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 243.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260912-052219-453619/kova-gateway-performance-man-d48bd949-kova-260912-052219-453619
Measurements:
- startup: listening 1ms; health 9ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 8ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 8ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 672.2 MB; tracked total 1331.5 MB; max CPU 426.8%; samples 87; roles gateway 672.2MB/426.8%, gateway-tree 672.2MB/426.8%, command-tree 591.5MB/239.9%, mock-provider 72.4MB/243.9%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 3993.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 10/10/10
- Violations:
  - gateway max CPU interval \[192.1%, 426.8%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 243.9%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[192.1%, 426.8%\] crosses threshold 300%; CPU measurement is inconclusive
  - status-cli max CPU interval \[191.5%, 239.9%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260912-052219-453619/kova-agent-cold-warm-message-2c26dd1d-kova-260912-052219-453619
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 787 MB; tracked total 948.3 MB; max CPU 239.9%; samples 64; roles agent-cli 875.1MB/276.2%, command-tree 875.1MB/276.2%, agent-process 787MB/239.9%, status-cli 654.1MB/219.2%; performance thresholds skipped 15 (instrumented)
- agent: turn 7397ms; cold/warm 4738ms/7397ms; cold-warm delta 0ms; pre-provider 6720ms; provider 3ms; metadata scans 7 (341.13ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7264.05ms; max 7397ms; pre-provider p95 6592.2ms
- agent CLI attribution: cold known 2952ms / unattributed 1212ms; warm known 4263ms / unattributed 2457ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 827.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 24/24/22
- Agent turns:
  - cold: total 4738ms; pre-provider 4164ms; provider 3ms; post-provider 571ms; response true
    - active window: metadata scans 5 (170.93ms total, max 71.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4164ms; provider 3ms; post-provider 571ms; unknown 2432.16ms; source agent.prepare 1253.8ms; plugins.metadata.scan 478.04ms
  - warm: total 7397ms; pre-provider 6720ms; provider 3ms; post-provider 674ms; response true
    - active window: metadata scans 2 (170.2ms total, max 145.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6720ms; provider 3ms; post-provider 674ms; unknown 4988.16ms; source agent.prepare 1253.8ms; plugins.metadata.scan 478.04ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4164 ms | 2952 ms | 1212 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260912-052219-453619/kova-agent-cold-warm-message-2c26dd1d-kova-260912-052219-453619/openclaw/timeline.jsonl |
  | warm | 6720 ms | 4263 ms | 2457 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260912-052219-453619/kova-agent-cold-warm-message-2c26dd1d-kova-260912-052219-453619/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 2211 ms | 772 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1185 ms | 399 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 408 ms | 118 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 171 ms | 71 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 81 ms | 81 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 53 ms | 53 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x13 | 13 | 0 | 2304 ms | 827 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1765 ms | 745 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 848 ms | 287 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 170 ms | 146 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 88 ms | 88 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260912-052219-453619-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260912-052219-453619-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260912-052219-453619-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260912-052219-453619/kova-gateway-performance-man-d48bd949-kova-260912-052219-453619
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260912-052219-453619/kova-agent-cold-warm-message-2c26dd1d-kova-260912-052219-453619

## Target Cleanup

- Runtime: `kova-local-mtxxunjm-40e-0b42daf1`
- Result: removed
- Duration: 482ms

