# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1550.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1736.9 MB, agent-process 1550.2 MB, status-cli 880.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1550.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1736.9 MB, agent-process 1550.2 MB, status-cli 880.8 MB |
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
| Run ID | `kova-261021-052532-340fdc` |
| Generated | 2026-10-21T05:30:06.375Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1550.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1736.9 MB, agent-process 1550.2 MB, status-cli 880.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1550.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1736.9 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1550.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 41971ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1550.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 41452ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1550.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 43044ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1550.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 41971ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1550.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 41452ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1550.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1420ms), but OpenClaw spent 41971ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1550.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 217.9% | 43689ms | 43044ms | 41971ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1736.9 MB | 43689ms | 43044ms | agent-process peak RSS 1550.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1736.9 MB, agent-process 1550.2 MB, status-cli 880.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1736.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 231.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1550.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 217.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 880.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 186.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 116.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261021-052532-340fdc/kova-agent-cold-warm-message-2c26dd1d-kova-261021-052532-340fdc
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1550.2 MB; tracked total 1736.9 MB; max CPU 217.9%; samples 97; roles command-tree 1736.9MB/231.8%, agent-process 1550.2MB/217.9%, status-cli 880.8MB/169.3%, agent-cli 186.7MB/116.2%
- agent: turn 43689ms; cold/warm 43689ms/43044ms; cold-warm delta 645ms; pre-provider 41971ms; provider 1420ms; metadata scans 12 (351.14ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 43656.75ms; max 43689ms; pre-provider p95 41945.05ms
- agent CLI attribution: cold known 22488ms / unattributed 19483ms; warm known 21969ms / unattributed 19483ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 18339.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1550.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1736.9 MB, agent-process 1550.2 MB, status-cli 880.8 MB
  - command-tree peak RSS 1736.9 MB exceeded threshold 1400 MB
  - cold agent spent 41971ms before provider work, over threshold 10000ms
  - warm agent spent 41452ms before provider work, over threshold 10000ms
  - warm agent turn took 43044ms, over threshold 15000ms
  - cold pre-provider latency was 41971ms, over threshold 10000ms
  - warm pre-provider latency was 41452ms, over threshold 10000ms
  - cold provider was fast (1420ms), but OpenClaw spent 41971ms before provider work.
- Agent turns:
  - cold: total 43689ms; pre-provider 41971ms; provider 1420ms; post-provider 298ms; response true
    - active window: metadata scans 6 (174.45ms total, max 73.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 41971ms; provider 1420ms; post-provider 298ms; unknown 38910.97ms; source agent.prepare 2275.21ms; plugins.metadata.scan 784.82ms
  - warm: total 43044ms; pre-provider 41452ms; provider 1336ms; post-provider 256ms; response true
    - active window: metadata scans 6 (176.69ms total, max 80.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 41452ms; provider 1336ms; post-provider 256ms; unknown 38391.97ms; source agent.prepare 2275.21ms; plugins.metadata.scan 784.82ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 41971 ms | 22488 ms | 19483 ms | 1420 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261021-052532-340fdc/kova-agent-cold-warm-message-2c26dd1d-kova-261021-052532-340fdc/openclaw/timeline.jsonl |
  | warm | 41452 ms | 21969 ms | 19483 ms | 1336 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261021-052532-340fdc/kova-agent-cold-warm-message-2c26dd1d-kova-261021-052532-340fdc/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 37762 ms | 18340 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2931 ms | 1868 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 968 ms | 439 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 175 ms | 74 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 163 ms | 163 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 36544 ms | 17921 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2826 ms | 1776 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1307 ms | 610 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 175 ms | 81 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 152 ms | 152 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261021-052532-340fdc-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261021-052532-340fdc-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261021-052532-340fdc-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261021-052532-340fdc/kova-agent-cold-warm-message-2c26dd1d-kova-261021-052532-340fdc

## Target Cleanup

- Runtime: `kova-local-mvho50vu-3ef-3b195f75`
- Result: removed
- Duration: 511ms

