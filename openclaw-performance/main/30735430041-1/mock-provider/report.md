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
| Run ID | `kova-260802-061454-c63813` |
| Generated | 2026-08-02T06:17:19.330Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4603ms | 972.7MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153% | 3288ms | 3323ms | 3166ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5124ms | 913.9 MB | 1704.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4509ms | 972.7 MB | 1765.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4603ms | 976.9 MB | 1772.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1057.5 MB | 3307ms | 3272ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1070 MB | 3288ms | 3389ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1076.1 MB | 3263ms | 3323ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1005.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 976.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 910.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 976.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 830.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 729.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 464.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 175.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 24.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-8e2a29af-kova-260802-061454-c63813
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 810.8 MB; tracked total 1057.5 MB; max CPU 153%; samples 14; roles command-tree 986.2MB/174%, status-cli 902.7MB/171.5%, agent-process 810.8MB/153%, agent-cli 175.6MB/23.3%
- agent: turn 3307ms; cold/warm 3307ms/3272ms; cold-warm delta 35ms; pre-provider 3187ms; provider 3ms; metadata scans 14 (172.34ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3305.25ms; max 3307ms; pre-provider p95 3185.9ms
- agent CLI attribution: cold known 222ms / unattributed 2965ms; warm known 204ms / unattributed 2961ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1472.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3307ms; pre-provider 3187ms; provider 3ms; post-provider 117ms; response true
    - active window: metadata scans 7 (92.46ms total, max 32.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3187ms; provider 3ms; post-provider 117ms; unknown 2576.83ms; source plugins.metadata.scan 351.74ms; agent.prepare 258.43ms
  - warm: total 3272ms; pre-provider 3165ms; provider 1ms; post-provider 106ms; response true
    - active window: metadata scans 7 (79.88ms total, max 35.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3165ms; provider 1ms; post-provider 106ms; unknown 2554.83ms; source plugins.metadata.scan 351.74ms; agent.prepare 258.43ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3187 ms | 222 ms | 2965 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-8e2a29af-kova-260802-061454-c63813/openclaw/timeline.jsonl |
  | warm | 3165 ms | 204 ms | 2961 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-8e2a29af-kova-260802-061454-c63813/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 134 ms | 40 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 7 | 0 | 91 ms | 33 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 126 ms | 39 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 7 | 0 | 81 ms | 35 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-2ab680e0-kova-260802-061454-c63813
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 825.1 MB; tracked total 1070 MB; max CPU 155%; samples 14; roles command-tree 1000MB/173.5%, status-cli 904.1MB/173.3%, agent-process 825.1MB/155%, agent-cli 175MB/23.5%
- agent: turn 3389ms; cold/warm 3288ms/3389ms; cold-warm delta 0ms; pre-provider 3275ms; provider 1ms; metadata scans 14 (174.91ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3383.95ms; max 3389ms; pre-provider p95 3269.55ms
- agent CLI attribution: cold known 220ms / unattributed 2946ms; warm known 212ms / unattributed 3063ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1463.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3288ms; pre-provider 3166ms; provider 2ms; post-provider 120ms; response true
    - active window: metadata scans 7 (90.74ms total, max 32.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3166ms; provider 2ms; post-provider 120ms; unknown 2551.39ms; source plugins.metadata.scan 351.56ms; agent.prepare 263.05ms
  - warm: total 3389ms; pre-provider 3275ms; provider 1ms; post-provider 113ms; response true
    - active window: metadata scans 7 (84.17ms total, max 36.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3275ms; provider 1ms; post-provider 113ms; unknown 2660.39ms; source plugins.metadata.scan 351.56ms; agent.prepare 263.05ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3166 ms | 220 ms | 2946 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-2ab680e0-kova-260802-061454-c63813/openclaw/timeline.jsonl |
  | warm | 3275 ms | 212 ms | 3063 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-2ab680e0-kova-260802-061454-c63813/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 132 ms | 38 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 7 | 0 | 91 ms | 32 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 131 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 7 | 0 | 84 ms | 37 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-67b331a3-kova-260802-061454-c63813
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 830.9 MB; tracked total 1076.1 MB; max CPU 153%; samples 14; roles command-tree 1005.6MB/173.5%, status-cli 910.5MB/173.5%, agent-process 830.9MB/153%, agent-cli 175.2MB/24.2%
- agent: turn 3323ms; cold/warm 3263ms/3323ms; cold-warm delta 0ms; pre-provider 3207ms; provider 1ms; metadata scans 14 (175.75ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3320ms; max 3323ms; pre-provider p95 3203.85ms
- agent CLI attribution: cold known 216ms / unattributed 2928ms; warm known 201ms / unattributed 3006ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1454.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3263ms; pre-provider 3144ms; provider 3ms; post-provider 116ms; response true
    - active window: metadata scans 7 (91.76ms total, max 32.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3144ms; provider 3ms; post-provider 116ms; unknown 2537.21ms; source plugins.metadata.scan 357.59ms; agent.prepare 249.2ms
  - warm: total 3323ms; pre-provider 3207ms; provider 1ms; post-provider 115ms; response true
    - active window: metadata scans 7 (83.99ms total, max 35.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3207ms; provider 1ms; post-provider 115ms; unknown 2600.21ms; source plugins.metadata.scan 357.59ms; agent.prepare 249.2ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3144 ms | 216 ms | 2928 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-67b331a3-kova-260802-061454-c63813/openclaw/timeline.jsonl |
  | warm | 3207 ms | 201 ms | 3006 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-67b331a3-kova-260802-061454-c63813/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 127 ms | 37 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 7 | 0 | 92 ms | 32 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 121 ms | 36 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 7 | 0 | 83 ms | 35 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260802-061454-c63813-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260802-061454-c63813-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260802-061454-c63813-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-gateway-performance-man-005107f3-kova-260802-061454-c63813
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-gateway-performance-man-1e8be6a8-kova-260802-061454-c63813
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-gateway-performance-man-958fde53-kova-260802-061454-c63813
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-8e2a29af-kova-260802-061454-c63813
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-2ab680e0-kova-260802-061454-c63813
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260802-061454-c63813/kova-agent-cold-warm-message-67b331a3-kova-260802-061454-c63813

## Target Cleanup

- Runtime: `kova-local-msbeod3i-3zr-20f156e6`
- Result: removed
- Duration: 386ms

