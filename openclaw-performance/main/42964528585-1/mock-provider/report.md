# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1468.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1568.6 MB, gateway 1468.1 MB, command-tree 719.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1468.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1568.6 MB, gateway 1468.1 MB, command-tree 719.1 MB |
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
| Run ID | `kova-261111-051802-8fa620` |
| Generated | 2026-11-11T05:47:18.960Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1468.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1568.6 MB, gateway 1468.1 MB, command-tree 719.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1270 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1568.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1270 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1477.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1578.3 MB, gateway 1477.6 MB, command-tree 525.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1458 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1578.3 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1458 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1487.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1588.4 MB, gateway 1487.6 MB, command-tree 648.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1341 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1588.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1341 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1388 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1569.6 MB, agent-process 1388 MB, status-cli 902.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1388 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1569.6 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1388 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1366.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1548.2 MB, agent-process 1366.6 MB, status-cli 914.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1366.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1548.2 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1366.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1436.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1618.4 MB, agent-process 1436.6 MB, status-cli 743.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1436.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1618.4 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1436.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 1341ms | 1477.6MB | n/a | 200% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 193% | 7348ms | 8483ms | 7035ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 1270ms | 1468.1 MB | 2309.3 MB | n/a | n/a | gateway peak RSS 1468.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1568.6 MB, gateway 1468.1 MB, command-tree 719.1 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 1458ms | 1477.6 MB | 2011.8 MB | n/a | n/a | gateway peak RSS 1477.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1578.3 MB, gateway 1477.6 MB, command-tree 525.1 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 1341ms | 1487.6 MB | 2249.9 MB | n/a | n/a | gateway peak RSS 1487.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1588.4 MB, gateway 1487.6 MB, command-tree 648.4 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1642.1 MB | 7348ms | 10314ms | agent-process peak RSS 1388 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1569.6 MB, agent-process 1388 MB, status-cli 902.5 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1620.6 MB | 7946ms | 8483ms | agent-process peak RSS 1366.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1548.2 MB, agent-process 1366.6 MB, status-cli 914.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1690.8 MB | 6922ms | 8399ms | agent-process peak RSS 1436.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1618.4 MB, agent-process 1436.6 MB, status-cli 743.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1618.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 211.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1588.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 220.2% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1487.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 210.3% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1436.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 198.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 914.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 188.7% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 463.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 143.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 243.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 143.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 359.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 141% (scenario gateway-performance/many-bundled-plugins)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU |
|---|---|---:|---:|
| gateway-performance / cold-start | complete | 1377.6 MB | 214.2% |
| gateway-performance / warm-restart | complete | 1568.6 MB | 254.3% |
| gateway-performance / cold-start | complete | 1336.3 MB | 202.7% |
| gateway-performance / warm-restart | complete | 1574.5 MB | 253.9% |
| gateway-performance / cold-start | complete | 1337.7 MB | 233.8% |
| gateway-performance / warm-restart | complete | 1577 MB | 218.6% |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-gateway-performance-man-005107f3-kova-261111-051802-8fa620
Measurements:
- startup: listening 1ms; health 1270ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 172ms; post-ready p95 2ms; failures 7; final failures 0; slowest startup-sample/cold-start 172ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1468.1 MB; tracked total 2309.3 MB; max CPU 200%; samples 38; roles gateway-tree 1568.6MB/212%, gateway 1468.1MB/200%, command-tree 719.1MB/171.4%, status-cli 719.1MB/171.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2338.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1468.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1568.6 MB, gateway 1468.1 MB, command-tree 719.1 MB
  - gateway-tree peak RSS 1568.6 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-gateway-performance-man-1e8be6a8-kova-261111-051802-8fa620
Measurements:
- startup: listening 1ms; health 1458ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 97ms; post-ready p95 3ms; failures 8; final failures 0; slowest startup-sample/cold-start 97ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1477.6 MB; tracked total 2011.8 MB; max CPU 210.3%; samples 38; roles gateway-tree 1578.3MB/220.2%, gateway 1477.6MB/210.3%, command-tree 525.1MB/165.9%, status-cli 525.1MB/165.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 1789.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1477.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1578.3 MB, gateway 1477.6 MB, command-tree 525.1 MB
  - gateway-tree peak RSS 1578.3 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-gateway-performance-man-958fde53-kova-261111-051802-8fa620
