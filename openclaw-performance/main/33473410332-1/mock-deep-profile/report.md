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
| Run ID | `kova-260901-052613-2858fa` |
| Generated | 2026-09-01T05:28:32.846Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 12ms | 595.7MB | n/a | 147% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 156% | 9017ms | 6693ms | 6800ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 12ms | 595.7 MB | 1168.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 951.4 MB | 9017ms | 6693ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 878.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 299.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 733.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 372.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 215.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 642.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 595.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 462.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 595.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 360 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260901-052613-2858fa/kova-agent-cold-warm-message-2c26dd1d-kova-260901-052613-2858fa
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 733.3 MB; tracked total 951.4 MB; max CPU 156%; samples 80; roles command-tree 878.4MB/299.7%, agent-process 733.3MB/156%, agent-cli 372.9MB/215.6%, status-cli 642.4MB/206%; performance thresholds skipped 15 (instrumented)
- agent: turn 9017ms; cold/warm 9017ms/6693ms; cold-warm delta 2324ms; pre-provider 6800ms; provider 5ms; metadata scans 8 (467.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8900.8ms; max 9017ms; pre-provider p95 6740.05ms
- agent CLI attribution: cold known 4881ms / unattributed 1919ms; warm known 3774ms / unattributed 1827ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1423.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 7/7/7
- Agent turns:
  - cold: total 9017ms; pre-provider 6800ms; provider 5ms; post-provider 2212ms; response true
    - active window: metadata scans 6 (351.05ms total, max 108.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6800ms; provider 5ms; post-provider 2212ms; unknown 4548.22ms; source agent.prepare 1584.55ms; plugins.metadata.scan 667.23ms
  - warm: total 6693ms; pre-provider 5601ms; provider 2ms; post-provider 1090ms; response true
    - active window: metadata scans 2 (116.71ms total, max 76.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5601ms; provider 2ms; post-provider 1090ms; unknown 3349.22ms; source agent.prepare 1584.55ms; plugins.metadata.scan 667.23ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6800 ms | 4881 ms | 1919 ms | 5 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260901-052613-2858fa/kova-agent-cold-warm-message-2c26dd1d-kova-260901-052613-2858fa/openclaw/timeline.jsonl |
  | warm | 5601 ms | 3774 ms | 1827 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260901-052613-2858fa/kova-agent-cold-warm-message-2c26dd1d-kova-260901-052613-2858fa/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 4328 ms | 1423 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1625 ms | 493 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 887 ms | 294 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup` | 6 | 0 | 352 ms | 109 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 164 ms | 164 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x15 | 15 | 0 | 2858 ms | 934 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1169 ms | 400 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 701 ms | 361 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 140 ms | 140 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 116 ms | 76 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 54 ms | 54 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260901-052613-2858fa-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260901-052613-2858fa-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260901-052613-2858fa-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260901-052613-2858fa/kova-gateway-performance-man-d48bd949-kova-260901-052613-2858fa
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260901-052613-2858fa/kova-agent-cold-warm-message-2c26dd1d-kova-260901-052613-2858fa

## Target Cleanup

- Runtime: `kova-local-mti85b1t-40y-6c55c467`
- Result: removed
- Duration: 788ms

