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
| Run ID | `kova-260927-052421-d12695` |
| Generated | 2026-09-27T05:26:38.156Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1191.7 MB, command-tree 1191.7 MB, status-cli 568.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1191.7 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260927-052421-d12695/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-d12695/resource-samples/cold-agent-turn-1.jsonl |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | n/a | 10831ms | 10204ms | 9417ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1191.7 MB | 10831ms | 10204ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1191.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 203.2% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1191.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 568.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260927-052421-d12695/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-d12695
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1191.7 MB; max CPU unknown; samples 31; roles agent-cli 1191.7MB/203.2%, command-tree 1191.7MB/206.7%, status-cli 568.6MB/206.7%
- agent: turn 10831ms; cold/warm 10831ms/10204ms; cold-warm delta 627ms; pre-provider 9417ms; provider 1154ms; metadata scans 12 (347.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10799.65ms; max 10831ms; pre-provider p95 9356.8ms
- agent CLI attribution: cold known 4535ms / unattributed 4882ms; warm known 3707ms / unattributed 4506ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2493.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1191.7 MB, command-tree 1191.7 MB, status-cli 568.6 MB
  - agent-cli peak RSS 1191.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 10831ms; pre-provider 9417ms; provider 1154ms; post-provider 260ms; response true
    - active window: metadata scans 6 (181.09ms total, max 77.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9417ms; provider 1154ms; post-provider 260ms; unknown 7268.98ms; source agent.prepare 1307.96ms; plugins.metadata.scan 840.06ms
  - warm: total 10204ms; pre-provider 8213ms; provider 1568ms; post-provider 423ms; response true
    - active window: metadata scans 6 (166.64ms total, max 77.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8213ms; provider 1568ms; post-provider 423ms; unknown 6064.98ms; source agent.prepare 1307.96ms; plugins.metadata.scan 840.06ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9417 ms | 4535 ms | 4882 ms | 1154 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260927-052421-d12695/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-d12695/openclaw/timeline.jsonl |
  | warm | 8213 ms | 3707 ms | 4506 ms | 1568 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260927-052421-d12695/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-d12695/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 6139 ms | 2493 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 703 ms | 471 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 635 ms | 257 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 182 ms | 78 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 45 ms | 45 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 4289 ms | 1775 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 827 ms | 416 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 606 ms | 381 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 166 ms | 77 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 40 ms | 40 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260927-052421-d12695-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260927-052421-d12695-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260927-052421-d12695-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260927-052421-d12695/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-d12695

## Target Cleanup

- Runtime: `kova-local-mujdj296-3sk-f9254a77`
- Result: removed
- Duration: 552ms

