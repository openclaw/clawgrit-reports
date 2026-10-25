# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1870.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2083 MB, gateway 1870.8 MB, command-tree 916.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1870.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2083 MB, gateway 1870.8 MB, command-tree 916.6 MB |
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
| Run ID | `kova-261025-052259-7722fe` |
| Generated | 2026-10-25T05:44:52.153Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1870.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2083 MB, gateway 1870.8 MB, command-tree 916.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 28 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2083 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 28 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 916.6 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 28 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1862.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2074.7 MB, gateway 1862.4 MB, command-tree 948.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 49 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2074.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 49 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 948.8 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 49 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1967 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2179.7 MB, gateway 1967 MB, command-tree 972.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 40 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2179.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 40 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 972.6 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 40 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1401.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1588 MB, agent-process 1401.7 MB, status-cli 774.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1401.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1588 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1401.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1391.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1577.7 MB, agent-process 1391.5 MB, status-cli 788.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1391.5 |
| info | Kova | report | 3 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 40ms | 1870.8MB | n/a | 254.7% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 230.9% | 6776ms | 7554ms | 6530ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 28ms | 1870.8 MB | 2811 MB | n/a | n/a | gateway peak RSS 1870.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2083 MB, gateway 1870.8 MB, command-tree 916.6 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 49ms | 1862.4 MB | 2844.4 MB | n/a | n/a | gateway peak RSS 1862.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2074.7 MB, gateway 1862.4 MB, command-tree 948.8 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 40ms | 1967 MB | 2992.1 MB | n/a | n/a | gateway peak RSS 1967 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2179.7 MB, gateway 1967 MB, command-tree 972.6 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1659.1 MB | 6785ms | 7554ms | agent-process peak RSS 1401.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1588 MB, agent-process 1401.7 MB, status-cli 774.9 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1649.1 MB | 6776ms | 7590ms | agent-process peak RSS 1391.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1577.7 MB, agent-process 1391.5 MB, status-cli 788.9 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1629.8 MB | 6745ms | 7511ms | agent-process peak RSS 1372.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1558.6 MB, agent-process 1372.2 MB, status-cli 792.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2179.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 278.5% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1967 MB (scenario gateway-performance/many-bundled-plugins); CPU 261.4% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1588 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 252.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1401.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 233.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 972.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 174.4% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 635.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 141.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 259.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 143.6% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 368 MB (scenario gateway-performance/many-bundled-plugins); CPU 139.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-gateway-performance-man-005107f3-kova-261025-052259-7722fe
Measurements:
- startup: listening 0ms; health 28ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 28ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 28ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1870.8 MB; tracked total 2811 MB; max CPU 253.1%; samples 38; roles gateway-tree 2083MB/272.8%, gateway 1870.8MB/253.1%, command-tree 916.6MB/155.1%, status-cli 916.6MB/155.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.channels 1956.56ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1870.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2083 MB, gateway 1870.8 MB, command-tree 916.6 MB
  - gateway-tree peak RSS 2083 MB exceeded threshold 1440 MB
  - status-cli peak RSS 916.6 MB exceeded threshold 900 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-gateway-performance-man-1e8be6a8-kova-261025-052259-7722fe
Measurements:
- startup: listening 1ms; health 49ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 48ms; post-ready p95 1ms; failures 0; final failures 0; slowest startup-sample/cold-start 48ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1862.4 MB; tracked total 2844.4 MB; max CPU 254.7%; samples 38; roles gateway-tree 2074.7MB/272.5%, gateway 1862.4MB/254.7%, command-tree 948.8MB/152.1%, status-cli 948.8MB/152.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.channels 1758.25ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1862.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2074.7 MB, gateway 1862.4 MB, command-tree 948.8 MB
  - gateway-tree peak RSS 2074.7 MB exceeded threshold 1440 MB
  - status-cli peak RSS 948.8 MB exceeded threshold 900 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-gateway-performance-man-958fde53-kova-261025-052259-7722fe
