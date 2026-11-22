# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1561.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1946.9 MB, agent-process 1561.9 MB, status-cli 940.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1561.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1946.9 MB, agent-process 1561.9 MB, status-cli 940.1 MB |
| Blocking findings | 8 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 24 total, 0 missing, 0 failed
- Categories: command: 9, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261122-051756-4cc036` |
| Generated | 2026-11-22T05:23:13.937Z |
| Mode | execution |
| Target | `local-build:/home/runner/work/openclaw/openclaw` |
| Platform | linux 7.0.0-1014-aws (x64) · v24.22.1 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1561.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1946.9 MB, agent-process 1561.9 MB, status-cli 940.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1561.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1946.9 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1561.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 17699ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1561.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 16686ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1561.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 18011ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1561.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 17699ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1561.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 16686ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1561.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1070ms), but OpenClaw spent 17699ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1561.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 209.9% | 19335ms | 18011ms | 17699ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1946.9 MB | 19335ms | 18011ms | agent-process peak RSS 1561.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1946.9 MB, agent-process 1561.9 MB, status-cli 940.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1946.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 215.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1561.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 209.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 488.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 214.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 940.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 205.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261122-051756-4cc036/kova-agent-cold-warm-message-2c26dd1d-kova-261122-051756-4cc036
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1561.9 MB; tracked total 1946.9 MB; max CPU 209.9%; samples 50; roles command-tree 1946.9MB/215.4%, agent-process 1561.9MB/209.9%, agent-cli 488.7MB/214.9%, status-cli 940.1MB/205.1%
- agent: turn 19335ms; cold/warm 19335ms/18011ms; cold-warm delta 1324ms; pre-provider 17699ms; provider 1070ms; metadata scans 12 (706.01ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 19268.8ms; max 19335ms; pre-provider p95 17648.35ms
- agent CLI attribution: cold known 11560ms / unattributed 6139ms; warm known 10624ms / unattributed 6062ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 5469.44ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1561.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1946.9 MB, agent-process 1561.9 MB, status-cli 940.1 MB
  - command-tree peak RSS 1946.9 MB exceeded threshold 1400 MB
  - cold agent spent 17699ms before provider work, over threshold 10000ms
  - warm agent spent 16686ms before provider work, over threshold 10000ms
  - warm agent turn took 18011ms, over threshold 15000ms
  - cold pre-provider latency was 17699ms, over threshold 10000ms
  - warm pre-provider latency was 16686ms, over threshold 10000ms
  - cold provider was fast (1070ms), but OpenClaw spent 17699ms before provider work.
- Agent turns:
  - cold: total 19335ms; pre-provider 17699ms; provider 1070ms; post-provider 566ms; response true
    - active window: metadata scans 6 (342.45ms total, max 143.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 17699ms; provider 1070ms; post-provider 566ms; unknown 13015.43ms; source agent.prepare 3110.36ms; plugins.metadata.scan 1573.21ms
  - warm: total 18011ms; pre-provider 16686ms; provider 881ms; post-provider 444ms; response true
    - active window: metadata scans 6 (363.56ms total, max 161.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 16686ms; provider 881ms; post-provider 444ms; unknown 12002.43ms; source agent.prepare 3110.36ms; plugins.metadata.scan 1573.21ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 17699 ms | 11560 ms | 6139 ms | 1070 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261122-051756-4cc036/kova-agent-cold-warm-message-2c26dd1d-kova-261122-051756-4cc036/openclaw/timeline.jsonl |
  | warm | 16686 ms | 10624 ms | 6062 ms | 881 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261122-051756-4cc036/kova-agent-cold-warm-message-2c26dd1d-kova-261122-051756-4cc036/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 13217 ms | 5469 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3743 ms | 2370 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1193 ms | 324 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 342 ms | 143 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 289 ms | 289 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 10601 ms | 4583 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3723 ms | 2377 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1914 ms | 681 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 364 ms | 161 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 290 ms | 290 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |

## Artifacts

- markdown-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261122-051756-4cc036-diagnostic.md
- json-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261122-051756-4cc036-diagnostic.json
- summary-json: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261122-051756-4cc036-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261122-051756-4cc036/kova-agent-cold-warm-message-2c26dd1d-kova-261122-051756-4cc036

## Target Cleanup

- Runtime: `kova-local-mwrdyi0f-2gw-60f1f1c7`
- Result: removed
- Duration: 436ms

