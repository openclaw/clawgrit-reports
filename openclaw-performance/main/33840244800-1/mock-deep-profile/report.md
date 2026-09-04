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
| Run ID | `kova-260904-053034-4f07a5` |
| Generated | 2026-09-04T05:32:24.463Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 8ms | 612.1MB | n/a | 144% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 145% | 4220ms | 3716ms | 3480ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 8ms | 612.1 MB | 1181.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 931 MB | 4220ms | 3716ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 857.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 261.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 709 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 145% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 619 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 218.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 395.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 205.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 612.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 308.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 612.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 434.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260904-053034-4f07a5/kova-agent-cold-warm-message-2c26dd1d-kova-260904-053034-4f07a5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 709 MB; tracked total 931 MB; max CPU 145%; samples 44; roles command-tree 857.9MB/261.7%, agent-process 709MB/145%, status-cli 619MB/218.1%, agent-cli 395.1MB/205.6%; performance thresholds skipped 15 (instrumented)
- agent: turn 4220ms; cold/warm 4220ms/3716ms; cold-warm delta 504ms; pre-provider 3480ms; provider 3ms; metadata scans 8 (268.61ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4194.8ms; max 4220ms; pre-provider p95 3456.55ms
- agent CLI attribution: cold known 2430ms / unattributed 1050ms; warm known 2054ms / unattributed 957ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 702.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 7/7/7
- Agent turns:
  - cold: total 4220ms; pre-provider 3480ms; provider 3ms; post-provider 737ms; response true
    - active window: metadata scans 6 (191.25ms total, max 71.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3480ms; provider 3ms; post-provider 737ms; unknown 2231.17ms; source agent.prepare 867.7ms; plugins.metadata.scan 381.13ms
  - warm: total 3716ms; pre-provider 3011ms; provider 1ms; post-provider 704ms; response true
    - active window: metadata scans 2 (77.36ms total, max 60.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3011ms; provider 1ms; post-provider 704ms; unknown 1762.17ms; source agent.prepare 867.7ms; plugins.metadata.scan 381.13ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3480 ms | 2430 ms | 1050 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260904-053034-4f07a5/kova-agent-cold-warm-message-2c26dd1d-kova-260904-053034-4f07a5/openclaw/timeline.jsonl |
  | warm | 3011 ms | 2054 ms | 957 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260904-053034-4f07a5/kova-agent-cold-warm-message-2c26dd1d-kova-260904-053034-4f07a5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 2200 ms | 703 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 744 ms | 246 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 390 ms | 215 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 192 ms | 72 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 94 ms | 94 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1382 ms | 530 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 611 ms | 190 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 476 ms | 214 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 84 ms | 84 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 78 ms | 60 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260904-053034-4f07a5-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260904-053034-4f07a5-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260904-053034-4f07a5-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260904-053034-4f07a5/kova-gateway-performance-man-d48bd949-kova-260904-053034-4f07a5
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260904-053034-4f07a5/kova-agent-cold-warm-message-2c26dd1d-kova-260904-053034-4f07a5

## Target Cleanup

- Runtime: `kova-local-mtmimgjj-42p-67beaa21`
- Result: removed
- Duration: 438ms

