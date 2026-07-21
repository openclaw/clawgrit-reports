# Kova OpenClaw Runtime Report

> **⚠️ [PARTIAL]** — Required release gate platform coverage linux-arm64 was not present in the report.

## Verdict

| Field | Value |
|---|---|
| Verdict | PARTIAL |
| Reason | Required release gate platform coverage linux-arm64 was not present in the report. |
| Blocking findings | 0 |
| Warnings | 20 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260721-205809-661fb8` |
| Generated | 2026-07-21T21:06:03.241Z |
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

## Release Gate

- Verdict: PARTIAL
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 0
- Warnings: 20
- Info: 44

### Subsystems

- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

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
| info | Kova | report | 14 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 2845ms | 913.4MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2898ms | 918.3MB | n/a | 154% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2994ms | 899.9MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2939ms | 908.7MB | n/a | 140% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 159.9% | 4067ms | 3826ms | 3737ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2760ms | 912.1MB | n/a | 154% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3258ms | 905.5 MB | 1663.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2845ms | 913.4 MB | 1443.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2686ms | 915 MB | 1449.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2898ms | 918.3 MB | 1448.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2896ms | 907.5 MB | 1689.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2934ms | 919.4 MB | 1452.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2814ms | 895.5 MB | 900.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2994ms | 899.9 MB | 904.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2996ms | 904.5 MB | 909.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2689ms | 910.6 MB | 1437.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2939ms | 904.9 MB | 1436.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2961ms | 908.7 MB | 1440.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 925.6 MB | 4067ms | 3826ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 927.9 MB | 4126ms | 4081ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 941.5 MB | 3890ms | 3781ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2760ms | 910.7 MB | 1668 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2717ms | 912.1 MB | 1701.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3065ms | 917.3 MB | 1676.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 941.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 941.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162% (scenario fresh-install/onboarded-user)
- agent-process: RSS 941.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 534.3 MB (scenario fresh-install/fresh); CPU 162% (scenario fresh-install/onboarded-user)
- gateway: RSS 919.4 MB (scenario fresh-install/onboarded-user); CPU 158% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 919.4 MB (scenario fresh-install/onboarded-user); CPU 158% (scenario fresh-install/onboarded-user)
- status-cli: RSS 789.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario fresh-install/onboarded-user)
- model-cli: RSS 501.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-agent-cold-warm-message-8e2a29af-kova-260721-205809-661fb8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 925.6 MB; tracked total 925.6 MB; max CPU 160.9%; samples 15; roles agent-cli 925.6MB/160.9%, agent-process 925.6MB/160.9%, command-tree 925.6MB/160.9%, status-cli 758.6MB/157.9%
- agent: turn 4067ms; cold/warm 4067ms/3826ms; cold-warm delta 241ms; pre-provider 3737ms; provider 2ms; metadata scans 10 (216.08ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4054.95ms; max 4067ms; pre-provider p95 3728.3ms
- agent CLI attribution: cold known 114ms / unattributed 3623ms; warm known 100ms / unattributed 3463ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4067ms; pre-provider 3737ms; provider 2ms; post-provider 328ms; response true
    - active window: metadata scans 5 (114.28ms total, max 61.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3737ms; provider 2ms; post-provider 328ms; unknown 3417.43ms; source plugins.metadata.scan 319.57ms
  - warm: total 3826ms; pre-provider 3563ms; provider 1ms; post-provider 262ms; response true
    - active window: metadata scans 5 (101.8ms total, max 58.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3563ms; provider 1ms; post-provider 262ms; unknown 3243.43ms; source plugins.metadata.scan 319.57ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3737 ms | 114 ms | 3623 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-agent-cold-warm-message-8e2a29af-kova-260721-205809-661fb8/openclaw/timeline.jsonl |
  | warm | 3563 ms | 100 ms | 3463 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-agent-cold-warm-message-8e2a29af-kova-260721-205809-661fb8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 114 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 100 ms | 59 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-agent-cold-warm-message-2ab680e0-kova-260721-205809-661fb8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 927.9 MB; tracked total 927.9 MB; max CPU 159.9%; samples 16; roles agent-cli 927.9MB/159.9%, agent-process 927.9MB/159.9%, command-tree 927.9MB/159.9%, status-cli 780.2MB/157.8%
- agent: turn 4126ms; cold/warm 4126ms/4081ms; cold-warm delta 45ms; pre-provider 3803ms; provider 5ms; metadata scans 10 (238.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4123.75ms; max 4126ms; pre-provider p95 3804.9ms
- agent CLI attribution: cold known 122ms / unattributed 3681ms; warm known 115ms / unattributed 3690ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 70.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4126ms; pre-provider 3803ms; provider 5ms; post-provider 318ms; response true
    - active window: metadata scans 5 (122.92ms total, max 70.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3803ms; provider 5ms; post-provider 318ms; unknown 3470.58ms; source plugins.metadata.scan 332.42ms
  - warm: total 4081ms; pre-provider 3805ms; provider 1ms; post-provider 275ms; response true
    - active window: metadata scans 5 (115.67ms total, max 61.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3805ms; provider 1ms; post-provider 275ms; unknown 3472.58ms; source plugins.metadata.scan 332.42ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3803 ms | 122 ms | 3681 ms | 5 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-agent-cold-warm-message-2ab680e0-kova-260721-205809-661fb8/openclaw/timeline.jsonl |
  | warm | 3805 ms | 115 ms | 3690 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-agent-cold-warm-message-2ab680e0-kova-260721-205809-661fb8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 122 ms | 70 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 115 ms | 61 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-agent-cold-warm-message-67b331a3-kova-260721-205809-661fb8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 941.5 MB; tracked total 941.5 MB; max CPU 156.9%; samples 13; roles agent-cli 941.5MB/156.9%, agent-process 941.5MB/156.9%, command-tree 941.5MB/156.9%, status-cli 521.8MB/152.8%
- agent: turn 3890ms; cold/warm 3890ms/3781ms; cold-warm delta 109ms; pre-provider 3561ms; provider 2ms; metadata scans 10 (205.98ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3884.55ms; max 3890ms; pre-provider p95 3558.2ms
- agent CLI attribution: cold known 101ms / unattributed 3460ms; warm known 106ms / unattributed 3399ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3890ms; pre-provider 3561ms; provider 2ms; post-provider 327ms; response true
    - active window: metadata scans 5 (100.91ms total, max 57.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3561ms; provider 2ms; post-provider 327ms; unknown 3260.22ms; source plugins.metadata.scan 300.78ms
  - warm: total 3781ms; pre-provider 3505ms; provider 1ms; post-provider 275ms; response true
    - active window: metadata scans 5 (105.07ms total, max 62.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3505ms; provider 1ms; post-provider 275ms; unknown 3204.22ms; source plugins.metadata.scan 300.78ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3561 ms | 101 ms | 3460 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-agent-cold-warm-message-67b331a3-kova-260721-205809-661fb8/openclaw/timeline.jsonl |
  | warm | 3505 ms | 106 ms | 3399 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-agent-cold-warm-message-67b331a3-kova-260721-205809-661fb8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 101 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 62 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205809-661fb8-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205809-661fb8-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205809-661fb8-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-fresh-install-fresh-r1-697fad55-kova-260721-205809-661fb8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-fresh-install-fresh-r2-da880701-kova-260721-205809-661fb8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-205809-661fb8
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-fresh-install-onboarded-9f99e904-kova-260721-205809-661fb8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-fresh-install-onboarded-f9c24855-kova-260721-205809-661fb8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-fresh-install-onboarded-fe872c26-kova-260721-205809-661fb8
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-205809-661fb8
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-205809-661fb8
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205809-661fb8/kova-bundled-runtime-deps-mi-150715ba-kova-260721-205809-661fb8
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrv4xzjc-417-bb4c1eb7`
- Result: removed
- Duration: 447ms

