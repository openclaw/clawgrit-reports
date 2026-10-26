# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1873.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2088.1 MB, gateway 1873.6 MB, command-tree 927.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1873.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2088.1 MB, gateway 1873.6 MB, command-tree 927.9 MB |
| Blocking findings | 15 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261026-052915-4d7840` |
| Generated | 2026-10-26T05:52:21.715Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1873.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2088.1 MB, gateway 1873.6 MB, command-tree 927.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 38 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2088.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 38 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 927.9 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 38 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1908 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2123.8 MB, gateway 1908 MB, command-tree 935.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 38 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2123.8 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 38 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 935.4 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 38 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1860 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2075.4 MB, gateway 1860 MB, command-tree 1012.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 16 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2075.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 16 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 1012.5 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 16 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1529.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1713.5 MB, agent-process 1529.6 MB, status-cli 901.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1529.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1713.5 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1529.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1479.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1662.2 MB, agent-process 1479.1 MB, status-cli 871.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1479.1 |
| info | Kova | report | 3 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 38ms | 1873.6MB | n/a | 260.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 239.8% | 6938ms | 7693ms | 6689ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 38ms | 1873.6 MB | 2824.6 MB | n/a | n/a | gateway peak RSS 1873.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2088.1 MB, gateway 1873.6 MB, command-tree 927.9 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 38ms | 1908 MB | 2862.4 MB | n/a | n/a | gateway peak RSS 1908 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2123.8 MB, gateway 1908 MB, command-tree 935.4 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 16ms | 1860 MB | 2948.3 MB | n/a | n/a | gateway peak RSS 1860 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2075.4 MB, gateway 1860 MB, command-tree 1012.5 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1784.9 MB | 6921ms | 7610ms | agent-process peak RSS 1529.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1713.5 MB, agent-process 1529.6 MB, status-cli 901.7 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1733.8 MB | 6940ms | 7709ms | agent-process peak RSS 1479.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1662.2 MB, agent-process 1479.1 MB, status-cli 871.5 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1692 MB | 6938ms | 7693ms | agent-process peak RSS 1436.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1620.6 MB, agent-process 1436.9 MB, status-cli 860.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2123.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 281.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1908 MB (scenario gateway-performance/many-bundled-plugins); CPU 263.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1713.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 254.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1529.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 240.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1012.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 177% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 651.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 140.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 272.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 366.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 140.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-gateway-performance-man-005107f3-kova-261026-052915-4d7840
Measurements:
- startup: listening 1ms; health 38ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 37ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 37ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1873.6 MB; tracked total 2824.6 MB; max CPU 263.9%; samples 38; roles gateway-tree 2088.1MB/281.8%, gateway 1873.6MB/263.9%, command-tree 927.9MB/155.8%, status-cli 927.9MB/155.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.channels 1813.97ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1873.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2088.1 MB, gateway 1873.6 MB, command-tree 927.9 MB
  - gateway-tree peak RSS 2088.1 MB exceeded threshold 1440 MB
  - status-cli peak RSS 927.9 MB exceeded threshold 900 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-gateway-performance-man-1e8be6a8-kova-261026-052915-4d7840
Measurements:
- startup: listening 0ms; health 38ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 38ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 103ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1908 MB; tracked total 2862.4 MB; max CPU 260.2%; samples 38; roles gateway-tree 2123.8MB/274%, gateway 1908MB/260.2%, command-tree 935.4MB/158.9%, status-cli 935.4MB/158.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.channels 1769.05ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1908 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2123.8 MB, gateway 1908 MB, command-tree 935.4 MB
  - gateway-tree peak RSS 2123.8 MB exceeded threshold 1440 MB
  - status-cli peak RSS 935.4 MB exceeded threshold 900 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-gateway-performance-man-958fde53-kova-261026-052915-4d7840
Measurements:
- startup: listening 0ms; health 16ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 16ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 109ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1860 MB; tracked total 2948.3 MB; max CPU 246.9%; samples 38; roles gateway-tree 2075.4MB/264.7%, gateway 1860MB/246.9%, command-tree 1012.5MB/162%, status-cli 1012.5MB/162%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.channels 1744.86ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1860 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2075.4 MB, gateway 1860 MB, command-tree 1012.5 MB
  - gateway-tree peak RSS 2075.4 MB exceeded threshold 1440 MB
  - status-cli peak RSS 1012.5 MB exceeded threshold 900 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-8e2a29af-kova-261026-052915-4d7840
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1529.6 MB; tracked total 1784.9 MB; max CPU 221%; samples 25; roles command-tree 1713.5MB/235.2%, agent-process 1529.6MB/221%, status-cli 901.7MB/175.4%, agent-cli 272.2MB/147.1%
- agent: turn 7610ms; cold/warm 6921ms/7610ms; cold-warm delta 0ms; pre-provider 7366ms; provider 1ms; metadata scans 8 (235.91ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7575.55ms; max 7610ms; pre-provider p95 7331.65ms
- agent CLI attribution: cold known 4305ms / unattributed 2374ms; warm known 5218ms / unattributed 2148ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1717.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1529.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1713.5 MB, agent-process 1529.6 MB, status-cli 901.7 MB
  - command-tree peak RSS 1713.5 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6921ms; pre-provider 6679ms; provider 2ms; post-provider 240ms; response true
    - active window: metadata scans 4 (121.82ms total, max 63.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6679ms; provider 2ms; post-provider 240ms; unknown 3031.78ms; source agent.prepare 3289.22ms; plugins.metadata.scan 358ms
  - warm: total 7610ms; pre-provider 7366ms; provider 1ms; post-provider 243ms; response true
    - active window: metadata scans 4 (114.09ms total, max 55.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7366ms; provider 1ms; post-provider 243ms; unknown 3718.78ms; source agent.prepare 3289.22ms; plugins.metadata.scan 358ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6679 ms | 4305 ms | 2374 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-8e2a29af-kova-261026-052915-4d7840/openclaw/timeline.jsonl |
  | warm | 7366 ms | 5218 ms | 2148 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-8e2a29af-kova-261026-052915-4d7840/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2283 ms | 775 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1661 ms | 879 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1459 ms | 986 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 146 ms | 146 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 121 ms | 63 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2546 ms | 1717 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2067 ms | 592 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1832 ms | 950 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 143 ms | 143 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 115 ms | 55 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-2ab680e0-kova-261026-052915-4d7840
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1479.1 MB; tracked total 1733.8 MB; max CPU 239.8%; samples 25; roles command-tree 1662.2MB/253.8%, agent-process 1479.1MB/239.8%, status-cli 871.5MB/177%, agent-cli 264.3MB/155%
- agent: turn 7709ms; cold/warm 6940ms/7709ms; cold-warm delta 0ms; pre-provider 7465ms; provider 0ms; metadata scans 8 (232.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7670.55ms; max 7709ms; pre-provider p95 7426.85ms
- agent CLI attribution: cold known 4325ms / unattributed 2377ms; warm known 5282ms / unattributed 2183ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1725.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1479.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1662.2 MB, agent-process 1479.1 MB, status-cli 871.5 MB
  - command-tree peak RSS 1662.2 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6940ms; pre-provider 6702ms; provider 2ms; post-provider 236ms; response true
    - active window: metadata scans 4 (117.92ms total, max 62.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6702ms; provider 2ms; post-provider 236ms; unknown 2988.78ms; source agent.prepare 3353.64ms; plugins.metadata.scan 359.58ms
  - warm: total 7709ms; pre-provider 7465ms; provider 0ms; post-provider 244ms; response true
    - active window: metadata scans 4 (114.82ms total, max 55.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7465ms; provider 0ms; post-provider 244ms; unknown 3751.78ms; source agent.prepare 3353.64ms; plugins.metadata.scan 359.58ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6702 ms | 4325 ms | 2377 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-2ab680e0-kova-261026-052915-4d7840/openclaw/timeline.jsonl |
  | warm | 7465 ms | 5282 ms | 2183 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-2ab680e0-kova-261026-052915-4d7840/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2297 ms | 788 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1647 ms | 880 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1499 ms | 1015 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 144 ms | 144 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 62 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2584 ms | 1725 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2086 ms | 599 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1855 ms | 957 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 143 ms | 143 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 115 ms | 56 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-67b331a3-kova-261026-052915-4d7840
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1436.9 MB; tracked total 1692 MB; max CPU 240.1%; samples 25; roles command-tree 1620.6MB/254.1%, agent-process 1436.9MB/240.1%, status-cli 860.6MB/176.4%, agent-cli 270.8MB/144.3%
- agent: turn 7693ms; cold/warm 6938ms/7693ms; cold-warm delta 0ms; pre-provider 7448ms; provider 1ms; metadata scans 8 (240.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7655.25ms; max 7693ms; pre-provider p95 7410.05ms
- agent CLI attribution: cold known 4311ms / unattributed 2378ms; warm known 5274ms / unattributed 2174ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1698.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1436.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1620.6 MB, agent-process 1436.9 MB, status-cli 860.6 MB
  - command-tree peak RSS 1620.6 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6938ms; pre-provider 6689ms; provider 2ms; post-provider 247ms; response true
    - active window: metadata scans 4 (121.38ms total, max 67.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6689ms; provider 2ms; post-provider 247ms; unknown 2995.62ms; source agent.prepare 3336.08ms; plugins.metadata.scan 357.3ms
  - warm: total 7693ms; pre-provider 7448ms; provider 1ms; post-provider 244ms; response true
    - active window: metadata scans 4 (118.8ms total, max 63.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7448ms; provider 1ms; post-provider 244ms; unknown 3754.62ms; source agent.prepare 3336.08ms; plugins.metadata.scan 357.3ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6689 ms | 4311 ms | 2378 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-67b331a3-kova-261026-052915-4d7840/openclaw/timeline.jsonl |
  | warm | 7448 ms | 5274 ms | 2174 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-67b331a3-kova-261026-052915-4d7840/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2266 ms | 771 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1674 ms | 868 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1456 ms | 988 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 143 ms | 143 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 67 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2550 ms | 1698 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2064 ms | 593 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1879 ms | 957 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 143 ms | 143 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 63 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261026-052915-4d7840-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261026-052915-4d7840-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261026-052915-4d7840-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-gateway-performance-man-005107f3-kova-261026-052915-4d7840
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-gateway-performance-man-1e8be6a8-kova-261026-052915-4d7840
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-gateway-performance-man-958fde53-kova-261026-052915-4d7840
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-8e2a29af-kova-261026-052915-4d7840
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-2ab680e0-kova-261026-052915-4d7840
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261026-052915-4d7840/kova-agent-cold-warm-message-67b331a3-kova-261026-052915-4d7840

## Target Cleanup

- Runtime: `kova-local-mvoth2ef-3ee-e93788a6`
- Result: removed
- Duration: 547ms

