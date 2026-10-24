# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1827.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2046.2 MB, gateway 1827.3 MB, command-tree 948.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1827.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2046.2 MB, gateway 1827.3 MB, command-tree 948.7 MB |
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
| Run ID | `kova-261024-052340-15be96` |
| Generated | 2026-10-24T05:45:36.945Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1827.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2046.2 MB, gateway 1827.3 MB, command-tree 948.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 67 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2046.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 67 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 948.7 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 67 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 509ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 67 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1857.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2071.1 MB, gateway 1857.2 MB, command-tree 641.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 240 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2071.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 240 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1864.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2079.4 MB, gateway 1864.7 MB, command-tree 645.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 262 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2079.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 262 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 506ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 262 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1424.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1610.9 MB, agent-process 1424.9 MB, status-cli 928.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1424.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1610.9 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1424.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1422.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1608.4 MB, agent-process 1422.6 MB, status-cli 928.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1422.6 |
| info | Kova | report | 3 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 240ms | 1857.2MB | n/a | 263.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 205.4% | 6380ms | 6922ms | 6143ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 67ms | 1827.3 MB | 2792.2 MB | n/a | n/a | gateway peak RSS 1827.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2046.2 MB, gateway 1827.3 MB, command-tree 948.7 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 240ms | 1857.2 MB | 2670.2 MB | n/a | n/a | gateway peak RSS 1857.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2071.1 MB, gateway 1857.2 MB, command-tree 641.4 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 262ms | 1864.7 MB | 2702 MB | n/a | n/a | gateway peak RSS 1864.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2079.4 MB, gateway 1864.7 MB, command-tree 645.8 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1681.8 MB | 6380ms | 6922ms | agent-process peak RSS 1424.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1610.9 MB, agent-process 1424.9 MB, status-cli 928.5 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1680 MB | 6348ms | 6950ms | agent-process peak RSS 1422.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1608.4 MB, agent-process 1422.6 MB, status-cli 928.1 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1681.7 MB | 6396ms | 6897ms | agent-process peak RSS 1424 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1610.3 MB, agent-process 1424 MB, status-cli 926.3 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2079.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 289.9% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1864.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 269.1% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1610.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 225.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1424.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 210.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 948.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 626.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 135.3% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 262.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 384.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 138.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-gateway-performance-man-005107f3-kova-261024-052340-15be96
Measurements:
- startup: listening 1ms; health 67ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 66ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 96ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1827.3 MB; tracked total 2792.2 MB; max CPU 255.8%; samples 36; roles gateway-tree 2046.2MB/280.6%, gateway 1827.3MB/255.8%, command-tree 948.7MB/156.9%, status-cli 948.7MB/156.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.channels 1777.08ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1827.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2046.2 MB, gateway 1827.3 MB, command-tree 948.7 MB
  - gateway-tree peak RSS 2046.2 MB exceeded threshold 1440 MB
  - status-cli peak RSS 948.7 MB exceeded threshold 900 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 509ms

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-gateway-performance-man-1e8be6a8-kova-261024-052340-15be96
Measurements:
- startup: listening 0ms; health 240ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 240ms; post-ready p95 1ms; failures 0; final failures 0; slowest startup-sample/cold-start 240ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1857.2 MB; tracked total 2670.2 MB; max CPU 269.1%; samples 36; roles gateway-tree 2071.1MB/289.9%, gateway 1857.2MB/269.1%, command-tree 641.4MB/152.5%, status-cli 641.4MB/152.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.channels 1680.53ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1857.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2071.1 MB, gateway 1857.2 MB, command-tree 641.4 MB
  - gateway-tree peak RSS 2071.1 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-gateway-performance-man-958fde53-kova-261024-052340-15be96
