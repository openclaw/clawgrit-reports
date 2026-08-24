# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 1 (PASS:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 22 total, 0 missing, 0 failed
- Categories: command: 7, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260824-052521-151b0f` |
| Generated | 2026-08-24T05:27:13.737Z |
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
| PASS | 1 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 148% | 5555ms | 5023ms | 4265ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1070.4 MB | 5555ms | 5023ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1070.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 234.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 875.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 148% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 708.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 254.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 91.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260824-052521-151b0f/kova-agent-cold-warm-message-2c26dd1d-kova-260824-052521-151b0f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 875.6 MB; tracked total 1070.4 MB; max CPU 148%; samples 17; roles command-tree 1070.4MB/234.7%, agent-process 875.6MB/148%, status-cli 708.4MB/176.4%, agent-cli 254.3MB/91.7%
- agent: turn 5555ms; cold/warm 5555ms/5023ms; cold-warm delta 532ms; pre-provider 4265ms; provider 1033ms; metadata scans 74 (1208.9ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5528.4ms; max 5555ms; pre-provider p95 4240.75ms
- agent CLI attribution: cold known 792ms / unattributed 3473ms; warm known 538ms / unattributed 3242ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1875.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5555ms; pre-provider 4265ms; provider 1033ms; post-provider 257ms; response true
    - active window: metadata scans 42 (732.54ms total, max 52.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4265ms; provider 1033ms; post-provider 257ms; unknown 1815.37ms; source plugins.metadata.scan 2284.66ms; agent.prepare 164.97ms
  - warm: total 5023ms; pre-provider 3780ms; provider 1078ms; post-provider 165ms; response true
    - active window: metadata scans 32 (476.36ms total, max 29.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3780ms; provider 1078ms; post-provider 165ms; unknown 1330.37ms; source plugins.metadata.scan 2284.66ms; agent.prepare 164.97ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4265 ms | 792 ms | 3473 ms | 1033 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260824-052521-151b0f/kova-agent-cold-warm-message-2c26dd1d-kova-260824-052521-151b0f/openclaw/timeline.jsonl |
  | warm | 3780 ms | 538 ms | 3242 ms | 1078 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260824-052521-151b0f/kova-agent-cold-warm-message-2c26dd1d-kova-260824-052521-151b0f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x12, `agent.startup` x11 | 40 | 0 | 709 ms | 52 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 83 ms | 22 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x7, `startup` x12, `agent.startup` x11 | 30 | 0 | 456 ms | 30 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 82 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260824-052521-151b0f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260824-052521-151b0f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260824-052521-151b0f-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260824-052521-151b0f/kova-agent-cold-warm-message-2c26dd1d-kova-260824-052521-151b0f

## Target Cleanup

- Runtime: `kova-local-mt6sldfd-407-d1498727`
- Result: removed
- Duration: 504ms

