# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1423 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1710.1 MB, gateway 1423 MB, command-tree 831 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1423 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1710.1 MB, gateway 1423 MB, command-tree 831 MB |
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
| Run ID | `kova-261009-053022-8c1daa` |
| Generated | 2026-10-09T05:53:17.330Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1423 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1710.1 MB, gateway 1423 MB, command-tree 831 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 91 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1710.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 91 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1441 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1728.3 MB, gateway 1441 MB, command-tree 852.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 42 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1728.3 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 42 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1436.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1721.4 MB, gateway 1436.1 MB, command-tree 792.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 66 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1721.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 66 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1483.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1583.8 MB, agent-process 1483.9 MB, status-cli 729.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1483.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1583.8 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1483.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1530.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1630.1 MB, agent-process 1530.1 MB, status-cli 722.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1530.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1630.1 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1530.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1423.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1523.5 MB, agent-process 1423.3 MB, status-cli 744.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1423.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1523.5 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1423.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 66ms | 1436.1MB | n/a | 207.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 161.7% | 7150ms | 7029ms | 6916ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 91ms | 1423 MB | 2442.9 MB | n/a | n/a | gateway peak RSS 1423 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1710.1 MB, gateway 1423 MB, command-tree 831 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 42ms | 1441 MB | 2539.6 MB | n/a | n/a | gateway peak RSS 1441 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1728.3 MB, gateway 1441 MB, command-tree 852.9 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 66ms | 1436.1 MB | 2469.7 MB | n/a | n/a | gateway peak RSS 1436.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1721.4 MB, gateway 1436.1 MB, command-tree 792.4 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1656.3 MB | 7150ms | 7247ms | agent-process peak RSS 1483.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1583.8 MB, agent-process 1483.9 MB, status-cli 729.6 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1702.1 MB | 7181ms | 7029ms | agent-process peak RSS 1530.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1630.1 MB, agent-process 1530.1 MB, status-cli 722.5 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1594.5 MB | 6976ms | 6792ms | agent-process peak RSS 1423.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1523.5 MB, agent-process 1423.3 MB, status-cli 744.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1728.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 260.2% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1630.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1441 MB (scenario gateway-performance/many-bundled-plugins); CPU 236.2% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1530.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 852.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 182.8% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 599.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 330.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 145.6% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 172.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 135.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-gateway-performance-man-005107f3-kova-261009-053022-8c1daa
Measurements:
- startup: listening 0ms; health 91ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 91ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 91ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1423 MB; tracked total 2442.9 MB; max CPU 236.2%; samples 44; roles gateway-tree 1710.1MB/260.2%, gateway 1423MB/236.2%, command-tree 831MB/182.8%, status-cli 831MB/182.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1575.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1423 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1710.1 MB, gateway 1423 MB, command-tree 831 MB
  - gateway-tree peak RSS 1710.1 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-gateway-performance-man-1e8be6a8-kova-261009-053022-8c1daa
Measurements:
- startup: listening 1ms; health 42ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 41ms; post-ready p95 8ms; failures 0; final failures 0; slowest startup-sample/warm-restart 41ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1441 MB; tracked total 2539.6 MB; max CPU 207.2%; samples 42; roles gateway-tree 1728.3MB/227.7%, gateway 1441MB/207.2%, command-tree 852.9MB/170.4%, status-cli 852.9MB/170.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-select-environment 1316.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1441 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1728.3 MB, gateway 1441 MB, command-tree 852.9 MB
  - gateway-tree peak RSS 1728.3 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-gateway-performance-man-958fde53-kova-261009-053022-8c1daa
