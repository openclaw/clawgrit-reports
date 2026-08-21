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
| Run ID | `kova-260821-052038-470250` |
| Generated | 2026-08-21T05:22:46.809Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 162% | 6932ms | 6280ms | 5545ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1122 MB | 6932ms | 6280ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1122 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 184.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 932.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 699.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 184.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 562 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260821-052038-470250/kova-agent-cold-warm-message-2c26dd1d-kova-260821-052038-470250
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 932.6 MB; tracked total 1122 MB; max CPU 162%; samples 20; roles command-tree 1122MB/184.9%, agent-process 932.6MB/162%, status-cli 699.7MB/184.9%, agent-cli 562MB/176.5%
- agent: turn 6932ms; cold/warm 6932ms/6280ms; cold-warm delta 652ms; pre-provider 5545ms; provider 1158ms; metadata scans 74 (1583.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6899.4ms; max 6932ms; pre-provider p95 5489.7ms
- agent CLI attribution: cold known 1058ms / unattributed 4487ms; warm known 683ms / unattributed 3756ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2288.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6932ms; pre-provider 5545ms; provider 1158ms; post-provider 229ms; response true
    - active window: metadata scans 42 (968.07ms total, max 54.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5545ms; provider 1158ms; post-provider 229ms; unknown 2407.96ms; source plugins.metadata.scan 2904.82ms; agent.prepare 232.22ms
  - warm: total 6280ms; pre-provider 4439ms; provider 1628ms; post-provider 213ms; response true
    - active window: metadata scans 32 (615.77ms total, max 41.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4439ms; provider 1628ms; post-provider 213ms; unknown 1301.96ms; source plugins.metadata.scan 2904.82ms; agent.prepare 232.22ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5545 ms | 1058 ms | 4487 ms | 1158 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260821-052038-470250/kova-agent-cold-warm-message-2c26dd1d-kova-260821-052038-470250/openclaw/timeline.jsonl |
  | warm | 4439 ms | 683 ms | 3756 ms | 1628 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260821-052038-470250/kova-agent-cold-warm-message-2c26dd1d-kova-260821-052038-470250/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x12, `agent.startup` x11 | 40 | 0 | 934 ms | 54 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 124 ms | 33 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x7, `startup` x12, `agent.startup` x11 | 30 | 0 | 578 ms | 42 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 105 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260821-052038-470250-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260821-052038-470250-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260821-052038-470250-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260821-052038-470250/kova-agent-cold-warm-message-2c26dd1d-kova-260821-052038-470250

## Target Cleanup

- Runtime: `kova-local-mt2i3r1x-3zl-761d74e3`
- Result: removed
- Duration: 536ms

