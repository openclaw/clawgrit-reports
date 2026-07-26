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
| Run ID | `kova-260726-113628-d6daad` |
| Generated | 2026-07-26T11:44:12.346Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5187ms | 979.7MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5189ms | 1008.9MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5207ms | 960.4MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5193ms | 948MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.9% | 4686ms | 4723ms | 4139ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5195ms | 989.1MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5787ms | 907.7 MB | 1701.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5178ms | 1008.9 MB | 1800.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5187ms | 979.7 MB | 1767.2 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5188ms | 1011.5 MB | 1801.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5189ms | 889.6 MB | 1609.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5257ms | 1008.9 MB | 1732 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5207ms | 969.3 MB | 969.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5232ms | 960.4 MB | 960.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5177ms | 933.1 MB | 933.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5147ms | 948 MB | 1369 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5193ms | 947.3 MB | 1353.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5195ms | 969.2 MB | 1335.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 946.3 MB | 4686ms | 4652ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 961.1 MB | 4719ms | 4774ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 881.7 MB | 4680ms | 4723ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5195ms | 989.1 MB | 1711.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5203ms | 983.6 MB | 1617.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5191ms | 1015.5 MB | 1804.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1015.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 1015.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario bundled-plugin-startup/fresh)
- agent-cli: RSS 961.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 961.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 961.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 858.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 572.4 MB (scenario fresh-install/fresh); CPU 144% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 456.9 MB (scenario bundled-plugin-startup/fresh); CPU 147% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-agent-cold-warm-message-8e2a29af-kova-260726-113628-d6daad
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 946.3 MB; tracked total 946.3 MB; max CPU 152.9%; samples 16; roles agent-cli 946.3MB/152.9%, agent-process 946.3MB/152.9%, command-tree 946.3MB/152.9%, status-cli 788.3MB/147.4%
- agent: turn 4686ms; cold/warm 4686ms/4652ms; cold-warm delta 34ms; pre-provider 4139ms; provider 2ms; metadata scans 14 (249.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4684.3ms; max 4686ms; pre-provider p95 4154.2ms
- agent CLI attribution: cold known 121ms / unattributed 4018ms; warm known 130ms / unattributed 4025ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4686ms; pre-provider 4139ms; provider 2ms; post-provider 545ms; response true
    - active window: metadata scans 7 (120.7ms total, max 57.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4139ms; provider 2ms; post-provider 545ms; unknown 3758.8ms; source plugins.metadata.scan 380.2ms
  - warm: total 4652ms; pre-provider 4155ms; provider 1ms; post-provider 496ms; response true
    - active window: metadata scans 7 (128.83ms total, max 62.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4155ms; provider 1ms; post-provider 496ms; unknown 3774.8ms; source plugins.metadata.scan 380.2ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4139 ms | 121 ms | 4018 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-agent-cold-warm-message-8e2a29af-kova-260726-113628-d6daad/openclaw/timeline.jsonl |
  | warm | 4155 ms | 130 ms | 4025 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-agent-cold-warm-message-8e2a29af-kova-260726-113628-d6daad/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 62 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-agent-cold-warm-message-2ab680e0-kova-260726-113628-d6daad
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 961.1 MB; tracked total 961.1 MB; max CPU 153.4%; samples 16; roles agent-cli 961.1MB/153.4%, agent-process 961.1MB/153.4%, command-tree 961.1MB/153.4%, status-cli 794.1MB/153.4%
- agent: turn 4774ms; cold/warm 4719ms/4774ms; cold-warm delta 0ms; pre-provider 4274ms; provider 1ms; metadata scans 14 (247.68ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4771.25ms; max 4774ms; pre-provider p95 4269.35ms
- agent CLI attribution: cold known 123ms / unattributed 4058ms; warm known 126ms / unattributed 4148ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4719ms; pre-provider 4181ms; provider 3ms; post-provider 535ms; response true
    - active window: metadata scans 7 (121.61ms total, max 56.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4181ms; provider 3ms; post-provider 535ms; unknown 3805.73ms; source plugins.metadata.scan 375.27ms
  - warm: total 4774ms; pre-provider 4274ms; provider 1ms; post-provider 499ms; response true
    - active window: metadata scans 7 (126.07ms total, max 62.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4274ms; provider 1ms; post-provider 499ms; unknown 3898.73ms; source plugins.metadata.scan 375.27ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4181 ms | 123 ms | 4058 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-agent-cold-warm-message-2ab680e0-kova-260726-113628-d6daad/openclaw/timeline.jsonl |
  | warm | 4274 ms | 126 ms | 4148 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-agent-cold-warm-message-2ab680e0-kova-260726-113628-d6daad/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-agent-cold-warm-message-67b331a3-kova-260726-113628-d6daad
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 881.7 MB; tracked total 881.7 MB; max CPU 152.9%; samples 16; roles agent-cli 881.7MB/152.9%, agent-process 881.7MB/152.9%, command-tree 881.7MB/152.9%, status-cli 858.5MB/151.9%
- agent: turn 4723ms; cold/warm 4680ms/4723ms; cold-warm delta 0ms; pre-provider 4223ms; provider 1ms; metadata scans 14 (250.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4720.85ms; max 4723ms; pre-provider p95 4218.6ms
- agent CLI attribution: cold known 128ms / unattributed 4007ms; warm known 123ms / unattributed 4100ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4680ms; pre-provider 4135ms; provider 2ms; post-provider 543ms; response true
    - active window: metadata scans 7 (127.69ms total, max 57.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4135ms; provider 2ms; post-provider 543ms; unknown 3758.72ms; source plugins.metadata.scan 376.28ms
  - warm: total 4723ms; pre-provider 4223ms; provider 1ms; post-provider 499ms; response true
    - active window: metadata scans 7 (122.42ms total, max 61.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4223ms; provider 1ms; post-provider 499ms; unknown 3846.72ms; source plugins.metadata.scan 376.28ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4135 ms | 128 ms | 4007 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-agent-cold-warm-message-67b331a3-kova-260726-113628-d6daad/openclaw/timeline.jsonl |
  | warm | 4223 ms | 123 ms | 4100 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-agent-cold-warm-message-67b331a3-kova-260726-113628-d6daad/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-113628-d6daad-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-113628-d6daad-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-113628-d6daad-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-fresh-install-fresh-r1-697fad55-kova-260726-113628-d6daad
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-fresh-install-fresh-r2-da880701-kova-260726-113628-d6daad
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-fresh-install-fresh-r3-82f8bdbd-kova-260726-113628-d6daad
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-fresh-install-onboarded-9f99e904-kova-260726-113628-d6daad
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-fresh-install-onboarded-f9c24855-kova-260726-113628-d6daad
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-fresh-install-onboarded-fe872c26-kova-260726-113628-d6daad
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-113628-d6daad
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-113628-d6daad
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-113628-d6daad/kova-bundled-runtime-deps-mi-150715ba-kova-260726-113628-d6daad
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms1q2xmh-41y-bbf082db`
- Result: removed
- Duration: 389ms

