# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 6 (PASS:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260914-052828-3d5441` |
| Generated | 2026-09-14T05:31:32.097Z |
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
| PASS | 6 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 122ms | 979.6MB | n/a | 146.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 164.7% | 2361ms | 2526ms | 2244ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 149ms | 979.6 MB | 1478.8 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 115ms | 992.2 MB | 1393.9 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 122ms | 959.7 MB | 1388.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 755.3 MB | 2410ms | 2526ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 779.9 MB | 2319ms | 2553ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 774.9 MB | 2361ms | 2447ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 992.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 164.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 82.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 992.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 164.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 626 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.5% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 708.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 483.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.5% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 122.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 43.9% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 136.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-8e2a29af-kova-260914-052828-3d5441
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 602.1 MB; tracked total 755.3 MB; max CPU 153.4%; samples 11; roles command-tree 684.2MB/163.4%, agent-process 602.1MB/153.4%, status-cli 475.2MB/153.5%, agent-cli 82.3MB/117.4%
- agent: turn 2526ms; cold/warm 2410ms/2526ms; cold-warm delta 0ms; pre-provider 2430ms; provider 1ms; metadata scans 8 (305.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2520.2ms; max 2526ms; pre-provider p95 2423.6ms
- agent CLI attribution: cold known 1708ms / unattributed 594ms; warm known 1649ms / unattributed 781ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 803.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2410ms; pre-provider 2302ms; provider 2ms; post-provider 106ms; response true
    - active window: metadata scans 6 (179.27ms total, max 53.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2302ms; provider 2ms; post-provider 106ms; unknown 1613.55ms; source plugins.metadata.scan 407.75ms; agent.prepare 280.7ms
  - warm: total 2526ms; pre-provider 2430ms; provider 1ms; post-provider 95ms; response true
    - active window: metadata scans 2 (126.09ms total, max 110.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2430ms; provider 1ms; post-provider 95ms; unknown 1741.55ms; source plugins.metadata.scan 407.75ms; agent.prepare 280.7ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2302 ms | 1708 ms | 594 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-8e2a29af-kova-260914-052828-3d5441/openclaw/timeline.jsonl |
  | warm | 2430 ms | 1649 ms | 781 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-8e2a29af-kova-260914-052828-3d5441/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 2380 ms | 803 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 347 ms | 132 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 183 ms | 53 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 141 ms | 34 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1767 ms | 455 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 424 ms | 198 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 140 ms | 28 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 125 ms | 110 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-2ab680e0-kova-260914-052828-3d5441
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 626 MB; tracked total 779.9 MB; max CPU 182.5%; samples 11; roles command-tree 708.5MB/182.5%, agent-cli 82.5MB/182.5%, agent-process 626MB/182.5%, status-cli 477.9MB/151.6%
- agent: turn 2553ms; cold/warm 2319ms/2553ms; cold-warm delta 0ms; pre-provider 2459ms; provider 1ms; metadata scans 8 (295.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2541.3ms; max 2553ms; pre-provider p95 2446.25ms
- agent CLI attribution: cold known 1623ms / unattributed 581ms; warm known 1672ms / unattributed 787ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 778.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2319ms; pre-provider 2204ms; provider 2ms; post-provider 113ms; response true
    - active window: metadata scans 6 (165.36ms total, max 49.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2204ms; provider 2ms; post-provider 113ms; unknown 1544.6ms; source plugins.metadata.scan 392.49ms; agent.prepare 266.91ms
  - warm: total 2553ms; pre-provider 2459ms; provider 1ms; post-provider 93ms; response true
    - active window: metadata scans 2 (130.05ms total, max 112.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2459ms; provider 1ms; post-provider 93ms; unknown 1799.6ms; source plugins.metadata.scan 392.49ms; agent.prepare 266.91ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2204 ms | 1623 ms | 581 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-2ab680e0-kova-260914-052828-3d5441/openclaw/timeline.jsonl |
  | warm | 2459 ms | 1672 ms | 787 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-2ab680e0-kova-260914-052828-3d5441/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 2296 ms | 779 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 316 ms | 132 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 164 ms | 49 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 137 ms | 30 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1828 ms | 478 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 423 ms | 204 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 131 ms | 27 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 131 ms | 113 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-67b331a3-kova-260914-052828-3d5441
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 621.7 MB; tracked total 774.9 MB; max CPU 164.7%; samples 11; roles command-tree 703.8MB/164.7%, agent-cli 82.2MB/164.7%, agent-process 621.7MB/164.7%, status-cli 483.4MB/148.5%
- agent: turn 2447ms; cold/warm 2361ms/2447ms; cold-warm delta 0ms; pre-provider 2336ms; provider 1ms; metadata scans 8 (293.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2442.7ms; max 2447ms; pre-provider p95 2331.4ms
- agent CLI attribution: cold known 1669ms / unattributed 575ms; warm known 1582ms / unattributed 754ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 812.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2361ms; pre-provider 2244ms; provider 2ms; post-provider 115ms; response true
    - active window: metadata scans 6 (165.92ms total, max 48.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2244ms; provider 2ms; post-provider 115ms; unknown 1570.31ms; source plugins.metadata.scan 404.32ms; agent.prepare 269.37ms
  - warm: total 2447ms; pre-provider 2336ms; provider 1ms; post-provider 110ms; response true
    - active window: metadata scans 2 (127.58ms total, max 111.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2336ms; provider 1ms; post-provider 110ms; unknown 1662.31ms; source plugins.metadata.scan 404.32ms; agent.prepare 269.37ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2244 ms | 1669 ms | 575 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-67b331a3-kova-260914-052828-3d5441/openclaw/timeline.jsonl |
  | warm | 2336 ms | 1582 ms | 754 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-67b331a3-kova-260914-052828-3d5441/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 2379 ms | 813 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 317 ms | 131 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 167 ms | 49 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 141 ms | 28 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1719 ms | 451 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 388 ms | 185 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 132 ms | 28 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 127 ms | 111 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260914-052828-3d5441-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260914-052828-3d5441-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260914-052828-3d5441-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-gateway-performance-man-005107f3-kova-260914-052828-3d5441
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-gateway-performance-man-1e8be6a8-kova-260914-052828-3d5441
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-gateway-performance-man-958fde53-kova-260914-052828-3d5441
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-8e2a29af-kova-260914-052828-3d5441
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-2ab680e0-kova-260914-052828-3d5441
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260914-052828-3d5441/kova-agent-cold-warm-message-67b331a3-kova-260914-052828-3d5441

## Target Cleanup

- Runtime: `kova-local-mu0sy9o1-424-0bda6e7c`
- Result: removed
- Duration: 457ms

