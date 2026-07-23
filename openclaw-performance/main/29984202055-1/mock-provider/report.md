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
| Run ID | `kova-260723-061024-70cbbd` |
| Generated | 2026-07-23T06:15:12.451Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 907.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 907.6 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 918.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 918.3 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 920 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 920 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 918.3MB | n/a | 154% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2978ms | 915.3MB | n/a | 151% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.7% | 4349ms | 4252ms | 4048ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 907.6 MB | 1612.3 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 918.3 MB | 1651.7 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 920 MB | 1683 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3067ms | 908.8 MB | 908.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2849ms | 916.9 MB | 922.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2978ms | 915.3 MB | 915.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 977.4 MB | 4220ms | 4252ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 958.5 MB | 4363ms | 4265ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 996.1 MB | 4349ms | 4208ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 996.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 996.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 996.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 920 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 771.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 920 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 596.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 528.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-gateway-performance-man-005107f3-kova-260723-061024-70cbbd
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 193; final failures not-collected; slowest startup-sample/cold-start 561ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 907.6 MB; tracked total 1612.3 MB; max CPU 146%; samples 20; roles gateway 907.6MB/146%, command-tree 704.7MB/149%, gateway-tree 907.6MB/146%, status-cli 704.7MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 678.49ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-gateway-performance-man-1e8be6a8-kova-260723-061024-70cbbd
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 191; final failures not-collected; slowest startup-sample/cold-start 440ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 918.3 MB; tracked total 1651.7 MB; max CPU 154%; samples 20; roles gateway 918.3MB/154%, command-tree 733.9MB/155%, gateway-tree 918.3MB/154%, model-cli 596.6MB/155%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 652.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-gateway-performance-man-958fde53-kova-260723-061024-70cbbd
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 191; final failures not-collected; slowest startup-sample/cold-start 420ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 920 MB; tracked total 1683 MB; max CPU 154%; samples 20; roles gateway 920MB/154%, command-tree 763.7MB/155.9%, gateway-tree 920MB/154%, status-cli 763.7MB/155.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 634.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-8e2a29af-kova-260723-061024-70cbbd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 977.4 MB; tracked total 977.4 MB; max CPU 153.8%; samples 16; roles agent-cli 977.4MB/153.8%, agent-process 977.4MB/153.8%, command-tree 977.4MB/153.8%, status-cli 523.8MB/151.4%
- agent: turn 4252ms; cold/warm 4220ms/4252ms; cold-warm delta 0ms; pre-provider 4003ms; provider 1ms; metadata scans 14 (261.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4250.4ms; max 4252ms; pre-provider p95 3999.5ms
- agent CLI attribution: cold known 122ms / unattributed 3811ms; warm known 139ms / unattributed 3864ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4220ms; pre-provider 3933ms; provider 2ms; post-provider 285ms; response true
    - active window: metadata scans 7 (123.2ms total, max 57.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3933ms; provider 2ms; post-provider 285ms; unknown 3469.4ms; source plugins.metadata.scan 463.6ms
  - warm: total 4252ms; pre-provider 4003ms; provider 1ms; post-provider 248ms; response true
    - active window: metadata scans 7 (138.36ms total, max 59.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4003ms; provider 1ms; post-provider 248ms; unknown 3539.4ms; source plugins.metadata.scan 463.6ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3933 ms | 122 ms | 3811 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-8e2a29af-kova-260723-061024-70cbbd/openclaw/timeline.jsonl |
  | warm | 4003 ms | 139 ms | 3864 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-8e2a29af-kova-260723-061024-70cbbd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 122 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 139 ms | 59 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-2ab680e0-kova-260723-061024-70cbbd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 958.5 MB; tracked total 958.5 MB; max CPU 155.7%; samples 16; roles agent-cli 958.5MB/155.7%, agent-process 958.5MB/155.7%, command-tree 958.5MB/155.7%, status-cli 527MB/153.7%
- agent: turn 4363ms; cold/warm 4363ms/4265ms; cold-warm delta 98ms; pre-provider 4069ms; provider 3ms; metadata scans 14 (266.82ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4358.1ms; max 4363ms; pre-provider p95 4066.45ms
- agent CLI attribution: cold known 133ms / unattributed 3936ms; warm known 132ms / unattributed 3886ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 70.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4363ms; pre-provider 4069ms; provider 3ms; post-provider 291ms; response true
    - active window: metadata scans 7 (134.79ms total, max 59.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4069ms; provider 3ms; post-provider 291ms; unknown 3595.17ms; source plugins.metadata.scan 473.83ms
  - warm: total 4265ms; pre-provider 4018ms; provider 1ms; post-provider 246ms; response true
    - active window: metadata scans 7 (132.03ms total, max 58.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4018ms; provider 1ms; post-provider 246ms; unknown 3544.17ms; source plugins.metadata.scan 473.83ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4069 ms | 133 ms | 3936 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-2ab680e0-kova-260723-061024-70cbbd/openclaw/timeline.jsonl |
  | warm | 4018 ms | 132 ms | 3886 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-2ab680e0-kova-260723-061024-70cbbd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 132 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-67b331a3-kova-260723-061024-70cbbd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 996.1 MB; tracked total 996.1 MB; max CPU 156.7%; samples 16; roles agent-cli 996.1MB/156.7%, agent-process 996.1MB/156.7%, command-tree 996.1MB/156.7%, status-cli 771.2MB/153.8%
- agent: turn 4349ms; cold/warm 4349ms/4208ms; cold-warm delta 141ms; pre-provider 4048ms; provider 3ms; metadata scans 14 (275.69ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4341.95ms; max 4349ms; pre-provider p95 4044.1ms
- agent CLI attribution: cold known 134ms / unattributed 3914ms; warm known 142ms / unattributed 3828ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4349ms; pre-provider 4048ms; provider 3ms; post-provider 298ms; response true
    - active window: metadata scans 7 (134.46ms total, max 57.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4048ms; provider 3ms; post-provider 298ms; unknown 3557.46ms; source plugins.metadata.scan 490.54ms
  - warm: total 4208ms; pre-provider 3970ms; provider 1ms; post-provider 237ms; response true
    - active window: metadata scans 7 (141.23ms total, max 63.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3970ms; provider 1ms; post-provider 237ms; unknown 3479.46ms; source plugins.metadata.scan 490.54ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4048 ms | 134 ms | 3914 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-67b331a3-kova-260723-061024-70cbbd/openclaw/timeline.jsonl |
  | warm | 3970 ms | 142 ms | 3828 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-67b331a3-kova-260723-061024-70cbbd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 134 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 63 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-061024-70cbbd-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-061024-70cbbd-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-061024-70cbbd-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-gateway-performance-man-005107f3-kova-260723-061024-70cbbd
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-gateway-performance-man-1e8be6a8-kova-260723-061024-70cbbd
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-gateway-performance-man-958fde53-kova-260723-061024-70cbbd
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-061024-70cbbd
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-061024-70cbbd
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-bundled-runtime-deps-mi-150715ba-kova-260723-061024-70cbbd
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-8e2a29af-kova-260723-061024-70cbbd
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-2ab680e0-kova-260723-061024-70cbbd
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-061024-70cbbd/kova-agent-cold-warm-message-67b331a3-kova-260723-061024-70cbbd

## Target Cleanup

- Runtime: `kova-local-mrx441uf-42z-f48d0453`
- Result: removed
- Duration: 383ms

