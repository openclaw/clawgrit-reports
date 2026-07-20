# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 9 |
| Warnings | 2 |
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
| Run ID | `kova-260720-061842-5a18d8` |
| Generated | 2026-07-20T06:22:55.650Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 790.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 790.7 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 823.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 823.2 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 833 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 833 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| warning | OpenClaw | bundled-runtime-deps/missing-plugin-index | 3 OpenClaw diagnostics span(s) from a prior gateway PID were interrupted by an intentional restart | gateway.ready pid 12503; sidecars.total pid 12503 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| info | Kova | report | 2 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 823.2MB | n/a | 144% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 1986ms | 805.7MB | n/a | 146% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.8% | 2788ms | 2793ms | 2625ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 790.7 MB | 1439.6 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 823.2 MB | 1470.9 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 833 MB | 1455.2 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 1986ms | 797.9 MB | 797.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 1915ms | 805.7 MB | 805.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2028ms | 827 MB | 827 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 810.7 MB | 2906ms | 2793ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 805.2 MB | 2788ms | 2765ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 820.5 MB | 2780ms | 2811ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 833 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-cli: RSS 820.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 833 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-process: RSS 820.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 820.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 647 MB (scenario gateway-performance/many-bundled-plugins); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 649.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 563.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-gateway-performance-man-005107f3-kova-260720-061842-5a18d8
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 190; final failures not-collected; slowest startup-sample/cold-start 78ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 790.7 MB; tracked total 1439.6 MB; max CPU 141%; samples 16; roles gateway 790.7MB/141%, command-tree 649.4MB/150%, gateway-tree 790.7MB/141%, plugin-cli 649.4MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 806.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-gateway-performance-man-1e8be6a8-kova-260720-061842-5a18d8
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 188; final failures not-collected; slowest startup-sample/cold-start 238ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 823.2 MB; tracked total 1470.9 MB; max CPU 146%; samples 15; roles gateway 823.2MB/146%, command-tree 648.5MB/151%, gateway-tree 823.2MB/146%, plugin-cli 648.5MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 841.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-gateway-performance-man-958fde53-kova-260720-061842-5a18d8
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 189; final failures not-collected; slowest startup-sample/cold-start 76ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 833 MB; tracked total 1455.2 MB; max CPU 144%; samples 15; roles gateway 833MB/144%, command-tree 622.7MB/156%, gateway-tree 833MB/144%, plugin-cli 622.7MB/156%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 786.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-8e2a29af-kova-260720-061842-5a18d8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 810.7 MB; tracked total 810.7 MB; max CPU 156.8%; samples 11; roles agent-cli 810.7MB/156.8%, agent-process 810.7MB/156.8%, command-tree 810.7MB/156.8%, status-cli 634.8MB/155.8%
- agent: turn 2906ms; cold/warm 2906ms/2793ms; cold-warm delta 113ms; pre-provider 2749ms; provider 2ms; metadata scans 10 (187ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2900.35ms; max 2906ms; pre-provider p95 2742.9ms
- agent CLI attribution: cold known 89ms / unattributed 2660ms; warm known 99ms / unattributed 2528ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 51.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2906ms; pre-provider 2749ms; provider 2ms; post-provider 155ms; response true
    - active window: metadata scans 5 (89.63ms total, max 48.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2749ms; provider 2ms; post-provider 155ms; unknown 2488.01ms; source plugins.metadata.scan 260.99ms
  - warm: total 2793ms; pre-provider 2627ms; provider 1ms; post-provider 165ms; response true
    - active window: metadata scans 5 (97.37ms total, max 49.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2627ms; provider 1ms; post-provider 165ms; unknown 2366.01ms; source plugins.metadata.scan 260.99ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2749 ms | 89 ms | 2660 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-8e2a29af-kova-260720-061842-5a18d8/openclaw/timeline.jsonl |
  | warm | 2627 ms | 99 ms | 2528 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-8e2a29af-kova-260720-061842-5a18d8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 89 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 50 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-2ab680e0-kova-260720-061842-5a18d8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 805.2 MB; tracked total 805.2 MB; max CPU 155.8%; samples 11; roles agent-cli 805.2MB/155.8%, command-tree 805.2MB/156.7%, agent-process 805.2MB/155.8%, status-cli 646.2MB/156.7%
- agent: turn 2788ms; cold/warm 2788ms/2765ms; cold-warm delta 23ms; pre-provider 2625ms; provider 2ms; metadata scans 10 (175.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2786.85ms; max 2788ms; pre-provider p95 2623.9ms
- agent CLI attribution: cold known 85ms / unattributed 2540ms; warm known 89ms / unattributed 2514ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 54.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2788ms; pre-provider 2625ms; provider 2ms; post-provider 161ms; response true
    - active window: metadata scans 5 (86.39ms total, max 45.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2625ms; provider 2ms; post-provider 161ms; unknown 2370.01ms; source plugins.metadata.scan 254.99ms
  - warm: total 2765ms; pre-provider 2603ms; provider 1ms; post-provider 161ms; response true
    - active window: metadata scans 5 (88.88ms total, max 49.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2603ms; provider 1ms; post-provider 161ms; unknown 2348.01ms; source plugins.metadata.scan 254.99ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2625 ms | 85 ms | 2540 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-2ab680e0-kova-260720-061842-5a18d8/openclaw/timeline.jsonl |
  | warm | 2603 ms | 89 ms | 2514 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-2ab680e0-kova-260720-061842-5a18d8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 85 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 89 ms | 50 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-67b331a3-kova-260720-061842-5a18d8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 820.5 MB; tracked total 820.5 MB; max CPU 156.8%; samples 11; roles agent-cli 820.5MB/156.8%, agent-process 820.5MB/156.8%, command-tree 820.5MB/156.8%, status-cli 634.4MB/155.8%
- agent: turn 2811ms; cold/warm 2780ms/2811ms; cold-warm delta 0ms; pre-provider 2645ms; provider 1ms; metadata scans 10 (182.85ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2809.45ms; max 2811ms; pre-provider p95 2642.5ms
- agent CLI attribution: cold known 91ms / unattributed 2504ms; warm known 91ms / unattributed 2554ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 51.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2780ms; pre-provider 2595ms; provider 3ms; post-provider 182ms; response true
    - active window: metadata scans 5 (91.07ms total, max 46.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2595ms; provider 3ms; post-provider 182ms; unknown 2338.22ms; source plugins.metadata.scan 256.78ms
  - warm: total 2811ms; pre-provider 2645ms; provider 1ms; post-provider 165ms; response true
    - active window: metadata scans 5 (91.78ms total, max 48.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2645ms; provider 1ms; post-provider 165ms; unknown 2388.22ms; source plugins.metadata.scan 256.78ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2595 ms | 91 ms | 2504 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-67b331a3-kova-260720-061842-5a18d8/openclaw/timeline.jsonl |
  | warm | 2645 ms | 91 ms | 2554 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-67b331a3-kova-260720-061842-5a18d8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 91 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 91 ms | 48 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-061842-5a18d8-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-061842-5a18d8-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-061842-5a18d8-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-gateway-performance-man-005107f3-kova-260720-061842-5a18d8
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-gateway-performance-man-1e8be6a8-kova-260720-061842-5a18d8
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-gateway-performance-man-958fde53-kova-260720-061842-5a18d8
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260720-061842-5a18d8
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-bundled-runtime-deps-mi-39c08a4a-kova-260720-061842-5a18d8
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-bundled-runtime-deps-mi-150715ba-kova-260720-061842-5a18d8
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-8e2a29af-kova-260720-061842-5a18d8
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-2ab680e0-kova-260720-061842-5a18d8
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-061842-5a18d8/kova-agent-cold-warm-message-67b331a3-kova-260720-061842-5a18d8

## Target Cleanup

- Runtime: `kova-local-mrsu36d7-40u-0cecd07b`
- Result: removed
- Duration: 381ms

