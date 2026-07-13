# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 241 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260713-024048-2bfbd5` |
| Generated | 2026-07-13T02:46:36.913Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.13.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 18 |
| Scenarios | 5 |
| States | 5 |
| PASS | 18 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3038ms | 749.6MB | n/a | 136% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2750ms | 736.7MB | n/a | 140% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2803ms | 764.6MB | n/a | 129% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2637ms | 747.7MB | n/a | 137% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 141.8% | 2859ms | 2820ms | 2738ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2463ms | 756.1MB | n/a | 134% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3150ms | 758.6 MB | 1359.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3038ms | 749.6 MB | 1385.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3011ms | 740.2 MB | 1271.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2810ms | 751.3 MB | 1414.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2750ms | 731.6 MB | 1243.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2732ms | 736.7 MB | 1361.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2803ms | 764.6 MB | 769.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2838ms | 765.3 MB | 770.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2561ms | 761.4 MB | 766.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2688ms | 747.7 MB | 1216.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2637ms | 738 MB | 1497.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2498ms | 750.9 MB | 1272.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 699.2 MB | 2796ms | 2820ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 672.7 MB | 2973ms | 2887ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 723 MB | 2859ms | 2735ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2463ms | 724.4 MB | 1249.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2386ms | 756.1 MB | 1265 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2875ms | 761.1 MB | 1287.9 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 765.3 MB; CPU 150%; scenario bundled-runtime-deps/missing-plugin-index
- gateway-tree: RSS 765.3 MB; CPU 143%; scenario bundled-runtime-deps/missing-plugin-index
- command-tree: RSS 759.6 MB; CPU 149.9%; scenario bundled-plugin-startup/fresh
- plugin-cli: RSS 759.6 MB; CPU 149.9%; scenario bundled-plugin-startup/fresh
- agent-cli: RSS 723 MB; CPU 143.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 723 MB; CPU 143.8%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 663.1 MB; CPU 145%; scenario fresh-install/onboarded-user
- model-cli: RSS 511.1 MB; CPU 146%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-agent-cold-warm-message-8e2a29af-kova-260713-024048-2bfbd5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 699.2 MB; tracked total 699.2 MB; max CPU 139.8%; samples 11; roles agent-cli 699.2MB/139.8%, agent-process 699.2MB/139.8%, command-tree 699.2MB/143.8%, status-cli 525.1MB/143.8%
- agent: turn 2820ms; cold/warm 2796ms/2820ms; cold-warm delta 0ms; pre-provider 2720ms; provider 1ms; metadata scans 10 (174.63ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2818.8ms; max 2820ms; pre-provider p95 2718.2ms
- agent CLI attribution: cold known 84ms / unattributed 2600ms; warm known 90ms / unattributed 2630ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 48.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2796ms; pre-provider 2684ms; provider 2ms; post-provider 110ms; response true
    - active window: metadata scans 5 (83.16ms total, max 40.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2684ms; provider 2ms; post-provider 110ms; unknown 2684ms; source none
  - warm: total 2820ms; pre-provider 2720ms; provider 1ms; post-provider 99ms; response true
    - active window: metadata scans 5 (91.47ms total, max 48.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2720ms; provider 1ms; post-provider 99ms; unknown 2720ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2684 ms | 84 ms | 2600 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-agent-cold-warm-message-8e2a29af-kova-260713-024048-2bfbd5/openclaw/timeline.jsonl |
  | warm | 2720 ms | 90 ms | 2630 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-agent-cold-warm-message-8e2a29af-kova-260713-024048-2bfbd5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 84 ms | 40 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 90 ms | 49 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-agent-cold-warm-message-2ab680e0-kova-260713-024048-2bfbd5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 672.7 MB; tracked total 672.7 MB; max CPU 141.8%; samples 11; roles agent-cli 672.7MB/141.8%, agent-process 672.7MB/141.8%, command-tree 672.7MB/142.8%, status-cli 526.5MB/142.8%
- agent: turn 2973ms; cold/warm 2973ms/2887ms; cold-warm delta 86ms; pre-provider 2849ms; provider 3ms; metadata scans 10 (188.79ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2968.7ms; max 2973ms; pre-provider p95 2843.5ms
- agent CLI attribution: cold known 97ms / unattributed 2752ms; warm known 92ms / unattributed 2647ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 50.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2973ms; pre-provider 2849ms; provider 3ms; post-provider 121ms; response true
    - active window: metadata scans 5 (96.99ms total, max 50.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2849ms; provider 3ms; post-provider 121ms; unknown 2849ms; source none
  - warm: total 2887ms; pre-provider 2739ms; provider 1ms; post-provider 147ms; response true
    - active window: metadata scans 5 (91.8ms total, max 44.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2739ms; provider 1ms; post-provider 147ms; unknown 2739ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2849 ms | 97 ms | 2752 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-agent-cold-warm-message-2ab680e0-kova-260713-024048-2bfbd5/openclaw/timeline.jsonl |
  | warm | 2739 ms | 92 ms | 2647 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-agent-cold-warm-message-2ab680e0-kova-260713-024048-2bfbd5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 97 ms | 51 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 92 ms | 44 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-agent-cold-warm-message-67b331a3-kova-260713-024048-2bfbd5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 723 MB; tracked total 723 MB; max CPU 143.8%; samples 11; roles agent-cli 723MB/143.8%, agent-process 723MB/143.8%, command-tree 723MB/143.9%, status-cli 557.9MB/143.9%
- agent: turn 2859ms; cold/warm 2859ms/2735ms; cold-warm delta 124ms; pre-provider 2738ms; provider 3ms; metadata scans 10 (184.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2852.8ms; max 2859ms; pre-provider p95 2733ms
- agent CLI attribution: cold known 91ms / unattributed 2647ms; warm known 93ms / unattributed 2545ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2859ms; pre-provider 2738ms; provider 3ms; post-provider 118ms; response true
    - active window: metadata scans 5 (91ms total, max 53.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2738ms; provider 3ms; post-provider 118ms; unknown 2738ms; source none
  - warm: total 2735ms; pre-provider 2638ms; provider 1ms; post-provider 96ms; response true
    - active window: metadata scans 5 (93.49ms total, max 53.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2638ms; provider 1ms; post-provider 96ms; unknown 2638ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2738 ms | 91 ms | 2647 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-agent-cold-warm-message-67b331a3-kova-260713-024048-2bfbd5/openclaw/timeline.jsonl |
  | warm | 2638 ms | 93 ms | 2545 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-agent-cold-warm-message-67b331a3-kova-260713-024048-2bfbd5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 91 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 93 ms | 54 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-024048-2bfbd5-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-024048-2bfbd5-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-024048-2bfbd5-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-fresh-install-fresh-r1-697fad55-kova-260713-024048-2bfbd5
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-fresh-install-fresh-r2-da880701-kova-260713-024048-2bfbd5
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-fresh-install-fresh-r3-82f8bdbd-kova-260713-024048-2bfbd5
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-fresh-install-onboarded-9f99e904-kova-260713-024048-2bfbd5
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-fresh-install-onboarded-f9c24855-kova-260713-024048-2bfbd5
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-fresh-install-onboarded-fe872c26-kova-260713-024048-2bfbd5
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260713-024048-2bfbd5
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-bundled-runtime-deps-mi-39c08a4a-kova-260713-024048-2bfbd5
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-024048-2bfbd5/kova-bundled-runtime-deps-mi-150715ba-kova-260713-024048-2bfbd5
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783910448819`
- Result: removed
- Duration: 389ms

