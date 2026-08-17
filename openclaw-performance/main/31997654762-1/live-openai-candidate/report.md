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
| Run ID | `kova-260817-052310-77eb05` |
| Generated | 2026-08-17T05:24:57.164Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 154% | 4962ms | 4350ms | 3850ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1073.7 MB | 4962ms | 4350ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1073.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 885.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 610.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 188.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 29.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260817-052310-77eb05/kova-agent-cold-warm-message-2c26dd1d-kova-260817-052310-77eb05
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 885.1 MB; tracked total 1073.7 MB; max CPU 154%; samples 15; roles command-tree 1073.7MB/175.3%, agent-process 885.1MB/154%, status-cli 610.6MB/175.3%, agent-cli 188.6MB/29.2%
- agent: turn 4962ms; cold/warm 4962ms/4350ms; cold-warm delta 612ms; pre-provider 3850ms; provider 943ms; metadata scans 26 (512.3ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4931.4ms; max 4962ms; pre-provider p95 3823.3ms
- agent CLI attribution: cold known 492ms / unattributed 3358ms; warm known 216ms / unattributed 3100ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1789.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4962ms; pre-provider 3850ms; provider 943ms; post-provider 169ms; response true
    - active window: metadata scans 18 (385.82ms total, max 57.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3850ms; provider 943ms; post-provider 169ms; unknown 2055.95ms; source plugins.metadata.scan 1598.03ms; agent.prepare 196.02ms
  - warm: total 4350ms; pre-provider 3316ms; provider 876ms; post-provider 158ms; response true
    - active window: metadata scans 8 (126.48ms total, max 35.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3316ms; provider 876ms; post-provider 158ms; unknown 1521.95ms; source plugins.metadata.scan 1598.03ms; agent.prepare 196.02ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3850 ms | 492 ms | 3358 ms | 943 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260817-052310-77eb05/kova-agent-cold-warm-message-2c26dd1d-kova-260817-052310-77eb05/openclaw/timeline.jsonl |
  | warm | 3316 ms | 216 ms | 3100 ms | 876 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260817-052310-77eb05/kova-agent-cold-warm-message-2c26dd1d-kova-260817-052310-77eb05/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x14, `startup` x2, `agent.startup` x2 | 18 | 0 | 387 ms | 57 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 105 ms | 32 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x4, `startup` x2, `agent.startup` x2 | 8 | 0 | 126 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 90 ms | 24 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260817-052310-77eb05-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260817-052310-77eb05-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260817-052310-77eb05-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260817-052310-77eb05/kova-agent-cold-warm-message-2c26dd1d-kova-260817-052310-77eb05

## Target Cleanup

- Runtime: `kova-local-mswsflgt-3xn-b79d9998`
- Result: removed
- Duration: 486ms

