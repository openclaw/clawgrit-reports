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
| Run ID | `kova-260804-061140-2609df` |
| Generated | 2026-08-04T06:12:54.951Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 150% | 6066ms | 5908ms | 4343ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1076.1 MB | 6066ms | 5908ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1076.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 900.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 150% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 602.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 175.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 24.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260804-061140-2609df/kova-agent-cold-warm-message-2c26dd1d-kova-260804-061140-2609df
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 900.5 MB; tracked total 1076.1 MB; max CPU 150%; samples 18; roles command-tree 1076.1MB/180.1%, agent-process 900.5MB/150%, status-cli 602.3MB/180.1%, agent-cli 175.6MB/24.5%
- agent: turn 6066ms; cold/warm 6066ms/5908ms; cold-warm delta 158ms; pre-provider 4343ms; provider 1361ms; metadata scans 54 (519.16ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6058.1ms; max 6066ms; pre-provider p95 4336.3ms
- agent CLI attribution: cold known 340ms / unattributed 4003ms; warm known 341ms / unattributed 3868ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1429.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6066ms; pre-provider 4343ms; provider 1361ms; post-provider 362ms; response true
    - active window: metadata scans 27 (258.28ms total, max 35.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4343ms; provider 1361ms; post-provider 362ms; unknown 2830.02ms; source plugins.metadata.scan 1076.1ms; agent.prepare 436.88ms
  - warm: total 5908ms; pre-provider 4209ms; provider 1375ms; post-provider 324ms; response true
    - active window: metadata scans 27 (260.88ms total, max 35.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4209ms; provider 1375ms; post-provider 324ms; unknown 2696.02ms; source plugins.metadata.scan 1076.1ms; agent.prepare 436.88ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4343 ms | 340 ms | 4003 ms | 1361 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260804-061140-2609df/kova-agent-cold-warm-message-2c26dd1d-kova-260804-061140-2609df/openclaw/timeline.jsonl |
  | warm | 4209 ms | 341 ms | 3868 ms | 1375 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260804-061140-2609df/kova-agent-cold-warm-message-2c26dd1d-kova-260804-061140-2609df/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x2, `agent.startup` x4 | 24 | 0 | 233 ms | 35 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 222 ms | 118 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x2, `agent.startup` x4 | 24 | 0 | 237 ms | 36 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 214 ms | 115 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260804-061140-2609df-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260804-061140-2609df-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260804-061140-2609df-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260804-061140-2609df/kova-agent-cold-warm-message-2c26dd1d-kova-260804-061140-2609df

## Target Cleanup

- Runtime: `kova-local-mse9fwfa-3yx-36d94063`
- Result: removed
- Duration: 394ms