Measurements:
- startup: listening 0ms; health 40ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 40ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 125ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1967 MB; tracked total 2992.1 MB; max CPU 261.4%; samples 38; roles gateway-tree 2179.7MB/278.5%, gateway 1967MB/261.4%, command-tree 972.6MB/158.9%, status-cli 972.6MB/158.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.channels 1921.29ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1967 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2179.7 MB, gateway 1967 MB, command-tree 972.6 MB
  - gateway-tree peak RSS 2179.7 MB exceeded threshold 1440 MB
  - status-cli peak RSS 972.6 MB exceeded threshold 900 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-8e2a29af-kova-261025-052259-7722fe
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1401.7 MB; tracked total 1659.1 MB; max CPU 225.7%; samples 25; roles command-tree 1588MB/246.4%, agent-process 1401.7MB/225.7%, status-cli 774.9MB/171.5%, agent-cli 236.6MB/140.9%
- agent: turn 7554ms; cold/warm 6785ms/7554ms; cold-warm delta 0ms; pre-provider 7315ms; provider 1ms; metadata scans 8 (235.14ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7515.55ms; max 7554ms; pre-provider p95 7276.35ms
- agent CLI attribution: cold known 4079ms / unattributed 2463ms; warm known 4980ms / unattributed 2335ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1747.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1401.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1588 MB, agent-process 1401.7 MB, status-cli 774.9 MB
  - command-tree peak RSS 1588 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6785ms; pre-provider 6542ms; provider 2ms; post-provider 241ms; response true
    - active window: metadata scans 4 (121.23ms total, max 63.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6542ms; provider 2ms; post-provider 241ms; unknown 3627.2ms; source agent.prepare 2561.23ms; plugins.metadata.scan 353.57ms
  - warm: total 7554ms; pre-provider 7315ms; provider 1ms; post-provider 238ms; response true
    - active window: metadata scans 4 (113.91ms total, max 60.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7315ms; provider 1ms; post-provider 238ms; unknown 4400.2ms; source agent.prepare 2561.23ms; plugins.metadata.scan 353.57ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6542 ms | 4079 ms | 2463 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-8e2a29af-kova-261025-052259-7722fe/openclaw/timeline.jsonl |
  | warm | 7315 ms | 4980 ms | 2335 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-8e2a29af-kova-261025-052259-7722fe/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2287 ms | 772 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1819 ms | 920 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1154 ms | 534 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 150 ms | 150 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 121 ms | 63 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2727 ms | 1748 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2077 ms | 600 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1409 ms | 495 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 149 ms | 149 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 114 ms | 60 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-2ab680e0-kova-261025-052259-7722fe
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1391.5 MB; tracked total 1649.1 MB; max CPU 230.9%; samples 25; roles command-tree 1577.7MB/252.9%, agent-process 1391.5MB/230.9%, status-cli 788.9MB/174.4%, agent-cli 235.9MB/143.6%
- agent: turn 7590ms; cold/warm 6776ms/7590ms; cold-warm delta 0ms; pre-provider 7352ms; provider 1ms; metadata scans 8 (228.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7549.3ms; max 7590ms; pre-provider p95 7310.9ms
- agent CLI attribution: cold known 4035ms / unattributed 2495ms; warm known 5000ms / unattributed 2352ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1734.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1391.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1577.7 MB, agent-process 1391.5 MB, status-cli 788.9 MB
  - command-tree peak RSS 1577.7 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6776ms; pre-provider 6530ms; provider 2ms; post-provider 244ms; response true
    - active window: metadata scans 4 (117.98ms total, max 65.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6530ms; provider 2ms; post-provider 244ms; unknown 3611.91ms; source agent.prepare 2566.7ms; plugins.metadata.scan 351.39ms
  - warm: total 7590ms; pre-provider 7352ms; provider 1ms; post-provider 237ms; response true
    - active window: metadata scans 4 (110.89ms total, max 56.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7352ms; provider 1ms; post-provider 237ms; unknown 4433.91ms; source agent.prepare 2566.7ms; plugins.metadata.scan 351.39ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6530 ms | 4035 ms | 2495 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-2ab680e0-kova-261025-052259-7722fe/openclaw/timeline.jsonl |
  | warm | 7352 ms | 5000 ms | 2352 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-2ab680e0-kova-261025-052259-7722fe/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2294 ms | 780 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1756 ms | 877 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1159 ms | 532 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 145 ms | 145 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 65 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2736 ms | 1734 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2111 ms | 613 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1411 ms | 492 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 148 ms | 148 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 57 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-67b331a3-kova-261025-052259-7722fe
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1372.2 MB; tracked total 1629.8 MB; max CPU 233.7%; samples 25; roles command-tree 1558.6MB/249.8%, agent-process 1372.2MB/233.7%, status-cli 792.7MB/172.8%, agent-cli 259.9MB/131.4%
- agent: turn 7511ms; cold/warm 6745ms/7511ms; cold-warm delta 0ms; pre-provider 7267ms; provider 0ms; metadata scans 8 (234.43ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7472.7ms; max 7511ms; pre-provider p95 7229.05ms
- agent CLI attribution: cold known 4027ms / unattributed 2481ms; warm known 4944ms / unattributed 2323ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1699.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1372.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1558.6 MB, agent-process 1372.2 MB, status-cli 792.7 MB
  - command-tree peak RSS 1558.6 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6745ms; pre-provider 6508ms; provider 2ms; post-provider 235ms; response true
    - active window: metadata scans 4 (119.46ms total, max 66.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6508ms; provider 2ms; post-provider 235ms; unknown 3540.14ms; source agent.prepare 2614.44ms; plugins.metadata.scan 353.42ms
  - warm: total 7511ms; pre-provider 7267ms; provider 0ms; post-provider 244ms; response true
    - active window: metadata scans 4 (114.97ms total, max 58.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7267ms; provider 0ms; post-provider 244ms; unknown 4299.14ms; source agent.prepare 2614.44ms; plugins.metadata.scan 353.42ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6508 ms | 4027 ms | 2481 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-67b331a3-kova-261025-052259-7722fe/openclaw/timeline.jsonl |
  | warm | 7267 ms | 4944 ms | 2323 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-67b331a3-kova-261025-052259-7722fe/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2260 ms | 771 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1764 ms | 876 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1147 ms | 540 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 147 ms | 147 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 66 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2656 ms | 1700 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2060 ms | 592 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1467 ms | 491 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 146 ms | 146 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 114 ms | 58 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261025-052259-7722fe-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261025-052259-7722fe-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261025-052259-7722fe-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-gateway-performance-man-005107f3-kova-261025-052259-7722fe
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-gateway-performance-man-1e8be6a8-kova-261025-052259-7722fe
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-gateway-performance-man-958fde53-kova-261025-052259-7722fe
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-8e2a29af-kova-261025-052259-7722fe
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-2ab680e0-kova-261025-052259-7722fe
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261025-052259-7722fe/kova-agent-cold-warm-message-67b331a3-kova-261025-052259-7722fe

## Target Cleanup

- Runtime: `kova-local-mvndt5bm-3ed-d6f0823b`
- Result: removed
- Duration: 513ms

