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
| Run ID | `kova-260831-052502-3b3cf6` |
| Generated | 2026-08-31T05:27:50.162Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2ms | 588.2MB | n/a | 134% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 126% | 1981ms | 1773ms | 1836ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 9ms | 590.2 MB | 1032.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 588.2 MB | 665 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 573.1 MB | 650.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 716.8 MB | 2107ms | 1773ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 569.4 MB | 1981ms | 1809ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 594 MB | 1971ms | 1767ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 643.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 146.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 590.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 138% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 590.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 138% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 512.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 129% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 370.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 135% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 130.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 17.9% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 75.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 6.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 6.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 1.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-8e2a29af-kova-260831-052502-3b3cf6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 512.9 MB; tracked total 716.8 MB; max CPU 126%; samples 9; roles command-tree 643.8MB/140.9%, agent-process 512.9MB/126%, agent-cli 130.9MB/17.9%, mock-provider 74.9MB/6.2%
- agent: turn 2107ms; cold/warm 2107ms/1773ms; cold-warm delta 334ms; pre-provider 1922ms; provider 4ms; metadata scans 8 (191.25ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2090.3ms; max 2107ms; pre-provider p95 1907.75ms
- agent CLI attribution: cold known 1251ms / unattributed 671ms; warm known 995ms / unattributed 642ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 423.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2107ms; pre-provider 1922ms; provider 4ms; post-provider 181ms; response true
    - active window: metadata scans 6 (139.92ms total, max 43.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1922ms; provider 4ms; post-provider 181ms; unknown 1272.33ms; source agent.prepare 339.8ms; plugins.metadata.scan 309.87ms
  - warm: total 1773ms; pre-provider 1637ms; provider 1ms; post-provider 135ms; response true
    - active window: metadata scans 2 (51.33ms total, max 38.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1637ms; provider 1ms; post-provider 135ms; unknown 987.33ms; source agent.prepare 339.8ms; plugins.metadata.scan 309.87ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1922 ms | 1251 ms | 671 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-8e2a29af-kova-260831-052502-3b3cf6/openclaw/timeline.jsonl |
  | warm | 1637 ms | 995 ms | 642 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-8e2a29af-kova-260831-052502-3b3cf6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1419 ms | 423 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 197 ms | 50 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 180 ms | 82 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 140 ms | 43 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 63 ms | 63 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 9 ms | 9 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1008 ms | 403 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 158 ms | 67 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 141 ms | 37 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 63 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 52 ms | 38 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-2ab680e0-kova-260831-052502-3b3cf6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 370.4 MB; tracked total 569.4 MB; max CPU 123%; samples 8; roles command-tree 496.3MB/140.9%, agent-process 370.4MB/123%, agent-cli 126.1MB/17.9%, mock-provider 75.7MB/5.2%
- agent: turn 1981ms; cold/warm 1981ms/1809ms; cold-warm delta 172ms; pre-provider 1836ms; provider 3ms; metadata scans 8 (189.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1972.4ms; max 1981ms; pre-provider p95 1827.75ms
- agent CLI attribution: cold known 1196ms / unattributed 640ms; warm known 1026ms / unattributed 645ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 426.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1981ms; pre-provider 1836ms; provider 3ms; post-provider 142ms; response true
    - active window: metadata scans 6 (138.09ms total, max 43.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1836ms; provider 3ms; post-provider 142ms; unknown 1250.53ms; source plugins.metadata.scan 295.15ms; agent.prepare 290.32ms
  - warm: total 1809ms; pre-provider 1671ms; provider 1ms; post-provider 137ms; response true
    - active window: metadata scans 2 (51.67ms total, max 38.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1671ms; provider 1ms; post-provider 137ms; unknown 1085.53ms; source plugins.metadata.scan 295.15ms; agent.prepare 290.32ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1836 ms | 1196 ms | 640 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-2ab680e0-kova-260831-052502-3b3cf6/openclaw/timeline.jsonl |
  | warm | 1671 ms | 1026 ms | 645 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-2ab680e0-kova-260831-052502-3b3cf6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 1400 ms | 426 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 171 ms | 76 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 151 ms | 38 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 139 ms | 44 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1044 ms | 418 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 158 ms | 68 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 146 ms | 37 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 71 ms | 71 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 52 ms | 38 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 9 ms | 9 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-67b331a3-kova-260831-052502-3b3cf6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 394.6 MB; tracked total 594 MB; max CPU 129%; samples 8; roles command-tree 520.7MB/146.7%, agent-process 394.6MB/129%, agent-cli 126.8MB/17.7%, mock-provider 75.5MB/5.3%
- agent: turn 1971ms; cold/warm 1971ms/1767ms; cold-warm delta 204ms; pre-provider 1826ms; provider 3ms; metadata scans 8 (183.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 1960.8ms; max 1971ms; pre-provider p95 1816.15ms
- agent CLI attribution: cold known 1188ms / unattributed 638ms; warm known 990ms / unattributed 639ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 423.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1971ms; pre-provider 1826ms; provider 3ms; post-provider 142ms; response true
    - active window: metadata scans 6 (132.69ms total, max 40.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1826ms; provider 3ms; post-provider 142ms; unknown 1225.73ms; source plugins.metadata.scan 301.19ms; agent.prepare 299.08ms
  - warm: total 1767ms; pre-provider 1629ms; provider 1ms; post-provider 137ms; response true
    - active window: metadata scans 2 (50.81ms total, max 37.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1629ms; provider 1ms; post-provider 137ms; unknown 1028.73ms; source plugins.metadata.scan 301.19ms; agent.prepare 299.08ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1826 ms | 1188 ms | 638 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-67b331a3-kova-260831-052502-3b3cf6/openclaw/timeline.jsonl |
  | warm | 1629 ms | 990 ms | 639 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-67b331a3-kova-260831-052502-3b3cf6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 1385 ms | 423 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 176 ms | 81 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 154 ms | 39 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 132 ms | 40 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1000 ms | 403 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 157 ms | 66 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 147 ms | 38 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 51 ms | 38 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 8 ms | 8 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260831-052502-3b3cf6-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260831-052502-3b3cf6-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260831-052502-3b3cf6-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-gateway-performance-man-005107f3-kova-260831-052502-3b3cf6
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-gateway-performance-man-1e8be6a8-kova-260831-052502-3b3cf6
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-gateway-performance-man-958fde53-kova-260831-052502-3b3cf6
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-8e2a29af-kova-260831-052502-3b3cf6
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-2ab680e0-kova-260831-052502-3b3cf6
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260831-052502-3b3cf6/kova-agent-cold-warm-message-67b331a3-kova-260831-052502-3b3cf6

## Target Cleanup

- Runtime: `kova-local-mtgsnxog-3w1-cbf1ca6e`
- Result: removed
- Duration: 530ms

