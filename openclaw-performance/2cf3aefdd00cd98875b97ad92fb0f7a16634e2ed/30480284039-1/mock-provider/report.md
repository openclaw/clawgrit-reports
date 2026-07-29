# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1065.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1065.7 MB, gateway-tree 1065.7 MB, command-tree 716.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1065.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1065.7 MB, gateway-tree 1065.7 MB, command-tree 716.4 MB |
| Blocking findings | 29 |
| Warnings | 20 |
| Records | 18 (PASS:8, FAIL:10) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260729-183225-a4358e` |
| Generated | 2026-07-29T18:41:47.146Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 18 |
| Scenarios | 5 |
| States | 5 |
| PASS | 8 |
| FAIL | 10 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 10
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 10 blocking, 0 warning
  - primary: gateway peak RSS 1065.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1065.7 MB, gateway-tree 1065.7 MB, command-tree 716.4 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1065.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1065.7 MB, gateway-tree 1065.7 MB, command-tree 716.4 MB
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
- BLOCKING fresh-install/fresh: gateway peak RSS 1065.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1065.7 MB, gateway-tree 1065.7 MB, command-tree 716.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: model-cli peak RSS 752.8 MB exceeded threshold 700 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1054.5 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1035.6 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1012.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.4 MB, agent-process 1012.4 MB, command-tree 1012.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1012.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.6 MB, agent-process 1012.6 MB, command-tree 1012.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1036.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1036.3 MB, agent-process 1036.3 MB, command-tree 1036.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1068.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068.6 MB, gateway-tree 950.9 MB, command-tree 703.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 667.6 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 674.6 MB exceeded threshold 650 MB
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
| info | Kova | report | 43 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:2, FAIL:1 | 6289ms | 926.4MB | n/a | 162% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:2, FAIL:1 | 5104ms | 928.1MB | n/a | 157% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5043ms | 966.7MB | n/a | 157% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:2, PASS:1 | 5030ms | 1035.6MB | n/a | 159% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 172.6% | 3779ms | 3899ms | 3647ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 6069ms | 1047.1MB | n/a | 162% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 7912ms | 918.8 MB | 1659.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 6289ms | 926.4 MB | 1615.7 MB | n/a | n/a |  |
| 3 | FAIL | fresh-install/fresh |  | 5705ms | 1065.7 MB | 1781.5 MB | n/a | n/a | gateway peak RSS 1065.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1065.7 MB, gateway-tree 1065.7 MB, command-tree 716.4 MB |
| 1 | PASS | fresh-install/onboarded-user |  | 5004ms | 938.9 MB | 1668.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5104ms | 928.1 MB | 1647.5 MB | n/a | n/a |  |
| 3 | FAIL | fresh-install/onboarded-user |  | 5958ms | 927.7 MB | 1651.1 MB | n/a | n/a | model-cli peak RSS 752.8 MB exceeded threshold 700 MB |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4884ms | 966.7 MB | 966.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5151ms | 964.6 MB | 964.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5043ms | 1012.4 MB | 1012.4 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4945ms | 1054.5 MB | 1393 MB | n/a | n/a | gateway peak RSS 1054.5 MB exceeded threshold 1000 MB |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5030ms | 971.9 MB | 1403.7 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5360ms | 1035.6 MB | 1608.1 MB | n/a | n/a | gateway peak RSS 1035.6 MB exceeded threshold 1000 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1012.4 MB | 3779ms | 3899ms | agent-cli peak RSS 1012.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.4 MB, agent-process 1012.4 MB, command-tree 1012.4 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1012.6 MB | 3926ms | 3764ms | agent-cli peak RSS 1012.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.6 MB, agent-process 1012.6 MB, command-tree 1012.6 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1036.3 MB | 3604ms | 4331ms | agent-cli peak RSS 1036.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1036.3 MB, agent-process 1036.3 MB, command-tree 1036.3 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5636ms | 1068.6 MB | 1653.8 MB | n/a | n/a | gateway peak RSS 1068.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068.6 MB, gateway-tree 950.9 MB, command-tree 703.4 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 6141ms | 947.2 MB | 1618.5 MB | n/a | n/a | model-cli peak RSS 667.6 MB exceeded threshold 650 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 6069ms | 1047.1 MB | 1666.9 MB | n/a | n/a | model-cli peak RSS 674.6 MB exceeded threshold 650 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1068.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 166% (scenario fresh-install/fresh)
- command-tree: RSS 1036.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1065.7 MB (scenario fresh-install/fresh); CPU 166% (scenario fresh-install/fresh)
- status-cli: RSS 895.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 1036.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1036.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.2% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 738.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 168% (scenario fresh-install/fresh)
- model-cli: RSS 752.8 MB (scenario fresh-install/onboarded-user); CPU 161% (scenario fresh-install/fresh)

## Selected Sample Details

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-fresh-install-fresh-r3-82f8bdbd-kova-260729-183225-a4358e
Measurements:
- startup: listening 5276ms; health 5705ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 2ms; post-ready p95 2ms; failures 21; final failures 0; slowest startup-sample/provision 429ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1065.7 MB; tracked total 1781.5 MB; max CPU 149%; samples 22; roles gateway 1065.7MB/149%, gateway-tree 1065.7MB/149%, command-tree 716.4MB/148%, status-cli 716.4MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 618.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1065.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1065.7 MB, gateway-tree 1065.7 MB, command-tree 716.4 MB
  - gateway peak RSS 1065.7 MB exceeded threshold 1050 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-fresh-install-onboarded-fe872c26-kova-260729-183225-a4358e
Measurements:
- startup: listening 5281ms; health 5958ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 1ms; post-ready p95 2ms; failures 21; final failures 0; slowest startup-sample/provision 677ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 927.7 MB; tracked total 1651.1 MB; max CPU 157%; samples 22; roles gateway 927.7MB/157%, gateway-tree 927.7MB/157%, command-tree 752.8MB/155%, model-cli 752.8MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 751.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 752.8 MB exceeded threshold 700 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-bundled-plugin-startup-4a0cbdf7-kova-260729-183225-a4358e
Measurements:
- startup: listening 4521ms; health 4945ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 3
- health: startup p95 424ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/restart 529ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1054.5 MB; tracked total 1393 MB; max CPU 160%; samples 14; roles gateway 1054.5MB/160%, gateway-tree 935.3MB/160%, command-tree 457.9MB/146%, plugin-cli 457.9MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 617.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1054.5 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-bundled-plugin-startup-5377119f-kova-260729-183225-a4358e
Measurements:
- startup: listening 5026ms; health 5360ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 334ms; post-ready p95 3ms; failures 31; final failures 0; slowest startup-sample/restart 437ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1035.6 MB; tracked total 1608.1 MB; max CPU 159%; samples 17; roles gateway 1035.6MB/159%, gateway-tree 936.9MB/159%, command-tree 671.5MB/154%, plugin-cli 671.5MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 713.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1035.6 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-agent-cold-warm-message-8e2a29af-kova-260729-183225-a4358e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1012.4 MB; tracked total 1012.4 MB; max CPU 169.5%; samples 14; roles agent-cli 1012.4MB/169.5%, command-tree 1012.4MB/176.5%, agent-process 1012.4MB/169.5%, status-cli 895.4MB/176.5%
- agent: turn 3899ms; cold/warm 3779ms/3899ms; cold-warm delta 0ms; pre-provider 3778ms; provider 1ms; metadata scans 14 (207.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3893ms; max 3899ms; pre-provider p95 3771.45ms
- agent CLI attribution: cold known 90ms / unattributed 3557ms; warm known 117ms / unattributed 3661ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1012.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.4 MB, agent-process 1012.4 MB, command-tree 1012.4 MB
  - agent-cli peak RSS 1012.4 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1012.4 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3779ms; pre-provider 3647ms; provider 3ms; post-provider 129ms; response true
    - active window: metadata scans 7 (89.66ms total, max 50.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3647ms; provider 3ms; post-provider 129ms; unknown 3319.87ms; source plugins.metadata.scan 327.13ms
  - warm: total 3899ms; pre-provider 3778ms; provider 1ms; post-provider 120ms; response true
    - active window: metadata scans 7 (117.43ms total, max 58.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3778ms; provider 1ms; post-provider 120ms; unknown 3450.87ms; source plugins.metadata.scan 327.13ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3647 ms | 90 ms | 3557 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-agent-cold-warm-message-8e2a29af-kova-260729-183225-a4358e/openclaw/timeline.jsonl |
  | warm | 3778 ms | 117 ms | 3661 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-agent-cold-warm-message-8e2a29af-kova-260729-183225-a4358e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 90 ms | 51 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 117 ms | 58 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-agent-cold-warm-message-2ab680e0-kova-260729-183225-a4358e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1012.6 MB; tracked total 1012.6 MB; max CPU 172.6%; samples 14; roles agent-cli 1012.6MB/172.6%, command-tree 1012.6MB/180.1%, agent-process 1012.6MB/172.6%, status-cli 884.7MB/180.1%
- agent: turn 3926ms; cold/warm 3926ms/3764ms; cold-warm delta 162ms; pre-provider 3808ms; provider 3ms; metadata scans 14 (216.38ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3917.9ms; max 3926ms; pre-provider p95 3799.3ms
- agent CLI attribution: cold known 112ms / unattributed 3696ms; warm known 107ms / unattributed 3527ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1012.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.6 MB, agent-process 1012.6 MB, command-tree 1012.6 MB
  - agent-cli peak RSS 1012.6 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1012.6 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3926ms; pre-provider 3808ms; provider 3ms; post-provider 115ms; response true
    - active window: metadata scans 7 (110.93ms total, max 50.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3808ms; provider 3ms; post-provider 115ms; unknown 3486.57ms; source plugins.metadata.scan 321.43ms
  - warm: total 3764ms; pre-provider 3634ms; provider 2ms; post-provider 128ms; response true
    - active window: metadata scans 7 (105.45ms total, max 58.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3634ms; provider 2ms; post-provider 128ms; unknown 3312.57ms; source plugins.metadata.scan 321.43ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3808 ms | 112 ms | 3696 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-agent-cold-warm-message-2ab680e0-kova-260729-183225-a4358e/openclaw/timeline.jsonl |
  | warm | 3634 ms | 107 ms | 3527 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-agent-cold-warm-message-2ab680e0-kova-260729-183225-a4358e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 112 ms | 50 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 107 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-agent-cold-warm-message-67b331a3-kova-260729-183225-a4358e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1036.3 MB; tracked total 1036.3 MB; max CPU 174.2%; samples 15; roles agent-cli 1036.3MB/174.2%, command-tree 1036.3MB/180.3%, agent-process 1036.3MB/174.2%, status-cli 869.5MB/180.3%
- agent: turn 4331ms; cold/warm 3604ms/4331ms; cold-warm delta 0ms; pre-provider 4185ms; provider 1ms; metadata scans 14 (206.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4294.65ms; max 4331ms; pre-provider p95 4149.9ms
- agent CLI attribution: cold known 87ms / unattributed 3396ms; warm known 118ms / unattributed 4067ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 59.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1036.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1036.3 MB, agent-process 1036.3 MB, command-tree 1036.3 MB
  - agent-cli peak RSS 1036.3 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1036.3 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3604ms; pre-provider 3483ms; provider 3ms; post-provider 118ms; response true
    - active window: metadata scans 7 (88.48ms total, max 47.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3483ms; provider 3ms; post-provider 118ms; unknown 3152.58ms; source plugins.metadata.scan 330.42ms
  - warm: total 4331ms; pre-provider 4185ms; provider 1ms; post-provider 145ms; response true
    - active window: metadata scans 7 (118.01ms total, max 59.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4185ms; provider 1ms; post-provider 145ms; unknown 3854.58ms; source plugins.metadata.scan 330.42ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3483 ms | 87 ms | 3396 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-agent-cold-warm-message-67b331a3-kova-260729-183225-a4358e/openclaw/timeline.jsonl |
  | warm | 4185 ms | 118 ms | 4067 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-agent-cold-warm-message-67b331a3-kova-260729-183225-a4358e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 118 ms | 60 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-gateway-performance-man-005107f3-kova-260729-183225-a4358e
Measurements:
- startup: listening 5275ms; health 5636ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 361ms; post-ready p95 4ms; failures 35; final failures 0; slowest startup-sample/warm-restart 719ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1068.6 MB; tracked total 1653.8 MB; max CPU 166%; samples 28; roles gateway 1068.6MB/166%, gateway-tree 950.9MB/162%, command-tree 703.4MB/157%, status-cli 703.4MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 864.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1068.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068.6 MB, gateway-tree 950.9 MB, command-tree 703.4 MB
  - gateway peak RSS 1068.6 MB exceeded threshold 1050 MB
  - model-cli peak RSS 687 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-183225-a4358e-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-183225-a4358e-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-183225-a4358e-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-fresh-install-fresh-r1-697fad55-kova-260729-183225-a4358e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-fresh-install-fresh-r2-da880701-kova-260729-183225-a4358e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-fresh-install-fresh-r3-82f8bdbd-kova-260729-183225-a4358e
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-fresh-install-onboarded-9f99e904-kova-260729-183225-a4358e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-fresh-install-onboarded-f9c24855-kova-260729-183225-a4358e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-fresh-install-onboarded-fe872c26-kova-260729-183225-a4358e
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260729-183225-a4358e
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-bundled-runtime-deps-mi-39c08a4a-kova-260729-183225-a4358e
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-183225-a4358e/kova-bundled-runtime-deps-mi-150715ba-kova-260729-183225-a4358e
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms6f9edt-3xu-73685a90`
- Result: removed
- Duration: 753ms

