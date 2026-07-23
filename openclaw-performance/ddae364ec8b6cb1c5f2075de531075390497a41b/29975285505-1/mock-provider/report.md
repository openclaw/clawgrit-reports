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
| Run ID | `kova-260723-024829-dac19a` |
| Generated | 2026-07-23T02:55:35.238Z |
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
| fresh-install/fresh | 3 | PASS:3 | 2994ms | 919.6MB | n/a | 144% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2992ms | 928.5MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3234ms | 914.5MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3293ms | 918.8MB | n/a | 150% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.9% | 4963ms | 4842ms | 4576ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3278ms | 919.5MB | n/a | 142% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3517ms | 897.4 MB | 1596.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2994ms | 919.6 MB | 1697.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2864ms | 925.6 MB | 1688.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2992ms | 941.6 MB | 1689.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2953ms | 919.1 MB | 1678.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3013ms | 928.5 MB | 1691.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3125ms | 918.7 MB | 923.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3234ms | 914.5 MB | 919.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3324ms | 903.4 MB | 908.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3564ms | 918.8 MB | 1454 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3052ms | 911.3 MB | 1439.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3293ms | 919.7 MB | 1453.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 950.7 MB | 4829ms | 4679ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 950.2 MB | 4963ms | 4860ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 978.6 MB | 5139ms | 4842ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3258ms | 919.5 MB | 1634.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3588ms | 918 MB | 1674.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3278ms | 921.6 MB | 1696.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 978.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 978.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 978.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 941.6 MB (scenario fresh-install/onboarded-user); CPU 158% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 941.6 MB (scenario fresh-install/onboarded-user); CPU 158% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 783.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.9% (scenario fresh-install/fresh)
- plugin-cli: RSS 536.1 MB (scenario fresh-install/fresh); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 601.5 MB (scenario fresh-install/fresh); CPU 153% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-agent-cold-warm-message-8e2a29af-kova-260723-024829-dac19a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 950.7 MB; tracked total 950.7 MB; max CPU 153.9%; samples 16; roles agent-cli 950.7MB/153.9%, command-tree 950.7MB/154.8%, agent-process 950.7MB/153.9%, status-cli 783.4MB/154.8%
- agent: turn 4829ms; cold/warm 4829ms/4679ms; cold-warm delta 150ms; pre-provider 4500ms; provider 3ms; metadata scans 14 (279.67ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4821.5ms; max 4829ms; pre-provider p95 4495.8ms
- agent CLI attribution: cold known 138ms / unattributed 4362ms; warm known 141ms / unattributed 4275ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4829ms; pre-provider 4500ms; provider 3ms; post-provider 326ms; response true
    - active window: metadata scans 7 (137.24ms total, max 67.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4500ms; provider 3ms; post-provider 326ms; unknown 4003.09ms; source plugins.metadata.scan 496.91ms
  - warm: total 4679ms; pre-provider 4416ms; provider 1ms; post-provider 262ms; response true
    - active window: metadata scans 7 (142.43ms total, max 67.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4416ms; provider 1ms; post-provider 262ms; unknown 3919.09ms; source plugins.metadata.scan 496.91ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4500 ms | 138 ms | 4362 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-agent-cold-warm-message-8e2a29af-kova-260723-024829-dac19a/openclaw/timeline.jsonl |
  | warm | 4416 ms | 141 ms | 4275 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-agent-cold-warm-message-8e2a29af-kova-260723-024829-dac19a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 138 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 67 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-agent-cold-warm-message-2ab680e0-kova-260723-024829-dac19a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 950.2 MB; tracked total 950.2 MB; max CPU 160.4%; samples 16; roles agent-cli 950.2MB/160.4%, agent-process 950.2MB/160.4%, command-tree 950.2MB/160.4%, status-cli 736.6MB/154.9%
- agent: turn 4963ms; cold/warm 4963ms/4860ms; cold-warm delta 103ms; pre-provider 4576ms; provider 3ms; metadata scans 14 (300.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4957.85ms; max 4963ms; pre-provider p95 4604.5ms
- agent CLI attribution: cold known 136ms / unattributed 4440ms; warm known 164ms / unattributed 4442ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 77.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4963ms; pre-provider 4576ms; provider 3ms; post-provider 384ms; response true
    - active window: metadata scans 7 (135.79ms total, max 63.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4576ms; provider 3ms; post-provider 384ms; unknown 4041.75ms; source plugins.metadata.scan 534.25ms
  - warm: total 4860ms; pre-provider 4606ms; provider 1ms; post-provider 253ms; response true
    - active window: metadata scans 7 (164.32ms total, max 77.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4606ms; provider 1ms; post-provider 253ms; unknown 4071.75ms; source plugins.metadata.scan 534.25ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4576 ms | 136 ms | 4440 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-agent-cold-warm-message-2ab680e0-kova-260723-024829-dac19a/openclaw/timeline.jsonl |
  | warm | 4606 ms | 164 ms | 4442 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-agent-cold-warm-message-2ab680e0-kova-260723-024829-dac19a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 136 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 164 ms | 77 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-agent-cold-warm-message-67b331a3-kova-260723-024829-dac19a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 978.6 MB; tracked total 978.6 MB; max CPU 156.9%; samples 17; roles agent-cli 978.6MB/156.9%, agent-process 978.6MB/156.9%, command-tree 978.6MB/156.9%, status-cli 761.7MB/155.7%
- agent: turn 5139ms; cold/warm 5139ms/4842ms; cold-warm delta 297ms; pre-provider 4776ms; provider 3ms; metadata scans 14 (319.96ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5124.15ms; max 5139ms; pre-provider p95 4765.9ms
- agent CLI attribution: cold known 157ms / unattributed 4619ms; warm known 161ms / unattributed 4413ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.43ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5139ms; pre-provider 4776ms; provider 3ms; post-provider 360ms; response true
    - active window: metadata scans 7 (157.6ms total, max 70.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4776ms; provider 3ms; post-provider 360ms; unknown 4239.17ms; source plugins.metadata.scan 536.83ms
  - warm: total 4842ms; pre-provider 4574ms; provider 1ms; post-provider 267ms; response true
    - active window: metadata scans 7 (162.36ms total, max 73.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4574ms; provider 1ms; post-provider 267ms; unknown 4037.17ms; source plugins.metadata.scan 536.83ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4776 ms | 157 ms | 4619 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-agent-cold-warm-message-67b331a3-kova-260723-024829-dac19a/openclaw/timeline.jsonl |
  | warm | 4574 ms | 161 ms | 4413 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-agent-cold-warm-message-67b331a3-kova-260723-024829-dac19a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 157 ms | 70 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 161 ms | 73 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-024829-dac19a-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-024829-dac19a-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-024829-dac19a-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-fresh-install-fresh-r1-697fad55-kova-260723-024829-dac19a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-fresh-install-fresh-r2-da880701-kova-260723-024829-dac19a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-024829-dac19a
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-fresh-install-onboarded-9f99e904-kova-260723-024829-dac19a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-fresh-install-onboarded-f9c24855-kova-260723-024829-dac19a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-fresh-install-onboarded-fe872c26-kova-260723-024829-dac19a
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-024829-dac19a
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-024829-dac19a
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-024829-dac19a/kova-bundled-runtime-deps-mi-150715ba-kova-260723-024829-dac19a
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrwwwdlm-414-1dfe3f30`
- Result: removed
- Duration: 461ms

