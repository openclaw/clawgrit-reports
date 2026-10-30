# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1573.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1880.9 MB, gateway 1573.7 MB, command-tree 895.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1573.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1880.9 MB, gateway 1573.7 MB, command-tree 895.2 MB |
| Blocking findings | 14 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261030-052020-95dfeb` |
| Generated | 2026-10-30T05:41:32.842Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1573.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1880.9 MB, gateway 1573.7 MB, command-tree 895.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 19 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1880.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 19 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1542.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1851 MB, gateway 1542.6 MB, command-tree 896.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 11 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1851 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 11 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 967ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 11 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1605.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1917.7 MB, gateway 1605.7 MB, command-tree 894.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 13 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1917.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 13 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 985ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 13 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1516 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1793.2 MB, agent-process 1516 MB, status-cli 1059 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1516 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1793.2 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1516 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1480.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1756.9 MB, agent-process 1480.1 MB, status-cli 1064.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1480.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1756.9 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1480.1 |
| info | Kova | report | 2 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 13ms | 1573.7MB | n/a | 184.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 194.3% | 5881ms | 6565ms | 5626ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 19ms | 1573.7 MB | 2693 MB | n/a | n/a | gateway peak RSS 1573.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1880.9 MB, gateway 1573.7 MB, command-tree 895.2 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 11ms | 1542.6 MB | 2650.4 MB | n/a | n/a | gateway peak RSS 1542.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1851 MB, gateway 1542.6 MB, command-tree 896.6 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 13ms | 1605.7 MB | 2728 MB | n/a | n/a | gateway peak RSS 1605.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1917.7 MB, gateway 1605.7 MB, command-tree 894.2 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1864.8 MB | 5900ms | 6587ms | agent-process peak RSS 1516 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1793.2 MB, agent-process 1516 MB, status-cli 1059 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1828.7 MB | 5872ms | 6565ms | agent-process peak RSS 1480.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1756.9 MB, agent-process 1480.1 MB, status-cli 1064.6 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1805.6 MB | 5881ms | 6520ms | agent-process peak RSS 1457.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1734.5 MB, agent-process 1457.3 MB, status-cli 1058.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1917.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 238% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1793.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 216.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1605.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 184.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1516 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 198.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1064.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.7% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 756.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 146.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 395.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 142.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 367.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 135.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-gateway-performance-man-005107f3-kova-261030-052020-95dfeb
Measurements:
- startup: listening 1ms; health 19ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 18ms; post-ready p95 1ms; failures 0; final failures 0; slowest final/final 73ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1573.7 MB; tracked total 2693 MB; max CPU 184.8%; samples 35; roles gateway-tree 1880.9MB/234.3%, gateway 1573.7MB/184.8%, command-tree 895.2MB/169.8%, status-cli 895.2MB/169.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2669.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1573.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1880.9 MB, gateway 1573.7 MB, command-tree 895.2 MB
  - gateway-tree peak RSS 1880.9 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-gateway-performance-man-1e8be6a8-kova-261030-052020-95dfeb
Measurements:
- startup: listening 1ms; health 11ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 10ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 85ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1542.6 MB; tracked total 2650.4 MB; max CPU 184.9%; samples 35; roles gateway-tree 1851MB/238%, gateway 1542.6MB/184.9%, command-tree 896.6MB/166.9%, status-cli 896.6MB/166.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2677.07ms; embedded traces 0; liveness warnings 0; open spans 4 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1542.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1851 MB, gateway 1542.6 MB, command-tree 896.6 MB
  - gateway-tree peak RSS 1851 MB exceeded threshold 1440 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 967ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-gateway-performance-man-958fde53-kova-261030-052020-95dfeb
Measurements:
- startup: listening 1ms; health 13ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 12ms; post-ready p95 1ms; failures 0; final failures 0; slowest final/final 58ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1605.7 MB; tracked total 2728 MB; max CPU 182.6%; samples 35; roles gateway-tree 1917.7MB/238%, gateway 1605.7MB/182.6%, command-tree 894.2MB/170%, status-cli 894.2MB/170%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2832.69ms; embedded traces 0; liveness warnings 0; open spans 4 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1605.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1917.7 MB, gateway 1605.7 MB, command-tree 894.2 MB
  - gateway-tree peak RSS 1917.7 MB exceeded threshold 1440 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 985ms

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-8e2a29af-kova-261030-052020-95dfeb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1516 MB; tracked total 1864.8 MB; max CPU 198.8%; samples 23; roles command-tree 1793.2MB/216.6%, agent-process 1516MB/198.8%, status-cli 1059MB/179.1%, agent-cli 392.7MB/142.4%
- agent: turn 6587ms; cold/warm 5900ms/6587ms; cold-warm delta 0ms; pre-provider 6329ms; provider 1ms; metadata scans 8 (218.42ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6552.65ms; max 6587ms; pre-provider p95 6295.25ms
- agent CLI attribution: cold known 3596ms / unattributed 2058ms; warm known 4425ms / unattributed 1904ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1508.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1516 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1793.2 MB, agent-process 1516 MB, status-cli 1059 MB
  - command-tree peak RSS 1793.2 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 5900ms; pre-provider 5654ms; provider 2ms; post-provider 244ms; response true
    - active window: metadata scans 4 (108.59ms total, max 58.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5654ms; provider 2ms; post-provider 244ms; unknown 3062.47ms; source agent.prepare 2244.91ms; plugins.metadata.scan 346.62ms
  - warm: total 6587ms; pre-provider 6329ms; provider 1ms; post-provider 257ms; response true
    - active window: metadata scans 4 (109.83ms total, max 60.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6329ms; provider 1ms; post-provider 257ms; unknown 3737.47ms; source agent.prepare 2244.91ms; plugins.metadata.scan 346.62ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5654 ms | 3596 ms | 2058 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-8e2a29af-kova-261030-052020-95dfeb/openclaw/timeline.jsonl |
  | warm | 6329 ms | 4425 ms | 1904 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-8e2a29af-kova-261030-052020-95dfeb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2353 ms | 825 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1482 ms | 779 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 938 ms | 491 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 108 ms | 58 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 106 ms | 106 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2281 ms | 1508 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1939 ms | 703 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1308 ms | 466 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 109 ms | 60 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 107 ms | 107 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-2ab680e0-kova-261030-052020-95dfeb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1480.1 MB; tracked total 1828.7 MB; max CPU 194.3%; samples 23; roles command-tree 1756.9MB/212.3%, agent-process 1480.1MB/194.3%, status-cli 1064.6MB/179.9%, agent-cli 395.6MB/139.9%
- agent: turn 6565ms; cold/warm 5872ms/6565ms; cold-warm delta 0ms; pre-provider 6325ms; provider 1ms; metadata scans 8 (219.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6530.35ms; max 6565ms; pre-provider p95 6289.65ms
- agent CLI attribution: cold known 3558ms / unattributed 2060ms; warm known 4414ms / unattributed 1911ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1500.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1480.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1756.9 MB, agent-process 1480.1 MB, status-cli 1064.6 MB
  - command-tree peak RSS 1756.9 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 5872ms; pre-provider 5618ms; provider 2ms; post-provider 252ms; response true
    - active window: metadata scans 4 (107.64ms total, max 58.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5618ms; provider 2ms; post-provider 252ms; unknown 3047.26ms; source agent.prepare 2224.14ms; plugins.metadata.scan 346.6ms
  - warm: total 6565ms; pre-provider 6325ms; provider 1ms; post-provider 239ms; response true
    - active window: metadata scans 4 (111.72ms total, max 61.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6325ms; provider 1ms; post-provider 239ms; unknown 3754.26ms; source agent.prepare 2224.14ms; plugins.metadata.scan 346.6ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5618 ms | 3558 ms | 2060 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-2ab680e0-kova-261030-052020-95dfeb/openclaw/timeline.jsonl |
  | warm | 6325 ms | 4414 ms | 1911 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-2ab680e0-kova-261030-052020-95dfeb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2334 ms | 813 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1468 ms | 768 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 917 ms | 478 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 107 ms | 58 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 106 ms | 106 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2279 ms | 1500 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1946 ms | 709 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1303 ms | 457 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 112 ms | 62 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 106 ms | 106 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-67b331a3-kova-261030-052020-95dfeb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1457.3 MB; tracked total 1805.6 MB; max CPU 192.5%; samples 23; roles command-tree 1734.5MB/208.8%, agent-process 1457.3MB/192.5%, status-cli 1058.2MB/180.7%, agent-cli 277.2MB/137.2%
- agent: turn 6520ms; cold/warm 5881ms/6520ms; cold-warm delta 0ms; pre-provider 6264ms; provider 1ms; metadata scans 8 (217.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6488.05ms; max 6520ms; pre-provider p95 6232.1ms
- agent CLI attribution: cold known 3565ms / unattributed 2061ms; warm known 4387ms / unattributed 1877ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1499.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1457.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1734.5 MB, agent-process 1457.3 MB, status-cli 1058.2 MB
  - command-tree peak RSS 1734.5 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 5881ms; pre-provider 5626ms; provider 2ms; post-provider 253ms; response true
    - active window: metadata scans 4 (107.82ms total, max 58.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5626ms; provider 2ms; post-provider 253ms; unknown 3051.48ms; source agent.prepare 2227.97ms; plugins.metadata.scan 346.55ms
  - warm: total 6520ms; pre-provider 6264ms; provider 1ms; post-provider 255ms; response true
    - active window: metadata scans 4 (109.75ms total, max 60.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6264ms; provider 1ms; post-provider 255ms; unknown 3689.48ms; source agent.prepare 2227.97ms; plugins.metadata.scan 346.55ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5626 ms | 3565 ms | 2061 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-67b331a3-kova-261030-052020-95dfeb/openclaw/timeline.jsonl |
  | warm | 6264 ms | 4387 ms | 1877 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-67b331a3-kova-261030-052020-95dfeb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2339 ms | 816 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1445 ms | 763 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 939 ms | 491 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 109 ms | 58 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 106 ms | 106 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2271 ms | 1499 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1918 ms | 698 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1290 ms | 455 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 108 ms | 60 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 106 ms | 106 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261030-052020-95dfeb-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261030-052020-95dfeb-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261030-052020-95dfeb-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-gateway-performance-man-005107f3-kova-261030-052020-95dfeb
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-gateway-performance-man-1e8be6a8-kova-261030-052020-95dfeb
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-gateway-performance-man-958fde53-kova-261030-052020-95dfeb
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-8e2a29af-kova-261030-052020-95dfeb
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-2ab680e0-kova-261030-052020-95dfeb
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261030-052020-95dfeb/kova-agent-cold-warm-message-67b331a3-kova-261030-052020-95dfeb

## Target Cleanup

- Runtime: `kova-local-mvuiwzsh-3f4-e1887cba`
- Result: removed
- Duration: 508ms

