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
| Run ID | `kova-260909-052359-b3fd08` |
| Generated | 2026-09-09T05:25:55.188Z |
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
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 14ms | 618.2MB | n/a | 203.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 231.4% | 3949ms | 4563ms | 3524ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 14ms | 618.2 MB | 1215.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 896.6 MB | 3949ms | 4563ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 823.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 235.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 823.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 235.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 739.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 231.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 618.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 203.1% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 618.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 203.1% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 597.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.7% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 393.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 195.4% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 330.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 163.5% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260909-052359-b3fd08/kova-agent-cold-warm-message-2c26dd1d-kova-260909-052359-b3fd08
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 739.3 MB; tracked total 896.6 MB; max CPU 231.4%; samples 48; roles agent-cli 823.5MB/235.4%, command-tree 823.5MB/235.4%, agent-process 739.3MB/231.4%, status-cli 597.1MB/151.1%; performance thresholds skipped 15 (instrumented)
- agent: turn 4563ms; cold/warm 3949ms/4563ms; cold-warm delta 0ms; pre-provider 4112ms; provider 2ms; metadata scans 7 (344.45ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4532.3ms; max 4563ms; pre-provider p95 4082.6ms
- agent CLI attribution: cold known 2416ms / unattributed 1108ms; warm known 2486ms / unattributed 1626ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 688.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/13
- Agent turns:
  - cold: total 3949ms; pre-provider 3524ms; provider 2ms; post-provider 423ms; response true
    - active window: metadata scans 5 (166.58ms total, max 62.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3524ms; provider 2ms; post-provider 423ms; unknown 2261.73ms; source agent.prepare 803.4ms; plugins.metadata.scan 458.87ms
  - warm: total 4563ms; pre-provider 4112ms; provider 2ms; post-provider 449ms; response true
    - active window: metadata scans 2 (177.87ms total, max 148.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4112ms; provider 2ms; post-provider 449ms; unknown 2849.73ms; source agent.prepare 803.4ms; plugins.metadata.scan 458.87ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3524 ms | 2416 ms | 1108 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260909-052359-b3fd08/kova-agent-cold-warm-message-2c26dd1d-kova-260909-052359-b3fd08/openclaw/timeline.jsonl |
  | warm | 4112 ms | 2486 ms | 1626 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260909-052359-b3fd08/kova-agent-cold-warm-message-2c26dd1d-kova-260909-052359-b3fd08/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 2167 ms | 689 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 838 ms | 274 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 351 ms | 107 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 166 ms | 62 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 78 ms | 78 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 45 ms | 45 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1610 ms | 597 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 822 ms | 205 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 456 ms | 174 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 178 ms | 148 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 83 ms | 83 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 50 ms | 50 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260909-052359-b3fd08-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260909-052359-b3fd08-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260909-052359-b3fd08-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260909-052359-b3fd08/kova-gateway-performance-man-d48bd949-kova-260909-052359-b3fd08
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260909-052359-b3fd08/kova-agent-cold-warm-message-2c26dd1d-kova-260909-052359-b3fd08

## Target Cleanup

- Runtime: `kova-local-mttnl90x-40o-7cdad21d`
- Result: removed
- Duration: 445ms

