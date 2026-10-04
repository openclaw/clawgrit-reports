# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1263.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1438.3 MB, gateway 1263.8 MB, command-tree 701.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1263.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1438.3 MB, gateway 1263.8 MB, command-tree 701.5 MB |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 6 (FAIL:3, PASS:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261004-070541-f43b8b` |
| Generated | 2026-10-04T07:24:12.395Z |
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
| FAIL | 3 |
| PASS | 3 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1263.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1438.3 MB, gateway 1263.8 MB, command-tree 701.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 18 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1266.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1443.1 MB, gateway 1266.2 MB, command-tree 879 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1443.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1266 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1440.6 MB, gateway 1266 MB, command-tree 694 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 24 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1440.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 24 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 18ms | 1266MB | n/a | 234.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 198.1% | 5596ms | 6137ms | 5409ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 18ms | 1263.8 MB | 2052.8 MB | n/a | n/a | gateway peak RSS 1263.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1438.3 MB, gateway 1263.8 MB, command-tree 701.5 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1266.2 MB | 2234.2 MB | n/a | n/a | gateway peak RSS 1266.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1443.1 MB, gateway 1266.2 MB, command-tree 879 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 24ms | 1266 MB | 2207.7 MB | n/a | n/a | gateway peak RSS 1266 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1440.6 MB, gateway 1266 MB, command-tree 694 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1184.1 MB | 5998ms | 6420ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1218.4 MB | 5596ms | 6137ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1172.2 MB | 5531ms | 5710ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1443.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 257.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1266.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 241.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1147.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 222.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1050.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 879 MB (scenario gateway-performance/many-bundled-plugins); CPU 196.2% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 531.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 164.2% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 179.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 138.2% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 149.7% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-gateway-performance-man-005107f3-kova-261004-070541-f43b8b
Measurements:
- startup: listening 1ms; health 18ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 17ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 71ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1263.8 MB; tracked total 2052.8 MB; max CPU 241.8%; samples 37; roles gateway-tree 1438.3MB/257.8%, gateway 1263.8MB/241.8%, command-tree 701.5MB/194.9%, status-cli 701.5MB/194.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1761.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1263.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1438.3 MB, gateway 1263.8 MB, command-tree 701.5 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-gateway-performance-man-1e8be6a8-kova-261004-070541-f43b8b
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 16ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1266.2 MB; tracked total 2234.2 MB; max CPU 234.1%; samples 37; roles gateway-tree 1443.1MB/250.1%, gateway 1266.2MB/234.1%, command-tree 879MB/196.2%, status-cli 879MB/196.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1784.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1266.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1443.1 MB, gateway 1266.2 MB, command-tree 879 MB
  - gateway-tree peak RSS 1443.1 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-gateway-performance-man-958fde53-kova-261004-070541-f43b8b
Measurements:
- startup: listening 0ms; health 24ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 24ms; post-ready p95 181ms; failures 0; final failures 0; slowest post-ready/api-latency 181ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1266 MB; tracked total 2207.7 MB; max CPU 211.1%; samples 38; roles gateway-tree 1440.6MB/230.9%, gateway 1266MB/211.1%, command-tree 694MB/186%, status-cli 694MB/186%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1910.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1266 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1440.6 MB, gateway 1266 MB, command-tree 694 MB
  - gateway-tree peak RSS 1440.6 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-8e2a29af-kova-261004-070541-f43b8b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1012.1 MB; tracked total 1184.1 MB; max CPU 195.5%; samples 22; roles command-tree 1112MB/206%, agent-process 1012.1MB/195.5%, status-cli 594.2MB/169.4%, agent-cli 179.9MB/135.1%
