# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 8 |
| Warnings | 0 |
| Records | 9 (FAIL:3, PASS:6) |

## Proof Completeness

- Completeness: incomplete: 1, complete: 8
- Required obligations: 142 total, 1 missing, 0 failed
- Categories: command: 79, artifact: 9, cleanup: 9, collector: 9, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260726-061328-b0c51b` |
| Generated | 2026-07-26T06:18:44.522Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 986.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 986.2 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 891.5 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 891.5 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest plugins.metadata.scan age 0ms | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 891.5 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 898.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 898.1 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 898.1MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5148ms | 1001.3MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.9% | 4702ms | 4665ms | 4160ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 986.2 MB | 1782 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 891.5 MB | 1576.2 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 898.1 MB | 1690.8 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5141ms | 1017.9 MB | 1017.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5148ms | 1001.3 MB | 1001.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5157ms | 869.9 MB | 872.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 876.9 MB | 4702ms | 4665ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 902.6 MB | 4712ms | 4631ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 951.6 MB | 4665ms | 4683ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1017.9 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- command-tree: RSS 951.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 986.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- status-cli: RSS 860.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 951.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 951.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 571.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 438.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-gateway-performance-man-005107f3-kova-260726-061328-b0c51b
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 201; final failures not-collected; slowest startup-sample/cold-start 535ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 986.2 MB; tracked total 1782 MB; max CPU 152%; samples 22; roles gateway 986.2MB/152%, command-tree 796.3MB/152%, gateway-tree 986.2MB/152%, status-cli 796.3MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 731.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-gateway-performance-man-1e8be6a8-kova-260726-061328-b0c51b
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 203; final failures 3; slowest startup-sample/cold-start 355ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 891.5 MB; tracked total 1576.2 MB; max CPU 153%; samples 22; roles gateway 891.5MB/153%, gateway-tree 891.5MB/153%, command-tree 684.7MB/148%, status-cli 684.7MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 622.76ms; embedded traces 0; liveness warnings 0; open spans 1 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
  - 1 required OpenClaw diagnostics span(s) were left open; slowest plugins.metadata.scan age 0ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-gateway-performance-man-958fde53-kova-260726-061328-b0c51b
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 202; final failures 3; slowest startup-sample/cold-start 409ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 898.1 MB; tracked total 1690.8 MB; max CPU 153%; samples 22; roles gateway 898.1MB/153%, command-tree 792.7MB/153%, gateway-tree 898.1MB/153%, status-cli 792.7MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 635.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-8e2a29af-kova-260726-061328-b0c51b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 876.9 MB; tracked total 876.9 MB; max CPU 151.9%; samples 16; roles agent-cli 876.9MB/151.9%, agent-process 876.9MB/151.9%, command-tree 876.9MB/151.9%, status-cli 858.5MB/150.9%
- agent: turn 4702ms; cold/warm 4702ms/4665ms; cold-warm delta 37ms; pre-provider 4182ms; provider 3ms; metadata scans 14 (253.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4700.15ms; max 4702ms; pre-provider p95 4181.05ms
- agent CLI attribution: cold known 128ms / unattributed 4054ms; warm known 125ms / unattributed 4038ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4702ms; pre-provider 4182ms; provider 3ms; post-provider 517ms; response true
    - active window: metadata scans 7 (127.82ms total, max 57.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4182ms; provider 3ms; post-provider 517ms; unknown 3795.96ms; source plugins.metadata.scan 386.04ms
  - warm: total 4665ms; pre-provider 4163ms; provider 1ms; post-provider 501ms; response true
    - active window: metadata scans 7 (126.15ms total, max 62.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4163ms; provider 1ms; post-provider 501ms; unknown 3776.96ms; source plugins.metadata.scan 386.04ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4182 ms | 128 ms | 4054 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-8e2a29af-kova-260726-061328-b0c51b/openclaw/timeline.jsonl |
  | warm | 4163 ms | 125 ms | 4038 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-8e2a29af-kova-260726-061328-b0c51b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 62 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-2ab680e0-kova-260726-061328-b0c51b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 902.6 MB; tracked total 902.6 MB; max CPU 152.9%; samples 16; roles agent-cli 902.6MB/152.9%, command-tree 902.6MB/153.7%, agent-process 902.6MB/152.9%, status-cli 858.1MB/153.7%
- agent: turn 4712ms; cold/warm 4712ms/4631ms; cold-warm delta 81ms; pre-provider 4160ms; provider 2ms; metadata scans 14 (248.48ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4707.95ms; max 4712ms; pre-provider p95 4159.8ms
- agent CLI attribution: cold known 126ms / unattributed 4034ms; warm known 121ms / unattributed 4035ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4712ms; pre-provider 4160ms; provider 2ms; post-provider 550ms; response true
    - active window: metadata scans 7 (125.69ms total, max 58.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4160ms; provider 2ms; post-provider 550ms; unknown 3786.98ms; source plugins.metadata.scan 373.02ms
  - warm: total 4631ms; pre-provider 4156ms; provider 0ms; post-provider 475ms; response true
    - active window: metadata scans 7 (122.79ms total, max 63.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4156ms; provider 0ms; post-provider 475ms; unknown 3782.98ms; source plugins.metadata.scan 373.02ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4160 ms | 126 ms | 4034 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-2ab680e0-kova-260726-061328-b0c51b/openclaw/timeline.jsonl |
  | warm | 4156 ms | 121 ms | 4035 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-2ab680e0-kova-260726-061328-b0c51b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-67b331a3-kova-260726-061328-b0c51b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 951.6 MB; tracked total 951.6 MB; max CPU 152.9%; samples 16; roles agent-cli 951.6MB/152.9%, command-tree 951.6MB/154.4%, agent-process 951.6MB/152.9%, status-cli 860.5MB/154.4%
- agent: turn 4683ms; cold/warm 4665ms/4683ms; cold-warm delta 0ms; pre-provider 4198ms; provider 1ms; metadata scans 14 (246.21ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4682.1ms; max 4683ms; pre-provider p95 4194.05ms
- agent CLI attribution: cold known 121ms / unattributed 3998ms; warm known 125ms / unattributed 4073ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4665ms; pre-provider 4119ms; provider 2ms; post-provider 544ms; response true
    - active window: metadata scans 7 (121.35ms total, max 54.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4119ms; provider 2ms; post-provider 544ms; unknown 3744.02ms; source plugins.metadata.scan 374.98ms
  - warm: total 4683ms; pre-provider 4198ms; provider 1ms; post-provider 484ms; response true
    - active window: metadata scans 7 (124.86ms total, max 59.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4198ms; provider 1ms; post-provider 484ms; unknown 3823.02ms; source plugins.metadata.scan 374.98ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4119 ms | 121 ms | 3998 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-67b331a3-kova-260726-061328-b0c51b/openclaw/timeline.jsonl |
  | warm | 4198 ms | 125 ms | 4073 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-67b331a3-kova-260726-061328-b0c51b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-061328-b0c51b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-061328-b0c51b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-061328-b0c51b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-gateway-performance-man-005107f3-kova-260726-061328-b0c51b
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-gateway-performance-man-1e8be6a8-kova-260726-061328-b0c51b
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-gateway-performance-man-958fde53-kova-260726-061328-b0c51b
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-061328-b0c51b
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-061328-b0c51b
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-bundled-runtime-deps-mi-150715ba-kova-260726-061328-b0c51b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-8e2a29af-kova-260726-061328-b0c51b
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-2ab680e0-kova-260726-061328-b0c51b
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-061328-b0c51b/kova-agent-cold-warm-message-67b331a3-kova-260726-061328-b0c51b

## Target Cleanup

- Runtime: `kova-local-ms1ejjmi-4cr-fc8d0abe`
- Result: removed
- Duration: 365ms

