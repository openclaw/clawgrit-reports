# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway max CPU 300% exceeded threshold 250%

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway max CPU 300% exceeded threshold 250% |
| Blocking findings | 2 |
| Warnings | 20 |
| Records | 18 (PASS:17, FAIL:1) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260714-091226-4bf552` |
| Generated | 2026-07-14T09:19:00.660Z |
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

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 1
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 1 blocking, 0 warning
  - primary: gateway max CPU 300% exceeded threshold 250%
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway max CPU 300% exceeded threshold 250%
- Kova: Required release gate platform coverage linux-arm64 was not present in the report.

### Failure Cards

- WARNING gate: Required release gate platform coverage linux-arm64 was not present in the report.
  - expected: platform coverage linux-arm64
  - actual: 3 platform coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate platform coverage wsl2 was not present in the report.
  - expected: platform coverage wsl2
  - actual: 3 platform coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage failure-containment:baseline was not present in the report.
  - expected: requirement coverage failure-containment:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage soak:baseline was not present in the report.
  - expected: requirement coverage soak:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage workspace-scan:baseline was not present in the report.
  - expected: requirement coverage workspace-scan:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-runtime:baseline was not present in the report.
  - expected: requirement coverage mcp-runtime:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cron-runtime:run-now was not present in the report.
  - expected: requirement coverage cron-runtime:run-now
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report.
  - expected: requirement coverage exec-tool-safety:safe-and-blocked-exec
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report.
  - expected: requirement coverage mcp-tool-call:safe-tool-call
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report.
  - expected: requirement coverage tool-failure-containment:failure-attribution
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage browser-automation:baseline was not present in the report.
  - expected: requirement coverage browser-automation:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage media-understanding:baseline was not present in the report.
  - expected: requirement coverage media-understanding:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage network-offline:baseline was not present in the report.
  - expected: requirement coverage network-offline:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cross-platform-smoke:baseline was not present in the report.
  - expected: requirement coverage cross-platform-smoke:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:list-survives-dirty-state was not present in the report.
  - expected: requirement coverage dirty-plugin-state:list-survives-dirty-state
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:doctor-preserves-user-files was not present in the report.
  - expected: requirement coverage dirty-plugin-state:doctor-preserves-user-files
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:plugin-failure-recovery was not present in the report.
  - expected: requirement coverage release-update-recovery:plugin-failure-recovery
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:doctor-repair-contract was not present in the report.
  - expected: requirement coverage release-update-recovery:doctor-repair-contract
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:update-retry-target-stability was not present in the report.
  - expected: requirement coverage release-update-recovery:update-retry-target-stability
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:rollback-available was not present in the report.
  - expected: requirement coverage release-update-recovery:rollback-available
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway max CPU 300% exceeded threshold 250%
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw

Info cards omitted from Markdown: 44. See JSON report for full gate coverage details.

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| warning | Kova | run | Required release gate platform coverage linux-arm64 was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate platform coverage wsl2 was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage failure-containment:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage soak:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage workspace-scan:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage mcp-runtime:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage cron-runtime:run-now was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage browser-automation:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage media-understanding:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| info | Kova | report | 16 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 2766ms | 830.9MB | n/a | 149% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2625ms | 840.2MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:2, FAIL:1 | 2636ms | 826.4MB | n/a | 133% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3289ms | 831.9MB | n/a | 162% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 163.9% | 3267ms | 3275ms | 3133ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2864ms | 843.5MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3170ms | 823.5 MB | 1594 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2766ms | 834.3 MB | 1632.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2522ms | 830.9 MB | 1650 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2708ms | 831.2 MB | 1629 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2625ms | 840.2 MB | 1670.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2528ms | 842.3 MB | 1631.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2623ms | 828.2 MB | 833.1 MB | n/a | n/a |  |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 2654ms | 826.4 MB | 831.6 MB | n/a | n/a | gateway max CPU 300% exceeded threshold 250% |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2636ms | 826 MB | 830.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3045ms | 851 MB | 1507.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3289ms | 829.3 MB | 1624.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3321ms | 831.9 MB | 1651.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 893.1 MB | 3228ms | 3297ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 891.2 MB | 3314ms | 3209ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 879.9 MB | 3267ms | 3275ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3581ms | 881.2 MB | 1728.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2836ms | 843.5 MB | 1676.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2864ms | 833.4 MB | 1689.9 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 893.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 881.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 300% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-process: RSS 893.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 881.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 300% (scenario bundled-runtime-deps/missing-plugin-index)
- command-tree: RSS 893.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.9% (scenario bundled-plugin-startup/fresh)
- plugin-cli: RSS 860.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 173.9% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 844.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 164.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 529.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-bundled-runtime-deps-mi-39c08a4a-kova-260714-091226-4bf552
Measurements:
- startup: listening 2515ms; health 2654ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 139ms; post-ready p95 not-collected; failures 18; final failures 0; slowest startup-sample/warm-restart 343ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 826.4 MB; tracked total 831.6 MB; max CPU 300%; samples 6; roles gateway 826.4MB/300%, gateway-tree 826.4MB/300%, command-tree 5.2MB/0%, uncategorized 5.2MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 385.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU 300% exceeded threshold 250%

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-agent-cold-warm-message-8e2a29af-kova-260714-091226-4bf552
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 893.1 MB; tracked total 893.1 MB; max CPU 163.9%; samples 14; roles agent-cli 893.1MB/163.9%, agent-process 893.1MB/163.9%, command-tree 893.1MB/163.9%, status-cli 842.8MB/161.9%
- agent: turn 3297ms; cold/warm 3228ms/3297ms; cold-warm delta 0ms; pre-provider 3185ms; provider 1ms; metadata scans 10 (217.96ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3293.55ms; max 3297ms; pre-provider p95 3180.85ms
- agent CLI attribution: cold known 112ms / unattributed 2990ms; warm known 106ms / unattributed 3079ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3228ms; pre-provider 3102ms; provider 2ms; post-provider 124ms; response true
    - active window: metadata scans 5 (112.92ms total, max 60.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3102ms; provider 2ms; post-provider 124ms; unknown 2798.7ms; source plugins.metadata.scan 303.3ms
  - warm: total 3297ms; pre-provider 3185ms; provider 1ms; post-provider 111ms; response true
    - active window: metadata scans 5 (105.04ms total, max 62.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3185ms; provider 1ms; post-provider 111ms; unknown 2881.7ms; source plugins.metadata.scan 303.3ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3102 ms | 112 ms | 2990 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-agent-cold-warm-message-8e2a29af-kova-260714-091226-4bf552/openclaw/timeline.jsonl |
  | warm | 3185 ms | 106 ms | 3079 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-agent-cold-warm-message-8e2a29af-kova-260714-091226-4bf552/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 112 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 63 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-agent-cold-warm-message-2ab680e0-kova-260714-091226-4bf552
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 891.2 MB; tracked total 891.2 MB; max CPU 162.4%; samples 14; roles agent-cli 891.2MB/162.4%, agent-process 891.2MB/162.4%, command-tree 891.2MB/162.4%, status-cli 843.3MB/161.9%
- agent: turn 3314ms; cold/warm 3314ms/3209ms; cold-warm delta 105ms; pre-provider 3193ms; provider 3ms; metadata scans 10 (217.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3308.75ms; max 3314ms; pre-provider p95 3188.05ms
- agent CLI attribution: cold known 107ms / unattributed 3086ms; warm known 110ms / unattributed 2984ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3314ms; pre-provider 3193ms; provider 3ms; post-provider 118ms; response true
    - active window: metadata scans 5 (108.67ms total, max 60.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3193ms; provider 3ms; post-provider 118ms; unknown 2892.32ms; source plugins.metadata.scan 300.68ms
  - warm: total 3209ms; pre-provider 3094ms; provider 1ms; post-provider 114ms; response true
    - active window: metadata scans 5 (109.17ms total, max 59.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3094ms; provider 1ms; post-provider 114ms; unknown 2793.32ms; source plugins.metadata.scan 300.68ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3193 ms | 107 ms | 3086 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-agent-cold-warm-message-2ab680e0-kova-260714-091226-4bf552/openclaw/timeline.jsonl |
  | warm | 3094 ms | 110 ms | 2984 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-agent-cold-warm-message-2ab680e0-kova-260714-091226-4bf552/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 107 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 110 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-agent-cold-warm-message-67b331a3-kova-260714-091226-4bf552
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 879.9 MB; tracked total 879.9 MB; max CPU 163.9%; samples 14; roles agent-cli 879.9MB/163.9%, agent-process 879.9MB/163.9%, command-tree 879.9MB/163.9%, status-cli 844.1MB/159.9%
- agent: turn 3275ms; cold/warm 3267ms/3275ms; cold-warm delta 0ms; pre-provider 3159ms; provider 2ms; metadata scans 10 (220.03ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3274.6ms; max 3275ms; pre-provider p95 3157.7ms
- agent CLI attribution: cold known 111ms / unattributed 3022ms; warm known 107ms / unattributed 3052ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3267ms; pre-provider 3133ms; provider 2ms; post-provider 132ms; response true
    - active window: metadata scans 5 (112.05ms total, max 58.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3133ms; provider 2ms; post-provider 132ms; unknown 2838.39ms; source plugins.metadata.scan 294.61ms
  - warm: total 3275ms; pre-provider 3159ms; provider 2ms; post-provider 114ms; response true
    - active window: metadata scans 5 (107.98ms total, max 60.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3159ms; provider 2ms; post-provider 114ms; unknown 2864.39ms; source plugins.metadata.scan 294.61ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3133 ms | 111 ms | 3022 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-agent-cold-warm-message-67b331a3-kova-260714-091226-4bf552/openclaw/timeline.jsonl |
  | warm | 3159 ms | 107 ms | 3052 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-agent-cold-warm-message-67b331a3-kova-260714-091226-4bf552/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 111 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 107 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-091226-4bf552-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-091226-4bf552-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-091226-4bf552-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-fresh-install-fresh-r1-697fad55-kova-260714-091226-4bf552
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-fresh-install-fresh-r2-da880701-kova-260714-091226-4bf552
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-fresh-install-fresh-r3-82f8bdbd-kova-260714-091226-4bf552
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-fresh-install-onboarded-9f99e904-kova-260714-091226-4bf552
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-fresh-install-onboarded-f9c24855-kova-260714-091226-4bf552
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-fresh-install-onboarded-fe872c26-kova-260714-091226-4bf552
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260714-091226-4bf552
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-bundled-runtime-deps-mi-39c08a4a-kova-260714-091226-4bf552
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-091226-4bf552/kova-bundled-runtime-deps-mi-150715ba-kova-260714-091226-4bf552
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrkfnhj0-3yc-97bd1f8c`
- Result: removed
- Duration: 451ms

