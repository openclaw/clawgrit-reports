# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 954.1 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 954.1 MB exceeded threshold 950 MB |
| Blocking findings | 4 |
| Warnings | 20 |
| Records | 18 (PASS:16, FAIL:2) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260724-112359-8da1a4` |
| Generated | 2026-07-24T11:31:36.764Z |
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
| PASS | 16 |
| FAIL | 2 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 2
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 2 blocking, 0 warning
  - primary: gateway peak RSS 954.1 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 954.1 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 954.1 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 975.6 MB exceeded threshold 950 MB
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
| info | Kova | report | 18 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5087ms | 947.8MB | n/a | 150% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 4866ms | 939.8MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4816ms | 922.5MB | n/a | 149% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:2, PASS:1 | 4853ms | 954.1MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.9% | 4566ms | 4517ms | 4233ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5164ms | 948.6MB | n/a | 154% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5835ms | 947.2 MB | 1656.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5087ms | 947.8 MB | 1627.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5000ms | 957.1 MB | 1627.1 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4926ms | 939.8 MB | 1607.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4866ms | 927 MB | 1595.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4797ms | 946.4 MB | 1418.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5357ms | 922.5 MB | 924 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4816ms | 931.3 MB | 936.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4796ms | 917.8 MB | 921.7 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4883ms | 954.1 MB | 1434.4 MB | n/a | n/a | gateway peak RSS 954.1 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 4759ms | 975.6 MB | 1443.1 MB | n/a | n/a | gateway peak RSS 975.6 MB exceeded threshold 950 MB |
| 3 | PASS | bundled-plugin-startup/fresh |  | 4853ms | 923.4 MB | 1404.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 983.1 MB | 4509ms | 4204ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 967.6 MB | 4566ms | 4517ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 983.6 MB | 4998ms | 4774ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5164ms | 948.6 MB | 1673.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5832ms | 948.6 MB | 1645.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5160ms | 947.2 MB | 1676.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 983.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 983.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 983.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 778.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 975.6 MB (scenario bundled-plugin-startup/fresh); CPU 157% (scenario fresh-install/fresh)
- gateway-tree: RSS 975.6 MB (scenario bundled-plugin-startup/fresh); CPU 157% (scenario fresh-install/fresh)
- plugin-cli: RSS 697.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario fresh-install/fresh)
- model-cli: RSS 603.4 MB (scenario fresh-install/fresh); CPU 150% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-bundled-plugin-startup-4a0cbdf7-kova-260724-112359-8da1a4
Measurements:
- startup: listening 4269ms; health 4883ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 614ms; post-ready p95 3ms; failures 25; final failures 0; slowest startup-sample/restart 646ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 954.1 MB; tracked total 1434.4 MB; max CPU 153%; samples 14; roles gateway 954.1MB/153%, gateway-tree 954.1MB/153%, command-tree 480.3MB/151%, plugin-cli 480.3MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 714.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 954.1 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-bundled-plugin-startup-809ede2b-kova-260724-112359-8da1a4
Measurements:
- startup: listening 4266ms; health 4759ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 493ms; post-ready p95 2ms; failures 26; final failures 0; slowest startup-sample/restart 587ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 975.6 MB; tracked total 1443.1 MB; max CPU 151%; samples 14; roles gateway 975.6MB/151%, command-tree 467.7MB/151%, gateway-tree 975.6MB/151%, plugin-cli 467.7MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 719.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 975.6 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-agent-cold-warm-message-8e2a29af-kova-260724-112359-8da1a4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 983.1 MB; tracked total 983.1 MB; max CPU 155.9%; samples 15; roles agent-cli 983.1MB/155.9%, agent-process 983.1MB/155.9%, command-tree 983.1MB/155.9%, status-cli 562.7MB/151.8%
- agent: turn 4509ms; cold/warm 4509ms/4204ms; cold-warm delta 305ms; pre-provider 4224ms; provider 2ms; metadata scans 14 (241.02ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4493.75ms; max 4509ms; pre-provider p95 4211.25ms
- agent CLI attribution: cold known 120ms / unattributed 4104ms; warm known 121ms / unattributed 3848ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4509ms; pre-provider 4224ms; provider 2ms; post-provider 283ms; response true
    - active window: metadata scans 7 (120.21ms total, max 56.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4224ms; provider 2ms; post-provider 283ms; unknown 3785.14ms; source plugins.metadata.scan 438.86ms
  - warm: total 4204ms; pre-provider 3969ms; provider 1ms; post-provider 234ms; response true
    - active window: metadata scans 7 (120.81ms total, max 59.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3969ms; provider 1ms; post-provider 234ms; unknown 3530.14ms; source plugins.metadata.scan 438.86ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4224 ms | 120 ms | 4104 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-agent-cold-warm-message-8e2a29af-kova-260724-112359-8da1a4/openclaw/timeline.jsonl |
  | warm | 3969 ms | 121 ms | 3848 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-agent-cold-warm-message-8e2a29af-kova-260724-112359-8da1a4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 120 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 59 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-agent-cold-warm-message-2ab680e0-kova-260724-112359-8da1a4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 967.6 MB; tracked total 967.6 MB; max CPU 156.9%; samples 16; roles agent-cli 967.6MB/156.9%, command-tree 967.6MB/159.8%, agent-process 967.6MB/156.9%, status-cli 745.2MB/159.8%
- agent: turn 4566ms; cold/warm 4566ms/4517ms; cold-warm delta 49ms; pre-provider 4233ms; provider 3ms; metadata scans 14 (263.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4563.55ms; max 4566ms; pre-provider p95 4243.45ms
- agent CLI attribution: cold known 118ms / unattributed 4115ms; warm known 148ms / unattributed 4096ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4566ms; pre-provider 4233ms; provider 3ms; post-provider 330ms; response true
    - active window: metadata scans 7 (118.06ms total, max 55.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4233ms; provider 3ms; post-provider 330ms; unknown 3777.63ms; source plugins.metadata.scan 455.37ms
  - warm: total 4517ms; pre-provider 4244ms; provider 1ms; post-provider 272ms; response true
    - active window: metadata scans 7 (145.78ms total, max 67.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4244ms; provider 1ms; post-provider 272ms; unknown 3788.63ms; source plugins.metadata.scan 455.37ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4233 ms | 118 ms | 4115 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-agent-cold-warm-message-2ab680e0-kova-260724-112359-8da1a4/openclaw/timeline.jsonl |
  | warm | 4244 ms | 148 ms | 4096 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-agent-cold-warm-message-2ab680e0-kova-260724-112359-8da1a4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 118 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 148 ms | 68 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-agent-cold-warm-message-67b331a3-kova-260724-112359-8da1a4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 983.6 MB; tracked total 983.6 MB; max CPU 157.9%; samples 16; roles agent-cli 983.6MB/157.9%, agent-process 983.6MB/157.9%, command-tree 983.6MB/157.9%, status-cli 778.9MB/153.7%
- agent: turn 4998ms; cold/warm 4998ms/4774ms; cold-warm delta 224ms; pre-provider 4666ms; provider 2ms; metadata scans 14 (289.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4986.8ms; max 4998ms; pre-provider p95 4658.05ms
- agent CLI attribution: cold known 141ms / unattributed 4525ms; warm known 150ms / unattributed 4357ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4998ms; pre-provider 4666ms; provider 2ms; post-provider 330ms; response true
    - active window: metadata scans 7 (140.42ms total, max 63.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4666ms; provider 2ms; post-provider 330ms; unknown 4170.28ms; source plugins.metadata.scan 495.72ms
  - warm: total 4774ms; pre-provider 4507ms; provider 2ms; post-provider 265ms; response true
    - active window: metadata scans 7 (149.31ms total, max 68.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4507ms; provider 2ms; post-provider 265ms; unknown 4011.28ms; source plugins.metadata.scan 495.72ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4666 ms | 141 ms | 4525 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-agent-cold-warm-message-67b331a3-kova-260724-112359-8da1a4/openclaw/timeline.jsonl |
  | warm | 4507 ms | 150 ms | 4357 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-agent-cold-warm-message-67b331a3-kova-260724-112359-8da1a4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 150 ms | 69 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-112359-8da1a4-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-112359-8da1a4-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-112359-8da1a4-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-fresh-install-fresh-r1-697fad55-kova-260724-112359-8da1a4
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-fresh-install-fresh-r2-da880701-kova-260724-112359-8da1a4
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-112359-8da1a4
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-fresh-install-onboarded-9f99e904-kova-260724-112359-8da1a4
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-fresh-install-onboarded-f9c24855-kova-260724-112359-8da1a4
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-fresh-install-onboarded-fe872c26-kova-260724-112359-8da1a4
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-112359-8da1a4
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-112359-8da1a4
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-112359-8da1a4/kova-bundled-runtime-deps-mi-150715ba-kova-260724-112359-8da1a4
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mryur630-414-65efa7fa`
- Result: removed
- Duration: 417ms

