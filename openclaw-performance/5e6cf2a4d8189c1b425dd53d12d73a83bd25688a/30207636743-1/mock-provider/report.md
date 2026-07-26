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
| Run ID | `kova-260726-151144-99e2c4` |
| Generated | 2026-07-26T15:19:27.331Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5268ms | 905MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5295ms | 910.7MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5156ms | 956.1MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5181ms | 970.8MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.9% | 4693ms | 4675ms | 4166ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5207ms | 994MB | n/a | 154% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5778ms | 905.4 MB | 1695.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5133ms | 905 MB | 1703.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5268ms | 888.9 MB | 1674 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5311ms | 904.4 MB | 1731.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5295ms | 912.5 MB | 1699.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5200ms | 910.7 MB | 1663.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5146ms | 988.3 MB | 993.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5156ms | 949.6 MB | 949.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5248ms | 956.1 MB | 956.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5164ms | 951.6 MB | 1321 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5181ms | 970.8 MB | 1357.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5218ms | 984.2 MB | 1441.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 891.7 MB | 4773ms | 4701ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 872 MB | 4693ms | 4675ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 875.4 MB | 4680ms | 4661ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5208ms | 994 MB | 1790 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5207ms | 966 MB | 1633.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5174ms | 1013.5 MB | 1734.3 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1013.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 1013.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-cli: RSS 891.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 891.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 891.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 850.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 634 MB (scenario fresh-install/onboarded-user); CPU 144% (scenario fresh-install/fresh)
- plugin-cli: RSS 458.9 MB (scenario fresh-install/onboarded-user); CPU 148% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-agent-cold-warm-message-8e2a29af-kova-260726-151144-99e2c4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 891.7 MB; tracked total 891.7 MB; max CPU 152.9%; samples 16; roles agent-cli 891.7MB/152.9%, agent-process 891.7MB/152.9%, command-tree 891.7MB/152.9%, status-cli 786.9MB/151.9%
- agent: turn 4773ms; cold/warm 4773ms/4701ms; cold-warm delta 72ms; pre-provider 4228ms; provider 3ms; metadata scans 14 (256.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4769.4ms; max 4773ms; pre-provider p95 4227.8ms
- agent CLI attribution: cold known 130ms / unattributed 4098ms; warm known 126ms / unattributed 4098ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4773ms; pre-provider 4228ms; provider 3ms; post-provider 542ms; response true
    - active window: metadata scans 7 (130.97ms total, max 55.4ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4228ms; provider 3ms; post-provider 542ms; unknown 3841.6ms; source plugins.metadata.scan 386.4ms
  - warm: total 4701ms; pre-provider 4224ms; provider 1ms; post-provider 476ms; response true
    - active window: metadata scans 7 (125.59ms total, max 63.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4224ms; provider 1ms; post-provider 476ms; unknown 3837.6ms; source plugins.metadata.scan 386.4ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4228 ms | 130 ms | 4098 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-agent-cold-warm-message-8e2a29af-kova-260726-151144-99e2c4/openclaw/timeline.jsonl |
  | warm | 4224 ms | 126 ms | 4098 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-agent-cold-warm-message-8e2a29af-kova-260726-151144-99e2c4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 63 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-agent-cold-warm-message-2ab680e0-kova-260726-151144-99e2c4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 872 MB; tracked total 872 MB; max CPU 151.9%; samples 16; roles agent-cli 872MB/151.9%, agent-process 872MB/151.9%, command-tree 872MB/151.9%, status-cli 810.6MB/150.9%
- agent: turn 4693ms; cold/warm 4693ms/4675ms; cold-warm delta 18ms; pre-provider 4166ms; provider 2ms; metadata scans 14 (244.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4692.1ms; max 4693ms; pre-provider p95 4175.5ms
- agent CLI attribution: cold known 123ms / unattributed 4043ms; warm known 123ms / unattributed 4053ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4693ms; pre-provider 4166ms; provider 2ms; post-provider 525ms; response true
    - active window: metadata scans 7 (122.35ms total, max 55.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4166ms; provider 2ms; post-provider 525ms; unknown 3788.34ms; source plugins.metadata.scan 377.66ms
  - warm: total 4675ms; pre-provider 4176ms; provider 1ms; post-provider 498ms; response true
    - active window: metadata scans 7 (122.39ms total, max 54.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4176ms; provider 1ms; post-provider 498ms; unknown 3798.34ms; source plugins.metadata.scan 377.66ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4166 ms | 123 ms | 4043 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-agent-cold-warm-message-2ab680e0-kova-260726-151144-99e2c4/openclaw/timeline.jsonl |
  | warm | 4176 ms | 123 ms | 4053 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-agent-cold-warm-message-2ab680e0-kova-260726-151144-99e2c4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 55 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-agent-cold-warm-message-67b331a3-kova-260726-151144-99e2c4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 875.4 MB; tracked total 875.4 MB; max CPU 152.9%; samples 16; roles agent-cli 875.4MB/152.9%, agent-process 875.4MB/152.9%, command-tree 875.4MB/152.9%, status-cli 850.6MB/151.8%
- agent: turn 4680ms; cold/warm 4680ms/4661ms; cold-warm delta 19ms; pre-provider 4143ms; provider 2ms; metadata scans 14 (257.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4679.05ms; max 4680ms; pre-provider p95 4173.4ms
- agent CLI attribution: cold known 130ms / unattributed 4013ms; warm known 127ms / unattributed 4048ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4680ms; pre-provider 4143ms; provider 2ms; post-provider 535ms; response true
    - active window: metadata scans 7 (130.64ms total, max 56.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4143ms; provider 2ms; post-provider 535ms; unknown 3751.31ms; source plugins.metadata.scan 391.69ms
  - warm: total 4661ms; pre-provider 4175ms; provider 1ms; post-provider 485ms; response true
    - active window: metadata scans 7 (126.9ms total, max 60.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4175ms; provider 1ms; post-provider 485ms; unknown 3783.31ms; source plugins.metadata.scan 391.69ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4143 ms | 130 ms | 4013 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-agent-cold-warm-message-67b331a3-kova-260726-151144-99e2c4/openclaw/timeline.jsonl |
  | warm | 4175 ms | 127 ms | 4048 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-agent-cold-warm-message-67b331a3-kova-260726-151144-99e2c4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-151144-99e2c4-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-151144-99e2c4-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-151144-99e2c4-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-fresh-install-fresh-r1-697fad55-kova-260726-151144-99e2c4
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-fresh-install-fresh-r2-da880701-kova-260726-151144-99e2c4
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-fresh-install-fresh-r3-82f8bdbd-kova-260726-151144-99e2c4
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-fresh-install-onboarded-9f99e904-kova-260726-151144-99e2c4
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-fresh-install-onboarded-f9c24855-kova-260726-151144-99e2c4
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-fresh-install-onboarded-fe872c26-kova-260726-151144-99e2c4
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-151144-99e2c4
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-151144-99e2c4
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-151144-99e2c4/kova-bundled-runtime-deps-mi-150715ba-kova-260726-151144-99e2c4
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms1xrrrk-42a-9fb2f3de`
- Result: removed
- Duration: 409ms

