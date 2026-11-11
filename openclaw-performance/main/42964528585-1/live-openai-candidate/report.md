# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1496.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1677.5 MB, agent-process 1496.1 MB, status-cli 842.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1496.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1677.5 MB, agent-process 1496.1 MB, status-cli 842.7 MB |
| Blocking findings | 7 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 24 total, 0 missing, 0 failed
- Categories: command: 9, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261111-051808-db17ed` |
| Generated | 2026-11-11T05:22:35.459Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1496.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1677.5 MB, agent-process 1496.1 MB, status-cli 842.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1496.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1677.5 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1496.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 13371ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1496.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 12771ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1496.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 13371ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1496.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 12771ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1496.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1148ms), but OpenClaw spent 13371ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1496.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 192.5% | 14892ms | 14511ms | 13371ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1677.5 MB | 14892ms | 14511ms | agent-process peak RSS 1496.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1677.5 MB, agent-process 1496.1 MB, status-cli 842.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1677.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1496.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 842.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 186.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 290.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 138.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261111-051808-db17ed/kova-agent-cold-warm-message-2c26dd1d-kova-261111-051808-db17ed
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1496.1 MB; tracked total 1677.5 MB; max CPU 192.5%; samples 41; roles command-tree 1677.5MB/206.4%, agent-process 1496.1MB/192.5%, status-cli 842.7MB/186.7%, agent-cli 290.1MB/138.1%
- agent: turn 14892ms; cold/warm 14892ms/14511ms; cold-warm delta 381ms; pre-provider 13371ms; provider 1148ms; metadata scans 12 (547.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14872.95ms; max 14892ms; pre-provider p95 13341ms
- agent CLI attribution: cold known 8768ms / unattributed 4603ms; warm known 8111ms / unattributed 4660ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4246.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1496.1 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1677.5 MB, agent-process 1496.1 MB, status-cli 842.7 MB
  - command-tree peak RSS 1677.5 MB exceeded threshold 1400 MB
  - cold agent spent 13371ms before provider work, over threshold 10000ms
  - warm agent spent 12771ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 13371ms, over threshold 10000ms
  - warm pre-provider latency was 12771ms, over threshold 10000ms
  - cold provider was fast (1148ms), but OpenClaw spent 13371ms before provider work.
- Agent turns:
  - cold: total 14892ms; pre-provider 13371ms; provider 1148ms; post-provider 373ms; response true
    - active window: metadata scans 6 (259.88ms total, max 113.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13371ms; provider 1148ms; post-provider 373ms; unknown 9808.53ms; source agent.prepare 2375.16ms; plugins.metadata.scan 1187.31ms
  - warm: total 14511ms; pre-provider 12771ms; provider 1349ms; post-provider 391ms; response true
    - active window: metadata scans 6 (287.69ms total, max 132.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12771ms; provider 1349ms; post-provider 391ms; unknown 9208.53ms; source agent.prepare 2375.16ms; plugins.metadata.scan 1187.31ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 13371 ms | 8768 ms | 4603 ms | 1148 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261111-051808-db17ed/kova-agent-cold-warm-message-2c26dd1d-kova-261111-051808-db17ed/openclaw/timeline.jsonl |
  | warm | 12771 ms | 8111 ms | 4660 ms | 1349 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261111-051808-db17ed/kova-agent-cold-warm-message-2c26dd1d-kova-261111-051808-db17ed/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 9998 ms | 4246 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2878 ms | 2000 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 918 ms | 345 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 260 ms | 114 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 174 ms | 174 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 7925 ms | 3508 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3004 ms | 2040 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1460 ms | 618 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 287 ms | 132 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 144 ms | 144 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261111-051808-db17ed-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261111-051808-db17ed-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261111-051808-db17ed-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261111-051808-db17ed/kova-agent-cold-warm-message-2c26dd1d-kova-261111-051808-db17ed

## Target Cleanup

- Runtime: `kova-local-mwbo4dpd-3jp-299e2e4a`
- Result: removed
- Duration: 739ms