Measurements:
- startup: listening 0ms; health 1341ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 35ms; post-ready p95 2ms; failures 9; final failures 0; slowest startup-sample/warm-restart 35ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1487.6 MB; tracked total 2249.9 MB; max CPU 171.5%; samples 39; roles gateway-tree 1588.4MB/193.7%, gateway 1487.6MB/171.5%, command-tree 648.4MB/160.9%, status-cli 648.4MB/160.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1075.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1487.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1588.4 MB, gateway 1487.6 MB, command-tree 648.4 MB
  - gateway-tree peak RSS 1588.4 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-8e2a29af-kova-261111-051802-8fa620
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1388 MB; tracked total 1642.1 MB; max CPU 198.6%; samples 30; roles command-tree 1569.6MB/211.1%, agent-process 1388MB/198.6%, status-cli 902.5MB/183.9%, agent-cli 232MB/66.6%
- agent: turn 10314ms; cold/warm 7348ms/10314ms; cold-warm delta 0ms; pre-provider 9930ms; provider 1ms; metadata scans 8 (330.66ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10165.7ms; max 10314ms; pre-provider p95 9785.25ms
- agent CLI attribution: cold known 4299ms / unattributed 2736ms; warm known 6880ms / unattributed 3050ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2228.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1388 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1569.6 MB, agent-process 1388 MB, status-cli 902.5 MB
  - command-tree peak RSS 1569.6 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7348ms; pre-provider 7035ms; provider 2ms; post-provider 311ms; response true
    - active window: metadata scans 4 (142.53ms total, max 78.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7035ms; provider 2ms; post-provider 311ms; unknown 3161.88ms; source agent.prepare 3377.57ms; plugins.metadata.scan 495.55ms
  - warm: total 10314ms; pre-provider 9930ms; provider 1ms; post-provider 383ms; response true
    - active window: metadata scans 4 (188.13ms total, max 105.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9930ms; provider 1ms; post-provider 383ms; unknown 6056.88ms; source agent.prepare 3377.57ms; plugins.metadata.scan 495.55ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7035 ms | 4299 ms | 2736 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-8e2a29af-kova-261111-051802-8fa620/openclaw/timeline.jsonl |
  | warm | 9930 ms | 6880 ms | 3050 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-8e2a29af-kova-261111-051802-8fa620/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3044 ms | 1088 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1472 ms | 787 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1339 ms | 595 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 142 ms | 78 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 137 ms | 137 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3799 ms | 1375 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3090 ms | 2229 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2038 ms | 632 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 188 ms | 105 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 147 ms | 147 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-2ab680e0-kova-261111-051802-8fa620
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1366.6 MB; tracked total 1620.6 MB; max CPU 193%; samples 28; roles command-tree 1548.2MB/202.2%, agent-process 1366.6MB/193%, status-cli 914.8MB/180.7%, agent-cli 243.5MB/143.4%
- agent: turn 8483ms; cold/warm 7946ms/8483ms; cold-warm delta 0ms; pre-provider 8207ms; provider 1ms; metadata scans 8 (324.14ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8456.15ms; max 8483ms; pre-provider p95 8178.95ms
- agent CLI attribution: cold known 4697ms / unattributed 2949ms; warm known 5639ms / unattributed 2568ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1763.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1366.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1548.2 MB, agent-process 1366.6 MB, status-cli 914.8 MB
  - command-tree peak RSS 1548.2 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7946ms; pre-provider 7646ms; provider 2ms; post-provider 298ms; response true
    - active window: metadata scans 4 (165.84ms total, max 87.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7646ms; provider 2ms; post-provider 298ms; unknown 3970.77ms; source agent.prepare 3174.66ms; plugins.metadata.scan 500.57ms
  - warm: total 8483ms; pre-provider 8207ms; provider 1ms; post-provider 275ms; response true
    - active window: metadata scans 4 (158.3ms total, max 90.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8207ms; provider 1ms; post-provider 275ms; unknown 4531.77ms; source agent.prepare 3174.66ms; plugins.metadata.scan 500.57ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7646 ms | 4697 ms | 2949 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-2ab680e0-kova-261111-051802-8fa620/openclaw/timeline.jsonl |
  | warm | 8207 ms | 5639 ms | 2568 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-2ab680e0-kova-261111-051802-8fa620/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3526 ms | 1213 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1583 ms | 845 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1409 ms | 609 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 166 ms | 88 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 139 ms | 139 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2967 ms | 1090 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2537 ms | 1764 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1766 ms | 562 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 158 ms | 90 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 134 ms | 134 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-67b331a3-kova-261111-051802-8fa620
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1436.6 MB; tracked total 1690.8 MB; max CPU 189.2%; samples 27; roles command-tree 1618.4MB/199.1%, agent-process 1436.6MB/189.2%, status-cli 743.5MB/188.7%, agent-cli 181.8MB/141.3%
- agent: turn 8399ms; cold/warm 6922ms/8399ms; cold-warm delta 0ms; pre-provider 8117ms; provider 0ms; metadata scans 8 (307.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8325.15ms; max 8399ms; pre-provider p95 8043.05ms
- agent CLI attribution: cold known 4055ms / unattributed 2583ms; warm known 5603ms / unattributed 2514ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1783.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1436.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1618.4 MB, agent-process 1436.6 MB, status-cli 743.5 MB
  - command-tree peak RSS 1618.4 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6922ms; pre-provider 6638ms; provider 2ms; post-provider 282ms; response true
    - active window: metadata scans 4 (143.68ms total, max 77.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6638ms; provider 2ms; post-provider 282ms; unknown 3153.68ms; source agent.prepare 3019.32ms; plugins.metadata.scan 465ms
  - warm: total 8399ms; pre-provider 8117ms; provider 0ms; post-provider 282ms; response true
    - active window: metadata scans 4 (163.63ms total, max 94.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8117ms; provider 0ms; post-provider 282ms; unknown 4632.68ms; source agent.prepare 3019.32ms; plugins.metadata.scan 465ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6638 ms | 4055 ms | 2583 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-67b331a3-kova-261111-051802-8fa620/openclaw/timeline.jsonl |
  | warm | 8117 ms | 5603 ms | 2514 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-67b331a3-kova-261111-051802-8fa620/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2907 ms | 1039 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1315 ms | 714 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1313 ms | 605 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 144 ms | 78 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 132 ms | 132 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3004 ms | 1112 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2534 ms | 1783 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1709 ms | 519 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 163 ms | 94 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 138 ms | 138 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261111-051802-8fa620-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261111-051802-8fa620-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261111-051802-8fa620-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-gateway-performance-man-005107f3-kova-261111-051802-8fa620
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-gateway-performance-man-1e8be6a8-kova-261111-051802-8fa620
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-gateway-performance-man-958fde53-kova-261111-051802-8fa620
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-8e2a29af-kova-261111-051802-8fa620
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-2ab680e0-kova-261111-051802-8fa620
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261111-051802-8fa620/kova-agent-cold-warm-message-67b331a3-kova-261111-051802-8fa620

## Target Cleanup

- Runtime: `kova-local-mwbo492y-3jr-40ba98c3`
- Result: removed
- Duration: 659ms

