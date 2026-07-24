# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — model-cli peak RSS 676.4 MB exceeded threshold 650 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | model-cli peak RSS 676.4 MB exceeded threshold 650 MB |
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
| Run ID | `kova-260724-035812-63eb46` |
| Generated | 2026-07-24T04:05:22.497Z |
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
  - primary: model-cli peak RSS 676.4 MB exceeded threshold 650 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: model-cli peak RSS 676.4 MB exceeded threshold 650 MB
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
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 676.4 MB exceeded threshold 650 MB
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
| fresh-install/fresh | 3 | PASS:3 | 3504ms | 942.5MB | n/a | 151% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3118ms | 924.8MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3078ms | 922.3MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2996ms | 938.8MB | n/a | 138% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.9% | 4415ms | 4274ms | 4123ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:2, FAIL:1 | 3099ms | 942.3MB | n/a | 151% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4045ms | 942.5 MB | 1642 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3143ms | 948.1 MB | 1695.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3504ms | 929.9 MB | 1682.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3224ms | 924.8 MB | 1706.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3118ms | 924.6 MB | 1655.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3070ms | 928.9 MB | 1675.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3078ms | 918.4 MB | 923.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3074ms | 922.3 MB | 927.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3098ms | 923.2 MB | 928.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3040ms | 934.7 MB | 1469.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2996ms | 938.8 MB | 1465.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2951ms | 939.5 MB | 1467.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 964.2 MB | 4551ms | 4207ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 961.8 MB | 4240ms | 4414ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 964.9 MB | 4415ms | 4274ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3099ms | 927.1 MB | 1635.2 MB | n/a | n/a |  |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 3159ms | 942.3 MB | 1676.6 MB | n/a | n/a | model-cli peak RSS 676.4 MB exceeded threshold 650 MB |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3015ms | 956.7 MB | 1655.7 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 964.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 964.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162% (scenario fresh-install/fresh)
- agent-process: RSS 964.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.7% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 747.4 MB (scenario fresh-install/fresh); CPU 162% (scenario fresh-install/fresh)
- status-cli: RSS 782.6 MB (scenario fresh-install/onboarded-user); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 956.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- model-cli: RSS 676.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario fresh-install/fresh)
- gateway-tree: RSS 956.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-agent-cold-warm-message-8e2a29af-kova-260724-035812-63eb46
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 964.2 MB; tracked total 964.2 MB; max CPU 153.7%; samples 15; roles agent-cli 964.2MB/153.7%, agent-process 964.2MB/153.7%, command-tree 964.2MB/153.7%, status-cli 556MB/151.7%
- agent: turn 4551ms; cold/warm 4551ms/4207ms; cold-warm delta 344ms; pre-provider 4247ms; provider 2ms; metadata scans 14 (256.22ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4533.8ms; max 4551ms; pre-provider p95 4233ms
- agent CLI attribution: cold known 134ms / unattributed 4113ms; warm known 121ms / unattributed 3846ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4551ms; pre-provider 4247ms; provider 2ms; post-provider 302ms; response true
    - active window: metadata scans 7 (133.75ms total, max 57.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4247ms; provider 2ms; post-provider 302ms; unknown 3797.3ms; source plugins.metadata.scan 449.7ms
  - warm: total 4207ms; pre-provider 3967ms; provider 0ms; post-provider 240ms; response true
    - active window: metadata scans 7 (122.47ms total, max 61.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3967ms; provider 0ms; post-provider 240ms; unknown 3517.3ms; source plugins.metadata.scan 449.7ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4247 ms | 134 ms | 4113 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-agent-cold-warm-message-8e2a29af-kova-260724-035812-63eb46/openclaw/timeline.jsonl |
  | warm | 3967 ms | 121 ms | 3846 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-agent-cold-warm-message-8e2a29af-kova-260724-035812-63eb46/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 134 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-agent-cold-warm-message-2ab680e0-kova-260724-035812-63eb46
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 961.8 MB; tracked total 961.8 MB; max CPU 150.9%; samples 16; roles agent-cli 961.8MB/150.9%, command-tree 961.8MB/155.9%, agent-process 961.8MB/150.9%, status-cli 730.6MB/155.9%
- agent: turn 4414ms; cold/warm 4240ms/4414ms; cold-warm delta 0ms; pre-provider 4139ms; provider 1ms; metadata scans 14 (244.83ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4405.3ms; max 4414ms; pre-provider p95 4129.2ms
- agent CLI attribution: cold known 116ms / unattributed 3827ms; warm known 130ms / unattributed 4009ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4240ms; pre-provider 3943ms; provider 3ms; post-provider 294ms; response true
    - active window: metadata scans 7 (116.46ms total, max 54.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3943ms; provider 3ms; post-provider 294ms; unknown 3481.74ms; source plugins.metadata.scan 461.26ms
  - warm: total 4414ms; pre-provider 4139ms; provider 1ms; post-provider 274ms; response true
    - active window: metadata scans 7 (128.37ms total, max 63.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4139ms; provider 1ms; post-provider 274ms; unknown 3677.74ms; source plugins.metadata.scan 461.26ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3943 ms | 116 ms | 3827 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-agent-cold-warm-message-2ab680e0-kova-260724-035812-63eb46/openclaw/timeline.jsonl |
  | warm | 4139 ms | 130 ms | 4009 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-agent-cold-warm-message-2ab680e0-kova-260724-035812-63eb46/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 116 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 64 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-agent-cold-warm-message-67b331a3-kova-260724-035812-63eb46
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 964.9 MB; tracked total 964.9 MB; max CPU 152.9%; samples 16; roles agent-cli 964.9MB/152.9%, agent-process 964.9MB/152.9%, command-tree 964.9MB/152.9%, status-cli 597.7MB/150.9%
- agent: turn 4415ms; cold/warm 4415ms/4274ms; cold-warm delta 141ms; pre-provider 4123ms; provider 3ms; metadata scans 14 (253.37ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4407.95ms; max 4415ms; pre-provider p95 4118.35ms
- agent CLI attribution: cold known 127ms / unattributed 3996ms; warm known 126ms / unattributed 3904ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4415ms; pre-provider 4123ms; provider 3ms; post-provider 289ms; response true
    - active window: metadata scans 7 (127.15ms total, max 63.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4123ms; provider 3ms; post-provider 289ms; unknown 3661.5ms; source plugins.metadata.scan 461.5ms
  - warm: total 4274ms; pre-provider 4030ms; provider 1ms; post-provider 243ms; response true
    - active window: metadata scans 7 (126.22ms total, max 62.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4030ms; provider 1ms; post-provider 243ms; unknown 3568.5ms; source plugins.metadata.scan 461.5ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4123 ms | 127 ms | 3996 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-agent-cold-warm-message-67b331a3-kova-260724-035812-63eb46/openclaw/timeline.jsonl |
  | warm | 4030 ms | 126 ms | 3904 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-agent-cold-warm-message-67b331a3-kova-260724-035812-63eb46/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 62 ms |

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-gateway-performance-man-1e8be6a8-kova-260724-035812-63eb46
Measurements:
- startup: listening 2764ms; health 3159ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 395ms; post-ready p95 2ms; failures 19; final failures 0; slowest startup-sample/warm-restart 664ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 942.3 MB; tracked total 1676.6 MB; max CPU 151%; samples 20; roles gateway 942.3MB/151%, command-tree 735.8MB/151.9%, gateway-tree 942.3MB/151%, status-cli 735.8MB/151.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 754.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 676.4 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-035812-63eb46-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-035812-63eb46-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-035812-63eb46-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-fresh-install-fresh-r1-697fad55-kova-260724-035812-63eb46
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-fresh-install-fresh-r2-da880701-kova-260724-035812-63eb46
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-035812-63eb46
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-fresh-install-onboarded-9f99e904-kova-260724-035812-63eb46
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-fresh-install-onboarded-f9c24855-kova-260724-035812-63eb46
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-fresh-install-onboarded-fe872c26-kova-260724-035812-63eb46
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-035812-63eb46
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-035812-63eb46
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-035812-63eb46/kova-bundled-runtime-deps-mi-150715ba-kova-260724-035812-63eb46
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mryetw33-41q-2b587890`
- Result: removed
- Duration: 419ms

