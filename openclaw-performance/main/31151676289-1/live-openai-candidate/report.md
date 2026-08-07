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
| Run ID | `kova-260807-054713-1f0bb0` |
| Generated | 2026-08-07T05:48:34.771Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 155% | 5753ms | 5572ms | 4549ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1111.7 MB | 5753ms | 5572ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1111.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 935.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 658.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 176.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 24.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260807-054713-1f0bb0/kova-agent-cold-warm-message-2c26dd1d-kova-260807-054713-1f0bb0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 935.7 MB; tracked total 1111.7 MB; max CPU 155%; samples 18; roles command-tree 1111.7MB/177.3%, agent-process 935.7MB/155%, status-cli 658.8MB/177.3%, agent-cli 176.6MB/24.5%
- agent: turn 5753ms; cold/warm 5753ms/5572ms; cold-warm delta 181ms; pre-provider 4549ms; provider 902ms; metadata scans 56 (1021.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5743.95ms; max 5753ms; pre-provider p95 4527.4ms
- agent CLI attribution: cold known 609ms / unattributed 3940ms; warm known 516ms / unattributed 3601ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1571.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5753ms; pre-provider 4549ms; provider 902ms; post-provider 302ms; response true
    - active window: metadata scans 29 (526.63ms total, max 30.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4549ms; provider 902ms; post-provider 302ms; unknown 1976.33ms; source plugins.metadata.scan 1780.78ms; agent.prepare 791.89ms
  - warm: total 5572ms; pre-provider 4117ms; provider 916ms; post-provider 539ms; response true
    - active window: metadata scans 27 (495.15ms total, max 31.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4117ms; provider 916ms; post-provider 539ms; unknown 1544.33ms; source plugins.metadata.scan 1780.78ms; agent.prepare 791.89ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4549 ms | 609 ms | 3940 ms | 902 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260807-054713-1f0bb0/kova-agent-cold-warm-message-2c26dd1d-kova-260807-054713-1f0bb0/openclaw/timeline.jsonl |
  | warm | 4117 ms | 516 ms | 3601 ms | 916 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260807-054713-1f0bb0/kova-agent-cold-warm-message-2c26dd1d-kova-260807-054713-1f0bb0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x4, `agent.startup` x4 | 26 | 0 | 467 ms | 30 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 431 ms | 257 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `agent.startup` x4, `cli.command-startup` x2 | 24 | 0 | 405 ms | 21 ms |
  | warm | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 364 ms | 217 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260807-054713-1f0bb0-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260807-054713-1f0bb0-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260807-054713-1f0bb0-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260807-054713-1f0bb0/kova-agent-cold-warm-message-2c26dd1d-kova-260807-054713-1f0bb0

## Target Cleanup

- Runtime: `kova-local-msiiw0uz-3yz-2d87fd07`
- Result: removed
- Duration: 392ms

