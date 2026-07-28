# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1056.9 MB exceeded threshold 1050 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1056.9 MB exceeded threshold 1050 MB |
| Blocking findings | 4 |
| Warnings | 20 |
| Records | 18 (PASS:16, FAIL:2) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260728-061438-2bc597` |
| Generated | 2026-07-28T06:22:44.890Z |
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
| PASS | 16 |
| FAIL | 2 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 2
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 2 blocking, 0 warning
  - primary: gateway peak RSS 1056.9 MB exceeded threshold 1050 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1056.9 MB exceeded threshold 1050 MB
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
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1056.9 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1057.3 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw

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
| info | Kova | report | 18 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5684ms | 964.2MB | n/a | 156% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5285ms | 974.1MB | n/a | 155% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:1, PASS:2 | 5437ms | 1019.1MB | n/a | 156% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:1, PASS:2 | 5324ms | 999.7MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 171.7% | 4016ms | 3997ms | 3864ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5241ms | 992.3MB | n/a | 156% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 6186ms | 949.7 MB | 1655 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5481ms | 964.2 MB | 1752.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5684ms | 973.8 MB | 1758.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5390ms | 974.1 MB | 1692.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5146ms | 988.9 MB | 1782 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5285ms | 972.9 MB | 1763.4 MB | n/a | n/a |  |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 5432ms | 1056.9 MB | 1056.9 MB | n/a | n/a | gateway peak RSS 1056.9 MB exceeded threshold 1050 MB |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5437ms | 1019.1 MB | 1019.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5437ms | 998.3 MB | 998.3 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5348ms | 1057.3 MB | 1807.2 MB | n/a | n/a | gateway peak RSS 1057.3 MB exceeded threshold 1000 MB |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5324ms | 999.7 MB | 1700.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5059ms | 995.4 MB | 1428.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 977.6 MB | 4016ms | 3917ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 993.2 MB | 3847ms | 4242ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 994.7 MB | 4075ms | 3997ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5279ms | 967.5 MB | 1766.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4998ms | 992.3 MB | 1690.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5241ms | 1007.7 MB | 1764.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1057.3 MB (scenario bundled-plugin-startup/fresh); CPU 157% (scenario fresh-install/fresh)
- agent-cli: RSS 994.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1057.3 MB (scenario bundled-plugin-startup/fresh); CPU 157% (scenario fresh-install/fresh)
- agent-process: RSS 994.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 994.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 922.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 754.8 MB (scenario fresh-install/onboarded-user); CPU 157% (scenario fresh-install/fresh)
- model-cli: RSS 581.7 MB (scenario fresh-install/fresh); CPU 147% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260728-061438-2bc597
Measurements:
- startup: listening 5029ms; health 5432ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 403ms; post-ready p95 not-collected; failures 29; final failures 0; slowest startup-sample/warm-restart 624ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1056.9 MB; tracked total 1056.9 MB; max CPU 156%; samples 9; roles gateway 1056.9MB/156%, gateway-tree 885.2MB/156%, command-tree 6MB/1.6%, uncategorized 6MB/1.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 749.44ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1056.9 MB exceeded threshold 1050 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-bundled-plugin-startup-4a0cbdf7-kova-260728-061438-2bc597
Measurements:
- startup: listening 4775ms; health 5348ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 490ms; post-ready p95 3ms; failures 29; final failures 0; slowest startup-sample/gateway-start 573ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1057.3 MB; tracked total 1807.2 MB; max CPU 156%; samples 15; roles gateway 1057.3MB/156%, gateway-tree 1057.3MB/156%, command-tree 753.7MB/148%, plugin-cli 753.7MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 798.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1057.3 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-agent-cold-warm-message-8e2a29af-kova-260728-061438-2bc597
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 977.6 MB; tracked total 977.6 MB; max CPU 166.6%; samples 14; roles agent-cli 977.6MB/166.6%, command-tree 977.6MB/171.8%, agent-process 977.6MB/166.6%, status-cli 922.5MB/171.8%
- agent: turn 4016ms; cold/warm 4016ms/3917ms; cold-warm delta 99ms; pre-provider 3864ms; provider 3ms; metadata scans 14 (175.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4011.05ms; max 4016ms; pre-provider p95 3860.15ms
- agent CLI attribution: cold known 90ms / unattributed 3774ms; warm known 86ms / unattributed 3701ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 57.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4016ms; pre-provider 3864ms; provider 3ms; post-provider 149ms; response true
    - active window: metadata scans 7 (89.07ms total, max 50.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3864ms; provider 3ms; post-provider 149ms; unknown 3566.92ms; source plugins.metadata.scan 297.08ms
  - warm: total 3917ms; pre-provider 3787ms; provider 1ms; post-provider 129ms; response true
    - active window: metadata scans 7 (86.92ms total, max 46.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3787ms; provider 1ms; post-provider 129ms; unknown 3489.92ms; source plugins.metadata.scan 297.08ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3864 ms | 90 ms | 3774 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-agent-cold-warm-message-8e2a29af-kova-260728-061438-2bc597/openclaw/timeline.jsonl |
  | warm | 3787 ms | 86 ms | 3701 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-agent-cold-warm-message-8e2a29af-kova-260728-061438-2bc597/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 90 ms | 50 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 86 ms | 46 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-agent-cold-warm-message-2ab680e0-kova-260728-061438-2bc597
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 993.2 MB; tracked total 993.2 MB; max CPU 175.8%; samples 15; roles agent-cli 993.2MB/175.8%, agent-process 993.2MB/175.8%, command-tree 993.2MB/175.8%, status-cli 911.6MB/166.2%
- agent: turn 4242ms; cold/warm 3847ms/4242ms; cold-warm delta 0ms; pre-provider 4096ms; provider 1ms; metadata scans 14 (186.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4222.25ms; max 4242ms; pre-provider p95 4076.4ms
- agent CLI attribution: cold known 85ms / unattributed 3619ms; warm known 101ms / unattributed 3995ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 52.75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3847ms; pre-provider 3704ms; provider 3ms; post-provider 140ms; response true
    - active window: metadata scans 7 (84.96ms total, max 39.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3704ms; provider 3ms; post-provider 140ms; unknown 3395.1ms; source plugins.metadata.scan 308.9ms
  - warm: total 4242ms; pre-provider 4096ms; provider 1ms; post-provider 145ms; response true
    - active window: metadata scans 7 (101.75ms total, max 50.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4096ms; provider 1ms; post-provider 145ms; unknown 3787.1ms; source plugins.metadata.scan 308.9ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3704 ms | 85 ms | 3619 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-agent-cold-warm-message-2ab680e0-kova-260728-061438-2bc597/openclaw/timeline.jsonl |
  | warm | 4096 ms | 101 ms | 3995 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-agent-cold-warm-message-2ab680e0-kova-260728-061438-2bc597/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 85 ms | 40 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 101 ms | 51 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-agent-cold-warm-message-67b331a3-kova-260728-061438-2bc597
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 994.7 MB; tracked total 994.7 MB; max CPU 171.7%; samples 15; roles agent-cli 994.7MB/171.7%, agent-process 994.7MB/171.7%, command-tree 994.7MB/171.7%, status-cli 892.5MB/170.8%
- agent: turn 4075ms; cold/warm 4075ms/3997ms; cold-warm delta 78ms; pre-provider 3930ms; provider 3ms; metadata scans 14 (177.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4071.1ms; max 4075ms; pre-provider p95 3926.5ms
- agent CLI attribution: cold known 89ms / unattributed 3841ms; warm known 87ms / unattributed 3773ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.71ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4075ms; pre-provider 3930ms; provider 3ms; post-provider 142ms; response true
    - active window: metadata scans 7 (88.88ms total, max 47.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3930ms; provider 3ms; post-provider 142ms; unknown 3626.88ms; source plugins.metadata.scan 303.12ms
  - warm: total 3997ms; pre-provider 3860ms; provider 1ms; post-provider 136ms; response true
    - active window: metadata scans 7 (88.21ms total, max 47.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3860ms; provider 1ms; post-provider 136ms; unknown 3556.88ms; source plugins.metadata.scan 303.12ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3930 ms | 89 ms | 3841 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-agent-cold-warm-message-67b331a3-kova-260728-061438-2bc597/openclaw/timeline.jsonl |
  | warm | 3860 ms | 87 ms | 3773 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-agent-cold-warm-message-67b331a3-kova-260728-061438-2bc597/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 89 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 47 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-061438-2bc597-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-061438-2bc597-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-061438-2bc597-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-fresh-install-fresh-r1-697fad55-kova-260728-061438-2bc597
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-fresh-install-fresh-r2-da880701-kova-260728-061438-2bc597
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-fresh-install-fresh-r3-82f8bdbd-kova-260728-061438-2bc597
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-fresh-install-onboarded-9f99e904-kova-260728-061438-2bc597
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-fresh-install-onboarded-f9c24855-kova-260728-061438-2bc597
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-fresh-install-onboarded-fe872c26-kova-260728-061438-2bc597
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260728-061438-2bc597
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-bundled-runtime-deps-mi-39c08a4a-kova-260728-061438-2bc597
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-061438-2bc597/kova-bundled-runtime-deps-mi-150715ba-kova-260728-061438-2bc597
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms49gr52-425-48ff71d9`
- Result: removed
- Duration: 457ms

