# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — ocm service restart 'kova-gateway-performance-man-005107f3-kova-261114-051805-02ff22' took 17101ms, over threshold 15000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | ocm service restart 'kova-gateway-performance-man-005107f3-kova-261114-051805-02ff22' took 17101ms, over threshold 15000ms |
| Blocking findings | 33 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261114-051805-02ff22` |
| Generated | 2026-11-14T06:04:55.024Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-005107f3-kova-261114-051805-02ff22' took 17101ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3584 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1733.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1912.7 MB, gateway 1733.3 MB, command-tree 655.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3584 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1912.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3584 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261114-051805-02ff22' took 17156ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3827 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1779.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1957.1 MB, gateway 1779.2 MB, command-tree 695.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3827 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1957.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3827 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-958fde53-kova-261114-051805-02ff22' took 16884ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3450 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1749.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1950.1 MB, gateway 1749.5 MB, command-tree 779.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3450 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1950.1 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3450 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1498.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1752.5 MB, agent-process 1498.9 MB, status-cli 974.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1498.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1752.5 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1498.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 12386ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1498.9 |
| info | Kova | report | 21 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 3584ms | 1749.5MB | n/a | 224.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 238.9% | 13018ms | 15480ms | 12509ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 3584ms | 1733.3 MB | 2594.8 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-005107f3-kova-261114-051805-02ff22' took 17101ms, over threshold 15000ms |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 3827ms | 1779.2 MB | 2634.6 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261114-051805-02ff22' took 17156ms, over threshold 15000ms |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 3450ms | 1749.5 MB | 2685.1 MB | n/a | n/a | ocm service restart 'kova-gateway-performance-man-958fde53-kova-261114-051805-02ff22' took 16884ms, over threshold 15000ms |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1826.3 MB | 12944ms | 15480ms | agent-process peak RSS 1498.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1752.5 MB, agent-process 1498.9 MB, status-cli 974.1 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1957.3 MB | 13121ms | 15850ms | agent-process peak RSS 1614.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1883.8 MB, agent-process 1614.1 MB, status-cli 961.3 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1807.1 MB | 13018ms | 15466ms | agent-process peak RSS 1486.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1733.1 MB, agent-process 1486.1 MB, status-cli 965.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1957.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 257.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1883.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 277.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 974.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 258.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1779.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 235.2% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1614.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 247.6% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 641.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 154.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 387.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 141.2% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 364.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 147.4% (scenario gateway-performance/many-bundled-plugins)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU |
|---|---|---:|---:|
| gateway-performance / cold-start | complete | 1384 MB | 331.9% |
| gateway-performance / warm-restart | complete | 1952.9 MB | 352.1% |
| gateway-performance / cold-start | complete | 1388.1 MB | 291.3% |
| gateway-performance / warm-restart | complete | 1950.5 MB | 349.4% |
| gateway-performance / cold-start | complete | 1388.3 MB | 279.2% |
| gateway-performance / warm-restart | complete | 1989.7 MB | 351.3% |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-gateway-performance-man-005107f3-kova-261114-051805-02ff22
Measurements:
- startup: listening 0ms; health 3584ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 84ms; post-ready p95 3ms; failures 18; final failures 0; slowest startup-sample/cold-start 223ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1733.3 MB; tracked total 2594.8 MB; max CPU 218.5%; samples 55; roles gateway-tree 1912.7MB/248%, gateway 1733.3MB/218.5%, command-tree 655.8MB/190.1%, status-cli 655.8MB/190.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2523.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-005107f3-kova-261114-051805-02ff22' took 17101ms, over threshold 15000ms
  - gateway peak RSS 1733.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1912.7 MB, gateway 1733.3 MB, command-tree 655.8 MB
  - gateway-tree peak RSS 1912.7 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-gateway-performance-man-1e8be6a8-kova-261114-051805-02ff22
Measurements:
- startup: listening 0ms; health 3827ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 178ms; post-ready p95 2ms; failures 19; final failures 0; slowest startup-sample/warm-restart 246ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1779.2 MB; tracked total 2634.6 MB; max CPU 224.1%; samples 54; roles gateway-tree 1957.1MB/244.7%, gateway 1779.2MB/224.1%, command-tree 695.6MB/182.7%, status-cli 695.6MB/182.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2543.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-1e8be6a8-kova-261114-051805-02ff22' took 17156ms, over threshold 15000ms
  - gateway peak RSS 1779.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1957.1 MB, gateway 1779.2 MB, command-tree 695.6 MB
  - gateway-tree peak RSS 1957.1 MB exceeded threshold 1440 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-gateway-performance-man-958fde53-kova-261114-051805-02ff22
Measurements:
- startup: listening 0ms; health 3450ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 176ms; post-ready p95 2ms; failures 18; final failures 0; slowest startup-sample/warm-restart 304ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1749.5 MB; tracked total 2685.1 MB; max CPU 235.2%; samples 54; roles gateway-tree 1950.1MB/257.9%, gateway 1749.5MB/235.2%, command-tree 779.1MB/193.7%, status-cli 779.1MB/193.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2637.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm service restart 'kova-gateway-performance-man-958fde53-kova-261114-051805-02ff22' took 16884ms, over threshold 15000ms
  - gateway peak RSS 1749.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1950.1 MB, gateway 1749.5 MB, command-tree 779.1 MB
  - gateway-tree peak RSS 1950.1 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-8e2a29af-kova-261114-051805-02ff22
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1498.9 MB; tracked total 1826.3 MB; max CPU 238.9%; samples 43; roles command-tree 1752.5MB/275%, agent-process 1498.9MB/238.9%, status-cli 974.1MB/251.6%, agent-cli 387.5MB/141.2%
- agent: turn 15480ms; cold/warm 12944ms/15480ms; cold-warm delta 0ms; pre-provider 14000ms; provider 2ms; metadata scans 12 (726.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15353.2ms; max 15480ms; pre-provider p95 13919.3ms
- agent CLI attribution: cold known 7780ms / unattributed 4606ms; warm known 9783ms / unattributed 4217ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3032.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1498.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1752.5 MB, agent-process 1498.9 MB, status-cli 974.1 MB
  - command-tree peak RSS 1752.5 MB exceeded threshold 1400 MB
  - cold agent spent 12386ms before provider work, over threshold 10000ms
  - warm agent spent 14000ms before provider work, over threshold 10000ms
  - warm agent turn took 15480ms, over threshold 15000ms
  - cold pre-provider latency was 12386ms, over threshold 10000ms
  - warm pre-provider latency was 14000ms, over threshold 10000ms
  - warm provider was fast (2ms), but OpenClaw spent 14000ms before provider work.
- Agent turns:
  - cold: total 12944ms; pre-provider 12386ms; provider 3ms; post-provider 555ms; response true
    - active window: metadata scans 5 (352.48ms total, max 151.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12386ms; provider 3ms; post-provider 555ms; unknown 4085.7ms; source agent.prepare 7291.12ms; plugins.metadata.scan 1009.18ms
  - warm: total 15480ms; pre-provider 14000ms; provider 2ms; post-provider 1478ms; response true
    - active window: metadata scans 7 (374.09ms total, max 151.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14000ms; provider 2ms; post-provider 1478ms; unknown 5699.7ms; source agent.prepare 7291.12ms; plugins.metadata.scan 1009.18ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12386 ms | 7780 ms | 4606 ms | 3 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-8e2a29af-kova-261114-051805-02ff22/openclaw/timeline.jsonl |
  | warm | 14000 ms | 9783 ms | 4217 ms | 2 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-8e2a29af-kova-261114-051805-02ff22/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5359 ms | 1883 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3035 ms | 1365 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2763 ms | 1611 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 383 ms | 383 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x3 | 5 | 0 | 353 ms | 151 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 4888 ms | 1861 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4420 ms | 3033 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4257 ms | 1983 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 384 ms | 384 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 263 ms | 152 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-2ab680e0-kova-261114-051805-02ff22
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1614.1 MB; tracked total 1957.3 MB; max CPU 219.5%; samples 43; roles command-tree 1883.8MB/258.1%, agent-process 1614.1MB/219.5%, status-cli 961.3MB/258.1%, agent-cli 269.7MB/90.4%
- agent: turn 15850ms; cold/warm 13121ms/15850ms; cold-warm delta 0ms; pre-provider 14440ms; provider 2ms; metadata scans 12 (731.82ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15713.55ms; max 15850ms; pre-provider p95 14344.55ms
- agent CLI attribution: cold known 7846ms / unattributed 4685ms; warm known 10259ms / unattributed 4181ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3269.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1614.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1883.8 MB, agent-process 1614.1 MB, status-cli 961.3 MB
  - command-tree peak RSS 1883.8 MB exceeded threshold 1400 MB
  - cold agent spent 12531ms before provider work, over threshold 10000ms
  - warm agent spent 14440ms before provider work, over threshold 10000ms
  - warm agent turn took 15850ms, over threshold 15000ms
  - cold pre-provider latency was 12531ms, over threshold 10000ms
  - warm pre-provider latency was 14440ms, over threshold 10000ms
  - warm provider was fast (2ms), but OpenClaw spent 14440ms before provider work.
- Agent turns:
  - cold: total 13121ms; pre-provider 12531ms; provider 3ms; post-provider 587ms; response true
    - active window: metadata scans 5 (347ms total, max 149.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12531ms; provider 3ms; post-provider 587ms; unknown 4172.56ms; source agent.prepare 7343.13ms; plugins.metadata.scan 1015.31ms
  - warm: total 15850ms; pre-provider 14440ms; provider 2ms; post-provider 1408ms; response true
    - active window: metadata scans 7 (384.82ms total, max 155.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14440ms; provider 2ms; post-provider 1408ms; unknown 6081.56ms; source agent.prepare 7343.13ms; plugins.metadata.scan 1015.31ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12531 ms | 7846 ms | 4685 ms | 3 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-2ab680e0-kova-261114-051805-02ff22/openclaw/timeline.jsonl |
  | warm | 14440 ms | 10259 ms | 4181 ms | 2 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-2ab680e0-kova-261114-051805-02ff22/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5389 ms | 1892 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3053 ms | 1381 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2809 ms | 1657 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 395 ms | 395 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x3 | 5 | 0 | 347 ms | 150 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5179 ms | 1906 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4656 ms | 3269 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4289 ms | 2006 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 392 ms | 392 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 272 ms | 156 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-67b331a3-kova-261114-051805-02ff22
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1486.1 MB; tracked total 1807.1 MB; max CPU 247.6%; samples 43; roles command-tree 1733.1MB/277.4%, agent-process 1486.1MB/247.6%, status-cli 965.6MB/255.5%, agent-cli 379MB/99%
- agent: turn 15466ms; cold/warm 13018ms/15466ms; cold-warm delta 0ms; pre-provider 14042ms; provider 1ms; metadata scans 12 (750.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15343.6ms; max 15466ms; pre-provider p95 13965.35ms
- agent CLI attribution: cold known 7977ms / unattributed 4532ms; warm known 9797ms / unattributed 4245ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3004.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1486.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1733.1 MB, agent-process 1486.1 MB, status-cli 965.6 MB
  - command-tree peak RSS 1733.1 MB exceeded threshold 1400 MB
  - cold agent spent 12509ms before provider work, over threshold 10000ms
  - warm agent spent 14042ms before provider work, over threshold 10000ms
  - warm agent turn took 15466ms, over threshold 15000ms
  - cold pre-provider latency was 12509ms, over threshold 10000ms
  - warm pre-provider latency was 14042ms, over threshold 10000ms
  - warm provider was fast (1ms), but OpenClaw spent 14042ms before provider work.
- Agent turns:
  - cold: total 13018ms; pre-provider 12509ms; provider 3ms; post-provider 506ms; response true
    - active window: metadata scans 5 (357.25ms total, max 153.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12509ms; provider 3ms; post-provider 506ms; unknown 4088.97ms; source agent.prepare 7395.38ms; plugins.metadata.scan 1024.65ms
  - warm: total 15466ms; pre-provider 14042ms; provider 1ms; post-provider 1423ms; response true
    - active window: metadata scans 7 (393.53ms total, max 132.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14042ms; provider 1ms; post-provider 1423ms; unknown 5621.97ms; source agent.prepare 7395.38ms; plugins.metadata.scan 1024.65ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12509 ms | 7977 ms | 4532 ms | 3 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-67b331a3-kova-261114-051805-02ff22/openclaw/timeline.jsonl |
  | warm | 14042 ms | 9797 ms | 4245 ms | 1 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-67b331a3-kova-261114-051805-02ff22/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5531 ms | 1910 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3045 ms | 1381 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2868 ms | 1682 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 391 ms | 391 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x3 | 5 | 0 | 357 ms | 154 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 4938 ms | 1877 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4376 ms | 3004 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4350 ms | 2024 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 380 ms | 380 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 251 ms | 132 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |

## Artifacts

- markdown-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261114-051805-02ff22-diagnostic.md
- json-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261114-051805-02ff22-diagnostic.json
- summary-json: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261114-051805-02ff22-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-gateway-performance-man-005107f3-kova-261114-051805-02ff22
- collector-root gateway-performance#2: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-gateway-performance-man-1e8be6a8-kova-261114-051805-02ff22
- collector-root gateway-performance#3: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-gateway-performance-man-958fde53-kova-261114-051805-02ff22
- collector-root agent-cold-warm-message#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-8e2a29af-kova-261114-051805-02ff22
- collector-root agent-cold-warm-message#2: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-2ab680e0-kova-261114-051805-02ff22
- collector-root agent-cold-warm-message#3: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261114-051805-02ff22/kova-agent-cold-warm-message-67b331a3-kova-261114-051805-02ff22

## Target Cleanup

- Runtime: `kova-local-mwfyfvsr-2c8-a31f0cba`
- Result: removed
- Duration: 6166ms

