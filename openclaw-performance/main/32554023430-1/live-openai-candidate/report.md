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
| Run ID | `kova-260822-051942-2fbf7c` |
| Generated | 2026-08-22T05:21:31.950Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 154% | 5047ms | 4530ms | 3985ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1081.8 MB | 5047ms | 4530ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1081.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 891.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 616 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 192.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 26.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260822-051942-2fbf7c/kova-agent-cold-warm-message-2c26dd1d-kova-260822-051942-2fbf7c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 891.6 MB; tracked total 1081.8 MB; max CPU 154%; samples 15; roles command-tree 1081.8MB/174.3%, agent-process 891.6MB/154%, status-cli 616MB/174.3%, agent-cli 192.5MB/26.4%
- agent: turn 5047ms; cold/warm 5047ms/4530ms; cold-warm delta 517ms; pre-provider 3985ms; provider 886ms; metadata scans 74 (1175.55ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5021.15ms; max 5047ms; pre-provider p95 3961.6ms
- agent CLI attribution: cold known 752ms / unattributed 3233ms; warm known 540ms / unattributed 2977ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1687.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5047ms; pre-provider 3985ms; provider 886ms; post-provider 176ms; response true
    - active window: metadata scans 42 (692.11ms total, max 43.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3985ms; provider 886ms; post-provider 176ms; unknown 1617.6ms; source plugins.metadata.scan 2190.18ms; agent.prepare 177.22ms
  - warm: total 4530ms; pre-provider 3517ms; provider 846ms; post-provider 167ms; response true
    - active window: metadata scans 32 (483.44ms total, max 26.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3517ms; provider 846ms; post-provider 167ms; unknown 1149.6ms; source plugins.metadata.scan 2190.18ms; agent.prepare 177.22ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3985 ms | 752 ms | 3233 ms | 886 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260822-051942-2fbf7c/kova-agent-cold-warm-message-2c26dd1d-kova-260822-051942-2fbf7c/openclaw/timeline.jsonl |
  | warm | 3517 ms | 540 ms | 2977 ms | 846 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260822-051942-2fbf7c/kova-agent-cold-warm-message-2c26dd1d-kova-260822-051942-2fbf7c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x12, `agent.startup` x11 | 40 | 0 | 661 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 91 ms | 24 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x7, `startup` x12, `agent.startup` x11 | 30 | 0 | 457 ms | 26 ms |
  | warm | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 83 ms | 24 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260822-051942-2fbf7c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260822-051942-2fbf7c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260822-051942-2fbf7c-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260822-051942-2fbf7c/kova-agent-cold-warm-message-2c26dd1d-kova-260822-051942-2fbf7c

## Target Cleanup

- Runtime: `kova-local-mt3xiesx-41y-f47be4d1`
- Result: removed
- Duration: 412ms

