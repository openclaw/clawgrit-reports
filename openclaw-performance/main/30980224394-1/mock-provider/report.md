# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 6 (PASS:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 109 total, 0 missing, 0 failed
- Categories: command: 55, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260805-060720-4de546` |
| Generated | 2026-08-05T06:09:28.577Z |
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
| PASS | 6 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4828ms | 964.6MB | n/a | 162% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154% | 3363ms | 3150ms | 3236ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5396ms | 963.3 MB | 1485.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4707ms | 979.8 MB | 1513.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4828ms | 964.6 MB | 1496.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1132.7 MB | 3442ms | 3214ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1124.5 MB | 3313ms | 3150ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1128.3 MB | 3363ms | 3102ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1061.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 979.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 162% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 613.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 979.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 162% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 885.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 465.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 149% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 176.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 25.2% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 73.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 15.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-8e2a29af-kova-260805-060720-4de546
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 885.7 MB; tracked total 1132.7 MB; max CPU 154%; samples 13; roles command-tree 1061.4MB/175.2%, agent-process 885.7MB/154%, status-cli 613.1MB/173.7%, agent-cli 176.1MB/25.2%
- agent: turn 3442ms; cold/warm 3442ms/3214ms; cold-warm delta 228ms; pre-provider 3312ms; provider 2ms; metadata scans 14 (176.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3430.6ms; max 3442ms; pre-provider p95 3301.1ms
- agent CLI attribution: cold known 240ms / unattributed 3072ms; warm known 194ms / unattributed 2900ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1313.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3442ms; pre-provider 3312ms; provider 2ms; post-provider 128ms; response true
    - active window: metadata scans 8 (109.8ms total, max 35.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3312ms; provider 2ms; post-provider 128ms; unknown 2721.19ms; source plugins.metadata.scan 330.45ms; agent.prepare 260.36ms
  - warm: total 3214ms; pre-provider 3094ms; provider 1ms; post-provider 119ms; response true
    - active window: metadata scans 6 (67.07ms total, max 31.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3094ms; provider 1ms; post-provider 119ms; unknown 2503.19ms; source plugins.metadata.scan 330.45ms; agent.prepare 260.36ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3312 ms | 240 ms | 3072 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-8e2a29af-kova-260805-060720-4de546/openclaw/timeline.jsonl |
  | warm | 3094 ms | 194 ms | 2900 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-8e2a29af-kova-260805-060720-4de546/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 132 ms | 44 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 108 ms | 36 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 127 ms | 46 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 67 ms | 31 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-2ab680e0-kova-260805-060720-4de546
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 875.8 MB; tracked total 1124.5 MB; max CPU 154%; samples 13; roles command-tree 1051.8MB/174.2%, agent-process 875.8MB/154%, status-cli 605.8MB/174.2%, agent-cli 176MB/24.2%
- agent: turn 3313ms; cold/warm 3313ms/3150ms; cold-warm delta 163ms; pre-provider 3194ms; provider 2ms; metadata scans 14 (168.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3304.85ms; max 3313ms; pre-provider p95 3185.8ms
- agent CLI attribution: cold known 231ms / unattributed 2963ms; warm known 191ms / unattributed 2839ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1282.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3313ms; pre-provider 3194ms; provider 2ms; post-provider 117ms; response true
    - active window: metadata scans 8 (102.43ms total, max 34.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3194ms; provider 2ms; post-provider 117ms; unknown 2607.59ms; source plugins.metadata.scan 331.78ms; agent.prepare 254.63ms
  - warm: total 3150ms; pre-provider 3030ms; provider 1ms; post-provider 119ms; response true
    - active window: metadata scans 6 (65.88ms total, max 29.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3030ms; provider 1ms; post-provider 119ms; unknown 2443.59ms; source plugins.metadata.scan 331.78ms; agent.prepare 254.63ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3194 ms | 231 ms | 2963 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-2ab680e0-kova-260805-060720-4de546/openclaw/timeline.jsonl |
  | warm | 3030 ms | 191 ms | 2839 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-2ab680e0-kova-260805-060720-4de546/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 128 ms | 43 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 103 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 125 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 66 ms | 29 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-67b331a3-kova-260805-060720-4de546
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 879 MB; tracked total 1128.3 MB; max CPU 153%; samples 13; roles command-tree 1054.8MB/173.5%, agent-process 879MB/153%, status-cli 612.2MB/170.8%, agent-cli 176MB/24.7%
- agent: turn 3363ms; cold/warm 3363ms/3102ms; cold-warm delta 261ms; pre-provider 3236ms; provider 2ms; metadata scans 14 (168.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3349.95ms; max 3363ms; pre-provider p95 3223.35ms
- agent CLI attribution: cold known 234ms / unattributed 3002ms; warm known 190ms / unattributed 2793ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1305.73ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3363ms; pre-provider 3236ms; provider 2ms; post-provider 125ms; response true
    - active window: metadata scans 8 (103.45ms total, max 34.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3236ms; provider 2ms; post-provider 125ms; unknown 2633.27ms; source plugins.metadata.scan 345.46ms; agent.prepare 257.27ms
  - warm: total 3102ms; pre-provider 2983ms; provider 1ms; post-provider 118ms; response true
    - active window: metadata scans 6 (65.12ms total, max 30.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2983ms; provider 1ms; post-provider 118ms; unknown 2380.27ms; source plugins.metadata.scan 345.46ms; agent.prepare 257.27ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3236 ms | 234 ms | 3002 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-67b331a3-kova-260805-060720-4de546/openclaw/timeline.jsonl |
  | warm | 2983 ms | 190 ms | 2793 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-67b331a3-kova-260805-060720-4de546/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 130 ms | 44 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 104 ms | 34 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 125 ms | 44 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 65 ms | 30 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260805-060720-4de546-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260805-060720-4de546-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260805-060720-4de546-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-gateway-performance-man-005107f3-kova-260805-060720-4de546
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-gateway-performance-man-1e8be6a8-kova-260805-060720-4de546
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-gateway-performance-man-958fde53-kova-260805-060720-4de546
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-8e2a29af-kova-260805-060720-4de546
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-2ab680e0-kova-260805-060720-4de546
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260805-060720-4de546/kova-agent-cold-warm-message-67b331a3-kova-260805-060720-4de546

## Target Cleanup

- Runtime: `kova-local-msfoq6jv-3yj-c1df0da8`
- Result: removed
- Duration: 409ms

