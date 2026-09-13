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
| Run ID | `kova-260913-052352-533961` |
| Generated | 2026-09-13T05:27:09.317Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3ms | 977.9MB | n/a | 224.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 160.9% | 2218ms | 2745ms | 2086ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 9ms | 971.8 MB | 1421.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3ms | 977.9 MB | 1398.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 981.2 MB | 1467.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 712.4 MB | 2218ms | 2745ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 713.5 MB | 2203ms | 2697ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 705.5 MB | 2226ms | 2784ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 981.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 237.8% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 981.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 260.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 640.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 560.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 409.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 148.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 148.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 91.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 94.8% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 135.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-8e2a29af-kova-260913-052352-533961
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 560.1 MB; tracked total 712.4 MB; max CPU 160.9%; samples 11; roles command-tree 639.9MB/170.4%, agent-process 560.1MB/160.9%, status-cli 408.2MB/157.3%, agent-cli 134.3MB/146.6%
- agent: turn 2745ms; cold/warm 2218ms/2745ms; cold-warm delta 0ms; pre-provider 2637ms; provider 1ms; metadata scans 8 (352.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2718.65ms; max 2745ms; pre-provider p95 2609.45ms
- agent CLI attribution: cold known 1455ms / unattributed 631ms; warm known 1732ms / unattributed 905ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 465.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2218ms; pre-provider 2086ms; provider 3ms; post-provider 129ms; response true
    - active window: metadata scans 6 (171.81ms total, max 51.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2086ms; provider 3ms; post-provider 129ms; unknown 1340.58ms; source plugins.metadata.scan 468.72ms; agent.prepare 276.7ms
  - warm: total 2745ms; pre-provider 2637ms; provider 1ms; post-provider 107ms; response true
    - active window: metadata scans 2 (180.52ms total, max 163.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2637ms; provider 1ms; post-provider 107ms; unknown 1891.58ms; source plugins.metadata.scan 468.72ms; agent.prepare 276.7ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2086 ms | 1455 ms | 631 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-8e2a29af-kova-260913-052352-533961/openclaw/timeline.jsonl |
  | warm | 2637 ms | 1732 ms | 905 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-8e2a29af-kova-260913-052352-533961/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 1582 ms | 466 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 392 ms | 196 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 171 ms | 51 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 132 ms | 29 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 69 ms | 69 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1255 ms | 418 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 508 ms | 288 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 181 ms | 164 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 141 ms | 28 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 70 ms | 70 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-2ab680e0-kova-260913-052352-533961
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 560.6 MB; tracked total 713.5 MB; max CPU 162%; samples 11; roles command-tree 640.3MB/171.8%, agent-process 560.6MB/162%, status-cli 406.1MB/152.4%, agent-cli 79.9MB/143.1%
- agent: turn 2697ms; cold/warm 2203ms/2697ms; cold-warm delta 0ms; pre-provider 2578ms; provider 2ms; metadata scans 8 (342.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2672.3ms; max 2697ms; pre-provider p95 2552.25ms
- agent CLI attribution: cold known 1453ms / unattributed 610ms; warm known 1690ms / unattributed 888ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 473.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2203ms; pre-provider 2063ms; provider 3ms; post-provider 137ms; response true
    - active window: metadata scans 6 (173.57ms total, max 47.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2063ms; provider 3ms; post-provider 137ms; unknown 1330.63ms; source plugins.metadata.scan 455.11ms; agent.prepare 277.26ms
  - warm: total 2697ms; pre-provider 2578ms; provider 2ms; post-provider 117ms; response true
    - active window: metadata scans 2 (168.66ms total, max 152.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2578ms; provider 2ms; post-provider 117ms; unknown 1845.63ms; source plugins.metadata.scan 455.11ms; agent.prepare 277.26ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2063 ms | 1453 ms | 610 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-2ab680e0-kova-260913-052352-533961/openclaw/timeline.jsonl |
  | warm | 2578 ms | 1690 ms | 888 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-2ab680e0-kova-260913-052352-533961/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1594 ms | 474 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 395 ms | 195 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 174 ms | 48 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 136 ms | 28 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1206 ms | 403 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 509 ms | 287 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 169 ms | 153 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 143 ms | 29 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 70 ms | 70 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-67b331a3-kova-260913-052352-533961
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 554.3 MB; tracked total 705.5 MB; max CPU 158.4%; samples 11; roles command-tree 634.2MB/167.8%, agent-process 554.3MB/158.4%, status-cli 409.8MB/153.5%, agent-cli 148.2MB/148.2%
- agent: turn 2784ms; cold/warm 2226ms/2784ms; cold-warm delta 0ms; pre-provider 2673ms; provider 1ms; metadata scans 8 (360.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2756.1ms; max 2784ms; pre-provider p95 2644.5ms
- agent CLI attribution: cold known 1491ms / unattributed 612ms; warm known 1768ms / unattributed 905ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 475.51ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2226ms; pre-provider 2103ms; provider 2ms; post-provider 121ms; response true
    - active window: metadata scans 6 (173.8ms total, max 46.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2103ms; provider 2ms; post-provider 121ms; unknown 1334.14ms; source plugins.metadata.scan 488.57ms; agent.prepare 280.29ms
  - warm: total 2784ms; pre-provider 2673ms; provider 1ms; post-provider 110ms; response true
    - active window: metadata scans 2 (186.9ms total, max 170.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2673ms; provider 1ms; post-provider 110ms; unknown 1904.14ms; source plugins.metadata.scan 488.57ms; agent.prepare 280.29ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2103 ms | 1491 ms | 612 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-67b331a3-kova-260913-052352-533961/openclaw/timeline.jsonl |
  | warm | 2673 ms | 1768 ms | 905 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-67b331a3-kova-260913-052352-533961/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x25 | 25 | 0 | 1636 ms | 475 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 403 ms | 196 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 175 ms | 47 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 146 ms | 30 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1277 ms | 424 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 523 ms | 295 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 187 ms | 170 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 137 ms | 28 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 70 ms | 70 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260913-052352-533961-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260913-052352-533961-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260913-052352-533961-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-gateway-performance-man-005107f3-kova-260913-052352-533961
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-gateway-performance-man-1e8be6a8-kova-260913-052352-533961
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-gateway-performance-man-958fde53-kova-260913-052352-533961
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-8e2a29af-kova-260913-052352-533961
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-2ab680e0-kova-260913-052352-533961
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260913-052352-533961/kova-agent-cold-warm-message-67b331a3-kova-260913-052352-533961

## Target Cleanup

- Runtime: `kova-local-mtzdci07-42a-ba063d96`
- Result: removed
- Duration: 496ms

