# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 960.4 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 960.4 MB exceeded threshold 950 MB |
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
| Run ID | `kova-260724-014700-d7b572` |
| Generated | 2026-07-24T01:54:33.518Z |
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
  - primary: gateway peak RSS 960.4 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 960.4 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 960.4 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 656.9 MB exceeded threshold 650 MB
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
| fresh-install/fresh | 3 | PASS:3 | 3122ms | 934.9MB | n/a | 146% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3390ms | 936.5MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3171ms | 919.8MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 3149ms | 932.7MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.4% | 4558ms | 4390ms | 4256ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:2, FAIL:1 | 3000ms | 956.4MB | n/a | 136% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3693ms | 958.2 MB | 1703.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3122ms | 929.1 MB | 1707.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2987ms | 934.9 MB | 1656.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3390ms | 936.5 MB | 1661.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3396ms | 939.9 MB | 1672.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2983ms | 930.4 MB | 1704.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3142ms | 911.8 MB | 917 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3177ms | 919.8 MB | 924.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3171ms | 940.8 MB | 945.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3071ms | 926.3 MB | 1461.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3149ms | 932.7 MB | 1461.5 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 3294ms | 960.4 MB | 1502.9 MB | n/a | n/a | gateway peak RSS 960.4 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 959.3 MB | 4588ms | 4352ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 974.9 MB | 4476ms | 4390ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 971.3 MB | 4558ms | 4459ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2980ms | 957.4 MB | 1727.6 MB | n/a | n/a |  |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 3245ms | 956.4 MB | 1686.1 MB | n/a | n/a | model-cli peak RSS 656.9 MB exceeded threshold 650 MB |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3000ms | 933.5 MB | 1705.3 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 974.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 960.4 MB (scenario bundled-plugin-startup/fresh); CPU 200% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-process: RSS 974.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 960.4 MB (scenario bundled-plugin-startup/fresh); CPU 200% (scenario bundled-runtime-deps/missing-plugin-index)
- command-tree: RSS 974.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158% (scenario bundled-plugin-startup/fresh)
- plugin-cli: RSS 542.8 MB (scenario bundled-plugin-startup/fresh); CPU 158% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 778.9 MB (scenario fresh-install/fresh); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 676.1 MB (scenario fresh-install/onboarded-user); CPU 151% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-bundled-plugin-startup-5377119f-kova-260724-014700-d7b572
Measurements:
- startup: listening 2764ms; health 3294ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 454ms; post-ready p95 2ms; failures 21; final failures 0; slowest startup-sample/gateway-start 530ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 960.4 MB; tracked total 1502.9 MB; max CPU 154%; samples 12; roles gateway 960.4MB/154%, gateway-tree 960.4MB/154%, command-tree 542.8MB/152.6%, plugin-cli 542.8MB/152.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 772.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 960.4 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-agent-cold-warm-message-8e2a29af-kova-260724-014700-d7b572
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 959.3 MB; tracked total 959.3 MB; max CPU 155.4%; samples 15; roles agent-cli 959.3MB/155.4%, agent-process 959.3MB/155.4%, command-tree 959.3MB/155.4%, status-cli 562.1MB/152.8%
- agent: turn 4588ms; cold/warm 4588ms/4352ms; cold-warm delta 236ms; pre-provider 4256ms; provider 3ms; metadata scans 14 (255.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4576.2ms; max 4588ms; pre-provider p95 4248.85ms
- agent CLI attribution: cold known 130ms / unattributed 4126ms; warm known 124ms / unattributed 3989ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4588ms; pre-provider 4256ms; provider 3ms; post-provider 329ms; response true
    - active window: metadata scans 7 (131.32ms total, max 60.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4256ms; provider 3ms; post-provider 329ms; unknown 3801.78ms; source plugins.metadata.scan 454.22ms
  - warm: total 4352ms; pre-provider 4113ms; provider 1ms; post-provider 238ms; response true
    - active window: metadata scans 7 (123.88ms total, max 61.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4113ms; provider 1ms; post-provider 238ms; unknown 3658.78ms; source plugins.metadata.scan 454.22ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4256 ms | 130 ms | 4126 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-agent-cold-warm-message-8e2a29af-kova-260724-014700-d7b572/openclaw/timeline.jsonl |
  | warm | 4113 ms | 124 ms | 3989 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-agent-cold-warm-message-8e2a29af-kova-260724-014700-d7b572/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 124 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-agent-cold-warm-message-2ab680e0-kova-260724-014700-d7b572
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 974.9 MB; tracked total 974.9 MB; max CPU 153.9%; samples 16; roles agent-cli 974.9MB/153.9%, command-tree 974.9MB/155.8%, agent-process 974.9MB/153.9%, status-cli 736.7MB/155.8%
- agent: turn 4476ms; cold/warm 4476ms/4390ms; cold-warm delta 86ms; pre-provider 4175ms; provider 4ms; metadata scans 14 (279.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4471.7ms; max 4476ms; pre-provider p95 4173.6ms
- agent CLI attribution: cold known 137ms / unattributed 4038ms; warm known 142ms / unattributed 4005ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4476ms; pre-provider 4175ms; provider 4ms; post-provider 297ms; response true
    - active window: metadata scans 7 (138.82ms total, max 58.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4175ms; provider 4ms; post-provider 297ms; unknown 3690.54ms; source plugins.metadata.scan 484.46ms
  - warm: total 4390ms; pre-provider 4147ms; provider 1ms; post-provider 242ms; response true
    - active window: metadata scans 7 (141.05ms total, max 64.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4147ms; provider 1ms; post-provider 242ms; unknown 3662.54ms; source plugins.metadata.scan 484.46ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4175 ms | 137 ms | 4038 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-agent-cold-warm-message-2ab680e0-kova-260724-014700-d7b572/openclaw/timeline.jsonl |
  | warm | 4147 ms | 142 ms | 4005 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-agent-cold-warm-message-2ab680e0-kova-260724-014700-d7b572/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 64 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-agent-cold-warm-message-67b331a3-kova-260724-014700-d7b572
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 971.3 MB; tracked total 971.3 MB; max CPU 155.9%; samples 16; roles agent-cli 971.3MB/155.9%, command-tree 971.3MB/157.8%, agent-process 971.3MB/155.9%, status-cli 741.9MB/157.8%
- agent: turn 4558ms; cold/warm 4558ms/4459ms; cold-warm delta 99ms; pre-provider 4256ms; provider 2ms; metadata scans 14 (261.79ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4553.05ms; max 4558ms; pre-provider p95 4253.6ms
- agent CLI attribution: cold known 124ms / unattributed 4132ms; warm known 135ms / unattributed 4073ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4558ms; pre-provider 4256ms; provider 2ms; post-provider 300ms; response true
    - active window: metadata scans 7 (125.66ms total, max 59.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4256ms; provider 2ms; post-provider 300ms; unknown 3793.77ms; source plugins.metadata.scan 462.23ms
  - warm: total 4459ms; pre-provider 4208ms; provider 1ms; post-provider 250ms; response true
    - active window: metadata scans 7 (136.13ms total, max 64.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4208ms; provider 1ms; post-provider 250ms; unknown 3745.77ms; source plugins.metadata.scan 462.23ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4256 ms | 124 ms | 4132 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-agent-cold-warm-message-67b331a3-kova-260724-014700-d7b572/openclaw/timeline.jsonl |
  | warm | 4208 ms | 135 ms | 4073 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-agent-cold-warm-message-67b331a3-kova-260724-014700-d7b572/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 124 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 64 ms |

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-gateway-performance-man-1e8be6a8-kova-260724-014700-d7b572
Measurements:
- startup: listening 2761ms; health 3245ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 484ms; post-ready p95 2ms; failures 20; final failures 0; slowest startup-sample/warm-restart 487ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 956.4 MB; tracked total 1686.1 MB; max CPU 151%; samples 20; roles gateway 956.4MB/151%, command-tree 729.7MB/158%, gateway-tree 956.4MB/151%, plugin-cli 525.7MB/158%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 754.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 656.9 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-014700-d7b572-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-014700-d7b572-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-014700-d7b572-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-fresh-install-fresh-r1-697fad55-kova-260724-014700-d7b572
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-fresh-install-fresh-r2-da880701-kova-260724-014700-d7b572
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-014700-d7b572
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-fresh-install-onboarded-9f99e904-kova-260724-014700-d7b572
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-fresh-install-onboarded-f9c24855-kova-260724-014700-d7b572
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-fresh-install-onboarded-fe872c26-kova-260724-014700-d7b572
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-014700-d7b572
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-014700-d7b572
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-014700-d7b572/kova-bundled-runtime-deps-mi-150715ba-kova-260724-014700-d7b572
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrya55pl-41g-d32530c1`
- Result: removed
- Duration: 393ms

