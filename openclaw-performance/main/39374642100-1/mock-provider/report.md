# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1921.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2140.3 MB, gateway 1921.8 MB, command-tree 965.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1921.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2140.3 MB, gateway 1921.8 MB, command-tree 965.9 MB |
| Blocking findings | 16 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261020-052506-7d5287` |
| Generated | 2026-10-20T05:48:35.248Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1921.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2140.3 MB, gateway 1921.8 MB, command-tree 965.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 17 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2140.3 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 17 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 965.9 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 17 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 521ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 17 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1835.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2053.6 MB, gateway 1835.5 MB, command-tree 680.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2053.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 493ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1896.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2117.4 MB, gateway 1896.7 MB, command-tree 898.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2117.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 517ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1591.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1775.6 MB, agent-process 1591.8 MB, status-cli 835.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1591.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1775.6 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1591.8 |
| info | Kova | report | 4 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 3ms | 1896.7MB | n/a | 257.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 233.5% | 8212ms | 8447ms | 7925ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 17ms | 1921.8 MB | 2787.1 MB | n/a | n/a | gateway peak RSS 1921.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2140.3 MB, gateway 1921.8 MB, command-tree 965.9 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1835.5 MB | 2652.4 MB | n/a | n/a | gateway peak RSS 1835.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2053.6 MB, gateway 1835.5 MB, command-tree 680.7 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 3ms | 1896.7 MB | 2727.5 MB | n/a | n/a | gateway peak RSS 1896.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2117.4 MB, gateway 1896.7 MB, command-tree 898.2 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1847.7 MB | 8212ms | 8783ms | agent-process peak RSS 1591.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1775.6 MB, agent-process 1591.8 MB, status-cli 835.2 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1906.5 MB | 8252ms | 8447ms | agent-process peak RSS 1647.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1834.2 MB, agent-process 1647.5 MB, status-cli 835.1 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2002.1 MB | 8039ms | 8415ms | agent-process peak RSS 1743.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1930 MB, agent-process 1743.3 MB, status-cli 837.3 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2140.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 274.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1930 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 262.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1921.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 259% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1743.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 249.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 965.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 176.3% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 646 MB (scenario gateway-performance/many-bundled-plugins); CPU 149.9% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 349.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 343.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-gateway-performance-man-005107f3-kova-261020-052506-7d5287
Measurements:
- startup: listening 1ms; health 17ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 16ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 160ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1921.8 MB; tracked total 2787.1 MB; max CPU 254.6%; samples 38; roles gateway-tree 2140.3MB/270.2%, gateway 1921.8MB/254.6%, command-tree 965.9MB/174%, status-cli 965.9MB/174%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1765.76ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1921.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2140.3 MB, gateway 1921.8 MB, command-tree 965.9 MB
  - gateway-tree peak RSS 2140.3 MB exceeded threshold 1440 MB
  - status-cli peak RSS 965.9 MB exceeded threshold 900 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 521ms

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-gateway-performance-man-1e8be6a8-kova-261020-052506-7d5287
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 106ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1835.5 MB; tracked total 2652.4 MB; max CPU 259%; samples 38; roles gateway-tree 2053.6MB/274.7%, gateway 1835.5MB/259%, command-tree 680.7MB/167.7%, status-cli 680.7MB/167.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1860.22ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1835.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2053.6 MB, gateway 1835.5 MB, command-tree 680.7 MB
  - gateway-tree peak RSS 2053.6 MB exceeded threshold 1440 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 493ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-gateway-performance-man-958fde53-kova-261020-052506-7d5287
Measurements:
- startup: listening 0ms; health 3ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 3ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 101ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1896.7 MB; tracked total 2727.5 MB; max CPU 257.4%; samples 39; roles gateway-tree 2117.4MB/274.8%, gateway 1896.7MB/257.4%, command-tree 898.2MB/168.8%, status-cli 898.2MB/168.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1752.55ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1896.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2117.4 MB, gateway 1896.7 MB, command-tree 898.2 MB
  - gateway-tree peak RSS 2117.4 MB exceeded threshold 1440 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 517ms

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-8e2a29af-kova-261020-052506-7d5287
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1591.8 MB; tracked total 1847.7 MB; max CPU 229.9%; samples 28; roles command-tree 1775.6MB/243.3%, agent-process 1591.8MB/229.9%, status-cli 835.2MB/176.3%, agent-cli 214.1MB/134.4%
- agent: turn 8783ms; cold/warm 8212ms/8783ms; cold-warm delta 0ms; pre-provider 8513ms; provider 1ms; metadata scans 8 (236.81ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8754.45ms; max 8783ms; pre-provider p95 8483.6ms
- agent CLI attribution: cold known 4723ms / unattributed 3202ms; warm known 5887ms / unattributed 2626ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1855.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1591.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1775.6 MB, agent-process 1591.8 MB, status-cli 835.2 MB
  - command-tree peak RSS 1775.6 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 8212ms; pre-provider 7925ms; provider 2ms; post-provider 285ms; response true
    - active window: metadata scans 4 (117.46ms total, max 63.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7925ms; provider 2ms; post-provider 285ms; unknown 3232.16ms; source agent.prepare 4328.77ms; plugins.metadata.scan 364.07ms
  - warm: total 8783ms; pre-provider 8513ms; provider 1ms; post-provider 269ms; response true
    - active window: metadata scans 4 (119.35ms total, max 70.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8513ms; provider 1ms; post-provider 269ms; unknown 3820.16ms; source agent.prepare 4328.77ms; plugins.metadata.scan 364.07ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7925 ms | 4723 ms | 3202 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-8e2a29af-kova-261020-052506-7d5287/openclaw/timeline.jsonl |
  | warm | 8513 ms | 5887 ms | 2626 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-8e2a29af-kova-261020-052506-7d5287/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1957 ms | 1015 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1949 ms | 1069 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1920 ms | 627 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 154 ms | 154 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 117 ms | 63 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2891 ms | 1856 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2381 ms | 961 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 2038 ms | 660 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 164 ms | 164 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 70 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-2ab680e0-kova-261020-052506-7d5287
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1647.5 MB; tracked total 1906.5 MB; max CPU 249.3%; samples 28; roles command-tree 1834.2MB/262.7%, agent-process 1647.5MB/249.3%, status-cli 835.1MB/167.9%, agent-cli 288.7MB/92.6%
- agent: turn 8447ms; cold/warm 8252ms/8447ms; cold-warm delta 0ms; pre-provider 8200ms; provider 1ms; metadata scans 8 (223.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8437.25ms; max 8447ms; pre-provider p95 8187.45ms
- agent CLI attribution: cold known 4670ms / unattributed 3279ms; warm known 5660ms / unattributed 2540ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1800.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1647.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1834.2 MB, agent-process 1647.5 MB, status-cli 835.1 MB
  - command-tree peak RSS 1834.2 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 8252ms; pre-provider 7949ms; provider 2ms; post-provider 301ms; response true
    - active window: metadata scans 4 (112.49ms total, max 56.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7949ms; provider 2ms; post-provider 301ms; unknown 3502.37ms; source agent.prepare 4081.83ms; plugins.metadata.scan 364.8ms
  - warm: total 8447ms; pre-provider 8200ms; provider 1ms; post-provider 246ms; response true
    - active window: metadata scans 4 (111.4ms total, max 63.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8200ms; provider 1ms; post-provider 246ms; unknown 3753.37ms; source agent.prepare 4081.83ms; plugins.metadata.scan 364.8ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7949 ms | 4670 ms | 3279 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-2ab680e0-kova-261020-052506-7d5287/openclaw/timeline.jsonl |
  | warm | 8200 ms | 5660 ms | 2540 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-2ab680e0-kova-261020-052506-7d5287/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2025 ms | 1070 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2018 ms | 657 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1777 ms | 950 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 158 ms | 158 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 56 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2772 ms | 1801 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2306 ms | 922 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1956 ms | 626 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 162 ms | 162 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 111 ms | 63 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-67b331a3-kova-261020-052506-7d5287
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1743.3 MB; tracked total 2002.1 MB; max CPU 233.5%; samples 27; roles command-tree 1930MB/247.4%, agent-process 1743.3MB/233.5%, status-cli 837.3MB/170.3%, agent-cli 186.7MB/139.7%
- agent: turn 8415ms; cold/warm 8039ms/8415ms; cold-warm delta 0ms; pre-provider 8140ms; provider 1ms; metadata scans 8 (229.92ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8396.2ms; max 8415ms; pre-provider p95 8122.3ms
- agent CLI attribution: cold known 4640ms / unattributed 3146ms; warm known 5607ms / unattributed 2533ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1777.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1743.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1930 MB, agent-process 1743.3 MB, status-cli 837.3 MB
  - command-tree peak RSS 1930 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 8039ms; pre-provider 7786ms; provider 2ms; post-provider 251ms; response true
    - active window: metadata scans 4 (119.68ms total, max 62.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7786ms; provider 2ms; post-provider 251ms; unknown 3297.86ms; source agent.prepare 4133.75ms; plugins.metadata.scan 354.39ms
  - warm: total 8415ms; pre-provider 8140ms; provider 1ms; post-provider 274ms; response true
    - active window: metadata scans 4 (110.24ms total, max 60.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8140ms; provider 1ms; post-provider 274ms; unknown 3651.86ms; source agent.prepare 4133.75ms; plugins.metadata.scan 354.39ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7786 ms | 4640 ms | 3146 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-67b331a3-kova-261020-052506-7d5287/openclaw/timeline.jsonl |
  | warm | 8140 ms | 5607 ms | 2533 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-67b331a3-kova-261020-052506-7d5287/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1983 ms | 652 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1960 ms | 1023 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1850 ms | 979 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 156 ms | 156 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 62 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2763 ms | 1778 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2285 ms | 904 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1944 ms | 631 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 155 ms | 155 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 111 ms | 60 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261020-052506-7d5287-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261020-052506-7d5287-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261020-052506-7d5287-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-gateway-performance-man-005107f3-kova-261020-052506-7d5287
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-gateway-performance-man-1e8be6a8-kova-261020-052506-7d5287
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-gateway-performance-man-958fde53-kova-261020-052506-7d5287
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-8e2a29af-kova-261020-052506-7d5287
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-2ab680e0-kova-261020-052506-7d5287
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261020-052506-7d5287/kova-agent-cold-warm-message-67b331a3-kova-261020-052506-7d5287

## Target Cleanup

- Runtime: `kova-local-mvg8om9d-3df-def62853`
- Result: removed
- Duration: 485ms

