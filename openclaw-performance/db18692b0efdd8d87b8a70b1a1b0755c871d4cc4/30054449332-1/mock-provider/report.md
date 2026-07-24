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
| Run ID | `kova-260723-235236-063cf6` |
| Generated | 2026-07-23T23:59:43.155Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3219ms | 948.9MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3203ms | 938.9MB | n/a | 149% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3162ms | 936.3MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2982ms | 934.9MB | n/a | 140% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.9% | 4601ms | 4427ms | 4290ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3139ms | 939.8MB | n/a | 150% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3916ms | 948.9 MB | 1687.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3219ms | 960.1 MB | 1717.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3217ms | 932 MB | 1658.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3368ms | 966.1 MB | 1694.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3182ms | 938.9 MB | 1683.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3203ms | 933.3 MB | 1638.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3162ms | 941.5 MB | 946.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3130ms | 936.2 MB | 936.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3279ms | 936.3 MB | 936.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3289ms | 923.3 MB | 1456.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2889ms | 939.8 MB | 1464.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2982ms | 934.9 MB | 1462.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 932.6 MB | 4646ms | 4580ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 958.6 MB | 4601ms | 4427ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 955.4 MB | 4496ms | 4376ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3213ms | 939.8 MB | 1662.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3132ms | 960.1 MB | 1718.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3139ms | 928.3 MB | 1660.5 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 966.1 MB (scenario fresh-install/onboarded-user); CPU 154% (scenario fresh-install/fresh)
- agent-cli: RSS 958.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 966.1 MB (scenario fresh-install/onboarded-user); CPU 154% (scenario fresh-install/fresh)
- agent-process: RSS 958.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 958.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 535.5 MB (scenario fresh-install/fresh); CPU 157.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 773.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 610.9 MB (scenario fresh-install/onboarded-user); CPU 149.9% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-agent-cold-warm-message-8e2a29af-kova-260723-235236-063cf6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 932.6 MB; tracked total 932.6 MB; max CPU 154.4%; samples 16; roles agent-cli 932.6MB/154.4%, command-tree 932.6MB/154.7%, agent-process 932.6MB/154.4%, status-cli 735.7MB/154.7%
- agent: turn 4646ms; cold/warm 4646ms/4580ms; cold-warm delta 66ms; pre-provider 4336ms; provider 3ms; metadata scans 14 (265.29ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4642.7ms; max 4646ms; pre-provider p95 4334.85ms
- agent CLI attribution: cold known 134ms / unattributed 4202ms; warm known 131ms / unattributed 4182ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 66.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4646ms; pre-provider 4336ms; provider 3ms; post-provider 307ms; response true
    - active window: metadata scans 7 (133.52ms total, max 66.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4336ms; provider 3ms; post-provider 307ms; unknown 3861.15ms; source plugins.metadata.scan 474.85ms
  - warm: total 4580ms; pre-provider 4313ms; provider 1ms; post-provider 266ms; response true
    - active window: metadata scans 7 (131.77ms total, max 63.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4313ms; provider 1ms; post-provider 266ms; unknown 3838.15ms; source plugins.metadata.scan 474.85ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4336 ms | 134 ms | 4202 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-agent-cold-warm-message-8e2a29af-kova-260723-235236-063cf6/openclaw/timeline.jsonl |
  | warm | 4313 ms | 131 ms | 4182 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-agent-cold-warm-message-8e2a29af-kova-260723-235236-063cf6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 134 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 64 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-agent-cold-warm-message-2ab680e0-kova-260723-235236-063cf6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 958.6 MB; tracked total 958.6 MB; max CPU 157.9%; samples 16; roles agent-cli 958.6MB/157.9%, agent-process 958.6MB/157.9%, command-tree 958.6MB/157.9%, status-cli 565.6MB/153.7%
- agent: turn 4601ms; cold/warm 4601ms/4427ms; cold-warm delta 174ms; pre-provider 4290ms; provider 3ms; metadata scans 14 (281.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4592.3ms; max 4601ms; pre-provider p95 4284.2ms
- agent CLI attribution: cold known 150ms / unattributed 4140ms; warm known 134ms / unattributed 4040ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4601ms; pre-provider 4290ms; provider 3ms; post-provider 308ms; response true
    - active window: metadata scans 7 (148.76ms total, max 62.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4290ms; provider 3ms; post-provider 308ms; unknown 3807.47ms; source plugins.metadata.scan 482.53ms
  - warm: total 4427ms; pre-provider 4174ms; provider 1ms; post-provider 252ms; response true
    - active window: metadata scans 7 (132.57ms total, max 67.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4174ms; provider 1ms; post-provider 252ms; unknown 3691.47ms; source plugins.metadata.scan 482.53ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4290 ms | 150 ms | 4140 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-agent-cold-warm-message-2ab680e0-kova-260723-235236-063cf6/openclaw/timeline.jsonl |
  | warm | 4174 ms | 134 ms | 4040 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-agent-cold-warm-message-2ab680e0-kova-260723-235236-063cf6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 150 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 134 ms | 67 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-agent-cold-warm-message-67b331a3-kova-260723-235236-063cf6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 955.4 MB; tracked total 955.4 MB; max CPU 155.9%; samples 16; roles agent-cli 955.4MB/155.9%, agent-process 955.4MB/155.9%, command-tree 955.4MB/155.9%, status-cli 773.6MB/153.7%
- agent: turn 4496ms; cold/warm 4496ms/4376ms; cold-warm delta 120ms; pre-provider 4188ms; provider 3ms; metadata scans 14 (261.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4490ms; max 4496ms; pre-provider p95 4184.85ms
- agent CLI attribution: cold known 119ms / unattributed 4069ms; warm known 141ms / unattributed 3984ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4496ms; pre-provider 4188ms; provider 3ms; post-provider 305ms; response true
    - active window: metadata scans 7 (120.65ms total, max 55.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4188ms; provider 3ms; post-provider 305ms; unknown 3724.73ms; source plugins.metadata.scan 463.27ms
  - warm: total 4376ms; pre-provider 4125ms; provider 1ms; post-provider 250ms; response true
    - active window: metadata scans 7 (140.88ms total, max 64.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4125ms; provider 1ms; post-provider 250ms; unknown 3661.73ms; source plugins.metadata.scan 463.27ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4188 ms | 119 ms | 4069 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-agent-cold-warm-message-67b331a3-kova-260723-235236-063cf6/openclaw/timeline.jsonl |
  | warm | 4125 ms | 141 ms | 3984 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-agent-cold-warm-message-67b331a3-kova-260723-235236-063cf6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 119 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 65 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-235236-063cf6-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-235236-063cf6-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-235236-063cf6-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-fresh-install-fresh-r1-697fad55-kova-260723-235236-063cf6
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-fresh-install-fresh-r2-da880701-kova-260723-235236-063cf6
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-235236-063cf6
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-fresh-install-onboarded-9f99e904-kova-260723-235236-063cf6
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-fresh-install-onboarded-f9c24855-kova-260723-235236-063cf6
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-fresh-install-onboarded-fe872c26-kova-260723-235236-063cf6
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-235236-063cf6
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-235236-063cf6
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-235236-063cf6/kova-bundled-runtime-deps-mi-150715ba-kova-260723-235236-063cf6
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mry621ox-41i-6ce3dd9b`
- Result: removed
- Duration: 425ms

