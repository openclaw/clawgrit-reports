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
| Run ID | `kova-260906-052234-c1d5e3` |
| Generated | 2026-09-06T05:25:00.505Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2ms | 593.7MB | n/a | 131% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 138% | 1723ms | 1601ms | 1590ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 8ms | 592.9 MB | 670.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 1ms | 593.7 MB | 670.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 633.5 MB | 711.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 645.4 MB | 1723ms | 1605ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 644.6 MB | 1731ms | 1601ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 649.6 MB | 1710ms | 1583ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 633.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 137% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 576.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 633.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 137% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 447.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 139% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 129.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 16.9% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 75.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 5.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 21.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 0% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 6.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-8e2a29af-kova-260906-052234-c1d5e3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 444.3 MB; tracked total 645.4 MB; max CPU 139%; samples 8; roles command-tree 572.2MB/155%, agent-process 444.3MB/139%, agent-cli 129.7MB/16%, mock-provider 75.5MB/5.4%
- agent: turn 1723ms; cold/warm 1723ms/1605ms; cold-warm delta 118ms; pre-provider 1590ms; provider 2ms; metadata scans 8 (182.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1717.1ms; max 1723ms; pre-provider p95 1584.4ms
- agent CLI attribution: cold known 1079ms / unattributed 511ms; warm known 901ms / unattributed 577ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 395.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1723ms; pre-provider 1590ms; provider 2ms; post-provider 131ms; response true
    - active window: metadata scans 6 (132.61ms total, max 42.4ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1590ms; provider 2ms; post-provider 131ms; unknown 1031.5ms; source plugins.metadata.scan 321.03ms; agent.prepare 237.47ms
  - warm: total 1605ms; pre-provider 1478ms; provider 1ms; post-provider 126ms; response true
    - active window: metadata scans 2 (50.36ms total, max 37.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1478ms; provider 1ms; post-provider 126ms; unknown 919.5ms; source plugins.metadata.scan 321.03ms; agent.prepare 237.47ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1590 ms | 1079 ms | 511 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-8e2a29af-kova-260906-052234-c1d5e3/openclaw/timeline.jsonl |
  | warm | 1478 ms | 901 ms | 577 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-8e2a29af-kova-260906-052234-c1d5e3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1361 ms | 396 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 144 ms | 66 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 134 ms | 42 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 122 ms | 27 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 897 ms | 378 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 141 ms | 56 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 118 ms | 27 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 51 ms | 38 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-2ab680e0-kova-260906-052234-c1d5e3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 444.4 MB; tracked total 644.6 MB; max CPU 138%; samples 8; roles command-tree 571.7MB/153.8%, agent-process 444.4MB/138%, agent-cli 127.3MB/15.8%, mock-provider 75.2MB/4.3%
- agent: turn 1731ms; cold/warm 1731ms/1601ms; cold-warm delta 130ms; pre-provider 1602ms; provider 3ms; metadata scans 8 (190.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1724.5ms; max 1731ms; pre-provider p95 1595.4ms
- agent CLI attribution: cold known 1072ms / unattributed 530ms; warm known 899ms / unattributed 571ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 389.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1731ms; pre-provider 1602ms; provider 3ms; post-provider 126ms; response true
    - active window: metadata scans 6 (138.53ms total, max 42.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1602ms; provider 3ms; post-provider 126ms; unknown 1074.24ms; source plugins.metadata.scan 290.34ms; agent.prepare 237.42ms
  - warm: total 1601ms; pre-provider 1470ms; provider 1ms; post-provider 130ms; response true
    - active window: metadata scans 2 (51.74ms total, max 38.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1470ms; provider 1ms; post-provider 130ms; unknown 942.24ms; source plugins.metadata.scan 290.34ms; agent.prepare 237.42ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1602 ms | 1072 ms | 530 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-2ab680e0-kova-260906-052234-c1d5e3/openclaw/timeline.jsonl |
  | warm | 1470 ms | 899 ms | 571 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-2ab680e0-kova-260906-052234-c1d5e3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x25 | 25 | 0 | 1377 ms | 389 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 141 ms | 64 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 137 ms | 42 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 124 ms | 28 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 58 ms | 58 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 906 ms | 380 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 137 ms | 52 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 114 ms | 27 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 63 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 51 ms | 38 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-67b331a3-kova-260906-052234-c1d5e3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 447.2 MB; tracked total 649.6 MB; max CPU 135%; samples 8; roles command-tree 576.7MB/151.9%, agent-process 447.2MB/135%, agent-cli 129.5MB/16.9%, mock-provider 75.5MB/5.5%
- agent: turn 1710ms; cold/warm 1710ms/1583ms; cold-warm delta 127ms; pre-provider 1583ms; provider 3ms; metadata scans 8 (187.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1703.65ms; max 1710ms; pre-provider p95 1576.85ms
- agent CLI attribution: cold known 1052ms / unattributed 531ms; warm known 900ms / unattributed 560ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 381.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1710ms; pre-provider 1583ms; provider 3ms; post-provider 124ms; response true
    - active window: metadata scans 6 (137.51ms total, max 43.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1583ms; provider 3ms; post-provider 124ms; unknown 1063.26ms; source plugins.metadata.scan 294.52ms; agent.prepare 225.22ms
  - warm: total 1583ms; pre-provider 1460ms; provider 1ms; post-provider 122ms; response true
    - active window: metadata scans 2 (50.13ms total, max 37.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1460ms; provider 1ms; post-provider 122ms; unknown 940.26ms; source plugins.metadata.scan 294.52ms; agent.prepare 225.22ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1583 ms | 1052 ms | 531 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-67b331a3-kova-260906-052234-c1d5e3/openclaw/timeline.jsonl |
  | warm | 1460 ms | 900 ms | 560 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-67b331a3-kova-260906-052234-c1d5e3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x24 | 24 | 0 | 1323 ms | 368 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 157 ms | 70 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 138 ms | 43 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 116 ms | 26 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 912 ms | 382 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 139 ms | 54 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 109 ms | 25 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 60 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 50 ms | 37 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260906-052234-c1d5e3-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260906-052234-c1d5e3-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260906-052234-c1d5e3-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-gateway-performance-man-005107f3-kova-260906-052234-c1d5e3
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-gateway-performance-man-1e8be6a8-kova-260906-052234-c1d5e3
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-gateway-performance-man-958fde53-kova-260906-052234-c1d5e3
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-8e2a29af-kova-260906-052234-c1d5e3
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-2ab680e0-kova-260906-052234-c1d5e3
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260906-052234-c1d5e3/kova-agent-cold-warm-message-67b331a3-kova-260906-052234-c1d5e3

## Target Cleanup

- Runtime: `kova-local-mtpd7v6h-3zr-2daea22d`
- Result: removed
- Duration: 425ms

