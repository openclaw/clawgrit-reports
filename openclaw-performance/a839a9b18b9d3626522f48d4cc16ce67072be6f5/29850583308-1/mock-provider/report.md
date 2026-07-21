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
| Run ID | `kova-260721-205838-7b0cc5` |
| Generated | 2026-07-21T21:07:37.461Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3112ms | 909.8MB | n/a | 155% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 4579ms | 916.7MB | n/a | 163% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3660ms | 895.1MB | n/a | 159% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3051ms | 912.6MB | n/a | 158% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 164.6% | 4474ms | 4611ms | 4161ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3756ms | 925.1MB | n/a | 162% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3441ms | 902.4 MB | 1634.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2948ms | 918.3 MB | 1701.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3112ms | 909.8 MB | 1648.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2935ms | 916.7 MB | 1650 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4579ms | 921.4 MB | 1535.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5679ms | 908.6 MB | 1665.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3660ms | 890.5 MB | 895.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3184ms | 914.1 MB | 919.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3706ms | 895.1 MB | 900.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3501ms | 910.8 MB | 1434.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2928ms | 912.6 MB | 1452.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3051ms | 915.2 MB | 1444.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 942.8 MB | 4474ms | 4027ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 933.3 MB | 4455ms | 4611ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 939.2 MB | 5143ms | 6790ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3756ms | 925.1 MB | 1654.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3183ms | 943.3 MB | 1688.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3770ms | 912.7 MB | 1649.5 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 943.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 165% (scenario fresh-install/onboarded-user)
- command-tree: RSS 942.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.4% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 943.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 165% (scenario fresh-install/onboarded-user)
- status-cli: RSS 783.6 MB (scenario fresh-install/fresh); CPU 173.4% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 942.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 738.7 MB (scenario fresh-install/fresh); CPU 172% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 942.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 532.6 MB (scenario fresh-install/onboarded-user); CPU 165% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-agent-cold-warm-message-8e2a29af-kova-260721-205838-7b0cc5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 942.8 MB; tracked total 942.8 MB; max CPU 163.4%; samples 15; roles agent-cli 942.8MB/163.4%, agent-process 942.8MB/163.4%, command-tree 942.8MB/163.4%, status-cli 753.8MB/162.9%
- agent: turn 4474ms; cold/warm 4474ms/4027ms; cold-warm delta 447ms; pre-provider 4161ms; provider 2ms; metadata scans 10 (228.58ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4451.65ms; max 4474ms; pre-provider p95 4140.4ms
- agent CLI attribution: cold known 106ms / unattributed 4055ms; warm known 123ms / unattributed 3626ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4474ms; pre-provider 4161ms; provider 2ms; post-provider 311ms; response true
    - active window: metadata scans 5 (105.79ms total, max 59.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4161ms; provider 2ms; post-provider 311ms; unknown 3815.01ms; source plugins.metadata.scan 345.99ms
  - warm: total 4027ms; pre-provider 3749ms; provider 1ms; post-provider 277ms; response true
    - active window: metadata scans 5 (122.79ms total, max 72.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3749ms; provider 1ms; post-provider 277ms; unknown 3403.01ms; source plugins.metadata.scan 345.99ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4161 ms | 106 ms | 4055 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-agent-cold-warm-message-8e2a29af-kova-260721-205838-7b0cc5/openclaw/timeline.jsonl |
  | warm | 3749 ms | 123 ms | 3626 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-agent-cold-warm-message-8e2a29af-kova-260721-205838-7b0cc5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 123 ms | 72 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-agent-cold-warm-message-2ab680e0-kova-260721-205838-7b0cc5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 933.3 MB; tracked total 933.3 MB; max CPU 164.6%; samples 16; roles agent-cli 933.3MB/164.6%, command-tree 933.3MB/171.9%, agent-process 933.3MB/164.6%, status-cli 752.1MB/171.9%
- agent: turn 4611ms; cold/warm 4455ms/4611ms; cold-warm delta 0ms; pre-provider 4241ms; provider 2ms; metadata scans 10 (243.37ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4603.2ms; max 4611ms; pre-provider p95 4234ms
- agent CLI attribution: cold known 107ms / unattributed 3994ms; warm known 136ms / unattributed 4105ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 107.42ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4455ms; pre-provider 4101ms; provider 3ms; post-provider 351ms; response true
    - active window: metadata scans 5 (107.18ms total, max 59.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4101ms; provider 3ms; post-provider 351ms; unknown 3709.36ms; source plugins.metadata.scan 391.64ms
  - warm: total 4611ms; pre-provider 4241ms; provider 2ms; post-provider 368ms; response true
    - active window: metadata scans 5 (136.19ms total, max 82.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4241ms; provider 2ms; post-provider 368ms; unknown 3849.36ms; source plugins.metadata.scan 391.64ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4101 ms | 107 ms | 3994 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-agent-cold-warm-message-2ab680e0-kova-260721-205838-7b0cc5/openclaw/timeline.jsonl |
  | warm | 4241 ms | 136 ms | 4105 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-agent-cold-warm-message-2ab680e0-kova-260721-205838-7b0cc5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 107 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 136 ms | 82 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-agent-cold-warm-message-67b331a3-kova-260721-205838-7b0cc5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 939.2 MB; tracked total 939.2 MB; max CPU 171.8%; samples 19; roles agent-cli 939.2MB/171.8%, agent-process 939.2MB/171.8%, command-tree 939.2MB/171.8%, status-cli 753.5MB/169.8%
- agent: turn 6790ms; cold/warm 5143ms/6790ms; cold-warm delta 0ms; pre-provider 6186ms; provider 2ms; metadata scans 10 (300.69ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6707.65ms; max 6790ms; pre-provider p95 6116.25ms
- agent CLI attribution: cold known 130ms / unattributed 4661ms; warm known 171ms / unattributed 6015ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 95.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5143ms; pre-provider 4791ms; provider 3ms; post-provider 349ms; response true
    - active window: metadata scans 5 (130.74ms total, max 81.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4791ms; provider 3ms; post-provider 349ms; unknown 4374.27ms; source plugins.metadata.scan 416.73ms
  - warm: total 6790ms; pre-provider 6186ms; provider 2ms; post-provider 602ms; response true
    - active window: metadata scans 5 (169.95ms total, max 95.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6186ms; provider 2ms; post-provider 602ms; unknown 5769.27ms; source plugins.metadata.scan 416.73ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4791 ms | 130 ms | 4661 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-agent-cold-warm-message-67b331a3-kova-260721-205838-7b0cc5/openclaw/timeline.jsonl |
  | warm | 6186 ms | 171 ms | 6015 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-agent-cold-warm-message-67b331a3-kova-260721-205838-7b0cc5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 130 ms | 81 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 171 ms | 96 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205838-7b0cc5-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205838-7b0cc5-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205838-7b0cc5-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-fresh-install-fresh-r1-697fad55-kova-260721-205838-7b0cc5
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-fresh-install-fresh-r2-da880701-kova-260721-205838-7b0cc5
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-205838-7b0cc5
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-fresh-install-onboarded-9f99e904-kova-260721-205838-7b0cc5
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-fresh-install-onboarded-f9c24855-kova-260721-205838-7b0cc5
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-fresh-install-onboarded-fe872c26-kova-260721-205838-7b0cc5
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-205838-7b0cc5
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-205838-7b0cc5
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205838-7b0cc5/kova-bundled-runtime-deps-mi-150715ba-kova-260721-205838-7b0cc5
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrv4ym92-411-8ebaa521`
- Result: removed
- Duration: 553ms

