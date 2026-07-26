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
| Run ID | `kova-260726-123457-9ae3a7` |
| Generated | 2026-07-26T12:42:49.397Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5273ms | 897.4MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5255ms | 901.4MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5268ms | 951.2MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5295ms | 946.8MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.4% | 4815ms | 4877ms | 4258ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5306ms | 962.2MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5810ms | 897.4 MB | 1691.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5273ms | 884.4 MB | 1673.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5233ms | 924.5 MB | 1714.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5217ms | 905.3 MB | 1622.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5366ms | 888.8 MB | 1600.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5255ms | 901.4 MB | 1682.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5268ms | 951.2 MB | 951.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5254ms | 960.7 MB | 960.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5344ms | 950.8 MB | 950.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5295ms | 948.8 MB | 1354.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5248ms | 946.8 MB | 1343.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5320ms | 945.1 MB | 1339.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 886.2 MB | 4818ms | 4653ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 936.9 MB | 4815ms | 4903ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 884.1 MB | 4793ms | 4877ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5306ms | 962.2 MB | 1613.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5288ms | 939 MB | 1685.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5318ms | 992.8 MB | 1786.2 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 992.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario fresh-install/fresh)
- gateway-tree: RSS 992.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario fresh-install/fresh)
- agent-cli: RSS 936.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 936.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 936.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 854.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 568.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 504.8 MB (scenario fresh-install/fresh); CPU 148% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-agent-cold-warm-message-8e2a29af-kova-260726-123457-9ae3a7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 886.2 MB; tracked total 886.2 MB; max CPU 152.4%; samples 16; roles agent-cli 886.2MB/152.4%, agent-process 886.2MB/152.4%, command-tree 886.2MB/152.4%, status-cli 783.1MB/149.4%
- agent: turn 4818ms; cold/warm 4818ms/4653ms; cold-warm delta 165ms; pre-provider 4285ms; provider 3ms; metadata scans 14 (250.32ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4809.75ms; max 4818ms; pre-provider p95 4279.25ms
- agent CLI attribution: cold known 129ms / unattributed 4156ms; warm known 121ms / unattributed 4049ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4818ms; pre-provider 4285ms; provider 3ms; post-provider 530ms; response true
    - active window: metadata scans 7 (130.21ms total, max 60.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4285ms; provider 3ms; post-provider 530ms; unknown 3904.67ms; source plugins.metadata.scan 380.33ms
  - warm: total 4653ms; pre-provider 4170ms; provider 1ms; post-provider 482ms; response true
    - active window: metadata scans 7 (120.11ms total, max 61.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4170ms; provider 1ms; post-provider 482ms; unknown 3789.67ms; source plugins.metadata.scan 380.33ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4285 ms | 129 ms | 4156 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-agent-cold-warm-message-8e2a29af-kova-260726-123457-9ae3a7/openclaw/timeline.jsonl |
  | warm | 4170 ms | 121 ms | 4049 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-agent-cold-warm-message-8e2a29af-kova-260726-123457-9ae3a7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-agent-cold-warm-message-2ab680e0-kova-260726-123457-9ae3a7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 936.9 MB; tracked total 936.9 MB; max CPU 153.9%; samples 16; roles agent-cli 936.9MB/153.9%, agent-process 936.9MB/153.9%, command-tree 936.9MB/153.9%, status-cli 854.2MB/152.7%
- agent: turn 4903ms; cold/warm 4815ms/4903ms; cold-warm delta 0ms; pre-provider 4412ms; provider 1ms; metadata scans 14 (261.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4898.6ms; max 4903ms; pre-provider p95 4404.3ms
- agent CLI attribution: cold known 127ms / unattributed 4131ms; warm known 135ms / unattributed 4277ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4815ms; pre-provider 4258ms; provider 3ms; post-provider 554ms; response true
    - active window: metadata scans 7 (126.86ms total, max 56.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4258ms; provider 3ms; post-provider 554ms; unknown 3863.89ms; source plugins.metadata.scan 394.11ms
  - warm: total 4903ms; pre-provider 4412ms; provider 1ms; post-provider 490ms; response true
    - active window: metadata scans 7 (134.78ms total, max 68.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4412ms; provider 1ms; post-provider 490ms; unknown 4017.89ms; source plugins.metadata.scan 394.11ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4258 ms | 127 ms | 4131 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-agent-cold-warm-message-2ab680e0-kova-260726-123457-9ae3a7/openclaw/timeline.jsonl |
  | warm | 4412 ms | 135 ms | 4277 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-agent-cold-warm-message-2ab680e0-kova-260726-123457-9ae3a7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 68 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-agent-cold-warm-message-67b331a3-kova-260726-123457-9ae3a7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 884.1 MB; tracked total 884.1 MB; max CPU 151.4%; samples 16; roles agent-cli 884.1MB/151.4%, agent-process 884.1MB/151.4%, command-tree 884.1MB/151.4%, status-cli 781.6MB/150.8%
- agent: turn 4877ms; cold/warm 4793ms/4877ms; cold-warm delta 0ms; pre-provider 4348ms; provider 1ms; metadata scans 14 (256.91ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4872.8ms; max 4877ms; pre-provider p95 4342.8ms
- agent CLI attribution: cold known 132ms / unattributed 4112ms; warm known 125ms / unattributed 4223ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4793ms; pre-provider 4244ms; provider 3ms; post-provider 546ms; response true
    - active window: metadata scans 7 (130.68ms total, max 59.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4244ms; provider 3ms; post-provider 546ms; unknown 3847.1ms; source plugins.metadata.scan 396.9ms
  - warm: total 4877ms; pre-provider 4348ms; provider 1ms; post-provider 528ms; response true
    - active window: metadata scans 7 (126.23ms total, max 65.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4348ms; provider 1ms; post-provider 528ms; unknown 3951.1ms; source plugins.metadata.scan 396.9ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4244 ms | 132 ms | 4112 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-agent-cold-warm-message-67b331a3-kova-260726-123457-9ae3a7/openclaw/timeline.jsonl |
  | warm | 4348 ms | 125 ms | 4223 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-agent-cold-warm-message-67b331a3-kova-260726-123457-9ae3a7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 132 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 65 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-123457-9ae3a7-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-123457-9ae3a7-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-123457-9ae3a7-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-fresh-install-fresh-r1-697fad55-kova-260726-123457-9ae3a7
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-fresh-install-fresh-r2-da880701-kova-260726-123457-9ae3a7
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-fresh-install-fresh-r3-82f8bdbd-kova-260726-123457-9ae3a7
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-fresh-install-onboarded-9f99e904-kova-260726-123457-9ae3a7
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-fresh-install-onboarded-f9c24855-kova-260726-123457-9ae3a7
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-fresh-install-onboarded-fe872c26-kova-260726-123457-9ae3a7
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-123457-9ae3a7
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-123457-9ae3a7
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-123457-9ae3a7/kova-bundled-runtime-deps-mi-150715ba-kova-260726-123457-9ae3a7
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms1s64se-42h-304f279c`
- Result: removed
- Duration: 415ms

