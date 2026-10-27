# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1905.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2008.2 MB, gateway 1905.6 MB, command-tree 717.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1905.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2008.2 MB, gateway 1905.6 MB, command-tree 717.5 MB |
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
| Run ID | `kova-261027-052603-5ff3e6` |
| Generated | 2026-10-27T05:47:56.710Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1905.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2008.2 MB, gateway 1905.6 MB, command-tree 717.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 32 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2008.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 32 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1881.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1983.9 MB, gateway 1881.3 MB, command-tree 717.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1983.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1910.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2013 MB, gateway 1910.3 MB, command-tree 716.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2013 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 579ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1591.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1774.8 MB, agent-process 1591.5 MB, status-cli 990.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1591.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1774.8 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1591.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1590.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1774.5 MB, agent-process 1590.9 MB, status-cli 966.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1590.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1774.5 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1590.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1591.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1772.5 MB, agent-process 1591.1 MB, status-cli 974.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1591.1 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 3ms | 1905.6MB | n/a | 248.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 201.8% | 6783ms | 7474ms | 6529ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 32ms | 1905.6 MB | 2774.1 MB | n/a | n/a | gateway peak RSS 1905.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2008.2 MB, gateway 1905.6 MB, command-tree 717.5 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1881.3 MB | 2763.1 MB | n/a | n/a | gateway peak RSS 1881.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1983.9 MB, gateway 1881.3 MB, command-tree 717.5 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 3ms | 1910.3 MB | 2671.3 MB | n/a | n/a | gateway peak RSS 1910.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2013 MB, gateway 1910.3 MB, command-tree 716.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1846.2 MB | 6783ms | 7492ms | agent-process peak RSS 1591.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1774.8 MB, agent-process 1591.5 MB, status-cli 990.5 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1845.9 MB | 6774ms | 7471ms | agent-process peak RSS 1590.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1774.5 MB, agent-process 1590.9 MB, status-cli 966.7 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1843.5 MB | 6799ms | 7474ms | agent-process peak RSS 1591.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1772.5 MB, agent-process 1591.1 MB, status-cli 974.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2013 MB (scenario gateway-performance/many-bundled-plugins); CPU 268.4% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1910.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 251.5% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1774.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 224.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1591.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 210.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 990.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.8% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 652.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 138.2% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 369.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 138.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 234.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 134.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-gateway-performance-man-005107f3-kova-261027-052603-5ff3e6
Measurements:
- startup: listening 1ms; health 32ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 31ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 220ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1905.6 MB; tracked total 2774.1 MB; max CPU 251.5%; samples 37; roles gateway-tree 2008.2MB/268.4%, gateway 1905.6MB/251.5%, command-tree 717.5MB/159.9%, status-cli 717.5MB/159.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 4055.48ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1905.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2008.2 MB, gateway 1905.6 MB, command-tree 717.5 MB
  - gateway-tree peak RSS 2008.2 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-gateway-performance-man-1e8be6a8-kova-261027-052603-5ff3e6
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 2ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 96ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1881.3 MB; tracked total 2763.1 MB; max CPU 247.3%; samples 36; roles gateway-tree 1983.9MB/261.2%, gateway 1881.3MB/247.3%, command-tree 717.5MB/158.6%, status-cli 717.5MB/158.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2834.06ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1881.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1983.9 MB, gateway 1881.3 MB, command-tree 717.5 MB
  - gateway-tree peak RSS 1983.9 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-gateway-performance-man-958fde53-kova-261027-052603-5ff3e6
