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
| Run ID | `kova-260907-052521-b4e96d` |
| Generated | 2026-09-07T05:26:46.212Z |
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
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 142% | 4604ms | 4514ms | 2572ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 730.6 MB | 4604ms | 4514ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 730.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 608.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 142% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 468.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 122.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 18.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260907-052521-b4e96d/kova-agent-cold-warm-message-2c26dd1d-kova-260907-052521-b4e96d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 608.9 MB; tracked total 730.6 MB; max CPU 142%; samples 15; roles command-tree 730.6MB/152.5%, agent-process 608.9MB/142%, status-cli 468.1MB/152.5%, agent-cli 122.3MB/18.6%
- agent: turn 4604ms; cold/warm 4604ms/4514ms; cold-warm delta 90ms; pre-provider 2572ms; provider 1917ms; metadata scans 11 (355.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4599.5ms; max 4604ms; pre-provider p95 2556.35ms
- agent CLI attribution: cold known 1804ms / unattributed 768ms; warm known 1443ms / unattributed 816ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 794.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4604ms; pre-provider 2572ms; provider 1917ms; post-provider 115ms; response true
    - active window: metadata scans 7 (247.43ms total, max 75.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2572ms; provider 1917ms; post-provider 115ms; unknown 1527.79ms; source plugins.metadata.scan 776.64ms; agent.prepare 267.57ms
  - warm: total 4514ms; pre-provider 2259ms; provider 2158ms; post-provider 97ms; response true
    - active window: metadata scans 4 (107.77ms total, max 58.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2259ms; provider 2158ms; post-provider 97ms; unknown 1214.79ms; source plugins.metadata.scan 776.64ms; agent.prepare 267.57ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2572 ms | 1804 ms | 768 ms | 1917 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260907-052521-b4e96d/kova-agent-cold-warm-message-2c26dd1d-kova-260907-052521-b4e96d/openclaw/timeline.jsonl |
  | warm | 2259 ms | 1443 ms | 816 ms | 2158 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260907-052521-b4e96d/kova-agent-cold-warm-message-2c26dd1d-kova-260907-052521-b4e96d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 2573 ms | 697 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 279 ms | 134 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x4, `startup`, `agent.startup` x2 | 7 | 0 | 248 ms | 75 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 137 ms | 38 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1796 ms | 794 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 281 ms | 133 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 132 ms | 30 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 107 ms | 58 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 58 ms | 58 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260907-052521-b4e96d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260907-052521-b4e96d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260907-052521-b4e96d-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260907-052521-b4e96d/kova-agent-cold-warm-message-2c26dd1d-kova-260907-052521-b4e96d

## Target Cleanup

- Runtime: `kova-local-mtqsraks-40f-a53d863a`
- Result: removed
- Duration: 551ms

