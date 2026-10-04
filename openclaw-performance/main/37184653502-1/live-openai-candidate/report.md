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
| Run ID | `kova-261004-070539-d8c0bd` |
| Generated | 2026-10-04T07:07:54.794Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 202.7% | 10612ms | 10360ms | 9174ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1163.2 MB | 10612ms | 10360ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1163.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1063.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 202.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 576.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 99.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 92.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261004-070539-d8c0bd/kova-agent-cold-warm-message-2c26dd1d-kova-261004-070539-d8c0bd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1063.8 MB; tracked total 1163.2 MB; max CPU 202.7%; samples 31; roles command-tree 1163.2MB/212.9%, agent-process 1063.8MB/202.7%, status-cli 576.4MB/189.3%, agent-cli 99.4MB/92.2%
- agent: turn 10612ms; cold/warm 10612ms/10360ms; cold-warm delta 252ms; pre-provider 9174ms; provider 1146ms; metadata scans 12 (349.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10599.4ms; max 10612ms; pre-provider p95 9156.1ms
- agent CLI attribution: cold known 4374ms / unattributed 4800ms; warm known 4578ms / unattributed 4238ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2206.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 10612ms; pre-provider 9174ms; provider 1146ms; post-provider 292ms; response true
    - active window: metadata scans 6 (176.06ms total, max 77.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9174ms; provider 1146ms; post-provider 292ms; unknown 7608.57ms; source agent.prepare 795.74ms; plugins.metadata.scan 769.69ms
  - warm: total 10360ms; pre-provider 8816ms; provider 1269ms; post-provider 275ms; response true
    - active window: metadata scans 6 (173.12ms total, max 77.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8816ms; provider 1269ms; post-provider 275ms; unknown 7250.57ms; source agent.prepare 795.74ms; plugins.metadata.scan 769.69ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9174 ms | 4374 ms | 4800 ms | 1146 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261004-070539-d8c0bd/kova-agent-cold-warm-message-2c26dd1d-kova-261004-070539-d8c0bd/openclaw/timeline.jsonl |
  | warm | 8816 ms | 4578 ms | 4238 ms | 1269 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261004-070539-d8c0bd/kova-agent-cold-warm-message-2c26dd1d-kova-261004-070539-d8c0bd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 5718 ms | 2206 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 933 ms | 585 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 278 ms | 118 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 176 ms | 78 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 4742 ms | 1812 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1377 ms | 817 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 517 ms | 309 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 172 ms | 77 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261004-070539-d8c0bd-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261004-070539-d8c0bd-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261004-070539-d8c0bd-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261004-070539-d8c0bd/kova-agent-cold-warm-message-2c26dd1d-kova-261004-070539-d8c0bd

## Target Cleanup

- Runtime: `kova-local-muth8aqs-3th-5073e3a3`
- Result: removed
- Duration: 479ms

