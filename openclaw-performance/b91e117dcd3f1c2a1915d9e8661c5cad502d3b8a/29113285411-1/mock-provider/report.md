# Kova OpenClaw Runtime Report

> **❌ [DO-NOT-SHIP] FAIL** — plugin-cli peak RSS 664.8 MB exceeded threshold 600 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO_NOT_SHIP |
| Reason | plugin-cli peak RSS 664.8 MB exceeded threshold 600 MB |
| Blocking findings | 63 |
| Warnings | 20 |
| Records | 18 (FAIL:14, PASS:4) |

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
| Run ID | `kova-260710-180607-794386` |
| Generated | 2026-07-10T18:21:26.998Z |
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
| FAIL | 14 |
| PASS | 4 |

## Release Gate

- Verdict: DO_NOT_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 14
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 14 blocking, 0 warning
  - primary: plugin-cli peak RSS 664.8 MB exceeded threshold 600 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: plugin-cli peak RSS 664.8 MB exceeded threshold 600 MB
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
- BLOCKING fresh-install/fresh: plugin-cli peak RSS 664.8 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: plugin-cli peak RSS 656.9 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: plugin-cli peak RSS 754.3 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: plugin-cli peak RSS 662.5 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: plugin-cli peak RSS 711.4 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: plugin-cli peak RSS 674.6 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: final gateway state was stopped
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
- BLOCKING gateway-performance/many-bundled-plugins: plugin-cli peak RSS 727.5 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: status-cli peak RSS 650 MB exceeded threshold 500 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: status-cli peak RSS 728.4 MB exceeded threshold 500 MB
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
| info | Kova | report | 86 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 7424ms | 749.4MB | n/a | 68.6% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 6465ms | 688.7MB | n/a | 100% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 6619ms | 625MB | n/a | 75% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:2, PASS:1 | 7440ms | 763.1MB | n/a | 100% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 142.9% | 3375ms | 3196ms | 3244ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 714.4MB | n/a | 67.2% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 8080ms | 740.4 MB | 1398.9 MB | n/a | n/a | plugin-cli peak RSS 664.8 MB exceeded threshold 600 MB |
| 2 | FAIL | fresh-install/fresh |  | 7201ms | 749.4 MB | 754.2 MB | n/a | n/a | plugin-cli peak RSS 656.9 MB exceeded threshold 600 MB |
| 3 | FAIL | fresh-install/fresh |  | 7424ms | 763.5 MB | 768.5 MB | n/a | n/a | plugin-cli peak RSS 754.3 MB exceeded threshold 600 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 8115ms | 688.7 MB | 717.7 MB | n/a | n/a | plugin-cli peak RSS 662.5 MB exceeded threshold 600 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 6465ms | 632.2 MB | 711.4 MB | n/a | n/a | plugin-cli peak RSS 711.4 MB exceeded threshold 600 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 6405ms | 749.3 MB | 754.1 MB | n/a | n/a | plugin-cli peak RSS 674.6 MB exceeded threshold 600 MB |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6788ms | 625 MB | 630 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6532ms | 622.5 MB | 627.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6619ms | 762.4 MB | 767.4 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | unknown | 622.5 MB | 701.9 MB | n/a | n/a | final gateway state was stopped |
| 2 | FAIL | bundled-plugin-startup/fresh |  | unknown | 763.1 MB | 767.9 MB | n/a | n/a | final gateway state was stopped |
| 3 | PASS | bundled-plugin-startup/fresh |  | 7440ms | 779.4 MB | 779.4 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 812.8 MB | 3220ms | 3130ms | agent message command finished without a usable assistant response |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 799.6 MB | 3375ms | 3515ms | agent message command finished without a usable assistant response |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 823.4 MB | 3882ms | 3196ms | agent message command finished without a usable assistant response |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 688.1 MB | 727.5 MB | n/a | n/a | plugin-cli peak RSS 727.5 MB exceeded threshold 650 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 714.4 MB | 719.2 MB | n/a | n/a | status-cli peak RSS 650 MB exceeded threshold 500 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 752.4 MB | 757.2 MB | n/a | n/a | status-cli peak RSS 728.4 MB exceeded threshold 500 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 823.4 MB; CPU 151.9%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 823.4 MB; CPU 148.5%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 823.4 MB; CPU 148.5%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 779.4 MB; CPU 141%; scenario bundled-plugin-startup/fresh
- gateway-tree: RSS 763.5 MB; CPU 131%; scenario fresh-install/fresh
- plugin-cli: RSS 754.3 MB; CPU 151.9%; scenario fresh-install/fresh
- status-cli: RSS 728.4 MB; CPU 149.4%; scenario gateway-performance/many-bundled-plugins
- model-cli: RSS 466.7 MB; CPU 149.7%; scenario fresh-install/onboarded-user

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-fresh-r1-697fad55-kova-260710-180607-794386
Measurements:
- startup: listening 7818ms; health 8080ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 8ms; post-ready p95 4ms; failures 34; final failures 0; slowest startup-sample/provision 262ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 740.4 MB; tracked total 1398.9 MB; max CPU 131%; samples 21; roles gateway 740.4MB/131%, gateway-tree 740.4MB/131%, command-tree 664.8MB/144.4%, plugin-cli 664.8MB/144.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 439.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 664.8 MB exceeded threshold 600 MB
  - status-cli peak RSS 597.5 MB exceeded threshold 500 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-fresh-r2-da880701-kova-260710-180607-794386
