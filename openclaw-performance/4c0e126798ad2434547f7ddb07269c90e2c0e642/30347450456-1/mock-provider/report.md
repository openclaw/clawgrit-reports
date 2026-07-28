# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1056 MB exceeded threshold 1050 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1056 MB exceeded threshold 1050 MB |
| Blocking findings | 22 |
| Warnings | 22 |
| Records | 18 (PASS:10, FAIL:8) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260728-094013-2d7c3f` |
| Generated | 2026-07-28T09:51:08.684Z |
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
| PASS | 10 |
| FAIL | 8 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 8
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 8 blocking, 0 warning
  - primary: gateway peak RSS 1056 MB exceeded threshold 1050 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1056 MB exceeded threshold 1050 MB
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
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1056 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1062.2 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1050.9 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1000.3 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1032.3 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1003.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1003.8 MB, agent-process 1003.8 MB, command-tree 1003.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1074.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1074.8 MB, agent-process 1074.8 MB, command-tree 1074.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1009.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1009.1 MB, agent-process 1009.1 MB, command-tree 1009.1 MB
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
| info | Kova | report | 38 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 6737ms | 968.5MB | n/a | 162% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 6891ms | 966.8MB | n/a | 161% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:2, PASS:1 | 7265ms | 1056MB | n/a | 166% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 6444ms | 1032.3MB | n/a | 164% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 188.8% | 5231ms | 5154ms | 5021ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 7771ms | 1005.6MB | n/a | 164% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 7752ms | 1043.5 MB | 1852.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 6674ms | 968.5 MB | 1733.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 6737ms | 961.2 MB | 1727.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 6891ms | 949.3 MB | 1710.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 6569ms | 981 MB | 1733.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 7026ms | 966.8 MB | 1777.8 MB | n/a | n/a |  |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 7265ms | 1056 MB | 1056 MB | n/a | n/a | gateway peak RSS 1056 MB exceeded threshold 1050 MB |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 7361ms | 1062.2 MB | 1062.2 MB | n/a | n/a | gateway peak RSS 1062.2 MB exceeded threshold 1050 MB |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6031ms | 1042.7 MB | 1047.9 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 6100ms | 1050.9 MB | 1632.8 MB | n/a | n/a | gateway peak RSS 1050.9 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 6444ms | 1000.3 MB | 1679.2 MB | n/a | n/a | gateway peak RSS 1000.3 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 6726ms | 1032.3 MB | 1743.1 MB | n/a | n/a | gateway peak RSS 1032.3 MB exceeded threshold 1000 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1003.8 MB | 4925ms | 4569ms | agent-cli peak RSS 1003.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1003.8 MB, agent-process 1003.8 MB, command-tree 1003.8 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1074.8 MB | 5231ms | 5641ms | agent-cli peak RSS 1074.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1074.8 MB, agent-process 1074.8 MB, command-tree 1074.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1009.1 MB | 5747ms | 5154ms | agent-cli peak RSS 1009.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1009.1 MB, agent-process 1009.1 MB, command-tree 1009.1 MB |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 7311ms | 984.6 MB | 1770.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 7771ms | 1005.6 MB | 1725.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 8075ms | 1006.5 MB | 1768.5 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1074.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1062.2 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 200% (scenario bundled-plugin-startup/fresh)
- agent-process: RSS 1074.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1050.9 MB (scenario bundled-plugin-startup/fresh); CPU 200% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 1074.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 963.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.7% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 711.2 MB (scenario bundled-plugin-startup/fresh); CPU 167% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 584.1 MB (scenario fresh-install/fresh); CPU 167% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260728-094013-2d7c3f
Measurements:
- startup: listening 6556ms; health 7265ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 2ms; post-ready p95 not-collected; failures 38; final failures 0; slowest startup-sample/warm-restart 990ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1056 MB; tracked total 1056 MB; max CPU 168%; samples 8; roles gateway 1056MB/168%, gateway-tree 883.8MB/163%, command-tree 22.3MB/1.5%, uncategorized 22.3MB/1.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1239.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1056 MB exceeded threshold 1050 MB

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260728-094013-2d7c3f
Measurements:
- startup: listening 6803ms; health 7361ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 5ms; post-ready p95 not-collected; failures 38; final failures 0; slowest startup-sample/warm-restart 715ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1062.2 MB; tracked total 1062.2 MB; max CPU 166%; samples 8; roles gateway 1062.2MB/166%, gateway-tree 870.8MB/166%, command-tree 5.9MB/1.9%, uncategorized 5.9MB/1.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 854.73ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1062.2 MB exceeded threshold 1050 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-bundled-plugin-startup-4a0cbdf7-kova-260728-094013-2d7c3f
Measurements:
- startup: listening 5530ms; health 6100ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 570ms; post-ready p95 3ms; failures 34; final failures 0; slowest startup-sample/restart 640ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1050.9 MB; tracked total 1632.8 MB; max CPU 200%; samples 17; roles gateway 1050.9MB/200%, gateway-tree 1050.9MB/200%, command-tree 664.9MB/167%, plugin-cli 664.9MB/167%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 908.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1050.9 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-bundled-plugin-startup-809ede2b-kova-260728-094013-2d7c3f
Measurements:
- startup: listening 5781ms; health 6444ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 538ms; post-ready p95 5ms; failures 35; final failures 0; slowest startup-sample/gateway-start 663ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1000.3 MB; tracked total 1679.2 MB; max CPU 164%; samples 17; roles gateway 1000.3MB/164%, command-tree 707.7MB/167%, gateway-tree 971.9MB/164%, plugin-cli 707.7MB/167%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 852.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1000.3 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-bundled-plugin-startup-5377119f-kova-260728-094013-2d7c3f
Measurements:
- startup: listening 6040ms; health 6726ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 594ms; post-ready p95 3ms; failures 35; final failures 0; slowest startup-sample/gateway-start 686ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1032.3 MB; tracked total 1743.1 MB; max CPU 163%; samples 17; roles gateway 1032.3MB/163%, gateway-tree 1032.3MB/163%, command-tree 711.2MB/160%, plugin-cli 711.2MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 925.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1032.3 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-agent-cold-warm-message-8e2a29af-kova-260728-094013-2d7c3f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1003.8 MB; tracked total 1003.8 MB; max CPU 189.1%; samples 16; roles agent-cli 1003.8MB/189.1%, agent-process 1003.8MB/189.1%, command-tree 1003.8MB/189.1%, status-cli 935.5MB/173.5%
- agent: turn 4925ms; cold/warm 4925ms/4569ms; cold-warm delta 356ms; pre-provider 4734ms; provider 2ms; metadata scans 14 (238.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4907.2ms; max 4925ms; pre-provider p95 4719.1ms
- agent CLI attribution: cold known 115ms / unattributed 4619ms; warm known 125ms / unattributed 4311ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.88ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1003.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1003.8 MB, agent-process 1003.8 MB, command-tree 1003.8 MB
  - agent-cli peak RSS 1003.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1003.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4925ms; pre-provider 4734ms; provider 2ms; post-provider 189ms; response true
    - active window: metadata scans 7 (115.11ms total, max 57.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4734ms; provider 2ms; post-provider 189ms; unknown 4335.43ms; source plugins.metadata.scan 398.57ms
  - warm: total 4569ms; pre-provider 4436ms; provider 1ms; post-provider 132ms; response true
    - active window: metadata scans 7 (123.48ms total, max 69.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4436ms; provider 1ms; post-provider 132ms; unknown 4037.43ms; source plugins.metadata.scan 398.57ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4734 ms | 115 ms | 4619 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-agent-cold-warm-message-8e2a29af-kova-260728-094013-2d7c3f/openclaw/timeline.jsonl |
  | warm | 4436 ms | 125 ms | 4311 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-agent-cold-warm-message-8e2a29af-kova-260728-094013-2d7c3f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 115 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 70 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-agent-cold-warm-message-2ab680e0-kova-260728-094013-2d7c3f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1074.8 MB; tracked total 1074.8 MB; max CPU 181.2%; samples 19; roles agent-cli 1074.8MB/181.2%, command-tree 1074.8MB/193.7%, agent-process 1074.8MB/181.2%, status-cli 963.8MB/193.7%
- agent: turn 5641ms; cold/warm 5231ms/5641ms; cold-warm delta 0ms; pre-provider 5376ms; provider 2ms; metadata scans 14 (257.17ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5620.5ms; max 5641ms; pre-provider p95 5358.25ms
- agent CLI attribution: cold known 117ms / unattributed 4904ms; warm known 139ms / unattributed 5237ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1074.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1074.8 MB, agent-process 1074.8 MB, command-tree 1074.8 MB
  - agent-cli peak RSS 1074.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1074.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5231ms; pre-provider 5021ms; provider 3ms; post-provider 207ms; response true
    - active window: metadata scans 7 (118.13ms total, max 61.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5021ms; provider 3ms; post-provider 207ms; unknown 4608.94ms; source plugins.metadata.scan 412.06ms
  - warm: total 5641ms; pre-provider 5376ms; provider 2ms; post-provider 263ms; response true
    - active window: metadata scans 7 (139.04ms total, max 67.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5376ms; provider 2ms; post-provider 263ms; unknown 4963.94ms; source plugins.metadata.scan 412.06ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5021 ms | 117 ms | 4904 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-agent-cold-warm-message-2ab680e0-kova-260728-094013-2d7c3f/openclaw/timeline.jsonl |
  | warm | 5376 ms | 139 ms | 5237 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-agent-cold-warm-message-2ab680e0-kova-260728-094013-2d7c3f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 117 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 139 ms | 67 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-agent-cold-warm-message-67b331a3-kova-260728-094013-2d7c3f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1009.1 MB; tracked total 1009.1 MB; max CPU 188.8%; samples 18; roles agent-cli 1009.1MB/188.8%, agent-process 1009.1MB/188.8%, command-tree 1009.1MB/188.8%, status-cli 932.2MB/186.1%
- agent: turn 5747ms; cold/warm 5747ms/5154ms; cold-warm delta 593ms; pre-provider 5540ms; provider 5ms; metadata scans 14 (265.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5717.35ms; max 5747ms; pre-provider p95 5511ms
- agent CLI attribution: cold known 131ms / unattributed 5409ms; warm known 135ms / unattributed 4825ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 85.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1009.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1009.1 MB, agent-process 1009.1 MB, command-tree 1009.1 MB
  - agent-cli peak RSS 1009.1 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1009.1 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5747ms; pre-provider 5540ms; provider 5ms; post-provider 202ms; response true
    - active window: metadata scans 7 (131.24ms total, max 67.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5540ms; provider 5ms; post-provider 202ms; unknown 5108.07ms; source plugins.metadata.scan 431.93ms
  - warm: total 5154ms; pre-provider 4960ms; provider 2ms; post-provider 192ms; response true
    - active window: metadata scans 7 (134.47ms total, max 85.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4960ms; provider 2ms; post-provider 192ms; unknown 4528.07ms; source plugins.metadata.scan 431.93ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5540 ms | 131 ms | 5409 ms | 5 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-agent-cold-warm-message-67b331a3-kova-260728-094013-2d7c3f/openclaw/timeline.jsonl |
  | warm | 4960 ms | 135 ms | 4825 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-agent-cold-warm-message-67b331a3-kova-260728-094013-2d7c3f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 85 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-094013-2d7c3f-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-094013-2d7c3f-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-094013-2d7c3f-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-fresh-install-fresh-r1-697fad55-kova-260728-094013-2d7c3f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-fresh-install-fresh-r2-da880701-kova-260728-094013-2d7c3f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-fresh-install-fresh-r3-82f8bdbd-kova-260728-094013-2d7c3f
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-fresh-install-onboarded-9f99e904-kova-260728-094013-2d7c3f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-fresh-install-onboarded-f9c24855-kova-260728-094013-2d7c3f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-fresh-install-onboarded-fe872c26-kova-260728-094013-2d7c3f
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260728-094013-2d7c3f
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260728-094013-2d7c3f
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-094013-2d7c3f/kova-bundled-runtime-deps-mi-150715ba-kova-260728-094013-2d7c3f
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms4gt4fh-44q-b8630d7f`
- Result: removed
- Duration: 712ms

