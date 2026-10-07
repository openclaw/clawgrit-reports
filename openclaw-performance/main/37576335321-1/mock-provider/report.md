# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1343.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1628.9 MB, gateway 1343.2 MB, command-tree 714.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1343.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1628.9 MB, gateway 1343.2 MB, command-tree 714.4 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 6 (FAIL:3, PASS:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261007-052913-327a10` |
| Generated | 2026-10-07T05:52:47.118Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1343.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1628.9 MB, gateway 1343.2 MB, command-tree 714.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 273 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1628.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 273 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1339.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1626.7 MB, gateway 1339.7 MB, command-tree 825.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1626.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1326.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1614.5 MB, gateway 1326.3 MB, command-tree 813.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1614.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 22ms | 1339.7MB | n/a | 184.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 163.9% | 6586ms | 6458ms | 6317ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 273ms | 1343.2 MB | 2323.7 MB | n/a | n/a | gateway peak RSS 1343.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1628.9 MB, gateway 1343.2 MB, command-tree 714.4 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1339.7 MB | 2416.5 MB | n/a | n/a | gateway peak RSS 1339.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1626.7 MB, gateway 1339.7 MB, command-tree 825.4 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 22ms | 1326.3 MB | 2407.3 MB | n/a | n/a | gateway peak RSS 1326.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1614.5 MB, gateway 1326.3 MB, command-tree 813.9 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1259.4 MB | 6605ms | 6456ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1303.2 MB | 6586ms | 6625ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1287.6 MB | 6443ms | 6458ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1628.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 255.6% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1343.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 212.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1231.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1130.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 825.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 180.6% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 609.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 148.8% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 331 MB (scenario gateway-performance/many-bundled-plugins); CPU 148.7% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 183.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 119.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-gateway-performance-man-005107f3-kova-261007-052913-327a10
Measurements:
- startup: listening 2ms; health 273ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 271ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 271ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1343.2 MB; tracked total 2323.7 MB; max CPU 212.3%; samples 43; roles gateway-tree 1628.9MB/255.6%, gateway 1343.2MB/212.3%, command-tree 714.4MB/178.7%, status-cli 714.4MB/178.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1482.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1343.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1628.9 MB, gateway 1343.2 MB, command-tree 714.4 MB
  - gateway-tree peak RSS 1628.9 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-gateway-performance-man-1e8be6a8-kova-261007-052913-327a10
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 3ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1339.7 MB; tracked total 2416.5 MB; max CPU 179.3%; samples 41; roles gateway-tree 1626.7MB/212.6%, gateway 1339.7MB/179.3%, command-tree 825.4MB/178.3%, status-cli 825.4MB/178.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1244.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1339.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1626.7 MB, gateway 1339.7 MB, command-tree 825.4 MB
  - gateway-tree peak RSS 1626.7 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-gateway-performance-man-958fde53-kova-261007-052913-327a10
