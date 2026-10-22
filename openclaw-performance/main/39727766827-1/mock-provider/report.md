# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1886.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2104.4 MB, gateway 1886.7 MB, command-tree 719.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1886.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2104.4 MB, gateway 1886.7 MB, command-tree 719.6 MB |
| Blocking findings | 18 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261022-052524-bf47d4` |
| Generated | 2026-10-22T05:49:12.939Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1886.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2104.4 MB, gateway 1886.7 MB, command-tree 719.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 85 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2104.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 85 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 85 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 489ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 85 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1849 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2065.5 MB, gateway 1849 MB, command-tree 805.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 135 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2065.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 135 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 135 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 503ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 135 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1917.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2134.3 MB, gateway 1917.4 MB, uncategorized 637.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 71 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2134.3 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 71 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 71 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 519ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 71 |
| info | Kova | report | 6 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 85ms | 1886.7MB | n/a | 267.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 228.8% | 8873ms | 9837ms | 8527ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 85ms | 1886.7 MB | 2873.6 MB | n/a | n/a | gateway peak RSS 1886.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2104.4 MB, gateway 1886.7 MB, command-tree 719.6 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 135ms | 1849 MB | 2942.8 MB | n/a | n/a | gateway peak RSS 1849 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2065.5 MB, gateway 1849 MB, command-tree 805.1 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 71ms | 1917.4 MB | 2725 MB | n/a | n/a | gateway peak RSS 1917.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2134.3 MB, gateway 1917.4 MB, uncategorized 637.9 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1834.6 MB | 9346ms | 9220ms | agent-process peak RSS 1579.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1763 MB, agent-process 1579.5 MB, status-cli 844.6 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1964.4 MB | 8873ms | 10251ms | agent-process peak RSS 1706 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1891.5 MB, agent-process 1706 MB, status-cli 1077.6 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1884.8 MB | 8814ms | 9837ms | agent-process peak RSS 1625.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1812.8 MB, agent-process 1625.8 MB, status-cli 848.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2134.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 288.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1917.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 271.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1891.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 258.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1706 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 244.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1077.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183.4% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 637.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 146.7% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 247.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 178.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 360.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 143.5% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-gateway-performance-man-005107f3-kova-261022-052524-bf47d4
Measurements:
- startup: listening 1ms; health 85ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 84ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 84ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1886.7 MB; tracked total 2873.6 MB; max CPU 267.9%; samples 40; roles gateway-tree 2104.4MB/288.8%, gateway 1886.7MB/267.9%, command-tree 719.6MB/142.9%, status-cli 719.6MB/141.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2443.61ms; embedded traces 0; liveness warnings 0; open spans 4 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1886.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2104.4 MB, gateway 1886.7 MB, command-tree 719.6 MB
  - gateway-tree peak RSS 2104.4 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 489ms

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-gateway-performance-man-1e8be6a8-kova-261022-052524-bf47d4
Measurements:
- startup: listening 0ms; health 135ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 135ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 171ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1849 MB; tracked total 2942.8 MB; max CPU 264.4%; samples 41; roles gateway-tree 2065.5MB/285%, gateway 1849MB/264.4%, command-tree 805.1MB/144.8%, uncategorized 621.3MB/146.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2575.37ms; embedded traces 0; liveness warnings 0; open spans 4 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1849 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2065.5 MB, gateway 1849 MB, command-tree 805.1 MB
  - gateway-tree peak RSS 2065.5 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 503ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-gateway-performance-man-958fde53-kova-261022-052524-bf47d4
Measurements:
- startup: listening 0ms; health 71ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 71ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 206ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1917.4 MB; tracked total 2725 MB; max CPU 271.9%; samples 40; roles gateway-tree 2134.3MB/285.8%, gateway 1917.4MB/271.9%, uncategorized 637.9MB/143.1%, command-tree 554.5MB/143.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2809.31ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1917.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2134.3 MB, gateway 1917.4 MB, uncategorized 637.9 MB
  - gateway-tree peak RSS 2134.3 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 519ms

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-8e2a29af-kova-261022-052524-bf47d4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1579.5 MB; tracked total 1834.6 MB; max CPU 228.8%; samples 31; roles command-tree 1763MB/252.8%, agent-process 1579.5MB/228.8%, status-cli 844.6MB/176.3%, agent-cli 186.1MB/43.4%
- agent: turn 9346ms; cold/warm 9346ms/9220ms; cold-warm delta 126ms; pre-provider 8982ms; provider 2ms; metadata scans 8 (288.95ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9339.7ms; max 9346ms; pre-provider p95 8977.9ms
- agent CLI attribution: cold known 5794ms / unattributed 3188ms; warm known 6346ms / unattributed 2554ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2096.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1579.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1763 MB, agent-process 1579.5 MB, status-cli 844.6 MB
  - command-tree peak RSS 1763 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 9346ms; pre-provider 8982ms; provider 2ms; post-provider 362ms; response true
    - active window: metadata scans 4 (160.7ms total, max 98.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8982ms; provider 2ms; post-provider 362ms; unknown 4074.98ms; source agent.prepare 4474.68ms; plugins.metadata.scan 432.34ms
  - warm: total 9220ms; pre-provider 8900ms; provider 1ms; post-provider 319ms; response true
    - active window: metadata scans 4 (128.25ms total, max 66.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8900ms; provider 1ms; post-provider 319ms; unknown 3992.98ms; source agent.prepare 4474.68ms; plugins.metadata.scan 432.34ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8982 ms | 5794 ms | 3188 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-8e2a29af-kova-261022-052524-bf47d4/openclaw/timeline.jsonl |
  | warm | 8900 ms | 6346 ms | 2554 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-8e2a29af-kova-261022-052524-bf47d4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2945 ms | 1064 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2334 ms | 1197 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2033 ms | 1121 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 221 ms | 221 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 161 ms | 99 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3247 ms | 2097 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2444 ms | 1011 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2145 ms | 704 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 182 ms | 182 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 128 ms | 66 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-2ab680e0-kova-261022-052524-bf47d4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1706 MB; tracked total 1964.4 MB; max CPU 244.5%; samples 31; roles command-tree 1891.5MB/258.7%, agent-process 1706MB/244.5%, status-cli 1077.6MB/183.4%, agent-cli 247.5MB/131%
- agent: turn 10251ms; cold/warm 8873ms/10251ms; cold-warm delta 0ms; pre-provider 9592ms; provider 1ms; metadata scans 11 (335.48ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10182.1ms; max 10251ms; pre-provider p95 9538.75ms
- agent CLI attribution: cold known 5499ms / unattributed 3028ms; warm known 6832ms / unattributed 2760ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2165.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1706 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1891.5 MB, agent-process 1706 MB, status-cli 1077.6 MB
  - command-tree peak RSS 1891.5 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 8873ms; pre-provider 8527ms; provider 2ms; post-provider 344ms; response true
    - active window: metadata scans 4 (141.64ms total, max 81.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8527ms; provider 2ms; post-provider 344ms; unknown 2983.41ms; source agent.prepare 5057.74ms; plugins.metadata.scan 485.85ms
  - warm: total 10251ms; pre-provider 9592ms; provider 1ms; post-provider 658ms; response true
    - active window: metadata scans 7 (193.84ms total, max 78.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9592ms; provider 1ms; post-provider 658ms; unknown 4048.41ms; source agent.prepare 5057.74ms; plugins.metadata.scan 485.85ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8527 ms | 5499 ms | 3028 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-2ab680e0-kova-261022-052524-bf47d4/openclaw/timeline.jsonl |
  | warm | 9592 ms | 6832 ms | 2760 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-2ab680e0-kova-261022-052524-bf47d4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2545 ms | 882 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2194 ms | 1152 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2184 ms | 1156 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 190 ms | 190 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 142 ms | 81 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3361 ms | 2165 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2867 ms | 1209 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2209 ms | 729 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 185 ms | 185 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 129 ms | 78 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-67b331a3-kova-261022-052524-bf47d4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1625.8 MB; tracked total 1884.8 MB; max CPU 219.7%; samples 30; roles command-tree 1812.8MB/234.4%, agent-process 1625.8MB/219.7%, status-cli 848.9MB/178%, agent-cli 187MB/178.9%
- agent: turn 9837ms; cold/warm 8814ms/9837ms; cold-warm delta 0ms; pre-provider 9080ms; provider 1ms; metadata scans 11 (325.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9785.85ms; max 9837ms; pre-provider p95 9049.8ms
- agent CLI attribution: cold known 5455ms / unattributed 3021ms; warm known 6402ms / unattributed 2678ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1992.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1625.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1812.8 MB, agent-process 1625.8 MB, status-cli 848.9 MB
  - command-tree peak RSS 1812.8 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 8814ms; pre-provider 8476ms; provider 2ms; post-provider 336ms; response true
    - active window: metadata scans 4 (132.89ms total, max 69.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8476ms; provider 2ms; post-provider 336ms; unknown 3364.42ms; source agent.prepare 4656.5ms; plugins.metadata.scan 455.08ms
  - warm: total 9837ms; pre-provider 9080ms; provider 1ms; post-provider 756ms; response true
    - active window: metadata scans 7 (192.6ms total, max 77.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9080ms; provider 1ms; post-provider 756ms; unknown 3968.42ms; source agent.prepare 4656.5ms; plugins.metadata.scan 455.08ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8476 ms | 5455 ms | 3021 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-67b331a3-kova-261022-052524-bf47d4/openclaw/timeline.jsonl |
  | warm | 9080 ms | 6402 ms | 2678 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-67b331a3-kova-261022-052524-bf47d4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2462 ms | 850 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2266 ms | 1149 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2116 ms | 1125 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 179 ms | 179 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 132 ms | 69 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3156 ms | 1992 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2539 ms | 1027 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2249 ms | 734 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 193 ms | 193 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 132 ms | 77 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261022-052524-bf47d4-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261022-052524-bf47d4-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261022-052524-bf47d4-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-gateway-performance-man-005107f3-kova-261022-052524-bf47d4
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-gateway-performance-man-1e8be6a8-kova-261022-052524-bf47d4
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-gateway-performance-man-958fde53-kova-261022-052524-bf47d4
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-8e2a29af-kova-261022-052524-bf47d4
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-2ab680e0-kova-261022-052524-bf47d4
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261022-052524-bf47d4/kova-agent-cold-warm-message-67b331a3-kova-261022-052524-bf47d4

## Target Cleanup

- Runtime: `kova-local-mvj3kpak-3ed-c46b00da`
- Result: removed
- Duration: 581ms

