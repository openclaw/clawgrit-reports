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
| Run ID | `kova-260723-232723-c7aeea` |
| Generated | 2026-07-23T23:35:01.686Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3250ms | 926.5MB | n/a | 146% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3127ms | 931.7MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2968ms | 920.5MB | n/a | 150% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3106ms | 935.7MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 161.7% | 5006ms | 5056ms | 4694ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3660ms | 936.7MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3774ms | 920.8 MB | 1622.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3250ms | 928.2 MB | 1675.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3030ms | 926.5 MB | 1691.1 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2999ms | 931.7 MB | 1663.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3127ms | 956.4 MB | 1549.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3182ms | 928 MB | 1657.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3248ms | 915.1 MB | 920 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2968ms | 920.5 MB | 925.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2854ms | 933.9 MB | 939 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3106ms | 935.7 MB | 1464.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3097ms | 928.8 MB | 1456.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3363ms | 939.6 MB | 1473.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 958.3 MB | 5006ms | 4445ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 946.4 MB | 4924ms | 5128ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 973.6 MB | 5169ms | 5056ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3660ms | 932 MB | 1704.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3395ms | 968.6 MB | 1707.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4016ms | 936.7 MB | 1670.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 973.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 973.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 973.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 772.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 174.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 765 MB (scenario fresh-install/fresh); CPU 173% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 968.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario fresh-install/fresh)
- gateway-tree: RSS 968.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario fresh-install/fresh)
- model-cli: RSS 676.4 MB (scenario fresh-install/fresh); CPU 166% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-agent-cold-warm-message-8e2a29af-kova-260723-232723-c7aeea
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 958.3 MB; tracked total 958.3 MB; max CPU 158.9%; samples 16; roles agent-cli 958.3MB/158.9%, agent-process 958.3MB/158.9%, command-tree 958.3MB/158.9%, status-cli 729.1MB/155.8%
- agent: turn 5006ms; cold/warm 5006ms/4445ms; cold-warm delta 561ms; pre-provider 4694ms; provider 2ms; metadata scans 14 (280.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4977.95ms; max 5006ms; pre-provider p95 4668.8ms
- agent CLI attribution: cold known 148ms / unattributed 4546ms; warm known 130ms / unattributed 4060ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5006ms; pre-provider 4694ms; provider 2ms; post-provider 310ms; response true
    - active window: metadata scans 7 (148.57ms total, max 61.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4694ms; provider 2ms; post-provider 310ms; unknown 4192.31ms; source plugins.metadata.scan 501.69ms
  - warm: total 4445ms; pre-provider 4190ms; provider 1ms; post-provider 254ms; response true
    - active window: metadata scans 7 (131.7ms total, max 62.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4190ms; provider 1ms; post-provider 254ms; unknown 3688.31ms; source plugins.metadata.scan 501.69ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4694 ms | 148 ms | 4546 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-agent-cold-warm-message-8e2a29af-kova-260723-232723-c7aeea/openclaw/timeline.jsonl |
  | warm | 4190 ms | 130 ms | 4060 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-agent-cold-warm-message-8e2a29af-kova-260723-232723-c7aeea/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 148 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 62 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-agent-cold-warm-message-2ab680e0-kova-260723-232723-c7aeea
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 946.4 MB; tracked total 946.4 MB; max CPU 166.9%; samples 17; roles agent-cli 946.4MB/166.9%, agent-process 946.4MB/166.9%, command-tree 946.4MB/166.9%, status-cli 717.9MB/159.7%
- agent: turn 5128ms; cold/warm 4924ms/5128ms; cold-warm delta 0ms; pre-provider 4805ms; provider 1ms; metadata scans 14 (268.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5117.8ms; max 5128ms; pre-provider p95 4794.85ms
- agent CLI attribution: cold known 127ms / unattributed 4475ms; warm known 142ms / unattributed 4663ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4924ms; pre-provider 4602ms; provider 2ms; post-provider 320ms; response true
    - active window: metadata scans 7 (128.3ms total, max 59.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4602ms; provider 2ms; post-provider 320ms; unknown 4111.21ms; source plugins.metadata.scan 490.79ms
  - warm: total 5128ms; pre-provider 4805ms; provider 1ms; post-provider 322ms; response true
    - active window: metadata scans 7 (140.11ms total, max 66.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4805ms; provider 1ms; post-provider 322ms; unknown 4314.21ms; source plugins.metadata.scan 490.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4602 ms | 127 ms | 4475 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-agent-cold-warm-message-2ab680e0-kova-260723-232723-c7aeea/openclaw/timeline.jsonl |
  | warm | 4805 ms | 142 ms | 4663 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-agent-cold-warm-message-2ab680e0-kova-260723-232723-c7aeea/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 67 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-agent-cold-warm-message-67b331a3-kova-260723-232723-c7aeea
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 973.6 MB; tracked total 973.6 MB; max CPU 161.7%; samples 17; roles agent-cli 973.6MB/161.7%, command-tree 973.6MB/162.4%, agent-process 973.6MB/161.7%, status-cli 754.4MB/162.4%
- agent: turn 5169ms; cold/warm 5169ms/5056ms; cold-warm delta 113ms; pre-provider 4792ms; provider 2ms; metadata scans 14 (312.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5163.35ms; max 5169ms; pre-provider p95 4791.1ms
- agent CLI attribution: cold known 170ms / unattributed 4622ms; warm known 142ms / unattributed 4632ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 79.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5169ms; pre-provider 4792ms; provider 2ms; post-provider 375ms; response true
    - active window: metadata scans 7 (170.28ms total, max 67.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4792ms; provider 2ms; post-provider 375ms; unknown 4224.8ms; source plugins.metadata.scan 567.2ms
  - warm: total 5056ms; pre-provider 4774ms; provider 1ms; post-provider 281ms; response true
    - active window: metadata scans 7 (141.95ms total, max 68.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4774ms; provider 1ms; post-provider 281ms; unknown 4206.8ms; source plugins.metadata.scan 567.2ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4792 ms | 170 ms | 4622 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-agent-cold-warm-message-67b331a3-kova-260723-232723-c7aeea/openclaw/timeline.jsonl |
  | warm | 4774 ms | 142 ms | 4632 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-agent-cold-warm-message-67b331a3-kova-260723-232723-c7aeea/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 170 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 69 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-232723-c7aeea-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-232723-c7aeea-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-232723-c7aeea-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-fresh-install-fresh-r1-697fad55-kova-260723-232723-c7aeea
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-fresh-install-fresh-r2-da880701-kova-260723-232723-c7aeea
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-232723-c7aeea
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-fresh-install-onboarded-9f99e904-kova-260723-232723-c7aeea
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-fresh-install-onboarded-f9c24855-kova-260723-232723-c7aeea
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-fresh-install-onboarded-fe872c26-kova-260723-232723-c7aeea
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-232723-c7aeea
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-232723-c7aeea
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-232723-c7aeea/kova-bundled-runtime-deps-mi-150715ba-kova-260723-232723-c7aeea
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mry55m04-41k-51bdc699`
- Result: removed
- Duration: 503ms

