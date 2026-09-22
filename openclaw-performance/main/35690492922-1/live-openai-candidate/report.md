# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260922-052651-313472` |
| Generated | 2026-09-22T05:31:51.133Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 983.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-260922-052651-313472' -- status took 63027ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 983.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1077.7 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 983.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 25857ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 983.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 17136ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 983.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 19086ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 983.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 25857ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 983.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 17136ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 983.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1646ms), but OpenClaw spent 25857ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 983.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 250.1% | 28155ms | 19086ms | 25857ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1077.7 MB | 28155ms | 19086ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1077.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 259.1% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1077.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 259.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 983.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 250.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 530.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.1% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 227.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260922-052651-313472/kova-agent-cold-warm-message-2c26dd1d-kova-260922-052651-313472
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 983.1 MB; tracked total 1077.7 MB; max CPU 250.1%; samples 113; roles agent-cli 1077.7MB/259.1%, command-tree 1077.7MB/259.1%, agent-process 983.1MB/250.1%, status-cli 530.9MB/176.1%
- agent: turn 28155ms; cold/warm 28155ms/19086ms; cold-warm delta 9069ms; pre-provider 25857ms; provider 1646ms; metadata scans 21 (1250.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 27701.55ms; max 28155ms; pre-provider p95 25420.95ms
- agent CLI attribution: cold known 18254ms / unattributed 7603ms; warm known 10016ms / unattributed 7120ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59386.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-260922-052651-313472' -- status took 63027ms, over threshold 10000ms
  - agent-cli peak RSS 1077.7 MB exceeded threshold 1000 MB
  - cold agent spent 25857ms before provider work, over threshold 10000ms
  - warm agent spent 17136ms before provider work, over threshold 10000ms
  - warm agent turn took 19086ms, over threshold 15000ms
  - cold pre-provider latency was 25857ms, over threshold 10000ms
  - warm pre-provider latency was 17136ms, over threshold 10000ms
  - cold provider was fast (1646ms), but OpenClaw spent 25857ms before provider work.
- Agent turns:
  - cold: total 28155ms; pre-provider 25857ms; provider 1646ms; post-provider 652ms; response true
    - active window: metadata scans 15 (914.88ms total, max 165.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 25857ms; provider 1646ms; post-provider 652ms; unknown 21561.99ms; source plugins.metadata.scan 2611.79ms; agent.prepare 1683.22ms
  - warm: total 19086ms; pre-provider 17136ms; provider 1286ms; post-provider 664ms; response true
    - active window: metadata scans 6 (335.53ms total, max 109.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 17136ms; provider 1286ms; post-provider 664ms; unknown 12840.99ms; source plugins.metadata.scan 2611.79ms; agent.prepare 1683.22ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 25857 ms | 18254 ms | 7603 ms | 1646 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260922-052651-313472/kova-agent-cold-warm-message-2c26dd1d-kova-260922-052651-313472/openclaw/timeline.jsonl |
  | warm | 17136 ms | 10016 ms | 7120 ms | 1286 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260922-052651-313472/kova-agent-cold-warm-message-2c26dd1d-kova-260922-052651-313472/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x48 | 48 | 0 | 29938 ms | 10703 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1376 ms | 555 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1023 ms | 354 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x12, `startup`, `agent.startup` x2 | 15 | 0 | 918 ms | 166 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 76 ms | 76 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x12, `agent.startup` x2 | 14 | 0 | 65 ms | 6 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x16 | 16 | 0 | 13437 ms | 4748 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1774 ms | 1029 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 659 ms | 336 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 335 ms | 109 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 54 ms | 54 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 37 ms | 11 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260922-052651-313472-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260922-052651-313472-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260922-052651-313472-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260922-052651-313472/kova-agent-cold-warm-message-2c26dd1d-kova-260922-052651-313472

## Target Cleanup

- Runtime: `kova-local-muc8ezyq-3r2-7a04c61a`
- Result: removed
- Duration: 668ms