Measurements:
- startup: listening 1ms; health 3ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 2ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 107ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1910.3 MB; tracked total 2671.3 MB; max CPU 248.9%; samples 36; roles gateway-tree 2013MB/263.8%, gateway 1910.3MB/248.9%, command-tree 716.1MB/161.1%, status-cli 716.1MB/161.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2932.63ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1910.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2013 MB, gateway 1910.3 MB, command-tree 716.1 MB
  - gateway-tree peak RSS 2013 MB exceeded threshold 1440 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 579ms

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-8e2a29af-kova-261027-052603-5ff3e6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1591.5 MB; tracked total 1846.2 MB; max CPU 201.8%; samples 25; roles command-tree 1774.8MB/216.4%, agent-process 1591.5MB/201.8%, status-cli 990.5MB/178.9%, agent-cli 183.3MB/134.1%
- agent: turn 7492ms; cold/warm 6783ms/7492ms; cold-warm delta 0ms; pre-provider 7214ms; provider 1ms; metadata scans 8 (240.93ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7456.55ms; max 7492ms; pre-provider p95 7179.75ms
- agent CLI attribution: cold known 4413ms / unattributed 2116ms; warm known 5238ms / unattributed 1976ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1575.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1591.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1774.8 MB, agent-process 1591.5 MB, status-cli 990.5 MB
  - command-tree peak RSS 1774.8 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6783ms; pre-provider 6529ms; provider 2ms; post-provider 252ms; response true
    - active window: metadata scans 4 (120.14ms total, max 62.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6529ms; provider 2ms; post-provider 252ms; unknown 2820.89ms; source agent.prepare 3342.07ms; plugins.metadata.scan 366.04ms
  - warm: total 7492ms; pre-provider 7214ms; provider 1ms; post-provider 277ms; response true
    - active window: metadata scans 4 (120.79ms total, max 64.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7214ms; provider 1ms; post-provider 277ms; unknown 3505.89ms; source agent.prepare 3342.07ms; plugins.metadata.scan 366.04ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6529 ms | 4413 ms | 2116 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-8e2a29af-kova-261027-052603-5ff3e6/openclaw/timeline.jsonl |
  | warm | 7214 ms | 5238 ms | 1976 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-8e2a29af-kova-261027-052603-5ff3e6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2437 ms | 848 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1597 ms | 836 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1565 ms | 1011 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 193 ms | 193 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 63 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2413 ms | 1576 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2190 ms | 735 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1777 ms | 953 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 193 ms | 193 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 64 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-2ab680e0-kova-261027-052603-5ff3e6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1590.9 MB; tracked total 1845.9 MB; max CPU 196.8%; samples 25; roles command-tree 1774.5MB/211.3%, agent-process 1590.9MB/196.8%, status-cli 966.7MB/180.8%, agent-cli 183.6MB/133.8%
- agent: turn 7471ms; cold/warm 6774ms/7471ms; cold-warm delta 0ms; pre-provider 7211ms; provider 1ms; metadata scans 8 (239.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7436.15ms; max 7471ms; pre-provider p95 7176.3ms
- agent CLI attribution: cold known 4399ms / unattributed 2118ms; warm known 5219ms / unattributed 1992ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1555.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1590.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1774.5 MB, agent-process 1590.9 MB, status-cli 966.7 MB
  - command-tree peak RSS 1774.5 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6774ms; pre-provider 6517ms; provider 2ms; post-provider 255ms; response true
    - active window: metadata scans 4 (119.76ms total, max 63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6517ms; provider 2ms; post-provider 255ms; unknown 2795.91ms; source agent.prepare 3360.06ms; plugins.metadata.scan 361.03ms
  - warm: total 7471ms; pre-provider 7211ms; provider 1ms; post-provider 259ms; response true
    - active window: metadata scans 4 (119.44ms total, max 63.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7211ms; provider 1ms; post-provider 259ms; unknown 3489.91ms; source agent.prepare 3360.06ms; plugins.metadata.scan 361.03ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6517 ms | 4399 ms | 2118 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-2ab680e0-kova-261027-052603-5ff3e6/openclaw/timeline.jsonl |
  | warm | 7211 ms | 5219 ms | 1992 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-2ab680e0-kova-261027-052603-5ff3e6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2443 ms | 857 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1576 ms | 1012 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1557 ms | 806 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 191 ms | 191 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 121 ms | 63 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2386 ms | 1556 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2177 ms | 728 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1786 ms | 949 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 201 ms | 201 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 64 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-67b331a3-kova-261027-052603-5ff3e6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1591.1 MB; tracked total 1843.5 MB; max CPU 210.6%; samples 25; roles command-tree 1772.5MB/224.5%, agent-process 1591.1MB/210.6%, status-cli 974.9MB/179.6%, agent-cli 234.9MB/132.9%
- agent: turn 7474ms; cold/warm 6799ms/7474ms; cold-warm delta 0ms; pre-provider 7216ms; provider 1ms; metadata scans 8 (239.6ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7440.25ms; max 7474ms; pre-provider p95 7182.95ms
- agent CLI attribution: cold known 4413ms / unattributed 2142ms; warm known 5234ms / unattributed 1982ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1562.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1591.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1772.5 MB, agent-process 1591.1 MB, status-cli 974.9 MB
  - command-tree peak RSS 1772.5 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6799ms; pre-provider 6555ms; provider 2ms; post-provider 242ms; response true
    - active window: metadata scans 4 (119.12ms total, max 59.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6555ms; provider 2ms; post-provider 242ms; unknown 2798.35ms; source agent.prepare 3383.85ms; plugins.metadata.scan 372.8ms
  - warm: total 7474ms; pre-provider 7216ms; provider 1ms; post-provider 257ms; response true
    - active window: metadata scans 4 (120.48ms total, max 63.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7216ms; provider 1ms; post-provider 257ms; unknown 3459.35ms; source agent.prepare 3383.85ms; plugins.metadata.scan 372.8ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6555 ms | 4413 ms | 2142 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-67b331a3-kova-261027-052603-5ff3e6/openclaw/timeline.jsonl |
  | warm | 7216 ms | 5234 ms | 1982 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-67b331a3-kova-261027-052603-5ff3e6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2478 ms | 867 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1584 ms | 1007 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1551 ms | 810 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 197 ms | 197 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 60 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2401 ms | 1563 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2176 ms | 727 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1799 ms | 962 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 191 ms | 191 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 63 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261027-052603-5ff3e6-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261027-052603-5ff3e6-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261027-052603-5ff3e6-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-gateway-performance-man-005107f3-kova-261027-052603-5ff3e6
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-gateway-performance-man-1e8be6a8-kova-261027-052603-5ff3e6
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-gateway-performance-man-958fde53-kova-261027-052603-5ff3e6
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-8e2a29af-kova-261027-052603-5ff3e6
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-2ab680e0-kova-261027-052603-5ff3e6
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261027-052603-5ff3e6/kova-agent-cold-warm-message-67b331a3-kova-261027-052603-5ff3e6

## Target Cleanup

- Runtime: `kova-local-mvq8sspc-3ej-088789ff`
- Result: removed
- Duration: 514ms

