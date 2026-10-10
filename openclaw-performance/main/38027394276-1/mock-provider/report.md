# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1649.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1934.8 MB, gateway 1649.7 MB, command-tree 865.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1649.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1934.8 MB, gateway 1649.7 MB, command-tree 865.6 MB |
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
| Run ID | `kova-261010-052613-1ae561` |
| Generated | 2026-10-10T05:46:12.194Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1649.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1934.8 MB, gateway 1649.7 MB, command-tree 865.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 102 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1934.8 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 102 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1668 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1953.7 MB, gateway 1668 MB, command-tree 831.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 147 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1953.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 147 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1650.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1935.9 MB, gateway 1650.6 MB, command-tree 901.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1935.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 901.2 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1387 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1487 MB, agent-process 1387 MB, status-cli 729.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1387 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1487 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1387 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1385.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1486.1 MB, agent-process 1385.9 MB, status-cli 732.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1385.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1486.1 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1385.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1469.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1569.1 MB, agent-process 1469.5 MB, status-cli 730.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1469.5 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 102ms | 1650.6MB | n/a | 239% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 180.5% | 6936ms | 7159ms | 6703ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 102ms | 1649.7 MB | 2702.3 MB | n/a | n/a | gateway peak RSS 1649.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1934.8 MB, gateway 1649.7 MB, command-tree 865.6 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 147ms | 1668 MB | 2666.5 MB | n/a | n/a | gateway peak RSS 1668 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1953.7 MB, gateway 1668 MB, command-tree 831.3 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1650.6 MB | 2909.7 MB | n/a | n/a | gateway peak RSS 1650.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1935.9 MB, gateway 1650.6 MB, command-tree 901.2 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1559 MB | 6972ms | 7159ms | agent-process peak RSS 1387 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1487 MB, agent-process 1387 MB, status-cli 729.6 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1557.6 MB | 6885ms | 7072ms | agent-process peak RSS 1385.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1486.1 MB, agent-process 1385.9 MB, status-cli 732.1 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1641.5 MB | 6936ms | 7178ms | agent-process peak RSS 1469.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1569.1 MB, agent-process 1469.5 MB, status-cli 730.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1953.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 283.4% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1668 MB (scenario gateway-performance/many-bundled-plugins); CPU 244.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1569.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1469.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 901.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 170.1% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 699.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 129.2% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 176.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.1% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 142.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-gateway-performance-man-005107f3-kova-261010-052613-1ae561
Measurements:
- startup: listening 1ms; health 102ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 101ms; post-ready p95 6ms; failures 0; final failures 0; slowest startup-sample/cold-start 101ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1649.7 MB; tracked total 2702.3 MB; max CPU 239%; samples 39; roles gateway-tree 1934.8MB/279.6%, gateway 1649.7MB/239%, command-tree 865.6MB/157%, status-cli 865.6MB/157%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.subagent-recovery 1327.61ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1649.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1934.8 MB, gateway 1649.7 MB, command-tree 865.6 MB
  - gateway-tree peak RSS 1934.8 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-gateway-performance-man-1e8be6a8-kova-261010-052613-1ae561
