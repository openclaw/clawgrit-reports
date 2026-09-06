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
| Run ID | `kova-260906-052307-9ddefc` |
| Generated | 2026-09-06T05:24:52.134Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 7ms | 588.8MB | n/a | 141% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 154% | 3966ms | 3627ms | 3305ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 7ms | 588.8 MB | 1167.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1007.5 MB | 3966ms | 3627ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 934.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 270.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 791.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 403.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 209.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 646.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 588.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 141% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 588.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 141% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 315.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 150% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 428 MB (scenario gateway-performance/many-bundled-plugins); CPU 141% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260906-052307-9ddefc/kova-agent-cold-warm-message-2c26dd1d-kova-260906-052307-9ddefc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 791.3 MB; tracked total 1007.5 MB; max CPU 154%; samples 43; roles command-tree 934.2MB/270.3%, agent-process 791.3MB/154%, agent-cli 403.5MB/209.6%, status-cli 646.7MB/206.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 3966ms; cold/warm 3966ms/3627ms; cold-warm delta 339ms; pre-provider 3305ms; provider 2ms; metadata scans 8 (221.83ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3949.05ms; max 3966ms; pre-provider p95 3290.55ms
- agent CLI attribution: cold known 2306ms / unattributed 999ms; warm known 1914ms / unattributed 1102ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 666.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 9/9/7
- Agent turns:
  - cold: total 3966ms; pre-provider 3305ms; provider 2ms; post-provider 659ms; response true
    - active window: metadata scans 6 (155.49ms total, max 45.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3305ms; provider 2ms; post-provider 659ms; unknown 2217.8ms; source agent.prepare 756.06ms; plugins.metadata.scan 331.14ms
  - warm: total 3627ms; pre-provider 3016ms; provider 1ms; post-provider 610ms; response true
    - active window: metadata scans 2 (66.34ms total, max 50.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3016ms; provider 1ms; post-provider 610ms; unknown 1928.8ms; source agent.prepare 756.06ms; plugins.metadata.scan 331.14ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3305 ms | 2306 ms | 999 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260906-052307-9ddefc/kova-agent-cold-warm-message-2c26dd1d-kova-260906-052307-9ddefc/openclaw/timeline.jsonl |
  | warm | 3016 ms | 1914 ms | 1102 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260906-052307-9ddefc/kova-agent-cold-warm-message-2c26dd1d-kova-260906-052307-9ddefc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 2071 ms | 667 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 732 ms | 235 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 379 ms | 196 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 155 ms | 46 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 76 ms | 76 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 1340 ms | 534 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 626 ms | 183 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 376 ms | 192 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 92 ms | 92 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 67 ms | 51 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 43 ms | 43 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260906-052307-9ddefc-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260906-052307-9ddefc-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260906-052307-9ddefc-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260906-052307-9ddefc/kova-gateway-performance-man-d48bd949-kova-260906-052307-9ddefc
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260906-052307-9ddefc/kova-agent-cold-warm-message-2c26dd1d-kova-260906-052307-9ddefc

## Target Cleanup

- Runtime: `kova-local-mtpd8kvl-3zx-341bb156`
- Result: removed
- Duration: 433ms

