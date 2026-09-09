# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway max CPU at least 336.7% exceeded threshold 250% (upper bound 343.2%)

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway max CPU at least 336.7% exceeded threshold 250% (upper bound 343.2%) |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 6 (PASS:5, FAIL:1) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260909-052400-37aaef` |
| Generated | 2026-09-09T05:26:51.303Z |
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
| PASS | 5 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU at least 336.7% exceeded threshold 250% (upper bound 343.2%) | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU at least 336.7% exceeded threshold 300% (upper bound 343.2%) | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:2, FAIL:1 | 3ms | 615.9MB | n/a | 137.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.1% | 1964ms | 2153ms | 1875ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 25ms | 611.5 MB | 1052.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2ms | 615.9 MB | 1067.5 MB | n/a | n/a |  |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 3ms | 618.8 MB | 1111.8 MB | n/a | n/a | gateway max CPU at least 336.7% exceeded threshold 250% (upper bound 343.2%) |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 715.9 MB | 1964ms | 2153ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 576.4 MB | 1925ms | 2051ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 692.7 MB | 2189ms | 2275ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 640.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 618.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 343.2% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 618.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 343.2% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 79.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 561.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 501 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 137.9% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 145.4% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 76.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 114.4% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-gateway-performance-man-958fde53-kova-260909-052400-37aaef
Measurements:
- startup: listening 1ms; health 3ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 2ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 7ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 618.8 MB; tracked total 1111.8 MB; max CPU 343.2%; samples 22; roles gateway 618.8MB/343.2%, gateway-tree 618.8MB/343.2%, command-tree 423.1MB/145.4%, status-cli 423.1MB/134.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 2093.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU at least 336.7% exceeded threshold 250% (upper bound 343.2%)
  - gateway-tree max CPU at least 336.7% exceeded threshold 300% (upper bound 343.2%)

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-8e2a29af-kova-260909-052400-37aaef
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 561.5 MB; tracked total 715.9 MB; max CPU 149.5%; samples 10; roles command-tree 640.7MB/149.5%, agent-process 561.5MB/149.5%, status-cli 436.9MB/131.2%, agent-cli 79.2MB/136.4%
- agent: turn 2153ms; cold/warm 1964ms/2153ms; cold-warm delta 0ms; pre-provider 2058ms; provider 2ms; metadata scans 7 (324.12ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2143.55ms; max 2153ms; pre-provider p95 2048.85ms
- agent CLI attribution: cold known 1265ms / unattributed 610ms; warm known 1306ms / unattributed 752ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 519.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1964ms; pre-provider 1875ms; provider 3ms; post-provider 86ms; response true
    - active window: metadata scans 5 (161.35ms total, max 66.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1875ms; provider 3ms; post-provider 86ms; unknown 1167.99ms; source plugins.metadata.scan 451.51ms; agent.prepare 255.5ms
  - warm: total 2153ms; pre-provider 2058ms; provider 2ms; post-provider 93ms; response true
    - active window: metadata scans 2 (162.77ms total, max 146.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2058ms; provider 2ms; post-provider 93ms; unknown 1350.99ms; source plugins.metadata.scan 451.51ms; agent.prepare 255.5ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1875 ms | 1265 ms | 610 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-8e2a29af-kova-260909-052400-37aaef/openclaw/timeline.jsonl |
  | warm | 2058 ms | 1306 ms | 752 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-8e2a29af-kova-260909-052400-37aaef/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 1596 ms | 440 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 165 ms | 73 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 162 ms | 67 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 126 ms | 27 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 74 ms | 74 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1284 ms | 519 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 176 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 163 ms | 147 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 132 ms | 27 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 70 ms | 70 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-2ab680e0-kova-260909-052400-37aaef
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 394.5 MB; tracked total 576.4 MB; max CPU 157.4%; samples 9; roles command-tree 501MB/157.4%, agent-cli 79.3MB/157.4%, status-cli 501MB/131.4%, agent-process 394.5MB/157.4%
- agent: turn 2051ms; cold/warm 1925ms/2051ms; cold-warm delta 0ms; pre-provider 1964ms; provider 2ms; metadata scans 7 (294.81ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2044.7ms; max 2051ms; pre-provider p95 1956.45ms
- agent CLI attribution: cold known 1261ms / unattributed 552ms; warm known 1230ms / unattributed 734ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 499.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 1925ms; pre-provider 1813ms; provider 2ms; post-provider 110ms; response true
    - active window: metadata scans 5 (161.17ms total, max 63.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1813ms; provider 2ms; post-provider 110ms; unknown 1135.93ms; source plugins.metadata.scan 421.65ms; agent.prepare 255.42ms
  - warm: total 2051ms; pre-provider 1964ms; provider 2ms; post-provider 85ms; response true
    - active window: metadata scans 2 (133.64ms total, max 118.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1964ms; provider 2ms; post-provider 85ms; unknown 1286.93ms; source plugins.metadata.scan 421.65ms; agent.prepare 255.42ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1813 ms | 1261 ms | 552 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-2ab680e0-kova-260909-052400-37aaef/openclaw/timeline.jsonl |
  | warm | 1964 ms | 1230 ms | 734 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-2ab680e0-kova-260909-052400-37aaef/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1615 ms | 448 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 165 ms | 71 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 161 ms | 63 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 127 ms | 27 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 66 ms | 66 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1237 ms | 500 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 171 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 134 ms | 118 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 128 ms | 27 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-67b331a3-kova-260909-052400-37aaef
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 540.8 MB; tracked total 692.7 MB; max CPU 154.1%; samples 11; roles command-tree 619.9MB/154.1%, agent-cli 79.1MB/154.1%, agent-process 540.8MB/154.1%, status-cli 473.5MB/132.6%
- agent: turn 2275ms; cold/warm 2189ms/2275ms; cold-warm delta 0ms; pre-provider 2183ms; provider 1ms; metadata scans 7 (349.39ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2270.7ms; max 2275ms; pre-provider p95 2175.6ms
- agent CLI attribution: cold known 1424ms / unattributed 611ms; warm known 1362ms / unattributed 821ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 528.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2189ms; pre-provider 2035ms; provider 2ms; post-provider 152ms; response true
    - active window: metadata scans 5 (171.16ms total, max 63.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2035ms; provider 2ms; post-provider 152ms; unknown 1288.28ms; source plugins.metadata.scan 473.51ms; agent.prepare 273.21ms
  - warm: total 2275ms; pre-provider 2183ms; provider 1ms; post-provider 91ms; response true
    - active window: metadata scans 2 (178.23ms total, max 159.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2183ms; provider 1ms; post-provider 91ms; unknown 1436.28ms; source plugins.metadata.scan 473.51ms; agent.prepare 273.21ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2035 ms | 1424 ms | 611 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-67b331a3-kova-260909-052400-37aaef/openclaw/timeline.jsonl |
  | warm | 2183 ms | 1362 ms | 821 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-67b331a3-kova-260909-052400-37aaef/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1829 ms | 509 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 188 ms | 82 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 172 ms | 63 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 139 ms | 29 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 79 ms | 79 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1319 ms | 528 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 178 ms | 160 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 173 ms | 63 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 134 ms | 30 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 80 ms | 80 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260909-052400-37aaef-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260909-052400-37aaef-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260909-052400-37aaef-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-gateway-performance-man-005107f3-kova-260909-052400-37aaef
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-gateway-performance-man-1e8be6a8-kova-260909-052400-37aaef
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-gateway-performance-man-958fde53-kova-260909-052400-37aaef
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-8e2a29af-kova-260909-052400-37aaef
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-2ab680e0-kova-260909-052400-37aaef
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260909-052400-37aaef/kova-agent-cold-warm-message-67b331a3-kova-260909-052400-37aaef

## Target Cleanup

- Runtime: `kova-local-mttnl9pp-413-64eeb69c`
- Result: removed
- Duration: 503ms

