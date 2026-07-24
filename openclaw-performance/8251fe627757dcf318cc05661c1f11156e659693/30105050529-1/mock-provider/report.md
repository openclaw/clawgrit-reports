# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — warm agent spent 17221ms before provider work, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | warm agent spent 17221ms before provider work, over threshold 10000ms |
| Blocking findings | 5 |
| Warnings | 20 |
| Records | 18 (PASS:17, FAIL:1) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260724-152430-8561b1` |
| Generated | 2026-07-24T15:34:49.941Z |
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
  - primary: warm agent spent 17221ms before provider work, over threshold 10000ms
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: warm agent spent 17221ms before provider work, over threshold 10000ms
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
- BLOCKING agent-cold-warm-message/mock-openai-provider: warm agent spent 17221ms before provider work, over threshold 10000ms
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
| fresh-install/fresh | 3 | PASS:3 | 6368ms | 948.8MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 6237ms | 945MB | n/a | 157% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5138ms | 929.6MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5051ms | 943MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:2, FAIL:1 | n/a | 0MB | n/a | 172.4% | 5198ms | 5555ms | 4813ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5696ms | 951MB | n/a | 157% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 6668ms | 948.8 MB | 1655 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 6368ms | 974 MB | 1685.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 6216ms | 948.3 MB | 1585.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5428ms | 961.4 MB | 1671.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 6237ms | 940 MB | 1604.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 6320ms | 945 MB | 1633.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5188ms | 952.1 MB | 957.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5069ms | 919 MB | 924.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5138ms | 929.6 MB | 935.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5318ms | 930.7 MB | 1394.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5051ms | 943 MB | 1411.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 4999ms | 944.8 MB | 1415.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 954.8 MB | 5172ms | 5555ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 982.3 MB | 5856ms | 5352ms |  |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 958.1 MB | 5198ms | 17992ms | warm agent spent 17221ms before provider work, over threshold 10000ms |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5696ms | 951 MB | 1673.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 6783ms | 948 MB | 1625.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5670ms | 952.5 MB | 1666.9 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 982.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 982.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 982.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 974 MB (scenario fresh-install/fresh); CPU 160% (scenario fresh-install/fresh)
- plugin-cli: RSS 711.5 MB (scenario fresh-install/fresh); CPU 172% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 974 MB (scenario fresh-install/fresh); CPU 160% (scenario fresh-install/fresh)
- status-cli: RSS 750.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171% (scenario fresh-install/onboarded-user)
- model-cli: RSS 608 MB (scenario gateway-performance/many-bundled-plugins); CPU 164% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-agent-cold-warm-message-8e2a29af-kova-260724-152430-8561b1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 954.8 MB; tracked total 954.8 MB; max CPU 160.6%; samples 18; roles agent-cli 954.8MB/160.6%, command-tree 954.8MB/170.9%, agent-process 954.8MB/160.6%, status-cli 718.6MB/170.9%
- agent: turn 5555ms; cold/warm 5172ms/5555ms; cold-warm delta 0ms; pre-provider 5196ms; provider 2ms; metadata scans 14 (321.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5535.85ms; max 5555ms; pre-provider p95 5176.85ms
- agent CLI attribution: cold known 140ms / unattributed 4673ms; warm known 182ms / unattributed 5014ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 92.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5172ms; pre-provider 4813ms; provider 3ms; post-provider 356ms; response true
    - active window: metadata scans 7 (140.2ms total, max 68.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4813ms; provider 3ms; post-provider 356ms; unknown 4214.52ms; source plugins.metadata.scan 598.48ms
  - warm: total 5555ms; pre-provider 5196ms; provider 2ms; post-provider 357ms; response true
    - active window: metadata scans 7 (181.56ms total, max 84.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5196ms; provider 2ms; post-provider 357ms; unknown 4597.52ms; source plugins.metadata.scan 598.48ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4813 ms | 140 ms | 4673 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-agent-cold-warm-message-8e2a29af-kova-260724-152430-8561b1/openclaw/timeline.jsonl |
  | warm | 5196 ms | 182 ms | 5014 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-agent-cold-warm-message-8e2a29af-kova-260724-152430-8561b1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 140 ms | 68 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 182 ms | 85 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-agent-cold-warm-message-2ab680e0-kova-260724-152430-8561b1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 982.3 MB; tracked total 982.3 MB; max CPU 172.4%; samples 18; roles agent-cli 982.3MB/172.4%, agent-process 982.3MB/172.4%, command-tree 982.3MB/172.4%, status-cli 728.2MB/156.9%
- agent: turn 5856ms; cold/warm 5856ms/5352ms; cold-warm delta 504ms; pre-provider 5488ms; provider 4ms; metadata scans 14 (343.04ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5830.8ms; max 5856ms; pre-provider p95 5468.2ms
- agent CLI attribution: cold known 137ms / unattributed 5351ms; warm known 209ms / unattributed 4883ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 77.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5856ms; pre-provider 5488ms; provider 4ms; post-provider 364ms; response true
    - active window: metadata scans 7 (135.16ms total, max 62.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5488ms; provider 4ms; post-provider 364ms; unknown 4912.1ms; source plugins.metadata.scan 575.9ms
  - warm: total 5352ms; pre-provider 5092ms; provider 1ms; post-provider 259ms; response true
    - active window: metadata scans 7 (207.88ms total, max 70.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5092ms; provider 1ms; post-provider 259ms; unknown 4516.1ms; source plugins.metadata.scan 575.9ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5488 ms | 137 ms | 5351 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-agent-cold-warm-message-2ab680e0-kova-260724-152430-8561b1/openclaw/timeline.jsonl |
  | warm | 5092 ms | 209 ms | 4883 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-agent-cold-warm-message-2ab680e0-kova-260724-152430-8561b1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 209 ms | 70 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-agent-cold-warm-message-67b331a3-kova-260724-152430-8561b1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 958.1 MB; tracked total 958.1 MB; max CPU 183%; samples 30; roles agent-cli 958.1MB/183%, agent-process 958.1MB/183%, command-tree 958.1MB/183%, status-cli 750.6MB/165.3%
- agent: turn 17992ms; cold/warm 5198ms/17992ms; cold-warm delta 0ms; pre-provider 17221ms; provider 4ms; metadata scans 14 (555.65ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 17352.3ms; max 17992ms; pre-provider p95 16591.45ms
- agent CLI attribution: cold known 145ms / unattributed 4485ms; warm known 410ms / unattributed 16811ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 175.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - warm agent spent 17221ms before provider work, over threshold 10000ms
  - warm agent turn took 17992ms, over threshold 15000ms
  - warm pre-provider latency was 17221ms, over threshold 10000ms
  - warm provider was fast (4ms), but OpenClaw spent 17221ms before provider work.
- Agent turns:
  - cold: total 5198ms; pre-provider 4630ms; provider 3ms; post-provider 565ms; response true
    - active window: metadata scans 7 (146.79ms total, max 60.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4630ms; provider 3ms; post-provider 565ms; unknown 3837.45ms; source plugins.metadata.scan 792.55ms
  - warm: total 17992ms; pre-provider 17221ms; provider 4ms; post-provider 767ms; response true
    - active window: metadata scans 7 (408.86ms total, max 175.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 17221ms; provider 4ms; post-provider 767ms; unknown 16428.45ms; source plugins.metadata.scan 792.55ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4630 ms | 145 ms | 4485 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-agent-cold-warm-message-67b331a3-kova-260724-152430-8561b1/openclaw/timeline.jsonl |
  | warm | 17221 ms | 410 ms | 16811 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-agent-cold-warm-message-67b331a3-kova-260724-152430-8561b1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 145 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 410 ms | 176 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-152430-8561b1-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-152430-8561b1-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-152430-8561b1-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-fresh-install-fresh-r1-697fad55-kova-260724-152430-8561b1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-fresh-install-fresh-r2-da880701-kova-260724-152430-8561b1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-152430-8561b1
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-fresh-install-onboarded-9f99e904-kova-260724-152430-8561b1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-fresh-install-onboarded-f9c24855-kova-260724-152430-8561b1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-fresh-install-onboarded-fe872c26-kova-260724-152430-8561b1
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-152430-8561b1
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-152430-8561b1
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-152430-8561b1/kova-bundled-runtime-deps-mi-150715ba-kova-260724-152430-8561b1
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrz3ch24-41y-0c1cbc0e`
- Result: removed
- Duration: 614ms

