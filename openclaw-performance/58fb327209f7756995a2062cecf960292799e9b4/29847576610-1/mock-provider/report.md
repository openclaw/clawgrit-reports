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
| Run ID | `kova-260721-205815-f24074` |
| Generated | 2026-07-21T21:05:15.228Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3418ms | 917.6MB | n/a | 151% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2900ms | 921.1MB | n/a | 156% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2888ms | 901.1MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2963ms | 919.6MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 158.9% | 4099ms | 4144ms | 3743ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3209ms | 909.4MB | n/a | 159% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3478ms | 906.7 MB | 1634.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3418ms | 920.6 MB | 1671.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3236ms | 917.6 MB | 1664.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3115ms | 908.2 MB | 1666.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2900ms | 921.1 MB | 1679.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2668ms | 924.9 MB | 1456.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2749ms | 892.8 MB | 897.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2888ms | 911.6 MB | 916.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3065ms | 901.1 MB | 906 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2901ms | 924.5 MB | 1466.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2968ms | 919.6 MB | 1453.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2963ms | 909.2 MB | 1440.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 937.4 MB | 3974ms | 3869ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 925 MB | 4099ms | 4774ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 967.3 MB | 4176ms | 4144ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3209ms | 904.5 MB | 1657.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3261ms | 925.7 MB | 1678.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3161ms | 909.4 MB | 1663.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 967.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 967.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169% (scenario fresh-install/fresh)
- agent-process: RSS 967.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.4% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 751.2 MB (scenario fresh-install/fresh); CPU 169% (scenario fresh-install/fresh)
- status-cli: RSS 761.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.4% (scenario fresh-install/fresh)
- gateway: RSS 925.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario fresh-install/fresh)
- gateway-tree: RSS 925.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario fresh-install/fresh)
- model-cli: RSS 501.3 MB (scenario fresh-install/onboarded-user); CPU 155.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-agent-cold-warm-message-8e2a29af-kova-260721-205815-f24074
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 937.4 MB; tracked total 937.4 MB; max CPU 158.9%; samples 14; roles agent-cli 937.4MB/158.9%, command-tree 937.4MB/160.9%, agent-process 937.4MB/158.9%, status-cli 761.3MB/160.9%
- agent: turn 3974ms; cold/warm 3974ms/3869ms; cold-warm delta 105ms; pre-provider 3655ms; provider 2ms; metadata scans 10 (220.8ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3968.75ms; max 3974ms; pre-provider p95 3652.35ms
- agent CLI attribution: cold known 109ms / unattributed 3546ms; warm known 110ms / unattributed 3492ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3974ms; pre-provider 3655ms; provider 2ms; post-provider 317ms; response true
    - active window: metadata scans 5 (108.33ms total, max 64.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3655ms; provider 2ms; post-provider 317ms; unknown 3336.27ms; source plugins.metadata.scan 318.73ms
  - warm: total 3869ms; pre-provider 3602ms; provider 1ms; post-provider 266ms; response true
    - active window: metadata scans 5 (112.47ms total, max 66.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3602ms; provider 1ms; post-provider 266ms; unknown 3283.27ms; source plugins.metadata.scan 318.73ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3655 ms | 109 ms | 3546 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-agent-cold-warm-message-8e2a29af-kova-260721-205815-f24074/openclaw/timeline.jsonl |
  | warm | 3602 ms | 110 ms | 3492 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-agent-cold-warm-message-8e2a29af-kova-260721-205815-f24074/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 109 ms | 65 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 110 ms | 66 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-agent-cold-warm-message-2ab680e0-kova-260721-205815-f24074
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 925 MB; tracked total 925 MB; max CPU 158.9%; samples 16; roles agent-cli 925MB/158.9%, command-tree 925MB/159.8%, agent-process 925MB/158.9%, status-cli 758.1MB/159.8%
- agent: turn 4774ms; cold/warm 4099ms/4774ms; cold-warm delta 0ms; pre-provider 4501ms; provider 1ms; metadata scans 10 (239.98ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4740.25ms; max 4774ms; pre-provider p95 4463.1ms
- agent CLI attribution: cold known 108ms / unattributed 3635ms; warm known 134ms / unattributed 4367ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4099ms; pre-provider 3743ms; provider 2ms; post-provider 354ms; response true
    - active window: metadata scans 5 (107.33ms total, max 61.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3743ms; provider 2ms; post-provider 354ms; unknown 3395.89ms; source plugins.metadata.scan 347.11ms
  - warm: total 4774ms; pre-provider 4501ms; provider 1ms; post-provider 272ms; response true
    - active window: metadata scans 5 (132.65ms total, max 67.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4501ms; provider 1ms; post-provider 272ms; unknown 4153.89ms; source plugins.metadata.scan 347.11ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3743 ms | 108 ms | 3635 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-agent-cold-warm-message-2ab680e0-kova-260721-205815-f24074/openclaw/timeline.jsonl |
  | warm | 4501 ms | 134 ms | 4367 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-agent-cold-warm-message-2ab680e0-kova-260721-205815-f24074/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 108 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 134 ms | 68 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-agent-cold-warm-message-67b331a3-kova-260721-205815-f24074
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 967.3 MB; tracked total 967.3 MB; max CPU 159.4%; samples 16; roles agent-cli 967.3MB/159.4%, command-tree 967.3MB/160.7%, agent-process 967.3MB/159.4%, status-cli 757MB/160.7%
- agent: turn 4176ms; cold/warm 4176ms/4144ms; cold-warm delta 32ms; pre-provider 3855ms; provider 3ms; metadata scans 10 (220.72ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4174.4ms; max 4176ms; pre-provider p95 3854.7ms
- agent CLI attribution: cold known 105ms / unattributed 3750ms; warm known 115ms / unattributed 3734ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4176ms; pre-provider 3855ms; provider 3ms; post-provider 318ms; response true
    - active window: metadata scans 5 (106.51ms total, max 61.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3855ms; provider 3ms; post-provider 318ms; unknown 3531.88ms; source plugins.metadata.scan 323.12ms
  - warm: total 4144ms; pre-provider 3849ms; provider 1ms; post-provider 294ms; response true
    - active window: metadata scans 5 (114.21ms total, max 66.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3849ms; provider 1ms; post-provider 294ms; unknown 3525.88ms; source plugins.metadata.scan 323.12ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3855 ms | 105 ms | 3750 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-agent-cold-warm-message-67b331a3-kova-260721-205815-f24074/openclaw/timeline.jsonl |
  | warm | 3849 ms | 115 ms | 3734 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-agent-cold-warm-message-67b331a3-kova-260721-205815-f24074/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 105 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 115 ms | 66 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205815-f24074-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205815-f24074-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205815-f24074-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-fresh-install-fresh-r1-697fad55-kova-260721-205815-f24074
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-fresh-install-fresh-r2-da880701-kova-260721-205815-f24074
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-205815-f24074
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-fresh-install-onboarded-9f99e904-kova-260721-205815-f24074
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-fresh-install-onboarded-f9c24855-kova-260721-205815-f24074
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-fresh-install-onboarded-fe872c26-kova-260721-205815-f24074
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-205815-f24074
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-205815-f24074
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205815-f24074/kova-bundled-runtime-deps-mi-150715ba-kova-260721-205815-f24074
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrv4y4kc-411-042687f6`
- Result: removed
- Duration: 572ms