- agent: turn 6420ms; cold/warm 5998ms/6420ms; cold-warm delta 0ms; pre-provider 6214ms; provider 1ms; metadata scans 8 (236ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6398.9ms; max 6420ms; pre-provider p95 6192.65ms
- agent CLI attribution: cold known 3289ms / unattributed 2498ms; warm known 3780ms / unattributed 2434ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1240.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5998ms; pre-provider 5787ms; provider 2ms; post-provider 209ms; response true
    - active window: metadata scans 4 (116.16ms total, max 61.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5787ms; provider 2ms; post-provider 209ms; unknown 3672.42ms; source agent.prepare 1762.34ms; plugins.metadata.scan 352.24ms
  - warm: total 6420ms; pre-provider 6214ms; provider 1ms; post-provider 205ms; response true
    - active window: metadata scans 4 (119.84ms total, max 61.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6214ms; provider 1ms; post-provider 205ms; unknown 4099.42ms; source agent.prepare 1762.34ms; plugins.metadata.scan 352.24ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5787 ms | 3289 ms | 2498 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-8e2a29af-kova-261004-070541-f43b8b/openclaw/timeline.jsonl |
  | warm | 6214 ms | 3780 ms | 2434 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-8e2a29af-kova-261004-070541-f43b8b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1928 ms | 541 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1351 ms | 1010 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 868 ms | 543 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 117 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1889 ms | 568 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1842 ms | 1241 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 895 ms | 584 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 61 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-2ab680e0-kova-261004-070541-f43b8b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1050.2 MB; tracked total 1218.4 MB; max CPU 198.1%; samples 22; roles command-tree 1147.1MB/208%, agent-process 1050.2MB/198.1%, status-cli 602.8MB/167.7%, agent-cli 99.9MB/138.2%
- agent: turn 6137ms; cold/warm 5596ms/6137ms; cold-warm delta 0ms; pre-provider 5908ms; provider 0ms; metadata scans 8 (227.19ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6109.95ms; max 6137ms; pre-provider p95 5883.05ms
- agent CLI attribution: cold known 3055ms / unattributed 2354ms; warm known 3635ms / unattributed 2273ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1286.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5596ms; pre-provider 5409ms; provider 2ms; post-provider 185ms; response true
    - active window: metadata scans 4 (117.68ms total, max 64.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5409ms; provider 2ms; post-provider 185ms; unknown 3473.5ms; source agent.prepare 1591.42ms; plugins.metadata.scan 344.08ms
  - warm: total 6137ms; pre-provider 5908ms; provider 0ms; post-provider 229ms; response true
    - active window: metadata scans 4 (109.51ms total, max 58.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5908ms; provider 0ms; post-provider 229ms; unknown 3972.5ms; source agent.prepare 1591.42ms; plugins.metadata.scan 344.08ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5409 ms | 3055 ms | 2354 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-2ab680e0-kova-261004-070541-f43b8b/openclaw/timeline.jsonl |
  | warm | 5908 ms | 3635 ms | 2273 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-2ab680e0-kova-261004-070541-f43b8b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1818 ms | 507 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1220 ms | 927 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 813 ms | 511 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 65 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1887 ms | 612 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1817 ms | 1287 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 778 ms | 516 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 109 ms | 59 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-67b331a3-kova-261004-070541-f43b8b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1000.5 MB; tracked total 1172.2 MB; max CPU 213%; samples 21; roles command-tree 1100.9MB/222.9%, agent-process 1000.5MB/213%, status-cli 607.2MB/166.2%, agent-cli 158.3MB/126.2%
- agent: turn 5710ms; cold/warm 5531ms/5710ms; cold-warm delta 0ms; pre-provider 5523ms; provider 1ms; metadata scans 8 (213.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5701.05ms; max 5710ms; pre-provider p95 5513.55ms
- agent CLI attribution: cold known 3004ms / unattributed 2330ms; warm known 3339ms / unattributed 2184ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1131.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5531ms; pre-provider 5334ms; provider 1ms; post-provider 196ms; response true
    - active window: metadata scans 4 (106.17ms total, max 56.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5334ms; provider 1ms; post-provider 196ms; unknown 3400.08ms; source agent.prepare 1613.43ms; plugins.metadata.scan 320.49ms
  - warm: total 5710ms; pre-provider 5523ms; provider 1ms; post-provider 186ms; response true
    - active window: metadata scans 4 (107.1ms total, max 56.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5523ms; provider 1ms; post-provider 186ms; unknown 3589.08ms; source agent.prepare 1613.43ms; plugins.metadata.scan 320.49ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5334 ms | 3004 ms | 2330 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-67b331a3-kova-261004-070541-f43b8b/openclaw/timeline.jsonl |
  | warm | 5523 ms | 3339 ms | 2184 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-67b331a3-kova-261004-070541-f43b8b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1762 ms | 483 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1220 ms | 921 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 810 ms | 515 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 107 ms | 57 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1651 ms | 1131 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 1599 ms | 486 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 804 ms | 526 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 108 ms | 56 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261004-070541-f43b8b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261004-070541-f43b8b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261004-070541-f43b8b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-gateway-performance-man-005107f3-kova-261004-070541-f43b8b
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-gateway-performance-man-1e8be6a8-kova-261004-070541-f43b8b
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-gateway-performance-man-958fde53-kova-261004-070541-f43b8b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-8e2a29af-kova-261004-070541-f43b8b
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-2ab680e0-kova-261004-070541-f43b8b
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261004-070541-f43b8b/kova-agent-cold-warm-message-67b331a3-kova-261004-070541-f43b8b

## Target Cleanup

- Runtime: `kova-local-muth8bsb-3tr-d36986dd`
- Result: removed
- Duration: 483ms

