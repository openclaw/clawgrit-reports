# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 957.2 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 957.2 MB exceeded threshold 950 MB |
| Blocking findings | 6 |
| Warnings | 20 |
| Records | 18 (PASS:16, FAIL:2) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260724-162457-ffa00c` |
| Generated | 2026-07-24T16:34:53.824Z |
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
  - primary: gateway peak RSS 957.2 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 957.2 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 957.2 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 1014 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014 MB, agent-process 1014 MB, command-tree 1014 MB
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
| info | Kova | report | 20 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 6576ms | 943.2MB | n/a | 159% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5673ms | 933.9MB | n/a | 154% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5753ms | 922.2MB | n/a | 156% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 5983ms | 947.2MB | n/a | 160% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:2, FAIL:1 | n/a | 0MB | n/a | 174.3% | 6162ms | 6288ms | 5756ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5926ms | 942.7MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 7777ms | 970.4 MB | 1629.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 6183ms | 943.2 MB | 1611.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 6576ms | 926.7 MB | 1636.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5493ms | 943.6 MB | 1650.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5705ms | 930.2 MB | 1586.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5673ms | 933.9 MB | 1640.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5688ms | 925.7 MB | 931.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5753ms | 922.2 MB | 924.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6681ms | 914 MB | 919.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5774ms | 933.4 MB | 1402.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5983ms | 947.2 MB | 1628.9 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 7167ms | 957.2 MB | 1643.5 MB | n/a | n/a | gateway peak RSS 957.2 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 994.8 MB | 6162ms | 6288ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 965.2 MB | 6891ms | 7293ms |  |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1014 MB | 5277ms | 5584ms | agent-cli peak RSS 1014 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014 MB, agent-process 1014 MB, command-tree 1014 MB |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5674ms | 962.8 MB | 1628 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 6077ms | 942.7 MB | 1619.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5926ms | 935 MB | 1629.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1014 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1014 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1014 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 727.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 970.4 MB (scenario fresh-install/fresh); CPU 163% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 970.4 MB (scenario fresh-install/fresh); CPU 163% (scenario bundled-plugin-startup/fresh)
- plugin-cli: RSS 710.1 MB (scenario fresh-install/fresh); CPU 173% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 613.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 167% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-bundled-plugin-startup-5377119f-kova-260724-162457-ffa00c
Measurements:
- startup: listening 6293ms; health 7167ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 806ms; post-ready p95 4ms; failures 37; final failures 0; slowest startup-sample/gateway-start 874ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 957.2 MB; tracked total 1643.5 MB; max CPU 163%; samples 17; roles gateway 957.2MB/163%, command-tree 691.5MB/170%, gateway-tree 957.2MB/163%, plugin-cli 691.5MB/170%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1136.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 957.2 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-agent-cold-warm-message-8e2a29af-kova-260724-162457-ffa00c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 994.8 MB; tracked total 994.8 MB; max CPU 175.8%; samples 20; roles agent-cli 994.8MB/175.8%, command-tree 994.8MB/180.3%, agent-process 994.8MB/175.8%, status-cli 726.3MB/180.3%
- agent: turn 6288ms; cold/warm 6162ms/6288ms; cold-warm delta 0ms; pre-provider 5913ms; provider 1ms; metadata scans 14 (388.91ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6281.7ms; max 6288ms; pre-provider p95 5905.15ms
- agent CLI attribution: cold known 188ms / unattributed 5568ms; warm known 204ms / unattributed 5709ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 89.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6162ms; pre-provider 5756ms; provider 3ms; post-provider 403ms; response true
    - active window: metadata scans 7 (187.6ms total, max 76.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5756ms; provider 3ms; post-provider 403ms; unknown 5067.77ms; source plugins.metadata.scan 688.23ms
  - warm: total 6288ms; pre-provider 5913ms; provider 1ms; post-provider 374ms; response true
    - active window: metadata scans 7 (201.31ms total, max 89.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5913ms; provider 1ms; post-provider 374ms; unknown 5224.77ms; source plugins.metadata.scan 688.23ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5756 ms | 188 ms | 5568 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-agent-cold-warm-message-8e2a29af-kova-260724-162457-ffa00c/openclaw/timeline.jsonl |
  | warm | 5913 ms | 204 ms | 5709 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-agent-cold-warm-message-8e2a29af-kova-260724-162457-ffa00c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 188 ms | 76 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 204 ms | 90 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-agent-cold-warm-message-2ab680e0-kova-260724-162457-ffa00c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 965.2 MB; tracked total 965.2 MB; max CPU 174.3%; samples 21; roles agent-cli 965.2MB/174.3%, agent-process 965.2MB/174.3%, command-tree 965.2MB/174.3%, status-cli 727.9MB/173.8%
- agent: turn 7293ms; cold/warm 6891ms/7293ms; cold-warm delta 0ms; pre-provider 6791ms; provider 2ms; metadata scans 14 (417.98ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7272.9ms; max 7293ms; pre-provider p95 6770.4ms
- agent CLI attribution: cold known 177ms / unattributed 6202ms; warm known 242ms / unattributed 6549ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 108.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6891ms; pre-provider 6379ms; provider 4ms; post-provider 508ms; response true
    - active window: metadata scans 7 (177.53ms total, max 78.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6379ms; provider 4ms; post-provider 508ms; unknown 5688.67ms; source plugins.metadata.scan 690.33ms
  - warm: total 7293ms; pre-provider 6791ms; provider 2ms; post-provider 500ms; response true
    - active window: metadata scans 7 (240.45ms total, max 108.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6791ms; provider 2ms; post-provider 500ms; unknown 6100.67ms; source plugins.metadata.scan 690.33ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6379 ms | 177 ms | 6202 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-agent-cold-warm-message-2ab680e0-kova-260724-162457-ffa00c/openclaw/timeline.jsonl |
  | warm | 6791 ms | 242 ms | 6549 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-agent-cold-warm-message-2ab680e0-kova-260724-162457-ffa00c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 177 ms | 79 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 242 ms | 109 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-agent-cold-warm-message-67b331a3-kova-260724-162457-ffa00c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1014 MB; tracked total 1014 MB; max CPU 162.9%; samples 18; roles agent-cli 1014MB/162.9%, command-tree 1014MB/164.4%, agent-process 1014MB/162.9%, status-cli 717.3MB/164.4%
- agent: turn 5584ms; cold/warm 5277ms/5584ms; cold-warm delta 0ms; pre-provider 5230ms; provider 2ms; metadata scans 14 (301.19ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5568.65ms; max 5584ms; pre-provider p95 5214.3ms
- agent CLI attribution: cold known 144ms / unattributed 4772ms; warm known 158ms / unattributed 5072ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 83.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1014 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014 MB, agent-process 1014 MB, command-tree 1014 MB
  - agent-cli peak RSS 1014 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1014 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5277ms; pre-provider 4916ms; provider 3ms; post-provider 358ms; response true
    - active window: metadata scans 7 (144.34ms total, max 72.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4916ms; provider 3ms; post-provider 358ms; unknown 4378.9ms; source plugins.metadata.scan 537.1ms
  - warm: total 5584ms; pre-provider 5230ms; provider 2ms; post-provider 352ms; response true
    - active window: metadata scans 7 (156.85ms total, max 79.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5230ms; provider 2ms; post-provider 352ms; unknown 4692.9ms; source plugins.metadata.scan 537.1ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4916 ms | 144 ms | 4772 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-agent-cold-warm-message-67b331a3-kova-260724-162457-ffa00c/openclaw/timeline.jsonl |
  | warm | 5230 ms | 158 ms | 5072 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-agent-cold-warm-message-67b331a3-kova-260724-162457-ffa00c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 144 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 158 ms | 79 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-162457-ffa00c-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-162457-ffa00c-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-162457-ffa00c-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-fresh-install-fresh-r1-697fad55-kova-260724-162457-ffa00c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-fresh-install-fresh-r2-da880701-kova-260724-162457-ffa00c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-162457-ffa00c
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-fresh-install-onboarded-9f99e904-kova-260724-162457-ffa00c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-fresh-install-onboarded-f9c24855-kova-260724-162457-ffa00c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-fresh-install-onboarded-fe872c26-kova-260724-162457-ffa00c
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-162457-ffa00c
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-162457-ffa00c
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-162457-ffa00c/kova-bundled-runtime-deps-mi-150715ba-kova-260724-162457-ffa00c
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrz5i7nk-423-28933407`
- Result: removed
- Duration: 615ms

