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
| Run ID | `kova-260907-052519-5e9bfd` |
| Generated | 2026-09-07T05:27:57.857Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 7ms | 608.9MB | n/a | 134% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 140% | 1928ms | 1834ms | 1832ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 18ms | 608.9 MB | 1048.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 7ms | 608.9 MB | 1057.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3ms | 609.6 MB | 1051.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 740.2 MB | 2394ms | 1956ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 595.1 MB | 1928ms | 1834ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 626.2 MB | 1906ms | 1654ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 669.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 275.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 609.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 143% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 552.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 275.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 609.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 143% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 548.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 122.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 17.7% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 75.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 5.4% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 6.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-8e2a29af-kova-260907-052519-5e9bfd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 548.1 MB; tracked total 740.2 MB; max CPU 144%; samples 10; roles command-tree 669.2MB/275.9%, status-cli 552.5MB/275.9%, agent-process 548.1MB/144%, agent-cli 122.1MB/17.7%
- agent: turn 2394ms; cold/warm 2394ms/1956ms; cold-warm delta 438ms; pre-provider 2245ms; provider 3ms; metadata scans 7 (271.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2372.1ms; max 2394ms; pre-provider p95 2225.95ms
- agent CLI attribution: cold known 1585ms / unattributed 660ms; warm known 1167ms / unattributed 697ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 601.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2394ms; pre-provider 2245ms; provider 3ms; post-provider 146ms; response true
    - active window: metadata scans 5 (195.49ms total, max 59.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2245ms; provider 3ms; post-provider 146ms; unknown 1543.95ms; source plugins.metadata.scan 405.31ms; agent.prepare 295.74ms
  - warm: total 1956ms; pre-provider 1864ms; provider 1ms; post-provider 91ms; response true
    - active window: metadata scans 2 (76.48ms total, max 60.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1864ms; provider 1ms; post-provider 91ms; unknown 1162.95ms; source plugins.metadata.scan 405.31ms; agent.prepare 295.74ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2245 ms | 1585 ms | 660 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-8e2a29af-kova-260907-052519-5e9bfd/openclaw/timeline.jsonl |
  | warm | 1864 ms | 1167 ms | 697 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-8e2a29af-kova-260907-052519-5e9bfd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 2175 ms | 601 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 200 ms | 83 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 195 ms | 60 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 160 ms | 36 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 72 ms | 72 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1244 ms | 550 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 193 ms | 73 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 138 ms | 30 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 77 ms | 61 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 74 ms | 74 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-2ab680e0-kova-260907-052519-5e9bfd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 399.7 MB; tracked total 595.1 MB; max CPU 139%; samples 9; roles command-tree 522.2MB/155%, status-cli 484.2MB/133%, agent-process 399.7MB/139%, agent-cli 122.5MB/16%
- agent: turn 1928ms; cold/warm 1928ms/1834ms; cold-warm delta 94ms; pre-provider 1832ms; provider 3ms; metadata scans 7 (229.77ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1923.3ms; max 1928ms; pre-provider p95 1827.85ms
- agent CLI attribution: cold known 1251ms / unattributed 581ms; warm known 1076ms / unattributed 673ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 509.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1928ms; pre-provider 1832ms; provider 3ms; post-provider 93ms; response true
    - active window: metadata scans 5 (156.24ms total, max 54.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1832ms; provider 3ms; post-provider 93ms; unknown 1223.44ms; source plugins.metadata.scan 352.53ms; agent.prepare 256.03ms
  - warm: total 1834ms; pre-provider 1749ms; provider 1ms; post-provider 84ms; response true
    - active window: metadata scans 2 (73.53ms total, max 58.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1749ms; provider 1ms; post-provider 84ms; unknown 1140.44ms; source plugins.metadata.scan 352.53ms; agent.prepare 256.03ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1832 ms | 1251 ms | 581 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-2ab680e0-kova-260907-052519-5e9bfd/openclaw/timeline.jsonl |
  | warm | 1749 ms | 1076 ms | 673 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-2ab680e0-kova-260907-052519-5e9bfd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 1633 ms | 457 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 156 ms | 70 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 156 ms | 55 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 137 ms | 29 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1154 ms | 509 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 177 ms | 68 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 119 ms | 27 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 74 ms | 59 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 67 ms | 67 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-67b331a3-kova-260907-052519-5e9bfd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 431 MB; tracked total 626.2 MB; max CPU 140%; samples 9; roles command-tree 553.6MB/155%, agent-process 431MB/140%, agent-cli 122.6MB/15.2%, mock-provider 75.4MB/5.4%
- agent: turn 1906ms; cold/warm 1906ms/1654ms; cold-warm delta 252ms; pre-provider 1815ms; provider 3ms; metadata scans 7 (218.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1893.4ms; max 1906ms; pre-provider p95 1803.1ms
- agent CLI attribution: cold known 1268ms / unattributed 547ms; warm known 990ms / unattributed 587ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 468.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1906ms; pre-provider 1815ms; provider 3ms; post-provider 88ms; response true
    - active window: metadata scans 5 (152.91ms total, max 59.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1815ms; provider 3ms; post-provider 88ms; unknown 1245.15ms; source plugins.metadata.scan 331.68ms; agent.prepare 238.17ms
  - warm: total 1654ms; pre-provider 1577ms; provider 1ms; post-provider 76ms; response true
    - active window: metadata scans 2 (65.79ms total, max 51.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1577ms; provider 1ms; post-provider 76ms; unknown 1007.15ms; source plugins.metadata.scan 331.68ms; agent.prepare 238.17ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1815 ms | 1268 ms | 547 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-67b331a3-kova-260907-052519-5e9bfd/openclaw/timeline.jsonl |
  | warm | 1577 ms | 990 ms | 587 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-67b331a3-kova-260907-052519-5e9bfd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x24 | 24 | 0 | 1608 ms | 428 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 191 ms | 82 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 154 ms | 59 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 128 ms | 28 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1063 ms | 469 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 158 ms | 60 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 114 ms | 25 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 66 ms | 52 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260907-052519-5e9bfd-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260907-052519-5e9bfd-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260907-052519-5e9bfd-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-gateway-performance-man-005107f3-kova-260907-052519-5e9bfd
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-gateway-performance-man-1e8be6a8-kova-260907-052519-5e9bfd
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-gateway-performance-man-958fde53-kova-260907-052519-5e9bfd
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-8e2a29af-kova-260907-052519-5e9bfd
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-2ab680e0-kova-260907-052519-5e9bfd
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260907-052519-5e9bfd/kova-agent-cold-warm-message-67b331a3-kova-260907-052519-5e9bfd

## Target Cleanup

- Runtime: `kova-local-mtqsr9gv-406-5928322f`
- Result: removed
- Duration: 453ms

