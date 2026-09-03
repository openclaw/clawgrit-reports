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
| Run ID | `kova-260903-054856-c656b7` |
| Generated | 2026-09-03T05:50:52.687Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 10ms | 612.5MB | n/a | 143% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 143% | 4272ms | 4013ms | 3444ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 10ms | 612.5 MB | 1198.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 892.3 MB | 4272ms | 4013ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 819.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 235.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 672.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 143% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 393.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 634.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 612.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 143% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 308.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 612.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 143% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 446.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260903-054856-c656b7/kova-agent-cold-warm-message-2c26dd1d-kova-260903-054856-c656b7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 672.8 MB; tracked total 892.3 MB; max CPU 143%; samples 45; roles command-tree 819.2MB/235.6%, agent-process 672.8MB/143%, agent-cli 393.2MB/192.8%, status-cli 634.7MB/192.8%; performance thresholds skipped 15 (instrumented)
- agent: turn 4272ms; cold/warm 4272ms/4013ms; cold-warm delta 259ms; pre-provider 3444ms; provider 3ms; metadata scans 8 (206.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4259.05ms; max 4272ms; pre-provider p95 3428.6ms
- agent CLI attribution: cold known 2421ms / unattributed 1023ms; warm known 2000ms / unattributed 1136ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 690.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 7/7/7
- Agent turns:
  - cold: total 4272ms; pre-provider 3444ms; provider 3ms; post-provider 825ms; response true
    - active window: metadata scans 6 (147.94ms total, max 46.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3444ms; provider 3ms; post-provider 825ms; unknown 2373.34ms; source agent.prepare 752.32ms; plugins.metadata.scan 318.34ms
  - warm: total 4013ms; pre-provider 3136ms; provider 1ms; post-provider 876ms; response true
    - active window: metadata scans 2 (58.56ms total, max 43.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3136ms; provider 1ms; post-provider 876ms; unknown 2065.34ms; source agent.prepare 752.32ms; plugins.metadata.scan 318.34ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3444 ms | 2421 ms | 1023 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260903-054856-c656b7/kova-agent-cold-warm-message-2c26dd1d-kova-260903-054856-c656b7/openclaw/timeline.jsonl |
  | warm | 3136 ms | 2000 ms | 1136 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260903-054856-c656b7/kova-agent-cold-warm-message-2c26dd1d-kova-260903-054856-c656b7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 2161 ms | 690 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 793 ms | 291 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 427 ms | 235 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 148 ms | 47 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 90 ms | 90 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 43 ms | 43 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1431 ms | 565 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 728 ms | 239 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 327 ms | 142 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 89 ms | 89 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 58 ms | 43 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260903-054856-c656b7-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260903-054856-c656b7-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260903-054856-c656b7-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260903-054856-c656b7/kova-gateway-performance-man-d48bd949-kova-260903-054856-c656b7
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260903-054856-c656b7/kova-agent-cold-warm-message-2c26dd1d-kova-260903-054856-c656b7

## Target Cleanup

- Runtime: `kova-local-mtl3u838-436-632b2b6a`
- Result: removed
- Duration: 478ms

