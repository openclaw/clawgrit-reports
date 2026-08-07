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
| Run ID | `kova-260807-054700-7cfc3b` |
| Generated | 2026-08-07T05:49:11.178Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4996ms | 961.1MB | n/a | 161% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152% | 3366ms | 3115ms | 3238ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5290ms | 957.5 MB | 1491.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4707ms | 961.1 MB | 1499.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4996ms | 964.3 MB | 1505.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1141.1 MB | 3366ms | 3115ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1125.8 MB | 3478ms | 3112ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1113.3 MB | 3348ms | 3236ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1067.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 964.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 163% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 605.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 964.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 163% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 891 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 468 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 176.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 27.3% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 73.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 17.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-8e2a29af-kova-260807-054700-7cfc3b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 891 MB; tracked total 1141.1 MB; max CPU 151%; samples 13; roles command-tree 1067.3MB/171.5%, agent-process 891MB/151%, status-cli 605.1MB/171.5%, agent-cli 176.3MB/24.5%
- agent: turn 3366ms; cold/warm 3366ms/3115ms; cold-warm delta 251ms; pre-provider 3238ms; provider 3ms; metadata scans 15 (196.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3353.45ms; max 3366ms; pre-provider p95 3225.8ms
- agent CLI attribution: cold known 256ms / unattributed 2982ms; warm known 200ms / unattributed 2794ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1304.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3366ms; pre-provider 3238ms; provider 3ms; post-provider 125ms; response true
    - active window: metadata scans 9 (127.65ms total, max 35.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3238ms; provider 3ms; post-provider 125ms; unknown 2622.87ms; source plugins.metadata.scan 355.37ms; agent.prepare 259.76ms
  - warm: total 3115ms; pre-provider 2994ms; provider 1ms; post-provider 120ms; response true
    - active window: metadata scans 6 (68.46ms total, max 29.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2994ms; provider 1ms; post-provider 120ms; unknown 2378.87ms; source plugins.metadata.scan 355.37ms; agent.prepare 259.76ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3238 ms | 256 ms | 2982 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-8e2a29af-kova-260807-054700-7cfc3b/openclaw/timeline.jsonl |
  | warm | 2994 ms | 200 ms | 2794 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-8e2a29af-kova-260807-054700-7cfc3b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 128 ms | 44 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` x2 | 9 | 0 | 128 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 131 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 69 ms | 30 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-2ab680e0-kova-260807-054700-7cfc3b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 876.3 MB; tracked total 1125.8 MB; max CPU 152%; samples 13; roles command-tree 1052.3MB/175.3%, agent-process 876.3MB/152%, status-cli 602.6MB/170.8%, agent-cli 176MB/27.3%
- agent: turn 3478ms; cold/warm 3478ms/3112ms; cold-warm delta 366ms; pre-provider 3357ms; provider 2ms; metadata scans 15 (195.51ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3459.7ms; max 3478ms; pre-provider p95 3339ms
- agent CLI attribution: cold known 263ms / unattributed 3094ms; warm known 192ms / unattributed 2805ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1324.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3478ms; pre-provider 3357ms; provider 2ms; post-provider 119ms; response true
    - active window: metadata scans 9 (126.28ms total, max 36.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3357ms; provider 2ms; post-provider 119ms; unknown 2753.14ms; source plugins.metadata.scan 347.75ms; agent.prepare 256.11ms
  - warm: total 3112ms; pre-provider 2997ms; provider 1ms; post-provider 114ms; response true
    - active window: metadata scans 6 (69.23ms total, max 32.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2997ms; provider 1ms; post-provider 114ms; unknown 2393.14ms; source plugins.metadata.scan 347.75ms; agent.prepare 256.11ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3357 ms | 263 ms | 3094 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-2ab680e0-kova-260807-054700-7cfc3b/openclaw/timeline.jsonl |
  | warm | 2997 ms | 192 ms | 2805 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-2ab680e0-kova-260807-054700-7cfc3b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 135 ms | 45 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` x2 | 9 | 0 | 128 ms | 37 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 123 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 69 ms | 32 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-67b331a3-kova-260807-054700-7cfc3b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 865.2 MB; tracked total 1113.3 MB; max CPU 152%; samples 13; roles command-tree 1040.9MB/175.4%, agent-process 865.2MB/152%, status-cli 605.2MB/173.8%, agent-cli 175.7MB/25.4%
- agent: turn 3348ms; cold/warm 3348ms/3236ms; cold-warm delta 112ms; pre-provider 3232ms; provider 3ms; metadata scans 15 (198.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3342.4ms; max 3348ms; pre-provider p95 3226.2ms
- agent CLI attribution: cold known 253ms / unattributed 2979ms; warm known 208ms / unattributed 2908ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1285.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3348ms; pre-provider 3232ms; provider 3ms; post-provider 113ms; response true
    - active window: metadata scans 9 (119.39ms total, max 37.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3232ms; provider 3ms; post-provider 113ms; unknown 2614.32ms; source plugins.metadata.scan 357.18ms; agent.prepare 260.5ms
  - warm: total 3236ms; pre-provider 3116ms; provider 1ms; post-provider 119ms; response true
    - active window: metadata scans 6 (79.11ms total, max 31.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3116ms; provider 1ms; post-provider 119ms; unknown 2498.32ms; source plugins.metadata.scan 357.18ms; agent.prepare 260.5ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3232 ms | 253 ms | 2979 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-67b331a3-kova-260807-054700-7cfc3b/openclaw/timeline.jsonl |
  | warm | 3116 ms | 208 ms | 2908 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-67b331a3-kova-260807-054700-7cfc3b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 134 ms | 44 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` x2 | 9 | 0 | 119 ms | 37 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 127 ms | 44 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 81 ms | 32 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260807-054700-7cfc3b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260807-054700-7cfc3b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260807-054700-7cfc3b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-gateway-performance-man-005107f3-kova-260807-054700-7cfc3b
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-gateway-performance-man-1e8be6a8-kova-260807-054700-7cfc3b
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-gateway-performance-man-958fde53-kova-260807-054700-7cfc3b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-8e2a29af-kova-260807-054700-7cfc3b
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-2ab680e0-kova-260807-054700-7cfc3b
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260807-054700-7cfc3b/kova-agent-cold-warm-message-67b331a3-kova-260807-054700-7cfc3b

## Target Cleanup

- Runtime: `kova-local-msiivq8a-3yv-1d075c3a`
- Result: removed
- Duration: 408ms

