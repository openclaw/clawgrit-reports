# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1459 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1642.6 MB, agent-process 1459 MB, status-cli 858.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1459 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1642.6 MB, agent-process 1459 MB, status-cli 858.5 MB |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261102-051935-1e9343` |
| Generated | 2026-11-02T05:22:34.471Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1459 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1642.6 MB, agent-process 1459 MB, status-cli 858.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1459 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1642.6 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1459 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 186.3% | 10817ms | 10488ms | 9355ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1642.6 MB | 10817ms | 10488ms | agent-process peak RSS 1459 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1642.6 MB, agent-process 1459 MB, status-cli 858.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1642.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1459 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 186.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 858.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 181.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 327.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 105.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261102-051935-1e9343/kova-agent-cold-warm-message-2c26dd1d-kova-261102-051935-1e9343
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1459 MB; tracked total 1642.6 MB; max CPU 186.3%; samples 32; roles command-tree 1642.6MB/200.2%, agent-process 1459MB/186.3%, status-cli 858.5MB/181.7%, agent-cli 327.6MB/105.2%
- agent: turn 10817ms; cold/warm 10817ms/10488ms; cold-warm delta 329ms; pre-provider 9355ms; provider 1209ms; metadata scans 12 (406.55ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10800.55ms; max 10817ms; pre-provider p95 9337.25ms
- agent CLI attribution: cold known 6069ms / unattributed 3286ms; warm known 5641ms / unattributed 3359ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2560.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1459 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1642.6 MB, agent-process 1459 MB, status-cli 858.5 MB
  - command-tree peak RSS 1642.6 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 10817ms; pre-provider 9355ms; provider 1209ms; post-provider 253ms; response true
    - active window: metadata scans 6 (208.21ms total, max 92.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9355ms; provider 1209ms; post-provider 253ms; unknown 7102.69ms; source agent.prepare 1378.95ms; plugins.metadata.scan 873.36ms
  - warm: total 10488ms; pre-provider 9000ms; provider 1236ms; post-provider 252ms; response true
    - active window: metadata scans 6 (198.34ms total, max 86.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9000ms; provider 1236ms; post-provider 252ms; unknown 6747.69ms; source agent.prepare 1378.95ms; plugins.metadata.scan 873.36ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9355 ms | 6069 ms | 3286 ms | 1209 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261102-051935-1e9343/kova-agent-cold-warm-message-2c26dd1d-kova-261102-051935-1e9343/openclaw/timeline.jsonl |
  | warm | 9000 ms | 5641 ms | 3359 ms | 1236 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261102-051935-1e9343/kova-agent-cold-warm-message-2c26dd1d-kova-261102-051935-1e9343/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6226 ms | 2561 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2466 ms | 1615 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 494 ms | 200 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 210 ms | 93 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 111 ms | 111 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 4896 ms | 2140 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2527 ms | 1641 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 886 ms | 399 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 198 ms | 86 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 113 ms | 113 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261102-051935-1e9343-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261102-051935-1e9343-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261102-051935-1e9343-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261102-051935-1e9343/kova-agent-cold-warm-message-2c26dd1d-kova-261102-051935-1e9343

## Target Cleanup

- Runtime: `kova-local-mvyt7l98-3eq-7c258e28`
- Result: removed
- Duration: 498ms

