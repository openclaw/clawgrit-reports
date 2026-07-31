# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — model-cli peak RSS 759 MB exceeded threshold 700 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | model-cli peak RSS 759 MB exceeded threshold 700 MB |
| Blocking findings | 16 |
| Warnings | 20 |
| Records | 18 (FAIL:5, PASS:13) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260731-075852-0fbf7a` |
| Generated | 2026-07-31T08:08:27.275Z |
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
| FAIL | 5 |
| PASS | 13 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 5
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 5 blocking, 0 warning
  - primary: model-cli peak RSS 759 MB exceeded threshold 700 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: model-cli peak RSS 759 MB exceeded threshold 700 MB
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
- BLOCKING fresh-install/fresh: model-cli peak RSS 759 MB exceeded threshold 700 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1016.5 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1034.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1034.3 MB, agent-process 1034.3 MB, command-tree 1034.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1037.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1037.8 MB, agent-process 1037.8 MB, command-tree 1037.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1031.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1031.3 MB, agent-process 1031.3 MB, command-tree 1031.3 MB
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
| info | Kova | report | 30 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:1, PASS:2 | 5433ms | 924.6MB | n/a | 156% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5786ms | 918.2MB | n/a | 159% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5943ms | 976.3MB | n/a | 160% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 5704ms | 984.2MB | n/a | 159% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 176.3% | 4335ms | 4304ms | 4185ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5814ms | 991.1MB | n/a | 158% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 5433ms | 924.6 MB | 1662.7 MB | n/a | n/a | model-cli peak RSS 759 MB exceeded threshold 700 MB |
| 2 | PASS | fresh-install/fresh |  | 5296ms | 875.3 MB | 1624.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5815ms | 972.3 MB | 1652.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5786ms | 937.5 MB | 1647 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5810ms | 918.2 MB | 1624 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5729ms | 872.4 MB | 1581.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5870ms | 912.7 MB | 912.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5943ms | 1023.6 MB | 1023.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5981ms | 976.3 MB | 976.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5678ms | 978 MB | 1645.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5818ms | 984.2 MB | 1639.2 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5704ms | 1016.5 MB | 1632.9 MB | n/a | n/a | gateway peak RSS 1016.5 MB exceeded threshold 1000 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1034.3 MB | 4402ms | 4363ms | agent-cli peak RSS 1034.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1034.3 MB, agent-process 1034.3 MB, command-tree 1034.3 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1037.8 MB | 4238ms | 4304ms | agent-cli peak RSS 1037.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1037.8 MB, agent-process 1037.8 MB, command-tree 1037.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1031.3 MB | 4335ms | 4288ms | agent-cli peak RSS 1031.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1031.3 MB, agent-process 1031.3 MB, command-tree 1031.3 MB |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5892ms | 1024.3 MB | 1662.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5756ms | 925.8 MB | 1633.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5814ms | 991.1 MB | 1669.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1037.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1037.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1037.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 871.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1024.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 972.3 MB (scenario fresh-install/fresh); CPU 160% (scenario fresh-install/onboarded-user)
- model-cli: RSS 759 MB (scenario fresh-install/fresh); CPU 149% (scenario fresh-install/fresh)
- plugin-cli: RSS 739.5 MB (scenario fresh-install/fresh); CPU 157% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-fresh-install-fresh-r1-697fad55-kova-260731-075852-0fbf7a
Measurements:
- startup: listening 5027ms; health 5433ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 3ms; post-ready p95 3ms; failures 20; final failures 0; slowest startup-sample/provision 406ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 924.6 MB; tracked total 1662.7 MB; max CPU 156%; samples 21; roles gateway 924.6MB/156%, gateway-tree 924.6MB/156%, command-tree 759MB/152%, model-cli 759MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.load 343.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 759 MB exceeded threshold 700 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-bundled-plugin-startup-5377119f-kova-260731-075852-0fbf7a
Measurements:
- startup: listening 5275ms; health 5704ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 379ms; post-ready p95 3ms; failures 31; final failures 0; slowest startup-sample/gateway-start 429ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1016.5 MB; tracked total 1632.9 MB; max CPU 159%; samples 17; roles gateway 1016.5MB/159%, gateway-tree 938.1MB/159%, command-tree 694.9MB/154%, plugin-cli 694.9MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 463.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1016.5 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-agent-cold-warm-message-8e2a29af-kova-260731-075852-0fbf7a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1034.3 MB; tracked total 1034.3 MB; max CPU 176.2%; samples 16; roles agent-cli 1034.3MB/176.2%, command-tree 1034.3MB/176.3%, agent-process 1034.3MB/176.2%, status-cli 870.6MB/176.3%
- agent: turn 4402ms; cold/warm 4402ms/4363ms; cold-warm delta 39ms; pre-provider 4241ms; provider 3ms; metadata scans 14 (213.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4400.05ms; max 4402ms; pre-provider p95 4240.35ms
- agent CLI attribution: cold known 100ms / unattributed 4141ms; warm known 113ms / unattributed 4115ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1034.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1034.3 MB, agent-process 1034.3 MB, command-tree 1034.3 MB
  - agent-cli peak RSS 1034.3 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1034.3 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4402ms; pre-provider 4241ms; provider 3ms; post-provider 158ms; response true
    - active window: metadata scans 7 (99.93ms total, max 52.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4241ms; provider 3ms; post-provider 158ms; unknown 3850.5ms; source plugins.metadata.scan 390.5ms
  - warm: total 4363ms; pre-provider 4228ms; provider 1ms; post-provider 134ms; response true
    - active window: metadata scans 7 (113.27ms total, max 61.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4228ms; provider 1ms; post-provider 134ms; unknown 3837.5ms; source plugins.metadata.scan 390.5ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4241 ms | 100 ms | 4141 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-agent-cold-warm-message-8e2a29af-kova-260731-075852-0fbf7a/openclaw/timeline.jsonl |
  | warm | 4228 ms | 113 ms | 4115 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-agent-cold-warm-message-8e2a29af-kova-260731-075852-0fbf7a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 100 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 113 ms | 61 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-agent-cold-warm-message-2ab680e0-kova-260731-075852-0fbf7a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1037.8 MB; tracked total 1037.8 MB; max CPU 179%; samples 16; roles agent-cli 1037.8MB/179%, command-tree 1037.8MB/179.4%, agent-process 1037.8MB/179%, status-cli 869.1MB/179.4%
- agent: turn 4304ms; cold/warm 4238ms/4304ms; cold-warm delta 0ms; pre-provider 4177ms; provider 2ms; metadata scans 14 (213.72ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4300.7ms; max 4304ms; pre-provider p95 4173.1ms
- agent CLI attribution: cold known 109ms / unattributed 3990ms; warm known 105ms / unattributed 4072ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1037.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1037.8 MB, agent-process 1037.8 MB, command-tree 1037.8 MB
  - agent-cli peak RSS 1037.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1037.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4238ms; pre-provider 4099ms; provider 3ms; post-provider 136ms; response true
    - active window: metadata scans 7 (109.02ms total, max 59.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4099ms; provider 3ms; post-provider 136ms; unknown 3692.85ms; source plugins.metadata.scan 406.15ms
  - warm: total 4304ms; pre-provider 4177ms; provider 2ms; post-provider 125ms; response true
    - active window: metadata scans 7 (104.7ms total, max 61.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4177ms; provider 2ms; post-provider 125ms; unknown 3770.85ms; source plugins.metadata.scan 406.15ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4099 ms | 109 ms | 3990 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-agent-cold-warm-message-2ab680e0-kova-260731-075852-0fbf7a/openclaw/timeline.jsonl |
  | warm | 4177 ms | 105 ms | 4072 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-agent-cold-warm-message-2ab680e0-kova-260731-075852-0fbf7a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 109 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 105 ms | 61 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-agent-cold-warm-message-67b331a3-kova-260731-075852-0fbf7a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1031.3 MB; tracked total 1031.3 MB; max CPU 176.3%; samples 16; roles agent-cli 1031.3MB/176.3%, command-tree 1031.3MB/179.3%, agent-process 1031.3MB/176.3%, status-cli 871.6MB/179.3%
- agent: turn 4335ms; cold/warm 4335ms/4288ms; cold-warm delta 47ms; pre-provider 4185ms; provider 4ms; metadata scans 14 (203.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4332.65ms; max 4335ms; pre-provider p95 4183.3ms
- agent CLI attribution: cold known 102ms / unattributed 4083ms; warm known 102ms / unattributed 4049ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.43ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1031.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1031.3 MB, agent-process 1031.3 MB, command-tree 1031.3 MB
  - agent-cli peak RSS 1031.3 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1031.3 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4335ms; pre-provider 4185ms; provider 4ms; post-provider 146ms; response true
    - active window: metadata scans 7 (101.39ms total, max 55.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4185ms; provider 4ms; post-provider 146ms; unknown 3805.33ms; source plugins.metadata.scan 379.67ms
  - warm: total 4288ms; pre-provider 4151ms; provider 2ms; post-provider 135ms; response true
    - active window: metadata scans 7 (102.31ms total, max 57.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4151ms; provider 2ms; post-provider 135ms; unknown 3771.33ms; source plugins.metadata.scan 379.67ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4185 ms | 102 ms | 4083 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-agent-cold-warm-message-67b331a3-kova-260731-075852-0fbf7a/openclaw/timeline.jsonl |
  | warm | 4151 ms | 102 ms | 4049 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-agent-cold-warm-message-67b331a3-kova-260731-075852-0fbf7a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 102 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 102 ms | 57 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260731-075852-0fbf7a-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260731-075852-0fbf7a-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260731-075852-0fbf7a-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-fresh-install-fresh-r1-697fad55-kova-260731-075852-0fbf7a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-fresh-install-fresh-r2-da880701-kova-260731-075852-0fbf7a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-fresh-install-fresh-r3-82f8bdbd-kova-260731-075852-0fbf7a
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-fresh-install-onboarded-9f99e904-kova-260731-075852-0fbf7a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-fresh-install-onboarded-f9c24855-kova-260731-075852-0fbf7a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-fresh-install-onboarded-fe872c26-kova-260731-075852-0fbf7a
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260731-075852-0fbf7a
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-bundled-runtime-deps-mi-39c08a4a-kova-260731-075852-0fbf7a
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-075852-0fbf7a/kova-bundled-runtime-deps-mi-150715ba-kova-260731-075852-0fbf7a
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms8nickx-402-7af4c5d0`
- Result: removed
- Duration: 444ms

