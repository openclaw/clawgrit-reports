# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1432.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1718.5 MB, gateway 1432.5 MB, command-tree 899.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1432.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1718.5 MB, gateway 1432.5 MB, command-tree 899.7 MB |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 6 (FAIL:5, PASS:1) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261008-052900-17ca2f` |
| Generated | 2026-10-08T05:51:31.988Z |
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
| FAIL | 5 |
| PASS | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1432.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1718.5 MB, gateway 1432.5 MB, command-tree 899.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 19 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1718.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 19 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1434.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1719.1 MB, gateway 1434.5 MB, command-tree 907.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 223 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1719.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 223 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 907.4 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 223 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1384.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1668.9 MB, gateway 1384.2 MB, command-tree 892 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1668.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1204 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1304.9 MB, agent-process 1204 MB, status-cli 930.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1204 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1186.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1284.8 MB, agent-process 1186.4 MB, status-cli 777.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1186.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 19ms | 1432.5MB | n/a | 186.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:2, PASS:1 | n/a | 0MB | n/a | 189% | 8414ms | 8222ms | 8037ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 19ms | 1432.5 MB | 2530.6 MB | n/a | n/a | gateway peak RSS 1432.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1718.5 MB, gateway 1432.5 MB, command-tree 899.7 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 223ms | 1434.5 MB | 2552.1 MB | n/a | n/a | gateway peak RSS 1434.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1719.1 MB, gateway 1434.5 MB, command-tree 907.4 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1384.2 MB | 2536.3 MB | n/a | n/a | gateway peak RSS 1384.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1668.9 MB, gateway 1384.2 MB, command-tree 892 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1377.2 MB | 8414ms | 8222ms | agent-process peak RSS 1204 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1304.9 MB, agent-process 1204 MB, status-cli 930.5 MB |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1311.8 MB | 8883ms | 9083ms |  |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1356.1 MB | 8266ms | 7895ms | agent-process peak RSS 1186.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1284.8 MB, agent-process 1186.4 MB, status-cli 777.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1719.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 253.9% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1434.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 209.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1304.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1204 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 195% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 930.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 621.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 143.2% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 147.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 171.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-gateway-performance-man-005107f3-kova-261008-052900-17ca2f
Measurements:
- startup: listening 1ms; health 19ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 18ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 18ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1432.5 MB; tracked total 2530.6 MB; max CPU 209.3%; samples 38; roles gateway-tree 1718.5MB/253.9%, gateway 1432.5MB/209.3%, command-tree 899.7MB/173.8%, status-cli 899.7MB/173.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1070.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1432.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1718.5 MB, gateway 1432.5 MB, command-tree 899.7 MB
  - gateway-tree peak RSS 1718.5 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-gateway-performance-man-1e8be6a8-kova-261008-052900-17ca2f
Measurements:
- startup: listening 1ms; health 223ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 222ms; post-ready p95 106ms; failures 0; final failures 0; slowest startup-sample/warm-restart 222ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1434.5 MB; tracked total 2552.1 MB; max CPU 186.5%; samples 39; roles gateway-tree 1719.1MB/217.6%, gateway 1434.5MB/186.5%, command-tree 907.4MB/165.9%, status-cli 907.4MB/165.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1227.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1434.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1719.1 MB, gateway 1434.5 MB, command-tree 907.4 MB
  - gateway-tree peak RSS 1719.1 MB exceeded threshold 1440 MB
  - status-cli peak RSS 907.4 MB exceeded threshold 900 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-gateway-performance-man-958fde53-kova-261008-052900-17ca2f
Measurements:
- startup: listening 1ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 80ms; failures 0; final failures 0; slowest post-ready/api-latency 80ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1384.2 MB; tracked total 2536.3 MB; max CPU 184.7%; samples 39; roles gateway-tree 1668.9MB/217.1%, gateway 1384.2MB/184.7%, command-tree 892MB/165.9%, status-cli 892MB/165.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1256.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1384.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1668.9 MB, gateway 1384.2 MB, command-tree 892 MB
  - gateway-tree peak RSS 1668.9 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-8e2a29af-kova-261008-052900-17ca2f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1204 MB; tracked total 1377.2 MB; max CPU 185.5%; samples 28; roles command-tree 1304.9MB/206.2%, agent-process 1204MB/185.5%, status-cli 930.5MB/206.2%, agent-cli 162.1MB/59.5%
