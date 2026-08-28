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
| Run ID | `kova-260828-074950-a22e4b` |
| Generated | 2026-08-28T07:53:32.978Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4662ms | 589.9MB | n/a | 133% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 129% | 3101ms | 2594ms | 2840ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 4466ms | 583.5 MB | 1000.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4736ms | 589.9 MB | 1001.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4662ms | 591.4 MB | 1006.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 646.4 MB | 3101ms | 2594ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 661.4 MB | 2707ms | 2395ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 712.4 MB | 3127ms | 2679ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 639.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 591.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 138% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 471 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 591.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 125% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 345.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 141% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 522.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 131% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 315.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 136% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 118.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 21.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-8e2a29af-kova-260828-074950-a22e4b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 463.3 MB; tracked total 646.4 MB; max CPU 131%; samples 10; roles command-tree 573.1MB/143.2%, agent-process 463.3MB/131%, agent-cli 114.3MB/17.2%, mock-provider 74.3MB/5.6%
- agent: turn 3101ms; cold/warm 3101ms/2594ms; cold-warm delta 507ms; pre-provider 2840ms; provider 3ms; metadata scans 59 (989.72ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3075.65ms; max 3101ms; pre-provider p95 2817.85ms
- agent CLI attribution: cold known 1961ms / unattributed 879ms; warm known 1586ms / unattributed 811ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 748.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3101ms; pre-provider 2840ms; provider 3ms; post-provider 258ms; response true
    - active window: metadata scans 34 (577.26ms total, max 49.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2840ms; provider 3ms; post-provider 258ms; unknown 1391.37ms; source plugins.metadata.scan 1120.95ms; agent.prepare 327.68ms
  - warm: total 2594ms; pre-provider 2397ms; provider 1ms; post-provider 196ms; response true
    - active window: metadata scans 25 (412.46ms total, max 41.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2397ms; provider 1ms; post-provider 196ms; unknown 948.37ms; source plugins.metadata.scan 1120.95ms; agent.prepare 327.68ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2840 ms | 1961 ms | 879 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-8e2a29af-kova-260828-074950-a22e4b/openclaw/timeline.jsonl |
  | warm | 2397 ms | 1586 ms | 811 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-8e2a29af-kova-260828-074950-a22e4b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 2517 ms | 678 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x8, `agent.startup` x3 | 28 | 0 | 489 ms | 50 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 309 ms | 167 ms |
  | cold | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 177 ms | 54 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x13, `agent.startup` x2 | 15 | 0 | 19 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1883 ms | 749 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x8, `agent.startup` x3 | 19 | 0 | 345 ms | 42 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 245 ms | 146 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 149 ms | 44 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x7, `agent.startup` x3 | 10 | 0 | 17 ms | 2 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-2ab680e0-kova-260828-074950-a22e4b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 473.9 MB; tracked total 661.4 MB; max CPU 128%; samples 10; roles command-tree 590.5MB/139.8%, agent-process 473.9MB/128%, agent-cli 116.6MB/15.8%, mock-provider 73.2MB/6.6%
- agent: turn 2707ms; cold/warm 2707ms/2395ms; cold-warm delta 312ms; pre-provider 2518ms; provider 3ms; metadata scans 59 (886.9ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2691.4ms; max 2707ms; pre-provider p95 2501.65ms
- agent CLI attribution: cold known 1770ms / unattributed 748ms; warm known 1418ms / unattributed 773ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 640.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2707ms; pre-provider 2518ms; provider 3ms; post-provider 186ms; response true
    - active window: metadata scans 34 (509.3ms total, max 47.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2518ms; provider 3ms; post-provider 186ms; unknown 1217.99ms; source plugins.metadata.scan 987.06ms; agent.prepare 312.95ms
  - warm: total 2395ms; pre-provider 2191ms; provider 1ms; post-provider 203ms; response true
    - active window: metadata scans 25 (377.6ms total, max 40.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2191ms; provider 1ms; post-provider 203ms; unknown 890.99ms; source plugins.metadata.scan 987.06ms; agent.prepare 312.95ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2518 ms | 1770 ms | 748 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-2ab680e0-kova-260828-074950-a22e4b/openclaw/timeline.jsonl |
  | warm | 2191 ms | 1418 ms | 773 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-2ab680e0-kova-260828-074950-a22e4b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x24 | 24 | 0 | 2357 ms | 640 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x8, `agent.startup` x3 | 28 | 0 | 443 ms | 48 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 221 ms | 126 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 159 ms | 49 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x14, `agent.startup` x2 | 16 | 0 | 18 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1602 ms | 622 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x8, `agent.startup` x3 | 19 | 0 | 304 ms | 40 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 221 ms | 126 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 154 ms | 44 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x7, `agent.startup` x2 | 9 | 0 | 14 ms | 2 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-67b331a3-kova-260828-074950-a22e4b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 522.5 MB; tracked total 712.4 MB; max CPU 129%; samples 12; roles command-tree 639.3MB/163.7%, agent-process 522.5MB/129%, status-cli 471MB/163.7%, agent-cli 118.4MB/21.6%
- agent: turn 3127ms; cold/warm 3127ms/2679ms; cold-warm delta 448ms; pre-provider 2865ms; provider 3ms; metadata scans 59 (981.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3104.6ms; max 3127ms; pre-provider p95 2845.15ms
- agent CLI attribution: cold known 2031ms / unattributed 834ms; warm known 1607ms / unattributed 861ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 790.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3127ms; pre-provider 2865ms; provider 3ms; post-provider 259ms; response true
    - active window: metadata scans 34 (588.82ms total, max 44.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2865ms; provider 3ms; post-provider 259ms; unknown 1457.87ms; source plugins.metadata.scan 1091.2ms; agent.prepare 315.93ms
  - warm: total 2679ms; pre-provider 2468ms; provider 1ms; post-provider 210ms; response true
    - active window: metadata scans 25 (392.92ms total, max 38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2468ms; provider 1ms; post-provider 210ms; unknown 1060.87ms; source plugins.metadata.scan 1091.2ms; agent.prepare 315.93ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2865 ms | 2031 ms | 834 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-67b331a3-kova-260828-074950-a22e4b/openclaw/timeline.jsonl |
  | warm | 2468 ms | 1607 ms | 861 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-67b331a3-kova-260828-074950-a22e4b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 2751 ms | 791 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x8, `agent.startup` x3 | 28 | 0 | 507 ms | 44 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 282 ms | 149 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 159 ms | 48 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x16, `agent.startup` x3 | 19 | 0 | 25 ms | 3 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1842 ms | 697 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x8, `agent.startup` x3 | 19 | 0 | 322 ms | 38 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 271 ms | 164 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 160 ms | 47 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x8, `agent.startup` x2 | 10 | 0 | 14 ms | 2 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260828-074950-a22e4b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260828-074950-a22e4b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260828-074950-a22e4b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-gateway-performance-man-005107f3-kova-260828-074950-a22e4b
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-gateway-performance-man-1e8be6a8-kova-260828-074950-a22e4b
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-gateway-performance-man-958fde53-kova-260828-074950-a22e4b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-8e2a29af-kova-260828-074950-a22e4b
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-2ab680e0-kova-260828-074950-a22e4b
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260828-074950-a22e4b/kova-agent-cold-warm-message-67b331a3-kova-260828-074950-a22e4b

## Target Cleanup

- Runtime: `kova-local-mtcniljt-3q5-597e8caa`
- Result: removed
- Duration: 628ms