Measurements:
- startup: listening 0ms; health 262ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 262ms; post-ready p95 1ms; failures 0; final failures 0; slowest startup-sample/cold-start 262ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1864.7 MB; tracked total 2702 MB; max CPU 263.1%; samples 35; roles gateway-tree 2079.4MB/281%, gateway 1864.7MB/263.1%, command-tree 645.8MB/158.6%, status-cli 645.8MB/158.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.channels 1425.88ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1864.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2079.4 MB, gateway 1864.7 MB, command-tree 645.8 MB
  - gateway-tree peak RSS 2079.4 MB exceeded threshold 1440 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 506ms

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-8e2a29af-kova-261024-052340-15be96
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1424.9 MB; tracked total 1681.8 MB; max CPU 205.2%; samples 24; roles command-tree 1610.9MB/218.9%, agent-process 1424.9MB/205.2%, status-cli 928.5MB/177.1%, agent-cli 259.6MB/152.9%
- agent: turn 6922ms; cold/warm 6380ms/6922ms; cold-warm delta 0ms; pre-provider 6680ms; provider 1ms; metadata scans 8 (220.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6894.9ms; max 6922ms; pre-provider p95 6653.15ms
- agent CLI attribution: cold known 3880ms / unattributed 2263ms; warm known 4635ms / unattributed 2045ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1537.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1424.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1610.9 MB, agent-process 1424.9 MB, status-cli 928.5 MB
  - command-tree peak RSS 1610.9 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6380ms; pre-provider 6143ms; provider 2ms; post-provider 235ms; response true
    - active window: metadata scans 4 (108.47ms total, max 57.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6143ms; provider 2ms; post-provider 235ms; unknown 3297.69ms; source agent.prepare 2493.53ms; plugins.metadata.scan 351.78ms
  - warm: total 6922ms; pre-provider 6680ms; provider 1ms; post-provider 241ms; response true
    - active window: metadata scans 4 (112.24ms total, max 58.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6680ms; provider 1ms; post-provider 241ms; unknown 3834.69ms; source agent.prepare 2493.53ms; plugins.metadata.scan 351.78ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6143 ms | 3880 ms | 2263 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-8e2a29af-kova-261024-052340-15be96/openclaw/timeline.jsonl |
  | warm | 6680 ms | 4635 ms | 2045 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-8e2a29af-kova-261024-052340-15be96/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2111 ms | 741 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1736 ms | 873 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1098 ms | 471 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 179 ms | 179 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 109 ms | 57 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2512 ms | 1537 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1879 ms | 613 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1397 ms | 439 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 182 ms | 182 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 59 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-2ab680e0-kova-261024-052340-15be96
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1422.6 MB; tracked total 1680 MB; max CPU 205.4%; samples 24; roles command-tree 1608.4MB/218.8%, agent-process 1422.6MB/205.4%, status-cli 928.1MB/180.3%, agent-cli 255.5MB/140.2%
- agent: turn 6950ms; cold/warm 6348ms/6950ms; cold-warm delta 0ms; pre-provider 6714ms; provider 1ms; metadata scans 8 (237.42ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6919.9ms; max 6950ms; pre-provider p95 6683.7ms
- agent CLI attribution: cold known 3851ms / unattributed 2257ms; warm known 4685ms / unattributed 2029ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1545.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1422.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1608.4 MB, agent-process 1422.6 MB, status-cli 928.1 MB
  - command-tree peak RSS 1608.4 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6348ms; pre-provider 6108ms; provider 2ms; post-provider 238ms; response true
    - active window: metadata scans 4 (114.15ms total, max 57.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6108ms; provider 2ms; post-provider 238ms; unknown 3218.31ms; source agent.prepare 2520.63ms; plugins.metadata.scan 369.06ms
  - warm: total 6950ms; pre-provider 6714ms; provider 1ms; post-provider 235ms; response true
    - active window: metadata scans 4 (123.27ms total, max 64.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6714ms; provider 1ms; post-provider 235ms; unknown 3824.31ms; source agent.prepare 2520.63ms; plugins.metadata.scan 369.06ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6108 ms | 3851 ms | 2257 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-2ab680e0-kova-261024-052340-15be96/openclaw/timeline.jsonl |
  | warm | 6714 ms | 4685 ms | 2029 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-2ab680e0-kova-261024-052340-15be96/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2119 ms | 745 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1715 ms | 848 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1087 ms | 466 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 173 ms | 173 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 58 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2510 ms | 1546 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1899 ms | 615 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1434 ms | 442 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 175 ms | 175 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 123 ms | 64 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-67b331a3-kova-261024-052340-15be96
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1424 MB; tracked total 1681.7 MB; max CPU 210.7%; samples 24; roles command-tree 1610.3MB/225.2%, agent-process 1424MB/210.7%, status-cli 926.3MB/174.5%, agent-cli 262.1MB/141%
- agent: turn 6897ms; cold/warm 6396ms/6897ms; cold-warm delta 0ms; pre-provider 6652ms; provider 1ms; metadata scans 8 (229.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6871.95ms; max 6897ms; pre-provider p95 6626.95ms
- agent CLI attribution: cold known 3893ms / unattributed 2258ms; warm known 4613ms / unattributed 2039ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1515.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1424 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1610.3 MB, agent-process 1424 MB, status-cli 926.3 MB
  - command-tree peak RSS 1610.3 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6396ms; pre-provider 6151ms; provider 2ms; post-provider 243ms; response true
    - active window: metadata scans 4 (111.27ms total, max 58.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6151ms; provider 2ms; post-provider 243ms; unknown 3318.76ms; source agent.prepare 2470.86ms; plugins.metadata.scan 361.38ms
  - warm: total 6897ms; pre-provider 6652ms; provider 1ms; post-provider 244ms; response true
    - active window: metadata scans 4 (118.7ms total, max 60.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6652ms; provider 1ms; post-provider 244ms; unknown 3819.76ms; source agent.prepare 2470.86ms; plugins.metadata.scan 361.38ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6151 ms | 3893 ms | 2258 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-67b331a3-kova-261024-052340-15be96/openclaw/timeline.jsonl |
  | warm | 6652 ms | 4613 ms | 2039 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-67b331a3-kova-261024-052340-15be96/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2131 ms | 748 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1750 ms | 867 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1090 ms | 474 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 179 ms | 179 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 111 ms | 58 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2459 ms | 1515 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1917 ms | 629 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1381 ms | 448 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 174 ms | 174 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 60 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261024-052340-15be96-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261024-052340-15be96-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261024-052340-15be96-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-gateway-performance-man-005107f3-kova-261024-052340-15be96
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-gateway-performance-man-1e8be6a8-kova-261024-052340-15be96
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-gateway-performance-man-958fde53-kova-261024-052340-15be96
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-8e2a29af-kova-261024-052340-15be96
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-2ab680e0-kova-261024-052340-15be96
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261024-052340-15be96/kova-agent-cold-warm-message-67b331a3-kova-261024-052340-15be96

## Target Cleanup

- Runtime: `kova-local-mvlye63c-3f6-44cfd616`
- Result: removed
- Duration: 532ms

