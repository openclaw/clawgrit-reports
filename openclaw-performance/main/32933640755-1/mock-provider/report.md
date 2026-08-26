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
| Run ID | `kova-260826-052119-ef3a51` |
| Generated | 2026-08-26T05:24:27.691Z |
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
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4163ms | 591.2MB | n/a | 120% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 127% | 2191ms | 1951ms | 2073ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 4163ms | 586.5 MB | 1011.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4085ms | 591.2 MB | 1004.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4181ms | 595.4 MB | 1024.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 690 MB | 2263ms | 2003ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 694.7 MB | 2191ms | 1893ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 708.2 MB | 2156ms | 1951ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 636.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 140.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 595.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 130% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 357.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 134% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 595.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 130% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 507.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 127% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 338.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 91.3% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 130.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 17.9% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 5.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-8e2a29af-kova-260826-052119-ef3a51
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 489.4 MB; tracked total 690 MB; max CPU 127%; samples 9; roles command-tree 618.5MB/138%, agent-process 489.4MB/127%, agent-cli 129.1MB/16%, mock-provider 72.2MB/4.3%
- agent: turn 2263ms; cold/warm 2263ms/2003ms; cold-warm delta 260ms; pre-provider 2142ms; provider 2ms; metadata scans 53 (697.07ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2250ms; max 2263ms; pre-provider p95 2129.2ms
- agent CLI attribution: cold known 1481ms / unattributed 661ms; warm known 1205ms / unattributed 681ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 496.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2263ms; pre-provider 2142ms; provider 2ms; post-provider 119ms; response true
    - active window: metadata scans 31 (409.94ms total, max 39.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2142ms; provider 2ms; post-provider 119ms; unknown 1111.99ms; source plugins.metadata.scan 779.67ms; agent.prepare 250.34ms
  - warm: total 2003ms; pre-provider 1886ms; provider 0ms; post-provider 117ms; response true
    - active window: metadata scans 22 (287.13ms total, max 34.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1886ms; provider 0ms; post-provider 117ms; unknown 855.99ms; source plugins.metadata.scan 779.67ms; agent.prepare 250.34ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2142 ms | 1481 ms | 661 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-8e2a29af-kova-260826-052119-ef3a51/openclaw/timeline.jsonl |
  | warm | 1886 ms | 1205 ms | 681 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-8e2a29af-kova-260826-052119-ef3a51/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x24 | 24 | 0 | 1866 ms | 495 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x9, `agent.startup` x3 | 29 | 0 | 385 ms | 40 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 222 ms | 137 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 125 ms | 32 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 58 ms | 58 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x13, `agent.startup` x2 | 15 | 0 | 16 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1250 ms | 497 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x9, `agent.startup` x3 | 20 | 0 | 269 ms | 35 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 218 ms | 134 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 124 ms | 35 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x7, `agent.startup` x2 | 9 | 0 | 9 ms | 1 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-2ab680e0-kova-260826-052119-ef3a51
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 495.1 MB; tracked total 694.7 MB; max CPU 126%; samples 9; roles command-tree 623.6MB/140.9%, agent-process 495.1MB/126%, agent-cli 128.5MB/17.9%, mock-provider 71.8MB/5.2%
- agent: turn 2191ms; cold/warm 2191ms/1893ms; cold-warm delta 298ms; pre-provider 2073ms; provider 2ms; metadata scans 53 (669.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2176.1ms; max 2191ms; pre-provider p95 2058.05ms
- agent CLI attribution: cold known 1432ms / unattributed 641ms; warm known 1151ms / unattributed 623ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 475.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2191ms; pre-provider 2073ms; provider 2ms; post-provider 116ms; response true
    - active window: metadata scans 31 (395.88ms total, max 38.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2073ms; provider 2ms; post-provider 116ms; unknown 1082.8ms; source plugins.metadata.scan 752.26ms; agent.prepare 237.94ms
  - warm: total 1893ms; pre-provider 1774ms; provider 1ms; post-provider 118ms; response true
    - active window: metadata scans 22 (273.17ms total, max 32.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1774ms; provider 1ms; post-provider 118ms; unknown 783.8ms; source plugins.metadata.scan 752.26ms; agent.prepare 237.94ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2073 ms | 1432 ms | 641 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-2ab680e0-kova-260826-052119-ef3a51/openclaw/timeline.jsonl |
  | warm | 1774 ms | 1151 ms | 623 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-2ab680e0-kova-260826-052119-ef3a51/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x25 | 25 | 0 | 1778 ms | 476 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x9, `agent.startup` x3 | 29 | 0 | 371 ms | 38 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 217 ms | 135 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 123 ms | 32 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 60 ms | 60 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x13, `agent.startup` | 14 | 0 | 14 ms | 1 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1184 ms | 474 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x9, `agent.startup` x3 | 20 | 0 | 252 ms | 32 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 211 ms | 125 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 118 ms | 33 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 56 ms | 56 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 15 ms | 15 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-67b331a3-kova-260826-052119-ef3a51
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 507.4 MB; tracked total 708.2 MB; max CPU 127%; samples 9; roles command-tree 636.5MB/138%, agent-process 507.4MB/127%, agent-cli 130.4MB/15.8%, mock-provider 72MB/5.4%
- agent: turn 2156ms; cold/warm 2156ms/1951ms; cold-warm delta 205ms; pre-provider 2036ms; provider 2ms; metadata scans 53 (676.67ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2145.75ms; max 2156ms; pre-provider p95 2025.95ms
- agent CLI attribution: cold known 1421ms / unattributed 615ms; warm known 1180ms / unattributed 655ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 495.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2156ms; pre-provider 2036ms; provider 2ms; post-provider 118ms; response true
    - active window: metadata scans 31 (388.12ms total, max 36.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2036ms; provider 2ms; post-provider 118ms; unknown 1027.66ms; source plugins.metadata.scan 756.27ms; agent.prepare 252.07ms
  - warm: total 1951ms; pre-provider 1835ms; provider 1ms; post-provider 115ms; response true
    - active window: metadata scans 22 (288.55ms total, max 34.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1835ms; provider 1ms; post-provider 115ms; unknown 826.66ms; source plugins.metadata.scan 756.27ms; agent.prepare 252.07ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2036 ms | 1421 ms | 615 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-67b331a3-kova-260826-052119-ef3a51/openclaw/timeline.jsonl |
  | warm | 1835 ms | 1180 ms | 655 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-67b331a3-kova-260826-052119-ef3a51/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x25 | 25 | 0 | 1761 ms | 475 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x9, `agent.startup` x3 | 29 | 0 | 370 ms | 37 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 213 ms | 133 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 127 ms | 32 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 55 ms | 55 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x12, `agent.startup` | 13 | 0 | 13 ms | 1 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1233 ms | 495 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x9, `agent.startup` x3 | 20 | 0 | 267 ms | 34 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 208 ms | 126 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 122 ms | 35 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 58 ms | 58 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 12 ms | 12 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260826-052119-ef3a51-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260826-052119-ef3a51-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260826-052119-ef3a51-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-gateway-performance-man-005107f3-kova-260826-052119-ef3a51
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-gateway-performance-man-1e8be6a8-kova-260826-052119-ef3a51
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-gateway-performance-man-958fde53-kova-260826-052119-ef3a51
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-8e2a29af-kova-260826-052119-ef3a51
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-2ab680e0-kova-260826-052119-ef3a51
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260826-052119-ef3a51/kova-agent-cold-warm-message-67b331a3-kova-260826-052119-ef3a51

## Target Cleanup

- Runtime: `kova-local-mt9nbwcv-412-8aab7323`
- Result: removed
- Duration: 442ms

