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
| Run ID | `kova-260905-052231-5320f0` |
| Generated | 2026-09-05T05:24:25.209Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 8ms | 589.7MB | n/a | 147% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 154% | 3880ms | 3763ms | 3150ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 8ms | 589.7 MB | 1177.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1000.5 MB | 3880ms | 3763ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 927.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 256.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 779.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 401.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 202.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 639.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 589.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 589.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 441 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 341.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 139% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260905-052231-5320f0/kova-agent-cold-warm-message-2c26dd1d-kova-260905-052231-5320f0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 779.2 MB; tracked total 1000.5 MB; max CPU 154%; samples 43; roles command-tree 927.2MB/256.6%, agent-process 779.2MB/154%, agent-cli 401.2MB/202.4%, status-cli 639.8MB/200.4%; performance thresholds skipped 15 (instrumented)
- agent: turn 3880ms; cold/warm 3880ms/3763ms; cold-warm delta 117ms; pre-provider 3150ms; provider 3ms; metadata scans 8 (231.34ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3874.15ms; max 3880ms; pre-provider p95 3144.75ms
- agent CLI attribution: cold known 2176ms / unattributed 974ms; warm known 2004ms / unattributed 1041ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 628.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 9/9/7
- Agent turns:
  - cold: total 3880ms; pre-provider 3150ms; provider 3ms; post-provider 727ms; response true
    - active window: metadata scans 6 (172.63ms total, max 63.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3150ms; provider 3ms; post-provider 727ms; unknown 2110.94ms; source agent.prepare 704.4ms; plugins.metadata.scan 334.66ms
  - warm: total 3763ms; pre-provider 3045ms; provider 2ms; post-provider 716ms; response true
    - active window: metadata scans 2 (58.71ms total, max 43.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3045ms; provider 2ms; post-provider 716ms; unknown 2005.94ms; source agent.prepare 704.4ms; plugins.metadata.scan 334.66ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3150 ms | 2176 ms | 974 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260905-052231-5320f0/kova-agent-cold-warm-message-2c26dd1d-kova-260905-052231-5320f0/openclaw/timeline.jsonl |
  | warm | 3045 ms | 2004 ms | 1041 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260905-052231-5320f0/kova-agent-cold-warm-message-2c26dd1d-kova-260905-052231-5320f0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x25 | 25 | 0 | 1993 ms | 629 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 702 ms | 271 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 310 ms | 132 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 172 ms | 64 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 77 ms | 77 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1368 ms | 530 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 670 ms | 203 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 392 ms | 182 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 86 ms | 86 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 59 ms | 43 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 41 ms | 41 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260905-052231-5320f0-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260905-052231-5320f0-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260905-052231-5320f0-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260905-052231-5320f0/kova-gateway-performance-man-d48bd949-kova-260905-052231-5320f0
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260905-052231-5320f0/kova-agent-cold-warm-message-2c26dd1d-kova-260905-052231-5320f0

## Target Cleanup

- Runtime: `kova-local-mtnxryeh-3z1-2b09269c`
- Result: removed
- Duration: 453ms

