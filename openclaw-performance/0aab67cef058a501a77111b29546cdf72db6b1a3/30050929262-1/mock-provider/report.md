# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — agent-cli peak RSS 1012.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.5 MB, agent-process 1012.5 MB, command-tree 1012.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | agent-cli peak RSS 1012.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.5 MB, agent-process 1012.5 MB, command-tree 1012.5 MB |
| Blocking findings | 4 |
| Warnings | 21 |
| Records | 18 (PASS:17, FAIL:1) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260723-224554-d8a45d` |
| Generated | 2026-07-23T22:53:41.819Z |
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
  - primary: agent-cli peak RSS 1012.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.5 MB, agent-process 1012.5 MB, command-tree 1012.5 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: agent-cli peak RSS 1012.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.5 MB, agent-process 1012.5 MB, command-tree 1012.5 MB
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
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1012.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.5 MB, agent-process 1012.5 MB, command-tree 1012.5 MB
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
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3151ms | 937.8MB | n/a | 151% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3309ms | 929.6MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3343ms | 924.6MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3200ms | 927.9MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:2, FAIL:1 | n/a | 0MB | n/a | 154.8% | 4376ms | 4275ms | 4090ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3640ms | 928.5MB | n/a | 151% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3928ms | 899.3 MB | 1635.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3084ms | 937.8 MB | 1724.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3151ms | 959.2 MB | 1692.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3099ms | 925.8 MB | 1655.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3494ms | 929.6 MB | 1652.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3309ms | 937.2 MB | 1664.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3343ms | 915.3 MB | 920.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3278ms | 924.6 MB | 929.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3579ms | 947.9 MB | 952.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3328ms | 924.2 MB | 1454.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3101ms | 927.9 MB | 1460.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3200ms | 938.5 MB | 1474.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 969.1 MB | 4376ms | 4641ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 979.6 MB | 4367ms | 4219ms |  |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1012.5 MB | 4383ms | 4275ms | agent-cli peak RSS 1012.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.5 MB, agent-process 1012.5 MB, command-tree 1012.5 MB |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3149ms | 924.4 MB | 1709.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3640ms | 960.8 MB | 1721.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3684ms | 928.5 MB | 1690.9 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1012.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1012.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.5% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1012.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 711.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 164.5% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 787.7 MB (scenario fresh-install/fresh); CPU 163% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 960.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 673.9 MB (scenario fresh-install/fresh); CPU 161% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 960.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario bundled-plugin-startup/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-agent-cold-warm-message-8e2a29af-kova-260723-224554-d8a45d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 969.1 MB; tracked total 969.1 MB; max CPU 155.9%; samples 15; roles agent-cli 969.1MB/155.9%, agent-process 969.1MB/155.9%, command-tree 969.1MB/155.9%, status-cli 557.4MB/154.8%
- agent: turn 4641ms; cold/warm 4376ms/4641ms; cold-warm delta 0ms; pre-provider 4398ms; provider 1ms; metadata scans 14 (276.22ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4627.75ms; max 4641ms; pre-provider p95 4382.6ms
- agent CLI attribution: cold known 131ms / unattributed 3959ms; warm known 145ms / unattributed 4253ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4376ms; pre-provider 4090ms; provider 2ms; post-provider 284ms; response true
    - active window: metadata scans 7 (129.86ms total, max 55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4090ms; provider 2ms; post-provider 284ms; unknown 3603.13ms; source plugins.metadata.scan 486.87ms
  - warm: total 4641ms; pre-provider 4398ms; provider 1ms; post-provider 242ms; response true
    - active window: metadata scans 7 (146.36ms total, max 61.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4398ms; provider 1ms; post-provider 242ms; unknown 3911.13ms; source plugins.metadata.scan 486.87ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4090 ms | 131 ms | 3959 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-agent-cold-warm-message-8e2a29af-kova-260723-224554-d8a45d/openclaw/timeline.jsonl |
  | warm | 4398 ms | 145 ms | 4253 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-agent-cold-warm-message-8e2a29af-kova-260723-224554-d8a45d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 145 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-agent-cold-warm-message-2ab680e0-kova-260723-224554-d8a45d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 979.6 MB; tracked total 979.6 MB; max CPU 154.8%; samples 16; roles agent-cli 979.6MB/154.8%, agent-process 979.6MB/154.8%, command-tree 979.6MB/154.8%, status-cli 768.1MB/152.8%
- agent: turn 4367ms; cold/warm 4367ms/4219ms; cold-warm delta 148ms; pre-provider 4075ms; provider 2ms; metadata scans 14 (239.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4359.6ms; max 4367ms; pre-provider p95 4070.05ms
- agent CLI attribution: cold known 118ms / unattributed 3957ms; warm known 121ms / unattributed 3855ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4367ms; pre-provider 4075ms; provider 2ms; post-provider 290ms; response true
    - active window: metadata scans 7 (117.45ms total, max 55.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4075ms; provider 2ms; post-provider 290ms; unknown 3632.75ms; source plugins.metadata.scan 442.25ms
  - warm: total 4219ms; pre-provider 3976ms; provider 1ms; post-provider 242ms; response true
    - active window: metadata scans 7 (122.19ms total, max 60.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3976ms; provider 1ms; post-provider 242ms; unknown 3533.75ms; source plugins.metadata.scan 442.25ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4075 ms | 118 ms | 3957 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-agent-cold-warm-message-2ab680e0-kova-260723-224554-d8a45d/openclaw/timeline.jsonl |
  | warm | 3976 ms | 121 ms | 3855 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-agent-cold-warm-message-2ab680e0-kova-260723-224554-d8a45d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 118 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 60 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-agent-cold-warm-message-67b331a3-kova-260723-224554-d8a45d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1012.5 MB; tracked total 1012.5 MB; max CPU 154.4%; samples 16; roles agent-cli 1012.5MB/154.4%, command-tree 1012.5MB/159.7%, agent-process 1012.5MB/154.4%, status-cli 731.2MB/159.7%
- agent: turn 4383ms; cold/warm 4383ms/4275ms; cold-warm delta 108ms; pre-provider 4098ms; provider 2ms; metadata scans 14 (263.81ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4377.6ms; max 4383ms; pre-provider p95 4093.8ms
- agent CLI attribution: cold known 120ms / unattributed 3978ms; warm known 143ms / unattributed 3871ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1012.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.5 MB, agent-process 1012.5 MB, command-tree 1012.5 MB
  - agent-cli peak RSS 1012.5 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1012.5 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4383ms; pre-provider 4098ms; provider 2ms; post-provider 283ms; response true
    - active window: metadata scans 7 (121.8ms total, max 59.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4098ms; provider 2ms; post-provider 283ms; unknown 3620.18ms; source plugins.metadata.scan 477.82ms
  - warm: total 4275ms; pre-provider 4014ms; provider 2ms; post-provider 259ms; response true
    - active window: metadata scans 7 (142.01ms total, max 61.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4014ms; provider 2ms; post-provider 259ms; unknown 3536.18ms; source plugins.metadata.scan 477.82ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4098 ms | 120 ms | 3978 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-agent-cold-warm-message-67b331a3-kova-260723-224554-d8a45d/openclaw/timeline.jsonl |
  | warm | 4014 ms | 143 ms | 3871 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-agent-cold-warm-message-67b331a3-kova-260723-224554-d8a45d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 120 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 143 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-224554-d8a45d-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-224554-d8a45d-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-224554-d8a45d-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-fresh-install-fresh-r1-697fad55-kova-260723-224554-d8a45d
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-fresh-install-fresh-r2-da880701-kova-260723-224554-d8a45d
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-224554-d8a45d
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-fresh-install-onboarded-9f99e904-kova-260723-224554-d8a45d
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-fresh-install-onboarded-f9c24855-kova-260723-224554-d8a45d
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-fresh-install-onboarded-fe872c26-kova-260723-224554-d8a45d
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-224554-d8a45d
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-224554-d8a45d
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-224554-d8a45d/kova-bundled-runtime-deps-mi-150715ba-kova-260723-224554-d8a45d
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mry3o9qd-41w-e1f72369`
- Result: removed
- Duration: 482ms

