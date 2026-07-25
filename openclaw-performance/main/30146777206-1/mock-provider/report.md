# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — 3 final health check(s) failed, over threshold 0

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | 3 final health check(s) failed, over threshold 0 |
| Blocking findings | 7 |
| Warnings | 0 |
| Records | 9 (FAIL:3, PASS:6) |

## Proof Completeness

- Completeness: complete: 9
- Required obligations: 142 total, 0 missing, 0 failed
- Categories: command: 79, artifact: 9, cleanup: 9, collector: 9, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260725-060200-3c2ffc` |
| Generated | 2026-07-25T06:07:15.872Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 860.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 860.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 879.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 879.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest plugins.metadata.scan age 0ms | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 879.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 996.5 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 996.5 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 879.1MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5138ms | 853MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 151.4% | 4705ms | 4595ms | 4199ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 860.1 MB | 1642.9 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 879.1 MB | 1668.4 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 996.5 MB | 1778.7 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5153ms | 869.1 MB | 874.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5128ms | 848.4 MB | 853.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5138ms | 853 MB | 858.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 927.8 MB | 4717ms | 4554ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 944.8 MB | 4633ms | 4614ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 945.4 MB | 4705ms | 4595ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 996.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 945.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 996.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 858.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 945.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 945.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 560.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 455.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-gateway-performance-man-005107f3-kova-260725-060200-3c2ffc
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 205; final failures 3; slowest startup-sample/cold-start 468ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 860.1 MB; tracked total 1642.9 MB; max CPU 149%; samples 22; roles gateway 860.1MB/149%, command-tree 783.3MB/153%, gateway-tree 860.1MB/149%, status-cli 783.3MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 645.01ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-gateway-performance-man-1e8be6a8-kova-260725-060200-3c2ffc
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 203; final failures 3; slowest startup-sample/cold-start 384ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 879.1 MB; tracked total 1668.4 MB; max CPU 151%; samples 22; roles gateway 879.1MB/151%, command-tree 789.8MB/151%, gateway-tree 879.1MB/151%, status-cli 789.8MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 640.64ms; embedded traces 0; liveness warnings 0; open spans 1 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
  - 1 required OpenClaw diagnostics span(s) were left open; slowest plugins.metadata.scan age 0ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-gateway-performance-man-958fde53-kova-260725-060200-3c2ffc
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 202; final failures 3; slowest startup-sample/cold-start 397ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 996.5 MB; tracked total 1778.7 MB; max CPU 153%; samples 22; roles gateway 996.5MB/153%, command-tree 782.7MB/153%, gateway-tree 996.5MB/153%, status-cli 782.7MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 654.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-8e2a29af-kova-260725-060200-3c2ffc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 927.8 MB; tracked total 927.8 MB; max CPU 150.9%; samples 16; roles agent-cli 927.8MB/150.9%, command-tree 927.8MB/153.7%, agent-process 927.8MB/150.9%, status-cli 848.6MB/153.7%
- agent: turn 4717ms; cold/warm 4717ms/4554ms; cold-warm delta 163ms; pre-provider 4216ms; provider 3ms; metadata scans 14 (246.58ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4708.85ms; max 4717ms; pre-provider p95 4210.2ms
- agent CLI attribution: cold known 119ms / unattributed 4097ms; warm known 129ms / unattributed 3971ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4717ms; pre-provider 4216ms; provider 3ms; post-provider 498ms; response true
    - active window: metadata scans 7 (119.57ms total, max 57.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4216ms; provider 3ms; post-provider 498ms; unknown 3783.62ms; source plugins.metadata.scan 432.38ms
  - warm: total 4554ms; pre-provider 4100ms; provider 1ms; post-provider 453ms; response true
    - active window: metadata scans 7 (127.01ms total, max 57.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4100ms; provider 1ms; post-provider 453ms; unknown 3667.62ms; source plugins.metadata.scan 432.38ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4216 ms | 119 ms | 4097 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-8e2a29af-kova-260725-060200-3c2ffc/openclaw/timeline.jsonl |
  | warm | 4100 ms | 129 ms | 3971 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-8e2a29af-kova-260725-060200-3c2ffc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 119 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 58 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-2ab680e0-kova-260725-060200-3c2ffc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 944.8 MB; tracked total 944.8 MB; max CPU 151.9%; samples 16; roles agent-cli 944.8MB/151.9%, agent-process 944.8MB/151.9%, command-tree 944.8MB/151.9%, status-cli 858.2MB/150.9%
- agent: turn 4633ms; cold/warm 4633ms/4614ms; cold-warm delta 19ms; pre-provider 4125ms; provider 2ms; metadata scans 14 (248.51ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4632.05ms; max 4633ms; pre-provider p95 4160.15ms
- agent CLI attribution: cold known 120ms / unattributed 4005ms; warm known 127ms / unattributed 4035ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4633ms; pre-provider 4125ms; provider 2ms; post-provider 506ms; response true
    - active window: metadata scans 7 (119.13ms total, max 57.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4125ms; provider 2ms; post-provider 506ms; unknown 3682.05ms; source plugins.metadata.scan 442.95ms
  - warm: total 4614ms; pre-provider 4162ms; provider 1ms; post-provider 451ms; response true
    - active window: metadata scans 7 (129.38ms total, max 60.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4162ms; provider 1ms; post-provider 451ms; unknown 3719.05ms; source plugins.metadata.scan 442.95ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4125 ms | 120 ms | 4005 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-2ab680e0-kova-260725-060200-3c2ffc/openclaw/timeline.jsonl |
  | warm | 4162 ms | 127 ms | 4035 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-2ab680e0-kova-260725-060200-3c2ffc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 120 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 61 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-67b331a3-kova-260725-060200-3c2ffc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 945.4 MB; tracked total 945.4 MB; max CPU 151.4%; samples 16; roles agent-cli 945.4MB/151.4%, command-tree 945.4MB/151.9%, agent-process 945.4MB/151.4%, status-cli 857.4MB/151.9%
- agent: turn 4705ms; cold/warm 4705ms/4595ms; cold-warm delta 110ms; pre-provider 4199ms; provider 3ms; metadata scans 14 (257.96ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4699.5ms; max 4705ms; pre-provider p95 4196.8ms
- agent CLI attribution: cold known 120ms / unattributed 4079ms; warm known 139ms / unattributed 4016ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4705ms; pre-provider 4199ms; provider 3ms; post-provider 503ms; response true
    - active window: metadata scans 7 (120.59ms total, max 56.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4199ms; provider 3ms; post-provider 503ms; unknown 3744.31ms; source plugins.metadata.scan 454.69ms
  - warm: total 4595ms; pre-provider 4155ms; provider 1ms; post-provider 439ms; response true
    - active window: metadata scans 7 (137.37ms total, max 60.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4155ms; provider 1ms; post-provider 439ms; unknown 3700.31ms; source plugins.metadata.scan 454.69ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4199 ms | 120 ms | 4079 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-67b331a3-kova-260725-060200-3c2ffc/openclaw/timeline.jsonl |
  | warm | 4155 ms | 139 ms | 4016 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-67b331a3-kova-260725-060200-3c2ffc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 120 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 139 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-060200-3c2ffc-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-060200-3c2ffc-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-060200-3c2ffc-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-gateway-performance-man-005107f3-kova-260725-060200-3c2ffc
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-gateway-performance-man-1e8be6a8-kova-260725-060200-3c2ffc
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-gateway-performance-man-958fde53-kova-260725-060200-3c2ffc
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-060200-3c2ffc
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-060200-3c2ffc
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-bundled-runtime-deps-mi-150715ba-kova-260725-060200-3c2ffc
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-8e2a29af-kova-260725-060200-3c2ffc
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-2ab680e0-kova-260725-060200-3c2ffc
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-060200-3c2ffc/kova-agent-cold-warm-message-67b331a3-kova-260725-060200-3c2ffc

## Target Cleanup

- Runtime: `kova-local-mrzyoyd8-42b-32cef637`
- Result: removed
- Duration: 395ms

