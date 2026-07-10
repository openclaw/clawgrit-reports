# Kova OpenClaw Runtime Report

> **❌ [DO-NOT-SHIP] FAIL** — plugin-cli peak RSS 685.8 MB exceeded threshold 600 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO_NOT_SHIP |
| Reason | plugin-cli peak RSS 685.8 MB exceeded threshold 600 MB |
| Blocking findings | 59 |
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
| Run ID | `kova-260710-211225-551240` |
| Generated | 2026-07-10T21:24:18.162Z |
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
  - primary: plugin-cli peak RSS 685.8 MB exceeded threshold 600 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: plugin-cli peak RSS 685.8 MB exceeded threshold 600 MB
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
- BLOCKING fresh-install/fresh: plugin-cli peak RSS 685.8 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: plugin-cli peak RSS 789.5 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: plugin-cli peak RSS 700.8 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: plugin-cli peak RSS 684.3 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: plugin-cli peak RSS 708.2 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: plugin-cli peak RSS 662.6 MB exceeded threshold 600 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-runtime-deps/missing-plugin-index: final gateway state was restarting
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
- BLOCKING gateway-performance/many-bundled-plugins: status-cli peak RSS 556.2 MB exceeded threshold 500 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: status-cli peak RSS 663.4 MB exceeded threshold 500 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: status-cli peak RSS 543.6 MB exceeded threshold 500 MB
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
| info | Kova | report | 82 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 9333ms | 745.6MB | n/a | 126% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 7818ms | 765.4MB | n/a | 56.4% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:1, PASS:2 | 7429ms | 771.5MB | n/a | 100% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 8704.5ms | 664.9MB | n/a | 100% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 141.8% | 2921ms | 2876ms | 2787ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 711.3MB | n/a | 44.3% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 10404ms | 745.6 MB | 1425.8 MB | n/a | n/a | plugin-cli peak RSS 685.8 MB exceeded threshold 600 MB |
| 2 | FAIL | fresh-install/fresh |  | 7259ms | 766.2 MB | 789.5 MB | n/a | n/a | plugin-cli peak RSS 789.5 MB exceeded threshold 600 MB |
| 3 | FAIL | fresh-install/fresh |  | 9333ms | 699.4 MB | 1394 MB | n/a | n/a | plugin-cli peak RSS 700.8 MB exceeded threshold 600 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 8644ms | 738.5 MB | 1418.7 MB | n/a | n/a | plugin-cli peak RSS 684.3 MB exceeded threshold 600 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 7818ms | 765.4 MB | 770.2 MB | n/a | n/a | plugin-cli peak RSS 708.2 MB exceeded threshold 600 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 7202ms | 766.5 MB | 771.4 MB | n/a | n/a | plugin-cli peak RSS 662.6 MB exceeded threshold 600 MB |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 8532ms | 704.7 MB | 709.7 MB | n/a | n/a | final gateway state was restarting |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7429ms | 771.5 MB | 776.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7179ms | 773.5 MB | 778.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 8120ms | 664.9 MB | 1206.1 MB | n/a | n/a |  |
| 2 | FAIL | bundled-plugin-startup/fresh |  | unknown | 647.7 MB | 652.5 MB | n/a | n/a | final gateway state was stopped |
| 3 | PASS | bundled-plugin-startup/fresh |  | 9289ms | 767.1 MB | 914.3 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 690.2 MB | 2921ms | 2876ms | agent message command finished without a usable assistant response |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 696.6 MB | 2909ms | 2951ms | agent message command finished without a usable assistant response |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 704.6 MB | 2957ms | 2855ms | agent message command finished without a usable assistant response |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 711.3 MB | 716.1 MB | n/a | n/a | status-cli peak RSS 556.2 MB exceeded threshold 500 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 640.9 MB | 663.4 MB | n/a | n/a | status-cli peak RSS 663.4 MB exceeded threshold 500 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 775.8 MB | 780.6 MB | n/a | n/a | status-cli peak RSS 543.6 MB exceeded threshold 500 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 789.5 MB; CPU 147.7%; scenario fresh-install/fresh
- plugin-cli: RSS 789.5 MB; CPU 144.8%; scenario fresh-install/fresh
- gateway: RSS 775.8 MB; CPU 136%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 775.8 MB; CPU 136%; scenario gateway-performance/many-bundled-plugins
- status-cli: RSS 744.7 MB; CPU 145.8%; scenario fresh-install/onboarded-user
- agent-cli: RSS 704.6 MB; CPU 144.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 704.6 MB; CPU 144.8%; scenario agent-cold-warm-message/mock-openai-provider
- model-cli: RSS 522.3 MB; CPU 147.7%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-fresh-r1-697fad55-kova-260710-211225-551240
Measurements:
- startup: listening 10335ms; health 10404ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 3ms; post-ready p95 4ms; failures 44; final failures 0; slowest startup-sample/provision 69ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 745.6 MB; tracked total 1425.8 MB; max CPU 136%; samples 20; roles gateway 745.6MB/136%, gateway-tree 745.6MB/136%, command-tree 711.4MB/142.4%, status-cli 711.4MB/142.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 338.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 685.8 MB exceeded threshold 600 MB
  - status-cli peak RSS 711.4 MB exceeded threshold 500 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-fresh-r2-da880701-kova-260710-211225-551240
