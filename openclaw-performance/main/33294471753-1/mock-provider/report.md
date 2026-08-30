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
| Run ID | `kova-260830-052108-aa7808` |
| Generated | 2026-08-30T05:23:47.030Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 17ms | 586.2MB | n/a | 132% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 123% | 1786ms | 1623ms | 1649ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 17ms | 585.2 MB | 662.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 37ms | 589.6 MB | 666.9 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 586.2 MB | 663 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 611 MB | 1808ms | 1625ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 611.1 MB | 1786ms | 1572ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 614.2 MB | 1766ms | 1623ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 589.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 589.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 540.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 139.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 421.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 127% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 118.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 13.2% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 75.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 5.8% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 6.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 1% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 0% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-8e2a29af-kova-260830-052108-aa7808
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 419 MB; tracked total 611 MB; max CPU 122%; samples 8; roles command-tree 537.6MB/134.2%, agent-process 419MB/122%, agent-cli 118.6MB/13.2%, mock-provider 75.6MB/4.5%
- agent: turn 1808ms; cold/warm 1808ms/1625ms; cold-warm delta 183ms; pre-provider 1680ms; provider 3ms; metadata scans 8 (207.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1798.85ms; max 1808ms; pre-provider p95 1670.9ms
- agent CLI attribution: cold known 1094ms / unattributed 586ms; warm known 907ms / unattributed 591ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 409.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1808ms; pre-provider 1680ms; provider 3ms; post-provider 125ms; response true
    - active window: metadata scans 6 (151.45ms total, max 50.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1680ms; provider 3ms; post-provider 125ms; unknown 1092.02ms; source plugins.metadata.scan 316.52ms; agent.prepare 271.46ms
  - warm: total 1625ms; pre-provider 1498ms; provider 1ms; post-provider 126ms; response true
    - active window: metadata scans 2 (55.82ms total, max 41.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1498ms; provider 1ms; post-provider 126ms; unknown 910.02ms; source plugins.metadata.scan 316.52ms; agent.prepare 271.46ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1680 ms | 1094 ms | 586 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-8e2a29af-kova-260830-052108-aa7808/openclaw/timeline.jsonl |
  | warm | 1498 ms | 907 ms | 591 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-8e2a29af-kova-260830-052108-aa7808/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 1355 ms | 410 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 152 ms | 68 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 152 ms | 51 ms |
  | cold | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 134 ms | 35 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 948 ms | 381 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 140 ms | 59 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 138 ms | 37 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 56 ms | 42 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-2ab680e0-kova-260830-052108-aa7808
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 421.9 MB; tracked total 611.1 MB; max CPU 127%; samples 8; roles command-tree 538.1MB/139.2%, agent-process 421.9MB/127%, agent-cli 118.6MB/12.2%, mock-provider 75.3MB/5.8%
- agent: turn 1786ms; cold/warm 1786ms/1572ms; cold-warm delta 214ms; pre-provider 1649ms; provider 2ms; metadata scans 8 (204.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1775.3ms; max 1786ms; pre-provider p95 1639ms
- agent CLI attribution: cold known 1067ms / unattributed 582ms; warm known 861ms / unattributed 588ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 392.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1786ms; pre-provider 1649ms; provider 2ms; post-provider 135ms; response true
    - active window: metadata scans 6 (146.48ms total, max 49.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1649ms; provider 2ms; post-provider 135ms; unknown 1056.12ms; source plugins.metadata.scan 318.36ms; agent.prepare 274.52ms
  - warm: total 1572ms; pre-provider 1449ms; provider 1ms; post-provider 122ms; response true
    - active window: metadata scans 2 (58.16ms total, max 44.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1449ms; provider 1ms; post-provider 122ms; unknown 856.12ms; source plugins.metadata.scan 318.36ms; agent.prepare 274.52ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1649 ms | 1067 ms | 582 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-2ab680e0-kova-260830-052108-aa7808/openclaw/timeline.jsonl |
  | warm | 1449 ms | 861 ms | 588 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-2ab680e0-kova-260830-052108-aa7808/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1288 ms | 392 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 146 ms | 50 ms |
  | cold | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 145 ms | 39 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 141 ms | 64 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 892 ms | 359 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 135 ms | 58 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 131 ms | 35 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 59 ms | 45 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-67b331a3-kova-260830-052108-aa7808
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 421.9 MB; tracked total 614.2 MB; max CPU 123%; samples 8; roles command-tree 540.8MB/136%, agent-process 421.9MB/123%, agent-cli 118.9MB/13%, mock-provider 75.7MB/4.6%
- agent: turn 1766ms; cold/warm 1766ms/1623ms; cold-warm delta 143ms; pre-provider 1635ms; provider 3ms; metadata scans 8 (199.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1758.85ms; max 1766ms; pre-provider p95 1627.85ms
- agent CLI attribution: cold known 1074ms / unattributed 561ms; warm known 898ms / unattributed 594ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 383.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1766ms; pre-provider 1635ms; provider 3ms; post-provider 128ms; response true
    - active window: metadata scans 6 (143.35ms total, max 46.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1635ms; provider 3ms; post-provider 128ms; unknown 1047.06ms; source plugins.metadata.scan 303.96ms; agent.prepare 283.98ms
  - warm: total 1623ms; pre-provider 1492ms; provider 1ms; post-provider 130ms; response true
    - active window: metadata scans 2 (55.74ms total, max 41.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1492ms; provider 1ms; post-provider 130ms; unknown 904.06ms; source plugins.metadata.scan 303.96ms; agent.prepare 283.98ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1635 ms | 1074 ms | 561 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-67b331a3-kova-260830-052108-aa7808/openclaw/timeline.jsonl |
  | warm | 1492 ms | 898 ms | 594 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-67b331a3-kova-260830-052108-aa7808/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x23 | 23 | 0 | 1298 ms | 383 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 146 ms | 38 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 146 ms | 67 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 143 ms | 47 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 944 ms | 384 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 139 ms | 59 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 137 ms | 38 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 56 ms | 42 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260830-052108-aa7808-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260830-052108-aa7808-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260830-052108-aa7808-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-gateway-performance-man-005107f3-kova-260830-052108-aa7808
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-gateway-performance-man-1e8be6a8-kova-260830-052108-aa7808
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-gateway-performance-man-958fde53-kova-260830-052108-aa7808
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-8e2a29af-kova-260830-052108-aa7808
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-2ab680e0-kova-260830-052108-aa7808
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260830-052108-aa7808/kova-agent-cold-warm-message-67b331a3-kova-260830-052108-aa7808

## Target Cleanup

- Runtime: `kova-local-mtfd31zm-3vq-2f57b7ff`
- Result: removed
- Duration: 460ms

