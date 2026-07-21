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
| Run ID | `kova-260721-015126-83155e` |
| Generated | 2026-07-21T01:57:05.331Z |
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
| fresh-install/fresh | 3 | PASS:3 | 2334ms | 817.4MB | n/a | 146% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2190ms | 821.6MB | n/a | 147% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2232ms | 792.7MB | n/a | 147% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2255ms | 826.2MB | n/a | 147% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.8% | 3121ms | 3115ms | 2829ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2189ms | 820.3MB | n/a | 146% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 2719ms | 803.5 MB | 1451.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2334ms | 818.6 MB | 1487.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2249ms | 817.4 MB | 1414.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2182ms | 815.1 MB | 1417.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2278ms | 821.6 MB | 1407.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2190ms | 842.3 MB | 1438 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2281ms | 792.7 MB | 792.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2232ms | 792 MB | 792 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2155ms | 803.9 MB | 808.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2255ms | 816.9 MB | 1409.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2349ms | 843 MB | 1425.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2250ms | 826.2 MB | 1432.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 899.6 MB | 3185ms | 3173ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 905.7 MB | 3121ms | 3028ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 917.8 MB | 3104ms | 3115ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2169ms | 841.9 MB | 1447.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2189ms | 820.3 MB | 1438.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2307ms | 820.2 MB | 1437.7 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 917.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 917.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 917.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 843 MB (scenario bundled-plugin-startup/fresh); CPU 150% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 673.3 MB (scenario fresh-install/fresh); CPU 155.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 843 MB (scenario bundled-plugin-startup/fresh); CPU 150% (scenario bundled-plugin-startup/fresh)
- plugin-cli: RSS 618.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 554.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-agent-cold-warm-message-8e2a29af-kova-260721-015126-83155e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 899.6 MB; tracked total 899.6 MB; max CPU 153.7%; samples 13; roles agent-cli 899.6MB/153.7%, command-tree 899.6MB/154.6%, agent-process 899.6MB/153.7%, status-cli 627MB/154.6%
- agent: turn 3185ms; cold/warm 3185ms/3173ms; cold-warm delta 12ms; pre-provider 2888ms; provider 3ms; metadata scans 10 (203.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3184.4ms; max 3185ms; pre-provider p95 2907ms
- agent CLI attribution: cold known 99ms / unattributed 2789ms; warm known 105ms / unattributed 2803ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3185ms; pre-provider 2888ms; provider 3ms; post-provider 294ms; response true
    - active window: metadata scans 5 (99.28ms total, max 55.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2888ms; provider 3ms; post-provider 294ms; unknown 2601.23ms; source plugins.metadata.scan 286.77ms
  - warm: total 3173ms; pre-provider 2908ms; provider 1ms; post-provider 264ms; response true
    - active window: metadata scans 5 (103.92ms total, max 53.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2908ms; provider 1ms; post-provider 264ms; unknown 2621.23ms; source plugins.metadata.scan 286.77ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2888 ms | 99 ms | 2789 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-agent-cold-warm-message-8e2a29af-kova-260721-015126-83155e/openclaw/timeline.jsonl |
  | warm | 2908 ms | 105 ms | 2803 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-agent-cold-warm-message-8e2a29af-kova-260721-015126-83155e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 105 ms | 53 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-agent-cold-warm-message-2ab680e0-kova-260721-015126-83155e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 905.7 MB; tracked total 905.7 MB; max CPU 156.7%; samples 12; roles agent-cli 905.7MB/156.7%, agent-process 905.7MB/156.7%, command-tree 905.7MB/156.7%, status-cli 630.8MB/155.8%
- agent: turn 3121ms; cold/warm 3121ms/3028ms; cold-warm delta 93ms; pre-provider 2829ms; provider 2ms; metadata scans 10 (188.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3116.35ms; max 3121ms; pre-provider p95 2827ms
- agent CLI attribution: cold known 93ms / unattributed 2736ms; warm known 95ms / unattributed 2694ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 54.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3121ms; pre-provider 2829ms; provider 2ms; post-provider 290ms; response true
    - active window: metadata scans 5 (93.99ms total, max 50.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2829ms; provider 2ms; post-provider 290ms; unknown 2558.94ms; source plugins.metadata.scan 270.06ms
  - warm: total 3028ms; pre-provider 2789ms; provider 1ms; post-provider 238ms; response true
    - active window: metadata scans 5 (94.6ms total, max 52.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2789ms; provider 1ms; post-provider 238ms; unknown 2518.94ms; source plugins.metadata.scan 270.06ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2829 ms | 93 ms | 2736 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-agent-cold-warm-message-2ab680e0-kova-260721-015126-83155e/openclaw/timeline.jsonl |
  | warm | 2789 ms | 95 ms | 2694 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-agent-cold-warm-message-2ab680e0-kova-260721-015126-83155e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 93 ms | 50 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 95 ms | 52 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-agent-cold-warm-message-67b331a3-kova-260721-015126-83155e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 917.8 MB; tracked total 917.8 MB; max CPU 154.8%; samples 13; roles agent-cli 917.8MB/154.8%, agent-process 917.8MB/154.8%, command-tree 917.8MB/154.8%, status-cli 631.5MB/154.8%
- agent: turn 3115ms; cold/warm 3104ms/3115ms; cold-warm delta 0ms; pre-provider 2856ms; provider 8ms; metadata scans 10 (195.37ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3114.45ms; max 3115ms; pre-provider p95 2853.95ms
- agent CLI attribution: cold known 99ms / unattributed 2716ms; warm known 98ms / unattributed 2758ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3104ms; pre-provider 2815ms; provider 3ms; post-provider 286ms; response true
    - active window: metadata scans 5 (98.48ms total, max 51.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2815ms; provider 3ms; post-provider 286ms; unknown 2533.34ms; source plugins.metadata.scan 281.66ms
  - warm: total 3115ms; pre-provider 2856ms; provider 8ms; post-provider 251ms; response true
    - active window: metadata scans 5 (96.89ms total, max 53.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2856ms; provider 8ms; post-provider 251ms; unknown 2574.34ms; source plugins.metadata.scan 281.66ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2815 ms | 99 ms | 2716 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-agent-cold-warm-message-67b331a3-kova-260721-015126-83155e/openclaw/timeline.jsonl |
  | warm | 2856 ms | 98 ms | 2758 ms | 8 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-agent-cold-warm-message-67b331a3-kova-260721-015126-83155e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 51 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 98 ms | 54 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-015126-83155e-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-015126-83155e-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-015126-83155e-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-fresh-install-fresh-r1-697fad55-kova-260721-015126-83155e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-fresh-install-fresh-r2-da880701-kova-260721-015126-83155e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-015126-83155e
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-fresh-install-onboarded-9f99e904-kova-260721-015126-83155e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-fresh-install-onboarded-f9c24855-kova-260721-015126-83155e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-fresh-install-onboarded-fe872c26-kova-260721-015126-83155e
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-015126-83155e
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-015126-83155e
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-015126-83155e/kova-bundled-runtime-deps-mi-150715ba-kova-260721-015126-83155e
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrtzzb6n-40y-49e70bd7`
- Result: removed
- Duration: 421ms

