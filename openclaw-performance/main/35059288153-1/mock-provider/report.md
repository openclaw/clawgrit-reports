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
| Run ID | `kova-260916-052509-c60f3c` |
| Generated | 2026-09-16T05:29:13.260Z |
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
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 36ms | 941.4MB | n/a | 244.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 168.9% | 3542ms | 4526ms | 3366ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 38ms | 929.4 MB | 1424.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 36ms | 953.5 MB | 1449.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 35ms | 941.4 MB | 1507.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 783.7 MB | 3583ms | 4526ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 771.1 MB | 3542ms | 4218ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 768.6 MB | 3344ms | 4666ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 953.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 249.2% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 953.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 256.4% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 712.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 178.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 626.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 574.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 167.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.9% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 153.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 82.5% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-8e2a29af-kova-260916-052509-c60f3c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 626.9 MB; tracked total 783.7 MB; max CPU 170.9%; samples 15; roles command-tree 712.6MB/173.5%, agent-process 626.9MB/170.9%, agent-cli 85.8MB/170.9%, status-cli 525.9MB/170.9%
- agent: turn 4526ms; cold/warm 3583ms/4526ms; cold-warm delta 0ms; pre-provider 4315ms; provider 2ms; metadata scans 14 (573.93ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4478.85ms; max 4526ms; pre-provider p95 4269.95ms
- agent CLI attribution: cold known 2534ms / unattributed 880ms; warm known 3179ms / unattributed 1136ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1870.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3583ms; pre-provider 3414ms; provider 4ms; post-provider 165ms; response true
    - active window: metadata scans 8 (295.26ms total, max 59.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3414ms; provider 4ms; post-provider 165ms; unknown 2227.8ms; source plugins.metadata.scan 742.1ms; agent.prepare 444.1ms
  - warm: total 4526ms; pre-provider 4315ms; provider 2ms; post-provider 209ms; response true
    - active window: metadata scans 6 (278.67ms total, max 68.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4315ms; provider 2ms; post-provider 209ms; unknown 3128.8ms; source plugins.metadata.scan 742.1ms; agent.prepare 444.1ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3414 ms | 2534 ms | 880 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-8e2a29af-kova-260916-052509-c60f3c/openclaw/timeline.jsonl |
  | warm | 4315 ms | 3179 ms | 1136 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-8e2a29af-kova-260916-052509-c60f3c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x38 | 38 | 0 | 3396 ms | 1135 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 514 ms | 205 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 294 ms | 59 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 258 ms | 80 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 43 ms | 43 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x35 | 35 | 0 | 4246 ms | 1871 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 594 ms | 302 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x5, `startup` | 6 | 0 | 280 ms | 68 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 188 ms | 36 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 46 ms | 46 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-2ab680e0-kova-260916-052509-c60f3c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 611 MB; tracked total 771.1 MB; max CPU 168.9%; samples 15; roles command-tree 696.9MB/178.9%, agent-process 611MB/168.9%, status-cli 574.3MB/171.9%, agent-cli 167.5MB/108.1%
- agent: turn 4218ms; cold/warm 3542ms/4218ms; cold-warm delta 0ms; pre-provider 4067ms; provider 2ms; metadata scans 14 (576.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4184.2ms; max 4218ms; pre-provider p95 4031.95ms
- agent CLI attribution: cold known 2449ms / unattributed 917ms; warm known 2946ms / unattributed 1121ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1648.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3542ms; pre-provider 3366ms; provider 4ms; post-provider 172ms; response true
    - active window: metadata scans 8 (341.98ms total, max 73.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3366ms; provider 4ms; post-provider 172ms; unknown 2228.41ms; source plugins.metadata.scan 742.05ms; agent.prepare 395.54ms
  - warm: total 4218ms; pre-provider 4067ms; provider 2ms; post-provider 149ms; response true
    - active window: metadata scans 6 (234.46ms total, max 62.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4067ms; provider 2ms; post-provider 149ms; unknown 2929.41ms; source plugins.metadata.scan 742.05ms; agent.prepare 395.54ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3366 ms | 2449 ms | 917 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-2ab680e0-kova-260916-052509-c60f3c/openclaw/timeline.jsonl |
  | warm | 4067 ms | 2946 ms | 1121 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-2ab680e0-kova-260916-052509-c60f3c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x38 | 38 | 0 | 3338 ms | 1175 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 512 ms | 227 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 342 ms | 73 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 197 ms | 44 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 49 ms | 49 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 3713 ms | 1649 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 588 ms | 324 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x5, `startup` | 6 | 0 | 235 ms | 62 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 200 ms | 40 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 59 ms | 59 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-67b331a3-kova-260916-052509-c60f3c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 610.9 MB; tracked total 768.6 MB; max CPU 167.6%; samples 15; roles command-tree 697.2MB/177.6%, agent-process 610.9MB/167.6%, status-cli 482.8MB/167.7%, agent-cli 160.9MB/113.6%
- agent: turn 4666ms; cold/warm 3344ms/4666ms; cold-warm delta 0ms; pre-provider 4508ms; provider 2ms; metadata scans 14 (543.03ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4599.9ms; max 4666ms; pre-provider p95 4439.95ms
- agent CLI attribution: cold known 2257ms / unattributed 890ms; warm known 3355ms / unattributed 1153ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1854.24ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3344ms; pre-provider 3147ms; provider 5ms; post-provider 192ms; response true
    - active window: metadata scans 8 (273.26ms total, max 61.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3147ms; provider 5ms; post-provider 192ms; unknown 2030.8ms; source plugins.metadata.scan 694.12ms; agent.prepare 422.08ms
  - warm: total 4666ms; pre-provider 4508ms; provider 2ms; post-provider 156ms; response true
    - active window: metadata scans 6 (269.77ms total, max 64.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4508ms; provider 2ms; post-provider 156ms; unknown 3391.8ms; source plugins.metadata.scan 694.12ms; agent.prepare 422.08ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3147 ms | 2257 ms | 890 ms | 5 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-67b331a3-kova-260916-052509-c60f3c/openclaw/timeline.jsonl |
  | warm | 4508 ms | 3355 ms | 1153 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-67b331a3-kova-260916-052509-c60f3c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 2925 ms | 995 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 524 ms | 238 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 273 ms | 62 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 190 ms | 38 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 52 ms | 52 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x33 | 33 | 0 | 4332 ms | 1854 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 686 ms | 381 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x5, `startup` | 6 | 0 | 270 ms | 65 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 233 ms | 47 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 54 ms | 54 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260916-052509-c60f3c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260916-052509-c60f3c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260916-052509-c60f3c-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-gateway-performance-man-005107f3-kova-260916-052509-c60f3c
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-gateway-performance-man-1e8be6a8-kova-260916-052509-c60f3c
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-gateway-performance-man-958fde53-kova-260916-052509-c60f3c
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-8e2a29af-kova-260916-052509-c60f3c
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-2ab680e0-kova-260916-052509-c60f3c
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260916-052509-c60f3c/kova-agent-cold-warm-message-67b331a3-kova-260916-052509-c60f3c

## Target Cleanup

- Runtime: `kova-local-mu3nppyf-41m-c61002be`
- Result: removed
- Duration: 651ms

