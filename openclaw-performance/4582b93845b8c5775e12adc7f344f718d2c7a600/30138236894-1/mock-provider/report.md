# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 978 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 978 MB exceeded threshold 950 MB |
| Blocking findings | 6 |
| Warnings | 20 |
| Records | 18 (PASS:15, FAIL:3) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260725-011945-1ad5ba` |
| Generated | 2026-07-25T01:27:13.167Z |
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
| PASS | 15 |
| FAIL | 3 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 3
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 3 blocking, 0 warning
  - primary: gateway peak RSS 978 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 978 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 978 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 961 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 968.7 MB exceeded threshold 950 MB
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
| info | Kova | report | 20 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5028ms | 969.6MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5019ms | 982.6MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4980ms | 948.9MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5043ms | 968.7MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.9% | 4548ms | 4476ms | 4136ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5013ms | 967MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5647ms | 947.9 MB | 1616.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5028ms | 969.6 MB | 1678.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 4989ms | 982 MB | 1706.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5135ms | 982.6 MB | 1700.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4984ms | 960.1 MB | 1624.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5019ms | 984.7 MB | 1699.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4980ms | 948.9 MB | 954 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4924ms | 943.7 MB | 949.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5087ms | 960.9 MB | 966.2 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5048ms | 978 MB | 1454.9 MB | n/a | n/a | gateway peak RSS 978 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5043ms | 961 MB | 1439.5 MB | n/a | n/a | gateway peak RSS 961 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5035ms | 968.7 MB | 1448.8 MB | n/a | n/a | gateway peak RSS 968.7 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 990.5 MB | 4606ms | 4473ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 990 MB | 4548ms | 4476ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 982.9 MB | 4511ms | 4486ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5027ms | 967 MB | 1692.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4935ms | 976.7 MB | 1682.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5013ms | 959.1 MB | 1682.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 990.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 990.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 990.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 984.7 MB (scenario fresh-install/onboarded-user); CPU 154% (scenario fresh-install/fresh)
- status-cli: RSS 786.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 984.7 MB (scenario fresh-install/onboarded-user); CPU 154% (scenario fresh-install/fresh)
- model-cli: RSS 548 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 481.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-bundled-plugin-startup-4a0cbdf7-kova-260725-011945-1ad5ba
Measurements:
- startup: listening 4516ms; health 5048ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 503ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/gateway-start 532ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 978 MB; tracked total 1454.9 MB; max CPU 153%; samples 14; roles gateway 978MB/153%, gateway-tree 978MB/153%, command-tree 477.2MB/146%, plugin-cli 477.2MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 718.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 978 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-bundled-plugin-startup-809ede2b-kova-260725-011945-1ad5ba
Measurements:
- startup: listening 4520ms; health 5043ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 523ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/restart 583ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 961 MB; tracked total 1439.5 MB; max CPU 154%; samples 14; roles gateway 961MB/154%, gateway-tree 961MB/154%, command-tree 478.7MB/148%, plugin-cli 478.7MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 745.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 961 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-bundled-plugin-startup-5377119f-kova-260725-011945-1ad5ba
Measurements:
- startup: listening 4518ms; health 5035ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 517ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/restart 559ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 968.7 MB; tracked total 1448.8 MB; max CPU 154%; samples 14; roles gateway 968.7MB/154%, gateway-tree 968.7MB/154%, command-tree 480.1MB/146%, plugin-cli 480.1MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 732.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 968.7 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-agent-cold-warm-message-8e2a29af-kova-260725-011945-1ad5ba
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 990.5 MB; tracked total 990.5 MB; max CPU 155.9%; samples 16; roles agent-cli 990.5MB/155.9%, agent-process 990.5MB/155.9%, command-tree 990.5MB/155.9%, status-cli 662.6MB/153.8%
- agent: turn 4606ms; cold/warm 4606ms/4473ms; cold-warm delta 133ms; pre-provider 4198ms; provider 2ms; metadata scans 14 (251.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4599.35ms; max 4606ms; pre-provider p95 4193.95ms
- agent CLI attribution: cold known 128ms / unattributed 4070ms; warm known 125ms / unattributed 3992ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4606ms; pre-provider 4198ms; provider 2ms; post-provider 406ms; response true
    - active window: metadata scans 7 (127.1ms total, max 60.83ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4198ms; provider 2ms; post-provider 406ms; unknown 3753.32ms; source plugins.metadata.scan 444.68ms
  - warm: total 4473ms; pre-provider 4117ms; provider 1ms; post-provider 355ms; response true
    - active window: metadata scans 7 (124.77ms total, max 61.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4117ms; provider 1ms; post-provider 355ms; unknown 3672.32ms; source plugins.metadata.scan 444.68ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4198 ms | 128 ms | 4070 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-agent-cold-warm-message-8e2a29af-kova-260725-011945-1ad5ba/openclaw/timeline.jsonl |
  | warm | 4117 ms | 125 ms | 3992 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-agent-cold-warm-message-8e2a29af-kova-260725-011945-1ad5ba/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-agent-cold-warm-message-2ab680e0-kova-260725-011945-1ad5ba
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 990 MB; tracked total 990 MB; max CPU 154.9%; samples 16; roles agent-cli 990MB/154.9%, agent-process 990MB/154.9%, command-tree 990MB/154.9%, status-cli 786.5MB/154.7%
- agent: turn 4548ms; cold/warm 4548ms/4476ms; cold-warm delta 72ms; pre-provider 4136ms; provider 3ms; metadata scans 14 (248.67ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4544.4ms; max 4548ms; pre-provider p95 4135ms
- agent CLI attribution: cold known 121ms / unattributed 4015ms; warm known 130ms / unattributed 3986ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4548ms; pre-provider 4136ms; provider 3ms; post-provider 409ms; response true
    - active window: metadata scans 7 (119.82ms total, max 57.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4136ms; provider 3ms; post-provider 409ms; unknown 3697.72ms; source plugins.metadata.scan 438.28ms
  - warm: total 4476ms; pre-provider 4116ms; provider 1ms; post-provider 359ms; response true
    - active window: metadata scans 7 (128.85ms total, max 62.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4116ms; provider 1ms; post-provider 359ms; unknown 3677.72ms; source plugins.metadata.scan 438.28ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4136 ms | 121 ms | 4015 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-agent-cold-warm-message-2ab680e0-kova-260725-011945-1ad5ba/openclaw/timeline.jsonl |
  | warm | 4116 ms | 130 ms | 3986 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-agent-cold-warm-message-2ab680e0-kova-260725-011945-1ad5ba/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-agent-cold-warm-message-67b331a3-kova-260725-011945-1ad5ba
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 982.9 MB; tracked total 982.9 MB; max CPU 153.7%; samples 16; roles agent-cli 982.9MB/153.7%, command-tree 982.9MB/154.7%, agent-process 982.9MB/153.7%, status-cli 781.6MB/154.7%
- agent: turn 4511ms; cold/warm 4511ms/4486ms; cold-warm delta 25ms; pre-provider 4115ms; provider 3ms; metadata scans 14 (244.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4509.75ms; max 4511ms; pre-provider p95 4125.45ms
- agent CLI attribution: cold known 118ms / unattributed 3997ms; warm known 127ms / unattributed 3999ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 59.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4511ms; pre-provider 4115ms; provider 3ms; post-provider 393ms; response true
    - active window: metadata scans 7 (116.76ms total, max 54.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4115ms; provider 3ms; post-provider 393ms; unknown 3673.33ms; source plugins.metadata.scan 441.67ms
  - warm: total 4486ms; pre-provider 4126ms; provider 1ms; post-provider 359ms; response true
    - active window: metadata scans 7 (127.68ms total, max 59.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4126ms; provider 1ms; post-provider 359ms; unknown 3684.33ms; source plugins.metadata.scan 441.67ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4115 ms | 118 ms | 3997 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-agent-cold-warm-message-67b331a3-kova-260725-011945-1ad5ba/openclaw/timeline.jsonl |
  | warm | 4126 ms | 127 ms | 3999 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-agent-cold-warm-message-67b331a3-kova-260725-011945-1ad5ba/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 118 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-011945-1ad5ba-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-011945-1ad5ba-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-011945-1ad5ba-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-fresh-install-fresh-r1-697fad55-kova-260725-011945-1ad5ba
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-fresh-install-fresh-r2-da880701-kova-260725-011945-1ad5ba
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-011945-1ad5ba
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-fresh-install-onboarded-9f99e904-kova-260725-011945-1ad5ba
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-fresh-install-onboarded-f9c24855-kova-260725-011945-1ad5ba
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-fresh-install-onboarded-fe872c26-kova-260725-011945-1ad5ba
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-011945-1ad5ba
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-011945-1ad5ba
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-011945-1ad5ba/kova-bundled-runtime-deps-mi-150715ba-kova-260725-011945-1ad5ba
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzolysn-421-aa6a4fbe`
- Result: removed
- Duration: 410ms

