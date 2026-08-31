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
| Run ID | `kova-260831-052507-f139de` |
| Generated | 2026-08-31T05:27:04.514Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 8ms | 576.5MB | n/a | 136% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 140% | 3671ms | 3721ms | 2989ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 8ms | 576.5 MB | 1139.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 877.8 MB | 3671ms | 3721ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 803.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 252.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 656.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 140% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 397.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 187.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 627.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 186.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 576.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 136% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 366.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 576.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 136% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 453.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260831-052507-f139de/kova-agent-cold-warm-message-2c26dd1d-kova-260831-052507-f139de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 656.4 MB; tracked total 877.8 MB; max CPU 140%; samples 41; roles command-tree 803.3MB/252.9%, agent-process 656.4MB/140%, agent-cli 397.3MB/187.7%, status-cli 627.3MB/186.7%; performance thresholds skipped 15 (instrumented)
- agent: turn 3721ms; cold/warm 3671ms/3721ms; cold-warm delta 0ms; pre-provider 2799ms; provider 2ms; metadata scans 8 (202.85ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3718.5ms; max 3721ms; pre-provider p95 2979.5ms
- agent CLI attribution: cold known 2096ms / unattributed 893ms; warm known 1886ms / unattributed 913ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 616.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 8/8/8
- Agent turns:
  - cold: total 3671ms; pre-provider 2989ms; provider 3ms; post-provider 679ms; response true
    - active window: metadata scans 6 (142.9ms total, max 43.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2989ms; provider 3ms; post-provider 679ms; unknown 1842.16ms; source agent.prepare 826.67ms; plugins.metadata.scan 320.17ms
  - warm: total 3721ms; pre-provider 2799ms; provider 2ms; post-provider 920ms; response true
    - active window: metadata scans 2 (59.95ms total, max 45.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2799ms; provider 2ms; post-provider 920ms; unknown 1652.16ms; source agent.prepare 826.67ms; plugins.metadata.scan 320.17ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2989 ms | 2096 ms | 893 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260831-052507-f139de/kova-agent-cold-warm-message-2c26dd1d-kova-260831-052507-f139de/openclaw/timeline.jsonl |
  | warm | 2799 ms | 1886 ms | 913 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260831-052507-f139de/kova-agent-cold-warm-message-2c26dd1d-kova-260831-052507-f139de/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 1867 ms | 616 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 582 ms | 201 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 398 ms | 133 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 142 ms | 43 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 74 ms | 74 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 13 ms | 13 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 1286 ms | 481 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 611 ms | 197 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 431 ms | 247 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 81 ms | 81 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 61 ms | 46 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 13 ms | 13 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260831-052507-f139de-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260831-052507-f139de-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260831-052507-f139de-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260831-052507-f139de/kova-gateway-performance-man-d48bd949-kova-260831-052507-f139de
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260831-052507-f139de/kova-agent-cold-warm-message-2c26dd1d-kova-260831-052507-f139de

## Target Cleanup

- Runtime: `kova-local-mtgso17e-3wu-652e7b2c`
- Result: removed
- Duration: 460ms

