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
| Run ID | `kova-260919-052224-7af65e` |
| Generated | 2026-09-19T05:25:56.283Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 274ms | 988.1MB | n/a | 164.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 214.7% | 2938ms | 3928ms | 2617ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 274ms | 988.1 MB | 1736.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 211ms | 992.9 MB | 1759.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 274ms | 983.9 MB | 1662.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 765.5 MB | 2931ms | 3928ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 896.5 MB | 3016ms | 5879ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 890.5 MB | 2938ms | 3722ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1158.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 225.5% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 823.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 262.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 992.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 176.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 732.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 253.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 162.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 217.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 530.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 162.9% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 170.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 92% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 136.7% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-8e2a29af-kova-260919-052224-7af65e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 604.2 MB; tracked total 765.5 MB; max CPU 205.8%; samples 12; roles command-tree 694.5MB/205.8%, agent-cli 90.3MB/205.8%, agent-process 604.2MB/205.8%, status-cli 480.6MB/153.4%
- agent: turn 3928ms; cold/warm 2931ms/3928ms; cold-warm delta 0ms; pre-provider 3598ms; provider 2ms; metadata scans 14 (437.69ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3878.15ms; max 3928ms; pre-provider p95 3547.95ms
- agent CLI attribution: cold known 1938ms / unattributed 659ms; warm known 2725ms / unattributed 873ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1478.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2931ms; pre-provider 2597ms; provider 2ms; post-provider 332ms; response true
    - active window: metadata scans 8 (231.54ms total, max 51.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2597ms; provider 2ms; post-provider 332ms; unknown 1472.13ms; source agent.prepare 571.88ms; plugins.metadata.scan 552.99ms
  - warm: total 3928ms; pre-provider 3598ms; provider 2ms; post-provider 328ms; response true
    - active window: metadata scans 6 (206.15ms total, max 58.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3598ms; provider 2ms; post-provider 328ms; unknown 2473.13ms; source agent.prepare 571.88ms; plugins.metadata.scan 552.99ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2597 ms | 1938 ms | 659 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-8e2a29af-kova-260919-052224-7af65e/openclaw/timeline.jsonl |
  | warm | 3598 ms | 2725 ms | 873 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-8e2a29af-kova-260919-052224-7af65e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x38 | 38 | 0 | 2411 ms | 833 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 385 ms | 166 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 289 ms | 123 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 231 ms | 51 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 43 ms | 43 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 3218 ms | 1479 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 543 ms | 316 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 282 ms | 130 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 206 ms | 59 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 44 ms | 44 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-2ab680e0-kova-260919-052224-7af65e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 732.7 MB; tracked total 896.5 MB; max CPU 253.4%; samples 15; roles command-tree 823.4MB/262.2%, agent-process 732.7MB/253.4%, status-cli 507.7MB/156%, agent-cli 162.3MB/217.6%
- agent: turn 5879ms; cold/warm 3016ms/5879ms; cold-warm delta 0ms; pre-provider 5323ms; provider 2ms; metadata scans 14 (528.63ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5735.85ms; max 5879ms; pre-provider p95 5190.95ms
- agent CLI attribution: cold known 1968ms / unattributed 714ms; warm known 4187ms / unattributed 1136ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2252.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3016ms; pre-provider 2682ms; provider 2ms; post-provider 332ms; response true
    - active window: metadata scans 8 (245.83ms total, max 56.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2682ms; provider 2ms; post-provider 332ms; unknown 1263.1ms; source agent.prepare 743.31ms; plugins.metadata.scan 675.59ms
  - warm: total 5879ms; pre-provider 5323ms; provider 2ms; post-provider 554ms; response true
    - active window: metadata scans 6 (282.8ms total, max 76.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5323ms; provider 2ms; post-provider 554ms; unknown 3904.1ms; source agent.prepare 743.31ms; plugins.metadata.scan 675.59ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2682 ms | 1968 ms | 714 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-2ab680e0-kova-260919-052224-7af65e/openclaw/timeline.jsonl |
  | warm | 5323 ms | 4187 ms | 1136 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-2ab680e0-kova-260919-052224-7af65e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 2425 ms | 853 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 362 ms | 166 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 304 ms | 126 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 247 ms | 57 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 53 ms | 53 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x31 | 31 | 0 | 5004 ms | 2252 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 889 ms | 499 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 440 ms | 199 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x5, `startup` | 6 | 0 | 285 ms | 77 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 47 ms | 47 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-67b331a3-kova-260919-052224-7af65e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 727.9 MB; tracked total 890.5 MB; max CPU 214.7%; samples 12; roles command-tree 817.7MB/214.7%, agent-cli 90.3MB/214.7%, agent-process 727.9MB/214.7%, status-cli 490.1MB/153.2%
- agent: turn 3722ms; cold/warm 2938ms/3722ms; cold-warm delta 0ms; pre-provider 3388ms; provider 1ms; metadata scans 14 (425.16ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3682.8ms; max 3722ms; pre-provider p95 3349.45ms
- agent CLI attribution: cold known 1963ms / unattributed 654ms; warm known 2578ms / unattributed 810ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1389.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2938ms; pre-provider 2617ms; provider 2ms; post-provider 319ms; response true
    - active window: metadata scans 8 (234.24ms total, max 54.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2617ms; provider 2ms; post-provider 319ms; unknown 1489.19ms; source agent.prepare 582.61ms; plugins.metadata.scan 545.2ms
  - warm: total 3722ms; pre-provider 3388ms; provider 1ms; post-provider 333ms; response true
    - active window: metadata scans 6 (190.92ms total, max 52.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3388ms; provider 1ms; post-provider 333ms; unknown 2260.19ms; source agent.prepare 582.61ms; plugins.metadata.scan 545.2ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2617 ms | 1963 ms | 654 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-67b331a3-kova-260919-052224-7af65e/openclaw/timeline.jsonl |
  | warm | 3388 ms | 2578 ms | 810 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-67b331a3-kova-260919-052224-7af65e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x35 | 35 | 0 | 2403 ms | 839 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 391 ms | 174 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 293 ms | 124 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 236 ms | 55 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 45 ms | 45 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 3051 ms | 1389 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 504 ms | 295 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 289 ms | 158 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 191 ms | 52 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260919-052224-7af65e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260919-052224-7af65e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260919-052224-7af65e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-gateway-performance-man-005107f3-kova-260919-052224-7af65e
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-gateway-performance-man-1e8be6a8-kova-260919-052224-7af65e
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-gateway-performance-man-958fde53-kova-260919-052224-7af65e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-8e2a29af-kova-260919-052224-7af65e
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-2ab680e0-kova-260919-052224-7af65e
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260919-052224-7af65e/kova-agent-cold-warm-message-67b331a3-kova-260919-052224-7af65e

## Target Cleanup

- Runtime: `kova-local-mu7xxqia-3pk-67095894`
- Result: removed
- Duration: 574ms

