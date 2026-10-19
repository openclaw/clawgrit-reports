# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1460 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1646.2 MB, agent-process 1460 MB, status-cli 799.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1460 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1646.2 MB, agent-process 1460 MB, status-cli 799.4 MB |
| Blocking findings | 8 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261019-052638-f4d8a1` |
| Generated | 2026-10-19T05:31:11.620Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1460 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1646.2 MB, agent-process 1460 MB, status-cli 799.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1646.2 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 43251ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 42493ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 44525ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 43251ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 42493ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1460ms), but OpenClaw spent 43251ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 238.8% | 44981ms | 44525ms | 43251ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1646.2 MB | 44981ms | 44525ms | agent-process peak RSS 1460 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1646.2 MB, agent-process 1460 MB, status-cli 799.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1646.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 252.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1460 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 238.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 799.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 290.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 102.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261019-052638-f4d8a1/kova-agent-cold-warm-message-2c26dd1d-kova-261019-052638-f4d8a1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1460 MB; tracked total 1646.2 MB; max CPU 238.8%; samples 100; roles command-tree 1646.2MB/252.9%, agent-process 1460MB/238.8%, status-cli 799.4MB/155.7%, agent-cli 290.2MB/102.2%
- agent: turn 44981ms; cold/warm 44981ms/44525ms; cold-warm delta 456ms; pre-provider 43251ms; provider 1460ms; metadata scans 12 (376.66ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 44958.2ms; max 44981ms; pre-provider p95 43213.1ms
- agent CLI attribution: cold known 23053ms / unattributed 20198ms; warm known 22469ms / unattributed 20024ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 18645.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1460 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1646.2 MB, agent-process 1460 MB, status-cli 799.4 MB
  - command-tree peak RSS 1646.2 MB exceeded threshold 1400 MB
  - cold agent spent 43251ms before provider work, over threshold 10000ms
  - warm agent spent 42493ms before provider work, over threshold 10000ms
  - warm agent turn took 44525ms, over threshold 15000ms
  - cold pre-provider latency was 43251ms, over threshold 10000ms
  - warm pre-provider latency was 42493ms, over threshold 10000ms
  - cold provider was fast (1460ms), but OpenClaw spent 43251ms before provider work.
- Agent turns:
  - cold: total 44981ms; pre-provider 43251ms; provider 1460ms; post-provider 270ms; response true
    - active window: metadata scans 6 (181.07ms total, max 76.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 43251ms; provider 1460ms; post-provider 270ms; unknown 40044.53ms; source agent.prepare 2357.44ms; plugins.metadata.scan 849.03ms
  - warm: total 44525ms; pre-provider 42493ms; provider 1761ms; post-provider 271ms; response true
    - active window: metadata scans 6 (195.59ms total, max 98.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 42493ms; provider 1761ms; post-provider 271ms; unknown 39286.53ms; source agent.prepare 2357.44ms; plugins.metadata.scan 849.03ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 43251 ms | 23053 ms | 20198 ms | 1460 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261019-052638-f4d8a1/kova-agent-cold-warm-message-2c26dd1d-kova-261019-052638-f4d8a1/openclaw/timeline.jsonl |
  | warm | 42493 ms | 22469 ms | 20024 ms | 1761 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261019-052638-f4d8a1/kova-agent-cold-warm-message-2c26dd1d-kova-261019-052638-f4d8a1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 38438 ms | 18645 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3101 ms | 1941 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1011 ms | 456 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 181 ms | 77 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 165 ms | 165 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 37045 ms | 18135 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3012 ms | 1871 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1345 ms | 622 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 195 ms | 98 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 171 ms | 171 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261019-052638-f4d8a1-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261019-052638-f4d8a1-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261019-052638-f4d8a1-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261019-052638-f4d8a1/kova-agent-cold-warm-message-2c26dd1d-kova-261019-052638-f4d8a1

## Target Cleanup

- Runtime: `kova-local-mvetapy8-3cc-66dc7d12`
- Result: removed
- Duration: 497ms

