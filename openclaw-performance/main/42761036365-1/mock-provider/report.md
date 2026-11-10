# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1447.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1628.8 MB, agent-process 1447.3 MB, status-cli 792.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1447.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1628.8 MB, agent-process 1447.3 MB, status-cli 792.8 MB |
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
| Run ID | `kova-261110-051804-00dd7f` |
| Generated | 2026-11-10T05:48:27.240Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1447.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1628.8 MB, agent-process 1447.3 MB, status-cli 792.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1447.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1628.8 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1447.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1472 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1653.1 MB, agent-process 1472 MB, status-cli 736 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1472 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1653.1 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1472 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 29ms | 1507.2MB | n/a | 212% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:1, FAIL:2 | n/a | 0MB | n/a | 212.4% | 7860ms | 8705ms | 7547ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 34ms | 1559.3 MB | 2280.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3ms | 1507.2 MB | 2177.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 29ms | 1479.3 MB | 2229.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1651.8 MB | 7886ms | 8705ms |  |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1700.6 MB | 7860ms | 8424ms | agent-process peak RSS 1447.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1628.8 MB, agent-process 1447.3 MB, status-cli 792.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1725 MB | 7598ms | 9196ms | agent-process peak RSS 1472 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1653.1 MB, agent-process 1472 MB, status-cli 736 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1659.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 239.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1653.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 237.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1559.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 220.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1472 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 223% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 944.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 460.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 173.1% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 315.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 142.6% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 295.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-8e2a29af-kova-261110-051804-00dd7f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1399.4 MB; tracked total 1651.8 MB; max CPU 223%; samples 28; roles command-tree 1580.3MB/237.2%, agent-process 1399.4MB/223%, status-cli 944.2MB/193.2%, agent-cli 295.9MB/144.3%
- agent: turn 8705ms; cold/warm 7886ms/8705ms; cold-warm delta 0ms; pre-provider 8402ms; provider 1ms; metadata scans 8 (309.6ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8664.05ms; max 8705ms; pre-provider p95 8360.5ms
- agent CLI attribution: cold known 4588ms / unattributed 2984ms; warm known 5787ms / unattributed 2615ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1874.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7886ms; pre-provider 7572ms; provider 3ms; post-provider 311ms; response true
    - active window: metadata scans 4 (161ms total, max 87.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7572ms; provider 3ms; post-provider 311ms; unknown 3761.01ms; source agent.prepare 3330.32ms; plugins.metadata.scan 480.67ms
  - warm: total 8705ms; pre-provider 8402ms; provider 1ms; post-provider 302ms; response true
    - active window: metadata scans 4 (148.6ms total, max 82.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8402ms; provider 1ms; post-provider 302ms; unknown 4591.01ms; source agent.prepare 3330.32ms; plugins.metadata.scan 480.67ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7572 ms | 4588 ms | 2984 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-8e2a29af-kova-261110-051804-00dd7f/openclaw/timeline.jsonl |
  | warm | 8402 ms | 5787 ms | 2615 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-8e2a29af-kova-261110-051804-00dd7f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3353 ms | 1199 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1522 ms | 642 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1483 ms | 829 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 160 ms | 88 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 137 ms | 137 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3024 ms | 1109 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2615 ms | 1787 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1810 ms | 564 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 149 ms | 83 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 147 ms | 147 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-2ab680e0-kova-261110-051804-00dd7f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1447.3 MB; tracked total 1700.6 MB; max CPU 200.7%; samples 28; roles command-tree 1628.8MB/210.9%, agent-process 1447.3MB/200.7%, status-cli 792.8MB/182.7%, agent-cli 263.7MB/129.8%
- agent: turn 8424ms; cold/warm 7860ms/8424ms; cold-warm delta 0ms; pre-provider 8114ms; provider 1ms; metadata scans 8 (313.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8395.8ms; max 8424ms; pre-provider p95 8085.65ms
- agent CLI attribution: cold known 4680ms / unattributed 2867ms; warm known 5596ms / unattributed 2518ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1620.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1447.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1628.8 MB, agent-process 1447.3 MB, status-cli 792.8 MB
  - command-tree peak RSS 1628.8 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 7860ms; pre-provider 7547ms; provider 3ms; post-provider 310ms; response true
    - active window: metadata scans 4 (162.14ms total, max 86.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7547ms; provider 3ms; post-provider 310ms; unknown 3628.3ms; source agent.prepare 3442.69ms; plugins.metadata.scan 476.01ms
  - warm: total 8424ms; pre-provider 8114ms; provider 1ms; post-provider 309ms; response true
    - active window: metadata scans 4 (151.56ms total, max 80.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8114ms; provider 1ms; post-provider 309ms; unknown 4195.3ms; source agent.prepare 3442.69ms; plugins.metadata.scan 476.01ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7547 ms | 4680 ms | 2867 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-2ab680e0-kova-261110-051804-00dd7f/openclaw/timeline.jsonl |
  | warm | 8114 ms | 5596 ms | 2518 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-2ab680e0-kova-261110-051804-00dd7f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3431 ms | 1193 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1521 ms | 872 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1516 ms | 675 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 161 ms | 86 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 143 ms | 143 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3003 ms | 1120 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2365 ms | 1620 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1928 ms | 619 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 153 ms | 81 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 140 ms | 140 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-67b331a3-kova-261110-051804-00dd7f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1472 MB; tracked total 1725 MB; max CPU 212.4%; samples 29; roles command-tree 1653.1MB/222.6%, agent-process 1472MB/212.4%, status-cli 736MB/188.1%, agent-cli 181.1MB/114.8%
- agent: turn 9196ms; cold/warm 7598ms/9196ms; cold-warm delta 0ms; pre-provider 8843ms; provider 1ms; metadata scans 8 (347.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9116.1ms; max 9196ms; pre-provider p95 8764.8ms
- agent CLI attribution: cold known 4389ms / unattributed 2890ms; warm known 6211ms / unattributed 2632ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1938.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1472 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1653.1 MB, agent-process 1472 MB, status-cli 736 MB
  - command-tree peak RSS 1653.1 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 7598ms; pre-provider 7279ms; provider 3ms; post-provider 316ms; response true
    - active window: metadata scans 4 (173.38ms total, max 105.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7279ms; provider 3ms; post-provider 316ms; unknown 3446.67ms; source agent.prepare 3322.04ms; plugins.metadata.scan 510.29ms
  - warm: total 9196ms; pre-provider 8843ms; provider 1ms; post-provider 352ms; response true
    - active window: metadata scans 4 (173.8ms total, max 106.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8843ms; provider 1ms; post-provider 352ms; unknown 5010.67ms; source agent.prepare 3322.04ms; plugins.metadata.scan 510.29ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7279 ms | 4389 ms | 2890 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-67b331a3-kova-261110-051804-00dd7f/openclaw/timeline.jsonl |
  | warm | 8843 ms | 6211 ms | 2632 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-67b331a3-kova-261110-051804-00dd7f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3153 ms | 1115 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1450 ms | 789 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1352 ms | 593 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 173 ms | 105 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 156 ms | 156 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3150 ms | 1184 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2873 ms | 1939 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1969 ms | 613 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 175 ms | 106 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 144 ms | 144 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261110-051804-00dd7f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261110-051804-00dd7f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261110-051804-00dd7f-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-gateway-performance-man-005107f3-kova-261110-051804-00dd7f
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-gateway-performance-man-1e8be6a8-kova-261110-051804-00dd7f
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-gateway-performance-man-958fde53-kova-261110-051804-00dd7f
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-8e2a29af-kova-261110-051804-00dd7f
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-2ab680e0-kova-261110-051804-00dd7f
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261110-051804-00dd7f/kova-agent-cold-warm-message-67b331a3-kova-261110-051804-00dd7f

## Target Cleanup

- Runtime: `kova-local-mwa8ogeo-3lh-46b5709d`
- Result: removed
- Duration: 647ms

