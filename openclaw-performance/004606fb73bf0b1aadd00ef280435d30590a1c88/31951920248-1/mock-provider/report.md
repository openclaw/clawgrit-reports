# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1211.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1211.8 MB, gateway-tree 1211.8 MB, command-tree 479.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1211.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1211.8 MB, gateway-tree 1211.8 MB, command-tree 479.8 MB |
| Blocking findings | 24 |
| Warnings | 20 |
| Records | 15 (FAIL:12, PASS:3) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260816-141121-d5506a` |
| Generated | 2026-08-16T14:18:52.091Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 15 |
| Scenarios | 4 |
| States | 4 |
| FAIL | 12 |
| PASS | 3 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 12
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 12 blocking, 0 warning
  - primary: gateway peak RSS 1211.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1211.8 MB, gateway-tree 1211.8 MB, command-tree 479.8 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1211.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1211.8 MB, gateway-tree 1211.8 MB, command-tree 479.8 MB
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
- BLOCKING fresh-install/fresh: gateway peak RSS 1211.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1211.8 MB, gateway-tree 1211.8 MB, command-tree 479.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1160.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1160.3 MB, gateway-tree 1160.3 MB, command-tree 472.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1300.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1300.3 MB, gateway-tree 1300.3 MB, command-tree 469 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1151.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1151.1 MB, gateway-tree 1151 MB, command-tree 465.9 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1104.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104.5 MB, gateway-tree 1104.5 MB, command-tree 467.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1143.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1143.9 MB, gateway-tree 1143.8 MB, command-tree 467.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1107.1 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1148.9 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1248.7 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1141.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1141.5 MB, gateway-tree 1141.5 MB, command-tree 468.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1161.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1161.1 MB, gateway-tree 1161.1 MB, command-tree 471.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1147.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1147.8 MB, gateway-tree 1147.8 MB, command-tree 467.7 MB
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
| info | Kova | report | 32 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 4575ms | 1211.8MB | n/a | 160% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 4475ms | 1143.9MB | n/a | 158% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 4492ms | 1148.9MB | n/a | 160% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155% | 3291ms | 2947ms | 3174ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4520ms | 1147.8MB | n/a | 157% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 5014ms | 1211.8 MB | 1763.1 MB | n/a | n/a | gateway peak RSS 1211.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1211.8 MB, gateway-tree 1211.8 MB, command-tree 479.8 MB |
| 2 | FAIL | fresh-install/fresh |  | 4575ms | 1160.3 MB | 1703.7 MB | n/a | n/a | gateway peak RSS 1160.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1160.3 MB, gateway-tree 1160.3 MB, command-tree 472.8 MB |
| 3 | FAIL | fresh-install/fresh |  | 4507ms | 1300.3 MB | 1840.2 MB | n/a | n/a | gateway peak RSS 1300.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1300.3 MB, gateway-tree 1300.3 MB, command-tree 469 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 4454ms | 1151.1 MB | 1688.3 MB | n/a | n/a | gateway peak RSS 1151.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1151.1 MB, gateway-tree 1151 MB, command-tree 465.9 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 4537ms | 1104.5 MB | 1641.4 MB | n/a | n/a | gateway peak RSS 1104.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104.5 MB, gateway-tree 1104.5 MB, command-tree 467.1 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 4475ms | 1143.9 MB | 1682.7 MB | n/a | n/a | gateway peak RSS 1143.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1143.9 MB, gateway-tree 1143.8 MB, command-tree 467.5 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4492ms | 1107.1 MB | 1183.8 MB | n/a | n/a | gateway peak RSS 1107.1 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 4452ms | 1148.9 MB | 1225.6 MB | n/a | n/a | gateway peak RSS 1148.9 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 4541ms | 1248.7 MB | 1326.1 MB | n/a | n/a | gateway peak RSS 1248.7 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1142 MB | 3271ms | 2947ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1144 MB | 3291ms | 2953ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1168.5 MB | 3295ms | 2933ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4520ms | 1141.5 MB | 1681 MB | n/a | n/a | gateway peak RSS 1141.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1141.5 MB, gateway-tree 1141.5 MB, command-tree 468.6 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4610ms | 1161.1 MB | 1702.4 MB | n/a | n/a | gateway peak RSS 1161.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1161.1 MB, gateway-tree 1161.1 MB, command-tree 471.6 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4511ms | 1147.8 MB | 1686.6 MB | n/a | n/a | gateway peak RSS 1147.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1147.8 MB, gateway-tree 1147.8 MB, command-tree 467.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1300.3 MB (scenario fresh-install/fresh); CPU 163% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 1097.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1300.3 MB (scenario fresh-install/fresh); CPU 163% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 612.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 911 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 479.8 MB (scenario fresh-install/fresh); CPU 149% (scenario fresh-install/fresh)
- model-cli: RSS 472.8 MB (scenario fresh-install/fresh); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 186.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 27.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-fresh-r1-697fad55-kova-260816-141121-d5506a
Measurements:
- startup: listening 4525ms; health 5014ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 489ms; post-ready p95 3ms; failures 18; final failures 0; slowest startup-sample/provision 489ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1211.8 MB; tracked total 1763.1 MB; max CPU 158%; samples 15; roles gateway 1211.8MB/158%, gateway-tree 1211.8MB/158%, command-tree 479.8MB/149%, plugin-cli 479.8MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 646.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1211.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1211.8 MB, gateway-tree 1211.8 MB, command-tree 479.8 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-fresh-r2-da880701-kova-260816-141121-d5506a
Measurements:
- startup: listening 4016ms; health 4575ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 559ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 559ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1160.3 MB; tracked total 1703.7 MB; max CPU 160%; samples 15; roles gateway 1160.3MB/160%, gateway-tree 1160.3MB/160%, command-tree 472.8MB/149%, model-cli 472.8MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 573.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1160.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1160.3 MB, gateway-tree 1160.3 MB, command-tree 472.8 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-141121-d5506a
Measurements:
- startup: listening 4017ms; health 4507ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 490ms; post-ready p95 2ms; failures 16; final failures 0; slowest startup-sample/provision 490ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1300.3 MB; tracked total 1840.2 MB; max CPU 162%; samples 15; roles gateway 1300.3MB/162%, gateway-tree 1300.3MB/162%, command-tree 469MB/146%, model-cli 469MB/144%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 590.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1300.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1300.3 MB, gateway-tree 1300.3 MB, command-tree 469 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-onboarded-9f99e904-kova-260816-141121-d5506a
Measurements:
- startup: listening 4016ms; health 4454ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 438ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 438ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1151.1 MB; tracked total 1688.3 MB; max CPU 158%; samples 15; roles gateway 1151.1MB/158%, gateway-tree 1151MB/158%, command-tree 465.9MB/143%, model-cli 465.9MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 571.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1151.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1151.1 MB, gateway-tree 1151 MB, command-tree 465.9 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-onboarded-f9c24855-kova-260816-141121-d5506a
Measurements:
- startup: listening 4022ms; health 4537ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 515ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 515ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1104.5 MB; tracked total 1641.4 MB; max CPU 156%; samples 15; roles gateway 1104.5MB/156%, gateway-tree 1104.5MB/156%, command-tree 467.1MB/148%, model-cli 467.1MB/139%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 583.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1104.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104.5 MB, gateway-tree 1104.5 MB, command-tree 467.1 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-onboarded-fe872c26-kova-260816-141121-d5506a
Measurements:
- startup: listening 4018ms; health 4475ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 457ms; post-ready p95 2ms; failures 16; final failures 0; slowest startup-sample/provision 457ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1143.9 MB; tracked total 1682.7 MB; max CPU 158%; samples 15; roles gateway 1143.9MB/158%, gateway-tree 1143.8MB/158%, command-tree 467.5MB/145%, model-cli 467.5MB/142%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 572.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1143.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1143.9 MB, gateway-tree 1143.8 MB, command-tree 467.5 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-141121-d5506a
Measurements:
- startup: listening 4021ms; health 4492ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 471ms; post-ready p95 2ms; failures 26; final failures 0; slowest startup-sample/restart 480ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1107.1 MB; tracked total 1183.8 MB; max CPU 160%; samples 11; roles gateway 1107.1MB/160%, gateway-tree 1107.1MB/160%, mock-provider 71MB/17.8%, runtime-staging 71MB/17.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 592.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1107.1 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-bundled-plugin-startup-809ede2b-kova-260816-141121-d5506a
Measurements:
- startup: listening 4017ms; health 4452ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 435ms; post-ready p95 2ms; failures 25; final failures 0; slowest startup-sample/restart 659ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1148.9 MB; tracked total 1225.6 MB; max CPU 163%; samples 11; roles gateway 1148.9MB/163%, gateway-tree 1148.9MB/163%, mock-provider 71.2MB/14.2%, runtime-staging 71.2MB/14.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 580.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1148.9 MB exceeded threshold 1000 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-141121-d5506a-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-141121-d5506a-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-141121-d5506a-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-fresh-r1-697fad55-kova-260816-141121-d5506a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-fresh-r2-da880701-kova-260816-141121-d5506a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-141121-d5506a
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-onboarded-9f99e904-kova-260816-141121-d5506a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-onboarded-f9c24855-kova-260816-141121-d5506a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-fresh-install-onboarded-fe872c26-kova-260816-141121-d5506a
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-141121-d5506a
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-bundled-plugin-startup-809ede2b-kova-260816-141121-d5506a
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-141121-d5506a/kova-bundled-plugin-startup-5377119f-kova-260816-141121-d5506a
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msvvv08u-3z9-e6972a46`
- Result: removed
- Duration: 451ms

