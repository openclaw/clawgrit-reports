# Kova OpenClaw Runtime Report

> **⚠️ [PARTIAL]** — Required release gate platform coverage linux-arm64 was not present in the report.

## Verdict

| Field | Value |
|---|---|
| Verdict | PARTIAL |
| Reason | Required release gate platform coverage linux-arm64 was not present in the report. |
| Blocking findings | 0 |
| Warnings | 23 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260721-100023-c0a37a` |
| Generated | 2026-07-21T10:07:36.560Z |
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
| info | Kova | report | 17 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3144ms | 908.4MB | n/a | 149% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3010ms | 905.3MB | n/a | 156% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3101ms | 889.5MB | n/a | 157% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3080ms | 905.2MB | n/a | 159% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 158.9% | 4244ms | 4115ms | 3905ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3132ms | 917.1MB | n/a | 159% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3661ms | 905 MB | 1685 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2827ms | 908.4 MB | 1660.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3144ms | 909.1 MB | 1635.1 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3071ms | 905.3 MB | 1666.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2915ms | 905.4 MB | 1673.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3010ms | 905 MB | 1686.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3101ms | 889.3 MB | 894.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2978ms | 892.9 MB | 897.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3223ms | 889.5 MB | 894.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3198ms | 905.2 MB | 1662.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3080ms | 908.8 MB | 1697.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2974ms | 896.5 MB | 1678.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 900.1 MB | 3857ms | 4069ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 951.7 MB | 4244ms | 4127ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 959.2 MB | 4270ms | 4115ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3030ms | 939.8 MB | 1724.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3479ms | 917.1 MB | 1677.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3132ms | 909.1 MB | 1668.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 959.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 959.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172.9% (scenario fresh-install/fresh)
- agent-process: RSS 959.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 790.9 MB (scenario fresh-install/fresh); CPU 172.9% (scenario fresh-install/fresh)
- model-cli: RSS 501.9 MB (scenario fresh-install/fresh); CPU 167.9% (scenario fresh-install/fresh)
- gateway: RSS 939.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 162% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 769.1 MB (scenario fresh-install/onboarded-user); CPU 167.5% (scenario fresh-install/fresh)
- gateway-tree: RSS 939.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 162% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-agent-cold-warm-message-8e2a29af-kova-260721-100023-c0a37a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 900.1 MB; tracked total 900.1 MB; max CPU 156.4%; samples 14; roles agent-cli 900.1MB/156.4%, command-tree 900.1MB/157.6%, agent-process 900.1MB/156.4%, status-cli 758.6MB/157.6%
- agent: turn 4069ms; cold/warm 3857ms/4069ms; cold-warm delta 0ms; pre-provider 3783ms; provider 1ms; metadata scans 10 (224.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4058.4ms; max 4069ms; pre-provider p95 3770.75ms
- agent CLI attribution: cold known 106ms / unattributed 3432ms; warm known 117ms / unattributed 3666ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3857ms; pre-provider 3538ms; provider 3ms; post-provider 316ms; response true
    - active window: metadata scans 5 (107.8ms total, max 65.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3538ms; provider 3ms; post-provider 316ms; unknown 3207.65ms; source plugins.metadata.scan 330.35ms
  - warm: total 4069ms; pre-provider 3783ms; provider 1ms; post-provider 285ms; response true
    - active window: metadata scans 5 (116.79ms total, max 63.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3783ms; provider 1ms; post-provider 285ms; unknown 3452.65ms; source plugins.metadata.scan 330.35ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3538 ms | 106 ms | 3432 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-agent-cold-warm-message-8e2a29af-kova-260721-100023-c0a37a/openclaw/timeline.jsonl |
  | warm | 3783 ms | 117 ms | 3666 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-agent-cold-warm-message-8e2a29af-kova-260721-100023-c0a37a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 65 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 117 ms | 63 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-agent-cold-warm-message-2ab680e0-kova-260721-100023-c0a37a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 951.7 MB; tracked total 951.7 MB; max CPU 159.9%; samples 16; roles agent-cli 951.7MB/159.9%, agent-process 951.7MB/159.9%, command-tree 951.7MB/159.9%, status-cli 759.5MB/155.9%
- agent: turn 4244ms; cold/warm 4244ms/4127ms; cold-warm delta 117ms; pre-provider 3905ms; provider 3ms; metadata scans 10 (238.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4238.15ms; max 4244ms; pre-provider p95 3899.6ms
- agent CLI attribution: cold known 120ms / unattributed 3785ms; warm known 120ms / unattributed 3677ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4244ms; pre-provider 3905ms; provider 3ms; post-provider 336ms; response true
    - active window: metadata scans 5 (119.67ms total, max 62.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3905ms; provider 3ms; post-provider 336ms; unknown 3561.78ms; source plugins.metadata.scan 343.22ms
  - warm: total 4127ms; pre-provider 3797ms; provider 1ms; post-provider 329ms; response true
    - active window: metadata scans 5 (119.06ms total, max 62.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3797ms; provider 1ms; post-provider 329ms; unknown 3453.78ms; source plugins.metadata.scan 343.22ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3905 ms | 120 ms | 3785 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-agent-cold-warm-message-2ab680e0-kova-260721-100023-c0a37a/openclaw/timeline.jsonl |
  | warm | 3797 ms | 120 ms | 3677 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-agent-cold-warm-message-2ab680e0-kova-260721-100023-c0a37a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 120 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 120 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-agent-cold-warm-message-67b331a3-kova-260721-100023-c0a37a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 959.2 MB; tracked total 959.2 MB; max CPU 158.9%; samples 16; roles agent-cli 959.2MB/158.9%, agent-process 959.2MB/158.9%, command-tree 959.2MB/158.9%, status-cli 761.4MB/157.9%
- agent: turn 4270ms; cold/warm 4270ms/4115ms; cold-warm delta 155ms; pre-provider 3943ms; provider 3ms; metadata scans 10 (238.46ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4262.25ms; max 4270ms; pre-provider p95 3937.8ms
- agent CLI attribution: cold known 115ms / unattributed 3828ms; warm known 124ms / unattributed 3715ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4270ms; pre-provider 3943ms; provider 3ms; post-provider 324ms; response true
    - active window: metadata scans 5 (115.89ms total, max 62.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3943ms; provider 3ms; post-provider 324ms; unknown 3603.66ms; source plugins.metadata.scan 339.34ms
  - warm: total 4115ms; pre-provider 3839ms; provider 2ms; post-provider 274ms; response true
    - active window: metadata scans 5 (122.57ms total, max 69.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3839ms; provider 2ms; post-provider 274ms; unknown 3499.66ms; source plugins.metadata.scan 339.34ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3943 ms | 115 ms | 3828 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-agent-cold-warm-message-67b331a3-kova-260721-100023-c0a37a/openclaw/timeline.jsonl |
  | warm | 3839 ms | 124 ms | 3715 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-agent-cold-warm-message-67b331a3-kova-260721-100023-c0a37a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 115 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 124 ms | 70 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-100023-c0a37a-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-100023-c0a37a-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-100023-c0a37a-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-fresh-install-fresh-r1-697fad55-kova-260721-100023-c0a37a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-fresh-install-fresh-r2-da880701-kova-260721-100023-c0a37a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-100023-c0a37a
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-fresh-install-onboarded-9f99e904-kova-260721-100023-c0a37a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-fresh-install-onboarded-f9c24855-kova-260721-100023-c0a37a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-fresh-install-onboarded-fe872c26-kova-260721-100023-c0a37a
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-100023-c0a37a
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-100023-c0a37a
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-100023-c0a37a/kova-bundled-runtime-deps-mi-150715ba-kova-260721-100023-c0a37a
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mruhg3lt-40x-c63bc257`
- Result: removed
- Duration: 506ms

