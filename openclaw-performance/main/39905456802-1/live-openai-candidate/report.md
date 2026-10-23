# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1553.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1739.8 MB, agent-process 1553.5 MB, status-cli 873.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1553.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1739.8 MB, agent-process 1553.5 MB, status-cli 873.5 MB |
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
| Run ID | `kova-261023-052446-d359fc` |
| Generated | 2026-10-23T05:28:04.092Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1553.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1739.8 MB, agent-process 1553.5 MB, status-cli 873.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1553.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1739.8 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1553.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10857ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1553.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 10359ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1553.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 10857ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1553.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 10359ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1553.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1153ms), but OpenClaw spent 10857ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1553.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 216.6% | 12270ms | 11936ms | 10857ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1739.8 MB | 12270ms | 11936ms | agent-process peak RSS 1553.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1739.8 MB, agent-process 1553.5 MB, status-cli 873.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1739.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 231.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1553.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 216.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 873.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 295.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 83.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261023-052446-d359fc/kova-agent-cold-warm-message-2c26dd1d-kova-261023-052446-d359fc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1553.5 MB; tracked total 1739.8 MB; max CPU 216.6%; samples 36; roles command-tree 1739.8MB/231.2%, agent-process 1553.5MB/216.6%, status-cli 873.5MB/175.9%, agent-cli 295.1MB/83.1%
- agent: turn 12270ms; cold/warm 12270ms/11936ms; cold-warm delta 334ms; pre-provider 10857ms; provider 1153ms; metadata scans 12 (360.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12253.3ms; max 12270ms; pre-provider p95 10832.1ms
- agent CLI attribution: cold known 7004ms / unattributed 3853ms; warm known 6481ms / unattributed 3878ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2652.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1553.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1739.8 MB, agent-process 1553.5 MB, status-cli 873.5 MB
  - command-tree peak RSS 1739.8 MB exceeded threshold 1400 MB
  - cold agent spent 10857ms before provider work, over threshold 10000ms
  - warm agent spent 10359ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10857ms, over threshold 10000ms
  - warm pre-provider latency was 10359ms, over threshold 10000ms
  - cold provider was fast (1153ms), but OpenClaw spent 10857ms before provider work.
- Agent turns:
  - cold: total 12270ms; pre-provider 10857ms; provider 1153ms; post-provider 260ms; response true
    - active window: metadata scans 6 (177.41ms total, max 78.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10857ms; provider 1153ms; post-provider 260ms; unknown 7677.75ms; source agent.prepare 2395.22ms; plugins.metadata.scan 784.03ms
  - warm: total 11936ms; pre-provider 10359ms; provider 1313ms; post-provider 264ms; response true
    - active window: metadata scans 6 (183.33ms total, max 84.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10359ms; provider 1313ms; post-provider 264ms; unknown 7179.75ms; source agent.prepare 2395.22ms; plugins.metadata.scan 784.03ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10857 ms | 7004 ms | 3853 ms | 1153 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261023-052446-d359fc/kova-agent-cold-warm-message-2c26dd1d-kova-261023-052446-d359fc/openclaw/timeline.jsonl |
  | warm | 10359 ms | 6481 ms | 3878 ms | 1313 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261023-052446-d359fc/kova-agent-cold-warm-message-2c26dd1d-kova-261023-052446-d359fc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6441 ms | 2652 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3060 ms | 1977 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1016 ms | 459 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 178 ms | 78 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 155 ms | 155 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5153 ms | 2216 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2980 ms | 1893 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1377 ms | 647 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 183 ms | 85 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 166 ms | 166 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261023-052446-d359fc-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261023-052446-d359fc-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261023-052446-d359fc-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261023-052446-d359fc/kova-agent-cold-warm-message-2c26dd1d-kova-261023-052446-d359fc

## Target Cleanup

- Runtime: `kova-local-mvkizqai-3em-89c18dbe`
- Result: removed
- Duration: 523ms

