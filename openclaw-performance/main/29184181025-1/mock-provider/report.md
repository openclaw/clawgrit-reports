# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 9 (PASS:9) |

## Proof Completeness

- Completeness: complete: 9
- Required obligations: 133 total, 0 missing, 0 failed
- Categories: command: 79, artifact: 9, cleanup: 9, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260712-072937-8bbe84` |
| Generated | 2026-07-12T07:31:46.766Z |
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
| PASS | 9 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2294ms | 787.2MB | n/a | 122% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2414ms | 789.3MB | n/a | 135% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 140.7% | 2830ms | 2799ms | 2726ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2806ms | 705.6 MB | 1438 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2294ms | 787.2 MB | 1293 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2291ms | 808 MB | 1241.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2414ms | 716.4 MB | 721.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2354ms | 789.3 MB | 789.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2486ms | 792.7 MB | 792.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 783.4 MB | 2830ms | 2690ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 798.1 MB | 2654ms | 2799ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 846 MB | 2850ms | 3147ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 846 MB; CPU 147%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 846 MB; CPU 142.6%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 846 MB; CPU 142.6%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 808 MB; CPU 135%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 772.7 MB; CPU 135%; scenario bundled-runtime-deps/missing-plugin-index
- status-cli: RSS 734.5 MB; CPU 142%; scenario gateway-performance/many-bundled-plugins
- plugin-cli: RSS 523.1 MB; CPU 140%; scenario gateway-performance/many-bundled-plugins
- model-cli: RSS 508.8 MB; CPU 147%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-8e2a29af-kova-260712-072937-8bbe84
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 783.4 MB; tracked total 783.4 MB; max CPU 140.7%; samples 11; roles agent-cli 783.4MB/140.7%, agent-process 783.4MB/140.7%, command-tree 783.4MB/140.7%, status-cli 520.6MB/137.8%
- agent: turn 2830ms; cold/warm 2830ms/2690ms; cold-warm delta 140ms; pre-provider 2726ms; provider 2ms; metadata scans 10 (193.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2823ms; max 2830ms; pre-provider p95 2719.4ms
- agent CLI attribution: cold known 93ms / unattributed 2633ms; warm known 99ms / unattributed 2495ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 57.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2830ms; pre-provider 2726ms; provider 2ms; post-provider 102ms; response true
    - active window: metadata scans 5 (94.86ms total, max 57.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2726ms; provider 2ms; post-provider 102ms; unknown 2726ms; source none
  - warm: total 2690ms; pre-provider 2594ms; provider 1ms; post-provider 95ms; response true
    - active window: metadata scans 5 (98.73ms total, max 55.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2594ms; provider 1ms; post-provider 95ms; unknown 2594ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2726 ms | 93 ms | 2633 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-8e2a29af-kova-260712-072937-8bbe84/openclaw/timeline.jsonl |
  | warm | 2594 ms | 99 ms | 2495 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-8e2a29af-kova-260712-072937-8bbe84/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 93 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 55 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-2ab680e0-kova-260712-072937-8bbe84
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 798.1 MB; tracked total 798.1 MB; max CPU 139.8%; samples 11; roles agent-cli 798.1MB/139.8%, agent-process 798.1MB/139.8%, command-tree 798.1MB/139.8%, status-cli 549.4MB/138.7%
- agent: turn 2799ms; cold/warm 2654ms/2799ms; cold-warm delta 0ms; pre-provider 2701ms; provider 1ms; metadata scans 10 (190.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2791.75ms; max 2799ms; pre-provider p95 2693.75ms
- agent CLI attribution: cold known 90ms / unattributed 2466ms; warm known 99ms / unattributed 2602ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2654ms; pre-provider 2556ms; provider 2ms; post-provider 96ms; response true
    - active window: metadata scans 5 (90.08ms total, max 52.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2556ms; provider 2ms; post-provider 96ms; unknown 2556ms; source none
  - warm: total 2799ms; pre-provider 2701ms; provider 1ms; post-provider 97ms; response true
    - active window: metadata scans 5 (100.01ms total, max 58.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2701ms; provider 1ms; post-provider 97ms; unknown 2701ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2556 ms | 90 ms | 2466 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-2ab680e0-kova-260712-072937-8bbe84/openclaw/timeline.jsonl |
  | warm | 2701 ms | 99 ms | 2602 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-2ab680e0-kova-260712-072937-8bbe84/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 90 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 58 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-67b331a3-kova-260712-072937-8bbe84
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 846 MB; tracked total 846 MB; max CPU 142.6%; samples 13; roles agent-cli 846MB/142.6%, agent-process 846MB/142.6%, command-tree 846MB/142.6%, status-cli 626.8MB/141.4%
- agent: turn 3147ms; cold/warm 2850ms/3147ms; cold-warm delta 0ms; pre-provider 3034ms; provider 2ms; metadata scans 10 (197.29ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3132.15ms; max 3147ms; pre-provider p95 3019.1ms
- agent CLI attribution: cold known 89ms / unattributed 2647ms; warm known 107ms / unattributed 2927ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 77.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2850ms; pre-provider 2736ms; provider 3ms; post-provider 111ms; response true
    - active window: metadata scans 5 (88.91ms total, max 52.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2736ms; provider 3ms; post-provider 111ms; unknown 2736ms; source none
  - warm: total 3147ms; pre-provider 3034ms; provider 2ms; post-provider 111ms; response true
    - active window: metadata scans 5 (108.38ms total, max 65.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3034ms; provider 2ms; post-provider 111ms; unknown 3034ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2736 ms | 89 ms | 2647 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-67b331a3-kova-260712-072937-8bbe84/openclaw/timeline.jsonl |
  | warm | 3034 ms | 107 ms | 2927 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-67b331a3-kova-260712-072937-8bbe84/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 89 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 107 ms | 65 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-072937-8bbe84-diagnostic.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-072937-8bbe84-diagnostic.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-072937-8bbe84-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-gateway-performance-man-005107f3-kova-260712-072937-8bbe84
- collector-root gateway-performance#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-gateway-performance-man-1e8be6a8-kova-260712-072937-8bbe84
- collector-root gateway-performance#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-gateway-performance-man-958fde53-kova-260712-072937-8bbe84
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260712-072937-8bbe84
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-bundled-runtime-deps-mi-39c08a4a-kova-260712-072937-8bbe84
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-bundled-runtime-deps-mi-150715ba-kova-260712-072937-8bbe84
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-8e2a29af-kova-260712-072937-8bbe84
- collector-root agent-cold-warm-message#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-2ab680e0-kova-260712-072937-8bbe84
- collector-root agent-cold-warm-message#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-072937-8bbe84/kova-agent-cold-warm-message-67b331a3-kova-260712-072937-8bbe84

## Target Cleanup

- Runtime: `kova-local-1783841377763`
- Result: removed
- Duration: 429ms

