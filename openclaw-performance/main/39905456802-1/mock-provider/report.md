# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1887.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2103.7 MB, gateway 1887.1 MB, command-tree 734.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1887.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2103.7 MB, gateway 1887.1 MB, command-tree 734.8 MB |
| Blocking findings | 17 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261023-052457-3edc02` |
| Generated | 2026-10-23T05:48:55.649Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1887.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2103.7 MB, gateway 1887.1 MB, command-tree 734.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 298 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2103.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 298 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 298 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1857.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2075.4 MB, gateway 1857.8 MB, command-tree 716.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2075.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 520ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 22 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1856.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2073.9 MB, gateway 1856.3 MB, command-tree 692 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2073.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 517ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1517.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1701.4 MB, agent-process 1517.4 MB, status-cli 981.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1517.4 |
| info | Kova | report | 5 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 22ms | 1857.8MB | n/a | 268.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 235.4% | 7584ms | 8267ms | 7273ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 298ms | 1887.1 MB | 2883.1 MB | n/a | n/a | gateway peak RSS 1887.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2103.7 MB, gateway 1887.1 MB, command-tree 734.8 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 22ms | 1857.8 MB | 2819.4 MB | n/a | n/a | gateway peak RSS 1857.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2075.4 MB, gateway 1857.8 MB, command-tree 716.1 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1856.3 MB | 2740.9 MB | n/a | n/a | gateway peak RSS 1856.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2073.9 MB, gateway 1856.3 MB, command-tree 692 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1773 MB | 8243ms | 9174ms | agent-process peak RSS 1517.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1701.4 MB, agent-process 1517.4 MB, status-cli 981.5 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1980.9 MB | 7465ms | 8267ms | agent-process peak RSS 1722 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1908.7 MB, agent-process 1722 MB, status-cli 800.8 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1812.5 MB | 7584ms | 8132ms | agent-process peak RSS 1558.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1741.7 MB, agent-process 1558.2 MB, status-cli 1014.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2103.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 287.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1908.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 249.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1887.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 268.7% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1722 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 235.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1014.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179.9% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 634.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 146.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 239.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.6% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 367.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 144.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-gateway-performance-man-005107f3-kova-261023-052457-3edc02
Measurements:
- startup: listening 2ms; health 298ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 296ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 2171ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1887.1 MB; tracked total 2883.1 MB; max CPU 265.3%; samples 41; roles gateway-tree 2103.7MB/285.9%, gateway 1887.1MB/265.3%, command-tree 734.8MB/144.8%, uncategorized 634.2MB/145.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2539.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1887.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2103.7 MB, gateway 1887.1 MB, command-tree 734.8 MB
  - gateway-tree peak RSS 2103.7 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-gateway-performance-man-1e8be6a8-kova-261023-052457-3edc02
Measurements:
- startup: listening 0ms; health 22ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 22ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 124ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1857.8 MB; tracked total 2819.4 MB; max CPU 268.7%; samples 40; roles gateway-tree 2075.4MB/282.7%, gateway 1857.8MB/268.7%, command-tree 716.1MB/151.8%, status-cli 716.1MB/151.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2693.71ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1857.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2075.4 MB, gateway 1857.8 MB, command-tree 716.1 MB
  - gateway-tree peak RSS 2075.4 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 520ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-gateway-performance-man-958fde53-kova-261023-052457-3edc02
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 163ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1856.3 MB; tracked total 2740.9 MB; max CPU 268.3%; samples 38; roles gateway-tree 2073.9MB/287.3%, gateway 1856.3MB/268.3%, command-tree 692MB/145.8%, status-cli 692MB/145.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2863.62ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1856.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2073.9 MB, gateway 1856.3 MB, command-tree 692 MB
  - gateway-tree peak RSS 2073.9 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 517ms

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-8e2a29af-kova-261023-052457-3edc02
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1517.4 MB; tracked total 1773 MB; max CPU 223.6%; samples 29; roles command-tree 1701.4MB/246.3%, agent-process 1517.4MB/223.6%, status-cli 981.5MB/173.8%, agent-cli 186.5MB/155.7%
- agent: turn 9174ms; cold/warm 8243ms/9174ms; cold-warm delta 0ms; pre-provider 8897ms; provider 1ms; metadata scans 8 (251.08ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9127.45ms; max 9174ms; pre-provider p95 8845.85ms
- agent CLI attribution: cold known 5043ms / unattributed 2831ms; warm known 6278ms / unattributed 2619ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2024.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1517.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1701.4 MB, agent-process 1517.4 MB, status-cli 981.5 MB
  - command-tree peak RSS 1701.4 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 8243ms; pre-provider 7874ms; provider 3ms; post-provider 366ms; response true
    - active window: metadata scans 4 (125.08ms total, max 61.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7874ms; provider 3ms; post-provider 366ms; unknown 3032.37ms; source agent.prepare 4458.44ms; plugins.metadata.scan 383.19ms
  - warm: total 9174ms; pre-provider 8897ms; provider 1ms; post-provider 276ms; response true
    - active window: metadata scans 4 (126ms total, max 76.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8897ms; provider 1ms; post-provider 276ms; unknown 4055.37ms; source agent.prepare 4458.44ms; plugins.metadata.scan 383.19ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7874 ms | 5043 ms | 2831 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-8e2a29af-kova-261023-052457-3edc02/openclaw/timeline.jsonl |
  | warm | 8897 ms | 6278 ms | 2619 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-8e2a29af-kova-261023-052457-3edc02/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2259 ms | 758 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2038 ms | 1084 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2037 ms | 1040 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 174 ms | 174 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 126 ms | 61 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3141 ms | 2024 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2421 ms | 975 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2252 ms | 736 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 173 ms | 173 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 126 ms | 77 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-2ab680e0-kova-261023-052457-3edc02
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1722 MB; tracked total 1980.9 MB; max CPU 235.4%; samples 27; roles command-tree 1908.7MB/249.2%, agent-process 1722MB/235.4%, status-cli 800.8MB/174.2%, agent-cli 186.7MB/100.3%
- agent: turn 8267ms; cold/warm 7465ms/8267ms; cold-warm delta 0ms; pre-provider 7996ms; provider 1ms; metadata scans 8 (206.98ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8226.9ms; max 8267ms; pre-provider p95 7956.3ms
- agent CLI attribution: cold known 4560ms / unattributed 2642ms; warm known 5726ms / unattributed 2270ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1823.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1722 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1908.7 MB, agent-process 1722 MB, status-cli 800.8 MB
  - command-tree peak RSS 1908.7 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7465ms; pre-provider 7202ms; provider 2ms; post-provider 261ms; response true
    - active window: metadata scans 4 (104.63ms total, max 57.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7202ms; provider 2ms; post-provider 261ms; unknown 2666.46ms; source agent.prepare 4204.83ms; plugins.metadata.scan 330.71ms
  - warm: total 8267ms; pre-provider 7996ms; provider 1ms; post-provider 270ms; response true
    - active window: metadata scans 4 (102.35ms total, max 53.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7996ms; provider 1ms; post-provider 270ms; unknown 3460.46ms; source agent.prepare 4204.83ms; plugins.metadata.scan 330.71ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7202 ms | 4560 ms | 2642 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-2ab680e0-kova-261023-052457-3edc02/openclaw/timeline.jsonl |
  | warm | 7996 ms | 5726 ms | 2270 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-2ab680e0-kova-261023-052457-3edc02/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2099 ms | 742 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1834 ms | 964 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1821 ms | 945 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 149 ms | 149 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 104 ms | 57 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2811 ms | 1823 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2373 ms | 971 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1968 ms | 636 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 152 ms | 152 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 101 ms | 54 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-67b331a3-kova-261023-052457-3edc02
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1558.2 MB; tracked total 1812.5 MB; max CPU 235.4%; samples 27; roles command-tree 1741.7MB/249.3%, agent-process 1558.2MB/235.4%, status-cli 1014.2MB/179.9%, agent-cli 239.5MB/160.6%
- agent: turn 8132ms; cold/warm 7584ms/8132ms; cold-warm delta 0ms; pre-provider 7826ms; provider 0ms; metadata scans 8 (221.12ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8104.6ms; max 8132ms; pre-provider p95 7798.35ms
- agent CLI attribution: cold known 4660ms / unattributed 2613ms; warm known 5579ms / unattributed 2247ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1733.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1558.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1741.7 MB, agent-process 1558.2 MB, status-cli 1014.2 MB
  - command-tree peak RSS 1741.7 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 7584ms; pre-provider 7273ms; provider 3ms; post-provider 308ms; response true
    - active window: metadata scans 4 (112.68ms total, max 60.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7273ms; provider 3ms; post-provider 308ms; unknown 2866.61ms; source agent.prepare 4063.11ms; plugins.metadata.scan 343.28ms
  - warm: total 8132ms; pre-provider 7826ms; provider 0ms; post-provider 306ms; response true
    - active window: metadata scans 4 (108.44ms total, max 63.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7826ms; provider 0ms; post-provider 306ms; unknown 3419.61ms; source agent.prepare 4063.11ms; plugins.metadata.scan 343.28ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7273 ms | 4660 ms | 2613 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-67b331a3-kova-261023-052457-3edc02/openclaw/timeline.jsonl |
  | warm | 7826 ms | 5579 ms | 2247 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-67b331a3-kova-261023-052457-3edc02/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2133 ms | 745 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1921 ms | 972 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1852 ms | 923 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 156 ms | 156 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 60 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2815 ms | 1733 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2212 ms | 928 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1860 ms | 607 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 150 ms | 150 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 109 ms | 63 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261023-052457-3edc02-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261023-052457-3edc02-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261023-052457-3edc02-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-gateway-performance-man-005107f3-kova-261023-052457-3edc02
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-gateway-performance-man-1e8be6a8-kova-261023-052457-3edc02
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-gateway-performance-man-958fde53-kova-261023-052457-3edc02
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-8e2a29af-kova-261023-052457-3edc02
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-2ab680e0-kova-261023-052457-3edc02
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261023-052457-3edc02/kova-agent-cold-warm-message-67b331a3-kova-261023-052457-3edc02

## Target Cleanup

- Runtime: `kova-local-mvkizyte-3ee-284dbe08`
- Result: removed
- Duration: 523ms

