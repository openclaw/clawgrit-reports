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
| Run ID | `kova-260723-014154-93e863` |
| Generated | 2026-07-23T01:48:57.936Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3195ms | 918.1MB | n/a | 149% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3201ms | 925.3MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3096ms | 909.3MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3216ms | 926.2MB | n/a | 151% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.9% | 4755ms | 4668ms | 4448ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3003ms | 917.9MB | n/a | 150% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3586ms | 903.9 MB | 1611.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3165ms | 920.5 MB | 1643.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3195ms | 918.1 MB | 1664.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3123ms | 923 MB | 1680.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3345ms | 925.3 MB | 1665.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3201ms | 925.3 MB | 1656.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3072ms | 909.8 MB | 915.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3318ms | 909.3 MB | 914.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3096ms | 900.9 MB | 905.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3216ms | 926.2 MB | 1459.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3096ms | 925.5 MB | 1459.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3418ms | 926.5 MB | 1473.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 954.6 MB | 4755ms | 4668ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 955.3 MB | 4823ms | 4817ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 955 MB | 4685ms | 4427ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2999ms | 917.9 MB | 1645.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3151ms | 933.4 MB | 1719.9 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3003ms | 917.7 MB | 1700.7 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 955.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 955.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162% (scenario fresh-install/onboarded-user)
- agent-process: RSS 955.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 787 MB (scenario gateway-performance/many-bundled-plugins); CPU 162% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 546.9 MB (scenario bundled-plugin-startup/fresh); CPU 157.9% (scenario fresh-install/onboarded-user)
- gateway: RSS 933.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 933.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario bundled-runtime-deps/missing-plugin-index)
- model-cli: RSS 596.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 150% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-agent-cold-warm-message-8e2a29af-kova-260723-014154-93e863
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 954.6 MB; tracked total 954.6 MB; max CPU 157.7%; samples 16; roles agent-cli 954.6MB/157.7%, agent-process 954.6MB/157.7%, command-tree 954.6MB/157.7%, status-cli 760.1MB/157.7%
- agent: turn 4755ms; cold/warm 4755ms/4668ms; cold-warm delta 87ms; pre-provider 4448ms; provider 2ms; metadata scans 14 (284.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4750.65ms; max 4755ms; pre-provider p95 4445.1ms
- agent CLI attribution: cold known 134ms / unattributed 4314ms; warm known 151ms / unattributed 4239ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4755ms; pre-provider 4448ms; provider 2ms; post-provider 305ms; response true
    - active window: metadata scans 7 (134.65ms total, max 58.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4448ms; provider 2ms; post-provider 305ms; unknown 3940.32ms; source plugins.metadata.scan 507.68ms
  - warm: total 4668ms; pre-provider 4390ms; provider 2ms; post-provider 276ms; response true
    - active window: metadata scans 7 (149.4ms total, max 66.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4390ms; provider 2ms; post-provider 276ms; unknown 3882.32ms; source plugins.metadata.scan 507.68ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4448 ms | 134 ms | 4314 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-agent-cold-warm-message-8e2a29af-kova-260723-014154-93e863/openclaw/timeline.jsonl |
  | warm | 4390 ms | 151 ms | 4239 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-agent-cold-warm-message-8e2a29af-kova-260723-014154-93e863/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 134 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 151 ms | 67 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-agent-cold-warm-message-2ab680e0-kova-260723-014154-93e863
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 955.3 MB; tracked total 955.3 MB; max CPU 155.9%; samples 16; roles agent-cli 955.3MB/155.9%, command-tree 955.3MB/157.9%, agent-process 955.3MB/155.9%, status-cli 757.2MB/157.9%
- agent: turn 4823ms; cold/warm 4823ms/4817ms; cold-warm delta 6ms; pre-provider 4500ms; provider 3ms; metadata scans 14 (277.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4822.7ms; max 4823ms; pre-provider p95 4544.65ms
- agent CLI attribution: cold known 138ms / unattributed 4362ms; warm known 140ms / unattributed 4407ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 81.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4823ms; pre-provider 4500ms; provider 3ms; post-provider 320ms; response true
    - active window: metadata scans 7 (136.47ms total, max 62.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4500ms; provider 3ms; post-provider 320ms; unknown 3985.07ms; source plugins.metadata.scan 514.93ms
  - warm: total 4817ms; pre-provider 4547ms; provider 1ms; post-provider 269ms; response true
    - active window: metadata scans 7 (141.1ms total, max 70.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4547ms; provider 1ms; post-provider 269ms; unknown 4032.07ms; source plugins.metadata.scan 514.93ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4500 ms | 138 ms | 4362 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-agent-cold-warm-message-2ab680e0-kova-260723-014154-93e863/openclaw/timeline.jsonl |
  | warm | 4547 ms | 140 ms | 4407 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-agent-cold-warm-message-2ab680e0-kova-260723-014154-93e863/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 138 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 140 ms | 70 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-agent-cold-warm-message-67b331a3-kova-260723-014154-93e863
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 955 MB; tracked total 955 MB; max CPU 155.4%; samples 16; roles agent-cli 955MB/155.4%, agent-process 955MB/155.4%, command-tree 955MB/155.4%, status-cli 555.7MB/151.9%
- agent: turn 4685ms; cold/warm 4685ms/4427ms; cold-warm delta 258ms; pre-provider 4366ms; provider 3ms; metadata scans 14 (282.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4672.1ms; max 4685ms; pre-provider p95 4356.7ms
- agent CLI attribution: cold known 147ms / unattributed 4219ms; warm known 136ms / unattributed 4044ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4685ms; pre-provider 4366ms; provider 3ms; post-provider 316ms; response true
    - active window: metadata scans 7 (146.14ms total, max 63.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4366ms; provider 3ms; post-provider 316ms; unknown 3875.23ms; source plugins.metadata.scan 490.77ms
  - warm: total 4427ms; pre-provider 4180ms; provider 1ms; post-provider 246ms; response true
    - active window: metadata scans 7 (136.73ms total, max 67.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4180ms; provider 1ms; post-provider 246ms; unknown 3689.23ms; source plugins.metadata.scan 490.77ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4366 ms | 147 ms | 4219 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-agent-cold-warm-message-67b331a3-kova-260723-014154-93e863/openclaw/timeline.jsonl |
  | warm | 4180 ms | 136 ms | 4044 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-agent-cold-warm-message-67b331a3-kova-260723-014154-93e863/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 147 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 136 ms | 68 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-014154-93e863-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-014154-93e863-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-014154-93e863-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-fresh-install-fresh-r1-697fad55-kova-260723-014154-93e863
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-fresh-install-fresh-r2-da880701-kova-260723-014154-93e863
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-014154-93e863
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-fresh-install-onboarded-9f99e904-kova-260723-014154-93e863
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-fresh-install-onboarded-f9c24855-kova-260723-014154-93e863
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-fresh-install-onboarded-fe872c26-kova-260723-014154-93e863
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-014154-93e863
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-014154-93e863
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-014154-93e863/kova-bundled-runtime-deps-mi-150715ba-kova-260723-014154-93e863
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrwuir6q-40n-c5b4a207`
- Result: removed
- Duration: 400ms

