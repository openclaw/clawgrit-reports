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
| Run ID | `kova-260723-134710-9b4eb3` |
| Generated | 2026-07-23T13:55:05.308Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3402ms | 922.8MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3112ms | 924.8MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3495ms | 907.3MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3489ms | 923.8MB | n/a | 147% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 160.4% | 5141ms | 5047ms | 4793ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3501ms | 923.4MB | n/a | 143% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4398ms | 910.9 MB | 1693.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3317ms | 928.1 MB | 1668.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3402ms | 922.8 MB | 1657.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3396ms | 917.1 MB | 1668.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3112ms | 926.5 MB | 1685 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3073ms | 924.8 MB | 1685.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3495ms | 916.4 MB | 916.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4581ms | 907.3 MB | 912.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3178ms | 902.9 MB | 907.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3489ms | 923.8 MB | 1703.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3665ms | 924.7 MB | 1660 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3245ms | 923.7 MB | 1456.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 973.8 MB | 5360ms | 5660ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 959 MB | 5141ms | 5047ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 951.5 MB | 4761ms | 4913ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3634ms | 923.4 MB | 1702.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3501ms | 927.3 MB | 1685.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3238ms | 921.4 MB | 1677.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 973.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 973.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 973.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 928.1 MB (scenario fresh-install/fresh); CPU 159% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 761.3 MB (scenario fresh-install/onboarded-user); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 928.1 MB (scenario fresh-install/fresh); CPU 159% (scenario bundled-plugin-startup/fresh)
- plugin-cli: RSS 783 MB (scenario fresh-install/fresh); CPU 163% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 596.7 MB (scenario fresh-install/fresh); CPU 158% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-agent-cold-warm-message-8e2a29af-kova-260723-134710-9b4eb3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 973.8 MB; tracked total 973.8 MB; max CPU 165.4%; samples 18; roles agent-cli 973.8MB/165.4%, agent-process 973.8MB/165.4%, command-tree 973.8MB/165.4%, status-cli 748.5MB/163.9%
- agent: turn 5660ms; cold/warm 5360ms/5660ms; cold-warm delta 0ms; pre-provider 5358ms; provider 1ms; metadata scans 14 (332.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5645ms; max 5660ms; pre-provider p95 5340.4ms
- agent CLI attribution: cold known 171ms / unattributed 4835ms; warm known 161ms / unattributed 5197ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 84.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5360ms; pre-provider 5006ms; provider 3ms; post-provider 351ms; response true
    - active window: metadata scans 7 (170.02ms total, max 75.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5006ms; provider 3ms; post-provider 351ms; unknown 4414.89ms; source plugins.metadata.scan 591.11ms
  - warm: total 5660ms; pre-provider 5358ms; provider 1ms; post-provider 301ms; response true
    - active window: metadata scans 7 (162.03ms total, max 72.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5358ms; provider 1ms; post-provider 301ms; unknown 4766.89ms; source plugins.metadata.scan 591.11ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5006 ms | 171 ms | 4835 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-agent-cold-warm-message-8e2a29af-kova-260723-134710-9b4eb3/openclaw/timeline.jsonl |
  | warm | 5358 ms | 161 ms | 5197 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-agent-cold-warm-message-8e2a29af-kova-260723-134710-9b4eb3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 171 ms | 75 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 161 ms | 72 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-agent-cold-warm-message-2ab680e0-kova-260723-134710-9b4eb3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 959 MB; tracked total 959 MB; max CPU 158.9%; samples 17; roles agent-cli 959MB/158.9%, agent-process 959MB/158.9%, command-tree 959MB/158.9%, status-cli 760.4MB/157.4%
- agent: turn 5141ms; cold/warm 5141ms/5047ms; cold-warm delta 94ms; pre-provider 4793ms; provider 2ms; metadata scans 14 (297.82ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5136.3ms; max 5141ms; pre-provider p95 4792.9ms
- agent CLI attribution: cold known 150ms / unattributed 4643ms; warm known 148ms / unattributed 4643ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5141ms; pre-provider 4793ms; provider 2ms; post-provider 346ms; response true
    - active window: metadata scans 7 (150.52ms total, max 64.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4793ms; provider 2ms; post-provider 346ms; unknown 4261.2ms; source plugins.metadata.scan 531.8ms
  - warm: total 5047ms; pre-provider 4791ms; provider 1ms; post-provider 255ms; response true
    - active window: metadata scans 7 (147.3ms total, max 71.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4791ms; provider 1ms; post-provider 255ms; unknown 4259.2ms; source plugins.metadata.scan 531.8ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4793 ms | 150 ms | 4643 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-agent-cold-warm-message-2ab680e0-kova-260723-134710-9b4eb3/openclaw/timeline.jsonl |
  | warm | 4791 ms | 148 ms | 4643 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-agent-cold-warm-message-2ab680e0-kova-260723-134710-9b4eb3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 150 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 148 ms | 72 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-agent-cold-warm-message-67b331a3-kova-260723-134710-9b4eb3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 951.5 MB; tracked total 951.5 MB; max CPU 160.4%; samples 16; roles agent-cli 951.5MB/160.4%, agent-process 951.5MB/160.4%, command-tree 951.5MB/160.4%, status-cli 721.9MB/157.9%
- agent: turn 4913ms; cold/warm 4761ms/4913ms; cold-warm delta 0ms; pre-provider 4645ms; provider 2ms; metadata scans 14 (295.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4905.4ms; max 4913ms; pre-provider p95 4635.3ms
- agent CLI attribution: cold known 136ms / unattributed 4315ms; warm known 158ms / unattributed 4487ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 77.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4761ms; pre-provider 4451ms; provider 3ms; post-provider 307ms; response true
    - active window: metadata scans 7 (136.41ms total, max 63.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4451ms; provider 3ms; post-provider 307ms; unknown 3912.27ms; source plugins.metadata.scan 538.73ms
  - warm: total 4913ms; pre-provider 4645ms; provider 2ms; post-provider 266ms; response true
    - active window: metadata scans 7 (159.16ms total, max 75.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4645ms; provider 2ms; post-provider 266ms; unknown 4106.27ms; source plugins.metadata.scan 538.73ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4451 ms | 136 ms | 4315 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-agent-cold-warm-message-67b331a3-kova-260723-134710-9b4eb3/openclaw/timeline.jsonl |
  | warm | 4645 ms | 158 ms | 4487 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-agent-cold-warm-message-67b331a3-kova-260723-134710-9b4eb3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 136 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 158 ms | 76 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-134710-9b4eb3-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-134710-9b4eb3-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-134710-9b4eb3-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-fresh-install-fresh-r1-697fad55-kova-260723-134710-9b4eb3
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-fresh-install-fresh-r2-da880701-kova-260723-134710-9b4eb3
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-134710-9b4eb3
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-fresh-install-onboarded-9f99e904-kova-260723-134710-9b4eb3
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-fresh-install-onboarded-f9c24855-kova-260723-134710-9b4eb3
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-fresh-install-onboarded-fe872c26-kova-260723-134710-9b4eb3
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-134710-9b4eb3
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-134710-9b4eb3
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-134710-9b4eb3/kova-bundled-runtime-deps-mi-150715ba-kova-260723-134710-9b4eb3
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxkfg63-411-194c2ba6`
- Result: removed
- Duration: 576ms

