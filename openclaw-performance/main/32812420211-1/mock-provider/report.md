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
| Run ID | `kova-260825-052105-48c248` |
| Generated | 2026-08-25T05:24:38.183Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 6145ms | 585.7MB | n/a | 120% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 126% | 2372ms | 2016ms | 2233ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 6145ms | 594.2 MB | 1046 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 6264ms | 583.9 MB | 1012.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5546ms | 585.7 MB | 1032.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 682.8 MB | 2372ms | 2098ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 680.5 MB | 2448ms | 2016ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 696.2 MB | 2231ms | 1952ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 624.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 594.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 122% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 495.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 594.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 120% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 345.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 139% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 130.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 135.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 494.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 127% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-8e2a29af-kova-260825-052105-48c248
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 481.3 MB; tracked total 682.8 MB; max CPU 127%; samples 11; roles command-tree 611.5MB/156.8%, status-cli 489.6MB/156.8%, agent-process 481.3MB/127%, agent-cli 130.2MB/135.7%
- agent: turn 2372ms; cold/warm 2372ms/2098ms; cold-warm delta 274ms; pre-provider 2233ms; provider 2ms; metadata scans 70 (925.61ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2358.3ms; max 2372ms; pre-provider p95 2219.85ms
- agent CLI attribution: cold known 1620ms / unattributed 613ms; warm known 1286ms / unattributed 684ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 524.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2372ms; pre-provider 2233ms; provider 2ms; post-provider 137ms; response true
    - active window: metadata scans 41 (540.44ms total, max 37.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2233ms; provider 2ms; post-provider 137ms; unknown 652.88ms; source plugins.metadata.scan 1327.43ms; agent.prepare 252.69ms
  - warm: total 2098ms; pre-provider 1970ms; provider 1ms; post-provider 127ms; response true
    - active window: metadata scans 29 (385.17ms total, max 39.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1970ms; provider 1ms; post-provider 127ms; unknown 389.88ms; source plugins.metadata.scan 1327.43ms; agent.prepare 252.69ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2233 ms | 1620 ms | 613 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-8e2a29af-kova-260825-052105-48c248/openclaw/timeline.jsonl |
  | warm | 1970 ms | 1286 ms | 684 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-8e2a29af-kova-260825-052105-48c248/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 1938 ms | 525 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 520 ms | 37 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 320 ms | 222 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 140 ms | 34 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 57 ms | 57 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x8, `agent.startup` x6 | 14 | 0 | 14 ms | 1 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1239 ms | 482 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 365 ms | 40 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 300 ms | 210 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 115 ms | 30 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 63 ms | 63 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x7, `agent.startup` x6 | 13 | 0 | 14 ms | 2 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-2ab680e0-kova-260825-052105-48c248
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 480.6 MB; tracked total 680.5 MB; max CPU 126%; samples 10; roles command-tree 609.5MB/150.2%, status-cli 495.5MB/150.2%, agent-process 480.6MB/126%, agent-cli 128.9MB/17.7%
- agent: turn 2448ms; cold/warm 2448ms/2016ms; cold-warm delta 432ms; pre-provider 2313ms; provider 2ms; metadata scans 70 (952.6ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2426.4ms; max 2448ms; pre-provider p95 2291.95ms
- agent CLI attribution: cold known 1675ms / unattributed 638ms; warm known 1261ms / unattributed 631ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 592.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2448ms; pre-provider 2313ms; provider 2ms; post-provider 133ms; response true
    - active window: metadata scans 41 (568.28ms total, max 40.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2313ms; provider 2ms; post-provider 133ms; unknown 737.29ms; source plugins.metadata.scan 1331.3ms; agent.prepare 244.41ms
  - warm: total 2016ms; pre-provider 1892ms; provider 1ms; post-provider 123ms; response true
    - active window: metadata scans 29 (384.32ms total, max 34.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1892ms; provider 1ms; post-provider 123ms; unknown 316.29ms; source plugins.metadata.scan 1331.3ms; agent.prepare 244.41ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2313 ms | 1675 ms | 638 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-2ab680e0-kova-260825-052105-48c248/openclaw/timeline.jsonl |
  | warm | 1892 ms | 1261 ms | 631 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-2ab680e0-kova-260825-052105-48c248/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 2078 ms | 593 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 545 ms | 40 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 318 ms | 221 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 128 ms | 32 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x11, `agent.startup` x6 | 17 | 0 | 17 ms | 1 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1232 ms | 485 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 363 ms | 35 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 310 ms | 219 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 117 ms | 30 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 56 ms | 56 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x6, `agent.startup` x7 | 13 | 0 | 14 ms | 2 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-67b331a3-kova-260825-052105-48c248
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 494.6 MB; tracked total 696.2 MB; max CPU 123%; samples 10; roles command-tree 624.7MB/152%, agent-process 494.6MB/123%, status-cli 485.5MB/152%, agent-cli 130.2MB/14.4%
- agent: turn 2231ms; cold/warm 2231ms/1952ms; cold-warm delta 279ms; pre-provider 2103ms; provider 2ms; metadata scans 70 (869.28ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2217.05ms; max 2231ms; pre-provider p95 2089.3ms
- agent CLI attribution: cold known 1514ms / unattributed 589ms; warm known 1220ms / unattributed 609ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 502.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2231ms; pre-provider 2103ms; provider 2ms; post-provider 126ms; response true
    - active window: metadata scans 41 (506.36ms total, max 36.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2103ms; provider 2ms; post-provider 126ms; unknown 634.91ms; source plugins.metadata.scan 1233.42ms; agent.prepare 234.67ms
  - warm: total 1952ms; pre-provider 1829ms; provider 0ms; post-provider 123ms; response true
    - active window: metadata scans 29 (362.92ms total, max 31.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1829ms; provider 0ms; post-provider 123ms; unknown 360.91ms; source plugins.metadata.scan 1233.42ms; agent.prepare 234.67ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2103 ms | 1514 ms | 589 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-67b331a3-kova-260825-052105-48c248/openclaw/timeline.jsonl |
  | warm | 1829 ms | 1220 ms | 609 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-67b331a3-kova-260825-052105-48c248/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1844 ms | 503 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 485 ms | 37 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 289 ms | 203 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 120 ms | 30 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 55 ms | 55 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x17, `agent.startup` x5 | 22 | 0 | 22 ms | 1 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1188 ms | 466 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 346 ms | 32 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 287 ms | 204 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 112 ms | 31 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 56 ms | 56 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x7, `agent.startup` x5 | 12 | 0 | 12 ms | 1 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260825-052105-48c248-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260825-052105-48c248-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260825-052105-48c248-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-gateway-performance-man-005107f3-kova-260825-052105-48c248
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-gateway-performance-man-1e8be6a8-kova-260825-052105-48c248
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-gateway-performance-man-958fde53-kova-260825-052105-48c248
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-8e2a29af-kova-260825-052105-48c248
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-2ab680e0-kova-260825-052105-48c248
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260825-052105-48c248/kova-agent-cold-warm-message-67b331a3-kova-260825-052105-48c248

## Target Cleanup

- Runtime: `kova-local-mt87vqo5-40x-5efe5572`
- Result: removed
- Duration: 416ms

