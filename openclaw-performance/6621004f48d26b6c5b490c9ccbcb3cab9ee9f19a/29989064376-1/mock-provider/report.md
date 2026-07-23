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
| Run ID | `kova-260723-074423-2f32b9` |
| Generated | 2026-07-23T07:51:12.453Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3083ms | 916.7MB | n/a | 151% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3132ms | 922.4MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3029ms | 907.6MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2882ms | 920.8MB | n/a | 138% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.7% | 4517ms | 4373ms | 4207ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3097ms | 919.9MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3473ms | 907.2 MB | 1645.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3083ms | 916.7 MB | 1446.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3066ms | 921.1 MB | 1677.2 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3116ms | 922.4 MB | 1685.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3132ms | 923.1 MB | 1685.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3219ms | 914.5 MB | 1701.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3029ms | 907.6 MB | 912.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3017ms | 907.5 MB | 911 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3136ms | 993.5 MB | 998.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2882ms | 919.3 MB | 1456.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2875ms | 920.8 MB | 1453.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3218ms | 937.2 MB | 1473.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 951.4 MB | 4533ms | 4365ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 957.9 MB | 4517ms | 4550ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 970.2 MB | 4514ms | 4373ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3097ms | 919.4 MB | 1651.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3185ms | 923.7 MB | 1650.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3073ms | 919.9 MB | 1683.6 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 993.5 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- command-tree: RSS 970.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 993.5 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- plugin-cli: RSS 550.2 MB (scenario fresh-install/fresh); CPU 157% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 970.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 970.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 824 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 597 MB (scenario fresh-install/fresh); CPU 151% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-agent-cold-warm-message-8e2a29af-kova-260723-074423-2f32b9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 951.4 MB; tracked total 951.4 MB; max CPU 154.7%; samples 16; roles agent-cli 951.4MB/154.7%, command-tree 951.4MB/155.4%, agent-process 951.4MB/154.7%, status-cli 774.2MB/155.4%
- agent: turn 4533ms; cold/warm 4533ms/4365ms; cold-warm delta 168ms; pre-provider 4229ms; provider 3ms; metadata scans 14 (256.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4524.6ms; max 4533ms; pre-provider p95 4222.7ms
- agent CLI attribution: cold known 125ms / unattributed 4104ms; warm known 131ms / unattributed 3972ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4533ms; pre-provider 4229ms; provider 3ms; post-provider 301ms; response true
    - active window: metadata scans 7 (126.49ms total, max 55.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4229ms; provider 3ms; post-provider 301ms; unknown 3772.77ms; source plugins.metadata.scan 456.23ms
  - warm: total 4365ms; pre-provider 4103ms; provider 1ms; post-provider 261ms; response true
    - active window: metadata scans 7 (130.5ms total, max 64.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4103ms; provider 1ms; post-provider 261ms; unknown 3646.77ms; source plugins.metadata.scan 456.23ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4229 ms | 125 ms | 4104 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-agent-cold-warm-message-8e2a29af-kova-260723-074423-2f32b9/openclaw/timeline.jsonl |
  | warm | 4103 ms | 131 ms | 3972 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-agent-cold-warm-message-8e2a29af-kova-260723-074423-2f32b9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 64 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-agent-cold-warm-message-2ab680e0-kova-260723-074423-2f32b9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 957.9 MB; tracked total 957.9 MB; max CPU 156.9%; samples 16; roles agent-cli 957.9MB/156.9%, agent-process 957.9MB/156.9%, command-tree 957.9MB/156.9%, status-cli 729.4MB/152.9%
- agent: turn 4550ms; cold/warm 4517ms/4550ms; cold-warm delta 0ms; pre-provider 4303ms; provider 1ms; metadata scans 14 (266.34ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4548.35ms; max 4550ms; pre-provider p95 4298.2ms
- agent CLI attribution: cold known 125ms / unattributed 4082ms; warm known 142ms / unattributed 4161ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4517ms; pre-provider 4207ms; provider 2ms; post-provider 308ms; response true
    - active window: metadata scans 7 (124.71ms total, max 55.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4207ms; provider 2ms; post-provider 308ms; unknown 3721.36ms; source plugins.metadata.scan 485.64ms
  - warm: total 4550ms; pre-provider 4303ms; provider 1ms; post-provider 246ms; response true
    - active window: metadata scans 7 (141.63ms total, max 69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4303ms; provider 1ms; post-provider 246ms; unknown 3817.36ms; source plugins.metadata.scan 485.64ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4207 ms | 125 ms | 4082 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-agent-cold-warm-message-2ab680e0-kova-260723-074423-2f32b9/openclaw/timeline.jsonl |
  | warm | 4303 ms | 142 ms | 4161 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-agent-cold-warm-message-2ab680e0-kova-260723-074423-2f32b9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 69 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-agent-cold-warm-message-67b331a3-kova-260723-074423-2f32b9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 970.2 MB; tracked total 970.2 MB; max CPU 153.9%; samples 16; roles agent-cli 970.2MB/153.9%, agent-process 970.2MB/153.9%, command-tree 970.2MB/153.9%, status-cli 824MB/153.9%
- agent: turn 4514ms; cold/warm 4514ms/4373ms; cold-warm delta 141ms; pre-provider 4206ms; provider 2ms; metadata scans 14 (279.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4506.95ms; max 4514ms; pre-provider p95 4201.75ms
- agent CLI attribution: cold known 141ms / unattributed 4065ms; warm known 137ms / unattributed 3984ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4514ms; pre-provider 4206ms; provider 2ms; post-provider 306ms; response true
    - active window: metadata scans 7 (141.3ms total, max 59.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4206ms; provider 2ms; post-provider 306ms; unknown 3725.47ms; source plugins.metadata.scan 480.53ms
  - warm: total 4373ms; pre-provider 4121ms; provider 1ms; post-provider 251ms; response true
    - active window: metadata scans 7 (138.03ms total, max 61.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4121ms; provider 1ms; post-provider 251ms; unknown 3640.47ms; source plugins.metadata.scan 480.53ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4206 ms | 141 ms | 4065 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-agent-cold-warm-message-67b331a3-kova-260723-074423-2f32b9/openclaw/timeline.jsonl |
  | warm | 4121 ms | 137 ms | 3984 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-agent-cold-warm-message-67b331a3-kova-260723-074423-2f32b9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-074423-2f32b9-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-074423-2f32b9-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-074423-2f32b9-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-fresh-install-fresh-r1-697fad55-kova-260723-074423-2f32b9
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-fresh-install-fresh-r2-da880701-kova-260723-074423-2f32b9
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-074423-2f32b9
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-fresh-install-onboarded-9f99e904-kova-260723-074423-2f32b9
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-fresh-install-onboarded-f9c24855-kova-260723-074423-2f32b9
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-fresh-install-onboarded-fe872c26-kova-260723-074423-2f32b9
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-074423-2f32b9
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-074423-2f32b9
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-074423-2f32b9/kova-bundled-runtime-deps-mi-150715ba-kova-260723-074423-2f32b9
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrx7gwis-40v-4870ba44`
- Result: removed
- Duration: 418ms

