# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 10 |
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
| Run ID | `kova-260925-052511-89a13e` |
| Generated | 2026-09-25T05:27:23.145Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1274.8 MB, command-tree 1274.8 MB, status-cli 523.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1274.8 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 13827ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 10253ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 13827ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 10253ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1264ms), but OpenClaw spent 13827ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260925-052511-89a13e/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-89a13e/resource-samples/cold-agent-turn-1.jsonl |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | n/a | 15408ms | 12065ms | 13827ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1274.8 MB | 15408ms | 12065ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1274.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.2% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1274.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 523.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.5% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 62.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 126.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260925-052511-89a13e/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-89a13e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1274.8 MB; max CPU unknown; samples 37; roles agent-cli 1274.8MB/200.2%, command-tree 1274.8MB/200.2%, status-cli 523.8MB/192.5%, package-manager 62.2MB/126.4%
- agent: turn 15408ms; cold/warm 15408ms/12065ms; cold-warm delta 3343ms; pre-provider 13827ms; provider 1264ms; metadata scans 21 (684.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15240.85ms; max 15408ms; pre-provider p95 13648.3ms
- agent CLI attribution: cold known 9007ms / unattributed 4820ms; warm known 5562ms / unattributed 4691ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4858.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1274.8 MB, command-tree 1274.8 MB, status-cli 523.8 MB
  - agent-cli peak RSS 1274.8 MB exceeded threshold 1000 MB
  - cold agent spent 13827ms before provider work, over threshold 10000ms
  - warm agent spent 10253ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 13827ms, over threshold 10000ms
  - warm pre-provider latency was 10253ms, over threshold 10000ms
  - cold provider was fast (1264ms), but OpenClaw spent 13827ms before provider work.
- Agent turns:
  - cold: total 15408ms; pre-provider 13827ms; provider 1264ms; post-provider 317ms; response true
    - active window: metadata scans 15 (484.46ms total, max 82.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13827ms; provider 1264ms; post-provider 317ms; unknown 11772.09ms; source plugins.metadata.scan 1312.69ms; agent.prepare 742.22ms
  - warm: total 12065ms; pre-provider 10253ms; provider 1317ms; post-provider 495ms; response true
    - active window: metadata scans 6 (200.18ms total, max 77.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10253ms; provider 1317ms; post-provider 495ms; unknown 8198.09ms; source plugins.metadata.scan 1312.69ms; agent.prepare 742.22ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 13827 ms | 9007 ms | 4820 ms | 1264 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260925-052511-89a13e/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-89a13e/openclaw/timeline.jsonl |
  | warm | 10253 ms | 5562 ms | 4691 ms | 1317 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260925-052511-89a13e/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-89a13e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x38 | 38 | 0 | 14990 ms | 4859 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 671 ms | 269 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x12, `startup`, `agent.startup` x2 | 15 | 0 | 487 ms | 82 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 405 ms | 144 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 45 ms | 45 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x12, `agent.startup` x2 | 14 | 0 | 26 ms | 3 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x14 | 14 | 0 | 7837 ms | 2789 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 849 ms | 422 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 338 ms | 150 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 200 ms | 77 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260925-052511-89a13e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260925-052511-89a13e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260925-052511-89a13e-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260925-052511-89a13e/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-89a13e

## Target Cleanup

- Runtime: `kova-local-mugiofeu-3s9-fff604b8`
- Result: removed
- Duration: 543ms

