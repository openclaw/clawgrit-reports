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
| Run ID | `kova-260826-052122-9bab2e` |
| Generated | 2026-08-26T05:24:25.961Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5031ms | 605.6MB | n/a | 121% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 144% | 5247ms | 4132ms | 4423ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5031ms | 605.6 MB | 1169.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 892.1 MB | 5247ms | 4132ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 820.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 255% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 671.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 503.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 197.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 641 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 605.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 121% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 462.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 605.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 121% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 380.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 136% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260826-052122-9bab2e/kova-agent-cold-warm-message-2c26dd1d-kova-260826-052122-9bab2e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 671.2 MB; tracked total 892.1 MB; max CPU 144%; samples 51; roles command-tree 820.5MB/255%, agent-process 671.2MB/144%, agent-cli 503.4MB/197.2%, status-cli 641MB/196.2%; performance thresholds skipped 15 (instrumented)
- agent: turn 5247ms; cold/warm 5247ms/4132ms; cold-warm delta 1115ms; pre-provider 4423ms; provider 3ms; metadata scans 53 (978.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5191.25ms; max 5247ms; pre-provider p95 4374.4ms
- agent CLI attribution: cold known 3266ms / unattributed 1157ms; warm known 2420ms / unattributed 1031ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 987.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 8/8/8
- Agent turns:
  - cold: total 5247ms; pre-provider 4423ms; provider 3ms; post-provider 821ms; response true
    - active window: metadata scans 31 (585.72ms total, max 57.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4423ms; provider 3ms; post-provider 821ms; unknown 2614.66ms; source plugins.metadata.scan 1092.06ms; agent.prepare 716.28ms
  - warm: total 4132ms; pre-provider 3451ms; provider 1ms; post-provider 680ms; response true
    - active window: metadata scans 22 (392.52ms total, max 44.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3451ms; provider 1ms; post-provider 680ms; unknown 1642.66ms; source plugins.metadata.scan 1092.06ms; agent.prepare 716.28ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4423 ms | 3266 ms | 1157 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260826-052122-9bab2e/kova-agent-cold-warm-message-2c26dd1d-kova-260826-052122-9bab2e/openclaw/timeline.jsonl |
  | warm | 3451 ms | 2420 ms | 1031 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260826-052122-9bab2e/kova-agent-cold-warm-message-2c26dd1d-kova-260826-052122-9bab2e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 3335 ms | 988 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 918 ms | 388 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x9, `agent.startup` x3 | 29 | 0 | 560 ms | 57 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 402 ms | 237 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 105 ms | 105 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x16, `agent.startup` | 17 | 0 | 19 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1911 ms | 696 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 753 ms | 312 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x9, `agent.startup` x3 | 20 | 0 | 339 ms | 45 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 318 ms | 156 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 82 ms | 82 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260826-052122-9bab2e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260826-052122-9bab2e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260826-052122-9bab2e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260826-052122-9bab2e/kova-gateway-performance-man-d48bd949-kova-260826-052122-9bab2e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260826-052122-9bab2e/kova-agent-cold-warm-message-2c26dd1d-kova-260826-052122-9bab2e

## Target Cleanup

- Runtime: `kova-local-mt9nbygf-40z-93c7bf5a`
- Result: removed
- Duration: 504ms

