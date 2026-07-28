# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1004.2 MB exceeded threshold 1000 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1004.2 MB exceeded threshold 1000 MB |
| Blocking findings | 6 |
| Warnings | 20 |
| Records | 18 (PASS:16, FAIL:2) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260728-084516-7861c3` |
| Generated | 2026-07-28T08:53:12.007Z |
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
| PASS | 16 |
| FAIL | 2 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 2
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 2 blocking, 0 warning
  - primary: gateway peak RSS 1004.2 MB exceeded threshold 1000 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1004.2 MB exceeded threshold 1000 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1004.2 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1045.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1045.5 MB, agent-process 1045.5 MB, command-tree 1045.5 MB
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
| fresh-install/fresh | 3 | PASS:3 | 5532ms | 967.7MB | n/a | 155% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5234ms | 971.4MB | n/a | 156% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5140ms | 1020.2MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 5179ms | 993.9MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:2, FAIL:1 | n/a | 0MB | n/a | 168.5% | 3913ms | 3879ms | 3765ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5261ms | 986.9MB | n/a | 156% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5752ms | 967.7 MB | 1756.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5532ms | 942.3 MB | 1671.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5208ms | 971.5 MB | 1723.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5223ms | 988 MB | 1775.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5234ms | 971.4 MB | 1762.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5241ms | 950.6 MB | 1706.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5032ms | 1026.6 MB | 1026.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5205ms | 1011.9 MB | 1011.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5140ms | 1020.2 MB | 1020.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5217ms | 993.6 MB | 1414.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5179ms | 993.9 MB | 1390.2 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5148ms | 1004.2 MB | 1697.9 MB | n/a | n/a | gateway peak RSS 1004.2 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 986.4 MB | 3913ms | 3879ms |  |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1045.5 MB | 3849ms | 3830ms | agent-cli peak RSS 1045.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1045.5 MB, agent-process 1045.5 MB, command-tree 1045.5 MB |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 990.6 MB | 3962ms | 4013ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5367ms | 972.2 MB | 1667.8 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5245ms | 986.9 MB | 1768.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5261ms | 1005.5 MB | 1760 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1045.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1045.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1045.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1026.6 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 962.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 988 MB (scenario fresh-install/onboarded-user); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 756.2 MB (scenario fresh-install/onboarded-user); CPU 150% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 578.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-bundled-plugin-startup-5377119f-kova-260728-084516-7861c3
Measurements:
- startup: listening 4770ms; health 5148ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 378ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/restart 511ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1004.2 MB; tracked total 1697.9 MB; max CPU 158%; samples 15; roles gateway 1004.2MB/158%, gateway-tree 950.8MB/158%, command-tree 747.4MB/147%, plugin-cli 747.4MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 678.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1004.2 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-agent-cold-warm-message-8e2a29af-kova-260728-084516-7861c3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 986.4 MB; tracked total 986.4 MB; max CPU 168.5%; samples 14; roles agent-cli 986.4MB/168.5%, command-tree 986.4MB/169.5%, agent-process 986.4MB/168.5%, status-cli 961.5MB/169.5%
- agent: turn 3913ms; cold/warm 3913ms/3879ms; cold-warm delta 34ms; pre-provider 3765ms; provider 3ms; metadata scans 14 (165.28ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3911.3ms; max 3913ms; pre-provider p95 3763.95ms
- agent CLI attribution: cold known 80ms / unattributed 3685ms; warm known 85ms / unattributed 3659ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 50.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3913ms; pre-provider 3765ms; provider 3ms; post-provider 145ms; response true
    - active window: metadata scans 7 (81.57ms total, max 42.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3765ms; provider 3ms; post-provider 145ms; unknown 3482.58ms; source plugins.metadata.scan 282.42ms
  - warm: total 3879ms; pre-provider 3744ms; provider 1ms; post-provider 134ms; response true
    - active window: metadata scans 7 (83.71ms total, max 45.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3744ms; provider 1ms; post-provider 134ms; unknown 3461.58ms; source plugins.metadata.scan 282.42ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3765 ms | 80 ms | 3685 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-agent-cold-warm-message-8e2a29af-kova-260728-084516-7861c3/openclaw/timeline.jsonl |
  | warm | 3744 ms | 85 ms | 3659 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-agent-cold-warm-message-8e2a29af-kova-260728-084516-7861c3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 80 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 85 ms | 46 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-agent-cold-warm-message-2ab680e0-kova-260728-084516-7861c3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1045.5 MB; tracked total 1045.5 MB; max CPU 167.2%; samples 14; roles agent-cli 1045.5MB/167.2%, command-tree 1045.5MB/170.5%, agent-process 1045.5MB/167.2%, status-cli 962.2MB/170.5%
- agent: turn 3849ms; cold/warm 3849ms/3830ms; cold-warm delta 19ms; pre-provider 3706ms; provider 2ms; metadata scans 14 (180.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3848.05ms; max 3849ms; pre-provider p95 3705.8ms
- agent CLI attribution: cold known 83ms / unattributed 3623ms; warm known 97ms / unattributed 3605ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1045.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1045.5 MB, agent-process 1045.5 MB, command-tree 1045.5 MB
  - agent-cli peak RSS 1045.5 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1045.5 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3849ms; pre-provider 3706ms; provider 2ms; post-provider 141ms; response true
    - active window: metadata scans 7 (83.46ms total, max 42.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3706ms; provider 2ms; post-provider 141ms; unknown 3409.78ms; source plugins.metadata.scan 296.22ms
  - warm: total 3830ms; pre-provider 3702ms; provider 1ms; post-provider 127ms; response true
    - active window: metadata scans 7 (96.98ms total, max 46.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3702ms; provider 1ms; post-provider 127ms; unknown 3405.78ms; source plugins.metadata.scan 296.22ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3706 ms | 83 ms | 3623 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-agent-cold-warm-message-2ab680e0-kova-260728-084516-7861c3/openclaw/timeline.jsonl |
  | warm | 3702 ms | 97 ms | 3605 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-agent-cold-warm-message-2ab680e0-kova-260728-084516-7861c3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 83 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 97 ms | 47 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-agent-cold-warm-message-67b331a3-kova-260728-084516-7861c3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 990.6 MB; tracked total 990.6 MB; max CPU 174.4%; samples 14; roles agent-cli 990.6MB/174.4%, agent-process 990.6MB/174.4%, command-tree 990.6MB/174.4%, status-cli 894.4MB/167.4%
- agent: turn 4013ms; cold/warm 3962ms/4013ms; cold-warm delta 0ms; pre-provider 3879ms; provider 2ms; metadata scans 14 (178ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4010.45ms; max 4013ms; pre-provider p95 3875.6ms
- agent CLI attribution: cold known 87ms / unattributed 3724ms; warm known 92ms / unattributed 3787ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3962ms; pre-provider 3811ms; provider 3ms; post-provider 148ms; response true
    - active window: metadata scans 7 (87.84ms total, max 44.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3811ms; provider 3ms; post-provider 148ms; unknown 3501.31ms; source plugins.metadata.scan 309.69ms
  - warm: total 4013ms; pre-provider 3879ms; provider 2ms; post-provider 132ms; response true
    - active window: metadata scans 7 (90.16ms total, max 44.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3879ms; provider 2ms; post-provider 132ms; unknown 3569.31ms; source plugins.metadata.scan 309.69ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3811 ms | 87 ms | 3724 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-agent-cold-warm-message-67b331a3-kova-260728-084516-7861c3/openclaw/timeline.jsonl |
  | warm | 3879 ms | 92 ms | 3787 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-agent-cold-warm-message-67b331a3-kova-260728-084516-7861c3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 92 ms | 45 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-084516-7861c3-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-084516-7861c3-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-084516-7861c3-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-fresh-install-fresh-r1-697fad55-kova-260728-084516-7861c3
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-fresh-install-fresh-r2-da880701-kova-260728-084516-7861c3
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-fresh-install-fresh-r3-82f8bdbd-kova-260728-084516-7861c3
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-fresh-install-onboarded-9f99e904-kova-260728-084516-7861c3
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-fresh-install-onboarded-f9c24855-kova-260728-084516-7861c3
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-fresh-install-onboarded-fe872c26-kova-260728-084516-7861c3
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260728-084516-7861c3
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-bundled-runtime-deps-mi-39c08a4a-kova-260728-084516-7861c3
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-084516-7861c3/kova-bundled-runtime-deps-mi-150715ba-kova-260728-084516-7861c3
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms4eugur-42t-4e955c96`
- Result: removed
- Duration: 454ms

