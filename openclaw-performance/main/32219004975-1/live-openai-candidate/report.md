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
| Run ID | `kova-260819-052024-d083b4` |
| Generated | 2026-08-19T05:22:16.170Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 152% | 5641ms | 5159ms | 4412ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1136.4 MB | 5641ms | 5159ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1136.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 946.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 610.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 189.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 29.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260819-052024-d083b4/kova-agent-cold-warm-message-2c26dd1d-kova-260819-052024-d083b4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 946.7 MB; tracked total 1136.4 MB; max CPU 152%; samples 17; roles command-tree 1136.4MB/177.3%, agent-process 946.7MB/152%, status-cli 610.4MB/177.3%, agent-cli 189.9MB/29.2%
- agent: turn 5641ms; cold/warm 5641ms/5159ms; cold-warm delta 482ms; pre-provider 4412ms; provider 1038ms; metadata scans 74 (1304.94ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5616.9ms; max 5641ms; pre-provider p95 4379.85ms
- agent CLI attribution: cold known 841ms / unattributed 3571ms; warm known 591ms / unattributed 3178ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1818.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5641ms; pre-provider 4412ms; provider 1038ms; post-provider 191ms; response true
    - active window: metadata scans 42 (771.94ms total, max 44.4ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4412ms; provider 1038ms; post-provider 191ms; unknown 1873.57ms; source plugins.metadata.scan 2361.55ms; agent.prepare 176.88ms
  - warm: total 5159ms; pre-provider 3769ms; provider 1200ms; post-provider 190ms; response true
    - active window: metadata scans 32 (533ms total, max 31.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3769ms; provider 1200ms; post-provider 190ms; unknown 1230.57ms; source plugins.metadata.scan 2361.55ms; agent.prepare 176.88ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4412 ms | 841 ms | 3571 ms | 1038 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260819-052024-d083b4/kova-agent-cold-warm-message-2c26dd1d-kova-260819-052024-d083b4/openclaw/timeline.jsonl |
  | warm | 3769 ms | 591 ms | 3178 ms | 1200 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260819-052024-d083b4/kova-agent-cold-warm-message-2c26dd1d-kova-260819-052024-d083b4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x12, `agent.startup` x11 | 40 | 0 | 748 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 93 ms | 26 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x7, `startup` x12, `agent.startup` x11 | 30 | 0 | 507 ms | 32 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 84 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260819-052024-d083b4-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260819-052024-d083b4-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260819-052024-d083b4-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260819-052024-d083b4/kova-agent-cold-warm-message-2c26dd1d-kova-260819-052024-d083b4

## Target Cleanup

- Runtime: `kova-local-mszn7r9d-3wm-3708d2fb`
- Result: removed
- Duration: 447ms

