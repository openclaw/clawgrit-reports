# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1462.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1646.4 MB, agent-process 1462.3 MB, status-cli 748.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1462.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1646.4 MB, agent-process 1462.3 MB, status-cli 748.8 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 6 (PASS:4, FAIL:2) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261105-051802-165e9d` |
| Generated | 2026-11-05T05:46:44.408Z |
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
| PASS | 4 |
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1462.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1646.4 MB, agent-process 1462.3 MB, status-cli 748.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1462.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1646.4 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1462.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1420.6 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1604.6 MB, agent-process 1420.6 MB, status-cli 897 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1420.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1604.6 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1420.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 29ms | 1589.8MB | n/a | 245% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:2, PASS:1 | n/a | 0MB | n/a | 239.1% | 7745ms | 8250ms | 7439ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 19ms | 1584.7 MB | 2229.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 29ms | 1589.8 MB | 2252.9 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 224ms | 1624.4 MB | 2365 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1718.3 MB | 6900ms | 7949ms | agent-process peak RSS 1462.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1646.4 MB, agent-process 1462.3 MB, status-cli 748.8 MB |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1656.1 MB | 7745ms | 9209ms |  |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1676.2 MB | 8712ms | 8250ms | agent-process peak RSS 1420.6 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1604.6 MB, agent-process 1420.6 MB, status-cli 897 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1728.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 275.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1646.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 262% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1624.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 260% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1462.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 251.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 999.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.7% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 466.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 145.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 289.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 178.5% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 359.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 140.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-8e2a29af-kova-261105-051802-165e9d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1462.3 MB; tracked total 1718.3 MB; max CPU 224.1%; samples 26; roles command-tree 1646.4MB/234.2%, agent-process 1462.3MB/224.1%, status-cli 748.8MB/190.7%, agent-cli 289.7MB/142.8%
- agent: turn 7949ms; cold/warm 6900ms/7949ms; cold-warm delta 0ms; pre-provider 7667ms; provider 1ms; metadata scans 8 (285.22ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7896.55ms; max 7949ms; pre-provider p95 7614.8ms
- agent CLI attribution: cold known 4157ms / unattributed 2466ms; warm known 5420ms / unattributed 2247ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1770.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1462.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1646.4 MB, agent-process 1462.3 MB, status-cli 748.8 MB
  - command-tree peak RSS 1646.4 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6900ms; pre-provider 6623ms; provider 2ms; post-provider 275ms; response true
    - active window: metadata scans 4 (138.21ms total, max 76.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6623ms; provider 2ms; post-provider 275ms; unknown 3535.14ms; source agent.prepare 2645.86ms; plugins.metadata.scan 442ms
  - warm: total 7949ms; pre-provider 7667ms; provider 1ms; post-provider 281ms; response true
    - active window: metadata scans 4 (147.01ms total, max 83.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7667ms; provider 1ms; post-provider 281ms; unknown 4579.14ms; source agent.prepare 2645.86ms; plugins.metadata.scan 442ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6623 ms | 4157 ms | 2466 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-8e2a29af-kova-261105-051802-165e9d/openclaw/timeline.jsonl |
  | warm | 7667 ms | 5420 ms | 2247 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-8e2a29af-kova-261105-051802-165e9d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3044 ms | 1079 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1507 ms | 798 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1131 ms | 564 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 139 ms | 76 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 136 ms | 136 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2874 ms | 1081 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2572 ms | 1771 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1515 ms | 523 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 146 ms | 83 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 140 ms | 140 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-2ab680e0-kova-261105-051802-165e9d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1400 MB; tracked total 1656.1 MB; max CPU 239.1%; samples 30; roles command-tree 1584.1MB/253.1%, agent-process 1400MB/239.1%, status-cli 999.5MB/206.7%, agent-cli 206.2MB/178.5%
- agent: turn 9209ms; cold/warm 7745ms/9209ms; cold-warm delta 0ms; pre-provider 8741ms; provider 1ms; metadata scans 8 (289.29ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9135.8ms; max 9209ms; pre-provider p95 8675.9ms
- agent CLI attribution: cold known 4626ms / unattributed 2813ms; warm known 6012ms / unattributed 2729ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1878.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7745ms; pre-provider 7439ms; provider 2ms; post-provider 304ms; response true
    - active window: metadata scans 4 (136.56ms total, max 75.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7439ms; provider 2ms; post-provider 304ms; unknown 3810.88ms; source agent.prepare 3137.9ms; plugins.metadata.scan 490.22ms
  - warm: total 9209ms; pre-provider 8741ms; provider 1ms; post-provider 467ms; response true
    - active window: metadata scans 4 (152.73ms total, max 88.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8741ms; provider 1ms; post-provider 467ms; unknown 5112.88ms; source agent.prepare 3137.9ms; plugins.metadata.scan 490.22ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7439 ms | 4626 ms | 2813 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-2ab680e0-kova-261105-051802-165e9d/openclaw/timeline.jsonl |
  | warm | 8741 ms | 6012 ms | 2729 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-2ab680e0-kova-261105-051802-165e9d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3134 ms | 1149 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1765 ms | 908 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1360 ms | 642 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 138 ms | 75 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 136 ms | 136 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3103 ms | 1151 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2841 ms | 1879 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1780 ms | 633 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 153 ms | 88 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 141 ms | 141 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-67b331a3-kova-261105-051802-165e9d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1420.6 MB; tracked total 1676.2 MB; max CPU 251.7%; samples 29; roles command-tree 1604.6MB/262%, agent-process 1420.6MB/251.7%, status-cli 897MB/193.8%, agent-cli 184MB/143.2%
- agent: turn 8712ms; cold/warm 8712ms/8250ms; cold-warm delta 462ms; pre-provider 8405ms; provider 2ms; metadata scans 8 (308.4ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8688.9ms; max 8712ms; pre-provider p95 8382.45ms
- agent CLI attribution: cold known 5304ms / unattributed 3101ms; warm known 5555ms / unattributed 2399ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1783.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1420.6 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1604.6 MB, agent-process 1420.6 MB, status-cli 897 MB
  - command-tree peak RSS 1604.6 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 8712ms; pre-provider 8405ms; provider 2ms; post-provider 305ms; response true
    - active window: metadata scans 4 (163.43ms total, max 89.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8405ms; provider 2ms; post-provider 305ms; unknown 5141.24ms; source agent.prepare 2789.75ms; plugins.metadata.scan 474.01ms
  - warm: total 8250ms; pre-provider 7954ms; provider 1ms; post-provider 295ms; response true
    - active window: metadata scans 4 (144.97ms total, max 80.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7954ms; provider 1ms; post-provider 295ms; unknown 4690.24ms; source agent.prepare 2789.75ms; plugins.metadata.scan 474.01ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8405 ms | 5304 ms | 3101 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-67b331a3-kova-261105-051802-165e9d/openclaw/timeline.jsonl |
  | warm | 7954 ms | 5555 ms | 2399 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-67b331a3-kova-261105-051802-165e9d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3793 ms | 1318 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2147 ms | 1259 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1258 ms | 632 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 165 ms | 90 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 152 ms | 152 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3009 ms | 1117 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2622 ms | 1784 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1530 ms | 555 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 146 ms | 80 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 140 ms | 140 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261105-051802-165e9d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261105-051802-165e9d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261105-051802-165e9d-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-gateway-performance-man-005107f3-kova-261105-051802-165e9d
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-gateway-performance-man-1e8be6a8-kova-261105-051802-165e9d
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-gateway-performance-man-958fde53-kova-261105-051802-165e9d
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-8e2a29af-kova-261105-051802-165e9d
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-2ab680e0-kova-261105-051802-165e9d
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261105-051802-165e9d/kova-agent-cold-warm-message-67b331a3-kova-261105-051802-165e9d

## Target Cleanup

- Runtime: `kova-local-mw33h5rv-45u-4e0f3e76`
- Result: removed
- Duration: 581ms

