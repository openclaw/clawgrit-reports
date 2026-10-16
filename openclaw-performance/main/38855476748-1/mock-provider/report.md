# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 2070.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2276.4 MB, gateway 2070.6 MB, command-tree 780.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 2070.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2276.4 MB, gateway 2070.6 MB, command-tree 780.7 MB |
| Blocking findings | 17 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261016-052424-dda50d` |
| Generated | 2026-10-16T05:46:15.647Z |
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
| FAIL | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 2070.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2276.4 MB, gateway 2070.6 MB, command-tree 780.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 16 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2276.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 16 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 16 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 229ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 16 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1935.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2139.6 MB, gateway 1935.4 MB, command-tree 785.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2139.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 2180.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2386.2 MB, gateway 2180.9 MB, command-tree 807.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 201 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2386.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 201 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 201 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 221ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 201 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1539.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1739.5 MB, agent-process 1539.5 MB, status-cli 1058.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1539.5 |
| info | Kova | report | 5 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 16ms | 2070.6MB | n/a | 273.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 211.8% | 7001ms | 7448ms | 6730ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 16ms | 2070.6 MB | 2958.3 MB | n/a | n/a | gateway peak RSS 2070.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2276.4 MB, gateway 2070.6 MB, command-tree 780.7 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1935.4 MB | 2996.6 MB | n/a | n/a | gateway peak RSS 1935.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2139.6 MB, gateway 1935.4 MB, command-tree 785.3 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 201ms | 2180.9 MB | 2948.6 MB | n/a | n/a | gateway peak RSS 2180.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2386.2 MB, gateway 2180.9 MB, command-tree 807.7 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1811.8 MB | 7190ms | 7448ms | agent-process peak RSS 1539.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1739.5 MB, agent-process 1539.5 MB, status-cli 1058.3 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1886.3 MB | 6989ms | 7328ms | agent-process peak RSS 1618.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1813.9 MB, agent-process 1618.4 MB, status-cli 1065.3 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1784.3 MB | 7001ms | 7530ms | agent-process peak RSS 1516.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1712.2 MB, agent-process 1516.3 MB, status-cli 996.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2386.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 286.3% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 2180.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 278.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1813.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 238.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1618.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 224.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1065.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 197.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 623.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 284.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 383.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 141.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-gateway-performance-man-005107f3-kova-261016-052424-dda50d
Measurements:
- startup: listening 1ms; health 16ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 15ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 15ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 2070.6 MB; tracked total 2958.3 MB; max CPU 265.3%; samples 39; roles gateway-tree 2276.4MB/274.6%, gateway 2070.6MB/265.3%, command-tree 780.7MB/161.5%, status-cli 780.7MB/161.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.subagent-recovery 1592.21ms; embedded traces 0; liveness warnings 0; open spans 2 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 2070.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2276.4 MB, gateway 2070.6 MB, command-tree 780.7 MB
  - gateway-tree peak RSS 2276.4 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 229ms

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-gateway-performance-man-1e8be6a8-kova-261016-052424-dda50d
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 1906ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1935.4 MB; tracked total 2996.6 MB; max CPU 278.3%; samples 46; roles gateway-tree 2139.6MB/286.3%, gateway 1935.4MB/278.3%, command-tree 785.3MB/167.1%, status-cli 785.3MB/167.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 6202.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1935.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2139.6 MB, gateway 1935.4 MB, command-tree 785.3 MB
  - gateway-tree peak RSS 2139.6 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-gateway-performance-man-958fde53-kova-261016-052424-dda50d
Measurements:
- startup: listening 0ms; health 201ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 201ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 201ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 2180.9 MB; tracked total 2948.6 MB; max CPU 273.1%; samples 40; roles gateway-tree 2386.2MB/283.9%, gateway 2180.9MB/273.1%, command-tree 807.7MB/167.7%, status-cli 807.7MB/167.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2564.24ms; embedded traces 0; liveness warnings 0; open spans 2 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 2180.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2386.2 MB, gateway 2180.9 MB, command-tree 807.7 MB
  - gateway-tree peak RSS 2386.2 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 221ms

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-8e2a29af-kova-261016-052424-dda50d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1539.5 MB; tracked total 1811.8 MB; max CPU 224.4%; samples 26; roles command-tree 1739.5MB/238.5%, agent-process 1539.5MB/224.4%, status-cli 1058.3MB/195.1%, agent-cli 200MB/89.4%
- agent: turn 7448ms; cold/warm 7190ms/7448ms; cold-warm delta 0ms; pre-provider 7180ms; provider 1ms; metadata scans 8 (226.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7435.1ms; max 7448ms; pre-provider p95 7167.7ms
- agent CLI attribution: cold known 3853ms / unattributed 3081ms; warm known 4727ms / unattributed 2453ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1696.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1539.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1739.5 MB, agent-process 1539.5 MB, status-cli 1058.3 MB
  - command-tree peak RSS 1739.5 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7190ms; pre-provider 6934ms; provider 2ms; post-provider 254ms; response true
    - active window: metadata scans 4 (120.62ms total, max 58.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6934ms; provider 2ms; post-provider 254ms; unknown 3805ms; source agent.prepare 2781.48ms; plugins.metadata.scan 347.52ms
  - warm: total 7448ms; pre-provider 7180ms; provider 1ms; post-provider 267ms; response true
    - active window: metadata scans 4 (105.92ms total, max 52.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7180ms; provider 1ms; post-provider 267ms; unknown 4051ms; source agent.prepare 2781.48ms; plugins.metadata.scan 347.52ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6934 ms | 3853 ms | 3081 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-8e2a29af-kova-261016-052424-dda50d/openclaw/timeline.jsonl |
  | warm | 7180 ms | 4727 ms | 2453 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-8e2a29af-kova-261016-052424-dda50d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2102 ms | 604 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2074 ms | 1000 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1210 ms | 398 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 121 ms | 59 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 6 ms | 3 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2604 ms | 1697 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2148 ms | 597 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1572 ms | 587 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 106 ms | 53 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 13 ms | 7 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-2ab680e0-kova-261016-052424-dda50d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1618.4 MB; tracked total 1886.3 MB; max CPU 209.6%; samples 25; roles command-tree 1813.9MB/223.4%, agent-process 1618.4MB/209.6%, status-cli 1065.3MB/197.2%, agent-cli 195.5MB/155.9%
- agent: turn 7328ms; cold/warm 6989ms/7328ms; cold-warm delta 0ms; pre-provider 7073ms; provider 1ms; metadata scans 8 (228.12ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7311.05ms; max 7328ms; pre-provider p95 7055.45ms
- agent CLI attribution: cold known 3726ms / unattributed 2996ms; warm known 4645ms / unattributed 2428ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1657.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1618.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1813.9 MB, agent-process 1618.4 MB, status-cli 1065.3 MB
  - command-tree peak RSS 1813.9 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6989ms; pre-provider 6722ms; provider 2ms; post-provider 265ms; response true
    - active window: metadata scans 4 (111.28ms total, max 56.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6722ms; provider 2ms; post-provider 265ms; unknown 3682.36ms; source agent.prepare 2687.23ms; plugins.metadata.scan 352.41ms
  - warm: total 7328ms; pre-provider 7073ms; provider 1ms; post-provider 254ms; response true
    - active window: metadata scans 4 (116.84ms total, max 55.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7073ms; provider 1ms; post-provider 254ms; unknown 4033.36ms; source agent.prepare 2687.23ms; plugins.metadata.scan 352.41ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6722 ms | 3726 ms | 2996 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-2ab680e0-kova-261016-052424-dda50d/openclaw/timeline.jsonl |
  | warm | 7073 ms | 4645 ms | 2428 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-2ab680e0-kova-261016-052424-dda50d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2164 ms | 647 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1950 ms | 971 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1143 ms | 381 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 111 ms | 56 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 12 ms | 7 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2544 ms | 1657 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2133 ms | 592 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1546 ms | 580 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 116 ms | 55 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 6 ms | 3 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-67b331a3-kova-261016-052424-dda50d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1516.3 MB; tracked total 1784.3 MB; max CPU 211.8%; samples 25; roles command-tree 1712.2MB/225.6%, agent-process 1516.3MB/211.8%, status-cli 996.8MB/194.2%, agent-cli 284.7MB/153.5%
- agent: turn 7530ms; cold/warm 7001ms/7530ms; cold-warm delta 0ms; pre-provider 7282ms; provider 1ms; metadata scans 8 (235.25ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7503.55ms; max 7530ms; pre-provider p95 7254.4ms
- agent CLI attribution: cold known 3723ms / unattributed 3007ms; warm known 4855ms / unattributed 2427ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1700.42ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1516.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1712.2 MB, agent-process 1516.3 MB, status-cli 996.8 MB
  - command-tree peak RSS 1712.2 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7001ms; pre-provider 6730ms; provider 2ms; post-provider 269ms; response true
    - active window: metadata scans 4 (114.05ms total, max 61.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6730ms; provider 2ms; post-provider 269ms; unknown 3685.1ms; source agent.prepare 2686.08ms; plugins.metadata.scan 358.82ms
  - warm: total 7530ms; pre-provider 7282ms; provider 1ms; post-provider 247ms; response true
    - active window: metadata scans 4 (121.2ms total, max 57.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7282ms; provider 1ms; post-provider 247ms; unknown 4237.1ms; source agent.prepare 2686.08ms; plugins.metadata.scan 358.82ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6730 ms | 3723 ms | 3007 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-67b331a3-kova-261016-052424-dda50d/openclaw/timeline.jsonl |
  | warm | 7282 ms | 4855 ms | 2427 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-67b331a3-kova-261016-052424-dda50d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2058 ms | 608 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1999 ms | 977 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1129 ms | 375 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 110 ms | 62 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 7 ms | 3 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2714 ms | 1700 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2190 ms | 600 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1558 ms | 581 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 122 ms | 58 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.main.register-primary` | `cli.startup` | 1 | 0 | 6 ms | 6 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261016-052424-dda50d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261016-052424-dda50d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261016-052424-dda50d-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-gateway-performance-man-005107f3-kova-261016-052424-dda50d
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-gateway-performance-man-1e8be6a8-kova-261016-052424-dda50d
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-gateway-performance-man-958fde53-kova-261016-052424-dda50d
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-8e2a29af-kova-261016-052424-dda50d
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-2ab680e0-kova-261016-052424-dda50d
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261016-052424-dda50d/kova-agent-cold-warm-message-67b331a3-kova-261016-052424-dda50d

## Target Cleanup

- Runtime: `kova-local-mvaiwaj9-3cv-7e6b0fb4`
- Result: removed
- Duration: 550ms

