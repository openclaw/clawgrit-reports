# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1423 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1682.1 MB, agent-process 1423 MB, status-cli 1060.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1423 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1682.1 MB, agent-process 1423 MB, status-cli 1060.5 MB |
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
| Run ID | `kova-261031-051610-8d65bf` |
| Generated | 2026-10-31T05:39:42.303Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1423 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1682.1 MB, agent-process 1423 MB, status-cli 1060.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1423 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1682.1 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1423 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1464.8 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1742.9 MB, agent-process 1464.8 MB, status-cli 1075.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1464.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1742.9 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1464.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1537.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1718.6 MB, agent-process 1537.1 MB, status-cli 1057.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1537.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1718.6 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1537.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 41ms | 1550.4MB | n/a | 209.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 198.4% | 6342ms | 7047ms | 6082ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 41ms | 1505.9 MB | 2383.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 22ms | 1550.4 MB | 2601.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 171ms | 1556.3 MB | 2407.2 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1753.4 MB | 6342ms | 7019ms | agent-process peak RSS 1423 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1682.1 MB, agent-process 1423 MB, status-cli 1060.5 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1815.1 MB | 7623ms | 7251ms | agent-process peak RSS 1464.8 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1742.9 MB, agent-process 1464.8 MB, status-cli 1075.9 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1790.3 MB | 6220ms | 7047ms | agent-process peak RSS 1537.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1718.6 MB, agent-process 1537.1 MB, status-cli 1057.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1752.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 228.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1742.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 236% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1556.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 215.4% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1537.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 217.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1075.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.4% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 641.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 142.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 347.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.1% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 361.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 137.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-8e2a29af-kova-261031-051610-8d65bf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1423 MB; tracked total 1753.4 MB; max CPU 187.6%; samples 24; roles command-tree 1682.1MB/206.7%, agent-process 1423MB/187.6%, status-cli 1060.5MB/180.8%, agent-cli 347.2MB/155.1%
- agent: turn 7019ms; cold/warm 6342ms/7019ms; cold-warm delta 0ms; pre-provider 6750ms; provider 1ms; metadata scans 8 (234.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6985.15ms; max 7019ms; pre-provider p95 6716.6ms
- agent CLI attribution: cold known 3879ms / unattributed 2203ms; warm known 4744ms / unattributed 2006ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1596.44ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1423 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1682.1 MB, agent-process 1423 MB, status-cli 1060.5 MB
  - command-tree peak RSS 1682.1 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6342ms; pre-provider 6082ms; provider 2ms; post-provider 258ms; response true
    - active window: metadata scans 4 (120.83ms total, max 66.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6082ms; provider 2ms; post-provider 258ms; unknown 3227ms; source agent.prepare 2482.2ms; plugins.metadata.scan 372.8ms
  - warm: total 7019ms; pre-provider 6750ms; provider 1ms; post-provider 268ms; response true
    - active window: metadata scans 4 (113.87ms total, max 61.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6750ms; provider 1ms; post-provider 268ms; unknown 3895ms; source agent.prepare 2482.2ms; plugins.metadata.scan 372.8ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6082 ms | 3879 ms | 2203 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-8e2a29af-kova-261031-051610-8d65bf/openclaw/timeline.jsonl |
  | warm | 6750 ms | 4744 ms | 2006 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-8e2a29af-kova-261031-051610-8d65bf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2655 ms | 911 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1532 ms | 814 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1030 ms | 495 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 67 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 118 ms | 118 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2444 ms | 1596 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2055 ms | 754 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1452 ms | 503 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 61 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-2ab680e0-kova-261031-051610-8d65bf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1464.8 MB; tracked total 1815.1 MB; max CPU 217.9%; samples 26; roles command-tree 1742.9MB/236%, agent-process 1464.8MB/217.9%, status-cli 1075.9MB/193.4%, agent-cli 278.1MB/128.4%
- agent: turn 7623ms; cold/warm 7623ms/7251ms; cold-warm delta 372ms; pre-provider 7351ms; provider 3ms; metadata scans 8 (268.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7604.4ms; max 7623ms; pre-provider p95 7332.85ms
- agent CLI attribution: cold known 4679ms / unattributed 2672ms; warm known 4837ms / unattributed 2151ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1619.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1464.8 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1742.9 MB, agent-process 1464.8 MB, status-cli 1075.9 MB
  - command-tree peak RSS 1742.9 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 7623ms; pre-provider 7351ms; provider 3ms; post-provider 269ms; response true
    - active window: metadata scans 4 (134.94ms total, max 71.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7351ms; provider 3ms; post-provider 269ms; unknown 4205.69ms; source agent.prepare 2737.13ms; plugins.metadata.scan 408.18ms
  - warm: total 7251ms; pre-provider 6988ms; provider 1ms; post-provider 262ms; response true
    - active window: metadata scans 4 (133.59ms total, max 75.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6988ms; provider 1ms; post-provider 262ms; unknown 3842.69ms; source agent.prepare 2737.13ms; plugins.metadata.scan 408.18ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7351 ms | 4679 ms | 2672 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-2ab680e0-kova-261031-051610-8d65bf/openclaw/timeline.jsonl |
  | warm | 6988 ms | 4837 ms | 2151 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-2ab680e0-kova-261031-051610-8d65bf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3090 ms | 1070 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1837 ms | 959 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1355 ms | 643 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 137 ms | 72 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 132 ms | 132 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2431 ms | 1619 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2255 ms | 822 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1385 ms | 501 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 135 ms | 135 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 133 ms | 76 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-67b331a3-kova-261031-051610-8d65bf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1537.1 MB; tracked total 1790.3 MB; max CPU 198.4%; samples 24; roles command-tree 1718.6MB/217.3%, agent-process 1537.1MB/198.4%, status-cli 1057.2MB/179.6%, agent-cli 343.6MB/152.9%
- agent: turn 7047ms; cold/warm 6220ms/7047ms; cold-warm delta 0ms; pre-provider 6790ms; provider 1ms; metadata scans 8 (234.13ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7005.65ms; max 7047ms; pre-provider p95 6748.05ms
- agent CLI attribution: cold known 3774ms / unattributed 2177ms; warm known 4760ms / unattributed 2030ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1647.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1537.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1718.6 MB, agent-process 1537.1 MB, status-cli 1057.2 MB
  - command-tree peak RSS 1718.6 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6220ms; pre-provider 5951ms; provider 1ms; post-provider 268ms; response true
    - active window: metadata scans 4 (116.49ms total, max 64.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5951ms; provider 1ms; post-provider 268ms; unknown 3142.26ms; source agent.prepare 2444.34ms; plugins.metadata.scan 364.4ms
  - warm: total 7047ms; pre-provider 6790ms; provider 1ms; post-provider 256ms; response true
    - active window: metadata scans 4 (117.64ms total, max 62.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6790ms; provider 1ms; post-provider 256ms; unknown 3981.26ms; source agent.prepare 2444.34ms; plugins.metadata.scan 364.4ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5951 ms | 3774 ms | 2177 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-67b331a3-kova-261031-051610-8d65bf/openclaw/timeline.jsonl |
  | warm | 6790 ms | 4760 ms | 2030 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-67b331a3-kova-261031-051610-8d65bf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2442 ms | 851 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1560 ms | 807 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 994 ms | 484 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 117 ms | 65 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 112 ms | 112 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2478 ms | 1648 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2036 ms | 738 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1451 ms | 472 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 117 ms | 63 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 114 ms | 114 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261031-051610-8d65bf-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261031-051610-8d65bf-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261031-051610-8d65bf-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-gateway-performance-man-005107f3-kova-261031-051610-8d65bf
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-gateway-performance-man-1e8be6a8-kova-261031-051610-8d65bf
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-gateway-performance-man-958fde53-kova-261031-051610-8d65bf
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-8e2a29af-kova-261031-051610-8d65bf
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-2ab680e0-kova-261031-051610-8d65bf
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261031-051610-8d65bf/kova-agent-cold-warm-message-67b331a3-kova-261031-051610-8d65bf

## Target Cleanup

- Runtime: `kova-local-mvvy7hne-3ez-67963141`
- Result: removed
- Duration: 520ms

