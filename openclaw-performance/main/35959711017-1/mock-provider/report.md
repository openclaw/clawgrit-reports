# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway-tree peak RSS 1314.2 MB exceeded threshold 1200 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway-tree peak RSS 1314.2 MB exceeded threshold 1200 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 6 (FAIL:3, PASS:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260924-052457-71ef7e` |
| Generated | 2026-09-24T05:29:10.900Z |
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
| FAIL | 3 |
| PASS | 3 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1314.2 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 10 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[249.7%, 289.7%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1291.4 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[249.7%, 342.4%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1283.7 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 162 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[191.3%, 361.8%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 162 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 10ms | 1122.6MB | n/a | 203.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 220.7% | 4917ms | 5970ms | 4737ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 10ms | 1145.6 MB | 1803.5 MB | n/a | n/a | gateway-tree peak RSS 1314.2 MB exceeded threshold 1200 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1122.6 MB | 1713.1 MB | n/a | n/a | gateway max CPU interval \[249.7%, 289.7%\] crosses threshold 250%; CPU measurement is inconclusive |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 162ms | 1115 MB | 1699.4 MB | n/a | n/a | gateway-tree peak RSS 1283.7 MB exceeded threshold 1200 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1070.1 MB | 4871ms | 5892ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1120.3 MB | 5343ms | 5970ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1045 MB | 4917ms | 6046ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1314.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 361.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1145.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 289.7% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1048.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 230.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 954.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 221.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 577.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 216.8% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 254.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 221.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 94.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 80.4% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-gateway-performance-man-005107f3-kova-260924-052457-71ef7e
Measurements:
- startup: listening 1ms; health 10ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 9ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 9ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1145.6 MB; tracked total 1803.5 MB; max CPU 196%; samples 26; roles gateway-tree 1314.2MB/215.7%, gateway 1145.6MB/196%, command-tree 417.3MB/155.9%, status-cli 417.3MB/155.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2467.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1314.2 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-gateway-performance-man-1e8be6a8-kova-260924-052457-71ef7e
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 2
- health: startup p95 2ms; post-ready p95 3ms; failures 0; final failures 0; slowest post-ready/api-latency 3ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1122.6 MB; tracked total 1713.1 MB; max CPU 289.7%; samples 26; roles gateway-tree 1291.4MB/342.4%, gateway 1122.6MB/289.7%, command-tree 440.1MB/162.3%, status-cli 440.1MB/162.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2500.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU interval \[249.7%, 289.7%\] crosses threshold 250%; CPU measurement is inconclusive
  - gateway-tree peak RSS 1291.4 MB exceeded threshold 1200 MB
  - gateway-tree max CPU interval \[249.7%, 342.4%\] crosses threshold 300%; CPU measurement is inconclusive

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-gateway-performance-man-958fde53-kova-260924-052457-71ef7e
Measurements:
- startup: listening 1ms; health 162ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 161ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 264ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1115 MB; tracked total 1699.4 MB; max CPU 203.4%; samples 26; roles gateway-tree 1283.7MB/361.8%, gateway 1115MB/203.4%, uncategorized 254.8MB/221.1%, command-tree 443MB/148.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2486.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1283.7 MB exceeded threshold 1200 MB
  - gateway-tree max CPU interval \[191.3%, 361.8%\] crosses threshold 300%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-8e2a29af-kova-260924-052457-71ef7e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 905.3 MB; tracked total 1070.1 MB; max CPU 220.7%; samples 17; roles command-tree 999.1MB/230.9%, agent-process 905.3MB/220.7%, status-cli 511MB/216.8%, agent-cli 94.2MB/148.1%
- agent: turn 5892ms; cold/warm 4871ms/5892ms; cold-warm delta 0ms; pre-provider 5608ms; provider 1ms; metadata scans 16 (588.39ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5840.95ms; max 5892ms; pre-provider p95 5562ms
- agent CLI attribution: cold known 2776ms / unattributed 1912ms; warm known 3740ms / unattributed 1868ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1989.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4871ms; pre-provider 4688ms; provider 2ms; post-provider 181ms; response true
    - active window: metadata scans 9 (332.73ms total, max 70.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4688ms; provider 2ms; post-provider 181ms; unknown 2746.05ms; source agent.prepare 1216.78ms; plugins.metadata.scan 725.17ms
  - warm: total 5892ms; pre-provider 5608ms; provider 1ms; post-provider 283ms; response true
    - active window: metadata scans 7 (255.66ms total, max 84.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5608ms; provider 1ms; post-provider 283ms; unknown 3666.05ms; source agent.prepare 1216.78ms; plugins.metadata.scan 725.17ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4688 ms | 2776 ms | 1912 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-8e2a29af-kova-260924-052457-71ef7e/openclaw/timeline.jsonl |
  | warm | 5608 ms | 3740 ms | 1868 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-8e2a29af-kova-260924-052457-71ef7e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x37 | 37 | 0 | 3412 ms | 1196 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 639 ms | 231 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 459 ms | 194 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 333 ms | 71 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 41 ms | 41 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 3767 ms | 1990 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 742 ms | 394 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 577 ms | 265 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 256 ms | 84 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-2ab680e0-kova-260924-052457-71ef7e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 954.8 MB; tracked total 1120.3 MB; max CPU 221.4%; samples 18; roles command-tree 1048.7MB/230.9%, agent-process 954.8MB/221.4%, status-cli 519.7MB/203.1%, agent-cli 93.9MB/126.5%
- agent: turn 5970ms; cold/warm 5343ms/5970ms; cold-warm delta 0ms; pre-provider 5721ms; provider 1ms; metadata scans 16 (587.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5938.65ms; max 5970ms; pre-provider p95 5692.25ms
- agent CLI attribution: cold known 3078ms / unattributed 2068ms; warm known 3889ms / unattributed 1832ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2144.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5343ms; pre-provider 5146ms; provider 2ms; post-provider 195ms; response true
    - active window: metadata scans 9 (328.29ms total, max 63.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5146ms; provider 2ms; post-provider 195ms; unknown 3208.85ms; source agent.prepare 1215.5ms; plugins.metadata.scan 721.65ms
  - warm: total 5970ms; pre-provider 5721ms; provider 1ms; post-provider 248ms; response true
    - active window: metadata scans 7 (259.55ms total, max 65.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5721ms; provider 1ms; post-provider 248ms; unknown 3783.85ms; source agent.prepare 1215.5ms; plugins.metadata.scan 721.65ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5146 ms | 3078 ms | 2068 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-2ab680e0-kova-260924-052457-71ef7e/openclaw/timeline.jsonl |
  | warm | 5721 ms | 3889 ms | 1832 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-2ab680e0-kova-260924-052457-71ef7e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 3588 ms | 1248 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 736 ms | 227 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 582 ms | 270 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` | 9 | 0 | 326 ms | 63 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x8 | 8 | 0 | 22 ms | 8 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 4129 ms | 2145 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 815 ms | 414 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 483 ms | 212 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 261 ms | 65 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-67b331a3-kova-260924-052457-71ef7e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 879.9 MB; tracked total 1045 MB; max CPU 213.1%; samples 17; roles command-tree 973.4MB/223%, agent-process 879.9MB/213.1%, status-cli 577.7MB/188.5%, agent-cli 93.6MB/155%
- agent: turn 6046ms; cold/warm 4917ms/6046ms; cold-warm delta 0ms; pre-provider 5757ms; provider 1ms; metadata scans 16 (545.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5989.55ms; max 6046ms; pre-provider p95 5706ms
- agent CLI attribution: cold known 2678ms / unattributed 2059ms; warm known 3832ms / unattributed 1925ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2099.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4917ms; pre-provider 4737ms; provider 2ms; post-provider 178ms; response true
    - active window: metadata scans 9 (305.79ms total, max 61.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4737ms; provider 2ms; post-provider 178ms; unknown 2904.09ms; source agent.prepare 1138.07ms; plugins.metadata.scan 694.84ms
  - warm: total 6046ms; pre-provider 5757ms; provider 1ms; post-provider 288ms; response true
    - active window: metadata scans 7 (239.99ms total, max 62.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5757ms; provider 1ms; post-provider 288ms; unknown 3924.09ms; source agent.prepare 1138.07ms; plugins.metadata.scan 694.84ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4737 ms | 2678 ms | 2059 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-67b331a3-kova-260924-052457-71ef7e/openclaw/timeline.jsonl |
  | warm | 5757 ms | 3832 ms | 1925 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-67b331a3-kova-260924-052457-71ef7e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 3153 ms | 1127 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 637 ms | 226 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 459 ms | 195 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 305 ms | 62 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 3956 ms | 2099 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 810 ms | 420 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 502 ms | 219 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 239 ms | 63 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260924-052457-71ef7e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260924-052457-71ef7e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260924-052457-71ef7e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-gateway-performance-man-005107f3-kova-260924-052457-71ef7e
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-gateway-performance-man-1e8be6a8-kova-260924-052457-71ef7e
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-gateway-performance-man-958fde53-kova-260924-052457-71ef7e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-8e2a29af-kova-260924-052457-71ef7e
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-2ab680e0-kova-260924-052457-71ef7e
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260924-052457-71ef7e/kova-agent-cold-warm-message-67b331a3-kova-260924-052457-71ef7e

## Target Cleanup

- Runtime: `kova-local-muf38a28-3qe-6684d16d`
- Result: removed
- Duration: 547ms

