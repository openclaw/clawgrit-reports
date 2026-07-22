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
| Run ID | `kova-260722-211426-eaa711` |
| Generated | 2026-07-22T21:21:51.363Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3739ms | 919.1MB | n/a | 150% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3724ms | 929.2MB | n/a | 156% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4181ms | 907.9MB | n/a | 162% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3452ms | 924.2MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 166.9% | 5212ms | 4907ms | 4896ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3414ms | 925.7MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4654ms | 907.2 MB | 1578.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3604ms | 920.1 MB | 1715.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3739ms | 919.1 MB | 1722.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3724ms | 933.6 MB | 1731.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3803ms | 929.2 MB | 1670 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3689ms | 919.1 MB | 1716 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4181ms | 907.9 MB | 912.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4706ms | 901 MB | 905.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3711ms | 908.6 MB | 913.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3306ms | 924.2 MB | 1666.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3528ms | 925.4 MB | 1683.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3452ms | 918.4 MB | 1667.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 939.8 MB | 5212ms | 5185ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 947.9 MB | 5525ms | 4707ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 962.1 MB | 4719ms | 4907ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3414ms | 923.2 MB | 1700.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3629ms | 925.7 MB | 1701.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3329ms | 926.9 MB | 1650.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 962.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 962.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179% (scenario fresh-install/onboarded-user)
- agent-process: RSS 962.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 803.8 MB (scenario fresh-install/fresh); CPU 179% (scenario fresh-install/onboarded-user)
- status-cli: RSS 777.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 174.9% (scenario fresh-install/onboarded-user)
- gateway: RSS 933.6 MB (scenario fresh-install/onboarded-user); CPU 163% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 933.6 MB (scenario fresh-install/onboarded-user); CPU 163% (scenario bundled-runtime-deps/missing-plugin-index)
- model-cli: RSS 503 MB (scenario fresh-install/onboarded-user); CPU 160.9% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-agent-cold-warm-message-8e2a29af-kova-260722-211426-eaa711
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 939.8 MB; tracked total 939.8 MB; max CPU 166.9%; samples 18; roles agent-cli 939.8MB/166.9%, agent-process 939.8MB/166.9%, command-tree 939.8MB/166.9%, status-cli 734.6MB/153.9%
- agent: turn 5212ms; cold/warm 5212ms/5185ms; cold-warm delta 27ms; pre-provider 4896ms; provider 2ms; metadata scans 10 (249.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5210.65ms; max 5212ms; pre-provider p95 4895.5ms
- agent CLI attribution: cold known 128ms / unattributed 4768ms; warm known 121ms / unattributed 4765ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5212ms; pre-provider 4896ms; provider 2ms; post-provider 314ms; response true
    - active window: metadata scans 5 (127.61ms total, max 61.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4896ms; provider 2ms; post-provider 314ms; unknown 4544.34ms; source plugins.metadata.scan 351.66ms
  - warm: total 5185ms; pre-provider 4886ms; provider 1ms; post-provider 298ms; response true
    - active window: metadata scans 5 (121.88ms total, max 72.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4886ms; provider 1ms; post-provider 298ms; unknown 4534.34ms; source plugins.metadata.scan 351.66ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4896 ms | 128 ms | 4768 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-agent-cold-warm-message-8e2a29af-kova-260722-211426-eaa711/openclaw/timeline.jsonl |
  | warm | 4886 ms | 121 ms | 4765 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-agent-cold-warm-message-8e2a29af-kova-260722-211426-eaa711/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 128 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 121 ms | 72 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-agent-cold-warm-message-2ab680e0-kova-260722-211426-eaa711
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 947.9 MB; tracked total 947.9 MB; max CPU 166.9%; samples 17; roles agent-cli 947.9MB/166.9%, agent-process 947.9MB/166.9%, command-tree 947.9MB/166.9%, status-cli 754.4MB/165.6%
- agent: turn 5525ms; cold/warm 5525ms/4707ms; cold-warm delta 818ms; pre-provider 5153ms; provider 3ms; metadata scans 10 (233ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5484.1ms; max 5525ms; pre-provider p95 5116.5ms
- agent CLI attribution: cold known 126ms / unattributed 5027ms; warm known 107ms / unattributed 4316ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 86.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5525ms; pre-provider 5153ms; provider 3ms; post-provider 369ms; response true
    - active window: metadata scans 5 (125.24ms total, max 67.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5153ms; provider 3ms; post-provider 369ms; unknown 4801.62ms; source plugins.metadata.scan 351.38ms
  - warm: total 4707ms; pre-provider 4423ms; provider 2ms; post-provider 282ms; response true
    - active window: metadata scans 5 (107.76ms total, max 63.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4423ms; provider 2ms; post-provider 282ms; unknown 4071.62ms; source plugins.metadata.scan 351.38ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5153 ms | 126 ms | 5027 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-agent-cold-warm-message-2ab680e0-kova-260722-211426-eaa711/openclaw/timeline.jsonl |
  | warm | 4423 ms | 107 ms | 4316 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-agent-cold-warm-message-2ab680e0-kova-260722-211426-eaa711/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 126 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 107 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-agent-cold-warm-message-67b331a3-kova-260722-211426-eaa711
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 962.1 MB; tracked total 962.1 MB; max CPU 156.9%; samples 16; roles agent-cli 962.1MB/156.9%, command-tree 962.1MB/160.9%, agent-process 962.1MB/156.9%, status-cli 747.4MB/160.9%
- agent: turn 4907ms; cold/warm 4719ms/4907ms; cold-warm delta 0ms; pre-provider 4636ms; provider 1ms; metadata scans 10 (229.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4897.6ms; max 4907ms; pre-provider p95 4624.45ms
- agent CLI attribution: cold known 109ms / unattributed 4296ms; warm known 122ms / unattributed 4514ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 83.75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4719ms; pre-provider 4405ms; provider 3ms; post-provider 311ms; response true
    - active window: metadata scans 5 (109.21ms total, max 61.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4405ms; provider 3ms; post-provider 311ms; unknown 4063.94ms; source plugins.metadata.scan 341.06ms
  - warm: total 4907ms; pre-provider 4636ms; provider 1ms; post-provider 270ms; response true
    - active window: metadata scans 5 (120.78ms total, max 70.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4636ms; provider 1ms; post-provider 270ms; unknown 4294.94ms; source plugins.metadata.scan 341.06ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4405 ms | 109 ms | 4296 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-agent-cold-warm-message-67b331a3-kova-260722-211426-eaa711/openclaw/timeline.jsonl |
  | warm | 4636 ms | 122 ms | 4514 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-agent-cold-warm-message-67b331a3-kova-260722-211426-eaa711/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 109 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 122 ms | 70 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-211426-eaa711-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-211426-eaa711-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-211426-eaa711-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-fresh-install-fresh-r1-697fad55-kova-260722-211426-eaa711
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-fresh-install-fresh-r2-da880701-kova-260722-211426-eaa711
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-211426-eaa711
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-fresh-install-onboarded-9f99e904-kova-260722-211426-eaa711
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-fresh-install-onboarded-f9c24855-kova-260722-211426-eaa711
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-fresh-install-onboarded-fe872c26-kova-260722-211426-eaa711
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-211426-eaa711
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-211426-eaa711
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-211426-eaa711/kova-bundled-runtime-deps-mi-150715ba-kova-260722-211426-eaa711
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrwkysn2-40x-88e7cd37`
- Result: removed
- Duration: 558ms

