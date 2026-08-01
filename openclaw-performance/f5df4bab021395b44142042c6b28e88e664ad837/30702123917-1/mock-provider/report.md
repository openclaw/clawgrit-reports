# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — model-cli peak RSS 731.6 MB exceeded threshold 700 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | model-cli peak RSS 731.6 MB exceeded threshold 700 MB |
| Blocking findings | 11 |
| Warnings | 20 |
| Records | 15 (PASS:10, FAIL:5) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260801-133929-2ad7a2` |
| Generated | 2026-08-01T13:47:44.888Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 15 |
| Scenarios | 4 |
| States | 4 |
| PASS | 10 |
| FAIL | 5 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 5
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 5 blocking, 0 warning
  - primary: model-cli peak RSS 731.6 MB exceeded threshold 700 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: model-cli peak RSS 731.6 MB exceeded threshold 700 MB
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
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage soak:baseline was not present in the report.
  - expected: requirement coverage soak:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage workspace-scan:baseline was not present in the report.
  - expected: requirement coverage workspace-scan:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-runtime:baseline was not present in the report.
  - expected: requirement coverage mcp-runtime:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cron-runtime:run-now was not present in the report.
  - expected: requirement coverage cron-runtime:run-now
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report.
  - expected: requirement coverage exec-tool-safety:safe-and-blocked-exec
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report.
  - expected: requirement coverage mcp-tool-call:safe-tool-call
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report.
  - expected: requirement coverage tool-failure-containment:failure-attribution
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage browser-automation:baseline was not present in the report.
  - expected: requirement coverage browser-automation:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage media-understanding:baseline was not present in the report.
  - expected: requirement coverage media-understanding:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage network-offline:baseline was not present in the report.
  - expected: requirement coverage network-offline:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cross-platform-smoke:baseline was not present in the report.
  - expected: requirement coverage cross-platform-smoke:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:list-survives-dirty-state was not present in the report.
  - expected: requirement coverage dirty-plugin-state:list-survives-dirty-state
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:doctor-preserves-user-files was not present in the report.
  - expected: requirement coverage dirty-plugin-state:doctor-preserves-user-files
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:plugin-failure-recovery was not present in the report.
  - expected: requirement coverage release-update-recovery:plugin-failure-recovery
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:doctor-repair-contract was not present in the report.
  - expected: requirement coverage release-update-recovery:doctor-repair-contract
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:update-retry-target-stability was not present in the report.
  - expected: requirement coverage release-update-recovery:update-retry-target-stability
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:rollback-available was not present in the report.
  - expected: requirement coverage release-update-recovery:rollback-available
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- BLOCKING fresh-install/onboarded-user: model-cli peak RSS 731.6 MB exceeded threshold 700 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1007.3 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1056.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1056.4 MB, gateway-tree 1056.4 MB, command-tree 795.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 693.2 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 707.8 MB exceeded threshold 650 MB
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
| info | Kova | report | 19 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5140ms | 940.4MB | n/a | 157% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:2, FAIL:1 | 4984ms | 938.7MB | n/a | 159% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 5025ms | 979MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153% | 3657ms | 3662ms | 3541ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5026ms | 1019.9MB | n/a | 158% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5594ms | 927 MB | 1762.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5140ms | 952.9 MB | 1776.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 4969ms | 940.4 MB | 1794.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4943ms | 948.7 MB | 1773 MB | n/a | n/a |  |
| 2 | FAIL | fresh-install/onboarded-user |  | 5053ms | 938.7 MB | 1762.3 MB | n/a | n/a | model-cli peak RSS 731.6 MB exceeded threshold 700 MB |
| 3 | PASS | fresh-install/onboarded-user |  | 4984ms | 850 MB | 1707.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5046ms | 952.2 MB | 1762 MB | n/a | n/a |  |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5012ms | 1007.3 MB | 1762.8 MB | n/a | n/a | gateway peak RSS 1007.3 MB exceeded threshold 1000 MB |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5025ms | 979 MB | 1755.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1096 MB | 3678ms | 3642ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1095.4 MB | 3657ms | 3684ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1094.1 MB | 3630ms | 3662ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5026ms | 1056.4 MB | 1919.2 MB | n/a | n/a | gateway peak RSS 1056.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1056.4 MB, gateway-tree 1056.4 MB, command-tree 795.6 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4979ms | 1019.9 MB | 1736.5 MB | n/a | n/a | model-cli peak RSS 693.2 MB exceeded threshold 650 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5051ms | 1014.8 MB | 1732.8 MB | n/a | n/a | model-cli peak RSS 707.8 MB exceeded threshold 650 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1056.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario fresh-install/fresh)
- command-tree: RSS 1024.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1056.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario fresh-install/fresh)
- status-cli: RSS 922.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 849.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 795.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario fresh-install/fresh)
- plugin-cli: RSS 790.4 MB (scenario fresh-install/onboarded-user); CPU 154% (scenario fresh-install/fresh)
- agent-cli: RSS 175.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 25.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-fresh-install-onboarded-f9c24855-kova-260801-133929-2ad7a2
Measurements:
- startup: listening 4771ms; health 5053ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 1ms; post-ready p95 3ms; failures 19; final failures 0; slowest startup-sample/provision 282ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 938.7 MB; tracked total 1762.3 MB; max CPU 159%; samples 21; roles gateway 938.7MB/159%, gateway-tree 938.7MB/159%, command-tree 756.2MB/153%, plugin-cli 756.2MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.load 337.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 731.6 MB exceeded threshold 700 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-bundled-plugin-startup-809ede2b-kova-260801-133929-2ad7a2
Measurements:
- startup: listening 4768ms; health 5012ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 244ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/restart 352ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1007.3 MB; tracked total 1762.8 MB; max CPU 156%; samples 16; roles gateway 1007.3MB/156%, gateway-tree 936.1MB/156%, command-tree 756.1MB/152%, plugin-cli 756.1MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 411.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1007.3 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-agent-cold-warm-message-8e2a29af-kova-260801-133929-2ad7a2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 849.7 MB; tracked total 1096 MB; max CPU 153%; samples 14; roles command-tree 1024.6MB/174.3%, status-cli 922.8MB/174.3%, agent-process 849.7MB/153%, agent-cli 175.9MB/25.4%
- agent: turn 3678ms; cold/warm 3678ms/3642ms; cold-warm delta 36ms; pre-provider 3554ms; provider 2ms; metadata scans 14 (173.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3676.2ms; max 3678ms; pre-provider p95 3552.95ms
- agent CLI attribution: cold known 87ms / unattributed 3467ms; warm known 89ms / unattributed 3444ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 51.62ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3678ms; pre-provider 3554ms; provider 2ms; post-provider 122ms; response true
    - active window: metadata scans 7 (84.32ms total, max 46.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3554ms; provider 2ms; post-provider 122ms; unknown 3238.02ms; source plugins.metadata.scan 315.98ms
  - warm: total 3642ms; pre-provider 3533ms; provider 1ms; post-provider 108ms; response true
    - active window: metadata scans 7 (89.24ms total, max 51.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3533ms; provider 1ms; post-provider 108ms; unknown 3217.02ms; source plugins.metadata.scan 315.98ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3554 ms | 87 ms | 3467 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-agent-cold-warm-message-8e2a29af-kova-260801-133929-2ad7a2/openclaw/timeline.jsonl |
  | warm | 3533 ms | 89 ms | 3444 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-agent-cold-warm-message-8e2a29af-kova-260801-133929-2ad7a2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 89 ms | 51 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-agent-cold-warm-message-2ab680e0-kova-260801-133929-2ad7a2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 849.3 MB; tracked total 1095.4 MB; max CPU 154%; samples 14; roles command-tree 1024MB/173.5%, status-cli 880.1MB/171.8%, agent-process 849.3MB/154%, agent-cli 174.7MB/23.5%
- agent: turn 3684ms; cold/warm 3657ms/3684ms; cold-warm delta 0ms; pre-provider 3567ms; provider 1ms; metadata scans 14 (173.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3682.65ms; max 3684ms; pre-provider p95 3565.7ms
- agent CLI attribution: cold known 83ms / unattributed 3458ms; warm known 91ms / unattributed 3476ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 51.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3657ms; pre-provider 3541ms; provider 2ms; post-provider 114ms; response true
    - active window: metadata scans 7 (83.1ms total, max 45.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3541ms; provider 2ms; post-provider 114ms; unknown 3218.17ms; source plugins.metadata.scan 322.83ms
  - warm: total 3684ms; pre-provider 3567ms; provider 1ms; post-provider 116ms; response true
    - active window: metadata scans 7 (90.4ms total, max 51.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3567ms; provider 1ms; post-provider 116ms; unknown 3244.17ms; source plugins.metadata.scan 322.83ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3541 ms | 83 ms | 3458 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-agent-cold-warm-message-2ab680e0-kova-260801-133929-2ad7a2/openclaw/timeline.jsonl |
  | warm | 3567 ms | 91 ms | 3476 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-agent-cold-warm-message-2ab680e0-kova-260801-133929-2ad7a2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 83 ms | 46 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 91 ms | 51 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-agent-cold-warm-message-67b331a3-kova-260801-133929-2ad7a2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 849.2 MB; tracked total 1094.1 MB; max CPU 153%; samples 14; roles command-tree 1023.7MB/174.5%, status-cli 902.8MB/174.5%, agent-process 849.2MB/153%, agent-cli 175.6MB/22.8%
- agent: turn 3662ms; cold/warm 3630ms/3662ms; cold-warm delta 0ms; pre-provider 3551ms; provider 1ms; metadata scans 14 (179.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3660.4ms; max 3662ms; pre-provider p95 3549.05ms
- agent CLI attribution: cold known 86ms / unattributed 3426ms; warm known 93ms / unattributed 3458ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 48.24ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3630ms; pre-provider 3512ms; provider 2ms; post-provider 116ms; response true
    - active window: metadata scans 7 (86.66ms total, max 47.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3512ms; provider 2ms; post-provider 116ms; unknown 3186.21ms; source plugins.metadata.scan 325.79ms
  - warm: total 3662ms; pre-provider 3551ms; provider 1ms; post-provider 110ms; response true
    - active window: metadata scans 7 (93.21ms total, max 42.83ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3551ms; provider 1ms; post-provider 110ms; unknown 3225.21ms; source plugins.metadata.scan 325.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3512 ms | 86 ms | 3426 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-agent-cold-warm-message-67b331a3-kova-260801-133929-2ad7a2/openclaw/timeline.jsonl |
  | warm | 3551 ms | 93 ms | 3458 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-agent-cold-warm-message-67b331a3-kova-260801-133929-2ad7a2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 86 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 93 ms | 43 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-gateway-performance-man-005107f3-kova-260801-133929-2ad7a2
Measurements:
- startup: listening 4518ms; health 5026ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 464ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/cold-start 508ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1056.4 MB; tracked total 1919.2 MB; max CPU 158%; samples 24; roles gateway 1056.4MB/158%, gateway-tree 1056.4MB/158%, command-tree 795.6MB/152%, model-cli 795.6MB/138%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span plugins.load 429.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1056.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1056.4 MB, gateway-tree 1056.4 MB, command-tree 795.6 MB
  - model-cli peak RSS 795.6 MB exceeded threshold 650 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-gateway-performance-man-1e8be6a8-kova-260801-133929-2ad7a2
Measurements:
- startup: listening 4521ms; health 4979ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 458ms; post-ready p95 6ms; failures 28; final failures 0; slowest startup-sample/warm-restart 573ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1019.9 MB; tracked total 1736.5 MB; max CPU 158%; samples 24; roles gateway 1019.9MB/158%, gateway-tree 930.5MB/158%, command-tree 735.7MB/152%, status-cli 735.7MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 431.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 693.2 MB exceeded threshold 650 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-gateway-performance-man-958fde53-kova-260801-133929-2ad7a2
Measurements:
- startup: listening 4768ms; health 5051ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 283ms; post-ready p95 3ms; failures 29; final failures 0; slowest startup-sample/warm-restart 581ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1014.8 MB; tracked total 1732.8 MB; max CPU 158%; samples 24; roles gateway 1014.8MB/158%, gateway-tree 934.2MB/158%, command-tree 728.2MB/151%, status-cli 728.2MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 451.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 707.8 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260801-133929-2ad7a2-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260801-133929-2ad7a2-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260801-133929-2ad7a2-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-fresh-install-fresh-r1-697fad55-kova-260801-133929-2ad7a2
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-fresh-install-fresh-r2-da880701-kova-260801-133929-2ad7a2
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-fresh-install-fresh-r3-82f8bdbd-kova-260801-133929-2ad7a2
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-fresh-install-onboarded-9f99e904-kova-260801-133929-2ad7a2
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-fresh-install-onboarded-f9c24855-kova-260801-133929-2ad7a2
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-fresh-install-onboarded-fe872c26-kova-260801-133929-2ad7a2
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-bundled-plugin-startup-4a0cbdf7-kova-260801-133929-2ad7a2
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-bundled-plugin-startup-809ede2b-kova-260801-133929-2ad7a2
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-133929-2ad7a2/kova-bundled-plugin-startup-5377119f-kova-260801-133929-2ad7a2
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msaf48h4-40z-f3c95189`
- Result: removed
- Duration: 388ms