Measurements:
- startup: listening 0ms; health 66ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 66ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 66ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1436.1 MB; tracked total 2469.7 MB; max CPU 192.7%; samples 40; roles gateway-tree 1721.4MB/222.3%, gateway 1436.1MB/192.7%, command-tree 792.4MB/159.6%, status-cli 792.4MB/159.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1296.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1436.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1721.4 MB, gateway 1436.1 MB, command-tree 792.4 MB
  - gateway-tree peak RSS 1721.4 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-8e2a29af-kova-261009-053022-8c1daa
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1483.9 MB; tracked total 1656.3 MB; max CPU 165.4%; samples 25; roles command-tree 1583.8MB/175.4%, agent-process 1483.9MB/165.4%, status-cli 729.6MB/167.7%, agent-cli 100.2MB/27.2%
- agent: turn 7247ms; cold/warm 7150ms/7247ms; cold-warm delta 0ms; pre-provider 7010ms; provider 0ms; metadata scans 8 (220.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7242.15ms; max 7247ms; pre-provider p95 7005.3ms
- agent CLI attribution: cold known 3584ms / unattributed 3332ms; warm known 3827ms / unattributed 3183ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1407.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1483.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1583.8 MB, agent-process 1483.9 MB, status-cli 729.6 MB
  - command-tree peak RSS 1583.8 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7150ms; pre-provider 6916ms; provider 2ms; post-provider 232ms; response true
    - active window: metadata scans 4 (110.9ms total, max 59.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6916ms; provider 2ms; post-provider 232ms; unknown 4537.17ms; source agent.prepare 2028.76ms; plugins.metadata.scan 350.07ms
  - warm: total 7247ms; pre-provider 7010ms; provider 0ms; post-provider 237ms; response true
    - active window: metadata scans 4 (109.15ms total, max 60.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7010ms; provider 0ms; post-provider 237ms; unknown 4631.17ms; source agent.prepare 2028.76ms; plugins.metadata.scan 350.07ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6916 ms | 3584 ms | 3332 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-8e2a29af-kova-261009-053022-8c1daa/openclaw/timeline.jsonl |
  | warm | 7010 ms | 3827 ms | 3183 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-8e2a29af-kova-261009-053022-8c1daa/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2031 ms | 591 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1833 ms | 1127 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1016 ms | 552 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 111 ms | 60 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 11 ms | 5 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1969 ms | 588 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1822 ms | 1407 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1013 ms | 570 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 108 ms | 60 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-2ab680e0-kova-261009-053022-8c1daa
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1530.1 MB; tracked total 1702.1 MB; max CPU 160.8%; samples 25; roles command-tree 1630.1MB/176%, agent-process 1530.1MB/160.8%, status-cli 722.5MB/176%, agent-cli 100MB/130.8%
- agent: turn 7181ms; cold/warm 7181ms/7029ms; cold-warm delta 152ms; pre-provider 6959ms; provider 2ms; metadata scans 8 (223.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7173.4ms; max 7181ms; pre-provider p95 6952.4ms
- agent CLI attribution: cold known 3573ms / unattributed 3386ms; warm known 3626ms / unattributed 3201ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1229.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1530.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1630.1 MB, agent-process 1530.1 MB, status-cli 722.5 MB
  - command-tree peak RSS 1630.1 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7181ms; pre-provider 6959ms; provider 2ms; post-provider 220ms; response true
    - active window: metadata scans 4 (109.52ms total, max 59.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6959ms; provider 2ms; post-provider 220ms; unknown 4518.89ms; source agent.prepare 2084.6ms; plugins.metadata.scan 355.51ms
  - warm: total 7029ms; pre-provider 6827ms; provider 0ms; post-provider 202ms; response true
    - active window: metadata scans 4 (114.24ms total, max 64.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6827ms; provider 0ms; post-provider 202ms; unknown 4386.89ms; source agent.prepare 2084.6ms; plugins.metadata.scan 355.51ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6959 ms | 3573 ms | 3386 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-2ab680e0-kova-261009-053022-8c1daa/openclaw/timeline.jsonl |
  | warm | 6827 ms | 3626 ms | 3201 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-2ab680e0-kova-261009-053022-8c1daa/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1971 ms | 569 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1817 ms | 1135 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1043 ms | 582 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 110 ms | 60 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 10 ms | 4 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1945 ms | 552 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1533 ms | 1230 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1041 ms | 579 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 114 ms | 65 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 13 ms | 7 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-67b331a3-kova-261009-053022-8c1daa
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1423.3 MB; tracked total 1594.5 MB; max CPU 161.7%; samples 23; roles command-tree 1523.5MB/173.6%, agent-process 1423.3MB/161.7%, status-cli 744.5MB/173.6%, agent-cli 172.2MB/135.1%
- agent: turn 6976ms; cold/warm 6976ms/6792ms; cold-warm delta 184ms; pre-provider 6750ms; provider 2ms; metadata scans 8 (215.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6966.8ms; max 6976ms; pre-provider p95 6742.1ms
- agent CLI attribution: cold known 3488ms / unattributed 3262ms; warm known 3534ms / unattributed 3058ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1186.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1423.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1523.5 MB, agent-process 1423.3 MB, status-cli 744.5 MB
  - command-tree peak RSS 1523.5 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 6976ms; pre-provider 6750ms; provider 2ms; post-provider 224ms; response true
    - active window: metadata scans 4 (105.92ms total, max 57.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6750ms; provider 2ms; post-provider 224ms; unknown 4358.58ms; source agent.prepare 2051.88ms; plugins.metadata.scan 339.54ms
  - warm: total 6792ms; pre-provider 6592ms; provider 1ms; post-provider 199ms; response true
    - active window: metadata scans 4 (109.52ms total, max 59.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6592ms; provider 1ms; post-provider 199ms; unknown 4200.58ms; source agent.prepare 2051.88ms; plugins.metadata.scan 339.54ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6750 ms | 3488 ms | 3262 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-67b331a3-kova-261009-053022-8c1daa/openclaw/timeline.jsonl |
  | warm | 6592 ms | 3534 ms | 3058 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-67b331a3-kova-261009-053022-8c1daa/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1976 ms | 573 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1736 ms | 1087 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1030 ms | 561 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 107 ms | 58 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 13 ms | 7 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1880 ms | 539 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1495 ms | 1186 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1022 ms | 578 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 109 ms | 60 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 13 ms | 7 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261009-053022-8c1daa-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261009-053022-8c1daa-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261009-053022-8c1daa-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-gateway-performance-man-005107f3-kova-261009-053022-8c1daa
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-gateway-performance-man-1e8be6a8-kova-261009-053022-8c1daa
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-gateway-performance-man-958fde53-kova-261009-053022-8c1daa
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-8e2a29af-kova-261009-053022-8c1daa
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-2ab680e0-kova-261009-053022-8c1daa
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261009-053022-8c1daa/kova-agent-cold-warm-message-67b331a3-kova-261009-053022-8c1daa

## Target Cleanup

- Runtime: `kova-local-mv0j105h-3tl-18f898ef`
- Result: removed
- Duration: 519ms

