# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 958.3 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 958.3 MB exceeded threshold 950 MB |
| Blocking findings | 2 |
| Warnings | 21 |
| Records | 18 (PASS:17, FAIL:1) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260723-213657-516dad` |
| Generated | 2026-07-23T21:45:22.674Z |
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
| PASS | 17 |
| FAIL | 1 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 1
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 1 blocking, 0 warning
  - primary: gateway peak RSS 958.3 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 958.3 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 958.3 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
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
| info | Kova | report | 17 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3421ms | 930.2MB | n/a | 152% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3382ms | 934.8MB | n/a | 154% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3318ms | 923.7MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:1, PASS:2 | 4645ms | 949.7MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 165.4% | 5300ms | 4985ms | 4894ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3625ms | 922.8MB | n/a | 141% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4043ms | 888.1 MB | 1620.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3247ms | 930.2 MB | 1702 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3421ms | 954.2 MB | 1725.2 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3382ms | 934.8 MB | 1688.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3189ms | 938.5 MB | 1709.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3500ms | 930.4 MB | 1659.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3290ms | 923.7 MB | 928.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3318ms | 943 MB | 947.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3443ms | 910.8 MB | 915.6 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 3182ms | 958.3 MB | 1491.3 MB | n/a | n/a | gateway peak RSS 958.3 MB exceeded threshold 950 MB |
| 2 | PASS | bundled-plugin-startup/fresh |  | 6329ms | 922.5 MB | 1625.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 4645ms | 949.7 MB | 1692.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 937.2 MB | 4686ms | 4681ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 982.9 MB | 5300ms | 4985ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 964.3 MB | 7842ms | 6664ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3842ms | 919.3 MB | 1649.8 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3469ms | 922.8 MB | 1681.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3625ms | 931.6 MB | 1667.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 982.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 982.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 982.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.8% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 753.9 MB (scenario fresh-install/onboarded-user); CPU 173% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 958.3 MB (scenario bundled-plugin-startup/fresh); CPU 160% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 958.3 MB (scenario bundled-plugin-startup/fresh); CPU 160% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 772.3 MB (scenario fresh-install/fresh); CPU 165.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 617.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-bundled-plugin-startup-4a0cbdf7-kova-260723-213657-516dad
Measurements:
- startup: listening 2766ms; health 3182ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 416ms; post-ready p95 2ms; failures 20; final failures 0; slowest startup-sample/restart 643ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 958.3 MB; tracked total 1491.3 MB; max CPU 154%; samples 12; roles gateway 958.3MB/154%, gateway-tree 958.3MB/154%, command-tree 533.1MB/153.7%, plugin-cli 533.1MB/153.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 816.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 958.3 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-agent-cold-warm-message-8e2a29af-kova-260723-213657-516dad
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 937.2 MB; tracked total 937.2 MB; max CPU 153.9%; samples 16; roles agent-cli 937.2MB/153.9%, command-tree 937.2MB/155.9%, agent-process 937.2MB/153.9%, status-cli 763.6MB/155.9%
- agent: turn 4686ms; cold/warm 4686ms/4681ms; cold-warm delta 5ms; pre-provider 4382ms; provider 3ms; metadata scans 14 (275.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4685.75ms; max 4686ms; pre-provider p95 4405.75ms
- agent CLI attribution: cold known 130ms / unattributed 4252ms; warm known 145ms / unattributed 4262ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4686ms; pre-provider 4382ms; provider 3ms; post-provider 301ms; response true
    - active window: metadata scans 7 (130.52ms total, max 62.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4382ms; provider 3ms; post-provider 301ms; unknown 3863.63ms; source plugins.metadata.scan 518.37ms
  - warm: total 4681ms; pre-provider 4407ms; provider 1ms; post-provider 273ms; response true
    - active window: metadata scans 7 (144.74ms total, max 76.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4407ms; provider 1ms; post-provider 273ms; unknown 3888.63ms; source plugins.metadata.scan 518.37ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4382 ms | 130 ms | 4252 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-agent-cold-warm-message-8e2a29af-kova-260723-213657-516dad/openclaw/timeline.jsonl |
  | warm | 4407 ms | 145 ms | 4262 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-agent-cold-warm-message-8e2a29af-kova-260723-213657-516dad/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 145 ms | 76 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-agent-cold-warm-message-2ab680e0-kova-260723-213657-516dad
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 982.9 MB; tracked total 982.9 MB; max CPU 165.4%; samples 17; roles agent-cli 982.9MB/165.4%, agent-process 982.9MB/165.4%, command-tree 982.9MB/165.4%, status-cli 725.2MB/154.7%
- agent: turn 5300ms; cold/warm 5300ms/4985ms; cold-warm delta 315ms; pre-provider 4894ms; provider 3ms; metadata scans 14 (292.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5284.25ms; max 5300ms; pre-provider p95 4884.45ms
- agent CLI attribution: cold known 150ms / unattributed 4744ms; warm known 142ms / unattributed 4561ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 81.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5300ms; pre-provider 4894ms; provider 3ms; post-provider 403ms; response true
    - active window: metadata scans 7 (149.24ms total, max 71.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4894ms; provider 3ms; post-provider 403ms; unknown 4351.76ms; source plugins.metadata.scan 542.24ms
  - warm: total 4985ms; pre-provider 4703ms; provider 1ms; post-provider 281ms; response true
    - active window: metadata scans 7 (142.96ms total, max 74.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4703ms; provider 1ms; post-provider 281ms; unknown 4160.76ms; source plugins.metadata.scan 542.24ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4894 ms | 150 ms | 4744 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-agent-cold-warm-message-2ab680e0-kova-260723-213657-516dad/openclaw/timeline.jsonl |
  | warm | 4703 ms | 142 ms | 4561 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-agent-cold-warm-message-2ab680e0-kova-260723-213657-516dad/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 150 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 74 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-agent-cold-warm-message-67b331a3-kova-260723-213657-516dad
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 964.3 MB; tracked total 964.3 MB; max CPU 170.8%; samples 21; roles agent-cli 964.3MB/170.8%, agent-process 964.3MB/170.8%, command-tree 964.3MB/170.8%, status-cli 748.8MB/165.8%
- agent: turn 7842ms; cold/warm 7842ms/6664ms; cold-warm delta 1178ms; pre-provider 7313ms; provider 4ms; metadata scans 14 (426.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7783.1ms; max 7842ms; pre-provider p95 7265.1ms
- agent CLI attribution: cold known 199ms / unattributed 7114ms; warm known 229ms / unattributed 6126ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 124.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7842ms; pre-provider 7313ms; provider 4ms; post-provider 525ms; response true
    - active window: metadata scans 7 (198.08ms total, max 79.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7313ms; provider 4ms; post-provider 525ms; unknown 6605.77ms; source plugins.metadata.scan 707.23ms
  - warm: total 6664ms; pre-provider 6355ms; provider 1ms; post-provider 308ms; response true
    - active window: metadata scans 7 (227.97ms total, max 124.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6355ms; provider 1ms; post-provider 308ms; unknown 5647.77ms; source plugins.metadata.scan 707.23ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7313 ms | 199 ms | 7114 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-agent-cold-warm-message-67b331a3-kova-260723-213657-516dad/openclaw/timeline.jsonl |
  | warm | 6355 ms | 229 ms | 6126 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-agent-cold-warm-message-67b331a3-kova-260723-213657-516dad/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 199 ms | 79 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 229 ms | 125 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-213657-516dad-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-213657-516dad-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-213657-516dad-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-fresh-install-fresh-r1-697fad55-kova-260723-213657-516dad
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-fresh-install-fresh-r2-da880701-kova-260723-213657-516dad
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-213657-516dad
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-fresh-install-onboarded-9f99e904-kova-260723-213657-516dad
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-fresh-install-onboarded-f9c24855-kova-260723-213657-516dad
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-fresh-install-onboarded-fe872c26-kova-260723-213657-516dad
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-213657-516dad
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-213657-516dad
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-213657-516dad/kova-bundled-runtime-deps-mi-150715ba-kova-260723-213657-516dad
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mry17ld1-41o-8e1dcef9`
- Result: removed
- Duration: 473ms

