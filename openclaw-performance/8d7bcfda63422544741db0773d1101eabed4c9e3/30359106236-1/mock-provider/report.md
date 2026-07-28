# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1017 MB exceeded threshold 1000 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1017 MB exceeded threshold 1000 MB |
| Blocking findings | 14 |
| Warnings | 23 |
| Records | 18 (PASS:14, FAIL:4) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260728-122957-0d15a6` |
| Generated | 2026-07-28T12:42:16.800Z |
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
| PASS | 14 |
| FAIL | 4 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 4
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 4 blocking, 0 warning
  - primary: gateway peak RSS 1017 MB exceeded threshold 1000 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1017 MB exceeded threshold 1000 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1017 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1004.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1004.8 MB, agent-process 1004.8 MB, command-tree 1004.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1066.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1066.7 MB, agent-process 1066.7 MB, command-tree 1066.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1000.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1000.5 MB, agent-process 1000.5 MB, command-tree 1000.5 MB
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
| info | Kova | report | 31 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 7769ms | 926.3MB | n/a | 166% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 6259ms | 927.8MB | n/a | 163% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 7078ms | 1034.2MB | n/a | 162% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 7626ms | 942.2MB | n/a | 166% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 185.6% | 4580ms | 4942ms | 4403ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 6711ms | 1018.9MB | n/a | 164% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 7957ms | 949.3 MB | 1660.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 7769ms | 924.7 MB | 1653.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 7729ms | 926.3 MB | 1615.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 8489ms | 924.5 MB | 1701.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 6259ms | 927.8 MB | 1659.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5660ms | 932.4 MB | 1639.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7078ms | 1034.2 MB | 1034.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6149ms | 984.5 MB | 984.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7279ms | 1043.1 MB | 1043.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 6510ms | 942.2 MB | 1616.9 MB | n/a | n/a |  |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 7626ms | 1017 MB | 1590.4 MB | n/a | n/a | gateway peak RSS 1017 MB exceeded threshold 1000 MB |
| 3 | PASS | bundled-plugin-startup/fresh |  | 7825ms | 920.3 MB | 1592.4 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1004.8 MB | 4332ms | 5327ms | agent-cli peak RSS 1004.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1004.8 MB, agent-process 1004.8 MB, command-tree 1004.8 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1066.7 MB | 4823ms | 4736ms | agent-cli peak RSS 1066.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1066.7 MB, agent-process 1066.7 MB, command-tree 1066.7 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1000.5 MB | 4580ms | 4942ms | agent-cli peak RSS 1000.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1000.5 MB, agent-process 1000.5 MB, command-tree 1000.5 MB |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 6711ms | 1022.9 MB | 1655.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 6253ms | 1011.4 MB | 1718.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 6952ms | 1018.9 MB | 1729.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1066.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1066.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1066.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1043.1 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 168% (scenario bundled-runtime-deps/missing-plugin-index)
- status-cli: RSS 931.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 181.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 957.1 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 168% (scenario bundled-runtime-deps/missing-plugin-index)
- plugin-cli: RSS 711.3 MB (scenario fresh-install/onboarded-user); CPU 166% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 638.6 MB (scenario fresh-install/onboarded-user); CPU 164% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-bundled-plugin-startup-809ede2b-kova-260728-122957-0d15a6
Measurements:
- startup: listening 7047ms; health 7626ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 2ms; post-ready p95 3ms; failures 40; final failures 0; slowest startup-sample/gateway-start 579ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1017 MB; tracked total 1590.4 MB; max CPU 167%; samples 17; roles gateway 1017MB/167%, gateway-tree 923.6MB/167%, command-tree 667.1MB/161%, plugin-cli 667.1MB/161%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 861.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1017 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-agent-cold-warm-message-8e2a29af-kova-260728-122957-0d15a6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1004.8 MB; tracked total 1004.8 MB; max CPU 181.6%; samples 18; roles agent-cli 1004.8MB/181.6%, agent-process 1004.8MB/181.6%, command-tree 1004.8MB/181.6%, status-cli 931.2MB/181%
- agent: turn 5327ms; cold/warm 4332ms/5327ms; cold-warm delta 0ms; pre-provider 5148ms; provider 1ms; metadata scans 14 (221.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5277.25ms; max 5327ms; pre-provider p95 5099.45ms
- agent CLI attribution: cold known 91ms / unattributed 4086ms; warm known 130ms / unattributed 5018ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.73ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1004.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1004.8 MB, agent-process 1004.8 MB, command-tree 1004.8 MB
  - agent-cli peak RSS 1004.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1004.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4332ms; pre-provider 4177ms; provider 3ms; post-provider 152ms; response true
    - active window: metadata scans 7 (90.57ms total, max 46.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4177ms; provider 3ms; post-provider 152ms; unknown 3815.45ms; source plugins.metadata.scan 361.55ms
  - warm: total 5327ms; pre-provider 5148ms; provider 1ms; post-provider 178ms; response true
    - active window: metadata scans 7 (131.31ms total, max 60.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5148ms; provider 1ms; post-provider 178ms; unknown 4786.45ms; source plugins.metadata.scan 361.55ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4177 ms | 91 ms | 4086 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-agent-cold-warm-message-8e2a29af-kova-260728-122957-0d15a6/openclaw/timeline.jsonl |
  | warm | 5148 ms | 130 ms | 5018 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-agent-cold-warm-message-8e2a29af-kova-260728-122957-0d15a6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 91 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-agent-cold-warm-message-2ab680e0-kova-260728-122957-0d15a6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1066.7 MB; tracked total 1066.7 MB; max CPU 189.8%; samples 16; roles agent-cli 1066.7MB/189.8%, agent-process 1066.7MB/189.8%, command-tree 1066.7MB/189.8%, status-cli 861.2MB/170.3%
- agent: turn 4823ms; cold/warm 4823ms/4736ms; cold-warm delta 87ms; pre-provider 4633ms; provider 4ms; metadata scans 14 (219.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4818.65ms; max 4823ms; pre-provider p95 4630.05ms
- agent CLI attribution: cold known 102ms / unattributed 4531ms; warm known 118ms / unattributed 4456ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1066.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1066.7 MB, agent-process 1066.7 MB, command-tree 1066.7 MB
  - agent-cli peak RSS 1066.7 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1066.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4823ms; pre-provider 4633ms; provider 4ms; post-provider 186ms; response true
    - active window: metadata scans 7 (101.41ms total, max 50.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4633ms; provider 4ms; post-provider 186ms; unknown 4282ms; source plugins.metadata.scan 351ms
  - warm: total 4736ms; pre-provider 4574ms; provider 1ms; post-provider 161ms; response true
    - active window: metadata scans 7 (117.64ms total, max 72.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4574ms; provider 1ms; post-provider 161ms; unknown 4223ms; source plugins.metadata.scan 351ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4633 ms | 102 ms | 4531 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-agent-cold-warm-message-2ab680e0-kova-260728-122957-0d15a6/openclaw/timeline.jsonl |
  | warm | 4574 ms | 118 ms | 4456 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-agent-cold-warm-message-2ab680e0-kova-260728-122957-0d15a6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 102 ms | 50 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 118 ms | 73 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-agent-cold-warm-message-67b331a3-kova-260728-122957-0d15a6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1000.5 MB; tracked total 1000.5 MB; max CPU 185.6%; samples 17; roles agent-cli 1000.5MB/185.6%, agent-process 1000.5MB/185.6%, command-tree 1000.5MB/185.6%, status-cli 819.6MB/181.5%
- agent: turn 4942ms; cold/warm 4580ms/4942ms; cold-warm delta 0ms; pre-provider 4789ms; provider 1ms; metadata scans 14 (228.12ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4923.9ms; max 4942ms; pre-provider p95 4769.7ms
- agent CLI attribution: cold known 103ms / unattributed 4300ms; warm known 129ms / unattributed 4660ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 82.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1000.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1000.5 MB, agent-process 1000.5 MB, command-tree 1000.5 MB
  - agent-cli peak RSS 1000.5 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1000.5 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4580ms; pre-provider 4403ms; provider 2ms; post-provider 175ms; response true
    - active window: metadata scans 7 (101.03ms total, max 53.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4403ms; provider 2ms; post-provider 175ms; unknown 4033.12ms; source plugins.metadata.scan 369.88ms
  - warm: total 4942ms; pre-provider 4789ms; provider 1ms; post-provider 152ms; response true
    - active window: metadata scans 7 (127.09ms total, max 82.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4789ms; provider 1ms; post-provider 152ms; unknown 4419.12ms; source plugins.metadata.scan 369.88ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4403 ms | 103 ms | 4300 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-agent-cold-warm-message-67b331a3-kova-260728-122957-0d15a6/openclaw/timeline.jsonl |
  | warm | 4789 ms | 129 ms | 4660 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-agent-cold-warm-message-67b331a3-kova-260728-122957-0d15a6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 103 ms | 54 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 83 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-122957-0d15a6-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-122957-0d15a6-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-122957-0d15a6-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-fresh-install-fresh-r1-697fad55-kova-260728-122957-0d15a6
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-fresh-install-fresh-r2-da880701-kova-260728-122957-0d15a6
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-fresh-install-fresh-r3-82f8bdbd-kova-260728-122957-0d15a6
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-fresh-install-onboarded-9f99e904-kova-260728-122957-0d15a6
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-fresh-install-onboarded-f9c24855-kova-260728-122957-0d15a6
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-fresh-install-onboarded-fe872c26-kova-260728-122957-0d15a6
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260728-122957-0d15a6
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-bundled-runtime-deps-mi-39c08a4a-kova-260728-122957-0d15a6
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-122957-0d15a6/kova-bundled-runtime-deps-mi-150715ba-kova-260728-122957-0d15a6
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms4mvf53-421-eb9501a9`
- Result: removed
- Duration: 497ms

