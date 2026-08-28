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
| Run ID | `kova-260828-074959-400ce8` |
| Generated | 2026-08-28T07:52:37.547Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 4376ms | 585.5MB | n/a | 131% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 145% | 5160ms | 4502ms | 4202ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 4376ms | 585.5 MB | 1133.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 903.2 MB | 5160ms | 4502ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 829.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 699.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 145% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 607.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 468.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 585.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 131% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 585.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 131% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 432.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 357.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260828-074959-400ce8/kova-agent-cold-warm-message-2c26dd1d-kova-260828-074959-400ce8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 699.7 MB; tracked total 903.2 MB; max CPU 145%; samples 53; roles command-tree 829.3MB/196.3%, agent-process 699.7MB/145%, status-cli 607.9MB/196.3%, agent-cli 468.9MB/193.6%; performance thresholds skipped 15 (instrumented)
- agent: turn 5160ms; cold/warm 5160ms/4502ms; cold-warm delta 658ms; pre-provider 4202ms; provider 7ms; metadata scans 59 (1058.43ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5127.1ms; max 5160ms; pre-provider p95 4170.45ms
- agent CLI attribution: cold known 3125ms / unattributed 1077ms; warm known 2504ms / unattributed 1067ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1037.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 8/8/8
- Agent turns:
  - cold: total 5160ms; pre-provider 4202ms; provider 7ms; post-provider 951ms; response true
    - active window: metadata scans 34 (609.89ms total, max 50.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4202ms; provider 7ms; post-provider 951ms; unknown 2276.55ms; source plugins.metadata.scan 1156.71ms; agent.prepare 768.74ms
  - warm: total 4502ms; pre-provider 3571ms; provider 1ms; post-provider 930ms; response true
    - active window: metadata scans 25 (448.54ms total, max 44.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3571ms; provider 1ms; post-provider 930ms; unknown 1645.55ms; source plugins.metadata.scan 1156.71ms; agent.prepare 768.74ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4202 ms | 3125 ms | 1077 ms | 7 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260828-074959-400ce8/kova-agent-cold-warm-message-2c26dd1d-kova-260828-074959-400ce8/openclaw/timeline.jsonl |
  | warm | 3571 ms | 2504 ms | 1067 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260828-074959-400ce8/kova-agent-cold-warm-message-2c26dd1d-kova-260828-074959-400ce8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 3400 ms | 1038 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 878 ms | 347 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x8, `agent.startup` x3 | 28 | 0 | 503 ms | 50 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 367 ms | 217 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 46 ms | 46 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x15, `agent.startup` x2 | 17 | 0 | 20 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1961 ms | 738 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 886 ms | 312 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 401 ms | 246 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x8, `agent.startup` x3 | 19 | 0 | 349 ms | 45 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 51 ms | 51 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x8, `agent.startup` x2 | 10 | 0 | 23 ms | 11 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260828-074959-400ce8-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260828-074959-400ce8-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260828-074959-400ce8-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260828-074959-400ce8/kova-gateway-performance-man-d48bd949-kova-260828-074959-400ce8
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260828-074959-400ce8/kova-agent-cold-warm-message-2c26dd1d-kova-260828-074959-400ce8

## Target Cleanup

- Runtime: `kova-local-mtcnis3s-3qb-5c5665c1`
- Result: removed
- Duration: 518ms

