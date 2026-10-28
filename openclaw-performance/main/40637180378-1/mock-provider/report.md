# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1622.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.2 MB, gateway 1622.6 MB, command-tree 766.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1622.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.2 MB, gateway 1622.6 MB, command-tree 766.8 MB |
| Blocking findings | 13 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261028-052020-9706a4` |
| Generated | 2026-10-28T05:44:52.260Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1622.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.2 MB, gateway 1622.6 MB, command-tree 766.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1815.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1668.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1860.2 MB, gateway 1668.2 MB, command-tree 887.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1860.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1636.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1828.7 MB, gateway 1636.3 MB, command-tree 955.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 104 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1828.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 104 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 955.4 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 104 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1563.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1744.9 MB, agent-process 1563.6 MB, status-cli 1139 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1563.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1744.9 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1563.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1514.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1791.1 MB, agent-process 1514.4 MB, status-cli 1122.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1791.1 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1580.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1856.8 MB, agent-process 1580.5 MB, status-cli 1118 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1580.5 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 22ms | 1636.3MB | n/a | 196.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 187.8% | 6841ms | 7472ms | 6578ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 22ms | 1622.6 MB | 2458.6 MB | n/a | n/a | gateway peak RSS 1622.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.2 MB, gateway 1622.6 MB, command-tree 766.8 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 22ms | 1668.2 MB | 2572.6 MB | n/a | n/a | gateway peak RSS 1668.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1860.2 MB, gateway 1668.2 MB, command-tree 887.2 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 104ms | 1636.3 MB | 2601.5 MB | n/a | n/a | gateway peak RSS 1636.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1828.7 MB, gateway 1636.3 MB, command-tree 955.4 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1815.8 MB | 7068ms | 7873ms | agent-process peak RSS 1563.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1744.9 MB, agent-process 1563.6 MB, status-cli 1139 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1862.3 MB | 6841ms | 7387ms | agent-process peak RSS 1514.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1791.1 MB, agent-process 1514.4 MB, status-cli 1122.4 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1928.2 MB | 6769ms | 7472ms | agent-process peak RSS 1580.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1856.8 MB, agent-process 1580.5 MB, status-cli 1118 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1860.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 215.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1856.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 237.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1580.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 219.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1668.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 197.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1139 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.9% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 697.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 379.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.3% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 356.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 137% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-gateway-performance-man-005107f3-kova-261028-052020-9706a4
Measurements:
- startup: listening 1ms; health 22ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 3
- health: startup p95 21ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 216ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1622.6 MB; tracked total 2458.6 MB; max CPU 189.8%; samples 37; roles gateway-tree 1815.2MB/207.5%, gateway 1622.6MB/189.8%, command-tree 766.8MB/164.3%, status-cli 766.8MB/164.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 3362.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1622.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.2 MB, gateway 1622.6 MB, command-tree 766.8 MB
  - gateway-tree peak RSS 1815.2 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-gateway-performance-man-1e8be6a8-kova-261028-052020-9706a4
Measurements:
- startup: listening 0ms; health 22ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 22ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 34ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1668.2 MB; tracked total 2572.6 MB; max CPU 196.1%; samples 39; roles gateway-tree 1860.2MB/214.8%, gateway 1668.2MB/196.1%, command-tree 887.2MB/172%, status-cli 887.2MB/172%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 6049.62ms; embedded traces 0; liveness warnings 0; open spans 2 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1668.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1860.2 MB, gateway 1668.2 MB, command-tree 887.2 MB
  - gateway-tree peak RSS 1860.2 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-gateway-performance-man-958fde53-kova-261028-052020-9706a4
Measurements:
- startup: listening 0ms; health 104ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 104ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 104ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1636.3 MB; tracked total 2601.5 MB; max CPU 197.9%; samples 36; roles gateway-tree 1828.7MB/215.9%, gateway 1636.3MB/197.9%, command-tree 955.4MB/174.7%, status-cli 955.4MB/174.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2622.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1636.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1828.7 MB, gateway 1636.3 MB, command-tree 955.4 MB
  - gateway-tree peak RSS 1828.7 MB exceeded threshold 1440 MB
  - status-cli peak RSS 955.4 MB exceeded threshold 900 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-8e2a29af-kova-261028-052020-9706a4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1563.6 MB; tracked total 1815.8 MB; max CPU 219.8%; samples 25; roles command-tree 1744.9MB/237.9%, agent-process 1563.6MB/219.8%, status-cli 1139MB/182.9%, agent-cli 276.4MB/158.3%
- agent: turn 7873ms; cold/warm 7068ms/7873ms; cold-warm delta 0ms; pre-provider 7589ms; provider 1ms; metadata scans 8 (254.13ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7832.75ms; max 7873ms; pre-provider p95 7546.9ms
- agent CLI attribution: cold known 4598ms / unattributed 2149ms; warm known 5544ms / unattributed 2045ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1607.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1563.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1744.9 MB, agent-process 1563.6 MB, status-cli 1139 MB
  - command-tree peak RSS 1744.9 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7068ms; pre-provider 6747ms; provider 2ms; post-provider 319ms; response true
    - active window: metadata scans 4 (122.27ms total, max 62.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6747ms; provider 2ms; post-provider 319ms; unknown 2944.09ms; source agent.prepare 3423.83ms; plugins.metadata.scan 379.08ms
  - warm: total 7873ms; pre-provider 7589ms; provider 1ms; post-provider 283ms; response true
    - active window: metadata scans 4 (131.86ms total, max 72.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7589ms; provider 1ms; post-provider 283ms; unknown 3786.09ms; source agent.prepare 3423.83ms; plugins.metadata.scan 379.08ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6747 ms | 4598 ms | 2149 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-8e2a29af-kova-261028-052020-9706a4/openclaw/timeline.jsonl |
  | warm | 7589 ms | 5544 ms | 2045 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-8e2a29af-kova-261028-052020-9706a4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2720 ms | 972 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1635 ms | 857 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1527 ms | 1020 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 196 ms | 196 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 121 ms | 63 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2509 ms | 1608 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2307 ms | 866 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1898 ms | 1000 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 233 ms | 233 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 132 ms | 72 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-2ab680e0-kova-261028-052020-9706a4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1514.4 MB; tracked total 1862.3 MB; max CPU 187.8%; samples 25; roles command-tree 1791.1MB/202.6%, agent-process 1514.4MB/187.8%, status-cli 1122.4MB/182.1%, agent-cli 374.1MB/150.8%
- agent: turn 7387ms; cold/warm 6841ms/7387ms; cold-warm delta 0ms; pre-provider 7125ms; provider 1ms; metadata scans 8 (243.66ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7359.7ms; max 7387ms; pre-provider p95 7097.65ms
- agent CLI attribution: cold known 4404ms / unattributed 2174ms; warm known 5284ms / unattributed 1841ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1622.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1514.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1791.1 MB, agent-process 1514.4 MB, status-cli 1122.4 MB
  - command-tree peak RSS 1791.1 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6841ms; pre-provider 6578ms; provider 2ms; post-provider 261ms; response true
    - active window: metadata scans 4 (120.41ms total, max 63.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6578ms; provider 2ms; post-provider 261ms; unknown 2852.89ms; source agent.prepare 3354.85ms; plugins.metadata.scan 370.26ms
  - warm: total 7387ms; pre-provider 7125ms; provider 1ms; post-provider 261ms; response true
    - active window: metadata scans 4 (123.25ms total, max 66.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7125ms; provider 1ms; post-provider 261ms; unknown 3399.89ms; source agent.prepare 3354.85ms; plugins.metadata.scan 370.26ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6578 ms | 4404 ms | 2174 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-2ab680e0-kova-261028-052020-9706a4/openclaw/timeline.jsonl |
  | warm | 7125 ms | 5284 ms | 1841 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-2ab680e0-kova-261028-052020-9706a4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2455 ms | 863 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1584 ms | 819 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1499 ms | 1032 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 192 ms | 192 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 121 ms | 63 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2458 ms | 1623 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2042 ms | 741 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1855 ms | 1001 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 193 ms | 193 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 125 ms | 67 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-67b331a3-kova-261028-052020-9706a4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1580.5 MB; tracked total 1928.2 MB; max CPU 185.1%; samples 25; roles command-tree 1856.8MB/202.5%, agent-process 1580.5MB/185.1%, status-cli 1118MB/179.9%, agent-cli 379.5MB/133.2%
- agent: turn 7472ms; cold/warm 6769ms/7472ms; cold-warm delta 0ms; pre-provider 7121ms; provider 0ms; metadata scans 8 (243.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7436.85ms; max 7472ms; pre-provider p95 7090.05ms
- agent CLI attribution: cold known 4396ms / unattributed 2106ms; warm known 5281ms / unattributed 1840ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1559.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1580.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1856.8 MB, agent-process 1580.5 MB, status-cli 1118 MB
  - command-tree peak RSS 1856.8 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6769ms; pre-provider 6502ms; provider 2ms; post-provider 265ms; response true
    - active window: metadata scans 4 (118.05ms total, max 60.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6502ms; provider 2ms; post-provider 265ms; unknown 2732.72ms; source agent.prepare 3398.21ms; plugins.metadata.scan 371.07ms
  - warm: total 7472ms; pre-provider 7121ms; provider 0ms; post-provider 351ms; response true
    - active window: metadata scans 4 (125.21ms total, max 66.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7121ms; provider 0ms; post-provider 351ms; unknown 3351.72ms; source agent.prepare 3398.21ms; plugins.metadata.scan 371.07ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6502 ms | 4396 ms | 2106 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-67b331a3-kova-261028-052020-9706a4/openclaw/timeline.jsonl |
  | warm | 7121 ms | 5281 ms | 1840 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-67b331a3-kova-261028-052020-9706a4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2465 ms | 861 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1568 ms | 812 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1505 ms | 1021 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 199 ms | 199 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 61 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2420 ms | 1560 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2088 ms | 752 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1893 ms | 1007 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 195 ms | 195 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 126 ms | 66 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261028-052020-9706a4-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261028-052020-9706a4-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261028-052020-9706a4-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-gateway-performance-man-005107f3-kova-261028-052020-9706a4
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-gateway-performance-man-1e8be6a8-kova-261028-052020-9706a4
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-gateway-performance-man-958fde53-kova-261028-052020-9706a4
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-8e2a29af-kova-261028-052020-9706a4
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-2ab680e0-kova-261028-052020-9706a4
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261028-052020-9706a4/kova-agent-cold-warm-message-67b331a3-kova-261028-052020-9706a4

## Target Cleanup

- Runtime: `kova-local-mvro1aqa-3en-40a3b1d6`
- Result: removed
- Duration: 572ms

