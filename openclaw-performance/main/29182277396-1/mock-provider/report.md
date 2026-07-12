# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway max CPU 300% exceeded threshold 250%

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway max CPU 300% exceeded threshold 250% |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 9 (PASS:8, FAIL:1) |

## Proof Completeness

- Completeness: complete: 9
- Required obligations: 133 total, 0 missing, 0 failed
- Categories: command: 79, artifact: 9, cleanup: 9, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260712-061203-891ac9` |
| Generated | 2026-07-12T06:14:45.863Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.13.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 9 |
| Scenarios | 3 |
| States | 3 |
| PASS | 8 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-runtime-deps/missing-plugin-index | gateway max CPU 300% exceeded threshold 250% | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5194 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3018ms | 788.5MB | n/a | 135% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:2, FAIL:1 | 5194ms | 822.7MB | n/a | 146% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 142.6% | 3603ms | 3649ms | 3462ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3018ms | 800.1 MB | 1424.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2356ms | 773.1 MB | 1241.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3807ms | 788.5 MB | 1294.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6330ms | 826.8 MB | 832 MB | n/a | n/a |  |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 5194ms | 822.7 MB | 827.5 MB | n/a | n/a | gateway max CPU 300% exceeded threshold 250% |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3921ms | 798.3 MB | 803.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 773.2 MB | 3940ms | 3978ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 736.3 MB | 3552ms | 3649ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 813 MB | 3603ms | 3189ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 826.8 MB; CPU 300%; scenario bundled-runtime-deps/missing-plugin-index
- gateway-tree: RSS 826.8 MB; CPU 300%; scenario bundled-runtime-deps/missing-plugin-index
- command-tree: RSS 813 MB; CPU 146.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 813 MB; CPU 144.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 813 MB; CPU 144.7%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 726.2 MB; CPU 146.7%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 519.1 MB; CPU 141.9%; scenario gateway-performance/many-bundled-plugins
- model-cli: RSS 507.6 MB; CPU 143.9%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-bundled-runtime-deps-mi-39c08a4a-kova-260712-061203-891ac9
Measurements:
- startup: listening 4842ms; health 5194ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 244ms; post-ready p95 not-collected; failures 35; final failures 0; slowest startup-sample/cold-start 352ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 822.7 MB; tracked total 827.5 MB; max CPU 300%; samples 6; roles gateway 822.7MB/300%, gateway-tree 822.7MB/300%, command-tree 5MB/0%, uncategorized 5MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 454.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU 300% exceeded threshold 250%

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-8e2a29af-kova-260712-061203-891ac9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 773.2 MB; tracked total 773.2 MB; max CPU 142.6%; samples 14; roles agent-cli 773.2MB/142.6%, agent-process 773.2MB/142.6%, command-tree 773.2MB/143.7%, status-cli 659.9MB/143.7%
- agent: turn 3978ms; cold/warm 3940ms/3978ms; cold-warm delta 0ms; pre-provider 3816ms; provider 2ms; metadata scans 10 (258.29ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3976.1ms; max 3978ms; pre-provider p95 3815.2ms
- agent CLI attribution: cold known 133ms / unattributed 3667ms; warm known 126ms / unattributed 3690ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 80.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3940ms; pre-provider 3800ms; provider 3ms; post-provider 137ms; response true
    - active window: metadata scans 5 (133.26ms total, max 80.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3800ms; provider 3ms; post-provider 137ms; unknown 3800ms; source none
  - warm: total 3978ms; pre-provider 3816ms; provider 2ms; post-provider 160ms; response true
    - active window: metadata scans 5 (125.03ms total, max 72.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3816ms; provider 2ms; post-provider 160ms; unknown 3816ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3800 ms | 133 ms | 3667 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-8e2a29af-kova-260712-061203-891ac9/openclaw/timeline.jsonl |
  | warm | 3816 ms | 126 ms | 3690 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-8e2a29af-kova-260712-061203-891ac9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 133 ms | 80 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 126 ms | 73 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-2ab680e0-kova-260712-061203-891ac9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 736.3 MB; tracked total 736.3 MB; max CPU 144.7%; samples 14; roles agent-cli 736.3MB/144.7%, agent-process 736.3MB/144.7%, command-tree 736.3MB/146.7%, status-cli 726.2MB/146.7%
- agent: turn 3649ms; cold/warm 3552ms/3649ms; cold-warm delta 0ms; pre-provider 3528ms; provider 2ms; metadata scans 10 (244.4ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3644.15ms; max 3649ms; pre-provider p95 3522.4ms
- agent CLI attribution: cold known 108ms / unattributed 3308ms; warm known 136ms / unattributed 3392ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 74.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3552ms; pre-provider 3416ms; provider 3ms; post-provider 133ms; response true
    - active window: metadata scans 5 (109.11ms total, max 59.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3416ms; provider 3ms; post-provider 133ms; unknown 3416ms; source none
  - warm: total 3649ms; pre-provider 3528ms; provider 2ms; post-provider 119ms; response true
    - active window: metadata scans 5 (135.29ms total, max 74.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3528ms; provider 2ms; post-provider 119ms; unknown 3528ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3416 ms | 108 ms | 3308 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-2ab680e0-kova-260712-061203-891ac9/openclaw/timeline.jsonl |
  | warm | 3528 ms | 136 ms | 3392 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-2ab680e0-kova-260712-061203-891ac9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 108 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 136 ms | 75 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-67b331a3-kova-260712-061203-891ac9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 813 MB; tracked total 813 MB; max CPU 141.6%; samples 13; roles agent-cli 813MB/141.6%, agent-process 813MB/141.6%, command-tree 813MB/141.6%, status-cli 515.1MB/140.8%
- agent: turn 3603ms; cold/warm 3603ms/3189ms; cold-warm delta 414ms; pre-provider 3462ms; provider 3ms; metadata scans 10 (219.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3582.3ms; max 3603ms; pre-provider p95 3442ms
- agent CLI attribution: cold known 119ms / unattributed 3343ms; warm known 98ms / unattributed 2964ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3603ms; pre-provider 3462ms; provider 3ms; post-provider 138ms; response true
    - active window: metadata scans 5 (118.76ms total, max 69.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3462ms; provider 3ms; post-provider 138ms; unknown 3462ms; source none
  - warm: total 3189ms; pre-provider 3062ms; provider 1ms; post-provider 126ms; response true
    - active window: metadata scans 5 (100.81ms total, max 61.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3062ms; provider 1ms; post-provider 126ms; unknown 3062ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3462 ms | 119 ms | 3343 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-67b331a3-kova-260712-061203-891ac9/openclaw/timeline.jsonl |
  | warm | 3062 ms | 98 ms | 2964 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-67b331a3-kova-260712-061203-891ac9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 119 ms | 70 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 98 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-061203-891ac9-diagnostic.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-061203-891ac9-diagnostic.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-061203-891ac9-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-gateway-performance-man-005107f3-kova-260712-061203-891ac9
- collector-root gateway-performance#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-gateway-performance-man-1e8be6a8-kova-260712-061203-891ac9
- collector-root gateway-performance#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-gateway-performance-man-958fde53-kova-260712-061203-891ac9
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260712-061203-891ac9
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-bundled-runtime-deps-mi-39c08a4a-kova-260712-061203-891ac9
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-bundled-runtime-deps-mi-150715ba-kova-260712-061203-891ac9
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-8e2a29af-kova-260712-061203-891ac9
- collector-root agent-cold-warm-message#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-2ab680e0-kova-260712-061203-891ac9
- collector-root agent-cold-warm-message#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-061203-891ac9/kova-agent-cold-warm-message-67b331a3-kova-260712-061203-891ac9

## Target Cleanup

- Runtime: `kova-local-1783836723113`
- Result: removed
- Duration: 421ms

