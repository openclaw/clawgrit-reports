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
| Run ID | `kova-260901-052617-b7ee7d` |
| Generated | 2026-09-01T05:29:46.092Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4ms | 582.2MB | n/a | 141% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155% | 3165ms | 2977ms | 2903ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 12ms | 570.4 MB | 991.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4ms | 582.2 MB | 996.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3ms | 611.8 MB | 1027.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 675.3 MB | 2638ms | 2608ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 711 MB | 3165ms | 2977ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 681.4 MB | 3603ms | 4041ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 637.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 277.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 611.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 415.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 188.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 611.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 354 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 186.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 511.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 349.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 308.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-8e2a29af-kova-260901-052617-b7ee7d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 477.8 MB; tracked total 675.3 MB; max CPU 147%; samples 11; roles command-tree 604.1MB/176.7%, agent-process 477.8MB/147%, status-cli 415.5MB/173%, agent-cli 126.3MB/29.7%
- agent: turn 2638ms; cold/warm 2638ms/2608ms; cold-warm delta 30ms; pre-provider 2388ms; provider 4ms; metadata scans 8 (248.1ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2636.5ms; max 2638ms; pre-provider p95 2384.7ms
- agent CLI attribution: cold known 1571ms / unattributed 817ms; warm known 1565ms / unattributed 757ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 651.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2638ms; pre-provider 2388ms; provider 4ms; post-provider 246ms; response true
    - active window: metadata scans 6 (181.72ms total, max 62.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2388ms; provider 4ms; post-provider 246ms; unknown 1534.18ms; source agent.prepare 434.21ms; plugins.metadata.scan 419.61ms
  - warm: total 2608ms; pre-provider 2322ms; provider 2ms; post-provider 284ms; response true
    - active window: metadata scans 2 (66.38ms total, max 49.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2322ms; provider 2ms; post-provider 284ms; unknown 1468.18ms; source agent.prepare 434.21ms; plugins.metadata.scan 419.61ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2388 ms | 1571 ms | 817 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-8e2a29af-kova-260901-052617-b7ee7d/openclaw/timeline.jsonl |
  | warm | 2322 ms | 1565 ms | 757 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-8e2a29af-kova-260901-052617-b7ee7d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 1915 ms | 527 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 236 ms | 106 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 224 ms | 61 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 183 ms | 63 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 89 ms | 89 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 12 ms | 12 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1813 ms | 651 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 263 ms | 116 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 208 ms | 66 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 76 ms | 76 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 66 ms | 49 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 11 ms | 11 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-2ab680e0-kova-260901-052617-b7ee7d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 511.5 MB; tracked total 711 MB; max CPU 155%; samples 12; roles command-tree 637.5MB/277.6%, agent-process 511.5MB/155%, status-cli 407MB/188.9%, agent-cli 194.4MB/141.6%
- agent: turn 3165ms; cold/warm 3165ms/2977ms; cold-warm delta 188ms; pre-provider 2903ms; provider 5ms; metadata scans 8 (303.29ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3155.6ms; max 3165ms; pre-provider p95 2892.75ms
- agent CLI attribution: cold known 1977ms / unattributed 926ms; warm known 1698ms / unattributed 1000ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 721.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3165ms; pre-provider 2903ms; provider 5ms; post-provider 257ms; response true
    - active window: metadata scans 6 (227.81ms total, max 55.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2903ms; provider 5ms; post-provider 257ms; unknown 1929.18ms; source agent.prepare 491.73ms; plugins.metadata.scan 482.09ms
  - warm: total 2977ms; pre-provider 2698ms; provider 1ms; post-provider 278ms; response true
    - active window: metadata scans 2 (75.48ms total, max 53.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2698ms; provider 1ms; post-provider 278ms; unknown 1724.18ms; source agent.prepare 491.73ms; plugins.metadata.scan 482.09ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2903 ms | 1977 ms | 926 ms | 5 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-2ab680e0-kova-260901-052617-b7ee7d/openclaw/timeline.jsonl |
  | warm | 2698 ms | 1698 ms | 1000 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-2ab680e0-kova-260901-052617-b7ee7d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 2580 ms | 721 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 283 ms | 126 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 262 ms | 62 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 228 ms | 55 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 99 ms | 99 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 13 ms | 13 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 1893 ms | 654 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 261 ms | 103 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 229 ms | 60 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 111 ms | 111 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 75 ms | 53 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-67b331a3-kova-260901-052617-b7ee7d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 483.9 MB; tracked total 681.4 MB; max CPU 157%; samples 13; roles command-tree 610MB/190%, agent-process 483.9MB/157%, agent-cli 354MB/186.6%, status-cli 406.5MB/184.7%
- agent: turn 4041ms; cold/warm 3603ms/4041ms; cold-warm delta 0ms; pre-provider 3743ms; provider 3ms; metadata scans 8 (415.95ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4019.1ms; max 4041ms; pre-provider p95 3719.05ms
- agent CLI attribution: cold known 2301ms / unattributed 963ms; warm known 2562ms / unattributed 1181ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1030.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3603ms; pre-provider 3264ms; provider 6ms; post-provider 333ms; response true
    - active window: metadata scans 6 (271.38ms total, max 99.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3264ms; provider 6ms; post-provider 333ms; unknown 2112.3ms; source plugins.metadata.scan 595.3ms; agent.prepare 556.4ms
  - warm: total 4041ms; pre-provider 3743ms; provider 3ms; post-provider 295ms; response true
    - active window: metadata scans 2 (144.57ms total, max 121.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3743ms; provider 3ms; post-provider 295ms; unknown 2591.3ms; source plugins.metadata.scan 595.3ms; agent.prepare 556.4ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3264 ms | 2301 ms | 963 ms | 6 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-67b331a3-kova-260901-052617-b7ee7d/openclaw/timeline.jsonl |
  | warm | 3743 ms | 2562 ms | 1181 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-67b331a3-kova-260901-052617-b7ee7d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 2913 ms | 814 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 336 ms | 150 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 272 ms | 69 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 272 ms | 100 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 111 ms | 111 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2782 ms | 1031 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 452 ms | 209 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 286 ms | 83 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 178 ms | 178 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 144 ms | 121 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260901-052617-b7ee7d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260901-052617-b7ee7d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260901-052617-b7ee7d-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-gateway-performance-man-005107f3-kova-260901-052617-b7ee7d
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-gateway-performance-man-1e8be6a8-kova-260901-052617-b7ee7d
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-gateway-performance-man-958fde53-kova-260901-052617-b7ee7d
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-8e2a29af-kova-260901-052617-b7ee7d
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-2ab680e0-kova-260901-052617-b7ee7d
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260901-052617-b7ee7d/kova-agent-cold-warm-message-67b331a3-kova-260901-052617-b7ee7d

## Target Cleanup

- Runtime: `kova-local-mti85dtm-40u-fd7ca4d9`
- Result: removed
- Duration: 785ms

