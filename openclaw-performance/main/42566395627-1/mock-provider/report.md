# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1430.7 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1615.3 MB, agent-process 1430.7 MB, status-cli 987.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1430.7 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1615.3 MB, agent-process 1430.7 MB, status-cli 987.8 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 6 (PASS:3, FAIL:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261109-052008-f17acc` |
| Generated | 2026-11-09T05:45:52.715Z |
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
| PASS | 3 |
| FAIL | 3 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1430.7 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1615.3 MB, agent-process 1430.7 MB, status-cli 987.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1430.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1615.3 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1430.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1446.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1630.7 MB, agent-process 1446.4 MB, status-cli 929.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1446.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1630.7 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1446.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1476 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1661.2 MB, agent-process 1476 MB, status-cli 958.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1476 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1661.2 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1476 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 147ms | 1571.2MB | n/a | 212.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 217.1% | 6680ms | 7780ms | 6420ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 155ms | 1565 MB | 2487.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 106ms | 1589.7 MB | 2362.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 147ms | 1571.2 MB | 2332.2 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1686.7 MB | 6780ms | 7780ms | agent-process peak RSS 1430.7 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1615.3 MB, agent-process 1430.7 MB, status-cli 987.8 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1702.3 MB | 6680ms | 7790ms | agent-process peak RSS 1446.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1630.7 MB, agent-process 1446.4 MB, status-cli 929.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1732.5 MB | 6676ms | 7717ms | agent-process peak RSS 1476 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1661.2 MB, agent-process 1476 MB, status-cli 958.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1693.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 230.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1661.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 234.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1589.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 230.3% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1476 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 220.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 987.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 184.4% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 497.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 138.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 185.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.5% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 366.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 138% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-8e2a29af-kova-261109-052008-f17acc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1430.7 MB; tracked total 1686.7 MB; max CPU 220.5%; samples 25; roles command-tree 1615.3MB/234.7%, agent-process 1430.7MB/220.5%, status-cli 987.8MB/183%, agent-cli 184.6MB/128.6%
- agent: turn 7780ms; cold/warm 6780ms/7780ms; cold-warm delta 0ms; pre-provider 7482ms; provider 1ms; metadata scans 8 (277.07ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7730ms; max 7780ms; pre-provider p95 7433.35ms
- agent CLI attribution: cold known 4056ms / unattributed 2453ms; warm known 5229ms / unattributed 2253ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1680.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1430.7 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1615.3 MB, agent-process 1430.7 MB, status-cli 987.8 MB
  - command-tree peak RSS 1615.3 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6780ms; pre-provider 6509ms; provider 2ms; post-provider 269ms; response true
    - active window: metadata scans 4 (136.15ms total, max 74.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6509ms; provider 2ms; post-provider 269ms; unknown 3440.88ms; source agent.prepare 2641.51ms; plugins.metadata.scan 426.61ms
  - warm: total 7780ms; pre-provider 7482ms; provider 1ms; post-provider 297ms; response true
    - active window: metadata scans 4 (140.92ms total, max 79.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7482ms; provider 1ms; post-provider 297ms; unknown 4413.88ms; source agent.prepare 2641.51ms; plugins.metadata.scan 426.61ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6509 ms | 4056 ms | 2453 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-8e2a29af-kova-261109-052008-f17acc/openclaw/timeline.jsonl |
  | warm | 7482 ms | 5229 ms | 2253 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-8e2a29af-kova-261109-052008-f17acc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2832 ms | 1001 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1538 ms | 785 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1112 ms | 548 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 137 ms | 75 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 126 ms | 126 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2667 ms | 990 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2507 ms | 1680 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1527 ms | 548 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 141 ms | 80 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 127 ms | 127 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-2ab680e0-kova-261109-052008-f17acc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1446.4 MB; tracked total 1702.3 MB; max CPU 217.1%; samples 25; roles command-tree 1630.7MB/231.1%, agent-process 1446.4MB/217.1%, status-cli 929.8MB/181.8%, agent-cli 184.3MB/154.5%
- agent: turn 7790ms; cold/warm 6680ms/7790ms; cold-warm delta 0ms; pre-provider 7513ms; provider 1ms; metadata scans 8 (279.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7734.5ms; max 7790ms; pre-provider p95 7457.7ms
- agent CLI attribution: cold known 3993ms / unattributed 2414ms; warm known 5206ms / unattributed 2307ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1652.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1446.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1630.7 MB, agent-process 1446.4 MB, status-cli 929.8 MB
  - command-tree peak RSS 1630.7 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6680ms; pre-provider 6407ms; provider 2ms; post-provider 271ms; response true
    - active window: metadata scans 4 (134.48ms total, max 73.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6407ms; provider 2ms; post-provider 271ms; unknown 3391.79ms; source agent.prepare 2586.31ms; plugins.metadata.scan 428.9ms
  - warm: total 7790ms; pre-provider 7513ms; provider 1ms; post-provider 276ms; response true
    - active window: metadata scans 4 (144.88ms total, max 81.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7513ms; provider 1ms; post-provider 276ms; unknown 4497.79ms; source agent.prepare 2586.31ms; plugins.metadata.scan 428.9ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6407 ms | 3993 ms | 2414 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-2ab680e0-kova-261109-052008-f17acc/openclaw/timeline.jsonl |
  | warm | 7513 ms | 5206 ms | 2307 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-2ab680e0-kova-261109-052008-f17acc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2765 ms | 980 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1531 ms | 796 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1097 ms | 536 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 135 ms | 74 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 126 ms | 126 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2731 ms | 1014 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2473 ms | 1653 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1487 ms | 524 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 145 ms | 81 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 130 ms | 130 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-67b331a3-kova-261109-052008-f17acc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1476 MB; tracked total 1732.5 MB; max CPU 210.8%; samples 25; roles command-tree 1661.2MB/224.8%, agent-process 1476MB/210.8%, status-cli 958.7MB/184.4%, agent-cli 185.2MB/131.7%
- agent: turn 7717ms; cold/warm 6676ms/7717ms; cold-warm delta 0ms; pre-provider 7442ms; provider 1ms; metadata scans 8 (273.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7664.95ms; max 7717ms; pre-provider p95 7390.9ms
- agent CLI attribution: cold known 3992ms / unattributed 2428ms; warm known 5236ms / unattributed 2206ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1687.42ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1476 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1661.2 MB, agent-process 1476 MB, status-cli 958.7 MB
  - command-tree peak RSS 1661.2 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6676ms; pre-provider 6420ms; provider 2ms; post-provider 254ms; response true
    - active window: metadata scans 4 (134.47ms total, max 74.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6420ms; provider 2ms; post-provider 254ms; unknown 3323.99ms; source agent.prepare 2671.89ms; plugins.metadata.scan 424.12ms
  - warm: total 7717ms; pre-provider 7442ms; provider 1ms; post-provider 274ms; response true
    - active window: metadata scans 4 (138.77ms total, max 78.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7442ms; provider 1ms; post-provider 274ms; unknown 4345.99ms; source agent.prepare 2671.89ms; plugins.metadata.scan 424.12ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6420 ms | 3992 ms | 2428 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-67b331a3-kova-261109-052008-f17acc/openclaw/timeline.jsonl |
  | warm | 7442 ms | 5236 ms | 2206 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-67b331a3-kova-261109-052008-f17acc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2787 ms | 990 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1482 ms | 787 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1127 ms | 541 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 135 ms | 75 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 124 ms | 124 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2637 ms | 972 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2504 ms | 1687 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1546 ms | 563 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 139 ms | 79 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 124 ms | 124 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261109-052008-f17acc-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261109-052008-f17acc-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261109-052008-f17acc-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-gateway-performance-man-005107f3-kova-261109-052008-f17acc
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-gateway-performance-man-1e8be6a8-kova-261109-052008-f17acc
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-gateway-performance-man-958fde53-kova-261109-052008-f17acc
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-8e2a29af-kova-261109-052008-f17acc
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-2ab680e0-kova-261109-052008-f17acc
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261109-052008-f17acc/kova-agent-cold-warm-message-67b331a3-kova-261109-052008-f17acc

## Target Cleanup

- Runtime: `kova-local-mw8tb9l7-3iy-b390fa4f`
- Result: removed
- Duration: 533ms

