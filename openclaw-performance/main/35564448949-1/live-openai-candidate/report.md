# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-260921-052945-247fb7' -- status took 61917ms, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-260921-052945-247fb7' -- status took 61917ms, over threshold 10000ms |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260921-052945-247fb7` |
| Generated | 2026-09-21T05:32:48.302Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-260921-052945-247fb7' -- status took 61917ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1122.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1122.7 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1217.2 MB, agent-process 1122.7 MB, status-cli 453.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1122.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 12672ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1122.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 12672ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1122.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1607ms), but OpenClaw spent 12672ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1122.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 189.7% | 14474ms | 11351ms | 12672ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1217.2 MB | 14474ms | 11351ms | ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-260921-052945-247fb7' -- status took 61917ms, over threshold 10000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1217.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1122.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 453.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 145.8% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 230.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 163.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 124.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260921-052945-247fb7/kova-agent-cold-warm-message-2c26dd1d-kova-260921-052945-247fb7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1122.7 MB; tracked total 1217.2 MB; max CPU 189.7%; samples 92; roles command-tree 1217.2MB/200.5%, agent-process 1122.7MB/189.7%, status-cli 453.8MB/145.8%, package-manager 230.5MB/151%
- agent: turn 14474ms; cold/warm 14474ms/11351ms; cold-warm delta 3123ms; pre-provider 12672ms; provider 1607ms; metadata scans 21 (668.45ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14317.85ms; max 14474ms; pre-provider p95 12534.65ms
- agent CLI attribution: cold known 8617ms / unattributed 4055ms; warm known 5533ms / unattributed 4392ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59713.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-260921-052945-247fb7' -- status took 61917ms, over threshold 10000ms
  - agent-process peak RSS 1122.7 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1217.2 MB, agent-process 1122.7 MB, status-cli 453.8 MB
  - cold agent spent 12672ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 12672ms, over threshold 10000ms
  - cold provider was fast (1607ms), but OpenClaw spent 12672ms before provider work.
- Agent turns:
  - cold: total 14474ms; pre-provider 12672ms; provider 1607ms; post-provider 195ms; response true
    - active window: metadata scans 15 (478.47ms total, max 78.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12672ms; provider 1607ms; post-provider 195ms; unknown 10669.72ms; source plugins.metadata.scan 1289.67ms; agent.prepare 712.61ms
  - warm: total 11351ms; pre-provider 9925ms; provider 1209ms; post-provider 217ms; response true
    - active window: metadata scans 6 (189.98ms total, max 71.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9925ms; provider 1209ms; post-provider 217ms; unknown 7922.72ms; source plugins.metadata.scan 1289.67ms; agent.prepare 712.61ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12672 ms | 8617 ms | 4055 ms | 1607 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260921-052945-247fb7/kova-agent-cold-warm-message-2c26dd1d-kova-260921-052945-247fb7/openclaw/timeline.jsonl |
  | warm | 9925 ms | 5533 ms | 4392 ms | 1209 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260921-052945-247fb7/kova-agent-cold-warm-message-2c26dd1d-kova-260921-052945-247fb7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x43 | 43 | 0 | 14569 ms | 4708 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 610 ms | 264 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x12, `startup`, `agent.startup` x2 | 15 | 0 | 478 ms | 78 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 360 ms | 182 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x12, `agent.startup` x2 | 14 | 0 | 39 ms | 7 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x15 | 15 | 0 | 8021 ms | 2960 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 770 ms | 425 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 352 ms | 169 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 190 ms | 72 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260921-052945-247fb7-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260921-052945-247fb7-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260921-052945-247fb7-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260921-052945-247fb7/kova-agent-cold-warm-message-2c26dd1d-kova-260921-052945-247fb7

## Target Cleanup

- Runtime: `kova-local-muat2w4x-3pe-de1fd7ff`
- Result: removed
- Duration: 547ms

