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
| Run ID | `kova-260724-033615-4ec7b1` |
| Generated | 2026-07-24T03:43:23.690Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3342ms | 938.6MB | n/a | 145% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3096ms | 933.6MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3183ms | 911.1MB | n/a | 150% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3133ms | 935.8MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.9% | 4419ms | 4675ms | 4108ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3210ms | 938.9MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3567ms | 913.8 MB | 1620.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2940ms | 938.6 MB | 1522.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3342ms | 948.1 MB | 1735.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3096ms | 932 MB | 1691.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3070ms | 933.6 MB | 1717.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3149ms | 940.7 MB | 1676.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3183ms | 911.1 MB | 916 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3172ms | 910.8 MB | 915.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3279ms | 927.9 MB | 933.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3133ms | 937.3 MB | 1467.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3247ms | 935.8 MB | 1470.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3022ms | 920.9 MB | 1447 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 960.5 MB | 4365ms | 4336ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 959.9 MB | 4419ms | 5128ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 934.5 MB | 4588ms | 4675ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3079ms | 935 MB | 1727.8 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3210ms | 938.9 MB | 1717.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3262ms | 939.1 MB | 1719.3 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 960.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 960.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 960.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 948.1 MB (scenario fresh-install/fresh); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- plugin-cli: RSS 787.4 MB (scenario fresh-install/fresh); CPU 159% (scenario fresh-install/fresh)
- gateway-tree: RSS 948.1 MB (scenario fresh-install/fresh); CPU 154% (scenario bundled-runtime-deps/missing-plugin-index)
- status-cli: RSS 793.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario fresh-install/onboarded-user)
- model-cli: RSS 629.7 MB (scenario fresh-install/fresh); CPU 154% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-agent-cold-warm-message-8e2a29af-kova-260724-033615-4ec7b1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 960.5 MB; tracked total 960.5 MB; max CPU 154.9%; samples 16; roles agent-cli 960.5MB/154.9%, agent-process 960.5MB/154.9%, command-tree 960.5MB/154.9%, status-cli 733.5MB/152.8%
- agent: turn 4365ms; cold/warm 4365ms/4336ms; cold-warm delta 29ms; pre-provider 4062ms; provider 2ms; metadata scans 14 (249.67ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4363.55ms; max 4365ms; pre-provider p95 4084.8ms
- agent CLI attribution: cold known 121ms / unattributed 3941ms; warm known 125ms / unattributed 3961ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 70.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4365ms; pre-provider 4062ms; provider 2ms; post-provider 301ms; response true
    - active window: metadata scans 7 (122.31ms total, max 60.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4062ms; provider 2ms; post-provider 301ms; unknown 3602.53ms; source plugins.metadata.scan 459.47ms
  - warm: total 4336ms; pre-provider 4086ms; provider 1ms; post-provider 249ms; response true
    - active window: metadata scans 7 (127.36ms total, max 62.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4086ms; provider 1ms; post-provider 249ms; unknown 3626.53ms; source plugins.metadata.scan 459.47ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4062 ms | 121 ms | 3941 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-agent-cold-warm-message-8e2a29af-kova-260724-033615-4ec7b1/openclaw/timeline.jsonl |
  | warm | 4086 ms | 125 ms | 3961 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-agent-cold-warm-message-8e2a29af-kova-260724-033615-4ec7b1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 63 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-agent-cold-warm-message-2ab680e0-kova-260724-033615-4ec7b1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 959.9 MB; tracked total 959.9 MB; max CPU 161.9%; samples 17; roles agent-cli 959.9MB/161.9%, agent-process 959.9MB/161.9%, command-tree 959.9MB/161.9%, status-cli 703.7MB/152.9%
- agent: turn 5128ms; cold/warm 4419ms/5128ms; cold-warm delta 0ms; pre-provider 4805ms; provider 1ms; metadata scans 14 (271.55ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5092.55ms; max 5128ms; pre-provider p95 4770.15ms
- agent CLI attribution: cold known 120ms / unattributed 3988ms; warm known 152ms / unattributed 4653ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4419ms; pre-provider 4108ms; provider 2ms; post-provider 309ms; response true
    - active window: metadata scans 7 (119.84ms total, max 57.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4108ms; provider 2ms; post-provider 309ms; unknown 3638.93ms; source plugins.metadata.scan 469.07ms
  - warm: total 5128ms; pre-provider 4805ms; provider 1ms; post-provider 322ms; response true
    - active window: metadata scans 7 (151.71ms total, max 76.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4805ms; provider 1ms; post-provider 322ms; unknown 4335.93ms; source plugins.metadata.scan 469.07ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4108 ms | 120 ms | 3988 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-agent-cold-warm-message-2ab680e0-kova-260724-033615-4ec7b1/openclaw/timeline.jsonl |
  | warm | 4805 ms | 152 ms | 4653 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-agent-cold-warm-message-2ab680e0-kova-260724-033615-4ec7b1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 120 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 152 ms | 77 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-agent-cold-warm-message-67b331a3-kova-260724-033615-4ec7b1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 934.5 MB; tracked total 934.5 MB; max CPU 153.9%; samples 16; roles agent-cli 934.5MB/153.9%, agent-process 934.5MB/153.9%, command-tree 934.5MB/153.9%, status-cli 681.9MB/152.9%
- agent: turn 4675ms; cold/warm 4588ms/4675ms; cold-warm delta 0ms; pre-provider 4410ms; provider 1ms; metadata scans 14 (267.79ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4670.65ms; max 4675ms; pre-provider p95 4403.95ms
- agent CLI attribution: cold known 127ms / unattributed 4162ms; warm known 139ms / unattributed 4271ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4588ms; pre-provider 4289ms; provider 3ms; post-provider 296ms; response true
    - active window: metadata scans 7 (128.63ms total, max 60.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4289ms; provider 3ms; post-provider 296ms; unknown 3823.16ms; source plugins.metadata.scan 465.84ms
  - warm: total 4675ms; pre-provider 4410ms; provider 1ms; post-provider 264ms; response true
    - active window: metadata scans 7 (139.16ms total, max 71.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4410ms; provider 1ms; post-provider 264ms; unknown 3944.16ms; source plugins.metadata.scan 465.84ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4289 ms | 127 ms | 4162 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-agent-cold-warm-message-67b331a3-kova-260724-033615-4ec7b1/openclaw/timeline.jsonl |
  | warm | 4410 ms | 139 ms | 4271 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-agent-cold-warm-message-67b331a3-kova-260724-033615-4ec7b1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 139 ms | 71 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-033615-4ec7b1-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-033615-4ec7b1-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-033615-4ec7b1-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-fresh-install-fresh-r1-697fad55-kova-260724-033615-4ec7b1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-fresh-install-fresh-r2-da880701-kova-260724-033615-4ec7b1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-033615-4ec7b1
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-fresh-install-onboarded-9f99e904-kova-260724-033615-4ec7b1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-fresh-install-onboarded-f9c24855-kova-260724-033615-4ec7b1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-fresh-install-onboarded-fe872c26-kova-260724-033615-4ec7b1
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-033615-4ec7b1
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-033615-4ec7b1
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-033615-4ec7b1/kova-bundled-runtime-deps-mi-150715ba-kova-260724-033615-4ec7b1
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrye1npe-41e-7309ee73`
- Result: removed
- Duration: 438ms

