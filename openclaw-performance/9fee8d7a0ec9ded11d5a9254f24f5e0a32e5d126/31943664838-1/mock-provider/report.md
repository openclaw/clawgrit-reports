# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1099.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1099.1 MB, gateway-tree 1099 MB, command-tree 466.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1099.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1099.1 MB, gateway-tree 1099 MB, command-tree 466.1 MB |
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
| Run ID | `kova-260816-111256-692c17` |
| Generated | 2026-08-16T11:19:51.540Z |
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
  - primary: gateway peak RSS 1099.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1099.1 MB, gateway-tree 1099 MB, command-tree 466.1 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1099.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1099.1 MB, gateway-tree 1099 MB, command-tree 466.1 MB
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
- BLOCKING fresh-install/fresh: gateway peak RSS 1099.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1099.1 MB, gateway-tree 1099 MB, command-tree 466.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1105.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1105.8 MB, gateway-tree 1105.7 MB, command-tree 466.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: gateway peak RSS 1096.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1096.4 MB, gateway-tree 1096.3 MB, command-tree 466.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1110.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1110.8 MB, gateway-tree 1110.7 MB, command-tree 471.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1108.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1108.2 MB, gateway-tree 1108.2 MB, command-tree 467.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 1101 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101 MB, gateway-tree 1101 MB, command-tree 464.9 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1105.1 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1221.2 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1093.6 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1146.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1146.8 MB, gateway-tree 1146.8 MB, command-tree 481.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1102.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1102.1 MB, gateway-tree 1102.1 MB, command-tree 463.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1139.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1139.4 MB, gateway-tree 1102 MB, command-tree 478.5 MB
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
| fresh-install/fresh | 3 | FAIL:3 | 4536ms | 1099.1MB | n/a | 159% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 4482ms | 1108.2MB | n/a | 156% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 4447ms | 1105.1MB | n/a | 161% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153% | 3293ms | 2964ms | 3175ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4471ms | 1139.4MB | n/a | 157% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 4926ms | 1099.1 MB | 1636.6 MB | n/a | n/a | gateway peak RSS 1099.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1099.1 MB, gateway-tree 1099 MB, command-tree 466.1 MB |
| 2 | FAIL | fresh-install/fresh |  | 4536ms | 1105.8 MB | 1643.6 MB | n/a | n/a | gateway peak RSS 1105.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1105.8 MB, gateway-tree 1105.7 MB, command-tree 466.4 MB |
| 3 | FAIL | fresh-install/fresh |  | 4474ms | 1096.4 MB | 1634.2 MB | n/a | n/a | gateway peak RSS 1096.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1096.4 MB, gateway-tree 1096.3 MB, command-tree 466.5 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 4495ms | 1110.8 MB | 1653.6 MB | n/a | n/a | gateway peak RSS 1110.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1110.8 MB, gateway-tree 1110.7 MB, command-tree 471.3 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 4482ms | 1108.2 MB | 1646.7 MB | n/a | n/a | gateway peak RSS 1108.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1108.2 MB, gateway-tree 1108.2 MB, command-tree 467.1 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 4456ms | 1101 MB | 1635.8 MB | n/a | n/a | gateway peak RSS 1101 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101 MB, gateway-tree 1101 MB, command-tree 464.9 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4501ms | 1105.1 MB | 1182.3 MB | n/a | n/a | gateway peak RSS 1105.1 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 4447ms | 1221.2 MB | 1221.2 MB | n/a | n/a | gateway peak RSS 1221.2 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 4430ms | 1093.6 MB | 1170.4 MB | n/a | n/a | gateway peak RSS 1093.6 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1183.9 MB | 3301ms | 2964ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1202.8 MB | 3293ms | 2998ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1155 MB | 3290ms | 2963ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4460ms | 1146.8 MB | 1699.5 MB | n/a | n/a | gateway peak RSS 1146.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1146.8 MB, gateway-tree 1146.8 MB, command-tree 481.3 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4471ms | 1102.1 MB | 1635.1 MB | n/a | n/a | gateway peak RSS 1102.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1102.1 MB, gateway-tree 1102.1 MB, command-tree 463.2 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4512ms | 1139.4 MB | 1650.2 MB | n/a | n/a | gateway peak RSS 1139.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1139.4 MB, gateway-tree 1102 MB, command-tree 478.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1221.2 MB (scenario bundled-plugin-startup/fresh); CPU 162% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 1131.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1146.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 162% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 611.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 945.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 481.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario fresh-install/fresh)
- plugin-cli: RSS 457 MB (scenario fresh-install/fresh); CPU 150% (scenario fresh-install/fresh)
- agent-cli: RSS 186.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 26.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-fresh-r1-697fad55-kova-260816-111256-692c17
Measurements:
- startup: listening 4278ms; health 4926ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 648ms; post-ready p95 2ms; failures 17; final failures 0; slowest startup-sample/provision 648ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1099.1 MB; tracked total 1636.6 MB; max CPU 157%; samples 15; roles gateway 1099.1MB/157%, gateway-tree 1099MB/157%, command-tree 466.1MB/150%, model-cli 466.1MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 597.75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1099.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1099.1 MB, gateway-tree 1099 MB, command-tree 466.1 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-fresh-r2-da880701-kova-260816-111256-692c17
Measurements:
- startup: listening 4019ms; health 4536ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 517ms; post-ready p95 2ms; failures 16; final failures 0; slowest startup-sample/provision 517ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1105.8 MB; tracked total 1643.6 MB; max CPU 159%; samples 15; roles gateway 1105.8MB/159%, gateway-tree 1105.7MB/159%, command-tree 466.4MB/148%, model-cli 466.4MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 577.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1105.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1105.8 MB, gateway-tree 1105.7 MB, command-tree 466.4 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-111256-692c17
Measurements:
- startup: listening 4015ms; health 4474ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 459ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 459ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1096.4 MB; tracked total 1634.2 MB; max CPU 159%; samples 15; roles gateway 1096.4MB/159%, gateway-tree 1096.3MB/159%, command-tree 466.5MB/146%, model-cli 466.5MB/145%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 564.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1096.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1096.4 MB, gateway-tree 1096.3 MB, command-tree 466.5 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-onboarded-9f99e904-kova-260816-111256-692c17
Measurements:
- startup: listening 4018ms; health 4495ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 477ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 477ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1110.8 MB; tracked total 1653.6 MB; max CPU 156%; samples 15; roles gateway 1110.8MB/156%, gateway-tree 1110.7MB/156%, command-tree 471.3MB/148%, model-cli 471.3MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 569.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1110.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1110.8 MB, gateway-tree 1110.7 MB, command-tree 471.3 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-onboarded-f9c24855-kova-260816-111256-692c17
Measurements:
- startup: listening 4030ms; health 4482ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 452ms; post-ready p95 2ms; failures 16; final failures 0; slowest startup-sample/provision 452ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1108.2 MB; tracked total 1646.7 MB; max CPU 155%; samples 14; roles gateway 1108.2MB/155%, gateway-tree 1108.2MB/155%, command-tree 467.1MB/142%, model-cli 467.1MB/142%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 568.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1108.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1108.2 MB, gateway-tree 1108.2 MB, command-tree 467.1 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-onboarded-fe872c26-kova-260816-111256-692c17
Measurements:
- startup: listening 4019ms; health 4456ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 437ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 437ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1101 MB; tracked total 1635.8 MB; max CPU 158%; samples 15; roles gateway 1101MB/158%, gateway-tree 1101MB/158%, command-tree 464.9MB/150%, model-cli 464.9MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 549.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1101 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101 MB, gateway-tree 1101 MB, command-tree 464.9 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-111256-692c17
Measurements:
- startup: listening 4019ms; health 4501ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 376ms; post-ready p95 3ms; failures 26; final failures 0; slowest startup-sample/gateway-start 482ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1105.1 MB; tracked total 1182.3 MB; max CPU 161%; samples 11; roles gateway 1105.1MB/161%, gateway-tree 1105.1MB/161%, mock-provider 71.4MB/14.2%, runtime-staging 71.4MB/14.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 553.24ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1105.1 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-bundled-plugin-startup-809ede2b-kova-260816-111256-692c17
Measurements:
- startup: listening 4020ms; health 4447ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 427ms; post-ready p95 2ms; failures 26; final failures 0; slowest startup-sample/restart 467ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1221.2 MB; tracked total 1221.2 MB; max CPU 162%; samples 11; roles gateway 1221.2MB/162%, gateway-tree 1122.2MB/162%, mock-provider 71.5MB/14.2%, runtime-staging 71.5MB/14.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 553.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1221.2 MB exceeded threshold 1000 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-111256-692c17-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-111256-692c17-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-111256-692c17-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-fresh-r1-697fad55-kova-260816-111256-692c17
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-fresh-r2-da880701-kova-260816-111256-692c17
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-111256-692c17
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-onboarded-9f99e904-kova-260816-111256-692c17
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-onboarded-f9c24855-kova-260816-111256-692c17
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-fresh-install-onboarded-fe872c26-kova-260816-111256-692c17
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-111256-692c17
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-bundled-plugin-startup-809ede2b-kova-260816-111256-692c17
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-111256-692c17/kova-bundled-plugin-startup-5377119f-kova-260816-111256-692c17
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msvphk1u-3zk-4ca27757`
- Result: removed
- Duration: 430ms

