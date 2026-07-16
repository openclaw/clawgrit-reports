# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — model-cli peak RSS 669.2 MB exceeded threshold 650 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | model-cli peak RSS 669.2 MB exceeded threshold 650 MB |
| Blocking findings | 2 |
| Warnings | 20 |
| Records | 18 (PASS:17, FAIL:1) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260716-091016-ef1c39` |
| Generated | 2026-07-16T09:20:12.714Z |
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
| PASS | 17 |
| FAIL | 1 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 1
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 1 blocking, 0 warning
  - primary: model-cli peak RSS 669.2 MB exceeded threshold 650 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: model-cli peak RSS 669.2 MB exceeded threshold 650 MB
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
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 669.2 MB exceeded threshold 650 MB
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
| info | Kova | report | 16 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3711ms | 861.7MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3581ms | 865.7MB | n/a | 149% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4925ms | 858MB | n/a | 158% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 4332ms | 860.1MB | n/a | 160% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 180.8% | 4343ms | 4292ms | 4135ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:1, PASS:2 | 3968ms | 869.7MB | n/a | 150% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3872ms | 854.9 MB | 1754.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3044ms | 864.4 MB | 1677.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3711ms | 861.7 MB | 1630.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3423ms | 865.7 MB | 1664.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4128ms | 871.5 MB | 1625.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3581ms | 861.1 MB | 1687.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5523ms | 857.7 MB | 862.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4925ms | 858 MB | 863.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4515ms | 927.7 MB | 927.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 4994ms | 855.9 MB | 1576.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 4332ms | 860.1 MB | 1727.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3893ms | 863.3 MB | 1588.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 911.3 MB | 4739ms | 4078ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 922.2 MB | 4343ms | 4292ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 953.9 MB | 4132ms | 6731ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 3954ms | 869.7 MB | 1564 MB | n/a | n/a | model-cli peak RSS 669.2 MB exceeded threshold 650 MB |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3968ms | 860.1 MB | 1690.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4353ms | 870.9 MB | 1692.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 953.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 953.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190% (scenario fresh-install/fresh)
- agent-process: RSS 953.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.8% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 899.2 MB (scenario fresh-install/fresh); CPU 190% (scenario fresh-install/fresh)
- status-cli: RSS 834 MB (scenario gateway-performance/many-bundled-plugins); CPU 183.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 927.7 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 168% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 871.5 MB (scenario fresh-install/onboarded-user); CPU 168% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 669.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 179.9% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-agent-cold-warm-message-8e2a29af-kova-260716-091016-ef1c39
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 911.3 MB; tracked total 911.3 MB; max CPU 180.8%; samples 15; roles agent-cli 911.3MB/180.8%, agent-process 911.3MB/180.8%, command-tree 911.3MB/180.8%, status-cli 737.5MB/169.9%
- agent: turn 4739ms; cold/warm 4739ms/4078ms; cold-warm delta 661ms; pre-provider 4533ms; provider 4ms; metadata scans 10 (255.14ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4705.95ms; max 4739ms; pre-provider p95 4503.05ms
- agent CLI attribution: cold known 138ms / unattributed 4395ms; warm known 117ms / unattributed 3817ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 88.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4739ms; pre-provider 4533ms; provider 4ms; post-provider 202ms; response true
    - active window: metadata scans 5 (138.5ms total, max 78.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4533ms; provider 4ms; post-provider 202ms; unknown 4163.4ms; source plugins.metadata.scan 369.6ms
  - warm: total 4078ms; pre-provider 3934ms; provider 1ms; post-provider 143ms; response true
    - active window: metadata scans 5 (116.64ms total, max 60.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3934ms; provider 1ms; post-provider 143ms; unknown 3564.4ms; source plugins.metadata.scan 369.6ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4533 ms | 138 ms | 4395 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-agent-cold-warm-message-8e2a29af-kova-260716-091016-ef1c39/openclaw/timeline.jsonl |
  | warm | 3934 ms | 117 ms | 3817 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-agent-cold-warm-message-8e2a29af-kova-260716-091016-ef1c39/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 138 ms | 78 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 117 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-agent-cold-warm-message-2ab680e0-kova-260716-091016-ef1c39
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 922.2 MB; tracked total 922.2 MB; max CPU 171.3%; samples 16; roles agent-cli 922.2MB/171.3%, command-tree 922.2MB/172.8%, agent-process 922.2MB/171.3%, status-cli 729.4MB/172.8%
- agent: turn 4343ms; cold/warm 4343ms/4292ms; cold-warm delta 51ms; pre-provider 4135ms; provider 4ms; metadata scans 10 (260.02ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4340.45ms; max 4343ms; pre-provider p95 4142.6ms
- agent CLI attribution: cold known 137ms / unattributed 3998ms; warm known 124ms / unattributed 4019ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 93.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4343ms; pre-provider 4135ms; provider 4ms; post-provider 204ms; response true
    - active window: metadata scans 5 (135.87ms total, max 71.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4135ms; provider 4ms; post-provider 204ms; unknown 3755.3ms; source plugins.metadata.scan 379.7ms
  - warm: total 4292ms; pre-provider 4143ms; provider 1ms; post-provider 148ms; response true
    - active window: metadata scans 5 (124.15ms total, max 68.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4143ms; provider 1ms; post-provider 148ms; unknown 3763.3ms; source plugins.metadata.scan 379.7ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4135 ms | 137 ms | 3998 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-agent-cold-warm-message-2ab680e0-kova-260716-091016-ef1c39/openclaw/timeline.jsonl |
  | warm | 4143 ms | 124 ms | 4019 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-agent-cold-warm-message-2ab680e0-kova-260716-091016-ef1c39/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 137 ms | 71 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 124 ms | 69 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-agent-cold-warm-message-67b331a3-kova-260716-091016-ef1c39
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 953.9 MB; tracked total 953.9 MB; max CPU 182.8%; samples 19; roles agent-cli 953.9MB/182.8%, command-tree 953.9MB/183.3%, agent-process 953.9MB/182.8%, status-cli 825.9MB/183.3%
- agent: turn 6731ms; cold/warm 4132ms/6731ms; cold-warm delta 0ms; pre-provider 6427ms; provider 3ms; metadata scans 10 (329.38ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6601.05ms; max 6731ms; pre-provider p95 6304.1ms
- agent CLI attribution: cold known 119ms / unattributed 3850ms; warm known 210ms / unattributed 6217ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 120.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4132ms; pre-provider 3969ms; provider 3ms; post-provider 160ms; response true
    - active window: metadata scans 5 (120ms total, max 72.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3969ms; provider 3ms; post-provider 160ms; unknown 3475.9ms; source plugins.metadata.scan 493.1ms
  - warm: total 6731ms; pre-provider 6427ms; provider 3ms; post-provider 301ms; response true
    - active window: metadata scans 5 (209.38ms total, max 113.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6427ms; provider 3ms; post-provider 301ms; unknown 5933.9ms; source plugins.metadata.scan 493.1ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3969 ms | 119 ms | 3850 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-agent-cold-warm-message-67b331a3-kova-260716-091016-ef1c39/openclaw/timeline.jsonl |
  | warm | 6427 ms | 210 ms | 6217 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-agent-cold-warm-message-67b331a3-kova-260716-091016-ef1c39/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 119 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 210 ms | 114 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-gateway-performance-man-005107f3-kova-260716-091016-ef1c39
Measurements:
- startup: listening 3533ms; health 3954ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 421ms; post-ready p95 4ms; failures 26; final failures 0; slowest startup-sample/warm-restart 686ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 869.7 MB; tracked total 1564 MB; max CPU 150%; samples 19; roles gateway 869.7MB/150%, command-tree 698.1MB/175%, gateway-tree 869.7MB/150%, plugin-cli 694.3MB/175%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 703.49ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 669.2 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260716-091016-ef1c39-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260716-091016-ef1c39-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260716-091016-ef1c39-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-fresh-install-fresh-r1-697fad55-kova-260716-091016-ef1c39
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-fresh-install-fresh-r2-da880701-kova-260716-091016-ef1c39
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-fresh-install-fresh-r3-82f8bdbd-kova-260716-091016-ef1c39
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-fresh-install-onboarded-9f99e904-kova-260716-091016-ef1c39
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-fresh-install-onboarded-f9c24855-kova-260716-091016-ef1c39
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-fresh-install-onboarded-fe872c26-kova-260716-091016-ef1c39
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260716-091016-ef1c39
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-bundled-runtime-deps-mi-39c08a4a-kova-260716-091016-ef1c39
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-091016-ef1c39/kova-bundled-runtime-deps-mi-150715ba-kova-260716-091016-ef1c39
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrnage6c-3z4-437814ea`
- Result: removed
- Duration: 535ms

