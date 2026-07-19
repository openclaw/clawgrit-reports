# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — plugin-cli peak RSS 911.5 MB exceeded threshold 900 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | plugin-cli peak RSS 911.5 MB exceeded threshold 900 MB |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 18 (PASS:17, FAIL:1) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260719-132854-e6acf0` |
| Generated | 2026-07-19T13:34:52.863Z |
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
| PASS | 17 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | fresh-install/onboarded-user | plugin-cli peak RSS 911.5 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 3054 |
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
| fresh-install/fresh | 3 | PASS:3 | 3124ms | 925MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:2, FAIL:1 | 3088ms | 908.9MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3056ms | 909.5MB | n/a | 150% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3059ms | 908.3MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 159.9% | 3330ms | 3298ms | 3153ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2940ms | 941.5MB | n/a | 151% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3481ms | 904.5 MB | 1782.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3042ms | 925 MB | 1801.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3124ms | 950.9 MB | 1826.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3106ms | 926.6 MB | 1799.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3088ms | 903.4 MB | 1763.9 MB | n/a | n/a |  |
| 3 | FAIL | fresh-install/onboarded-user |  | 3054ms | 908.9 MB | 1820.2 MB | n/a | n/a | plugin-cli peak RSS 911.5 MB exceeded threshold 900 MB |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3079ms | 909.5 MB | 914.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2909ms | 945.7 MB | 950.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3056ms | 895.5 MB | 900.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3072ms | 897 MB | 1488.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2931ms | 913.9 MB | 1485.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3059ms | 908.3 MB | 1496.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 958.3 MB | 3342ms | 3376ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 930.8 MB | 3330ms | 3291ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 958.4 MB | 3274ms | 3298ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2940ms | 941.5 MB | 1857.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2930ms | 944.3 MB | 1810.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3128ms | 912.6 MB | 1787.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 958.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 958.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 958.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 950.9 MB (scenario fresh-install/fresh); CPU 155% (scenario fresh-install/fresh)
- status-cli: RSS 881 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.5% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 950.9 MB (scenario fresh-install/fresh); CPU 155% (scenario fresh-install/fresh)
- plugin-cli: RSS 916.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario fresh-install/fresh)
- model-cli: RSS 534.7 MB (scenario fresh-install/fresh); CPU 159% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-fresh-install-onboarded-fe872c26-kova-260719-132854-e6acf0
Measurements:
- startup: listening 2764ms; health 3054ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 290ms; post-ready p95 2ms; failures 11; final failures 0; slowest startup-sample/provision 290ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 908.9 MB; tracked total 1820.2 MB; max CPU 151%; samples 18; roles command-tree 911.5MB/163%, plugin-cli 911.5MB/160.5%, status-cli 862.2MB/163%, gateway 908.9MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 337.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 911.5 MB exceeded threshold 900 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-agent-cold-warm-message-8e2a29af-kova-260719-132854-e6acf0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 958.3 MB; tracked total 958.3 MB; max CPU 159.9%; samples 14; roles agent-cli 958.3MB/159.9%, command-tree 958.3MB/160.4%, agent-process 958.3MB/159.9%, status-cli 865.2MB/160.4%
- agent: turn 3376ms; cold/warm 3342ms/3376ms; cold-warm delta 0ms; pre-provider 3197ms; provider 1ms; metadata scans 10 (201.38ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3374.3ms; max 3376ms; pre-provider p95 3195.4ms
- agent CLI attribution: cold known 98ms / unattributed 3067ms; warm known 106ms / unattributed 3091ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3342ms; pre-provider 3165ms; provider 2ms; post-provider 175ms; response true
    - active window: metadata scans 5 (95.76ms total, max 54.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3165ms; provider 2ms; post-provider 175ms; unknown 2879.55ms; source plugins.metadata.scan 285.45ms
  - warm: total 3376ms; pre-provider 3197ms; provider 1ms; post-provider 178ms; response true
    - active window: metadata scans 5 (105.62ms total, max 60.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3197ms; provider 1ms; post-provider 178ms; unknown 2911.55ms; source plugins.metadata.scan 285.45ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3165 ms | 98 ms | 3067 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-agent-cold-warm-message-8e2a29af-kova-260719-132854-e6acf0/openclaw/timeline.jsonl |
  | warm | 3197 ms | 106 ms | 3091 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-agent-cold-warm-message-8e2a29af-kova-260719-132854-e6acf0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 98 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-agent-cold-warm-message-2ab680e0-kova-260719-132854-e6acf0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 930.8 MB; tracked total 930.8 MB; max CPU 163.9%; samples 14; roles agent-cli 930.8MB/163.9%, agent-process 930.8MB/163.9%, command-tree 930.8MB/163.9%, status-cli 864.6MB/158.9%
- agent: turn 3330ms; cold/warm 3330ms/3291ms; cold-warm delta 39ms; pre-provider 3153ms; provider 2ms; metadata scans 10 (202.63ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3328.05ms; max 3330ms; pre-provider p95 3151.25ms
- agent CLI attribution: cold known 99ms / unattributed 3054ms; warm known 103ms / unattributed 3015ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 59.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3330ms; pre-provider 3153ms; provider 2ms; post-provider 175ms; response true
    - active window: metadata scans 5 (99.35ms total, max 55.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3153ms; provider 2ms; post-provider 175ms; unknown 2866.42ms; source plugins.metadata.scan 286.58ms
  - warm: total 3291ms; pre-provider 3118ms; provider 1ms; post-provider 172ms; response true
    - active window: metadata scans 5 (103.28ms total, max 59.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3118ms; provider 1ms; post-provider 172ms; unknown 2831.42ms; source plugins.metadata.scan 286.58ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3153 ms | 99 ms | 3054 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-agent-cold-warm-message-2ab680e0-kova-260719-132854-e6acf0/openclaw/timeline.jsonl |
  | warm | 3118 ms | 103 ms | 3015 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-agent-cold-warm-message-2ab680e0-kova-260719-132854-e6acf0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 103 ms | 60 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-agent-cold-warm-message-67b331a3-kova-260719-132854-e6acf0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 958.4 MB; tracked total 958.4 MB; max CPU 156.9%; samples 14; roles agent-cli 958.4MB/156.9%, command-tree 958.4MB/162.9%, agent-process 958.4MB/156.9%, status-cli 881MB/162.9%
- agent: turn 3298ms; cold/warm 3274ms/3298ms; cold-warm delta 0ms; pre-provider 3129ms; provider 1ms; metadata scans 10 (195.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3296.8ms; max 3298ms; pre-provider p95 3128ms
- agent CLI attribution: cold known 98ms / unattributed 3011ms; warm known 99ms / unattributed 3030ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 56.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3274ms; pre-provider 3109ms; provider 2ms; post-provider 163ms; response true
    - active window: metadata scans 5 (96.5ms total, max 55.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3109ms; provider 2ms; post-provider 163ms; unknown 2837.45ms; source plugins.metadata.scan 271.55ms
  - warm: total 3298ms; pre-provider 3129ms; provider 1ms; post-provider 168ms; response true
    - active window: metadata scans 5 (99.28ms total, max 56.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3129ms; provider 1ms; post-provider 168ms; unknown 2857.45ms; source plugins.metadata.scan 271.55ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3109 ms | 98 ms | 3011 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-agent-cold-warm-message-67b331a3-kova-260719-132854-e6acf0/openclaw/timeline.jsonl |
  | warm | 3129 ms | 99 ms | 3030 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-agent-cold-warm-message-67b331a3-kova-260719-132854-e6acf0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 98 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 56 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260719-132854-e6acf0-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260719-132854-e6acf0-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260719-132854-e6acf0-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-fresh-install-fresh-r1-697fad55-kova-260719-132854-e6acf0
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-fresh-install-fresh-r2-da880701-kova-260719-132854-e6acf0
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-fresh-install-fresh-r3-82f8bdbd-kova-260719-132854-e6acf0
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-fresh-install-onboarded-9f99e904-kova-260719-132854-e6acf0
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-fresh-install-onboarded-f9c24855-kova-260719-132854-e6acf0
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-fresh-install-onboarded-fe872c26-kova-260719-132854-e6acf0
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260719-132854-e6acf0
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-bundled-runtime-deps-mi-39c08a4a-kova-260719-132854-e6acf0
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260719-132854-e6acf0/kova-bundled-runtime-deps-mi-150715ba-kova-260719-132854-e6acf0
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrru0jr7-41a-213da30b`
- Result: removed
- Duration: 392ms

