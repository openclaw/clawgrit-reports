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
| Run ID | `kova-260718-055409-46dddc` |
| Generated | 2026-07-18T05:58:35.044Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 941.5 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 941.5 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 929.4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 929.4 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 897.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 897.1 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 929.4MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2926ms | 889.6MB | n/a | 151% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 162.9% | 3238ms | 3214ms | 3065ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 941.5 MB | 1651.6 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 929.4 MB | 1766.3 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 897.1 MB | 1770.3 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2804ms | 890.8 MB | 895.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2926ms | 889.3 MB | 894.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2988ms | 889.6 MB | 894.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 958.8 MB | 3238ms | 3211ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 942.9 MB | 3237ms | 3219ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 942.8 MB | 3251ms | 3214ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 958.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 958.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 958.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 880.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 941.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 941.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- plugin-cli: RSS 585.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 160.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 533.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 150.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-gateway-performance-man-005107f3-kova-260718-055409-46dddc
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 194; final failures not-collected; slowest startup-sample/cold-start 270ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 941.5 MB; tracked total 1651.6 MB; max CPU 146%; samples 17; roles gateway 941.5MB/146%, command-tree 717.7MB/160.5%, gateway-tree 941.5MB/146%, plugin-cli 571.6MB/160.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 379.24ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-gateway-performance-man-1e8be6a8-kova-260718-055409-46dddc
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 191; final failures not-collected; slowest startup-sample/cold-start 350ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 929.4 MB; tracked total 1766.3 MB; max CPU 153%; samples 16; roles gateway 929.4MB/153%, command-tree 839MB/162.5%, gateway-tree 929.4MB/153%, status-cli 839MB/162.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 332.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-gateway-performance-man-958fde53-kova-260718-055409-46dddc
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 192; final failures not-collected; slowest startup-sample/cold-start 217ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 897.1 MB; tracked total 1770.3 MB; max CPU 153%; samples 16; roles gateway 897.1MB/153%, command-tree 875MB/162.5%, gateway-tree 897.1MB/153%, status-cli 875MB/162.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 336.43ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-8e2a29af-kova-260718-055409-46dddc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 958.8 MB; tracked total 958.8 MB; max CPU 162.9%; samples 14; roles agent-cli 958.8MB/162.9%, command-tree 958.8MB/163.9%, agent-process 958.8MB/162.9%, status-cli 831.1MB/163.9%
- agent: turn 3238ms; cold/warm 3238ms/3211ms; cold-warm delta 27ms; pre-provider 3065ms; provider 3ms; metadata scans 10 (195.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3236.65ms; max 3238ms; pre-provider p95 3064.45ms
- agent CLI attribution: cold known 95ms / unattributed 2970ms; warm known 100ms / unattributed 2954ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 59.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3238ms; pre-provider 3065ms; provider 3ms; post-provider 170ms; response true
    - active window: metadata scans 5 (95.39ms total, max 54.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3065ms; provider 3ms; post-provider 170ms; unknown 2789.13ms; source plugins.metadata.scan 275.87ms
  - warm: total 3211ms; pre-provider 3054ms; provider 1ms; post-provider 156ms; response true
    - active window: metadata scans 5 (100.2ms total, max 59.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3054ms; provider 1ms; post-provider 156ms; unknown 2778.13ms; source plugins.metadata.scan 275.87ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3065 ms | 95 ms | 2970 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-8e2a29af-kova-260718-055409-46dddc/openclaw/timeline.jsonl |
  | warm | 3054 ms | 100 ms | 2954 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-8e2a29af-kova-260718-055409-46dddc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 95 ms | 54 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 100 ms | 59 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-2ab680e0-kova-260718-055409-46dddc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 942.9 MB; tracked total 942.9 MB; max CPU 161.9%; samples 14; roles agent-cli 942.9MB/161.9%, command-tree 942.9MB/162.9%, agent-process 942.9MB/161.9%, status-cli 872.6MB/162.9%
- agent: turn 3237ms; cold/warm 3237ms/3219ms; cold-warm delta 18ms; pre-provider 3061ms; provider 2ms; metadata scans 10 (205.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3236.1ms; max 3237ms; pre-provider p95 3060.4ms
- agent CLI attribution: cold known 101ms / unattributed 2960ms; warm known 103ms / unattributed 2946ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3237ms; pre-provider 3061ms; provider 2ms; post-provider 174ms; response true
    - active window: metadata scans 5 (101.83ms total, max 56.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3061ms; provider 2ms; post-provider 174ms; unknown 2778.47ms; source plugins.metadata.scan 282.53ms
  - warm: total 3219ms; pre-provider 3049ms; provider 1ms; post-provider 169ms; response true
    - active window: metadata scans 5 (103.26ms total, max 58.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3049ms; provider 1ms; post-provider 169ms; unknown 2766.47ms; source plugins.metadata.scan 282.53ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3061 ms | 101 ms | 2960 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-2ab680e0-kova-260718-055409-46dddc/openclaw/timeline.jsonl |
  | warm | 3049 ms | 103 ms | 2946 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-2ab680e0-kova-260718-055409-46dddc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 101 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 103 ms | 58 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-67b331a3-kova-260718-055409-46dddc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 942.8 MB; tracked total 942.8 MB; max CPU 163.4%; samples 14; roles agent-cli 942.8MB/163.4%, agent-process 942.8MB/163.4%, command-tree 942.8MB/163.4%, status-cli 880.8MB/161.9%
- agent: turn 3251ms; cold/warm 3251ms/3214ms; cold-warm delta 37ms; pre-provider 3079ms; provider 3ms; metadata scans 10 (201.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3249.15ms; max 3251ms; pre-provider p95 3077.1ms
- agent CLI attribution: cold known 99ms / unattributed 2980ms; warm known 100ms / unattributed 2941ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 56.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3251ms; pre-provider 3079ms; provider 3ms; post-provider 169ms; response true
    - active window: metadata scans 5 (101.05ms total, max 56.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3079ms; provider 3ms; post-provider 169ms; unknown 2800.24ms; source plugins.metadata.scan 278.76ms
  - warm: total 3214ms; pre-provider 3041ms; provider 1ms; post-provider 172ms; response true
    - active window: metadata scans 5 (100.68ms total, max 56.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3041ms; provider 1ms; post-provider 172ms; unknown 2762.24ms; source plugins.metadata.scan 278.76ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3079 ms | 99 ms | 2980 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-67b331a3-kova-260718-055409-46dddc/openclaw/timeline.jsonl |
  | warm | 3041 ms | 100 ms | 2941 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-67b331a3-kova-260718-055409-46dddc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 100 ms | 56 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260718-055409-46dddc-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260718-055409-46dddc-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260718-055409-46dddc-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-gateway-performance-man-005107f3-kova-260718-055409-46dddc
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-gateway-performance-man-1e8be6a8-kova-260718-055409-46dddc
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-gateway-performance-man-958fde53-kova-260718-055409-46dddc
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260718-055409-46dddc
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-bundled-runtime-deps-mi-39c08a4a-kova-260718-055409-46dddc
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-bundled-runtime-deps-mi-150715ba-kova-260718-055409-46dddc
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-8e2a29af-kova-260718-055409-46dddc
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-2ab680e0-kova-260718-055409-46dddc
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-055409-46dddc/kova-agent-cold-warm-message-67b331a3-kova-260718-055409-46dddc

## Target Cleanup

- Runtime: `kova-local-mrpybwdp-40v-24150c04`
- Result: removed
- Duration: 380ms

