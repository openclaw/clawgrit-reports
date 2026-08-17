# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1256.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1256.3 MB, gateway-tree 1256.3 MB, command-tree 473.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1256.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1256.3 MB, gateway-tree 1256.3 MB, command-tree 473.2 MB |
| Blocking findings | 27 |
| Warnings | 20 |
| Records | 15 (FAIL:12, PASS:3) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260817-182449-9560a4` |
| Generated | 2026-08-17T18:33:44.650Z |
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
  - primary: gateway peak RSS 1256.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1256.3 MB, gateway-tree 1256.3 MB, command-tree 473.2 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1256.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1256.3 MB, gateway-tree 1256.3 MB, command-tree 473.2 MB
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
- BLOCKING fresh-install/fresh: gateway peak RSS 1256.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1256.3 MB, gateway-tree 1256.3 MB, command-tree 473.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1263.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1263.7 MB, gateway-tree 1263.7 MB, command-tree 458.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1206 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1206 MB, gateway-tree 1206 MB, command-tree 457.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1199.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1199.6 MB, gateway-tree 1199.5 MB, command-tree 466.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1194 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1194 MB, gateway-tree 1194 MB, command-tree 480.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1242.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1242.5 MB, gateway-tree 1242.5 MB, command-tree 470.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1272.7 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1260.3 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1241.4 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1241.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1241.5 MB, gateway-tree 1235.3 MB, command-tree 454.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1240.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1240.4 MB, gateway-tree 1240.4 MB, command-tree 469.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1234.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1234.8 MB, gateway-tree 1212.1 MB, command-tree 459.8 MB
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
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 5306ms | 1256.3MB | n/a | 164% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 5365ms | 1199.6MB | n/a | 161% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5824ms | 1260.3MB | n/a | 169% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154% | 3903ms | 3374ms | 3724ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5086ms | 1240.4MB | n/a | 159% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 6838ms | 1256.3 MB | 1800.3 MB | n/a | n/a | gateway peak RSS 1256.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1256.3 MB, gateway-tree 1256.3 MB, command-tree 473.2 MB |
| 2 | FAIL | fresh-install/fresh |  | 5306ms | 1263.7 MB | 1793.4 MB | n/a | n/a | gateway peak RSS 1263.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1263.7 MB, gateway-tree 1263.7 MB, command-tree 458.8 MB |
| 3 | FAIL | fresh-install/fresh |  | 5202ms | 1206 MB | 1735 MB | n/a | n/a | gateway peak RSS 1206 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1206 MB, gateway-tree 1206 MB, command-tree 457.6 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 5382ms | 1199.6 MB | 1737 MB | n/a | n/a | gateway peak RSS 1199.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1199.6 MB, gateway-tree 1199.5 MB, command-tree 466.2 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 5365ms | 1194 MB | 1745.3 MB | n/a | n/a | gateway peak RSS 1194 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1194 MB, gateway-tree 1194 MB, command-tree 480.3 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 5328ms | 1242.5 MB | 1784 MB | n/a | n/a | gateway peak RSS 1242.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1242.5 MB, gateway-tree 1242.5 MB, command-tree 470.4 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5824ms | 1272.7 MB | 1349.1 MB | n/a | n/a | gateway peak RSS 1272.7 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5834ms | 1260.3 MB | 1336.8 MB | n/a | n/a | gateway peak RSS 1260.3 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5013ms | 1241.4 MB | 1318.6 MB | n/a | n/a | gateway peak RSS 1241.4 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1122.7 MB | 3790ms | 3319ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1157.7 MB | 4287ms | 3374ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1150.2 MB | 3903ms | 3865ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5169ms | 1241.5 MB | 1761.5 MB | n/a | n/a | gateway peak RSS 1241.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1241.5 MB, gateway-tree 1235.3 MB, command-tree 454.3 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5086ms | 1240.4 MB | 1780.9 MB | n/a | n/a | gateway peak RSS 1240.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1240.4 MB, gateway-tree 1240.4 MB, command-tree 469.1 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5030ms | 1234.8 MB | 1743 MB | n/a | n/a | gateway peak RSS 1234.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1234.8 MB, gateway-tree 1212.1 MB, command-tree 459.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1272.7 MB (scenario bundled-plugin-startup/fresh); CPU 173% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 1086.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1272.7 MB (scenario bundled-plugin-startup/fresh); CPU 173% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 638.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 571.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 899 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 480.3 MB (scenario fresh-install/onboarded-user); CPU 165% (scenario fresh-install/fresh)
- plugin-cli: RSS 429.5 MB (scenario fresh-install/onboarded-user); CPU 151% (scenario fresh-install/fresh)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-fresh-r1-697fad55-kova-260817-182449-9560a4
Measurements:
- startup: listening 5545ms; health 6838ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 4ms; post-ready p95 4ms; failures 22; final failures 0; slowest startup-sample/provision 1293ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1256.3 MB; tracked total 1800.3 MB; max CPU 162%; samples 16; roles gateway 1256.3MB/162%, gateway-tree 1256.3MB/162%, command-tree 473.2MB/146%, status-cli 473.2MB/140%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1153.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1256.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1256.3 MB, gateway-tree 1256.3 MB, command-tree 473.2 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-fresh-r2-da880701-kova-260817-182449-9560a4
Measurements:
- startup: listening 4522ms; health 5306ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 784ms; post-ready p95 4ms; failures 18; final failures 0; slowest startup-sample/provision 784ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1263.7 MB; tracked total 1793.4 MB; max CPU 164%; samples 15; roles gateway 1263.7MB/164%, command-tree 458.8MB/165%, gateway-tree 1263.7MB/164%, model-cli 445.3MB/165%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 683.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1263.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1263.7 MB, gateway-tree 1263.7 MB, command-tree 458.8 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-fresh-r3-82f8bdbd-kova-260817-182449-9560a4
Measurements:
- startup: listening 4528ms; health 5202ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 674ms; post-ready p95 4ms; failures 18; final failures 0; slowest startup-sample/provision 674ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1206 MB; tracked total 1735 MB; max CPU 164%; samples 15; roles gateway 1206MB/164%, gateway-tree 1206MB/164%, command-tree 457.6MB/155%, model-cli 457.6MB/155%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 676.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1206 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1206 MB, gateway-tree 1206 MB, command-tree 457.6 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-onboarded-9f99e904-kova-260817-182449-9560a4
Measurements:
- startup: listening 4773ms; health 5382ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 1ms; post-ready p95 3ms; failures 19; final failures 0; slowest startup-sample/provision 609ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1199.6 MB; tracked total 1737 MB; max CPU 158%; samples 15; roles gateway 1199.6MB/158%, gateway-tree 1199.5MB/158%, command-tree 466.2MB/149%, model-cli 466.2MB/139%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 734.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1199.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1199.6 MB, gateway-tree 1199.5 MB, command-tree 466.2 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-onboarded-f9c24855-kova-260817-182449-9560a4
Measurements:
- startup: listening 4774ms; health 5365ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 1ms; post-ready p95 4ms; failures 19; final failures 0; slowest startup-sample/provision 591ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1194 MB; tracked total 1745.3 MB; max CPU 161%; samples 15; roles gateway 1194MB/161%, gateway-tree 1194MB/161%, command-tree 480.3MB/157%, model-cli 480.3MB/157%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 647.62ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1194 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1194 MB, gateway-tree 1194 MB, command-tree 480.3 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-onboarded-fe872c26-kova-260817-182449-9560a4
Measurements:
- startup: listening 4777ms; health 5328ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 2ms; post-ready p95 4ms; failures 19; final failures 0; slowest startup-sample/provision 551ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1242.5 MB; tracked total 1784 MB; max CPU 161%; samples 15; roles gateway 1242.5MB/161%, gateway-tree 1242.5MB/161%, command-tree 470.4MB/147%, status-cli 470.4MB/142%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 692.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1242.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1242.5 MB, gateway-tree 1242.5 MB, command-tree 470.4 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-bundled-plugin-startup-4a0cbdf7-kova-260817-182449-9560a4
Measurements:
- startup: listening 5030ms; health 5824ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 687ms; post-ready p95 4ms; failures 32; final failures 0; slowest startup-sample/gateway-start 794ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1272.7 MB; tracked total 1349.1 MB; max CPU 173%; samples 11; roles gateway 1272.7MB/173%, gateway-tree 1272.7MB/173%, mock-provider 71MB/16.1%, runtime-staging 71MB/16.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 777.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1272.7 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-bundled-plugin-startup-809ede2b-kova-260817-182449-9560a4
Measurements:
- startup: listening 5027ms; health 5834ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 470ms; post-ready p95 3ms; failures 31; final failures 0; slowest startup-sample/gateway-start 807ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1260.3 MB; tracked total 1336.8 MB; max CPU 169%; samples 11; roles gateway 1260.3MB/169%, gateway-tree 1260.3MB/169%, mock-provider 71MB/18.7%, runtime-staging 71MB/18.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 857.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1260.3 MB exceeded threshold 1000 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260817-182449-9560a4-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260817-182449-9560a4-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260817-182449-9560a4-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-fresh-r1-697fad55-kova-260817-182449-9560a4
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-fresh-r2-da880701-kova-260817-182449-9560a4
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-fresh-r3-82f8bdbd-kova-260817-182449-9560a4
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-onboarded-9f99e904-kova-260817-182449-9560a4
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-onboarded-f9c24855-kova-260817-182449-9560a4
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-fresh-install-onboarded-fe872c26-kova-260817-182449-9560a4
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-bundled-plugin-startup-4a0cbdf7-kova-260817-182449-9560a4
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-bundled-plugin-startup-809ede2b-kova-260817-182449-9560a4
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-182449-9560a4/kova-bundled-plugin-startup-5377119f-kova-260817-182449-9560a4
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msxkcsxj-3y5-0055717c`
- Result: removed
- Duration: 540ms

