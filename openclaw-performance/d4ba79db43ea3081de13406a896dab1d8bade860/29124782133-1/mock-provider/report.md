# Kova OpenClaw Runtime Report

> **❌ [DO-NOT-SHIP] FAIL** — plugin-cli peak RSS 707 MB exceeded threshold 600 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO_NOT_SHIP |
| Reason | plugin-cli peak RSS 707 MB exceeded threshold 600 MB |
| Blocking findings | 58 |
| Warnings | 20 |
| Records | 18 (FAIL:13, PASS:5) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 211 total, 0 missing, 3 failed
- Categories: command: 139, artifact: 18, cleanup: 18, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | cold-agent-turn responseOk was not true |
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | cold-agent-turn responseOk was not true |
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | cold-agent-turn responseOk was not true |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260710-212909-c55867` |
| Generated | 2026-07-10T21:41:06.078Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.13.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 18 |
| Scenarios | 5 |
| States | 5 |
| FAIL | 13 |
| PASS | 5 |

## Release Gate

- Verdict: DO_NOT_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 13
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 13 blocking, 0 warning
  - primary: plugin-cli peak RSS 707 MB exceeded threshold 600 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: plugin-cli peak RSS 707 MB exceeded threshold 600 MB
- Kova: Required release gate platform coverage linux-arm64 was not present in the report.

### Failure Cards

- WARNING gate: Required release gate platform coverage linux-arm64 was not present in the report.
  - expected: platform coverage linux-arm64
  - actual: linux/x64
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate platform coverage wsl2 was not present in the report.
  - expected: platform coverage wsl2
  - actual: linux/x64
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage failure-containment:baseline was not present in the report.
  - expected: requirement coverage failure-containment:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage soak:baseline was not present in the report.
  - expected: requirement coverage soak:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage workspace-scan:baseline was not present in the report.
  - expected: requirement coverage workspace-scan:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-runtime:baseline was not present in the report.
  - expected: requirement coverage mcp-runtime:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cron-runtime:run-now was not present in the report.
  - expected: requirement coverage cron-runtime:run-now
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report.
  - expected: requirement coverage exec-tool-safety:safe-and-blocked-exec
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report.
  - expected: requirement coverage mcp-tool-call:safe-tool-call
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report.
  - expected: requirement coverage tool-failure-containment:failure-attribution
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage browser-automation:baseline was not present in the report.
  - expected: requirement coverage browser-automation:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage media-understanding:baseline was not present in the report.
  - expected: requirement coverage media-understanding:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage network-offline:baseline was not present in the report.
  - expected: requirement coverage network-offline:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cross-platform-smoke:baseline was not present in the report.
  - expected: requirement coverage cross-platform-smoke:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:list-survives-dirty-state was not present in the report.
  - expected: requirement coverage dirty-plugin-state:list-survives-dirty-state
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:doctor-preserves-user-files was not present in the report.
  - expected: requirement coverage dirty-plugin-state:doctor-preserves-user-files
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:plugin-failure-recovery was not present in the report.
  - expected: requirement coverage release-update-recovery:plugin-failure-recovery
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:doctor-repair-contract was not present in the report.
  - expected: requirement coverage release-update-recovery:doctor-repair-contract
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:update-retry-target-stability was not present in the report.
  - expected: requirement coverage release-update-recovery:update-retry-target-stability
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:rollback-available was not present in the report.
  - expected: requirement coverage release-update-recovery:rollback-available
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- BLOCKING fresh-install/fresh: plugin-cli peak RSS 707 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: plugin-cli peak RSS 645.6 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: plugin-cli peak RSS 740.4 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: plugin-cli peak RSS 662.5 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: plugin-cli peak RSS 695.3 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: plugin-cli peak RSS 704.1 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: final gateway state was stopped
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: status-cli peak RSS 732.1 MB exceeded threshold 500 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: status-cli peak RSS 733.5 MB exceeded threshold 500 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: status-cli peak RSS 545.9 MB exceeded threshold 500 MB
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
| info | Kova | report | 81 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 7667ms | 733.1MB | n/a | 132% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 7626ms | 730.3MB | n/a | 66.6% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 8043ms | 656.8MB | n/a | 85.7% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 10152ms | 689.6MB | n/a | 127% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 141.9% | 3017ms | 2935ms | 2895ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 738.2MB | n/a | 48.8% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 10841ms | 733.1 MB | 1435.4 MB | n/a | n/a | plugin-cli peak RSS 707 MB exceeded threshold 600 MB |
| 2 | FAIL | fresh-install/fresh |  | 6874ms | 659.9 MB | 664.7 MB | n/a | n/a | plugin-cli peak RSS 645.6 MB exceeded threshold 600 MB |
| 3 | FAIL | fresh-install/fresh |  | 7667ms | 765.9 MB | 770.7 MB | n/a | n/a | plugin-cli peak RSS 740.4 MB exceeded threshold 600 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 8434ms | 778 MB | 782.9 MB | n/a | n/a | plugin-cli peak RSS 662.5 MB exceeded threshold 600 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 7626ms | 730.3 MB | 735.1 MB | n/a | n/a | plugin-cli peak RSS 695.3 MB exceeded threshold 600 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 6802ms | 683.7 MB | 704.1 MB | n/a | n/a | plugin-cli peak RSS 704.1 MB exceeded threshold 600 MB |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 10803ms | 656.8 MB | 661.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 8043ms | 683.6 MB | 688.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7104ms | 628.8 MB | 633.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 10149ms | 753.2 MB | 1030.3 MB | n/a | n/a |  |
| 2 | FAIL | bundled-plugin-startup/fresh |  | unknown | 661.8 MB | 666.6 MB | n/a | n/a | final gateway state was stopped |
| 3 | PASS | bundled-plugin-startup/fresh |  | 10155ms | 689.6 MB | 954.8 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 688.1 MB | 3017ms | 3136ms | agent message command finished without a usable assistant response |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 816.2 MB | 3162ms | 2826ms | agent message command finished without a usable assistant response |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 718.8 MB | 2811ms | 2935ms | agent message command finished without a usable assistant response |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 770.8 MB | 775.7 MB | n/a | n/a | status-cli peak RSS 732.1 MB exceeded threshold 500 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 738.2 MB | 743 MB | n/a | n/a | status-cli peak RSS 733.5 MB exceeded threshold 500 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 697 MB | 701.8 MB | n/a | n/a | status-cli peak RSS 545.9 MB exceeded threshold 500 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 816.2 MB; CPU 147.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 816.2 MB; CPU 144.4%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 816.2 MB; CPU 144.4%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 778 MB; CPU 150%; scenario fresh-install/onboarded-user
- gateway-tree: RSS 778 MB; CPU 132%; scenario fresh-install/onboarded-user
- status-cli: RSS 747.1 MB; CPU 144.8%; scenario fresh-install/fresh
- plugin-cli: RSS 740.4 MB; CPU 147.8%; scenario fresh-install/fresh
- model-cli: RSS 520.8 MB; CPU 143.8%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-fresh-r1-697fad55-kova-260710-212909-c55867
Measurements:
- startup: listening 10819ms; health 10841ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 2ms; post-ready p95 4ms; failures 46; final failures 0; slowest startup-sample/provision 22ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 733.1 MB; tracked total 1435.4 MB; max CPU 132%; samples 20; roles command-tree 747.1MB/139.8%, status-cli 747.1MB/135.4%, gateway 733.1MB/132%, gateway-tree 733.1MB/132%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 250.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 707 MB exceeded threshold 600 MB
  - status-cli peak RSS 747.1 MB exceeded threshold 500 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-fresh-r2-da880701-kova-260710-212909-c55867
Measurements:
- startup: listening 6780ms; health 6874ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 27; final failures 0; slowest startup-sample/provision 94ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 659.9 MB; tracked total 664.7 MB; max CPU 52.3%; samples 20; roles gateway 659.9MB/52.3%, gateway-tree 659.9MB/52.3%, command-tree 645.6MB/143.8%, plugin-cli 645.6MB/139.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 179.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 645.6 MB exceeded threshold 600 MB
  - final gateway state was stopped

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-fresh-r3-82f8bdbd-kova-260710-212909-c55867
Measurements:
- startup: listening 7535ms; health 7667ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 30; final failures 0; slowest startup-sample/provision 132ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 765.9 MB; tracked total 770.7 MB; max CPU 150%; samples 19; roles gateway 765.9MB/150%, gateway-tree 765.9MB/45.9%, command-tree 740.4MB/144.8%, plugin-cli 740.4MB/144.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 152.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 740.4 MB exceeded threshold 600 MB
  - status-cli peak RSS 735.2 MB exceeded threshold 500 MB
  - final gateway state was stopped

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-onboarded-9f99e904-kova-260710-212909-c55867
Measurements:
- startup: listening 8290ms; health 8434ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 33; final failures 0; slowest startup-sample/provision 144ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 778 MB; tracked total 782.9 MB; max CPU 50%; samples 18; roles gateway 778MB/50%, gateway-tree 778MB/43.9%, command-tree 662.5MB/140.8%, plugin-cli 662.5MB/124.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 204.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 662.5 MB exceeded threshold 600 MB
  - status-cli peak RSS 603.9 MB exceeded threshold 500 MB
  - final gateway state was stopped

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-onboarded-f9c24855-kova-260710-212909-c55867
Measurements:
- startup: listening 7537ms; health 7626ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 30; final failures 0; slowest startup-sample/provision 89ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 730.3 MB; tracked total 735.1 MB; max CPU 66.6%; samples 19; roles gateway 730.3MB/66.6%, gateway-tree 730.3MB/50%, command-tree 695.3MB/144.8%, plugin-cli 695.3MB/143.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 152.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 695.3 MB exceeded threshold 600 MB
  - status-cli peak RSS 540.1 MB exceeded threshold 500 MB
  - final gateway state was stopped

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-onboarded-fe872c26-kova-260710-212909-c55867
Measurements:
- startup: listening 6783ms; health 6802ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 2ms; post-ready p95 not-collected; failures 27; final failures 0; slowest startup-sample/provision 19ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 683.7 MB; tracked total 704.1 MB; max CPU 66.6%; samples 18; roles command-tree 704.1MB/142.8%, plugin-cli 704.1MB/142.8%, gateway 683.7MB/66.6%, gateway-tree 683.7MB/49.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 148.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 704.1 MB exceeded threshold 600 MB
  - status-cli peak RSS 575.7 MB exceeded threshold 500 MB
  - final gateway state was stopped

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-bundled-plugin-startup-809ede2b-kova-260710-212909-c55867
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway stopped; restarts 6
- health: startup p95 1ms; post-ready p95 not-collected; failures 508; final failures 0; slowest startup-sample/gateway-start 18ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 661.8 MB; tracked total 666.6 MB; max CPU 100%; samples 10; roles gateway 661.8MB/100%, gateway-tree 661.8MB/100%, command-tree 540.1MB/145.8%, plugin-cli 540.1MB/145.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 187.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was stopped
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-agent-cold-warm-message-8e2a29af-kova-260710-212909-c55867
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 682.2 MB; tracked total 688.1 MB; max CPU 141.9%; samples 13; roles command-tree 688.1MB/144.7%, status-cli 688.1MB/144.7%, agent-cli 682.2MB/141.9%, agent-process 682.2MB/141.9%
- agent: turn 3136ms; cold/warm 3017ms/3136ms; cold-warm delta 0ms; pre-provider 2932ms; provider 1ms; metadata scans 10 (192.04ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3130.05ms; max 3136ms; pre-provider p95 2930.15ms
- agent CLI attribution: cold known 92ms / unattributed 2803ms; warm known 99ms / unattributed 2833ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA_AGENT_OK
  - warm agent turn did not produce the expected assistant response
  - warm agent turn response did not exactly match expected text KOVA_AGENT_OK
- Agent turns:
  - cold: total 3017ms; pre-provider 2895ms; provider 3ms; post-provider 119ms; response false
    - active window: metadata scans 5 (91.72ms total, max 44.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2895ms; provider 3ms; post-provider 119ms; unknown 2895ms; source none
  - warm: total 3136ms; pre-provider 2932ms; provider 1ms; post-provider 203ms; response false
    - active window: metadata scans 5 (100.32ms total, max 53.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2932ms; provider 1ms; post-provider 203ms; unknown 2932ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2895 ms | 92 ms | 2803 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-agent-cold-warm-message-8e2a29af-kova-260710-212909-c55867/openclaw/timeline.jsonl |
  | warm | 2932 ms | 99 ms | 2833 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-agent-cold-warm-message-8e2a29af-kova-260710-212909-c55867/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 92 ms | 44 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 54 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-212909-c55867-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-212909-c55867-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-212909-c55867-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-fresh-r1-697fad55-kova-260710-212909-c55867
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-fresh-r2-da880701-kova-260710-212909-c55867
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-fresh-r3-82f8bdbd-kova-260710-212909-c55867
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-onboarded-9f99e904-kova-260710-212909-c55867
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-onboarded-f9c24855-kova-260710-212909-c55867
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-fresh-install-onboarded-fe872c26-kova-260710-212909-c55867
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260710-212909-c55867
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-bundled-runtime-deps-mi-39c08a4a-kova-260710-212909-c55867
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-212909-c55867/kova-bundled-runtime-deps-mi-150715ba-kova-260710-212909-c55867
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783718949252`
- Result: removed
- Duration: 391ms

