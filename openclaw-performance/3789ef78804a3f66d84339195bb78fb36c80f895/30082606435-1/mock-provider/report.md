# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — agent-cli peak RSS 1001.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1001.9 MB, agent-process 1001.9 MB, command-tree 1001.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | agent-cli peak RSS 1001.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1001.9 MB, agent-process 1001.9 MB, command-tree 1001.9 MB |
| Blocking findings | 4 |
| Warnings | 20 |
| Records | 18 (PASS:17, FAIL:1) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260724-092812-02081e` |
| Generated | 2026-07-24T09:36:22.403Z |
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
  - primary: agent-cli peak RSS 1001.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1001.9 MB, agent-process 1001.9 MB, command-tree 1001.9 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: agent-cli peak RSS 1001.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1001.9 MB, agent-process 1001.9 MB, command-tree 1001.9 MB
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
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1001.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1001.9 MB, agent-process 1001.9 MB, command-tree 1001.9 MB
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
| info | Kova | report | 18 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5227ms | 939MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5115ms | 941.1MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5090ms | 926MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5261ms | 941.4MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:1, PASS:2 | n/a | 0MB | n/a | 158.4% | 4964ms | 4901ms | 4611ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5378ms | 945.4MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5474ms | 946.7 MB | 1612.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5227ms | 929.1 MB | 1614 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5075ms | 939 MB | 1623.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4967ms | 928.4 MB | 1650.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5351ms | 941.1 MB | 1627.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5115ms | 941.9 MB | 1599.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5314ms | 926 MB | 931.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5090ms | 919.3 MB | 924.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4932ms | 927.8 MB | 933 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5058ms | 941.4 MB | 1413.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5261ms | 938.4 MB | 1403.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5621ms | 941.5 MB | 1607.9 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1001.9 MB | 5326ms | 5127ms | agent-cli peak RSS 1001.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1001.9 MB, agent-process 1001.9 MB, command-tree 1001.9 MB |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 957.4 MB | 4770ms | 4901ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 956.6 MB | 4964ms | 4637ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5803ms | 945.4 MB | 1605.8 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5378ms | 945.5 MB | 1630.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5327ms | 933.4 MB | 1597 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1001.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1001.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1001.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 730.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.7% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 686.6 MB (scenario fresh-install/onboarded-user); CPU 160% (scenario bundled-plugin-startup/fresh)
- gateway: RSS 946.7 MB (scenario fresh-install/fresh); CPU 154% (scenario fresh-install/fresh)
- gateway-tree: RSS 946.7 MB (scenario fresh-install/fresh); CPU 154% (scenario fresh-install/fresh)
- model-cli: RSS 561.2 MB (scenario fresh-install/fresh); CPU 151% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-agent-cold-warm-message-8e2a29af-kova-260724-092812-02081e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1001.9 MB; tracked total 1001.9 MB; max CPU 158.9%; samples 18; roles agent-cli 1001.9MB/158.9%, command-tree 1001.9MB/161.7%, agent-process 1001.9MB/158.9%, status-cli 730.9MB/161.7%
- agent: turn 5326ms; cold/warm 5326ms/5127ms; cold-warm delta 199ms; pre-provider 4973ms; provider 3ms; metadata scans 14 (320.1ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5316.05ms; max 5326ms; pre-provider p95 4962.45ms
- agent CLI attribution: cold known 164ms / unattributed 4809ms; warm known 155ms / unattributed 4607ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1001.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1001.9 MB, agent-process 1001.9 MB, command-tree 1001.9 MB
  - agent-cli peak RSS 1001.9 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1001.9 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5326ms; pre-provider 4973ms; provider 3ms; post-provider 350ms; response true
    - active window: metadata scans 7 (164.48ms total, max 63.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4973ms; provider 3ms; post-provider 350ms; unknown 4428.41ms; source plugins.metadata.scan 544.59ms
  - warm: total 5127ms; pre-provider 4762ms; provider 1ms; post-provider 364ms; response true
    - active window: metadata scans 7 (155.62ms total, max 66.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4762ms; provider 1ms; post-provider 364ms; unknown 4217.41ms; source plugins.metadata.scan 544.59ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4973 ms | 164 ms | 4809 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-agent-cold-warm-message-8e2a29af-kova-260724-092812-02081e/openclaw/timeline.jsonl |
  | warm | 4762 ms | 155 ms | 4607 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-agent-cold-warm-message-8e2a29af-kova-260724-092812-02081e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 164 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 155 ms | 66 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-agent-cold-warm-message-2ab680e0-kova-260724-092812-02081e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 957.4 MB; tracked total 957.4 MB; max CPU 158.4%; samples 16; roles agent-cli 957.4MB/158.4%, command-tree 957.4MB/158.8%, agent-process 957.4MB/158.4%, status-cli 723.2MB/158.8%
- agent: turn 4901ms; cold/warm 4770ms/4901ms; cold-warm delta 0ms; pre-provider 4608ms; provider 1ms; metadata scans 14 (273.14ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4894.45ms; max 4901ms; pre-provider p95 4600.3ms
- agent CLI attribution: cold known 130ms / unattributed 4324ms; warm known 142ms / unattributed 4466ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 83.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4770ms; pre-provider 4454ms; provider 2ms; post-provider 314ms; response true
    - active window: metadata scans 7 (131.58ms total, max 64.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4454ms; provider 2ms; post-provider 314ms; unknown 3946.05ms; source plugins.metadata.scan 507.95ms
  - warm: total 4901ms; pre-provider 4608ms; provider 1ms; post-provider 292ms; response true
    - active window: metadata scans 7 (141.56ms total, max 74.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4608ms; provider 1ms; post-provider 292ms; unknown 4100.05ms; source plugins.metadata.scan 507.95ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4454 ms | 130 ms | 4324 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-agent-cold-warm-message-2ab680e0-kova-260724-092812-02081e/openclaw/timeline.jsonl |
  | warm | 4608 ms | 142 ms | 4466 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-agent-cold-warm-message-2ab680e0-kova-260724-092812-02081e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 75 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-agent-cold-warm-message-67b331a3-kova-260724-092812-02081e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 956.6 MB; tracked total 956.6 MB; max CPU 157.9%; samples 16; roles agent-cli 956.6MB/157.9%, command-tree 956.6MB/160.9%, agent-process 956.6MB/157.9%, status-cli 722.1MB/160.9%
- agent: turn 4964ms; cold/warm 4964ms/4637ms; cold-warm delta 327ms; pre-provider 4611ms; provider 3ms; metadata scans 14 (264.29ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4947.65ms; max 4964ms; pre-provider p95 4599.8ms
- agent CLI attribution: cold known 130ms / unattributed 4481ms; warm known 135ms / unattributed 4252ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4964ms; pre-provider 4611ms; provider 3ms; post-provider 350ms; response true
    - active window: metadata scans 7 (130.73ms total, max 60.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4611ms; provider 3ms; post-provider 350ms; unknown 4122.36ms; source plugins.metadata.scan 488.64ms
  - warm: total 4637ms; pre-provider 4387ms; provider 1ms; post-provider 249ms; response true
    - active window: metadata scans 7 (133.56ms total, max 65.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4387ms; provider 1ms; post-provider 249ms; unknown 3898.36ms; source plugins.metadata.scan 488.64ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4611 ms | 130 ms | 4481 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-agent-cold-warm-message-67b331a3-kova-260724-092812-02081e/openclaw/timeline.jsonl |
  | warm | 4387 ms | 135 ms | 4252 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-agent-cold-warm-message-67b331a3-kova-260724-092812-02081e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 66 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-092812-02081e-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-092812-02081e-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-092812-02081e-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-fresh-install-fresh-r1-697fad55-kova-260724-092812-02081e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-fresh-install-fresh-r2-da880701-kova-260724-092812-02081e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-092812-02081e
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-fresh-install-onboarded-9f99e904-kova-260724-092812-02081e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-fresh-install-onboarded-f9c24855-kova-260724-092812-02081e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-fresh-install-onboarded-fe872c26-kova-260724-092812-02081e
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-092812-02081e
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-092812-02081e
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-092812-02081e/kova-bundled-runtime-deps-mi-150715ba-kova-260724-092812-02081e
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mryqm9te-411-b98eba2f`
- Result: removed
- Duration: 452ms

