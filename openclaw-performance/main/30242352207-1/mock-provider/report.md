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
| Run ID | `kova-260727-062013-97ed52` |
| Generated | 2026-07-27T06:25:27.096Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 895.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 895.3 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 907.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 907.6 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 898.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 898.1 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 898.1MB | n/a | 157% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5085ms | 876.5MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.9% | 4273ms | 4225ms | 3711ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 895.3 MB | 1701.4 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 907.6 MB | 1653 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 898.1 MB | 1683.1 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5085ms | 883.6 MB | 888.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5125ms | 875.4 MB | 880.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5031ms | 876.5 MB | 882.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 953.7 MB | 4225ms | 4162ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 916.7 MB | 4273ms | 4267ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 968.9 MB | 4310ms | 4225ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 968.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 907.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 968.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 907.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 968.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 864.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 753.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 579.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-gateway-performance-man-005107f3-kova-260727-062013-97ed52
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 202; final failures not-collected; slowest startup-sample/cold-start 388ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 895.3 MB; tracked total 1701.4 MB; max CPU 152%; samples 22; roles gateway 895.3MB/152%, gateway-tree 895.3MB/152%, command-tree 806.6MB/151%, status-cli 806.6MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 692.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-gateway-performance-man-1e8be6a8-kova-260727-062013-97ed52
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 200; final failures not-collected; slowest startup-sample/cold-start 545ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 907.6 MB; tracked total 1653 MB; max CPU 159%; samples 23; roles gateway 907.6MB/159%, gateway-tree 907.6MB/159%, command-tree 750.9MB/155%, plugin-cli 750.9MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 704.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-gateway-performance-man-958fde53-kova-260727-062013-97ed52
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 200; final failures not-collected; slowest startup-sample/cold-start 597ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 898.1 MB; tracked total 1683.1 MB; max CPU 157%; samples 23; roles gateway 898.1MB/157%, gateway-tree 898.1MB/157%, command-tree 785MB/155%, status-cli 785MB/155%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 689.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-8e2a29af-kova-260727-062013-97ed52
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 953.7 MB; tracked total 953.7 MB; max CPU 152.9%; samples 16; roles agent-cli 953.7MB/152.9%, agent-process 953.7MB/152.9%, command-tree 953.7MB/152.9%, status-cli 856.1MB/151.4%
- agent: turn 4225ms; cold/warm 4225ms/4162ms; cold-warm delta 63ms; pre-provider 3684ms; provider 3ms; metadata scans 14 (168.86ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4221.85ms; max 4225ms; pre-provider p95 3683.75ms
- agent CLI attribution: cold known 77ms / unattributed 3607ms; warm known 93ms / unattributed 3586ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 54.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4225ms; pre-provider 3684ms; provider 3ms; post-provider 538ms; response true
    - active window: metadata scans 7 (76.41ms total, max 39.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3684ms; provider 3ms; post-provider 538ms; unknown 3412.39ms; source plugins.metadata.scan 271.61ms
  - warm: total 4162ms; pre-provider 3679ms; provider 1ms; post-provider 482ms; response true
    - active window: metadata scans 7 (92.45ms total, max 54.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3679ms; provider 1ms; post-provider 482ms; unknown 3407.39ms; source plugins.metadata.scan 271.61ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3684 ms | 77 ms | 3607 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-8e2a29af-kova-260727-062013-97ed52/openclaw/timeline.jsonl |
  | warm | 3679 ms | 93 ms | 3586 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-8e2a29af-kova-260727-062013-97ed52/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 77 ms | 39 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 93 ms | 54 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-2ab680e0-kova-260727-062013-97ed52
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 916.7 MB; tracked total 916.7 MB; max CPU 150.4%; samples 16; roles agent-cli 916.7MB/150.4%, command-tree 916.7MB/151.9%, agent-process 916.7MB/150.4%, status-cli 864.2MB/151.9%
- agent: turn 4273ms; cold/warm 4273ms/4267ms; cold-warm delta 6ms; pre-provider 3711ms; provider 2ms; metadata scans 14 (176.85ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4272.7ms; max 4273ms; pre-provider p95 3769.9ms
- agent CLI attribution: cold known 87ms / unattributed 3624ms; warm known 89ms / unattributed 3684ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 51.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4273ms; pre-provider 3711ms; provider 2ms; post-provider 560ms; response true
    - active window: metadata scans 7 (86.81ms total, max 47.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3711ms; provider 2ms; post-provider 560ms; unknown 3430.47ms; source plugins.metadata.scan 280.53ms
  - warm: total 4267ms; pre-provider 3773ms; provider 1ms; post-provider 493ms; response true
    - active window: metadata scans 7 (90.04ms total, max 51.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3773ms; provider 1ms; post-provider 493ms; unknown 3492.47ms; source plugins.metadata.scan 280.53ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3711 ms | 87 ms | 3624 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-2ab680e0-kova-260727-062013-97ed52/openclaw/timeline.jsonl |
  | warm | 3773 ms | 89 ms | 3684 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-2ab680e0-kova-260727-062013-97ed52/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 89 ms | 51 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-67b331a3-kova-260727-062013-97ed52
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 968.9 MB; tracked total 968.9 MB; max CPU 153.9%; samples 16; roles agent-cli 968.9MB/153.9%, agent-process 968.9MB/153.9%, command-tree 968.9MB/153.9%, status-cli 856.4MB/150.9%
- agent: turn 4310ms; cold/warm 4310ms/4225ms; cold-warm delta 85ms; pre-provider 3750ms; provider 2ms; metadata scans 14 (175.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4305.75ms; max 4310ms; pre-provider p95 3749ms
- agent CLI attribution: cold known 83ms / unattributed 3667ms; warm known 92ms / unattributed 3638ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 51.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4310ms; pre-provider 3750ms; provider 2ms; post-provider 558ms; response true
    - active window: metadata scans 7 (83.66ms total, max 45.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3750ms; provider 2ms; post-provider 558ms; unknown 3465.56ms; source plugins.metadata.scan 284.44ms
  - warm: total 4225ms; pre-provider 3730ms; provider 1ms; post-provider 494ms; response true
    - active window: metadata scans 7 (91.57ms total, max 45.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3730ms; provider 1ms; post-provider 494ms; unknown 3445.56ms; source plugins.metadata.scan 284.44ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3750 ms | 83 ms | 3667 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-67b331a3-kova-260727-062013-97ed52/openclaw/timeline.jsonl |
  | warm | 3730 ms | 92 ms | 3638 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-67b331a3-kova-260727-062013-97ed52/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 83 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 92 ms | 45 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260727-062013-97ed52-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260727-062013-97ed52-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260727-062013-97ed52-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-gateway-performance-man-005107f3-kova-260727-062013-97ed52
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-gateway-performance-man-1e8be6a8-kova-260727-062013-97ed52
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-gateway-performance-man-958fde53-kova-260727-062013-97ed52
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260727-062013-97ed52
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-bundled-runtime-deps-mi-39c08a4a-kova-260727-062013-97ed52
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-bundled-runtime-deps-mi-150715ba-kova-260727-062013-97ed52
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-8e2a29af-kova-260727-062013-97ed52
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-2ab680e0-kova-260727-062013-97ed52
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260727-062013-97ed52/kova-agent-cold-warm-message-67b331a3-kova-260727-062013-97ed52

## Target Cleanup

- Runtime: `kova-local-ms2u82lp-42a-fd211920`
- Result: removed
- Duration: 420ms

