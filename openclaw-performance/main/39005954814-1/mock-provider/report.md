# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1624.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1836.1 MB, gateway 1624.7 MB, command-tree 784.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1624.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1836.1 MB, gateway 1624.7 MB, command-tree 784.8 MB |
| Blocking findings | 12 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261017-052253-e22569` |
| Generated | 2026-10-17T05:44:49.279Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1624.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1836.1 MB, gateway 1624.7 MB, command-tree 784.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 17 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1836.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 17 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1669.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1881.6 MB, gateway 1669.2 MB, command-tree 816.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1881.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1625.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1837 MB, gateway 1625.3 MB, command-tree 769.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1837 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1575.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1772 MB, agent-process 1575.6 MB, status-cli 798.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1575.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1772 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1575.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1424.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1621.4 MB, agent-process 1424.5 MB, status-cli 1035.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1424.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1621.4 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1424.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1415.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1617.3 MB, agent-process 1415.7 MB, status-cli 966.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1415.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1617.3 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1415.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4ms | 1625.3MB | n/a | 266.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 224.8% | 7238ms | 7581ms | 6970ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 17ms | 1624.7 MB | 2611.2 MB | n/a | n/a | gateway peak RSS 1624.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1836.1 MB, gateway 1624.7 MB, command-tree 784.8 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4ms | 1669.2 MB | 2556.6 MB | n/a | n/a | gateway peak RSS 1669.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1881.6 MB, gateway 1669.2 MB, command-tree 816.5 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 3ms | 1625.3 MB | 2526 MB | n/a | n/a | gateway peak RSS 1625.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1837 MB, gateway 1625.3 MB, command-tree 769.7 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1844.6 MB | 7530ms | 8544ms | agent-process peak RSS 1575.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1772 MB, agent-process 1575.6 MB, status-cli 798.6 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1693.4 MB | 7238ms | 7581ms | agent-process peak RSS 1424.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1621.4 MB, agent-process 1424.5 MB, status-cli 1035.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1690 MB | 6933ms | 7301ms | agent-process peak RSS 1415.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1617.3 MB, agent-process 1415.7 MB, status-cli 966.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1881.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 295.5% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1772 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 247.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1669.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 276.5% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1575.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 233.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1035.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 208.9% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 616.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 147.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 278 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 391.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 143.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-gateway-performance-man-005107f3-kova-261017-052253-e22569
Measurements:
- startup: listening 1ms; health 17ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 16ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 1895ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1624.7 MB; tracked total 2611.2 MB; max CPU 276.5%; samples 39; roles gateway-tree 1836.1MB/295.5%, gateway 1624.7MB/276.5%, command-tree 784.8MB/185%, status-cli 784.8MB/185%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1513.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1624.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1836.1 MB, gateway 1624.7 MB, command-tree 784.8 MB
  - gateway-tree peak RSS 1836.1 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-gateway-performance-man-1e8be6a8-kova-261017-052253-e22569
Measurements:
- startup: listening 1ms; health 4ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 3ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 1550ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1669.2 MB; tracked total 2556.6 MB; max CPU 249.4%; samples 39; roles gateway-tree 1881.6MB/269.3%, gateway 1669.2MB/249.4%, command-tree 816.5MB/178.2%, status-cli 816.5MB/178.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1761.24ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1669.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1881.6 MB, gateway 1669.2 MB, command-tree 816.5 MB
  - gateway-tree peak RSS 1881.6 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-gateway-performance-man-958fde53-kova-261017-052253-e22569
Measurements:
- startup: listening 1ms; health 3ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 1777ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1625.3 MB; tracked total 2526 MB; max CPU 266.1%; samples 39; roles gateway-tree 1837MB/284%, gateway 1625.3MB/266.1%, command-tree 769.7MB/165.5%, status-cli 769.7MB/165.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1766.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1625.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1837 MB, gateway 1625.3 MB, command-tree 769.7 MB
  - gateway-tree peak RSS 1837 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-8e2a29af-kova-261017-052253-e22569
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1575.6 MB; tracked total 1844.6 MB; max CPU 233.6%; samples 27; roles command-tree 1772MB/247.5%, agent-process 1575.6MB/233.6%, status-cli 798.6MB/208.9%, agent-cli 252.7MB/136.9%
- agent: turn 8544ms; cold/warm 7530ms/8544ms; cold-warm delta 0ms; pre-provider 7680ms; provider 1ms; metadata scans 11 (316.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8493.3ms; max 8544ms; pre-provider p95 7659.25ms
- agent CLI attribution: cold known 4004ms / unattributed 3261ms; warm known 5110ms / unattributed 2570ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1782.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1575.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1772 MB, agent-process 1575.6 MB, status-cli 798.6 MB
  - command-tree peak RSS 1772 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7530ms; pre-provider 7265ms; provider 2ms; post-provider 263ms; response true
    - active window: metadata scans 4 (122.91ms total, max 61.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7265ms; provider 2ms; post-provider 263ms; unknown 3863.34ms; source agent.prepare 2924.91ms; plugins.metadata.scan 476.75ms
  - warm: total 8544ms; pre-provider 7680ms; provider 1ms; post-provider 863ms; response true
    - active window: metadata scans 7 (193.82ms total, max 64.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7680ms; provider 1ms; post-provider 863ms; unknown 4278.34ms; source agent.prepare 2924.91ms; plugins.metadata.scan 476.75ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7265 ms | 4004 ms | 3261 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-8e2a29af-kova-261017-052253-e22569/openclaw/timeline.jsonl |
  | warm | 7680 ms | 5110 ms | 2570 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-8e2a29af-kova-261017-052253-e22569/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2265 ms | 1110 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2033 ms | 674 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1197 ms | 392 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 122 ms | 62 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 9 ms | 9 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2828 ms | 1783 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2240 ms | 617 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1730 ms | 641 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 133 ms | 64 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 10 ms | 10 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-2ab680e0-kova-261017-052253-e22569
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1424.5 MB; tracked total 1693.4 MB; max CPU 224.8%; samples 26; roles command-tree 1621.4MB/238.7%, agent-process 1424.5MB/224.8%, status-cli 1035.8MB/195.8%, agent-cli 278MB/125.8%
- agent: turn 7581ms; cold/warm 7238ms/7581ms; cold-warm delta 0ms; pre-provider 7357ms; provider 1ms; metadata scans 8 (253.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7563.85ms; max 7581ms; pre-provider p95 7337.65ms
- agent CLI attribution: cold known 3845ms / unattributed 3125ms; warm known 4851ms / unattributed 2506ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1634.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1424.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1621.4 MB, agent-process 1424.5 MB, status-cli 1035.8 MB
  - command-tree peak RSS 1621.4 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7238ms; pre-provider 6970ms; provider 2ms; post-provider 266ms; response true
    - active window: metadata scans 4 (125.46ms total, max 60.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6970ms; provider 2ms; post-provider 266ms; unknown 3855.49ms; source agent.prepare 2718.16ms; plugins.metadata.scan 396.35ms
  - warm: total 7581ms; pre-provider 7357ms; provider 1ms; post-provider 223ms; response true
    - active window: metadata scans 4 (127.78ms total, max 61.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7357ms; provider 1ms; post-provider 223ms; unknown 4242.49ms; source agent.prepare 2718.16ms; plugins.metadata.scan 396.35ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6970 ms | 3845 ms | 3125 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-2ab680e0-kova-261017-052253-e22569/openclaw/timeline.jsonl |
  | warm | 7357 ms | 4851 ms | 2506 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-2ab680e0-kova-261017-052253-e22569/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2184 ms | 1034 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1927 ms | 624 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1148 ms | 378 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 125 ms | 61 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 10 ms | 10 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2684 ms | 1634 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2204 ms | 596 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1568 ms | 583 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 128 ms | 61 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 6 ms | 6 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-67b331a3-kova-261017-052253-e22569
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1415.7 MB; tracked total 1690 MB; max CPU 221.4%; samples 25; roles command-tree 1617.3MB/235.3%, agent-process 1415.7MB/221.4%, status-cli 966.9MB/195.1%, agent-cli 201.6MB/155.9%
- agent: turn 7301ms; cold/warm 6933ms/7301ms; cold-warm delta 0ms; pre-provider 7056ms; provider 1ms; metadata scans 8 (241.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7282.6ms; max 7301ms; pre-provider p95 7037ms
- agent CLI attribution: cold known 3614ms / unattributed 3062ms; warm known 4662ms / unattributed 2394ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1557.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1415.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1617.3 MB, agent-process 1415.7 MB, status-cli 966.9 MB
  - command-tree peak RSS 1617.3 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6933ms; pre-provider 6676ms; provider 2ms; post-provider 255ms; response true
    - active window: metadata scans 4 (120.07ms total, max 72.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6676ms; provider 2ms; post-provider 255ms; unknown 3634.97ms; source agent.prepare 2662.51ms; plugins.metadata.scan 378.52ms
  - warm: total 7301ms; pre-provider 7056ms; provider 1ms; post-provider 244ms; response true
    - active window: metadata scans 4 (121.67ms total, max 63.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7056ms; provider 1ms; post-provider 244ms; unknown 4014.97ms; source agent.prepare 2662.51ms; plugins.metadata.scan 378.52ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6676 ms | 3614 ms | 3062 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-67b331a3-kova-261017-052253-e22569/openclaw/timeline.jsonl |
  | warm | 7056 ms | 4662 ms | 2394 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-67b331a3-kova-261017-052253-e22569/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2040 ms | 983 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1804 ms | 588 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1084 ms | 357 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 72 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 7 ms | 3 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2521 ms | 1557 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2153 ms | 577 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1576 ms | 595 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 63 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 10 ms | 10 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261017-052253-e22569-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261017-052253-e22569-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261017-052253-e22569-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-gateway-performance-man-005107f3-kova-261017-052253-e22569
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-gateway-performance-man-1e8be6a8-kova-261017-052253-e22569
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-gateway-performance-man-958fde53-kova-261017-052253-e22569
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-8e2a29af-kova-261017-052253-e22569
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-2ab680e0-kova-261017-052253-e22569
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261017-052253-e22569/kova-agent-cold-warm-message-67b331a3-kova-261017-052253-e22569

## Target Cleanup

- Runtime: `kova-local-mvbya7h3-3dl-58819e8c`
- Result: removed
- Duration: 644ms

