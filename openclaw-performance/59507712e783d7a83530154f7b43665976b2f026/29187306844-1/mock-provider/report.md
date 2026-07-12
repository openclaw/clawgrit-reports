# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null |
| Blocking findings | 12 |
| Warnings | 20 |
| Records | 18 (PASS:15, BLOCKED:3) |

## Proof Completeness

- Completeness: complete: 15, incomplete: 3
- Required obligations: 241 total, 3 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | final health failures were missing |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | final health failures were missing |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | final health failures were missing |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260712-092210-d004b4` |
| Generated | 2026-07-12T09:27:46.464Z |
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
| PASS | 15 |
| BLOCKED | 3 |

## Release Gate

- Verdict: BLOCKED
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 3
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 3 blocking, 0 warning
  - primary: cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
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
- BLOCKING agent-cold-warm-message/mock-openai-provider: cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw

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
| info | Kova | report | 26 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 2574ms | 687.8MB | n/a | 128% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2332ms | 752.2MB | n/a | 132% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2241ms | 757.4MB | n/a | 132% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2249ms | 757.9MB | n/a | 118% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | BLOCKED:3 | n/a | 0MB | n/a | 139.8% | 2609ms | 2624ms | 2517ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2492ms | 760.4MB | n/a | 131% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 2975ms | 665.2 MB | 1376.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2198ms | 687.8 MB | 1231 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2574ms | 758.3 MB | 1354.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2388ms | 752.2 MB | 1305.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2227ms | 767.4 MB | 1311.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2332ms | 725.4 MB | 1245.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2241ms | 741.6 MB | 746.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2390ms | 759 MB | 764.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2234ms | 757.4 MB | 762.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2200ms | 757.9 MB | 1282 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2249ms | 708.5 MB | 1228.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2652ms | 763 MB | 1474.6 MB | n/a | n/a |  |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 715.5 MB | 2713ms | 2624ms | cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null |
| 2 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 749.5 MB | 2557ms | 2591ms | cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null |
| 3 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 706.4 MB | 2609ms | 2760ms | cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2381ms | 757.6 MB | 1290.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2492ms | 760.4 MB | 1288.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2570ms | 762.8 MB | 1382.2 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 767.4 MB; CPU 166%; scenario fresh-install/onboarded-user
- gateway-tree: RSS 767.4 MB; CPU 166%; scenario fresh-install/onboarded-user
- command-tree: RSS 749.5 MB; CPU 144%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 749.5 MB; CPU 142.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 749.5 MB; CPU 142.8%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 711.8 MB; CPU 142%; scenario bundled-plugin-startup/fresh
- status-cli: RSS 711.7 MB; CPU 139.8%; scenario fresh-install/fresh
- model-cli: RSS 511.2 MB; CPU 144%; scenario fresh-install/fresh

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-agent-cold-warm-message-8e2a29af-kova-260712-092210-d004b4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures not-collected; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 715.5 MB; tracked total 715.5 MB; max CPU 142.8%; samples 11; roles agent-cli 715.5MB/142.8%, agent-process 715.5MB/142.8%, command-tree 715.5MB/142.8%, status-cli 571.2MB/139.8%
- agent: turn 2713ms; cold/warm 2713ms/2624ms; cold-warm delta 89ms; pre-provider 2587ms; provider 3ms; metadata scans 10 (168ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2708.55ms; max 2713ms; pre-provider p95 2583.95ms
- agent CLI attribution: cold known 82ms / unattributed 2505ms; warm known 86ms / unattributed 2440ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 44.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
- Agent turns:
  - cold: total 2713ms; pre-provider 2587ms; provider 3ms; post-provider 123ms; response true
    - active window: metadata scans 5 (82.84ms total, max 41.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2587ms; provider 3ms; post-provider 123ms; unknown 2587ms; source none
  - warm: total 2624ms; pre-provider 2526ms; provider 1ms; post-provider 97ms; response true
    - active window: metadata scans 5 (85.16ms total, max 44.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2526ms; provider 1ms; post-provider 97ms; unknown 2526ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2587 ms | 82 ms | 2505 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-agent-cold-warm-message-8e2a29af-kova-260712-092210-d004b4/openclaw/timeline.jsonl |
  | warm | 2526 ms | 86 ms | 2440 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-agent-cold-warm-message-8e2a29af-kova-260712-092210-d004b4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 82 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 86 ms | 44 ms |

### agent-cold-warm-message sample 2

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-agent-cold-warm-message-2ab680e0-kova-260712-092210-d004b4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures not-collected; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 749.5 MB; tracked total 749.5 MB; max CPU 138.9%; samples 11; roles agent-cli 749.5MB/138.9%, agent-process 749.5MB/138.9%, command-tree 749.5MB/138.9%, status-cli 563.6MB/137.8%
- agent: turn 2591ms; cold/warm 2557ms/2591ms; cold-warm delta 0ms; pre-provider 2498ms; provider 1ms; metadata scans 10 (158.81ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2589.3ms; max 2591ms; pre-provider p95 2496.2ms
- agent CLI attribution: cold known 80ms / unattributed 2382ms; warm known 81ms / unattributed 2417ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 40.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
- Agent turns:
  - cold: total 2557ms; pre-provider 2462ms; provider 2ms; post-provider 93ms; response true
    - active window: metadata scans 5 (78.98ms total, max 39.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2462ms; provider 2ms; post-provider 93ms; unknown 2462ms; source none
  - warm: total 2591ms; pre-provider 2498ms; provider 1ms; post-provider 92ms; response true
    - active window: metadata scans 5 (79.83ms total, max 37.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2498ms; provider 1ms; post-provider 92ms; unknown 2498ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2462 ms | 80 ms | 2382 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-agent-cold-warm-message-2ab680e0-kova-260712-092210-d004b4/openclaw/timeline.jsonl |
  | warm | 2498 ms | 81 ms | 2417 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-agent-cold-warm-message-2ab680e0-kova-260712-092210-d004b4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 80 ms | 40 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 81 ms | 38 ms |

### agent-cold-warm-message sample 3

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-agent-cold-warm-message-67b331a3-kova-260712-092210-d004b4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures not-collected; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 706.4 MB; tracked total 706.4 MB; max CPU 139.8%; samples 11; roles agent-cli 706.4MB/139.8%, agent-process 706.4MB/139.8%, command-tree 706.4MB/139.8%, status-cli 554.1MB/139.8%
- agent: turn 2760ms; cold/warm 2609ms/2760ms; cold-warm delta 0ms; pre-provider 2665ms; provider 1ms; metadata scans 10 (168.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2752.45ms; max 2760ms; pre-provider p95 2657.6ms
- agent CLI attribution: cold known 83ms / unattributed 2434ms; warm known 85ms / unattributed 2580ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 45.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - cleanupMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
- Agent turns:
  - cold: total 2609ms; pre-provider 2517ms; provider 3ms; post-provider 89ms; response true
    - active window: metadata scans 5 (82.6ms total, max 43.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2517ms; provider 3ms; post-provider 89ms; unknown 2517ms; source none
  - warm: total 2760ms; pre-provider 2665ms; provider 1ms; post-provider 94ms; response true
    - active window: metadata scans 5 (85.71ms total, max 45.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2665ms; provider 1ms; post-provider 94ms; unknown 2665ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2517 ms | 83 ms | 2434 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-agent-cold-warm-message-67b331a3-kova-260712-092210-d004b4/openclaw/timeline.jsonl |
  | warm | 2665 ms | 85 ms | 2580 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-agent-cold-warm-message-67b331a3-kova-260712-092210-d004b4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 83 ms | 44 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 85 ms | 46 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-092210-d004b4-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-092210-d004b4-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260712-092210-d004b4-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-fresh-install-fresh-r1-697fad55-kova-260712-092210-d004b4
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-fresh-install-fresh-r2-da880701-kova-260712-092210-d004b4
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-fresh-install-fresh-r3-82f8bdbd-kova-260712-092210-d004b4
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-fresh-install-onboarded-9f99e904-kova-260712-092210-d004b4
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-fresh-install-onboarded-f9c24855-kova-260712-092210-d004b4
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-fresh-install-onboarded-fe872c26-kova-260712-092210-d004b4
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260712-092210-d004b4
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-bundled-runtime-deps-mi-39c08a4a-kova-260712-092210-d004b4
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260712-092210-d004b4/kova-bundled-runtime-deps-mi-150715ba-kova-260712-092210-d004b4
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrhl4ar4-3ws-bba10ba4`
- Result: removed
- Duration: 461ms

