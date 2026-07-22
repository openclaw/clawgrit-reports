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
| Run ID | `kova-260722-214236-99941f` |
| Generated | 2026-07-22T21:50:07.412Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3588ms | 915.8MB | n/a | 145% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3711ms | 929.9MB | n/a | 144% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3252ms | 912MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3371ms | 925.1MB | n/a | 140% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.9% | 5208ms | 5050ms | 4799ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3658ms | 928.8MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4000ms | 912.1 MB | 1712.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3588ms | 915.8 MB | 1670.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3234ms | 937.1 MB | 1698.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3888ms | 924.8 MB | 1665.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3711ms | 931.6 MB | 1677.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3324ms | 929.9 MB | 1714.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3136ms | 917.7 MB | 922.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3291ms | 912 MB | 916.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3252ms | 906 MB | 910.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3043ms | 925.1 MB | 1460.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3371ms | 923.9 MB | 1725.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3777ms | 925.1 MB | 1652.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 937.2 MB | 5225ms | 5050ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 949.4 MB | 4907ms | 4965ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 986 MB | 5208ms | 5216ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 4792ms | 930.9 MB | 1654.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3658ms | 928.8 MB | 1686.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3598ms | 920.5 MB | 1668.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 986 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 986 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.5% (scenario fresh-install/onboarded-user)
- agent-process: RSS 986 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 761.8 MB (scenario fresh-install/fresh); CPU 166.5% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 801.6 MB (scenario bundled-plugin-startup/fresh); CPU 165% (scenario fresh-install/onboarded-user)
- gateway: RSS 937.1 MB (scenario fresh-install/fresh); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 937.1 MB (scenario fresh-install/fresh); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 498.7 MB (scenario fresh-install/fresh); CPU 159% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-agent-cold-warm-message-8e2a29af-kova-260722-214236-99941f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 937.2 MB; tracked total 937.2 MB; max CPU 154.9%; samples 17; roles agent-cli 937.2MB/154.9%, command-tree 937.2MB/155.9%, agent-process 937.2MB/154.9%, status-cli 747.6MB/155.9%
- agent: turn 5225ms; cold/warm 5225ms/5050ms; cold-warm delta 175ms; pre-provider 4857ms; provider 3ms; metadata scans 10 (242.02ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5216.25ms; max 5225ms; pre-provider p95 4852.75ms
- agent CLI attribution: cold known 117ms / unattributed 4740ms; warm known 125ms / unattributed 4647ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 83.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5225ms; pre-provider 4857ms; provider 3ms; post-provider 365ms; response true
    - active window: metadata scans 5 (117.95ms total, max 66.4ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4857ms; provider 3ms; post-provider 365ms; unknown 4500.8ms; source plugins.metadata.scan 356.2ms
  - warm: total 5050ms; pre-provider 4772ms; provider 2ms; post-provider 276ms; response true
    - active window: metadata scans 5 (124.07ms total, max 72.4ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4772ms; provider 2ms; post-provider 276ms; unknown 4415.8ms; source plugins.metadata.scan 356.2ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4857 ms | 117 ms | 4740 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-agent-cold-warm-message-8e2a29af-kova-260722-214236-99941f/openclaw/timeline.jsonl |
  | warm | 4772 ms | 125 ms | 4647 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-agent-cold-warm-message-8e2a29af-kova-260722-214236-99941f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 117 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 125 ms | 73 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-agent-cold-warm-message-2ab680e0-kova-260722-214236-99941f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 949.4 MB; tracked total 949.4 MB; max CPU 154.9%; samples 16; roles agent-cli 949.4MB/154.9%, command-tree 949.4MB/155.4%, agent-process 949.4MB/154.9%, status-cli 749.4MB/155.4%
- agent: turn 4965ms; cold/warm 4907ms/4965ms; cold-warm delta 0ms; pre-provider 4646ms; provider 1ms; metadata scans 10 (234.37ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4962.1ms; max 4965ms; pre-provider p95 4642.4ms
- agent CLI attribution: cold known 118ms / unattributed 4456ms; warm known 115ms / unattributed 4531ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 85.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4907ms; pre-provider 4574ms; provider 3ms; post-provider 330ms; response true
    - active window: metadata scans 5 (117.41ms total, max 64.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4574ms; provider 3ms; post-provider 330ms; unknown 4224.11ms; source plugins.metadata.scan 349.89ms
  - warm: total 4965ms; pre-provider 4646ms; provider 1ms; post-provider 318ms; response true
    - active window: metadata scans 5 (116.96ms total, max 68.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4646ms; provider 1ms; post-provider 318ms; unknown 4296.11ms; source plugins.metadata.scan 349.89ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4574 ms | 118 ms | 4456 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-agent-cold-warm-message-2ab680e0-kova-260722-214236-99941f/openclaw/timeline.jsonl |
  | warm | 4646 ms | 115 ms | 4531 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-agent-cold-warm-message-2ab680e0-kova-260722-214236-99941f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 118 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 115 ms | 68 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-agent-cold-warm-message-67b331a3-kova-260722-214236-99941f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 986 MB; tracked total 986 MB; max CPU 157.4%; samples 18; roles agent-cli 986MB/157.4%, agent-process 986MB/157.4%, command-tree 986MB/157.4%, status-cli 715MB/155.4%
- agent: turn 5216ms; cold/warm 5208ms/5216ms; cold-warm delta 0ms; pre-provider 4909ms; provider 1ms; metadata scans 10 (238.83ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5215.6ms; max 5216ms; pre-provider p95 4903.5ms
- agent CLI attribution: cold known 110ms / unattributed 4689ms; warm known 127ms / unattributed 4782ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 82.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5208ms; pre-provider 4799ms; provider 3ms; post-provider 406ms; response true
    - active window: metadata scans 5 (111.37ms total, max 63.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4799ms; provider 3ms; post-provider 406ms; unknown 4447.44ms; source plugins.metadata.scan 351.56ms
  - warm: total 5216ms; pre-provider 4909ms; provider 1ms; post-provider 306ms; response true
    - active window: metadata scans 5 (127.46ms total, max 73.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4909ms; provider 1ms; post-provider 306ms; unknown 4557.44ms; source plugins.metadata.scan 351.56ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4799 ms | 110 ms | 4689 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-agent-cold-warm-message-67b331a3-kova-260722-214236-99941f/openclaw/timeline.jsonl |
  | warm | 4909 ms | 127 ms | 4782 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-agent-cold-warm-message-67b331a3-kova-260722-214236-99941f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 110 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 127 ms | 73 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-214236-99941f-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-214236-99941f-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-214236-99941f-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-fresh-install-fresh-r1-697fad55-kova-260722-214236-99941f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-fresh-install-fresh-r2-da880701-kova-260722-214236-99941f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-214236-99941f
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-fresh-install-onboarded-9f99e904-kova-260722-214236-99941f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-fresh-install-onboarded-f9c24855-kova-260722-214236-99941f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-fresh-install-onboarded-fe872c26-kova-260722-214236-99941f
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-214236-99941f
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-214236-99941f
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-214236-99941f/kova-bundled-runtime-deps-mi-150715ba-kova-260722-214236-99941f
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrwlz0n0-40q-a38d702f`
- Result: removed
- Duration: 501ms

