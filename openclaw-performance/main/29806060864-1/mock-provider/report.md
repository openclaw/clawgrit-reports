# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 9 |
| Warnings | 1 |
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
| Run ID | `kova-260721-060924-74ca8c` |
| Generated | 2026-07-21T06:13:55.924Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 906.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 906.2 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 917.4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 917.4 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 896.8 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 896.8 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| warning | OpenClaw | bundled-runtime-deps/missing-plugin-index | 3 OpenClaw diagnostics span(s) from a prior gateway PID were interrupted by an intentional restart | gateway.ready pid 14162; sidecars.total pid 14162 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 906.2MB | n/a | 154% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2719ms | 904.3MB | n/a | 148% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.4% | 3656ms | 3526ms | 3371ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 906.2 MB | 1613 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 917.4 MB | 1653.8 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 896.8 MB | 1661.9 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2732ms | 905.9 MB | 910.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2719ms | 904.3 MB | 908.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2583ms | 901.8 MB | 907.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 921.4 MB | 3701ms | 3576ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 901.6 MB | 3656ms | 3471ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 932.9 MB | 3563ms | 3526ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 932.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 932.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 932.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 917.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 917.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 765.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 154.8% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 524.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 155.9% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 501.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-gateway-performance-man-005107f3-kova-260721-060924-74ca8c
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 192; final failures not-collected; slowest startup-sample/cold-start 307ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 906.2 MB; tracked total 1613 MB; max CPU 149%; samples 16; roles gateway 906.2MB/149%, command-tree 708.1MB/153.9%, gateway-tree 906.2MB/149%, plugin-cli 523.6MB/153.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 954.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-gateway-performance-man-1e8be6a8-kova-260721-060924-74ca8c
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 1ms; failures at least 190; final failures not-collected; slowest startup-sample/cold-start 327ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 917.4 MB; tracked total 1653.8 MB; max CPU 156%; samples 16; roles gateway 917.4MB/156%, gateway-tree 917.4MB/156%, command-tree 737.4MB/155%, status-cli 737.4MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 954.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-gateway-performance-man-958fde53-kova-260721-060924-74ca8c
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 191; final failures not-collected; slowest startup-sample/cold-start 201ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 896.8 MB; tracked total 1661.9 MB; max CPU 154%; samples 16; roles gateway 896.8MB/154%, command-tree 765.6MB/155.9%, gateway-tree 896.8MB/154%, plugin-cli 524.6MB/155.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 930.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-8e2a29af-kova-260721-060924-74ca8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 921.4 MB; tracked total 921.4 MB; max CPU 156.9%; samples 13; roles agent-cli 921.4MB/156.9%, agent-process 921.4MB/156.9%, command-tree 921.4MB/156.9%, status-cli 561.6MB/154.8%
- agent: turn 3701ms; cold/warm 3701ms/3576ms; cold-warm delta 125ms; pre-provider 3418ms; provider 2ms; metadata scans 10 (207.79ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3694.75ms; max 3701ms; pre-provider p95 3413.65ms
- agent CLI attribution: cold known 101ms / unattributed 3317ms; warm known 105ms / unattributed 3226ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.62ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3701ms; pre-provider 3418ms; provider 2ms; post-provider 281ms; response true
    - active window: metadata scans 5 (102.4ms total, max 61.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3418ms; provider 2ms; post-provider 281ms; unknown 3132.36ms; source plugins.metadata.scan 285.64ms
  - warm: total 3576ms; pre-provider 3331ms; provider 1ms; post-provider 244ms; response true
    - active window: metadata scans 5 (105.39ms total, max 60.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3331ms; provider 1ms; post-provider 244ms; unknown 3045.36ms; source plugins.metadata.scan 285.64ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3418 ms | 101 ms | 3317 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-8e2a29af-kova-260721-060924-74ca8c/openclaw/timeline.jsonl |
  | warm | 3331 ms | 105 ms | 3226 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-8e2a29af-kova-260721-060924-74ca8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 101 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 105 ms | 60 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-2ab680e0-kova-260721-060924-74ca8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 901.6 MB; tracked total 901.6 MB; max CPU 156.4%; samples 13; roles agent-cli 901.6MB/156.4%, agent-process 901.6MB/156.4%, command-tree 901.6MB/156.4%, status-cli 551.1MB/154.8%
- agent: turn 3656ms; cold/warm 3656ms/3471ms; cold-warm delta 185ms; pre-provider 3371ms; provider 2ms; metadata scans 10 (203.42ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3646.75ms; max 3656ms; pre-provider p95 3364.4ms
- agent CLI attribution: cold known 98ms / unattributed 3273ms; warm known 106ms / unattributed 3133ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 59.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3656ms; pre-provider 3371ms; provider 2ms; post-provider 283ms; response true
    - active window: metadata scans 5 (97.64ms total, max 55.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3371ms; provider 2ms; post-provider 283ms; unknown 3088.86ms; source plugins.metadata.scan 282.14ms
  - warm: total 3471ms; pre-provider 3239ms; provider 1ms; post-provider 231ms; response true
    - active window: metadata scans 5 (105.78ms total, max 59.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3239ms; provider 1ms; post-provider 231ms; unknown 2956.86ms; source plugins.metadata.scan 282.14ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3371 ms | 98 ms | 3273 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-2ab680e0-kova-260721-060924-74ca8c/openclaw/timeline.jsonl |
  | warm | 3239 ms | 106 ms | 3133 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-2ab680e0-kova-260721-060924-74ca8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 98 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 60 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-67b331a3-kova-260721-060924-74ca8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 932.9 MB; tracked total 932.9 MB; max CPU 154.9%; samples 13; roles agent-cli 932.9MB/154.9%, agent-process 932.9MB/154.9%, command-tree 932.9MB/154.9%, status-cli 543.2MB/154.7%
- agent: turn 3563ms; cold/warm 3563ms/3526ms; cold-warm delta 37ms; pre-provider 3272ms; provider 2ms; metadata scans 10 (198.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3561.15ms; max 3563ms; pre-provider p95 3273.9ms
- agent CLI attribution: cold known 94ms / unattributed 3178ms; warm known 104ms / unattributed 3170ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 57.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3563ms; pre-provider 3272ms; provider 2ms; post-provider 289ms; response true
    - active window: metadata scans 5 (94.88ms total, max 53.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3272ms; provider 2ms; post-provider 289ms; unknown 2995.41ms; source plugins.metadata.scan 276.59ms
  - warm: total 3526ms; pre-provider 3274ms; provider 1ms; post-provider 251ms; response true
    - active window: metadata scans 5 (103.9ms total, max 57.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3274ms; provider 1ms; post-provider 251ms; unknown 2997.41ms; source plugins.metadata.scan 276.59ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3272 ms | 94 ms | 3178 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-67b331a3-kova-260721-060924-74ca8c/openclaw/timeline.jsonl |
  | warm | 3274 ms | 104 ms | 3170 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-67b331a3-kova-260721-060924-74ca8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 94 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 104 ms | 58 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-060924-74ca8c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-060924-74ca8c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-060924-74ca8c-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-gateway-performance-man-005107f3-kova-260721-060924-74ca8c
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-gateway-performance-man-1e8be6a8-kova-260721-060924-74ca8c
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-gateway-performance-man-958fde53-kova-260721-060924-74ca8c
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-060924-74ca8c
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-060924-74ca8c
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-bundled-runtime-deps-mi-150715ba-kova-260721-060924-74ca8c
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-8e2a29af-kova-260721-060924-74ca8c
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-2ab680e0-kova-260721-060924-74ca8c
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-060924-74ca8c/kova-agent-cold-warm-message-67b331a3-kova-260721-060924-74ca8c

## Target Cleanup

- Runtime: `kova-local-mru972f6-438-4c069016`
- Result: removed
- Duration: 381ms

