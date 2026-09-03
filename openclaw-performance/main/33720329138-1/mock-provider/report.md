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
| Run ID | `kova-260903-054900-71f283` |
| Generated | 2026-09-03T05:51:45.328Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4ms | 594.6MB | n/a | 138% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 142% | 2020ms | 1935ms | 1865ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 12ms | 605.4 MB | 682.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4ms | 594.6 MB | 1026.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 592.6 MB | 1027.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 720.7 MB | 2138ms | 1935ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 572.9 MB | 2020ms | 1940ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 594.6 MB | 1996ms | 1823ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 647.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 605.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 520.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 605.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 363.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 139% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 131.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 20.5% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 75.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 6.5% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 6.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-8e2a29af-kova-260903-054900-71f283
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 520.5 MB; tracked total 720.7 MB; max CPU 144%; samples 9; roles command-tree 647.7MB/164.5%, agent-process 520.5MB/144%, agent-cli 130MB/20.5%, mock-provider 75.4MB/5.4%
- agent: turn 2138ms; cold/warm 2138ms/1935ms; cold-warm delta 203ms; pre-provider 1970ms; provider 3ms; metadata scans 8 (210.65ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2127.85ms; max 2138ms; pre-provider p95 1960.35ms
- agent CLI attribution: cold known 1346ms / unattributed 624ms; warm known 1095ms / unattributed 682ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 496.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2138ms; pre-provider 1970ms; provider 3ms; post-provider 165ms; response true
    - active window: metadata scans 6 (153.38ms total, max 47.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1970ms; provider 3ms; post-provider 165ms; unknown 1318.83ms; source plugins.metadata.scan 342.22ms; agent.prepare 308.95ms
  - warm: total 1935ms; pre-provider 1777ms; provider 1ms; post-provider 157ms; response true
    - active window: metadata scans 2 (57.27ms total, max 42.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1777ms; provider 1ms; post-provider 157ms; unknown 1125.83ms; source plugins.metadata.scan 342.22ms; agent.prepare 308.95ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1970 ms | 1346 ms | 624 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-8e2a29af-kova-260903-054900-71f283/openclaw/timeline.jsonl |
  | warm | 1777 ms | 1095 ms | 682 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-8e2a29af-kova-260903-054900-71f283/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x25 | 25 | 0 | 1727 ms | 496 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 179 ms | 83 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 165 ms | 46 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 155 ms | 48 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 74 ms | 74 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 1116 ms | 461 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 179 ms | 72 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 143 ms | 37 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 72 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 57 ms | 42 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-2ab680e0-kova-260903-054900-71f283
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 367.9 MB; tracked total 572.9 MB; max CPU 142%; samples 8; roles command-tree 499.7MB/160.8%, agent-process 367.9MB/142%, agent-cli 131.8MB/18.8%, mock-provider 75.3MB/6.5%
- agent: turn 2020ms; cold/warm 2020ms/1940ms; cold-warm delta 80ms; pre-provider 1865ms; provider 4ms; metadata scans 8 (216.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2016ms; max 2020ms; pre-provider p95 1860ms
- agent CLI attribution: cold known 1275ms / unattributed 590ms; warm known 1116ms / unattributed 649ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 476.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2020ms; pre-provider 1865ms; provider 4ms; post-provider 151ms; response true
    - active window: metadata scans 6 (158.82ms total, max 44.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1865ms; provider 4ms; post-provider 151ms; unknown 1232.57ms; source plugins.metadata.scan 339.59ms; agent.prepare 292.84ms
  - warm: total 1940ms; pre-provider 1765ms; provider 1ms; post-provider 174ms; response true
    - active window: metadata scans 2 (57.94ms total, max 42.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1765ms; provider 1ms; post-provider 174ms; unknown 1132.57ms; source plugins.metadata.scan 339.59ms; agent.prepare 292.84ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1865 ms | 1275 ms | 590 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-2ab680e0-kova-260903-054900-71f283/openclaw/timeline.jsonl |
  | warm | 1765 ms | 1116 ms | 649 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-2ab680e0-kova-260903-054900-71f283/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 1636 ms | 456 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 164 ms | 78 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 158 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 155 ms | 45 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 77 ms | 77 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1146 ms | 477 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 183 ms | 74 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 140 ms | 36 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 78 ms | 78 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 59 ms | 43 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-67b331a3-kova-260903-054900-71f283
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 391.5 MB; tracked total 594.6 MB; max CPU 142%; samples 8; roles command-tree 521.5MB/161.6%, agent-process 391.5MB/142%, agent-cli 130.9MB/19.6%, mock-provider 75.1MB/5.7%
- agent: turn 1996ms; cold/warm 1996ms/1823ms; cold-warm delta 173ms; pre-provider 1841ms; provider 2ms; metadata scans 8 (210.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1987.35ms; max 1996ms; pre-provider p95 1832.75ms
- agent CLI attribution: cold known 1246ms / unattributed 595ms; warm known 1037ms / unattributed 639ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 434.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1996ms; pre-provider 1841ms; provider 2ms; post-provider 153ms; response true
    - active window: metadata scans 6 (144.9ms total, max 44.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1841ms; provider 2ms; post-provider 153ms; unknown 1206.51ms; source plugins.metadata.scan 340.12ms; agent.prepare 294.37ms
  - warm: total 1823ms; pre-provider 1676ms; provider 1ms; post-provider 146ms; response true
    - active window: metadata scans 2 (65.6ms total, max 51.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1676ms; provider 1ms; post-provider 146ms; unknown 1041.51ms; source plugins.metadata.scan 340.12ms; agent.prepare 294.37ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1841 ms | 1246 ms | 595 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-67b331a3-kova-260903-054900-71f283/openclaw/timeline.jsonl |
  | warm | 1676 ms | 1037 ms | 639 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-67b331a3-kova-260903-054900-71f283/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1545 ms | 434 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 172 ms | 82 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 160 ms | 47 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 145 ms | 45 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 73 ms | 73 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1045 ms | 426 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 151 ms | 62 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 135 ms | 36 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 72 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 66 ms | 51 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260903-054900-71f283-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260903-054900-71f283-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260903-054900-71f283-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-gateway-performance-man-005107f3-kova-260903-054900-71f283
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-gateway-performance-man-1e8be6a8-kova-260903-054900-71f283
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-gateway-performance-man-958fde53-kova-260903-054900-71f283
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-8e2a29af-kova-260903-054900-71f283
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-2ab680e0-kova-260903-054900-71f283
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260903-054900-71f283/kova-agent-cold-warm-message-67b331a3-kova-260903-054900-71f283

## Target Cleanup

- Runtime: `kova-local-mtl3uaqo-42z-84a42589`
- Result: removed
- Duration: 474ms

