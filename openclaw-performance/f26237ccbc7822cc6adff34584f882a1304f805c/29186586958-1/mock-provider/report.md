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
| Run ID | `kova-260712-085513-886153` |
| Generated | 2026-07-12T09:02:02.032Z |
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
| info | Kova | report | 14 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 2330ms | 753.6MB | n/a | 115% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2348ms | 740.1MB | n/a | 113% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2180ms | 758.9MB | n/a | 132% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2324ms | 731.7MB | n/a | 136% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 146.8% | 2591ms | 2599ms | 2483ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2271ms | 761MB | n/a | 133% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3148ms | 698.1 MB | 1291.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2330ms | 753.6 MB | 1286.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2210ms | 763.5 MB | 1276.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2469ms | 740.1 MB | 1282.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2348ms | 674.9 MB | 1219.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2271ms | 758.6 MB | 1312.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2119ms | 768.7 MB | 773.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2267ms | 758.9 MB | 764.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2180ms | 744.5 MB | 749.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2324ms | 731.7 MB | 1192.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2377ms | 693.9 MB | 1234.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2128ms | 758 MB | 1290.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 700.2 MB | 2494ms | 2536ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 730.9 MB | 2591ms | 2622ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 722.5 MB | 2659ms | 2599ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2193ms | 775.3 MB | 1292.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2271ms | 709 MB | 1235.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2273ms | 761 MB | 1329.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 775.3 MB; CPU 139%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 775.3 MB; CPU 139%; scenario gateway-performance/many-bundled-plugins
- command-tree: RSS 730.9 MB; CPU 147%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 730.9 MB; CPU 146.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 730.9 MB; CPU 146.8%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 593.8 MB; CPU 146.8%; scenario fresh-install/fresh
- plugin-cli: RSS 560.6 MB; CPU 147%; scenario bundled-plugin-startup/fresh
- model-cli: RSS 517.5 MB; CPU 145%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-agent-cold-warm-message-8e2a29af-kova-260712-085513-886153
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 700.2 MB; tracked total 700.2 MB; max CPU 139.9%; samples 11; roles agent-cli 700.2MB/139.9%, agent-process 700.2MB/139.9%, command-tree 700.2MB/146.8%, status-cli 584.4MB/146.8%
- agent: turn 2536ms; cold/warm 2494ms/2536ms; cold-warm delta 0ms; pre-provider 2448ms; provider 1ms; metadata scans 10 (158.72ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2533.9ms; max 2536ms; pre-provider p95 2443.85ms
- agent CLI attribution: cold known 78ms / unattributed 2287ms; warm known 82ms / unattributed 2366ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 44.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2494ms; pre-provider 2365ms; provider 3ms; post-provider 126ms; response true
    - active window: metadata scans 5 (77.09ms total, max 41.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2365ms; provider 3ms; post-provider 126ms; unknown 2365ms; source none
  - warm: total 2536ms; pre-provider 2448ms; provider 1ms; post-provider 87ms; response true
    - active window: metadata scans 5 (81.63ms total, max 44.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2448ms; provider 1ms; post-provider 87ms; unknown 2448ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2365 ms | 78 ms | 2287 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-agent-cold-warm-message-8e2a29af-kova-260712-085513-886153/openclaw/timeline.jsonl |
  | warm | 2448 ms | 82 ms | 2366 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-agent-cold-warm-message-8e2a29af-kova-260712-085513-886153/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 78 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 82 ms | 45 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-agent-cold-warm-message-2ab680e0-kova-260712-085513-886153
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 730.9 MB; tracked total 730.9 MB; max CPU 146.8%; samples 11; roles agent-cli 730.9MB/146.8%, agent-process 730.9MB/146.8%, command-tree 730.9MB/146.8%, status-cli 550.3MB/138.8%
- agent: turn 2622ms; cold/warm 2591ms/2622ms; cold-warm delta 0ms; pre-provider 2530ms; provider 1ms; metadata scans 10 (167.93ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2620.45ms; max 2622ms; pre-provider p95 2527.65ms
- agent CLI attribution: cold known 79ms / unattributed 2404ms; warm known 89ms / unattributed 2441ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 48.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2591ms; pre-provider 2483ms; provider 3ms; post-provider 105ms; response true
    - active window: metadata scans 5 (79.15ms total, max 41.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2483ms; provider 3ms; post-provider 105ms; unknown 2483ms; source none
  - warm: total 2622ms; pre-provider 2530ms; provider 1ms; post-provider 91ms; response true
    - active window: metadata scans 5 (88.78ms total, max 48.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2530ms; provider 1ms; post-provider 91ms; unknown 2530ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2483 ms | 79 ms | 2404 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-agent-cold-warm-message-2ab680e0-kova-260712-085513-886153/openclaw/timeline.jsonl |
  | warm | 2530 ms | 89 ms | 2441 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-agent-cold-warm-message-2ab680e0-kova-260712-085513-886153/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 79 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 89 ms | 49 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-agent-cold-warm-message-67b331a3-kova-260712-085513-886153
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 722.5 MB; tracked total 722.5 MB; max CPU 146.8%; samples 11; roles agent-cli 722.5MB/146.8%, agent-process 722.5MB/146.8%, command-tree 722.5MB/146.8%, status-cli 533.1MB/136.8%
- agent: turn 2659ms; cold/warm 2659ms/2599ms; cold-warm delta 60ms; pre-provider 2547ms; provider 2ms; metadata scans 10 (164.42ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2656ms; max 2659ms; pre-provider p95 2544.85ms
- agent CLI attribution: cold known 79ms / unattributed 2468ms; warm known 84ms / unattributed 2420ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 43.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2659ms; pre-provider 2547ms; provider 2ms; post-provider 110ms; response true
    - active window: metadata scans 5 (79.55ms total, max 36.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2547ms; provider 2ms; post-provider 110ms; unknown 2547ms; source none
  - warm: total 2599ms; pre-provider 2504ms; provider 1ms; post-provider 94ms; response true
    - active window: metadata scans 5 (84.87ms total, max 43.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2504ms; provider 1ms; post-provider 94ms; unknown 2504ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2547 ms | 79 ms | 2468 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-agent-cold-warm-message-67b331a3-kova-260712-085513-886153/openclaw/timeline.jsonl |
  | warm | 2504 ms | 84 ms | 2420 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-agent-cold-warm-message-67b331a3-kova-260712-085513-886153/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 79 ms | 37 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 84 ms | 43 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-085513-886153-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-085513-886153-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-085513-886153-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-fresh-install-fresh-r1-697fad55-kova-260712-085513-886153
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-fresh-install-fresh-r2-da880701-kova-260712-085513-886153
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-fresh-install-fresh-r3-82f8bdbd-kova-260712-085513-886153
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-fresh-install-onboarded-9f99e904-kova-260712-085513-886153
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-fresh-install-onboarded-f9c24855-kova-260712-085513-886153
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-fresh-install-onboarded-fe872c26-kova-260712-085513-886153
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260712-085513-886153
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-bundled-runtime-deps-mi-39c08a4a-kova-260712-085513-886153
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-085513-886153/kova-bundled-runtime-deps-mi-150715ba-kova-260712-085513-886153
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783846513094`
- Result: removed
- Duration: 417ms

