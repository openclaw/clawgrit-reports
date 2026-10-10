# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1477.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1577.6 MB, agent-process 1477.3 MB, status-cli 1095.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1477.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1577.6 MB, agent-process 1477.3 MB, status-cli 1095.3 MB |
| Blocking findings | 7 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261010-052549-07ab0a` |
| Generated | 2026-10-10T05:28:19.949Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1477.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1577.6 MB, agent-process 1477.3 MB, status-cli 1095.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1477.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1577.6 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1477.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 11947ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1477.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 11746ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1477.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 11947ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1477.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 11746ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1477.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1276ms), but OpenClaw spent 11947ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1477.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 164.7% | 13554ms | 13373ms | 11947ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1577.6 MB | 13554ms | 13373ms | agent-process peak RSS 1477.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1577.6 MB, agent-process 1477.3 MB, status-cli 1095.3 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1577.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1477.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1095.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 159.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 122% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261010-052549-07ab0a/kova-agent-cold-warm-message-2c26dd1d-kova-261010-052549-07ab0a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1477.3 MB; tracked total 1577.6 MB; max CPU 164.7%; samples 38; roles command-tree 1577.6MB/176.8%, agent-process 1477.3MB/164.7%, status-cli 1095.3MB/176.8%, agent-cli 159.9MB/122%
- agent: turn 13554ms; cold/warm 13554ms/13373ms; cold-warm delta 181ms; pre-provider 11947ms; provider 1276ms; metadata scans 12 (365.6ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 13544.95ms; max 13554ms; pre-provider p95 11936.95ms
- agent CLI attribution: cold known 5224ms / unattributed 6723ms; warm known 5751ms / unattributed 5995ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2732.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1477.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1577.6 MB, agent-process 1477.3 MB, status-cli 1095.3 MB
  - command-tree peak RSS 1577.6 MB exceeded threshold 1400 MB
  - cold agent spent 11947ms before provider work, over threshold 10000ms
  - warm agent spent 11746ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 11947ms, over threshold 10000ms
  - warm pre-provider latency was 11746ms, over threshold 10000ms
  - cold provider was fast (1276ms), but OpenClaw spent 11947ms before provider work.
- Agent turns:
  - cold: total 13554ms; pre-provider 11947ms; provider 1276ms; post-provider 331ms; response true
    - active window: metadata scans 6 (179.25ms total, max 77.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11947ms; provider 1276ms; post-provider 331ms; unknown 9312.35ms; source agent.prepare 1835ms; plugins.metadata.scan 799.65ms
  - warm: total 13373ms; pre-provider 11746ms; provider 1296ms; post-provider 331ms; response true
    - active window: metadata scans 6 (186.35ms total, max 84.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11746ms; provider 1296ms; post-provider 331ms; unknown 9111.35ms; source agent.prepare 1835ms; plugins.metadata.scan 799.65ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11947 ms | 5224 ms | 6723 ms | 1276 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261010-052549-07ab0a/kova-agent-cold-warm-message-2c26dd1d-kova-261010-052549-07ab0a/openclaw/timeline.jsonl |
  | warm | 11746 ms | 5751 ms | 5995 ms | 1296 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261010-052549-07ab0a/kova-agent-cold-warm-message-2c26dd1d-kova-261010-052549-07ab0a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 7069 ms | 2733 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 926 ms | 551 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 624 ms | 381 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 180 ms | 77 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 14 ms | 4 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 5815 ms | 2328 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1411 ms | 1051 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 1211 ms | 988 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 185 ms | 85 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 15 ms | 4 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261010-052549-07ab0a-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261010-052549-07ab0a-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261010-052549-07ab0a-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261010-052549-07ab0a/kova-agent-cold-warm-message-2c26dd1d-kova-261010-052549-07ab0a

## Target Cleanup

- Runtime: `kova-local-mv1yb0ti-3t7-ce772340`
- Result: removed
- Duration: 542ms

