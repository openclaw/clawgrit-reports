# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1253.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1425.3 MB, gateway 1253.1 MB, command-tree 664.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1253.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1425.3 MB, gateway 1253.1 MB, command-tree 664.9 MB |
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
| Run ID | `kova-261001-052732-35f640` |
| Generated | 2026-10-01T05:32:24.455Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1253.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1425.3 MB, gateway 1253.1 MB, command-tree 664.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 46 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1216 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1387.9 MB, gateway 1216 MB, command-tree 672.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 81 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1213.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1385.8 MB, gateway 1213.2 MB, command-tree 678.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 58 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1162.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1258.3 MB, agent-process 1162.3 MB, status-cli 656.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1162.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 58ms | 1216MB | n/a | 240.7% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:2, FAIL:1 | n/a | 0MB | n/a | 212.6% | 5835ms | 6283ms | 5625ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 46ms | 1253.1 MB | 1977.7 MB | n/a | n/a | gateway peak RSS 1253.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1425.3 MB, gateway 1253.1 MB, command-tree 664.9 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 81ms | 1216 MB | 2052.9 MB | n/a | n/a | gateway peak RSS 1216 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1387.9 MB, gateway 1216 MB, command-tree 672.1 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 58ms | 1213.2 MB | 2041.4 MB | n/a | n/a | gateway peak RSS 1213.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1385.8 MB, gateway 1213.2 MB, command-tree 678.1 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1276.7 MB | 5835ms | 5723ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1245.5 MB | 6066ms | 6381ms |  |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1330.4 MB | 5714ms | 6283ms | agent-process peak RSS 1162.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1258.3 MB, agent-process 1162.3 MB, status-cli 656.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1425.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 296% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1258.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 233.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1253.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 280% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1162.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 224.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 678.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 222.4% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 510.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 186.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 142.3% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 10.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-gateway-performance-man-005107f3-kova-261001-052732-35f640
Measurements:
- startup: listening 1ms; health 46ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 45ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 45ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1253.1 MB; tracked total 1977.7 MB; max CPU 280%; samples 36; roles gateway-tree 1425.3MB/296%, gateway 1253.1MB/280%, command-tree 664.9MB/159.3%, status-cli 664.9MB/159.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1845.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1253.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1425.3 MB, gateway 1253.1 MB, command-tree 664.9 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-gateway-performance-man-1e8be6a8-kova-261001-052732-35f640
Measurements:
- startup: listening 0ms; health 81ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 81ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 81ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1216 MB; tracked total 2052.9 MB; max CPU 240.7%; samples 36; roles gateway-tree 1387.9MB/260.5%, gateway 1216MB/240.7%, command-tree 672.1MB/157.8%, status-cli 672.1MB/157.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1964.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1216 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1387.9 MB, gateway 1216 MB, command-tree 672.1 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-gateway-performance-man-958fde53-kova-261001-052732-35f640
Measurements:
- startup: listening 1ms; health 58ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 57ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 57ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1213.2 MB; tracked total 2041.4 MB; max CPU 238.2%; samples 36; roles gateway-tree 1385.8MB/257.9%, gateway 1213.2MB/238.2%, command-tree 678.1MB/159.3%, status-cli 678.1MB/159.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1657.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1213.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1385.8 MB, gateway 1213.2 MB, command-tree 678.1 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-8e2a29af-kova-261001-052732-35f640
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1107.7 MB; tracked total 1276.7 MB; max CPU 224.2%; samples 21; roles command-tree 1204.6MB/233.8%, agent-process 1107.7MB/224.2%, status-cli 619MB/222.4%, agent-cli 186.9MB/142.3%
- agent: turn 5835ms; cold/warm 5835ms/5723ms; cold-warm delta 112ms; pre-provider 5625ms; provider 2ms; metadata scans 8 (213.51ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5829.4ms; max 5835ms; pre-provider p95 5614.2ms
- agent CLI attribution: cold known 3872ms / unattributed 1753ms; warm known 3693ms / unattributed 1716ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1171.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5835ms; pre-provider 5625ms; provider 2ms; post-provider 208ms; response true
    - active window: metadata scans 4 (112.42ms total, max 57.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5625ms; provider 2ms; post-provider 208ms; unknown 2661.63ms; source agent.prepare 2623.61ms; plugins.metadata.scan 339.76ms
  - warm: total 5723ms; pre-provider 5409ms; provider 1ms; post-provider 313ms; response true
    - active window: metadata scans 4 (101.09ms total, max 56.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5409ms; provider 1ms; post-provider 313ms; unknown 2445.63ms; source agent.prepare 2623.61ms; plugins.metadata.scan 339.76ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5625 ms | 3872 ms | 1753 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-8e2a29af-kova-261001-052732-35f640/openclaw/timeline.jsonl |
  | warm | 5409 ms | 3693 ms | 1716 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-8e2a29af-kova-261001-052732-35f640/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2053 ms | 555 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1372 ms | 598 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1350 ms | 990 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 57 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1711 ms | 501 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1486 ms | 1171 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1254 ms | 604 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 100 ms | 56 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-2ab680e0-kova-261001-052732-35f640
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1078.3 MB; tracked total 1245.5 MB; max CPU 211.9%; samples 22; roles command-tree 1174.4MB/221.7%, agent-process 1078.3MB/211.9%, status-cli 630.5MB/213.3%, agent-cli 96.8MB/133%
- agent: turn 6381ms; cold/warm 6066ms/6381ms; cold-warm delta 0ms; pre-provider 6065ms; provider 0ms; metadata scans 8 (237ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6365.25ms; max 6381ms; pre-provider p95 6054.4ms
- agent CLI attribution: cold known 4017ms / unattributed 1836ms; warm known 4087ms / unattributed 1978ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1322.62ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6066ms; pre-provider 5853ms; provider 3ms; post-provider 210ms; response true
    - active window: metadata scans 4 (116.94ms total, max 61.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5853ms; provider 3ms; post-provider 210ms; unknown 2810.59ms; source agent.prepare 2672.95ms; plugins.metadata.scan 369.46ms
  - warm: total 6381ms; pre-provider 6065ms; provider 0ms; post-provider 316ms; response true
    - active window: metadata scans 4 (120.06ms total, max 68.4ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6065ms; provider 0ms; post-provider 316ms; unknown 3022.59ms; source agent.prepare 2672.95ms; plugins.metadata.scan 369.46ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5853 ms | 4017 ms | 1836 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-2ab680e0-kova-261001-052732-35f640/openclaw/timeline.jsonl |
  | warm | 6065 ms | 4087 ms | 1978 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-2ab680e0-kova-261001-052732-35f640/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2191 ms | 564 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1403 ms | 1051 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1394 ms | 620 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 117 ms | 62 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1958 ms | 566 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1695 ms | 1323 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1281 ms | 638 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 122 ms | 69 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-67b331a3-kova-261001-052732-35f640
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1162.3 MB; tracked total 1330.4 MB; max CPU 212.6%; samples 22; roles command-tree 1258.3MB/222.6%, agent-process 1162.3MB/212.6%, status-cli 656.5MB/204.3%, agent-cli 96.4MB/118.8%
- agent: turn 6283ms; cold/warm 5714ms/6283ms; cold-warm delta 0ms; pre-provider 5960ms; provider 0ms; metadata scans 8 (223.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6254.55ms; max 6283ms; pre-provider p95 5936.95ms
- agent CLI attribution: cold known 3850ms / unattributed 1649ms; warm known 4067ms / unattributed 1893ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1282.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1162.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1258.3 MB, agent-process 1162.3 MB, status-cli 656.5 MB
- Agent turns:
  - cold: total 5714ms; pre-provider 5499ms; provider 2ms; post-provider 213ms; response true
    - active window: metadata scans 4 (107.36ms total, max 57.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5499ms; provider 2ms; post-provider 213ms; unknown 2421.12ms; source agent.prepare 2735.8ms; plugins.metadata.scan 342.08ms
  - warm: total 6283ms; pre-provider 5960ms; provider 0ms; post-provider 323ms; response true
    - active window: metadata scans 4 (115.73ms total, max 66.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5960ms; provider 0ms; post-provider 323ms; unknown 2882.12ms; source agent.prepare 2735.8ms; plugins.metadata.scan 342.08ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5499 ms | 3850 ms | 1649 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-67b331a3-kova-261001-052732-35f640/openclaw/timeline.jsonl |
  | warm | 5960 ms | 4067 ms | 1893 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-67b331a3-kova-261001-052732-35f640/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1966 ms | 509 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1432 ms | 639 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1312 ms | 996 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 108 ms | 57 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1978 ms | 558 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1638 ms | 1283 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1302 ms | 633 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 116 ms | 67 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261001-052732-35f640-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261001-052732-35f640-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261001-052732-35f640-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-gateway-performance-man-005107f3-kova-261001-052732-35f640
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-gateway-performance-man-1e8be6a8-kova-261001-052732-35f640
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-gateway-performance-man-958fde53-kova-261001-052732-35f640
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-8e2a29af-kova-261001-052732-35f640
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-2ab680e0-kova-261001-052732-35f640
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261001-052732-35f640/kova-agent-cold-warm-message-67b331a3-kova-261001-052732-35f640

## Target Cleanup

- Runtime: `kova-local-mup3ejmv-3t0-ebb0042a`
- Result: removed
- Duration: 532ms

