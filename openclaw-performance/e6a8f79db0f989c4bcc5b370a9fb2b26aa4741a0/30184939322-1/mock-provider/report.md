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
| Run ID | `kova-260726-024148-4bc5a8` |
| Generated | 2026-07-26T02:49:27.230Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5166ms | 892.3MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5156ms | 893.1MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5176ms | 954.9MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5215ms | 948.5MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.4% | 4696ms | 4683ms | 4160ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5143ms | 940.2MB | n/a | 154% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5733ms | 896.5 MB | 1679.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5166ms | 892.3 MB | 1677.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5133ms | 864.9 MB | 1644.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5140ms | 893.1 MB | 1679.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5162ms | 872.6 MB | 1662.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5156ms | 897.3 MB | 1682.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5209ms | 954.9 MB | 954.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5133ms | 940 MB | 940 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5176ms | 959.1 MB | 959.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5215ms | 939.3 MB | 1345.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5224ms | 948.5 MB | 1327.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5192ms | 949.5 MB | 1353.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 956.6 MB | 4699ms | 4683ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 940.2 MB | 4644ms | 4701ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 877.2 MB | 4696ms | 4657ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5105ms | 937 MB | 1690.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5146ms | 940.2 MB | 1688 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5143ms | 955.5 MB | 1694.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 959.1 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 155% (scenario bundled-plugin-startup/fresh)
- agent-cli: RSS 956.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 901.6 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario bundled-plugin-startup/fresh)
- agent-process: RSS 956.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 956.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 860.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 563.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario fresh-install/fresh)
- plugin-cli: RSS 461.9 MB (scenario bundled-plugin-startup/fresh); CPU 148% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-agent-cold-warm-message-8e2a29af-kova-260726-024148-4bc5a8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 956.6 MB; tracked total 956.6 MB; max CPU 152.4%; samples 16; roles agent-cli 956.6MB/152.4%, agent-process 956.6MB/152.4%, command-tree 956.6MB/152.4%, status-cli 860.6MB/151.8%
- agent: turn 4699ms; cold/warm 4699ms/4683ms; cold-warm delta 16ms; pre-provider 4160ms; provider 2ms; metadata scans 14 (253.34ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4698.2ms; max 4699ms; pre-provider p95 4190.4ms
- agent CLI attribution: cold known 127ms / unattributed 4033ms; warm known 125ms / unattributed 4067ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4699ms; pre-provider 4160ms; provider 2ms; post-provider 537ms; response true
    - active window: metadata scans 7 (127.62ms total, max 58.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4160ms; provider 2ms; post-provider 537ms; unknown 3779.76ms; source plugins.metadata.scan 380.24ms
  - warm: total 4683ms; pre-provider 4192ms; provider 1ms; post-provider 490ms; response true
    - active window: metadata scans 7 (125.72ms total, max 62.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4192ms; provider 1ms; post-provider 490ms; unknown 3811.76ms; source plugins.metadata.scan 380.24ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4160 ms | 127 ms | 4033 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-agent-cold-warm-message-8e2a29af-kova-260726-024148-4bc5a8/openclaw/timeline.jsonl |
  | warm | 4192 ms | 125 ms | 4067 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-agent-cold-warm-message-8e2a29af-kova-260726-024148-4bc5a8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 63 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-agent-cold-warm-message-2ab680e0-kova-260726-024148-4bc5a8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 940.2 MB; tracked total 940.2 MB; max CPU 153.9%; samples 16; roles agent-cli 940.2MB/153.9%, agent-process 940.2MB/153.9%, command-tree 940.2MB/153.9%, status-cli 854.5MB/148.9%
- agent: turn 4701ms; cold/warm 4644ms/4701ms; cold-warm delta 0ms; pre-provider 4217ms; provider 1ms; metadata scans 14 (251.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4698.15ms; max 4701ms; pre-provider p95 4211.7ms
- agent CLI attribution: cold known 128ms / unattributed 3983ms; warm known 122ms / unattributed 4095ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4644ms; pre-provider 4111ms; provider 3ms; post-provider 530ms; response true
    - active window: metadata scans 7 (127.53ms total, max 57.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4111ms; provider 3ms; post-provider 530ms; unknown 3731.34ms; source plugins.metadata.scan 379.66ms
  - warm: total 4701ms; pre-provider 4217ms; provider 1ms; post-provider 483ms; response true
    - active window: metadata scans 7 (123.99ms total, max 60.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4217ms; provider 1ms; post-provider 483ms; unknown 3837.34ms; source plugins.metadata.scan 379.66ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4111 ms | 128 ms | 3983 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-agent-cold-warm-message-2ab680e0-kova-260726-024148-4bc5a8/openclaw/timeline.jsonl |
  | warm | 4217 ms | 122 ms | 4095 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-agent-cold-warm-message-2ab680e0-kova-260726-024148-4bc5a8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 122 ms | 60 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-agent-cold-warm-message-67b331a3-kova-260726-024148-4bc5a8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 877.2 MB; tracked total 877.2 MB; max CPU 151.9%; samples 16; roles agent-cli 877.2MB/151.9%, command-tree 877.2MB/152.9%, agent-process 877.2MB/151.9%, status-cli 784.8MB/152.9%
- agent: turn 4696ms; cold/warm 4696ms/4657ms; cold-warm delta 39ms; pre-provider 4163ms; provider 3ms; metadata scans 14 (251.04ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4694.05ms; max 4696ms; pre-provider p95 4185.8ms
- agent CLI attribution: cold known 129ms / unattributed 4034ms; warm known 123ms / unattributed 4064ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4696ms; pre-provider 4163ms; provider 3ms; post-provider 530ms; response true
    - active window: metadata scans 7 (128.11ms total, max 57.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4163ms; provider 3ms; post-provider 530ms; unknown 3783.1ms; source plugins.metadata.scan 379.9ms
  - warm: total 4657ms; pre-provider 4187ms; provider 1ms; post-provider 469ms; response true
    - active window: metadata scans 7 (122.93ms total, max 60.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4187ms; provider 1ms; post-provider 469ms; unknown 3807.1ms; source plugins.metadata.scan 379.9ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4163 ms | 129 ms | 4034 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-agent-cold-warm-message-67b331a3-kova-260726-024148-4bc5a8/openclaw/timeline.jsonl |
  | warm | 4187 ms | 123 ms | 4064 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-agent-cold-warm-message-67b331a3-kova-260726-024148-4bc5a8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-024148-4bc5a8-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-024148-4bc5a8-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-024148-4bc5a8-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-fresh-install-fresh-r1-697fad55-kova-260726-024148-4bc5a8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-fresh-install-fresh-r2-da880701-kova-260726-024148-4bc5a8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-fresh-install-fresh-r3-82f8bdbd-kova-260726-024148-4bc5a8
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-fresh-install-onboarded-9f99e904-kova-260726-024148-4bc5a8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-fresh-install-onboarded-f9c24855-kova-260726-024148-4bc5a8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-fresh-install-onboarded-fe872c26-kova-260726-024148-4bc5a8
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-024148-4bc5a8
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-024148-4bc5a8
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-024148-4bc5a8/kova-bundled-runtime-deps-mi-150715ba-kova-260726-024148-4bc5a8
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms16zclb-44f-ebf8676f`
- Result: removed
- Duration: 387ms

