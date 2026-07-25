# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 959.2 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 959.2 MB exceeded threshold 950 MB |
| Blocking findings | 6 |
| Warnings | 20 |
| Records | 18 (PASS:15, FAIL:3) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260725-023419-5c08e2` |
| Generated | 2026-07-25T02:41:46.565Z |
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
| PASS | 15 |
| FAIL | 3 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 3
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 3 blocking, 0 warning
  - primary: gateway peak RSS 959.2 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 959.2 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 959.2 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 977.6 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 952 MB exceeded threshold 950 MB
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
| info | Kova | report | 20 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5030ms | 983.6MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 4957ms | 976.3MB | n/a | 155% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4991ms | 969.8MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 4976ms | 959.2MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153.9% | 4537ms | 4505ms | 4142ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4991ms | 963.9MB | n/a | 154% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5535ms | 955.9 MB | 1625.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5030ms | 987.7 MB | 1706.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5008ms | 983.6 MB | 1695.1 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4905ms | 976.3 MB | 1692.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4958ms | 976.9 MB | 1673.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4957ms | 959.8 MB | 1677 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4991ms | 969.4 MB | 975 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4985ms | 969.8 MB | 974.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5008ms | 972 MB | 977.5 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4974ms | 959.2 MB | 1435.8 MB | n/a | n/a | gateway peak RSS 959.2 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 4976ms | 977.6 MB | 1455 MB | n/a | n/a | gateway peak RSS 977.6 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 4978ms | 952 MB | 1432.1 MB | n/a | n/a | gateway peak RSS 952 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 985.6 MB | 4581ms | 4529ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 957.3 MB | 4537ms | 4502ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 979.7 MB | 4513ms | 4505ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5052ms | 983.9 MB | 1660.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4932ms | 963.9 MB | 1634.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4991ms | 944.7 MB | 1647.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 987.7 MB (scenario fresh-install/fresh); CPU 155% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 987.7 MB (scenario fresh-install/fresh); CPU 155% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 985.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 985.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 985.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 765.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 552.6 MB (scenario fresh-install/fresh); CPU 147% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 480.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-bundled-plugin-startup-4a0cbdf7-kova-260725-023419-5c08e2
Measurements:
- startup: listening 4518ms; health 4974ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 449ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/gateway-start 456ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 959.2 MB; tracked total 1435.8 MB; max CPU 155%; samples 14; roles gateway 959.2MB/155%, gateway-tree 959.2MB/155%, command-tree 476.8MB/148%, plugin-cli 476.8MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 726.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 959.2 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-bundled-plugin-startup-809ede2b-kova-260725-023419-5c08e2
Measurements:
- startup: listening 4520ms; health 4976ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 456ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/restart 546ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 977.6 MB; tracked total 1455 MB; max CPU 153%; samples 14; roles gateway 977.6MB/153%, gateway-tree 977.6MB/153%, command-tree 477.4MB/152%, plugin-cli 477.4MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 733.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 977.6 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-bundled-plugin-startup-5377119f-kova-260725-023419-5c08e2
Measurements:
- startup: listening 4518ms; health 4978ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 447ms; post-ready p95 1ms; failures 27; final failures 0; slowest startup-sample/gateway-start 460ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 952 MB; tracked total 1432.1 MB; max CPU 153%; samples 14; roles gateway 952MB/153%, gateway-tree 952MB/153%, command-tree 480.2MB/147%, plugin-cli 480.2MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 714.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 952 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-agent-cold-warm-message-8e2a29af-kova-260725-023419-5c08e2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 985.6 MB; tracked total 985.6 MB; max CPU 153.9%; samples 16; roles agent-cli 985.6MB/153.9%, agent-process 985.6MB/153.9%, command-tree 985.6MB/153.9%, status-cli 761.7MB/153.7%
- agent: turn 4581ms; cold/warm 4581ms/4529ms; cold-warm delta 52ms; pre-provider 4186ms; provider 2ms; metadata scans 14 (249.35ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4578.4ms; max 4581ms; pre-provider p95 4184.95ms
- agent CLI attribution: cold known 121ms / unattributed 4065ms; warm known 127ms / unattributed 4038ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4581ms; pre-provider 4186ms; provider 2ms; post-provider 393ms; response true
    - active window: metadata scans 7 (120.53ms total, max 57.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4186ms; provider 2ms; post-provider 393ms; unknown 3726.03ms; source plugins.metadata.scan 459.97ms
  - warm: total 4529ms; pre-provider 4165ms; provider 1ms; post-provider 363ms; response true
    - active window: metadata scans 7 (128.82ms total, max 59.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4165ms; provider 1ms; post-provider 363ms; unknown 3705.03ms; source plugins.metadata.scan 459.97ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4186 ms | 121 ms | 4065 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-agent-cold-warm-message-8e2a29af-kova-260725-023419-5c08e2/openclaw/timeline.jsonl |
  | warm | 4165 ms | 127 ms | 4038 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-agent-cold-warm-message-8e2a29af-kova-260725-023419-5c08e2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 59 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-agent-cold-warm-message-2ab680e0-kova-260725-023419-5c08e2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 957.3 MB; tracked total 957.3 MB; max CPU 152.4%; samples 16; roles agent-cli 957.3MB/152.4%, command-tree 957.3MB/154.7%, agent-process 957.3MB/152.4%, status-cli 765.1MB/154.7%
- agent: turn 4537ms; cold/warm 4537ms/4502ms; cold-warm delta 35ms; pre-provider 4142ms; provider 2ms; metadata scans 14 (242.15ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4535.25ms; max 4537ms; pre-provider p95 4149.6ms
- agent CLI attribution: cold known 116ms / unattributed 4026ms; warm known 125ms / unattributed 4025ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4537ms; pre-provider 4142ms; provider 2ms; post-provider 393ms; response true
    - active window: metadata scans 7 (117.14ms total, max 54.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4142ms; provider 2ms; post-provider 393ms; unknown 3694.21ms; source plugins.metadata.scan 447.79ms
  - warm: total 4502ms; pre-provider 4150ms; provider 1ms; post-provider 351ms; response true
    - active window: metadata scans 7 (125.01ms total, max 59.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4150ms; provider 1ms; post-provider 351ms; unknown 3702.21ms; source plugins.metadata.scan 447.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4142 ms | 116 ms | 4026 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-agent-cold-warm-message-2ab680e0-kova-260725-023419-5c08e2/openclaw/timeline.jsonl |
  | warm | 4150 ms | 125 ms | 4025 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-agent-cold-warm-message-2ab680e0-kova-260725-023419-5c08e2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 116 ms | 54 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 60 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-agent-cold-warm-message-67b331a3-kova-260725-023419-5c08e2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 979.7 MB; tracked total 979.7 MB; max CPU 154.4%; samples 16; roles agent-cli 979.7MB/154.4%, agent-process 979.7MB/154.4%, command-tree 979.7MB/154.4%, status-cli 762.2MB/152.7%
- agent: turn 4513ms; cold/warm 4513ms/4505ms; cold-warm delta 8ms; pre-provider 4084ms; provider 2ms; metadata scans 14 (250.45ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4512.6ms; max 4513ms; pre-provider p95 4149.55ms
- agent CLI attribution: cold known 121ms / unattributed 3963ms; warm known 131ms / unattributed 4022ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4513ms; pre-provider 4084ms; provider 2ms; post-provider 427ms; response true
    - active window: metadata scans 7 (120.02ms total, max 54.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4084ms; provider 2ms; post-provider 427ms; unknown 3636.46ms; source plugins.metadata.scan 447.54ms
  - warm: total 4505ms; pre-provider 4153ms; provider 1ms; post-provider 351ms; response true
    - active window: metadata scans 7 (130.43ms total, max 62.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4153ms; provider 1ms; post-provider 351ms; unknown 3705.46ms; source plugins.metadata.scan 447.54ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4084 ms | 121 ms | 3963 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-agent-cold-warm-message-67b331a3-kova-260725-023419-5c08e2/openclaw/timeline.jsonl |
  | warm | 4153 ms | 131 ms | 4022 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-agent-cold-warm-message-67b331a3-kova-260725-023419-5c08e2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 54 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 63 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-023419-5c08e2-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-023419-5c08e2-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-023419-5c08e2-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-fresh-install-fresh-r1-697fad55-kova-260725-023419-5c08e2
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-fresh-install-fresh-r2-da880701-kova-260725-023419-5c08e2
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-023419-5c08e2
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-fresh-install-onboarded-9f99e904-kova-260725-023419-5c08e2
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-fresh-install-onboarded-f9c24855-kova-260725-023419-5c08e2
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-fresh-install-onboarded-fe872c26-kova-260725-023419-5c08e2
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-023419-5c08e2
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-023419-5c08e2
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-023419-5c08e2/kova-bundled-runtime-deps-mi-150715ba-kova-260725-023419-5c08e2
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzr9v66-425-b3d78971`
- Result: removed
- Duration: 431ms

