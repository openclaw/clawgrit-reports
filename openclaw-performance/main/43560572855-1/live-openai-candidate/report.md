# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261114-051738-d005bf' -- status took 10153ms, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261114-051738-d005bf' -- status took 10153ms, over threshold 10000ms |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 24 total, 0 missing, 0 failed
- Categories: command: 9, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261114-051738-d005bf` |
| Generated | 2026-11-14T05:25:47.233Z |
| Mode | execution |
| Target | `local-build:/home/runner/work/openclaw/openclaw` |
| Platform | linux 7.0.0-1017-azure (x64) · v24.22.1 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261114-051738-d005bf' -- status took 10153ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1394.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1394.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1666.6 MB, agent-process 1394.9 MB, status-cli 904.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1394.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1666.6 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1394.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 31028ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1394.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 29993ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1394.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 32701ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1394.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 31028ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1394.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 29993ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1394.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1452ms), but OpenClaw spent 31028ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1394.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 209.5% | 33128ms | 32701ms | 31028ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1666.6 MB | 33128ms | 32701ms | ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261114-051738-d005bf' -- status took 10153ms, over threshold 10000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1666.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 230.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1394.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 209.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 904.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 217.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 390.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 143.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261114-051738-d005bf/kova-agent-cold-warm-message-2c26dd1d-kova-261114-051738-d005bf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1394.9 MB; tracked total 1666.6 MB; max CPU 209.5%; samples 82; roles command-tree 1666.6MB/230.9%, agent-process 1394.9MB/209.5%, status-cli 904.8MB/217.5%, agent-cli 390.8MB/143.3%
- agent: turn 33128ms; cold/warm 33128ms/32701ms; cold-warm delta 427ms; pre-provider 31028ms; provider 1452ms; metadata scans 12 (1201.92ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 33106.65ms; max 33128ms; pre-provider p95 30976.25ms
- agent CLI attribution: cold known 19342ms / unattributed 11686ms; warm known 18297ms / unattributed 11696ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 9872.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261114-051738-d005bf' -- status took 10153ms, over threshold 10000ms
  - agent-process peak RSS 1394.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1666.6 MB, agent-process 1394.9 MB, status-cli 904.8 MB
  - command-tree peak RSS 1666.6 MB exceeded threshold 1400 MB
  - cold agent spent 31028ms before provider work, over threshold 10000ms
  - warm agent spent 29993ms before provider work, over threshold 10000ms
  - warm agent turn took 32701ms, over threshold 15000ms
  - cold pre-provider latency was 31028ms, over threshold 10000ms
  - warm pre-provider latency was 29993ms, over threshold 10000ms
  - cold provider was fast (1452ms), but OpenClaw spent 31028ms before provider work.
- Agent turns:
  - cold: total 33128ms; pre-provider 31028ms; provider 1452ms; post-provider 648ms; response true
    - active window: metadata scans 6 (601.69ms total, max 250.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 31028ms; provider 1452ms; post-provider 648ms; unknown 24010.01ms; source agent.prepare 4338.24ms; plugins.metadata.scan 2679.75ms
  - warm: total 32701ms; pre-provider 29993ms; provider 1989ms; post-provider 719ms; response true
    - active window: metadata scans 6 (600.23ms total, max 255.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 29993ms; provider 1989ms; post-provider 719ms; unknown 22975.01ms; source agent.prepare 4338.24ms; plugins.metadata.scan 2679.75ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 31028 ms | 19342 ms | 11686 ms | 1452 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261114-051738-d005bf/kova-agent-cold-warm-message-2c26dd1d-kova-261114-051738-d005bf/openclaw/timeline.jsonl |
  | warm | 29993 ms | 18297 ms | 11696 ms | 1989 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261114-051738-d005bf/kova-agent-cold-warm-message-2c26dd1d-kova-261114-051738-d005bf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 22905 ms | 9873 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 6305 ms | 4329 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1209 ms | 390 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 602 ms | 250 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 519 ms | 519 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 51 ms | 51 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 18592 ms | 8441 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 6627 ms | 4468 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3124 ms | 1375 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 601 ms | 256 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 507 ms | 507 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 53 ms | 53 ms |

## Artifacts

- markdown-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261114-051738-d005bf-diagnostic.md
- json-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261114-051738-d005bf-diagnostic.json
- summary-json: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261114-051738-d005bf-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261114-051738-d005bf/kova-agent-cold-warm-message-2c26dd1d-kova-261114-051738-d005bf

## Target Cleanup

- Runtime: `kova-local-mwfyfaws-2ve-3f7b2931`
- Result: removed
- Duration: 3550ms

