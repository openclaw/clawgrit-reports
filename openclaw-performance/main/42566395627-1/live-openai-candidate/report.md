# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1652.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1837 MB, agent-process 1652.4 MB, status-cli 881.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1652.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1837 MB, agent-process 1652.4 MB, status-cli 881.6 MB |
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
| Run ID | `kova-261109-052055-076bfe` |
| Generated | 2026-11-09T05:25:24.191Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1652.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1837 MB, agent-process 1652.4 MB, status-cli 881.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1652.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1837 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1652.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 12509ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1652.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 12082ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1652.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 12509ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1652.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 12082ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1652.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1135ms), but OpenClaw spent 12509ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1652.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 215% | 14031ms | 13524ms | 12509ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1837 MB | 14031ms | 13524ms | agent-process peak RSS 1652.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1837 MB, agent-process 1652.4 MB, status-cli 881.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1837 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 228.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1652.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 215% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 881.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 184.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 120.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261109-052055-076bfe/kova-agent-cold-warm-message-2c26dd1d-kova-261109-052055-076bfe
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1652.4 MB; tracked total 1837 MB; max CPU 215%; samples 39; roles command-tree 1837MB/228.6%, agent-process 1652.4MB/215%, status-cli 881.6MB/174.1%, agent-cli 184.6MB/120.4%
- agent: turn 14031ms; cold/warm 14031ms/13524ms; cold-warm delta 507ms; pre-provider 12509ms; provider 1135ms; metadata scans 12 (521.35ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14005.65ms; max 14031ms; pre-provider p95 12487.65ms
- agent CLI attribution: cold known 8325ms / unattributed 4184ms; warm known 7561ms / unattributed 4521ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 3900.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1652.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1837 MB, agent-process 1652.4 MB, status-cli 881.6 MB
  - command-tree peak RSS 1837 MB exceeded threshold 1600 MB
  - cold agent spent 12509ms before provider work, over threshold 10000ms
  - warm agent spent 12082ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 12509ms, over threshold 10000ms
  - warm pre-provider latency was 12082ms, over threshold 10000ms
  - cold provider was fast (1135ms), but OpenClaw spent 12509ms before provider work.
- Agent turns:
  - cold: total 14031ms; pre-provider 12509ms; provider 1135ms; post-provider 387ms; response true
    - active window: metadata scans 6 (275.61ms total, max 121.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12509ms; provider 1135ms; post-provider 387ms; unknown 9629.36ms; source agent.prepare 1692.88ms; plugins.metadata.scan 1186.76ms
  - warm: total 13524ms; pre-provider 12082ms; provider 1066ms; post-provider 376ms; response true
    - active window: metadata scans 6 (245.74ms total, max 110.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12082ms; provider 1066ms; post-provider 376ms; unknown 9202.36ms; source agent.prepare 1692.88ms; plugins.metadata.scan 1186.76ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12509 ms | 8325 ms | 4184 ms | 1135 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261109-052055-076bfe/kova-agent-cold-warm-message-2c26dd1d-kova-261109-052055-076bfe/openclaw/timeline.jsonl |
  | warm | 12082 ms | 7561 ms | 4521 ms | 1066 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261109-052055-076bfe/kova-agent-cold-warm-message-2c26dd1d-kova-261109-052055-076bfe/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 9681 ms | 3901 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2746 ms | 1824 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 565 ms | 233 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 277 ms | 121 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 154 ms | 154 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 7384 ms | 3304 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3010 ms | 1951 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1131 ms | 501 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 245 ms | 110 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 134 ms | 134 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261109-052055-076bfe-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261109-052055-076bfe-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261109-052055-076bfe-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261109-052055-076bfe/kova-agent-cold-warm-message-2c26dd1d-kova-261109-052055-076bfe

## Target Cleanup

- Runtime: `kova-local-mw8tc9dg-3ki-40db19e7`
- Result: removed
- Duration: 602ms

