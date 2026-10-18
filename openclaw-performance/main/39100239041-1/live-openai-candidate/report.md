# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1687.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1873.4 MB, agent-process 1687.5 MB, status-cli 811.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1687.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1873.4 MB, agent-process 1687.5 MB, status-cli 811.1 MB |
| Blocking findings | 11 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261018-052248-0d9f8a` |
| Generated | 2026-10-18T05:27:40.640Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1687.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1873.4 MB, agent-process 1687.5 MB, status-cli 811.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1873.4 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn took 46332ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 44580ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 45921ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 43919ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn took 46332ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 45921ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 44580ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 43919ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1378ms), but OpenClaw spent 44580ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1687.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 205.4% | 46332ms | 45921ms | 44580ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1873.4 MB | 46332ms | 45921ms | agent-process peak RSS 1687.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1873.4 MB, agent-process 1687.5 MB, status-cli 811.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1873.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 219.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1687.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 205.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 811.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 186.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 98.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261018-052248-0d9f8a/kova-agent-cold-warm-message-2c26dd1d-kova-261018-052248-0d9f8a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1687.5 MB; tracked total 1873.4 MB; max CPU 205.4%; samples 103; roles command-tree 1873.4MB/219.9%, agent-process 1687.5MB/205.4%, status-cli 811.1MB/154.5%, agent-cli 186.7MB/98.3%
- agent: turn 46332ms; cold/warm 46332ms/45921ms; cold-warm delta 411ms; pre-provider 44580ms; provider 1378ms; metadata scans 12 (365.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 46311.45ms; max 46332ms; pre-provider p95 44546.95ms
- agent CLI attribution: cold known 23162ms / unattributed 21418ms; warm known 22629ms / unattributed 21290ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 18993.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1687.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1873.4 MB, agent-process 1687.5 MB, status-cli 811.1 MB
  - command-tree peak RSS 1873.4 MB exceeded threshold 1400 MB
  - cold agent turn took 46332ms, over threshold 45000ms
  - cold agent spent 44580ms before provider work, over threshold 10000ms
  - warm agent turn took 45921ms, over threshold 45000ms
  - warm agent spent 43919ms before provider work, over threshold 10000ms
  - cold agent turn took 46332ms, over threshold 45000ms
  - warm agent turn took 45921ms, over threshold 15000ms
  - cold pre-provider latency was 44580ms, over threshold 10000ms
  - warm pre-provider latency was 43919ms, over threshold 10000ms
  - cold provider was fast (1378ms), but OpenClaw spent 44580ms before provider work.
- Agent turns:
  - cold: total 46332ms; pre-provider 44580ms; provider 1378ms; post-provider 374ms; response true
    - active window: metadata scans 6 (182.35ms total, max 79.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 44580ms; provider 1378ms; post-provider 374ms; unknown 41409.91ms; source agent.prepare 2346.89ms; plugins.metadata.scan 823.2ms
  - warm: total 45921ms; pre-provider 43919ms; provider 1651ms; post-provider 351ms; response true
    - active window: metadata scans 6 (183.17ms total, max 80.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 43919ms; provider 1651ms; post-provider 351ms; unknown 40748.91ms; source agent.prepare 2346.89ms; plugins.metadata.scan 823.2ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 44580 ms | 23162 ms | 21418 ms | 1378 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261018-052248-0d9f8a/kova-agent-cold-warm-message-2c26dd1d-kova-261018-052248-0d9f8a/openclaw/timeline.jsonl |
  | warm | 43919 ms | 22629 ms | 21290 ms | 1651 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261018-052248-0d9f8a/kova-agent-cold-warm-message-2c26dd1d-kova-261018-052248-0d9f8a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 39074 ms | 18994 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2888 ms | 1846 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1013 ms | 454 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 183 ms | 79 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 150 ms | 150 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 37712 ms | 18510 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2888 ms | 1818 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1332 ms | 618 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 182 ms | 81 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 150 ms | 150 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261018-052248-0d9f8a-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261018-052248-0d9f8a-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261018-052248-0d9f8a-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261018-052248-0d9f8a/kova-agent-cold-warm-message-2c26dd1d-kova-261018-052248-0d9f8a

## Target Cleanup

- Runtime: `kova-local-mvddpxwd-3d3-4509d633`
- Result: removed
- Duration: 484ms

