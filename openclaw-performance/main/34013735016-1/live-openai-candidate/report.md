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
| Run ID | `kova-260906-052240-c503ca` |
| Generated | 2026-09-06T05:24:02.548Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 129% | 4566ms | 3700ms | 1804ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 769.6 MB | 4566ms | 3700ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 769.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 639.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 129% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 129.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 15.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 5.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 0% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260906-052240-c503ca/kova-agent-cold-warm-message-2c26dd1d-kova-260906-052240-c503ca
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 639.9 MB; tracked total 769.6 MB; max CPU 129%; samples 13; roles command-tree 769.6MB/144.8%, agent-process 639.9MB/129%, agent-cli 129.7MB/15.8%, status-cli 5.9MB/0%
- agent: turn 4566ms; cold/warm 4566ms/3700ms; cold-warm delta 866ms; pre-provider 1804ms; provider 2625ms; metadata scans 12 (286.47ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4522.7ms; max 4566ms; pre-provider p95 1793.5ms
- agent CLI attribution: cold known 1280ms / unattributed 524ms; warm known 1008ms / unattributed 586ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 507.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4566ms; pre-provider 1804ms; provider 2625ms; post-provider 137ms; response true
    - active window: metadata scans 8 (189.7ms total, max 56.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1804ms; provider 2625ms; post-provider 137ms; unknown 955.67ms; source plugins.metadata.scan 644.54ms; agent.prepare 203.79ms
  - warm: total 3700ms; pre-provider 1594ms; provider 2001ms; post-provider 105ms; response true
    - active window: metadata scans 4 (96.77ms total, max 54.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1594ms; provider 2001ms; post-provider 105ms; unknown 745.67ms; source plugins.metadata.scan 644.54ms; agent.prepare 203.79ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1804 ms | 1280 ms | 524 ms | 2625 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260906-052240-c503ca/kova-agent-cold-warm-message-2c26dd1d-kova-260906-052240-c503ca/openclaw/timeline.jsonl |
  | warm | 1594 ms | 1008 ms | 586 ms | 2001 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260906-052240-c503ca/kova-agent-cold-warm-message-2c26dd1d-kova-260906-052240-c503ca/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x24 | 24 | 0 | 1773 ms | 489 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 195 ms | 89 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 190 ms | 56 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 109 ms | 31 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 14 ms | 14 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1214 ms | 507 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 199 ms | 104 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 98 ms | 54 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 95 ms | 23 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 15 ms | 15 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260906-052240-c503ca-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260906-052240-c503ca-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260906-052240-c503ca-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260906-052240-c503ca/kova-agent-cold-warm-message-2c26dd1d-kova-260906-052240-c503ca

## Target Cleanup

- Runtime: `kova-local-mtpd8074-40q-91eb0a00`
- Result: removed
- Duration: 421ms

