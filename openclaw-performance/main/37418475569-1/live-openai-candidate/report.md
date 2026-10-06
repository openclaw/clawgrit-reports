# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1182 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1281.8 MB, agent-process 1182 MB, status-cli 923.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1182 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1281.8 MB, agent-process 1182 MB, status-cli 923.9 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261006-052813-52e78e` |
| Generated | 2026-10-06T05:30:56.903Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1182 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1281.8 MB, agent-process 1182 MB, status-cli 923.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1182 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 11312ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1182 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 10626ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1182 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 11312ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1182 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 10626ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1182 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1287ms), but OpenClaw spent 11312ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1182 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 172.7% | 12948ms | 12467ms | 11312ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1281.8 MB | 12948ms | 12467ms | agent-process peak RSS 1182 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1281.8 MB, agent-process 1182 MB, status-cli 923.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1281.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1182 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 923.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 100.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 116.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261006-052813-52e78e/kova-agent-cold-warm-message-2c26dd1d-kova-261006-052813-52e78e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1182 MB; tracked total 1281.8 MB; max CPU 172.7%; samples 36; roles command-tree 1281.8MB/189.8%, agent-process 1182MB/172.7%, status-cli 923.9MB/189.8%, agent-cli 100.8MB/116.3%
- agent: turn 12948ms; cold/warm 12948ms/12467ms; cold-warm delta 481ms; pre-provider 11312ms; provider 1287ms; metadata scans 12 (380.77ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12923.95ms; max 12948ms; pre-provider p95 11277.7ms
- agent CLI attribution: cold known 4975ms / unattributed 6337ms; warm known 5190ms / unattributed 5436ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2471.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1182 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1281.8 MB, agent-process 1182 MB, status-cli 923.9 MB
  - cold agent spent 11312ms before provider work, over threshold 10000ms
  - warm agent spent 10626ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 11312ms, over threshold 10000ms
  - warm pre-provider latency was 10626ms, over threshold 10000ms
  - cold provider was fast (1287ms), but OpenClaw spent 11312ms before provider work.
- Agent turns:
  - cold: total 12948ms; pre-provider 11312ms; provider 1287ms; post-provider 349ms; response true
    - active window: metadata scans 6 (190.77ms total, max 83.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11312ms; provider 1287ms; post-provider 349ms; unknown 9497.74ms; source agent.prepare 964.48ms; plugins.metadata.scan 849.78ms
  - warm: total 12467ms; pre-provider 10626ms; provider 1432ms; post-provider 409ms; response true
    - active window: metadata scans 6 (190ms total, max 83.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10626ms; provider 1432ms; post-provider 409ms; unknown 8811.74ms; source agent.prepare 964.48ms; plugins.metadata.scan 849.78ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11312 ms | 4975 ms | 6337 ms | 1287 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261006-052813-52e78e/kova-agent-cold-warm-message-2c26dd1d-kova-261006-052813-52e78e/openclaw/timeline.jsonl |
  | warm | 10626 ms | 5190 ms | 5436 ms | 1432 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261006-052813-52e78e/kova-agent-cold-warm-message-2c26dd1d-kova-261006-052813-52e78e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 6708 ms | 2471 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1140 ms | 731 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 315 ms | 124 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 190 ms | 83 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 23 ms | 9 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 5232 ms | 2010 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1678 ms | 1258 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 650 ms | 368 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 189 ms | 83 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 22 ms | 8 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261006-052813-52e78e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261006-052813-52e78e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261006-052813-52e78e-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261006-052813-52e78e/kova-agent-cold-warm-message-2c26dd1d-kova-261006-052813-52e78e

## Target Cleanup

- Runtime: `kova-local-muw8moxj-3tc-650f9eb0`
- Result: removed
- Duration: 542ms

