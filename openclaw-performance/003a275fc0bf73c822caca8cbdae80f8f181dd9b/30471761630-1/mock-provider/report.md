# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 1068 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068 MB, gateway-tree 1068 MB, command-tree 793.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 1068 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068 MB, gateway-tree 1068 MB, command-tree 793.6 MB |
| Blocking findings | 25 |
| Warnings | 23 |
| Records | 18 (PASS:10, FAIL:8) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260729-164106-7fac65` |
| Generated | 2026-07-29T16:53:51.585Z |
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
| PASS | 10 |
| FAIL | 8 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 8
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 8 blocking, 0 warning
  - primary: gateway peak RSS 1068 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068 MB, gateway-tree 1068 MB, command-tree 793.6 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 1068 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068 MB, gateway-tree 1068 MB, command-tree 793.6 MB
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
- BLOCKING fresh-install/fresh: gateway peak RSS 1068 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068 MB, gateway-tree 1068 MB, command-tree 793.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1039 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1012.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.9 MB, agent-process 1012.9 MB, command-tree 1012.9 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1027 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1027 MB, agent-process 1027 MB, command-tree 1027 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1025.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1025.7 MB, agent-process 1025.7 MB, command-tree 1025.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 1056.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1056.7 MB, gateway-tree 1056.7 MB, command-tree 698.6 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 666.8 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 679.5 MB exceeded threshold 650 MB
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
| info | Kova | report | 42 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:2, FAIL:1 | 7763ms | 926.4MB | n/a | 167% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 8244ms | 927.8MB | n/a | 166% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 6722ms | 997.2MB | n/a | 164% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 6552ms | 986.9MB | n/a | 166% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 188.6% | 5431ms | 5007ms | 5264ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 8334ms | 1036.1MB | n/a | 170% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 8136ms | 907.4 MB | 1663 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 7171ms | 926.4 MB | 1687.9 MB | n/a | n/a |  |
| 3 | FAIL | fresh-install/fresh |  | 7763ms | 1068 MB | 1861.6 MB | n/a | n/a | gateway peak RSS 1068 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068 MB, gateway-tree 1068 MB, command-tree 793.6 MB |
| 1 | PASS | fresh-install/onboarded-user |  | 6759ms | 948.6 MB | 1705.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 8244ms | 925.4 MB | 1666.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 8885ms | 927.8 MB | 1628.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 7231ms | 980.2 MB | 980.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6519ms | 997.2 MB | 997.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6722ms | 1009.9 MB | 1009.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 6552ms | 986.9 MB | 1597.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 6192ms | 986.6 MB | 1635.4 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 6845ms | 1039 MB | 1628 MB | n/a | n/a | gateway peak RSS 1039 MB exceeded threshold 1000 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1012.9 MB | 6108ms | 5446ms | agent-cli peak RSS 1012.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.9 MB, agent-process 1012.9 MB, command-tree 1012.9 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1027 MB | 5431ms | 5007ms | agent-cli peak RSS 1027 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1027 MB, agent-process 1027 MB, command-tree 1027 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1025.7 MB | 5411ms | 4917ms | agent-cli peak RSS 1025.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1025.7 MB, agent-process 1025.7 MB, command-tree 1025.7 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 9597ms | 1056.7 MB | 1730.9 MB | n/a | n/a | gateway peak RSS 1056.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1056.7 MB, gateway-tree 1056.7 MB, command-tree 698.6 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 8334ms | 1036.1 MB | 1639.4 MB | n/a | n/a | model-cli peak RSS 666.8 MB exceeded threshold 650 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 8309ms | 981.9 MB | 1662.5 MB | n/a | n/a | model-cli peak RSS 679.5 MB exceeded threshold 650 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1068 MB (scenario fresh-install/fresh); CPU 173% (scenario fresh-install/onboarded-user)
- command-tree: RSS 1027 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 197.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1068 MB (scenario fresh-install/fresh); CPU 173% (scenario fresh-install/onboarded-user)
- status-cli: RSS 916.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 197.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 1027 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 191.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1027 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 191.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 699.1 MB (scenario fresh-install/onboarded-user); CPU 177% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 699.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 174% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-fresh-install-fresh-r3-82f8bdbd-kova-260729-164106-7fac65
Measurements:
- startup: listening 7061ms; health 7763ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 3ms; post-ready p95 49ms; failures 28; final failures 0; slowest startup-sample/provision 702ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1068 MB; tracked total 1861.6 MB; max CPU 167%; samples 31; roles gateway 1068MB/167%, command-tree 793.6MB/171%, gateway-tree 1068MB/167%, plugin-cli 663MB/171%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 940.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1068 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1068 MB, gateway-tree 1068 MB, command-tree 793.6 MB
  - gateway peak RSS 1068 MB exceeded threshold 1050 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-bundled-plugin-startup-5377119f-kova-260729-164106-7fac65
Measurements:
- startup: listening 6298ms; health 6845ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 547ms; post-ready p95 4ms; failures 37; final failures 0; slowest startup-sample/restart 852ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1039 MB; tracked total 1628 MB; max CPU 167%; samples 18; roles gateway 1039MB/167%, gateway-tree 940.5MB/167%, command-tree 690.2MB/160%, plugin-cli 690.2MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 944.75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1039 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-agent-cold-warm-message-8e2a29af-kova-260729-164106-7fac65
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1012.9 MB; tracked total 1012.9 MB; max CPU 191.4%; samples 19; roles agent-cli 1012.9MB/191.4%, command-tree 1012.9MB/197.4%, agent-process 1012.9MB/191.4%, status-cli 912.4MB/197.4%
- agent: turn 6108ms; cold/warm 6108ms/5446ms; cold-warm delta 662ms; pre-provider 5909ms; provider 3ms; metadata scans 14 (391.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6074.9ms; max 6108ms; pre-provider p95 5877.1ms
- agent CLI attribution: cold known 188ms / unattributed 5721ms; warm known 203ms / unattributed 5068ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 120.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1012.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1012.9 MB, agent-process 1012.9 MB, command-tree 1012.9 MB
  - agent-cli peak RSS 1012.9 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1012.9 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 6108ms; pre-provider 5909ms; provider 3ms; post-provider 196ms; response true
    - active window: metadata scans 7 (189.17ms total, max 98.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5909ms; provider 3ms; post-provider 196ms; unknown 5340.03ms; source plugins.metadata.scan 568.97ms
  - warm: total 5446ms; pre-provider 5271ms; provider 1ms; post-provider 174ms; response true
    - active window: metadata scans 7 (202.24ms total, max 120.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5271ms; provider 1ms; post-provider 174ms; unknown 4702.03ms; source plugins.metadata.scan 568.97ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5909 ms | 188 ms | 5721 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-agent-cold-warm-message-8e2a29af-kova-260729-164106-7fac65/openclaw/timeline.jsonl |
  | warm | 5271 ms | 203 ms | 5068 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-agent-cold-warm-message-8e2a29af-kova-260729-164106-7fac65/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 188 ms | 98 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 203 ms | 121 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-agent-cold-warm-message-2ab680e0-kova-260729-164106-7fac65
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1027 MB; tracked total 1027 MB; max CPU 184%; samples 18; roles agent-cli 1027MB/184%, command-tree 1027MB/187.6%, agent-process 1027MB/184%, status-cli 916.8MB/187.6%
- agent: turn 5431ms; cold/warm 5431ms/5007ms; cold-warm delta 424ms; pre-provider 5263ms; provider 3ms; metadata scans 14 (285.58ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5409.8ms; max 5431ms; pre-provider p95 5241.8ms
- agent CLI attribution: cold known 130ms / unattributed 5133ms; warm known 157ms / unattributed 4682ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1027 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1027 MB, agent-process 1027 MB, command-tree 1027 MB
  - agent-cli peak RSS 1027 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1027 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5431ms; pre-provider 5263ms; provider 3ms; post-provider 165ms; response true
    - active window: metadata scans 7 (129.51ms total, max 72.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5263ms; provider 3ms; post-provider 165ms; unknown 4813.08ms; source plugins.metadata.scan 449.92ms
  - warm: total 5007ms; pre-provider 4839ms; provider 1ms; post-provider 167ms; response true
    - active window: metadata scans 7 (156.07ms total, max 72.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4839ms; provider 1ms; post-provider 167ms; unknown 4389.08ms; source plugins.metadata.scan 449.92ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5263 ms | 130 ms | 5133 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-agent-cold-warm-message-2ab680e0-kova-260729-164106-7fac65/openclaw/timeline.jsonl |
  | warm | 4839 ms | 157 ms | 4682 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-agent-cold-warm-message-2ab680e0-kova-260729-164106-7fac65/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 73 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 157 ms | 72 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-agent-cold-warm-message-67b331a3-kova-260729-164106-7fac65
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1025.7 MB; tracked total 1025.7 MB; max CPU 188.6%; samples 18; roles agent-cli 1025.7MB/188.6%, command-tree 1025.7MB/190.2%, agent-process 1025.7MB/188.6%, status-cli 871.1MB/190.2%
- agent: turn 5411ms; cold/warm 5411ms/4917ms; cold-warm delta 494ms; pre-provider 5264ms; provider 2ms; metadata scans 14 (264.08ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5386.3ms; max 5411ms; pre-provider p95 5237.75ms
- agent CLI attribution: cold known 134ms / unattributed 5130ms; warm known 130ms / unattributed 4609ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 81.01ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1025.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1025.7 MB, agent-process 1025.7 MB, command-tree 1025.7 MB
  - agent-cli peak RSS 1025.7 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1025.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5411ms; pre-provider 5264ms; provider 2ms; post-provider 145ms; response true
    - active window: metadata scans 7 (133.3ms total, max 81.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5264ms; provider 2ms; post-provider 145ms; unknown 4768.21ms; source plugins.metadata.scan 495.79ms
  - warm: total 4917ms; pre-provider 4739ms; provider 2ms; post-provider 176ms; response true
    - active window: metadata scans 7 (130.78ms total, max 75.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4739ms; provider 2ms; post-provider 176ms; unknown 4243.21ms; source plugins.metadata.scan 495.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5264 ms | 134 ms | 5130 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-agent-cold-warm-message-67b331a3-kova-260729-164106-7fac65/openclaw/timeline.jsonl |
  | warm | 4739 ms | 130 ms | 4609 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-agent-cold-warm-message-67b331a3-kova-260729-164106-7fac65/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 134 ms | 81 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 75 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-gateway-performance-man-005107f3-kova-260729-164106-7fac65
Measurements:
- startup: listening 8584ms; health 9597ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 2
- health: startup p95 2ms; post-ready p95 4ms; failures 50; final failures 0; slowest startup-sample/cold-start 1013ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1056.7 MB; tracked total 1730.9 MB; max CPU 171%; samples 33; roles gateway 1056.7MB/171%, command-tree 698.6MB/174%, gateway-tree 1056.7MB/171%, plugin-cli 669.3MB/174%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1144.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1056.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1056.7 MB, gateway-tree 1056.7 MB, command-tree 698.6 MB
  - gateway peak RSS 1056.7 MB exceeded threshold 1050 MB
  - model-cli peak RSS 698.6 MB exceeded threshold 650 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-gateway-performance-man-1e8be6a8-kova-260729-164106-7fac65
Measurements:
- startup: listening 7564ms; health 8334ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 2
- health: startup p95 2ms; post-ready p95 4ms; failures 43; final failures 0; slowest startup-sample/cold-start 770ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1036.1 MB; tracked total 1639.4 MB; max CPU 170%; samples 31; roles gateway 1036.1MB/170%, gateway-tree 939.7MB/170%, command-tree 700.1MB/167%, status-cli 700.1MB/163%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1015.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 666.8 MB exceeded threshold 650 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-gateway-performance-man-958fde53-kova-260729-164106-7fac65
Measurements:
- startup: listening 0ms; health 8309ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 2
- health: startup p95 18ms; post-ready p95 3ms; failures 46; final failures 0; slowest startup-sample/warm-restart 1230ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 981.9 MB; tracked total 1662.5 MB; max CPU 169%; samples 33; roles gateway 981.9MB/169%, gateway-tree 934.9MB/169%, command-tree 727.8MB/165%, status-cli 727.8MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1532.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 679.5 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-164106-7fac65-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-164106-7fac65-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-164106-7fac65-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-fresh-install-fresh-r1-697fad55-kova-260729-164106-7fac65
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-fresh-install-fresh-r2-da880701-kova-260729-164106-7fac65
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-fresh-install-fresh-r3-82f8bdbd-kova-260729-164106-7fac65
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-fresh-install-onboarded-9f99e904-kova-260729-164106-7fac65
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-fresh-install-onboarded-f9c24855-kova-260729-164106-7fac65
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-fresh-install-onboarded-fe872c26-kova-260729-164106-7fac65
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260729-164106-7fac65
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-bundled-runtime-deps-mi-39c08a4a-kova-260729-164106-7fac65
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-164106-7fac65/kova-bundled-runtime-deps-mi-150715ba-kova-260729-164106-7fac65
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms6ba8si-40z-95113f84`
- Result: removed
- Duration: 571ms

