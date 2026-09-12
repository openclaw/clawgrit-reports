# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1134.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1213.8 MB, agent-process 1134.1 MB, status-cli 438.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1134.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1213.8 MB, agent-process 1134.1 MB, status-cli 438.1 MB |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260912-052219-7eae30` |
| Generated | 2026-09-12T05:23:52.798Z |
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
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1134.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1213.8 MB, agent-process 1134.1 MB, status-cli 438.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1134.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 157% | 6432ms | 7213ms | 4926ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1213.8 MB | 6432ms | 7213ms | agent-process peak RSS 1134.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1213.8 MB, agent-process 1134.1 MB, status-cli 438.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1213.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 167.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1134.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 438.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 146.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 79.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 104.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260912-052219-7eae30/kova-agent-cold-warm-message-2c26dd1d-kova-260912-052219-7eae30
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1134.1 MB; tracked total 1213.8 MB; max CPU 157%; samples 20; roles command-tree 1213.8MB/167.1%, agent-process 1134.1MB/157%, status-cli 438.1MB/146.9%, agent-cli 79.7MB/104.8%
- agent: turn 7213ms; cold/warm 6432ms/7213ms; cold-warm delta 0ms; pre-provider 5525ms; provider 1535ms; metadata scans 11 (436.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7173.95ms; max 7213ms; pre-provider p95 5495.05ms
- agent CLI attribution: cold known 2776ms / unattributed 2150ms; warm known 2828ms / unattributed 2697ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1540.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1134.1 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1213.8 MB, agent-process 1134.1 MB, status-cli 438.1 MB
- Agent turns:
  - cold: total 6432ms; pre-provider 4926ms; provider 1304ms; post-provider 202ms; response true
    - active window: metadata scans 7 (250.79ms total, max 118.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4926ms; provider 1304ms; post-provider 202ms; unknown 3771.42ms; source plugins.metadata.scan 850.68ms; agent.prepare 303.9ms
  - warm: total 7213ms; pre-provider 5525ms; provider 1535ms; post-provider 153ms; response true
    - active window: metadata scans 4 (185.91ms total, max 141.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5525ms; provider 1535ms; post-provider 153ms; unknown 4370.42ms; source plugins.metadata.scan 850.68ms; agent.prepare 303.9ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4926 ms | 2776 ms | 2150 ms | 1304 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260912-052219-7eae30/kova-agent-cold-warm-message-2c26dd1d-kova-260912-052219-7eae30/openclaw/timeline.jsonl |
  | warm | 5525 ms | 2828 ms | 2697 ms | 1535 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260912-052219-7eae30/kova-agent-cold-warm-message-2c26dd1d-kova-260912-052219-7eae30/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 3763 ms | 1319 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 545 ms | 206 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4, `agent.startup` x2 | 7 | 0 | 251 ms | 118 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 159 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x13 | 13 | 0 | 3466 ms | 1541 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 677 ms | 274 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 186 ms | 141 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 146 ms | 50 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260912-052219-7eae30-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260912-052219-7eae30-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260912-052219-7eae30-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260912-052219-7eae30/kova-agent-cold-warm-message-2c26dd1d-kova-260912-052219-7eae30

## Target Cleanup

- Runtime: `kova-local-mtxxuo3m-40y-d302694a`
- Result: removed
- Duration: 566ms

