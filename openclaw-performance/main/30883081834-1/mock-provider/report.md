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
| Run ID | `kova-260804-061150-7146f2` |
| Generated | 2026-08-04T06:14:18.928Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5563ms | 967.7MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 157% | 3687ms | 3678ms | 3553ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5344ms | 967.7 MB | 1497.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 7413ms | 928 MB | 1464.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5563ms | 991.4 MB | 1520.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1114.3 MB | 3706ms | 3926ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1096.8 MB | 3687ms | 3671ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1112.6 MB | 3447ms | 3678ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1041.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 991.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 605.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 991.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 866.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 465.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 175.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 28.3% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 73.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 21.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-8e2a29af-kova-260804-061150-7146f2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 866.6 MB; tracked total 1114.3 MB; max CPU 157%; samples 13; roles command-tree 1041.7MB/182.4%, agent-process 866.6MB/157%, status-cli 605.9MB/182.4%, agent-cli 175.8MB/26.1%
- agent: turn 3926ms; cold/warm 3706ms/3926ms; cold-warm delta 0ms; pre-provider 3801ms; provider 1ms; metadata scans 12 (237.67ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3915ms; max 3926ms; pre-provider p95 3788.6ms
- agent CLI attribution: cold known 251ms / unattributed 3302ms; warm known 257ms / unattributed 3544ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1428.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3706ms; pre-provider 3553ms; provider 2ms; post-provider 151ms; response true
    - active window: metadata scans 6 (105.25ms total, max 34.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3553ms; provider 2ms; post-provider 151ms; unknown 2819.12ms; source plugins.metadata.scan 465.08ms; agent.prepare 268.8ms
  - warm: total 3926ms; pre-provider 3801ms; provider 1ms; post-provider 124ms; response true
    - active window: metadata scans 6 (132.42ms total, max 43.4ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3801ms; provider 1ms; post-provider 124ms; unknown 3067.12ms; source plugins.metadata.scan 465.08ms; agent.prepare 268.8ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3553 ms | 251 ms | 3302 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-8e2a29af-kova-260804-061150-7146f2/openclaw/timeline.jsonl |
  | warm | 3801 ms | 257 ms | 3544 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-8e2a29af-kova-260804-061150-7146f2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 145 ms | 44 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 106 ms | 35 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 134 ms | 44 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 123 ms | 37 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-2ab680e0-kova-260804-061150-7146f2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 848.6 MB; tracked total 1096.8 MB; max CPU 159%; samples 13; roles command-tree 1024.2MB/177.4%, agent-process 848.6MB/159%, status-cli 602.9MB/175.4%, agent-cli 175.9MB/27.3%
- agent: turn 3687ms; cold/warm 3687ms/3671ms; cold-warm delta 16ms; pre-provider 3560ms; provider 3ms; metadata scans 12 (163.25ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3686.2ms; max 3687ms; pre-provider p95 3559.35ms
- agent CLI attribution: cold known 224ms / unattributed 3336ms; warm known 213ms / unattributed 3334ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1290.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3687ms; pre-provider 3560ms; provider 3ms; post-provider 124ms; response true
    - active window: metadata scans 6 (80.68ms total, max 34.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3560ms; provider 3ms; post-provider 124ms; unknown 2944.22ms; source plugins.metadata.scan 338.52ms; agent.prepare 277.26ms
  - warm: total 3671ms; pre-provider 3547ms; provider 1ms; post-provider 123ms; response true
    - active window: metadata scans 6 (82.57ms total, max 39.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3547ms; provider 1ms; post-provider 123ms; unknown 2931.22ms; source plugins.metadata.scan 338.52ms; agent.prepare 277.26ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3560 ms | 224 ms | 3336 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-2ab680e0-kova-260804-061150-7146f2/openclaw/timeline.jsonl |
  | warm | 3547 ms | 213 ms | 3334 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-2ab680e0-kova-260804-061150-7146f2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 143 ms | 44 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 81 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 131 ms | 44 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 82 ms | 39 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-67b331a3-kova-260804-061150-7146f2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 865.5 MB; tracked total 1112.6 MB; max CPU 154%; samples 13; roles command-tree 1041.3MB/182.3%, agent-process 865.5MB/154%, status-cli 605MB/182.3%, agent-cli 175.8MB/28.3%
- agent: turn 3678ms; cold/warm 3447ms/3678ms; cold-warm delta 0ms; pre-provider 3555ms; provider 1ms; metadata scans 12 (190.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3666.45ms; max 3678ms; pre-provider p95 3543.3ms
- agent CLI attribution: cold known 220ms / unattributed 3101ms; warm known 230ms / unattributed 3325ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1264.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3447ms; pre-provider 3321ms; provider 3ms; post-provider 123ms; response true
    - active window: metadata scans 6 (88.2ms total, max 34.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3321ms; provider 3ms; post-provider 123ms; unknown 2660.94ms; source plugins.metadata.scan 399.32ms; agent.prepare 260.74ms
  - warm: total 3678ms; pre-provider 3555ms; provider 1ms; post-provider 122ms; response true
    - active window: metadata scans 6 (102.13ms total, max 44.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3555ms; provider 1ms; post-provider 122ms; unknown 2894.94ms; source plugins.metadata.scan 399.32ms; agent.prepare 260.74ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3321 ms | 220 ms | 3101 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-67b331a3-kova-260804-061150-7146f2/openclaw/timeline.jsonl |
  | warm | 3555 ms | 230 ms | 3325 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-67b331a3-kova-260804-061150-7146f2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 133 ms | 42 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 87 ms | 34 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 127 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 103 ms | 45 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260804-061150-7146f2-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260804-061150-7146f2-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260804-061150-7146f2-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-gateway-performance-man-005107f3-kova-260804-061150-7146f2
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-gateway-performance-man-1e8be6a8-kova-260804-061150-7146f2
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-gateway-performance-man-958fde53-kova-260804-061150-7146f2
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-8e2a29af-kova-260804-061150-7146f2
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-2ab680e0-kova-260804-061150-7146f2
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260804-061150-7146f2/kova-agent-cold-warm-message-67b331a3-kova-260804-061150-7146f2

## Target Cleanup

- Runtime: `kova-local-mse9g3wt-3z1-38031367`
- Result: removed
- Duration: 453ms

