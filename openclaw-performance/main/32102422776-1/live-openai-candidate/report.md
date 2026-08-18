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
| Run ID | `kova-260818-052001-46b32b` |
| Generated | 2026-08-18T05:22:05.546Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 157% | 5266ms | 4988ms | 4059ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1059.7 MB | 5266ms | 4988ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1059.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 870.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 708.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 189.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 31.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260818-052001-46b32b/kova-agent-cold-warm-message-2c26dd1d-kova-260818-052001-46b32b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 870.4 MB; tracked total 1059.7 MB; max CPU 157%; samples 17; roles command-tree 1059.7MB/192.5%, agent-process 870.4MB/157%, status-cli 708.2MB/192.5%, agent-cli 189.3MB/31.7%
- agent: turn 5266ms; cold/warm 5266ms/4988ms; cold-warm delta 278ms; pre-provider 4059ms; provider 1040ms; metadata scans 26 (504.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5252.1ms; max 5266ms; pre-provider p95 4029.15ms
- agent CLI attribution: cold known 494ms / unattributed 3565ms; warm known 204ms / unattributed 3258ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1939.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5266ms; pre-provider 4059ms; provider 1040ms; post-provider 167ms; response true
    - active window: metadata scans 18 (381.85ms total, max 53.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4059ms; provider 1040ms; post-provider 167ms; unknown 2068.91ms; source plugins.metadata.scan 1793.81ms; agent.prepare 196.28ms
  - warm: total 4988ms; pre-provider 3462ms; provider 1344ms; post-provider 182ms; response true
    - active window: metadata scans 8 (122.72ms total, max 36.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3462ms; provider 1344ms; post-provider 182ms; unknown 1471.91ms; source plugins.metadata.scan 1793.81ms; agent.prepare 196.28ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4059 ms | 494 ms | 3565 ms | 1040 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260818-052001-46b32b/kova-agent-cold-warm-message-2c26dd1d-kova-260818-052001-46b32b/openclaw/timeline.jsonl |
  | warm | 3462 ms | 204 ms | 3258 ms | 1344 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260818-052001-46b32b/kova-agent-cold-warm-message-2c26dd1d-kova-260818-052001-46b32b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x14, `startup` x2, `agent.startup` x2 | 18 | 0 | 381 ms | 53 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 113 ms | 32 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x4, `startup` x2, `agent.startup` x2 | 8 | 0 | 122 ms | 36 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 82 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260818-052001-46b32b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260818-052001-46b32b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260818-052001-46b32b-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260818-052001-46b32b/kova-agent-cold-warm-message-2c26dd1d-kova-260818-052001-46b32b

## Target Cleanup

- Runtime: `kova-local-msy7rel4-3xi-4731b22b`
- Result: removed
- Duration: 532ms

