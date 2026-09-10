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
| Run ID | `kova-260910-052338-7aa072` |
| Generated | 2026-09-10T05:25:42.632Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 13ms | 629.6MB | n/a | 151.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 220.4% | 4269ms | 4665ms | 3749ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 13ms | 629.6 MB | 1313.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 913 MB | 4269ms | 4665ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 839.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 220.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 839.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 220.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 751.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 220.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 664.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 629.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 151.8% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 389.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 164.4% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 629.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 160.2% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 301.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 160.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260910-052338-7aa072/kova-agent-cold-warm-message-2c26dd1d-kova-260910-052338-7aa072
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 751.8 MB; tracked total 913 MB; max CPU 220.4%; samples 51; roles agent-cli 839.7MB/220.4%, command-tree 839.7MB/220.4%, agent-process 751.8MB/220.4%, status-cli 664.3MB/153%; performance thresholds skipped 15 (instrumented)
- agent: turn 4665ms; cold/warm 4269ms/4665ms; cold-warm delta 0ms; pre-provider 4173ms; provider 1ms; metadata scans 7 (403.66ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4645.2ms; max 4665ms; pre-provider p95 4151.8ms
- agent CLI attribution: cold known 2568ms / unattributed 1181ms; warm known 2410ms / unattributed 1763ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 729.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 16/16/14
- Agent turns:
  - cold: total 4269ms; pre-provider 3749ms; provider 3ms; post-provider 517ms; response true
    - active window: metadata scans 5 (177.87ms total, max 70.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3749ms; provider 3ms; post-provider 517ms; unknown 2488.86ms; source agent.prepare 699.17ms; plugins.metadata.scan 560.97ms
  - warm: total 4665ms; pre-provider 4173ms; provider 1ms; post-provider 491ms; response true
    - active window: metadata scans 2 (225.79ms total, max 193.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4173ms; provider 1ms; post-provider 491ms; unknown 2912.86ms; source agent.prepare 699.17ms; plugins.metadata.scan 560.97ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3749 ms | 2568 ms | 1181 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260910-052338-7aa072/kova-agent-cold-warm-message-2c26dd1d-kova-260910-052338-7aa072/openclaw/timeline.jsonl |
  | warm | 4173 ms | 2410 ms | 1763 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260910-052338-7aa072/kova-agent-cold-warm-message-2c26dd1d-kova-260910-052338-7aa072/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 2369 ms | 730 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 870 ms | 281 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 370 ms | 115 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 176 ms | 70 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 83 ms | 83 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 46 ms | 46 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1709 ms | 623 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 756 ms | 223 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 327 ms | 120 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 226 ms | 194 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 95 ms | 95 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 50 ms | 50 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260910-052338-7aa072-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260910-052338-7aa072-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260910-052338-7aa072-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260910-052338-7aa072/kova-gateway-performance-man-d48bd949-kova-260910-052338-7aa072
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260910-052338-7aa072/kova-agent-cold-warm-message-2c26dd1d-kova-260910-052338-7aa072

## Target Cleanup

- Runtime: `kova-local-mtv30n1c-40g-e38e920e`
- Result: removed
- Duration: 478ms

