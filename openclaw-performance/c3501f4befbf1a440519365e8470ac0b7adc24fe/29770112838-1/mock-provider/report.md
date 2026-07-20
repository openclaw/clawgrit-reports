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
| Run ID | `kova-260720-190039-c996aa` |
| Generated | 2026-07-20T19:08:31.970Z |
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
| fresh-install/fresh | 3 | PASS:3 | 4241ms | 813.9MB | n/a | 101% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2666ms | 813.9MB | n/a | 137% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2392ms | 829.9MB | n/a | 141% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2561ms | 809.1MB | n/a | 149% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 160.4% | 3306ms | 3403ms | 3133ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2416ms | 836.6MB | n/a | 146% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 6340ms | 800.9 MB | 1445.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3558ms | 838.6 MB | 1371.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 4241ms | 813.9 MB | 1500.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3308ms | 813.9 MB | 1494.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2526ms | 799.8 MB | 1393.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2666ms | 818.3 MB | 1406.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2392ms | 829.9 MB | 834.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2503ms | 813.3 MB | 818.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2203ms | 838.4 MB | 843.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2669ms | 809.1 MB | 1388.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2561ms | 799.5 MB | 1283.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2415ms | 811.8 MB | 1400.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 831.3 MB | 4040ms | 3670ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 846.4 MB | 3256ms | 3403ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 843 MB | 3306ms | 3378ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2298ms | 836.6 MB | 1401.8 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2416ms | 807.9 MB | 1370.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2523ms | 845 MB | 1420.7 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 846.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 846.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario fresh-install/fresh)
- agent-process: RSS 846.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 588.2 MB (scenario fresh-install/onboarded-user); CPU 166.9% (scenario fresh-install/fresh)
- plugin-cli: RSS 634.3 MB (scenario fresh-install/onboarded-user); CPU 165% (scenario fresh-install/onboarded-user)
- gateway: RSS 845 MB (scenario gateway-performance/many-bundled-plugins); CPU 150% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 845 MB (scenario gateway-performance/many-bundled-plugins); CPU 150% (scenario fresh-install/onboarded-user)
- status-cli: RSS 687.4 MB (scenario fresh-install/fresh); CPU 158.5% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-agent-cold-warm-message-8e2a29af-kova-260720-190039-c996aa
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 831.3 MB; tracked total 831.3 MB; max CPU 160.4%; samples 13; roles agent-cli 831.3MB/160.4%, agent-process 831.3MB/160.4%, command-tree 831.3MB/160.4%, status-cli 519.1MB/151.7%
- agent: turn 4040ms; cold/warm 4040ms/3670ms; cold-warm delta 370ms; pre-provider 3824ms; provider 3ms; metadata scans 10 (267.45ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4021.5ms; max 4040ms; pre-provider p95 3803.45ms
- agent CLI attribution: cold known 147ms / unattributed 3677ms; warm known 121ms / unattributed 3292ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 98.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4040ms; pre-provider 3824ms; provider 3ms; post-provider 213ms; response true
    - active window: metadata scans 5 (147.27ms total, max 98.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3824ms; provider 3ms; post-provider 213ms; unknown 3453.61ms; source plugins.metadata.scan 370.39ms
  - warm: total 3670ms; pre-provider 3413ms; provider 1ms; post-provider 256ms; response true
    - active window: metadata scans 5 (120.18ms total, max 68.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3413ms; provider 1ms; post-provider 256ms; unknown 3042.61ms; source plugins.metadata.scan 370.39ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3824 ms | 147 ms | 3677 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-agent-cold-warm-message-8e2a29af-kova-260720-190039-c996aa/openclaw/timeline.jsonl |
  | warm | 3413 ms | 121 ms | 3292 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-agent-cold-warm-message-8e2a29af-kova-260720-190039-c996aa/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 147 ms | 98 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 121 ms | 68 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-agent-cold-warm-message-2ab680e0-kova-260720-190039-c996aa
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 846.4 MB; tracked total 846.4 MB; max CPU 152.8%; samples 13; roles agent-cli 846.4MB/152.8%, agent-process 846.4MB/152.8%, command-tree 846.4MB/152.8%, status-cli 592.4MB/151.7%
- agent: turn 3403ms; cold/warm 3256ms/3403ms; cold-warm delta 0ms; pre-provider 3139ms; provider 2ms; metadata scans 10 (216.94ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3395.65ms; max 3403ms; pre-provider p95 3134.55ms
- agent CLI attribution: cold known 108ms / unattributed 2942ms; warm known 109ms / unattributed 3030ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 66.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3256ms; pre-provider 3050ms; provider 3ms; post-provider 203ms; response true
    - active window: metadata scans 5 (106.34ms total, max 53.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3050ms; provider 3ms; post-provider 203ms; unknown 2737.27ms; source plugins.metadata.scan 312.73ms
  - warm: total 3403ms; pre-provider 3139ms; provider 2ms; post-provider 262ms; response true
    - active window: metadata scans 5 (110.6ms total, max 66.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3139ms; provider 2ms; post-provider 262ms; unknown 2826.27ms; source plugins.metadata.scan 312.73ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3050 ms | 108 ms | 2942 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-agent-cold-warm-message-2ab680e0-kova-260720-190039-c996aa/openclaw/timeline.jsonl |
  | warm | 3139 ms | 109 ms | 3030 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-agent-cold-warm-message-2ab680e0-kova-260720-190039-c996aa/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 108 ms | 54 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 109 ms | 67 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-agent-cold-warm-message-67b331a3-kova-260720-190039-c996aa
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 843 MB; tracked total 843 MB; max CPU 162.8%; samples 13; roles agent-cli 843MB/162.8%, agent-process 843MB/162.8%, command-tree 843MB/162.8%, status-cli 627.8MB/156.7%
- agent: turn 3378ms; cold/warm 3306ms/3378ms; cold-warm delta 0ms; pre-provider 3165ms; provider 1ms; metadata scans 10 (214.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3374.4ms; max 3378ms; pre-provider p95 3163.4ms
- agent CLI attribution: cold known 103ms / unattributed 3030ms; warm known 111ms / unattributed 3054ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3306ms; pre-provider 3133ms; provider 3ms; post-provider 170ms; response true
    - active window: metadata scans 5 (103.11ms total, max 48.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3133ms; provider 3ms; post-provider 170ms; unknown 2833.52ms; source plugins.metadata.scan 299.48ms
  - warm: total 3378ms; pre-provider 3165ms; provider 1ms; post-provider 212ms; response true
    - active window: metadata scans 5 (111.07ms total, max 65.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3165ms; provider 1ms; post-provider 212ms; unknown 2865.52ms; source plugins.metadata.scan 299.48ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3133 ms | 103 ms | 3030 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-agent-cold-warm-message-67b331a3-kova-260720-190039-c996aa/openclaw/timeline.jsonl |
  | warm | 3165 ms | 111 ms | 3054 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-agent-cold-warm-message-67b331a3-kova-260720-190039-c996aa/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 103 ms | 49 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 111 ms | 65 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-190039-c996aa-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-190039-c996aa-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-190039-c996aa-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-fresh-install-fresh-r1-697fad55-kova-260720-190039-c996aa
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-fresh-install-fresh-r2-da880701-kova-260720-190039-c996aa
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-fresh-install-fresh-r3-82f8bdbd-kova-260720-190039-c996aa
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-fresh-install-onboarded-9f99e904-kova-260720-190039-c996aa
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-fresh-install-onboarded-f9c24855-kova-260720-190039-c996aa
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-fresh-install-onboarded-fe872c26-kova-260720-190039-c996aa
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260720-190039-c996aa
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-bundled-runtime-deps-mi-39c08a4a-kova-260720-190039-c996aa
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-190039-c996aa/kova-bundled-runtime-deps-mi-150715ba-kova-260720-190039-c996aa
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrtlb1eq-410-039b4d69`
- Result: removed
- Duration: 530ms

