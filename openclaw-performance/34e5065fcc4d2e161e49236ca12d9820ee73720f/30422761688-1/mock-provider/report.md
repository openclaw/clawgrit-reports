# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — model-cli peak RSS 721.5 MB exceeded threshold 700 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | model-cli peak RSS 721.5 MB exceeded threshold 700 MB |
| Blocking findings | 26 |
| Warnings | 20 |
| Records | 18 (PASS:8, FAIL:10) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260729-043812-3034cd` |
| Generated | 2026-07-29T04:46:17.976Z |
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
  - primary: model-cli peak RSS 721.5 MB exceeded threshold 700 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: model-cli peak RSS 721.5 MB exceeded threshold 700 MB
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
- BLOCKING fresh-install/onboarded-user: model-cli peak RSS 721.5 MB exceeded threshold 700 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1052.2 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1075.2 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1044.2 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1013.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1013.8 MB, agent-process 1013.8 MB, command-tree 1013.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1015.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.2 MB, agent-process 1015.2 MB, command-tree 1015.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1021.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1021.3 MB, agent-process 1021.3 MB, command-tree 1021.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 673 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 666.9 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 718.9 MB exceeded threshold 650 MB
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
| info | Kova | report | 40 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5065ms | 939.2MB | n/a | 157% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:1, PASS:2 | 5314ms | 933.2MB | n/a | 158% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:1, FAIL:2 | 4980ms | 1052.2MB | n/a | 157% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 5072ms | 951.5MB | n/a | 159% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 169.5% | 3691ms | 3679ms | 3559ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5187ms | 974.7MB | n/a | 158% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5639ms | 942.9 MB | 1686.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5022ms | 939.2 MB | 1693.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5065ms | 926.4 MB | 1731.5 MB | n/a | n/a |  |
| 1 | FAIL | fresh-install/onboarded-user |  | 5109ms | 924.6 MB | 1668.6 MB | n/a | n/a | model-cli peak RSS 721.5 MB exceeded threshold 700 MB |
| 2 | PASS | fresh-install/onboarded-user |  | 5314ms | 948.9 MB | 1639 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5378ms | 933.2 MB | 1663.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5039ms | 1040.9 MB | 1040.9 MB | n/a | n/a |  |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 4980ms | 1052.2 MB | 1052.2 MB | n/a | n/a | gateway peak RSS 1052.2 MB exceeded threshold 1050 MB |
| 3 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 4917ms | 1075.2 MB | 1075.2 MB | n/a | n/a | gateway peak RSS 1075.2 MB exceeded threshold 1050 MB |
| 1 | PASS | bundled-plugin-startup/fresh |  | 4999ms | 951.5 MB | 1403.4 MB | n/a | n/a |  |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5072ms | 1044.2 MB | 1398 MB | n/a | n/a | gateway peak RSS 1044.2 MB exceeded threshold 1000 MB |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5118ms | 946.9 MB | 1386.6 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1013.8 MB | 3691ms | 3768ms | agent-cli peak RSS 1013.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1013.8 MB, agent-process 1013.8 MB, command-tree 1013.8 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1015.2 MB | 3742ms | 3679ms | agent-cli peak RSS 1015.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.2 MB, agent-process 1015.2 MB, command-tree 1015.2 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1021.3 MB | 3647ms | 3658ms | agent-cli peak RSS 1021.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1021.3 MB, agent-process 1021.3 MB, command-tree 1021.3 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5187ms | 958.8 MB | 1724.5 MB | n/a | n/a | model-cli peak RSS 673 MB exceeded threshold 650 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5005ms | 1009.9 MB | 1709.1 MB | n/a | n/a | model-cli peak RSS 666.9 MB exceeded threshold 650 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5277ms | 974.7 MB | 1657.8 MB | n/a | n/a | model-cli peak RSS 718.9 MB exceeded threshold 650 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1075.2 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 160% (scenario fresh-install/onboarded-user)
- command-tree: RSS 1021.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 1021.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 903.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1021.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 950.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 744.6 MB (scenario fresh-install/fresh); CPU 155% (scenario fresh-install/onboarded-user)
- model-cli: RSS 721.5 MB (scenario fresh-install/onboarded-user); CPU 152% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-fresh-install-onboarded-9f99e904-kova-260729-043812-3034cd
Measurements:
- startup: listening 4775ms; health 5109ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 1ms; post-ready p95 3ms; failures 19; final failures 0; slowest startup-sample/provision 334ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 924.6 MB; tracked total 1668.6 MB; max CPU 158%; samples 23; roles gateway 924.6MB/158%, gateway-tree 924.6MB/158%, command-tree 744.1MB/149%, plugin-cli 744.1MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 516.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 721.5 MB exceeded threshold 700 MB

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-bundled-runtime-deps-mi-39c08a4a-kova-260729-043812-3034cd
Measurements:
- startup: listening 4520ms; health 4980ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 460ms; post-ready p95 not-collected; failures 27; final failures 0; slowest startup-sample/warm-restart 523ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1052.2 MB; tracked total 1052.2 MB; max CPU 157%; samples 8; roles gateway 1052.2MB/157%, gateway-tree 917.5MB/157%, command-tree 5.9MB/1%, uncategorized 5.9MB/1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 640.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1052.2 MB exceeded threshold 1050 MB

### bundled-runtime-deps sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-bundled-runtime-deps-mi-150715ba-kova-260729-043812-3034cd
Measurements:
- startup: listening 4522ms; health 4917ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 395ms; post-ready p95 not-collected; failures 27; final failures 0; slowest startup-sample/warm-restart 513ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1075.2 MB; tracked total 1075.2 MB; max CPU 157%; samples 8; roles gateway 1075.2MB/157%, gateway-tree 938.9MB/157%, command-tree 6MB/1%, uncategorized 6MB/1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 619.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1075.2 MB exceeded threshold 1050 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-bundled-plugin-startup-809ede2b-kova-260729-043812-3034cd
Measurements:
- startup: listening 4771ms; health 5072ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 301ms; post-ready p95 3ms; failures 29; final failures 0; slowest startup-sample/restart 551ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1044.2 MB; tracked total 1398 MB; max CPU 159%; samples 14; roles gateway 1044.2MB/159%, gateway-tree 942.5MB/159%, command-tree 455.7MB/146%, plugin-cli 455.7MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 713.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1044.2 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-agent-cold-warm-message-8e2a29af-kova-260729-043812-3034cd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1013.8 MB; tracked total 1013.8 MB; max CPU 170.5%; samples 14; roles agent-cli 1013.8MB/170.5%, agent-process 1013.8MB/170.5%, command-tree 1013.8MB/170.5%, status-cli 903.3MB/167.8%
- agent: turn 3768ms; cold/warm 3691ms/3768ms; cold-warm delta 0ms; pre-provider 3639ms; provider 1ms; metadata scans 14 (185.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3764.15ms; max 3768ms; pre-provider p95 3635ms
- agent CLI attribution: cold known 87ms / unattributed 3472ms; warm known 98ms / unattributed 3541ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1013.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1013.8 MB, agent-process 1013.8 MB, command-tree 1013.8 MB
  - agent-cli peak RSS 1013.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1013.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3691ms; pre-provider 3559ms; provider 2ms; post-provider 130ms; response true
    - active window: metadata scans 7 (87.71ms total, max 48.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3559ms; provider 2ms; post-provider 130ms; unknown 3267.78ms; source plugins.metadata.scan 291.22ms
  - warm: total 3768ms; pre-provider 3639ms; provider 1ms; post-provider 128ms; response true
    - active window: metadata scans 7 (97.83ms total, max 53.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3639ms; provider 1ms; post-provider 128ms; unknown 3347.78ms; source plugins.metadata.scan 291.22ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3559 ms | 87 ms | 3472 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-agent-cold-warm-message-8e2a29af-kova-260729-043812-3034cd/openclaw/timeline.jsonl |
  | warm | 3639 ms | 98 ms | 3541 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-agent-cold-warm-message-8e2a29af-kova-260729-043812-3034cd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 98 ms | 53 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-agent-cold-warm-message-2ab680e0-kova-260729-043812-3034cd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1015.2 MB; tracked total 1015.2 MB; max CPU 167.8%; samples 14; roles agent-cli 1015.2MB/167.8%, command-tree 1015.2MB/168.5%, agent-process 1015.2MB/167.8%, status-cli 898.1MB/168.5%
- agent: turn 3742ms; cold/warm 3742ms/3679ms; cold-warm delta 63ms; pre-provider 3608ms; provider 2ms; metadata scans 14 (184.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3738.85ms; max 3742ms; pre-provider p95 3605ms
- agent CLI attribution: cold known 90ms / unattributed 3518ms; warm known 97ms / unattributed 3451ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 52.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1015.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.2 MB, agent-process 1015.2 MB, command-tree 1015.2 MB
  - agent-cli peak RSS 1015.2 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1015.2 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3742ms; pre-provider 3608ms; provider 2ms; post-provider 132ms; response true
    - active window: metadata scans 7 (88.86ms total, max 45.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3608ms; provider 2ms; post-provider 132ms; unknown 3320.13ms; source plugins.metadata.scan 287.87ms
  - warm: total 3679ms; pre-provider 3548ms; provider 1ms; post-provider 130ms; response true
    - active window: metadata scans 7 (95.84ms total, max 52.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3548ms; provider 1ms; post-provider 130ms; unknown 3260.13ms; source plugins.metadata.scan 287.87ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3608 ms | 90 ms | 3518 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-agent-cold-warm-message-2ab680e0-kova-260729-043812-3034cd/openclaw/timeline.jsonl |
  | warm | 3548 ms | 97 ms | 3451 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-agent-cold-warm-message-2ab680e0-kova-260729-043812-3034cd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 90 ms | 46 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 97 ms | 52 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-agent-cold-warm-message-67b331a3-kova-260729-043812-3034cd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1021.3 MB; tracked total 1021.3 MB; max CPU 169.5%; samples 14; roles agent-cli 1021.3MB/169.5%, command-tree 1021.3MB/171.8%, agent-process 1021.3MB/169.5%, status-cli 882.4MB/171.8%
- agent: turn 3658ms; cold/warm 3647ms/3658ms; cold-warm delta 0ms; pre-provider 3536ms; provider 1ms; metadata scans 14 (191.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3657.45ms; max 3658ms; pre-provider p95 3535ms
- agent CLI attribution: cold known 91ms / unattributed 3425ms; warm known 98ms / unattributed 3438ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1021.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1021.3 MB, agent-process 1021.3 MB, command-tree 1021.3 MB
  - agent-cli peak RSS 1021.3 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1021.3 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3647ms; pre-provider 3516ms; provider 2ms; post-provider 129ms; response true
    - active window: metadata scans 7 (92.56ms total, max 48.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3516ms; provider 2ms; post-provider 129ms; unknown 3219.12ms; source plugins.metadata.scan 296.88ms
  - warm: total 3658ms; pre-provider 3536ms; provider 1ms; post-provider 121ms; response true
    - active window: metadata scans 7 (98.8ms total, max 53.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3536ms; provider 1ms; post-provider 121ms; unknown 3239.12ms; source plugins.metadata.scan 296.88ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3516 ms | 91 ms | 3425 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-agent-cold-warm-message-67b331a3-kova-260729-043812-3034cd/openclaw/timeline.jsonl |
  | warm | 3536 ms | 98 ms | 3438 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-agent-cold-warm-message-67b331a3-kova-260729-043812-3034cd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 91 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 98 ms | 53 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-gateway-performance-man-005107f3-kova-260729-043812-3034cd
Measurements:
- startup: listening 4772ms; health 5187ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 415ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/warm-restart 563ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 958.8 MB; tracked total 1724.5 MB; max CPU 158%; samples 23; roles gateway 958.8MB/158%, gateway-tree 929.2MB/158%, command-tree 795.5MB/149%, status-cli 795.5MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 675.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 673 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-043812-3034cd-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-043812-3034cd-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-043812-3034cd-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-fresh-install-fresh-r1-697fad55-kova-260729-043812-3034cd
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-fresh-install-fresh-r2-da880701-kova-260729-043812-3034cd
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-fresh-install-fresh-r3-82f8bdbd-kova-260729-043812-3034cd
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-fresh-install-onboarded-9f99e904-kova-260729-043812-3034cd
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-fresh-install-onboarded-f9c24855-kova-260729-043812-3034cd
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-fresh-install-onboarded-fe872c26-kova-260729-043812-3034cd
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260729-043812-3034cd
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-bundled-runtime-deps-mi-39c08a4a-kova-260729-043812-3034cd
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-043812-3034cd/kova-bundled-runtime-deps-mi-150715ba-kova-260729-043812-3034cd
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms5lgle3-3yy-20f35133`
- Result: removed
- Duration: 458ms

