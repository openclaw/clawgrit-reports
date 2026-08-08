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
| Run ID | `kova-260808-052631-726bfb` |
| Generated | 2026-08-08T05:28:35.825Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4678ms | 965.9MB | n/a | 161% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153% | 3361ms | 3175ms | 3242ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5203ms | 958.4 MB | 1499.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4678ms | 965.9 MB | 1506.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4662ms | 967.4 MB | 1510.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1163.2 MB | 3373ms | 3175ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1149.5 MB | 3356ms | 3198ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1166.4 MB | 3361ms | 3127ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1092.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 967.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 615.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 967.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 916.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 471.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 177.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 25.4% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 73.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 14.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-8e2a29af-kova-260808-052631-726bfb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 912.4 MB; tracked total 1163.2 MB; max CPU 153%; samples 13; roles command-tree 1089.4MB/179.4%, agent-process 912.4MB/153%, status-cli 614.9MB/179.4%, agent-cli 177.2MB/24.7%
- agent: turn 3373ms; cold/warm 3373ms/3175ms; cold-warm delta 198ms; pre-provider 3249ms; provider 3ms; metadata scans 13 (182.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3363.1ms; max 3373ms; pre-provider p95 3239.5ms
- agent CLI attribution: cold known 239ms / unattributed 3010ms; warm known 211ms / unattributed 2848ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1292.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3373ms; pre-provider 3249ms; provider 3ms; post-provider 121ms; response true
    - active window: metadata scans 8 (102.47ms total, max 36.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3249ms; provider 3ms; post-provider 121ms; unknown 2636.18ms; source plugins.metadata.scan 346.26ms; agent.prepare 266.56ms
  - warm: total 3175ms; pre-provider 3059ms; provider 1ms; post-provider 115ms; response true
    - active window: metadata scans 5 (79.76ms total, max 37.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3059ms; provider 1ms; post-provider 115ms; unknown 2446.18ms; source plugins.metadata.scan 346.26ms; agent.prepare 266.56ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3249 ms | 239 ms | 3010 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-8e2a29af-kova-260808-052631-726bfb/openclaw/timeline.jsonl |
  | warm | 3059 ms | 211 ms | 2848 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-8e2a29af-kova-260808-052631-726bfb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 136 ms | 44 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` | 8 | 0 | 103 ms | 36 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 132 ms | 46 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` | 5 | 0 | 79 ms | 38 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-2ab680e0-kova-260808-052631-726bfb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 899.4 MB; tracked total 1149.5 MB; max CPU 152%; samples 13; roles command-tree 1076.9MB/177.1%, agent-process 899.4MB/152%, status-cli 613.6MB/177.1%, agent-cli 177.5MB/24.2%
- agent: turn 3356ms; cold/warm 3356ms/3198ms; cold-warm delta 158ms; pre-provider 3238ms; provider 3ms; metadata scans 13 (185.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3348.1ms; max 3356ms; pre-provider p95 3230.2ms
- agent CLI attribution: cold known 256ms / unattributed 2982ms; warm known 203ms / unattributed 2879ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1284.01ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3356ms; pre-provider 3238ms; provider 3ms; post-provider 115ms; response true
    - active window: metadata scans 8 (117.69ms total, max 46.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3238ms; provider 3ms; post-provider 115ms; unknown 2616.78ms; source plugins.metadata.scan 349.74ms; agent.prepare 271.48ms
  - warm: total 3198ms; pre-provider 3082ms; provider 1ms; post-provider 115ms; response true
    - active window: metadata scans 5 (67.81ms total, max 31.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3082ms; provider 1ms; post-provider 115ms; unknown 2460.78ms; source plugins.metadata.scan 349.74ms; agent.prepare 271.48ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3238 ms | 256 ms | 2982 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-2ab680e0-kova-260808-052631-726bfb/openclaw/timeline.jsonl |
  | warm | 3082 ms | 203 ms | 2879 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-2ab680e0-kova-260808-052631-726bfb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 138 ms | 40 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` | 8 | 0 | 118 ms | 46 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 135 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` | 5 | 0 | 68 ms | 32 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-67b331a3-kova-260808-052631-726bfb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 916.9 MB; tracked total 1166.4 MB; max CPU 153%; samples 13; roles command-tree 1092.7MB/175.7%, agent-process 916.9MB/153%, status-cli 615.5MB/175.7%, agent-cli 177.7MB/25.4%
- agent: turn 3361ms; cold/warm 3361ms/3127ms; cold-warm delta 234ms; pre-provider 3242ms; provider 2ms; metadata scans 13 (181.96ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3349.3ms; max 3361ms; pre-provider p95 3230.4ms
- agent CLI attribution: cold known 255ms / unattributed 2987ms; warm known 190ms / unattributed 2820ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1275.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3361ms; pre-provider 3242ms; provider 2ms; post-provider 117ms; response true
    - active window: metadata scans 8 (118.51ms total, max 44.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3242ms; provider 2ms; post-provider 117ms; unknown 2638.82ms; source plugins.metadata.scan 341.13ms; agent.prepare 262.05ms
  - warm: total 3127ms; pre-provider 3010ms; provider 1ms; post-provider 116ms; response true
    - active window: metadata scans 5 (63.45ms total, max 30.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3010ms; provider 1ms; post-provider 116ms; unknown 2406.82ms; source plugins.metadata.scan 341.13ms; agent.prepare 262.05ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3242 ms | 255 ms | 2987 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-67b331a3-kova-260808-052631-726bfb/openclaw/timeline.jsonl |
  | warm | 3010 ms | 190 ms | 2820 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-67b331a3-kova-260808-052631-726bfb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 138 ms | 45 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` | 8 | 0 | 117 ms | 44 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 125 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` | 5 | 0 | 65 ms | 31 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260808-052631-726bfb-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260808-052631-726bfb-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260808-052631-726bfb-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-gateway-performance-man-005107f3-kova-260808-052631-726bfb
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-gateway-performance-man-1e8be6a8-kova-260808-052631-726bfb
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-gateway-performance-man-958fde53-kova-260808-052631-726bfb
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-8e2a29af-kova-260808-052631-726bfb
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-2ab680e0-kova-260808-052631-726bfb
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260808-052631-726bfb/kova-agent-cold-warm-message-67b331a3-kova-260808-052631-726bfb

## Target Cleanup

- Runtime: `kova-local-msjxl8w3-3yo-0bd6eb79`
- Result: removed
- Duration: 402ms

