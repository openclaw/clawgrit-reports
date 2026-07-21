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
| Run ID | `kova-260721-205917-be55ff` |
| Generated | 2026-07-21T21:05:51.618Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3013ms | 907.3MB | n/a | 155% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2897ms | 912.1MB | n/a | 155% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3000ms | 892.8MB | n/a | 155% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3098ms | 918.2MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 161.4% | 4257ms | 4444ms | 3933ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3294ms | 918.6MB | n/a | 158% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3466ms | 907.3 MB | 1646.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3013ms | 904.1 MB | 1662.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2874ms | 923.7 MB | 1707.1 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2869ms | 916.3 MB | 1698.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2897ms | 912.1 MB | 1667.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3090ms | 904.6 MB | 1675.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3000ms | 892 MB | 897 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3000ms | 900.5 MB | 905.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3100ms | 892.8 MB | 897.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2920ms | 901.8 MB | 1431.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3098ms | 931.8 MB | 1460.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3113ms | 918.2 MB | 1698.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 966.1 MB | 4257ms | 4444ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 970.9 MB | 4199ms | 4125ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 962.3 MB | 4409ms | 4447ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3310ms | 920.7 MB | 1673.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3294ms | 918.6 MB | 1671.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2954ms | 915.1 MB | 1698.3 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 970.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 970.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 970.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 931.8 MB (scenario bundled-plugin-startup/fresh); CPU 162% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 785.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 168.9% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 931.8 MB (scenario bundled-plugin-startup/fresh); CPU 162% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 780.3 MB (scenario bundled-plugin-startup/fresh); CPU 163% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 501.5 MB (scenario fresh-install/onboarded-user); CPU 154% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-agent-cold-warm-message-8e2a29af-kova-260721-205917-be55ff
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 966.1 MB; tracked total 966.1 MB; max CPU 161.4%; samples 16; roles agent-cli 966.1MB/161.4%, command-tree 966.1MB/165.9%, agent-process 966.1MB/161.4%, status-cli 757.8MB/165.9%
- agent: turn 4444ms; cold/warm 4257ms/4444ms; cold-warm delta 0ms; pre-provider 4140ms; provider 1ms; metadata scans 10 (242.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4434.65ms; max 4444ms; pre-provider p95 4129.65ms
- agent CLI attribution: cold known 117ms / unattributed 3816ms; warm known 125ms / unattributed 4015ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 96.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4257ms; pre-provider 3933ms; provider 3ms; post-provider 321ms; response true
    - active window: metadata scans 5 (116.37ms total, max 64.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3933ms; provider 3ms; post-provider 321ms; unknown 3565.47ms; source plugins.metadata.scan 367.53ms
  - warm: total 4444ms; pre-provider 4140ms; provider 1ms; post-provider 303ms; response true
    - active window: metadata scans 5 (125.9ms total, max 71.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4140ms; provider 1ms; post-provider 303ms; unknown 3772.47ms; source plugins.metadata.scan 367.53ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3933 ms | 117 ms | 3816 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-agent-cold-warm-message-8e2a29af-kova-260721-205917-be55ff/openclaw/timeline.jsonl |
  | warm | 4140 ms | 125 ms | 4015 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-agent-cold-warm-message-8e2a29af-kova-260721-205917-be55ff/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 117 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 125 ms | 72 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-agent-cold-warm-message-2ab680e0-kova-260721-205917-be55ff
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 970.9 MB; tracked total 970.9 MB; max CPU 157.9%; samples 16; roles agent-cli 970.9MB/157.9%, command-tree 970.9MB/160.9%, agent-process 970.9MB/157.9%, status-cli 752MB/160.9%
- agent: turn 4199ms; cold/warm 4199ms/4125ms; cold-warm delta 74ms; pre-provider 3865ms; provider 3ms; metadata scans 10 (227.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4195.3ms; max 4199ms; pre-provider p95 3863.9ms
- agent CLI attribution: cold known 111ms / unattributed 3754ms; warm known 116ms / unattributed 3727ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4199ms; pre-provider 3865ms; provider 3ms; post-provider 331ms; response true
    - active window: metadata scans 5 (110.92ms total, max 61.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3865ms; provider 3ms; post-provider 331ms; unknown 3533.23ms; source plugins.metadata.scan 331.77ms
  - warm: total 4125ms; pre-provider 3843ms; provider 1ms; post-provider 281ms; response true
    - active window: metadata scans 5 (116.35ms total, max 69.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3843ms; provider 1ms; post-provider 281ms; unknown 3511.23ms; source plugins.metadata.scan 331.77ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3865 ms | 111 ms | 3754 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-agent-cold-warm-message-2ab680e0-kova-260721-205917-be55ff/openclaw/timeline.jsonl |
  | warm | 3843 ms | 116 ms | 3727 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-agent-cold-warm-message-2ab680e0-kova-260721-205917-be55ff/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 111 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 116 ms | 69 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-agent-cold-warm-message-67b331a3-kova-260721-205917-be55ff
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 962.3 MB; tracked total 962.3 MB; max CPU 169.9%; samples 16; roles agent-cli 962.3MB/169.9%, agent-process 962.3MB/169.9%, command-tree 962.3MB/169.9%, status-cli 755MB/162.9%
- agent: turn 4447ms; cold/warm 4409ms/4447ms; cold-warm delta 0ms; pre-provider 4155ms; provider 1ms; metadata scans 10 (228.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4445.1ms; max 4447ms; pre-provider p95 4147.05ms
- agent CLI attribution: cold known 106ms / unattributed 3890ms; warm known 121ms / unattributed 4034ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 74.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4409ms; pre-provider 3996ms; provider 4ms; post-provider 409ms; response true
    - active window: metadata scans 5 (106.57ms total, max 58.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3996ms; provider 4ms; post-provider 409ms; unknown 3662.77ms; source plugins.metadata.scan 333.23ms
  - warm: total 4447ms; pre-provider 4155ms; provider 1ms; post-provider 291ms; response true
    - active window: metadata scans 5 (121.79ms total, max 74.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4155ms; provider 1ms; post-provider 291ms; unknown 3821.77ms; source plugins.metadata.scan 333.23ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3996 ms | 106 ms | 3890 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-agent-cold-warm-message-67b331a3-kova-260721-205917-be55ff/openclaw/timeline.jsonl |
  | warm | 4155 ms | 121 ms | 4034 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-agent-cold-warm-message-67b331a3-kova-260721-205917-be55ff/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 121 ms | 75 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205917-be55ff-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205917-be55ff-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205917-be55ff-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-fresh-install-fresh-r1-697fad55-kova-260721-205917-be55ff
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-fresh-install-fresh-r2-da880701-kova-260721-205917-be55ff
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-205917-be55ff
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-fresh-install-onboarded-9f99e904-kova-260721-205917-be55ff
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-fresh-install-onboarded-f9c24855-kova-260721-205917-be55ff
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-fresh-install-onboarded-fe872c26-kova-260721-205917-be55ff
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-205917-be55ff
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-205917-be55ff
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205917-be55ff/kova-bundled-runtime-deps-mi-150715ba-kova-260721-205917-be55ff
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrv4zgs6-3v6-039b67fd`
- Result: removed
- Duration: 409ms

