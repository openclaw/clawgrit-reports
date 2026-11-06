# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1502 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1686.3 MB, agent-process 1502 MB, status-cli 899.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1502 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1686.3 MB, agent-process 1502 MB, status-cli 899.3 MB |
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
| Run ID | `kova-261106-051745-2ec27d` |
| Generated | 2026-11-06T05:44:51.904Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1502 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1686.3 MB, agent-process 1502 MB, status-cli 899.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1502 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1686.3 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1502 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1495.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1679.2 MB, agent-process 1495.1 MB, status-cli 826.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1495.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1679.2 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1495.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1523.9 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1708.1 MB, agent-process 1523.9 MB, status-cli 910.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1523.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1708.1 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1523.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 36ms | 1589.4MB | n/a | 248.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 230.3% | 6898ms | 7942ms | 6607ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 36ms | 1624.3 MB | 2272.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 1588.5 MB | 2249.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 218ms | 1589.4 MB | 2252.3 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1758.2 MB | 6822ms | 7789ms | agent-process peak RSS 1502 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1686.3 MB, agent-process 1502 MB, status-cli 899.3 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1750.7 MB | 6898ms | 7963ms | agent-process peak RSS 1495.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1679.2 MB, agent-process 1495.1 MB, status-cli 826.5 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1779.9 MB | 7079ms | 7942ms | agent-process peak RSS 1523.9 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1708.1 MB, agent-process 1523.9 MB, status-cli 910.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1728.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 295.1% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1708.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 248.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1624.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 280.2% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1523.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 238.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 910.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190.3% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 538.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 141.8% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 299.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 363.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 140.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-8e2a29af-kova-261106-051745-2ec27d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1502 MB; tracked total 1758.2 MB; max CPU 230.3%; samples 25; roles command-tree 1686.3MB/244.4%, agent-process 1502MB/230.3%, status-cli 899.3MB/186.8%, agent-cli 299.4MB/142%
- agent: turn 7789ms; cold/warm 6822ms/7789ms; cold-warm delta 0ms; pre-provider 7490ms; provider 1ms; metadata scans 8 (291.9ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7740.65ms; max 7789ms; pre-provider p95 7443.5ms
- agent CLI attribution: cold known 4147ms / unattributed 2413ms; warm known 5265ms / unattributed 2225ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1695.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1502 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1686.3 MB, agent-process 1502 MB, status-cli 899.3 MB
  - command-tree peak RSS 1686.3 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6822ms; pre-provider 6560ms; provider 2ms; post-provider 260ms; response true
    - active window: metadata scans 4 (143.56ms total, max 78.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6560ms; provider 2ms; post-provider 260ms; unknown 3569.13ms; source agent.prepare 2545.84ms; plugins.metadata.scan 445.03ms
  - warm: total 7789ms; pre-provider 7490ms; provider 1ms; post-provider 298ms; response true
    - active window: metadata scans 4 (148.34ms total, max 82.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7490ms; provider 1ms; post-provider 298ms; unknown 4499.13ms; source agent.prepare 2545.84ms; plugins.metadata.scan 445.03ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6560 ms | 4147 ms | 2413 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-8e2a29af-kova-261106-051745-2ec27d/openclaw/timeline.jsonl |
  | warm | 7490 ms | 5265 ms | 2225 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-8e2a29af-kova-261106-051745-2ec27d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 3043 ms | 1097 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1512 ms | 825 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1097 ms | 558 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 144 ms | 78 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 134 ms | 134 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2858 ms | 1067 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2483 ms | 1695 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1448 ms | 515 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 148 ms | 83 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 126 ms | 126 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-2ab680e0-kova-261106-051745-2ec27d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1495.1 MB; tracked total 1750.7 MB; max CPU 228.9%; samples 26; roles command-tree 1679.2MB/242.8%, agent-process 1495.1MB/228.9%, status-cli 826.5MB/190.3%, agent-cli 293.2MB/165.8%
- agent: turn 7963ms; cold/warm 6898ms/7963ms; cold-warm delta 0ms; pre-provider 7657ms; provider 1ms; metadata scans 8 (295.96ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7909.75ms; max 7963ms; pre-provider p95 7604.5ms
- agent CLI attribution: cold known 4137ms / unattributed 2470ms; warm known 5344ms / unattributed 2313ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1669.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1495.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1679.2 MB, agent-process 1495.1 MB, status-cli 826.5 MB
  - command-tree peak RSS 1679.2 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6898ms; pre-provider 6607ms; provider 2ms; post-provider 289ms; response true
    - active window: metadata scans 4 (147.79ms total, max 82.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6607ms; provider 2ms; post-provider 289ms; unknown 3521.96ms; source agent.prepare 2628.97ms; plugins.metadata.scan 456.07ms
  - warm: total 7963ms; pre-provider 7657ms; provider 1ms; post-provider 305ms; response true
    - active window: metadata scans 4 (148.17ms total, max 84.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7657ms; provider 1ms; post-provider 305ms; unknown 4571.96ms; source agent.prepare 2628.97ms; plugins.metadata.scan 456.07ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6607 ms | 4137 ms | 2470 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-2ab680e0-kova-261106-051745-2ec27d/openclaw/timeline.jsonl |
  | warm | 7657 ms | 5344 ms | 2313 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-2ab680e0-kova-261106-051745-2ec27d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3002 ms | 1079 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1512 ms | 819 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1116 ms | 552 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 148 ms | 83 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 137 ms | 137 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2858 ms | 1078 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2504 ms | 1670 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1513 ms | 549 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 150 ms | 85 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 134 ms | 134 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-67b331a3-kova-261106-051745-2ec27d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1523.9 MB; tracked total 1779.9 MB; max CPU 238.5%; samples 25; roles command-tree 1708.1MB/248.6%, agent-process 1523.9MB/238.5%, status-cli 910.5MB/186.6%, agent-cli 293.8MB/163%
- agent: turn 7942ms; cold/warm 7079ms/7942ms; cold-warm delta 0ms; pre-provider 7651ms; provider 1ms; metadata scans 8 (290.22ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7898.85ms; max 7942ms; pre-provider p95 7607.2ms
- agent CLI attribution: cold known 4254ms / unattributed 2521ms; warm known 5340ms / unattributed 2311ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1736.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1523.9 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1708.1 MB, agent-process 1523.9 MB, status-cli 910.5 MB
  - command-tree peak RSS 1708.1 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 7079ms; pre-provider 6775ms; provider 2ms; post-provider 302ms; response true
    - active window: metadata scans 4 (143.08ms total, max 76.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6775ms; provider 2ms; post-provider 302ms; unknown 3661.67ms; source agent.prepare 2670.63ms; plugins.metadata.scan 442.7ms
  - warm: total 7942ms; pre-provider 7651ms; provider 1ms; post-provider 290ms; response true
    - active window: metadata scans 4 (147.14ms total, max 83.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7651ms; provider 1ms; post-provider 290ms; unknown 4537.67ms; source agent.prepare 2670.63ms; plugins.metadata.scan 442.7ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6775 ms | 4254 ms | 2521 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-67b331a3-kova-261106-051745-2ec27d/openclaw/timeline.jsonl |
  | warm | 7651 ms | 5340 ms | 2311 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-67b331a3-kova-261106-051745-2ec27d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3119 ms | 1095 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1543 ms | 819 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1152 ms | 581 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 144 ms | 77 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 135 ms | 135 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2832 ms | 1058 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2526 ms | 1737 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1516 ms | 542 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 147 ms | 83 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 129 ms | 129 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261106-051745-2ec27d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261106-051745-2ec27d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261106-051745-2ec27d-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-gateway-performance-man-005107f3-kova-261106-051745-2ec27d
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-gateway-performance-man-1e8be6a8-kova-261106-051745-2ec27d
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-gateway-performance-man-958fde53-kova-261106-051745-2ec27d
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-8e2a29af-kova-261106-051745-2ec27d
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-2ab680e0-kova-261106-051745-2ec27d
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261106-051745-2ec27d/kova-agent-cold-warm-message-67b331a3-kova-261106-051745-2ec27d

## Target Cleanup

- Runtime: `kova-local-mw4iwn1k-48f-38721a5e`
- Result: removed
- Duration: 567ms

