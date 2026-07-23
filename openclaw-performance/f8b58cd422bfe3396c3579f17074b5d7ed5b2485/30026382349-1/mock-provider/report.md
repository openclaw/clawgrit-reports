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
| Run ID | `kova-260723-164529-82c767` |
| Generated | 2026-07-23T16:55:13.587Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3946ms | 921.7MB | n/a | 148% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3847ms | 924.7MB | n/a | 149% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5263ms | 923.7MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3975ms | 929.8MB | n/a | 145% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 160.6% | 6171ms | 5370ms | 5795ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3898ms | 922.3MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4599ms | 909.9 MB | 1661.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3946ms | 921.7 MB | 1654.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3710ms | 936.5 MB | 1682.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3778ms | 947.8 MB | 1686.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3847ms | 924.7 MB | 1670.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4802ms | 923.9 MB | 1682.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5263ms | 912.2 MB | 917.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6023ms | 929.3 MB | 929.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4578ms | 923.7 MB | 928.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 4449ms | 929.8 MB | 1636 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3975ms | 923.1 MB | 1665.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3798ms | 935.6 MB | 1677.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 982.6 MB | 6831ms | 6345ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 972.2 MB | 6171ms | 5370ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 985 MB | 5336ms | 5139ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5871ms | 922.3 MB | 1676.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3898ms | 924.2 MB | 1677.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3347ms | 919.3 MB | 1674.6 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 985 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.6% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 985 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173% (scenario fresh-install/onboarded-user)
- agent-process: RSS 985 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 758.7 MB (scenario fresh-install/onboarded-user); CPU 173% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 753 MB (scenario fresh-install/fresh); CPU 170% (scenario fresh-install/onboarded-user)
- gateway: RSS 947.8 MB (scenario fresh-install/onboarded-user); CPU 158% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 947.8 MB (scenario fresh-install/onboarded-user); CPU 158% (scenario bundled-runtime-deps/missing-plugin-index)
- model-cli: RSS 596 MB (scenario fresh-install/fresh); CPU 162.9% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-agent-cold-warm-message-8e2a29af-kova-260723-164529-82c767
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 982.6 MB; tracked total 982.6 MB; max CPU 166.6%; samples 20; roles agent-cli 982.6MB/166.6%, agent-process 982.6MB/166.6%, command-tree 982.6MB/166.6%, status-cli 747.1MB/166.4%
- agent: turn 6831ms; cold/warm 6831ms/6345ms; cold-warm delta 486ms; pre-provider 6433ms; provider 3ms; metadata scans 14 (368.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6806.7ms; max 6831ms; pre-provider p95 6407.2ms
- agent CLI attribution: cold known 189ms / unattributed 6244ms; warm known 180ms / unattributed 5737ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 100.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6831ms; pre-provider 6433ms; provider 3ms; post-provider 395ms; response true
    - active window: metadata scans 7 (188.62ms total, max 82.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6433ms; provider 3ms; post-provider 395ms; unknown 5760.51ms; source plugins.metadata.scan 672.49ms
  - warm: total 6345ms; pre-provider 5917ms; provider 2ms; post-provider 426ms; response true
    - active window: metadata scans 7 (179.58ms total, max 88.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5917ms; provider 2ms; post-provider 426ms; unknown 5244.51ms; source plugins.metadata.scan 672.49ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6433 ms | 189 ms | 6244 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-agent-cold-warm-message-8e2a29af-kova-260723-164529-82c767/openclaw/timeline.jsonl |
  | warm | 5917 ms | 180 ms | 5737 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-agent-cold-warm-message-8e2a29af-kova-260723-164529-82c767/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 189 ms | 83 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 180 ms | 88 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-agent-cold-warm-message-2ab680e0-kova-260723-164529-82c767
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 972.2 MB; tracked total 972.2 MB; max CPU 160.6%; samples 19; roles agent-cli 972.2MB/160.6%, agent-process 972.2MB/160.6%, command-tree 972.2MB/160.6%, status-cli 745.6MB/155.9%
- agent: turn 6171ms; cold/warm 6171ms/5370ms; cold-warm delta 801ms; pre-provider 5795ms; provider 3ms; metadata scans 14 (366.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6130.95ms; max 6171ms; pre-provider p95 5757.4ms
- agent CLI attribution: cold known 200ms / unattributed 5595ms; warm known 169ms / unattributed 4874ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 99.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6171ms; pre-provider 5795ms; provider 3ms; post-provider 373ms; response true
    - active window: metadata scans 7 (198.31ms total, max 99.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5795ms; provider 3ms; post-provider 373ms; unknown 5185.2ms; source plugins.metadata.scan 609.8ms
  - warm: total 5370ms; pre-provider 5043ms; provider 2ms; post-provider 325ms; response true
    - active window: metadata scans 7 (168.42ms total, max 78.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5043ms; provider 2ms; post-provider 325ms; unknown 4433.2ms; source plugins.metadata.scan 609.8ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5795 ms | 200 ms | 5595 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-agent-cold-warm-message-2ab680e0-kova-260723-164529-82c767/openclaw/timeline.jsonl |
  | warm | 5043 ms | 169 ms | 4874 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-agent-cold-warm-message-2ab680e0-kova-260723-164529-82c767/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 200 ms | 100 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 169 ms | 78 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-agent-cold-warm-message-67b331a3-kova-260723-164529-82c767
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 985 MB; tracked total 985 MB; max CPU 156.9%; samples 18; roles agent-cli 985MB/156.9%, agent-process 985MB/156.9%, command-tree 985MB/156.9%, status-cli 718MB/156.7%
- agent: turn 5336ms; cold/warm 5336ms/5139ms; cold-warm delta 197ms; pre-provider 5011ms; provider 3ms; metadata scans 14 (313.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5326.15ms; max 5336ms; pre-provider p95 5002.9ms
- agent CLI attribution: cold known 151ms / unattributed 4860ms; warm known 163ms / unattributed 4686ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 74.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5336ms; pre-provider 5011ms; provider 3ms; post-provider 322ms; response true
    - active window: metadata scans 7 (152.63ms total, max 66.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5011ms; provider 3ms; post-provider 322ms; unknown 4471.41ms; source plugins.metadata.scan 539.59ms
  - warm: total 5139ms; pre-provider 4849ms; provider 1ms; post-provider 289ms; response true
    - active window: metadata scans 7 (161.26ms total, max 72.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4849ms; provider 1ms; post-provider 289ms; unknown 4309.41ms; source plugins.metadata.scan 539.59ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5011 ms | 151 ms | 4860 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-agent-cold-warm-message-67b331a3-kova-260723-164529-82c767/openclaw/timeline.jsonl |
  | warm | 4849 ms | 163 ms | 4686 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-agent-cold-warm-message-67b331a3-kova-260723-164529-82c767/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 151 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 163 ms | 73 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-164529-82c767-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-164529-82c767-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-164529-82c767-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-fresh-install-fresh-r1-697fad55-kova-260723-164529-82c767
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-fresh-install-fresh-r2-da880701-kova-260723-164529-82c767
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-164529-82c767
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-fresh-install-onboarded-9f99e904-kova-260723-164529-82c767
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-fresh-install-onboarded-f9c24855-kova-260723-164529-82c767
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-fresh-install-onboarded-fe872c26-kova-260723-164529-82c767
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-164529-82c767
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-164529-82c767
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-164529-82c767/kova-bundled-runtime-deps-mi-150715ba-kova-260723-164529-82c767
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxqss2x-41w-60c59cf1`
- Result: removed
- Duration: 453ms

