# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[200.5%, 292.2%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[200.5%, 292.2%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 6 (BLOCKED:1, PASS:5) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260917-052514-20f685` |
| Generated | 2026-09-17T05:30:23.619Z |
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
| BLOCKED | 1 |
| PASS | 5 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[200.5%, 292.2%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 170 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 292.2%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 170 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | plugin-cli max CPU interval \[117.8%, 365.2%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 170 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | BLOCKED:1, PASS:2 | 170ms | 958.5MB | n/a | 208.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 168.1% | 3522ms | 4661ms | 3360ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 170ms | 950.8 MB | 1455.1 MB | n/a | n/a | gateway max CPU interval \[200.5%, 292.2%\] crosses threshold 250%; CPU measurement is inconclusive |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 191ms | 958.5 MB | 1500.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 119ms | 960.6 MB | 1534.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 795.2 MB | 3781ms | 4899ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 813.1 MB | 3522ms | 4653ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 811.6 MB | 3499ms | 4661ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 960.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 292.2% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 741.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 365.2% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 960.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 292.2% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 291.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 365.2% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 651.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 574.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.4% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 74.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 292.2% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 308.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 154.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-gateway-performance-man-005107f3-kova-260917-052514-20f685
Measurements:
- startup: listening 1ms; health 170ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 169ms; post-ready p95 6ms; failures 0; final failures 0; slowest final/final 201ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 950.8 MB; tracked total 1455.1 MB; max CPU 292.2%; samples 33; roles gateway 950.8MB/292.2%, command-tree 432.6MB/365.2%, gateway-tree 950.8MB/292.2%, plugin-cli 98.1MB/365.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 3611.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU interval \[200.5%, 292.2%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 292.2%\] crosses threshold 150%; CPU measurement is inconclusive
  - plugin-cli max CPU interval \[117.8%, 365.2%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-8e2a29af-kova-260917-052514-20f685
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 633.9 MB; tracked total 795.2 MB; max CPU 169.5%; samples 15; roles command-tree 724.2MB/169.5%, agent-cli 108.7MB/169.5%, agent-process 633.9MB/169.5%, status-cli 574.4MB/166.1%
- agent: turn 4899ms; cold/warm 3781ms/4899ms; cold-warm delta 0ms; pre-provider 4745ms; provider 2ms; metadata scans 14 (591.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4843.1ms; max 4899ms; pre-provider p95 4688ms
- agent CLI attribution: cold known 2597ms / unattributed 1008ms; warm known 3540ms / unattributed 1205ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2048.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3781ms; pre-provider 3605ms; provider 3ms; post-provider 173ms; response true
    - active window: metadata scans 8 (303.04ms total, max 63.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3605ms; provider 3ms; post-provider 173ms; unknown 2395.69ms; source plugins.metadata.scan 749.55ms; agent.prepare 459.76ms
  - warm: total 4899ms; pre-provider 4745ms; provider 2ms; post-provider 152ms; response true
    - active window: metadata scans 6 (288.29ms total, max 78.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4745ms; provider 2ms; post-provider 152ms; unknown 3535.69ms; source plugins.metadata.scan 749.55ms; agent.prepare 459.76ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3605 ms | 2597 ms | 1008 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-8e2a29af-kova-260917-052514-20f685/openclaw/timeline.jsonl |
  | warm | 4745 ms | 3540 ms | 1205 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-8e2a29af-kova-260917-052514-20f685/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x39 | 39 | 0 | 3595 ms | 1222 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 523 ms | 232 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 302 ms | 63 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 262 ms | 67 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 53 ms | 53 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 4665 ms | 2049 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 708 ms | 384 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 288 ms | 78 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 199 ms | 48 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 53 ms | 53 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-2ab680e0-kova-260917-052514-20f685
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 651.8 MB; tracked total 813.1 MB; max CPU 168.1%; samples 15; roles command-tree 741.8MB/177.5%, agent-process 651.8MB/168.1%, status-cli 461.3MB/171.4%, agent-cli 138.6MB/158%
- agent: turn 4653ms; cold/warm 3522ms/4653ms; cold-warm delta 0ms; pre-provider 4458ms; provider 2ms; metadata scans 14 (575.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4596.45ms; max 4653ms; pre-provider p95 4402.7ms
- agent CLI attribution: cold known 2509ms / unattributed 843ms; warm known 3227ms / unattributed 1231ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1828.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3522ms; pre-provider 3352ms; provider 3ms; post-provider 167ms; response true
    - active window: metadata scans 8 (331.55ms total, max 63.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3352ms; provider 3ms; post-provider 167ms; unknown 2062.17ms; source plugins.metadata.scan 774.54ms; agent.prepare 515.29ms
  - warm: total 4653ms; pre-provider 4458ms; provider 2ms; post-provider 193ms; response true
    - active window: metadata scans 6 (243.94ms total, max 65.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4458ms; provider 2ms; post-provider 193ms; unknown 3168.17ms; source plugins.metadata.scan 774.54ms; agent.prepare 515.29ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3352 ms | 2509 ms | 843 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-2ab680e0-kova-260917-052514-20f685/openclaw/timeline.jsonl |
  | warm | 4458 ms | 3227 ms | 1231 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-2ab680e0-kova-260917-052514-20f685/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x40 | 40 | 0 | 3557 ms | 1238 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 469 ms | 203 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 332 ms | 63 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 245 ms | 61 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 48 ms | 48 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x31 | 31 | 0 | 4067 ms | 1828 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 618 ms | 324 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 270 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 245 ms | 66 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 51 ms | 51 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-67b331a3-kova-260917-052514-20f685
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 649.9 MB; tracked total 811.6 MB; max CPU 159.7%; samples 15; roles command-tree 740.1MB/169.7%, agent-process 649.9MB/159.7%, status-cli 554.7MB/159.3%, agent-cli 172.2MB/155.2%
- agent: turn 4661ms; cold/warm 3499ms/4661ms; cold-warm delta 0ms; pre-provider 4511ms; provider 2ms; metadata scans 14 (615.15ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4602.9ms; max 4661ms; pre-provider p95 4453.45ms
- agent CLI attribution: cold known 2458ms / unattributed 902ms; warm known 3360ms / unattributed 1151ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1947.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3499ms; pre-provider 3360ms; provider 3ms; post-provider 136ms; response true
    - active window: metadata scans 8 (329.38ms total, max 81.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3360ms; provider 3ms; post-provider 136ms; unknown 2141.68ms; source plugins.metadata.scan 759.63ms; agent.prepare 458.69ms
  - warm: total 4661ms; pre-provider 4511ms; provider 2ms; post-provider 148ms; response true
    - active window: metadata scans 6 (285.77ms total, max 77.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4511ms; provider 2ms; post-provider 148ms; unknown 3292.68ms; source plugins.metadata.scan 759.63ms; agent.prepare 458.69ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3360 ms | 2458 ms | 902 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-67b331a3-kova-260917-052514-20f685/openclaw/timeline.jsonl |
  | warm | 4511 ms | 3360 ms | 1151 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-67b331a3-kova-260917-052514-20f685/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 3576 ms | 1253 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 431 ms | 200 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 330 ms | 82 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 207 ms | 55 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 59 ms | 59 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 4498 ms | 1948 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 580 ms | 303 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 286 ms | 78 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 252 ms | 80 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 44 ms | 44 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260917-052514-20f685-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260917-052514-20f685-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260917-052514-20f685-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-gateway-performance-man-005107f3-kova-260917-052514-20f685
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-gateway-performance-man-1e8be6a8-kova-260917-052514-20f685
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-gateway-performance-man-958fde53-kova-260917-052514-20f685
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-8e2a29af-kova-260917-052514-20f685
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-2ab680e0-kova-260917-052514-20f685
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260917-052514-20f685/kova-agent-cold-warm-message-67b331a3-kova-260917-052514-20f685

## Target Cleanup

- Runtime: `kova-local-mu535obk-43v-250db1b5`
- Result: removed
- Duration: 692ms

