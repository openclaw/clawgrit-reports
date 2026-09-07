# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 2 (PASS:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260907-052523-fdb014` |
| Generated | 2026-09-07T05:27:19.919Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 1 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 2 |
| Scenarios | 2 |
| States | 2 |
| PASS | 2 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 12ms | 601.8MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 151% | 4597ms | 4344ms | 4048ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 12ms | 601.8 MB | 1258.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 956.6 MB | 4597ms | 4344ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 883.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 278% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 740.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 706.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 278% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 601.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 231% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 601.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 374.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 191.8% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 311.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 455.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260907-052523-fdb014/kova-agent-cold-warm-message-2c26dd1d-kova-260907-052523-fdb014
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 740.4 MB; tracked total 956.6 MB; max CPU 151%; samples 52; roles command-tree 883.9MB/276.4%, agent-process 740.4MB/151%, status-cli 706.5MB/276.4%, agent-cli 374.9MB/191.8%; performance thresholds skipped 15 (instrumented)
- agent: turn 4597ms; cold/warm 4597ms/4344ms; cold-warm delta 253ms; pre-provider 4048ms; provider 3ms; metadata scans 7 (256.67ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4584.35ms; max 4597ms; pre-provider p95 4035.5ms
- agent CLI attribution: cold known 2830ms / unattributed 1218ms; warm known 2266ms / unattributed 1532ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 807.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 12/12/10
- Agent turns:
  - cold: total 4597ms; pre-provider 4048ms; provider 3ms; post-provider 546ms; response true
    - active window: metadata scans 5 (184.44ms total, max 67.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4048ms; provider 3ms; post-provider 546ms; unknown 2774.2ms; source agent.prepare 824.7ms; plugins.metadata.scan 449.1ms
  - warm: total 4344ms; pre-provider 3798ms; provider 1ms; post-provider 545ms; response true
    - active window: metadata scans 2 (72.23ms total, max 54.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3798ms; provider 1ms; post-provider 545ms; unknown 2524.2ms; source agent.prepare 824.7ms; plugins.metadata.scan 449.1ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4048 ms | 2830 ms | 1218 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260907-052523-fdb014/kova-agent-cold-warm-message-2c26dd1d-kova-260907-052523-fdb014/openclaw/timeline.jsonl |
  | warm | 3798 ms | 2266 ms | 1532 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260907-052523-fdb014/kova-agent-cold-warm-message-2c26dd1d-kova-260907-052523-fdb014/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 2523 ms | 808 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 872 ms | 281 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 435 ms | 223 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 185 ms | 67 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 100 ms | 100 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 44 ms | 44 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1604 ms | 654 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 823 ms | 226 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 391 ms | 188 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 98 ms | 98 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 73 ms | 54 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 46 ms | 46 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260907-052523-fdb014-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260907-052523-fdb014-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260907-052523-fdb014-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260907-052523-fdb014/kova-gateway-performance-man-d48bd949-kova-260907-052523-fdb014
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260907-052523-fdb014/kova-agent-cold-warm-message-2c26dd1d-kova-260907-052523-fdb014

## Target Cleanup

- Runtime: `kova-local-mtqsrcih-412-646ed179`
- Result: removed
- Duration: 506ms

