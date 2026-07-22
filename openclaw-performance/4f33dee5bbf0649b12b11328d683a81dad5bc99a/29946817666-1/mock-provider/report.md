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
| Run ID | `kova-260722-183025-068e87` |
| Generated | 2026-07-22T18:38:09.795Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3990ms | 935.4MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3931ms | 925.1MB | n/a | 149% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3194ms | 920.2MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3074ms | 928.6MB | n/a | 141% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.9% | 4652ms | 4456ms | 4345ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3165ms | 926MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3990ms | 935.4 MB | 1664 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3500ms | 935.6 MB | 1714.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 4155ms | 935 MB | 1657.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4080ms | 925.1 MB | 1714 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3931ms | 933.5 MB | 1677.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3612ms | 897.7 MB | 1697.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3827ms | 920.2 MB | 925.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3057ms | 930.5 MB | 935.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3194ms | 913 MB | 918.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3304ms | 925.3 MB | 1456.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3074ms | 937.4 MB | 1468.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2873ms | 928.6 MB | 1461.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 952.3 MB | 4652ms | 4456ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 956.4 MB | 4660ms | 4709ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 971.9 MB | 4512ms | 4442ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3466ms | 926 MB | 1683.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3051ms | 922.2 MB | 1688.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3165ms | 937.3 MB | 1664 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 971.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 971.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.9% (scenario fresh-install/onboarded-user)
- agent-process: RSS 971.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.7% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 799.8 MB (scenario fresh-install/onboarded-user); CPU 171.9% (scenario fresh-install/onboarded-user)
- status-cli: RSS 766.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 170.9% (scenario fresh-install/onboarded-user)
- gateway: RSS 937.4 MB (scenario bundled-plugin-startup/fresh); CPU 157% (scenario fresh-install/fresh)
- model-cli: RSS 568.3 MB (scenario fresh-install/fresh); CPU 161.9% (scenario fresh-install/fresh)
- gateway-tree: RSS 937.4 MB (scenario bundled-plugin-startup/fresh); CPU 157% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-agent-cold-warm-message-8e2a29af-kova-260722-183025-068e87
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 952.3 MB; tracked total 952.3 MB; max CPU 154.9%; samples 15; roles agent-cli 952.3MB/154.9%, agent-process 952.3MB/154.9%, command-tree 952.3MB/154.9%, status-cli 525.3MB/154.7%
- agent: turn 4652ms; cold/warm 4652ms/4456ms; cold-warm delta 196ms; pre-provider 4345ms; provider 3ms; metadata scans 10 (218.29ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4642.2ms; max 4652ms; pre-provider p95 4338.3ms
- agent CLI attribution: cold known 106ms / unattributed 4239ms; warm known 110ms / unattributed 4101ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4652ms; pre-provider 4345ms; provider 3ms; post-provider 304ms; response true
    - active window: metadata scans 5 (107.26ms total, max 61.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4345ms; provider 3ms; post-provider 304ms; unknown 4029.84ms; source plugins.metadata.scan 315.16ms
  - warm: total 4456ms; pre-provider 4211ms; provider 1ms; post-provider 244ms; response true
    - active window: metadata scans 5 (111.03ms total, max 66.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4211ms; provider 1ms; post-provider 244ms; unknown 3895.84ms; source plugins.metadata.scan 315.16ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4345 ms | 106 ms | 4239 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-agent-cold-warm-message-8e2a29af-kova-260722-183025-068e87/openclaw/timeline.jsonl |
  | warm | 4211 ms | 110 ms | 4101 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-agent-cold-warm-message-8e2a29af-kova-260722-183025-068e87/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 110 ms | 66 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-agent-cold-warm-message-2ab680e0-kova-260722-183025-068e87
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 956.4 MB; tracked total 956.4 MB; max CPU 155.7%; samples 15; roles agent-cli 956.4MB/155.7%, agent-process 956.4MB/155.7%, command-tree 956.4MB/155.7%, status-cli 524.5MB/152.8%
- agent: turn 4709ms; cold/warm 4660ms/4709ms; cold-warm delta 0ms; pre-provider 4447ms; provider 1ms; metadata scans 10 (213.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4706.55ms; max 4709ms; pre-provider p95 4442.05ms
- agent CLI attribution: cold known 102ms / unattributed 4246ms; warm known 112ms / unattributed 4335ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75.42ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4660ms; pre-provider 4348ms; provider 2ms; post-provider 310ms; response true
    - active window: metadata scans 5 (100.09ms total, max 56.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4348ms; provider 2ms; post-provider 310ms; unknown 4034.78ms; source plugins.metadata.scan 313.22ms
  - warm: total 4709ms; pre-provider 4447ms; provider 1ms; post-provider 261ms; response true
    - active window: metadata scans 5 (113.79ms total, max 67.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4447ms; provider 1ms; post-provider 261ms; unknown 4133.78ms; source plugins.metadata.scan 313.22ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4348 ms | 102 ms | 4246 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-agent-cold-warm-message-2ab680e0-kova-260722-183025-068e87/openclaw/timeline.jsonl |
  | warm | 4447 ms | 112 ms | 4335 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-agent-cold-warm-message-2ab680e0-kova-260722-183025-068e87/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 102 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 112 ms | 67 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-agent-cold-warm-message-67b331a3-kova-260722-183025-068e87
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 971.9 MB; tracked total 971.9 MB; max CPU 152.9%; samples 15; roles agent-cli 971.9MB/152.9%, command-tree 971.9MB/155.7%, agent-process 971.9MB/152.9%, status-cli 526.9MB/155.7%
- agent: turn 4512ms; cold/warm 4512ms/4442ms; cold-warm delta 70ms; pre-provider 4198ms; provider 2ms; metadata scans 10 (209.37ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4508.5ms; max 4512ms; pre-provider p95 4202.75ms
- agent CLI attribution: cold known 101ms / unattributed 4097ms; warm known 108ms / unattributed 4095ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4512ms; pre-provider 4198ms; provider 2ms; post-provider 312ms; response true
    - active window: metadata scans 5 (101.54ms total, max 57.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4198ms; provider 2ms; post-provider 312ms; unknown 3893.21ms; source plugins.metadata.scan 304.79ms
  - warm: total 4442ms; pre-provider 4203ms; provider 1ms; post-provider 238ms; response true
    - active window: metadata scans 5 (107.83ms total, max 63.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4203ms; provider 1ms; post-provider 238ms; unknown 3898.21ms; source plugins.metadata.scan 304.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4198 ms | 101 ms | 4097 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-agent-cold-warm-message-67b331a3-kova-260722-183025-068e87/openclaw/timeline.jsonl |
  | warm | 4203 ms | 108 ms | 4095 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-agent-cold-warm-message-67b331a3-kova-260722-183025-068e87/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 101 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 108 ms | 64 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-183025-068e87-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-183025-068e87-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-183025-068e87-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-fresh-install-fresh-r1-697fad55-kova-260722-183025-068e87
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-fresh-install-fresh-r2-da880701-kova-260722-183025-068e87
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-183025-068e87
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-fresh-install-onboarded-9f99e904-kova-260722-183025-068e87
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-fresh-install-onboarded-f9c24855-kova-260722-183025-068e87
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-fresh-install-onboarded-fe872c26-kova-260722-183025-068e87
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-183025-068e87
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-183025-068e87
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-183025-068e87/kova-bundled-runtime-deps-mi-150715ba-kova-260722-183025-068e87
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrwf3v8w-410-2466d212`
- Result: removed
- Duration: 409ms

