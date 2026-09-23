# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1090 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1183.7 MB, agent-process 1090 MB, status-cli 557.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1090 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1183.7 MB, agent-process 1090 MB, status-cli 557.5 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260923-052640-63dc8d` |
| Generated | 2026-09-23T05:29:14.134Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1090 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1183.7 MB, agent-process 1090 MB, status-cli 557.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1090 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 14680ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1090 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider work took 4082ms, over threshold 3000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1090 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 14680ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1090 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 181.8% | 19170ms | 11169ms | 14680ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1183.7 MB | 19170ms | 11169ms | agent-process peak RSS 1090 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1183.7 MB, agent-process 1090 MB, status-cli 557.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1183.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 191.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1090 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 181.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 557.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.3% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 226.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 126.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 96.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260923-052640-63dc8d/kova-agent-cold-warm-message-2c26dd1d-kova-260923-052640-63dc8d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1090 MB; tracked total 1183.7 MB; max CPU 181.8%; samples 38; roles command-tree 1183.7MB/191.9%, agent-process 1090MB/181.8%, status-cli 557.5MB/174.3%, package-manager 226.9MB/152%
- agent: turn 19170ms; cold/warm 19170ms/11169ms; cold-warm delta 8001ms; pre-provider 14680ms; provider 4082ms; metadata scans 21 (652.42ms); event-loop n/a; polls 0; cleanup n/a; diagnosis provider-slow; leaks 0
- Agent turn stats: count 2; p95 18769.95ms; max 19170ms; pre-provider p95 14430.8ms
- agent CLI attribution: cold known 8516ms / unattributed 6164ms; warm known 5303ms / unattributed 4393ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4505.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1090 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1183.7 MB, agent-process 1090 MB, status-cli 557.5 MB
  - cold agent spent 14680ms before provider work, over threshold 10000ms
  - cold provider work took 4082ms, over threshold 3000ms
  - cold pre-provider latency was 14680ms, over threshold 10000ms
- Agent turns:
  - cold: total 19170ms; pre-provider 14680ms; provider 4082ms; post-provider 408ms; response true
    - active window: metadata scans 15 (463.65ms total, max 75.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14680ms; provider 4082ms; post-provider 408ms; unknown 12607.59ms; source plugins.metadata.scan 1263.95ms; agent.prepare 808.46ms
  - warm: total 11169ms; pre-provider 9696ms; provider 1092ms; post-provider 381ms; response true
    - active window: metadata scans 6 (188.77ms total, max 68.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9696ms; provider 1092ms; post-provider 381ms; unknown 7623.59ms; source plugins.metadata.scan 1263.95ms; agent.prepare 808.46ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 14680 ms | 8516 ms | 6164 ms | 4082 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260923-052640-63dc8d/kova-agent-cold-warm-message-2c26dd1d-kova-260923-052640-63dc8d/openclaw/timeline.jsonl |
  | warm | 9696 ms | 5303 ms | 4393 ms | 1092 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260923-052640-63dc8d/kova-agent-cold-warm-message-2c26dd1d-kova-260923-052640-63dc8d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x42 | 42 | 0 | 13893 ms | 4506 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 684 ms | 300 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 491 ms | 190 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x12, `startup`, `agent.startup` x2 | 15 | 0 | 467 ms | 75 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x12, `agent.startup` x2 | 14 | 0 | 22 ms | 3 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x14 | 14 | 0 | 7449 ms | 2597 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 813 ms | 423 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 317 ms | 164 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 190 ms | 69 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260923-052640-63dc8d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260923-052640-63dc8d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260923-052640-63dc8d-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260923-052640-63dc8d/kova-agent-cold-warm-message-2c26dd1d-kova-260923-052640-63dc8d

## Target Cleanup

- Runtime: `kova-local-mudnumj1-3qc-cfb2aadf`
- Result: removed
- Duration: 510ms

