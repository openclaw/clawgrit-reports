# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260921-052942-3e61cb' -- status took 61527ms, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260921-052942-3e61cb' -- status took 61527ms, over threshold 10000ms |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 6 (FAIL:4, BLOCKED:1, PASS:1) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260921-052942-3e61cb` |
| Generated | 2026-09-21T05:36:14.645Z |
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
| FAIL | 4 |
| BLOCKED | 1 |
| PASS | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1208.6 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 172 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[231.7%, 269.9%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 26 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[231.7%, 320.1%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 26 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260921-052942-3e61cb' -- status took 61527ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 937 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260921-052942-3e61cb' -- status took 61551ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 932.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | ocm @'kova-agent-cold-warm-message-67b331a3-kova-260921-052942-3e61cb' -- status took 61661ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 931.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:1, BLOCKED:1, PASS:1 | 172ms | 1000MB | n/a | 201.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 211.2% | 3482ms | 4472ms | 3297ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 172ms | 1005.7 MB | 1816 MB | n/a | n/a | gateway-tree peak RSS 1208.6 MB exceeded threshold 1200 MB |
| 2 | BLOCKED | gateway-performance/many-bundled-plugins |  | 26ms | 999.4 MB | 1789 MB | n/a | n/a | gateway max CPU interval \[231.7%, 269.9%\] crosses threshold 250%; CPU measurement is inconclusive |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 187ms | 1000 MB | 1771.6 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1103.3 MB | 3333ms | 4460ms | ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260921-052942-3e61cb' -- status took 61527ms, over threshold 10000ms |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1098.8 MB | 3482ms | 4642ms | ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260921-052942-3e61cb' -- status took 61551ms, over threshold 10000ms |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1098.1 MB | 3694ms | 4472ms | ocm @'kova-agent-cold-warm-message-67b331a3-kova-260921-052942-3e61cb' -- status took 61661ms, over threshold 10000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1208.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 320.1% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1031.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 234.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1005.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 269.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 937 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 224.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 593.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 159.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 202.6% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 173.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 75.4% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 138.4% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-gateway-performance-man-005107f3-kova-260921-052942-3e61cb
Measurements:
- startup: listening 0ms; health 172ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 172ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 172ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1005.7 MB; tracked total 1816 MB; max CPU 201.2%; samples 23; roles gateway-tree 1208.6MB/214.1%, gateway 1005.7MB/201.2%, command-tree 571.9MB/154.8%, status-cli 571.9MB/154.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 3148.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1208.6 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-gateway-performance-man-1e8be6a8-kova-260921-052942-3e61cb
Measurements:
- startup: listening 0ms; health 26ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 26ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 103ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 999.4 MB; tracked total 1789 MB; max CPU 269.9%; samples 24; roles gateway-tree 1166.8MB/320.1%, gateway 999.4MB/269.9%, command-tree 551.3MB/151.4%, status-cli 551.3MB/149.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2442.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU interval \[231.7%, 269.9%\] crosses threshold 250%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[231.7%, 320.1%\] crosses threshold 300%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-8e2a29af-kova-260921-052942-3e61cb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 937 MB; tracked total 1103.3 MB; max CPU 224.7%; samples 74; roles command-tree 1031.3MB/234.6%, agent-process 937MB/224.7%, status-cli 593.3MB/161.2%, agent-cli 159.7MB/150.6%
- agent: turn 4460ms; cold/warm 3333ms/4460ms; cold-warm delta 0ms; pre-provider 4283ms; provider 1ms; metadata scans 16 (479.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4403.65ms; max 4460ms; pre-provider p95 4226.1ms
- agent CLI attribution: cold known 2230ms / unattributed 915ms; warm known 3107ms / unattributed 1176ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59787.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260921-052942-3e61cb' -- status took 61527ms, over threshold 10000ms
- Agent turns:
  - cold: total 3333ms; pre-provider 3145ms; provider 2ms; post-provider 186ms; response true
    - active window: metadata scans 9 (268.1ms total, max 54.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3145ms; provider 2ms; post-provider 186ms; unknown 1999.95ms; source plugins.metadata.scan 590.99ms; agent.prepare 554.06ms
  - warm: total 4460ms; pre-provider 4283ms; provider 1ms; post-provider 176ms; response true
    - active window: metadata scans 7 (211.01ms total, max 53.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4283ms; provider 1ms; post-provider 176ms; unknown 3137.95ms; source plugins.metadata.scan 590.99ms; agent.prepare 554.06ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3145 ms | 2230 ms | 915 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-8e2a29af-kova-260921-052942-3e61cb/openclaw/timeline.jsonl |
  | warm | 4283 ms | 3107 ms | 1176 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-8e2a29af-kova-260921-052942-3e61cb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x35 | 35 | 0 | 2921 ms | 1080 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 411 ms | 187 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 289 ms | 132 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 266 ms | 54 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 50 ms | 50 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 3560 ms | 1851 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 585 ms | 335 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 264 ms | 127 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x6 | 7 | 0 | 210 ms | 53 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 52 ms | 52 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-2ab680e0-kova-260921-052942-3e61cb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 932.8 MB; tracked total 1098.8 MB; max CPU 211.2%; samples 74; roles command-tree 1026.7MB/220.8%, agent-process 932.8MB/211.2%, status-cli 541.8MB/158.4%, agent-cli 146.1MB/150.8%
- agent: turn 4642ms; cold/warm 3482ms/4642ms; cold-warm delta 0ms; pre-provider 4264ms; provider 1ms; metadata scans 16 (469.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4584ms; max 4642ms; pre-provider p95 4215.65ms
- agent CLI attribution: cold known 2291ms / unattributed 1006ms; warm known 3135ms / unattributed 1129ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59770.88ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260921-052942-3e61cb' -- status took 61551ms, over threshold 10000ms
- Agent turns:
  - cold: total 3482ms; pre-provider 3297ms; provider 2ms; post-provider 183ms; response true
    - active window: metadata scans 9 (260.13ms total, max 54.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3297ms; provider 2ms; post-provider 183ms; unknown 2029.39ms; source agent.prepare 683.33ms; plugins.metadata.scan 584.28ms
  - warm: total 4642ms; pre-provider 4264ms; provider 1ms; post-provider 377ms; response true
    - active window: metadata scans 7 (209.11ms total, max 56.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4264ms; provider 1ms; post-provider 377ms; unknown 2996.39ms; source agent.prepare 683.33ms; plugins.metadata.scan 584.28ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3297 ms | 2291 ms | 1006 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-2ab680e0-kova-260921-052942-3e61cb/openclaw/timeline.jsonl |
  | warm | 4264 ms | 3135 ms | 1129 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-2ab680e0-kova-260921-052942-3e61cb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x37 | 37 | 0 | 2931 ms | 1090 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 407 ms | 183 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 346 ms | 164 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 259 ms | 55 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 51 ms | 51 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 3517 ms | 1834 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 546 ms | 338 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 337 ms | 151 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x6 | 7 | 0 | 210 ms | 57 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 51 ms | 51 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-67b331a3-kova-260921-052942-3e61cb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 931.6 MB; tracked total 1098.1 MB; max CPU 202.6%; samples 74; roles command-tree 1026.2MB/208.2%, agent-process 931.6MB/202.6%, agent-cli 94.6MB/202.6%, status-cli 477.7MB/162.5%
- agent: turn 4472ms; cold/warm 3694ms/4472ms; cold-warm delta 0ms; pre-provider 4356ms; provider 0ms; metadata scans 16 (497.1ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4433.1ms; max 4472ms; pre-provider p95 4303.25ms
- agent CLI attribution: cold known 2331ms / unattributed 970ms; warm known 3207ms / unattributed 1149ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59763.51ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm @'kova-agent-cold-warm-message-67b331a3-kova-260921-052942-3e61cb' -- status took 61661ms, over threshold 10000ms
- Agent turns:
  - cold: total 3694ms; pre-provider 3301ms; provider 2ms; post-provider 391ms; response true
    - active window: metadata scans 9 (273.92ms total, max 58.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3301ms; provider 2ms; post-provider 391ms; unknown 2106.5ms; source plugins.metadata.scan 621.03ms; agent.prepare 573.47ms
  - warm: total 4472ms; pre-provider 4356ms; provider 0ms; post-provider 116ms; response true
    - active window: metadata scans 7 (223.18ms total, max 56.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4356ms; provider 0ms; post-provider 116ms; unknown 3161.5ms; source plugins.metadata.scan 621.03ms; agent.prepare 573.47ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3301 ms | 2331 ms | 970 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-67b331a3-kova-260921-052942-3e61cb/openclaw/timeline.jsonl |
  | warm | 4356 ms | 3207 ms | 1149 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-67b331a3-kova-260921-052942-3e61cb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 3080 ms | 1151 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 423 ms | 184 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 304 ms | 146 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 276 ms | 59 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 55 ms | 55 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x33 | 33 | 0 | 3754 ms | 1950 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 545 ms | 333 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 273 ms | 128 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x6 | 7 | 0 | 221 ms | 56 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 54 ms | 54 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260921-052942-3e61cb-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260921-052942-3e61cb-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260921-052942-3e61cb-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-gateway-performance-man-005107f3-kova-260921-052942-3e61cb
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-gateway-performance-man-1e8be6a8-kova-260921-052942-3e61cb
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-gateway-performance-man-958fde53-kova-260921-052942-3e61cb
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-8e2a29af-kova-260921-052942-3e61cb
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-2ab680e0-kova-260921-052942-3e61cb
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260921-052942-3e61cb/kova-agent-cold-warm-message-67b331a3-kova-260921-052942-3e61cb

## Target Cleanup

- Runtime: `kova-local-muat2t9d-3pi-596198f8`
- Result: removed
- Duration: 546ms

