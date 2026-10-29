# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1546.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1857.9 MB, gateway 1546.2 MB, command-tree 766.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1546.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1857.9 MB, gateway 1546.2 MB, command-tree 766.2 MB |
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
| Run ID | `kova-261029-052017-dec91c` |
| Generated | 2026-10-29T05:43:25.162Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1546.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1857.9 MB, gateway 1546.2 MB, command-tree 766.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 33 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1857.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 33 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1595.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1901.9 MB, gateway 1595.4 MB, command-tree 1026.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 200 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1901.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 200 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 1026.5 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 200 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1544.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1850.5 MB, gateway 1544.1 MB, command-tree 766.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 57 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1850.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 57 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1452.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1729.6 MB, agent-process 1452.2 MB, status-cli 878.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1452.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1729.6 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1452.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1450.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1728.9 MB, agent-process 1450.9 MB, status-cli 879.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1450.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1728.9 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1450.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1522.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1800.1 MB, agent-process 1522.8 MB, status-cli 876.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1522.8 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 57ms | 1546.2MB | n/a | 183.7% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 214.3% | 6855ms | 7573ms | 6551ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 33ms | 1546.2 MB | 2616.6 MB | n/a | n/a | gateway peak RSS 1546.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1857.9 MB, gateway 1546.2 MB, command-tree 766.2 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 200ms | 1595.4 MB | 2844.2 MB | n/a | n/a | gateway peak RSS 1595.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1901.9 MB, gateway 1595.4 MB, command-tree 1026.5 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 57ms | 1544.1 MB | 2646 MB | n/a | n/a | gateway peak RSS 1544.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1850.5 MB, gateway 1544.1 MB, command-tree 766.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1800.7 MB | 6855ms | 7573ms | agent-process peak RSS 1452.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1729.6 MB, agent-process 1452.2 MB, status-cli 878.2 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1800.3 MB | 6636ms | 7650ms | agent-process peak RSS 1450.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1728.9 MB, agent-process 1450.9 MB, status-cli 879.5 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1871.7 MB | 7083ms | 7394ms | agent-process peak RSS 1522.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1800.1 MB, agent-process 1522.8 MB, status-cli 876.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1901.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 227.7% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1800.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 243.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1595.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 186.5% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1522.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 225.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1026.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 182.9% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 827.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 364.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 139.1% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 330.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-gateway-performance-man-005107f3-kova-261029-052017-dec91c
Measurements:
- startup: listening 2ms; health 33ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 31ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 224ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1546.2 MB; tracked total 2616.6 MB; max CPU 183.7%; samples 36; roles gateway-tree 1857.9MB/205.4%, gateway 1546.2MB/183.7%, command-tree 766.2MB/169%, status-cli 766.2MB/169%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 1390.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1546.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1857.9 MB, gateway 1546.2 MB, command-tree 766.2 MB
  - gateway-tree peak RSS 1857.9 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-gateway-performance-man-1e8be6a8-kova-261029-052017-dec91c
Measurements:
- startup: listening 0ms; health 200ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 200ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 200ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1595.4 MB; tracked total 2844.2 MB; max CPU 186.5%; samples 36; roles gateway-tree 1901.9MB/227.7%, gateway 1595.4MB/186.5%, command-tree 1026.5MB/178.9%, status-cli 1026.5MB/178.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2703.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1595.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1901.9 MB, gateway 1595.4 MB, command-tree 1026.5 MB
  - gateway-tree peak RSS 1901.9 MB exceeded threshold 1440 MB
  - status-cli peak RSS 1026.5 MB exceeded threshold 900 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-gateway-performance-man-958fde53-kova-261029-052017-dec91c
Measurements:
- startup: listening 0ms; health 57ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 57ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 57ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1544.1 MB; tracked total 2646 MB; max CPU 183.1%; samples 37; roles gateway-tree 1850.5MB/198.2%, gateway 1544.1MB/183.1%, command-tree 766.1MB/155.6%, status-cli 766.1MB/155.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2487.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1544.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1850.5 MB, gateway 1544.1 MB, command-tree 766.1 MB
  - gateway-tree peak RSS 1850.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-8e2a29af-kova-261029-052017-dec91c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1452.2 MB; tracked total 1800.7 MB; max CPU 214.3%; samples 25; roles command-tree 1729.6MB/232%, agent-process 1452.2MB/214.3%, status-cli 878.2MB/181.8%, agent-cli 277.4MB/135.7%
