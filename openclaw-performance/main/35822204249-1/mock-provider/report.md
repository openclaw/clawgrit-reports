# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1018.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1112.3 MB, agent-process 1018.1 MB, status-cli 522.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1018.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1112.3 MB, agent-process 1018.1 MB, status-cli 522.2 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 6 (FAIL:4, PASS:2) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260923-052522-274c02` |
| Generated | 2026-09-23T05:29:42.539Z |
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
| PASS | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1303.9 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 10 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1303.6 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 13 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1298.4 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1018.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1112.3 MB, agent-process 1018.1 MB, status-cli 522.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1018.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 10ms | 1135.2MB | n/a | 202.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:1, PASS:2 | n/a | 0MB | n/a | 257.3% | 4696ms | 5982ms | 4524ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 10ms | 1135.2 MB | 1812.8 MB | n/a | n/a | gateway-tree peak RSS 1303.9 MB exceeded threshold 1200 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 13ms | 1135.5 MB | 1792.2 MB | n/a | n/a | gateway-tree peak RSS 1303.6 MB exceeded threshold 1200 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5ms | 1130 MB | 1800.6 MB | n/a | n/a | gateway-tree peak RSS 1298.4 MB exceeded threshold 1200 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1184.4 MB | 4696ms | 6233ms | agent-process peak RSS 1018.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1112.3 MB, agent-process 1018.1 MB, status-cli 522.2 MB |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1133.2 MB | 5959ms | 5982ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1103.1 MB | 4695ms | 5973ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1303.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 232.1% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1112.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 283.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1135.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 202.7% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1018.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 272.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 592 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 202.9% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 223.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 77.4% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 94.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.5% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 138.3% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-gateway-performance-man-005107f3-kova-260923-052522-274c02
Measurements:
- startup: listening 1ms; health 10ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 9ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 42ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1135.2 MB; tracked total 1812.8 MB; max CPU 193%; samples 26; roles gateway-tree 1303.9MB/232.1%, gateway 1135.2MB/193%, command-tree 438.8MB/153.8%, status-cli 436.9MB/153.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2434.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1303.9 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-gateway-performance-man-1e8be6a8-kova-260923-052522-274c02
Measurements:
- startup: listening 0ms; health 13ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 13ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 13ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1135.5 MB; tracked total 1792.2 MB; max CPU 202.5%; samples 26; roles gateway-tree 1303.6MB/221.2%, gateway 1135.5MB/202.5%, command-tree 417MB/158.9%, status-cli 417MB/158.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2623.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1303.6 MB exceeded threshold 1200 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-gateway-performance-man-958fde53-kova-260923-052522-274c02
Measurements:
- startup: listening 1ms; health 5ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 2
- health: startup p95 4ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 38ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1130 MB; tracked total 1800.6 MB; max CPU 202.7%; samples 27; roles gateway-tree 1298.4MB/220.4%, gateway 1130MB/202.7%, command-tree 430.2MB/151.6%, status-cli 430.2MB/151.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2540.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1298.4 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-8e2a29af-kova-260923-052522-274c02
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1018.1 MB; tracked total 1184.4 MB; max CPU 257.3%; samples 18; roles command-tree 1112.3MB/267.5%, agent-process 1018.1MB/257.3%, status-cli 522.2MB/202.9%, agent-cli 94.2MB/149.7%
- agent: turn 6233ms; cold/warm 4696ms/6233ms; cold-warm delta 0ms; pre-provider 5904ms; provider 1ms; metadata scans 16 (590.12ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6156.15ms; max 6233ms; pre-provider p95 5835ms
- agent CLI attribution: cold known 2724ms / unattributed 1800ms; warm known 4172ms / unattributed 1732ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2237.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1018.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1112.3 MB, agent-process 1018.1 MB, status-cli 522.2 MB
- Agent turns:
  - cold: total 4696ms; pre-provider 4524ms; provider 2ms; post-provider 170ms; response true
    - active window: metadata scans 9 (295.78ms total, max 59.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4524ms; provider 2ms; post-provider 170ms; unknown 2523.45ms; source agent.prepare 1263.26ms; plugins.metadata.scan 737.29ms
  - warm: total 6233ms; pre-provider 5904ms; provider 1ms; post-provider 328ms; response true
    - active window: metadata scans 7 (294.34ms total, max 83.83ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5904ms; provider 1ms; post-provider 328ms; unknown 3903.45ms; source agent.prepare 1263.26ms; plugins.metadata.scan 737.29ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4524 ms | 2724 ms | 1800 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-8e2a29af-kova-260923-052522-274c02/openclaw/timeline.jsonl |
  | warm | 5904 ms | 4172 ms | 1732 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-8e2a29af-kova-260923-052522-274c02/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 2937 ms | 1020 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 715 ms | 290 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 499 ms | 208 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 294 ms | 59 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 57 ms | 57 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 4512 ms | 2237 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 805 ms | 429 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 547 ms | 245 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 295 ms | 84 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-2ab680e0-kova-260923-052522-274c02
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 967.9 MB; tracked total 1133.2 MB; max CPU 272.7%; samples 18; roles command-tree 1061.7MB/283.3%, agent-process 967.9MB/272.7%, status-cli 592MB/177.5%, agent-cli 93.8MB/175.5%
- agent: turn 5982ms; cold/warm 5959ms/5982ms; cold-warm delta 0ms; pre-provider 5704ms; provider 0ms; metadata scans 16 (626.1ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5980.85ms; max 5982ms; pre-provider p95 5706.85ms
- agent CLI attribution: cold known 3400ms / unattributed 2307ms; warm known 3915ms / unattributed 1789ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2153.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5959ms; pre-provider 5707ms; provider 2ms; post-provider 250ms; response true
    - active window: metadata scans 9 (369.6ms total, max 79.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5707ms; provider 2ms; post-provider 250ms; unknown 3621.52ms; source agent.prepare 1310.04ms; plugins.metadata.scan 775.44ms
  - warm: total 5982ms; pre-provider 5704ms; provider 0ms; post-provider 278ms; response true
    - active window: metadata scans 7 (256.5ms total, max 61.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5704ms; provider 0ms; post-provider 278ms; unknown 3618.52ms; source agent.prepare 1310.04ms; plugins.metadata.scan 775.44ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5707 ms | 3400 ms | 2307 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-2ab680e0-kova-260923-052522-274c02/openclaw/timeline.jsonl |
  | warm | 5704 ms | 3915 ms | 1789 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-2ab680e0-kova-260923-052522-274c02/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 3764 ms | 1329 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 806 ms | 264 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 646 ms | 250 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 369 ms | 79 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 81 ms | 81 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 4034 ms | 2153 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 764 ms | 399 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 506 ms | 215 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 258 ms | 62 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-67b331a3-kova-260923-052522-274c02
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 937.7 MB; tracked total 1103.1 MB; max CPU 256.4%; samples 17; roles command-tree 1031.5MB/266.5%, agent-process 937.7MB/256.4%, status-cli 508.7MB/202.2%, agent-cli 93.8MB/172.7%
- agent: turn 5973ms; cold/warm 4695ms/5973ms; cold-warm delta 0ms; pre-provider 5639ms; provider 1ms; metadata scans 16 (565.01ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5909.1ms; max 5973ms; pre-provider p95 5582.95ms
- agent CLI attribution: cold known 2666ms / unattributed 1852ms; warm known 3961ms / unattributed 1678ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2136.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4695ms; pre-provider 4518ms; provider 2ms; post-provider 175ms; response true
    - active window: metadata scans 9 (309.92ms total, max 69.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4518ms; provider 2ms; post-provider 175ms; unknown 2580.22ms; source agent.prepare 1224.19ms; plugins.metadata.scan 713.59ms
  - warm: total 5973ms; pre-provider 5639ms; provider 1ms; post-provider 333ms; response true
    - active window: metadata scans 7 (255.09ms total, max 66.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5639ms; provider 1ms; post-provider 333ms; unknown 3701.22ms; source agent.prepare 1224.19ms; plugins.metadata.scan 713.59ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4518 ms | 2666 ms | 1852 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-67b331a3-kova-260923-052522-274c02/openclaw/timeline.jsonl |
  | warm | 5639 ms | 3961 ms | 1678 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-67b331a3-kova-260923-052522-274c02/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x37 | 37 | 0 | 2975 ms | 1034 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 634 ms | 221 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 494 ms | 214 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 312 ms | 69 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 4063 ms | 2136 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 745 ms | 380 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 591 ms | 292 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 255 ms | 67 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260923-052522-274c02-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260923-052522-274c02-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260923-052522-274c02-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-gateway-performance-man-005107f3-kova-260923-052522-274c02
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-gateway-performance-man-1e8be6a8-kova-260923-052522-274c02
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-gateway-performance-man-958fde53-kova-260923-052522-274c02
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-8e2a29af-kova-260923-052522-274c02
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-2ab680e0-kova-260923-052522-274c02
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260923-052522-274c02/kova-agent-cold-warm-message-67b331a3-kova-260923-052522-274c02

## Target Cleanup

- Runtime: `kova-local-mudnsy5o-3pp-294ce017`
- Result: removed
- Duration: 584ms

