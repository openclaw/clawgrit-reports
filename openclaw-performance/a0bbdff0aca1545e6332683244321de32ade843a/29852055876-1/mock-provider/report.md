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
| Run ID | `kova-260721-205929-3ace3f` |
| Generated | 2026-07-21T21:06:17.315Z |
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
| fresh-install/fresh | 3 | PASS:3 | 2919ms | 909.6MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3044ms | 906.6MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2870ms | 898.5MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3142ms | 926.5MB | n/a | 151% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 165.7% | 4469ms | 4479ms | 4145ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3124ms | 908.6MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3962ms | 903.8 MB | 1641.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2808ms | 924.4 MB | 1453.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2919ms | 909.6 MB | 1440.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3044ms | 935.3 MB | 1777.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2965ms | 903.6 MB | 1654.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3294ms | 906.6 MB | 1688 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2870ms | 898.5 MB | 903.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2799ms | 902.5 MB | 907.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2995ms | 895.4 MB | 900.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2903ms | 926.5 MB | 1455.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3142ms | 911.3 MB | 1667.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3231ms | 937.1 MB | 1667.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 961.1 MB | 4369ms | 4479ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 979.3 MB | 4881ms | 5195ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 938.3 MB | 4469ms | 3901ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3179ms | 906.3 MB | 1661.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2997ms | 908.6 MB | 1666.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3124ms | 919.7 MB | 1673.7 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 979.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 979.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 979.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 937.1 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario fresh-install/fresh)
- status-cli: RSS 761 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 937.1 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario fresh-install/fresh)
- plugin-cli: RSS 846.3 MB (scenario fresh-install/onboarded-user); CPU 165% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 502.4 MB (scenario fresh-install/fresh); CPU 153% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-agent-cold-warm-message-8e2a29af-kova-260721-205929-3ace3f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 961.1 MB; tracked total 961.1 MB; max CPU 165.7%; samples 16; roles agent-cli 961.1MB/165.7%, command-tree 961.1MB/166.9%, agent-process 961.1MB/165.7%, status-cli 751.8MB/166.9%
- agent: turn 4479ms; cold/warm 4369ms/4479ms; cold-warm delta 0ms; pre-provider 4189ms; provider 1ms; metadata scans 10 (243.67ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4473.5ms; max 4479ms; pre-provider p95 4180.75ms
- agent CLI attribution: cold known 117ms / unattributed 3907ms; warm known 127ms / unattributed 4062ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 82.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4369ms; pre-provider 4024ms; provider 3ms; post-provider 342ms; response true
    - active window: metadata scans 5 (117.01ms total, max 72.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4024ms; provider 3ms; post-provider 342ms; unknown 3665.41ms; source plugins.metadata.scan 358.59ms
  - warm: total 4479ms; pre-provider 4189ms; provider 1ms; post-provider 289ms; response true
    - active window: metadata scans 5 (126.66ms total, max 74.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4189ms; provider 1ms; post-provider 289ms; unknown 3830.41ms; source plugins.metadata.scan 358.59ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4024 ms | 117 ms | 3907 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-agent-cold-warm-message-8e2a29af-kova-260721-205929-3ace3f/openclaw/timeline.jsonl |
  | warm | 4189 ms | 127 ms | 4062 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-agent-cold-warm-message-8e2a29af-kova-260721-205929-3ace3f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 117 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 127 ms | 74 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-agent-cold-warm-message-2ab680e0-kova-260721-205929-3ace3f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 979.3 MB; tracked total 979.3 MB; max CPU 168.9%; samples 17; roles agent-cli 979.3MB/168.9%, agent-process 979.3MB/168.9%, command-tree 979.3MB/168.9%, status-cli 750.2MB/166.9%
- agent: turn 5195ms; cold/warm 4881ms/5195ms; cold-warm delta 0ms; pre-provider 4770ms; provider 1ms; metadata scans 10 (262.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5179.3ms; max 5195ms; pre-provider p95 4757ms
- agent CLI attribution: cold known 130ms / unattributed 4380ms; warm known 132ms / unattributed 4638ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4881ms; pre-provider 4510ms; provider 3ms; post-provider 368ms; response true
    - active window: metadata scans 5 (130.08ms total, max 63.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4510ms; provider 3ms; post-provider 368ms; unknown 4143.16ms; source plugins.metadata.scan 366.84ms
  - warm: total 5195ms; pre-provider 4770ms; provider 1ms; post-provider 424ms; response true
    - active window: metadata scans 5 (132.8ms total, max 69.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4770ms; provider 1ms; post-provider 424ms; unknown 4403.16ms; source plugins.metadata.scan 366.84ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4510 ms | 130 ms | 4380 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-agent-cold-warm-message-2ab680e0-kova-260721-205929-3ace3f/openclaw/timeline.jsonl |
  | warm | 4770 ms | 132 ms | 4638 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-agent-cold-warm-message-2ab680e0-kova-260721-205929-3ace3f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 130 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 132 ms | 70 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-agent-cold-warm-message-67b331a3-kova-260721-205929-3ace3f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 938.3 MB; tracked total 938.3 MB; max CPU 159.9%; samples 15; roles agent-cli 938.3MB/159.9%, command-tree 938.3MB/161.9%, agent-process 938.3MB/159.9%, status-cli 761MB/161.9%
- agent: turn 4469ms; cold/warm 4469ms/3901ms; cold-warm delta 568ms; pre-provider 4145ms; provider 3ms; metadata scans 10 (247.9ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4440.6ms; max 4469ms; pre-provider p95 4120.5ms
- agent CLI attribution: cold known 128ms / unattributed 4017ms; warm known 119ms / unattributed 3536ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4469ms; pre-provider 4145ms; provider 3ms; post-provider 321ms; response true
    - active window: metadata scans 5 (128.7ms total, max 77.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4145ms; provider 3ms; post-provider 321ms; unknown 3794.69ms; source plugins.metadata.scan 350.31ms
  - warm: total 3901ms; pre-provider 3655ms; provider 1ms; post-provider 245ms; response true
    - active window: metadata scans 5 (119.2ms total, max 66.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3655ms; provider 1ms; post-provider 245ms; unknown 3304.69ms; source plugins.metadata.scan 350.31ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4145 ms | 128 ms | 4017 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-agent-cold-warm-message-67b331a3-kova-260721-205929-3ace3f/openclaw/timeline.jsonl |
  | warm | 3655 ms | 119 ms | 3536 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-agent-cold-warm-message-67b331a3-kova-260721-205929-3ace3f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 128 ms | 77 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 119 ms | 66 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205929-3ace3f-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205929-3ace3f-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205929-3ace3f-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-fresh-install-fresh-r1-697fad55-kova-260721-205929-3ace3f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-fresh-install-fresh-r2-da880701-kova-260721-205929-3ace3f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-205929-3ace3f
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-fresh-install-onboarded-9f99e904-kova-260721-205929-3ace3f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-fresh-install-onboarded-f9c24855-kova-260721-205929-3ace3f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-fresh-install-onboarded-fe872c26-kova-260721-205929-3ace3f
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-205929-3ace3f
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-205929-3ace3f
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205929-3ace3f/kova-bundled-runtime-deps-mi-150715ba-kova-260721-205929-3ace3f
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrv4zpyq-413-716c6afe`
- Result: removed
- Duration: 428ms

