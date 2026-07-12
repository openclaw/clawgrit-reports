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
| Run ID | `kova-260712-182216-a167b3` |
| Generated | 2026-07-12T18:27:43.710Z |
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
| fresh-install/fresh | 3 | PASS:3 | 2238ms | 735.5MB | n/a | 130% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2237ms | 758.9MB | n/a | 111% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2275ms | 749MB | n/a | 133% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2320ms | 758.4MB | n/a | 136% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 139.9% | 2497ms | 2499ms | 2402ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2164ms | 761.6MB | n/a | 131% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 2809ms | 734 MB | 1464.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2238ms | 735.5 MB | 1270 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2149ms | 743.1 MB | 1281.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2311ms | 758.9 MB | 1325.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2237ms | 743.9 MB | 1303.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2204ms | 764.5 MB | 1317.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2237ms | 728.8 MB | 733.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2275ms | 751 MB | 755.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2306ms | 749 MB | 754.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2278ms | 715.3 MB | 1224.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2334ms | 760.2 MB | 1282.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2320ms | 758.4 MB | 1313 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 738.2 MB | 2547ms | 2557ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 754.2 MB | 2497ms | 2499ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 748.1 MB | 2412ms | 2471ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2235ms | 761.6 MB | 1328.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2164ms | 730.8 MB | 1286.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2064ms | 772.7 MB | 1308.2 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 772.7 MB; CPU 139%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 764.5 MB; CPU 139%; scenario fresh-install/onboarded-user
- command-tree: RSS 754.2 MB; CPU 148%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 754.2 MB; CPU 142.9%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 754.2 MB; CPU 142.9%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 730.5 MB; CPU 143.8%; scenario fresh-install/fresh
- plugin-cli: RSS 559.4 MB; CPU 148%; scenario fresh-install/onboarded-user
- model-cli: RSS 529.5 MB; CPU 140%; scenario fresh-install/fresh

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-agent-cold-warm-message-8e2a29af-kova-260712-182216-a167b3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 738.2 MB; tracked total 738.2 MB; max CPU 138.9%; samples 11; roles agent-cli 738.2MB/138.9%, agent-process 738.2MB/138.9%, command-tree 738.2MB/143.8%, status-cli 526.8MB/143.8%
- agent: turn 2557ms; cold/warm 2547ms/2557ms; cold-warm delta 0ms; pre-provider 2457ms; provider 1ms; metadata scans 10 (156.51ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2556.5ms; max 2557ms; pre-provider p95 2456.3ms
- agent CLI attribution: cold known 78ms / unattributed 2365ms; warm known 79ms / unattributed 2378ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 41.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2547ms; pre-provider 2443ms; provider 2ms; post-provider 102ms; response true
    - active window: metadata scans 5 (76.45ms total, max 37.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2443ms; provider 2ms; post-provider 102ms; unknown 2443ms; source none
  - warm: total 2557ms; pre-provider 2457ms; provider 1ms; post-provider 99ms; response true
    - active window: metadata scans 5 (80.06ms total, max 41.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2457ms; provider 1ms; post-provider 99ms; unknown 2457ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2443 ms | 78 ms | 2365 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-agent-cold-warm-message-8e2a29af-kova-260712-182216-a167b3/openclaw/timeline.jsonl |
  | warm | 2457 ms | 79 ms | 2378 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-agent-cold-warm-message-8e2a29af-kova-260712-182216-a167b3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 78 ms | 38 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 79 ms | 41 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-agent-cold-warm-message-2ab680e0-kova-260712-182216-a167b3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 754.2 MB; tracked total 754.2 MB; max CPU 142.9%; samples 11; roles agent-cli 754.2MB/142.9%, agent-process 754.2MB/142.9%, command-tree 754.2MB/142.9%, status-cli 593MB/136.8%
- agent: turn 2499ms; cold/warm 2497ms/2499ms; cold-warm delta 0ms; pre-provider 2407ms; provider 1ms; metadata scans 10 (163.01ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2498.9ms; max 2499ms; pre-provider p95 2406.75ms
- agent CLI attribution: cold known 84ms / unattributed 2318ms; warm known 79ms / unattributed 2328ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 47.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2497ms; pre-provider 2402ms; provider 2ms; post-provider 93ms; response true
    - active window: metadata scans 5 (84.15ms total, max 47.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2402ms; provider 2ms; post-provider 93ms; unknown 2402ms; source none
  - warm: total 2499ms; pre-provider 2407ms; provider 1ms; post-provider 91ms; response true
    - active window: metadata scans 5 (78.86ms total, max 44.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2407ms; provider 1ms; post-provider 91ms; unknown 2407ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2402 ms | 84 ms | 2318 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-agent-cold-warm-message-2ab680e0-kova-260712-182216-a167b3/openclaw/timeline.jsonl |
  | warm | 2407 ms | 79 ms | 2328 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-agent-cold-warm-message-2ab680e0-kova-260712-182216-a167b3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 84 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 79 ms | 44 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-agent-cold-warm-message-67b331a3-kova-260712-182216-a167b3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 748.1 MB; tracked total 748.1 MB; max CPU 139.9%; samples 11; roles agent-cli 748.1MB/139.9%, agent-process 748.1MB/139.9%, command-tree 748.1MB/139.9%, status-cli 614.1MB/138.8%
- agent: turn 2471ms; cold/warm 2412ms/2471ms; cold-warm delta 0ms; pre-provider 2374ms; provider 0ms; metadata scans 10 (155.16ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2468.05ms; max 2471ms; pre-provider p95 2371.5ms
- agent CLI attribution: cold known 76ms / unattributed 2248ms; warm known 79ms / unattributed 2295ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 41.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2412ms; pre-provider 2324ms; provider 2ms; post-provider 86ms; response true
    - active window: metadata scans 5 (75.9ms total, max 40.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2324ms; provider 2ms; post-provider 86ms; unknown 2324ms; source none
  - warm: total 2471ms; pre-provider 2374ms; provider 0ms; post-provider 97ms; response true
    - active window: metadata scans 5 (79.26ms total, max 41.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2374ms; provider 0ms; post-provider 97ms; unknown 2374ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2324 ms | 76 ms | 2248 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-agent-cold-warm-message-67b331a3-kova-260712-182216-a167b3/openclaw/timeline.jsonl |
  | warm | 2374 ms | 79 ms | 2295 ms | 0 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-agent-cold-warm-message-67b331a3-kova-260712-182216-a167b3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 76 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 79 ms | 41 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-182216-a167b3-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-182216-a167b3-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-182216-a167b3-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-fresh-install-fresh-r1-697fad55-kova-260712-182216-a167b3
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-fresh-install-fresh-r2-da880701-kova-260712-182216-a167b3
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-fresh-install-fresh-r3-82f8bdbd-kova-260712-182216-a167b3
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-fresh-install-onboarded-9f99e904-kova-260712-182216-a167b3
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-fresh-install-onboarded-f9c24855-kova-260712-182216-a167b3
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-fresh-install-onboarded-fe872c26-kova-260712-182216-a167b3
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260712-182216-a167b3
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-bundled-runtime-deps-mi-39c08a4a-kova-260712-182216-a167b3
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-182216-a167b3/kova-bundled-runtime-deps-mi-150715ba-kova-260712-182216-a167b3
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783880535880`
- Result: removed
- Duration: 363ms

