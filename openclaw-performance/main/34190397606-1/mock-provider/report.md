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
| Run ID | `kova-260908-052441-7237f0` |
| Generated | 2026-09-08T05:27:18.578Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 8ms | 612.1MB | n/a | 140% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 165.9% | 1888ms | 1936ms | 1776ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 8ms | 615.2 MB | 1050.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 11ms | 610.7 MB | 1056.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 612.1 MB | 1051.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 555.7 MB | 1896ms | 1924ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 560.2 MB | 1888ms | 1936ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 574.3 MB | 1765ms | 1937ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 615.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 157.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 503 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 439.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 615.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 157.3% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 446.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 439.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 82.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 420.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.3% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 75.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 1.5% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 143.6% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-8e2a29af-kova-260908-052441-7237f0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 402.3 MB; tracked total 555.7 MB; max CPU 169.3%; samples 9; roles command-tree 484.3MB/439.2%, agent-process 402.3MB/169.3%, status-cli 380.8MB/439.2%, agent-cli 82MB/169.3%
- agent: turn 1924ms; cold/warm 1896ms/1924ms; cold-warm delta 0ms; pre-provider 1840ms; provider 1ms; metadata scans 7 (276.66ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1922.6ms; max 1924ms; pre-provider p95 1837.45ms
- agent CLI attribution: cold known 1235ms / unattributed 554ms; warm known 1150ms / unattributed 690ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 490.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1896ms; pre-provider 1789ms; provider 3ms; post-provider 104ms; response true
    - active window: metadata scans 5 (151.86ms total, max 60.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1789ms; provider 3ms; post-provider 104ms; unknown 1136.71ms; source plugins.metadata.scan 404.95ms; agent.prepare 247.34ms
  - warm: total 1924ms; pre-provider 1840ms; provider 1ms; post-provider 83ms; response true
    - active window: metadata scans 2 (124.8ms total, max 109.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1840ms; provider 1ms; post-provider 83ms; unknown 1187.71ms; source plugins.metadata.scan 404.95ms; agent.prepare 247.34ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1789 ms | 1235 ms | 554 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-8e2a29af-kova-260908-052441-7237f0/openclaw/timeline.jsonl |
  | warm | 1840 ms | 1150 ms | 690 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-8e2a29af-kova-260908-052441-7237f0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1550 ms | 430 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 164 ms | 70 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 152 ms | 60 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 125 ms | 28 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 70 ms | 70 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 1172 ms | 490 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 158 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 125 ms | 109 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 124 ms | 27 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-2ab680e0-kova-260908-052441-7237f0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 407 MB; tracked total 560.2 MB; max CPU 165.9%; samples 9; roles command-tree 488.4MB/243.9%, status-cli 446.1MB/243.9%, agent-process 407MB/165.9%, agent-cli 82MB/165.9%
- agent: turn 1936ms; cold/warm 1888ms/1936ms; cold-warm delta 0ms; pre-provider 1853ms; provider 1ms; metadata scans 7 (271.16ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1933.6ms; max 1936ms; pre-provider p95 1849.15ms
- agent CLI attribution: cold known 1227ms / unattributed 549ms; warm known 1173ms / unattributed 680ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 506.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1888ms; pre-provider 1776ms; provider 3ms; post-provider 109ms; response true
    - active window: metadata scans 5 (148.73ms total, max 54.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1776ms; provider 3ms; post-provider 109ms; unknown 1136.53ms; source plugins.metadata.scan 391.52ms; agent.prepare 247.95ms
  - warm: total 1936ms; pre-provider 1853ms; provider 1ms; post-provider 82ms; response true
    - active window: metadata scans 2 (122.43ms total, max 106.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1853ms; provider 1ms; post-provider 82ms; unknown 1213.53ms; source plugins.metadata.scan 391.52ms; agent.prepare 247.95ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1776 ms | 1227 ms | 549 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-2ab680e0-kova-260908-052441-7237f0/openclaw/timeline.jsonl |
  | warm | 1853 ms | 1173 ms | 680 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-2ab680e0-kova-260908-052441-7237f0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 1569 ms | 432 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 167 ms | 75 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 147 ms | 54 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 125 ms | 28 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1204 ms | 507 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 168 ms | 61 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 125 ms | 27 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 123 ms | 107 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-67b331a3-kova-260908-052441-7237f0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 420.8 MB; tracked total 574.3 MB; max CPU 162.6%; samples 8; roles command-tree 503MB/162.6%, agent-cli 82.2MB/162.6%, agent-process 420.8MB/162.6%, mock-provider 75.6MB/1.5%
- agent: turn 1937ms; cold/warm 1765ms/1937ms; cold-warm delta 0ms; pre-provider 1853ms; provider 1ms; metadata scans 7 (265.48ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1928.4ms; max 1937ms; pre-provider p95 1843.25ms
- agent CLI attribution: cold known 1150ms / unattributed 508ms; warm known 1164ms / unattributed 689ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 485.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1765ms; pre-provider 1658ms; provider 3ms; post-provider 104ms; response true
    - active window: metadata scans 5 (141.73ms total, max 51.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1658ms; provider 3ms; post-provider 104ms; unknown 1023.04ms; source plugins.metadata.scan 380.37ms; agent.prepare 254.59ms
  - warm: total 1937ms; pre-provider 1853ms; provider 1ms; post-provider 83ms; response true
    - active window: metadata scans 2 (123.75ms total, max 108.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1853ms; provider 1ms; post-provider 83ms; unknown 1218.04ms; source plugins.metadata.scan 380.37ms; agent.prepare 254.59ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1658 ms | 1150 ms | 508 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-67b331a3-kova-260908-052441-7237f0/openclaw/timeline.jsonl |
  | warm | 1853 ms | 1164 ms | 689 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-67b331a3-kova-260908-052441-7237f0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 1474 ms | 409 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 149 ms | 66 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 143 ms | 52 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 117 ms | 26 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 60 ms | 60 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 1159 ms | 486 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 161 ms | 57 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 138 ms | 30 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 124 ms | 109 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 66 ms | 66 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260908-052441-7237f0-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260908-052441-7237f0-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260908-052441-7237f0-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-gateway-performance-man-005107f3-kova-260908-052441-7237f0
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-gateway-performance-man-1e8be6a8-kova-260908-052441-7237f0
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-gateway-performance-man-958fde53-kova-260908-052441-7237f0
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-8e2a29af-kova-260908-052441-7237f0
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-2ab680e0-kova-260908-052441-7237f0
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260908-052441-7237f0/kova-agent-cold-warm-message-67b331a3-kova-260908-052441-7237f0

## Target Cleanup

- Runtime: `kova-local-mts86abk-40v-7dc143a3`
- Result: removed
- Duration: 445ms

