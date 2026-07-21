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
| Run ID | `kova-260721-074951-99a097` |
| Generated | 2026-07-21T07:55:49.826Z |
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
| fresh-install/fresh | 3 | PASS:3 | 2750ms | 817.3MB | n/a | 151% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2426ms | 819MB | n/a | 146% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2546ms | 829.4MB | n/a | 145% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2522ms | 841.3MB | n/a | 139% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.7% | 3342ms | 3465ms | 3033ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2266ms | 820.5MB | n/a | 146% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 2750ms | 794.6 MB | 1435.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3348ms | 829 MB | 1510.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2383ms | 817.3 MB | 1412.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2449ms | 819 MB | 1356.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2099ms | 815.5 MB | 1389.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2426ms | 851.3 MB | 1435.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2554ms | 829.4 MB | 834.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2546ms | 794.6 MB | 794.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2513ms | 832 MB | 836.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2522ms | 841.3 MB | 1399.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2671ms | 841.7 MB | 1461.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2040ms | 817.6 MB | 1435.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 868.3 MB | 3334ms | 3465ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 836.9 MB | 3782ms | 3663ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 856.3 MB | 3342ms | 3330ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2202ms | 820.5 MB | 1385.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2266ms | 820.7 MB | 1408.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2435ms | 818.2 MB | 1336.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 868.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 868.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158% (scenario fresh-install/fresh)
- agent-process: RSS 868.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.7% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 621.6 MB (scenario fresh-install/fresh); CPU 158% (scenario fresh-install/fresh)
- gateway: RSS 851.3 MB (scenario fresh-install/onboarded-user); CPU 153% (scenario fresh-install/fresh)
- gateway-tree: RSS 851.3 MB (scenario fresh-install/onboarded-user); CPU 153% (scenario fresh-install/fresh)
- model-cli: RSS 523 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario fresh-install/fresh)
- status-cli: RSS 681.1 MB (scenario fresh-install/fresh); CPU 153.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-agent-cold-warm-message-8e2a29af-kova-260721-074951-99a097
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 868.3 MB; tracked total 868.3 MB; max CPU 155.7%; samples 13; roles agent-cli 868.3MB/155.7%, agent-process 868.3MB/155.7%, command-tree 868.3MB/155.7%, status-cli 592.6MB/153.7%
- agent: turn 3465ms; cold/warm 3334ms/3465ms; cold-warm delta 0ms; pre-provider 3196ms; provider 1ms; metadata scans 10 (214.02ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3458.45ms; max 3465ms; pre-provider p95 3183.9ms
- agent CLI attribution: cold known 99ms / unattributed 2855ms; warm known 116ms / unattributed 3080ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3334ms; pre-provider 2954ms; provider 2ms; post-provider 378ms; response true
    - active window: metadata scans 5 (98.06ms total, max 48.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2954ms; provider 2ms; post-provider 378ms; unknown 2650.64ms; source plugins.metadata.scan 303.36ms
  - warm: total 3465ms; pre-provider 3196ms; provider 1ms; post-provider 268ms; response true
    - active window: metadata scans 5 (115.96ms total, max 64.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3196ms; provider 1ms; post-provider 268ms; unknown 2892.64ms; source plugins.metadata.scan 303.36ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2954 ms | 99 ms | 2855 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-agent-cold-warm-message-8e2a29af-kova-260721-074951-99a097/openclaw/timeline.jsonl |
  | warm | 3196 ms | 116 ms | 3080 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-agent-cold-warm-message-8e2a29af-kova-260721-074951-99a097/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 116 ms | 64 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-agent-cold-warm-message-2ab680e0-kova-260721-074951-99a097
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 836.9 MB; tracked total 836.9 MB; max CPU 157.7%; samples 13; roles agent-cli 836.9MB/157.7%, agent-process 836.9MB/157.7%, command-tree 836.9MB/157.7%, status-cli 593.5MB/149.8%
- agent: turn 3782ms; cold/warm 3782ms/3663ms; cold-warm delta 119ms; pre-provider 3431ms; provider 2ms; metadata scans 10 (232.9ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3776.05ms; max 3782ms; pre-provider p95 3429ms
- agent CLI attribution: cold known 106ms / unattributed 3325ms; warm known 128ms / unattributed 3263ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3782ms; pre-provider 3431ms; provider 2ms; post-provider 349ms; response true
    - active window: metadata scans 5 (106.7ms total, max 59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3431ms; provider 2ms; post-provider 349ms; unknown 3099.85ms; source plugins.metadata.scan 331.15ms
  - warm: total 3663ms; pre-provider 3391ms; provider 1ms; post-provider 271ms; response true
    - active window: metadata scans 5 (126.2ms total, max 60.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3391ms; provider 1ms; post-provider 271ms; unknown 3059.85ms; source plugins.metadata.scan 331.15ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3431 ms | 106 ms | 3325 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-agent-cold-warm-message-2ab680e0-kova-260721-074951-99a097/openclaw/timeline.jsonl |
  | warm | 3391 ms | 128 ms | 3263 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-agent-cold-warm-message-2ab680e0-kova-260721-074951-99a097/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 128 ms | 61 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-agent-cold-warm-message-67b331a3-kova-260721-074951-99a097
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 856.3 MB; tracked total 856.3 MB; max CPU 151.9%; samples 13; roles agent-cli 856.3MB/151.9%, agent-process 856.3MB/151.9%, command-tree 856.3MB/151.9%, status-cli 569MB/150.7%
- agent: turn 3342ms; cold/warm 3342ms/3330ms; cold-warm delta 12ms; pre-provider 3033ms; provider 3ms; metadata scans 10 (210.04ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3341.4ms; max 3342ms; pre-provider p95 3069.1ms
- agent CLI attribution: cold known 104ms / unattributed 2929ms; warm known 104ms / unattributed 2967ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3342ms; pre-provider 3033ms; provider 3ms; post-provider 306ms; response true
    - active window: metadata scans 5 (104.14ms total, max 53.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3033ms; provider 3ms; post-provider 306ms; unknown 2722.88ms; source plugins.metadata.scan 310.12ms
  - warm: total 3330ms; pre-provider 3071ms; provider 2ms; post-provider 257ms; response true
    - active window: metadata scans 5 (105.9ms total, max 58.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3071ms; provider 2ms; post-provider 257ms; unknown 2760.88ms; source plugins.metadata.scan 310.12ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3033 ms | 104 ms | 2929 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-agent-cold-warm-message-67b331a3-kova-260721-074951-99a097/openclaw/timeline.jsonl |
  | warm | 3071 ms | 104 ms | 2967 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-agent-cold-warm-message-67b331a3-kova-260721-074951-99a097/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 104 ms | 54 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 104 ms | 58 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-074951-99a097-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-074951-99a097-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-074951-99a097-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-fresh-install-fresh-r1-697fad55-kova-260721-074951-99a097
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-fresh-install-fresh-r2-da880701-kova-260721-074951-99a097
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-074951-99a097
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-fresh-install-onboarded-9f99e904-kova-260721-074951-99a097
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-fresh-install-onboarded-f9c24855-kova-260721-074951-99a097
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-fresh-install-onboarded-fe872c26-kova-260721-074951-99a097
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-074951-99a097
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-074951-99a097
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-074951-99a097/kova-bundled-runtime-deps-mi-150715ba-kova-260721-074951-99a097
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrucs8e1-40v-64bc7560`
- Result: removed
- Duration: 500ms

