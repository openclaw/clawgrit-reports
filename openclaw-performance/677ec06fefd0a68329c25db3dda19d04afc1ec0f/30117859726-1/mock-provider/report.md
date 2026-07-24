# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 956 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 956 MB exceeded threshold 950 MB |
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
| Run ID | `kova-260724-184208-66fb37` |
| Generated | 2026-07-24T18:51:47.116Z |
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 955.2 MB exceeded threshold 950 MB
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
| fresh-install/fresh | 3 | PASS:3 | 6008ms | 944.5MB | n/a | 155% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 6949ms | 952.4MB | n/a | 159% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5572ms | 924.4MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:2, PASS:1 | 5500ms | 955.2MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 163.8% | 5287ms | 5356ms | 4918ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5283ms | 941.6MB | n/a | 156% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 6008ms | 943.5 MB | 1659.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5424ms | 946.9 MB | 1627.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 6037ms | 944.5 MB | 1635.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 6668ms | 952.4 MB | 1618 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 6949ms | 943.4 MB | 1627.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 10317ms | 955.8 MB | 1637.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6203ms | 924.4 MB | 929 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5572ms | 921 MB | 926.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5177ms | 936.9 MB | 942.5 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5500ms | 956 MB | 1425.9 MB | n/a | n/a | gateway peak RSS 956 MB exceeded threshold 950 MB |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5207ms | 942.9 MB | 1409.3 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5750ms | 955.2 MB | 1639.1 MB | n/a | n/a | gateway peak RSS 955.2 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 990.8 MB | 5287ms | 5522ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 984.5 MB | 5536ms | 5356ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 961.1 MB | 4991ms | 4736ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5283ms | 937.3 MB | 1575.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5222ms | 941.6 MB | 1671.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5441ms | 945.7 MB | 1582.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 990.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 990.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172% (scenario fresh-install/onboarded-user)
- agent-process: RSS 990.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 742.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 715.6 MB (scenario fresh-install/fresh); CPU 168% (scenario fresh-install/onboarded-user)
- gateway: RSS 956 MB (scenario bundled-plugin-startup/fresh); CPU 164% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 956 MB (scenario bundled-plugin-startup/fresh); CPU 164% (scenario fresh-install/onboarded-user)
- model-cli: RSS 541.2 MB (scenario fresh-install/onboarded-user); CPU 162% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-bundled-plugin-startup-4a0cbdf7-kova-260724-184208-66fb37
Measurements:
- startup: listening 4776ms; health 5500ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 589ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/gateway-start 724ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 956 MB; tracked total 1425.9 MB; max CPU 156%; samples 14; roles gateway 956MB/156%, gateway-tree 956MB/156%, command-tree 470.1MB/153%, plugin-cli 470.1MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 817.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 956 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-bundled-plugin-startup-5377119f-kova-260724-184208-66fb37
Measurements:
- startup: listening 5023ms; health 5750ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 446ms; post-ready p95 3ms; failures 29; final failures 0; slowest startup-sample/gateway-start 727ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 955.2 MB; tracked total 1639.1 MB; max CPU 158%; samples 16; roles gateway 955.2MB/158%, command-tree 684MB/162%, gateway-tree 955.2MB/158%, plugin-cli 684MB/162%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 824.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 955.2 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-agent-cold-warm-message-8e2a29af-kova-260724-184208-66fb37
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 990.8 MB; tracked total 990.8 MB; max CPU 166.4%; samples 18; roles agent-cli 990.8MB/166.4%, agent-process 990.8MB/166.4%, command-tree 990.8MB/166.4%, status-cli 716MB/166.4%
- agent: turn 5522ms; cold/warm 5287ms/5522ms; cold-warm delta 0ms; pre-provider 5190ms; provider 2ms; metadata scans 14 (305.61ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5510.25ms; max 5522ms; pre-provider p95 5176.4ms
- agent CLI attribution: cold known 140ms / unattributed 4778ms; warm known 167ms / unattributed 5023ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 90.73ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5287ms; pre-provider 4918ms; provider 3ms; post-provider 366ms; response true
    - active window: metadata scans 7 (138.79ms total, max 65.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4918ms; provider 3ms; post-provider 366ms; unknown 4242.09ms; source plugins.metadata.scan 675.91ms
  - warm: total 5522ms; pre-provider 5190ms; provider 2ms; post-provider 330ms; response true
    - active window: metadata scans 7 (166.82ms total, max 72.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5190ms; provider 2ms; post-provider 330ms; unknown 4514.09ms; source plugins.metadata.scan 675.91ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4918 ms | 140 ms | 4778 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-agent-cold-warm-message-8e2a29af-kova-260724-184208-66fb37/openclaw/timeline.jsonl |
  | warm | 5190 ms | 167 ms | 5023 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-agent-cold-warm-message-8e2a29af-kova-260724-184208-66fb37/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 140 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 167 ms | 72 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-agent-cold-warm-message-2ab680e0-kova-260724-184208-66fb37
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 984.5 MB; tracked total 984.5 MB; max CPU 163.8%; samples 18; roles agent-cli 984.5MB/163.8%, agent-process 984.5MB/163.8%, command-tree 984.5MB/163.8%, status-cli 742.6MB/162.9%
- agent: turn 5536ms; cold/warm 5536ms/5356ms; cold-warm delta 180ms; pre-provider 5187ms; provider 3ms; metadata scans 14 (316.35ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5527ms; max 5536ms; pre-provider p95 5179.85ms
- agent CLI attribution: cold known 149ms / unattributed 5038ms; warm known 167ms / unattributed 4877ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 74.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5536ms; pre-provider 5187ms; provider 3ms; post-provider 346ms; response true
    - active window: metadata scans 7 (148.31ms total, max 70.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5187ms; provider 3ms; post-provider 346ms; unknown 4637.98ms; source plugins.metadata.scan 549.02ms
  - warm: total 5356ms; pre-provider 5044ms; provider 1ms; post-provider 311ms; response true
    - active window: metadata scans 7 (168.04ms total, max 72.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5044ms; provider 1ms; post-provider 311ms; unknown 4494.98ms; source plugins.metadata.scan 549.02ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5187 ms | 149 ms | 5038 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-agent-cold-warm-message-2ab680e0-kova-260724-184208-66fb37/openclaw/timeline.jsonl |
  | warm | 5044 ms | 167 ms | 4877 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-agent-cold-warm-message-2ab680e0-kova-260724-184208-66fb37/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 149 ms | 71 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 167 ms | 73 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-agent-cold-warm-message-67b331a3-kova-260724-184208-66fb37
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 961.1 MB; tracked total 961.1 MB; max CPU 157.9%; samples 16; roles agent-cli 961.1MB/157.9%, agent-process 961.1MB/157.9%, command-tree 961.1MB/157.9%, status-cli 715.8MB/155.8%
- agent: turn 4991ms; cold/warm 4991ms/4736ms; cold-warm delta 255ms; pre-provider 4617ms; provider 3ms; metadata scans 14 (278.58ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4978.25ms; max 4991ms; pre-provider p95 4608.6ms
- agent CLI attribution: cold known 142ms / unattributed 4475ms; warm known 135ms / unattributed 4314ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4991ms; pre-provider 4617ms; provider 3ms; post-provider 371ms; response true
    - active window: metadata scans 7 (143.07ms total, max 64.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4617ms; provider 3ms; post-provider 371ms; unknown 4126.55ms; source plugins.metadata.scan 490.45ms
  - warm: total 4736ms; pre-provider 4449ms; provider 2ms; post-provider 285ms; response true
    - active window: metadata scans 7 (135.51ms total, max 66.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4449ms; provider 2ms; post-provider 285ms; unknown 3958.55ms; source plugins.metadata.scan 490.45ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4617 ms | 142 ms | 4475 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-agent-cold-warm-message-67b331a3-kova-260724-184208-66fb37/openclaw/timeline.jsonl |
  | warm | 4449 ms | 135 ms | 4314 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-agent-cold-warm-message-67b331a3-kova-260724-184208-66fb37/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 66 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-184208-66fb37-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-184208-66fb37-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-184208-66fb37-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-fresh-install-fresh-r1-697fad55-kova-260724-184208-66fb37
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-fresh-install-fresh-r2-da880701-kova-260724-184208-66fb37
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-184208-66fb37
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-fresh-install-onboarded-9f99e904-kova-260724-184208-66fb37
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-fresh-install-onboarded-f9c24855-kova-260724-184208-66fb37
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-fresh-install-onboarded-fe872c26-kova-260724-184208-66fb37
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-184208-66fb37
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-184208-66fb37
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-184208-66fb37/kova-bundled-runtime-deps-mi-150715ba-kova-260724-184208-66fb37
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzaemqp-425-e46aa62d`
- Result: removed
- Duration: 446ms

