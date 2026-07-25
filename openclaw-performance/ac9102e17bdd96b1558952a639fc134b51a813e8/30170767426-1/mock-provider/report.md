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
| Run ID | `kova-260725-190202-a08234` |
| Generated | 2026-07-25T19:09:45.202Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5286ms | 881.4MB | n/a | 151% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5257ms | 889.9MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5218ms | 946.3MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5233ms | 955.9MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 151.9% | 4814ms | 4773ms | 4253ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5249ms | 958.4MB | n/a | 151% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5851ms | 881.4 MB | 1671.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5286ms | 890.5 MB | 1680.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5278ms | 873.4 MB | 1661.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5281ms | 903.1 MB | 1618 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5246ms | 889.9 MB | 1687.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5257ms | 888.9 MB | 1679.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5218ms | 958.2 MB | 958.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5276ms | 920.6 MB | 920.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5201ms | 946.3 MB | 946.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5221ms | 942.4 MB | 1345 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5233ms | 958.2 MB | 1359.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5254ms | 955.9 MB | 1356.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 943.7 MB | 4816ms | 4786ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 888 MB | 4767ms | 4725ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 905.5 MB | 4814ms | 4773ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5238ms | 958.7 MB | 1623.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5249ms | 958.4 MB | 1651.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5268ms | 930.8 MB | 1691.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 958.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario bundled-plugin-startup/fresh)
- agent-cli: RSS 943.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 904.5 MB (scenario bundled-plugin-startup/fresh); CPU 154% (scenario bundled-plugin-startup/fresh)
- agent-process: RSS 943.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 943.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 858.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 559.1 MB (scenario fresh-install/onboarded-user); CPU 146% (scenario fresh-install/fresh)
- plugin-cli: RSS 456.5 MB (scenario bundled-plugin-startup/fresh); CPU 149% (scenario bundled-plugin-startup/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-agent-cold-warm-message-8e2a29af-kova-260725-190202-a08234
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 943.7 MB; tracked total 943.7 MB; max CPU 150.9%; samples 16; roles agent-cli 943.7MB/150.9%, agent-process 943.7MB/150.9%, command-tree 943.7MB/150.9%, status-cli 800.6MB/150.9%
- agent: turn 4816ms; cold/warm 4816ms/4786ms; cold-warm delta 30ms; pre-provider 4273ms; provider 2ms; metadata scans 14 (248.17ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4814.5ms; max 4816ms; pre-provider p95 4277.75ms
- agent CLI attribution: cold known 120ms / unattributed 4153ms; warm known 128ms / unattributed 4150ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4816ms; pre-provider 4273ms; provider 2ms; post-provider 541ms; response true
    - active window: metadata scans 7 (120.36ms total, max 54.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4273ms; provider 2ms; post-provider 541ms; unknown 3886.4ms; source plugins.metadata.scan 386.6ms
  - warm: total 4786ms; pre-provider 4278ms; provider 1ms; post-provider 507ms; response true
    - active window: metadata scans 7 (127.81ms total, max 61.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4278ms; provider 1ms; post-provider 507ms; unknown 3891.4ms; source plugins.metadata.scan 386.6ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4273 ms | 120 ms | 4153 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-agent-cold-warm-message-8e2a29af-kova-260725-190202-a08234/openclaw/timeline.jsonl |
  | warm | 4278 ms | 128 ms | 4150 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-agent-cold-warm-message-8e2a29af-kova-260725-190202-a08234/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 120 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 62 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-agent-cold-warm-message-2ab680e0-kova-260725-190202-a08234
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 888 MB; tracked total 888 MB; max CPU 151.9%; samples 16; roles agent-cli 888MB/151.9%, command-tree 888MB/152.9%, agent-process 888MB/151.9%, status-cli 857.1MB/152.9%
- agent: turn 4767ms; cold/warm 4767ms/4725ms; cold-warm delta 42ms; pre-provider 4228ms; provider 3ms; metadata scans 14 (245.28ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4764.9ms; max 4767ms; pre-provider p95 4246.05ms
- agent CLI attribution: cold known 117ms / unattributed 4111ms; warm known 125ms / unattributed 4122ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4767ms; pre-provider 4228ms; provider 3ms; post-provider 536ms; response true
    - active window: metadata scans 7 (116.97ms total, max 50.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4228ms; provider 3ms; post-provider 536ms; unknown 3850.64ms; source plugins.metadata.scan 377.36ms
  - warm: total 4725ms; pre-provider 4247ms; provider 1ms; post-provider 477ms; response true
    - active window: metadata scans 7 (128.31ms total, max 57.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4247ms; provider 1ms; post-provider 477ms; unknown 3869.64ms; source plugins.metadata.scan 377.36ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4228 ms | 117 ms | 4111 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-agent-cold-warm-message-2ab680e0-kova-260725-190202-a08234/openclaw/timeline.jsonl |
  | warm | 4247 ms | 125 ms | 4122 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-agent-cold-warm-message-2ab680e0-kova-260725-190202-a08234/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 117 ms | 51 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 57 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-agent-cold-warm-message-67b331a3-kova-260725-190202-a08234
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 905.5 MB; tracked total 905.5 MB; max CPU 153.9%; samples 16; roles agent-cli 905.5MB/153.9%, agent-process 905.5MB/153.9%, command-tree 905.5MB/153.9%, status-cli 858.8MB/150.4%
- agent: turn 4814ms; cold/warm 4814ms/4773ms; cold-warm delta 41ms; pre-provider 4253ms; provider 3ms; metadata scans 14 (244.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4811.95ms; max 4814ms; pre-provider p95 4289.1ms
- agent CLI attribution: cold known 121ms / unattributed 4132ms; warm known 120ms / unattributed 4171ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4814ms; pre-provider 4253ms; provider 3ms; post-provider 558ms; response true
    - active window: metadata scans 7 (123.85ms total, max 53.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4253ms; provider 3ms; post-provider 558ms; unknown 3873.61ms; source plugins.metadata.scan 379.39ms
  - warm: total 4773ms; pre-provider 4291ms; provider 1ms; post-provider 481ms; response true
    - active window: metadata scans 7 (120.46ms total, max 54.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4291ms; provider 1ms; post-provider 481ms; unknown 3911.61ms; source plugins.metadata.scan 379.39ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4253 ms | 121 ms | 4132 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-agent-cold-warm-message-67b331a3-kova-260725-190202-a08234/openclaw/timeline.jsonl |
  | warm | 4291 ms | 120 ms | 4171 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-agent-cold-warm-message-67b331a3-kova-260725-190202-a08234/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 120 ms | 55 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-190202-a08234-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-190202-a08234-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-190202-a08234-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-fresh-install-fresh-r1-697fad55-kova-260725-190202-a08234
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-fresh-install-fresh-r2-da880701-kova-260725-190202-a08234
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-190202-a08234
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-fresh-install-onboarded-9f99e904-kova-260725-190202-a08234
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-fresh-install-onboarded-f9c24855-kova-260725-190202-a08234
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-fresh-install-onboarded-fe872c26-kova-260725-190202-a08234
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-190202-a08234
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-190202-a08234
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-190202-a08234/kova-bundled-runtime-deps-mi-150715ba-kova-260725-190202-a08234
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms0qk2in-4aa-a0735406`
- Result: removed
- Duration: 385ms

