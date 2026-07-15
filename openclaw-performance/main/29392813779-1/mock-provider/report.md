# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 9 (FAIL:3, PASS:6) |

## Proof Completeness

- Completeness: incomplete: 3, complete: 6
- Required obligations: 142 total, 3 missing, 0 failed
- Categories: command: 79, artifact: 9, cleanup: 9, collector: 9, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260715-055811-273d5d` |
| Generated | 2026-07-15T06:03:04.888Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 9 |
| Scenarios | 3 |
| States | 3 |
| FAIL | 3 |
| PASS | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 845.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 845.3 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 854.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 854.1 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 852.5 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 852.5 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 852.5MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3128ms | 845.4MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 164.4% | 3812ms | 3555ms | 3665ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 845.3 MB | 1657.1 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 854.1 MB | 1679.2 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 852.5 MB | 1688.8 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3052ms | 845.4 MB | 850.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3128ms | 846.5 MB | 851.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3187ms | 841.1 MB | 846 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 850.8 MB | 3676ms | 3493ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 864 MB | 3812ms | 3755ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 872.7 MB | 3870ms | 3555ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 872.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 872.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 872.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 659.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 183% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 836.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 177% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 854.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 164% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 845 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 854.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 164% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-gateway-performance-man-005107f3-kova-260715-055811-273d5d
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 2ms; post-ready p95 3ms; failures at least 194; final failures not-collected; slowest startup-sample/cold-start 321ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 845.3 MB; tracked total 1657.1 MB; max CPU 151%; samples 18; roles gateway 845.3MB/151%, command-tree 818.5MB/165%, gateway-tree 845.3MB/151%, status-cli 818.5MB/165%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 428.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-gateway-performance-man-1e8be6a8-kova-260715-055811-273d5d
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 2ms; post-ready p95 3ms; failures at least 190; final failures not-collected; slowest startup-sample/cold-start 477ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 854.1 MB; tracked total 1679.2 MB; max CPU 136%; samples 17; roles gateway 854.1MB/136%, command-tree 825.1MB/165%, gateway-tree 854.1MB/136%, plugin-cli 825.1MB/165%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 394.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-gateway-performance-man-958fde53-kova-260715-055811-273d5d
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 5ms; failures at least 192; final failures not-collected; slowest startup-sample/cold-start 574ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 852.5 MB; tracked total 1688.8 MB; max CPU 164%; samples 20; roles gateway 852.5MB/164%, command-tree 837.4MB/183%, gateway-tree 852.5MB/164%, model-cli 659.2MB/183%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 477.24ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-8e2a29af-kova-260715-055811-273d5d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 850.8 MB; tracked total 850.8 MB; max CPU 164.4%; samples 14; roles agent-cli 850.8MB/164.4%, agent-process 850.8MB/164.4%, command-tree 850.8MB/164.4%, status-cli 841.6MB/163.7%
- agent: turn 3676ms; cold/warm 3676ms/3493ms; cold-warm delta 183ms; pre-provider 3504ms; provider 4ms; metadata scans 10 (238.68ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3666.85ms; max 3676ms; pre-provider p95 3496.35ms
- agent CLI attribution: cold known 124ms / unattributed 3380ms; warm known 115ms / unattributed 3236ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3676ms; pre-provider 3504ms; provider 4ms; post-provider 168ms; response true
    - active window: metadata scans 5 (122.55ms total, max 69.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3504ms; provider 4ms; post-provider 168ms; unknown 3175.49ms; source plugins.metadata.scan 328.51ms
  - warm: total 3493ms; pre-provider 3351ms; provider 1ms; post-provider 141ms; response true
    - active window: metadata scans 5 (116.13ms total, max 65.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3351ms; provider 1ms; post-provider 141ms; unknown 3022.49ms; source plugins.metadata.scan 328.51ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3504 ms | 124 ms | 3380 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-8e2a29af-kova-260715-055811-273d5d/openclaw/timeline.jsonl |
  | warm | 3351 ms | 115 ms | 3236 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-8e2a29af-kova-260715-055811-273d5d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 124 ms | 70 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 115 ms | 65 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-2ab680e0-kova-260715-055811-273d5d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 864 MB; tracked total 864 MB; max CPU 165.9%; samples 14; roles agent-cli 864MB/165.9%, agent-process 864MB/165.9%, command-tree 864MB/165.9%, status-cli 845MB/164.7%
- agent: turn 3812ms; cold/warm 3812ms/3755ms; cold-warm delta 57ms; pre-provider 3665ms; provider 3ms; metadata scans 10 (261.58ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3809.15ms; max 3812ms; pre-provider p95 3662.5ms
- agent CLI attribution: cold known 121ms / unattributed 3544ms; warm known 139ms / unattributed 3476ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3812ms; pre-provider 3665ms; provider 3ms; post-provider 144ms; response true
    - active window: metadata scans 5 (121.75ms total, max 62.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3665ms; provider 3ms; post-provider 144ms; unknown 3317.67ms; source plugins.metadata.scan 347.33ms
  - warm: total 3755ms; pre-provider 3615ms; provider 2ms; post-provider 138ms; response true
    - active window: metadata scans 5 (139.83ms total, max 76.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3615ms; provider 2ms; post-provider 138ms; unknown 3267.67ms; source plugins.metadata.scan 347.33ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3665 ms | 121 ms | 3544 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-2ab680e0-kova-260715-055811-273d5d/openclaw/timeline.jsonl |
  | warm | 3615 ms | 139 ms | 3476 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-2ab680e0-kova-260715-055811-273d5d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 121 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 139 ms | 76 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-67b331a3-kova-260715-055811-273d5d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 872.7 MB; tracked total 872.7 MB; max CPU 163.9%; samples 14; roles agent-cli 872.7MB/163.9%, agent-process 872.7MB/163.9%, command-tree 872.7MB/163.9%, status-cli 820.8MB/162.4%
- agent: turn 3870ms; cold/warm 3870ms/3555ms; cold-warm delta 315ms; pre-provider 3727ms; provider 2ms; metadata scans 10 (245.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3854.25ms; max 3870ms; pre-provider p95 3711.9ms
- agent CLI attribution: cold known 124ms / unattributed 3603ms; warm known 123ms / unattributed 3302ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3870ms; pre-provider 3727ms; provider 2ms; post-provider 141ms; response true
    - active window: metadata scans 5 (122.93ms total, max 67.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3727ms; provider 2ms; post-provider 141ms; unknown 3385.85ms; source plugins.metadata.scan 341.15ms
  - warm: total 3555ms; pre-provider 3425ms; provider 1ms; post-provider 129ms; response true
    - active window: metadata scans 5 (122.94ms total, max 61.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3425ms; provider 1ms; post-provider 129ms; unknown 3083.85ms; source plugins.metadata.scan 341.15ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3727 ms | 124 ms | 3603 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-67b331a3-kova-260715-055811-273d5d/openclaw/timeline.jsonl |
  | warm | 3425 ms | 123 ms | 3302 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-67b331a3-kova-260715-055811-273d5d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 124 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 123 ms | 62 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260715-055811-273d5d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260715-055811-273d5d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260715-055811-273d5d-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-gateway-performance-man-005107f3-kova-260715-055811-273d5d
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-gateway-performance-man-1e8be6a8-kova-260715-055811-273d5d
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-gateway-performance-man-958fde53-kova-260715-055811-273d5d
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260715-055811-273d5d
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-bundled-runtime-deps-mi-39c08a4a-kova-260715-055811-273d5d
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-bundled-runtime-deps-mi-150715ba-kova-260715-055811-273d5d
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-8e2a29af-kova-260715-055811-273d5d
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-2ab680e0-kova-260715-055811-273d5d
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260715-055811-273d5d/kova-agent-cold-warm-message-67b331a3-kova-260715-055811-273d5d

## Target Cleanup

- Runtime: `kova-local-mrlo5im9-3z8-f1ae91dc`
- Result: removed
- Duration: 437ms

