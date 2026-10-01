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
| Run ID | `kova-261001-052643-e7fd32` |
| Generated | 2026-10-01T05:29:10.020Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 237.3% | 11864ms | 10473ms | 9908ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1233.4 MB | 11864ms | 10473ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1233.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 247% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1136.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 237.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 568.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 97 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 106.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261001-052643-e7fd32/kova-agent-cold-warm-message-2c26dd1d-kova-261001-052643-e7fd32
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1136.4 MB; tracked total 1233.4 MB; max CPU 237.3%; samples 33; roles command-tree 1233.4MB/247%, agent-process 1136.4MB/237.3%, status-cli 568.6MB/189.5%, agent-cli 97MB/106.4%
- agent: turn 11864ms; cold/warm 11864ms/10473ms; cold-warm delta 1391ms; pre-provider 9908ms; provider 1539ms; metadata scans 12 (396.94ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 11794.45ms; max 11864ms; pre-provider p95 9854.35ms
- agent CLI attribution: cold known 5524ms / unattributed 4384ms; warm known 4852ms / unattributed 3983ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2422.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 11864ms; pre-provider 9908ms; provider 1539ms; post-provider 417ms; response true
    - active window: metadata scans 6 (198.54ms total, max 80.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9908ms; provider 1539ms; post-provider 417ms; unknown 7530.84ms; source agent.prepare 1521.1ms; plugins.metadata.scan 856.06ms
  - warm: total 10473ms; pre-provider 8835ms; provider 1187ms; post-provider 451ms; response true
    - active window: metadata scans 6 (198.4ms total, max 84.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8835ms; provider 1187ms; post-provider 451ms; unknown 6457.84ms; source agent.prepare 1521.1ms; plugins.metadata.scan 856.06ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9908 ms | 5524 ms | 4384 ms | 1539 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261001-052643-e7fd32/kova-agent-cold-warm-message-2c26dd1d-kova-261001-052643-e7fd32/openclaw/timeline.jsonl |
  | warm | 8835 ms | 4852 ms | 3983 ms | 1187 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261001-052643-e7fd32/kova-agent-cold-warm-message-2c26dd1d-kova-261001-052643-e7fd32/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 5928 ms | 2422 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1566 ms | 1093 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 883 ms | 520 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 197 ms | 80 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 4634 ms | 1862 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1757 ms | 1296 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 637 ms | 379 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 198 ms | 85 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261001-052643-e7fd32-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261001-052643-e7fd32-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261001-052643-e7fd32-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261001-052643-e7fd32/kova-agent-cold-warm-message-2c26dd1d-kova-261001-052643-e7fd32

## Target Cleanup

- Runtime: `kova-local-mup3difo-3s2-5c10f234`
- Result: removed
- Duration: 584ms

