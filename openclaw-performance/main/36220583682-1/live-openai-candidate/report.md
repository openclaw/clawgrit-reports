# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: incomplete: 1
- Required obligations: 23 total, 1 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-resource-proof | missing | resource peak RSS measurement was not captured |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260926-052335-358ecb` |
| Generated | 2026-09-26T05:25:32.395Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1218.1 MB, command-tree 1218.1 MB, status-cli 612.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1218.1 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260926-052335-358ecb/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052335-358ecb/resource-samples/cold-agent-turn-1.jsonl |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | n/a | 10521ms | 10359ms | 9120ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1218.1 MB | 10521ms | 10359ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1218.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 199% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1218.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 199% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 612.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 181.4% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 72.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 62.9% (scenario agent-cold-warm-message/mock-openai-provider)
- runtime-staging: RSS 14.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 62.9% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260926-052335-358ecb/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052335-358ecb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1218.1 MB; max CPU unknown; samples 31; roles agent-cli 1218.1MB/199%, command-tree 1218.1MB/199%, status-cli 612.7MB/181.4%, package-manager 72.4MB/62.9%
- agent: turn 10521ms; cold/warm 10521ms/10359ms; cold-warm delta 162ms; pre-provider 9120ms; provider 1150ms; metadata scans 12 (371.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10512.9ms; max 10521ms; pre-provider p95 9106.65ms
- agent CLI attribution: cold known 4081ms / unattributed 5039ms; warm known 3947ms / unattributed 4906ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2076.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1218.1 MB, command-tree 1218.1 MB, status-cli 612.7 MB
  - agent-cli peak RSS 1218.1 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 10521ms; pre-provider 9120ms; provider 1150ms; post-provider 251ms; response true
    - active window: metadata scans 6 (174.89ms total, max 75.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9120ms; provider 1150ms; post-provider 251ms; unknown 7012.62ms; source agent.prepare 1328.28ms; plugins.metadata.scan 779.1ms
  - warm: total 10359ms; pre-provider 8853ms; provider 1095ms; post-provider 411ms; response true
    - active window: metadata scans 6 (196.35ms total, max 93.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8853ms; provider 1095ms; post-provider 411ms; unknown 6745.62ms; source agent.prepare 1328.28ms; plugins.metadata.scan 779.1ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9120 ms | 4081 ms | 5039 ms | 1150 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260926-052335-358ecb/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052335-358ecb/openclaw/timeline.jsonl |
  | warm | 8853 ms | 3947 ms | 4906 ms | 1095 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260926-052335-358ecb/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052335-358ecb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 5092 ms | 2076 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 764 ms | 466 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 667 ms | 262 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 175 ms | 76 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 4782 ms | 2021 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 858 ms | 444 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 565 ms | 339 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 197 ms | 93 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 50 ms | 50 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260926-052335-358ecb-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260926-052335-358ecb-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260926-052335-358ecb-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260926-052335-358ecb/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052335-358ecb

## Target Cleanup

- Runtime: `kova-local-muhy27nw-3s8-2f7bebec`
- Result: removed
- Duration: 474ms

