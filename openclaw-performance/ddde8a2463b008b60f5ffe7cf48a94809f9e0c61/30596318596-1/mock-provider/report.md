# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — model-cli peak RSS 740.5 MB exceeded threshold 700 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | model-cli peak RSS 740.5 MB exceeded threshold 700 MB |
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
| Run ID | `kova-260731-012714-fdd268` |
| Generated | 2026-07-31T01:36:43.122Z |
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
  - primary: model-cli peak RSS 740.5 MB exceeded threshold 700 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: model-cli peak RSS 740.5 MB exceeded threshold 700 MB
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
- BLOCKING fresh-install/onboarded-user: model-cli peak RSS 740.5 MB exceeded threshold 700 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1081.1 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1009.3 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1043.9 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1023.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1023.5 MB, agent-process 1023.5 MB, command-tree 1023.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1025.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1025.3 MB, agent-process 1025.3 MB, command-tree 1025.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1026.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1026.1 MB, agent-process 1026.1 MB, command-tree 1026.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 734.9 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 671.9 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 660 MB exceeded threshold 650 MB
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
| fresh-install/fresh | 3 | PASS:3 | 5473ms | 935.3MB | n/a | 157% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:2, FAIL:1 | 5358ms | 929.5MB | n/a | 156% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:2, FAIL:1 | 5494ms | 1005.1MB | n/a | 160% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:2, PASS:1 | 5280ms | 1009.3MB | n/a | 159% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 172.7% | 3786ms | 3865ms | 3662ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5034ms | 1005MB | n/a | 157% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 6073ms | 931 MB | 1680.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5279ms | 935.3 MB | 1683.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5473ms | 948.9 MB | 1685.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5153ms | 963.4 MB | 1682.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5358ms | 927 MB | 1652.3 MB | n/a | n/a |  |
| 3 | FAIL | fresh-install/onboarded-user |  | 5611ms | 929.5 MB | 1643.7 MB | n/a | n/a | model-cli peak RSS 740.5 MB exceeded threshold 700 MB |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5588ms | 995.3 MB | 995.3 MB | n/a | n/a |  |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 5494ms | 1081.1 MB | 1086.7 MB | n/a | n/a | gateway peak RSS 1081.1 MB exceeded threshold 1050 MB |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5339ms | 1005.1 MB | 1005.1 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5119ms | 1009.3 MB | 1673.2 MB | n/a | n/a | gateway peak RSS 1009.3 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5280ms | 1043.9 MB | 1693.4 MB | n/a | n/a | gateway peak RSS 1043.9 MB exceeded threshold 1000 MB |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5498ms | 935 MB | 1675.7 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1023.5 MB | 4183ms | 4056ms | agent-cli peak RSS 1023.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1023.5 MB, agent-process 1023.5 MB, command-tree 1023.5 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1025.3 MB | 3760ms | 3865ms | agent-cli peak RSS 1025.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1025.3 MB, agent-process 1025.3 MB, command-tree 1025.3 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1026.1 MB | 3786ms | 3736ms | agent-cli peak RSS 1026.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1026.1 MB, agent-process 1026.1 MB, command-tree 1026.1 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4992ms | 1007.4 MB | 1691.3 MB | n/a | n/a | model-cli peak RSS 734.9 MB exceeded threshold 650 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5034ms | 1005 MB | 1686.3 MB | n/a | n/a | model-cli peak RSS 671.9 MB exceeded threshold 650 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5034ms | 1003.1 MB | 1645.7 MB | n/a | n/a | model-cli peak RSS 660 MB exceeded threshold 650 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1081.1 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 163% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-cli: RSS 1026.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1081.1 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 163% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-process: RSS 1026.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.1% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1026.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 900.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.4% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 755.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario fresh-install/onboarded-user)
- model-cli: RSS 740.5 MB (scenario fresh-install/onboarded-user); CPU 143% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-fresh-install-onboarded-fe872c26-kova-260731-012714-fdd268
Measurements:
- startup: listening 5275ms; health 5611ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 1ms; post-ready p95 3ms; failures 21; final failures 0; slowest startup-sample/provision 336ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 929.5 MB; tracked total 1643.7 MB; max CPU 157%; samples 21; roles gateway 929.5MB/157%, gateway-tree 929.5MB/157%, command-tree 740.5MB/154%, model-cli 740.5MB/141%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.load 359.43ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 740.5 MB exceeded threshold 700 MB

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-bundled-runtime-deps-mi-39c08a4a-kova-260731-012714-fdd268
Measurements:
- startup: listening 5029ms; health 5494ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 465ms; post-ready p95 not-collected; failures 31; final failures 0; slowest startup-sample/warm-restart 553ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1081.1 MB; tracked total 1086.7 MB; max CPU 160%; samples 9; roles gateway 1081.1MB/160%, gateway-tree 1081.1MB/160%, command-tree 6MB/1.9%, uncategorized 6MB/1.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 501.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1081.1 MB exceeded threshold 1050 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-bundled-plugin-startup-4a0cbdf7-kova-260731-012714-fdd268
Measurements:
- startup: listening 4773ms; health 5119ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 346ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/restart 547ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1009.3 MB; tracked total 1673.2 MB; max CPU 159%; samples 17; roles gateway 1009.3MB/159%, gateway-tree 918.6MB/159%, command-tree 754.7MB/154%, plugin-cli 754.7MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 425.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1009.3 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-bundled-plugin-startup-809ede2b-kova-260731-012714-fdd268
Measurements:
- startup: listening 5023ms; health 5280ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 250ms; post-ready p95 2ms; failures 29; final failures 0; slowest startup-sample/gateway-start 257ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1043.9 MB; tracked total 1693.4 MB; max CPU 157%; samples 17; roles gateway 1043.9MB/157%, gateway-tree 938.9MB/157%, command-tree 754.5MB/151%, plugin-cli 754.5MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 403.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1043.9 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-agent-cold-warm-message-8e2a29af-kova-260731-012714-fdd268
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1023.5 MB; tracked total 1023.5 MB; max CPU 180.1%; samples 15; roles agent-cli 1023.5MB/180.1%, agent-process 1023.5MB/180.1%, command-tree 1023.5MB/180.1%, status-cli 861.2MB/175.4%
- agent: turn 4183ms; cold/warm 4183ms/4056ms; cold-warm delta 127ms; pre-provider 4052ms; provider 2ms; metadata scans 14 (181.77ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4176.65ms; max 4183ms; pre-provider p95 4046.45ms
- agent CLI attribution: cold known 88ms / unattributed 3964ms; warm known 93ms / unattributed 3848ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 56.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1023.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1023.5 MB, agent-process 1023.5 MB, command-tree 1023.5 MB
  - agent-cli peak RSS 1023.5 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1023.5 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4183ms; pre-provider 4052ms; provider 2ms; post-provider 129ms; response true
    - active window: metadata scans 7 (87.62ms total, max 44.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4052ms; provider 2ms; post-provider 129ms; unknown 3711.6ms; source plugins.metadata.scan 340.4ms
  - warm: total 4056ms; pre-provider 3941ms; provider 1ms; post-provider 114ms; response true
    - active window: metadata scans 7 (94.15ms total, max 55.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3941ms; provider 1ms; post-provider 114ms; unknown 3600.6ms; source plugins.metadata.scan 340.4ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4052 ms | 88 ms | 3964 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-agent-cold-warm-message-8e2a29af-kova-260731-012714-fdd268/openclaw/timeline.jsonl |
  | warm | 3941 ms | 93 ms | 3848 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-agent-cold-warm-message-8e2a29af-kova-260731-012714-fdd268/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 88 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 93 ms | 55 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-agent-cold-warm-message-2ab680e0-kova-260731-012714-fdd268
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1025.3 MB; tracked total 1025.3 MB; max CPU 171.1%; samples 14; roles agent-cli 1025.3MB/171.1%, command-tree 1025.3MB/173.3%, agent-process 1025.3MB/171.1%, status-cli 900.4MB/173.3%
- agent: turn 3865ms; cold/warm 3760ms/3865ms; cold-warm delta 0ms; pre-provider 3752ms; provider 1ms; metadata scans 14 (182.46ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3859.75ms; max 3865ms; pre-provider p95 3745.85ms
- agent CLI attribution: cold known 86ms / unattributed 3543ms; warm known 99ms / unattributed 3653ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1025.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1025.3 MB, agent-process 1025.3 MB, command-tree 1025.3 MB
  - agent-cli peak RSS 1025.3 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1025.3 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3760ms; pre-provider 3629ms; provider 3ms; post-provider 128ms; response true
    - active window: metadata scans 7 (84.61ms total, max 46.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3629ms; provider 3ms; post-provider 128ms; unknown 3299.49ms; source plugins.metadata.scan 329.51ms
  - warm: total 3865ms; pre-provider 3752ms; provider 1ms; post-provider 112ms; response true
    - active window: metadata scans 7 (97.85ms total, max 58.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3752ms; provider 1ms; post-provider 112ms; unknown 3422.49ms; source plugins.metadata.scan 329.51ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3629 ms | 86 ms | 3543 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-agent-cold-warm-message-2ab680e0-kova-260731-012714-fdd268/openclaw/timeline.jsonl |
  | warm | 3752 ms | 99 ms | 3653 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-agent-cold-warm-message-2ab680e0-kova-260731-012714-fdd268/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 86 ms | 46 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 99 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-agent-cold-warm-message-67b331a3-kova-260731-012714-fdd268
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1026.1 MB; tracked total 1026.1 MB; max CPU 172.7%; samples 14; roles agent-cli 1026.1MB/172.7%, agent-process 1026.1MB/172.7%, command-tree 1026.1MB/172.7%, status-cli 897.3MB/170.5%
- agent: turn 3786ms; cold/warm 3786ms/3736ms; cold-warm delta 50ms; pre-provider 3662ms; provider 2ms; metadata scans 14 (191.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3783.5ms; max 3786ms; pre-provider p95 3659.95ms
- agent CLI attribution: cold known 96ms / unattributed 3566ms; warm known 98ms / unattributed 3523ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1026.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1026.1 MB, agent-process 1026.1 MB, command-tree 1026.1 MB
  - agent-cli peak RSS 1026.1 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1026.1 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3786ms; pre-provider 3662ms; provider 2ms; post-provider 122ms; response true
    - active window: metadata scans 7 (94.92ms total, max 46.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3662ms; provider 2ms; post-provider 122ms; unknown 3318.43ms; source plugins.metadata.scan 343.57ms
  - warm: total 3736ms; pre-provider 3621ms; provider 1ms; post-provider 114ms; response true
    - active window: metadata scans 7 (96.32ms total, max 58.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3621ms; provider 1ms; post-provider 114ms; unknown 3277.43ms; source plugins.metadata.scan 343.57ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3662 ms | 96 ms | 3566 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-agent-cold-warm-message-67b331a3-kova-260731-012714-fdd268/openclaw/timeline.jsonl |
  | warm | 3621 ms | 98 ms | 3523 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-agent-cold-warm-message-67b331a3-kova-260731-012714-fdd268/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 96 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 98 ms | 58 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-gateway-performance-man-005107f3-kova-260731-012714-fdd268
Measurements:
- startup: listening 4518ms; health 4992ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 187ms; post-ready p95 194ms; failures 28; final failures 0; slowest startup-sample/cold-start 474ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1007.4 MB; tracked total 1691.3 MB; max CPU 157%; samples 21; roles gateway 1007.4MB/157%, gateway-tree 936.1MB/157%, command-tree 755.4MB/152%, plugin-cli 755.4MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span reply.run\_prepared\_reply 534.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 734.9 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260731-012714-fdd268-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260731-012714-fdd268-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260731-012714-fdd268-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-fresh-install-fresh-r1-697fad55-kova-260731-012714-fdd268
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-fresh-install-fresh-r2-da880701-kova-260731-012714-fdd268
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-fresh-install-fresh-r3-82f8bdbd-kova-260731-012714-fdd268
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-fresh-install-onboarded-9f99e904-kova-260731-012714-fdd268
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-fresh-install-onboarded-f9c24855-kova-260731-012714-fdd268
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-fresh-install-onboarded-fe872c26-kova-260731-012714-fdd268
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260731-012714-fdd268
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-bundled-runtime-deps-mi-39c08a4a-kova-260731-012714-fdd268
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-012714-fdd268/kova-bundled-runtime-deps-mi-150715ba-kova-260731-012714-fdd268
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms89ip5u-3yv-8178ed22`
- Result: removed
- Duration: 399ms

