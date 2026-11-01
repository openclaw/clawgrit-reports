# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — ocm service restart 'kova-gateway-performance-man-005107f3-kova-261101-051714-ee89f7' took 18590ms, over threshold 15000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | ocm service restart 'kova-gateway-performance-man-005107f3-kova-261101-051714-ee89f7' took 18590ms, over threshold 15000ms |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261101-051714-ee89f7` |
| Generated | 2026-11-01T05:38:47.781Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-005107f3-kova-261101-051714-ee89f7' took 18590ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 17 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261101-051714-ee89f7' took 20384ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-958fde53-kova-261101-051714-ee89f7' took 18061ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 119 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1435 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1619.2 MB, agent-process 1435 MB, status-cli 962.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1435 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1619.2 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1435 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1423.6 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1607.3 MB, agent-process 1423.6 MB, status-cli 1055.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1423.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1607.3 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1423.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1487 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1670.8 MB, agent-process 1487 MB, status-cli 968.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1487 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1670.8 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1487 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 17ms | 1564.9MB | n/a | 192.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 197.9% | 5984ms | 6651ms | 5740ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 17ms | 1564.9 MB | 2543.4 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-005107f3-kova-261101-051714-ee89f7' took 18590ms, over threshold 15000ms |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4ms | 1543.4 MB | 2508 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261101-051714-ee89f7' took 20384ms, over threshold 15000ms |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 119ms | 1616.6 MB | 2599.2 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-958fde53-kova-261101-051714-ee89f7' took 18061ms, over threshold 15000ms |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1691 MB | 5978ms | 6711ms | agent-process peak RSS 1435 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1619.2 MB, agent-process 1435 MB, status-cli 962.7 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1678.8 MB | 5984ms | 6651ms | agent-process peak RSS 1423.6 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1607.3 MB, agent-process 1423.6 MB, status-cli 1055.3 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1742.3 MB | 6003ms | 6633ms | agent-process peak RSS 1487 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1670.8 MB, agent-process 1487 MB, status-cli 968.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1720.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 225.3% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1616.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 225.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1670.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 211.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1487 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 198.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1055.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.6% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 461.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 136.3% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 293.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 146.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 368.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 135.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-gateway-performance-man-005107f3-kova-261101-051714-ee89f7
Measurements:
- startup: listening 0ms; health 17ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 17ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 54ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1564.9 MB; tracked total 2543.4 MB; max CPU 192.1%; samples 45; roles gateway-tree 1668.5MB/203.5%, gateway 1564.9MB/192.1%, command-tree 968.1MB/162.9%, status-cli 968.1MB/162.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 12041.84ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-005107f3-kova-261101-051714-ee89f7' took 18590ms, over threshold 15000ms

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-gateway-performance-man-1e8be6a8-kova-261101-051714-ee89f7
Measurements:
- startup: listening 1ms; health 4ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 3ms; post-ready p95 16ms; failures 0; final failures 0; slowest post-ready/api-latency 16ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1543.4 MB; tracked total 2508 MB; max CPU 191.9%; samples 47; roles gateway-tree 1646.9MB/206.8%, gateway 1543.4MB/191.9%, command-tree 953.9MB/164.7%, status-cli 953.9MB/164.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 13986.46ms; embedded traces 0; liveness warnings 0; open spans 2 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261101-051714-ee89f7' took 20384ms, over threshold 15000ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-gateway-performance-man-958fde53-kova-261101-051714-ee89f7
Measurements:
- startup: listening 0ms; health 119ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 119ms; post-ready p95 1ms; failures 0; final failures 0; slowest startup-sample/warm-restart 119ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1616.6 MB; tracked total 2599.2 MB; max CPU 225.3%; samples 45; roles gateway-tree 1720.5MB/225.3%, gateway 1616.6MB/225.3%, command-tree 969.8MB/169.3%, status-cli 969.8MB/169.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 11614.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-958fde53-kova-261101-051714-ee89f7' took 18061ms, over threshold 15000ms

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-8e2a29af-kova-261101-051714-ee89f7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1435 MB; tracked total 1691 MB; max CPU 198.2%; samples 23; roles command-tree 1619.2MB/211.5%, agent-process 1435MB/198.2%, status-cli 962.7MB/175.1%, agent-cli 290.4MB/144.3%
- agent: turn 6711ms; cold/warm 5978ms/6711ms; cold-warm delta 0ms; pre-provider 6468ms; provider 1ms; metadata scans 8 (230.4ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6674.35ms; max 6711ms; pre-provider p95 6431.4ms
- agent CLI attribution: cold known 3654ms / unattributed 2082ms; warm known 4532ms / unattributed 1936ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1531.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1435 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1619.2 MB, agent-process 1435 MB, status-cli 962.7 MB
  - command-tree peak RSS 1619.2 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 5978ms; pre-provider 5736ms; provider 2ms; post-provider 240ms; response true
    - active window: metadata scans 4 (115.27ms total, max 64.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5736ms; provider 2ms; post-provider 240ms; unknown 2962.3ms; source agent.prepare 2414.22ms; plugins.metadata.scan 359.48ms
  - warm: total 6711ms; pre-provider 6468ms; provider 1ms; post-provider 242ms; response true
    - active window: metadata scans 4 (115.13ms total, max 64.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6468ms; provider 1ms; post-provider 242ms; unknown 3694.3ms; source agent.prepare 2414.22ms; plugins.metadata.scan 359.48ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5736 ms | 3654 ms | 2082 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-8e2a29af-kova-261101-051714-ee89f7/openclaw/timeline.jsonl |
  | warm | 6468 ms | 4532 ms | 1936 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-8e2a29af-kova-261101-051714-ee89f7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2376 ms | 833 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1453 ms | 766 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1032 ms | 500 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 114 ms | 65 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2322 ms | 1531 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1982 ms | 721 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1384 ms | 467 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 116 ms | 65 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-2ab680e0-kova-261101-051714-ee89f7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1423.6 MB; tracked total 1678.8 MB; max CPU 196.4%; samples 23; roles command-tree 1607.3MB/210%, agent-process 1423.6MB/196.4%, status-cli 1055.3MB/174.2%, agent-cli 293.6MB/143%
- agent: turn 6651ms; cold/warm 5984ms/6651ms; cold-warm delta 0ms; pre-provider 6407ms; provider 0ms; metadata scans 8 (231.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6617.65ms; max 6651ms; pre-provider p95 6373.65ms
- agent CLI attribution: cold known 3654ms / unattributed 2086ms; warm known 4489ms / unattributed 1918ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1512.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1423.6 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1607.3 MB, agent-process 1423.6 MB, status-cli 1055.3 MB
  - command-tree peak RSS 1607.3 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 5984ms; pre-provider 5740ms; provider 2ms; post-provider 242ms; response true
    - active window: metadata scans 4 (115.98ms total, max 64.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5740ms; provider 2ms; post-provider 242ms; unknown 3023.29ms; source agent.prepare 2358.68ms; plugins.metadata.scan 358.03ms
  - warm: total 6651ms; pre-provider 6407ms; provider 0ms; post-provider 244ms; response true
    - active window: metadata scans 4 (115.76ms total, max 64.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6407ms; provider 0ms; post-provider 244ms; unknown 3690.29ms; source agent.prepare 2358.68ms; plugins.metadata.scan 358.03ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5740 ms | 3654 ms | 2086 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-2ab680e0-kova-261101-051714-ee89f7/openclaw/timeline.jsonl |
  | warm | 6407 ms | 4489 ms | 1918 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-2ab680e0-kova-261101-051714-ee89f7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2433 ms | 841 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1459 ms | 770 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 985 ms | 495 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 117 ms | 65 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 109 ms | 109 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2294 ms | 1512 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1968 ms | 712 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1375 ms | 495 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 116 ms | 65 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 111 ms | 111 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-67b331a3-kova-261101-051714-ee89f7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1487 MB; tracked total 1742.3 MB; max CPU 197.9%; samples 23; roles command-tree 1670.8MB/211.6%, agent-process 1487MB/197.9%, status-cli 968.8MB/177.6%, agent-cli 293.4MB/146.7%
- agent: turn 6633ms; cold/warm 6003ms/6633ms; cold-warm delta 0ms; pre-provider 6382ms; provider 1ms; metadata scans 8 (233.16ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6601.5ms; max 6633ms; pre-provider p95 6350.8ms
- agent CLI attribution: cold known 3669ms / unattributed 2089ms; warm known 4465ms / unattributed 1917ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1515.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1487 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1670.8 MB, agent-process 1487 MB, status-cli 968.8 MB
  - command-tree peak RSS 1670.8 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6003ms; pre-provider 5758ms; provider 2ms; post-provider 243ms; response true
    - active window: metadata scans 4 (116.16ms total, max 64.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5758ms; provider 2ms; post-provider 243ms; unknown 3021.21ms; source agent.prepare 2377.3ms; plugins.metadata.scan 359.49ms
  - warm: total 6633ms; pre-provider 6382ms; provider 1ms; post-provider 250ms; response true
    - active window: metadata scans 4 (117ms total, max 66.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6382ms; provider 1ms; post-provider 250ms; unknown 3645.21ms; source agent.prepare 2377.3ms; plugins.metadata.scan 359.49ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5758 ms | 3669 ms | 2089 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-67b331a3-kova-261101-051714-ee89f7/openclaw/timeline.jsonl |
  | warm | 6382 ms | 4465 ms | 1917 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-67b331a3-kova-261101-051714-ee89f7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2386 ms | 836 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1445 ms | 774 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1054 ms | 507 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 116 ms | 64 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2290 ms | 1516 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1989 ms | 725 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1324 ms | 478 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 66 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261101-051714-ee89f7-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261101-051714-ee89f7-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261101-051714-ee89f7-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-gateway-performance-man-005107f3-kova-261101-051714-ee89f7
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-gateway-performance-man-1e8be6a8-kova-261101-051714-ee89f7
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-gateway-performance-man-958fde53-kova-261101-051714-ee89f7
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-8e2a29af-kova-261101-051714-ee89f7
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-2ab680e0-kova-261101-051714-ee89f7
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261101-051714-ee89f7/kova-agent-cold-warm-message-67b331a3-kova-261101-051714-ee89f7

## Target Cleanup

- Runtime: `kova-local-mvxdoq1d-3ex-c7e9d86c`
- Result: removed
- Duration: 500ms

