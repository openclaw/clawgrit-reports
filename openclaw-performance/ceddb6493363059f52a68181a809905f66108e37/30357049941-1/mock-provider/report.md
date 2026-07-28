# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1051.4 MB exceeded threshold 1050 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1051.4 MB exceeded threshold 1050 MB |
| Blocking findings | 18 |
| Warnings | 22 |
| Records | 18 (PASS:12, FAIL:6) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260728-120118-a3ae71` |
| Generated | 2026-07-28T12:11:30.075Z |
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
| PASS | 12 |
| FAIL | 6 |

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
  - primary: gateway peak RSS 1051.4 MB exceeded threshold 1050 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1051.4 MB exceeded threshold 1050 MB
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
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1051.4 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1000.9 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1023.3 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1088.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1088.8 MB, agent-process 1088.8 MB, command-tree 1088.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1000.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1000.4 MB, agent-process 1000.4 MB, command-tree 1000.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1002.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1002.7 MB, agent-process 1002.7 MB, command-tree 1002.7 MB
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
| fresh-install/fresh | 3 | PASS:3 | 7111ms | 940.3MB | n/a | 160% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5951ms | 929.6MB | n/a | 159% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:2, FAIL:1 | 7358ms | 1040.3MB | n/a | 166% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:1, FAIL:2 | 6789ms | 1000.9MB | n/a | 166% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 182.3% | 5036ms | 4884ms | 4866ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 6384ms | 1009.2MB | n/a | 161% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 7111ms | 931.1 MB | 1655.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5891ms | 940.3 MB | 1648.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 7563ms | 953.6 MB | 1640.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5951ms | 929.6 MB | 1609.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 9493ms | 926.9 MB | 1635.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5155ms | 935.9 MB | 1644 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 9642ms | 1021.8 MB | 1021.8 MB | n/a | n/a |  |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 6600ms | 1051.4 MB | 1051.4 MB | n/a | n/a | gateway peak RSS 1051.4 MB exceeded threshold 1050 MB |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7358ms | 1040.3 MB | 1040.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 6789ms | 995.3 MB | 1579.3 MB | n/a | n/a |  |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 6305ms | 1000.9 MB | 1648.6 MB | n/a | n/a | gateway peak RSS 1000.9 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 7447ms | 1023.3 MB | 1616.2 MB | n/a | n/a | gateway peak RSS 1023.3 MB exceeded threshold 1000 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1088.8 MB | 6244ms | 5571ms | agent-cli peak RSS 1088.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1088.8 MB, agent-process 1088.8 MB, command-tree 1088.8 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1000.4 MB | 5036ms | 4663ms | agent-cli peak RSS 1000.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1000.4 MB, agent-process 1000.4 MB, command-tree 1000.4 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1002.7 MB | 4705ms | 4884ms | agent-cli peak RSS 1002.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1002.7 MB, agent-process 1002.7 MB, command-tree 1002.7 MB |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 6959ms | 1003.7 MB | 1737.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 6384ms | 1024.9 MB | 1634.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 6295ms | 1009.2 MB | 1626.6 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1088.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 184.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1088.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1088.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 184.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 928.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1051.4 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 170% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 953.6 MB (scenario fresh-install/fresh); CPU 170% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 711.8 MB (scenario fresh-install/onboarded-user); CPU 170% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 588.7 MB (scenario fresh-install/onboarded-user); CPU 161% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-bundled-runtime-deps-mi-39c08a4a-kova-260728-120118-a3ae71
Measurements:
- startup: listening 6050ms; health 6600ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 550ms; post-ready p95 not-collected; failures 37; final failures 0; slowest startup-sample/warm-restart 603ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1051.4 MB; tracked total 1051.4 MB; max CPU 166%; samples 9; roles gateway 1051.4MB/166%, gateway-tree 901.6MB/166%, command-tree 5.8MB/2%, uncategorized 5.8MB/2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 921.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1051.4 MB exceeded threshold 1050 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-bundled-plugin-startup-809ede2b-kova-260728-120118-a3ae71
Measurements:
- startup: listening 5795ms; health 6305ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 10ms; post-ready p95 5ms; failures 41; final failures 0; slowest startup-sample/restart 774ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1000.9 MB; tracked total 1648.6 MB; max CPU 161%; samples 20; roles gateway 1000.9MB/161%, command-tree 711.6MB/170%, gateway-tree 939.9MB/161%, plugin-cli 711.6MB/170%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 954.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1000.9 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-bundled-plugin-startup-5377119f-kova-260728-120118-a3ae71
Measurements:
- startup: listening 6798ms; health 7447ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 4ms; post-ready p95 4ms; failures 42; final failures 0; slowest startup-sample/restart 691ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1023.3 MB; tracked total 1616.2 MB; max CPU 166%; samples 19; roles gateway 1023.3MB/166%, gateway-tree 932.5MB/166%, command-tree 689.4MB/163%, plugin-cli 689.4MB/163%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 932.62ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1023.3 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-agent-cold-warm-message-8e2a29af-kova-260728-120118-a3ae71
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1088.8 MB; tracked total 1088.8 MB; max CPU 184.4%; samples 19; roles agent-cli 1088.8MB/184.4%, agent-process 1088.8MB/184.4%, command-tree 1088.8MB/184.4%, status-cli 822.9MB/178.1%
- agent: turn 6244ms; cold/warm 6244ms/5571ms; cold-warm delta 673ms; pre-provider 5993ms; provider 4ms; metadata scans 14 (255.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6210.35ms; max 6244ms; pre-provider p95 5962.05ms
- agent CLI attribution: cold known 126ms / unattributed 5867ms; warm known 130ms / unattributed 5244ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1088.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1088.8 MB, agent-process 1088.8 MB, command-tree 1088.8 MB
  - agent-cli peak RSS 1088.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1088.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 6244ms; pre-provider 5993ms; provider 4ms; post-provider 247ms; response true
    - active window: metadata scans 7 (125ms total, max 59.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5993ms; provider 4ms; post-provider 247ms; unknown 5605.33ms; source plugins.metadata.scan 387.67ms
  - warm: total 5571ms; pre-provider 5374ms; provider 2ms; post-provider 195ms; response true
    - active window: metadata scans 7 (130.84ms total, max 60.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5374ms; provider 2ms; post-provider 195ms; unknown 4986.33ms; source plugins.metadata.scan 387.67ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5993 ms | 126 ms | 5867 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-agent-cold-warm-message-8e2a29af-kova-260728-120118-a3ae71/openclaw/timeline.jsonl |
  | warm | 5374 ms | 130 ms | 5244 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-agent-cold-warm-message-8e2a29af-kova-260728-120118-a3ae71/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 60 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-agent-cold-warm-message-2ab680e0-kova-260728-120118-a3ae71
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1000.4 MB; tracked total 1000.4 MB; max CPU 177.6%; samples 16; roles agent-cli 1000.4MB/177.6%, command-tree 1000.4MB/180%, agent-process 1000.4MB/177.6%, status-cli 859.1MB/180%
- agent: turn 5036ms; cold/warm 5036ms/4663ms; cold-warm delta 373ms; pre-provider 4866ms; provider 3ms; metadata scans 14 (245.62ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5017.35ms; max 5036ms; pre-provider p95 4847.45ms
- agent CLI attribution: cold known 131ms / unattributed 4735ms; warm known 111ms / unattributed 4384ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1000.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1000.4 MB, agent-process 1000.4 MB, command-tree 1000.4 MB
  - agent-cli peak RSS 1000.4 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1000.4 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5036ms; pre-provider 4866ms; provider 3ms; post-provider 167ms; response true
    - active window: metadata scans 7 (132.97ms total, max 62.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4866ms; provider 3ms; post-provider 167ms; unknown 4485.94ms; source plugins.metadata.scan 380.06ms
  - warm: total 4663ms; pre-provider 4495ms; provider 1ms; post-provider 167ms; response true
    - active window: metadata scans 7 (112.65ms total, max 67.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4495ms; provider 1ms; post-provider 167ms; unknown 4114.94ms; source plugins.metadata.scan 380.06ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4866 ms | 131 ms | 4735 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-agent-cold-warm-message-2ab680e0-kova-260728-120118-a3ae71/openclaw/timeline.jsonl |
  | warm | 4495 ms | 111 ms | 4384 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-agent-cold-warm-message-2ab680e0-kova-260728-120118-a3ae71/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 111 ms | 67 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-agent-cold-warm-message-67b331a3-kova-260728-120118-a3ae71
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1002.7 MB; tracked total 1002.7 MB; max CPU 182.3%; samples 17; roles agent-cli 1002.7MB/182.3%, command-tree 1002.7MB/193%, agent-process 1002.7MB/182.3%, status-cli 928.5MB/193%
- agent: turn 4884ms; cold/warm 4705ms/4884ms; cold-warm delta 0ms; pre-provider 4673ms; provider 1ms; metadata scans 14 (226.86ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4875.05ms; max 4884ms; pre-provider p95 4665.35ms
- agent CLI attribution: cold known 110ms / unattributed 4410ms; warm known 116ms / unattributed 4557ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1002.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1002.7 MB, agent-process 1002.7 MB, command-tree 1002.7 MB
  - agent-cli peak RSS 1002.7 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1002.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4705ms; pre-provider 4520ms; provider 3ms; post-provider 182ms; response true
    - active window: metadata scans 7 (110.41ms total, max 56.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4520ms; provider 3ms; post-provider 182ms; unknown 4156.73ms; source plugins.metadata.scan 363.27ms
  - warm: total 4884ms; pre-provider 4673ms; provider 1ms; post-provider 210ms; response true
    - active window: metadata scans 7 (116.45ms total, max 61.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4673ms; provider 1ms; post-provider 210ms; unknown 4309.73ms; source plugins.metadata.scan 363.27ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4520 ms | 110 ms | 4410 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-agent-cold-warm-message-67b331a3-kova-260728-120118-a3ae71/openclaw/timeline.jsonl |
  | warm | 4673 ms | 116 ms | 4557 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-agent-cold-warm-message-67b331a3-kova-260728-120118-a3ae71/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 110 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 116 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-120118-a3ae71-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-120118-a3ae71-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260728-120118-a3ae71-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-fresh-install-fresh-r1-697fad55-kova-260728-120118-a3ae71
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-fresh-install-fresh-r2-da880701-kova-260728-120118-a3ae71
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-fresh-install-fresh-r3-82f8bdbd-kova-260728-120118-a3ae71
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-fresh-install-onboarded-9f99e904-kova-260728-120118-a3ae71
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-fresh-install-onboarded-f9c24855-kova-260728-120118-a3ae71
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-fresh-install-onboarded-fe872c26-kova-260728-120118-a3ae71
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260728-120118-a3ae71
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-bundled-runtime-deps-mi-39c08a4a-kova-260728-120118-a3ae71
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260728-120118-a3ae71/kova-bundled-runtime-deps-mi-150715ba-kova-260728-120118-a3ae71
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms4luk2k-42e-509e897f`
- Result: removed
- Duration: 535ms

