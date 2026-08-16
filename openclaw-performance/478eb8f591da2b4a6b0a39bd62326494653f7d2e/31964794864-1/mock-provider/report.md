# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1191.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1191.6 MB, gateway-tree 1191.6 MB, command-tree 479.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1191.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1191.6 MB, gateway-tree 1191.6 MB, command-tree 479.2 MB |
| Blocking findings | 26 |
| Warnings | 20 |
| Records | 15 (FAIL:12, PASS:3) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260816-183134-3f2e1e` |
| Generated | 2026-08-16T18:39:00.315Z |
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
  - primary: gateway peak RSS 1191.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1191.6 MB, gateway-tree 1191.6 MB, command-tree 479.2 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1191.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1191.6 MB, gateway-tree 1191.6 MB, command-tree 479.2 MB
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
- BLOCKING fresh-install/fresh: gateway peak RSS 1191.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1191.6 MB, gateway-tree 1191.6 MB, command-tree 479.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1196.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1196.3 MB, gateway-tree 1196.3 MB, command-tree 467.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1125.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1125.9 MB, gateway-tree 1125.9 MB, command-tree 476.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1246 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1246 MB, gateway-tree 1246 MB, command-tree 471.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1177.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1177.6 MB, gateway-tree 1177.5 MB, command-tree 468.9 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1203 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1203 MB, gateway-tree 1203 MB, command-tree 475.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1232.2 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1228 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1159 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1253.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.1 MB, gateway-tree 1253.1 MB, command-tree 460.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1218.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1218.1 MB, gateway-tree 1200.5 MB, command-tree 462.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1221.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1221.1 MB, gateway-tree 1199.4 MB, command-tree 466.9 MB
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
| info | Kova | report | 34 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 4564ms | 1191.6MB | n/a | 164% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 4539ms | 1203MB | n/a | 159% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 4836ms | 1228MB | n/a | 166% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 151% | 3348ms | 3006ms | 3241ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4818ms | 1221.1MB | n/a | 158% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 5049ms | 1191.6 MB | 1741.7 MB | n/a | n/a | gateway peak RSS 1191.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1191.6 MB, gateway-tree 1191.6 MB, command-tree 479.2 MB |
| 2 | FAIL | fresh-install/fresh |  | 4564ms | 1196.3 MB | 1733.7 MB | n/a | n/a | gateway peak RSS 1196.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1196.3 MB, gateway-tree 1196.3 MB, command-tree 467.5 MB |
| 3 | FAIL | fresh-install/fresh |  | 4465ms | 1125.9 MB | 1673.8 MB | n/a | n/a | gateway peak RSS 1125.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1125.9 MB, gateway-tree 1125.9 MB, command-tree 476.5 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 4645ms | 1246 MB | 1787.4 MB | n/a | n/a | gateway peak RSS 1246 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1246 MB, gateway-tree 1246 MB, command-tree 471.3 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 4539ms | 1177.6 MB | 1717.4 MB | n/a | n/a | gateway peak RSS 1177.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1177.6 MB, gateway-tree 1177.5 MB, command-tree 468.9 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 4497ms | 1203 MB | 1749.1 MB | n/a | n/a | gateway peak RSS 1203 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1203 MB, gateway-tree 1203 MB, command-tree 475.5 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4698ms | 1232.2 MB | 1309 MB | n/a | n/a | gateway peak RSS 1232.2 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5027ms | 1228 MB | 1293 MB | n/a | n/a | gateway peak RSS 1228 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 4836ms | 1159 MB | 1236 MB | n/a | n/a | gateway peak RSS 1159 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1136.8 MB | 3574ms | 2934ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1168.2 MB | 3248ms | 3006ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1145.1 MB | 3348ms | 3202ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4818ms | 1253.1 MB | 1784.7 MB | n/a | n/a | gateway peak RSS 1253.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.1 MB, gateway-tree 1253.1 MB, command-tree 460.7 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4799ms | 1218.1 MB | 1734.4 MB | n/a | n/a | gateway peak RSS 1218.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1218.1 MB, gateway-tree 1200.5 MB, command-tree 462.5 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4957ms | 1221.1 MB | 1737.5 MB | n/a | n/a | gateway peak RSS 1221.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1221.1 MB, gateway-tree 1199.4 MB, command-tree 466.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1253.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 167% (scenario fresh-install/fresh)
- command-tree: RSS 1096.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1253.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 167% (scenario fresh-install/fresh)
- status-cli: RSS 614.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 909.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 479.2 MB (scenario fresh-install/fresh); CPU 151% (scenario fresh-install/onboarded-user)
- model-cli: RSS 471.3 MB (scenario fresh-install/onboarded-user); CPU 146% (scenario fresh-install/fresh)
- agent-cli: RSS 188 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 30.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-fresh-r1-697fad55-kova-260816-183134-3f2e1e
Measurements:
- startup: listening 4526ms; health 5049ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 523ms; post-ready p95 4ms; failures 18; final failures 0; slowest startup-sample/provision 523ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1191.6 MB; tracked total 1741.7 MB; max CPU 156%; samples 15; roles gateway 1191.6MB/156%, gateway-tree 1191.6MB/156%, command-tree 479.2MB/148%, plugin-cli 479.2MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 613.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1191.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1191.6 MB, gateway-tree 1191.6 MB, command-tree 479.2 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-fresh-r2-da880701-kova-260816-183134-3f2e1e
Measurements:
- startup: listening 4019ms; health 4564ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 545ms; post-ready p95 4ms; failures 16; final failures 0; slowest startup-sample/provision 545ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1196.3 MB; tracked total 1733.7 MB; max CPU 164%; samples 15; roles gateway 1196.3MB/164%, gateway-tree 1196.3MB/164%, command-tree 467.5MB/147%, model-cli 467.5MB/136%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 583.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1196.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1196.3 MB, gateway-tree 1196.3 MB, command-tree 467.5 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-183134-3f2e1e
Measurements:
- startup: listening 4016ms; health 4465ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 449ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 449ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1125.9 MB; tracked total 1673.8 MB; max CPU 167%; samples 14; roles gateway 1125.9MB/167%, gateway-tree 1125.9MB/167%, command-tree 476.5MB/140%, status-cli 476.5MB/138%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 572.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1125.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1125.9 MB, gateway-tree 1125.9 MB, command-tree 476.5 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-onboarded-9f99e904-kova-260816-183134-3f2e1e
Measurements:
- startup: listening 4024ms; health 4645ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 621ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 621ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1246 MB; tracked total 1787.4 MB; max CPU 159%; samples 14; roles gateway 1246MB/159%, gateway-tree 1246MB/159%, command-tree 471.3MB/142%, model-cli 471.3MB/140%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 590.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1246 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1246 MB, gateway-tree 1246 MB, command-tree 471.3 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-onboarded-f9c24855-kova-260816-183134-3f2e1e
Measurements:
- startup: listening 4019ms; health 4539ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 520ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 520ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1177.6 MB; tracked total 1717.4 MB; max CPU 157%; samples 15; roles gateway 1177.6MB/157%, gateway-tree 1177.5MB/157%, command-tree 468.9MB/151%, model-cli 468.9MB/145%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 575.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1177.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1177.6 MB, gateway-tree 1177.5 MB, command-tree 468.9 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-onboarded-fe872c26-kova-260816-183134-3f2e1e
Measurements:
- startup: listening 4016ms; health 4497ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 481ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 481ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1203 MB; tracked total 1749.1 MB; max CPU 159%; samples 15; roles gateway 1203MB/159%, gateway-tree 1203MB/159%, command-tree 475.5MB/146%, status-cli 475.5MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 606.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1203 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1203 MB, gateway-tree 1203 MB, command-tree 475.5 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-183134-3f2e1e
Measurements:
- startup: listening 4019ms; health 4698ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 678ms; post-ready p95 3ms; failures 27; final failures 0; slowest startup-sample/restart 762ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1232.2 MB; tracked total 1309 MB; max CPU 165%; samples 11; roles gateway 1232.2MB/165%, gateway-tree 1232.2MB/165%, mock-provider 71.1MB/14.8%, runtime-staging 71.1MB/14.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 840.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1232.2 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-bundled-plugin-startup-809ede2b-kova-260816-183134-3f2e1e
Measurements:
- startup: listening 4272ms; health 5027ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 673ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/gateway-start 755ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1228 MB; tracked total 1293 MB; max CPU 167%; samples 11; roles gateway 1228MB/167%, gateway-tree 1215.9MB/167%, mock-provider 71.3MB/16.1%, runtime-staging 71.3MB/16.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 651.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1228 MB exceeded threshold 1000 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-183134-3f2e1e-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-183134-3f2e1e-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-183134-3f2e1e-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-fresh-r1-697fad55-kova-260816-183134-3f2e1e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-fresh-r2-da880701-kova-260816-183134-3f2e1e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-183134-3f2e1e
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-onboarded-9f99e904-kova-260816-183134-3f2e1e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-onboarded-f9c24855-kova-260816-183134-3f2e1e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-fresh-install-onboarded-fe872c26-kova-260816-183134-3f2e1e
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-183134-3f2e1e
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-bundled-plugin-startup-809ede2b-kova-260816-183134-3f2e1e
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-183134-3f2e1e/kova-bundled-plugin-startup-5377119f-kova-260816-183134-3f2e1e
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msw55mpe-3za-10e3f48a`
- Result: removed
- Duration: 462ms

