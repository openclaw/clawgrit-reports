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
| Run ID | `kova-260717-060117-75396f` |
| Generated | 2026-07-17T06:05:58.426Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 909 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 909 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 904.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 904.2 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 927.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 927.6 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 909MB | n/a | 148% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3381ms | 917.1MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 162.8% | 3732ms | 3565ms | 3550ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 909 MB | 1749.4 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 904.2 MB | 1720.4 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 927.6 MB | 1772.1 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3183ms | 884.4 MB | 889.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3381ms | 920.3 MB | 925.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3457ms | 917.1 MB | 917.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 944.7 MB | 4006ms | 3844ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 919.3 MB | 3424ms | 3565ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 911.3 MB | 3732ms | 3431ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 944.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 944.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 944.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 927.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario bundled-runtime-deps/missing-plugin-index)
- status-cli: RSS 861.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 927.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario bundled-runtime-deps/missing-plugin-index)
- plugin-cli: RSS 848.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 163% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 534 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-gateway-performance-man-005107f3-kova-260717-060117-75396f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 195; final failures not-collected; slowest startup-sample/cold-start 308ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 909 MB; tracked total 1749.4 MB; max CPU 148%; samples 17; roles gateway 909MB/148%, command-tree 840.4MB/162%, gateway-tree 909MB/148%, plugin-cli 840.4MB/162%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 422.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-gateway-performance-man-1e8be6a8-kova-260717-060117-75396f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 191; final failures not-collected; slowest startup-sample/cold-start 329ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 904.2 MB; tracked total 1720.4 MB; max CPU 133%; samples 17; roles gateway 904.2MB/133%, command-tree 816.3MB/165%, gateway-tree 904.2MB/133%, status-cli 730.8MB/165%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 358.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-gateway-performance-man-958fde53-kova-260717-060117-75396f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 193; final failures not-collected; slowest startup-sample/cold-start 302ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 927.6 MB; tracked total 1772.1 MB; max CPU 154%; samples 17; roles gateway 927.6MB/154%, command-tree 848.1MB/163%, gateway-tree 927.6MB/154%, plugin-cli 848.1MB/163%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 379.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-8e2a29af-kova-260717-060117-75396f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 944.7 MB; tracked total 944.7 MB; max CPU 165.9%; samples 14; roles agent-cli 944.7MB/165.9%, agent-process 944.7MB/165.9%, command-tree 944.7MB/165.9%, status-cli 861.5MB/162.9%
- agent: turn 4006ms; cold/warm 4006ms/3844ms; cold-warm delta 162ms; pre-provider 3789ms; provider 2ms; metadata scans 10 (252.75ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3997.9ms; max 4006ms; pre-provider p95 3783.15ms
- agent CLI attribution: cold known 123ms / unattributed 3666ms; warm known 130ms / unattributed 3542ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4006ms; pre-provider 3789ms; provider 2ms; post-provider 215ms; response true
    - active window: metadata scans 5 (122.06ms total, max 76.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3789ms; provider 2ms; post-provider 215ms; unknown 3447.91ms; source plugins.metadata.scan 341.09ms
  - warm: total 3844ms; pre-provider 3672ms; provider 1ms; post-provider 171ms; response true
    - active window: metadata scans 5 (130.69ms total, max 68.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3672ms; provider 1ms; post-provider 171ms; unknown 3330.91ms; source plugins.metadata.scan 341.09ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3789 ms | 123 ms | 3666 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-8e2a29af-kova-260717-060117-75396f/openclaw/timeline.jsonl |
  | warm | 3672 ms | 130 ms | 3542 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-8e2a29af-kova-260717-060117-75396f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 123 ms | 77 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 130 ms | 69 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-2ab680e0-kova-260717-060117-75396f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 919.3 MB; tracked total 919.3 MB; max CPU 162.8%; samples 14; roles agent-cli 919.3MB/162.8%, agent-process 919.3MB/162.8%, command-tree 919.3MB/162.8%, status-cli 844.6MB/162.7%
- agent: turn 3565ms; cold/warm 3424ms/3565ms; cold-warm delta 0ms; pre-provider 3315ms; provider 1ms; metadata scans 10 (207.93ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3557.95ms; max 3565ms; pre-provider p95 3311.6ms
- agent CLI attribution: cold known 104ms / unattributed 3143ms; warm known 105ms / unattributed 3210ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3424ms; pre-provider 3247ms; provider 3ms; post-provider 174ms; response true
    - active window: metadata scans 5 (104.27ms total, max 59.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3247ms; provider 3ms; post-provider 174ms; unknown 2937.45ms; source plugins.metadata.scan 309.55ms
  - warm: total 3565ms; pre-provider 3315ms; provider 1ms; post-provider 249ms; response true
    - active window: metadata scans 5 (103.66ms total, max 59.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3315ms; provider 1ms; post-provider 249ms; unknown 3005.45ms; source plugins.metadata.scan 309.55ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3247 ms | 104 ms | 3143 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-2ab680e0-kova-260717-060117-75396f/openclaw/timeline.jsonl |
  | warm | 3315 ms | 105 ms | 3210 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-2ab680e0-kova-260717-060117-75396f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 104 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 105 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-67b331a3-kova-260717-060117-75396f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 911.3 MB; tracked total 911.3 MB; max CPU 161.7%; samples 14; roles agent-cli 911.3MB/161.7%, agent-process 911.3MB/161.7%, command-tree 911.3MB/161.7%, status-cli 848.9MB/160.9%
- agent: turn 3732ms; cold/warm 3732ms/3431ms; cold-warm delta 301ms; pre-provider 3550ms; provider 2ms; metadata scans 10 (227.61ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3716.95ms; max 3732ms; pre-provider p95 3535.4ms
- agent CLI attribution: cold known 120ms / unattributed 3430ms; warm known 106ms / unattributed 3152ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 74.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3732ms; pre-provider 3550ms; provider 2ms; post-provider 180ms; response true
    - active window: metadata scans 5 (120.02ms total, max 74.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3550ms; provider 2ms; post-provider 180ms; unknown 3236.85ms; source plugins.metadata.scan 313.15ms
  - warm: total 3431ms; pre-provider 3258ms; provider 1ms; post-provider 172ms; response true
    - active window: metadata scans 5 (107.59ms total, max 60.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3258ms; provider 1ms; post-provider 172ms; unknown 2944.85ms; source plugins.metadata.scan 313.15ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3550 ms | 120 ms | 3430 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-67b331a3-kova-260717-060117-75396f/openclaw/timeline.jsonl |
  | warm | 3258 ms | 106 ms | 3152 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-67b331a3-kova-260717-060117-75396f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 120 ms | 74 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260717-060117-75396f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260717-060117-75396f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260717-060117-75396f-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-gateway-performance-man-005107f3-kova-260717-060117-75396f
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-gateway-performance-man-1e8be6a8-kova-260717-060117-75396f
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-gateway-performance-man-958fde53-kova-260717-060117-75396f
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260717-060117-75396f
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260717-060117-75396f
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-bundled-runtime-deps-mi-150715ba-kova-260717-060117-75396f
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-8e2a29af-kova-260717-060117-75396f
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-2ab680e0-kova-260717-060117-75396f
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260717-060117-75396f/kova-agent-cold-warm-message-67b331a3-kova-260717-060117-75396f

## Target Cleanup

- Runtime: `kova-local-mroj57fp-40p-d3d18e06`
- Result: removed
- Duration: 406ms