- agent: turn 7573ms; cold/warm 6855ms/7573ms; cold-warm delta 0ms; pre-provider 7265ms; provider 1ms; metadata scans 8 (258.4ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7537.1ms; max 7573ms; pre-provider p95 7229.3ms
- agent CLI attribution: cold known 4132ms / unattributed 2419ms; warm known 5056ms / unattributed 2209ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1725.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1452.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1729.6 MB, agent-process 1452.2 MB, status-cli 878.2 MB
  - command-tree peak RSS 1729.6 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6855ms; pre-provider 6551ms; provider 2ms; post-provider 302ms; response true
    - active window: metadata scans 4 (126.61ms total, max 69.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6551ms; provider 2ms; post-provider 302ms; unknown 3597.68ms; source agent.prepare 2551.77ms; plugins.metadata.scan 401.55ms
  - warm: total 7573ms; pre-provider 7265ms; provider 1ms; post-provider 307ms; response true
    - active window: metadata scans 4 (131.79ms total, max 73.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7265ms; provider 1ms; post-provider 307ms; unknown 4311.68ms; source agent.prepare 2551.77ms; plugins.metadata.scan 401.55ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6551 ms | 4132 ms | 2419 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-8e2a29af-kova-261029-052017-dec91c/openclaw/timeline.jsonl |
  | warm | 7265 ms | 5056 ms | 2209 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-8e2a29af-kova-261029-052017-dec91c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2702 ms | 941 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1697 ms | 877 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1086 ms | 571 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 125 ms | 69 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 121 ms | 121 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2600 ms | 1725 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2250 ms | 823 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1465 ms | 515 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 132 ms | 74 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 124 ms | 124 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-2ab680e0-kova-261029-052017-dec91c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1450.9 MB; tracked total 1800.3 MB; max CPU 201.8%; samples 25; roles command-tree 1728.9MB/219.5%, agent-process 1450.9MB/201.8%, status-cli 879.5MB/182.9%, agent-cli 278MB/135.5%
- agent: turn 7650ms; cold/warm 6636ms/7650ms; cold-warm delta 0ms; pre-provider 7334ms; provider 1ms; metadata scans 8 (268.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7599.3ms; max 7650ms; pre-provider p95 7283.95ms
- agent CLI attribution: cold known 4051ms / unattributed 2282ms; warm known 5138ms / unattributed 2196ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1704.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1450.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1728.9 MB, agent-process 1450.9 MB, status-cli 879.5 MB
  - command-tree peak RSS 1728.9 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6636ms; pre-provider 6333ms; provider 2ms; post-provider 301ms; response true
    - active window: metadata scans 4 (127.98ms total, max 67.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6333ms; provider 2ms; post-provider 301ms; unknown 3280.12ms; source agent.prepare 2643.83ms; plugins.metadata.scan 409.05ms
  - warm: total 7650ms; pre-provider 7334ms; provider 1ms; post-provider 315ms; response true
    - active window: metadata scans 4 (140.66ms total, max 76.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7334ms; provider 1ms; post-provider 315ms; unknown 4281.12ms; source agent.prepare 2643.83ms; plugins.metadata.scan 409.05ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6333 ms | 4051 ms | 2282 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-2ab680e0-kova-261029-052017-dec91c/openclaw/timeline.jsonl |
  | warm | 7334 ms | 5138 ms | 2196 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-2ab680e0-kova-261029-052017-dec91c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2647 ms | 918 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1630 ms | 865 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1094 ms | 555 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 128 ms | 67 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 121 ms | 121 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2580 ms | 1704 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2319 ms | 862 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1550 ms | 570 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 139 ms | 76 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 130 ms | 130 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-67b331a3-kova-261029-052017-dec91c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1522.8 MB; tracked total 1871.7 MB; max CPU 225.2%; samples 25; roles command-tree 1800.1MB/243.1%, agent-process 1522.8MB/225.2%, status-cli 876.9MB/181.1%, agent-cli 277.3MB/138.6%
- agent: turn 7394ms; cold/warm 7083ms/7394ms; cold-warm delta 0ms; pre-provider 7103ms; provider 1ms; metadata scans 8 (273.03ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7378.45ms; max 7394ms; pre-provider p95 7087.85ms
- agent CLI attribution: cold known 4214ms / unattributed 2586ms; warm known 4956ms / unattributed 2147ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1690.01ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1522.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1800.1 MB, agent-process 1522.8 MB, status-cli 876.9 MB
  - command-tree peak RSS 1800.1 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7083ms; pre-provider 6800ms; provider 2ms; post-provider 281ms; response true
    - active window: metadata scans 4 (134.45ms total, max 74.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6800ms; provider 2ms; post-provider 281ms; unknown 3867.26ms; source agent.prepare 2506.77ms; plugins.metadata.scan 425.97ms
  - warm: total 7394ms; pre-provider 7103ms; provider 1ms; post-provider 290ms; response true
    - active window: metadata scans 4 (138.58ms total, max 76.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7103ms; provider 1ms; post-provider 290ms; unknown 4170.26ms; source agent.prepare 2506.77ms; plugins.metadata.scan 425.97ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6800 ms | 4214 ms | 2586 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-67b331a3-kova-261029-052017-dec91c/openclaw/timeline.jsonl |
  | warm | 7103 ms | 4956 ms | 2147 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-67b331a3-kova-261029-052017-dec91c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2788 ms | 975 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1747 ms | 909 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1055 ms | 535 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 135 ms | 75 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 126 ms | 126 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2530 ms | 1690 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2228 ms | 808 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1452 ms | 520 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 137 ms | 76 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 119 ms | 119 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261029-052017-dec91c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261029-052017-dec91c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261029-052017-dec91c-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-gateway-performance-man-005107f3-kova-261029-052017-dec91c
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-gateway-performance-man-1e8be6a8-kova-261029-052017-dec91c
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-gateway-performance-man-958fde53-kova-261029-052017-dec91c
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-8e2a29af-kova-261029-052017-dec91c
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-2ab680e0-kova-261029-052017-dec91c
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261029-052017-dec91c/kova-agent-cold-warm-message-67b331a3-kova-261029-052017-dec91c

## Target Cleanup

- Runtime: `kova-local-mvt3h32v-3ft-0e98ee22`
- Result: removed
- Duration: 563ms

