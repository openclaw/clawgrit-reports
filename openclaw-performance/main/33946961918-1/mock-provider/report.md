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
| Run ID | `kova-260905-052239-5c84ce` |
| Generated | 2026-09-05T05:25:07.238Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2ms | 600.9MB | n/a | 136% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 140% | 1718ms | 1652ms | 1586ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 9ms | 598.2 MB | 1057.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 600.9 MB | 678.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 638.2 MB | 715.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 629.9 MB | 1761ms | 1646ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 627.2 MB | 1693ms | 1659ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 628.9 MB | 1718ms | 1652ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 638.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 138% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 557.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 638.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 138% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 426.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 141% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 387.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 123% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 130.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 16.9% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 75.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 5.5% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 6.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-8e2a29af-kova-260905-052239-5c84ce
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 426.8 MB; tracked total 629.9 MB; max CPU 141%; samples 8; roles command-tree 557.1MB/157.8%, agent-process 426.8MB/141%, agent-cli 130.7MB/16.9%, mock-provider 75.4MB/5.4%
- agent: turn 1761ms; cold/warm 1761ms/1646ms; cold-warm delta 115ms; pre-provider 1624ms; provider 3ms; metadata scans 8 (196.19ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1755.25ms; max 1761ms; pre-provider p95 1618.5ms
- agent CLI attribution: cold known 1080ms / unattributed 544ms; warm known 915ms / unattributed 599ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 381.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1761ms; pre-provider 1624ms; provider 3ms; post-provider 134ms; response true
    - active window: metadata scans 6 (143.97ms total, max 44.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1624ms; provider 3ms; post-provider 134ms; unknown 1081.93ms; source plugins.metadata.scan 303.7ms; agent.prepare 238.37ms
  - warm: total 1646ms; pre-provider 1514ms; provider 1ms; post-provider 131ms; response true
    - active window: metadata scans 2 (52.22ms total, max 39.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1514ms; provider 1ms; post-provider 131ms; unknown 971.93ms; source plugins.metadata.scan 303.7ms; agent.prepare 238.37ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1624 ms | 1080 ms | 544 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-8e2a29af-kova-260905-052239-5c84ce/openclaw/timeline.jsonl |
  | warm | 1514 ms | 915 ms | 599 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-8e2a29af-kova-260905-052239-5c84ce/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x24 | 24 | 0 | 1369 ms | 382 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 146 ms | 60 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 143 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 120 ms | 28 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 921 ms | 375 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 145 ms | 57 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 116 ms | 28 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 52 ms | 39 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-2ab680e0-kova-260905-052239-5c84ce
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 425 MB; tracked total 627.2 MB; max CPU 140%; samples 8; roles command-tree 554.4MB/156.9%, agent-process 425MB/140%, agent-cli 129.4MB/16.9%, mock-provider 75.4MB/4.3%
- agent: turn 1693ms; cold/warm 1693ms/1659ms; cold-warm delta 34ms; pre-provider 1562ms; provider 2ms; metadata scans 8 (189.72ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1691.3ms; max 1693ms; pre-provider p95 1560.45ms
- agent CLI attribution: cold known 1040ms / unattributed 522ms; warm known 947ms / unattributed 584ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 398.73ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1693ms; pre-provider 1562ms; provider 2ms; post-provider 129ms; response true
    - active window: metadata scans 6 (137.22ms total, max 40.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1562ms; provider 2ms; post-provider 129ms; unknown 1023.13ms; source plugins.metadata.scan 310.83ms; agent.prepare 228.04ms
  - warm: total 1659ms; pre-provider 1531ms; provider 1ms; post-provider 127ms; response true
    - active window: metadata scans 2 (52.5ms total, max 39.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1531ms; provider 1ms; post-provider 127ms; unknown 992.13ms; source plugins.metadata.scan 310.83ms; agent.prepare 228.04ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1562 ms | 1040 ms | 522 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-2ab680e0-kova-260905-052239-5c84ce/openclaw/timeline.jsonl |
  | warm | 1531 ms | 947 ms | 584 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-2ab680e0-kova-260905-052239-5c84ce/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x24 | 24 | 0 | 1352 ms | 364 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 136 ms | 64 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 136 ms | 41 ms |
  | cold | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 111 ms | 25 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 971 ms | 398 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 147 ms | 57 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 116 ms | 26 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 53 ms | 40 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-67b331a3-kova-260905-052239-5c84ce
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 426.7 MB; tracked total 628.9 MB; max CPU 139%; samples 8; roles command-tree 555.9MB/155.9%, agent-process 426.7MB/139%, agent-cli 129.2MB/16.9%, mock-provider 75.5MB/5.5%
- agent: turn 1718ms; cold/warm 1718ms/1652ms; cold-warm delta 66ms; pre-provider 1586ms; provider 2ms; metadata scans 8 (190.9ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1714.7ms; max 1718ms; pre-provider p95 1582.85ms
- agent CLI attribution: cold known 1062ms / unattributed 524ms; warm known 941ms / unattributed 582ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 382.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1718ms; pre-provider 1586ms; provider 2ms; post-provider 130ms; response true
    - active window: metadata scans 6 (138.06ms total, max 40.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1586ms; provider 2ms; post-provider 130ms; unknown 1049.71ms; source plugins.metadata.scan 297.91ms; agent.prepare 238.38ms
  - warm: total 1652ms; pre-provider 1523ms; provider 1ms; post-provider 128ms; response true
    - active window: metadata scans 2 (52.84ms total, max 39.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1523ms; provider 1ms; post-provider 128ms; unknown 986.71ms; source plugins.metadata.scan 297.91ms; agent.prepare 238.38ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1586 ms | 1062 ms | 524 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-67b331a3-kova-260905-052239-5c84ce/openclaw/timeline.jsonl |
  | warm | 1523 ms | 941 ms | 582 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-67b331a3-kova-260905-052239-5c84ce/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 1383 ms | 380 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 144 ms | 64 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 137 ms | 40 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 117 ms | 27 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 942 ms | 382 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 145 ms | 55 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 121 ms | 27 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 53 ms | 40 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260905-052239-5c84ce-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260905-052239-5c84ce-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260905-052239-5c84ce-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-gateway-performance-man-005107f3-kova-260905-052239-5c84ce
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-gateway-performance-man-1e8be6a8-kova-260905-052239-5c84ce
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-gateway-performance-man-958fde53-kova-260905-052239-5c84ce
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-8e2a29af-kova-260905-052239-5c84ce
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-2ab680e0-kova-260905-052239-5c84ce
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260905-052239-5c84ce/kova-agent-cold-warm-message-67b331a3-kova-260905-052239-5c84ce

## Target Cleanup

- Runtime: `kova-local-mtnxs4i9-3y6-b50f77d5`
- Result: removed
- Duration: 422ms

