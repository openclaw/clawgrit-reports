# Kova OpenClaw Runtime Report

> **⚠️ [PARTIAL]** — Required release gate platform coverage linux-arm64 was not present in the report.

## Verdict

| Field | Value |
|---|---|
| Verdict | PARTIAL |
| Reason | Required release gate platform coverage linux-arm64 was not present in the report. |
| Blocking findings | 0 |
| Warnings | 20 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260726-034014-3c0a77` |
| Generated | 2026-07-26T03:47:53.165Z |
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
| PASS | 18 |

## Release Gate

- Verdict: PARTIAL
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 0
- Warnings: 20
- Info: 44

### Subsystems

- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

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
| info | Kova | report | 14 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5246ms | 898.6MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5170ms | 888MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5224ms | 954.9MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5145ms | 967.8MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.9% | 4731ms | 4721ms | 4205ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5175ms | 954.7MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5730ms | 898.6 MB | 1684.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5246ms | 901.3 MB | 1690 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5156ms | 884.2 MB | 1681 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5141ms | 888 MB | 1674.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5170ms | 890.1 MB | 1679.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5229ms | 881.2 MB | 1603.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5224ms | 954.9 MB | 954.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5295ms | 957.9 MB | 957.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5179ms | 946.3 MB | 946.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5130ms | 942.2 MB | 1369.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5172ms | 986.2 MB | 1367.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5145ms | 967.8 MB | 1371.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 881.9 MB | 4664ms | 4700ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 876.1 MB | 4758ms | 4802ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 883.6 MB | 4731ms | 4721ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5195ms | 954.7 MB | 1610.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5175ms | 969.9 MB | 1683.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5166ms | 928.8 MB | 1689.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 986.2 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 915.8 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario bundled-plugin-startup/fresh)
- agent-cli: RSS 883.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 883.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 883.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 861.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 570 MB (scenario fresh-install/onboarded-user); CPU 144% (scenario fresh-install/fresh)
- plugin-cli: RSS 456.1 MB (scenario bundled-plugin-startup/fresh); CPU 146% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-agent-cold-warm-message-8e2a29af-kova-260726-034014-3c0a77
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 881.9 MB; tracked total 881.9 MB; max CPU 152.9%; samples 16; roles agent-cli 881.9MB/152.9%, command-tree 881.9MB/154.7%, agent-process 881.9MB/152.9%, status-cli 861.7MB/154.7%
- agent: turn 4700ms; cold/warm 4664ms/4700ms; cold-warm delta 0ms; pre-provider 4220ms; provider 1ms; metadata scans 14 (251.98ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4698.2ms; max 4700ms; pre-provider p95 4214.9ms
- agent CLI attribution: cold known 125ms / unattributed 3993ms; warm known 128ms / unattributed 4092ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4664ms; pre-provider 4118ms; provider 3ms; post-provider 543ms; response true
    - active window: metadata scans 7 (125.75ms total, max 55.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4118ms; provider 3ms; post-provider 543ms; unknown 3738.22ms; source plugins.metadata.scan 379.78ms
  - warm: total 4700ms; pre-provider 4220ms; provider 1ms; post-provider 479ms; response true
    - active window: metadata scans 7 (126.23ms total, max 63.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4220ms; provider 1ms; post-provider 479ms; unknown 3840.22ms; source plugins.metadata.scan 379.78ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4118 ms | 125 ms | 3993 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-agent-cold-warm-message-8e2a29af-kova-260726-034014-3c0a77/openclaw/timeline.jsonl |
  | warm | 4220 ms | 128 ms | 4092 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-agent-cold-warm-message-8e2a29af-kova-260726-034014-3c0a77/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 64 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-agent-cold-warm-message-2ab680e0-kova-260726-034014-3c0a77
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 876.1 MB; tracked total 876.1 MB; max CPU 153.4%; samples 16; roles agent-cli 876.1MB/153.4%, agent-process 876.1MB/153.4%, command-tree 876.1MB/153.4%, status-cli 806.6MB/146.9%
- agent: turn 4802ms; cold/warm 4758ms/4802ms; cold-warm delta 0ms; pre-provider 4306ms; provider 1ms; metadata scans 14 (258.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4799.8ms; max 4802ms; pre-provider p95 4301.5ms
- agent CLI attribution: cold known 128ms / unattributed 4088ms; warm known 129ms / unattributed 4177ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 66.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4758ms; pre-provider 4216ms; provider 2ms; post-provider 540ms; response true
    - active window: metadata scans 7 (129.03ms total, max 60.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4216ms; provider 2ms; post-provider 540ms; unknown 3824.71ms; source plugins.metadata.scan 391.29ms
  - warm: total 4802ms; pre-provider 4306ms; provider 1ms; post-provider 495ms; response true
    - active window: metadata scans 7 (129.49ms total, max 66.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4306ms; provider 1ms; post-provider 495ms; unknown 3914.71ms; source plugins.metadata.scan 391.29ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4216 ms | 128 ms | 4088 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-agent-cold-warm-message-2ab680e0-kova-260726-034014-3c0a77/openclaw/timeline.jsonl |
  | warm | 4306 ms | 129 ms | 4177 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-agent-cold-warm-message-2ab680e0-kova-260726-034014-3c0a77/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 67 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-agent-cold-warm-message-67b331a3-kova-260726-034014-3c0a77
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 883.6 MB; tracked total 883.6 MB; max CPU 151.9%; samples 16; roles agent-cli 883.6MB/151.9%, agent-process 883.6MB/151.9%, command-tree 883.6MB/151.9%, status-cli 783.9MB/149.9%
- agent: turn 4731ms; cold/warm 4731ms/4721ms; cold-warm delta 10ms; pre-provider 4205ms; provider 3ms; metadata scans 14 (234.77ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4730.5ms; max 4731ms; pre-provider p95 4222.1ms
- agent CLI attribution: cold known 111ms / unattributed 4094ms; warm known 122ms / unattributed 4101ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4731ms; pre-provider 4205ms; provider 3ms; post-provider 523ms; response true
    - active window: metadata scans 7 (113.57ms total, max 49.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4205ms; provider 3ms; post-provider 523ms; unknown 3838.16ms; source plugins.metadata.scan 366.84ms
  - warm: total 4721ms; pre-provider 4223ms; provider 1ms; post-provider 497ms; response true
    - active window: metadata scans 7 (121.2ms total, max 61.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4223ms; provider 1ms; post-provider 497ms; unknown 3856.16ms; source plugins.metadata.scan 366.84ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4205 ms | 111 ms | 4094 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-agent-cold-warm-message-67b331a3-kova-260726-034014-3c0a77/openclaw/timeline.jsonl |
  | warm | 4223 ms | 122 ms | 4101 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-agent-cold-warm-message-67b331a3-kova-260726-034014-3c0a77/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 111 ms | 49 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 122 ms | 62 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-034014-3c0a77-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-034014-3c0a77-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-034014-3c0a77-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-fresh-install-fresh-r1-697fad55-kova-260726-034014-3c0a77
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-fresh-install-fresh-r2-da880701-kova-260726-034014-3c0a77
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-fresh-install-fresh-r3-82f8bdbd-kova-260726-034014-3c0a77
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-fresh-install-onboarded-9f99e904-kova-260726-034014-3c0a77
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-fresh-install-onboarded-f9c24855-kova-260726-034014-3c0a77
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-fresh-install-onboarded-fe872c26-kova-260726-034014-3c0a77
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-034014-3c0a77
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-034014-3c0a77
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-034014-3c0a77/kova-bundled-runtime-deps-mi-150715ba-kova-260726-034014-3c0a77
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms192hm0-44k-b02fcfbc`
- Result: removed
- Duration: 408ms

