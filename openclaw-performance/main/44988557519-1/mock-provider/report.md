# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1482 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1533 MB, gateway 1482 MB, command-tree 642.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1482 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1533 MB, gateway 1482 MB, command-tree 642.6 MB |
| Blocking findings | 29 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261122-051746-2cfe01` |
| Generated | 2026-11-22T06:03:08.957Z |
| Mode | execution |
| Target | `local-build:/home/runner/work/openclaw/openclaw` |
| Platform | linux 7.0.0-1014-aws (x64) · v24.22.1 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1482 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1533 MB, gateway 1482 MB, command-tree 642.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3521 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1533 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3521 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[133%, 204.5%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3521 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1492 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1528.3 MB, gateway 1492 MB, command-tree 639.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3517 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1528.3 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3517 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[129.8%, 209.4%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3517 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1507.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1619 MB, gateway 1507.7 MB, command-tree 632.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3465 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1619 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3465 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1479 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1857.4 MB, agent-process 1479 MB, status-cli 955.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1479 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1857.4 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1479 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10854ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1479 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 12065ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1479 |
| info | Kova | report | 17 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 3517ms | 1492MB | n/a | 188% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 248.8% | 11390ms | 12566ms | 10937ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 3521ms | 1482 MB | 2136.3 MB | n/a | n/a | gateway peak RSS 1482 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1533 MB, gateway 1482 MB, command-tree 642.6 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 3517ms | 1492 MB | 2130 MB | n/a | n/a | gateway peak RSS 1492 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1528.3 MB, gateway 1492 MB, command-tree 639.6 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 3465ms | 1507.7 MB | 2323.4 MB | n/a | n/a | gateway peak RSS 1507.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1619 MB, gateway 1507.7 MB, command-tree 632.8 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1930.9 MB | 11331ms | 12566ms | agent-process peak RSS 1479 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1857.4 MB, agent-process 1479 MB, status-cli 955.8 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2038.7 MB | 11461ms | 12766ms | agent-process peak RSS 1581.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1965.5 MB, agent-process 1581.6 MB, status-cli 952.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1930.4 MB | 11390ms | 12561ms | agent-process peak RSS 1477.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1858.1 MB, agent-process 1477.4 MB, status-cli 952.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1965.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 294% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1619 MB (scenario gateway-performance/many-bundled-plugins); CPU 226% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1581.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 261.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 955.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 228.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1507.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 223.8% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 604.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 151.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 438.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.6% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 347.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU | Settled RSS |
|---|---|---:|---:|---|
| gateway-performance / cold-start | complete | 2015.7 MB | 351.4% | 1393.4 MB at +120.1 s |
| gateway-performance / warm-restart | complete | 1952.4 MB | 378.8% | — |
| gateway-performance / cold-start | complete | 2012.1 MB | 332% | 1384.1 MB at +120.1 s |
| gateway-performance / warm-restart | complete | 1930 MB | 365.9% | — |
| gateway-performance / cold-start | complete | 2014.1 MB | 351.1% | 1471.8 MB at +120.0 s |
| gateway-performance / warm-restart | complete | 1930 MB | 370.7% | — |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-gateway-performance-man-005107f3-kova-261122-051746-2cfe01
Measurements:
- startup: listening 2ms; health 3521ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 112ms; post-ready p95 2ms; failures 22; final failures 0; slowest startup-sample/cold-start 160ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1482 MB; tracked total 2136.3 MB; max CPU 188%; samples 47; roles gateway-tree 1533MB/212%, gateway 1482MB/188%, command-tree 642.6MB/204.5%, status-cli 642.6MB/204.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 2269.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1482 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1533 MB, gateway 1482 MB, command-tree 642.6 MB
  - gateway-tree peak RSS 1533 MB exceeded threshold 1440 MB
  - status-cli max CPU interval \[133%, 204.5%\] crosses threshold 200%; CPU measurement is inconclusive

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-gateway-performance-man-1e8be6a8-kova-261122-051746-2cfe01
Measurements:
- startup: listening 0ms; health 3517ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 117ms; post-ready p95 2ms; failures 22; final failures 0; slowest startup-sample/cold-start 206ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1492 MB; tracked total 2130 MB; max CPU 223.8%; samples 47; roles gateway-tree 1528.3MB/226%, gateway 1492MB/223.8%, command-tree 639.6MB/209.4%, status-cli 639.6MB/209.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 2253.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1492 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1528.3 MB, gateway 1492 MB, command-tree 639.6 MB
  - gateway-tree peak RSS 1528.3 MB exceeded threshold 1440 MB
  - status-cli max CPU interval \[129.8%, 209.4%\] crosses threshold 200%; CPU measurement is inconclusive

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-gateway-performance-man-958fde53-kova-261122-051746-2cfe01
Measurements:
- startup: listening 1ms; health 3465ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 174ms; post-ready p95 3ms; failures 22; final failures 0; slowest startup-sample/cold-start 178ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1507.7 MB; tracked total 2323.4 MB; max CPU 188%; samples 47; roles gateway-tree 1619MB/212%, gateway 1507.7MB/188%, command-tree 632.8MB/198.8%, status-cli 632.8MB/198.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 2217.12ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1507.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1619 MB, gateway 1507.7 MB, command-tree 632.8 MB
  - gateway-tree peak RSS 1619 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-8e2a29af-kova-261122-051746-2cfe01
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1479 MB; tracked total 1930.9 MB; max CPU 261.8%; samples 37; roles command-tree 1857.4MB/294%, agent-process 1479MB/261.8%, status-cli 955.8MB/220.7%, agent-cli 438.1MB/164.6%
- agent: turn 12566ms; cold/warm 11331ms/12566ms; cold-warm delta 0ms; pre-provider 12065ms; provider 1ms; metadata scans 9 (554.83ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12504.25ms; max 12566ms; pre-provider p95 12004.45ms
- agent CLI attribution: cold known 7553ms / unattributed 3301ms; warm known 8485ms / unattributed 3580ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2217.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1479 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1857.4 MB, agent-process 1479 MB, status-cli 955.8 MB
  - command-tree peak RSS 1857.4 MB exceeded threshold 1400 MB
  - cold agent spent 10854ms before provider work, over threshold 10000ms
  - warm agent spent 12065ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10854ms, over threshold 10000ms
  - warm pre-provider latency was 12065ms, over threshold 10000ms
  - warm provider was fast (1ms), but OpenClaw spent 12065ms before provider work.
- Agent turns:
  - cold: total 11331ms; pre-provider 10854ms; provider 3ms; post-provider 474ms; response true
    - active window: metadata scans 5 (346.48ms total, max 121.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10854ms; provider 3ms; post-provider 474ms; unknown 3359.52ms; source agent.prepare 6699.52ms; plugins.metadata.scan 794.96ms
  - warm: total 12566ms; pre-provider 12065ms; provider 1ms; post-provider 500ms; response true
    - active window: metadata scans 4 (208.35ms total, max 109.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12065ms; provider 1ms; post-provider 500ms; unknown 4570.52ms; source agent.prepare 6699.52ms; plugins.metadata.scan 794.96ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10854 ms | 7553 ms | 3301 ms | 3 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-8e2a29af-kova-261122-051746-2cfe01/openclaw/timeline.jsonl |
  | warm | 12065 ms | 8485 ms | 3580 ms | 1 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-8e2a29af-kova-261122-051746-2cfe01/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5096 ms | 1892 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3059 ms | 1273 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2770 ms | 1531 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x3 | 5 | 0 | 344 ms | 121 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 289 ms | 289 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5069 ms | 1880 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3642 ms | 1549 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3417 ms | 2217 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 291 ms | 291 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 209 ms | 110 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-2ab680e0-kova-261122-051746-2cfe01
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1581.6 MB; tracked total 2038.7 MB; max CPU 239.9%; samples 37; roles command-tree 1965.5MB/273.5%, agent-process 1581.6MB/239.9%, status-cli 952.8MB/228.4%, agent-cli 383.9MB/107.9%
- agent: turn 12766ms; cold/warm 11461ms/12766ms; cold-warm delta 0ms; pre-provider 12234ms; provider 1ms; metadata scans 9 (532.81ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12700.75ms; max 12766ms; pre-provider p95 12172.85ms
- agent CLI attribution: cold known 7663ms / unattributed 3348ms; warm known 8613ms / unattributed 3621ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2219.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1581.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1965.5 MB, agent-process 1581.6 MB, status-cli 952.8 MB
  - command-tree peak RSS 1965.5 MB exceeded threshold 1400 MB
  - cold agent spent 11011ms before provider work, over threshold 10000ms
  - warm agent spent 12234ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 11011ms, over threshold 10000ms
  - warm pre-provider latency was 12234ms, over threshold 10000ms
  - warm provider was fast (1ms), but OpenClaw spent 12234ms before provider work.
- Agent turns:
  - cold: total 11461ms; pre-provider 11011ms; provider 3ms; post-provider 447ms; response true
    - active window: metadata scans 5 (325.2ms total, max 134.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11011ms; provider 3ms; post-provider 447ms; unknown 3402.62ms; source agent.prepare 6836.15ms; plugins.metadata.scan 772.23ms
  - warm: total 12766ms; pre-provider 12234ms; provider 1ms; post-provider 531ms; response true
    - active window: metadata scans 4 (207.61ms total, max 109.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12234ms; provider 1ms; post-provider 531ms; unknown 4625.62ms; source agent.prepare 6836.15ms; plugins.metadata.scan 772.23ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11011 ms | 7663 ms | 3348 ms | 3 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-2ab680e0-kova-261122-051746-2cfe01/openclaw/timeline.jsonl |
  | warm | 12234 ms | 8613 ms | 3621 ms | 1 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-2ab680e0-kova-261122-051746-2cfe01/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5144 ms | 1921 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3112 ms | 1297 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2804 ms | 1556 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x3 | 5 | 0 | 325 ms | 134 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 300 ms | 300 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5186 ms | 1929 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3726 ms | 1567 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3429 ms | 2220 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 294 ms | 294 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 208 ms | 109 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-67b331a3-kova-261122-051746-2cfe01
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1477.4 MB; tracked total 1930.4 MB; max CPU 248.8%; samples 37; roles command-tree 1858.1MB/280.6%, agent-process 1477.4MB/248.8%, status-cli 952.6MB/225.2%, agent-cli 383.8MB/51.4%
- agent: turn 12561ms; cold/warm 11390ms/12561ms; cold-warm delta 0ms; pre-provider 12050ms; provider 1ms; metadata scans 9 (550.94ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12502.45ms; max 12561ms; pre-provider p95 11994.35ms
- agent CLI attribution: cold known 7606ms / unattributed 3331ms; warm known 8430ms / unattributed 3620ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2200.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1477.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1858.1 MB, agent-process 1477.4 MB, status-cli 952.6 MB
  - command-tree peak RSS 1858.1 MB exceeded threshold 1400 MB
  - cold agent spent 10937ms before provider work, over threshold 10000ms
  - warm agent spent 12050ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10937ms, over threshold 10000ms
  - warm pre-provider latency was 12050ms, over threshold 10000ms
  - warm provider was fast (1ms), but OpenClaw spent 12050ms before provider work.
- Agent turns:
  - cold: total 11390ms; pre-provider 10937ms; provider 3ms; post-provider 450ms; response true
    - active window: metadata scans 5 (345.33ms total, max 122.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10937ms; provider 3ms; post-provider 450ms; unknown 3481.67ms; source agent.prepare 6662.45ms; plugins.metadata.scan 792.88ms
  - warm: total 12561ms; pre-provider 12050ms; provider 1ms; post-provider 510ms; response true
    - active window: metadata scans 4 (205.61ms total, max 108.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12050ms; provider 1ms; post-provider 510ms; unknown 4594.67ms; source agent.prepare 6662.45ms; plugins.metadata.scan 792.88ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10937 ms | 7606 ms | 3331 ms | 3 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-67b331a3-kova-261122-051746-2cfe01/openclaw/timeline.jsonl |
  | warm | 12050 ms | 8430 ms | 3620 ms | 1 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-67b331a3-kova-261122-051746-2cfe01/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5158 ms | 1914 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3073 ms | 1278 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2778 ms | 1548 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x3 | 5 | 0 | 344 ms | 122 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 292 ms | 292 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5089 ms | 1893 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3589 ms | 1512 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3383 ms | 2201 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 290 ms | 290 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 206 ms | 108 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |

## Artifacts

- markdown-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261122-051746-2cfe01-diagnostic.md
- json-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261122-051746-2cfe01-diagnostic.json
- summary-json: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261122-051746-2cfe01-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-gateway-performance-man-005107f3-kova-261122-051746-2cfe01
- collector-root gateway-performance#2: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-gateway-performance-man-1e8be6a8-kova-261122-051746-2cfe01
- collector-root gateway-performance#3: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-gateway-performance-man-958fde53-kova-261122-051746-2cfe01
- collector-root agent-cold-warm-message#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-8e2a29af-kova-261122-051746-2cfe01
- collector-root agent-cold-warm-message#2: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-2ab680e0-kova-261122-051746-2cfe01
- collector-root agent-cold-warm-message#3: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261122-051746-2cfe01/kova-agent-cold-warm-message-67b331a3-kova-261122-051746-2cfe01

## Target Cleanup

- Runtime: `kova-local-mwrdy9yt-2dg-3c0351f9`
- Result: removed
- Duration: 448ms

