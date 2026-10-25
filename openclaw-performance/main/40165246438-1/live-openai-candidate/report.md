# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1641.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1827.9 MB, agent-process 1641.2 MB, status-cli 970.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1641.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1827.9 MB, agent-process 1641.2 MB, status-cli 970.4 MB |
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
| Run ID | `kova-261025-052307-e07a33` |
| Generated | 2026-10-25T05:26:21.761Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1641.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1827.9 MB, agent-process 1641.2 MB, status-cli 970.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1641.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1827.9 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1641.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10321ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1641.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 10321ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1641.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1352ms), but OpenClaw spent 10321ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1641.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 218.8% | 11926ms | 11248ms | 10321ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1827.9 MB | 11926ms | 11248ms | agent-process peak RSS 1641.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1827.9 MB, agent-process 1641.2 MB, status-cli 970.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1827.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 232.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1641.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 218.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 970.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 293.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 81.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261025-052307-e07a33/kova-agent-cold-warm-message-2c26dd1d-kova-261025-052307-e07a33
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1641.2 MB; tracked total 1827.9 MB; max CPU 218.8%; samples 35; roles command-tree 1827.9MB/232.7%, agent-process 1641.2MB/218.8%, status-cli 970.4MB/174.6%, agent-cli 293.7MB/81.3%
- agent: turn 11926ms; cold/warm 11926ms/11248ms; cold-warm delta 678ms; pre-provider 10321ms; provider 1352ms; metadata scans 12 (381.39ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 11892.1ms; max 11926ms; pre-provider p95 10293.85ms
- agent CLI attribution: cold known 6564ms / unattributed 3757ms; warm known 6033ms / unattributed 3745ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2517.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1641.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1827.9 MB, agent-process 1641.2 MB, status-cli 970.4 MB
  - command-tree peak RSS 1827.9 MB exceeded threshold 1400 MB
  - cold agent spent 10321ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10321ms, over threshold 10000ms
  - cold provider was fast (1352ms), but OpenClaw spent 10321ms before provider work.
- Agent turns:
  - cold: total 11926ms; pre-provider 10321ms; provider 1352ms; post-provider 253ms; response true
    - active window: metadata scans 6 (190.19ms total, max 80.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10321ms; provider 1352ms; post-provider 253ms; unknown 7886.68ms; source agent.prepare 1603.35ms; plugins.metadata.scan 830.97ms
  - warm: total 11248ms; pre-provider 9778ms; provider 1205ms; post-provider 265ms; response true
    - active window: metadata scans 6 (191.2ms total, max 82.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9778ms; provider 1205ms; post-provider 265ms; unknown 7343.68ms; source agent.prepare 1603.35ms; plugins.metadata.scan 830.97ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10321 ms | 6564 ms | 3757 ms | 1352 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261025-052307-e07a33/kova-agent-cold-warm-message-2c26dd1d-kova-261025-052307-e07a33/openclaw/timeline.jsonl |
  | warm | 9778 ms | 6033 ms | 3745 ms | 1205 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261025-052307-e07a33/kova-agent-cold-warm-message-2c26dd1d-kova-261025-052307-e07a33/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 6451 ms | 2518 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2792 ms | 1768 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 679 ms | 295 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 192 ms | 81 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 146 ms | 146 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5062 ms | 2075 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2841 ms | 1801 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 925 ms | 412 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 192 ms | 82 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 145 ms | 145 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261025-052307-e07a33-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261025-052307-e07a33-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261025-052307-e07a33-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261025-052307-e07a33/kova-agent-cold-warm-message-2c26dd1d-kova-261025-052307-e07a33

## Target Cleanup

- Runtime: `kova-local-mvndtbpz-3cw-d38775b6`
- Result: removed
- Duration: 512ms

