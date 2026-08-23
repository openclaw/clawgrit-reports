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
| Run ID | `kova-260823-052001-84ecc5` |
| Generated | 2026-08-23T05:21:50.034Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 147% | 5410ms | 4658ms | 4232ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1066.1 MB | 5410ms | 4658ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1066.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 876.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 147% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 617.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 261.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 66.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260823-052001-84ecc5/kova-agent-cold-warm-message-2c26dd1d-kova-260823-052001-84ecc5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 876.6 MB; tracked total 1066.1 MB; max CPU 147%; samples 16; roles command-tree 1066.1MB/196.4%, agent-process 876.6MB/147%, status-cli 617.8MB/172.1%, agent-cli 261.8MB/66.4%
- agent: turn 5410ms; cold/warm 5410ms/4658ms; cold-warm delta 752ms; pre-provider 4232ms; provider 1010ms; metadata scans 74 (1218.47ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5372.4ms; max 5410ms; pre-provider p95 4201.75ms
- agent CLI attribution: cold known 799ms / unattributed 3433ms; warm known 542ms / unattributed 3085ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1945.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5410ms; pre-provider 4232ms; provider 1010ms; post-provider 168ms; response true
    - active window: metadata scans 42 (737.38ms total, max 53.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4232ms; provider 1010ms; post-provider 168ms; unknown 1805.06ms; source plugins.metadata.scan 2258.74ms; agent.prepare 168.2ms
  - warm: total 4658ms; pre-provider 3627ms; provider 874ms; post-provider 157ms; response true
    - active window: metadata scans 32 (481.09ms total, max 26.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3627ms; provider 874ms; post-provider 157ms; unknown 1200.06ms; source plugins.metadata.scan 2258.74ms; agent.prepare 168.2ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4232 ms | 799 ms | 3433 ms | 1010 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260823-052001-84ecc5/kova-agent-cold-warm-message-2c26dd1d-kova-260823-052001-84ecc5/openclaw/timeline.jsonl |
  | warm | 3627 ms | 542 ms | 3085 ms | 874 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260823-052001-84ecc5/kova-agent-cold-warm-message-2c26dd1d-kova-260823-052001-84ecc5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x12, `agent.startup` x11 | 40 | 0 | 716 ms | 54 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 83 ms | 22 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x7, `startup` x12, `agent.startup` x11 | 30 | 0 | 456 ms | 26 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 86 ms | 25 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260823-052001-84ecc5-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260823-052001-84ecc5-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260823-052001-84ecc5-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260823-052001-84ecc5/kova-agent-cold-warm-message-2c26dd1d-kova-260823-052001-84ecc5

## Target Cleanup

- Runtime: `kova-local-mt5cynwu-40p-2c4eb320`
- Result: removed
- Duration: 422ms

