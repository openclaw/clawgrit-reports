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
| Run ID | `kova-260721-205642-25b9b8` |
| Generated | 2026-07-21T21:04:05.197Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3831ms | 906.7MB | n/a | 150% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3251ms | 909.3MB | n/a | 156% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3161ms | 894.9MB | n/a | 155% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2652ms | 905.4MB | n/a | 138% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.7% | 3715ms | 3572ms | 3406ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2650ms | 905.1MB | n/a | 135% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4040ms | 906.7 MB | 1635.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3831ms | 894.4 MB | 1696.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3382ms | 918.4 MB | 1658.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3709ms | 962.7 MB | 1754.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3010ms | 907 MB | 1668 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3251ms | 909.3 MB | 1664.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3161ms | 891.4 MB | 896.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3682ms | 916.8 MB | 921.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2810ms | 894.9 MB | 899.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2652ms | 899 MB | 1428.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2645ms | 905.4 MB | 1435.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2784ms | 905.9 MB | 1435.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 905 MB | 3715ms | 3570ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 933.3 MB | 3793ms | 3637ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 900.4 MB | 3581ms | 3572ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2683ms | 922.6 MB | 1687.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2650ms | 903.2 MB | 1674.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2567ms | 905.1 MB | 1432.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 962.7 MB (scenario fresh-install/onboarded-user); CPU 163% (scenario fresh-install/fresh)
- command-tree: RSS 933.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.9% (scenario fresh-install/fresh)
- gateway-tree: RSS 962.7 MB (scenario fresh-install/onboarded-user); CPU 163% (scenario fresh-install/fresh)
- plugin-cli: RSS 802.2 MB (scenario fresh-install/fresh); CPU 171.9% (scenario fresh-install/fresh)
- agent-cli: RSS 933.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 771.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 170.5% (scenario fresh-install/onboarded-user)
- agent-process: RSS 933.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 503.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 165.9% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-agent-cold-warm-message-8e2a29af-kova-260721-205642-25b9b8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 905 MB; tracked total 905 MB; max CPU 158.9%; samples 13; roles agent-cli 905MB/158.9%, command-tree 905MB/160.8%, agent-process 905MB/158.9%, status-cli 520MB/160.8%
- agent: turn 3715ms; cold/warm 3715ms/3570ms; cold-warm delta 145ms; pre-provider 3406ms; provider 3ms; metadata scans 10 (210.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3707.75ms; max 3715ms; pre-provider p95 3400ms
- agent CLI attribution: cold known 110ms / unattributed 3296ms; warm known 102ms / unattributed 3184ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 83.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3715ms; pre-provider 3406ms; provider 3ms; post-provider 306ms; response true
    - active window: metadata scans 5 (109.19ms total, max 60.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3406ms; provider 3ms; post-provider 306ms; unknown 3086.89ms; source plugins.metadata.scan 319.11ms
  - warm: total 3570ms; pre-provider 3286ms; provider 1ms; post-provider 283ms; response true
    - active window: metadata scans 5 (101.68ms total, max 56.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3286ms; provider 1ms; post-provider 283ms; unknown 2966.89ms; source plugins.metadata.scan 319.11ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3406 ms | 110 ms | 3296 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-agent-cold-warm-message-8e2a29af-kova-260721-205642-25b9b8/openclaw/timeline.jsonl |
  | warm | 3286 ms | 102 ms | 3184 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-agent-cold-warm-message-8e2a29af-kova-260721-205642-25b9b8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 110 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 102 ms | 56 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-agent-cold-warm-message-2ab680e0-kova-260721-205642-25b9b8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 933.3 MB; tracked total 933.3 MB; max CPU 155.4%; samples 13; roles agent-cli 933.3MB/155.4%, agent-process 933.3MB/155.4%, command-tree 933.3MB/155.4%, status-cli 558.7MB/153.8%
- agent: turn 3793ms; cold/warm 3793ms/3637ms; cold-warm delta 156ms; pre-provider 3487ms; provider 2ms; metadata scans 10 (203.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3785.2ms; max 3793ms; pre-provider p95 3482.6ms
- agent CLI attribution: cold known 97ms / unattributed 3390ms; warm known 105ms / unattributed 3294ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3793ms; pre-provider 3487ms; provider 2ms; post-provider 304ms; response true
    - active window: metadata scans 5 (98.2ms total, max 56.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3487ms; provider 2ms; post-provider 304ms; unknown 3197.04ms; source plugins.metadata.scan 289.96ms
  - warm: total 3637ms; pre-provider 3399ms; provider 1ms; post-provider 237ms; response true
    - active window: metadata scans 5 (105.53ms total, max 61.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3399ms; provider 1ms; post-provider 237ms; unknown 3109.04ms; source plugins.metadata.scan 289.96ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3487 ms | 97 ms | 3390 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-agent-cold-warm-message-2ab680e0-kova-260721-205642-25b9b8/openclaw/timeline.jsonl |
  | warm | 3399 ms | 105 ms | 3294 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-agent-cold-warm-message-2ab680e0-kova-260721-205642-25b9b8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 97 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 105 ms | 61 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-agent-cold-warm-message-67b331a3-kova-260721-205642-25b9b8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 900.4 MB; tracked total 900.4 MB; max CPU 155.7%; samples 13; roles agent-cli 900.4MB/155.7%, agent-process 900.4MB/155.7%, command-tree 900.4MB/155.7%, status-cli 554.7MB/154.8%
- agent: turn 3581ms; cold/warm 3581ms/3572ms; cold-warm delta 9ms; pre-provider 3291ms; provider 3ms; metadata scans 10 (198.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3580.55ms; max 3581ms; pre-provider p95 3292.9ms
- agent CLI attribution: cold known 99ms / unattributed 3192ms; warm known 101ms / unattributed 3192ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 59.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3581ms; pre-provider 3291ms; provider 3ms; post-provider 287ms; response true
    - active window: metadata scans 5 (98.97ms total, max 54.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3291ms; provider 3ms; post-provider 287ms; unknown 3012.23ms; source plugins.metadata.scan 278.77ms
  - warm: total 3572ms; pre-provider 3293ms; provider 1ms; post-provider 278ms; response true
    - active window: metadata scans 5 (100ms total, max 59.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3293ms; provider 1ms; post-provider 278ms; unknown 3014.23ms; source plugins.metadata.scan 278.77ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3291 ms | 99 ms | 3192 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-agent-cold-warm-message-67b331a3-kova-260721-205642-25b9b8/openclaw/timeline.jsonl |
  | warm | 3293 ms | 101 ms | 3192 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-agent-cold-warm-message-67b331a3-kova-260721-205642-25b9b8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 54 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 101 ms | 59 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205642-25b9b8-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205642-25b9b8-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205642-25b9b8-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-fresh-install-fresh-r1-697fad55-kova-260721-205642-25b9b8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-fresh-install-fresh-r2-da880701-kova-260721-205642-25b9b8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-205642-25b9b8
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-fresh-install-onboarded-9f99e904-kova-260721-205642-25b9b8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-fresh-install-onboarded-f9c24855-kova-260721-205642-25b9b8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-fresh-install-onboarded-fe872c26-kova-260721-205642-25b9b8
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-205642-25b9b8
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-205642-25b9b8
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205642-25b9b8/kova-bundled-runtime-deps-mi-150715ba-kova-260721-205642-25b9b8
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrv4w52e-414-eb8532b4`
- Result: removed
- Duration: 499ms

