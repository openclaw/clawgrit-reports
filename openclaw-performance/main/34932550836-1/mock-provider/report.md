# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[155.7%, 329.8%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[155.7%, 329.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 6 (BLOCKED:1, PASS:5) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260915-052542-a864be` |
| Generated | 2026-09-15T05:28:51.778Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[155.7%, 329.8%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 33 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[155.7%, 329.8%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 33 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | BLOCKED:1, PASS:2 | 33ms | 1000.3MB | n/a | 165.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.9% | 2423ms | 2562ms | 2303ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 33ms | 990.7 MB | 1466.5 MB | n/a | n/a | gateway max CPU interval \[155.7%, 329.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 36ms | 1000.3 MB | 1400.9 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 29ms | 1005.8 MB | 1466.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 764.7 MB | 2423ms | 2522ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 761.3 MB | 2488ms | 2562ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 765.5 MB | 2422ms | 2579ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 1005.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 329.8% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 1005.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 329.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 694.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 608.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 116.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 463.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.7% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 179.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 90% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 140.3% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-gateway-performance-man-005107f3-kova-260915-052542-a864be
Measurements:
- startup: listening 1ms; health 33ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 32ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 102ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 990.7 MB; tracked total 1466.5 MB; max CPU 329.8%; samples 24; roles gateway 990.7MB/329.8%, gateway-tree 990.7MB/329.8%, command-tree 408.9MB/136.4%, status-cli 408.9MB/136.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 3107.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU interval \[155.7%, 329.8%\] crosses threshold 250%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[155.7%, 329.8%\] crosses threshold 300%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-8e2a29af-kova-260915-052542-a864be
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 607.8 MB; tracked total 764.7 MB; max CPU 155.9%; samples 11; roles command-tree 693.4MB/155.9%, agent-cli 86MB/155.9%, agent-process 607.8MB/155.9%, status-cli 463.4MB/153.7%
- agent: turn 2522ms; cold/warm 2423ms/2522ms; cold-warm delta 0ms; pre-provider 2425ms; provider 1ms; metadata scans 8 (229.51ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2517.05ms; max 2522ms; pre-provider p95 2418.9ms
- agent CLI attribution: cold known 1692ms / unattributed 611ms; warm known 1610ms / unattributed 815ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 807.49ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2423ms; pre-provider 2303ms; provider 3ms; post-provider 117ms; response true
    - active window: metadata scans 6 (167.54ms total, max 47.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2303ms; provider 3ms; post-provider 117ms; unknown 1651.89ms; source plugins.metadata.scan 336.79ms; agent.prepare 314.32ms
  - warm: total 2522ms; pre-provider 2425ms; provider 1ms; post-provider 96ms; response true
    - active window: metadata scans 2 (61.97ms total, max 46.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2425ms; provider 1ms; post-provider 96ms; unknown 1773.89ms; source plugins.metadata.scan 336.79ms; agent.prepare 314.32ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2303 ms | 1692 ms | 611 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-8e2a29af-kova-260915-052542-a864be/openclaw/timeline.jsonl |
  | warm | 2425 ms | 1610 ms | 815 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-8e2a29af-kova-260915-052542-a864be/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 2354 ms | 807 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 332 ms | 132 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 168 ms | 47 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 157 ms | 34 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1766 ms | 467 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 412 ms | 214 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 158 ms | 44 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 62 ms | 47 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-2ab680e0-kova-260915-052542-a864be
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 604.2 MB; tracked total 761.3 MB; max CPU 148.8%; samples 11; roles command-tree 689.9MB/158.8%, agent-process 604.2MB/148.8%, status-cli 450.2MB/152.5%, agent-cli 86.1MB/145.9%
- agent: turn 2562ms; cold/warm 2488ms/2562ms; cold-warm delta 0ms; pre-provider 2470ms; provider 1ms; metadata scans 8 (244.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2558.3ms; max 2562ms; pre-provider p95 2464ms
- agent CLI attribution: cold known 1713ms / unattributed 637ms; warm known 1640ms / unattributed 830ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 828.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2488ms; pre-provider 2350ms; provider 6ms; post-provider 132ms; response true
    - active window: metadata scans 6 (176.44ms total, max 51.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2350ms; provider 6ms; post-provider 132ms; unknown 1688.06ms; source plugins.metadata.scan 356.38ms; agent.prepare 305.56ms
  - warm: total 2562ms; pre-provider 2470ms; provider 1ms; post-provider 91ms; response true
    - active window: metadata scans 2 (67.65ms total, max 51.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2470ms; provider 1ms; post-provider 91ms; unknown 1808.06ms; source plugins.metadata.scan 356.38ms; agent.prepare 305.56ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2350 ms | 1713 ms | 637 ms | 6 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-2ab680e0-kova-260915-052542-a864be/openclaw/timeline.jsonl |
  | warm | 2470 ms | 1640 ms | 830 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-2ab680e0-kova-260915-052542-a864be/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 2380 ms | 829 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 323 ms | 137 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 178 ms | 51 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 151 ms | 32 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1805 ms | 492 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 415 ms | 213 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 153 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 68 ms | 51 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 41 ms | 41 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-67b331a3-kova-260915-052542-a864be
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 608.1 MB; tracked total 765.5 MB; max CPU 157.1%; samples 11; roles command-tree 694.1MB/157.1%, agent-cli 116.7MB/157.1%, agent-process 608.1MB/157.1%, status-cli 450.8MB/153.3%
- agent: turn 2579ms; cold/warm 2422ms/2579ms; cold-warm delta 0ms; pre-provider 2487ms; provider 1ms; metadata scans 8 (235.01ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2571.15ms; max 2579ms; pre-provider p95 2477.15ms
- agent CLI attribution: cold known 1670ms / unattributed 620ms; warm known 1656ms / unattributed 831ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 794.01ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2422ms; pre-provider 2290ms; provider 3ms; post-provider 129ms; response true
    - active window: metadata scans 6 (167.08ms total, max 48.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2290ms; provider 3ms; post-provider 129ms; unknown 1636.38ms; source plugins.metadata.scan 353.56ms; agent.prepare 300.06ms
  - warm: total 2579ms; pre-provider 2487ms; provider 1ms; post-provider 91ms; response true
    - active window: metadata scans 2 (67.93ms total, max 48.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2487ms; provider 1ms; post-provider 91ms; unknown 1833.38ms; source plugins.metadata.scan 353.56ms; agent.prepare 300.06ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2290 ms | 1670 ms | 620 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-67b331a3-kova-260915-052542-a864be/openclaw/timeline.jsonl |
  | warm | 2487 ms | 1656 ms | 831 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-67b331a3-kova-260915-052542-a864be/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 2313 ms | 794 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 324 ms | 138 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 169 ms | 49 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 147 ms | 31 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1837 ms | 509 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 422 ms | 202 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 154 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 68 ms | 49 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260915-052542-a864be-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260915-052542-a864be-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260915-052542-a864be-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-gateway-performance-man-005107f3-kova-260915-052542-a864be
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-gateway-performance-man-1e8be6a8-kova-260915-052542-a864be
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-gateway-performance-man-958fde53-kova-260915-052542-a864be
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-8e2a29af-kova-260915-052542-a864be
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-2ab680e0-kova-260915-052542-a864be
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260915-052542-a864be/kova-agent-cold-warm-message-67b331a3-kova-260915-052542-a864be

## Target Cleanup

- Runtime: `kova-local-mu28ak3f-414-0ff1f727`
- Result: removed
- Duration: 470ms

