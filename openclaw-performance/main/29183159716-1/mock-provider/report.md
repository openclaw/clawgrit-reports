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
| Run ID | `kova-260712-064709-8629c1` |
| Generated | 2026-07-12T06:49:38.767Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2715ms | 805.1MB | n/a | 135% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2687ms | 795.8MB | n/a | 135% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 138.8% | 2899ms | 2812ms | 2794ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3554ms | 808.3 MB | 1401.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2664ms | 805.1 MB | 1426.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2715ms | 803.7 MB | 1410 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2648ms | 793.5 MB | 793.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2687ms | 804.6 MB | 809.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2855ms | 795.8 MB | 800.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 815 MB | 3495ms | 2765ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 765.5 MB | 2899ms | 2812ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 738.8 MB | 2806ms | 2862ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 815 MB; CPU 144.5%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 815 MB; CPU 142.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 815 MB; CPU 142.8%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 808.3 MB; CPU 137%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 804.6 MB; CPU 137%; scenario bundled-runtime-deps/missing-plugin-index
- status-cli: RSS 724 MB; CPU 144.5%; scenario gateway-performance/many-bundled-plugins
- model-cli: RSS 507 MB; CPU 141.9%; scenario gateway-performance/many-bundled-plugins
- plugin-cli: RSS 486.1 MB; CPU 138%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-8e2a29af-kova-260712-064709-8629c1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 815 MB; tracked total 815 MB; max CPU 137.8%; samples 12; roles agent-cli 815MB/137.8%, agent-process 815MB/137.8%, command-tree 815MB/139.7%, status-cli 527.9MB/139.7%
- agent: turn 3495ms; cold/warm 3495ms/2765ms; cold-warm delta 730ms; pre-provider 3389ms; provider 3ms; metadata scans 10 (212.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3458.5ms; max 3495ms; pre-provider p95 3353.05ms
- agent CLI attribution: cold known 122ms / unattributed 3267ms; warm known 87ms / unattributed 2583ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3495ms; pre-provider 3389ms; provider 3ms; post-provider 103ms; response true
    - active window: metadata scans 5 (123.3ms total, max 72.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3389ms; provider 3ms; post-provider 103ms; unknown 3389ms; source none
  - warm: total 2765ms; pre-provider 2670ms; provider 1ms; post-provider 94ms; response true
    - active window: metadata scans 5 (88.88ms total, max 50.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2670ms; provider 1ms; post-provider 94ms; unknown 2670ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3389 ms | 122 ms | 3267 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-8e2a29af-kova-260712-064709-8629c1/openclaw/timeline.jsonl |
  | warm | 2670 ms | 87 ms | 2583 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-8e2a29af-kova-260712-064709-8629c1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 122 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 87 ms | 50 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-2ab680e0-kova-260712-064709-8629c1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 765.5 MB; tracked total 765.5 MB; max CPU 142.8%; samples 11; roles agent-cli 765.5MB/142.8%, agent-process 765.5MB/142.8%, command-tree 765.5MB/142.8%, status-cli 523MB/140.8%
- agent: turn 2899ms; cold/warm 2899ms/2812ms; cold-warm delta 87ms; pre-provider 2794ms; provider 3ms; metadata scans 10 (194.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2894.65ms; max 2899ms; pre-provider p95 2789.35ms
- agent CLI attribution: cold known 93ms / unattributed 2701ms; warm known 99ms / unattributed 2602ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.24ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2899ms; pre-provider 2794ms; provider 3ms; post-provider 102ms; response true
    - active window: metadata scans 5 (94.96ms total, max 55.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2794ms; provider 3ms; post-provider 102ms; unknown 2794ms; source none
  - warm: total 2812ms; pre-provider 2701ms; provider 1ms; post-provider 110ms; response true
    - active window: metadata scans 5 (99.27ms total, max 58.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2701ms; provider 1ms; post-provider 110ms; unknown 2701ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2794 ms | 93 ms | 2701 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-2ab680e0-kova-260712-064709-8629c1/openclaw/timeline.jsonl |
  | warm | 2701 ms | 99 ms | 2602 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-2ab680e0-kova-260712-064709-8629c1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 93 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 58 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-67b331a3-kova-260712-064709-8629c1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 738.8 MB; tracked total 738.8 MB; max CPU 138.8%; samples 11; roles agent-cli 738.8MB/138.8%, agent-process 738.8MB/138.8%, command-tree 738.8MB/138.8%, status-cli 519.2MB/137.8%
- agent: turn 2862ms; cold/warm 2806ms/2862ms; cold-warm delta 0ms; pre-provider 2763ms; provider 1ms; metadata scans 10 (191.98ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2859.2ms; max 2862ms; pre-provider p95 2760.2ms
- agent CLI attribution: cold known 94ms / unattributed 2613ms; warm known 96ms / unattributed 2667ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2806ms; pre-provider 2707ms; provider 2ms; post-provider 97ms; response true
    - active window: metadata scans 5 (94.54ms total, max 57.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2707ms; provider 2ms; post-provider 97ms; unknown 2707ms; source none
  - warm: total 2862ms; pre-provider 2763ms; provider 1ms; post-provider 98ms; response true
    - active window: metadata scans 5 (97.44ms total, max 58.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2763ms; provider 1ms; post-provider 98ms; unknown 2763ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2707 ms | 94 ms | 2613 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-67b331a3-kova-260712-064709-8629c1/openclaw/timeline.jsonl |
  | warm | 2763 ms | 96 ms | 2667 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-67b331a3-kova-260712-064709-8629c1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 94 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 96 ms | 58 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-064709-8629c1-diagnostic.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-064709-8629c1-diagnostic.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-064709-8629c1-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-gateway-performance-man-005107f3-kova-260712-064709-8629c1
- collector-root gateway-performance#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-gateway-performance-man-1e8be6a8-kova-260712-064709-8629c1
- collector-root gateway-performance#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-gateway-performance-man-958fde53-kova-260712-064709-8629c1
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260712-064709-8629c1
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-bundled-runtime-deps-mi-39c08a4a-kova-260712-064709-8629c1
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-bundled-runtime-deps-mi-150715ba-kova-260712-064709-8629c1
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-8e2a29af-kova-260712-064709-8629c1
- collector-root agent-cold-warm-message#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-2ab680e0-kova-260712-064709-8629c1
- collector-root agent-cold-warm-message#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-064709-8629c1/kova-agent-cold-warm-message-67b331a3-kova-260712-064709-8629c1

## Target Cleanup

- Runtime: `kova-local-1783838829281`
- Result: removed
- Duration: 375ms

