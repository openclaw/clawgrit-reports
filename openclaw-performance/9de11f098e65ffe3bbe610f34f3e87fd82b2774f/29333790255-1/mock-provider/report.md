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
| Run ID | `kova-260714-124747-090cd1` |
| Generated | 2026-07-14T12:54:50.508Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3491ms | 850.7MB | n/a | 145% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3214ms | 851.8MB | n/a | 155% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3726ms | 844.4MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3110ms | 851.9MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 166.4% | 3678ms | 3778ms | 3541ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3120ms | 851.8MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3394ms | 840 MB | 1691.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3606ms | 854.6 MB | 1687.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3491ms | 850.7 MB | 1687.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2932ms | 852 MB | 1683.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3446ms | 851.8 MB | 1649.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3214ms | 851.6 MB | 1686.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3726ms | 844.4 MB | 849.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3811ms | 848.5 MB | 853.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3328ms | 838.2 MB | 843 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 4584ms | 852 MB | 1605.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3110ms | 851.9 MB | 1703 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3030ms | 845.6 MB | 1717.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 866.4 MB | 4017ms | 3717ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 845.3 MB | 3678ms | 3778ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 869.6 MB | 3440ms | 3835ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3230ms | 846.3 MB | 1702.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3120ms | 853.4 MB | 1704.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2969ms | 851.8 MB | 1694.7 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 872.1 MB (scenario bundled-plugin-startup/fresh); CPU 180% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 872.1 MB (scenario bundled-plugin-startup/fresh); CPU 178% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 845.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 869.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 869.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 528.6 MB (scenario fresh-install/onboarded-user); CPU 176% (scenario fresh-install/onboarded-user)
- gateway: RSS 854.6 MB (scenario fresh-install/fresh); CPU 159% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 854.6 MB (scenario fresh-install/fresh); CPU 159% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-agent-cold-warm-message-8e2a29af-kova-260714-124747-090cd1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 866.4 MB; tracked total 866.4 MB; max CPU 166.4%; samples 14; roles agent-cli 866.4MB/166.4%, agent-process 866.4MB/166.4%, command-tree 866.4MB/166.4%, status-cli 823.7MB/163.9%
- agent: turn 4017ms; cold/warm 4017ms/3717ms; cold-warm delta 300ms; pre-provider 3834ms; provider 3ms; metadata scans 10 (255.39ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4002ms; max 4017ms; pre-provider p95 3821.4ms
- agent CLI attribution: cold known 120ms / unattributed 3714ms; warm known 133ms / unattributed 3449ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 66.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4017ms; pre-provider 3834ms; provider 3ms; post-provider 180ms; response true
    - active window: metadata scans 5 (120.53ms total, max 58.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3834ms; provider 3ms; post-provider 180ms; unknown 3483.08ms; source plugins.metadata.scan 350.92ms
  - warm: total 3717ms; pre-provider 3582ms; provider 1ms; post-provider 134ms; response true
    - active window: metadata scans 5 (134.86ms total, max 66.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3582ms; provider 1ms; post-provider 134ms; unknown 3231.08ms; source plugins.metadata.scan 350.92ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3834 ms | 120 ms | 3714 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-agent-cold-warm-message-8e2a29af-kova-260714-124747-090cd1/openclaw/timeline.jsonl |
  | warm | 3582 ms | 133 ms | 3449 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-agent-cold-warm-message-8e2a29af-kova-260714-124747-090cd1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 120 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 133 ms | 66 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-agent-cold-warm-message-2ab680e0-kova-260714-124747-090cd1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 845.3 MB; tracked total 845.3 MB; max CPU 166.4%; samples 14; roles agent-cli 845.3MB/166.4%, agent-process 845.3MB/166.4%, command-tree 845.3MB/166.4%, status-cli 780.4MB/161.4%
- agent: turn 3778ms; cold/warm 3678ms/3778ms; cold-warm delta 0ms; pre-provider 3654ms; provider 1ms; metadata scans 10 (264.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3773ms; max 3778ms; pre-provider p95 3648.35ms
- agent CLI attribution: cold known 128ms / unattributed 3413ms; warm known 136ms / unattributed 3518ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 70.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3678ms; pre-provider 3541ms; provider 2ms; post-provider 135ms; response true
    - active window: metadata scans 5 (129.1ms total, max 70.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3541ms; provider 2ms; post-provider 135ms; unknown 3189.65ms; source plugins.metadata.scan 351.35ms
  - warm: total 3778ms; pre-provider 3654ms; provider 1ms; post-provider 123ms; response true
    - active window: metadata scans 5 (135.16ms total, max 67.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3654ms; provider 1ms; post-provider 123ms; unknown 3302.65ms; source plugins.metadata.scan 351.35ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3541 ms | 128 ms | 3413 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-agent-cold-warm-message-2ab680e0-kova-260714-124747-090cd1/openclaw/timeline.jsonl |
  | warm | 3654 ms | 136 ms | 3518 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-agent-cold-warm-message-2ab680e0-kova-260714-124747-090cd1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 128 ms | 70 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 136 ms | 68 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-agent-cold-warm-message-67b331a3-kova-260714-124747-090cd1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 869.6 MB; tracked total 869.6 MB; max CPU 164.4%; samples 14; roles agent-cli 869.6MB/164.4%, agent-process 869.6MB/164.4%, command-tree 869.6MB/164.4%, status-cli 845.1MB/160.9%
- agent: turn 3835ms; cold/warm 3440ms/3835ms; cold-warm delta 0ms; pre-provider 3689ms; provider 1ms; metadata scans 10 (248.58ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3815.25ms; max 3835ms; pre-provider p95 3670.2ms
- agent CLI attribution: cold known 128ms / unattributed 3185ms; warm known 120ms / unattributed 3569ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3440ms; pre-provider 3313ms; provider 2ms; post-provider 125ms; response true
    - active window: metadata scans 5 (128.22ms total, max 65.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3313ms; provider 2ms; post-provider 125ms; unknown 2980.47ms; source plugins.metadata.scan 332.53ms
  - warm: total 3835ms; pre-provider 3689ms; provider 1ms; post-provider 145ms; response true
    - active window: metadata scans 5 (120.36ms total, max 57.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3689ms; provider 1ms; post-provider 145ms; unknown 3356.47ms; source plugins.metadata.scan 332.53ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3313 ms | 128 ms | 3185 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-agent-cold-warm-message-67b331a3-kova-260714-124747-090cd1/openclaw/timeline.jsonl |
  | warm | 3689 ms | 120 ms | 3569 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-agent-cold-warm-message-67b331a3-kova-260714-124747-090cd1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 128 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 120 ms | 57 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-124747-090cd1-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-124747-090cd1-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-124747-090cd1-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-fresh-install-fresh-r1-697fad55-kova-260714-124747-090cd1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-fresh-install-fresh-r2-da880701-kova-260714-124747-090cd1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-fresh-install-fresh-r3-82f8bdbd-kova-260714-124747-090cd1
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-fresh-install-onboarded-9f99e904-kova-260714-124747-090cd1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-fresh-install-onboarded-f9c24855-kova-260714-124747-090cd1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-fresh-install-onboarded-fe872c26-kova-260714-124747-090cd1
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260714-124747-090cd1
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-bundled-runtime-deps-mi-39c08a4a-kova-260714-124747-090cd1
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-124747-090cd1/kova-bundled-runtime-deps-mi-150715ba-kova-260714-124747-090cd1
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrkncfba-3yp-3c0d374a`
- Result: removed
- Duration: 471ms

