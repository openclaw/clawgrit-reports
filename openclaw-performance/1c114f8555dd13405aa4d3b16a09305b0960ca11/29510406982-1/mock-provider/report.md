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
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260716-151739-d62504` |
| Generated | 2026-07-16T15:24:18.279Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
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
| fresh-install/fresh | 3 | PASS:3 | 2984ms | 885.8MB | n/a | 156% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2749ms | 866.2MB | n/a | 131% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2996ms | 866.7MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3177ms | 871.2MB | n/a | 160% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 160.9% | 3314ms | 3330ms | 3192ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2793ms | 875.7MB | n/a | 137% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3511ms | 885.8 MB | 1736.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2984ms | 903.8 MB | 1785.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2894ms | 868.5 MB | 1758.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2688ms | 858.5 MB | 1714.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2912ms | 866.2 MB | 1717.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2749ms | 899.4 MB | 1749.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2921ms | 869.3 MB | 874.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3099ms | 866.7 MB | 871.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2996ms | 860.7 MB | 865.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3294ms | 864.1 MB | 1674 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3177ms | 890.9 MB | 1743.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3020ms | 871.2 MB | 1492.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 913.4 MB | 3466ms | 3330ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 941 MB | 3314ms | 3401ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 916.3 MB | 3229ms | 3212ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2793ms | 893.3 MB | 1781.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2775ms | 871.2 MB | 1751.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3305ms | 875.7 MB | 1719.3 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 941 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 941 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173% (scenario bundled-plugin-startup/fresh)
- agent-process: RSS 941 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 891.4 MB (scenario fresh-install/fresh); CPU 173% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 860.5 MB (scenario fresh-install/onboarded-user); CPU 165.5% (scenario fresh-install/fresh)
- gateway: RSS 903.8 MB (scenario fresh-install/fresh); CPU 161% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 534.8 MB (scenario fresh-install/onboarded-user); CPU 163.9% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 903.8 MB (scenario fresh-install/fresh); CPU 161% (scenario bundled-plugin-startup/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-agent-cold-warm-message-8e2a29af-kova-260716-151739-d62504
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 913.4 MB; tracked total 913.4 MB; max CPU 160.9%; samples 14; roles agent-cli 913.4MB/160.9%, command-tree 913.4MB/161.9%, agent-process 913.4MB/160.9%, status-cli 860.1MB/161.9%
- agent: turn 3466ms; cold/warm 3466ms/3330ms; cold-warm delta 136ms; pre-provider 3327ms; provider 3ms; metadata scans 10 (226.94ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3459.2ms; max 3466ms; pre-provider p95 3321.2ms
- agent CLI attribution: cold known 121ms / unattributed 3206ms; warm known 106ms / unattributed 3105ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3466ms; pre-provider 3327ms; provider 3ms; post-provider 136ms; response true
    - active window: metadata scans 5 (120.13ms total, max 58.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3327ms; provider 3ms; post-provider 136ms; unknown 3008.45ms; source plugins.metadata.scan 318.55ms
  - warm: total 3330ms; pre-provider 3211ms; provider 1ms; post-provider 118ms; response true
    - active window: metadata scans 5 (106.81ms total, max 61.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3211ms; provider 1ms; post-provider 118ms; unknown 2892.45ms; source plugins.metadata.scan 318.55ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3327 ms | 121 ms | 3206 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-agent-cold-warm-message-8e2a29af-kova-260716-151739-d62504/openclaw/timeline.jsonl |
  | warm | 3211 ms | 106 ms | 3105 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-agent-cold-warm-message-8e2a29af-kova-260716-151739-d62504/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 121 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-agent-cold-warm-message-2ab680e0-kova-260716-151739-d62504
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 941 MB; tracked total 941 MB; max CPU 161.9%; samples 14; roles agent-cli 941MB/161.9%, agent-process 941MB/161.9%, command-tree 941MB/161.9%, status-cli 813.1MB/159.4%
- agent: turn 3401ms; cold/warm 3314ms/3401ms; cold-warm delta 0ms; pre-provider 3263ms; provider 1ms; metadata scans 10 (205.69ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3396.65ms; max 3401ms; pre-provider p95 3259.45ms
- agent CLI attribution: cold known 104ms / unattributed 3088ms; warm known 101ms / unattributed 3162ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3314ms; pre-provider 3192ms; provider 3ms; post-provider 119ms; response true
    - active window: metadata scans 5 (103.53ms total, max 58.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3192ms; provider 3ms; post-provider 119ms; unknown 2894.58ms; source plugins.metadata.scan 297.42ms
  - warm: total 3401ms; pre-provider 3263ms; provider 1ms; post-provider 137ms; response true
    - active window: metadata scans 5 (102.16ms total, max 61.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3263ms; provider 1ms; post-provider 137ms; unknown 2965.58ms; source plugins.metadata.scan 297.42ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3192 ms | 104 ms | 3088 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-agent-cold-warm-message-2ab680e0-kova-260716-151739-d62504/openclaw/timeline.jsonl |
  | warm | 3263 ms | 101 ms | 3162 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-agent-cold-warm-message-2ab680e0-kova-260716-151739-d62504/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 104 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 101 ms | 61 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-agent-cold-warm-message-67b331a3-kova-260716-151739-d62504
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 916.3 MB; tracked total 916.3 MB; max CPU 156.9%; samples 14; roles agent-cli 916.3MB/156.9%, command-tree 916.3MB/162.9%, agent-process 916.3MB/156.9%, status-cli 828.4MB/162.9%
- agent: turn 3229ms; cold/warm 3229ms/3212ms; cold-warm delta 17ms; pre-provider 3115ms; provider 2ms; metadata scans 10 (206.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3228.15ms; max 3229ms; pre-provider p95 3113.6ms
- agent CLI attribution: cold known 101ms / unattributed 3014ms; warm known 105ms / unattributed 2982ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3229ms; pre-provider 3115ms; provider 2ms; post-provider 112ms; response true
    - active window: metadata scans 5 (99.68ms total, max 56.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3115ms; provider 2ms; post-provider 112ms; unknown 2804.47ms; source plugins.metadata.scan 310.53ms
  - warm: total 3212ms; pre-provider 3087ms; provider 1ms; post-provider 124ms; response true
    - active window: metadata scans 5 (106.81ms total, max 59.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3087ms; provider 1ms; post-provider 124ms; unknown 2776.47ms; source plugins.metadata.scan 310.53ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3115 ms | 101 ms | 3014 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-agent-cold-warm-message-67b331a3-kova-260716-151739-d62504/openclaw/timeline.jsonl |
  | warm | 3087 ms | 105 ms | 2982 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-agent-cold-warm-message-67b331a3-kova-260716-151739-d62504/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 101 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 105 ms | 59 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260716-151739-d62504-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260716-151739-d62504-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260716-151739-d62504-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-fresh-install-fresh-r1-697fad55-kova-260716-151739-d62504
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-fresh-install-fresh-r2-da880701-kova-260716-151739-d62504
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-fresh-install-fresh-r3-82f8bdbd-kova-260716-151739-d62504
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-fresh-install-onboarded-9f99e904-kova-260716-151739-d62504
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-fresh-install-onboarded-f9c24855-kova-260716-151739-d62504
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-fresh-install-onboarded-fe872c26-kova-260716-151739-d62504
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260716-151739-d62504
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-bundled-runtime-deps-mi-39c08a4a-kova-260716-151739-d62504
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-151739-d62504/kova-bundled-runtime-deps-mi-150715ba-kova-260716-151739-d62504
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrnnkupy-40q-ec924730`
- Result: removed
- Duration: 584ms

