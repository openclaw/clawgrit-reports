# Kova OpenClaw Runtime Report

> **⚠️ [PARTIAL]** — Required release gate platform coverage linux-arm64 was not present in the report.

## Verdict

| Field | Value |
|---|---|
| Verdict | PARTIAL |
| Reason | Required release gate platform coverage linux-arm64 was not present in the report. |
| Blocking findings | 0 |
| Warnings | 25 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260723-185645-45e47c` |
| Generated | 2026-07-23T19:07:07.683Z |
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
| info | Kova | report | 19 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3796ms | 924.6MB | n/a | 149% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 4132ms | 921.8MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5960ms | 921.4MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 4165ms | 930.2MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 158.7% | 5070ms | 5827ms | 4752ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3681ms | 919.8MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4069ms | 908.7 MB | 1658.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3796ms | 925.3 MB | 1657 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3764ms | 924.6 MB | 1669.1 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4132ms | 918.5 MB | 1664.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 6184ms | 928.4 MB | 1687.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3511ms | 921.8 MB | 1721.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5960ms | 921.4 MB | 926.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6069ms | 917.5 MB | 922.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5429ms | 926.4 MB | 931.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 6079ms | 933.7 MB | 1650 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 4165ms | 930.2 MB | 1685 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3677ms | 920.4 MB | 1453.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 958.8 MB | 5070ms | 4549ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 951.8 MB | 4943ms | 5827ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 992.8 MB | 5163ms | 7256ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 4928ms | 929.8 MB | 1686.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3681ms | 919.8 MB | 1673.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3488ms | 918.1 MB | 1670 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 992.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 992.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 992.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 799.5 MB (scenario fresh-install/onboarded-user); CPU 172% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 763.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.3% (scenario fresh-install/onboarded-user)
- gateway: RSS 933.7 MB (scenario bundled-plugin-startup/fresh); CPU 162% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 599.7 MB (scenario fresh-install/fresh); CPU 169% (scenario fresh-install/fresh)
- gateway-tree: RSS 933.7 MB (scenario bundled-plugin-startup/fresh); CPU 162% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-agent-cold-warm-message-8e2a29af-kova-260723-185645-45e47c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 958.8 MB; tracked total 958.8 MB; max CPU 158.7%; samples 16; roles agent-cli 958.8MB/158.7%, agent-process 958.8MB/158.7%, command-tree 958.8MB/158.7%, status-cli 763.5MB/153.8%
- agent: turn 5070ms; cold/warm 5070ms/4549ms; cold-warm delta 521ms; pre-provider 4752ms; provider 3ms; metadata scans 14 (314.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5043.95ms; max 5070ms; pre-provider p95 4728.75ms
- agent CLI attribution: cold known 163ms / unattributed 4589ms; warm known 151ms / unattributed 4136ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5070ms; pre-provider 4752ms; provider 3ms; post-provider 315ms; response true
    - active window: metadata scans 7 (164.21ms total, max 71.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4752ms; provider 3ms; post-provider 315ms; unknown 4216.78ms; source plugins.metadata.scan 535.22ms
  - warm: total 4549ms; pre-provider 4287ms; provider 1ms; post-provider 261ms; response true
    - active window: metadata scans 7 (150.5ms total, max 65.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4287ms; provider 1ms; post-provider 261ms; unknown 3751.78ms; source plugins.metadata.scan 535.22ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4752 ms | 163 ms | 4589 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-agent-cold-warm-message-8e2a29af-kova-260723-185645-45e47c/openclaw/timeline.jsonl |
  | warm | 4287 ms | 151 ms | 4136 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-agent-cold-warm-message-8e2a29af-kova-260723-185645-45e47c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 163 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 151 ms | 66 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-agent-cold-warm-message-2ab680e0-kova-260723-185645-45e47c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 951.8 MB; tracked total 951.8 MB; max CPU 157.9%; samples 18; roles agent-cli 951.8MB/157.9%, agent-process 951.8MB/157.9%, command-tree 951.8MB/157.9%, status-cli 761.8MB/155.8%
- agent: turn 5827ms; cold/warm 4943ms/5827ms; cold-warm delta 0ms; pre-provider 5436ms; provider 2ms; metadata scans 14 (312.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5782.8ms; max 5827ms; pre-provider p95 5395.2ms
- agent CLI attribution: cold known 144ms / unattributed 4476ms; warm known 170ms / unattributed 5266ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 118.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4943ms; pre-provider 4620ms; provider 3ms; post-provider 320ms; response true
    - active window: metadata scans 7 (143.03ms total, max 59.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4620ms; provider 3ms; post-provider 320ms; unknown 3989.33ms; source plugins.metadata.scan 630.67ms
  - warm: total 5827ms; pre-provider 5436ms; provider 2ms; post-provider 389ms; response true
    - active window: metadata scans 7 (169.67ms total, max 74.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5436ms; provider 2ms; post-provider 389ms; unknown 4805.33ms; source plugins.metadata.scan 630.67ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4620 ms | 144 ms | 4476 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-agent-cold-warm-message-2ab680e0-kova-260723-185645-45e47c/openclaw/timeline.jsonl |
  | warm | 5436 ms | 170 ms | 5266 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-agent-cold-warm-message-2ab680e0-kova-260723-185645-45e47c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 144 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 170 ms | 74 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-agent-cold-warm-message-67b331a3-kova-260723-185645-45e47c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 992.8 MB; tracked total 992.8 MB; max CPU 165.9%; samples 20; roles agent-cli 992.8MB/165.9%, command-tree 992.8MB/167.3%, agent-process 992.8MB/165.9%, status-cli 742.5MB/167.3%
- agent: turn 7256ms; cold/warm 5163ms/7256ms; cold-warm delta 0ms; pre-provider 6781ms; provider 2ms; metadata scans 14 (317.38ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7151.35ms; max 7256ms; pre-provider p95 6682.2ms
- agent CLI attribution: cold known 164ms / unattributed 4641ms; warm known 154ms / unattributed 6627ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 129.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5163ms; pre-provider 4805ms; provider 3ms; post-provider 355ms; response true
    - active window: metadata scans 7 (163.41ms total, max 62.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4805ms; provider 3ms; post-provider 355ms; unknown 4212.2ms; source plugins.metadata.scan 592.8ms
  - warm: total 7256ms; pre-provider 6781ms; provider 2ms; post-provider 473ms; response true
    - active window: metadata scans 7 (153.97ms total, max 68.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6781ms; provider 2ms; post-provider 473ms; unknown 6188.2ms; source plugins.metadata.scan 592.8ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4805 ms | 164 ms | 4641 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-agent-cold-warm-message-67b331a3-kova-260723-185645-45e47c/openclaw/timeline.jsonl |
  | warm | 6781 ms | 154 ms | 6627 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-agent-cold-warm-message-67b331a3-kova-260723-185645-45e47c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 164 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 154 ms | 68 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-185645-45e47c-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-185645-45e47c-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-185645-45e47c-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-fresh-install-fresh-r1-697fad55-kova-260723-185645-45e47c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-fresh-install-fresh-r2-da880701-kova-260723-185645-45e47c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-185645-45e47c
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-fresh-install-onboarded-9f99e904-kova-260723-185645-45e47c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-fresh-install-onboarded-f9c24855-kova-260723-185645-45e47c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-fresh-install-onboarded-fe872c26-kova-260723-185645-45e47c
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-185645-45e47c
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-185645-45e47c
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-185645-45e47c/kova-bundled-runtime-deps-mi-150715ba-kova-260723-185645-45e47c
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxvhl4r-42i-2f0fe66c`
- Result: removed
- Duration: 467ms

