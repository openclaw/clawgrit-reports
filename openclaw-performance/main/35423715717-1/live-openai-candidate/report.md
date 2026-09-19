# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — cold agent spent 10332ms before provider work, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | cold agent spent 10332ms before provider work, over threshold 10000ms |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260919-052222-3b0e95` |
| Generated | 2026-09-19T05:24:17.162Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10332ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 993.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider work took 3110ms, over threshold 3000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 993.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 10332ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 993.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1885ms), but OpenClaw spent 10332ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 993.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 189.4% | 12403ms | 11349ms | 10332ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1084.2 MB | 12403ms | 11349ms | cold agent spent 10332ms before provider work, over threshold 10000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1084.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 199.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 993.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 475.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.6% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 203.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 90.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 117.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260919-052222-3b0e95/kova-agent-cold-warm-message-2c26dd1d-kova-260919-052222-3b0e95
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 993.9 MB; tracked total 1084.2 MB; max CPU 189.4%; samples 31; roles command-tree 1084.2MB/199.4%, agent-process 993.9MB/189.4%, status-cli 475.9MB/153.6%, package-manager 203.7MB/154.7%
- agent: turn 12403ms; cold/warm 12403ms/11349ms; cold-warm delta 1054ms; pre-provider 10332ms; provider 1885ms; metadata scans 19 (554.66ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12350.3ms; max 12403ms; pre-provider p95 10217.4ms
- agent CLI attribution: cold known 6872ms / unattributed 3460ms; warm known 4469ms / unattributed 3571ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 3491.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - cold agent spent 10332ms before provider work, over threshold 10000ms
  - warm provider work took 3110ms, over threshold 3000ms
  - cold pre-provider latency was 10332ms, over threshold 10000ms
  - cold provider was fast (1885ms), but OpenClaw spent 10332ms before provider work.
- Agent turns:
  - cold: total 12403ms; pre-provider 10332ms; provider 1885ms; post-provider 186ms; response true
    - active window: metadata scans 14 (387.43ms total, max 67.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10332ms; provider 1885ms; post-provider 186ms; unknown 8740.17ms; source plugins.metadata.scan 1077.59ms; agent.prepare 514.24ms
  - warm: total 11349ms; pre-provider 8040ms; provider 3110ms; post-provider 199ms; response true
    - active window: metadata scans 5 (167.23ms total, max 68.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8040ms; provider 3110ms; post-provider 199ms; unknown 6448.17ms; source plugins.metadata.scan 1077.59ms; agent.prepare 514.24ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10332 ms | 6872 ms | 3460 ms | 1885 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260919-052222-3b0e95/kova-agent-cold-warm-message-2c26dd1d-kova-260919-052222-3b0e95/openclaw/timeline.jsonl |
  | warm | 8040 ms | 4469 ms | 3571 ms | 3110 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260919-052222-3b0e95/kova-agent-cold-warm-message-2c26dd1d-kova-260919-052222-3b0e95/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x39 | 39 | 0 | 11927 ms | 3491 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 496 ms | 211 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x11, `startup`, `agent.startup` x2 | 14 | 0 | 388 ms | 68 ms |
  | cold | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 261 ms | 125 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x11, `agent.startup` x2 | 13 | 0 | 23 ms | 4 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x13 | 13 | 0 | 6796 ms | 2702 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 660 ms | 383 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 250 ms | 123 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x2, `startup`, `agent.startup` x2 | 5 | 0 | 166 ms | 68 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260919-052222-3b0e95-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260919-052222-3b0e95-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260919-052222-3b0e95-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260919-052222-3b0e95/kova-agent-cold-warm-message-2c26dd1d-kova-260919-052222-3b0e95

## Target Cleanup

- Runtime: `kova-local-mu7xxowa-3pe-d44868d7`
- Result: removed
- Duration: 491ms

