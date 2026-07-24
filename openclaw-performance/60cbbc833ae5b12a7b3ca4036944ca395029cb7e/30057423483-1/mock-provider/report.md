# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 956 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 956 MB exceeded threshold 950 MB |
| Blocking findings | 2 |
| Warnings | 20 |
| Records | 18 (PASS:17, FAIL:1) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260724-005342-745a8b` |
| Generated | 2026-07-24T01:01:07.757Z |
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
| PASS | 17 |
| FAIL | 1 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 1
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 1 blocking, 0 warning
  - primary: gateway peak RSS 956 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 956 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 956 MB exceeded threshold 950 MB
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
| info | Kova | report | 16 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3357ms | 955.3MB | n/a | 152% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3281ms | 934.2MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3390ms | 925.2MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 3252ms | 933.4MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 159.7% | 4879ms | 4921ms | 4522ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3708ms | 930.2MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3850ms | 912.8 MB | 1595.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3228ms | 955.3 MB | 1693.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3357ms | 960 MB | 1683.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3176ms | 934.2 MB | 1665.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3334ms | 927.7 MB | 1682.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3281ms | 961.3 MB | 1692.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3528ms | 916.9 MB | 916.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3228ms | 925.2 MB | 930.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3390ms | 946.8 MB | 951.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3535ms | 925.9 MB | 1451.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3252ms | 933.4 MB | 1466.8 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 3118ms | 956 MB | 1481.8 MB | n/a | n/a | gateway peak RSS 956 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 982 MB | 4677ms | 4874ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 956.6 MB | 4879ms | 5141ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 992.2 MB | 5206ms | 4921ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3708ms | 936.8 MB | 1700.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3825ms | 920.6 MB | 1654.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3328ms | 930.2 MB | 1669.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 992.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 992.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 992.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 961.3 MB (scenario fresh-install/onboarded-user); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 763.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 961.3 MB (scenario fresh-install/onboarded-user); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 533.7 MB (scenario fresh-install/onboarded-user); CPU 158.9% (scenario fresh-install/onboarded-user)
- model-cli: RSS 601.3 MB (scenario fresh-install/fresh); CPU 155% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-bundled-plugin-startup-5377119f-kova-260724-005342-745a8b
Measurements:
- startup: listening 2512ms; health 3118ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 474ms; post-ready p95 4ms; failures 19; final failures 0; slowest startup-sample/gateway-start 606ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 956 MB; tracked total 1481.8 MB; max CPU 153%; samples 13; roles gateway 956MB/153%, command-tree 526.1MB/156.9%, gateway-tree 956MB/153%, plugin-cli 526.1MB/156.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 788.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 956 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-agent-cold-warm-message-8e2a29af-kova-260724-005342-745a8b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 982 MB; tracked total 982 MB; max CPU 159.7%; samples 16; roles agent-cli 982MB/159.7%, agent-process 982MB/159.7%, command-tree 982MB/159.7%, status-cli 706.8MB/158.9%
- agent: turn 4874ms; cold/warm 4677ms/4874ms; cold-warm delta 0ms; pre-provider 4618ms; provider 1ms; metadata scans 14 (276.45ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4864.15ms; max 4874ms; pre-provider p95 4605ms
- agent CLI attribution: cold known 129ms / unattributed 4229ms; warm known 148ms / unattributed 4470ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 80.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4677ms; pre-provider 4358ms; provider 3ms; post-provider 316ms; response true
    - active window: metadata scans 7 (129.75ms total, max 56.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4358ms; provider 3ms; post-provider 316ms; unknown 3813.58ms; source plugins.metadata.scan 544.42ms
  - warm: total 4874ms; pre-provider 4618ms; provider 1ms; post-provider 255ms; response true
    - active window: metadata scans 7 (146.7ms total, max 63.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4618ms; provider 1ms; post-provider 255ms; unknown 4073.58ms; source plugins.metadata.scan 544.42ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4358 ms | 129 ms | 4229 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-agent-cold-warm-message-8e2a29af-kova-260724-005342-745a8b/openclaw/timeline.jsonl |
  | warm | 4618 ms | 148 ms | 4470 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-agent-cold-warm-message-8e2a29af-kova-260724-005342-745a8b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 148 ms | 64 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-agent-cold-warm-message-2ab680e0-kova-260724-005342-745a8b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 956.6 MB; tracked total 956.6 MB; max CPU 161.4%; samples 17; roles agent-cli 956.6MB/161.4%, agent-process 956.6MB/161.4%, command-tree 956.6MB/161.4%, status-cli 721.1MB/156.7%
- agent: turn 5141ms; cold/warm 4879ms/5141ms; cold-warm delta 0ms; pre-provider 4821ms; provider 1ms; metadata scans 14 (280.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5127.9ms; max 5141ms; pre-provider p95 4806.05ms
- agent CLI attribution: cold known 127ms / unattributed 4395ms; warm known 156ms / unattributed 4665ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4879ms; pre-provider 4522ms; provider 2ms; post-provider 355ms; response true
    - active window: metadata scans 7 (126.1ms total, max 57.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4522ms; provider 2ms; post-provider 355ms; unknown 3996.66ms; source plugins.metadata.scan 525.34ms
  - warm: total 5141ms; pre-provider 4821ms; provider 1ms; post-provider 319ms; response true
    - active window: metadata scans 7 (154.31ms total, max 69.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4821ms; provider 1ms; post-provider 319ms; unknown 4295.66ms; source plugins.metadata.scan 525.34ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4522 ms | 127 ms | 4395 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-agent-cold-warm-message-2ab680e0-kova-260724-005342-745a8b/openclaw/timeline.jsonl |
  | warm | 4821 ms | 156 ms | 4665 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-agent-cold-warm-message-2ab680e0-kova-260724-005342-745a8b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 156 ms | 69 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-agent-cold-warm-message-67b331a3-kova-260724-005342-745a8b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 992.2 MB; tracked total 992.2 MB; max CPU 159.4%; samples 17; roles agent-cli 992.2MB/159.4%, agent-process 992.2MB/159.4%, command-tree 992.2MB/159.4%, status-cli 740.5MB/155.6%
- agent: turn 5206ms; cold/warm 5206ms/4921ms; cold-warm delta 285ms; pre-provider 4888ms; provider 3ms; metadata scans 14 (295.93ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5191.75ms; max 5206ms; pre-provider p95 4876.6ms
- agent CLI attribution: cold known 158ms / unattributed 4730ms; warm known 139ms / unattributed 4521ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5206ms; pre-provider 4888ms; provider 3ms; post-provider 315ms; response true
    - active window: metadata scans 7 (157.28ms total, max 62.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4888ms; provider 3ms; post-provider 315ms; unknown 4379.87ms; source plugins.metadata.scan 508.13ms
  - warm: total 4921ms; pre-provider 4660ms; provider 1ms; post-provider 260ms; response true
    - active window: metadata scans 7 (138.65ms total, max 66.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4660ms; provider 1ms; post-provider 260ms; unknown 4151.87ms; source plugins.metadata.scan 508.13ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4888 ms | 158 ms | 4730 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-agent-cold-warm-message-67b331a3-kova-260724-005342-745a8b/openclaw/timeline.jsonl |
  | warm | 4660 ms | 139 ms | 4521 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-agent-cold-warm-message-67b331a3-kova-260724-005342-745a8b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 158 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 139 ms | 67 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-005342-745a8b-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-005342-745a8b-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-005342-745a8b-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-fresh-install-fresh-r1-697fad55-kova-260724-005342-745a8b
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-fresh-install-fresh-r2-da880701-kova-260724-005342-745a8b
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-005342-745a8b
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-fresh-install-onboarded-9f99e904-kova-260724-005342-745a8b
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-fresh-install-onboarded-f9c24855-kova-260724-005342-745a8b
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-fresh-install-onboarded-fe872c26-kova-260724-005342-745a8b
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-005342-745a8b
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-005342-745a8b
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-005342-745a8b/kova-bundled-runtime-deps-mi-150715ba-kova-260724-005342-745a8b
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mry88mjk-41c-83902c30`
- Result: removed
- Duration: 435ms

