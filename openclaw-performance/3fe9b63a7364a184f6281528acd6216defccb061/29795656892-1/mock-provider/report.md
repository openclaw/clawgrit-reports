# Kova OpenClaw Runtime Report

> **⚠️ [PARTIAL]** — Required release gate platform coverage linux-arm64 was not present in the report.

## Verdict

| Field | Value |
|---|---|
| Verdict | PARTIAL |
| Reason | Required release gate platform coverage linux-arm64 was not present in the report. |
| Blocking findings | 0 |
| Warnings | 22 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260721-022326-149bd8` |
| Generated | 2026-07-21T02:28:53.713Z |
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
| info | Kova | report | 16 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 2286ms | 821MB | n/a | 143% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 1951ms | 820.8MB | n/a | 126% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2240ms | 794.7MB | n/a | 147% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2052ms | 816MB | n/a | 146% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.7% | 2952ms | 2984ms | 2675ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 1950ms | 814.3MB | n/a | 138% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 2581ms | 803.8 MB | 1471.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2286ms | 821.7 MB | 1453.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2048ms | 821 MB | 1475.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 1930ms | 820.3 MB | 1457.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 1951ms | 842.5 MB | 1469.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2385ms | 820.8 MB | 1406.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2351ms | 786.6 MB | 786.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2240ms | 794.7 MB | 794.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 1948ms | 810.5 MB | 815.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 1992ms | 807.2 MB | 1461.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2052ms | 816 MB | 1454 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2100ms | 833.7 MB | 1459.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 807.6 MB | 2952ms | 2998ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 795.3 MB | 2932ms | 2984ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 794.1 MB | 3014ms | 2915ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 1950ms | 814.3 MB | 1436.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2094ms | 836.9 MB | 1490.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 1884ms | 814.3 MB | 1438.6 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 842.5 MB (scenario fresh-install/onboarded-user); CPU 150% (scenario fresh-install/onboarded-user)
- command-tree: RSS 807.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 842.5 MB (scenario fresh-install/onboarded-user); CPU 150% (scenario fresh-install/onboarded-user)
- status-cli: RSS 669.6 MB (scenario fresh-install/fresh); CPU 160.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 807.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 654.3 MB (scenario bundled-plugin-startup/fresh); CPU 159% (scenario bundled-plugin-startup/fresh)
- agent-process: RSS 807.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 575.2 MB (scenario fresh-install/fresh); CPU 147% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-agent-cold-warm-message-8e2a29af-kova-260721-022326-149bd8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 807.6 MB; tracked total 807.6 MB; max CPU 156.7%; samples 11; roles agent-cli 807.6MB/156.7%, agent-process 807.6MB/156.7%, command-tree 807.6MB/156.7%, status-cli 633.4MB/155.8%
- agent: turn 2998ms; cold/warm 2952ms/2998ms; cold-warm delta 0ms; pre-provider 2752ms; provider 1ms; metadata scans 10 (187.8ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2995.7ms; max 2998ms; pre-provider p95 2748.15ms
- agent CLI attribution: cold known 88ms / unattributed 2587ms; warm known 99ms / unattributed 2653ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 56.01ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2952ms; pre-provider 2675ms; provider 2ms; post-provider 275ms; response true
    - active window: metadata scans 5 (88.27ms total, max 47.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2675ms; provider 2ms; post-provider 275ms; unknown 2408.56ms; source plugins.metadata.scan 266.44ms
  - warm: total 2998ms; pre-provider 2752ms; provider 1ms; post-provider 245ms; response true
    - active window: metadata scans 5 (99.53ms total, max 50.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2752ms; provider 1ms; post-provider 245ms; unknown 2485.56ms; source plugins.metadata.scan 266.44ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2675 ms | 88 ms | 2587 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-agent-cold-warm-message-8e2a29af-kova-260721-022326-149bd8/openclaw/timeline.jsonl |
  | warm | 2752 ms | 99 ms | 2653 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-agent-cold-warm-message-8e2a29af-kova-260721-022326-149bd8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 88 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 50 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-agent-cold-warm-message-2ab680e0-kova-260721-022326-149bd8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 795.3 MB; tracked total 795.3 MB; max CPU 155.7%; samples 11; roles agent-cli 795.3MB/155.7%, command-tree 795.3MB/157.8%, agent-process 795.3MB/155.7%, status-cli 629.7MB/157.8%
- agent: turn 2984ms; cold/warm 2932ms/2984ms; cold-warm delta 0ms; pre-provider 2742ms; provider 1ms; metadata scans 10 (186.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2981.4ms; max 2984ms; pre-provider p95 2737.95ms
- agent CLI attribution: cold known 90ms / unattributed 2571ms; warm known 94ms / unattributed 2648ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2932ms; pre-provider 2661ms; provider 3ms; post-provider 268ms; response true
    - active window: metadata scans 5 (90.83ms total, max 45.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2661ms; provider 3ms; post-provider 268ms; unknown 2391.54ms; source plugins.metadata.scan 269.46ms
  - warm: total 2984ms; pre-provider 2742ms; provider 1ms; post-provider 241ms; response true
    - active window: metadata scans 5 (95.53ms total, max 50.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2742ms; provider 1ms; post-provider 241ms; unknown 2472.54ms; source plugins.metadata.scan 269.46ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2661 ms | 90 ms | 2571 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-agent-cold-warm-message-2ab680e0-kova-260721-022326-149bd8/openclaw/timeline.jsonl |
  | warm | 2742 ms | 94 ms | 2648 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-agent-cold-warm-message-2ab680e0-kova-260721-022326-149bd8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 90 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 94 ms | 50 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-agent-cold-warm-message-67b331a3-kova-260721-022326-149bd8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 794.1 MB; tracked total 794.1 MB; max CPU 153.8%; samples 11; roles agent-cli 794.1MB/153.8%, command-tree 794.1MB/160.8%, agent-process 794.1MB/153.8%, status-cli 637.6MB/160.8%
- agent: turn 3014ms; cold/warm 3014ms/2915ms; cold-warm delta 99ms; pre-provider 2740ms; provider 3ms; metadata scans 10 (191.96ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3009.05ms; max 3014ms; pre-provider p95 2737.2ms
- agent CLI attribution: cold known 92ms / unattributed 2648ms; warm known 98ms / unattributed 2586ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 54.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3014ms; pre-provider 2740ms; provider 3ms; post-provider 271ms; response true
    - active window: metadata scans 5 (93.13ms total, max 48.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2740ms; provider 3ms; post-provider 271ms; unknown 2472.27ms; source plugins.metadata.scan 267.73ms
  - warm: total 2915ms; pre-provider 2684ms; provider 1ms; post-provider 230ms; response true
    - active window: metadata scans 5 (98.83ms total, max 54.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2684ms; provider 1ms; post-provider 230ms; unknown 2416.27ms; source plugins.metadata.scan 267.73ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2740 ms | 92 ms | 2648 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-agent-cold-warm-message-67b331a3-kova-260721-022326-149bd8/openclaw/timeline.jsonl |
  | warm | 2684 ms | 98 ms | 2586 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-agent-cold-warm-message-67b331a3-kova-260721-022326-149bd8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 92 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 98 ms | 54 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-022326-149bd8-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-022326-149bd8-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-022326-149bd8-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-fresh-install-fresh-r1-697fad55-kova-260721-022326-149bd8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-fresh-install-fresh-r2-da880701-kova-260721-022326-149bd8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-022326-149bd8
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-fresh-install-onboarded-9f99e904-kova-260721-022326-149bd8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-fresh-install-onboarded-f9c24855-kova-260721-022326-149bd8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-fresh-install-onboarded-fe872c26-kova-260721-022326-149bd8
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-022326-149bd8
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-022326-149bd8
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-022326-149bd8/kova-bundled-runtime-deps-mi-150715ba-kova-260721-022326-149bd8
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mru14gzz-410-c39ac322`
- Result: removed
- Duration: 378ms

