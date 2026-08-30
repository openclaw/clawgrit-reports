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
| Run ID | `kova-260830-052130-4bf53a` |
| Generated | 2026-08-30T05:23:19.200Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 9ms | 582.9MB | n/a | 141% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 144% | 3670ms | 3413ms | 2950ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 9ms | 582.9 MB | 1155.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 882.9 MB | 3670ms | 3413ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 808.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 243.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 679.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 410.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 187% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 618.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 181.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 582.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 141% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 437.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 582.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 141% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 332.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 143% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260830-052130-4bf53a/kova-agent-cold-warm-message-2c26dd1d-kova-260830-052130-4bf53a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 679.3 MB; tracked total 882.9 MB; max CPU 144%; samples 40; roles command-tree 808.7MB/243.9%, agent-process 679.3MB/144%, agent-cli 410.1MB/187%, status-cli 618.8MB/181.8%; performance thresholds skipped 15 (instrumented)
- agent: turn 3670ms; cold/warm 3670ms/3413ms; cold-warm delta 257ms; pre-provider 2950ms; provider 3ms; metadata scans 8 (238.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3657.15ms; max 3670ms; pre-provider p95 2941.35ms
- agent CLI attribution: cold known 2065ms / unattributed 885ms; warm known 1840ms / unattributed 937ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 654.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 8/8/8
- Agent turns:
  - cold: total 3670ms; pre-provider 2950ms; provider 3ms; post-provider 717ms; response true
    - active window: metadata scans 6 (179.58ms total, max 51.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2950ms; provider 3ms; post-provider 717ms; unknown 1834.09ms; source agent.prepare 745.83ms; plugins.metadata.scan 370.08ms
  - warm: total 3413ms; pre-provider 2777ms; provider 1ms; post-provider 635ms; response true
    - active window: metadata scans 2 (58.83ms total, max 43.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2777ms; provider 1ms; post-provider 635ms; unknown 1661.09ms; source agent.prepare 745.83ms; plugins.metadata.scan 370.08ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2950 ms | 2065 ms | 885 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260830-052130-4bf53a/kova-agent-cold-warm-message-2c26dd1d-kova-260830-052130-4bf53a/openclaw/timeline.jsonl |
  | warm | 2777 ms | 1840 ms | 937 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260830-052130-4bf53a/kova-agent-cold-warm-message-2c26dd1d-kova-260830-052130-4bf53a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x29 | 29 | 0 | 1974 ms | 654 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 543 ms | 211 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 364 ms | 189 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 179 ms | 52 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 13 ms | 13 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1312 ms | 494 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 597 ms | 195 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 383 ms | 223 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 59 ms | 44 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260830-052130-4bf53a-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260830-052130-4bf53a-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260830-052130-4bf53a-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260830-052130-4bf53a/kova-gateway-performance-man-d48bd949-kova-260830-052130-4bf53a
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260830-052130-4bf53a/kova-agent-cold-warm-message-2c26dd1d-kova-260830-052130-4bf53a

## Target Cleanup

- Runtime: `kova-local-mtfd3iy4-3wa-b175b75b`
- Result: removed
- Duration: 465ms

