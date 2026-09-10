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
| Run ID | `kova-260910-052335-463581` |
| Generated | 2026-09-10T05:26:26.060Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 7ms | 626.2MB | n/a | 153.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154% | 2138ms | 2287ms | 1988ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 11ms | 623.4 MB | 1062.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 7ms | 626.9 MB | 1066.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3ms | 626.2 MB | 1054.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 707.9 MB | 1958ms | 2172ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 688.1 MB | 2138ms | 2471ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 699.4 MB | 2160ms | 2287ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 634.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 626.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 164.7% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 626.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 164.7% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 81.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 554 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 461 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 136.3% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 143.1% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 77.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 65.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-8e2a29af-kova-260910-052335-463581
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 554 MB; tracked total 707.9 MB; max CPU 155.4%; samples 10; roles command-tree 634.6MB/155.4%, agent-cli 81MB/155.4%, agent-process 554MB/155.4%, status-cli 299.6MB/132.3%
- agent: turn 2172ms; cold/warm 1958ms/2172ms; cold-warm delta 0ms; pre-provider 2083ms; provider 1ms; metadata scans 7 (298.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2161.3ms; max 2172ms; pre-provider p95 2071.2ms
- agent CLI attribution: cold known 1277ms / unattributed 570ms; warm known 1247ms / unattributed 836ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 499.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1958ms; pre-provider 1847ms; provider 3ms; post-provider 108ms; response true
    - active window: metadata scans 5 (157.13ms total, max 59.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1847ms; provider 3ms; post-provider 108ms; unknown 1152.55ms; source plugins.metadata.scan 435.91ms; agent.prepare 258.54ms
  - warm: total 2172ms; pre-provider 2083ms; provider 1ms; post-provider 88ms; response true
    - active window: metadata scans 2 (141.65ms total, max 125.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2083ms; provider 1ms; post-provider 88ms; unknown 1388.55ms; source plugins.metadata.scan 435.91ms; agent.prepare 258.54ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1847 ms | 1277 ms | 570 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-8e2a29af-kova-260910-052335-463581/openclaw/timeline.jsonl |
  | warm | 2083 ms | 1247 ms | 836 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-8e2a29af-kova-260910-052335-463581/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 1650 ms | 444 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 167 ms | 72 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 156 ms | 60 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 128 ms | 28 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 70 ms | 70 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 1239 ms | 499 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 169 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 140 ms | 125 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 129 ms | 28 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 67 ms | 67 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-2ab680e0-kova-260910-052335-463581
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 535.1 MB; tracked total 688.1 MB; max CPU 151.3%; samples 11; roles command-tree 615.6MB/151.3%, agent-process 535.1MB/151.3%, status-cli 431.9MB/136.3%, agent-cli 81.4MB/134.7%
- agent: turn 2471ms; cold/warm 2138ms/2471ms; cold-warm delta 0ms; pre-provider 2350ms; provider 1ms; metadata scans 7 (343.25ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2454.35ms; max 2471ms; pre-provider p95 2331.95ms
- agent CLI attribution: cold known 1380ms / unattributed 609ms; warm known 1440ms / unattributed 910ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 590.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2138ms; pre-provider 1989ms; provider 3ms; post-provider 146ms; response true
    - active window: metadata scans 5 (170.09ms total, max 69.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1989ms; provider 3ms; post-provider 146ms; unknown 1212.9ms; source plugins.metadata.scan 471.82ms; agent.prepare 304.28ms
  - warm: total 2471ms; pre-provider 2350ms; provider 1ms; post-provider 120ms; response true
    - active window: metadata scans 2 (173.16ms total, max 157.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2350ms; provider 1ms; post-provider 120ms; unknown 1573.9ms; source plugins.metadata.scan 471.82ms; agent.prepare 304.28ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1989 ms | 1380 ms | 609 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-2ab680e0-kova-260910-052335-463581/openclaw/timeline.jsonl |
  | warm | 2350 ms | 1440 ms | 910 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-2ab680e0-kova-260910-052335-463581/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 1698 ms | 460 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 198 ms | 93 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 170 ms | 70 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 151 ms | 30 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 80 ms | 80 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1465 ms | 590 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 184 ms | 75 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 173 ms | 157 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 149 ms | 35 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 69 ms | 69 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-67b331a3-kova-260910-052335-463581
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 546 MB; tracked total 699.4 MB; max CPU 154%; samples 11; roles command-tree 626.5MB/154%, agent-cli 80.8MB/154%, agent-process 546MB/154%, status-cli 461MB/135%
- agent: turn 2287ms; cold/warm 2160ms/2287ms; cold-warm delta 0ms; pre-provider 2190ms; provider 1ms; metadata scans 7 (330.08ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2280.65ms; max 2287ms; pre-provider p95 2179.9ms
- agent CLI attribution: cold known 1356ms / unattributed 632ms; warm known 1339ms / unattributed 851ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 537.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2160ms; pre-provider 1988ms; provider 3ms; post-provider 169ms; response true
    - active window: metadata scans 5 (168.47ms total, max 65.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1988ms; provider 3ms; post-provider 169ms; unknown 1245.82ms; source plugins.metadata.scan 460.31ms; agent.prepare 281.87ms
  - warm: total 2287ms; pre-provider 2190ms; provider 1ms; post-provider 96ms; response true
    - active window: metadata scans 2 (161.61ms total, max 145.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2190ms; provider 1ms; post-provider 96ms; unknown 1447.82ms; source plugins.metadata.scan 460.31ms; agent.prepare 281.87ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1988 ms | 1356 ms | 632 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-67b331a3-kova-260910-052335-463581/openclaw/timeline.jsonl |
  | warm | 2190 ms | 1339 ms | 851 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-67b331a3-kova-260910-052335-463581/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 1738 ms | 473 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 179 ms | 77 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 168 ms | 66 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 136 ms | 30 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 72 ms | 72 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1327 ms | 538 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 172 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 161 ms | 145 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 144 ms | 35 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 71 ms | 71 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260910-052335-463581-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260910-052335-463581-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260910-052335-463581-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-gateway-performance-man-005107f3-kova-260910-052335-463581
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-gateway-performance-man-1e8be6a8-kova-260910-052335-463581
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-gateway-performance-man-958fde53-kova-260910-052335-463581
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-8e2a29af-kova-260910-052335-463581
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-2ab680e0-kova-260910-052335-463581
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260910-052335-463581/kova-agent-cold-warm-message-67b331a3-kova-260910-052335-463581

## Target Cleanup

- Runtime: `kova-local-mtv30l7d-410-55580263`
- Result: removed
- Duration: 534ms

