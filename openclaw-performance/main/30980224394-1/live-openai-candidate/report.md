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
| Run ID | `kova-260805-060706-40b23b` |
| Generated | 2026-08-05T06:08:27.936Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 159% | 7186ms | 6097ms | 5315ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1097.3 MB | 7186ms | 6097ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1097.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 184.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 921.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 597.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 184.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 176.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 35.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260805-060706-40b23b/kova-agent-cold-warm-message-2c26dd1d-kova-260805-060706-40b23b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 921.6 MB; tracked total 1097.3 MB; max CPU 159%; samples 21; roles command-tree 1097.3MB/184.1%, agent-process 921.6MB/159%, status-cli 597.9MB/184.1%, agent-cli 176.6MB/35.1%
- agent: turn 7186ms; cold/warm 7186ms/6097ms; cold-warm delta 1089ms; pre-provider 5315ms; provider 1479ms; metadata scans 55 (1073.19ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7131.55ms; max 7186ms; pre-provider p95 5291.5ms
- agent CLI attribution: cold known 635ms / unattributed 4680ms; warm known 596ms / unattributed 4249ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1679.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7186ms; pre-provider 5315ms; provider 1479ms; post-provider 392ms; response true
    - active window: metadata scans 28 (551.29ms total, max 30.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5315ms; provider 1479ms; post-provider 392ms; unknown 2446.49ms; source plugins.metadata.scan 2000ms; agent.prepare 868.51ms
  - warm: total 6097ms; pre-provider 4845ms; provider 891ms; post-provider 361ms; response true
    - active window: metadata scans 27 (521.9ms total, max 27.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4845ms; provider 891ms; post-provider 361ms; unknown 1976.49ms; source plugins.metadata.scan 2000ms; agent.prepare 868.51ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5315 ms | 635 ms | 4680 ms | 1479 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260805-060706-40b23b/kova-agent-cold-warm-message-2c26dd1d-kova-260805-060706-40b23b/openclaw/timeline.jsonl |
  | warm | 4845 ms | 596 ms | 4249 ms | 891 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260805-060706-40b23b/kova-agent-cold-warm-message-2c26dd1d-kova-260805-060706-40b23b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4, `agent.startup` x4, `cli.command-startup` x3 | 25 | 0 | 484 ms | 31 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 449 ms | 266 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `agent.startup` x4, `cli.command-startup` x2 | 24 | 0 | 460 ms | 27 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 422 ms | 254 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260805-060706-40b23b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260805-060706-40b23b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260805-060706-40b23b-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260805-060706-40b23b/kova-agent-cold-warm-message-2c26dd1d-kova-260805-060706-40b23b

## Target Cleanup

- Runtime: `kova-local-msfopvvj-3yi-b699c5d7`
- Result: removed
- Duration: 478ms

