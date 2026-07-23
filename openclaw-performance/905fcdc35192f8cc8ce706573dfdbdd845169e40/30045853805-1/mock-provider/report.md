# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 958.1 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 958.1 MB exceeded threshold 950 MB |
| Blocking findings | 6 |
| Warnings | 20 |
| Records | 18 (PASS:15, FAIL:3) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260723-212255-505ee1` |
| Generated | 2026-07-23T21:30:47.488Z |
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
| PASS | 15 |
| FAIL | 3 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 3
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 3 blocking, 0 warning
  - primary: gateway peak RSS 958.1 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 958.1 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 958.1 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 674.6 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 675.6 MB exceeded threshold 650 MB
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
| info | Kova | report | 20 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 4223ms | 935.2MB | n/a | 158% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3309ms | 930.9MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3287ms | 917.9MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 3283ms | 940.5MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.6% | 4756ms | 5133ms | 4449ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:2, PASS:1 | 3181ms | 936.8MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4050ms | 955.4 MB | 1687.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 4223ms | 934.6 MB | 1688 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 4266ms | 935.2 MB | 1654.2 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3149ms | 929.3 MB | 1685.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3753ms | 930.9 MB | 1644.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3309ms | 931.9 MB | 1653.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3287ms | 918.4 MB | 938.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3285ms | 917.7 MB | 923 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3288ms | 917.9 MB | 917.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3283ms | 940.5 MB | 1474.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3204ms | 932.8 MB | 1458.3 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 3414ms | 958.1 MB | 1503.7 MB | n/a | n/a | gateway peak RSS 958.1 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 949.8 MB | 4809ms | 4691ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 963 MB | 4756ms | 5133ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 950.2 MB | 4619ms | 5626ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 3049ms | 936.8 MB | 1691.1 MB | n/a | n/a | model-cli peak RSS 674.6 MB exceeded threshold 650 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 3193ms | 936 MB | 1672.1 MB | n/a | n/a | model-cli peak RSS 675.6 MB exceeded threshold 650 MB |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3181ms | 938.6 MB | 1725.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 963 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 963 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173% (scenario fresh-install/fresh)
- agent-process: RSS 963 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 677.2 MB (scenario fresh-install/fresh); CPU 173% (scenario fresh-install/fresh)
- plugin-cli: RSS 757.7 MB (scenario fresh-install/onboarded-user); CPU 166% (scenario fresh-install/fresh)
- gateway: RSS 958.1 MB (scenario bundled-plugin-startup/fresh); CPU 158% (scenario fresh-install/fresh)
- status-cli: RSS 787.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 158.8% (scenario fresh-install/fresh)
- gateway-tree: RSS 958.1 MB (scenario bundled-plugin-startup/fresh); CPU 158% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-bundled-plugin-startup-5377119f-kova-260723-212255-505ee1
Measurements:
- startup: listening 2766ms; health 3414ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 567ms; post-ready p95 3ms; failures 20; final failures 0; slowest startup-sample/gateway-start 648ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 958.1 MB; tracked total 1503.7 MB; max CPU 152%; samples 12; roles gateway 958.1MB/152%, command-tree 545.9MB/154.7%, gateway-tree 958.1MB/152%, plugin-cli 545.9MB/154.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 767.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 958.1 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-agent-cold-warm-message-8e2a29af-kova-260723-212255-505ee1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 949.8 MB; tracked total 949.8 MB; max CPU 154.9%; samples 16; roles agent-cli 949.8MB/154.9%, agent-process 949.8MB/154.9%, command-tree 949.8MB/154.9%, status-cli 727.4MB/154.7%
- agent: turn 4809ms; cold/warm 4809ms/4691ms; cold-warm delta 118ms; pre-provider 4490ms; provider 3ms; metadata scans 14 (269.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4803.1ms; max 4809ms; pre-provider p95 4486.5ms
- agent CLI attribution: cold known 135ms / unattributed 4355ms; warm known 133ms / unattributed 4287ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4809ms; pre-provider 4490ms; provider 3ms; post-provider 316ms; response true
    - active window: metadata scans 7 (133.84ms total, max 64.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4490ms; provider 3ms; post-provider 316ms; unknown 3997.89ms; source plugins.metadata.scan 492.11ms
  - warm: total 4691ms; pre-provider 4420ms; provider 1ms; post-provider 270ms; response true
    - active window: metadata scans 7 (135.52ms total, max 67.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4420ms; provider 1ms; post-provider 270ms; unknown 3927.89ms; source plugins.metadata.scan 492.11ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4490 ms | 135 ms | 4355 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-agent-cold-warm-message-8e2a29af-kova-260723-212255-505ee1/openclaw/timeline.jsonl |
  | warm | 4420 ms | 133 ms | 4287 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-agent-cold-warm-message-8e2a29af-kova-260723-212255-505ee1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 65 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 67 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-agent-cold-warm-message-2ab680e0-kova-260723-212255-505ee1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 963 MB; tracked total 963 MB; max CPU 157.4%; samples 17; roles agent-cli 963MB/157.4%, agent-process 963MB/157.4%, command-tree 963MB/157.4%, status-cli 729.2MB/153.7%
- agent: turn 5133ms; cold/warm 4756ms/5133ms; cold-warm delta 0ms; pre-provider 4849ms; provider 1ms; metadata scans 14 (327.01ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5114.15ms; max 5133ms; pre-provider p95 4829ms
- agent CLI attribution: cold known 156ms / unattributed 4293ms; warm known 172ms / unattributed 4677ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 93.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4756ms; pre-provider 4449ms; provider 3ms; post-provider 304ms; response true
    - active window: metadata scans 7 (155.96ms total, max 67.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4449ms; provider 3ms; post-provider 304ms; unknown 3903.07ms; source plugins.metadata.scan 545.93ms
  - warm: total 5133ms; pre-provider 4849ms; provider 1ms; post-provider 283ms; response true
    - active window: metadata scans 7 (171.05ms total, max 93.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4849ms; provider 1ms; post-provider 283ms; unknown 4303.07ms; source plugins.metadata.scan 545.93ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4449 ms | 156 ms | 4293 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-agent-cold-warm-message-2ab680e0-kova-260723-212255-505ee1/openclaw/timeline.jsonl |
  | warm | 4849 ms | 172 ms | 4677 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-agent-cold-warm-message-2ab680e0-kova-260723-212255-505ee1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 156 ms | 68 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 172 ms | 93 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-agent-cold-warm-message-67b331a3-kova-260723-212255-505ee1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 950.2 MB; tracked total 950.2 MB; max CPU 156.6%; samples 17; roles agent-cli 950.2MB/156.6%, agent-process 950.2MB/156.6%, command-tree 950.2MB/156.6%, status-cli 727.5MB/152.7%
- agent: turn 5626ms; cold/warm 4619ms/5626ms; cold-warm delta 0ms; pre-provider 5348ms; provider 2ms; metadata scans 14 (296.03ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5575.65ms; max 5626ms; pre-provider p95 5293.75ms
- agent CLI attribution: cold known 128ms / unattributed 4135ms; warm known 170ms / unattributed 5178ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 84.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4619ms; pre-provider 4263ms; provider 4ms; post-provider 352ms; response true
    - active window: metadata scans 7 (126.9ms total, max 57.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4263ms; provider 4ms; post-provider 352ms; unknown 3743.04ms; source plugins.metadata.scan 519.96ms
  - warm: total 5626ms; pre-provider 5348ms; provider 2ms; post-provider 276ms; response true
    - active window: metadata scans 7 (169.13ms total, max 84.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5348ms; provider 2ms; post-provider 276ms; unknown 4828.04ms; source plugins.metadata.scan 519.96ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4263 ms | 128 ms | 4135 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-agent-cold-warm-message-67b331a3-kova-260723-212255-505ee1/openclaw/timeline.jsonl |
  | warm | 5348 ms | 170 ms | 5178 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-agent-cold-warm-message-67b331a3-kova-260723-212255-505ee1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 170 ms | 85 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-gateway-performance-man-005107f3-kova-260723-212255-505ee1
Measurements:
- startup: listening 2509ms; health 3049ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 465ms; post-ready p95 2ms; failures 19; final failures 0; slowest startup-sample/cold-start 540ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 936.8 MB; tracked total 1691.1 MB; max CPU 137%; samples 20; roles gateway 936.8MB/137%, command-tree 754.8MB/158%, gateway-tree 936.8MB/135%, status-cli 754.8MB/158%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 755.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 674.6 MB exceeded threshold 650 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-gateway-performance-man-1e8be6a8-kova-260723-212255-505ee1
Measurements:
- startup: listening 2762ms; health 3193ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 431ms; post-ready p95 3ms; failures 20; final failures 0; slowest startup-sample/warm-restart 507ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 936 MB; tracked total 1672.1 MB; max CPU 153%; samples 20; roles gateway 936MB/153%, command-tree 736.7MB/155.9%, gateway-tree 936MB/153%, plugin-cli 525.8MB/155.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 776.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 675.6 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-212255-505ee1-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-212255-505ee1-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-212255-505ee1-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-fresh-install-fresh-r1-697fad55-kova-260723-212255-505ee1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-fresh-install-fresh-r2-da880701-kova-260723-212255-505ee1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-212255-505ee1
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-fresh-install-onboarded-9f99e904-kova-260723-212255-505ee1
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-fresh-install-onboarded-f9c24855-kova-260723-212255-505ee1
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-fresh-install-onboarded-fe872c26-kova-260723-212255-505ee1
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-212255-505ee1
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-212255-505ee1
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-212255-505ee1/kova-bundled-runtime-deps-mi-150715ba-kova-260723-212255-505ee1
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mry0pk45-41c-e419712f`
- Result: removed
- Duration: 419ms

