# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[138.8%, 544.9%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[138.8%, 544.9%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 6 (BLOCKED:1, PASS:5) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260912-052219-863d8c` |
| Generated | 2026-09-12T05:25:34.867Z |
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
| BLOCKED | 1 |
| PASS | 5 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[138.8%, 544.9%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 92 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 544.9%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 92 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[138.8%, 544.9%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 92 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | BLOCKED:1, PASS:2 | 2ms | 665.5MB | n/a | 181% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 164% | 2304ms | 2365ms | 2200ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 92ms | 662.2 MB | 1140.6 MB | n/a | n/a | gateway max CPU interval \[138.8%, 544.9%\] crosses threshold 250%; CPU measurement is inconclusive |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 667.1 MB | 1112.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 665.5 MB | 1113.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 725.6 MB | 2311ms | 2358ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 695.9 MB | 2132ms | 2406ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 725.2 MB | 2304ms | 2365ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 667.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 544.9% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 667.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 544.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 654.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 408.7% (scenario gateway-performance/many-bundled-plugins)
- mock-provider: RSS 75.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 544.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 574.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 487.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.1% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 75.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 408.7% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 81.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-gateway-performance-man-005107f3-kova-260912-052219-863d8c
Measurements:
- startup: listening 0ms; health 92ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 92ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 92ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 662.2 MB; tracked total 1140.6 MB; max CPU 544.9%; samples 29; roles gateway 662.2MB/544.9%, gateway-tree 661.1MB/544.9%, command-tree 408.9MB/408.7%, mock-provider 72.2MB/544.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 4185.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU interval \[138.8%, 544.9%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 544.9%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[138.8%, 544.9%\] crosses threshold 300%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-8e2a29af-kova-260912-052219-863d8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 574.9 MB; tracked total 725.6 MB; max CPU 169.9%; samples 11; roles command-tree 654.3MB/179.5%, agent-process 574.9MB/169.9%, status-cli 487.2MB/149.1%, agent-cli 79.4MB/114.7%
- agent: turn 2358ms; cold/warm 2311ms/2358ms; cold-warm delta 0ms; pre-provider 2261ms; provider 1ms; metadata scans 7 (298.66ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2355.65ms; max 2358ms; pre-provider p95 2258.3ms
- agent CLI attribution: cold known 1567ms / unattributed 640ms; warm known 1404ms / unattributed 857ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 499.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2311ms; pre-provider 2207ms; provider 3ms; post-provider 101ms; response true
    - active window: metadata scans 5 (168.99ms total, max 61.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2207ms; provider 3ms; post-provider 101ms; unknown 1395.46ms; source plugins.metadata.scan 418.49ms; agent.prepare 393.05ms
  - warm: total 2358ms; pre-provider 2261ms; provider 1ms; post-provider 96ms; response true
    - active window: metadata scans 2 (129.67ms total, max 113.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2261ms; provider 1ms; post-provider 96ms; unknown 1449.46ms; source plugins.metadata.scan 418.49ms; agent.prepare 393.05ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2207 ms | 1567 ms | 640 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-8e2a29af-kova-260912-052219-863d8c/openclaw/timeline.jsonl |
  | warm | 2261 ms | 1404 ms | 857 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-8e2a29af-kova-260912-052219-863d8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 1658 ms | 499 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 359 ms | 135 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 212 ms | 62 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 169 ms | 61 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1047 ms | 403 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 380 ms | 164 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 182 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 129 ms | 114 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 63 ms | 63 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-2ab680e0-kova-260912-052219-863d8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 543.2 MB; tracked total 695.9 MB; max CPU 159%; samples 11; roles command-tree 623.1MB/159%, agent-cli 81.9MB/159%, agent-process 543.2MB/159%, status-cli 429.1MB/150.6%
- agent: turn 2406ms; cold/warm 2132ms/2406ms; cold-warm delta 0ms; pre-provider 2311ms; provider 1ms; metadata scans 7 (309.75ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2392.3ms; max 2406ms; pre-provider p95 2295.35ms
- agent CLI attribution: cold known 1396ms / unattributed 602ms; warm known 1508ms / unattributed 803ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 457.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2132ms; pre-provider 1998ms; provider 2ms; post-provider 132ms; response true
    - active window: metadata scans 5 (164.99ms total, max 62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1998ms; provider 2ms; post-provider 132ms; unknown 1215.68ms; source plugins.metadata.scan 418.16ms; agent.prepare 364.16ms
  - warm: total 2406ms; pre-provider 2311ms; provider 1ms; post-provider 94ms; response true
    - active window: metadata scans 2 (144.76ms total, max 126.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2311ms; provider 1ms; post-provider 94ms; unknown 1528.68ms; source plugins.metadata.scan 418.16ms; agent.prepare 364.16ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1998 ms | 1396 ms | 602 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-2ab680e0-kova-260912-052219-863d8c/openclaw/timeline.jsonl |
  | warm | 2311 ms | 1508 ms | 803 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-2ab680e0-kova-260912-052219-863d8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1456 ms | 434 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 327 ms | 127 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 188 ms | 57 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 165 ms | 63 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1163 ms | 457 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 422 ms | 177 ms |
  | warm | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 175 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 145 ms | 127 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 63 ms | 63 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-67b331a3-kova-260912-052219-863d8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 574.4 MB; tracked total 725.2 MB; max CPU 164%; samples 11; roles command-tree 653.8MB/173.9%, agent-process 574.4MB/164%, status-cli 434.4MB/152.1%, agent-cli 79.4MB/111.7%
- agent: turn 2365ms; cold/warm 2304ms/2365ms; cold-warm delta 0ms; pre-provider 2267ms; provider 1ms; metadata scans 7 (318.28ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2361.95ms; max 2365ms; pre-provider p95 2263.65ms
- agent CLI attribution: cold known 1525ms / unattributed 675ms; warm known 1460ms / unattributed 807ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 479.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2304ms; pre-provider 2200ms; provider 3ms; post-provider 101ms; response true
    - active window: metadata scans 5 (191.32ms total, max 79.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2200ms; provider 3ms; post-provider 101ms; unknown 1352.17ms; source plugins.metadata.scan 456.64ms; agent.prepare 391.19ms
  - warm: total 2365ms; pre-provider 2267ms; provider 1ms; post-provider 97ms; response true
    - active window: metadata scans 2 (126.96ms total, max 108.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2267ms; provider 1ms; post-provider 97ms; unknown 1419.17ms; source plugins.metadata.scan 456.64ms; agent.prepare 391.19ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2200 ms | 1525 ms | 675 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-67b331a3-kova-260912-052219-863d8c/openclaw/timeline.jsonl |
  | warm | 2267 ms | 1460 ms | 807 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-67b331a3-kova-260912-052219-863d8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 1610 ms | 479 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 334 ms | 132 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 212 ms | 67 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 193 ms | 80 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 73 ms | 73 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1103 ms | 428 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 418 ms | 187 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 180 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 126 ms | 108 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260912-052219-863d8c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260912-052219-863d8c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260912-052219-863d8c-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-gateway-performance-man-005107f3-kova-260912-052219-863d8c
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-gateway-performance-man-1e8be6a8-kova-260912-052219-863d8c
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-gateway-performance-man-958fde53-kova-260912-052219-863d8c
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-8e2a29af-kova-260912-052219-863d8c
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-2ab680e0-kova-260912-052219-863d8c
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260912-052219-863d8c/kova-agent-cold-warm-message-67b331a3-kova-260912-052219-863d8c

## Target Cleanup

- Runtime: `kova-local-mtxxuo0m-417-42500b98`
- Result: removed
- Duration: 511ms

