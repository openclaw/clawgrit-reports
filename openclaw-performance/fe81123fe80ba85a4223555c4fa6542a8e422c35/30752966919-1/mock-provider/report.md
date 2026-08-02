# Kova OpenClaw Runtime Report

> **⚠️ [PARTIAL]** — Required release gate platform coverage linux-arm64 was not present in the report.

## Verdict

| Field | Value |
|---|---|
| Verdict | PARTIAL |
| Reason | Required release gate platform coverage linux-arm64 was not present in the report. |
| Blocking findings | 0 |
| Warnings | 20 |
| Records | 15 (PASS:15) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260802-145029-ac5f9b` |
| Generated | 2026-08-02T14:57:37.796Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 15 |
| Scenarios | 4 |
| States | 4 |
| PASS | 15 |

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
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage soak:baseline was not present in the report.
  - expected: requirement coverage soak:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage workspace-scan:baseline was not present in the report.
  - expected: requirement coverage workspace-scan:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-runtime:baseline was not present in the report.
  - expected: requirement coverage mcp-runtime:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cron-runtime:run-now was not present in the report.
  - expected: requirement coverage cron-runtime:run-now
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report.
  - expected: requirement coverage exec-tool-safety:safe-and-blocked-exec
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report.
  - expected: requirement coverage mcp-tool-call:safe-tool-call
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report.
  - expected: requirement coverage tool-failure-containment:failure-attribution
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage browser-automation:baseline was not present in the report.
  - expected: requirement coverage browser-automation:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage media-understanding:baseline was not present in the report.
  - expected: requirement coverage media-understanding:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage network-offline:baseline was not present in the report.
  - expected: requirement coverage network-offline:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cross-platform-smoke:baseline was not present in the report.
  - expected: requirement coverage cross-platform-smoke:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:list-survives-dirty-state was not present in the report.
  - expected: requirement coverage dirty-plugin-state:list-survives-dirty-state
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:doctor-preserves-user-files was not present in the report.
  - expected: requirement coverage dirty-plugin-state:doctor-preserves-user-files
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:plugin-failure-recovery was not present in the report.
  - expected: requirement coverage release-update-recovery:plugin-failure-recovery
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:doctor-repair-contract was not present in the report.
  - expected: requirement coverage release-update-recovery:doctor-repair-contract
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:update-retry-target-stability was not present in the report.
  - expected: requirement coverage release-update-recovery:update-retry-target-stability
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:rollback-available was not present in the report.
  - expected: requirement coverage release-update-recovery:rollback-available
  - actual: 4 requirement coverage item(s) executed
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
| info | Kova | report | 8 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 4624ms | 972.2MB | n/a | 161% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 4634ms | 980.7MB | n/a | 156% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 4546ms | 957.1MB | n/a | 160% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152% | 3332ms | 3320ms | 3200ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4615ms | 955.6MB | n/a | 156% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5108ms | 972.2 MB | 1753.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 4578ms | 964.9 MB | 1765.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 4624ms | 975.1 MB | 1756.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4575ms | 975.2 MB | 1788.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4634ms | 982.9 MB | 1751.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4694ms | 980.7 MB | 1772.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 4546ms | 911.8 MB | 1690 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 4538ms | 957.1 MB | 1749.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 4643ms | 961.6 MB | 1792.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1096 MB | 3332ms | 3295ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1111.7 MB | 3348ms | 3332ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1095.6 MB | 3326ms | 3320ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 4601ms | 955.6 MB | 1494.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4615ms | 961.6 MB | 1518.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4629ms | 954.2 MB | 1488.7 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1040 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 982.9 MB (scenario fresh-install/onboarded-user); CPU 162% (scenario fresh-install/fresh)
- status-cli: RSS 609 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 982.9 MB (scenario fresh-install/onboarded-user); CPU 162% (scenario fresh-install/fresh)
- agent-process: RSS 865 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 760.7 MB (scenario bundled-plugin-startup/fresh); CPU 154% (scenario fresh-install/fresh)
- model-cli: RSS 486.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario fresh-install/fresh)
- agent-cli: RSS 176.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 24.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-agent-cold-warm-message-8e2a29af-kova-260802-145029-ac5f9b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 849.8 MB; tracked total 1096 MB; max CPU 152%; samples 13; roles command-tree 1025.9MB/172.7%, agent-process 849.8MB/152%, status-cli 609MB/172.7%, agent-cli 176.1MB/24.5%
- agent: turn 3332ms; cold/warm 3332ms/3295ms; cold-warm delta 37ms; pre-provider 3200ms; provider 2ms; metadata scans 14 (175.81ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3330.15ms; max 3332ms; pre-provider p95 3199.05ms
- agent CLI attribution: cold known 211ms / unattributed 2989ms; warm known 213ms / unattributed 2968ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1204.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3332ms; pre-provider 3200ms; provider 2ms; post-provider 130ms; response true
    - active window: metadata scans 7 (87.69ms total, max 31.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3200ms; provider 2ms; post-provider 130ms; unknown 2590.38ms; source plugins.metadata.scan 355.29ms; agent.prepare 254.33ms
  - warm: total 3295ms; pre-provider 3181ms; provider 1ms; post-provider 113ms; response true
    - active window: metadata scans 7 (88.12ms total, max 35.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3181ms; provider 1ms; post-provider 113ms; unknown 2571.38ms; source plugins.metadata.scan 355.29ms; agent.prepare 254.33ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3200 ms | 211 ms | 2989 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-agent-cold-warm-message-8e2a29af-kova-260802-145029-ac5f9b/openclaw/timeline.jsonl |
  | warm | 3181 ms | 213 ms | 2968 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-agent-cold-warm-message-8e2a29af-kova-260802-145029-ac5f9b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 126 ms | 37 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 7 | 0 | 88 ms | 32 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 127 ms | 40 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 7 | 0 | 89 ms | 36 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-agent-cold-warm-message-2ab680e0-kova-260802-145029-ac5f9b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 865 MB; tracked total 1111.7 MB; max CPU 151%; samples 13; roles command-tree 1040MB/171.3%, agent-process 865MB/151%, status-cli 608.7MB/171.3%, agent-cli 175.6MB/24.7%
- agent: turn 3348ms; cold/warm 3348ms/3332ms; cold-warm delta 16ms; pre-provider 3224ms; provider 2ms; metadata scans 14 (173.02ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3347.2ms; max 3348ms; pre-provider p95 3223.35ms
- agent CLI attribution: cold known 208ms / unattributed 3016ms; warm known 214ms / unattributed 2997ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1210.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3348ms; pre-provider 3224ms; provider 2ms; post-provider 122ms; response true
    - active window: metadata scans 7 (83.29ms total, max 33.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3224ms; provider 2ms; post-provider 122ms; unknown 2612.68ms; source plugins.metadata.scan 353.28ms; agent.prepare 258.04ms
  - warm: total 3332ms; pre-provider 3211ms; provider 1ms; post-provider 120ms; response true
    - active window: metadata scans 7 (89.73ms total, max 35.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3211ms; provider 1ms; post-provider 120ms; unknown 2599.68ms; source plugins.metadata.scan 353.28ms; agent.prepare 258.04ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3224 ms | 208 ms | 3016 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-agent-cold-warm-message-2ab680e0-kova-260802-145029-ac5f9b/openclaw/timeline.jsonl |
  | warm | 3211 ms | 214 ms | 2997 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-agent-cold-warm-message-2ab680e0-kova-260802-145029-ac5f9b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 130 ms | 40 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 7 | 0 | 81 ms | 33 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 126 ms | 38 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 7 | 0 | 91 ms | 36 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-agent-cold-warm-message-67b331a3-kova-260802-145029-ac5f9b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 849.8 MB; tracked total 1095.6 MB; max CPU 154%; samples 13; roles command-tree 1025.2MB/174.5%, agent-process 849.8MB/154%, status-cli 607.6MB/174.5%, agent-cli 175.4MB/24.7%
- agent: turn 3326ms; cold/warm 3326ms/3320ms; cold-warm delta 6ms; pre-provider 3197ms; provider 2ms; metadata scans 14 (165.47ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3325.7ms; max 3326ms; pre-provider p95 3206.5ms
- agent CLI attribution: cold known 211ms / unattributed 2986ms; warm known 209ms / unattributed 2998ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1184.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3326ms; pre-provider 3197ms; provider 2ms; post-provider 127ms; response true
    - active window: metadata scans 7 (80.69ms total, max 31.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3197ms; provider 2ms; post-provider 127ms; unknown 2592.78ms; source plugins.metadata.scan 342.64ms; agent.prepare 261.58ms
  - warm: total 3320ms; pre-provider 3207ms; provider 1ms; post-provider 112ms; response true
    - active window: metadata scans 7 (84.78ms total, max 38.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3207ms; provider 1ms; post-provider 112ms; unknown 2602.78ms; source plugins.metadata.scan 342.64ms; agent.prepare 261.58ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3197 ms | 211 ms | 2986 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-agent-cold-warm-message-67b331a3-kova-260802-145029-ac5f9b/openclaw/timeline.jsonl |
  | warm | 3207 ms | 209 ms | 2998 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-agent-cold-warm-message-67b331a3-kova-260802-145029-ac5f9b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 133 ms | 37 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 7 | 0 | 81 ms | 31 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 129 ms | 37 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 7 | 0 | 83 ms | 38 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260802-145029-ac5f9b-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260802-145029-ac5f9b-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260802-145029-ac5f9b-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-fresh-install-fresh-r1-697fad55-kova-260802-145029-ac5f9b
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-fresh-install-fresh-r2-da880701-kova-260802-145029-ac5f9b
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-fresh-install-fresh-r3-82f8bdbd-kova-260802-145029-ac5f9b
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-fresh-install-onboarded-9f99e904-kova-260802-145029-ac5f9b
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-fresh-install-onboarded-f9c24855-kova-260802-145029-ac5f9b
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-fresh-install-onboarded-fe872c26-kova-260802-145029-ac5f9b
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-bundled-plugin-startup-4a0cbdf7-kova-260802-145029-ac5f9b
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-bundled-plugin-startup-809ede2b-kova-260802-145029-ac5f9b
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-145029-ac5f9b/kova-bundled-plugin-startup-5377119f-kova-260802-145029-ac5f9b
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msbx3e8m-3yv-77fe493b`
- Result: removed
- Duration: 406ms

