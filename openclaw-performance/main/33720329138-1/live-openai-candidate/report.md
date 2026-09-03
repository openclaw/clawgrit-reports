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
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260903-054844-f1529d` |
| Generated | 2026-09-03T05:50:16.352Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 128% | 4730ms | 3657ms | 2048ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 679.8 MB | 4730ms | 3657ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 679.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 148.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 547.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 128% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 132.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 20.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 5.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 0% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260903-054844-f1529d/kova-agent-cold-warm-message-2c26dd1d-kova-260903-054844-f1529d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 547.5 MB; tracked total 679.8 MB; max CPU 128%; samples 13; roles command-tree 679.8MB/148.5%, agent-process 547.5MB/128%, agent-cli 132.3MB/20.5%, status-cli 5.7MB/0%
- agent: turn 4730ms; cold/warm 4730ms/3657ms; cold-warm delta 1073ms; pre-provider 2048ms; provider 2548ms; metadata scans 12 (297.03ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4676.35ms; max 4730ms; pre-provider p95 2037.45ms
- agent CLI attribution: cold known 1442ms / unattributed 606ms; warm known 1162ms / unattributed 675ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 581.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4730ms; pre-provider 2048ms; provider 2548ms; post-provider 134ms; response true
    - active window: metadata scans 8 (209.28ms total, max 59.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2048ms; provider 2548ms; post-provider 134ms; unknown 1130.4ms; source plugins.metadata.scan 677.13ms; agent.prepare 240.47ms
  - warm: total 3657ms; pre-provider 1837ms; provider 1683ms; post-provider 137ms; response true
    - active window: metadata scans 4 (87.75ms total, max 48.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1837ms; provider 1683ms; post-provider 137ms; unknown 919.4ms; source plugins.metadata.scan 677.13ms; agent.prepare 240.47ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2048 ms | 1442 ms | 606 ms | 2548 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260903-054844-f1529d/kova-agent-cold-warm-message-2c26dd1d-kova-260903-054844-f1529d/openclaw/timeline.jsonl |
  | warm | 1837 ms | 1162 ms | 675 ms | 1683 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260903-054844-f1529d/kova-agent-cold-warm-message-2c26dd1d-kova-260903-054844-f1529d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x25 | 25 | 0 | 2049 ms | 581 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 211 ms | 59 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 204 ms | 99 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 115 ms | 33 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x5, `agent.startup` x2 | 7 | 0 | 9 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1404 ms | 581 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 229 ms | 121 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 127 ms | 28 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 88 ms | 48 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `plugins.metadata.freeze` | `agent.startup` x2, `cli.command-startup` | 3 | 0 | 5 ms | 2 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260903-054844-f1529d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260903-054844-f1529d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260903-054844-f1529d-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260903-054844-f1529d/kova-agent-cold-warm-message-2c26dd1d-kova-260903-054844-f1529d

## Target Cleanup

- Runtime: `kova-local-mtl3tz20-424-fa67a1a1`
- Result: removed
- Duration: 445ms

