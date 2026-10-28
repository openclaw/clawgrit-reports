# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1415.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1689.1 MB, agent-process 1415.8 MB, status-cli 1197.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1415.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1689.1 MB, agent-process 1415.8 MB, status-cli 1197.2 MB |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261028-052020-f77ef2` |
| Generated | 2026-10-28T05:23:52.526Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1415.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1689.1 MB, agent-process 1415.8 MB, status-cli 1197.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1415.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1689.1 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1415.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10580ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1415.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 10580ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1415.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1381ms), but OpenClaw spent 10580ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1415.8 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 201.1% | 12304ms | 11613ms | 10580ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1689.1 MB | 12304ms | 11613ms | agent-process peak RSS 1415.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1689.1 MB, agent-process 1415.8 MB, status-cli 1197.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1689.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 219.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1415.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 201.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1197.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 184.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 368 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 146.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261028-052020-f77ef2/kova-agent-cold-warm-message-2c26dd1d-kova-261028-052020-f77ef2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1415.8 MB; tracked total 1689.1 MB; max CPU 201.1%; samples 36; roles command-tree 1689.1MB/219.1%, agent-process 1415.8MB/201.1%, status-cli 1197.2MB/184.6%, agent-cli 368MB/146.7%
- agent: turn 12304ms; cold/warm 12304ms/11613ms; cold-warm delta 691ms; pre-provider 10580ms; provider 1381ms; metadata scans 12 (422.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12269.45ms; max 12304ms; pre-provider p95 10547.15ms
- agent CLI attribution: cold known 6989ms / unattributed 3591ms; warm known 6368ms / unattributed 3555ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2807.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1415.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1689.1 MB, agent-process 1415.8 MB, status-cli 1197.2 MB
  - command-tree peak RSS 1689.1 MB exceeded threshold 1400 MB
  - cold agent spent 10580ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10580ms, over threshold 10000ms
  - cold provider was fast (1381ms), but OpenClaw spent 10580ms before provider work.
- Agent turns:
  - cold: total 12304ms; pre-provider 10580ms; provider 1381ms; post-provider 343ms; response true
    - active window: metadata scans 6 (213.62ms total, max 87.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10580ms; provider 1381ms; post-provider 343ms; unknown 8142.02ms; source agent.prepare 1504.62ms; plugins.metadata.scan 933.36ms
  - warm: total 11613ms; pre-provider 9923ms; provider 1367ms; post-provider 323ms; response true
    - active window: metadata scans 6 (208.92ms total, max 87.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9923ms; provider 1367ms; post-provider 323ms; unknown 7485.02ms; source agent.prepare 1504.62ms; plugins.metadata.scan 933.36ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10580 ms | 6989 ms | 3591 ms | 1381 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261028-052020-f77ef2/kova-agent-cold-warm-message-2c26dd1d-kova-261028-052020-f77ef2/openclaw/timeline.jsonl |
  | warm | 9923 ms | 6368 ms | 3555 ms | 1367 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261028-052020-f77ef2/kova-agent-cold-warm-message-2c26dd1d-kova-261028-052020-f77ef2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 6841 ms | 2807 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2959 ms | 1909 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 553 ms | 224 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 215 ms | 88 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 212 ms | 212 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5441 ms | 2388 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2826 ms | 1817 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 949 ms | 427 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 224 ms | 224 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 209 ms | 88 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261028-052020-f77ef2-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261028-052020-f77ef2-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261028-052020-f77ef2-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261028-052020-f77ef2/kova-agent-cold-warm-message-2c26dd1d-kova-261028-052020-f77ef2

## Target Cleanup

- Runtime: `kova-local-mvro1afh-3eh-aa79e55c`
- Result: removed
- Duration: 573ms

