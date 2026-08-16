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
- Required obligations: 22 total, 0 missing, 0 failed
- Categories: command: 7, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260816-052003-14b531` |
| Generated | 2026-08-16T05:21:45.087Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 149% | 4542ms | 4167ms | 3414ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1046.8 MB | 4542ms | 4167ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1046.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 860.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 149% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 609.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 186.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 26.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260816-052003-14b531/kova-agent-cold-warm-message-2c26dd1d-kova-260816-052003-14b531
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 860.1 MB; tracked total 1046.8 MB; max CPU 149%; samples 15; roles command-tree 1046.8MB/176.4%, agent-process 860.1MB/149%, status-cli 609.8MB/176.4%, agent-cli 186.7MB/26.1%
- agent: turn 4542ms; cold/warm 4542ms/4167ms; cold-warm delta 375ms; pre-provider 3414ms; provider 1034ms; metadata scans 26 (415.22ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4523.25ms; max 4542ms; pre-provider p95 3392ms
- agent CLI attribution: cold known 393ms / unattributed 3021ms; warm known 177ms / unattributed 2797ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1591.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4542ms; pre-provider 3414ms; provider 1034ms; post-provider 94ms; response true
    - active window: metadata scans 18 (316.99ms total, max 50.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3414ms; provider 1034ms; post-provider 94ms; unknown 1896.77ms; source plugins.metadata.scan 1358.22ms; agent.prepare 159.01ms
  - warm: total 4167ms; pre-provider 2974ms; provider 1101ms; post-provider 92ms; response true
    - active window: metadata scans 8 (98.23ms total, max 24.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2974ms; provider 1101ms; post-provider 92ms; unknown 1456.77ms; source plugins.metadata.scan 1358.22ms; agent.prepare 159.01ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3414 ms | 393 ms | 3021 ms | 1034 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260816-052003-14b531/kova-agent-cold-warm-message-2c26dd1d-kova-260816-052003-14b531/openclaw/timeline.jsonl |
  | warm | 2974 ms | 177 ms | 2797 ms | 1101 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260816-052003-14b531/kova-agent-cold-warm-message-2c26dd1d-kova-260816-052003-14b531/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x14, `startup` x2, `agent.startup` x2 | 18 | 0 | 314 ms | 50 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 79 ms | 22 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x4, `startup` x2, `agent.startup` x2 | 8 | 0 | 99 ms | 25 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 78 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260816-052003-14b531-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260816-052003-14b531-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260816-052003-14b531-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260816-052003-14b531/kova-agent-cold-warm-message-2c26dd1d-kova-260816-052003-14b531

## Target Cleanup

- Runtime: `kova-local-msvcvr6v-3z9-9d44a4a4`
- Result: removed
- Duration: 390ms

