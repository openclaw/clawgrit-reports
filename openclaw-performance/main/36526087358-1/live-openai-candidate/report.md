# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1349.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1445.6 MB, agent-process 1349.3 MB, status-cli 769.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1349.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1445.6 MB, agent-process 1349.3 MB, status-cli 769.2 MB |
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
| Run ID | `kova-260929-052700-d82342` |
| Generated | 2026-09-29T05:29:32.008Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1349.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1445.6 MB, agent-process 1349.3 MB, status-cli 769.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1349.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1445.6 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1349.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 186.2% | 11421ms | 11150ms | 9852ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1445.6 MB | 11421ms | 11150ms | agent-process peak RSS 1349.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1445.6 MB, agent-process 1349.3 MB, status-cli 769.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1445.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1349.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 186.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 769.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 96.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 88.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260929-052700-d82342/kova-agent-cold-warm-message-2c26dd1d-kova-260929-052700-d82342
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1349.3 MB; tracked total 1445.6 MB; max CPU 186.2%; samples 34; roles command-tree 1445.6MB/196.7%, agent-process 1349.3MB/186.2%, status-cli 769.2MB/173%, agent-cli 96.3MB/88.3%
- agent: turn 11421ms; cold/warm 11421ms/11150ms; cold-warm delta 271ms; pre-provider 9852ms; provider 1286ms; metadata scans 12 (373.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 11407.45ms; max 11421ms; pre-provider p95 9820.5ms
- agent CLI attribution: cold known 5912ms / unattributed 3940ms; warm known 5354ms / unattributed 3868ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2403.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1349.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1445.6 MB, agent-process 1349.3 MB, status-cli 769.2 MB
  - command-tree peak RSS 1445.6 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 11421ms; pre-provider 9852ms; provider 1286ms; post-provider 283ms; response true
    - active window: metadata scans 6 (187.61ms total, max 84.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9852ms; provider 1286ms; post-provider 283ms; unknown 7692.97ms; source agent.prepare 1355.45ms; plugins.metadata.scan 803.58ms
  - warm: total 11150ms; pre-provider 9222ms; provider 1526ms; post-provider 402ms; response true
    - active window: metadata scans 6 (185.83ms total, max 78.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9222ms; provider 1526ms; post-provider 402ms; unknown 7062.97ms; source agent.prepare 1355.45ms; plugins.metadata.scan 803.58ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9852 ms | 5912 ms | 3940 ms | 1286 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260929-052700-d82342/kova-agent-cold-warm-message-2c26dd1d-kova-260929-052700-d82342/openclaw/timeline.jsonl |
  | warm | 9222 ms | 5354 ms | 3868 ms | 1526 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260929-052700-d82342/kova-agent-cold-warm-message-2c26dd1d-kova-260929-052700-d82342/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 5913 ms | 2403 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2093 ms | 1718 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 737 ms | 450 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 186 ms | 84 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 4397 ms | 1771 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2415 ms | 1973 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 618 ms | 362 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 187 ms | 79 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260929-052700-d82342-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260929-052700-d82342-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260929-052700-d82342-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260929-052700-d82342/kova-agent-cold-warm-message-2c26dd1d-kova-260929-052700-d82342

## Target Cleanup

- Runtime: `kova-local-mum8i5lm-3sg-a1a3ec8b`
- Result: removed
- Duration: 647ms

