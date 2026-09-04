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
| Run ID | `kova-260904-052919-6cfe52` |
| Generated | 2026-09-04T05:30:51.315Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 129% | 4077ms | 3929ms | 1923ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 672 MB | 4077ms | 3929ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 672 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 145.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 541.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 129% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 130.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 68.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 5.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 0% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260904-052919-6cfe52/kova-agent-cold-warm-message-2c26dd1d-kova-260904-052919-6cfe52
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 541.8 MB; tracked total 672 MB; max CPU 129%; samples 13; roles command-tree 672MB/145.9%, agent-process 541.8MB/129%, agent-cli 130.7MB/68.3%, status-cli 5.9MB/0%
- agent: turn 4077ms; cold/warm 4077ms/3929ms; cold-warm delta 148ms; pre-provider 1923ms; provider 2033ms; metadata scans 12 (291.35ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4069.6ms; max 4077ms; pre-provider p95 1917.05ms
- agent CLI attribution: cold known 1342ms / unattributed 581ms; warm known 1167ms / unattributed 637ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 597.88ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4077ms; pre-provider 1923ms; provider 2033ms; post-provider 121ms; response true
    - active window: metadata scans 8 (198.78ms total, max 59.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1923ms; provider 2033ms; post-provider 121ms; unknown 1030.73ms; source plugins.metadata.scan 690.46ms; agent.prepare 201.81ms
  - warm: total 3929ms; pre-provider 1804ms; provider 2010ms; post-provider 115ms; response true
    - active window: metadata scans 4 (92.57ms total, max 47.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1804ms; provider 2010ms; post-provider 115ms; unknown 911.73ms; source plugins.metadata.scan 690.46ms; agent.prepare 201.81ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1923 ms | 1342 ms | 581 ms | 2033 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260904-052919-6cfe52/kova-agent-cold-warm-message-2c26dd1d-kova-260904-052919-6cfe52/openclaw/timeline.jsonl |
  | warm | 1804 ms | 1167 ms | 637 ms | 2010 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260904-052919-6cfe52/kova-agent-cold-warm-message-2c26dd1d-kova-260904-052919-6cfe52/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 1867 ms | 518 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 211 ms | 102 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 199 ms | 59 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 108 ms | 31 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x5, `agent.startup` x2 | 7 | 0 | 9 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1445 ms | 598 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 243 ms | 125 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 95 ms | 22 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 93 ms | 48 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | warm | `plugins.metadata.freeze` | `agent.startup` x2, `cli.command-startup` | 3 | 0 | 5 ms | 2 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260904-052919-6cfe52-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260904-052919-6cfe52-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260904-052919-6cfe52-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260904-052919-6cfe52/kova-agent-cold-warm-message-2c26dd1d-kova-260904-052919-6cfe52

## Target Cleanup

- Runtime: `kova-local-mtmiku5l-41q-f2529d58`
- Result: removed
- Duration: 527ms

