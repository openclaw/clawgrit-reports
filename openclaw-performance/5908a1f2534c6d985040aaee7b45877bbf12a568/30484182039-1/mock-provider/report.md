# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1052.7 MB exceeded threshold 1050 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1052.7 MB exceeded threshold 1050 MB |
| Blocking findings | 30 |
| Warnings | 22 |
| Records | 18 (PASS:7, FAIL:11) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260729-192440-177d0f` |
| Generated | 2026-07-29T19:34:48.301Z |
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
| PASS | 7 |
| FAIL | 11 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 11
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 11 blocking, 0 warning
  - primary: gateway peak RSS 1052.7 MB exceeded threshold 1050 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1052.7 MB exceeded threshold 1050 MB
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
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1052.7 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1054.9 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1067.1 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1084.2 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1032.4 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1029.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1029.7 MB, agent-process 1029.7 MB, command-tree 1029.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1005.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1005.8 MB, agent-process 1005.8 MB, command-tree 1005.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1007.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1007.5 MB, agent-process 1007.5 MB, command-tree 1007.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 687.9 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1053.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1053.5 MB, gateway-tree 998.8 MB, command-tree 681.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 675 MB exceeded threshold 650 MB
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
| info | Kova | report | 46 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 6656ms | 931.4MB | n/a | 159% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5525ms | 932.9MB | n/a | 157% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:2, PASS:1 | 6315ms | 1052.7MB | n/a | 165% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 6995ms | 1067.1MB | n/a | 168% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 183.7% | 5441ms | 5038ms | 5257ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 7140ms | 976.9MB | n/a | 166% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 6855ms | 945.6 MB | 1643 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 6656ms | 913.2 MB | 1594.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5388ms | 931.4 MB | 1668.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5491ms | 932.9 MB | 1666.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5525ms | 921.8 MB | 1625 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5554ms | 945.2 MB | 1672.9 MB | n/a | n/a |  |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 6315ms | 1052.7 MB | 1052.7 MB | n/a | n/a | gateway peak RSS 1052.7 MB exceeded threshold 1050 MB |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 5966ms | 1054.9 MB | 1054.9 MB | n/a | n/a | gateway peak RSS 1054.9 MB exceeded threshold 1050 MB |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6878ms | 992.6 MB | 992.6 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 6860ms | 1067.1 MB | 1640.6 MB | n/a | n/a | gateway peak RSS 1067.1 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 7744ms | 1084.2 MB | 1781.7 MB | n/a | n/a | gateway peak RSS 1084.2 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 6995ms | 1032.4 MB | 1658.8 MB | n/a | n/a | gateway peak RSS 1032.4 MB exceeded threshold 1000 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1029.7 MB | 5441ms | 5038ms | agent-cli peak RSS 1029.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1029.7 MB, agent-process 1029.7 MB, command-tree 1029.7 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1005.8 MB | 4945ms | 4842ms | agent-cli peak RSS 1005.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1005.8 MB, agent-process 1005.8 MB, command-tree 1005.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1007.5 MB | 5709ms | 5436ms | agent-cli peak RSS 1007.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1007.5 MB, agent-process 1007.5 MB, command-tree 1007.5 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 7411ms | 976.9 MB | 1696.7 MB | n/a | n/a | model-cli peak RSS 687.9 MB exceeded threshold 650 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 7140ms | 1053.5 MB | 1680.5 MB | n/a | n/a | gateway peak RSS 1053.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1053.5 MB, gateway-tree 998.8 MB, command-tree 681.7 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 6004ms | 974.5 MB | 1593.4 MB | n/a | n/a | model-cli peak RSS 675 MB exceeded threshold 650 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1084.2 MB (scenario bundled-plugin-startup/fresh); CPU 170% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 1029.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 195.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1084.2 MB (scenario bundled-plugin-startup/fresh); CPU 170% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 930 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 195.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 1029.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1029.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.4% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 734.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 166% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 694.4 MB (scenario fresh-install/fresh); CPU 165% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260729-192440-177d0f
Measurements:
- startup: listening 5785ms; health 6315ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 530ms; post-ready p95 not-collected; failures 35; final failures 0; slowest startup-sample/warm-restart 616ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1052.7 MB; tracked total 1052.7 MB; max CPU 165%; samples 9; roles gateway 1052.7MB/165%, gateway-tree 938MB/165%, command-tree 5.7MB/1.6%, uncategorized 5.7MB/1.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 837.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1052.7 MB exceeded threshold 1050 MB

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260729-192440-177d0f
Measurements:
- startup: listening 5535ms; health 5966ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 3
- health: startup p95 431ms; post-ready p95 not-collected; failures 34; final failures 0; slowest startup-sample/warm-restart 729ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1054.9 MB; tracked total 1054.9 MB; max CPU 160%; samples 8; roles gateway 1054.9MB/160%, gateway-tree 913.4MB/160%, command-tree 5.9MB/1.9%, uncategorized 5.9MB/1.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 804.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1054.9 MB exceeded threshold 1050 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-bundled-plugin-startup-4a0cbdf7-kova-260729-192440-177d0f
Measurements:
- startup: listening 6292ms; health 6860ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 2ms; post-ready p95 3ms; failures 40; final failures 0; slowest startup-sample/gateway-start 568ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1067.1 MB; tracked total 1640.6 MB; max CPU 164%; samples 18; roles gateway 1067.1MB/164%, command-tree 694.4MB/166%, gateway-tree 976.1MB/164%, plugin-cli 694.4MB/166%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 805.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1067.1 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-bundled-plugin-startup-809ede2b-kova-260729-192440-177d0f
Measurements:
- startup: listening 6807ms; health 7744ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 2ms; post-ready p95 13ms; failures 41; final failures 0; slowest startup-sample/gateway-start 937ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1084.2 MB; tracked total 1781.7 MB; max CPU 170%; samples 17; roles gateway 1084.2MB/170%, gateway-tree 1084.2MB/170%, command-tree 700.1MB/165%, plugin-cli 700.1MB/165%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1029.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1084.2 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-bundled-plugin-startup-5377119f-kova-260729-192440-177d0f
Measurements:
- startup: listening 6552ms; health 6995ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 10ms; post-ready p95 3ms; failures 38; final failures 0; slowest startup-sample/restart 681ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1032.4 MB; tracked total 1658.8 MB; max CPU 168%; samples 17; roles gateway 1032.4MB/168%, gateway-tree 960.8MB/168%, command-tree 698.3MB/166%, plugin-cli 698.3MB/166%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 954.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1032.4 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-agent-cold-warm-message-8e2a29af-kova-260729-192440-177d0f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1029.7 MB; tracked total 1029.7 MB; max CPU 183.7%; samples 18; roles agent-cli 1029.7MB/183.7%, command-tree 1029.7MB/195.1%, agent-process 1029.7MB/183.7%, status-cli 904.3MB/195.1%
- agent: turn 5441ms; cold/warm 5441ms/5038ms; cold-warm delta 403ms; pre-provider 5257ms; provider 3ms; metadata scans 14 (275.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5420.85ms; max 5441ms; pre-provider p95 5237.3ms
- agent CLI attribution: cold known 153ms / unattributed 5104ms; warm known 121ms / unattributed 4742ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1029.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1029.7 MB, agent-process 1029.7 MB, command-tree 1029.7 MB
  - agent-cli peak RSS 1029.7 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1029.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5441ms; pre-provider 5257ms; provider 3ms; post-provider 181ms; response true
    - active window: metadata scans 7 (153.64ms total, max 62.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5257ms; provider 3ms; post-provider 181ms; unknown 4847.59ms; source plugins.metadata.scan 409.41ms
  - warm: total 5038ms; pre-provider 4863ms; provider 1ms; post-provider 174ms; response true
    - active window: metadata scans 7 (121.95ms total, max 71.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4863ms; provider 1ms; post-provider 174ms; unknown 4453.59ms; source plugins.metadata.scan 409.41ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5257 ms | 153 ms | 5104 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-agent-cold-warm-message-8e2a29af-kova-260729-192440-177d0f/openclaw/timeline.jsonl |
  | warm | 4863 ms | 121 ms | 4742 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-agent-cold-warm-message-8e2a29af-kova-260729-192440-177d0f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 153 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 71 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-agent-cold-warm-message-2ab680e0-kova-260729-192440-177d0f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1005.8 MB; tracked total 1005.8 MB; max CPU 180.7%; samples 17; roles agent-cli 1005.8MB/180.7%, command-tree 1005.8MB/193.6%, agent-process 1005.8MB/180.7%, status-cli 836MB/193.6%
- agent: turn 4945ms; cold/warm 4945ms/4842ms; cold-warm delta 103ms; pre-provider 4771ms; provider 4ms; metadata scans 14 (254.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4939.85ms; max 4945ms; pre-provider p95 4765.15ms
- agent CLI attribution: cold known 126ms / unattributed 4645ms; warm known 128ms / unattributed 4526ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 104.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1005.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1005.8 MB, agent-process 1005.8 MB, command-tree 1005.8 MB
  - agent-cli peak RSS 1005.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1005.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4945ms; pre-provider 4771ms; provider 4ms; post-provider 170ms; response true
    - active window: metadata scans 7 (125.91ms total, max 67.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4771ms; provider 4ms; post-provider 170ms; unknown 4308.03ms; source plugins.metadata.scan 462.97ms
  - warm: total 4842ms; pre-provider 4654ms; provider 2ms; post-provider 186ms; response true
    - active window: metadata scans 7 (128.32ms total, max 70.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4654ms; provider 2ms; post-provider 186ms; unknown 4191.03ms; source plugins.metadata.scan 462.97ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4771 ms | 126 ms | 4645 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-agent-cold-warm-message-2ab680e0-kova-260729-192440-177d0f/openclaw/timeline.jsonl |
  | warm | 4654 ms | 128 ms | 4526 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-agent-cold-warm-message-2ab680e0-kova-260729-192440-177d0f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 68 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 70 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-agent-cold-warm-message-67b331a3-kova-260729-192440-177d0f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1007.5 MB; tracked total 1007.5 MB; max CPU 193.4%; samples 19; roles agent-cli 1007.5MB/193.4%, agent-process 1007.5MB/193.4%, command-tree 1007.5MB/193.4%, status-cli 930MB/186.8%
- agent: turn 5709ms; cold/warm 5709ms/5436ms; cold-warm delta 273ms; pre-provider 5486ms; provider 3ms; metadata scans 14 (258.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5695.35ms; max 5709ms; pre-provider p95 5474.3ms
- agent CLI attribution: cold known 119ms / unattributed 5367ms; warm known 139ms / unattributed 5113ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 85.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1007.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1007.5 MB, agent-process 1007.5 MB, command-tree 1007.5 MB
  - agent-cli peak RSS 1007.5 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1007.5 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5709ms; pre-provider 5486ms; provider 3ms; post-provider 220ms; response true
    - active window: metadata scans 7 (119.81ms total, max 52.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5486ms; provider 3ms; post-provider 220ms; unknown 5083.27ms; source plugins.metadata.scan 402.73ms
  - warm: total 5436ms; pre-provider 5252ms; provider 2ms; post-provider 182ms; response true
    - active window: metadata scans 7 (139.06ms total, max 85.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5252ms; provider 2ms; post-provider 182ms; unknown 4849.27ms; source plugins.metadata.scan 402.73ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5486 ms | 119 ms | 5367 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-agent-cold-warm-message-67b331a3-kova-260729-192440-177d0f/openclaw/timeline.jsonl |
  | warm | 5252 ms | 139 ms | 5113 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-agent-cold-warm-message-67b331a3-kova-260729-192440-177d0f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 119 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 139 ms | 85 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-192440-177d0f-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-192440-177d0f-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-192440-177d0f-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-fresh-install-fresh-r1-697fad55-kova-260729-192440-177d0f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-fresh-install-fresh-r2-da880701-kova-260729-192440-177d0f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-fresh-install-fresh-r3-82f8bdbd-kova-260729-192440-177d0f
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-fresh-install-onboarded-9f99e904-kova-260729-192440-177d0f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-fresh-install-onboarded-f9c24855-kova-260729-192440-177d0f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-fresh-install-onboarded-fe872c26-kova-260729-192440-177d0f
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260729-192440-177d0f
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260729-192440-177d0f
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-192440-177d0f/kova-bundled-runtime-deps-mi-150715ba-kova-260729-192440-177d0f
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms6h4l44-3yw-04ea62ac`
- Result: removed
- Duration: 578ms