Measurements:
- startup: listening 0ms; health 147ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 147ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 147ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1668 MB; tracked total 2666.5 MB; max CPU 244.9%; samples 39; roles gateway-tree 1953.7MB/283.4%, gateway 1668MB/244.9%, command-tree 831.3MB/155.5%, status-cli 831.3MB/155.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.subagent-recovery 1240.98ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1668 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1953.7 MB, gateway 1668 MB, command-tree 831.3 MB
  - gateway-tree peak RSS 1953.7 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-gateway-performance-man-958fde53-kova-261010-052613-1ae561
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 2ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 15ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1650.6 MB; tracked total 2909.7 MB; max CPU 230.6%; samples 38; roles gateway-tree 1935.9MB/267.7%, gateway 1650.6MB/230.6%, command-tree 901.2MB/146.4%, status-cli 901.2MB/146.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.subagent-recovery 1347.14ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1650.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1935.9 MB, gateway 1650.6 MB, command-tree 901.2 MB
  - gateway-tree peak RSS 1935.9 MB exceeded threshold 1440 MB
  - status-cli peak RSS 901.2 MB exceeded threshold 900 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-8e2a29af-kova-261010-052613-1ae561
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1387 MB; tracked total 1559 MB; max CPU 177.3%; samples 24; roles command-tree 1487MB/187.2%, agent-process 1387MB/177.3%, status-cli 729.6MB/168.9%, agent-cli 100.2MB/157.1%
- agent: turn 7159ms; cold/warm 6972ms/7159ms; cold-warm delta 0ms; pre-provider 6895ms; provider 1ms; metadata scans 8 (215.15ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7149.65ms; max 7159ms; pre-provider p95 6886.5ms
- agent CLI attribution: cold known 3431ms / unattributed 3294ms; warm known 3541ms / unattributed 3354ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 996.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1387 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1487 MB, agent-process 1387 MB, status-cli 729.6 MB
  - command-tree peak RSS 1487 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6972ms; pre-provider 6725ms; provider 2ms; post-provider 245ms; response true
    - active window: metadata scans 4 (104.34ms total, max 56.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6725ms; provider 2ms; post-provider 245ms; unknown 4053.3ms; source agent.prepare 2321.35ms; plugins.metadata.scan 350.35ms
  - warm: total 7159ms; pre-provider 6895ms; provider 1ms; post-provider 263ms; response true
    - active window: metadata scans 4 (110.81ms total, max 59.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6895ms; provider 1ms; post-provider 263ms; unknown 4223.3ms; source agent.prepare 2321.35ms; plugins.metadata.scan 350.35ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6725 ms | 3431 ms | 3294 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-8e2a29af-kova-261010-052613-1ae561/openclaw/timeline.jsonl |
  | warm | 6895 ms | 3541 ms | 3354 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-8e2a29af-kova-261010-052613-1ae561/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1902 ms | 547 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1610 ms | 913 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1152 ms | 537 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 103 ms | 56 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 13 ms | 7 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1966 ms | 571 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1296 ms | 997 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1171 ms | 584 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 111 ms | 59 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-2ab680e0-kova-261010-052613-1ae561
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1385.9 MB; tracked total 1557.6 MB; max CPU 183%; samples 23; roles command-tree 1486.1MB/193%, agent-process 1385.9MB/183%, status-cli 732.1MB/167.6%, agent-cli 176.3MB/147.2%
- agent: turn 7072ms; cold/warm 6885ms/7072ms; cold-warm delta 0ms; pre-provider 6842ms; provider 1ms; metadata scans 8 (208.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7062.65ms; max 7072ms; pre-provider p95 6832.7ms
- agent CLI attribution: cold known 3440ms / unattributed 3216ms; warm known 3478ms / unattributed 3364ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1004.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1385.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1486.1 MB, agent-process 1385.9 MB, status-cli 732.1 MB
  - command-tree peak RSS 1486.1 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6885ms; pre-provider 6656ms; provider 1ms; post-provider 228ms; response true
    - active window: metadata scans 4 (103.14ms total, max 56.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6656ms; provider 1ms; post-provider 228ms; unknown 3962.37ms; source agent.prepare 2362.29ms; plugins.metadata.scan 331.34ms
  - warm: total 7072ms; pre-provider 6842ms; provider 1ms; post-provider 229ms; response true
    - active window: metadata scans 4 (105.35ms total, max 57.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6842ms; provider 1ms; post-provider 229ms; unknown 4148.37ms; source agent.prepare 2362.29ms; plugins.metadata.scan 331.34ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6656 ms | 3440 ms | 3216 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-2ab680e0-kova-261010-052613-1ae561/openclaw/timeline.jsonl |
  | warm | 6842 ms | 3478 ms | 3364 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-2ab680e0-kova-261010-052613-1ae561/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1908 ms | 542 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1524 ms | 877 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1204 ms | 564 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 103 ms | 56 ms |
  | cold | `cli.main.build-program` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1863 ms | 528 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1313 ms | 1004 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 1158 ms | 587 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 105 ms | 57 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 9 ms | 4 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-67b331a3-kova-261010-052613-1ae561
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1469.5 MB; tracked total 1641.5 MB; max CPU 180.5%; samples 24; roles command-tree 1569.1MB/190.1%, agent-process 1469.5MB/180.5%, status-cli 730.7MB/170.1%, agent-cli 100MB/137.7%
- agent: turn 7178ms; cold/warm 6936ms/7178ms; cold-warm delta 0ms; pre-provider 6953ms; provider 1ms; metadata scans 8 (218.4ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7165.9ms; max 7178ms; pre-provider p95 6940.5ms
- agent CLI attribution: cold known 3447ms / unattributed 3256ms; warm known 3524ms / unattributed 3429ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1020.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1469.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1569.1 MB, agent-process 1469.5 MB, status-cli 730.7 MB
  - command-tree peak RSS 1569.1 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6936ms; pre-provider 6703ms; provider 2ms; post-provider 231ms; response true
    - active window: metadata scans 4 (109.74ms total, max 59.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6703ms; provider 2ms; post-provider 231ms; unknown 4053ms; source agent.prepare 2316.17ms; plugins.metadata.scan 333.83ms
  - warm: total 7178ms; pre-provider 6953ms; provider 1ms; post-provider 224ms; response true
    - active window: metadata scans 4 (108.66ms total, max 57.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6953ms; provider 1ms; post-provider 224ms; unknown 4303ms; source agent.prepare 2316.17ms; plugins.metadata.scan 333.83ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6703 ms | 3447 ms | 3256 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-67b331a3-kova-261010-052613-1ae561/openclaw/timeline.jsonl |
  | warm | 6953 ms | 3524 ms | 3429 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-67b331a3-kova-261010-052613-1ae561/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1942 ms | 565 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1574 ms | 922 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1167 ms | 540 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 110 ms | 59 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 13 ms | 8 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1945 ms | 557 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1326 ms | 1020 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 1150 ms | 589 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 107 ms | 57 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 11 ms | 5 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261010-052613-1ae561-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261010-052613-1ae561-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261010-052613-1ae561-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-gateway-performance-man-005107f3-kova-261010-052613-1ae561
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-gateway-performance-man-1e8be6a8-kova-261010-052613-1ae561
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-gateway-performance-man-958fde53-kova-261010-052613-1ae561
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-8e2a29af-kova-261010-052613-1ae561
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-2ab680e0-kova-261010-052613-1ae561
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261010-052613-1ae561/kova-agent-cold-warm-message-67b331a3-kova-261010-052613-1ae561

## Target Cleanup

- Runtime: `kova-local-mv1ybisu-3tw-b0df64e0`
- Result: removed
- Duration: 529ms

