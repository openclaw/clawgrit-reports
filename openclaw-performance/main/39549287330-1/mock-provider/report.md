# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1944.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2163 MB, gateway 1944.7 MB, command-tree 1008.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1944.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2163 MB, gateway 1944.7 MB, command-tree 1008.9 MB |
| Blocking findings | 17 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261021-052517-7e51b2` |
| Generated | 2026-10-21T05:48:02.404Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1944.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2163 MB, gateway 1944.7 MB, command-tree 1008.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 41 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2163 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 41 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 1008.9 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 41 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1876.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2093.2 MB, gateway 1876.2 MB, command-tree 966 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2093.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 966 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 543ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1887.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2104.6 MB, gateway 1887.5 MB, command-tree 947.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2104.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 947.1 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 534ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1537.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1724.3 MB, agent-process 1537.7 MB, status-cli 1045.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1537.7 |
| info | Kova | report | 5 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4ms | 1887.5MB | n/a | 268.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 222.1% | 8140ms | 8917ms | 7811ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 41ms | 1944.7 MB | 2929.9 MB | n/a | n/a | gateway peak RSS 1944.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2163 MB, gateway 1944.7 MB, command-tree 1008.9 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4ms | 1876.2 MB | 2891 MB | n/a | n/a | gateway peak RSS 1876.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2093.2 MB, gateway 1876.2 MB, command-tree 966 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1887.5 MB | 2825.9 MB | n/a | n/a | gateway peak RSS 1887.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2104.6 MB, gateway 1887.5 MB, command-tree 947.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1796.3 MB | 8140ms | 8917ms | agent-process peak RSS 1537.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1724.3 MB, agent-process 1537.7 MB, status-cli 1045.6 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1831.7 MB | 8167ms | 8709ms | agent-process peak RSS 1573 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1759.5 MB, agent-process 1573 MB, status-cli 1109.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1884 MB | 7791ms | 9282ms | agent-process peak RSS 1625.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1811 MB, agent-process 1625.1 MB, status-cli 871.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2163 MB (scenario gateway-performance/many-bundled-plugins); CPU 287.4% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1944.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 269.6% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1811 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 245.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1625.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 228.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1109.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.1% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 643.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 141.8% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 186.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 385.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 144.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-gateway-performance-man-005107f3-kova-261021-052517-7e51b2
Measurements:
- startup: listening 0ms; health 41ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 41ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 2394ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1944.7 MB; tracked total 2929.9 MB; max CPU 269.6%; samples 38; roles gateway-tree 2163MB/287.4%, gateway 1944.7MB/269.6%, command-tree 1008.9MB/161.7%, status-cli 1008.9MB/161.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1359.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1944.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2163 MB, gateway 1944.7 MB, command-tree 1008.9 MB
  - gateway-tree peak RSS 2163 MB exceeded threshold 1440 MB
  - status-cli peak RSS 1008.9 MB exceeded threshold 900 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-gateway-performance-man-1e8be6a8-kova-261021-052517-7e51b2
Measurements:
- startup: listening 1ms; health 4ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 3ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 20ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1876.2 MB; tracked total 2891 MB; max CPU 268.4%; samples 38; roles gateway-tree 2093.2MB/286.4%, gateway 1876.2MB/268.4%, command-tree 966MB/153.9%, status-cli 966MB/153.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1488.34ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1876.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2093.2 MB, gateway 1876.2 MB, command-tree 966 MB
  - gateway-tree peak RSS 2093.2 MB exceeded threshold 1440 MB
  - status-cli peak RSS 966 MB exceeded threshold 900 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 543ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-gateway-performance-man-958fde53-kova-261021-052517-7e51b2
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 43ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1887.5 MB; tracked total 2825.9 MB; max CPU 259.1%; samples 40; roles gateway-tree 2104.6MB/274%, gateway 1887.5MB/259.1%, command-tree 947.1MB/163.1%, status-cli 947.1MB/163.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1822.15ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1887.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2104.6 MB, gateway 1887.5 MB, command-tree 947.1 MB
  - gateway-tree peak RSS 2104.6 MB exceeded threshold 1440 MB
  - status-cli peak RSS 947.1 MB exceeded threshold 900 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 534ms

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-8e2a29af-kova-261021-052517-7e51b2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1537.7 MB; tracked total 1796.3 MB; max CPU 222.1%; samples 29; roles command-tree 1724.3MB/245.4%, agent-process 1537.7MB/222.1%, status-cli 1045.6MB/170.7%, agent-cli 186.6MB/166.9%
- agent: turn 8917ms; cold/warm 8140ms/8917ms; cold-warm delta 0ms; pre-provider 8672ms; provider 1ms; metadata scans 8 (230.15ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8878.15ms; max 8917ms; pre-provider p95 8628.95ms
- agent CLI attribution: cold known 5033ms / unattributed 2778ms; warm known 6209ms / unattributed 2463ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1989.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1537.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1724.3 MB, agent-process 1537.7 MB, status-cli 1045.6 MB
  - command-tree peak RSS 1724.3 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 8140ms; pre-provider 7811ms; provider 2ms; post-provider 327ms; response true
    - active window: metadata scans 4 (106.6ms total, max 59.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7811ms; provider 2ms; post-provider 327ms; unknown 3066.42ms; source agent.prepare 4390.71ms; plugins.metadata.scan 353.87ms
  - warm: total 8917ms; pre-provider 8672ms; provider 1ms; post-provider 244ms; response true
    - active window: metadata scans 4 (123.55ms total, max 64.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8672ms; provider 1ms; post-provider 244ms; unknown 3927.42ms; source agent.prepare 4390.71ms; plugins.metadata.scan 353.87ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7811 ms | 5033 ms | 2778 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-8e2a29af-kova-261021-052517-7e51b2/openclaw/timeline.jsonl |
  | warm | 8672 ms | 6209 ms | 2463 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-8e2a29af-kova-261021-052517-7e51b2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2169 ms | 766 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2081 ms | 1100 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2057 ms | 1032 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 168 ms | 168 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 106 ms | 59 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3225 ms | 1990 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2335 ms | 969 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2109 ms | 695 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 184 ms | 184 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 123 ms | 65 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-2ab680e0-kova-261021-052517-7e51b2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1573 MB; tracked total 1831.7 MB; max CPU 228.9%; samples 29; roles command-tree 1759.5MB/242.2%, agent-process 1573MB/228.9%, status-cli 1109.8MB/173.1%, agent-cli 186.5MB/157.6%
- agent: turn 8709ms; cold/warm 8167ms/8709ms; cold-warm delta 0ms; pre-provider 8442ms; provider 1ms; metadata scans 8 (242.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8681.9ms; max 8709ms; pre-provider p95 8412.05ms
- agent CLI attribution: cold known 4972ms / unattributed 2871ms; warm known 6007ms / unattributed 2435ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1841.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1573 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1759.5 MB, agent-process 1573 MB, status-cli 1109.8 MB
  - command-tree peak RSS 1759.5 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 8167ms; pre-provider 7843ms; provider 2ms; post-provider 322ms; response true
    - active window: metadata scans 4 (109.74ms total, max 61.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7843ms; provider 2ms; post-provider 322ms; unknown 3220.04ms; source agent.prepare 4239.41ms; plugins.metadata.scan 383.55ms
  - warm: total 8709ms; pre-provider 8442ms; provider 1ms; post-provider 266ms; response true
    - active window: metadata scans 4 (133.15ms total, max 74.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8442ms; provider 1ms; post-provider 266ms; unknown 3819.04ms; source agent.prepare 4239.41ms; plugins.metadata.scan 383.55ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7843 ms | 4972 ms | 2871 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-2ab680e0-kova-261021-052517-7e51b2/openclaw/timeline.jsonl |
  | warm | 8442 ms | 6007 ms | 2435 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-2ab680e0-kova-261021-052517-7e51b2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2313 ms | 795 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2078 ms | 1073 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1892 ms | 982 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 159 ms | 159 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 110 ms | 62 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2938 ms | 1841 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2348 ms | 956 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2174 ms | 713 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 183 ms | 183 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 132 ms | 74 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-67b331a3-kova-261021-052517-7e51b2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1625.1 MB; tracked total 1884 MB; max CPU 215.9%; samples 29; roles command-tree 1811MB/228.1%, agent-process 1625.1MB/215.9%, status-cli 871.8MB/170.6%, agent-cli 185.9MB/137.1%
- agent: turn 9282ms; cold/warm 7791ms/9282ms; cold-warm delta 0ms; pre-provider 8957ms; provider 1ms; metadata scans 8 (261.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9207.45ms; max 9282ms; pre-provider p95 8884.2ms
- agent CLI attribution: cold known 4836ms / unattributed 2665ms; warm known 6457ms / unattributed 2500ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2012.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1625.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1811 MB, agent-process 1625.1 MB, status-cli 871.8 MB
  - command-tree peak RSS 1811 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7791ms; pre-provider 7501ms; provider 2ms; post-provider 288ms; response true
    - active window: metadata scans 4 (121.41ms total, max 65.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7501ms; provider 2ms; post-provider 288ms; unknown 2627.79ms; source agent.prepare 4481.25ms; plugins.metadata.scan 391.96ms
  - warm: total 9282ms; pre-provider 8957ms; provider 1ms; post-provider 324ms; response true
    - active window: metadata scans 4 (140.35ms total, max 81.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8957ms; provider 1ms; post-provider 324ms; unknown 4083.79ms; source agent.prepare 4481.25ms; plugins.metadata.scan 391.96ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7501 ms | 4836 ms | 2665 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-67b331a3-kova-261021-052517-7e51b2/openclaw/timeline.jsonl |
  | warm | 8957 ms | 6457 ms | 2500 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-67b331a3-kova-261021-052517-7e51b2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2233 ms | 770 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1942 ms | 1018 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1926 ms | 1013 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 166 ms | 166 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 121 ms | 66 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3228 ms | 2013 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2541 ms | 1127 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2212 ms | 727 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 177 ms | 177 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 140 ms | 81 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261021-052517-7e51b2-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261021-052517-7e51b2-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261021-052517-7e51b2-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-gateway-performance-man-005107f3-kova-261021-052517-7e51b2
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-gateway-performance-man-1e8be6a8-kova-261021-052517-7e51b2
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-gateway-performance-man-958fde53-kova-261021-052517-7e51b2
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-8e2a29af-kova-261021-052517-7e51b2
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-2ab680e0-kova-261021-052517-7e51b2
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261021-052517-7e51b2/kova-agent-cold-warm-message-67b331a3-kova-261021-052517-7e51b2

## Target Cleanup

- Runtime: `kova-local-mvho4oxt-3eg-fc6b6cbe`
- Result: removed
- Duration: 516ms

