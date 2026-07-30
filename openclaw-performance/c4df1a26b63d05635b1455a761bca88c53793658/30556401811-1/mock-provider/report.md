# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — model-cli peak RSS 709.9 MB exceeded threshold 700 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | model-cli peak RSS 709.9 MB exceeded threshold 700 MB |
| Blocking findings | 19 |
| Warnings | 21 |
| Records | 18 (FAIL:6, PASS:12) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260730-152430-be95f5` |
| Generated | 2026-07-30T15:36:22.699Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 18 |
| Scenarios | 5 |
| States | 5 |
| FAIL | 6 |
| PASS | 12 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 6
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 6 blocking, 0 warning
  - primary: model-cli peak RSS 709.9 MB exceeded threshold 700 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: model-cli peak RSS 709.9 MB exceeded threshold 700 MB
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
- BLOCKING fresh-install/fresh: model-cli peak RSS 709.9 MB exceeded threshold 700 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1015.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.9 MB, agent-process 1015.9 MB, command-tree 1015.9 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1026.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1026.5 MB, agent-process 1026.5 MB, command-tree 1026.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1018.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1018.6 MB, agent-process 1018.6 MB, command-tree 1018.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 686 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1085.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1085.2 MB, gateway-tree 1085.2 MB, command-tree 761.1 MB
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
| info | Kova | report | 34 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:1, PASS:2 | 6557ms | 933.1MB | n/a | 163% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 11012ms | 935.5MB | n/a | 158% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 6834ms | 953.8MB | n/a | 164% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5959ms | 945.8MB | n/a | 164% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 183.7% | 5051ms | 4994ms | 4860ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:2, PASS:1 | 6769ms | 1011.7MB | n/a | 166% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 6176ms | 965.8 MB | 1707.6 MB | n/a | n/a | model-cli peak RSS 709.9 MB exceeded threshold 700 MB |
| 2 | PASS | fresh-install/fresh |  | 6767ms | 929.8 MB | 1691.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 6557ms | 933.1 MB | 1752.2 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 11012ms | 956.7 MB | 1772.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 11300ms | 925.4 MB | 1730.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5914ms | 935.5 MB | 1706.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6834ms | 937.7 MB | 943.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5887ms | 966.4 MB | 966.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7409ms | 953.8 MB | 959.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 7429ms | 945.8 MB | 1729.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5959ms | 998.6 MB | 1618.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5914ms | 934.4 MB | 1598.4 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1015.9 MB | 4596ms | 5960ms | agent-cli peak RSS 1015.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.9 MB, agent-process 1015.9 MB, command-tree 1015.9 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1026.5 MB | 5051ms | 4994ms | agent-cli peak RSS 1026.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1026.5 MB, agent-process 1026.5 MB, command-tree 1026.5 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1018.6 MB | 5148ms | 4912ms | agent-cli peak RSS 1018.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1018.6 MB, agent-process 1018.6 MB, command-tree 1018.6 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 7126ms | 948.5 MB | 1744.5 MB | n/a | n/a | model-cli peak RSS 686 MB exceeded threshold 650 MB |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 6769ms | 1011.7 MB | 1678.9 MB | n/a | n/a |  |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 6747ms | 1085.2 MB | 1846.3 MB | n/a | n/a | gateway peak RSS 1085.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1085.2 MB, gateway-tree 1085.2 MB, command-tree 761.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1085.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 167% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1026.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1085.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 167% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 839.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 1026.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 187.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1026.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 187.6% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 709.9 MB (scenario fresh-install/fresh); CPU 169% (scenario fresh-install/fresh)
- plugin-cli: RSS 801.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 168% (scenario bundled-plugin-startup/fresh)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-fresh-install-fresh-r1-697fad55-kova-260730-152430-be95f5
Measurements:
- startup: listening 5789ms; health 6176ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 4ms; post-ready p95 5ms; failures 23; final failures 0; slowest startup-sample/provision 387ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 965.8 MB; tracked total 1707.6 MB; max CPU 155%; samples 22; roles gateway 965.8MB/155%, command-tree 742.6MB/157%, gateway-tree 965.8MB/155%, plugin-cli 683.7MB/157%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.load 363.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 709.9 MB exceeded threshold 700 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-agent-cold-warm-message-8e2a29af-kova-260730-152430-be95f5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1015.9 MB; tracked total 1015.9 MB; max CPU 183.7%; samples 18; roles agent-cli 1015.9MB/183.7%, command-tree 1015.9MB/190.6%, agent-process 1015.9MB/183.7%, status-cli 839.9MB/190.6%
- agent: turn 5960ms; cold/warm 4596ms/5960ms; cold-warm delta 0ms; pre-provider 5727ms; provider 1ms; metadata scans 14 (245.63ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5891.8ms; max 5960ms; pre-provider p95 5661.65ms
- agent CLI attribution: cold known 112ms / unattributed 4308ms; warm known 136ms / unattributed 5591ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 79.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1015.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.9 MB, agent-process 1015.9 MB, command-tree 1015.9 MB
  - agent-cli peak RSS 1015.9 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1015.9 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4596ms; pre-provider 4420ms; provider 3ms; post-provider 173ms; response true
    - active window: metadata scans 7 (110.74ms total, max 55.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4420ms; provider 3ms; post-provider 173ms; unknown 3881.19ms; source plugins.metadata.scan 538.81ms
  - warm: total 5960ms; pre-provider 5727ms; provider 1ms; post-provider 232ms; response true
    - active window: metadata scans 7 (134.89ms total, max 79.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5727ms; provider 1ms; post-provider 232ms; unknown 5188.19ms; source plugins.metadata.scan 538.81ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4420 ms | 112 ms | 4308 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-agent-cold-warm-message-8e2a29af-kova-260730-152430-be95f5/openclaw/timeline.jsonl |
  | warm | 5727 ms | 136 ms | 5591 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-agent-cold-warm-message-8e2a29af-kova-260730-152430-be95f5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 112 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 136 ms | 80 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-agent-cold-warm-message-2ab680e0-kova-260730-152430-be95f5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1026.5 MB; tracked total 1026.5 MB; max CPU 187.6%; samples 17; roles agent-cli 1026.5MB/187.6%, command-tree 1026.5MB/193.8%, agent-process 1026.5MB/187.6%, status-cli 809.4MB/193.8%
- agent: turn 5051ms; cold/warm 5051ms/4994ms; cold-warm delta 57ms; pre-provider 4902ms; provider 3ms; metadata scans 14 (230.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5048.15ms; max 5051ms; pre-provider p95 4893.15ms
- agent CLI attribution: cold known 116ms / unattributed 4786ms; warm known 114ms / unattributed 4611ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 96.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1026.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1026.5 MB, agent-process 1026.5 MB, command-tree 1026.5 MB
  - agent-cli peak RSS 1026.5 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1026.5 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5051ms; pre-provider 4902ms; provider 3ms; post-provider 146ms; response true
    - active window: metadata scans 7 (115.87ms total, max 62.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4902ms; provider 3ms; post-provider 146ms; unknown 4450.43ms; source plugins.metadata.scan 451.57ms
  - warm: total 4994ms; pre-provider 4725ms; provider 1ms; post-provider 268ms; response true
    - active window: metadata scans 7 (114.39ms total, max 62.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4725ms; provider 1ms; post-provider 268ms; unknown 4273.43ms; source plugins.metadata.scan 451.57ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4902 ms | 116 ms | 4786 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-agent-cold-warm-message-2ab680e0-kova-260730-152430-be95f5/openclaw/timeline.jsonl |
  | warm | 4725 ms | 114 ms | 4611 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-agent-cold-warm-message-2ab680e0-kova-260730-152430-be95f5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 116 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 114 ms | 62 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-agent-cold-warm-message-67b331a3-kova-260730-152430-be95f5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1018.6 MB; tracked total 1018.6 MB; max CPU 180.2%; samples 18; roles agent-cli 1018.6MB/180.2%, command-tree 1018.6MB/193.2%, agent-process 1018.6MB/180.2%, status-cli 837.4MB/193.2%
- agent: turn 5148ms; cold/warm 5148ms/4912ms; cold-warm delta 236ms; pre-provider 4860ms; provider 4ms; metadata scans 14 (226.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5136.2ms; max 5148ms; pre-provider p95 4853.55ms
- agent CLI attribution: cold known 110ms / unattributed 4750ms; warm known 116ms / unattributed 4615ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 104.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1018.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1018.6 MB, agent-process 1018.6 MB, command-tree 1018.6 MB
  - agent-cli peak RSS 1018.6 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1018.6 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5148ms; pre-provider 4860ms; provider 4ms; post-provider 284ms; response true
    - active window: metadata scans 7 (109.91ms total, max 60.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4860ms; provider 4ms; post-provider 284ms; unknown 4394.71ms; source plugins.metadata.scan 465.29ms
  - warm: total 4912ms; pre-provider 4731ms; provider 2ms; post-provider 179ms; response true
    - active window: metadata scans 7 (116.73ms total, max 69.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4731ms; provider 2ms; post-provider 179ms; unknown 4265.71ms; source plugins.metadata.scan 465.29ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4860 ms | 110 ms | 4750 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-agent-cold-warm-message-67b331a3-kova-260730-152430-be95f5/openclaw/timeline.jsonl |
  | warm | 4731 ms | 116 ms | 4615 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-agent-cold-warm-message-67b331a3-kova-260730-152430-be95f5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 110 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 116 ms | 69 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-gateway-performance-man-005107f3-kova-260730-152430-be95f5
Measurements:
- startup: listening 6552ms; health 7126ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 3ms; post-ready p95 3ms; failures 39; final failures 0; slowest startup-sample/warm-restart 824ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 948.5 MB; tracked total 1744.5 MB; max CPU 167%; samples 26; roles gateway 948.5MB/167%, gateway-tree 948.5MB/167%, command-tree 798.9MB/163%, status-cli 798.9MB/162%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 583.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 686 MB exceeded threshold 650 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-gateway-performance-man-958fde53-kova-260730-152430-be95f5
Measurements:
- startup: listening 6046ms; health 6747ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 573ms; post-ready p95 3ms; failures 37; final failures 0; slowest startup-sample/cold-start 701ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1085.2 MB; tracked total 1846.3 MB; max CPU 166%; samples 27; roles gateway 1085.2MB/166%, gateway-tree 1085.2MB/166%, command-tree 761.1MB/164%, status-cli 761.1MB/164%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 594.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1085.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1085.2 MB, gateway-tree 1085.2 MB, command-tree 761.1 MB
  - gateway peak RSS 1085.2 MB exceeded threshold 1050 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260730-152430-be95f5-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260730-152430-be95f5-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260730-152430-be95f5-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-fresh-install-fresh-r1-697fad55-kova-260730-152430-be95f5
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-fresh-install-fresh-r2-da880701-kova-260730-152430-be95f5
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-fresh-install-fresh-r3-82f8bdbd-kova-260730-152430-be95f5
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-fresh-install-onboarded-9f99e904-kova-260730-152430-be95f5
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-fresh-install-onboarded-f9c24855-kova-260730-152430-be95f5
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-fresh-install-onboarded-fe872c26-kova-260730-152430-be95f5
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260730-152430-be95f5
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-bundled-runtime-deps-mi-39c08a4a-kova-260730-152430-be95f5
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-152430-be95f5/kova-bundled-runtime-deps-mi-150715ba-kova-260730-152430-be95f5
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms7nzkry-3yw-e0571e2b`
- Result: removed
- Duration: 1596ms