Measurements:
- startup: listening 7050ms; health 7201ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 2ms; post-ready p95 not-collected; failures 28; final failures 0; slowest startup-sample/provision 151ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 749.4 MB; tracked total 754.2 MB; max CPU 68.6%; samples 20; roles gateway 749.4MB/68.6%, gateway-tree 749.4MB/68.6%, command-tree 656.9MB/144.5%, plugin-cli 656.9MB/144.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 221.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 656.9 MB exceeded threshold 600 MB
  - status-cli peak RSS 646.3 MB exceeded threshold 500 MB
  - final gateway state was stopped

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-fresh-r3-82f8bdbd-kova-260710-180607-794386
Measurements:
- startup: listening 7296ms; health 7424ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 29; final failures 0; slowest startup-sample/provision 128ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 763.5 MB; tracked total 768.5 MB; max CPU 65.3%; samples 21; roles gateway 763.5MB/65.3%, gateway-tree 763.5MB/65.3%, command-tree 754.3MB/147.7%, plugin-cli 754.3MB/147.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 212.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 754.3 MB exceeded threshold 600 MB
  - status-cli peak RSS 648.4 MB exceeded threshold 500 MB
  - final gateway state was stopped

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-onboarded-9f99e904-kova-260710-180607-794386
Measurements:
- startup: listening 8057ms; health 8115ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 2ms; post-ready p95 not-collected; failures 32; final failures 0; slowest startup-sample/provision 58ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 688.7 MB; tracked total 717.7 MB; max CPU 114%; samples 19; roles command-tree 717.7MB/149.4%, status-cli 717.7MB/149.4%, gateway 688.7MB/114%, gateway-tree 688.7MB/53.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 194.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 662.5 MB exceeded threshold 600 MB
  - status-cli peak RSS 717.7 MB exceeded threshold 500 MB
  - final gateway state was stopped

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-onboarded-f9c24855-kova-260710-180607-794386
Measurements:
- startup: listening 6285ms; health 6465ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 25; final failures 0; slowest startup-sample/provision 180ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 632.2 MB; tracked total 711.4 MB; max CPU 80%; samples 19; roles command-tree 711.4MB/149.7%, plugin-cli 711.4MB/147.5%, status-cli 701.3MB/147.9%, gateway 632.2MB/80%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 190.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 711.4 MB exceeded threshold 600 MB
  - status-cli peak RSS 701.3 MB exceeded threshold 500 MB
  - final gateway state was stopped

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-onboarded-fe872c26-kova-260710-180607-794386
Measurements:
- startup: listening 6284ms; health 6405ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 25; final failures 0; slowest startup-sample/provision 121ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 749.3 MB; tracked total 754.1 MB; max CPU 100%; samples 19; roles gateway 749.3MB/100%, gateway-tree 749.3MB/61.9%, command-tree 680.6MB/145.8%, status-cli 680.6MB/141.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 192.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 674.6 MB exceeded threshold 600 MB
  - status-cli peak RSS 680.6 MB exceeded threshold 500 MB
  - final gateway state was stopped

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-bundled-plugin-startup-4a0cbdf7-kova-260710-180607-794386
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway stopped; restarts 6
- health: startup p95 1ms; post-ready p95 not-collected; failures 503; final failures 0; slowest startup-sample/gateway-start 140ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 622.5 MB; tracked total 701.9 MB; max CPU 100%; samples 11; roles command-tree 701.9MB/140.4%, plugin-cli 701.9MB/140.4%, gateway 622.5MB/100%, gateway-tree 622.5MB/65.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 200.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was stopped
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-bundled-plugin-startup-809ede2b-kova-260710-180607-794386
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway stopped; restarts 6
- health: startup p95 1ms; post-ready p95 not-collected; failures 508; final failures 0; slowest startup-sample/gateway-start 189ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 763.1 MB; tracked total 767.9 MB; max CPU 56.7%; samples 10; roles gateway 763.1MB/56.7%, gateway-tree 763.1MB/56.7%, command-tree 517.8MB/142.8%, plugin-cli 517.8MB/142.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 164.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was stopped
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-180607-794386-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-180607-794386-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-180607-794386-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-fresh-r1-697fad55-kova-260710-180607-794386
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-fresh-r2-da880701-kova-260710-180607-794386
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-fresh-r3-82f8bdbd-kova-260710-180607-794386
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-onboarded-9f99e904-kova-260710-180607-794386
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-onboarded-f9c24855-kova-260710-180607-794386
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-fresh-install-onboarded-fe872c26-kova-260710-180607-794386
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260710-180607-794386
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-bundled-runtime-deps-mi-39c08a4a-kova-260710-180607-794386
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-180607-794386/kova-bundled-runtime-deps-mi-150715ba-kova-260710-180607-794386
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783706767659`
- Result: removed
- Duration: 530ms

