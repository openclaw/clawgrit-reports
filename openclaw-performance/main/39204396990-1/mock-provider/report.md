# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1748.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2024.3 MB, gateway 1748.1 MB, command-tree 879.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1748.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2024.3 MB, gateway 1748.1 MB, command-tree 879.8 MB |
| Blocking findings | 58 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 3, incomplete: 3
- Required obligations: 352 total, 12 missing, 12 failed
- Categories: command: 298, artifact: 6, cleanup: 6, collector: 6, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1: command exited 13 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 1 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1: command exited 13 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 1 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261019-052611-dbd906` |
| Generated | 2026-10-19T05:47:23.334Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 6 |
| Scenarios | 2 |
| States | 2 |
| FAIL | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1748.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2024.3 MB, gateway 1748.1 MB, command-tree 879.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 124 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2024.3 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 124 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 514ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 124 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1697.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1917.1 MB, gateway 1697.2 MB, command-tree 983.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1917.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 983.7 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 484ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1699.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1919.9 MB, gateway 1699.5 MB, command-tree 975.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1919.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 975.2 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1302 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1484.9 MB, agent-process 1302 MB, agent-cli 182.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1302 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1484.9 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1302 |
| info | Kova | report | 46 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4ms | 1699.5MB | n/a | 248.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 212.8% | 6732ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 124ms | 1748.1 MB | 2627.6 MB | n/a | n/a | gateway peak RSS 1748.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2024.3 MB, gateway 1748.1 MB, command-tree 879.8 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4ms | 1697.2 MB | 2759.3 MB | n/a | n/a | gateway peak RSS 1697.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1917.1 MB, gateway 1697.2 MB, command-tree 983.7 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1699.5 MB | 2703.2 MB | n/a | n/a | gateway peak RSS 1699.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1919.9 MB, gateway 1699.5 MB, command-tree 975.2 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1556 MB | 6887ms | n/a | agent-process peak RSS 1302 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1484.9 MB, agent-process 1302 MB, agent-cli 182.9 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1599.7 MB | 6732ms | n/a | agent-process peak RSS 1345.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1528.3 MB, agent-process 1345.5 MB, agent-cli 182.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1579.9 MB | 6005ms | n/a | agent-process peak RSS 1325.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1508.7 MB, agent-process 1325.6 MB, agent-cli 183.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2024.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 287.1% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1748.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 267.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1528.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 234.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1345.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 220% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 983.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 166.4% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 663.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 142.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 183.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 371.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 140.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-gateway-performance-man-005107f3-kova-261019-052611-dbd906
Measurements:
- startup: listening 1ms; health 124ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 123ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 192ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1748.1 MB; tracked total 2627.6 MB; max CPU 267.3%; samples 39; roles gateway-tree 2024.3MB/287.1%, gateway 1748.1MB/267.3%, command-tree 879.8MB/166.4%, status-cli 879.8MB/166.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1256.32ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1748.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2024.3 MB, gateway 1748.1 MB, command-tree 879.8 MB
  - gateway-tree peak RSS 2024.3 MB exceeded threshold 1440 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 514ms

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-gateway-performance-man-1e8be6a8-kova-261019-052611-dbd906
Measurements:
- startup: listening 1ms; health 4ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 3ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 145ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1697.2 MB; tracked total 2759.3 MB; max CPU 248.8%; samples 38; roles gateway-tree 1917.1MB/267.7%, gateway 1697.2MB/248.8%, command-tree 983.7MB/160.5%, status-cli 983.7MB/160.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1532.45ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1697.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1917.1 MB, gateway 1697.2 MB, command-tree 983.7 MB
  - gateway-tree peak RSS 1917.1 MB exceeded threshold 1440 MB
  - status-cli peak RSS 983.7 MB exceeded threshold 900 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 484ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-gateway-performance-man-958fde53-kova-261019-052611-dbd906
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 1592ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1699.5 MB; tracked total 2703.2 MB; max CPU 248.2%; samples 37; roles gateway-tree 1919.9MB/268.2%, gateway 1699.5MB/248.2%, command-tree 975.2MB/158.7%, status-cli 975.2MB/158.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1492.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1699.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1919.9 MB, gateway 1699.5 MB, command-tree 975.2 MB
  - gateway-tree peak RSS 1919.9 MB exceeded threshold 1440 MB
  - status-cli peak RSS 975.2 MB exceeded threshold 900 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-agent-cold-warm-message-8e2a29af-kova-261019-052611-dbd906
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1302 MB; tracked total 1556 MB; max CPU 209.3%; samples 9; roles command-tree 1484.9MB/230.5%, agent-process 1302MB/209.3%, agent-cli 182.9MB/149.9%, mock-provider 71.1MB/5.1%
- agent: turn 6887ms; cold/warm 6887ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (126.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 6887ms; max 6887ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 1; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1119.8ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1302 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1484.9 MB, agent-process 1302 MB, agent-cli 182.9 MB
  - command-tree peak RSS 1484.9 MB exceeded threshold 1400 MB
  - 1 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-8e2a29af-kova-261019-052611-dbd906' -- agent --local...`
