# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — ocm service restart 'kova-gateway-performance-man-005107f3-kova-261113-051915-23bcd8' took 16742ms, over threshold 15000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | ocm service restart 'kova-gateway-performance-man-005107f3-kova-261113-051915-23bcd8' took 16742ms, over threshold 15000ms |
| Blocking findings | 35 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261113-051915-23bcd8` |
| Generated | 2026-11-13T06:05:10.190Z |
| Mode | execution |
| Target | `local-build:/home/runner/work/openclaw/openclaw` |
| Platform | linux 7.0.0-1017-azure (x64) · v24.22.1 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-005107f3-kova-261113-051915-23bcd8' took 16742ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3706 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1735.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1876.9 MB, gateway 1735.6 MB, command-tree 663.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3706 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1876.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3706 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[162.3%, 206.9%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3706 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261113-051915-23bcd8' took 16718ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3498 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1743.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1908.3 MB, gateway 1743.3 MB, command-tree 699.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3498 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1908.3 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3498 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-958fde53-kova-261113-051915-23bcd8' took 17011ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4362 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1771.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1860.8 MB, gateway 1771.2 MB, command-tree 767.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4362 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1860.8 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4362 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[158.6%, 203.6%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4362 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1619.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1889.5 MB, agent-process 1619.4 MB, status-cli 977.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1619.4 |
| info | Kova | report | 23 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 3706ms | 1743.3MB | n/a | 222.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 217.4% | 13321ms | 15539ms | 12673ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 3706ms | 1735.6 MB | 2569.6 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-005107f3-kova-261113-051915-23bcd8' took 16742ms, over threshold 15000ms |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 3498ms | 1743.3 MB | 2607.8 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261113-051915-23bcd8' took 16718ms, over threshold 15000ms |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4362ms | 1771.2 MB | 2598.6 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-958fde53-kova-261113-051915-23bcd8' took 17011ms, over threshold 15000ms |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1962.8 MB | 13321ms | 16028ms | agent-process peak RSS 1619.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1889.5 MB, agent-process 1619.4 MB, status-cli 977.7 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1785.3 MB | 13409ms | 15539ms | agent-process peak RSS 1491.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1711.5 MB, agent-process 1491.4 MB, status-cli 1003 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1842.6 MB | 13147ms | 15431ms | agent-process peak RSS 1540 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1768.9 MB, agent-process 1540 MB, status-cli 1066.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1908.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 253.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1889.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 246.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1771.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 223.3% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1066.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 246.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1619.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 231.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 641.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 158.7% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 383.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 145% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 364.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 148.7% (scenario gateway-performance/many-bundled-plugins)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU |
|---|---|---:|---:|
| gateway-performance / cold-start | complete | 1422.6 MB | 269.6% |
| gateway-performance / warm-restart | complete | 1941.5 MB | 339.1% |
| gateway-performance / cold-start | complete | 1421.7 MB | 307.7% |
| gateway-performance / warm-restart | complete | 1975.5 MB | 343.9% |
| gateway-performance / cold-start | complete | 1385.8 MB | 319.4% |
| gateway-performance / warm-restart | complete | 2016.3 MB | 389.7% |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-gateway-performance-man-005107f3-kova-261113-051915-23bcd8
Measurements:
- startup: listening 0ms; health 3706ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 214ms; post-ready p95 2ms; failures 18; final failures 0; slowest startup-sample/warm-restart 251ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1735.6 MB; tracked total 2569.6 MB; max CPU 219.2%; samples 54; roles gateway-tree 1876.9MB/253.3%, gateway 1735.6MB/219.2%, command-tree 663.6MB/206.9%, status-cli 663.6MB/206.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2418.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-005107f3-kova-261113-051915-23bcd8' took 16742ms, over threshold 15000ms
  - gateway peak RSS 1735.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1876.9 MB, gateway 1735.6 MB, command-tree 663.6 MB
  - gateway-tree peak RSS 1876.9 MB exceeded threshold 1440 MB
  - status-cli max CPU interval \[162.3%, 206.9%\] crosses threshold 200%; CPU measurement is inconclusive

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-gateway-performance-man-1e8be6a8-kova-261113-051915-23bcd8
Measurements:
- startup: listening 0ms; health 3498ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 233ms; post-ready p95 2ms; failures 17; final failures 0; slowest startup-sample/warm-restart 233ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1743.3 MB; tracked total 2607.8 MB; max CPU 222.8%; samples 55; roles gateway-tree 1908.3MB/248.3%, gateway 1743.3MB/222.8%, command-tree 699.3MB/199.2%, status-cli 699.3MB/199.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2406.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261113-051915-23bcd8' took 16718ms, over threshold 15000ms
  - gateway peak RSS 1743.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1908.3 MB, gateway 1743.3 MB, command-tree 699.3 MB
  - gateway-tree peak RSS 1908.3 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-gateway-performance-man-958fde53-kova-261113-051915-23bcd8
Measurements:
- startup: listening 1ms; health 4362ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 67ms; post-ready p95 3ms; failures 20; final failures 0; slowest startup-sample/warm-restart 317ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1771.2 MB; tracked total 2598.6 MB; max CPU 223.3%; samples 55; roles gateway-tree 1860.8MB/240.8%, gateway 1771.2MB/223.3%, command-tree 767.3MB/203.6%, status-cli 767.3MB/203.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2490.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-958fde53-kova-261113-051915-23bcd8' took 17011ms, over threshold 15000ms
  - gateway peak RSS 1771.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1860.8 MB, gateway 1771.2 MB, command-tree 767.3 MB
  - gateway-tree peak RSS 1860.8 MB exceeded threshold 1440 MB
  - status-cli max CPU interval \[158.6%, 203.6%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-8e2a29af-kova-261113-051915-23bcd8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1619.4 MB; tracked total 1962.8 MB; max CPU 217.4%; samples 44; roles command-tree 1889.5MB/235.3%, agent-process 1619.4MB/217.4%, status-cli 977.7MB/182.8%, agent-cli 372.9MB/74.6%
- agent: turn 16028ms; cold/warm 13321ms/16028ms; cold-warm delta 0ms; pre-provider 14303ms; provider 1ms; metadata scans 11 (672.21ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15892.65ms; max 16028ms; pre-provider p95 14224.85ms
- agent CLI attribution: cold known 8046ms / unattributed 4694ms; warm known 9999ms / unattributed 4304ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3019.24ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1619.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1889.5 MB, agent-process 1619.4 MB, status-cli 977.7 MB
  - command-tree peak RSS 1889.5 MB exceeded threshold 1400 MB
  - cold agent spent 12740ms before provider work, over threshold 10000ms
  - warm agent spent 14303ms before provider work, over threshold 10000ms
  - warm agent turn took 16028ms, over threshold 15000ms
  - cold pre-provider latency was 12740ms, over threshold 10000ms
  - warm pre-provider latency was 14303ms, over threshold 10000ms
  - warm provider was fast (1ms), but OpenClaw spent 14303ms before provider work.
- Agent turns:
  - cold: total 13321ms; pre-provider 12740ms; provider 3ms; post-provider 578ms; response true
    - active window: metadata scans 4 (269.04ms total, max 152.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12740ms; provider 3ms; post-provider 578ms; unknown 4313.71ms; source agent.prepare 7462.38ms; plugins.metadata.scan 963.91ms
  - warm: total 16028ms; pre-provider 14303ms; provider 1ms; post-provider 1724ms; response true
    - active window: metadata scans 7 (403.17ms total, max 154.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14303ms; provider 1ms; post-provider 1724ms; unknown 5876.71ms; source agent.prepare 7462.38ms; plugins.metadata.scan 963.91ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12740 ms | 8046 ms | 4694 ms | 3 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-8e2a29af-kova-261113-051915-23bcd8/openclaw/timeline.jsonl |
  | warm | 14303 ms | 9999 ms | 4304 ms | 1 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-8e2a29af-kova-261113-051915-23bcd8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5794 ms | 1972 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3133 ms | 1418 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2859 ms | 1642 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 387 ms | 387 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 269 ms | 153 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 41 ms | 41 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5043 ms | 1903 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4401 ms | 3019 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4328 ms | 2032 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 403 ms | 154 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 398 ms | 398 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-2ab680e0-kova-261113-051915-23bcd8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1491.4 MB; tracked total 1785.3 MB; max CPU 231.2%; samples 44; roles command-tree 1711.5MB/245.9%, agent-process 1491.4MB/231.2%, status-cli 1003MB/219.8%, agent-cli 381.5MB/145%
- agent: turn 15539ms; cold/warm 13409ms/15539ms; cold-warm delta 0ms; pre-provider 14270ms; provider 2ms; metadata scans 11 (677.25ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15432.5ms; max 15539ms; pre-provider p95 14190.15ms
- agent CLI attribution: cold known 7998ms / unattributed 4675ms; warm known 10014ms / unattributed 4256ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3001.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1491.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1711.5 MB, agent-process 1491.4 MB, status-cli 1003 MB
  - command-tree peak RSS 1711.5 MB exceeded threshold 1400 MB
  - cold agent spent 12673ms before provider work, over threshold 10000ms
  - warm agent spent 14270ms before provider work, over threshold 10000ms
  - warm agent turn took 15539ms, over threshold 15000ms
  - cold pre-provider latency was 12673ms, over threshold 10000ms
  - warm pre-provider latency was 14270ms, over threshold 10000ms
  - warm provider was fast (2ms), but OpenClaw spent 14270ms before provider work.
- Agent turns:
  - cold: total 13409ms; pre-provider 12673ms; provider 4ms; post-provider 732ms; response true
    - active window: metadata scans 4 (270.3ms total, max 155.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12673ms; provider 4ms; post-provider 732ms; unknown 4147.16ms; source agent.prepare 7565.04ms; plugins.metadata.scan 960.8ms
  - warm: total 15539ms; pre-provider 14270ms; provider 2ms; post-provider 1267ms; response true
    - active window: metadata scans 7 (406.95ms total, max 157.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14270ms; provider 2ms; post-provider 1267ms; unknown 5744.16ms; source agent.prepare 7565.04ms; plugins.metadata.scan 960.8ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12673 ms | 7998 ms | 4675 ms | 4 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-2ab680e0-kova-261113-051915-23bcd8/openclaw/timeline.jsonl |
  | warm | 14270 ms | 10014 ms | 4256 ms | 2 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-2ab680e0-kova-261113-051915-23bcd8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5993 ms | 1935 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3155 ms | 1436 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2714 ms | 1491 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 386 ms | 386 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 269 ms | 156 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5008 ms | 1903 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4410 ms | 2068 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4377 ms | 3002 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 407 ms | 158 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 387 ms | 387 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-67b331a3-kova-261113-051915-23bcd8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1540 MB; tracked total 1842.6 MB; max CPU 205.5%; samples 43; roles command-tree 1768.9MB/246.3%, agent-process 1540MB/205.5%, status-cli 1066.6MB/246.3%, agent-cli 383.4MB/118.5%
- agent: turn 15431ms; cold/warm 13147ms/15431ms; cold-warm delta 0ms; pre-provider 14171ms; provider 1ms; metadata scans 11 (662.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15316.8ms; max 15431ms; pre-provider p95 14094.85ms
- agent CLI attribution: cold known 7975ms / unattributed 4673ms; warm known 9944ms / unattributed 4227ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2959.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1540 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1768.9 MB, agent-process 1540 MB, status-cli 1066.6 MB
  - command-tree peak RSS 1768.9 MB exceeded threshold 1400 MB
  - cold agent spent 12648ms before provider work, over threshold 10000ms
  - warm agent spent 14171ms before provider work, over threshold 10000ms
  - warm agent turn took 15431ms, over threshold 15000ms
  - cold pre-provider latency was 12648ms, over threshold 10000ms
  - warm pre-provider latency was 14171ms, over threshold 10000ms
  - warm provider was fast (1ms), but OpenClaw spent 14171ms before provider work.
- Agent turns:
  - cold: total 13147ms; pre-provider 12648ms; provider 3ms; post-provider 496ms; response true
    - active window: metadata scans 4 (272.79ms total, max 155.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12648ms; provider 3ms; post-provider 496ms; unknown 4299.65ms; source agent.prepare 7387.29ms; plugins.metadata.scan 961.06ms
  - warm: total 15431ms; pre-provider 14171ms; provider 1ms; post-provider 1259ms; response true
    - active window: metadata scans 7 (389.73ms total, max 151.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14171ms; provider 1ms; post-provider 1259ms; unknown 5822.65ms; source agent.prepare 7387.29ms; plugins.metadata.scan 961.06ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12648 ms | 7975 ms | 4673 ms | 3 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-67b331a3-kova-261113-051915-23bcd8/openclaw/timeline.jsonl |
  | warm | 14171 ms | 9944 ms | 4227 ms | 1 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-67b331a3-kova-261113-051915-23bcd8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 5764 ms | 1912 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3118 ms | 1422 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2787 ms | 1521 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 422 ms | 422 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 273 ms | 155 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5024 ms | 1884 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4365 ms | 2960 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4268 ms | 2003 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 389 ms | 152 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 388 ms | 388 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |

## Artifacts

- markdown-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261113-051915-23bcd8-diagnostic.md
- json-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261113-051915-23bcd8-diagnostic.json
- summary-json: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261113-051915-23bcd8-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-gateway-performance-man-005107f3-kova-261113-051915-23bcd8
- collector-root gateway-performance#2: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-gateway-performance-man-1e8be6a8-kova-261113-051915-23bcd8
- collector-root gateway-performance#3: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-gateway-performance-man-958fde53-kova-261113-051915-23bcd8
- collector-root agent-cold-warm-message#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-8e2a29af-kova-261113-051915-23bcd8
- collector-root agent-cold-warm-message#2: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-2ab680e0-kova-261113-051915-23bcd8
- collector-root agent-cold-warm-message#3: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261113-051915-23bcd8/kova-agent-cold-warm-message-67b331a3-kova-261113-051915-23bcd8

## Target Cleanup

- Runtime: `kova-local-mwej1ivo-2br-8e6cef3b`
- Result: removed
- Duration: 6712ms

