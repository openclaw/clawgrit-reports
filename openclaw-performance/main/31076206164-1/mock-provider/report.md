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
- Required obligations: 109 total, 0 missing, 0 failed
- Categories: command: 55, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260806-060820-b9e9dd` |
| Generated | 2026-08-06T06:10:24.958Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4799ms | 955MB | n/a | 158% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154% | 3354ms | 3127ms | 3233ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5443ms | 955 MB | 1481.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4799ms | 953.2 MB | 1482.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4755ms | 956.3 MB | 1489.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1130.8 MB | 3354ms | 3167ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1142.6 MB | 3362ms | 3127ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1132.3 MB | 3243ms | 3123ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1069.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 956.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 620.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 956.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 893.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 461.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 176.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 25.7% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 73.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 16.6% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-8e2a29af-kova-260806-060820-b9e9dd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 881 MB; tracked total 1130.8 MB; max CPU 154%; samples 13; roles command-tree 1057MB/176.4%, agent-process 881MB/154%, status-cli 606.3MB/176.4%, agent-cli 176.1MB/25.7%
- agent: turn 3354ms; cold/warm 3354ms/3167ms; cold-warm delta 187ms; pre-provider 3233ms; provider 2ms; metadata scans 15 (192.48ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3344.65ms; max 3354ms; pre-provider p95 3223.9ms
- agent CLI attribution: cold known 261ms / unattributed 2972ms; warm known 198ms / unattributed 2853ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1290.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3354ms; pre-provider 3233ms; provider 2ms; post-provider 119ms; response true
    - active window: metadata scans 9 (123.65ms total, max 35.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3233ms; provider 2ms; post-provider 119ms; unknown 2605.12ms; source plugins.metadata.scan 359.89ms; agent.prepare 267.99ms
  - warm: total 3167ms; pre-provider 3051ms; provider 1ms; post-provider 115ms; response true
    - active window: metadata scans 6 (68.83ms total, max 30.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3051ms; provider 1ms; post-provider 115ms; unknown 2423.12ms; source plugins.metadata.scan 359.89ms; agent.prepare 267.99ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3233 ms | 261 ms | 2972 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-8e2a29af-kova-260806-060820-b9e9dd/openclaw/timeline.jsonl |
  | warm | 3051 ms | 198 ms | 2853 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-8e2a29af-kova-260806-060820-b9e9dd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 138 ms | 48 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` x2 | 9 | 0 | 123 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 129 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 69 ms | 30 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-2ab680e0-kova-260806-060820-b9e9dd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 893.6 MB; tracked total 1142.6 MB; max CPU 154%; samples 13; roles command-tree 1069.3MB/175.4%, agent-process 893.6MB/154%, status-cli 620.9MB/170.6%, agent-cli 176.2MB/25.4%
- agent: turn 3362ms; cold/warm 3362ms/3127ms; cold-warm delta 235ms; pre-provider 3236ms; provider 3ms; metadata scans 15 (191.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3350.25ms; max 3362ms; pre-provider p95 3224.8ms
- agent CLI attribution: cold known 261ms / unattributed 2975ms; warm known 187ms / unattributed 2825ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1273.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3362ms; pre-provider 3236ms; provider 3ms; post-provider 123ms; response true
    - active window: metadata scans 9 (124.45ms total, max 34.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3236ms; provider 3ms; post-provider 123ms; unknown 2623.51ms; source plugins.metadata.scan 352.66ms; agent.prepare 259.83ms
  - warm: total 3127ms; pre-provider 3012ms; provider 1ms; post-provider 114ms; response true
    - active window: metadata scans 6 (67.42ms total, max 29.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3012ms; provider 1ms; post-provider 114ms; unknown 2399.51ms; source plugins.metadata.scan 352.66ms; agent.prepare 259.83ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3236 ms | 261 ms | 2975 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-2ab680e0-kova-260806-060820-b9e9dd/openclaw/timeline.jsonl |
  | warm | 3012 ms | 187 ms | 2825 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-2ab680e0-kova-260806-060820-b9e9dd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 138 ms | 45 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` x2 | 9 | 0 | 123 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 119 ms | 43 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 68 ms | 30 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-67b331a3-kova-260806-060820-b9e9dd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 882.6 MB; tracked total 1132.3 MB; max CPU 149%; samples 13; roles command-tree 1058.6MB/176.4%, agent-process 882.6MB/149%, status-cli 612MB/176.4%, agent-cli 176MB/23.5%
- agent: turn 3243ms; cold/warm 3243ms/3123ms; cold-warm delta 120ms; pre-provider 3128ms; provider 3ms; metadata scans 15 (183.07ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3237ms; max 3243ms; pre-provider p95 3121.75ms
- agent CLI attribution: cold known 245ms / unattributed 2883ms; warm known 192ms / unattributed 2811ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1275.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3243ms; pre-provider 3128ms; provider 3ms; post-provider 112ms; response true
    - active window: metadata scans 9 (115.37ms total, max 33.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3128ms; provider 3ms; post-provider 112ms; unknown 2516.97ms; source plugins.metadata.scan 356.11ms; agent.prepare 254.92ms
  - warm: total 3123ms; pre-provider 3003ms; provider 1ms; post-provider 119ms; response true
    - active window: metadata scans 6 (67.7ms total, max 29.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3003ms; provider 1ms; post-provider 119ms; unknown 2391.97ms; source plugins.metadata.scan 356.11ms; agent.prepare 254.92ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3128 ms | 245 ms | 2883 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-67b331a3-kova-260806-060820-b9e9dd/openclaw/timeline.jsonl |
  | warm | 3003 ms | 192 ms | 2811 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-67b331a3-kova-260806-060820-b9e9dd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 130 ms | 45 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` x2 | 9 | 0 | 115 ms | 33 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 124 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 68 ms | 30 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260806-060820-b9e9dd-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260806-060820-b9e9dd-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260806-060820-b9e9dd-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-gateway-performance-man-005107f3-kova-260806-060820-b9e9dd
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-gateway-performance-man-1e8be6a8-kova-260806-060820-b9e9dd
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-gateway-performance-man-958fde53-kova-260806-060820-b9e9dd
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-8e2a29af-kova-260806-060820-b9e9dd
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-2ab680e0-kova-260806-060820-b9e9dd
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260806-060820-b9e9dd/kova-agent-cold-warm-message-67b331a3-kova-260806-060820-b9e9dd

## Target Cleanup

- Runtime: `kova-local-msh47bm3-3z0-f61f94c3`
- Result: removed
- Duration: 382ms

