# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1044.8 MB exceeded threshold 1000 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1044.8 MB exceeded threshold 1000 MB |
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
| Run ID | `kova-260729-042039-e5cd77` |
| Generated | 2026-07-29T04:29:04.034Z |
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
  - primary: gateway peak RSS 1044.8 MB exceeded threshold 1000 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1044.8 MB exceeded threshold 1000 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1044.8 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1006.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1006.7 MB, agent-process 1006.7 MB, command-tree 1006.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1007.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1007.6 MB, agent-process 1007.6 MB, command-tree 1007.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1054.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1054.1 MB, agent-process 1054.1 MB, command-tree 1054.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 668.3 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 677.5 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 669.7 MB exceeded threshold 650 MB
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
| fresh-install/fresh | 3 | PASS:3 | 5128ms | 925.7MB | n/a | 157% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5156ms | 930.9MB | n/a | 158% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5250ms | 1028.2MB | n/a | 159% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 5577ms | 968.6MB | n/a | 161% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 175.3% | 3975ms | 4092ms | 3821ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5485ms | 953.2MB | n/a | 160% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5531ms | 925.7 MB | 1662.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 4902ms | 936.4 MB | 1737.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5128ms | 923.9 MB | 1664.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5030ms | 925 MB | 1670.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5624ms | 936 MB | 1724.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5156ms | 930.9 MB | 1664 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5250ms | 1039.2 MB | 1039.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5124ms | 1028.2 MB | 1028.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5585ms | 962.6 MB | 962.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5705ms | 953.3 MB | 1670 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5577ms | 968.6 MB | 1664.3 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5505ms | 1044.8 MB | 1680 MB | n/a | n/a | gateway peak RSS 1044.8 MB exceeded threshold 1000 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1006.7 MB | 4010ms | 4083ms | agent-cli peak RSS 1006.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1006.7 MB, agent-process 1006.7 MB, command-tree 1006.7 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1007.6 MB | 3899ms | 4092ms | agent-cli peak RSS 1007.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1007.6 MB, agent-process 1007.6 MB, command-tree 1007.6 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1054.1 MB | 3975ms | 4123ms | agent-cli peak RSS 1054.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1054.1 MB, agent-process 1054.1 MB, command-tree 1054.1 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5485ms | 947.4 MB | 1738.6 MB | n/a | n/a | model-cli peak RSS 668.3 MB exceeded threshold 650 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5582ms | 959.1 MB | 1630.2 MB | n/a | n/a | model-cli peak RSS 677.5 MB exceeded threshold 650 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5456ms | 953.2 MB | 1639 MB | n/a | n/a | model-cli peak RSS 669.7 MB exceeded threshold 650 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1054.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.3% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1054.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 181.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1054.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 875.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 181.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1044.8 MB (scenario bundled-plugin-startup/fresh); CPU 162% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 968.6 MB (scenario bundled-plugin-startup/fresh); CPU 162% (scenario bundled-plugin-startup/fresh)
- plugin-cli: RSS 748.9 MB (scenario bundled-plugin-startup/fresh); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 677.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-bundled-plugin-startup-5377119f-kova-260729-042039-e5cd77
Measurements:
- startup: listening 5024ms; health 5505ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 481ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/restart 577ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1044.8 MB; tracked total 1680 MB; max CPU 159%; samples 17; roles gateway 1044.8MB/159%, gateway-tree 931.3MB/159%, command-tree 748.9MB/153%, plugin-cli 748.9MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 714.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1044.8 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-agent-cold-warm-message-8e2a29af-kova-260729-042039-e5cd77
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1006.7 MB; tracked total 1006.7 MB; max CPU 176.3%; samples 15; roles agent-cli 1006.7MB/176.3%, command-tree 1006.7MB/177.6%, agent-process 1006.7MB/176.3%, status-cli 875.2MB/177.6%
- agent: turn 4083ms; cold/warm 4010ms/4083ms; cold-warm delta 0ms; pre-provider 3936ms; provider 1ms; metadata scans 14 (206.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4079.35ms; max 4083ms; pre-provider p95 3932.1ms
- agent CLI attribution: cold known 101ms / unattributed 3757ms; warm known 105ms / unattributed 3831ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 57.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1006.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1006.7 MB, agent-process 1006.7 MB, command-tree 1006.7 MB
  - agent-cli peak RSS 1006.7 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1006.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4010ms; pre-provider 3858ms; provider 3ms; post-provider 149ms; response true
    - active window: metadata scans 7 (101.7ms total, max 51.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3858ms; provider 3ms; post-provider 149ms; unknown 3533.48ms; source plugins.metadata.scan 324.52ms
  - warm: total 4083ms; pre-provider 3936ms; provider 1ms; post-provider 146ms; response true
    - active window: metadata scans 7 (104.82ms total, max 57.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3936ms; provider 1ms; post-provider 146ms; unknown 3611.48ms; source plugins.metadata.scan 324.52ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3858 ms | 101 ms | 3757 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-agent-cold-warm-message-8e2a29af-kova-260729-042039-e5cd77/openclaw/timeline.jsonl |
  | warm | 3936 ms | 105 ms | 3831 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-agent-cold-warm-message-8e2a29af-kova-260729-042039-e5cd77/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 101 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 105 ms | 57 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-agent-cold-warm-message-2ab680e0-kova-260729-042039-e5cd77
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1007.6 MB; tracked total 1007.6 MB; max CPU 172.3%; samples 15; roles agent-cli 1007.6MB/172.3%, command-tree 1007.6MB/181.3%, agent-process 1007.6MB/172.3%, status-cli 838.8MB/181.3%
- agent: turn 4092ms; cold/warm 3899ms/4092ms; cold-warm delta 0ms; pre-provider 3946ms; provider 1ms; metadata scans 14 (197.01ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4082.35ms; max 4092ms; pre-provider p95 3935.95ms
- agent CLI attribution: cold known 96ms / unattributed 3649ms; warm known 98ms / unattributed 3848ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 56.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1007.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1007.6 MB, agent-process 1007.6 MB, command-tree 1007.6 MB
  - agent-cli peak RSS 1007.6 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1007.6 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3899ms; pre-provider 3745ms; provider 3ms; post-provider 151ms; response true
    - active window: metadata scans 7 (97.43ms total, max 51.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3745ms; provider 3ms; post-provider 151ms; unknown 3426.74ms; source plugins.metadata.scan 318.26ms
  - warm: total 4092ms; pre-provider 3946ms; provider 1ms; post-provider 145ms; response true
    - active window: metadata scans 7 (99.58ms total, max 56.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3946ms; provider 1ms; post-provider 145ms; unknown 3627.74ms; source plugins.metadata.scan 318.26ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3745 ms | 96 ms | 3649 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-agent-cold-warm-message-2ab680e0-kova-260729-042039-e5cd77/openclaw/timeline.jsonl |
  | warm | 3946 ms | 98 ms | 3848 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-agent-cold-warm-message-2ab680e0-kova-260729-042039-e5cd77/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 96 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 98 ms | 56 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-agent-cold-warm-message-67b331a3-kova-260729-042039-e5cd77
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1054.1 MB; tracked total 1054.1 MB; max CPU 175.3%; samples 15; roles agent-cli 1054.1MB/175.3%, agent-process 1054.1MB/175.3%, command-tree 1054.1MB/175.3%, status-cli 860.7MB/171.7%
- agent: turn 4123ms; cold/warm 3975ms/4123ms; cold-warm delta 0ms; pre-provider 3970ms; provider 1ms; metadata scans 14 (200.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4115.6ms; max 4123ms; pre-provider p95 3962.55ms
- agent CLI attribution: cold known 92ms / unattributed 3729ms; warm known 108ms / unattributed 3862ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 58.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1054.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1054.1 MB, agent-process 1054.1 MB, command-tree 1054.1 MB
  - agent-cli peak RSS 1054.1 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1054.1 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3975ms; pre-provider 3821ms; provider 3ms; post-provider 151ms; response true
    - active window: metadata scans 7 (93.01ms total, max 51.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3821ms; provider 3ms; post-provider 151ms; unknown 3500.8ms; source plugins.metadata.scan 320.2ms
  - warm: total 4123ms; pre-provider 3970ms; provider 1ms; post-provider 152ms; response true
    - active window: metadata scans 7 (107.51ms total, max 58.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3970ms; provider 1ms; post-provider 152ms; unknown 3649.8ms; source plugins.metadata.scan 320.2ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3821 ms | 92 ms | 3729 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-agent-cold-warm-message-67b331a3-kova-260729-042039-e5cd77/openclaw/timeline.jsonl |
  | warm | 3970 ms | 108 ms | 3862 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-agent-cold-warm-message-67b331a3-kova-260729-042039-e5cd77/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 92 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 108 ms | 58 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-gateway-performance-man-005107f3-kova-260729-042039-e5cd77
Measurements:
- startup: listening 5028ms; health 5485ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 457ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/warm-restart 576ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 947.4 MB; tracked total 1738.6 MB; max CPU 161%; samples 25; roles gateway 947.4MB/161%, gateway-tree 944.9MB/161%, command-tree 794.4MB/154%, status-cli 794.4MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 714.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 668.3 MB exceeded threshold 650 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-gateway-performance-man-1e8be6a8-kova-260729-042039-e5cd77
Measurements:
- startup: listening 5027ms; health 5582ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 555ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/warm-restart 711ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 959.1 MB; tracked total 1630.2 MB; max CPU 160%; samples 25; roles gateway 959.1MB/160%, gateway-tree 934.9MB/160%, command-tree 695.3MB/156%, plugin-cli 695.3MB/156%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 769.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 677.5 MB exceeded threshold 650 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-gateway-performance-man-958fde53-kova-260729-042039-e5cd77
Measurements:
- startup: listening 5030ms; health 5456ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 426ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/warm-restart 650ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 953.2 MB; tracked total 1639 MB; max CPU 158%; samples 25; roles gateway 953.2MB/158%, gateway-tree 934.1MB/158%, command-tree 704.9MB/153%, plugin-cli 704.9MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 723.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 669.7 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-042039-e5cd77-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-042039-e5cd77-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-042039-e5cd77-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-fresh-install-fresh-r1-697fad55-kova-260729-042039-e5cd77
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-fresh-install-fresh-r2-da880701-kova-260729-042039-e5cd77
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-fresh-install-fresh-r3-82f8bdbd-kova-260729-042039-e5cd77
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-fresh-install-onboarded-9f99e904-kova-260729-042039-e5cd77
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-fresh-install-onboarded-f9c24855-kova-260729-042039-e5cd77
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-fresh-install-onboarded-fe872c26-kova-260729-042039-e5cd77
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260729-042039-e5cd77
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-bundled-runtime-deps-mi-39c08a4a-kova-260729-042039-e5cd77
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-042039-e5cd77/kova-bundled-runtime-deps-mi-150715ba-kova-260729-042039-e5cd77
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms5ku0yz-3z4-1fb1ce23`
- Result: removed
- Duration: 459ms

