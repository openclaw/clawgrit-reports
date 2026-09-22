# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260922-052733-cd3152' -- status took 61861ms, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260922-052733-cd3152' -- status took 61861ms, over threshold 10000ms |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260922-052733-cd3152` |
| Generated | 2026-09-22T05:35:26.119Z |
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
| FAIL | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1214.7 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 9 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1209.5 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1211.6 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260922-052733-cd3152' -- status took 61861ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 872.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260922-052733-cd3152' -- status took 62363ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 837.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | ocm @'kova-agent-cold-warm-message-67b331a3-kova-260922-052733-cd3152' -- status took 62020ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 814.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 8ms | 1042.3MB | n/a | 196.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 251.2% | 5021ms | 6451ms | 4829ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 9ms | 1045.6 MB | 1599 MB | n/a | n/a | gateway-tree peak RSS 1214.7 MB exceeded threshold 1200 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4ms | 1040.1 MB | 1639.2 MB | n/a | n/a | gateway-tree peak RSS 1209.5 MB exceeded threshold 1200 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 8ms | 1042.3 MB | 1630.9 MB | n/a | n/a | gateway-tree peak RSS 1211.6 MB exceeded threshold 1200 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1039.3 MB | 4174ms | 5155ms | ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260922-052733-cd3152' -- status took 61861ms, over threshold 10000ms |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1002.2 MB | 5021ms | 6451ms | ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260922-052733-cd3152' -- status took 62363ms, over threshold 10000ms |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 979.9 MB | 5637ms | 6812ms | ocm @'kova-agent-cold-warm-message-67b331a3-kova-260922-052733-cd3152' -- status took 62020ms, over threshold 10000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1214.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 228.7% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 966.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 263.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1045.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 200.5% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 872.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 253.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 193.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 241.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 526.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.3% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 194.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 93.4% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-gateway-performance-man-005107f3-kova-260922-052733-cd3152
Measurements:
- startup: listening 1ms; health 9ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 8ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 10ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1045.6 MB; tracked total 1599 MB; max CPU 196.2%; samples 27; roles gateway-tree 1214.7MB/216%, gateway 1045.6MB/196.2%, command-tree 404.8MB/153.3%, status-cli 404.8MB/153.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 3885.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1214.7 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-gateway-performance-man-1e8be6a8-kova-260922-052733-cd3152
Measurements:
- startup: listening 1ms; health 4ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 3ms; post-ready p95 3ms; failures 0; final failures 0; slowest final/final 83ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1040.1 MB; tracked total 1639.2 MB; max CPU 200.5%; samples 31; roles gateway-tree 1209.5MB/228.7%, gateway 1040.1MB/200.5%, command-tree 460.8MB/158.6%, status-cli 460.8MB/158.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 3568.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1209.5 MB exceeded threshold 1200 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-gateway-performance-man-958fde53-kova-260922-052733-cd3152
Measurements:
- startup: listening 0ms; health 8ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 8ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 38ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1042.3 MB; tracked total 1630.9 MB; max CPU 189.2%; samples 27; roles gateway-tree 1211.6MB/208%, gateway 1042.3MB/189.2%, command-tree 456.5MB/153.4%, status-cli 456.5MB/153.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 3186.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1211.6 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-8e2a29af-kova-260922-052733-cd3152
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 872.7 MB; tracked total 1039.3 MB; max CPU 241.1%; samples 76; roles command-tree 966.8MB/241.1%, agent-cli 94.1MB/241.1%, agent-process 872.7MB/241.1%, status-cli 526.4MB/158.2%
- agent: turn 5155ms; cold/warm 4174ms/5155ms; cold-warm delta 0ms; pre-provider 4958ms; provider 1ms; metadata scans 16 (539.75ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5105.95ms; max 5155ms; pre-provider p95 4911.3ms
- agent CLI attribution: cold known 2736ms / unattributed 1288ms; warm known 3702ms / unattributed 1256ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59742.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260922-052733-cd3152' -- status took 61861ms, over threshold 10000ms
- Agent turns:
  - cold: total 4174ms; pre-provider 4024ms; provider 2ms; post-provider 148ms; response true
    - active window: metadata scans 9 (287.17ms total, max 59.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4024ms; provider 2ms; post-provider 148ms; unknown 2613.93ms; source agent.prepare 731.66ms; plugins.metadata.scan 678.41ms
  - warm: total 5155ms; pre-provider 4958ms; provider 1ms; post-provider 196ms; response true
    - active window: metadata scans 7 (252.58ms total, max 72.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4958ms; provider 1ms; post-provider 196ms; unknown 3547.93ms; source agent.prepare 731.66ms; plugins.metadata.scan 678.41ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4024 ms | 2736 ms | 1288 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-8e2a29af-kova-260922-052733-cd3152/openclaw/timeline.jsonl |
  | warm | 4958 ms | 3702 ms | 1256 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-8e2a29af-kova-260922-052733-cd3152/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x37 | 37 | 0 | 3462 ms | 1305 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 506 ms | 237 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 435 ms | 165 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 287 ms | 59 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 66 ms | 66 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 4370 ms | 2336 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 629 ms | 371 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 297 ms | 145 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 252 ms | 73 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 61 ms | 61 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-2ab680e0-kova-260922-052733-cd3152
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 837.3 MB; tracked total 1002.2 MB; max CPU 251.2%; samples 78; roles command-tree 931.2MB/261%, agent-process 837.3MB/251.2%, status-cli 470.6MB/171.3%, agent-cli 165.6MB/168.5%
- agent: turn 6451ms; cold/warm 5021ms/6451ms; cold-warm delta 0ms; pre-provider 6173ms; provider 2ms; metadata scans 16 (595.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6379.5ms; max 6451ms; pre-provider p95 6105.8ms
- agent CLI attribution: cold known 3310ms / unattributed 1519ms; warm known 4397ms / unattributed 1776ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59682.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260922-052733-cd3152' -- status took 62363ms, over threshold 10000ms
- Agent turns:
  - cold: total 5021ms; pre-provider 4829ms; provider 3ms; post-provider 189ms; response true
    - active window: metadata scans 9 (334.45ms total, max 62.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4829ms; provider 3ms; post-provider 189ms; unknown 3130.52ms; source agent.prepare 952.3ms; plugins.metadata.scan 746.18ms
  - warm: total 6451ms; pre-provider 6173ms; provider 2ms; post-provider 276ms; response true
    - active window: metadata scans 7 (260.75ms total, max 73.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6173ms; provider 2ms; post-provider 276ms; unknown 4474.52ms; source agent.prepare 952.3ms; plugins.metadata.scan 746.18ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4829 ms | 3310 ms | 1519 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-2ab680e0-kova-260922-052733-cd3152/openclaw/timeline.jsonl |
  | warm | 6173 ms | 4397 ms | 1776 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-2ab680e0-kova-260922-052733-cd3152/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x37 | 37 | 0 | 4253 ms | 1525 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 596 ms | 260 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 535 ms | 207 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 332 ms | 62 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 60 ms | 60 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 5097 ms | 2732 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 752 ms | 472 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 416 ms | 223 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 262 ms | 74 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-67b331a3-kova-260922-052733-cd3152
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 814.3 MB; tracked total 979.9 MB; max CPU 253.8%; samples 78; roles command-tree 908.2MB/263.8%, agent-process 814.3MB/253.8%, status-cli 460.2MB/146.1%, agent-cli 193.5MB/220.9%
- agent: turn 6812ms; cold/warm 5637ms/6812ms; cold-warm delta 0ms; pre-provider 6588ms; provider 1ms; metadata scans 16 (685.91ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6753.25ms; max 6812ms; pre-provider p95 6529.5ms
- agent CLI attribution: cold known 3752ms / unattributed 1666ms; warm known 4839ms / unattributed 1749ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59707.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm @'kova-agent-cold-warm-message-67b331a3-kova-260922-052733-cd3152' -- status took 62020ms, over threshold 10000ms
- Agent turns:
  - cold: total 5637ms; pre-provider 5418ms; provider 2ms; post-provider 217ms; response true
    - active window: metadata scans 9 (393.74ms total, max 95.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5418ms; provider 2ms; post-provider 217ms; unknown 3641.06ms; source agent.prepare 936.73ms; plugins.metadata.scan 840.21ms
  - warm: total 6812ms; pre-provider 6588ms; provider 1ms; post-provider 223ms; response true
    - active window: metadata scans 7 (292.17ms total, max 73.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6588ms; provider 1ms; post-provider 223ms; unknown 4811.06ms; source agent.prepare 936.73ms; plugins.metadata.scan 840.21ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5418 ms | 3752 ms | 1666 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-67b331a3-kova-260922-052733-cd3152/openclaw/timeline.jsonl |
  | warm | 6588 ms | 4839 ms | 1749 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-67b331a3-kova-260922-052733-cd3152/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x40 | 40 | 0 | 5116 ms | 1985 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 571 ms | 232 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 532 ms | 236 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 393 ms | 96 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 82 ms | 82 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 47 ms | 47 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x33 | 33 | 0 | 5843 ms | 3103 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 750 ms | 421 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 369 ms | 176 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 293 ms | 74 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 71 ms | 71 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260922-052733-cd3152-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260922-052733-cd3152-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260922-052733-cd3152-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-gateway-performance-man-005107f3-kova-260922-052733-cd3152
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-gateway-performance-man-1e8be6a8-kova-260922-052733-cd3152
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-gateway-performance-man-958fde53-kova-260922-052733-cd3152
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-8e2a29af-kova-260922-052733-cd3152
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-2ab680e0-kova-260922-052733-cd3152
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260922-052733-cd3152/kova-agent-cold-warm-message-67b331a3-kova-260922-052733-cd3152

## Target Cleanup

- Runtime: `kova-local-muc8fwyx-3rs-2ab7f76c`
- Result: removed
- Duration: 566ms