Measurements:
- startup: listening 0ms; health 22ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 22ms; post-ready p95 52ms; failures 0; final failures 0; slowest post-ready/api-latency 52ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1326.3 MB; tracked total 2407.3 MB; max CPU 184.3%; samples 37; roles gateway-tree 1614.5MB/215.6%, gateway 1326.3MB/184.3%, command-tree 813.9MB/180.6%, status-cli 813.9MB/180.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1434.25ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1326.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1614.5 MB, gateway 1326.3 MB, command-tree 813.9 MB
  - gateway-tree peak RSS 1614.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-8e2a29af-kova-261007-052913-327a10
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1087.8 MB; tracked total 1259.4 MB; max CPU 163.9%; samples 24; roles command-tree 1188.1MB/179.8%, agent-process 1087.8MB/163.9%, status-cli 595.5MB/164.9%, agent-cli 124.5MB/119.3%
- agent: turn 6605ms; cold/warm 6605ms/6456ms; cold-warm delta 149ms; pre-provider 6344ms; provider 2ms; metadata scans 8 (213.4ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6597.55ms; max 6605ms; pre-provider p95 6338.35ms
- agent CLI attribution: cold known 3123ms / unattributed 3221ms; warm known 3200ms / unattributed 3031ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1025.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6605ms; pre-provider 6344ms; provider 2ms; post-provider 259ms; response true
    - active window: metadata scans 4 (104.45ms total, max 56.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6344ms; provider 2ms; post-provider 259ms; unknown 4259.4ms; source agent.prepare 1733.86ms; plugins.metadata.scan 350.74ms
  - warm: total 6456ms; pre-provider 6231ms; provider 0ms; post-provider 225ms; response true
    - active window: metadata scans 4 (108.95ms total, max 58.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6231ms; provider 0ms; post-provider 225ms; unknown 4146.4ms; source agent.prepare 1733.86ms; plugins.metadata.scan 350.74ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6344 ms | 3123 ms | 3221 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-8e2a29af-kova-261007-052913-327a10/openclaw/timeline.jsonl |
  | warm | 6231 ms | 3200 ms | 3031 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-8e2a29af-kova-261007-052913-327a10/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1854 ms | 514 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1507 ms | 856 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 898 ms | 563 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 104 ms | 57 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1791 ms | 485 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1367 ms | 1026 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 836 ms | 551 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 108 ms | 58 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-2ab680e0-kova-261007-052913-327a10
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1130.2 MB; tracked total 1303.2 MB; max CPU 162.5%; samples 23; roles command-tree 1231.2MB/190.2%, agent-process 1130.2MB/162.5%, status-cli 583.9MB/169%, agent-cli 183.9MB/119.3%
- agent: turn 6625ms; cold/warm 6586ms/6625ms; cold-warm delta 0ms; pre-provider 6401ms; provider 1ms; metadata scans 8 (211.16ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6623.05ms; max 6625ms; pre-provider p95 6396.8ms
- agent CLI attribution: cold known 3063ms / unattributed 3254ms; warm known 3238ms / unattributed 3163ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1029.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6586ms; pre-provider 6317ms; provider 2ms; post-provider 267ms; response true
    - active window: metadata scans 4 (106.21ms total, max 59.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6317ms; provider 2ms; post-provider 267ms; unknown 4279ms; source agent.prepare 1706.89ms; plugins.metadata.scan 331.11ms
  - warm: total 6625ms; pre-provider 6401ms; provider 1ms; post-provider 223ms; response true
    - active window: metadata scans 4 (104.95ms total, max 56.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6401ms; provider 1ms; post-provider 223ms; unknown 4363ms; source agent.prepare 1706.89ms; plugins.metadata.scan 331.11ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6317 ms | 3063 ms | 3254 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-2ab680e0-kova-261007-052913-327a10/openclaw/timeline.jsonl |
  | warm | 6401 ms | 3238 ms | 3163 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-2ab680e0-kova-261007-052913-327a10/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1791 ms | 487 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1576 ms | 900 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 857 ms | 544 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 106 ms | 60 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1806 ms | 502 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1385 ms | 1030 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 852 ms | 556 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 104 ms | 57 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-67b331a3-kova-261007-052913-327a10
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1118 MB; tracked total 1287.6 MB; max CPU 172.4%; samples 23; roles command-tree 1216.2MB/182.3%, agent-process 1118MB/172.4%, status-cli 615.1MB/169.8%, agent-cli 100.3MB/96.9%
- agent: turn 6458ms; cold/warm 6443ms/6458ms; cold-warm delta 0ms; pre-provider 6251ms; provider 0ms; metadata scans 8 (216.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6457.25ms; max 6458ms; pre-provider p95 6247.65ms
- agent CLI attribution: cold known 3039ms / unattributed 3145ms; warm known 3152ms / unattributed 3099ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1004.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6443ms; pre-provider 6184ms; provider 2ms; post-provider 257ms; response true
    - active window: metadata scans 4 (110.71ms total, max 62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6184ms; provider 2ms; post-provider 257ms; unknown 4177.65ms; source agent.prepare 1667.12ms; plugins.metadata.scan 339.23ms
  - warm: total 6458ms; pre-provider 6251ms; provider 0ms; post-provider 207ms; response true
    - active window: metadata scans 4 (106.13ms total, max 57.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6251ms; provider 0ms; post-provider 207ms; unknown 4244.65ms; source agent.prepare 1667.12ms; plugins.metadata.scan 339.23ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6184 ms | 3039 ms | 3145 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-67b331a3-kova-261007-052913-327a10/openclaw/timeline.jsonl |
  | warm | 6251 ms | 3152 ms | 3099 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-67b331a3-kova-261007-052913-327a10/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1777 ms | 487 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1516 ms | 869 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 854 ms | 538 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 112 ms | 63 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1793 ms | 506 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1347 ms | 1004 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 814 ms | 536 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 105 ms | 57 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261007-052913-327a10-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261007-052913-327a10-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261007-052913-327a10-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-gateway-performance-man-005107f3-kova-261007-052913-327a10
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-gateway-performance-man-1e8be6a8-kova-261007-052913-327a10
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-gateway-performance-man-958fde53-kova-261007-052913-327a10
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-8e2a29af-kova-261007-052913-327a10
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-2ab680e0-kova-261007-052913-327a10
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261007-052913-327a10/kova-agent-cold-warm-message-67b331a3-kova-261007-052913-327a10

## Target Cleanup

- Runtime: `kova-local-muxo3u03-3sz-c3e6549f`
- Result: removed
- Duration: 545ms

