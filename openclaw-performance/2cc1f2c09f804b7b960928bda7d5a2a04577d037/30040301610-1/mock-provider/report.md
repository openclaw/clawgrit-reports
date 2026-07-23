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
| Run ID | `kova-260723-200203-27cbcd` |
| Generated | 2026-07-23T20:11:06.902Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3586ms | 919.4MB | n/a | 149% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3238ms | 920.4MB | n/a | 139% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3812ms | 910MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 4125ms | 929.5MB | n/a | 157% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 165.9% | 5347ms | 5260ms | 4966ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3461ms | 925.9MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4430ms | 911.1 MB | 1661.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3586ms | 926.5 MB | 1711.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3554ms | 919.4 MB | 1673.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3011ms | 920.4 MB | 1681.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3238ms | 924.3 MB | 1669.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3328ms | 917.7 MB | 1683.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3833ms | 925.1 MB | 930.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3281ms | 910 MB | 912.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3812ms | 906.8 MB | 911.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 4379ms | 922.7 MB | 1677.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 4070ms | 929.5 MB | 1709.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 4125ms | 931.8 MB | 1663.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 960.9 MB | 5934ms | 5260ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 983.6 MB | 5347ms | 5448ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 952 MB | 5020ms | 4956ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3461ms | 929.8 MB | 1701 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3884ms | 925.9 MB | 1649.9 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3279ms | 921.2 MB | 1706.3 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 983.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 983.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171% (scenario bundled-plugin-startup/fresh)
- agent-process: RSS 983.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 785.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 171% (scenario bundled-plugin-startup/fresh)
- gateway: RSS 931.8 MB (scenario bundled-plugin-startup/fresh); CPU 163% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 931.8 MB (scenario bundled-plugin-startup/fresh); CPU 163% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 669.2 MB (scenario fresh-install/onboarded-user); CPU 164.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 763.4 MB (scenario fresh-install/fresh); CPU 163.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-agent-cold-warm-message-8e2a29af-kova-260723-200203-27cbcd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 960.9 MB; tracked total 960.9 MB; max CPU 165.9%; samples 18; roles agent-cli 960.9MB/165.9%, agent-process 960.9MB/165.9%, command-tree 960.9MB/165.9%, status-cli 752.1MB/161.6%
- agent: turn 5934ms; cold/warm 5934ms/5260ms; cold-warm delta 674ms; pre-provider 5565ms; provider 3ms; metadata scans 14 (338.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5900.3ms; max 5934ms; pre-provider p95 5534.45ms
- agent CLI attribution: cold known 165ms / unattributed 5400ms; warm known 170ms / unattributed 4784ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 86.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5934ms; pre-provider 5565ms; provider 3ms; post-provider 366ms; response true
    - active window: metadata scans 7 (166.82ms total, max 67.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5565ms; provider 3ms; post-provider 366ms; unknown 4975.73ms; source plugins.metadata.scan 589.27ms
  - warm: total 5260ms; pre-provider 4954ms; provider 1ms; post-provider 305ms; response true
    - active window: metadata scans 7 (171.29ms total, max 78.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4954ms; provider 1ms; post-provider 305ms; unknown 4364.73ms; source plugins.metadata.scan 589.27ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5565 ms | 165 ms | 5400 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-agent-cold-warm-message-8e2a29af-kova-260723-200203-27cbcd/openclaw/timeline.jsonl |
  | warm | 4954 ms | 170 ms | 4784 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-agent-cold-warm-message-8e2a29af-kova-260723-200203-27cbcd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 165 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 170 ms | 78 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-agent-cold-warm-message-2ab680e0-kova-260723-200203-27cbcd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 983.6 MB; tracked total 983.6 MB; max CPU 166.9%; samples 18; roles agent-cli 983.6MB/166.9%, agent-process 983.6MB/166.9%, command-tree 983.6MB/166.9%, status-cli 752.6MB/163.4%
- agent: turn 5448ms; cold/warm 5347ms/5448ms; cold-warm delta 0ms; pre-provider 5136ms; provider 2ms; metadata scans 14 (296.14ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5442.95ms; max 5448ms; pre-provider p95 5127.5ms
- agent CLI attribution: cold known 143ms / unattributed 4823ms; warm known 152ms / unattributed 4984ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 83.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5347ms; pre-provider 4966ms; provider 3ms; post-provider 378ms; response true
    - active window: metadata scans 7 (143.22ms total, max 69.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4966ms; provider 3ms; post-provider 378ms; unknown 4423.25ms; source plugins.metadata.scan 542.75ms
  - warm: total 5448ms; pre-provider 5136ms; provider 2ms; post-provider 310ms; response true
    - active window: metadata scans 7 (152.92ms total, max 71.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5136ms; provider 2ms; post-provider 310ms; unknown 4593.25ms; source plugins.metadata.scan 542.75ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4966 ms | 143 ms | 4823 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-agent-cold-warm-message-2ab680e0-kova-260723-200203-27cbcd/openclaw/timeline.jsonl |
  | warm | 5136 ms | 152 ms | 4984 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-agent-cold-warm-message-2ab680e0-kova-260723-200203-27cbcd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 143 ms | 69 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 152 ms | 71 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-agent-cold-warm-message-67b331a3-kova-260723-200203-27cbcd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 952 MB; tracked total 952 MB; max CPU 155.9%; samples 16; roles agent-cli 952MB/155.9%, command-tree 952MB/163.7%, agent-process 952MB/155.9%, status-cli 749.4MB/163.7%
- agent: turn 5020ms; cold/warm 5020ms/4956ms; cold-warm delta 64ms; pre-provider 4678ms; provider 3ms; metadata scans 14 (295.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5016.8ms; max 5020ms; pre-provider p95 4676.9ms
- agent CLI attribution: cold known 155ms / unattributed 4523ms; warm known 138ms / unattributed 4518ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 80.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5020ms; pre-provider 4678ms; provider 3ms; post-provider 339ms; response true
    - active window: metadata scans 7 (155.62ms total, max 66.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4678ms; provider 3ms; post-provider 339ms; unknown 4148.74ms; source plugins.metadata.scan 529.26ms
  - warm: total 4956ms; pre-provider 4656ms; provider 1ms; post-provider 299ms; response true
    - active window: metadata scans 7 (139.71ms total, max 67.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4656ms; provider 1ms; post-provider 299ms; unknown 4126.74ms; source plugins.metadata.scan 529.26ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4678 ms | 155 ms | 4523 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-agent-cold-warm-message-67b331a3-kova-260723-200203-27cbcd/openclaw/timeline.jsonl |
  | warm | 4656 ms | 138 ms | 4518 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-agent-cold-warm-message-67b331a3-kova-260723-200203-27cbcd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 155 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 138 ms | 67 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-200203-27cbcd-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-200203-27cbcd-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-200203-27cbcd-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-fresh-install-fresh-r1-697fad55-kova-260723-200203-27cbcd
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-fresh-install-fresh-r2-da880701-kova-260723-200203-27cbcd
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-200203-27cbcd
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-fresh-install-onboarded-9f99e904-kova-260723-200203-27cbcd
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-fresh-install-onboarded-f9c24855-kova-260723-200203-27cbcd
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-fresh-install-onboarded-fe872c26-kova-260723-200203-27cbcd
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-200203-27cbcd
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-200203-27cbcd
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-200203-27cbcd/kova-bundled-runtime-deps-mi-150715ba-kova-260723-200203-27cbcd
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxxtjvk-416-470f37b7`
- Result: removed
- Duration: 477ms

