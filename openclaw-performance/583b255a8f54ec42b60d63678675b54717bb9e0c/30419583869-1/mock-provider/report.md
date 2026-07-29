# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1069.6 MB exceeded threshold 1050 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1069.6 MB exceeded threshold 1050 MB |
| Blocking findings | 20 |
| Warnings | 20 |
| Records | 18 (PASS:11, FAIL:7) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260729-032748-04bdad` |
| Generated | 2026-07-29T03:36:04.657Z |
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
| PASS | 11 |
| FAIL | 7 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 7
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 7 blocking, 0 warning
  - primary: gateway peak RSS 1069.6 MB exceeded threshold 1050 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1069.6 MB exceeded threshold 1050 MB
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
- BLOCKING bundled-runtime-deps/missing-plugin-index: gateway peak RSS 1069.6 MB exceeded threshold 1050 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1012.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.1 MB, agent-process 1012.1 MB, command-tree 1012.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1026.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1026.7 MB, agent-process 1026.7 MB, command-tree 1026.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1005.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1005.4 MB, agent-process 1005.4 MB, command-tree 1005.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 676.1 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 674 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 667.1 MB exceeded threshold 650 MB
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
| fresh-install/fresh | 3 | PASS:3 | 5739ms | 944.5MB | n/a | 159% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5037ms | 945.4MB | n/a | 158% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:2, FAIL:1 | 6182ms | 1026MB | n/a | 162% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5612ms | 990.7MB | n/a | 161% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 177.9% | 3991ms | 3896ms | 3824ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5006ms | 970.6MB | n/a | 160% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5807ms | 949.6 MB | 1726.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5739ms | 914.8 MB | 1700.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5206ms | 944.5 MB | 1690.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5078ms | 947.3 MB | 1667.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5037ms | 937.2 MB | 1684 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4994ms | 945.4 MB | 1692 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5292ms | 1026 MB | 1026 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6244ms | 960.6 MB | 960.6 MB | n/a | n/a |  |
| 3 | FAIL | bundled-runtime-deps/missing-plugin-index |  | 6182ms | 1069.6 MB | 1069.6 MB | n/a | n/a | gateway peak RSS 1069.6 MB exceeded threshold 1050 MB |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5844ms | 947.8 MB | 1630.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5588ms | 993.3 MB | 1630.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5612ms | 990.7 MB | 1668.6 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1012.1 MB | 3859ms | 3863ms | agent-cli peak RSS 1012.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.1 MB, agent-process 1012.1 MB, command-tree 1012.1 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1026.7 MB | 4052ms | 4165ms | agent-cli peak RSS 1026.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1026.7 MB, agent-process 1026.7 MB, command-tree 1026.7 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1005.4 MB | 3991ms | 3896ms | agent-cli peak RSS 1005.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1005.4 MB, agent-process 1005.4 MB, command-tree 1005.4 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4913ms | 970.6 MB | 1678.7 MB | n/a | n/a | model-cli peak RSS 676.1 MB exceeded threshold 650 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5088ms | 1005.5 MB | 1747.9 MB | n/a | n/a | model-cli peak RSS 674 MB exceeded threshold 650 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5006ms | 957.7 MB | 1724.8 MB | n/a | n/a | model-cli peak RSS 667.1 MB exceeded threshold 650 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1069.6 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 200% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-cli: RSS 1026.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 949.6 MB (scenario fresh-install/fresh); CPU 200% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-process: RSS 1026.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1026.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 919.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.1% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 780.8 MB (scenario fresh-install/fresh); CPU 153% (scenario fresh-install/fresh)
- model-cli: RSS 678.1 MB (scenario fresh-install/onboarded-user); CPU 151% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-runtime-deps sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-bundled-runtime-deps-mi-150715ba-kova-260729-032748-04bdad
Measurements:
- startup: listening 5542ms; health 6182ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 640ms; post-ready p95 not-collected; failures 33; final failures 0; slowest startup-sample/warm-restart 801ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1069.6 MB; tracked total 1069.6 MB; max CPU 162%; samples 8; roles gateway 1069.6MB/162%, gateway-tree 872.5MB/162%, command-tree 5.9MB/1.9%, uncategorized 5.9MB/1.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 886.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1069.6 MB exceeded threshold 1050 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-agent-cold-warm-message-8e2a29af-kova-260729-032748-04bdad
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1012.1 MB; tracked total 1012.1 MB; max CPU 177.9%; samples 14; roles agent-cli 1012.1MB/177.9%, agent-process 1012.1MB/177.9%, command-tree 1012.1MB/177.9%, status-cli 874.2MB/176.1%
- agent: turn 3863ms; cold/warm 3859ms/3863ms; cold-warm delta 0ms; pre-provider 3721ms; provider 1ms; metadata scans 14 (180.86ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3862.8ms; max 3863ms; pre-provider p95 3720.85ms
- agent CLI attribution: cold known 87ms / unattributed 3631ms; warm known 95ms / unattributed 3626ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1012.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.1 MB, agent-process 1012.1 MB, command-tree 1012.1 MB
  - agent-cli peak RSS 1012.1 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1012.1 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3859ms; pre-provider 3718ms; provider 3ms; post-provider 138ms; response true
    - active window: metadata scans 7 (86.1ms total, max 47.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3718ms; provider 3ms; post-provider 138ms; unknown 3418.12ms; source plugins.metadata.scan 299.88ms
  - warm: total 3863ms; pre-provider 3721ms; provider 1ms; post-provider 141ms; response true
    - active window: metadata scans 7 (94.76ms total, max 53.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3721ms; provider 1ms; post-provider 141ms; unknown 3421.12ms; source plugins.metadata.scan 299.88ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3718 ms | 87 ms | 3631 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-agent-cold-warm-message-8e2a29af-kova-260729-032748-04bdad/openclaw/timeline.jsonl |
  | warm | 3721 ms | 95 ms | 3626 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-agent-cold-warm-message-8e2a29af-kova-260729-032748-04bdad/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 95 ms | 54 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-agent-cold-warm-message-2ab680e0-kova-260729-032748-04bdad
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1026.7 MB; tracked total 1026.7 MB; max CPU 179.4%; samples 15; roles agent-cli 1026.7MB/179.4%, agent-process 1026.7MB/179.4%, command-tree 1026.7MB/179.4%, status-cli 891.9MB/175.1%
- agent: turn 4165ms; cold/warm 4052ms/4165ms; cold-warm delta 0ms; pre-provider 4011ms; provider 1ms; metadata scans 14 (202.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4159.35ms; max 4165ms; pre-provider p95 4005.6ms
- agent CLI attribution: cold known 94ms / unattributed 3809ms; warm known 108ms / unattributed 3903ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 57.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1026.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1026.7 MB, agent-process 1026.7 MB, command-tree 1026.7 MB
  - agent-cli peak RSS 1026.7 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1026.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4052ms; pre-provider 3903ms; provider 2ms; post-provider 147ms; response true
    - active window: metadata scans 7 (94.75ms total, max 53.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3903ms; provider 2ms; post-provider 147ms; unknown 3591.31ms; source plugins.metadata.scan 311.69ms
  - warm: total 4165ms; pre-provider 4011ms; provider 1ms; post-provider 153ms; response true
    - active window: metadata scans 7 (107.81ms total, max 57.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4011ms; provider 1ms; post-provider 153ms; unknown 3699.31ms; source plugins.metadata.scan 311.69ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3903 ms | 94 ms | 3809 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-agent-cold-warm-message-2ab680e0-kova-260729-032748-04bdad/openclaw/timeline.jsonl |
  | warm | 4011 ms | 108 ms | 3903 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-agent-cold-warm-message-2ab680e0-kova-260729-032748-04bdad/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 94 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 108 ms | 58 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-agent-cold-warm-message-67b331a3-kova-260729-032748-04bdad
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1005.4 MB; tracked total 1005.4 MB; max CPU 177.1%; samples 14; roles agent-cli 1005.4MB/177.1%, agent-process 1005.4MB/177.1%, command-tree 1005.4MB/177.1%, status-cli 919.9MB/170.6%
- agent: turn 3991ms; cold/warm 3991ms/3896ms; cold-warm delta 95ms; pre-provider 3824ms; provider 3ms; metadata scans 14 (188.77ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3986.25ms; max 3991ms; pre-provider p95 3821.05ms
- agent CLI attribution: cold known 91ms / unattributed 3733ms; warm known 100ms / unattributed 3665ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1005.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1005.4 MB, agent-process 1005.4 MB, command-tree 1005.4 MB
  - agent-cli peak RSS 1005.4 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1005.4 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3991ms; pre-provider 3824ms; provider 3ms; post-provider 164ms; response true
    - active window: metadata scans 7 (89.65ms total, max 50.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3824ms; provider 3ms; post-provider 164ms; unknown 3519.54ms; source plugins.metadata.scan 304.46ms
  - warm: total 3896ms; pre-provider 3765ms; provider 1ms; post-provider 130ms; response true
    - active window: metadata scans 7 (99.12ms total, max 60.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3765ms; provider 1ms; post-provider 130ms; unknown 3460.54ms; source plugins.metadata.scan 304.46ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3824 ms | 91 ms | 3733 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-agent-cold-warm-message-67b331a3-kova-260729-032748-04bdad/openclaw/timeline.jsonl |
  | warm | 3765 ms | 100 ms | 3665 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-agent-cold-warm-message-67b331a3-kova-260729-032748-04bdad/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 91 ms | 50 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 100 ms | 61 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-gateway-performance-man-005107f3-kova-260729-032748-04bdad
Measurements:
- startup: listening 4517ms; health 4913ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 396ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/warm-restart 450ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 970.6 MB; tracked total 1678.7 MB; max CPU 160%; samples 23; roles gateway 970.6MB/160%, gateway-tree 930.4MB/160%, command-tree 748.3MB/149%, status-cli 748.3MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 661.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 676.1 MB exceeded threshold 650 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-gateway-performance-man-1e8be6a8-kova-260729-032748-04bdad
Measurements:
- startup: listening 4772ms; health 5088ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 316ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/warm-restart 504ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1005.5 MB; tracked total 1747.9 MB; max CPU 160%; samples 23; roles gateway 1005.5MB/160%, gateway-tree 946.6MB/160%, command-tree 801.3MB/148%, status-cli 801.3MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 636.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 674 MB exceeded threshold 650 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-gateway-performance-man-958fde53-kova-260729-032748-04bdad
Measurements:
- startup: listening 4772ms; health 5006ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 234ms; post-ready p95 2ms; failures 31; final failures 0; slowest startup-sample/warm-restart 548ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 957.7 MB; tracked total 1724.8 MB; max CPU 156%; samples 25; roles gateway 957.7MB/156%, gateway-tree 922.2MB/156%, command-tree 803.8MB/150%, status-cli 803.8MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 639.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 667.1 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-032748-04bdad-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-032748-04bdad-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-032748-04bdad-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-fresh-install-fresh-r1-697fad55-kova-260729-032748-04bdad
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-fresh-install-fresh-r2-da880701-kova-260729-032748-04bdad
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-fresh-install-fresh-r3-82f8bdbd-kova-260729-032748-04bdad
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-fresh-install-onboarded-9f99e904-kova-260729-032748-04bdad
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-fresh-install-onboarded-f9c24855-kova-260729-032748-04bdad
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-fresh-install-onboarded-fe872c26-kova-260729-032748-04bdad
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260729-032748-04bdad
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-bundled-runtime-deps-mi-39c08a4a-kova-260729-032748-04bdad
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-032748-04bdad/kova-bundled-runtime-deps-mi-150715ba-kova-260729-032748-04bdad
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms5iy1qg-403-655f079a`
- Result: removed
- Duration: 430ms

