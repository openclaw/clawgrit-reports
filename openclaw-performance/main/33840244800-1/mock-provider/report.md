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
| Run ID | `kova-260904-052723-9ddf70` |
| Generated | 2026-09-04T05:30:02.894Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3ms | 616.2MB | n/a | 139% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 141% | 1760ms | 1764ms | 1632ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 10ms | 593.9 MB | 670.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 617 MB | 694.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3ms | 616.2 MB | 1056.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 607.7 MB | 1701ms | 1764ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 608.4 MB | 1785ms | 1789ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 630.4 MB | 1760ms | 1642ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 617 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 557.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 617 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 426.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 141% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 368.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 138% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 333 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 130.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 17.7% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 75.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 5.9% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-8e2a29af-kova-260904-052723-9ddf70
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 407.4 MB; tracked total 607.7 MB; max CPU 136%; samples 8; roles command-tree 535.4MB/153.7%, agent-process 407.4MB/136%, agent-cli 130.4MB/17.7%, mock-provider 75.4MB/5.2%
- agent: turn 1764ms; cold/warm 1701ms/1764ms; cold-warm delta 0ms; pre-provider 1627ms; provider 2ms; metadata scans 8 (191.58ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1760.85ms; max 1764ms; pre-provider p95 1623.9ms
- agent CLI attribution: cold known 1057ms / unattributed 508ms; warm known 1019ms / unattributed 608ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 423.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1701ms; pre-provider 1565ms; provider 3ms; post-provider 133ms; response true
    - active window: metadata scans 6 (136.5ms total, max 41.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1565ms; provider 3ms; post-provider 133ms; unknown 999.72ms; source plugins.metadata.scan 296.43ms; agent.prepare 268.85ms
  - warm: total 1764ms; pre-provider 1627ms; provider 2ms; post-provider 135ms; response true
    - active window: metadata scans 2 (55.08ms total, max 40.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1627ms; provider 2ms; post-provider 135ms; unknown 1061.72ms; source plugins.metadata.scan 296.43ms; agent.prepare 268.85ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1565 ms | 1057 ms | 508 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-8e2a29af-kova-260904-052723-9ddf70/openclaw/timeline.jsonl |
  | warm | 1627 ms | 1019 ms | 608 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-8e2a29af-kova-260904-052723-9ddf70/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x24 | 24 | 0 | 1349 ms | 382 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 138 ms | 42 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 136 ms | 64 ms |
  | cold | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 129 ms | 36 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1027 ms | 424 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 156 ms | 62 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 141 ms | 38 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 68 ms | 68 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 56 ms | 41 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-2ab680e0-kova-260904-052723-9ddf70
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 405.1 MB; tracked total 608.4 MB; max CPU 141%; samples 8; roles command-tree 535.3MB/158.7%, agent-process 405.1MB/141%, agent-cli 130.3MB/17.7%, mock-provider 75.4MB/4.8%
- agent: turn 1789ms; cold/warm 1785ms/1789ms; cold-warm delta 0ms; pre-provider 1633ms; provider 1ms; metadata scans 8 (196.12ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1788.8ms; max 1789ms; pre-provider p95 1648.2ms
- agent CLI attribution: cold known 1103ms / unattributed 546ms; warm known 1016ms / unattributed 617ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 411.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1785ms; pre-provider 1649ms; provider 3ms; post-provider 133ms; response true
    - active window: metadata scans 6 (142.33ms total, max 44.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1649ms; provider 3ms; post-provider 133ms; unknown 1048.99ms; source plugins.metadata.scan 323.4ms; agent.prepare 276.61ms
  - warm: total 1789ms; pre-provider 1633ms; provider 1ms; post-provider 155ms; response true
    - active window: metadata scans 2 (53.79ms total, max 40.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1633ms; provider 1ms; post-provider 155ms; unknown 1032.99ms; source plugins.metadata.scan 323.4ms; agent.prepare 276.61ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1649 ms | 1103 ms | 546 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-2ab680e0-kova-260904-052723-9ddf70/openclaw/timeline.jsonl |
  | warm | 1633 ms | 1016 ms | 617 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-2ab680e0-kova-260904-052723-9ddf70/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 1394 ms | 399 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 145 ms | 68 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 142 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 134 ms | 38 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 69 ms | 69 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1005 ms | 411 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 160 ms | 63 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 145 ms | 39 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 68 ms | 68 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 55 ms | 41 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-67b331a3-kova-260904-052723-9ddf70
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 426.9 MB; tracked total 630.4 MB; max CPU 141%; samples 8; roles command-tree 557.5MB/157.9%, agent-process 426.9MB/141%, agent-cli 130.6MB/16.9%, mock-provider 75.4MB/5.9%
- agent: turn 1760ms; cold/warm 1760ms/1642ms; cold-warm delta 118ms; pre-provider 1632ms; provider 3ms; metadata scans 8 (191.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1754.1ms; max 1760ms; pre-provider p95 1625.95ms
- agent CLI attribution: cold known 1101ms / unattributed 531ms; warm known 924ms / unattributed 587ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 389.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1760ms; pre-provider 1632ms; provider 3ms; post-provider 125ms; response true
    - active window: metadata scans 6 (142.27ms total, max 42.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1632ms; provider 3ms; post-provider 125ms; unknown 1081.3ms; source plugins.metadata.scan 293.5ms; agent.prepare 257.2ms
  - warm: total 1642ms; pre-provider 1511ms; provider 1ms; post-provider 130ms; response true
    - active window: metadata scans 2 (49.37ms total, max 36.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1511ms; provider 1ms; post-provider 130ms; unknown 960.3ms; source plugins.metadata.scan 293.5ms; agent.prepare 257.2ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1632 ms | 1101 ms | 531 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-67b331a3-kova-260904-052723-9ddf70/openclaw/timeline.jsonl |
  | warm | 1511 ms | 924 ms | 587 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-67b331a3-kova-260904-052723-9ddf70/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 1396 ms | 389 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 159 ms | 71 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 142 ms | 42 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 124 ms | 32 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 67 ms | 67 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 938 ms | 385 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 141 ms | 58 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 128 ms | 34 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 49 ms | 36 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260904-052723-9ddf70-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260904-052723-9ddf70-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260904-052723-9ddf70-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-gateway-performance-man-005107f3-kova-260904-052723-9ddf70
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-gateway-performance-man-1e8be6a8-kova-260904-052723-9ddf70
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-gateway-performance-man-958fde53-kova-260904-052723-9ddf70
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-8e2a29af-kova-260904-052723-9ddf70
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-2ab680e0-kova-260904-052723-9ddf70
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260904-052723-9ddf70/kova-agent-cold-warm-message-67b331a3-kova-260904-052723-9ddf70

## Target Cleanup

- Runtime: `kova-local-mtmiicm9-429-8875e3f1`
- Result: removed
- Duration: 450ms

