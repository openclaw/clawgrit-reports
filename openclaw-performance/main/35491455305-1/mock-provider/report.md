# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway max CPU interval \[157.4%, 453.8%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway max CPU interval \[157.4%, 453.8%\] crosses threshold 250%; CPU measurement is inconclusive |
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
| Run ID | `kova-260920-052238-a40201` |
| Generated | 2026-09-20T05:26:35.528Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[157.4%, 453.8%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 352 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 226.9%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 352 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1278.8 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 352 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[162.4%, 907.5%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 352 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1279.3 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 314 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1262.1 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 335 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 335ms | 1112.3MB | n/a | 218.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 229.8% | 3986ms | 4560ms | 3786ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 352ms | 1112.5 MB | 1881.4 MB | n/a | n/a | gateway max CPU interval \[157.4%, 453.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 314ms | 1112.3 MB | 1876.7 MB | n/a | n/a | gateway-tree peak RSS 1279.3 MB exceeded threshold 1200 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 335ms | 1094.8 MB | 1865.7 MB | n/a | n/a | gateway-tree peak RSS 1262.1 MB exceeded threshold 1200 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1124.5 MB | 4221ms | 4743ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1068.3 MB | 3986ms | 4560ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1104.8 MB | 3490ms | 4403ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1279.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 907.5% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1112.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 453.8% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 180.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 623.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1051.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 240% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 957.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 239.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 718.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 167.5% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 171.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 239.7% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 74.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 226.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-gateway-performance-man-005107f3-kova-260920-052238-a40201
Measurements:
- startup: listening 2ms; health 352ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 350ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 350ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1112.5 MB; tracked total 1881.4 MB; max CPU 453.8%; samples 26; roles gateway-tree 1278.8MB/907.5%, gateway 1112.5MB/453.8%, uncategorized 180.2MB/623.9%, command-tree 532.2MB/170.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2632.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway max CPU interval \[157.4%, 453.8%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 226.9%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree peak RSS 1278.8 MB exceeded threshold 1200 MB
  - gateway-tree max CPU interval \[162.4%, 907.5%\] crosses threshold 300%; CPU measurement is inconclusive

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-gateway-performance-man-1e8be6a8-kova-260920-052238-a40201
Measurements:
- startup: listening 0ms; health 314ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 314ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 314ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1112.3 MB; tracked total 1876.7 MB; max CPU 218.8%; samples 26; roles gateway-tree 1279.3MB/255.3%, gateway 1112.3MB/218.8%, command-tree 528.4MB/161%, status-cli 528.4MB/161%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2709.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1279.3 MB exceeded threshold 1200 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-gateway-performance-man-958fde53-kova-260920-052238-a40201
Measurements:
- startup: listening 1ms; health 335ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 334ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 334ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1094.8 MB; tracked total 1865.7 MB; max CPU 163.8%; samples 25; roles gateway-tree 1262.1MB/182.5%, gateway 1094.8MB/163.8%, command-tree 533.5MB/167.5%, status-cli 533.5MB/167.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2956.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1262.1 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-8e2a29af-kova-260920-052238-a40201
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 957.6 MB; tracked total 1124.5 MB; max CPU 229.8%; samples 17; roles command-tree 1051.4MB/240%, agent-process 957.6MB/229.8%, status-cli 693.8MB/157.5%, agent-cli 94MB/147.5%
- agent: turn 4743ms; cold/warm 4221ms/4743ms; cold-warm delta 0ms; pre-provider 4352ms; provider 2ms; metadata scans 14 (488.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4716.9ms; max 4743ms; pre-provider p95 4323.7ms
- agent CLI attribution: cold known 2987ms / unattributed 799ms; warm known 3337ms / unattributed 1015ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1984.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4221ms; pre-provider 3786ms; provider 3ms; post-provider 432ms; response true
    - active window: metadata scans 8 (271.35ms total, max 60.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3786ms; provider 3ms; post-provider 432ms; unknown 2486.17ms; source agent.prepare 673.78ms; plugins.metadata.scan 626.05ms
  - warm: total 4743ms; pre-provider 4352ms; provider 2ms; post-provider 389ms; response true
    - active window: metadata scans 6 (217.19ms total, max 56.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4352ms; provider 2ms; post-provider 389ms; unknown 3052.17ms; source agent.prepare 673.78ms; plugins.metadata.scan 626.05ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3786 ms | 2987 ms | 799 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-8e2a29af-kova-260920-052238-a40201/openclaw/timeline.jsonl |
  | warm | 4352 ms | 3337 ms | 1015 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-8e2a29af-kova-260920-052238-a40201/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 4411 ms | 1683 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 451 ms | 204 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 352 ms | 181 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 271 ms | 60 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 54 ms | 54 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x33 | 33 | 0 | 4441 ms | 1984 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 587 ms | 344 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 321 ms | 134 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x5, `startup` | 6 | 0 | 217 ms | 57 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 56 ms | 56 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-2ab680e0-kova-260920-052238-a40201
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 902 MB; tracked total 1068.3 MB; max CPU 239.7%; samples 15; roles command-tree 995.6MB/239.7%, agent-cli 163MB/239.7%, agent-process 902MB/239.7%, status-cli 697.1MB/154.8%
- agent: turn 4560ms; cold/warm 3986ms/4560ms; cold-warm delta 0ms; pre-provider 4212ms; provider 1ms; metadata scans 14 (486.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4531.3ms; max 4560ms; pre-provider p95 4191.55ms
- agent CLI attribution: cold known 2911ms / unattributed 892ms; warm known 3248ms / unattributed 964ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1931.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3986ms; pre-provider 3803ms; provider 4ms; post-provider 179ms; response true
    - active window: metadata scans 8 (277.36ms total, max 64.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3803ms; provider 4ms; post-provider 179ms; unknown 2585ms; source agent.prepare 610.57ms; plugins.metadata.scan 607.43ms
  - warm: total 4560ms; pre-provider 4212ms; provider 1ms; post-provider 347ms; response true
    - active window: metadata scans 6 (208.69ms total, max 55.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4212ms; provider 1ms; post-provider 347ms; unknown 2994ms; source agent.prepare 610.57ms; plugins.metadata.scan 607.43ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3803 ms | 2911 ms | 892 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-2ab680e0-kova-260920-052238-a40201/openclaw/timeline.jsonl |
  | warm | 4212 ms | 3248 ms | 964 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-2ab680e0-kova-260920-052238-a40201/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 4397 ms | 1660 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 419 ms | 193 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 320 ms | 153 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 277 ms | 65 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x33 | 33 | 0 | 4350 ms | 1932 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 583 ms | 354 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 292 ms | 129 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 210 ms | 56 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 53 ms | 53 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-67b331a3-kova-260920-052238-a40201
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 936.2 MB; tracked total 1104.8 MB; max CPU 220.7%; samples 15; roles command-tree 1030.3MB/230.7%, agent-process 936.2MB/220.7%, status-cli 718.8MB/152%, agent-cli 171.5MB/211.6%
- agent: turn 4403ms; cold/warm 3490ms/4403ms; cold-warm delta 0ms; pre-provider 4062ms; provider 1ms; metadata scans 14 (455.69ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4357.35ms; max 4403ms; pre-provider p95 4024.85ms
- agent CLI attribution: cold known 2553ms / unattributed 766ms; warm known 3117ms / unattributed 945ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1878.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3490ms; pre-provider 3319ms; provider 3ms; post-provider 168ms; response true
    - active window: metadata scans 8 (256.13ms total, max 52.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3319ms; provider 3ms; post-provider 168ms; unknown 2204.04ms; source plugins.metadata.scan 566.4ms; agent.prepare 548.56ms
  - warm: total 4403ms; pre-provider 4062ms; provider 1ms; post-provider 340ms; response true
    - active window: metadata scans 6 (199.56ms total, max 53.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4062ms; provider 1ms; post-provider 340ms; unknown 2947.04ms; source plugins.metadata.scan 566.4ms; agent.prepare 548.56ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3319 ms | 2553 ms | 766 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-67b331a3-kova-260920-052238-a40201/openclaw/timeline.jsonl |
  | warm | 4062 ms | 3117 ms | 945 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-67b331a3-kova-260920-052238-a40201/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 3881 ms | 1466 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 378 ms | 173 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 268 ms | 134 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 258 ms | 52 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 49 ms | 49 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 4215 ms | 1879 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 545 ms | 326 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 283 ms | 126 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 200 ms | 54 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 48 ms | 48 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260920-052238-a40201-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260920-052238-a40201-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260920-052238-a40201-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-gateway-performance-man-005107f3-kova-260920-052238-a40201
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-gateway-performance-man-1e8be6a8-kova-260920-052238-a40201
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-gateway-performance-man-958fde53-kova-260920-052238-a40201
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-8e2a29af-kova-260920-052238-a40201
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-2ab680e0-kova-260920-052238-a40201
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260920-052238-a40201/kova-agent-cold-warm-message-67b331a3-kova-260920-052238-a40201

## Target Cleanup

- Runtime: `kova-local-mu9ddvml-3p6-15739b13`
- Result: removed
- Duration: 493ms

