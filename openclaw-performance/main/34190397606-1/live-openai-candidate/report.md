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
| Run ID | `kova-260908-052444-3198fa` |
| Generated | 2026-09-08T05:26:10.858Z |
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
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 138.7% | 4585ms | 5054ms | 2371ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 696.7 MB | 4585ms | 5054ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 696.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 615.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 138.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 445.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 81.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 33.9% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260908-052444-3198fa/kova-agent-cold-warm-message-2c26dd1d-kova-260908-052444-3198fa
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 615.1 MB; tracked total 696.7 MB; max CPU 138.7%; samples 15; roles command-tree 696.7MB/177.6%, agent-process 615.1MB/138.7%, status-cli 445.4MB/177.6%, agent-cli 81.6MB/33.9%
- agent: turn 5054ms; cold/warm 4585ms/5054ms; cold-warm delta 0ms; pre-provider 2003ms; provider 2929ms; metadata scans 11 (435.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5030.55ms; max 5054ms; pre-provider p95 2352.6ms
- agent CLI attribution: cold known 1673ms / unattributed 698ms; warm known 1278ms / unattributed 725ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 638.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4585ms; pre-provider 2371ms; provider 2126ms; post-provider 88ms; response true
    - active window: metadata scans 7 (276.29ms total, max 128.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2371ms; provider 2126ms; post-provider 88ms; unknown 1337.26ms; source plugins.metadata.scan 810.33ms; agent.prepare 223.41ms
  - warm: total 5054ms; pre-provider 2003ms; provider 2929ms; post-provider 122ms; response true
    - active window: metadata scans 4 (159.25ms total, max 118.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2003ms; provider 2929ms; post-provider 122ms; unknown 969.26ms; source plugins.metadata.scan 810.33ms; agent.prepare 223.41ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2371 ms | 1673 ms | 698 ms | 2126 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260908-052444-3198fa/kova-agent-cold-warm-message-2c26dd1d-kova-260908-052444-3198fa/openclaw/timeline.jsonl |
  | warm | 2003 ms | 1278 ms | 725 ms | 2929 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260908-052444-3198fa/kova-agent-cold-warm-message-2c26dd1d-kova-260908-052444-3198fa/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 2266 ms | 617 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4, `agent.startup` x2 | 7 | 0 | 276 ms | 129 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 241 ms | 116 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 124 ms | 36 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1506 ms | 639 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 211 ms | 100 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 159 ms | 119 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 100 ms | 23 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260908-052444-3198fa-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260908-052444-3198fa-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260908-052444-3198fa-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260908-052444-3198fa/kova-agent-cold-warm-message-2c26dd1d-kova-260908-052444-3198fa

## Target Cleanup

- Runtime: `kova-local-mts86d18-407-f56928db`
- Result: removed
- Duration: 440ms

