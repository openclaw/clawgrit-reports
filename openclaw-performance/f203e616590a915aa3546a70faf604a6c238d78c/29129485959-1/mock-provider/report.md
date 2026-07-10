# Kova OpenClaw Runtime Report

> **❌ [DO-NOT-SHIP] FAIL** — final gateway state was stopped

## Verdict

| Field | Value |
|---|---|
| Verdict | DO_NOT_SHIP |
| Reason | final gateway state was stopped |
| Blocking findings | 17 |
| Warnings | 20 |
| Records | 18 (PASS:11, FAIL:7) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 211 total, 0 missing, 0 failed
- Categories: command: 139, artifact: 18, cleanup: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260710-230650-c5e783` |
| Generated | 2026-07-10T23:17:12.395Z |
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
| PASS | 11 |
| FAIL | 7 |

## Release Gate

- Verdict: DO_NOT_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 7
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 7 blocking, 0 warning
  - primary: final gateway state was stopped
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: final gateway state was stopped
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
- BLOCKING fresh-install/fresh: final gateway state was stopped
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/fresh: final gateway state was stopped
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: final gateway state was stopped
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: final gateway state was stopped
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: final gateway state was stopped
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: final gateway state was stopped
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: final gateway state was stopped
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
| fresh-install/fresh | 3 | PASS:1, FAIL:2 | 7183ms | 739.9MB | n/a | 100% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:2, PASS:1 | 7152ms | 776.5MB | n/a | 100% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 8285ms | 689.5MB | n/a | 100% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 9133.5ms | 721.1MB | n/a | 133% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 146.7% | 3385ms | 3133ms | 3252ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:2, PASS:1 | 9542ms | 760.2MB | n/a | 51.8% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 8558ms | 739.9 MB | 1417.7 MB | n/a | n/a |  |
| 2 | FAIL | fresh-install/fresh |  | 7183ms | 731.4 MB | 736.5 MB | n/a | n/a | final gateway state was stopped |
| 3 | FAIL | fresh-install/fresh |  | 6676ms | 782.7 MB | 787.5 MB | n/a | n/a | final gateway state was stopped |
| 1 | FAIL | fresh-install/onboarded-user |  | 6731ms | 790.2 MB | 795.3 MB | n/a | n/a | final gateway state was stopped |
| 2 | FAIL | fresh-install/onboarded-user |  | 7152ms | 776.5 MB | 781.3 MB | n/a | n/a | final gateway state was stopped |
| 3 | PASS | fresh-install/onboarded-user |  | 8754ms | 727.3 MB | 1432.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7184ms | 619.7 MB | 624.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 8285ms | 690.9 MB | 696 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 9368ms | 689.5 MB | 694.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 9612ms | 721.1 MB | 1344.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 8655ms | 754.3 MB | 1242.7 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | unknown | 628.7 MB | 633.5 MB | n/a | n/a | final gateway state was stopped |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 780.2 MB | 3680ms | 3474ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 819.5 MB | 3385ms | 3133ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 724.5 MB | 3189ms | 3132ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 766 MB | 770.8 MB | n/a | n/a | final gateway state was stopped |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 9542ms | 760.2 MB | 1280.2 MB | n/a | n/a |  |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 636.3 MB | 641.1 MB | n/a | n/a | final gateway state was stopped |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 819.5 MB; CPU 151.9%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 819.5 MB; CPU 146.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 819.5 MB; CPU 146.7%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 790.2 MB; CPU 137%; scenario fresh-install/onboarded-user
- gateway-tree: RSS 790.2 MB; CPU 137%; scenario fresh-install/onboarded-user
- plugin-cli: RSS 711.1 MB; CPU 151.9%; scenario fresh-install/onboarded-user
- status-cli: RSS 643.5 MB; CPU 145.1%; scenario gateway-performance/many-bundled-plugins
- model-cli: RSS 529.1 MB; CPU 146.8%; scenario fresh-install/onboarded-user

## Selected Sample Details

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-fresh-r2-da880701-kova-260710-230650-c5e783
Measurements:
- startup: listening 7025ms; health 7183ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 28; final failures 0; slowest startup-sample/provision 158ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 731.4 MB; tracked total 736.5 MB; max CPU 100%; samples 17; roles gateway 731.4MB/100%, gateway-tree 731.4MB/43.4%, command-tree 705.8MB/139.8%, plugin-cli 705.8MB/139.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 143.62ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was stopped

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-fresh-r3-82f8bdbd-kova-260710-230650-c5e783
Measurements:
- startup: listening 6522ms; health 6676ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 26; final failures 0; slowest startup-sample/provision 154ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 782.7 MB; tracked total 787.5 MB; max CPU 53.5%; samples 17; roles gateway 782.7MB/53.5%, gateway-tree 782.7MB/53.5%, command-tree 676.5MB/143.9%, plugin-cli 676.5MB/139.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 171.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was stopped

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-onboarded-9f99e904-kova-260710-230650-c5e783
Measurements:
- startup: listening 6524ms; health 6731ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 1ms; post-ready p95 not-collected; failures 26; final failures 0; slowest startup-sample/provision 207ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 790.2 MB; tracked total 795.3 MB; max CPU 52.7%; samples 17; roles gateway 790.2MB/52.7%, gateway-tree 790.2MB/52.7%, command-tree 691.8MB/140.8%, plugin-cli 691.8MB/136.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 192.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was stopped

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-onboarded-f9c24855-kova-260710-230650-c5e783
Measurements:
- startup: listening 7032ms; health 7152ms; readiness ready (gateway became healthy within the readiness threshold); gateway stopped; restarts 5
- health: startup p95 2ms; post-ready p95 not-collected; failures 28; final failures 0; slowest startup-sample/provision 120ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 776.5 MB; tracked total 781.3 MB; max CPU 100%; samples 17; roles gateway 776.5MB/100%, gateway-tree 776.5MB/100%, command-tree 706.6MB/146.8%, plugin-cli 706.6MB/142.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 172.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was stopped

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-bundled-plugin-startup-5377119f-kova-260710-230650-c5e783
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway stopped; restarts 6
- health: startup p95 2ms; post-ready p95 not-collected; failures 505; final failures 0; slowest startup-sample/gateway-start 222ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 628.7 MB; tracked total 633.5 MB; max CPU 66.6%; samples 11; roles gateway 628.7MB/66.6%, gateway-tree 628.7MB/54.7%, command-tree 518.6MB/143.7%, plugin-cli 518.6MB/143.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 209.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was stopped
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-agent-cold-warm-message-8e2a29af-kova-260710-230650-c5e783
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 780.2 MB; tracked total 780.2 MB; max CPU 142.9%; samples 14; roles agent-cli 780.2MB/142.9%, agent-process 780.2MB/142.9%, command-tree 780.2MB/144.9%, status-cli 617.6MB/144.9%
- agent: turn 3680ms; cold/warm 3680ms/3474ms; cold-warm delta 206ms; pre-provider 3516ms; provider 4ms; metadata scans 10 (212.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3669.7ms; max 3680ms; pre-provider p95 3507.7ms
- agent CLI attribution: cold known 111ms / unattributed 3405ms; warm known 101ms / unattributed 3249ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 57.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3680ms; pre-provider 3516ms; provider 4ms; post-provider 160ms; response true
    - active window: metadata scans 5 (111.01ms total, max 56.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3516ms; provider 4ms; post-provider 160ms; unknown 3516ms; source none
  - warm: total 3474ms; pre-provider 3350ms; provider 2ms; post-provider 122ms; response true
    - active window: metadata scans 5 (101.23ms total, max 57.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3350ms; provider 2ms; post-provider 122ms; unknown 3350ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3516 ms | 111 ms | 3405 ms | 4 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-agent-cold-warm-message-8e2a29af-kova-260710-230650-c5e783/openclaw/timeline.jsonl |
  | warm | 3350 ms | 101 ms | 3249 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-agent-cold-warm-message-8e2a29af-kova-260710-230650-c5e783/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 111 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 101 ms | 57 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-agent-cold-warm-message-2ab680e0-kova-260710-230650-c5e783
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 819.5 MB; tracked total 819.5 MB; max CPU 146.7%; samples 13; roles agent-cli 819.5MB/146.7%, agent-process 819.5MB/146.7%, command-tree 819.5MB/146.7%, status-cli 483.2MB/144.7%
- agent: turn 3385ms; cold/warm 3385ms/3133ms; cold-warm delta 252ms; pre-provider 3252ms; provider 4ms; metadata scans 10 (202.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3372.4ms; max 3385ms; pre-provider p95 3239.6ms
- agent CLI attribution: cold known 104ms / unattributed 3148ms; warm known 99ms / unattributed 2905ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 57.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3385ms; pre-provider 3252ms; provider 4ms; post-provider 129ms; response true
    - active window: metadata scans 5 (103.93ms total, max 57.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3252ms; provider 4ms; post-provider 129ms; unknown 3252ms; source none
  - warm: total 3133ms; pre-provider 3004ms; provider 1ms; post-provider 128ms; response true
    - active window: metadata scans 5 (98.6ms total, max 53.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3004ms; provider 1ms; post-provider 128ms; unknown 3004ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3252 ms | 104 ms | 3148 ms | 4 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-agent-cold-warm-message-2ab680e0-kova-260710-230650-c5e783/openclaw/timeline.jsonl |
  | warm | 3004 ms | 99 ms | 2905 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-agent-cold-warm-message-2ab680e0-kova-260710-230650-c5e783/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 104 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 53 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-agent-cold-warm-message-67b331a3-kova-260710-230650-c5e783
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 724.5 MB; tracked total 724.5 MB; max CPU 146.7%; samples 13; roles agent-cli 724.5MB/146.7%, agent-process 724.5MB/146.7%, command-tree 724.5MB/146.7%, status-cli 526.6MB/136.8%
- agent: turn 3189ms; cold/warm 3189ms/3132ms; cold-warm delta 57ms; pre-provider 3046ms; provider 3ms; metadata scans 10 (196.8ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3186.15ms; max 3189ms; pre-provider p95 3043.3ms
- agent CLI attribution: cold known 97ms / unattributed 2949ms; warm known 99ms / unattributed 2893ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 56.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3189ms; pre-provider 3046ms; provider 3ms; post-provider 140ms; response true
    - active window: metadata scans 5 (98.24ms total, max 53.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3046ms; provider 3ms; post-provider 140ms; unknown 3046ms; source none
  - warm: total 3132ms; pre-provider 2992ms; provider 2ms; post-provider 138ms; response true
    - active window: metadata scans 5 (98.56ms total, max 56.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2992ms; provider 2ms; post-provider 138ms; unknown 2992ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3046 ms | 97 ms | 2949 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-agent-cold-warm-message-67b331a3-kova-260710-230650-c5e783/openclaw/timeline.jsonl |
  | warm | 2992 ms | 99 ms | 2893 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-agent-cold-warm-message-67b331a3-kova-260710-230650-c5e783/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 97 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 56 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-230650-c5e783-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-230650-c5e783-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260710-230650-c5e783-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-fresh-r1-697fad55-kova-260710-230650-c5e783
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-fresh-r2-da880701-kova-260710-230650-c5e783
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-fresh-r3-82f8bdbd-kova-260710-230650-c5e783
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-onboarded-9f99e904-kova-260710-230650-c5e783
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-onboarded-f9c24855-kova-260710-230650-c5e783
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-fresh-install-onboarded-fe872c26-kova-260710-230650-c5e783
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260710-230650-c5e783
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-bundled-runtime-deps-mi-39c08a4a-kova-260710-230650-c5e783
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260710-230650-c5e783/kova-bundled-runtime-deps-mi-150715ba-kova-260710-230650-c5e783
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783724810569`
- Result: removed
- Duration: 389ms

