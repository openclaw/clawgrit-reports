# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1250 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1250 MB, gateway-tree 1250 MB, command-tree 461.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1250 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1250 MB, gateway-tree 1250 MB, command-tree 461.8 MB |
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
| Run ID | `kova-260817-215555-eb9516` |
| Generated | 2026-08-17T22:05:02.603Z |
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
  - primary: gateway peak RSS 1250 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1250 MB, gateway-tree 1250 MB, command-tree 461.8 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1250 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1250 MB, gateway-tree 1250 MB, command-tree 461.8 MB
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
- BLOCKING fresh-install/fresh: gateway peak RSS 1250 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1250 MB, gateway-tree 1250 MB, command-tree 461.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1212.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1212.2 MB, gateway-tree 1212.1 MB, command-tree 470.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1255 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1255 MB, gateway-tree 1255 MB, command-tree 513.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1317.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1317.8 MB, gateway-tree 1317.8 MB, command-tree 495.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1257.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1257.4 MB, gateway-tree 1257.4 MB, command-tree 454.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1266.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1266.1 MB, gateway-tree 1266.1 MB, command-tree 498.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1256.6 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1242.4 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1248.3 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1245.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1245.8 MB, gateway-tree 1245.8 MB, command-tree 492.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1244.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1244.5 MB, gateway-tree 1216.7 MB, command-tree 467.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1243.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1243.6 MB, gateway-tree 1243.6 MB, command-tree 471.4 MB
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
| fresh-install/fresh | 3 | FAIL:3 | 5943ms | 1250MB | n/a | 167% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 6701ms | 1266.1MB | n/a | 166% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5875ms | 1248.3MB | n/a | 172% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 158% | 3993ms | 3675ms | 3827ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4896ms | 1244.5MB | n/a | 160% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 5943ms | 1250 MB | 1782.2 MB | n/a | n/a | gateway peak RSS 1250 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1250 MB, gateway-tree 1250 MB, command-tree 461.8 MB |
| 2 | FAIL | fresh-install/fresh |  | 5208ms | 1212.2 MB | 1753.8 MB | n/a | n/a | gateway peak RSS 1212.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1212.2 MB, gateway-tree 1212.1 MB, command-tree 470.7 MB |
| 3 | FAIL | fresh-install/fresh |  | 6181ms | 1255 MB | 1839.6 MB | n/a | n/a | gateway peak RSS 1255 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1255 MB, gateway-tree 1255 MB, command-tree 513.3 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 6711ms | 1317.8 MB | 1884.5 MB | n/a | n/a | gateway peak RSS 1317.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1317.8 MB, gateway-tree 1317.8 MB, command-tree 495.5 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 6141ms | 1257.4 MB | 1784 MB | n/a | n/a | gateway peak RSS 1257.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1257.4 MB, gateway-tree 1257.4 MB, command-tree 454.7 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 6701ms | 1266.1 MB | 1836 MB | n/a | n/a | gateway peak RSS 1266.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1266.1 MB, gateway-tree 1266.1 MB, command-tree 498.6 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5875ms | 1256.6 MB | 1333.3 MB | n/a | n/a | gateway peak RSS 1256.6 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5854ms | 1242.4 MB | 1319.5 MB | n/a | n/a | gateway peak RSS 1242.4 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 6051ms | 1248.3 MB | 1325 MB | n/a | n/a | gateway peak RSS 1248.3 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1181 MB | 3993ms | 3675ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1150.1 MB | 3873ms | 3863ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1132.1 MB | 4129ms | 3295ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5281ms | 1245.8 MB | 1810.1 MB | n/a | n/a | gateway peak RSS 1245.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1245.8 MB, gateway-tree 1245.8 MB, command-tree 492.8 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4896ms | 1244.5 MB | 1755.5 MB | n/a | n/a | gateway peak RSS 1244.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1244.5 MB, gateway-tree 1216.7 MB, command-tree 467.3 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4749ms | 1243.6 MB | 1786.4 MB | n/a | n/a | gateway peak RSS 1243.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1243.6 MB, gateway-tree 1243.6 MB, command-tree 471.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1317.8 MB (scenario fresh-install/onboarded-user); CPU 174% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 546.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 197.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1317.8 MB (scenario fresh-install/onboarded-user); CPU 174% (scenario fresh-install/onboarded-user)
- command-tree: RSS 1109.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 197.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 677.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 921.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 492.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 163% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 428.8 MB (scenario fresh-install/fresh); CPU 157% (scenario fresh-install/fresh)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-fresh-r1-697fad55-kova-260817-215555-eb9516
Measurements:
- startup: listening 5288ms; health 5943ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 5ms; post-ready p95 3ms; failures 21; final failures 0; slowest startup-sample/provision 655ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1250 MB; tracked total 1782.2 MB; max CPU 161%; samples 15; roles gateway 1250MB/161%, gateway-tree 1250MB/161%, command-tree 461.8MB/150%, status-cli 461.8MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 764.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1250 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1250 MB, gateway-tree 1250 MB, command-tree 461.8 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-fresh-r2-da880701-kova-260817-215555-eb9516
Measurements:
- startup: listening 4522ms; health 5208ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 686ms; post-ready p95 3ms; failures 18; final failures 0; slowest startup-sample/provision 686ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1212.2 MB; tracked total 1753.8 MB; max CPU 167%; samples 15; roles gateway 1212.2MB/167%, gateway-tree 1212.1MB/167%, command-tree 470.7MB/149%, status-cli 470.7MB/140%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 715.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1212.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1212.2 MB, gateway-tree 1212.1 MB, command-tree 470.7 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-fresh-r3-82f8bdbd-kova-260817-215555-eb9516
Measurements:
- startup: listening 5539ms; health 6181ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 3ms; post-ready p95 17ms; failures 22; final failures 0; slowest startup-sample/provision 642ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1255 MB; tracked total 1839.6 MB; max CPU 171%; samples 16; roles gateway 1255MB/171%, gateway-tree 1255MB/171%, command-tree 513.3MB/157%, status-cli 513.3MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 806.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1255 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1255 MB, gateway-tree 1255 MB, command-tree 513.3 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-onboarded-9f99e904-kova-260817-215555-eb9516
Measurements:
- startup: listening 5548ms; health 6711ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 2ms; post-ready p95 4ms; failures 22; final failures 0; slowest startup-sample/provision 1163ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1317.8 MB; tracked total 1884.5 MB; max CPU 174%; samples 17; roles gateway 1317.8MB/174%, gateway-tree 1317.8MB/174%, command-tree 495.5MB/163%, status-cli 495.5MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1136.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1317.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1317.8 MB, gateway-tree 1317.8 MB, command-tree 495.5 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-onboarded-f9c24855-kova-260817-215555-eb9516
Measurements:
- startup: listening 5286ms; health 6141ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 2ms; post-ready p95 4ms; failures 21; final failures 0; slowest startup-sample/provision 855ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1257.4 MB; tracked total 1784 MB; max CPU 166%; samples 15; roles gateway 1257.4MB/166%, gateway-tree 1257.4MB/166%, command-tree 454.7MB/151%, model-cli 454.7MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 849.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1257.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1257.4 MB, gateway-tree 1257.4 MB, command-tree 454.7 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-onboarded-fe872c26-kova-260817-215555-eb9516
Measurements:
- startup: listening 5796ms; health 6701ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 3ms; post-ready p95 4ms; failures 23; final failures 0; slowest startup-sample/provision 905ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1266.1 MB; tracked total 1836 MB; max CPU 163%; samples 16; roles gateway 1266.1MB/163%, gateway-tree 1266.1MB/163%, command-tree 498.6MB/154%, status-cli 498.6MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 901.09ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1266.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1266.1 MB, gateway-tree 1266.1 MB, command-tree 498.6 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-bundled-plugin-startup-4a0cbdf7-kova-260817-215555-eb9516
Measurements:
- startup: listening 5279ms; health 5875ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 596ms; post-ready p95 4ms; failures 33; final failures 0; slowest startup-sample/restart 607ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1256.6 MB; tracked total 1333.3 MB; max CPU 162%; samples 11; roles gateway 1256.6MB/162%, gateway-tree 1256.6MB/162%, mock-provider 71MB/15.5%, runtime-staging 71MB/15.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 850.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1256.6 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-bundled-plugin-startup-809ede2b-kova-260817-215555-eb9516
Measurements:
- startup: listening 5033ms; health 5854ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 685ms; post-ready p95 3ms; failures 31; final failures 0; slowest startup-sample/gateway-start 821ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1242.4 MB; tracked total 1319.5 MB; max CPU 172%; samples 11; roles gateway 1242.4MB/172%, gateway-tree 1242.4MB/172%, mock-provider 71.3MB/15.6%, runtime-staging 71.3MB/15.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 780.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1242.4 MB exceeded threshold 1000 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260817-215555-eb9516-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260817-215555-eb9516-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260817-215555-eb9516-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-fresh-r1-697fad55-kova-260817-215555-eb9516
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-fresh-r2-da880701-kova-260817-215555-eb9516
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-fresh-r3-82f8bdbd-kova-260817-215555-eb9516
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-onboarded-9f99e904-kova-260817-215555-eb9516
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-onboarded-f9c24855-kova-260817-215555-eb9516
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-fresh-install-onboarded-fe872c26-kova-260817-215555-eb9516
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-bundled-plugin-startup-4a0cbdf7-kova-260817-215555-eb9516
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-bundled-plugin-startup-809ede2b-kova-260817-215555-eb9516
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-215555-eb9516/kova-bundled-plugin-startup-5377119f-kova-260817-215555-eb9516
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msxrwao1-3y7-cff911c3`
- Result: removed
- Duration: 472ms

