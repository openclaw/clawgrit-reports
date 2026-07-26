# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1003.7 MB exceeded threshold 1000 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1003.7 MB exceeded threshold 1000 MB |
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
| Run ID | `kova-260726-093052-2487cf` |
| Generated | 2026-07-26T09:38:33.488Z |
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
  - primary: gateway peak RSS 1003.7 MB exceeded threshold 1000 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1003.7 MB exceeded threshold 1000 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1003.7 MB exceeded threshold 1000 MB
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
| fresh-install/fresh | 3 | PASS:3 | 5141ms | 888.8MB | n/a | 155% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5215ms | 902.1MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5189ms | 981MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 5218ms | 991.8MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 151.9% | 4709ms | 4708ms | 4162ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5191ms | 947.1MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5691ms | 888.8 MB | 1670.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5109ms | 885.2 MB | 1675.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5141ms | 889.6 MB | 1676.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5169ms | 902.1 MB | 1650.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5215ms | 907.2 MB | 1660.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5225ms | 899.2 MB | 1611.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5187ms | 981 MB | 981 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5189ms | 983.2 MB | 983.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5207ms | 946.6 MB | 946.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5265ms | 986.7 MB | 1350.5 MB | n/a | n/a |  |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5189ms | 1003.7 MB | 1459.4 MB | n/a | n/a | gateway peak RSS 1003.7 MB exceeded threshold 1000 MB |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5218ms | 991.8 MB | 1443.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 892.3 MB | 4709ms | 4722ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 944.3 MB | 4690ms | 4608ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 878.8 MB | 4741ms | 4708ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5151ms | 955.7 MB | 1590.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5191ms | 947.1 MB | 1679 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5228ms | 941.9 MB | 1705.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1003.7 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario fresh-install/fresh)
- gateway-tree: RSS 1003.7 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario fresh-install/fresh)
- agent-cli: RSS 944.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 944.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 944.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 851.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 570.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 456.1 MB (scenario bundled-plugin-startup/fresh); CPU 146% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-bundled-plugin-startup-809ede2b-kova-260726-093052-2487cf
Measurements:
- startup: listening 4773ms; health 5189ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 416ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/restart 654ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1003.7 MB; tracked total 1459.4 MB; max CPU 153%; samples 14; roles gateway 1003.7MB/153%, gateway-tree 1003.7MB/153%, command-tree 455.9MB/146%, plugin-cli 455.9MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 755.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1003.7 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-agent-cold-warm-message-8e2a29af-kova-260726-093052-2487cf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 892.3 MB; tracked total 892.3 MB; max CPU 149.9%; samples 16; roles agent-cli 892.3MB/149.9%, command-tree 892.3MB/153.7%, agent-process 892.3MB/149.9%, status-cli 787.9MB/153.7%
- agent: turn 4722ms; cold/warm 4709ms/4722ms; cold-warm delta 0ms; pre-provider 4229ms; provider 1ms; metadata scans 14 (258.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4721.35ms; max 4722ms; pre-provider p95 4225.65ms
- agent CLI attribution: cold known 129ms / unattributed 4033ms; warm known 129ms / unattributed 4100ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4709ms; pre-provider 4162ms; provider 3ms; post-provider 544ms; response true
    - active window: metadata scans 7 (129.98ms total, max 58.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4162ms; provider 3ms; post-provider 544ms; unknown 3772.65ms; source plugins.metadata.scan 389.35ms
  - warm: total 4722ms; pre-provider 4229ms; provider 1ms; post-provider 492ms; response true
    - active window: metadata scans 7 (128.46ms total, max 65.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4229ms; provider 1ms; post-provider 492ms; unknown 3839.65ms; source plugins.metadata.scan 389.35ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4162 ms | 129 ms | 4033 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-agent-cold-warm-message-8e2a29af-kova-260726-093052-2487cf/openclaw/timeline.jsonl |
  | warm | 4229 ms | 129 ms | 4100 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-agent-cold-warm-message-8e2a29af-kova-260726-093052-2487cf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 65 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-agent-cold-warm-message-2ab680e0-kova-260726-093052-2487cf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 944.3 MB; tracked total 944.3 MB; max CPU 152.9%; samples 16; roles agent-cli 944.3MB/152.9%, agent-process 944.3MB/152.9%, command-tree 944.3MB/152.9%, status-cli 788.4MB/151.4%
- agent: turn 4690ms; cold/warm 4690ms/4608ms; cold-warm delta 82ms; pre-provider 4145ms; provider 3ms; metadata scans 14 (244.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4685.9ms; max 4690ms; pre-provider p95 4143.95ms
- agent CLI attribution: cold known 122ms / unattributed 4023ms; warm known 121ms / unattributed 4003ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4690ms; pre-provider 4145ms; provider 3ms; post-provider 542ms; response true
    - active window: metadata scans 7 (122.6ms total, max 55.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4145ms; provider 3ms; post-provider 542ms; unknown 3770.44ms; source plugins.metadata.scan 374.56ms
  - warm: total 4608ms; pre-provider 4124ms; provider 0ms; post-provider 484ms; response true
    - active window: metadata scans 7 (121.97ms total, max 60ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4124ms; provider 0ms; post-provider 484ms; unknown 3749.44ms; source plugins.metadata.scan 374.56ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4145 ms | 122 ms | 4023 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-agent-cold-warm-message-2ab680e0-kova-260726-093052-2487cf/openclaw/timeline.jsonl |
  | warm | 4124 ms | 121 ms | 4003 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-agent-cold-warm-message-2ab680e0-kova-260726-093052-2487cf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 122 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-agent-cold-warm-message-67b331a3-kova-260726-093052-2487cf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 878.8 MB; tracked total 878.8 MB; max CPU 151.9%; samples 16; roles agent-cli 878.8MB/151.9%, agent-process 878.8MB/151.9%, command-tree 878.8MB/151.9%, status-cli 851.4MB/151.9%
- agent: turn 4741ms; cold/warm 4741ms/4708ms; cold-warm delta 33ms; pre-provider 4218ms; provider 2ms; metadata scans 14 (241.17ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4739.35ms; max 4741ms; pre-provider p95 4217.25ms
- agent CLI attribution: cold known 122ms / unattributed 4096ms; warm known 116ms / unattributed 4087ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4741ms; pre-provider 4218ms; provider 2ms; post-provider 521ms; response true
    - active window: metadata scans 7 (125.17ms total, max 58.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4218ms; provider 2ms; post-provider 521ms; unknown 3853.49ms; source plugins.metadata.scan 364.51ms
  - warm: total 4708ms; pre-provider 4203ms; provider 1ms; post-provider 504ms; response true
    - active window: metadata scans 7 (116ms total, max 56.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4203ms; provider 1ms; post-provider 504ms; unknown 3838.49ms; source plugins.metadata.scan 364.51ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4218 ms | 122 ms | 4096 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-agent-cold-warm-message-67b331a3-kova-260726-093052-2487cf/openclaw/timeline.jsonl |
  | warm | 4203 ms | 116 ms | 4087 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-agent-cold-warm-message-67b331a3-kova-260726-093052-2487cf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 122 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 116 ms | 57 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-093052-2487cf-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-093052-2487cf-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-093052-2487cf-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-fresh-install-fresh-r1-697fad55-kova-260726-093052-2487cf
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-fresh-install-fresh-r2-da880701-kova-260726-093052-2487cf
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-fresh-install-fresh-r3-82f8bdbd-kova-260726-093052-2487cf
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-fresh-install-onboarded-9f99e904-kova-260726-093052-2487cf
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-fresh-install-onboarded-f9c24855-kova-260726-093052-2487cf
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-fresh-install-onboarded-fe872c26-kova-260726-093052-2487cf
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-093052-2487cf
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-093052-2487cf
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-093052-2487cf/kova-bundled-runtime-deps-mi-150715ba-kova-260726-093052-2487cf
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms1llenx-41x-b45cef4c`
- Result: removed
- Duration: 410ms

