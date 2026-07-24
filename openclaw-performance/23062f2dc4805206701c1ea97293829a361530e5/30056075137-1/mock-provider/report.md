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
| Run ID | `kova-260724-002520-283b6f` |
| Generated | 2026-07-24T00:32:41.129Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3137ms | 939.7MB | n/a | 150% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3068ms | 941.7MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3083ms | 926.2MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2995ms | 940.1MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153.9% | 4426ms | 4496ms | 4114ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3276ms | 936.2MB | n/a | 154% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3864ms | 939.7 MB | 1639.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3137ms | 930 MB | 1639.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3115ms | 953.5 MB | 1486.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3079ms | 941.7 MB | 1699.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3043ms | 937 MB | 1665.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3068ms | 960.9 MB | 1735.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2953ms | 958.7 MB | 963.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3083ms | 923.7 MB | 928.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3129ms | 926.2 MB | 931.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2959ms | 940.1 MB | 1475.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2995ms | 933.1 MB | 1462.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3054ms | 941.7 MB | 1476 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 982.3 MB | 4426ms | 4318ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 961.8 MB | 4358ms | 4496ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 972.9 MB | 4502ms | 4575ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3276ms | 940.9 MB | 1717.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3341ms | 936.2 MB | 1662.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2988ms | 923.3 MB | 1685.9 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 982.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 982.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 982.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 776.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 758.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 960.9 MB (scenario fresh-install/onboarded-user); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 960.9 MB (scenario fresh-install/onboarded-user); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 601.7 MB (scenario fresh-install/fresh); CPU 153% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-agent-cold-warm-message-8e2a29af-kova-260724-002520-283b6f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 982.3 MB; tracked total 982.3 MB; max CPU 154.9%; samples 15; roles agent-cli 982.3MB/154.9%, agent-process 982.3MB/154.9%, command-tree 982.3MB/154.9%, status-cli 565.8MB/152.8%
- agent: turn 4426ms; cold/warm 4426ms/4318ms; cold-warm delta 108ms; pre-provider 4114ms; provider 3ms; metadata scans 14 (263.45ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4420.6ms; max 4426ms; pre-provider p95 4112.15ms
- agent CLI attribution: cold known 123ms / unattributed 3991ms; warm known 139ms / unattributed 3938ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4426ms; pre-provider 4114ms; provider 3ms; post-provider 309ms; response true
    - active window: metadata scans 7 (124.5ms total, max 54.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4114ms; provider 3ms; post-provider 309ms; unknown 3658.06ms; source plugins.metadata.scan 455.94ms
  - warm: total 4318ms; pre-provider 4077ms; provider 1ms; post-provider 240ms; response true
    - active window: metadata scans 7 (138.95ms total, max 69.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4077ms; provider 1ms; post-provider 240ms; unknown 3621.06ms; source plugins.metadata.scan 455.94ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4114 ms | 123 ms | 3991 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-agent-cold-warm-message-8e2a29af-kova-260724-002520-283b6f/openclaw/timeline.jsonl |
  | warm | 4077 ms | 139 ms | 3938 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-agent-cold-warm-message-8e2a29af-kova-260724-002520-283b6f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 54 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 139 ms | 69 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-agent-cold-warm-message-2ab680e0-kova-260724-002520-283b6f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 961.8 MB; tracked total 961.8 MB; max CPU 153.9%; samples 16; roles agent-cli 961.8MB/153.9%, command-tree 961.8MB/155.8%, agent-process 961.8MB/153.9%, status-cli 769.3MB/155.8%
- agent: turn 4496ms; cold/warm 4358ms/4496ms; cold-warm delta 0ms; pre-provider 4231ms; provider 2ms; metadata scans 14 (257.82ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4489.1ms; max 4496ms; pre-provider p95 4222.3ms
- agent CLI attribution: cold known 119ms / unattributed 3938ms; warm known 139ms / unattributed 4092ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.49ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4358ms; pre-provider 4057ms; provider 3ms; post-provider 298ms; response true
    - active window: metadata scans 7 (118.12ms total, max 55.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4057ms; provider 3ms; post-provider 298ms; unknown 3588.43ms; source plugins.metadata.scan 468.57ms
  - warm: total 4496ms; pre-provider 4231ms; provider 2ms; post-provider 263ms; response true
    - active window: metadata scans 7 (139.7ms total, max 63.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4231ms; provider 2ms; post-provider 263ms; unknown 3762.43ms; source plugins.metadata.scan 468.57ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4057 ms | 119 ms | 3938 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-agent-cold-warm-message-2ab680e0-kova-260724-002520-283b6f/openclaw/timeline.jsonl |
  | warm | 4231 ms | 139 ms | 4092 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-agent-cold-warm-message-2ab680e0-kova-260724-002520-283b6f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 119 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 139 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-agent-cold-warm-message-67b331a3-kova-260724-002520-283b6f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 972.9 MB; tracked total 972.9 MB; max CPU 153.9%; samples 16; roles agent-cli 972.9MB/153.9%, command-tree 972.9MB/155.6%, agent-process 972.9MB/153.9%, status-cli 769.5MB/155.6%
- agent: turn 4575ms; cold/warm 4502ms/4575ms; cold-warm delta 0ms; pre-provider 4318ms; provider 1ms; metadata scans 14 (270.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4571.35ms; max 4575ms; pre-provider p95 4311.85ms
- agent CLI attribution: cold known 135ms / unattributed 4060ms; warm known 137ms / unattributed 4181ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4502ms; pre-provider 4195ms; provider 2ms; post-provider 305ms; response true
    - active window: metadata scans 7 (134.36ms total, max 58.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4195ms; provider 2ms; post-provider 305ms; unknown 3728.27ms; source plugins.metadata.scan 466.73ms
  - warm: total 4575ms; pre-provider 4318ms; provider 1ms; post-provider 256ms; response true
    - active window: metadata scans 7 (136.14ms total, max 63.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4318ms; provider 1ms; post-provider 256ms; unknown 3851.27ms; source plugins.metadata.scan 466.73ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4195 ms | 135 ms | 4060 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-agent-cold-warm-message-67b331a3-kova-260724-002520-283b6f/openclaw/timeline.jsonl |
  | warm | 4318 ms | 137 ms | 4181 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-agent-cold-warm-message-67b331a3-kova-260724-002520-283b6f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 64 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-002520-283b6f-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-002520-283b6f-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-002520-283b6f-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-fresh-install-fresh-r1-697fad55-kova-260724-002520-283b6f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-fresh-install-fresh-r2-da880701-kova-260724-002520-283b6f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-002520-283b6f
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-fresh-install-onboarded-9f99e904-kova-260724-002520-283b6f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-fresh-install-onboarded-f9c24855-kova-260724-002520-283b6f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-fresh-install-onboarded-fe872c26-kova-260724-002520-283b6f
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-002520-283b6f
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-002520-283b6f
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-002520-283b6f/kova-bundled-runtime-deps-mi-150715ba-kova-260724-002520-283b6f
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mry7852j-41n-9108c3bc`
- Result: removed
- Duration: 485ms

