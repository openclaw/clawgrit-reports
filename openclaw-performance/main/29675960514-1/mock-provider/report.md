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
| Run ID | `kova-260719-060931-ee3cdc` |
| Generated | 2026-07-19T06:13:57.196Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 893.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 893.1 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 950.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 950.2 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 906.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 906.7 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 906.7MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2981ms | 917MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 158.8% | 3268ms | 3211ms | 3101ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 893.1 MB | 1765.3 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 950.2 MB | 1771.1 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 906.7 MB | 1734.5 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2896ms | 917 MB | 917 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2981ms | 918.2 MB | 918.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2983ms | 899.6 MB | 904.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 968.3 MB | 3309ms | 3211ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 968.3 MB | 3259ms | 3232ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 965.9 MB | 3268ms | 3197ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 968.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 968.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 968.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 854.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 950.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 950.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- plugin-cli: RSS 872.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 533.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-gateway-performance-man-005107f3-kova-260719-060931-ee3cdc
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 193; final failures not-collected; slowest startup-sample/cold-start 489ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 893.1 MB; tracked total 1765.3 MB; max CPU 150%; samples 17; roles gateway 893.1MB/150%, command-tree 872.5MB/160%, gateway-tree 893.1MB/150%, plugin-cli 872.5MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 418.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-gateway-performance-man-1e8be6a8-kova-260719-060931-ee3cdc
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 192; final failures not-collected; slowest startup-sample/cold-start 259ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 950.2 MB; tracked total 1771.1 MB; max CPU 153%; samples 16; roles gateway 950.2MB/153%, command-tree 831.2MB/160%, gateway-tree 950.2MB/153%, status-cli 831.2MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 343.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-gateway-performance-man-958fde53-kova-260719-060931-ee3cdc
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 191; final failures not-collected; slowest startup-sample/cold-start 241ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 906.7 MB; tracked total 1734.5 MB; max CPU 152%; samples 16; roles gateway 906.7MB/152%, command-tree 829.1MB/160%, gateway-tree 906.7MB/152%, status-cli 829.1MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 344.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-8e2a29af-kova-260719-060931-ee3cdc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 968.3 MB; tracked total 968.3 MB; max CPU 161.9%; samples 14; roles agent-cli 968.3MB/161.9%, command-tree 968.3MB/164.9%, agent-process 968.3MB/161.9%, status-cli 842.1MB/164.9%
- agent: turn 3309ms; cold/warm 3309ms/3211ms; cold-warm delta 98ms; pre-provider 3134ms; provider 2ms; metadata scans 10 (203.22ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3304.1ms; max 3309ms; pre-provider p95 3129.35ms
- agent CLI attribution: cold known 104ms / unattributed 3030ms; warm known 100ms / unattributed 2941ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3309ms; pre-provider 3134ms; provider 2ms; post-provider 173ms; response true
    - active window: metadata scans 5 (103.67ms total, max 57.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3134ms; provider 2ms; post-provider 173ms; unknown 2847.8ms; source plugins.metadata.scan 286.2ms
  - warm: total 3211ms; pre-provider 3041ms; provider 1ms; post-provider 169ms; response true
    - active window: metadata scans 5 (99.55ms total, max 56.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3041ms; provider 1ms; post-provider 169ms; unknown 2754.8ms; source plugins.metadata.scan 286.2ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3134 ms | 104 ms | 3030 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-8e2a29af-kova-260719-060931-ee3cdc/openclaw/timeline.jsonl |
  | warm | 3041 ms | 100 ms | 2941 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-8e2a29af-kova-260719-060931-ee3cdc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 104 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 100 ms | 56 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-2ab680e0-kova-260719-060931-ee3cdc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 968.3 MB; tracked total 968.3 MB; max CPU 158.8%; samples 14; roles agent-cli 968.3MB/158.8%, agent-process 968.3MB/158.8%, command-tree 968.3MB/158.8%, status-cli 853.6MB/156.9%
- agent: turn 3259ms; cold/warm 3259ms/3232ms; cold-warm delta 27ms; pre-provider 3091ms; provider 2ms; metadata scans 10 (208.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3257.65ms; max 3259ms; pre-provider p95 3089.95ms
- agent CLI attribution: cold known 102ms / unattributed 2989ms; warm known 106ms / unattributed 2964ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3259ms; pre-provider 3091ms; provider 2ms; post-provider 166ms; response true
    - active window: metadata scans 5 (103.19ms total, max 55.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3091ms; provider 2ms; post-provider 166ms; unknown 2799.38ms; source plugins.metadata.scan 291.62ms
  - warm: total 3232ms; pre-provider 3070ms; provider 1ms; post-provider 161ms; response true
    - active window: metadata scans 5 (105.52ms total, max 59.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3070ms; provider 1ms; post-provider 161ms; unknown 2778.38ms; source plugins.metadata.scan 291.62ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3091 ms | 102 ms | 2989 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-2ab680e0-kova-260719-060931-ee3cdc/openclaw/timeline.jsonl |
  | warm | 3070 ms | 106 ms | 2964 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-2ab680e0-kova-260719-060931-ee3cdc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 102 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-67b331a3-kova-260719-060931-ee3cdc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 965.9 MB; tracked total 965.9 MB; max CPU 157.9%; samples 14; roles agent-cli 965.9MB/157.9%, agent-process 965.9MB/157.9%, command-tree 965.9MB/157.9%, status-cli 854.6MB/157.9%
- agent: turn 3268ms; cold/warm 3268ms/3197ms; cold-warm delta 71ms; pre-provider 3101ms; provider 2ms; metadata scans 10 (201.86ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3264.45ms; max 3268ms; pre-provider p95 3097.6ms
- agent CLI attribution: cold known 103ms / unattributed 2998ms; warm known 96ms / unattributed 2937ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3268ms; pre-provider 3101ms; provider 2ms; post-provider 165ms; response true
    - active window: metadata scans 5 (104.38ms total, max 55.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3101ms; provider 2ms; post-provider 165ms; unknown 2814.19ms; source plugins.metadata.scan 286.81ms
  - warm: total 3197ms; pre-provider 3033ms; provider 1ms; post-provider 163ms; response true
    - active window: metadata scans 5 (97.48ms total, max 56.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3033ms; provider 1ms; post-provider 163ms; unknown 2746.19ms; source plugins.metadata.scan 286.81ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3101 ms | 103 ms | 2998 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-67b331a3-kova-260719-060931-ee3cdc/openclaw/timeline.jsonl |
  | warm | 3033 ms | 96 ms | 2937 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-67b331a3-kova-260719-060931-ee3cdc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 103 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 96 ms | 56 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260719-060931-ee3cdc-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260719-060931-ee3cdc-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260719-060931-ee3cdc-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-gateway-performance-man-005107f3-kova-260719-060931-ee3cdc
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-gateway-performance-man-1e8be6a8-kova-260719-060931-ee3cdc
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-gateway-performance-man-958fde53-kova-260719-060931-ee3cdc
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260719-060931-ee3cdc
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-bundled-runtime-deps-mi-39c08a4a-kova-260719-060931-ee3cdc
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-bundled-runtime-deps-mi-150715ba-kova-260719-060931-ee3cdc
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-8e2a29af-kova-260719-060931-ee3cdc
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-2ab680e0-kova-260719-060931-ee3cdc
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-060931-ee3cdc/kova-agent-cold-warm-message-67b331a3-kova-260719-060931-ee3cdc

## Target Cleanup

- Runtime: `kova-local-mrrebhya-42f-832f4c27`
- Result: removed
- Duration: 390ms