- agent: turn 8414ms; cold/warm 8414ms/8222ms; cold-warm delta 192ms; pre-provider 8037ms; provider 2ms; metadata scans 8 (271.04ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8404.4ms; max 8414ms; pre-provider p95 8030.3ms
- agent CLI attribution: cold known 4026ms / unattributed 4011ms; warm known 4034ms / unattributed 3869ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1241.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1204 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1304.9 MB, agent-process 1204 MB, status-cli 930.5 MB
- Agent turns:
  - cold: total 8414ms; pre-provider 8037ms; provider 2ms; post-provider 375ms; response true
    - active window: metadata scans 4 (131.51ms total, max 79.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8037ms; provider 2ms; post-provider 375ms; unknown 5203.37ms; source agent.prepare 2404.68ms; plugins.metadata.scan 428.95ms
  - warm: total 8222ms; pre-provider 7903ms; provider 1ms; post-provider 318ms; response true
    - active window: metadata scans 4 (139.53ms total, max 82.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7903ms; provider 1ms; post-provider 318ms; unknown 5069.37ms; source agent.prepare 2404.68ms; plugins.metadata.scan 428.95ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8037 ms | 4026 ms | 4011 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-8e2a29af-kova-261008-052900-17ca2f/openclaw/timeline.jsonl |
  | warm | 7903 ms | 4034 ms | 3869 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-8e2a29af-kova-261008-052900-17ca2f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2350 ms | 671 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1952 ms | 1123 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1220 ms | 657 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 131 ms | 79 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 11 ms | 5 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2163 ms | 614 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1658 ms | 1242 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1184 ms | 659 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 139 ms | 82 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 16 ms | 9 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-2ab680e0-kova-261008-052900-17ca2f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1139.9 MB; tracked total 1311.8 MB; max CPU 195%; samples 28; roles command-tree 1240.4MB/204.6%, agent-process 1139.9MB/195%, status-cli 768MB/204.2%, agent-cli 100.6MB/144.8%
- agent: turn 9083ms; cold/warm 8883ms/9083ms; cold-warm delta 0ms; pre-provider 8746ms; provider 2ms; metadata scans 9 (276.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9073ms; max 9083ms; pre-provider p95 8734.85ms
- agent CLI attribution: cold known 4291ms / unattributed 4232ms; warm known 4291ms / unattributed 4455ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1203.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 8883ms; pre-provider 8523ms; provider 2ms; post-provider 358ms; response true
    - active window: metadata scans 4 (144.7ms total, max 78.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8523ms; provider 2ms; post-provider 358ms; unknown 5337.56ms; source agent.prepare 2757ms; plugins.metadata.scan 428.44ms
  - warm: total 9083ms; pre-provider 8746ms; provider 2ms; post-provider 335ms; response true
    - active window: metadata scans 5 (131.5ms total, max 71.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8746ms; provider 2ms; post-provider 335ms; unknown 5560.56ms; source agent.prepare 2757ms; plugins.metadata.scan 428.44ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8523 ms | 4291 ms | 4232 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-2ab680e0-kova-261008-052900-17ca2f/openclaw/timeline.jsonl |
  | warm | 8746 ms | 4291 ms | 4455 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-2ab680e0-kova-261008-052900-17ca2f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2670 ms | 784 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1955 ms | 1135 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1289 ms | 649 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 145 ms | 78 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 16 ms | 7 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2131 ms | 614 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1668 ms | 1204 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1469 ms | 836 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 125 ms | 72 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 16 ms | 9 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-67b331a3-kova-261008-052900-17ca2f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1186.4 MB; tracked total 1356.1 MB; max CPU 189%; samples 27; roles command-tree 1284.8MB/200%, agent-process 1186.4MB/189%, status-cli 777.9MB/200%, agent-cli 171.2MB/127.7%
- agent: turn 8266ms; cold/warm 8266ms/7895ms; cold-warm delta 371ms; pre-provider 7905ms; provider 3ms; metadata scans 8 (269.02ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8247.45ms; max 8266ms; pre-provider p95 7888.65ms
- agent CLI attribution: cold known 3913ms / unattributed 3992ms; warm known 3866ms / unattributed 3712ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1117.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1186.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1284.8 MB, agent-process 1186.4 MB, status-cli 777.9 MB
- Agent turns:
  - cold: total 8266ms; pre-provider 7905ms; provider 3ms; post-provider 358ms; response true
    - active window: metadata scans 4 (123.32ms total, max 67.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7905ms; provider 3ms; post-provider 358ms; unknown 5102.4ms; source agent.prepare 2389.79ms; plugins.metadata.scan 412.81ms
  - warm: total 7895ms; pre-provider 7578ms; provider 1ms; post-provider 316ms; response true
    - active window: metadata scans 4 (145.7ms total, max 84.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7578ms; provider 1ms; post-provider 316ms; unknown 4775.4ms; source agent.prepare 2389.79ms; plugins.metadata.scan 412.81ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7905 ms | 3913 ms | 3992 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-67b331a3-kova-261008-052900-17ca2f/openclaw/timeline.jsonl |
  | warm | 7578 ms | 3866 ms | 3712 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-67b331a3-kova-261008-052900-17ca2f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2362 ms | 682 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1771 ms | 1004 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1253 ms | 665 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 124 ms | 68 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 12 ms | 5 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2258 ms | 668 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1494 ms | 1118 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1134 ms | 645 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 146 ms | 85 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 12 ms | 4 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261008-052900-17ca2f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261008-052900-17ca2f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261008-052900-17ca2f-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-gateway-performance-man-005107f3-kova-261008-052900-17ca2f
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-gateway-performance-man-1e8be6a8-kova-261008-052900-17ca2f
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-gateway-performance-man-958fde53-kova-261008-052900-17ca2f
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-8e2a29af-kova-261008-052900-17ca2f
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-2ab680e0-kova-261008-052900-17ca2f
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261008-052900-17ca2f/kova-agent-cold-warm-message-67b331a3-kova-261008-052900-17ca2f

## Target Cleanup

- Runtime: `kova-local-muz3je8i-3t1-427eef0e`
- Result: removed
- Duration: 660ms

