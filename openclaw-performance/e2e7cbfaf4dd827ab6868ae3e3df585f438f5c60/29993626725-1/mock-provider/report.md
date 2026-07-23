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
| Run ID | `kova-260723-090350-fc416c` |
| Generated | 2026-07-23T09:10:51.766Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3312ms | 920.2MB | n/a | 152% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3158ms | 921.7MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3166ms | 909.1MB | n/a | 150% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3014ms | 920.5MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.4% | 4500ms | 4504ms | 4166ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3204ms | 918.6MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3539ms | 907.9 MB | 1610.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3099ms | 921.7 MB | 1646.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3312ms | 920.2 MB | 1679.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3178ms | 926 MB | 1697.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3158ms | 921.7 MB | 1672.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3128ms | 921.4 MB | 1675.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2961ms | 938.4 MB | 938.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3166ms | 908.7 MB | 913.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3463ms | 909.1 MB | 914.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3014ms | 932.8 MB | 1456.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3125ms | 918.4 MB | 1448.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2954ms | 920.5 MB | 1449.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 966 MB | 4455ms | 4487ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 934.2 MB | 4500ms | 4504ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 967.5 MB | 4659ms | 4560ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3204ms | 916.5 MB | 1676 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3222ms | 918.6 MB | 1695 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3019ms | 918.8 MB | 1679.5 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 967.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 967.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159% (scenario fresh-install/onboarded-user)
- agent-process: RSS 967.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 550.4 MB (scenario fresh-install/onboarded-user); CPU 159% (scenario fresh-install/onboarded-user)
- status-cli: RSS 787.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159% (scenario fresh-install/onboarded-user)
- gateway: RSS 938.4 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 157% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 926 MB (scenario fresh-install/onboarded-user); CPU 157% (scenario bundled-runtime-deps/missing-plugin-index)
- model-cli: RSS 598.3 MB (scenario fresh-install/fresh); CPU 152% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-agent-cold-warm-message-8e2a29af-kova-260723-090350-fc416c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 966 MB; tracked total 966 MB; max CPU 152.4%; samples 16; roles agent-cli 966MB/152.4%, command-tree 966MB/155.9%, agent-process 966MB/152.4%, status-cli 787.5MB/155.9%
- agent: turn 4487ms; cold/warm 4455ms/4487ms; cold-warm delta 0ms; pre-provider 4225ms; provider 1ms; metadata scans 14 (263.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4485.4ms; max 4487ms; pre-provider p95 4221.5ms
- agent CLI attribution: cold known 129ms / unattributed 4026ms; warm known 137ms / unattributed 4088ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4455ms; pre-provider 4155ms; provider 2ms; post-provider 298ms; response true
    - active window: metadata scans 7 (128.27ms total, max 58.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4155ms; provider 2ms; post-provider 298ms; unknown 3691.29ms; source plugins.metadata.scan 463.71ms
  - warm: total 4487ms; pre-provider 4225ms; provider 1ms; post-provider 261ms; response true
    - active window: metadata scans 7 (135.29ms total, max 64.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4225ms; provider 1ms; post-provider 261ms; unknown 3761.29ms; source plugins.metadata.scan 463.71ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4155 ms | 129 ms | 4026 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-agent-cold-warm-message-8e2a29af-kova-260723-090350-fc416c/openclaw/timeline.jsonl |
  | warm | 4225 ms | 137 ms | 4088 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-agent-cold-warm-message-8e2a29af-kova-260723-090350-fc416c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 65 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-agent-cold-warm-message-2ab680e0-kova-260723-090350-fc416c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 934.2 MB; tracked total 934.2 MB; max CPU 154.4%; samples 16; roles agent-cli 934.2MB/154.4%, command-tree 934.2MB/156.4%, agent-process 934.2MB/154.4%, status-cli 761MB/156.4%
- agent: turn 4504ms; cold/warm 4500ms/4504ms; cold-warm delta 0ms; pre-provider 4255ms; provider 1ms; metadata scans 14 (268.07ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4503.8ms; max 4504ms; pre-provider p95 4250.55ms
- agent CLI attribution: cold known 137ms / unattributed 4029ms; warm known 130ms / unattributed 4125ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 77.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4500ms; pre-provider 4166ms; provider 3ms; post-provider 331ms; response true
    - active window: metadata scans 7 (138.37ms total, max 59.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4166ms; provider 3ms; post-provider 331ms; unknown 3675.33ms; source plugins.metadata.scan 490.67ms
  - warm: total 4504ms; pre-provider 4255ms; provider 1ms; post-provider 248ms; response true
    - active window: metadata scans 7 (129.7ms total, max 63.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4255ms; provider 1ms; post-provider 248ms; unknown 3764.33ms; source plugins.metadata.scan 490.67ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4166 ms | 137 ms | 4029 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-agent-cold-warm-message-2ab680e0-kova-260723-090350-fc416c/openclaw/timeline.jsonl |
  | warm | 4255 ms | 130 ms | 4125 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-agent-cold-warm-message-2ab680e0-kova-260723-090350-fc416c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-agent-cold-warm-message-67b331a3-kova-260723-090350-fc416c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 967.5 MB; tracked total 967.5 MB; max CPU 155.9%; samples 16; roles agent-cli 967.5MB/155.9%, agent-process 967.5MB/155.9%, command-tree 967.5MB/155.9%, status-cli 758.7MB/154.7%
- agent: turn 4659ms; cold/warm 4659ms/4560ms; cold-warm delta 99ms; pre-provider 4350ms; provider 3ms; metadata scans 14 (269.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4654.05ms; max 4659ms; pre-provider p95 4347.9ms
- agent CLI attribution: cold known 140ms / unattributed 4210ms; warm known 128ms / unattributed 4180ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4659ms; pre-provider 4350ms; provider 3ms; post-provider 306ms; response true
    - active window: metadata scans 7 (141.03ms total, max 61.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4350ms; provider 3ms; post-provider 306ms; unknown 3866.53ms; source plugins.metadata.scan 483.47ms
  - warm: total 4560ms; pre-provider 4308ms; provider 2ms; post-provider 250ms; response true
    - active window: metadata scans 7 (128.86ms total, max 63.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4308ms; provider 2ms; post-provider 250ms; unknown 3824.53ms; source plugins.metadata.scan 483.47ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4350 ms | 140 ms | 4210 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-agent-cold-warm-message-67b331a3-kova-260723-090350-fc416c/openclaw/timeline.jsonl |
  | warm | 4308 ms | 128 ms | 4180 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-agent-cold-warm-message-67b331a3-kova-260723-090350-fc416c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 140 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 63 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-090350-fc416c-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-090350-fc416c-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-090350-fc416c-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-fresh-install-fresh-r1-697fad55-kova-260723-090350-fc416c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-fresh-install-fresh-r2-da880701-kova-260723-090350-fc416c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-090350-fc416c
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-fresh-install-onboarded-9f99e904-kova-260723-090350-fc416c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-fresh-install-onboarded-f9c24855-kova-260723-090350-fc416c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-fresh-install-onboarded-fe872c26-kova-260723-090350-fc416c
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-090350-fc416c
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-090350-fc416c
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-090350-fc416c/kova-bundled-runtime-deps-mi-150715ba-kova-260723-090350-fc416c
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxab37y-417-e333468b`
- Result: removed
- Duration: 433ms

