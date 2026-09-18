# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway-tree max CPU interval \[177.9%, 351.6%\] crosses threshold 300%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway-tree max CPU interval \[177.9%, 351.6%\] crosses threshold 300%; CPU measurement is inconclusive |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 6 (BLOCKED:1, PASS:5) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260918-052346-b8b499` |
| Generated | 2026-09-18T05:27:19.787Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[177.9%, 351.6%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 146 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | BLOCKED:1, PASS:2 | 143ms | 965.7MB | n/a | 223.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 173.2% | 3259ms | 4059ms | 3133ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 146ms | 968.4 MB | 1617.4 MB | n/a | n/a | gateway-tree max CPU interval \[177.9%, 351.6%\] crosses threshold 300%; CPU measurement is inconclusive |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 142ms | 965.7 MB | 1634.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 143ms | 960.6 MB | 1532 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 824.7 MB | 3595ms | 4217ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 823.4 MB | 3259ms | 3827ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 836.2 MB | 3218ms | 4059ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1036.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 351.6% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 968.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 243.4% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 762.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 187.8% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 165.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 189.3% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 672.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 558.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 173.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.2% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 74.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 108.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-gateway-performance-man-005107f3-kova-260918-052346-b8b499
Measurements:
- startup: listening 0ms; health 146ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 146ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 146ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 968.4 MB; tracked total 1617.4 MB; max CPU 243.4%; samples 24; roles gateway-tree 1036.2MB/351.6%, gateway 968.4MB/243.4%, command-tree 510.5MB/152.2%, uncategorized 154MB/189.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1793.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree max CPU interval \[177.9%, 351.6%\] crosses threshold 300%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-8e2a29af-kova-260918-052346-b8b499
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 660.4 MB; tracked total 824.7 MB; max CPU 177.9%; samples 15; roles command-tree 751.1MB/187.8%, agent-process 660.4MB/177.9%, status-cli 536.6MB/168.4%, agent-cli 173.6MB/118.8%
- agent: turn 4217ms; cold/warm 3595ms/4217ms; cold-warm delta 0ms; pre-provider 4066ms; provider 2ms; metadata scans 14 (576ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4185.9ms; max 4217ms; pre-provider p95 4035.75ms
- agent CLI attribution: cold known 2581ms / unattributed 880ms; warm known 3032ms / unattributed 1034ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1721.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3595ms; pre-provider 3461ms; provider 4ms; post-provider 130ms; response true
    - active window: metadata scans 8 (332.5ms total, max 79.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3461ms; provider 4ms; post-provider 130ms; unknown 2316.05ms; source plugins.metadata.scan 714.77ms; agent.prepare 430.18ms
  - warm: total 4217ms; pre-provider 4066ms; provider 2ms; post-provider 149ms; response true
    - active window: metadata scans 6 (243.5ms total, max 59.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4066ms; provider 2ms; post-provider 149ms; unknown 2921.05ms; source plugins.metadata.scan 714.77ms; agent.prepare 430.18ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3461 ms | 2581 ms | 880 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-8e2a29af-kova-260918-052346-b8b499/openclaw/timeline.jsonl |
  | warm | 4066 ms | 3032 ms | 1034 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-8e2a29af-kova-260918-052346-b8b499/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x39 | 39 | 0 | 3547 ms | 1242 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 536 ms | 281 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 334 ms | 80 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 234 ms | 48 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 46 ms | 46 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x33 | 33 | 0 | 3935 ms | 1722 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 624 ms | 328 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 244 ms | 60 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 195 ms | 54 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 44 ms | 44 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-2ab680e0-kova-260918-052346-b8b499
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 662 MB; tracked total 823.4 MB; max CPU 173.2%; samples 14; roles command-tree 752.4MB/173.2%, agent-cli 90.4MB/173.2%, agent-process 662MB/173.2%, status-cli 435.2MB/156.2%
- agent: turn 3827ms; cold/warm 3259ms/3827ms; cold-warm delta 0ms; pre-provider 3719ms; provider 1ms; metadata scans 14 (518.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3798.6ms; max 3827ms; pre-provider p95 3689.7ms
- agent CLI attribution: cold known 2359ms / unattributed 774ms; warm known 2773ms / unattributed 946ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1629.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3259ms; pre-provider 3133ms; provider 4ms; post-provider 122ms; response true
    - active window: metadata scans 8 (290.82ms total, max 65.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3133ms; provider 4ms; post-provider 122ms; unknown 2087.2ms; source plugins.metadata.scan 653.32ms; agent.prepare 392.48ms
  - warm: total 3827ms; pre-provider 3719ms; provider 1ms; post-provider 107ms; response true
    - active window: metadata scans 6 (227.74ms total, max 56.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3719ms; provider 1ms; post-provider 107ms; unknown 2673.2ms; source plugins.metadata.scan 653.32ms; agent.prepare 392.48ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3133 ms | 2359 ms | 774 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-2ab680e0-kova-260918-052346-b8b499/openclaw/timeline.jsonl |
  | warm | 3719 ms | 2773 ms | 946 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-2ab680e0-kova-260918-052346-b8b499/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x39 | 39 | 0 | 3121 ms | 1080 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 530 ms | 288 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 290 ms | 65 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 209 ms | 44 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 43 ms | 43 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x31 | 31 | 0 | 3711 ms | 1630 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 497 ms | 261 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 228 ms | 56 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 184 ms | 40 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 44 ms | 44 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-67b331a3-kova-260918-052346-b8b499
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 672.7 MB; tracked total 836.2 MB; max CPU 161.6%; samples 14; roles command-tree 762.8MB/171.6%, agent-process 672.7MB/161.6%, status-cli 558.2MB/154.4%, agent-cli 163.7MB/158.4%
- agent: turn 4059ms; cold/warm 3218ms/4059ms; cold-warm delta 0ms; pre-provider 3925ms; provider 1ms; metadata scans 14 (519.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4016.95ms; max 4059ms; pre-provider p95 3882.05ms
- agent CLI attribution: cold known 2289ms / unattributed 777ms; warm known 2911ms / unattributed 1014ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1705.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3218ms; pre-provider 3066ms; provider 4ms; post-provider 148ms; response true
    - active window: metadata scans 8 (278.45ms total, max 57.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3066ms; provider 4ms; post-provider 148ms; unknown 2011.03ms; source plugins.metadata.scan 650.7ms; agent.prepare 404.27ms
  - warm: total 4059ms; pre-provider 3925ms; provider 1ms; post-provider 133ms; response true
    - active window: metadata scans 6 (240.82ms total, max 63.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3925ms; provider 1ms; post-provider 133ms; unknown 2870.03ms; source plugins.metadata.scan 650.7ms; agent.prepare 404.27ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3066 ms | 2289 ms | 777 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-67b331a3-kova-260918-052346-b8b499/openclaw/timeline.jsonl |
  | warm | 3925 ms | 2911 ms | 1014 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-67b331a3-kova-260918-052346-b8b499/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x38 | 38 | 0 | 3007 ms | 1022 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 547 ms | 307 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 280 ms | 58 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 207 ms | 44 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 3866 ms | 1705 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 530 ms | 292 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x5, `startup` | 6 | 0 | 240 ms | 63 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 197 ms | 44 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 44 ms | 44 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260918-052346-b8b499-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260918-052346-b8b499-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260918-052346-b8b499-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-gateway-performance-man-005107f3-kova-260918-052346-b8b499
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-gateway-performance-man-1e8be6a8-kova-260918-052346-b8b499
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-gateway-performance-man-958fde53-kova-260918-052346-b8b499
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-8e2a29af-kova-260918-052346-b8b499
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-2ab680e0-kova-260918-052346-b8b499
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260918-052346-b8b499/kova-agent-cold-warm-message-67b331a3-kova-260918-052346-b8b499

## Target Cleanup

- Runtime: `kova-local-mu6ijmvr-3pa-37ab012d`
- Result: removed
- Duration: 578ms

