# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 10 |
| Warnings | 0 |
| Records | 6 (FAIL:4, BLOCKED:2) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260928-053600-3a0839` |
| Generated | 2026-09-28T05:40:13.778Z |
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
| BLOCKED | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1314.5 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 74 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU at least 252.3% exceeded threshold 250% (upper bound 264.6%) | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 320 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1313.2 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 320 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU at least 265.8% exceeded threshold 250% (upper bound 278.1%) | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 126 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1319.1 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 126 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 953.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1039.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1039.6 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1135.6 MB, agent-process 1039.6 MB, status-cli 475 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1039.6 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 994.7 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 994.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 126ms | 1143.2MB | n/a | 264.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | BLOCKED:2, FAIL:1 | n/a | 0MB | n/a | 231.5% | 4624ms | 5036ms | 4470ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 74ms | 1143.2 MB | 1807.1 MB | n/a | n/a | gateway-tree peak RSS 1314.5 MB exceeded threshold 1200 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 320ms | 1141.2 MB | 1809.1 MB | n/a | n/a | gateway max CPU at least 252.3% exceeded threshold 250% (upper bound 264.6%) |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 126ms | 1147.5 MB | 1823 MB | n/a | n/a | gateway max CPU at least 265.8% exceeded threshold 250% (upper bound 278.1%) |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1120 MB | 4750ms | 5036ms | Product CPU interval evidence is incomplete |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1207.2 MB | 4624ms | 5641ms | Product CPU interval evidence is incomplete |
| 3 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1161.9 MB | 4409ms | 4847ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1319.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 294.1% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1147.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 278.1% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1135.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 247.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1039.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 237.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 518.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.6% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 497.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 126.2% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 149.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.1% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 142.7% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-gateway-performance-man-005107f3-kova-260928-053600-3a0839
Measurements:
- startup: listening 1ms; health 74ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 73ms; post-ready p95 45ms; failures 0; final failures 0; slowest startup-sample/cold-start 73ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1143.2 MB; tracked total 1807.1 MB; max CPU 212.6%; samples 33; roles gateway-tree 1314.5MB/221.3%, gateway 1143.2MB/212.6%, uncategorized 495.8MB/126.2%, command-tree 420.4MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1578.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1314.5 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-gateway-performance-man-1e8be6a8-kova-260928-053600-3a0839
Measurements:
- startup: listening 0ms; health 320ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 320ms; post-ready p95 95ms; failures 0; final failures 0; slowest startup-sample/cold-start 320ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1141.2 MB; tracked total 1809.1 MB; max CPU 264.6%; samples 33; roles gateway-tree 1313.2MB/280.6%, gateway 1141.2MB/264.6%, uncategorized 495.8MB/125.2%, command-tree 423.7MB/162%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1764.09ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU at least 252.3% exceeded threshold 250% (upper bound 264.6%)
  - gateway-tree peak RSS 1313.2 MB exceeded threshold 1200 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-gateway-performance-man-958fde53-kova-260928-053600-3a0839
Measurements:
- startup: listening 0ms; health 126ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 126ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 126ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1147.5 MB; tracked total 1823 MB; max CPU 278.1%; samples 33; roles gateway-tree 1319.1MB/294.1%, gateway 1147.5MB/278.1%, uncategorized 497.4MB/117.3%, command-tree 432.1MB/159.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1725.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU at least 265.8% exceeded threshold 250% (upper bound 278.1%)
  - gateway-tree peak RSS 1319.1 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-8e2a29af-kova-260928-053600-3a0839
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 953.6 MB; tracked total 1120 MB; max CPU 231.5%; samples 18; roles command-tree 1048.8MB/241.4%, agent-process 953.6MB/231.5%, status-cli 481.7MB/169.2%, agent-cli 149.4MB/140.2%
- agent: turn 5036ms; cold/warm 4750ms/5036ms; cold-warm delta 0ms; pre-provider 4786ms; provider 1ms; metadata scans 8 (207.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5021.7ms; max 5036ms; pre-provider p95 4776.25ms
- agent CLI attribution: cold known 3178ms / unattributed 1413ms; warm known 3195ms / unattributed 1591ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1075.44ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
- Agent turns:
  - cold: total 4750ms; pre-provider 4591ms; provider 2ms; post-provider 157ms; response true
    - active window: metadata scans 4 (98.11ms total, max 55.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4591ms; provider 2ms; post-provider 157ms; unknown 2622.26ms; source agent.prepare 1645.79ms; plugins.metadata.scan 322.95ms
  - warm: total 5036ms; pre-provider 4786ms; provider 1ms; post-provider 249ms; response true
    - active window: metadata scans 4 (109.15ms total, max 60.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4786ms; provider 1ms; post-provider 249ms; unknown 2817.26ms; source agent.prepare 1645.79ms; plugins.metadata.scan 322.95ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4591 ms | 3178 ms | 1413 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-8e2a29af-kova-260928-053600-3a0839/openclaw/timeline.jsonl |
  | warm | 4786 ms | 3195 ms | 1591 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-8e2a29af-kova-260928-053600-3a0839/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1837 ms | 503 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1232 ms | 909 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 905 ms | 434 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 98 ms | 56 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 44 ms | 44 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1905 ms | 537 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1356 ms | 1076 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 741 ms | 337 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 110 ms | 61 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 46 ms | 46 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-2ab680e0-kova-260928-053600-3a0839
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1039.6 MB; tracked total 1207.2 MB; max CPU 212.5%; samples 19; roles command-tree 1135.6MB/222.8%, agent-process 1039.6MB/212.5%, status-cli 475MB/167.1%, agent-cli 96MB/155.1%
- agent: turn 5641ms; cold/warm 4624ms/5641ms; cold-warm delta 0ms; pre-provider 5352ms; provider 1ms; metadata scans 8 (252.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5590.15ms; max 5641ms; pre-provider p95 5307.9ms
- agent CLI attribution: cold known 3078ms / unattributed 1392ms; warm known 3684ms / unattributed 1668ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1171.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - agent-process peak RSS 1039.6 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1135.6 MB, agent-process 1039.6 MB, status-cli 475 MB
- Agent turns:
  - cold: total 4624ms; pre-provider 4470ms; provider 2ms; post-provider 152ms; response true
    - active window: metadata scans 4 (134.07ms total, max 63.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4470ms; provider 2ms; post-provider 152ms; unknown 2443.86ms; source agent.prepare 1664.38ms; plugins.metadata.scan 361.76ms
  - warm: total 5641ms; pre-provider 5352ms; provider 1ms; post-provider 288ms; response true
    - active window: metadata scans 4 (118.24ms total, max 56.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5352ms; provider 1ms; post-provider 288ms; unknown 3325.86ms; source agent.prepare 1664.38ms; plugins.metadata.scan 361.76ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4470 ms | 3078 ms | 1392 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-2ab680e0-kova-260928-053600-3a0839/openclaw/timeline.jsonl |
  | warm | 5352 ms | 3684 ms | 1668 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-2ab680e0-kova-260928-053600-3a0839/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 1889 ms | 489 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1176 ms | 906 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 830 ms | 412 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 134 ms | 64 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2176 ms | 586 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1594 ms | 1171 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 832 ms | 328 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 57 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 47 ms | 47 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

### agent-cold-warm-message sample 3

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-67b331a3-kova-260928-053600-3a0839
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 994.7 MB; tracked total 1161.9 MB; max CPU 237.2%; samples 18; roles command-tree 1090.5MB/247.2%, agent-process 994.7MB/237.2%, status-cli 518.4MB/174.6%, agent-cli 95.8MB/128.9%
- agent: turn 4847ms; cold/warm 4409ms/4847ms; cold-warm delta 0ms; pre-provider 4589ms; provider 1ms; metadata scans 8 (206.04ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4825.1ms; max 4847ms; pre-provider p95 4572.4ms
- agent CLI attribution: cold known 2983ms / unattributed 1274ms; warm known 3100ms / unattributed 1489ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1082.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
- Agent turns:
  - cold: total 4409ms; pre-provider 4257ms; provider 2ms; post-provider 150ms; response true
    - active window: metadata scans 4 (96.13ms total, max 53.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4257ms; provider 2ms; post-provider 150ms; unknown 2272.86ms; source agent.prepare 1670.81ms; plugins.metadata.scan 313.33ms
  - warm: total 4847ms; pre-provider 4589ms; provider 1ms; post-provider 257ms; response true
    - active window: metadata scans 4 (109.91ms total, max 56.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4589ms; provider 1ms; post-provider 257ms; unknown 2604.86ms; source agent.prepare 1670.81ms; plugins.metadata.scan 313.33ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4257 ms | 2983 ms | 1274 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-67b331a3-kova-260928-053600-3a0839/openclaw/timeline.jsonl |
  | warm | 4589 ms | 3100 ms | 1489 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-67b331a3-kova-260928-053600-3a0839/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 1752 ms | 467 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1105 ms | 849 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 884 ms | 429 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 96 ms | 53 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1706 ms | 494 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1356 ms | 1082 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 786 ms | 335 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 109 ms | 56 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260928-053600-3a0839-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260928-053600-3a0839-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260928-053600-3a0839-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-gateway-performance-man-005107f3-kova-260928-053600-3a0839
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-gateway-performance-man-1e8be6a8-kova-260928-053600-3a0839
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-gateway-performance-man-958fde53-kova-260928-053600-3a0839
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-8e2a29af-kova-260928-053600-3a0839
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-2ab680e0-kova-260928-053600-3a0839
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260928-053600-3a0839/kova-agent-cold-warm-message-67b331a3-kova-260928-053600-3a0839

## Target Cleanup

- Runtime: `kova-local-muktdw9o-3ss-a420b97f`
- Result: removed
- Duration: 513ms

