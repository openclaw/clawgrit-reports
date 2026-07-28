# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1022.9 MB exceeded threshold 1000 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1022.9 MB exceeded threshold 1000 MB |
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
| Run ID | `kova-260728-052836-2bf56f` |
| Generated | 2026-07-28T05:36:26.514Z |
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
  - primary: gateway peak RSS 1022.9 MB exceeded threshold 1000 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1022.9 MB exceeded threshold 1000 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1022.9 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1056.8 MB exceeded threshold 1000 MB
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
| fresh-install/fresh | 3 | PASS:3 | 5167ms | 952.9MB | n/a | 156% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5130ms | 968.7MB | n/a | 156% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5082ms | 1018.5MB | n/a | 155% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:1, FAIL:2 | 5149ms | 1022.9MB | n/a | 157% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 168.5% | 3739ms | 3741ms | 3599ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5064ms | 1018.7MB | n/a | 156% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5892ms | 962.2 MB | 1748.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5167ms | 951.9 MB | 1742.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5130ms | 952.9 MB | 1743.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5157ms | 947.1 MB | 1742.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5130ms | 968.7 MB | 1684.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5107ms | 969.5 MB | 1766 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5063ms | 1018.5 MB | 1018.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5082ms | 999.3 MB | 999.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5235ms | 1028.6 MB | 1028.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5161ms | 974.6 MB | 1413.2 MB | n/a | n/a |  |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5037ms | 1022.9 MB | 1461.8 MB | n/a | n/a | gateway peak RSS 1022.9 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5149ms | 1056.8 MB | 1522.5 MB | n/a | n/a | gateway peak RSS 1056.8 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 991.5 MB | 3739ms | 3741ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 990.3 MB | 3792ms | 3800ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 988.9 MB | 3639ms | 3681ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5056ms | 1029.5 MB | 1764 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5064ms | 1018.7 MB | 1775.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5108ms | 969 MB | 1737.5 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1056.8 MB (scenario bundled-plugin-startup/fresh); CPU 157% (scenario fresh-install/fresh)
- agent-cli: RSS 991.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1056.8 MB (scenario bundled-plugin-startup/fresh); CPU 157% (scenario fresh-install/fresh)
- agent-process: RSS 991.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.5% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 991.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 961.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.3% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 758.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario fresh-install/fresh)
- model-cli: RSS 582.3 MB (scenario fresh-install/onboarded-user); CPU 147% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-bundled-plugin-startup-809ede2b-kova-260728-052836-2bf56f
Measurements:
- startup: listening 4519ms; health 5037ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 433ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/gateway-start 518ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1022.9 MB; tracked total 1461.8 MB; max CPU 157%; samples 14; roles gateway 1022.9MB/157%, gateway-tree 968.3MB/157%, command-tree 493.9MB/145%, plugin-cli 493.9MB/145%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 666.09ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1022.9 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-bundled-plugin-startup-5377119f-kova-260728-052836-2bf56f
Measurements:
- startup: listening 4770ms; health 5149ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 379ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/restart 478ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1056.8 MB; tracked total 1522.5 MB; max CPU 156%; samples 14; roles gateway 1056.8MB/156%, gateway-tree 1056.8MB/156%, command-tree 466MB/140%, plugin-cli 466MB/140%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 646.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1056.8 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-agent-cold-warm-message-8e2a29af-kova-260728-052836-2bf56f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 991.5 MB; tracked total 991.5 MB; max CPU 171.5%; samples 14; roles agent-cli 991.5MB/171.5%, agent-process 991.5MB/171.5%, command-tree 991.5MB/171.5%, status-cli 960.9MB/163.1%
- agent: turn 3741ms; cold/warm 3739ms/3741ms; cold-warm delta 0ms; pre-provider 3617ms; provider 1ms; metadata scans 14 (170.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3740.9ms; max 3741ms; pre-provider p95 3616.1ms
- agent CLI attribution: cold known 85ms / unattributed 3514ms; warm known 84ms / unattributed 3533ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3739ms; pre-provider 3599ms; provider 2ms; post-provider 138ms; response true
    - active window: metadata scans 7 (83.93ms total, max 41.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3599ms; provider 2ms; post-provider 138ms; unknown 3303.67ms; source plugins.metadata.scan 295.33ms
  - warm: total 3741ms; pre-provider 3617ms; provider 1ms; post-provider 123ms; response true
    - active window: metadata scans 7 (87.04ms total, max 45.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3617ms; provider 1ms; post-provider 123ms; unknown 3321.67ms; source plugins.metadata.scan 295.33ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3599 ms | 85 ms | 3514 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-agent-cold-warm-message-8e2a29af-kova-260728-052836-2bf56f/openclaw/timeline.jsonl |
  | warm | 3617 ms | 84 ms | 3533 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-agent-cold-warm-message-8e2a29af-kova-260728-052836-2bf56f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 85 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 84 ms | 45 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-agent-cold-warm-message-2ab680e0-kova-260728-052836-2bf56f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 990.3 MB; tracked total 990.3 MB; max CPU 167.2%; samples 14; roles agent-cli 990.3MB/167.2%, command-tree 990.3MB/169.3%, agent-process 990.3MB/167.2%, status-cli 961.7MB/169.3%
- agent: turn 3800ms; cold/warm 3792ms/3800ms; cold-warm delta 0ms; pre-provider 3675ms; provider 1ms; metadata scans 14 (168.82ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3799.6ms; max 3800ms; pre-provider p95 3674.2ms
- agent CLI attribution: cold known 87ms / unattributed 3572ms; warm known 85ms / unattributed 3590ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 54.73ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3792ms; pre-provider 3659ms; provider 3ms; post-provider 130ms; response true
    - active window: metadata scans 7 (85.22ms total, max 47.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3659ms; provider 3ms; post-provider 130ms; unknown 3370.36ms; source plugins.metadata.scan 288.64ms
  - warm: total 3800ms; pre-provider 3675ms; provider 1ms; post-provider 124ms; response true
    - active window: metadata scans 7 (83.6ms total, max 45.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3675ms; provider 1ms; post-provider 124ms; unknown 3386.36ms; source plugins.metadata.scan 288.64ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3659 ms | 87 ms | 3572 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-agent-cold-warm-message-2ab680e0-kova-260728-052836-2bf56f/openclaw/timeline.jsonl |
  | warm | 3675 ms | 85 ms | 3590 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-agent-cold-warm-message-2ab680e0-kova-260728-052836-2bf56f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 85 ms | 46 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-agent-cold-warm-message-67b331a3-kova-260728-052836-2bf56f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 988.9 MB; tracked total 988.9 MB; max CPU 168.5%; samples 14; roles agent-cli 988.9MB/168.5%, agent-process 988.9MB/168.5%, command-tree 988.9MB/168.5%, status-cli 957.1MB/168.5%
- agent: turn 3681ms; cold/warm 3639ms/3681ms; cold-warm delta 0ms; pre-provider 3555ms; provider 1ms; metadata scans 14 (168.72ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3678.9ms; max 3681ms; pre-provider p95 3553.05ms
- agent CLI attribution: cold known 84ms / unattributed 3432ms; warm known 87ms / unattributed 3468ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 55.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3639ms; pre-provider 3516ms; provider 2ms; post-provider 121ms; response true
    - active window: metadata scans 7 (83.12ms total, max 39.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3516ms; provider 2ms; post-provider 121ms; unknown 3231.28ms; source plugins.metadata.scan 284.72ms
  - warm: total 3681ms; pre-provider 3555ms; provider 1ms; post-provider 125ms; response true
    - active window: metadata scans 7 (85.6ms total, max 45.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3555ms; provider 1ms; post-provider 125ms; unknown 3270.28ms; source plugins.metadata.scan 284.72ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3516 ms | 84 ms | 3432 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-agent-cold-warm-message-67b331a3-kova-260728-052836-2bf56f/openclaw/timeline.jsonl |
  | warm | 3555 ms | 87 ms | 3468 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-agent-cold-warm-message-67b331a3-kova-260728-052836-2bf56f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 84 ms | 39 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 45 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-052836-2bf56f-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-052836-2bf56f-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-052836-2bf56f-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-fresh-install-fresh-r1-697fad55-kova-260728-052836-2bf56f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-fresh-install-fresh-r2-da880701-kova-260728-052836-2bf56f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-fresh-install-fresh-r3-82f8bdbd-kova-260728-052836-2bf56f
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-fresh-install-onboarded-9f99e904-kova-260728-052836-2bf56f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-fresh-install-onboarded-f9c24855-kova-260728-052836-2bf56f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-fresh-install-onboarded-fe872c26-kova-260728-052836-2bf56f
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260728-052836-2bf56f
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260728-052836-2bf56f
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-052836-2bf56f/kova-bundled-runtime-deps-mi-150715ba-kova-260728-052836-2bf56f
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms47tjt8-42z-1da064ce`
- Result: removed
- Duration: 403ms