Measurements:
- startup: listening 7045ms; health 7259ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 2ms; post-ready p95 not-collected; failures 28; final failures 0; slowest startup-sample/provision 214ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 766.2 MB; tracked total 789.5 MB; max CPU 56.5%; samples 21; roles command-tree 789.5MB/147.7%, plugin-cli 789.5MB/142.8%, gateway 766.2MB/56.5%, gateway-tree 766.2MB/56.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 189.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 789.5 MB exceeded threshold 600 MB
  - status-cli peak RSS 738 MB exceeded threshold 500 MB
  - final gateway state was stopped

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-fresh-r3-82f8bdbd-kova-260710-211225-551240
Measurements:
- startup: listening 9307ms; health 9333ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 2ms; post-ready p95 5ms; failures 40; final failures 0; slowest startup-sample/provision 26ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 699.4 MB; tracked total 1394 MB; max CPU 126%; samples 20; roles command-tree 700.8MB/136.8%, plugin-cli 700.8MB/136.8%, gateway 699.4MB/126%, gateway-tree 699.4MB/125%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 379.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 700.8 MB exceeded threshold 600 MB
  - status-cli peak RSS 633.7 MB exceeded threshold 500 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-onboarded-9f99e904-kova-260710-211225-551240
Measurements:
- startup: listening 8552ms; health 8644ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 2ms; post-ready p95 4ms; failures 37; final failures 0; slowest startup-sample/provision 92ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 738.5 MB; tracked total 1418.7 MB; max CPU 134%; samples 21; roles gateway 738.5MB/134%, gateway-tree 738.5MB/134%, command-tree 684.3MB/143.7%, plugin-cli 684.3MB/140.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 318.75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 684.3 MB exceeded threshold 600 MB
  - status-cli peak RSS 658.5 MB exceeded threshold 500 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-onboarded-f9c24855-kova-260710-211225-551240
Measurements:
- startup: listening 7794ms; health 7818ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 2ms; post-ready p95 not-collected; failures 31; final failures 0; slowest startup-sample/provision 24ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 765.4 MB; tracked total 770.2 MB; max CPU 49.6%; samples 19; roles gateway 765.4MB/49.6%, gateway-tree 765.4MB/49.6%, command-tree 710.3MB/144.8%, status-cli 710.3MB/144.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 192.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 708.2 MB exceeded threshold 600 MB
  - status-cli peak RSS 710.3 MB exceeded threshold 500 MB
  - final gateway state was stopped

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-onboarded-fe872c26-kova-260710-211225-551240
Measurements:
- startup: listening 7039ms; health 7202ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 28; final failures 0; slowest startup-sample/provision 163ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 766.5 MB; tracked total 771.4 MB; max CPU 56.4%; samples 19; roles gateway 766.5MB/56.4%, gateway-tree 766.5MB/56.4%, command-tree 744.7MB/144.8%, status-cli 744.7MB/140.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 193.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 662.6 MB exceeded threshold 600 MB
  - status-cli peak RSS 744.7 MB exceeded threshold 500 MB
  - final gateway state was stopped

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260710-211225-551240
Measurements:
- startup: listening 8298ms; health 8532ms; readiness ready (gateway became healthy within the readiness threshold); gateway restarting; restarts 6
- health: startup p95 2ms; post-ready p95 not-collected; failures 33; final failures 0; slowest startup-sample/cold-start 234ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 704.7 MB; tracked total 709.7 MB; max CPU 100%; samples 4; roles gateway 704.7MB/100%, gateway-tree 704.7MB/66.6%, command-tree 5MB/0%, uncategorized 5MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 264.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was restarting

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-bundled-plugin-startup-809ede2b-kova-260710-211225-551240
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway stopped; restarts 6
- health: startup p95 1ms; post-ready p95 not-collected; failures 510; final failures 0; slowest startup-sample/gateway-start 122ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 647.7 MB; tracked total 652.5 MB; max CPU 100%; samples 10; roles gateway 647.7MB/100%, gateway-tree 647.7MB/41.9%, command-tree 513.5MB/140.8%, plugin-cli 513.5MB/140.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 148.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was stopped
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-211225-551240-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-211225-551240-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-211225-551240-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-fresh-r1-697fad55-kova-260710-211225-551240
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-fresh-r2-da880701-kova-260710-211225-551240
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-fresh-r3-82f8bdbd-kova-260710-211225-551240
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-onboarded-9f99e904-kova-260710-211225-551240
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-onboarded-f9c24855-kova-260710-211225-551240
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-fresh-install-onboarded-fe872c26-kova-260710-211225-551240
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260710-211225-551240
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-bundled-runtime-deps-mi-39c08a4a-kova-260710-211225-551240
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-211225-551240/kova-bundled-runtime-deps-mi-150715ba-kova-260710-211225-551240
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783717944951`
- Result: removed
- Duration: 459ms