- Failure: \[31m\[memory\]\[39m \[33mfile worker unavailable; restarting in 500 ms: Cannot find module '/home/runner/.ocm/runtimes/kova-local-mveta5ki-3cp-90b0dac7/files/node\_modules/openclaw/dist/worker/memory-worker-entry.js'\[39m
- Agent turns:
  - cold: total 6887ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (126.18ms total, max 67.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 6887ms; source plugins.metadata.scan 190.2ms; agent.prepare 104.52ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-agent-cold-warm-message-8e2a29af-kova-261019-052611-dbd906/openclaw/timeline.jsonl |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-agent-cold-warm-message-2ab680e0-kova-261019-052611-dbd906
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1345.5 MB; tracked total 1599.7 MB; max CPU 212.8%; samples 9; roles command-tree 1528.3MB/234.2%, agent-process 1345.5MB/212.8%, agent-cli 182.8MB/141.5%, mock-provider 71.4MB/6.1%
- agent: turn 6732ms; cold/warm 6732ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (123.06ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 6732ms; max 6732ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 1; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1121.38ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1345.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1528.3 MB, agent-process 1345.5 MB, agent-cli 182.8 MB
  - command-tree peak RSS 1528.3 MB exceeded threshold 1400 MB
  - 1 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2ab680e0-kova-261019-052611-dbd906' -- agent --local...`
- Failure: \[31m\[memory\]\[39m \[33mfile worker unavailable; restarting in 500 ms: Cannot find module '/home/runner/.ocm/runtimes/kova-local-mveta5ki-3cp-90b0dac7/files/node\_modules/openclaw/dist/worker/memory-worker-entry.js'\[39m
- Agent turns:
  - cold: total 6732ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (123.06ms total, max 64.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 6732ms; source plugins.metadata.scan 199.6ms; agent.prepare 110.85ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-agent-cold-warm-message-2ab680e0-kova-261019-052611-dbd906/openclaw/timeline.jsonl |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-agent-cold-warm-message-67b331a3-kova-261019-052611-dbd906
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1325.6 MB; tracked total 1579.9 MB; max CPU 220%; samples 8; roles command-tree 1508.7MB/234%, agent-process 1325.6MB/220%, agent-cli 183.1MB/153%, mock-provider 71.2MB/5.1%
- agent: turn 6005ms; cold/warm 6005ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (113.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 6005ms; max 6005ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 1; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 958.75ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1325.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1508.7 MB, agent-process 1325.6 MB, agent-cli 183.1 MB
  - command-tree peak RSS 1508.7 MB exceeded threshold 1400 MB
  - 1 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-67b331a3-kova-261019-052611-dbd906' -- agent --local...`
- Failure: \[31m\[memory\]\[39m \[33mfile worker unavailable; restarting in 500 ms: Cannot find module '/home/runner/.ocm/runtimes/kova-local-mveta5ki-3cp-90b0dac7/files/node\_modules/openclaw/dist/worker/memory-worker-entry.js'\[39m
- Agent turns:
  - cold: total 6005ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (113.11ms total, max 65.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 6005ms; source plugins.metadata.scan 167.83ms; agent.prepare 95.44ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-agent-cold-warm-message-67b331a3-kova-261019-052611-dbd906/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261019-052611-dbd906-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261019-052611-dbd906-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261019-052611-dbd906-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-gateway-performance-man-005107f3-kova-261019-052611-dbd906
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-gateway-performance-man-1e8be6a8-kova-261019-052611-dbd906
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-gateway-performance-man-958fde53-kova-261019-052611-dbd906
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-agent-cold-warm-message-8e2a29af-kova-261019-052611-dbd906
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-agent-cold-warm-message-2ab680e0-kova-261019-052611-dbd906
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261019-052611-dbd906/kova-agent-cold-warm-message-67b331a3-kova-261019-052611-dbd906

## Target Cleanup

- Runtime: `kova-local-mveta5ki-3cp-90b0dac7`
- Result: removed
- Duration: 467ms

