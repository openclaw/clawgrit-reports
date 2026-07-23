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
| Run ID | `kova-260723-035344-a184c4` |
| Generated | 2026-07-23T04:00:50.566Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3481ms | 919.3MB | n/a | 144% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3381ms | 917.1MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3169ms | 915.9MB | n/a | 150% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3290ms | 918.7MB | n/a | 151% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.4% | 4411ms | 4402ms | 4118ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3072ms | 921.3MB | n/a | 140% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3549ms | 908.3 MB | 1643 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3058ms | 919.3 MB | 1649.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3481ms | 924.6 MB | 1678.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3065ms | 922 MB | 1675.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3381ms | 917.1 MB | 1666.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3420ms | 913.7 MB | 1632.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2941ms | 907.3 MB | 912.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3169ms | 915.9 MB | 921 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3536ms | 1008.5 MB | 1013.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2870ms | 920.2 MB | 1470.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3301ms | 918.7 MB | 1466.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3290ms | 915.5 MB | 1465.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 960.8 MB | 4906ms | 4594ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 968.6 MB | 4397ms | 4402ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 933 MB | 4411ms | 4262ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2974ms | 921.3 MB | 1661.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3353ms | 922.6 MB | 1673.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3072ms | 918.1 MB | 1643.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1008.5 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 155% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 968.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 1008.5 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 155% (scenario bundled-plugin-startup/fresh)
- plugin-cli: RSS 753.2 MB (scenario fresh-install/onboarded-user); CPU 160% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 968.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 763.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160% (scenario fresh-install/onboarded-user)
- agent-process: RSS 968.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 594.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-agent-cold-warm-message-8e2a29af-kova-260723-035344-a184c4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 960.8 MB; tracked total 960.8 MB; max CPU 155.4%; samples 16; roles agent-cli 960.8MB/155.4%, agent-process 960.8MB/155.4%, command-tree 960.8MB/155.4%, status-cli 721.8MB/154.9%
- agent: turn 4906ms; cold/warm 4906ms/4594ms; cold-warm delta 312ms; pre-provider 4570ms; provider 3ms; metadata scans 14 (292.92ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4890.4ms; max 4906ms; pre-provider p95 4558.7ms
- agent CLI attribution: cold known 142ms / unattributed 4428ms; warm known 151ms / unattributed 4193ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4906ms; pre-provider 4570ms; provider 3ms; post-provider 333ms; response true
    - active window: metadata scans 7 (142.7ms total, max 61.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4570ms; provider 3ms; post-provider 333ms; unknown 4052.94ms; source plugins.metadata.scan 517.06ms
  - warm: total 4594ms; pre-provider 4344ms; provider 2ms; post-provider 248ms; response true
    - active window: metadata scans 7 (150.22ms total, max 70.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4344ms; provider 2ms; post-provider 248ms; unknown 3826.94ms; source plugins.metadata.scan 517.06ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4570 ms | 142 ms | 4428 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-agent-cold-warm-message-8e2a29af-kova-260723-035344-a184c4/openclaw/timeline.jsonl |
  | warm | 4344 ms | 151 ms | 4193 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-agent-cold-warm-message-8e2a29af-kova-260723-035344-a184c4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 151 ms | 71 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-agent-cold-warm-message-2ab680e0-kova-260723-035344-a184c4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 968.6 MB; tracked total 968.6 MB; max CPU 154.9%; samples 16; roles agent-cli 968.6MB/154.9%, agent-process 968.6MB/154.9%, command-tree 968.6MB/154.9%, status-cli 763.8MB/152.7%
- agent: turn 4402ms; cold/warm 4397ms/4402ms; cold-warm delta 0ms; pre-provider 4149ms; provider 2ms; metadata scans 14 (274.62ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4401.75ms; max 4402ms; pre-provider p95 4146.6ms
- agent CLI attribution: cold known 137ms / unattributed 3964ms; warm known 139ms / unattributed 4010ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 77.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4397ms; pre-provider 4101ms; provider 3ms; post-provider 293ms; response true
    - active window: metadata scans 7 (135.97ms total, max 58.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4101ms; provider 3ms; post-provider 293ms; unknown 3609.11ms; source plugins.metadata.scan 491.89ms
  - warm: total 4402ms; pre-provider 4149ms; provider 2ms; post-provider 251ms; response true
    - active window: metadata scans 7 (138.65ms total, max 59.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4149ms; provider 2ms; post-provider 251ms; unknown 3657.11ms; source plugins.metadata.scan 491.89ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4101 ms | 137 ms | 3964 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-agent-cold-warm-message-2ab680e0-kova-260723-035344-a184c4/openclaw/timeline.jsonl |
  | warm | 4149 ms | 139 ms | 4010 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-agent-cold-warm-message-2ab680e0-kova-260723-035344-a184c4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 139 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-agent-cold-warm-message-67b331a3-kova-260723-035344-a184c4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 933 MB; tracked total 933 MB; max CPU 156.8%; samples 16; roles agent-cli 933MB/156.8%, agent-process 933MB/156.8%, command-tree 933MB/156.8%, status-cli 761MB/156.7%
- agent: turn 4411ms; cold/warm 4411ms/4262ms; cold-warm delta 149ms; pre-provider 4118ms; provider 2ms; metadata scans 14 (267.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4403.55ms; max 4411ms; pre-provider p95 4113.2ms
- agent CLI attribution: cold known 133ms / unattributed 3985ms; warm known 136ms / unattributed 3886ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.73ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4411ms; pre-provider 4118ms; provider 2ms; post-provider 291ms; response true
    - active window: metadata scans 7 (132.8ms total, max 58.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4118ms; provider 2ms; post-provider 291ms; unknown 3634.54ms; source plugins.metadata.scan 483.46ms
  - warm: total 4262ms; pre-provider 4022ms; provider 1ms; post-provider 239ms; response true
    - active window: metadata scans 7 (135.08ms total, max 59.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4022ms; provider 1ms; post-provider 239ms; unknown 3538.54ms; source plugins.metadata.scan 483.46ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4118 ms | 133 ms | 3985 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-agent-cold-warm-message-67b331a3-kova-260723-035344-a184c4/openclaw/timeline.jsonl |
  | warm | 4022 ms | 136 ms | 3886 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-agent-cold-warm-message-67b331a3-kova-260723-035344-a184c4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 136 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-035344-a184c4-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-035344-a184c4-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-035344-a184c4-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-fresh-install-fresh-r1-697fad55-kova-260723-035344-a184c4
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-fresh-install-fresh-r2-da880701-kova-260723-035344-a184c4
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-035344-a184c4
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-fresh-install-onboarded-9f99e904-kova-260723-035344-a184c4
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-fresh-install-onboarded-f9c24855-kova-260723-035344-a184c4
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-fresh-install-onboarded-fe872c26-kova-260723-035344-a184c4
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-035344-a184c4
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-035344-a184c4
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-035344-a184c4/kova-bundled-runtime-deps-mi-150715ba-kova-260723-035344-a184c4
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrwz8a5f-40x-ba83e6a8`
- Result: removed
- Duration: 445ms

