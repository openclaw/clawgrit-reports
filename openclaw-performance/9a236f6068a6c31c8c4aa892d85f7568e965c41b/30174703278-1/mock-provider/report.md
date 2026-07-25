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
| Run ID | `kova-260725-210027-f29350` |
| Generated | 2026-07-25T21:08:17.438Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5319ms | 912.3MB | n/a | 152% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5314ms | 901.5MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5386ms | 912.4MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5275ms | 951.6MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 151.9% | 4789ms | 4778ms | 4258ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5366ms | 936.4MB | n/a | 151% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5881ms | 923 MB | 1638.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5255ms | 905.6 MB | 1699.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5319ms | 912.3 MB | 1662.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5325ms | 901.5 MB | 1683.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5265ms | 903.8 MB | 1694.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5314ms | 893 MB | 1612.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5386ms | 911.5 MB | 911.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5395ms | 912.4 MB | 912.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5304ms | 935.8 MB | 935.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5275ms | 951.6 MB | 1373.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5286ms | 954.4 MB | 1339.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5274ms | 941.9 MB | 1344.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 889.5 MB | 4789ms | 4778ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 889.3 MB | 4764ms | 4763ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 942.5 MB | 4837ms | 4781ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5366ms | 960 MB | 1721.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5358ms | 936.4 MB | 1682.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5371ms | 930.6 MB | 1691.2 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 960 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario fresh-install/fresh)
- agent-cli: RSS 942.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 923 MB (scenario fresh-install/fresh); CPU 154% (scenario fresh-install/fresh)
- agent-process: RSS 942.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 942.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 858.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 565.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 452.5 MB (scenario bundled-plugin-startup/fresh); CPU 147% (scenario bundled-plugin-startup/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-agent-cold-warm-message-8e2a29af-kova-260725-210027-f29350
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 889.5 MB; tracked total 889.5 MB; max CPU 151.9%; samples 16; roles agent-cli 889.5MB/151.9%, agent-process 889.5MB/151.9%, command-tree 889.5MB/151.9%, status-cli 858.3MB/150.4%
- agent: turn 4789ms; cold/warm 4789ms/4778ms; cold-warm delta 11ms; pre-provider 4258ms; provider 3ms; metadata scans 14 (261.38ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4788.45ms; max 4789ms; pre-provider p95 4292.2ms
- agent CLI attribution: cold known 130ms / unattributed 4128ms; warm known 132ms / unattributed 4162ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4789ms; pre-provider 4258ms; provider 3ms; post-provider 528ms; response true
    - active window: metadata scans 7 (129.02ms total, max 57.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4258ms; provider 3ms; post-provider 528ms; unknown 3861.21ms; source plugins.metadata.scan 396.79ms
  - warm: total 4778ms; pre-provider 4294ms; provider 1ms; post-provider 483ms; response true
    - active window: metadata scans 7 (132.36ms total, max 62.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4294ms; provider 1ms; post-provider 483ms; unknown 3897.21ms; source plugins.metadata.scan 396.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4258 ms | 130 ms | 4128 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-agent-cold-warm-message-8e2a29af-kova-260725-210027-f29350/openclaw/timeline.jsonl |
  | warm | 4294 ms | 132 ms | 4162 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-agent-cold-warm-message-8e2a29af-kova-260725-210027-f29350/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 132 ms | 62 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-agent-cold-warm-message-2ab680e0-kova-260725-210027-f29350
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 889.3 MB; tracked total 889.3 MB; max CPU 152.9%; samples 16; roles agent-cli 889.3MB/152.9%, agent-process 889.3MB/152.9%, command-tree 889.3MB/152.9%, status-cli 858.1MB/152.8%
- agent: turn 4764ms; cold/warm 4764ms/4763ms; cold-warm delta 1ms; pre-provider 4215ms; provider 3ms; metadata scans 14 (249ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4763.95ms; max 4764ms; pre-provider p95 4259.65ms
- agent CLI attribution: cold known 127ms / unattributed 4088ms; warm known 123ms / unattributed 4139ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4764ms; pre-provider 4215ms; provider 3ms; post-provider 546ms; response true
    - active window: metadata scans 7 (125.21ms total, max 56.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4215ms; provider 3ms; post-provider 546ms; unknown 3831.38ms; source plugins.metadata.scan 383.62ms
  - warm: total 4763ms; pre-provider 4262ms; provider 1ms; post-provider 500ms; response true
    - active window: metadata scans 7 (123.79ms total, max 60.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4262ms; provider 1ms; post-provider 500ms; unknown 3878.38ms; source plugins.metadata.scan 383.62ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4215 ms | 127 ms | 4088 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-agent-cold-warm-message-2ab680e0-kova-260725-210027-f29350/openclaw/timeline.jsonl |
  | warm | 4262 ms | 123 ms | 4139 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-agent-cold-warm-message-2ab680e0-kova-260725-210027-f29350/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 60 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-agent-cold-warm-message-67b331a3-kova-260725-210027-f29350
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 942.5 MB; tracked total 942.5 MB; max CPU 151.4%; samples 16; roles agent-cli 942.5MB/151.4%, command-tree 942.5MB/152.9%, agent-process 942.5MB/151.4%, status-cli 857.5MB/152.9%
- agent: turn 4837ms; cold/warm 4837ms/4781ms; cold-warm delta 56ms; pre-provider 4291ms; provider 2ms; metadata scans 14 (250.34ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4834.2ms; max 4837ms; pre-provider p95 4289.6ms
- agent CLI attribution: cold known 122ms / unattributed 4169ms; warm known 129ms / unattributed 4134ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4837ms; pre-provider 4291ms; provider 2ms; post-provider 544ms; response true
    - active window: metadata scans 7 (121.66ms total, max 58.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4291ms; provider 2ms; post-provider 544ms; unknown 3899.68ms; source plugins.metadata.scan 391.32ms
  - warm: total 4781ms; pre-provider 4263ms; provider 1ms; post-provider 517ms; response true
    - active window: metadata scans 7 (128.68ms total, max 61.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4263ms; provider 1ms; post-provider 517ms; unknown 3871.68ms; source plugins.metadata.scan 391.32ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4291 ms | 122 ms | 4169 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-agent-cold-warm-message-67b331a3-kova-260725-210027-f29350/openclaw/timeline.jsonl |
  | warm | 4263 ms | 129 ms | 4134 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-agent-cold-warm-message-67b331a3-kova-260725-210027-f29350/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 122 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-210027-f29350-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-210027-f29350-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-210027-f29350-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-fresh-install-fresh-r1-697fad55-kova-260725-210027-f29350
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-fresh-install-fresh-r2-da880701-kova-260725-210027-f29350
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-210027-f29350
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-fresh-install-onboarded-9f99e904-kova-260725-210027-f29350
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-fresh-install-onboarded-f9c24855-kova-260725-210027-f29350
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-fresh-install-onboarded-fe872c26-kova-260725-210027-f29350
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-210027-f29350
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-210027-f29350
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-210027-f29350/kova-bundled-runtime-deps-mi-150715ba-kova-260725-210027-f29350
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms0uscwp-425-aab9eeaf`
- Result: removed
- Duration: 394ms

