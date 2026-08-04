# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1060.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1060.7 MB, gateway-tree 1060.7 MB, command-tree 475.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1060.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1060.7 MB, gateway-tree 1060.7 MB, command-tree 475.2 MB |
| Blocking findings | 4 |
| Warnings | 20 |
| Records | 15 (PASS:13, FAIL:2) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260804-075712-6ed017` |
| Generated | 2026-08-04T08:05:57.387Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 15 |
| Scenarios | 4 |
| States | 4 |
| PASS | 13 |
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
  - primary: gateway peak RSS 1060.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1060.7 MB, gateway-tree 1060.7 MB, command-tree 475.2 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1060.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1060.7 MB, gateway-tree 1060.7 MB, command-tree 475.2 MB
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
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1060.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1060.7 MB, gateway-tree 1060.7 MB, command-tree 475.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1052.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1052.9 MB, gateway-tree 1052.9 MB, command-tree 475.1 MB
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
| info | Kova | report | 12 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5200ms | 995.8MB | n/a | 163% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5017ms | 993.7MB | n/a | 156% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5205ms | 976.9MB | n/a | 163% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 168% | 3993ms | 5536ms | 3824ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:1, FAIL:2 | 7944ms | 1052.9MB | n/a | 167% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5538ms | 912.4 MB | 1693.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5200ms | 999.6 MB | 1718.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5127ms | 995.8 MB | 1762.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5237ms | 993.7 MB | 1777.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5017ms | 916.8 MB | 1690.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4912ms | 994.4 MB | 1809.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5205ms | 976.9 MB | 1754.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 4991ms | 987 MB | 1767.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5766ms | 971.8 MB | 1752.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1123.8 MB | 3845ms | 4226ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1104.6 MB | 3993ms | 5536ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1134.9 MB | 6311ms | 6850ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 8269ms | 970.6 MB | 1467.2 MB | n/a | n/a |  |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 7944ms | 1060.7 MB | 1526.6 MB | n/a | n/a | gateway peak RSS 1060.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1060.7 MB, gateway-tree 1060.7 MB, command-tree 475.2 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 7342ms | 1052.9 MB | 1542.2 MB | n/a | n/a | gateway peak RSS 1052.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1052.9 MB, gateway-tree 1052.9 MB, command-tree 475.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1061.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1060.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 168% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 649.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1060.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 168% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 482.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 201.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 886 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 469.9 MB (scenario fresh-install/onboarded-user); CPU 180% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 759.2 MB (scenario fresh-install/onboarded-user); CPU 162% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-agent-cold-warm-message-8e2a29af-kova-260804-075712-6ed017
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 875.1 MB; tracked total 1123.8 MB; max CPU 161%; samples 14; roles command-tree 1050.1MB/189.2%, agent-process 875.1MB/161%, status-cli 602.4MB/189.2%, agent-cli 176MB/31.4%
- agent: turn 4226ms; cold/warm 3845ms/4226ms; cold-warm delta 0ms; pre-provider 4068ms; provider 1ms; metadata scans 12 (197.02ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4206.95ms; max 4226ms; pre-provider p95 4049.8ms
- agent CLI attribution: cold known 274ms / unattributed 3430ms; warm known 253ms / unattributed 3815ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1448.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3845ms; pre-provider 3704ms; provider 2ms; post-provider 139ms; response true
    - active window: metadata scans 6 (100.68ms total, max 38.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3704ms; provider 2ms; post-provider 139ms; unknown 2963.34ms; source plugins.metadata.scan 413.56ms; agent.prepare 327.1ms
  - warm: total 4226ms; pre-provider 4068ms; provider 1ms; post-provider 157ms; response true
    - active window: metadata scans 6 (96.34ms total, max 45.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4068ms; provider 1ms; post-provider 157ms; unknown 3327.34ms; source plugins.metadata.scan 413.56ms; agent.prepare 327.1ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3704 ms | 274 ms | 3430 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-agent-cold-warm-message-8e2a29af-kova-260804-075712-6ed017/openclaw/timeline.jsonl |
  | warm | 4068 ms | 253 ms | 3815 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-agent-cold-warm-message-8e2a29af-kova-260804-075712-6ed017/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 173 ms | 54 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 101 ms | 39 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 155 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 98 ms | 46 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-agent-cold-warm-message-2ab680e0-kova-260804-075712-6ed017
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 857.6 MB; tracked total 1104.6 MB; max CPU 168%; samples 16; roles command-tree 1033.2MB/212.1%, agent-process 857.6MB/168%, status-cli 649.1MB/212.1%, agent-cli 176MB/30.5%
- agent: turn 5536ms; cold/warm 3993ms/5536ms; cold-warm delta 0ms; pre-provider 5246ms; provider 2ms; metadata scans 12 (252.32ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5458.85ms; max 5536ms; pre-provider p95 5174.9ms
- agent CLI attribution: cold known 245ms / unattributed 3579ms; warm known 401ms / unattributed 4845ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1862.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3993ms; pre-provider 3824ms; provider 2ms; post-provider 167ms; response true
    - active window: metadata scans 6 (91.09ms total, max 35.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3824ms; provider 2ms; post-provider 167ms; unknown 2892.46ms; source plugins.metadata.scan 535.28ms; agent.prepare 396.26ms
  - warm: total 5536ms; pre-provider 5246ms; provider 2ms; post-provider 288ms; response true
    - active window: metadata scans 6 (161.23ms total, max 43.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5246ms; provider 2ms; post-provider 288ms; unknown 4314.46ms; source plugins.metadata.scan 535.28ms; agent.prepare 396.26ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3824 ms | 245 ms | 3579 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-agent-cold-warm-message-2ab680e0-kova-260804-075712-6ed017/openclaw/timeline.jsonl |
  | warm | 5246 ms | 401 ms | 4845 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-agent-cold-warm-message-2ab680e0-kova-260804-075712-6ed017/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 156 ms | 56 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 89 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 240 ms | 78 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 161 ms | 43 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-agent-cold-warm-message-67b331a3-kova-260804-075712-6ed017
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 886 MB; tracked total 1134.9 MB; max CPU 171%; samples 20; roles command-tree 1061.9MB/203.8%, agent-process 886MB/171%, status-cli 607.6MB/203.8%, agent-cli 482.6MB/201.4%
- agent: turn 6850ms; cold/warm 6311ms/6850ms; cold-warm delta 0ms; pre-provider 6540ms; provider 3ms; metadata scans 12 (339.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6823.05ms; max 6850ms; pre-provider p95 6515.55ms
- agent CLI attribution: cold known 357ms / unattributed 5694ms; warm known 410ms / unattributed 6130ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2438.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6311ms; pre-provider 6051ms; provider 4ms; post-provider 256ms; response true
    - active window: metadata scans 6 (146.35ms total, max 50.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6051ms; provider 4ms; post-provider 256ms; unknown 4929.08ms; source plugins.metadata.scan 698.01ms; agent.prepare 423.91ms
  - warm: total 6850ms; pre-provider 6540ms; provider 3ms; post-provider 307ms; response true
    - active window: metadata scans 6 (193.18ms total, max 86.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6540ms; provider 3ms; post-provider 307ms; unknown 5418.08ms; source plugins.metadata.scan 698.01ms; agent.prepare 423.91ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6051 ms | 357 ms | 5694 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-agent-cold-warm-message-67b331a3-kova-260804-075712-6ed017/openclaw/timeline.jsonl |
  | warm | 6540 ms | 410 ms | 6130 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-agent-cold-warm-message-67b331a3-kova-260804-075712-6ed017/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 210 ms | 71 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 147 ms | 51 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 215 ms | 77 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 195 ms | 87 ms |

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-gateway-performance-man-1e8be6a8-kova-260804-075712-6ed017
Measurements:
- startup: listening 7579ms; health 7944ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 5ms; post-ready p95 4ms; failures 47; final failures 0; slowest startup-sample/warm-restart 527ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1060.7 MB; tracked total 1526.6 MB; max CPU 167%; samples 22; roles gateway 1060.7MB/167%, command-tree 475.2MB/179%, gateway-tree 1060.7MB/167%, model-cli 426.7MB/179%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 3067.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1060.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1060.7 MB, gateway-tree 1060.7 MB, command-tree 475.2 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-gateway-performance-man-958fde53-kova-260804-075712-6ed017
Measurements:
- startup: listening 6806ms; health 7342ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 2ms; post-ready p95 3ms; failures 44; final failures 0; slowest startup-sample/warm-restart 676ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1052.9 MB; tracked total 1542.2 MB; max CPU 168%; samples 20; roles gateway 1052.9MB/168%, gateway-tree 1052.9MB/168%, command-tree 475.1MB/163%, status-cli 475.1MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 3214.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1052.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1052.9 MB, gateway-tree 1052.9 MB, command-tree 475.1 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260804-075712-6ed017-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260804-075712-6ed017-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260804-075712-6ed017-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-fresh-install-fresh-r1-697fad55-kova-260804-075712-6ed017
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-fresh-install-fresh-r2-da880701-kova-260804-075712-6ed017
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-fresh-install-fresh-r3-82f8bdbd-kova-260804-075712-6ed017
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-fresh-install-onboarded-9f99e904-kova-260804-075712-6ed017
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-fresh-install-onboarded-f9c24855-kova-260804-075712-6ed017
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-fresh-install-onboarded-fe872c26-kova-260804-075712-6ed017
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-bundled-plugin-startup-4a0cbdf7-kova-260804-075712-6ed017
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-bundled-plugin-startup-809ede2b-kova-260804-075712-6ed017
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-075712-6ed017/kova-bundled-plugin-startup-5377119f-kova-260804-075712-6ed017
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msed7lsv-3yo-88740891`
- Result: removed
- Duration: 508ms

