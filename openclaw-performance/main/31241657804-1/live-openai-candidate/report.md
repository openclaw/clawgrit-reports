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
| Run ID | `kova-260808-052920-c46727` |
| Generated | 2026-08-08T05:30:34.093Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 157% | 5129ms | 5567ms | 4001ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1094.2 MB | 5129ms | 5567ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1094.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 918.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 623.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 177.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 24.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260808-052920-c46727/kova-agent-cold-warm-message-2c26dd1d-kova-260808-052920-c46727
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 918.4 MB; tracked total 1094.2 MB; max CPU 157%; samples 17; roles command-tree 1094.2MB/170.5%, agent-process 918.4MB/157%, status-cli 623.1MB/170.3%, agent-cli 177.5MB/24.5%
- agent: turn 5567ms; cold/warm 5129ms/5567ms; cold-warm delta 0ms; pre-provider 3684ms; provider 1617ms; metadata scans 12 (122.13ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5545.1ms; max 5567ms; pre-provider p95 3985.15ms
- agent CLI attribution: cold known 197ms / unattributed 3804ms; warm known 148ms / unattributed 3536ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1504.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5129ms; pre-provider 4001ms; provider 873ms; post-provider 255ms; response true
    - active window: metadata scans 7 (68.23ms total, max 21.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4001ms; provider 873ms; post-provider 255ms; unknown 2909.8ms; source plugins.metadata.scan 869.55ms; agent.prepare 221.65ms
  - warm: total 5567ms; pre-provider 3684ms; provider 1617ms; post-provider 266ms; response true
    - active window: metadata scans 5 (53.9ms total, max 21.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3684ms; provider 1617ms; post-provider 266ms; unknown 2592.8ms; source plugins.metadata.scan 869.55ms; agent.prepare 221.65ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4001 ms | 197 ms | 3804 ms | 873 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260808-052920-c46727/kova-agent-cold-warm-message-2c26dd1d-kova-260808-052920-c46727/openclaw/timeline.jsonl |
  | warm | 3684 ms | 148 ms | 3536 ms | 1617 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260808-052920-c46727/kova-agent-cold-warm-message-2c26dd1d-kova-260808-052920-c46727/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 127 ms | 37 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x4, `startup`, `agent.startup` x2 | 7 | 0 | 70 ms | 22 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 93 ms | 29 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x2, `startup`, `agent.startup` x2 | 5 | 0 | 55 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260808-052920-c46727-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260808-052920-c46727-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260808-052920-c46727-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260808-052920-c46727/kova-agent-cold-warm-message-2c26dd1d-kova-260808-052920-c46727

## Target Cleanup

- Runtime: `kova-local-msjxov8i-3yz-0eb3c2ef`
- Result: removed
- Duration: 389ms

