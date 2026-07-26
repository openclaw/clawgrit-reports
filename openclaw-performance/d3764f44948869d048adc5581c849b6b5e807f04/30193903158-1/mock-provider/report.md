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
| Run ID | `kova-260726-080412-790657` |
| Generated | 2026-07-26T08:11:59.579Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5245ms | 905.8MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5170ms | 905.2MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5223ms | 988.1MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5207ms | 952.3MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 151.9% | 4703ms | 4730ms | 4161ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5194ms | 950.6MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5803ms | 962.7 MB | 1752 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5245ms | 905.8 MB | 1689.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5189ms | 891.5 MB | 1679.2 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5170ms | 905.2 MB | 1687.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5158ms | 905.9 MB | 1697.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5223ms | 879.3 MB | 1665.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5169ms | 973.3 MB | 973.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5223ms | 988.1 MB | 988.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5275ms | 990.8 MB | 990.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5207ms | 931.9 MB | 1321.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5238ms | 978.4 MB | 1364.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5185ms | 952.3 MB | 1358 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 890.3 MB | 4732ms | 4699ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 941.4 MB | 4703ms | 4762ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 885.7 MB | 4699ms | 4730ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5194ms | 953.2 MB | 1697.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5162ms | 950.6 MB | 1693.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5207ms | 949.6 MB | 1630.3 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 990.8 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 155% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 962.7 MB (scenario fresh-install/fresh); CPU 155% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 941.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 941.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 941.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 854.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 565.9 MB (scenario fresh-install/fresh); CPU 146% (scenario fresh-install/fresh)
- plugin-cli: RSS 455.5 MB (scenario bundled-plugin-startup/fresh); CPU 147% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-agent-cold-warm-message-8e2a29af-kova-260726-080412-790657
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 890.3 MB; tracked total 890.3 MB; max CPU 151.4%; samples 16; roles agent-cli 890.3MB/151.4%, agent-process 890.3MB/151.4%, command-tree 890.3MB/151.4%, status-cli 783.2MB/150.8%
- agent: turn 4732ms; cold/warm 4732ms/4699ms; cold-warm delta 33ms; pre-provider 4198ms; provider 3ms; metadata scans 14 (244.12ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4730.35ms; max 4732ms; pre-provider p95 4210.35ms
- agent CLI attribution: cold known 119ms / unattributed 4079ms; warm known 124ms / unattributed 4087ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4732ms; pre-provider 4198ms; provider 3ms; post-provider 531ms; response true
    - active window: metadata scans 7 (118.92ms total, max 57.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4198ms; provider 3ms; post-provider 531ms; unknown 3823.92ms; source plugins.metadata.scan 374.08ms
  - warm: total 4699ms; pre-provider 4211ms; provider 1ms; post-provider 487ms; response true
    - active window: metadata scans 7 (125.2ms total, max 61.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4211ms; provider 1ms; post-provider 487ms; unknown 3836.92ms; source plugins.metadata.scan 374.08ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4198 ms | 119 ms | 4079 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-agent-cold-warm-message-8e2a29af-kova-260726-080412-790657/openclaw/timeline.jsonl |
  | warm | 4211 ms | 124 ms | 4087 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-agent-cold-warm-message-8e2a29af-kova-260726-080412-790657/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 119 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 124 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-agent-cold-warm-message-2ab680e0-kova-260726-080412-790657
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 941.4 MB; tracked total 941.4 MB; max CPU 153.4%; samples 16; roles agent-cli 941.4MB/153.4%, agent-process 941.4MB/153.4%, command-tree 941.4MB/153.4%, status-cli 854.1MB/151.7%
- agent: turn 4762ms; cold/warm 4703ms/4762ms; cold-warm delta 0ms; pre-provider 4260ms; provider 1ms; metadata scans 14 (239.34ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4759.05ms; max 4762ms; pre-provider p95 4254.8ms
- agent CLI attribution: cold known 114ms / unattributed 4042ms; warm known 124ms / unattributed 4136ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.25ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4703ms; pre-provider 4156ms; provider 2ms; post-provider 545ms; response true
    - active window: metadata scans 7 (114.79ms total, max 50.4ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4156ms; provider 2ms; post-provider 545ms; unknown 3788.42ms; source plugins.metadata.scan 367.58ms
  - warm: total 4762ms; pre-provider 4260ms; provider 1ms; post-provider 501ms; response true
    - active window: metadata scans 7 (124.55ms total, max 62.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4260ms; provider 1ms; post-provider 501ms; unknown 3892.42ms; source plugins.metadata.scan 367.58ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4156 ms | 114 ms | 4042 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-agent-cold-warm-message-2ab680e0-kova-260726-080412-790657/openclaw/timeline.jsonl |
  | warm | 4260 ms | 124 ms | 4136 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-agent-cold-warm-message-2ab680e0-kova-260726-080412-790657/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 114 ms | 50 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 124 ms | 62 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-agent-cold-warm-message-67b331a3-kova-260726-080412-790657
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 885.7 MB; tracked total 885.7 MB; max CPU 151.9%; samples 16; roles agent-cli 885.7MB/151.9%, agent-process 885.7MB/151.9%, command-tree 885.7MB/151.9%, status-cli 783.5MB/150.8%
- agent: turn 4730ms; cold/warm 4699ms/4730ms; cold-warm delta 0ms; pre-provider 4238ms; provider 1ms; metadata scans 14 (253.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4728.45ms; max 4730ms; pre-provider p95 4234.15ms
- agent CLI attribution: cold known 124ms / unattributed 4037ms; warm known 129ms / unattributed 4109ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4699ms; pre-provider 4161ms; provider 3ms; post-provider 535ms; response true
    - active window: metadata scans 7 (124.58ms total, max 57.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4161ms; provider 3ms; post-provider 535ms; unknown 3770.6ms; source plugins.metadata.scan 390.4ms
  - warm: total 4730ms; pre-provider 4238ms; provider 1ms; post-provider 491ms; response true
    - active window: metadata scans 7 (128.78ms total, max 60.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4238ms; provider 1ms; post-provider 491ms; unknown 3847.6ms; source plugins.metadata.scan 390.4ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4161 ms | 124 ms | 4037 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-agent-cold-warm-message-67b331a3-kova-260726-080412-790657/openclaw/timeline.jsonl |
  | warm | 4238 ms | 129 ms | 4109 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-agent-cold-warm-message-67b331a3-kova-260726-080412-790657/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 124 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-080412-790657-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-080412-790657-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-080412-790657-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-fresh-install-fresh-r1-697fad55-kova-260726-080412-790657
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-fresh-install-fresh-r2-da880701-kova-260726-080412-790657
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-fresh-install-fresh-r3-82f8bdbd-kova-260726-080412-790657
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-fresh-install-onboarded-9f99e904-kova-260726-080412-790657
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-fresh-install-onboarded-f9c24855-kova-260726-080412-790657
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-fresh-install-onboarded-fe872c26-kova-260726-080412-790657
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-080412-790657
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-080412-790657
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-080412-790657/kova-bundled-runtime-deps-mi-150715ba-kova-260726-080412-790657
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms1ihxy4-4wo-1e8b7610`
- Result: removed
- Duration: 391ms

