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
| Run ID | `kova-260910-052335-d26616` |
| Generated | 2026-09-10T05:25:01.227Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 147.1% | 4522ms | 4391ms | 2375ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 684.1 MB | 4522ms | 4391ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 684.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 147.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 603 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 147.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 451.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 129% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 81.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 59.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260910-052335-d26616/kova-agent-cold-warm-message-2c26dd1d-kova-260910-052335-d26616
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 603 MB; tracked total 684.1 MB; max CPU 147.1%; samples 15; roles command-tree 684.1MB/147.1%, agent-process 603MB/147.1%, status-cli 451.4MB/129%, agent-cli 81.8MB/59.2%
- agent: turn 4522ms; cold/warm 4522ms/4391ms; cold-warm delta 131ms; pre-provider 2375ms; provider 2035ms; metadata scans 11 (474.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4515.45ms; max 4522ms; pre-provider p95 2373.85ms
- agent CLI attribution: cold known 1645ms / unattributed 730ms; warm known 1395ms / unattributed 957ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 663.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4522ms; pre-provider 2375ms; provider 2035ms; post-provider 112ms; response true
    - active window: metadata scans 7 (290.06ms total, max 142.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2375ms; provider 2035ms; post-provider 112ms; unknown 1230.43ms; source plugins.metadata.scan 878.99ms; agent.prepare 265.58ms
  - warm: total 4391ms; pre-provider 2352ms; provider 1963ms; post-provider 76ms; response true
    - active window: metadata scans 4 (184.35ms total, max 139.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2352ms; provider 1963ms; post-provider 76ms; unknown 1207.43ms; source plugins.metadata.scan 878.99ms; agent.prepare 265.58ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2375 ms | 1645 ms | 730 ms | 2035 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260910-052335-d26616/kova-agent-cold-warm-message-2c26dd1d-kova-260910-052335-d26616/openclaw/timeline.jsonl |
  | warm | 2352 ms | 1395 ms | 957 ms | 1963 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260910-052335-d26616/kova-agent-cold-warm-message-2c26dd1d-kova-260910-052335-d26616/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 2134 ms | 663 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4, `agent.startup` x2 | 7 | 0 | 289 ms | 142 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 235 ms | 100 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 134 ms | 39 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1525 ms | 614 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 261 ms | 122 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 185 ms | 139 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 133 ms | 34 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260910-052335-d26616-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260910-052335-d26616-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260910-052335-d26616-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260910-052335-d26616/kova-agent-cold-warm-message-2c26dd1d-kova-260910-052335-d26616

## Target Cleanup

- Runtime: `kova-local-mtv30kya-40g-f93ad85a`
- Result: removed
- Duration: 474ms

