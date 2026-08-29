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
| Run ID | `kova-260829-052035-1f6b49` |
| Generated | 2026-08-29T05:23:23.141Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2ms | 571.6MB | n/a | 133% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 124% | 1799ms | 1642ms | 1665ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 9ms | 567 MB | 662.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 585 MB | 662.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 571.6 MB | 648.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 625.8 MB | 1787ms | 1571ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 604.7 MB | 1799ms | 1642ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 607 MB | 1819ms | 1661ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 585 MB (scenario gateway-performance/many-bundled-plugins); CPU 137% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 552.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 137.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 585 MB (scenario gateway-performance/many-bundled-plugins); CPU 137% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 434.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 126% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 118.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 13.2% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 75.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 6% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 23.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 0% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 6.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 0.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-8e2a29af-kova-260829-052035-1f6b49
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 434.1 MB; tracked total 625.8 MB; max CPU 126%; samples 8; roles command-tree 552.4MB/137.4%, agent-process 434.1MB/126%, agent-cli 118.3MB/13.2%, mock-provider 75.5MB/6%
- agent: turn 1787ms; cold/warm 1787ms/1571ms; cold-warm delta 216ms; pre-provider 1651ms; provider 3ms; metadata scans 10 (216.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1776.2ms; max 1787ms; pre-provider p95 1640.45ms
- agent CLI attribution: cold known 1072ms / unattributed 579ms; warm known 850ms / unattributed 590ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 401.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1787ms; pre-provider 1651ms; provider 3ms; post-provider 133ms; response true
    - active window: metadata scans 7 (158.01ms total, max 48.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1651ms; provider 3ms; post-provider 133ms; unknown 1047.18ms; source plugins.metadata.scan 338.9ms; agent.prepare 264.92ms
  - warm: total 1571ms; pre-provider 1440ms; provider 1ms; post-provider 130ms; response true
    - active window: metadata scans 3 (58.22ms total, max 40.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1440ms; provider 1ms; post-provider 130ms; unknown 836.18ms; source plugins.metadata.scan 338.9ms; agent.prepare 264.92ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1651 ms | 1072 ms | 579 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-8e2a29af-kova-260829-052035-1f6b49/openclaw/timeline.jsonl |
  | warm | 1440 ms | 850 ms | 590 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-8e2a29af-kova-260829-052035-1f6b49/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x22 | 22 | 0 | 1400 ms | 402 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x5 | 7 | 0 | 159 ms | 48 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 134 ms | 35 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 126 ms | 60 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 907 ms | 374 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 132 ms | 35 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 122 ms | 54 ms |
  | warm | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` | 3 | 0 | 58 ms | 40 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-2ab680e0-kova-260829-052035-1f6b49
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 419 MB; tracked total 604.7 MB; max CPU 124%; samples 8; roles command-tree 531.2MB/136.2%, agent-process 419MB/124%, agent-cli 116.4MB/12.2%, mock-provider 75.4MB/6%
- agent: turn 1799ms; cold/warm 1799ms/1642ms; cold-warm delta 157ms; pre-provider 1665ms; provider 2ms; metadata scans 10 (218.37ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1791.15ms; max 1799ms; pre-provider p95 1657.15ms
- agent CLI attribution: cold known 1084ms / unattributed 581ms; warm known 912ms / unattributed 596ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 398.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1799ms; pre-provider 1665ms; provider 2ms; post-provider 132ms; response true
    - active window: metadata scans 7 (159.7ms total, max 49.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1665ms; provider 2ms; post-provider 132ms; unknown 1044.64ms; source plugins.metadata.scan 342.68ms; agent.prepare 277.68ms
  - warm: total 1642ms; pre-provider 1508ms; provider 1ms; post-provider 133ms; response true
    - active window: metadata scans 3 (58.67ms total, max 40.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1508ms; provider 1ms; post-provider 133ms; unknown 887.64ms; source plugins.metadata.scan 342.68ms; agent.prepare 277.68ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1665 ms | 1084 ms | 581 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-2ab680e0-kova-260829-052035-1f6b49/openclaw/timeline.jsonl |
  | warm | 1508 ms | 912 ms | 596 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-2ab680e0-kova-260829-052035-1f6b49/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 1404 ms | 398 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x5 | 7 | 0 | 161 ms | 49 ms |
  | cold | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 138 ms | 36 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 132 ms | 61 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 961 ms | 388 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 137 ms | 40 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 137 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` | 3 | 0 | 58 ms | 40 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-67b331a3-kova-260829-052035-1f6b49
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 416 MB; tracked total 607 MB; max CPU 124%; samples 8; roles command-tree 534MB/135.4%, agent-process 416MB/124%, agent-cli 118MB/13.2%, mock-provider 75.3MB/5.8%
- agent: turn 1819ms; cold/warm 1819ms/1661ms; cold-warm delta 158ms; pre-provider 1683ms; provider 3ms; metadata scans 10 (223.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1811.1ms; max 1819ms; pre-provider p95 1675.3ms
- agent CLI attribution: cold known 1103ms / unattributed 580ms; warm known 932ms / unattributed 597ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 401.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1819ms; pre-provider 1683ms; provider 3ms; post-provider 133ms; response true
    - active window: metadata scans 7 (161.6ms total, max 49.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1683ms; provider 3ms; post-provider 133ms; unknown 1072.58ms; source plugins.metadata.scan 334.45ms; agent.prepare 275.97ms
  - warm: total 1661ms; pre-provider 1529ms; provider 1ms; post-provider 131ms; response true
    - active window: metadata scans 3 (61.73ms total, max 42.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1529ms; provider 1ms; post-provider 131ms; unknown 918.58ms; source plugins.metadata.scan 334.45ms; agent.prepare 275.97ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1683 ms | 1103 ms | 580 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-67b331a3-kova-260829-052035-1f6b49/openclaw/timeline.jsonl |
  | warm | 1529 ms | 932 ms | 597 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-67b331a3-kova-260829-052035-1f6b49/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 1430 ms | 401 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x5 | 7 | 0 | 165 ms | 50 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 141 ms | 37 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 134 ms | 62 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 7 ms | 7 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 989 ms | 402 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 146 ms | 65 ms |
  | warm | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 135 ms | 39 ms |
  | warm | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` | 3 | 0 | 63 ms | 43 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260829-052035-1f6b49-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260829-052035-1f6b49-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260829-052035-1f6b49-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-gateway-performance-man-005107f3-kova-260829-052035-1f6b49
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-gateway-performance-man-1e8be6a8-kova-260829-052035-1f6b49
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-gateway-performance-man-958fde53-kova-260829-052035-1f6b49
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-8e2a29af-kova-260829-052035-1f6b49
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-2ab680e0-kova-260829-052035-1f6b49
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260829-052035-1f6b49/kova-agent-cold-warm-message-67b331a3-kova-260829-052035-1f6b49

## Target Cleanup

- Runtime: `kova-local-mtdxmhti-3wv-05f9f22d`
- Result: removed
- Duration: 454ms

