# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260928-053549-28ddec` |
| Generated | 2026-09-28T05:37:48.702Z |
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
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1071.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1071.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1071.8 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1167.4 MB, agent-process 1071.8 MB, status-cli 511.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1071.8 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 205.4% | 9988ms | 9537ms | 8482ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1167.4 MB | 9988ms | 9537ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1167.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 215.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1071.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 205.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 511.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 95.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 111.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260928-053549-28ddec/kova-agent-cold-warm-message-2c26dd1d-kova-260928-053549-28ddec
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1071.8 MB; tracked total 1167.4 MB; max CPU 205.4%; samples 28; roles command-tree 1167.4MB/215.3%, agent-process 1071.8MB/205.4%, status-cli 511.5MB/164.1%, agent-cli 95.6MB/111.2%
- agent: turn 9988ms; cold/warm 9988ms/9537ms; cold-warm delta 451ms; pre-provider 8482ms; provider 1259ms; metadata scans 12 (346.42ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9965.45ms; max 9988ms; pre-provider p95 8454.75ms
- agent CLI attribution: cold known 4773ms / unattributed 3709ms; warm known 4313ms / unattributed 3624ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2224.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-process peak RSS 1071.8 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1167.4 MB, agent-process 1071.8 MB, status-cli 511.5 MB
- Agent turns:
  - cold: total 9988ms; pre-provider 8482ms; provider 1259ms; post-provider 247ms; response true
    - active window: metadata scans 6 (161.86ms total, max 70.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8482ms; provider 1259ms; post-provider 247ms; unknown 6476.5ms; source agent.prepare 1250.22ms; plugins.metadata.scan 755.28ms
  - warm: total 9537ms; pre-provider 7937ms; provider 1266ms; post-provider 334ms; response true
    - active window: metadata scans 6 (184.56ms total, max 77.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7937ms; provider 1266ms; post-provider 334ms; unknown 5931.5ms; source agent.prepare 1250.22ms; plugins.metadata.scan 755.28ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8482 ms | 4773 ms | 3709 ms | 1259 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260928-053549-28ddec/kova-agent-cold-warm-message-2c26dd1d-kova-260928-053549-28ddec/openclaw/timeline.jsonl |
  | warm | 7937 ms | 4313 ms | 3624 ms | 1266 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260928-053549-28ddec/kova-agent-cold-warm-message-2c26dd1d-kova-260928-053549-28ddec/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 5339 ms | 2224 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1315 ms | 958 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 681 ms | 429 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 162 ms | 70 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 4213 ms | 1723 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1520 ms | 1108 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 570 ms | 324 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 186 ms | 78 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 41 ms | 41 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260928-053549-28ddec-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260928-053549-28ddec-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260928-053549-28ddec-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260928-053549-28ddec/kova-agent-cold-warm-message-2c26dd1d-kova-260928-053549-28ddec

## Target Cleanup

- Runtime: `kova-local-muktdn44-3se-8109ddba`
- Result: removed
- Duration: 458ms

