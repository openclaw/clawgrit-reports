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
| Run ID | `kova-260930-052703-3216e1` |
| Generated | 2026-09-30T05:29:33.538Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 218.7% | 12250ms | 11023ms | 9953ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1232.5 MB | 12250ms | 11023ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1232.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 228.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1135.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 218.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 574.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 152.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 82.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260930-052703-3216e1/kova-agent-cold-warm-message-2c26dd1d-kova-260930-052703-3216e1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1135.5 MB; tracked total 1232.5 MB; max CPU 218.7%; samples 33; roles command-tree 1232.5MB/228.3%, agent-process 1135.5MB/218.7%, status-cli 574.9MB/192.6%, agent-cli 152.4MB/82.7%
- agent: turn 12250ms; cold/warm 12250ms/11023ms; cold-warm delta 1227ms; pre-provider 9953ms; provider 1815ms; metadata scans 12 (398.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 12188.65ms; max 12250ms; pre-provider p95 9917.65ms
- agent CLI attribution: cold known 5556ms / unattributed 4397ms; warm known 4863ms / unattributed 4383ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2522.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 12250ms; pre-provider 9953ms; provider 1815ms; post-provider 482ms; response true
    - active window: metadata scans 6 (206.31ms total, max 92.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9953ms; provider 1815ms; post-provider 482ms; unknown 7539.8ms; source agent.prepare 1518.3ms; plugins.metadata.scan 894.9ms
  - warm: total 11023ms; pre-provider 9246ms; provider 1369ms; post-provider 408ms; response true
    - active window: metadata scans 6 (192.05ms total, max 77.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9246ms; provider 1369ms; post-provider 408ms; unknown 6832.8ms; source agent.prepare 1518.3ms; plugins.metadata.scan 894.9ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9953 ms | 5556 ms | 4397 ms | 1815 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260930-052703-3216e1/kova-agent-cold-warm-message-2c26dd1d-kova-260930-052703-3216e1/openclaw/timeline.jsonl |
  | warm | 9246 ms | 4863 ms | 4383 ms | 1369 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260930-052703-3216e1/kova-agent-cold-warm-message-2c26dd1d-kova-260930-052703-3216e1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 6255 ms | 2522 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1447 ms | 1031 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 841 ms | 529 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 206 ms | 93 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 4660 ms | 1857 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1733 ms | 1242 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 676 ms | 396 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 191 ms | 78 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260930-052703-3216e1-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260930-052703-3216e1-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260930-052703-3216e1-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260930-052703-3216e1/kova-agent-cold-warm-message-2c26dd1d-kova-260930-052703-3216e1

## Target Cleanup

- Runtime: `kova-local-munny2ki-3s3-c71ad512`
- Result: removed
- Duration: 581ms

