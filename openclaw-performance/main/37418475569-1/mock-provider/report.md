# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1223.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1510.5 MB, gateway 1223.8 MB, command-tree 793.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1223.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1510.5 MB, gateway 1223.8 MB, command-tree 793.7 MB |
| Blocking findings | 7 |
| Warnings | 0 |
| Records | 6 (FAIL:4, PASS:2) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261006-052749-f74e55` |
| Generated | 2026-10-06T05:49:22.187Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1223.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1510.5 MB, gateway 1223.8 MB, command-tree 793.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 27 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1510.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 27 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1303.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1588.5 MB, gateway 1303.9 MB, command-tree 716.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 199 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1588.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 199 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1251.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1536.5 MB, gateway 1251.3 MB, command-tree 654.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 141 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1536.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 141 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1209.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1309.5 MB, agent-process 1209.3 MB, status-cli 604.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1209.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 141ms | 1251.3MB | n/a | 197.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:2, FAIL:1 | n/a | 0MB | n/a | 178.1% | 6758ms | 6666ms | 6548ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 27ms | 1223.8 MB | 2220.8 MB | n/a | n/a | gateway peak RSS 1223.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1510.5 MB, gateway 1223.8 MB, command-tree 793.7 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 199ms | 1303.9 MB | 2266.9 MB | n/a | n/a | gateway peak RSS 1303.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1588.5 MB, gateway 1303.9 MB, command-tree 716.2 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 141ms | 1251.3 MB | 2263.8 MB | n/a | n/a | gateway peak RSS 1251.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1536.5 MB, gateway 1251.3 MB, command-tree 654.3 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1304.2 MB | 7014ms | 6666ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1302.5 MB | 6758ms | 6742ms |  |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1380.9 MB | 6637ms | 6648ms | agent-process peak RSS 1209.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1309.5 MB, agent-process 1209.3 MB, status-cli 604.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1588.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 258.2% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1309.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1303.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 240.2% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1209.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 793.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 191.7% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 608.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 141% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 149.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 175.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 143.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-gateway-performance-man-005107f3-kova-261006-052749-f74e55
Measurements:
- startup: listening 2ms; health 27ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 25ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 25ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1223.8 MB; tracked total 2220.8 MB; max CPU 197.4%; samples 39; roles gateway-tree 1510.5MB/243.8%, gateway 1223.8MB/197.4%, command-tree 793.7MB/172.2%, status-cli 793.7MB/172.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-select-environment 1125.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1223.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1510.5 MB, gateway 1223.8 MB, command-tree 793.7 MB
  - gateway-tree peak RSS 1510.5 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-gateway-performance-man-1e8be6a8-kova-261006-052749-f74e55
Measurements:
- startup: listening 0ms; health 199ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 199ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 199ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1303.9 MB; tracked total 2266.9 MB; max CPU 189.8%; samples 39; roles gateway-tree 1588.5MB/230.6%, gateway 1303.9MB/189.8%, command-tree 716.2MB/191.7%, status-cli 716.2MB/191.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1169.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1303.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1588.5 MB, gateway 1303.9 MB, command-tree 716.2 MB
  - gateway-tree peak RSS 1588.5 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-gateway-performance-man-958fde53-kova-261006-052749-f74e55
Measurements:
- startup: listening 0ms; health 141ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 141ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 141ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1251.3 MB; tracked total 2263.8 MB; max CPU 240.2%; samples 37; roles gateway-tree 1536.5MB/258.2%, gateway 1251.3MB/240.2%, command-tree 654.3MB/190.7%, status-cli 654.3MB/190.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-select-environment 1062.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1251.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1536.5 MB, gateway 1251.3 MB, command-tree 654.3 MB
  - gateway-tree peak RSS 1536.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-8e2a29af-kova-261006-052749-f74e55
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1132.7 MB; tracked total 1304.2 MB; max CPU 178.1%; samples 24; roles command-tree 1232.7MB/188.2%, agent-process 1132.7MB/178.1%, status-cli 750MB/173%, agent-cli 100.1MB/137.5%
- agent: turn 7014ms; cold/warm 7014ms/6666ms; cold-warm delta 348ms; pre-provider 6751ms; provider 2ms; metadata scans 8 (222.62ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6996.6ms; max 7014ms; pre-provider p95 6735.5ms
- agent CLI attribution: cold known 3285ms / unattributed 3466ms; warm known 3254ms / unattributed 3187ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1097.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7014ms; pre-provider 6751ms; provider 2ms; post-provider 261ms; response true
    - active window: metadata scans 4 (110.23ms total, max 61.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6751ms; provider 2ms; post-provider 261ms; unknown 4644.66ms; source agent.prepare 1771.66ms; plugins.metadata.scan 334.68ms
  - warm: total 6666ms; pre-provider 6441ms; provider 1ms; post-provider 224ms; response true
    - active window: metadata scans 4 (112.39ms total, max 58.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6441ms; provider 1ms; post-provider 224ms; unknown 4334.66ms; source agent.prepare 1771.66ms; plugins.metadata.scan 334.68ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6751 ms | 3285 ms | 3466 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-8e2a29af-kova-261006-052749-f74e55/openclaw/timeline.jsonl |
  | warm | 6441 ms | 3254 ms | 3187 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-8e2a29af-kova-261006-052749-f74e55/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1866 ms | 511 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1637 ms | 968 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 935 ms | 588 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 112 ms | 62 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1832 ms | 500 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1407 ms | 1098 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 837 ms | 556 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 59 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-2ab680e0-kova-261006-052749-f74e55
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1130.5 MB; tracked total 1302.5 MB; max CPU 190.7%; samples 24; roles command-tree 1231.1MB/200.7%, agent-process 1130.5MB/190.7%, status-cli 598.6MB/173.2%, agent-cli 100.6MB/143.8%
- agent: turn 6758ms; cold/warm 6758ms/6742ms; cold-warm delta 16ms; pre-provider 6548ms; provider 2ms; metadata scans 8 (228.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6757.2ms; max 6758ms; pre-provider p95 6546.9ms
- agent CLI attribution: cold known 3133ms / unattributed 3415ms; warm known 3299ms / unattributed 3227ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1126.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6758ms; pre-provider 6548ms; provider 2ms; post-provider 208ms; response true
    - active window: metadata scans 4 (110.13ms total, max 60.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6548ms; provider 2ms; post-provider 208ms; unknown 4484ms; source agent.prepare 1720.47ms; plugins.metadata.scan 343.53ms
  - warm: total 6742ms; pre-provider 6526ms; provider 1ms; post-provider 215ms; response true
    - active window: metadata scans 4 (118.58ms total, max 62.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6526ms; provider 1ms; post-provider 215ms; unknown 4462ms; source agent.prepare 1720.47ms; plugins.metadata.scan 343.53ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6548 ms | 3133 ms | 3415 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-2ab680e0-kova-261006-052749-f74e55/openclaw/timeline.jsonl |
  | warm | 6526 ms | 3299 ms | 3227 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-2ab680e0-kova-261006-052749-f74e55/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1852 ms | 512 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1530 ms | 924 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 886 ms | 574 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 110 ms | 60 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1828 ms | 510 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1452 ms | 1126 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 834 ms | 554 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 63 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-67b331a3-kova-261006-052749-f74e55
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1209.3 MB; tracked total 1380.9 MB; max CPU 178.1%; samples 23; roles command-tree 1309.5MB/194.9%, agent-process 1209.3MB/178.1%, status-cli 604.5MB/167.3%, agent-cli 175.3MB/125.4%
- agent: turn 6648ms; cold/warm 6637ms/6648ms; cold-warm delta 0ms; pre-provider 6437ms; provider 0ms; metadata scans 8 (214.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6647.45ms; max 6648ms; pre-provider p95 6436.2ms
- agent CLI attribution: cold known 3129ms / unattributed 3292ms; warm known 3290ms / unattributed 3147ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1073.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1209.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1309.5 MB, agent-process 1209.3 MB, status-cli 604.5 MB
- Agent turns:
  - cold: total 6637ms; pre-provider 6421ms; provider 2ms; post-provider 214ms; response true
    - active window: metadata scans 4 (107.67ms total, max 59.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6421ms; provider 2ms; post-provider 214ms; unknown 4370.25ms; source agent.prepare 1723.73ms; plugins.metadata.scan 327.02ms
  - warm: total 6648ms; pre-provider 6437ms; provider 0ms; post-provider 211ms; response true
    - active window: metadata scans 4 (106.51ms total, max 57.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6437ms; provider 0ms; post-provider 211ms; unknown 4386.25ms; source agent.prepare 1723.73ms; plugins.metadata.scan 327.02ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6421 ms | 3129 ms | 3292 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-67b331a3-kova-261006-052749-f74e55/openclaw/timeline.jsonl |
  | warm | 6437 ms | 3290 ms | 3147 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-67b331a3-kova-261006-052749-f74e55/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1845 ms | 507 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1600 ms | 932 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 837 ms | 514 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 109 ms | 60 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1834 ms | 524 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1385 ms | 1074 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 888 ms | 576 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 105 ms | 57 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261006-052749-f74e55-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261006-052749-f74e55-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261006-052749-f74e55-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-gateway-performance-man-005107f3-kova-261006-052749-f74e55
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-gateway-performance-man-1e8be6a8-kova-261006-052749-f74e55
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-gateway-performance-man-958fde53-kova-261006-052749-f74e55
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-8e2a29af-kova-261006-052749-f74e55
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-2ab680e0-kova-261006-052749-f74e55
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261006-052749-f74e55/kova-agent-cold-warm-message-67b331a3-kova-261006-052749-f74e55

## Target Cleanup

- Runtime: `kova-local-muw8m64j-3tc-cc3ee4b9`
- Result: removed
- Duration: 502ms

