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
| Run ID | `kova-260723-032742-b6e674` |
| Generated | 2026-07-23T03:35:19.351Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3077ms | 918.9MB | n/a | 147% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3295ms | 918.8MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3342ms | 923MB | n/a | 143% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3375ms | 922.8MB | n/a | 143% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.9% | 4303ms | 4333ms | 4001ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3097ms | 915.5MB | n/a | 136% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3691ms | 904.5 MB | 1655.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3077ms | 919.4 MB | 1663 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2857ms | 918.9 MB | 1674.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3295ms | 916.6 MB | 1639.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3043ms | 918.8 MB | 1684.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3316ms | 927.6 MB | 1643.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3342ms | 913.2 MB | 918 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3280ms | 948.4 MB | 948.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3351ms | 923 MB | 925.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3557ms | 920.3 MB | 1701.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3375ms | 922.8 MB | 1471 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3249ms | 929 MB | 1464.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 986.4 MB | 4282ms | 4252ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 959.5 MB | 4303ms | 4333ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 979.8 MB | 4305ms | 4555ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3140ms | 909.2 MB | 1668.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3030ms | 915.5 MB | 1644.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3097ms | 917.5 MB | 1696.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 986.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 986.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario fresh-install/fresh)
- agent-process: RSS 986.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 781.7 MB (scenario bundled-plugin-startup/fresh); CPU 166.9% (scenario fresh-install/fresh)
- status-cli: RSS 784.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163% (scenario fresh-install/onboarded-user)
- gateway: RSS 948.4 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 155% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 929 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 592.4 MB (scenario fresh-install/fresh); CPU 155% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-agent-cold-warm-message-8e2a29af-kova-260723-032742-b6e674
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 986.4 MB; tracked total 986.4 MB; max CPU 154.9%; samples 15; roles agent-cli 986.4MB/154.9%, agent-process 986.4MB/154.9%, command-tree 986.4MB/154.9%, status-cli 529.3MB/151.7%
- agent: turn 4282ms; cold/warm 4282ms/4252ms; cold-warm delta 30ms; pre-provider 3986ms; provider 2ms; metadata scans 14 (260.55ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4280.5ms; max 4282ms; pre-provider p95 3993.6ms
- agent CLI attribution: cold known 122ms / unattributed 3864ms; warm known 140ms / unattributed 3854ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4282ms; pre-provider 3986ms; provider 2ms; post-provider 294ms; response true
    - active window: metadata scans 7 (121.55ms total, max 56.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3986ms; provider 2ms; post-provider 294ms; unknown 3518.5ms; source plugins.metadata.scan 467.5ms
  - warm: total 4252ms; pre-provider 3994ms; provider 1ms; post-provider 257ms; response true
    - active window: metadata scans 7 (139ms total, max 64.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3994ms; provider 1ms; post-provider 257ms; unknown 3526.5ms; source plugins.metadata.scan 467.5ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3986 ms | 122 ms | 3864 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-agent-cold-warm-message-8e2a29af-kova-260723-032742-b6e674/openclaw/timeline.jsonl |
  | warm | 3994 ms | 140 ms | 3854 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-agent-cold-warm-message-8e2a29af-kova-260723-032742-b6e674/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 122 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 140 ms | 65 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-agent-cold-warm-message-2ab680e0-kova-260723-032742-b6e674
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 959.5 MB; tracked total 959.5 MB; max CPU 154.8%; samples 16; roles agent-cli 959.5MB/154.8%, command-tree 959.5MB/156.8%, agent-process 959.5MB/154.8%, status-cli 776.5MB/156.8%
- agent: turn 4333ms; cold/warm 4303ms/4333ms; cold-warm delta 0ms; pre-provider 4075ms; provider 1ms; metadata scans 14 (264.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4331.5ms; max 4333ms; pre-provider p95 4071.95ms
- agent CLI attribution: cold known 135ms / unattributed 3879ms; warm known 131ms / unattributed 3944ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4303ms; pre-provider 4014ms; provider 2ms; post-provider 287ms; response true
    - active window: metadata scans 7 (133.54ms total, max 55.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4014ms; provider 2ms; post-provider 287ms; unknown 3555.1ms; source plugins.metadata.scan 458.9ms
  - warm: total 4333ms; pre-provider 4075ms; provider 1ms; post-provider 257ms; response true
    - active window: metadata scans 7 (130.99ms total, max 64.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4075ms; provider 1ms; post-provider 257ms; unknown 3616.1ms; source plugins.metadata.scan 458.9ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4014 ms | 135 ms | 3879 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-agent-cold-warm-message-2ab680e0-kova-260723-032742-b6e674/openclaw/timeline.jsonl |
  | warm | 4075 ms | 131 ms | 3944 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-agent-cold-warm-message-2ab680e0-kova-260723-032742-b6e674/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 65 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-agent-cold-warm-message-67b331a3-kova-260723-032742-b6e674
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 979.8 MB; tracked total 979.8 MB; max CPU 155.9%; samples 16; roles agent-cli 979.8MB/155.9%, agent-process 979.8MB/155.9%, command-tree 979.8MB/155.9%, status-cli 784.5MB/152.9%
- agent: turn 4555ms; cold/warm 4305ms/4555ms; cold-warm delta 0ms; pre-provider 4284ms; provider 1ms; metadata scans 14 (259.55ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4542.5ms; max 4555ms; pre-provider p95 4269.85ms
- agent CLI attribution: cold known 128ms / unattributed 3873ms; warm known 132ms / unattributed 4152ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4305ms; pre-provider 4001ms; provider 2ms; post-provider 302ms; response true
    - active window: metadata scans 7 (127.95ms total, max 55.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4001ms; provider 2ms; post-provider 302ms; unknown 3538.98ms; source plugins.metadata.scan 462.02ms
  - warm: total 4555ms; pre-provider 4284ms; provider 1ms; post-provider 270ms; response true
    - active window: metadata scans 7 (131.6ms total, max 65.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4284ms; provider 1ms; post-provider 270ms; unknown 3821.98ms; source plugins.metadata.scan 462.02ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4001 ms | 128 ms | 3873 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-agent-cold-warm-message-67b331a3-kova-260723-032742-b6e674/openclaw/timeline.jsonl |
  | warm | 4284 ms | 132 ms | 4152 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-agent-cold-warm-message-67b331a3-kova-260723-032742-b6e674/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 132 ms | 65 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-032742-b6e674-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-032742-b6e674-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-032742-b6e674-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-fresh-install-fresh-r1-697fad55-kova-260723-032742-b6e674
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-fresh-install-fresh-r2-da880701-kova-260723-032742-b6e674
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-032742-b6e674
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-fresh-install-onboarded-9f99e904-kova-260723-032742-b6e674
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-fresh-install-onboarded-f9c24855-kova-260723-032742-b6e674
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-fresh-install-onboarded-fe872c26-kova-260723-032742-b6e674
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-032742-b6e674
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-032742-b6e674
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-032742-b6e674/kova-bundled-runtime-deps-mi-150715ba-kova-260723-032742-b6e674
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrwyateu-40s-e71360e3`
- Result: removed
- Duration: 416ms

