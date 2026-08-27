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
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260827-074850-12aacd` |
| Generated | 2026-08-27T07:54:09.591Z |
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
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 6722ms | 622.6MB | n/a | 135% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 133% | 3354ms | 2797ms | 3199ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 6722ms | 622.6 MB | 1036 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 6911ms | 640.6 MB | 1059.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 6098ms | 617.8 MB | 1036.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 708.5 MB | 4347ms | 3099ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 696.6 MB | 3354ms | 2539ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 655.2 MB | 3013ms | 2797ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 640.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 636.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 275% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 640.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 126% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 475.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 512.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 341.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 321.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 197.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 127% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-8e2a29af-kova-260827-074850-12aacd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 512.3 MB; tracked total 708.5 MB; max CPU 161%; samples 13; roles command-tree 636.9MB/275%, agent-process 512.3MB/161%, status-cli 415.6MB/176.8%, agent-cli 197.3MB/127%
- agent: turn 4347ms; cold/warm 4347ms/3099ms; cold-warm delta 1248ms; pre-provider 4072ms; provider 3ms; metadata scans 51 (1190.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4284.6ms; max 4347ms; pre-provider p95 4015.15ms
- agent CLI attribution: cold known 2778ms / unattributed 1294ms; warm known 1881ms / unattributed 1054ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 856.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4347ms; pre-provider 4072ms; provider 3ms; post-provider 272ms; response true
    - active window: metadata scans 30 (753.85ms total, max 62.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4072ms; provider 3ms; post-provider 272ms; unknown 2243.61ms; source plugins.metadata.scan 1322.25ms; agent.prepare 506.14ms
  - warm: total 3099ms; pre-provider 2935ms; provider 1ms; post-provider 163ms; response true
    - active window: metadata scans 21 (437.03ms total, max 58.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2935ms; provider 1ms; post-provider 163ms; unknown 1106.61ms; source plugins.metadata.scan 1322.25ms; agent.prepare 506.14ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4072 ms | 2778 ms | 1294 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-8e2a29af-kova-260827-074850-12aacd/openclaw/timeline.jsonl |
  | warm | 2935 ms | 1881 ms | 1054 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-8e2a29af-kova-260827-074850-12aacd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 3173 ms | 857 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x8, `agent.startup` x3 | 28 | 0 | 717 ms | 62 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 488 ms | 260 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 330 ms | 90 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 104 ms | 104 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x16, `agent.startup` x3 | 19 | 0 | 34 ms | 3 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2060 ms | 815 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x8, `agent.startup` x3 | 19 | 0 | 411 ms | 58 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 296 ms | 160 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 178 ms | 47 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 122 ms | 122 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x8, `agent.startup` x3 | 11 | 0 | 25 ms | 9 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-2ab680e0-kova-260827-074850-12aacd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 495.4 MB; tracked total 696.6 MB; max CPU 133%; samples 12; roles command-tree 625.3MB/173.9%, agent-process 495.4MB/133%, status-cli 475.6MB/173.9%, agent-cli 129.9MB/22.9%
- agent: turn 3354ms; cold/warm 3354ms/2539ms; cold-warm delta 815ms; pre-provider 3199ms; provider 2ms; metadata scans 51 (1017.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3313.25ms; max 3354ms; pre-provider p95 3157.25ms
- agent CLI attribution: cold known 2237ms / unattributed 962ms; warm known 1545ms / unattributed 819ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 820.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3354ms; pre-provider 3199ms; provider 2ms; post-provider 153ms; response true
    - active window: metadata scans 30 (630.37ms total, max 59.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3199ms; provider 2ms; post-provider 153ms; unknown 1687.4ms; source plugins.metadata.scan 1158.51ms; agent.prepare 353.09ms
  - warm: total 2539ms; pre-provider 2364ms; provider 1ms; post-provider 174ms; response true
    - active window: metadata scans 21 (387.41ms total, max 41.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2364ms; provider 1ms; post-provider 174ms; unknown 852.4ms; source plugins.metadata.scan 1158.51ms; agent.prepare 353.09ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3199 ms | 2237 ms | 962 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-2ab680e0-kova-260827-074850-12aacd/openclaw/timeline.jsonl |
  | warm | 2364 ms | 1545 ms | 819 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-2ab680e0-kova-260827-074850-12aacd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 2904 ms | 821 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x8, `agent.startup` x3 | 28 | 0 | 608 ms | 60 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 308 ms | 175 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 193 ms | 60 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 100 ms | 100 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x16, `agent.startup` x3 | 19 | 0 | 25 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1714 ms | 690 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x8, `agent.startup` x3 | 19 | 0 | 357 ms | 41 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 240 ms | 132 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 161 ms | 46 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 72 ms | 72 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x8, `agent.startup` x3 | 11 | 0 | 24 ms | 7 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-67b331a3-kova-260827-074850-12aacd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 453.9 MB; tracked total 655.2 MB; max CPU 132%; samples 10; roles command-tree 583.3MB/154.6%, agent-process 453.9MB/132%, agent-cli 129.4MB/25.6%, mock-provider 72MB/5.8%
- agent: turn 3013ms; cold/warm 3013ms/2797ms; cold-warm delta 216ms; pre-provider 2829ms; provider 3ms; metadata scans 51 (907.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3002.2ms; max 3013ms; pre-provider p95 2819.1ms
- agent CLI attribution: cold known 1883ms / unattributed 946ms; warm known 1667ms / unattributed 964ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 722.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3013ms; pre-provider 2829ms; provider 3ms; post-provider 181ms; response true
    - active window: metadata scans 30 (515.75ms total, max 49.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2829ms; provider 3ms; post-provider 181ms; unknown 1458.2ms; source plugins.metadata.scan 1008.64ms; agent.prepare 362.16ms
  - warm: total 2797ms; pre-provider 2631ms; provider 1ms; post-provider 165ms; response true
    - active window: metadata scans 21 (391.89ms total, max 48.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2631ms; provider 1ms; post-provider 165ms; unknown 1260.2ms; source plugins.metadata.scan 1008.64ms; agent.prepare 362.16ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2829 ms | 1883 ms | 946 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-67b331a3-kova-260827-074850-12aacd/openclaw/timeline.jsonl |
  | warm | 2631 ms | 1667 ms | 964 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-67b331a3-kova-260827-074850-12aacd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 2379 ms | 635 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x8, `agent.startup` x3 | 28 | 0 | 487 ms | 49 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 245 ms | 139 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 186 ms | 60 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 86 ms | 86 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x15, `agent.startup` x2 | 17 | 0 | 23 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1813 ms | 722 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x8, `agent.startup` x3 | 19 | 0 | 367 ms | 49 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 264 ms | 147 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 176 ms | 53 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 86 ms | 86 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x7, `agent.startup` x2 | 9 | 0 | 17 ms | 3 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260827-074850-12aacd-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260827-074850-12aacd-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260827-074850-12aacd-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-gateway-performance-man-005107f3-kova-260827-074850-12aacd
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-gateway-performance-man-1e8be6a8-kova-260827-074850-12aacd
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-gateway-performance-man-958fde53-kova-260827-074850-12aacd
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-8e2a29af-kova-260827-074850-12aacd
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-2ab680e0-kova-260827-074850-12aacd
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260827-074850-12aacd/kova-agent-cold-warm-message-67b331a3-kova-260827-074850-12aacd

## Target Cleanup

- Runtime: `kova-local-mtb81fvn-40x-ad197445`
- Result: removed
- Duration: 513ms

