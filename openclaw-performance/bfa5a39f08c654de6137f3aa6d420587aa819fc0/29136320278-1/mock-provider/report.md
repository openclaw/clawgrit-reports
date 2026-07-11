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
- Required obligations: 241 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260711-022636-c5eab1` |
| Generated | 2026-07-11T02:32:46.470Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.13.0 |
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
  - actual: linux/x64
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate platform coverage wsl2 was not present in the report.
  - expected: platform coverage wsl2
  - actual: linux/x64
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage failure-containment:baseline was not present in the report.
  - expected: requirement coverage failure-containment:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage soak:baseline was not present in the report.
  - expected: requirement coverage soak:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage workspace-scan:baseline was not present in the report.
  - expected: requirement coverage workspace-scan:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-runtime:baseline was not present in the report.
  - expected: requirement coverage mcp-runtime:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cron-runtime:run-now was not present in the report.
  - expected: requirement coverage cron-runtime:run-now
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report.
  - expected: requirement coverage exec-tool-safety:safe-and-blocked-exec
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report.
  - expected: requirement coverage mcp-tool-call:safe-tool-call
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report.
  - expected: requirement coverage tool-failure-containment:failure-attribution
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage browser-automation:baseline was not present in the report.
  - expected: requirement coverage browser-automation:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage media-understanding:baseline was not present in the report.
  - expected: requirement coverage media-understanding:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage network-offline:baseline was not present in the report.
  - expected: requirement coverage network-offline:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cross-platform-smoke:baseline was not present in the report.
  - expected: requirement coverage cross-platform-smoke:baseline
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:list-survives-dirty-state was not present in the report.
  - expected: requirement coverage dirty-plugin-state:list-survives-dirty-state
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:doctor-preserves-user-files was not present in the report.
  - expected: requirement coverage dirty-plugin-state:doctor-preserves-user-files
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:plugin-failure-recovery was not present in the report.
  - expected: requirement coverage release-update-recovery:plugin-failure-recovery
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:doctor-repair-contract was not present in the report.
  - expected: requirement coverage release-update-recovery:doctor-repair-contract
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:update-retry-target-stability was not present in the report.
  - expected: requirement coverage release-update-recovery:update-retry-target-stability
  - actual: 5 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:rollback-available was not present in the report.
  - expected: requirement coverage release-update-recovery:rollback-available
  - actual: 5 requirement obligation(s) present
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
| info | Kova | report | 23 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 6430ms | 737.3MB | n/a | 55.3% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 6781ms | 765.3MB | n/a | 52.6% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 7462ms | 668.6MB | n/a | 48.1% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 7501ms | 703.6MB | n/a | 75% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 139.8% | 2510ms | 2447ms | 2411ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 6789ms | 639.6MB | n/a | 51.8% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 8677ms | 737.3 MB | 1488.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 6428ms | 759.2 MB | 1401.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 6430ms | 646.6 MB | 1335.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 6622ms | 765.3 MB | 1500.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 6781ms | 765.7 MB | 1461.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 6967ms | 705.1 MB | 1404.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 9284ms | 779.1 MB | 784.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6382ms | 640.5 MB | 645.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7462ms | 668.6 MB | 673.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 7590ms | 703.6 MB | 1264.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 7501ms | 655.2 MB | 1205.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 6663ms | 760 MB | 1345.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 745.4 MB | 2518ms | 2490ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 747.3 MB | 2510ms | 2447ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 719.6 MB | 2388ms | 2389ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 6871ms | 674.5 MB | 1279.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 6789ms | 625.6 MB | 1201.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 6594ms | 639.6 MB | 1248.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 779.1 MB; CPU 100%; scenario bundled-runtime-deps/missing-plugin-index
- gateway-tree: RSS 779.1 MB; CPU 100%; scenario bundled-runtime-deps/missing-plugin-index
- command-tree: RSS 751.3 MB; CPU 141.8%; scenario fresh-install/fresh
- status-cli: RSS 751.3 MB; CPU 139.9%; scenario fresh-install/fresh
- agent-cli: RSS 747.3 MB; CPU 140.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 747.3 MB; CPU 140.8%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 735.8 MB; CPU 140.8%; scenario fresh-install/fresh
- model-cli: RSS 547.5 MB; CPU 141.8%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-agent-cold-warm-message-8e2a29af-kova-260711-022636-c5eab1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 745.4 MB; tracked total 745.4 MB; max CPU 140.8%; samples 11; roles agent-cli 745.4MB/140.8%, agent-process 745.4MB/140.8%, command-tree 745.4MB/140.8%, status-cli 519MB/135.8%
- agent: turn 2518ms; cold/warm 2518ms/2490ms; cold-warm delta 28ms; pre-provider 2416ms; provider 2ms; metadata scans 10 (156.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2516.6ms; max 2518ms; pre-provider p95 2415ms
- agent CLI attribution: cold known 79ms / unattributed 2337ms; warm known 77ms / unattributed 2319ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2518ms; pre-provider 2416ms; provider 2ms; post-provider 100ms; response true
    - active window: metadata scans 5 (78.74ms total, max 37.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2416ms; provider 2ms; post-provider 100ms; unknown 2416ms; source none
  - warm: total 2490ms; pre-provider 2396ms; provider 1ms; post-provider 93ms; response true
    - active window: metadata scans 5 (77.59ms total, max 39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2396ms; provider 1ms; post-provider 93ms; unknown 2396ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2416 ms | 79 ms | 2337 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-agent-cold-warm-message-8e2a29af-kova-260711-022636-c5eab1/openclaw/timeline.jsonl |
  | warm | 2396 ms | 77 ms | 2319 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-agent-cold-warm-message-8e2a29af-kova-260711-022636-c5eab1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 79 ms | 38 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 77 ms | 39 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-agent-cold-warm-message-2ab680e0-kova-260711-022636-c5eab1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 747.3 MB; tracked total 747.3 MB; max CPU 139.8%; samples 11; roles agent-cli 747.3MB/139.8%, agent-process 747.3MB/139.8%, command-tree 747.3MB/139.8%, status-cli 609.8MB/136.8%
- agent: turn 2510ms; cold/warm 2510ms/2447ms; cold-warm delta 63ms; pre-provider 2411ms; provider 2ms; metadata scans 10 (148.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2506.85ms; max 2510ms; pre-provider p95 2408.3ms
- agent CLI attribution: cold known 72ms / unattributed 2339ms; warm known 76ms / unattributed 2281ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 39.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2510ms; pre-provider 2411ms; provider 2ms; post-provider 97ms; response true
    - active window: metadata scans 5 (72.94ms total, max 39.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2411ms; provider 2ms; post-provider 97ms; unknown 2411ms; source none
  - warm: total 2447ms; pre-provider 2357ms; provider 1ms; post-provider 89ms; response true
    - active window: metadata scans 5 (75.11ms total, max 39.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2357ms; provider 1ms; post-provider 89ms; unknown 2357ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2411 ms | 72 ms | 2339 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-agent-cold-warm-message-2ab680e0-kova-260711-022636-c5eab1/openclaw/timeline.jsonl |
  | warm | 2357 ms | 76 ms | 2281 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-agent-cold-warm-message-2ab680e0-kova-260711-022636-c5eab1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 72 ms | 39 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 76 ms | 39 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-agent-cold-warm-message-67b331a3-kova-260711-022636-c5eab1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 719.6 MB; tracked total 719.6 MB; max CPU 138.9%; samples 11; roles agent-cli 719.6MB/138.9%, agent-process 719.6MB/138.9%, command-tree 719.6MB/138.9%, status-cli 587.1MB/135.9%
- agent: turn 2389ms; cold/warm 2388ms/2389ms; cold-warm delta 0ms; pre-provider 2302ms; provider 1ms; metadata scans 10 (155.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2388.95ms; max 2389ms; pre-provider p95 2301.85ms
- agent CLI attribution: cold known 79ms / unattributed 2220ms; warm known 79ms / unattributed 2223ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 42.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2388ms; pre-provider 2299ms; provider 2ms; post-provider 87ms; response true
    - active window: metadata scans 5 (78.2ms total, max 42.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2299ms; provider 2ms; post-provider 87ms; unknown 2299ms; source none
  - warm: total 2389ms; pre-provider 2302ms; provider 1ms; post-provider 86ms; response true
    - active window: metadata scans 5 (77.51ms total, max 41.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2302ms; provider 1ms; post-provider 86ms; unknown 2302ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2299 ms | 79 ms | 2220 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-agent-cold-warm-message-67b331a3-kova-260711-022636-c5eab1/openclaw/timeline.jsonl |
  | warm | 2302 ms | 79 ms | 2223 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-agent-cold-warm-message-67b331a3-kova-260711-022636-c5eab1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 79 ms | 43 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 79 ms | 42 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260711-022636-c5eab1-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260711-022636-c5eab1-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260711-022636-c5eab1-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-fresh-install-fresh-r1-697fad55-kova-260711-022636-c5eab1
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-fresh-install-fresh-r2-da880701-kova-260711-022636-c5eab1
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-fresh-install-fresh-r3-82f8bdbd-kova-260711-022636-c5eab1
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-fresh-install-onboarded-9f99e904-kova-260711-022636-c5eab1
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-fresh-install-onboarded-f9c24855-kova-260711-022636-c5eab1
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-fresh-install-onboarded-fe872c26-kova-260711-022636-c5eab1
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260711-022636-c5eab1
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-bundled-runtime-deps-mi-39c08a4a-kova-260711-022636-c5eab1
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260711-022636-c5eab1/kova-bundled-runtime-deps-mi-150715ba-kova-260711-022636-c5eab1
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783736796506`
- Result: removed
- Duration: 378ms

