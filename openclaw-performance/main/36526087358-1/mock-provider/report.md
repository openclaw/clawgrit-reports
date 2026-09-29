# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1635.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.2 MB, gateway 1635.4 MB, command-tree 962.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1635.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.2 MB, gateway 1635.4 MB, command-tree 962.7 MB |
| Blocking findings | 11 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260929-052703-d41474` |
| Generated | 2026-09-29T05:32:21.037Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1635.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.2 MB, gateway 1635.4 MB, command-tree 962.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 37 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1808.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 37 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 962.7 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 37 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1634.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1806.7 MB, gateway 1634.1 MB, command-tree 775.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 24 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1806.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 24 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1645.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1817.6 MB, gateway 1645.5 MB, command-tree 937.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1817.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 937.9 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1203.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1299.7 MB, agent-process 1203.8 MB, status-cli 757.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1203.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1188.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1284.8 MB, agent-process 1188.6 MB, status-cli 758.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1188.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1182.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1279 MB, agent-process 1182.7 MB, status-cli 738.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1182.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 24ms | 1635.4MB | n/a | 316.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 222.7% | 5875ms | 5919ms | 5664ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 37ms | 1635.4 MB | 2690.3 MB | n/a | n/a | gateway peak RSS 1635.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.2 MB, gateway 1635.4 MB, command-tree 962.7 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 24ms | 1634.1 MB | 2504.8 MB | n/a | n/a | gateway peak RSS 1634.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1806.7 MB, gateway 1634.1 MB, command-tree 775.2 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4ms | 1645.5 MB | 2675.3 MB | n/a | n/a | gateway peak RSS 1645.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1817.6 MB, gateway 1645.5 MB, command-tree 937.9 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1370.7 MB | 5611ms | 6004ms | agent-process peak RSS 1203.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1299.7 MB, agent-process 1203.8 MB, status-cli 757.6 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1356.9 MB | 5875ms | 5879ms | agent-process peak RSS 1188.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1284.8 MB, agent-process 1188.6 MB, status-cli 758.6 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1351 MB | 6980ms | 5919ms | agent-process peak RSS 1182.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1279 MB, agent-process 1182.7 MB, status-cli 738.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1817.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 338.1% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1645.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 322.1% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1299.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 237.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1203.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 227.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 962.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 176.8% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 527.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 135.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 173.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 140.2% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 138.6% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-gateway-performance-man-005107f3-kova-260929-052703-d41474
Measurements:
- startup: listening 1ms; health 37ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 36ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 36ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1635.4 MB; tracked total 2690.3 MB; max CPU 316.5%; samples 38; roles gateway-tree 1808.2MB/332.5%, gateway 1635.4MB/316.5%, command-tree 962.7MB/169.7%, status-cli 962.7MB/169.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 2313.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1635.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1808.2 MB, gateway 1635.4 MB, command-tree 962.7 MB
  - gateway-tree peak RSS 1808.2 MB exceeded threshold 1440 MB
  - status-cli peak RSS 962.7 MB exceeded threshold 900 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-gateway-performance-man-1e8be6a8-kova-260929-052703-d41474
Measurements:
- startup: listening 0ms; health 24ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 24ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 24ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1634.1 MB; tracked total 2504.8 MB; max CPU 296.5%; samples 38; roles gateway-tree 1806.7MB/312.5%, gateway 1634.1MB/296.5%, command-tree 775.2MB/175.7%, status-cli 775.2MB/175.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 2372.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1634.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1806.7 MB, gateway 1634.1 MB, command-tree 775.2 MB
  - gateway-tree peak RSS 1806.7 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-gateway-performance-man-958fde53-kova-260929-052703-d41474
Measurements:
- startup: listening 1ms; health 4ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 3ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 4ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1645.5 MB; tracked total 2675.3 MB; max CPU 322.1%; samples 39; roles gateway-tree 1817.6MB/338.1%, gateway 1645.5MB/322.1%, command-tree 937.9MB/168%, status-cli 937.9MB/168%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 2358.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1645.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1817.6 MB, gateway 1645.5 MB, command-tree 937.9 MB
  - gateway-tree peak RSS 1817.6 MB exceeded threshold 1440 MB
  - status-cli peak RSS 937.9 MB exceeded threshold 900 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-8e2a29af-kova-260929-052703-d41474
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1203.8 MB; tracked total 1370.7 MB; max CPU 222.7%; samples 22; roles command-tree 1299.7MB/232.8%, agent-process 1203.8MB/222.7%, status-cli 757.6MB/175%, agent-cli 96.1MB/140.2%
- agent: turn 6004ms; cold/warm 5611ms/6004ms; cold-warm delta 0ms; pre-provider 5701ms; provider 0ms; metadata scans 8 (216.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5984.35ms; max 6004ms; pre-provider p95 5685.05ms
- agent CLI attribution: cold known 3965ms / unattributed 1417ms; warm known 4106ms / unattributed 1595ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1956.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1203.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1299.7 MB, agent-process 1203.8 MB, status-cli 757.6 MB
- Agent turns:
  - cold: total 5611ms; pre-provider 5382ms; provider 2ms; post-provider 227ms; response true
    - active window: metadata scans 4 (95ms total, max 49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5382ms; provider 2ms; post-provider 227ms; unknown 3363.37ms; source agent.prepare 1673ms; plugins.metadata.scan 345.63ms
  - warm: total 6004ms; pre-provider 5701ms; provider 0ms; post-provider 303ms; response true
    - active window: metadata scans 4 (121.84ms total, max 70.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5701ms; provider 0ms; post-provider 303ms; unknown 3682.37ms; source agent.prepare 1673ms; plugins.metadata.scan 345.63ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5382 ms | 3965 ms | 1417 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-8e2a29af-kova-260929-052703-d41474/openclaw/timeline.jsonl |
  | warm | 5701 ms | 4106 ms | 1595 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-8e2a29af-kova-260929-052703-d41474/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2068 ms | 1722 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1851 ms | 499 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 876 ms | 432 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 95 ms | 49 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2256 ms | 1956 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1861 ms | 521 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 798 ms | 321 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 121 ms | 71 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-2ab680e0-kova-260929-052703-d41474
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1188.6 MB; tracked total 1356.9 MB; max CPU 227.2%; samples 22; roles command-tree 1284.8MB/237.1%, agent-process 1188.6MB/227.2%, status-cli 758.6MB/176.8%, agent-cli 173.6MB/133.4%
- agent: turn 5879ms; cold/warm 5875ms/5879ms; cold-warm delta 0ms; pre-provider 5606ms; provider 1ms; metadata scans 8 (218.61ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5878.8ms; max 5879ms; pre-provider p95 5661.1ms
- agent CLI attribution: cold known 4218ms / unattributed 1446ms; warm known 4000ms / unattributed 1606ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1925.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1188.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1284.8 MB, agent-process 1188.6 MB, status-cli 758.6 MB
- Agent turns:
  - cold: total 5875ms; pre-provider 5664ms; provider 2ms; post-provider 209ms; response true
    - active window: metadata scans 4 (104.79ms total, max 53.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5664ms; provider 2ms; post-provider 209ms; unknown 3599.85ms; source agent.prepare 1729.35ms; plugins.metadata.scan 334.8ms
  - warm: total 5879ms; pre-provider 5606ms; provider 1ms; post-provider 272ms; response true
    - active window: metadata scans 4 (113.82ms total, max 60.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5606ms; provider 1ms; post-provider 272ms; unknown 3541.85ms; source agent.prepare 1729.35ms; plugins.metadata.scan 334.8ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5664 ms | 4218 ms | 1446 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-2ab680e0-kova-260929-052703-d41474/openclaw/timeline.jsonl |
  | warm | 5606 ms | 4000 ms | 1606 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-2ab680e0-kova-260929-052703-d41474/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2096 ms | 568 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2071 ms | 1762 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 996 ms | 495 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 104 ms | 53 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2252 ms | 1925 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1828 ms | 522 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 734 ms | 311 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 60 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-67b331a3-kova-260929-052703-d41474
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1182.7 MB; tracked total 1351 MB; max CPU 219.3%; samples 22; roles command-tree 1279MB/230.8%, agent-process 1182.7MB/219.3%, status-cli 738.1MB/166.9%, agent-cli 96.3MB/136.5%
- agent: turn 6980ms; cold/warm 6980ms/5919ms; cold-warm delta 1061ms; pre-provider 6733ms; provider 2ms; metadata scans 8 (225.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6926.95ms; max 6980ms; pre-provider p95 6675.7ms
- agent CLI attribution: cold known 4968ms / unattributed 1765ms; warm known 4005ms / unattributed 1582ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2342.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1182.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1279 MB, agent-process 1182.7 MB, status-cli 738.1 MB
- Agent turns:
  - cold: total 6980ms; pre-provider 6733ms; provider 2ms; post-provider 245ms; response true
    - active window: metadata scans 4 (113.31ms total, max 61.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6733ms; provider 2ms; post-provider 245ms; unknown 4567.25ms; source agent.prepare 1822.49ms; plugins.metadata.scan 343.26ms
  - warm: total 5919ms; pre-provider 5587ms; provider 1ms; post-provider 331ms; response true
    - active window: metadata scans 4 (112.1ms total, max 59.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5587ms; provider 1ms; post-provider 331ms; unknown 3421.25ms; source agent.prepare 1822.49ms; plugins.metadata.scan 343.26ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6733 ms | 4968 ms | 1765 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-67b331a3-kova-260929-052703-d41474/openclaw/timeline.jsonl |
  | warm | 5587 ms | 4005 ms | 1582 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-67b331a3-kova-260929-052703-d41474/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2752 ms | 2343 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2156 ms | 580 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1044 ms | 495 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 112 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2226 ms | 1927 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1770 ms | 490 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 774 ms | 343 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 111 ms | 59 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260929-052703-d41474-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260929-052703-d41474-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260929-052703-d41474-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-gateway-performance-man-005107f3-kova-260929-052703-d41474
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-gateway-performance-man-1e8be6a8-kova-260929-052703-d41474
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-gateway-performance-man-958fde53-kova-260929-052703-d41474
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-8e2a29af-kova-260929-052703-d41474
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-2ab680e0-kova-260929-052703-d41474
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260929-052703-d41474/kova-agent-cold-warm-message-67b331a3-kova-260929-052703-d41474

## Target Cleanup

- Runtime: `kova-local-mum8i86l-3sa-3f52f9d8`
- Result: removed
- Duration: 573ms

