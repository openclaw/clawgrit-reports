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
| Run ID | `kova-260803-061911-a832bc` |
| Generated | 2026-08-03T06:20:28.804Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 156% | 6214ms | 6933ms | 4562ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1074.8 MB | 6214ms | 6933ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1074.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 899.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 601.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 175.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 24.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260803-061911-a832bc/kova-agent-cold-warm-message-2c26dd1d-kova-260803-061911-a832bc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 899.2 MB; tracked total 1074.8 MB; max CPU 156%; samples 19; roles command-tree 1074.8MB/173.5%, agent-process 899.2MB/156%, status-cli 601.3MB/171.5%, agent-cli 175.6MB/24.7%
- agent: turn 6933ms; cold/warm 6214ms/6933ms; cold-warm delta 0ms; pre-provider 4431ms; provider 2144ms; metadata scans 54 (562.37ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6897.05ms; max 6933ms; pre-provider p95 4555.45ms
- agent CLI attribution: cold known 361ms / unattributed 4201ms; warm known 364ms / unattributed 4067ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1492.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6214ms; pre-provider 4562ms; provider 1291ms; post-provider 361ms; response true
    - active window: metadata scans 27 (277.88ms total, max 46.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4562ms; provider 1291ms; post-provider 361ms; unknown 2985.44ms; source plugins.metadata.scan 1136.08ms; agent.prepare 440.48ms
  - warm: total 6933ms; pre-provider 4431ms; provider 2144ms; post-provider 358ms; response true
    - active window: metadata scans 27 (284.49ms total, max 38.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4431ms; provider 2144ms; post-provider 358ms; unknown 2854.44ms; source plugins.metadata.scan 1136.08ms; agent.prepare 440.48ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4562 ms | 361 ms | 4201 ms | 1291 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260803-061911-a832bc/kova-agent-cold-warm-message-2c26dd1d-kova-260803-061911-a832bc/openclaw/timeline.jsonl |
  | warm | 4431 ms | 364 ms | 4067 ms | 2144 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260803-061911-a832bc/kova-agent-cold-warm-message-2c26dd1d-kova-260803-061911-a832bc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x2, `agent.startup` x4 | 24 | 0 | 256 ms | 46 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 216 ms | 112 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x2, `agent.startup` x4 | 24 | 0 | 255 ms | 39 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 225 ms | 120 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260803-061911-a832bc-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260803-061911-a832bc-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260803-061911-a832bc-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260803-061911-a832bc/kova-agent-cold-warm-message-2c26dd1d-kova-260803-061911-a832bc

## Target Cleanup

- Runtime: `kova-local-mscu9pzm-3yu-82ded57a`
- Result: removed
- Duration: 405ms

