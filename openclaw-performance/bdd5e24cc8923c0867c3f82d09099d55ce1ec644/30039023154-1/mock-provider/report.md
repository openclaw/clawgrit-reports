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
| Run ID | `kova-260723-194308-99d2c2` |
| Generated | 2026-07-23T19:51:21.256Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3364ms | 923.4MB | n/a | 146% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3074ms | 924.5MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3263ms | 924.1MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2898ms | 923.8MB | n/a | 140% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.9% | 4600ms | 4455ms | 4265ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3883ms | 924.1MB | n/a | 157% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3955ms | 915.8 MB | 1645.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3263ms | 923.4 MB | 1699.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3364ms | 924.5 MB | 1702.1 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3012ms | 923.3 MB | 1667.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3074ms | 924.5 MB | 1690 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3093ms | 926.3 MB | 1710.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3049ms | 924.1 MB | 929 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3263ms | 915.7 MB | 920.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3279ms | 925.1 MB | 925.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3308ms | 919.3 MB | 1453.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2896ms | 925.2 MB | 1460.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2898ms | 923.8 MB | 1458.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 950.4 MB | 4600ms | 4803ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 953.1 MB | 4793ms | 4407ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 988 MB | 4289ms | 4455ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3883ms | 924.1 MB | 1661.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3707ms | 938.3 MB | 1679.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4154ms | 924 MB | 1668.6 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 988 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 988 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 988 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 776.3 MB (scenario fresh-install/fresh); CPU 170% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 784.8 MB (scenario fresh-install/onboarded-user); CPU 165.5% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 938.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 607.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 160.9% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 926.3 MB (scenario fresh-install/onboarded-user); CPU 157% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-agent-cold-warm-message-8e2a29af-kova-260723-194308-99d2c2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 950.4 MB; tracked total 950.4 MB; max CPU 156.9%; samples 16; roles agent-cli 950.4MB/156.9%, agent-process 950.4MB/156.9%, command-tree 950.4MB/156.9%, status-cli 723MB/154.7%
- agent: turn 4803ms; cold/warm 4600ms/4803ms; cold-warm delta 0ms; pre-provider 4519ms; provider 1ms; metadata scans 14 (271.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4792.85ms; max 4803ms; pre-provider p95 4506.3ms
- agent CLI attribution: cold known 130ms / unattributed 4135ms; warm known 143ms / unattributed 4376ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4600ms; pre-provider 4265ms; provider 4ms; post-provider 331ms; response true
    - active window: metadata scans 7 (129.74ms total, max 55.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4265ms; provider 4ms; post-provider 331ms; unknown 3760.21ms; source plugins.metadata.scan 504.79ms
  - warm: total 4803ms; pre-provider 4519ms; provider 1ms; post-provider 283ms; response true
    - active window: metadata scans 7 (141.9ms total, max 69.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4519ms; provider 1ms; post-provider 283ms; unknown 4014.21ms; source plugins.metadata.scan 504.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4265 ms | 130 ms | 4135 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-agent-cold-warm-message-8e2a29af-kova-260723-194308-99d2c2/openclaw/timeline.jsonl |
  | warm | 4519 ms | 143 ms | 4376 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-agent-cold-warm-message-8e2a29af-kova-260723-194308-99d2c2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 143 ms | 70 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-agent-cold-warm-message-2ab680e0-kova-260723-194308-99d2c2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 953.1 MB; tracked total 953.1 MB; max CPU 156.9%; samples 15; roles agent-cli 953.1MB/156.9%, agent-process 953.1MB/156.9%, command-tree 953.1MB/156.9%, status-cli 556.2MB/151.8%
- agent: turn 4793ms; cold/warm 4793ms/4407ms; cold-warm delta 386ms; pre-provider 4484ms; provider 3ms; metadata scans 14 (288.1ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4773.7ms; max 4793ms; pre-provider p95 4468.4ms
- agent CLI attribution: cold known 140ms / unattributed 4344ms; warm known 150ms / unattributed 4022ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4793ms; pre-provider 4484ms; provider 3ms; post-provider 306ms; response true
    - active window: metadata scans 7 (138.39ms total, max 62.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4484ms; provider 3ms; post-provider 306ms; unknown 3994.08ms; source plugins.metadata.scan 489.92ms
  - warm: total 4407ms; pre-provider 4172ms; provider 1ms; post-provider 234ms; response true
    - active window: metadata scans 7 (149.71ms total, max 67.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4172ms; provider 1ms; post-provider 234ms; unknown 3682.08ms; source plugins.metadata.scan 489.92ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4484 ms | 140 ms | 4344 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-agent-cold-warm-message-2ab680e0-kova-260723-194308-99d2c2/openclaw/timeline.jsonl |
  | warm | 4172 ms | 150 ms | 4022 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-agent-cold-warm-message-2ab680e0-kova-260723-194308-99d2c2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 140 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 150 ms | 68 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-agent-cold-warm-message-67b331a3-kova-260723-194308-99d2c2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 988 MB; tracked total 988 MB; max CPU 156.6%; samples 16; roles agent-cli 988MB/156.6%, command-tree 988MB/159.7%, agent-process 988MB/156.6%, status-cli 740.8MB/159.7%
- agent: turn 4455ms; cold/warm 4289ms/4455ms; cold-warm delta 0ms; pre-provider 4180ms; provider 1ms; metadata scans 14 (264.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4446.7ms; max 4455ms; pre-provider p95 4170.9ms
- agent CLI attribution: cold known 124ms / unattributed 3874ms; warm known 142ms / unattributed 4038ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.09ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4289ms; pre-provider 3998ms; provider 2ms; post-provider 289ms; response true
    - active window: metadata scans 7 (123.49ms total, max 57.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3998ms; provider 2ms; post-provider 289ms; unknown 3528.42ms; source plugins.metadata.scan 469.58ms
  - warm: total 4455ms; pre-provider 4180ms; provider 1ms; post-provider 274ms; response true
    - active window: metadata scans 7 (140.6ms total, max 60.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4180ms; provider 1ms; post-provider 274ms; unknown 3710.42ms; source plugins.metadata.scan 469.58ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3998 ms | 124 ms | 3874 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-agent-cold-warm-message-67b331a3-kova-260723-194308-99d2c2/openclaw/timeline.jsonl |
  | warm | 4180 ms | 142 ms | 4038 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-agent-cold-warm-message-67b331a3-kova-260723-194308-99d2c2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 124 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-194308-99d2c2-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-194308-99d2c2-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-194308-99d2c2-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-fresh-install-fresh-r1-697fad55-kova-260723-194308-99d2c2
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-fresh-install-fresh-r2-da880701-kova-260723-194308-99d2c2
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-194308-99d2c2
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-fresh-install-onboarded-9f99e904-kova-260723-194308-99d2c2
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-fresh-install-onboarded-f9c24855-kova-260723-194308-99d2c2
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-fresh-install-onboarded-fe872c26-kova-260723-194308-99d2c2
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-194308-99d2c2
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-194308-99d2c2
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-194308-99d2c2/kova-bundled-runtime-deps-mi-150715ba-kova-260723-194308-99d2c2
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxx57uu-418-25c01520`
- Result: removed
- Duration: 566ms

