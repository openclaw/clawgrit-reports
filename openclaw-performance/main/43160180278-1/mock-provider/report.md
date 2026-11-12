# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1572.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1846.6 MB, gateway 1572.9 MB, command-tree 703 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1572.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1846.6 MB, gateway 1572.9 MB, command-tree 703 MB |
| Blocking findings | 13 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261112-051848-d03f8f` |
| Generated | 2026-11-12T05:47:07.055Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1572.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1846.6 MB, gateway 1572.9 MB, command-tree 703 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1926 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1846.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1926 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261112-051848-d03f8f' took 15692ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2707 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1636.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1909.8 MB, gateway 1636.6 MB, command-tree 704.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2707 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1909.8 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2707 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1543 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1817.1 MB, gateway 1543 MB, command-tree 737.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1291 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1817.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1291 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1413.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1681.2 MB, agent-process 1413.9 MB, status-cli 926.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1413.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1681.2 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1413.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1446.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1715 MB, agent-process 1446.8 MB, status-cli 815.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1446.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1715 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1446.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1375.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1641.6 MB, agent-process 1375.9 MB, status-cli 974.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1375.9 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 1926ms | 1572.9MB | n/a | 172.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 202.6% | 7065ms | 8482ms | 6781ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 1926ms | 1572.9 MB | 2560.3 MB | n/a | n/a | gateway peak RSS 1572.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1846.6 MB, gateway 1572.9 MB, command-tree 703 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 2707ms | 1636.6 MB | 2627.3 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261112-051848-d03f8f' took 15692ms, over threshold 15000ms |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 1291ms | 1543 MB | 2551.1 MB | n/a | n/a | gateway peak RSS 1543 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1817.1 MB, gateway 1543 MB, command-tree 737.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1753.6 MB | 7065ms | 8164ms | agent-process peak RSS 1413.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1681.2 MB, agent-process 1413.9 MB, status-cli 926.3 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1787.5 MB | 7299ms | 8482ms | agent-process peak RSS 1446.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1715 MB, agent-process 1446.8 MB, status-cli 815.9 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1714 MB | 6903ms | 9077ms | agent-process peak RSS 1375.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1641.6 MB, agent-process 1375.9 MB, status-cli 974.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1909.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 246.6% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1636.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 246.6% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1715 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 242.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1446.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 226.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 974.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.8% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 548.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.5% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 396.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 387.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 140.8% (scenario gateway-performance/many-bundled-plugins)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU |
|---|---|---:|---:|
| gateway-performance / cold-start | complete | 1408.6 MB | 246.1% |
| gateway-performance / warm-restart | complete | 1846.6 MB | 246.3% |
| gateway-performance / cold-start | complete | 1351.7 MB | 312.6% |
| gateway-performance / warm-restart | complete | 1850.5 MB | 268.2% |
| gateway-performance / cold-start | complete | 1429.8 MB | 251.5% |
| gateway-performance / warm-restart | complete | 1792.6 MB | 208.5% |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-gateway-performance-man-005107f3-kova-261112-051848-d03f8f
Measurements:
- startup: listening 0ms; health 1926ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 265ms; post-ready p95 3ms; failures 11; final failures 0; slowest startup-sample/cold-start 265ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1572.9 MB; tracked total 2560.3 MB; max CPU 172.4%; samples 41; roles gateway-tree 1846.6MB/180.4%, uncategorized 544.4MB/188.5%, gateway 1572.9MB/172.4%, command-tree 703MB/178.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 1783.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1572.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1846.6 MB, gateway 1572.9 MB, command-tree 703 MB
  - gateway-tree peak RSS 1846.6 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-gateway-performance-man-1e8be6a8-kova-261112-051848-d03f8f
Measurements:
- startup: listening 0ms; health 2707ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 361ms; post-ready p95 2ms; failures 14; final failures 0; slowest startup-sample/cold-start 361ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1636.6 MB; tracked total 2627.3 MB; max CPU 246.6%; samples 50; roles gateway-tree 1909.8MB/246.6%, gateway 1636.6MB/246.6%, command-tree 704.6MB/178.7%, status-cli 704.6MB/178.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2143.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261112-051848-d03f8f' took 15692ms, over threshold 15000ms
  - gateway peak RSS 1636.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1909.8 MB, gateway 1636.6 MB, command-tree 704.6 MB
  - gateway-tree peak RSS 1909.8 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-gateway-performance-man-958fde53-kova-261112-051848-d03f8f
Measurements:
- startup: listening 0ms; health 1291ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 147ms; post-ready p95 2ms; failures 8; final failures 0; slowest startup-sample/warm-restart 147ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1543 MB; tracked total 2551.1 MB; max CPU 172.1%; samples 39; roles gateway-tree 1817.1MB/180.1%, gateway 1543MB/172.1%, command-tree 737.1MB/167.8%, status-cli 737.1MB/167.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 1795.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1543 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1817.1 MB, gateway 1543 MB, command-tree 737.1 MB
  - gateway-tree peak RSS 1817.1 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-8e2a29af-kova-261112-051848-d03f8f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1413.9 MB; tracked total 1753.6 MB; max CPU 202.6%; samples 26; roles command-tree 1681.2MB/220.4%, agent-process 1413.9MB/202.6%, status-cli 926.3MB/195%, agent-cli 396.3MB/158.4%
- agent: turn 8164ms; cold/warm 7065ms/8164ms; cold-warm delta 0ms; pre-provider 7837ms; provider 1ms; metadata scans 8 (286.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8109.05ms; max 8164ms; pre-provider p95 7784.2ms
- agent CLI attribution: cold known 4107ms / unattributed 2674ms; warm known 5401ms / unattributed 2436ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1592.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1413.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1681.2 MB, agent-process 1413.9 MB, status-cli 926.3 MB
  - command-tree peak RSS 1681.2 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7065ms; pre-provider 6781ms; provider 2ms; post-provider 282ms; response true
    - active window: metadata scans 4 (142.11ms total, max 78.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6781ms; provider 2ms; post-provider 282ms; unknown 3376.21ms; source agent.prepare 2959.14ms; plugins.metadata.scan 445.65ms
  - warm: total 8164ms; pre-provider 7837ms; provider 1ms; post-provider 326ms; response true
    - active window: metadata scans 4 (144.78ms total, max 80.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7837ms; provider 1ms; post-provider 326ms; unknown 4432.21ms; source agent.prepare 2959.14ms; plugins.metadata.scan 445.65ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6781 ms | 4107 ms | 2674 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-8e2a29af-kova-261112-051848-d03f8f/openclaw/timeline.jsonl |
  | warm | 7837 ms | 5401 ms | 2436 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-8e2a29af-kova-261112-051848-d03f8f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3048 ms | 1039 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1414 ms | 787 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1110 ms | 568 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 141 ms | 78 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 131 ms | 131 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2858 ms | 1048 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2324 ms | 1592 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1850 ms | 551 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 145 ms | 80 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 131 ms | 131 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-2ab680e0-kova-261112-051848-d03f8f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1446.8 MB; tracked total 1787.5 MB; max CPU 192.7%; samples 27; roles command-tree 1715MB/206.9%, agent-process 1446.8MB/192.7%, status-cli 815.9MB/193.6%, agent-cli 391.5MB/92.4%
- agent: turn 8482ms; cold/warm 7299ms/8482ms; cold-warm delta 0ms; pre-provider 8194ms; provider 1ms; metadata scans 8 (310.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8422.85ms; max 8482ms; pre-provider p95 8133.45ms
- agent CLI attribution: cold known 4165ms / unattributed 2818ms; warm known 5596ms / unattributed 2598ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1627.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1446.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1715 MB, agent-process 1446.8 MB, status-cli 815.9 MB
  - command-tree peak RSS 1715 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7299ms; pre-provider 6983ms; provider 3ms; post-provider 313ms; response true
    - active window: metadata scans 4 (139.56ms total, max 76.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6983ms; provider 3ms; post-provider 313ms; unknown 3633.74ms; source agent.prepare 2877.47ms; plugins.metadata.scan 471.79ms
  - warm: total 8482ms; pre-provider 8194ms; provider 1ms; post-provider 287ms; response true
    - active window: metadata scans 4 (171.41ms total, max 80.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8194ms; provider 1ms; post-provider 287ms; unknown 4844.74ms; source agent.prepare 2877.47ms; plugins.metadata.scan 471.79ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6983 ms | 4165 ms | 2818 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-2ab680e0-kova-261112-051848-d03f8f/openclaw/timeline.jsonl |
  | warm | 8194 ms | 5596 ms | 2598 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-2ab680e0-kova-261112-051848-d03f8f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2932 ms | 1027 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1481 ms | 832 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1178 ms | 602 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 146 ms | 146 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 140 ms | 76 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3269 ms | 1191 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2382 ms | 1627 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1702 ms | 552 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 170 ms | 81 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 136 ms | 136 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-67b331a3-kova-261112-051848-d03f8f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1375.9 MB; tracked total 1714 MB; max CPU 226.2%; samples 27; roles command-tree 1641.6MB/242.9%, agent-process 1375.9MB/226.2%, status-cli 974.8MB/200.8%, agent-cli 364.5MB/148.6%
- agent: turn 9077ms; cold/warm 6903ms/9077ms; cold-warm delta 0ms; pre-provider 8727ms; provider 1ms; metadata scans 8 (296.55ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8968.3ms; max 9077ms; pre-provider p95 8619.75ms
- agent CLI attribution: cold known 4020ms / unattributed 2562ms; warm known 5979ms / unattributed 2748ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1868.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1375.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1641.6 MB, agent-process 1375.9 MB, status-cli 974.8 MB
  - command-tree peak RSS 1641.6 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6903ms; pre-provider 6582ms; provider 2ms; post-provider 319ms; response true
    - active window: metadata scans 4 (146.26ms total, max 80.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6582ms; provider 2ms; post-provider 319ms; unknown 2922.48ms; source agent.prepare 3202.54ms; plugins.metadata.scan 456.98ms
  - warm: total 9077ms; pre-provider 8727ms; provider 1ms; post-provider 349ms; response true
    - active window: metadata scans 4 (150.29ms total, max 82.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8727ms; provider 1ms; post-provider 349ms; unknown 5067.48ms; source agent.prepare 3202.54ms; plugins.metadata.scan 456.98ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6582 ms | 4020 ms | 2562 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-67b331a3-kova-261112-051848-d03f8f/openclaw/timeline.jsonl |
  | warm | 8727 ms | 5979 ms | 2748 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-67b331a3-kova-261112-051848-d03f8f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2980 ms | 1065 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1335 ms | 734 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1156 ms | 578 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 146 ms | 81 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 128 ms | 128 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2861 ms | 1072 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2751 ms | 1868 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2046 ms | 666 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 151 ms | 82 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 136 ms | 136 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261112-051848-d03f8f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261112-051848-d03f8f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261112-051848-d03f8f-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-gateway-performance-man-005107f3-kova-261112-051848-d03f8f
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-gateway-performance-man-1e8be6a8-kova-261112-051848-d03f8f
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-gateway-performance-man-958fde53-kova-261112-051848-d03f8f
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-8e2a29af-kova-261112-051848-d03f8f
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-2ab680e0-kova-261112-051848-d03f8f
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261112-051848-d03f8f/kova-agent-cold-warm-message-67b331a3-kova-261112-051848-d03f8f

## Target Cleanup

- Runtime: `kova-local-mwd3l3ne-3jt-5d5c1be7`
- Result: removed
- Duration: 615ms

