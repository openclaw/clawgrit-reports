# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 1 (PASS:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260909-052356-4ab0cd` |
| Generated | 2026-09-09T05:25:26.671Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 1 / 1 |
| Auth | live (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 1 |
| Scenarios | 1 |
| States | 1 |
| PASS | 1 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 139.1% | 4759ms | 3508ms | 2117ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 680.9 MB | 4759ms | 3508ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 680.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 139.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 601.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 139.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 516.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 130.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 79.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 34.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260909-052356-4ab0cd/kova-agent-cold-warm-message-2c26dd1d-kova-260909-052356-4ab0cd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 601.7 MB; tracked total 680.9 MB; max CPU 139.1%; samples 14; roles command-tree 680.9MB/139.1%, agent-process 601.7MB/139.1%, status-cli 516.4MB/130.8%, agent-cli 79.2MB/34.8%
- agent: turn 4759ms; cold/warm 4759ms/3508ms; cold-warm delta 1251ms; pre-provider 2117ms; provider 2545ms; metadata scans 11 (421.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4696.45ms; max 4759ms; pre-provider p95 2105.25ms
- agent CLI attribution: cold known 1483ms / unattributed 634ms; warm known 1164ms / unattributed 718ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 608.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4759ms; pre-provider 2117ms; provider 2545ms; post-provider 97ms; response true
    - active window: metadata scans 7 (266.31ms total, max 136.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2117ms; provider 2545ms; post-provider 97ms; unknown 1106.94ms; source plugins.metadata.scan 800.04ms; agent.prepare 210.02ms
  - warm: total 3508ms; pre-provider 1882ms; provider 1556ms; post-provider 70ms; response true
    - active window: metadata scans 4 (155.56ms total, max 118.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1882ms; provider 1556ms; post-provider 70ms; unknown 871.94ms; source plugins.metadata.scan 800.04ms; agent.prepare 210.02ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2117 ms | 1483 ms | 634 ms | 2545 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260909-052356-4ab0cd/kova-agent-cold-warm-message-2c26dd1d-kova-260909-052356-4ab0cd/openclaw/timeline.jsonl |
  | warm | 1882 ms | 1164 ms | 718 ms | 1556 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260909-052356-4ab0cd/kova-agent-cold-warm-message-2c26dd1d-kova-260909-052356-4ab0cd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1907 ms | 599 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4, `agent.startup` x2 | 7 | 0 | 266 ms | 137 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 224 ms | 97 ms |
  | cold | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 108 ms | 31 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1280 ms | 512 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 209 ms | 99 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 156 ms | 118 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 103 ms | 23 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260909-052356-4ab0cd-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260909-052356-4ab0cd-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260909-052356-4ab0cd-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260909-052356-4ab0cd/kova-agent-cold-warm-message-2c26dd1d-kova-260909-052356-4ab0cd

## Target Cleanup

- Runtime: `kova-local-mttnl6bm-40m-65ad1be6`
- Result: removed
- Duration: 475ms

