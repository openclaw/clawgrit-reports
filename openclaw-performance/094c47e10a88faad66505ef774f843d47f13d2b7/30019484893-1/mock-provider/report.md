# Kova OpenClaw Runtime Report

> **⚠️ [PARTIAL]** — Required release gate platform coverage linux-arm64 was not present in the report.

## Verdict

| Field | Value |
|---|---|
| Verdict | PARTIAL |
| Reason | Required release gate platform coverage linux-arm64 was not present in the report. |
| Blocking findings | 0 |
| Warnings | 21 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260723-153714-8256d9` |
| Generated | 2026-07-23T15:47:12.295Z |
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
| info | Kova | report | 15 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3673ms | 920.2MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 4149ms | 919.3MB | n/a | 147% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3816ms | 918.5MB | n/a | 146% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 4189ms | 921.4MB | n/a | 163% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 165.6% | 6087ms | 6672ms | 5649ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4470ms | 927.4MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4055ms | 910.2 MB | 1651 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3673ms | 926.1 MB | 1676.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3624ms | 920.2 MB | 1670.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3899ms | 915.7 MB | 1638.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4403ms | 930.1 MB | 1676.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4149ms | 919.3 MB | 1679.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3816ms | 922.1 MB | 927.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3652ms | 909 MB | 913.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3911ms | 918.5 MB | 923.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3808ms | 921.4 MB | 1670.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 4189ms | 916.8 MB | 1648.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 4610ms | 932.3 MB | 1672.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 959.8 MB | 6308ms | 6672ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 957.5 MB | 6087ms | 6053ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 958.1 MB | 5744ms | 7672ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 4470ms | 924.6 MB | 1662.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3962ms | 938.2 MB | 1660.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4770ms | 927.4 MB | 1684.2 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 959.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 938.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 200% (scenario bundled-plugin-startup/fresh)
- agent-process: RSS 959.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 938.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 200% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 959.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.3% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 763.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 179.3% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 753.9 MB (scenario bundled-plugin-startup/fresh); CPU 172% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 616.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 171% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-agent-cold-warm-message-8e2a29af-kova-260723-153714-8256d9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 959.8 MB; tracked total 959.8 MB; max CPU 165.6%; samples 20; roles agent-cli 959.8MB/165.6%, agent-process 959.8MB/165.6%, command-tree 959.8MB/165.6%, status-cli 680.4MB/161.6%
- agent: turn 6672ms; cold/warm 6308ms/6672ms; cold-warm delta 0ms; pre-provider 6312ms; provider 1ms; metadata scans 14 (337.65ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6653.8ms; max 6672ms; pre-provider p95 6291.85ms
- agent CLI attribution: cold known 165ms / unattributed 5744ms; warm known 172ms / unattributed 6140ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 77.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6308ms; pre-provider 5909ms; provider 4ms; post-provider 395ms; response true
    - active window: metadata scans 7 (166.35ms total, max 68.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5909ms; provider 4ms; post-provider 395ms; unknown 5285.2ms; source plugins.metadata.scan 623.8ms
  - warm: total 6672ms; pre-provider 6312ms; provider 1ms; post-provider 359ms; response true
    - active window: metadata scans 7 (171.3ms total, max 77.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6312ms; provider 1ms; post-provider 359ms; unknown 5688.2ms; source plugins.metadata.scan 623.8ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5909 ms | 165 ms | 5744 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-agent-cold-warm-message-8e2a29af-kova-260723-153714-8256d9/openclaw/timeline.jsonl |
  | warm | 6312 ms | 172 ms | 6140 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-agent-cold-warm-message-8e2a29af-kova-260723-153714-8256d9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 165 ms | 68 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 172 ms | 78 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-agent-cold-warm-message-2ab680e0-kova-260723-153714-8256d9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 957.5 MB; tracked total 957.5 MB; max CPU 165.3%; samples 19; roles agent-cli 957.5MB/165.3%, command-tree 957.5MB/165.8%, agent-process 957.5MB/165.3%, status-cli 727.2MB/165.8%
- agent: turn 6087ms; cold/warm 6087ms/6053ms; cold-warm delta 34ms; pre-provider 5649ms; provider 4ms; metadata scans 14 (376.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6085.3ms; max 6087ms; pre-provider p95 5676.55ms
- agent CLI attribution: cold known 209ms / unattributed 5440ms; warm known 168ms / unattributed 5510ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 97.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6087ms; pre-provider 5649ms; provider 4ms; post-provider 434ms; response true
    - active window: metadata scans 7 (208.68ms total, max 97.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5649ms; provider 4ms; post-provider 434ms; unknown 4996.32ms; source plugins.metadata.scan 652.68ms
  - warm: total 6053ms; pre-provider 5678ms; provider 2ms; post-provider 373ms; response true
    - active window: metadata scans 7 (167.58ms total, max 81.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5678ms; provider 2ms; post-provider 373ms; unknown 5025.32ms; source plugins.metadata.scan 652.68ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5649 ms | 209 ms | 5440 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-agent-cold-warm-message-2ab680e0-kova-260723-153714-8256d9/openclaw/timeline.jsonl |
  | warm | 5678 ms | 168 ms | 5510 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-agent-cold-warm-message-2ab680e0-kova-260723-153714-8256d9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 209 ms | 97 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 168 ms | 82 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-agent-cold-warm-message-67b331a3-kova-260723-153714-8256d9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 958.1 MB; tracked total 958.1 MB; max CPU 165.9%; samples 21; roles agent-cli 958.1MB/165.9%, command-tree 958.1MB/166.2%, agent-process 958.1MB/165.9%, status-cli 750.4MB/166.2%
- agent: turn 7672ms; cold/warm 5744ms/7672ms; cold-warm delta 0ms; pre-provider 7212ms; provider 1ms; metadata scans 14 (392.34ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7575.6ms; max 7672ms; pre-provider p95 7117.2ms
- agent CLI attribution: cold known 178ms / unattributed 5138ms; warm known 213ms / unattributed 6999ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 175.49ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5744ms; pre-provider 5316ms; provider 3ms; post-provider 425ms; response true
    - active window: metadata scans 7 (179.14ms total, max 79.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5316ms; provider 3ms; post-provider 425ms; unknown 4469.61ms; source plugins.metadata.scan 846.39ms
  - warm: total 7672ms; pre-provider 7212ms; provider 1ms; post-provider 459ms; response true
    - active window: metadata scans 7 (213.2ms total, max 98.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7212ms; provider 1ms; post-provider 459ms; unknown 6365.61ms; source plugins.metadata.scan 846.39ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5316 ms | 178 ms | 5138 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-agent-cold-warm-message-67b331a3-kova-260723-153714-8256d9/openclaw/timeline.jsonl |
  | warm | 7212 ms | 213 ms | 6999 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-agent-cold-warm-message-67b331a3-kova-260723-153714-8256d9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 178 ms | 79 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 213 ms | 98 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-153714-8256d9-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-153714-8256d9-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-153714-8256d9-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-fresh-install-fresh-r1-697fad55-kova-260723-153714-8256d9
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-fresh-install-fresh-r2-da880701-kova-260723-153714-8256d9
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-153714-8256d9
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-fresh-install-onboarded-9f99e904-kova-260723-153714-8256d9
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-fresh-install-onboarded-f9c24855-kova-260723-153714-8256d9
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-fresh-install-onboarded-fe872c26-kova-260723-153714-8256d9
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-153714-8256d9
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-153714-8256d9
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153714-8256d9/kova-bundled-runtime-deps-mi-150715ba-kova-260723-153714-8256d9
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxod006-41q-3a7eadb2`
- Result: removed
- Duration: 497ms

