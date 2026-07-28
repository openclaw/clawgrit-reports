# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1074.9 MB exceeded threshold 1050 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1074.9 MB exceeded threshold 1050 MB |
| Blocking findings | 21 |
| Warnings | 20 |
| Records | 18 (PASS:11, FAIL:7) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260728-134810-87a9f1` |
| Generated | 2026-07-28T13:58:01.016Z |
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
| PASS | 11 |
| FAIL | 7 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 7
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 7 blocking, 0 warning
  - primary: gateway peak RSS 1074.9 MB exceeded threshold 1050 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1074.9 MB exceeded threshold 1050 MB
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
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1074.9 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1003.9 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1024.6 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1097.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1097.6 MB, agent-process 1097.6 MB, command-tree 1097.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1062.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1062.9 MB, agent-process 1062.9 MB, command-tree 1062.9 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1018.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1018.8 MB, agent-process 1018.8 MB, command-tree 1018.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1052.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1052.9 MB, gateway-tree 929.5 MB, command-tree 722.5 MB
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
| info | Kova | report | 35 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 7312ms | 926.3MB | n/a | 162% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5924ms | 920.6MB | n/a | 160% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:2, FAIL:1 | 5618ms | 1037.6MB | n/a | 157% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:2, PASS:1 | 6161ms | 1003.9MB | n/a | 164% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 185.6% | 4324ms | 4710ms | 4131ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:1, PASS:2 | 5623ms | 1006.2MB | n/a | 158% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 7758ms | 877.3 MB | 1564 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 7312ms | 926.3 MB | 1682.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 6211ms | 935.3 MB | 1606.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 6514ms | 910.9 MB | 1601.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5924ms | 920.6 MB | 1656.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5212ms | 952.1 MB | 1706.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6611ms | 1037.6 MB | 1037.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5574ms | 1036.8 MB | 1036.8 MB | n/a | n/a |  |
| 3 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 5618ms | 1074.9 MB | 1074.9 MB | n/a | n/a | gateway peak RSS 1074.9 MB exceeded threshold 1050 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5705ms | 1003.9 MB | 1568.5 MB | n/a | n/a | gateway peak RSS 1003.9 MB exceeded threshold 1000 MB |
| 2 | PASS | bundled-plugin-startup/fresh |  | 6161ms | 996 MB | 1607.9 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 6578ms | 1024.6 MB | 1563.7 MB | n/a | n/a | gateway peak RSS 1024.6 MB exceeded threshold 1000 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1097.6 MB | 4900ms | 4831ms | agent-cli peak RSS 1097.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1097.6 MB, agent-process 1097.6 MB, command-tree 1097.6 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1062.9 MB | 4324ms | 4710ms | agent-cli peak RSS 1062.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1062.9 MB, agent-process 1062.9 MB, command-tree 1062.9 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1018.8 MB | 4190ms | 4160ms | agent-cli peak RSS 1018.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1018.8 MB, agent-process 1018.8 MB, command-tree 1018.8 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5623ms | 1052.9 MB | 1651.6 MB | n/a | n/a | gateway peak RSS 1052.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1052.9 MB, gateway-tree 929.5 MB, command-tree 722.5 MB |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5480ms | 988.4 MB | 1694 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 6093ms | 1006.2 MB | 1601.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1097.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 185.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1097.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 185.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1097.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 185.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1074.9 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 164% (scenario fresh-install/fresh)
- status-cli: RSS 831.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 952.1 MB (scenario fresh-install/onboarded-user); CPU 164% (scenario fresh-install/fresh)
- model-cli: RSS 590.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 167% (scenario fresh-install/fresh)
- plugin-cli: RSS 754.5 MB (scenario fresh-install/onboarded-user); CPU 165% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-runtime-deps sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-bundled-runtime-deps-mi-150715ba-kova-260728-134810-87a9f1
Measurements:
- startup: listening 5284ms; health 5618ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 334ms; post-ready p95 not-collected; failures 31; final failures 0; slowest startup-sample/warm-restart 478ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1074.9 MB; tracked total 1074.9 MB; max CPU 157%; samples 8; roles gateway 1074.9MB/157%, gateway-tree 889.1MB/157%, command-tree 5.7MB/1%, uncategorized 5.7MB/1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 700.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1074.9 MB exceeded threshold 1050 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-bundled-plugin-startup-4a0cbdf7-kova-260728-134810-87a9f1
Measurements:
- startup: listening 5282ms; health 5705ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 423ms; post-ready p95 3ms; failures 31; final failures 0; slowest startup-sample/restart 667ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1003.9 MB; tracked total 1568.5 MB; max CPU 161%; samples 16; roles gateway 1003.9MB/161%, gateway-tree 895.4MB/161%, command-tree 673.4MB/157%, plugin-cli 673.4MB/157%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 808.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1003.9 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-bundled-plugin-startup-5377119f-kova-260728-134810-87a9f1
Measurements:
- startup: listening 6035ms; health 6578ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 543ms; post-ready p95 3ms; failures 35; final failures 0; slowest startup-sample/restart 581ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1024.6 MB; tracked total 1563.7 MB; max CPU 164%; samples 18; roles gateway 1024.6MB/164%, gateway-tree 901.6MB/164%, command-tree 662.4MB/161%, plugin-cli 662.4MB/161%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 737.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1024.6 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-agent-cold-warm-message-8e2a29af-kova-260728-134810-87a9f1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1097.6 MB; tracked total 1097.6 MB; max CPU 185.6%; samples 16; roles agent-cli 1097.6MB/185.6%, agent-process 1097.6MB/185.6%, command-tree 1097.6MB/185.6%, status-cli 831.8MB/179.5%
- agent: turn 4900ms; cold/warm 4900ms/4831ms; cold-warm delta 69ms; pre-provider 4720ms; provider 3ms; metadata scans 14 (235.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4896.55ms; max 4900ms; pre-provider p95 4717ms
- agent CLI attribution: cold known 111ms / unattributed 4609ms; warm known 123ms / unattributed 4537ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1097.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1097.6 MB, agent-process 1097.6 MB, command-tree 1097.6 MB
  - agent-cli peak RSS 1097.6 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1097.6 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4900ms; pre-provider 4720ms; provider 3ms; post-provider 177ms; response true
    - active window: metadata scans 7 (110.32ms total, max 62.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4720ms; provider 3ms; post-provider 177ms; unknown 4351.21ms; source plugins.metadata.scan 368.79ms
  - warm: total 4831ms; pre-provider 4660ms; provider 1ms; post-provider 170ms; response true
    - active window: metadata scans 7 (125.01ms total, max 67.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4660ms; provider 1ms; post-provider 170ms; unknown 4291.21ms; source plugins.metadata.scan 368.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4720 ms | 111 ms | 4609 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-agent-cold-warm-message-8e2a29af-kova-260728-134810-87a9f1/openclaw/timeline.jsonl |
  | warm | 4660 ms | 123 ms | 4537 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-agent-cold-warm-message-8e2a29af-kova-260728-134810-87a9f1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 111 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 67 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-agent-cold-warm-message-2ab680e0-kova-260728-134810-87a9f1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1062.9 MB; tracked total 1062.9 MB; max CPU 183%; samples 16; roles agent-cli 1062.9MB/183%, agent-process 1062.9MB/183%, command-tree 1062.9MB/183%, status-cli 822.7MB/182.1%
- agent: turn 4710ms; cold/warm 4324ms/4710ms; cold-warm delta 0ms; pre-provider 4539ms; provider 2ms; metadata scans 14 (226.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4690.7ms; max 4710ms; pre-provider p95 4518.6ms
- agent CLI attribution: cold known 116ms / unattributed 4015ms; warm known 107ms / unattributed 4432ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 66.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1062.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1062.9 MB, agent-process 1062.9 MB, command-tree 1062.9 MB
  - agent-cli peak RSS 1062.9 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1062.9 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4324ms; pre-provider 4131ms; provider 3ms; post-provider 190ms; response true
    - active window: metadata scans 7 (117.52ms total, max 66.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4131ms; provider 3ms; post-provider 190ms; unknown 3782.99ms; source plugins.metadata.scan 348.01ms
  - warm: total 4710ms; pre-provider 4539ms; provider 2ms; post-provider 169ms; response true
    - active window: metadata scans 7 (108.74ms total, max 61.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4539ms; provider 2ms; post-provider 169ms; unknown 4190.99ms; source plugins.metadata.scan 348.01ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4131 ms | 116 ms | 4015 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-agent-cold-warm-message-2ab680e0-kova-260728-134810-87a9f1/openclaw/timeline.jsonl |
  | warm | 4539 ms | 107 ms | 4432 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-agent-cold-warm-message-2ab680e0-kova-260728-134810-87a9f1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 116 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 107 ms | 61 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-agent-cold-warm-message-67b331a3-kova-260728-134810-87a9f1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1018.8 MB; tracked total 1018.8 MB; max CPU 185.9%; samples 16; roles agent-cli 1018.8MB/185.9%, agent-process 1018.8MB/185.9%, command-tree 1018.8MB/185.9%, status-cli 823.3MB/181.1%
- agent: turn 4190ms; cold/warm 4190ms/4160ms; cold-warm delta 30ms; pre-provider 4029ms; provider 2ms; metadata scans 14 (195.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4188.5ms; max 4190ms; pre-provider p95 4028.2ms
- agent CLI attribution: cold known 98ms / unattributed 3931ms; warm known 99ms / unattributed 3914ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 54.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1018.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1018.8 MB, agent-process 1018.8 MB, command-tree 1018.8 MB
  - agent-cli peak RSS 1018.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1018.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4190ms; pre-provider 4029ms; provider 2ms; post-provider 159ms; response true
    - active window: metadata scans 7 (97.61ms total, max 45.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4029ms; provider 2ms; post-provider 159ms; unknown 3713.87ms; source plugins.metadata.scan 315.13ms
  - warm: total 4160ms; pre-provider 4013ms; provider 1ms; post-provider 146ms; response true
    - active window: metadata scans 7 (97.72ms total, max 54.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4013ms; provider 1ms; post-provider 146ms; unknown 3697.87ms; source plugins.metadata.scan 315.13ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4029 ms | 98 ms | 3931 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-agent-cold-warm-message-67b331a3-kova-260728-134810-87a9f1/openclaw/timeline.jsonl |
  | warm | 4013 ms | 99 ms | 3914 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-agent-cold-warm-message-67b331a3-kova-260728-134810-87a9f1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 98 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 99 ms | 55 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-gateway-performance-man-005107f3-kova-260728-134810-87a9f1
Measurements:
- startup: listening 5283ms; health 5623ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 340ms; post-ready p95 2ms; failures 30; final failures 0; slowest startup-sample/warm-restart 580ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1052.9 MB; tracked total 1651.6 MB; max CPU 156%; samples 25; roles gateway 1052.9MB/156%, gateway-tree 929.5MB/156%, command-tree 722.5MB/151%, status-cli 722.5MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 665.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1052.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1052.9 MB, gateway-tree 929.5 MB, command-tree 722.5 MB
  - gateway peak RSS 1052.9 MB exceeded threshold 1050 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-134810-87a9f1-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-134810-87a9f1-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-134810-87a9f1-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-fresh-install-fresh-r1-697fad55-kova-260728-134810-87a9f1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-fresh-install-fresh-r2-da880701-kova-260728-134810-87a9f1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-fresh-install-fresh-r3-82f8bdbd-kova-260728-134810-87a9f1
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-fresh-install-onboarded-9f99e904-kova-260728-134810-87a9f1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-fresh-install-onboarded-f9c24855-kova-260728-134810-87a9f1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-fresh-install-onboarded-fe872c26-kova-260728-134810-87a9f1
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260728-134810-87a9f1
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-bundled-runtime-deps-mi-39c08a4a-kova-260728-134810-87a9f1
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-134810-87a9f1/kova-bundled-runtime-deps-mi-150715ba-kova-260728-134810-87a9f1
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms4pnzt3-41y-6f59dfbe`
- Result: removed
- Duration: 512ms

