# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1184.6 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1266.9 MB, agent-process 1184.6 MB, status-cli 403.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1184.6 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1266.9 MB, agent-process 1184.6 MB, status-cli 403.8 MB |
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
| Run ID | `kova-260914-052648-dcbe90` |
| Generated | 2026-09-14T05:28:31.390Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1184.6 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1266.9 MB, agent-process 1184.6 MB, status-cli 403.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1184.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 166.5% | 9014ms | 8977ms | 7202ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1266.9 MB | 9014ms | 8977ms | agent-process peak RSS 1184.6 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1266.9 MB, agent-process 1184.6 MB, status-cli 403.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1266.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1184.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 403.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 150.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 82.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 34.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260914-052648-dcbe90/kova-agent-cold-warm-message-2c26dd1d-kova-260914-052648-dcbe90
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1184.6 MB; tracked total 1266.9 MB; max CPU 166.5%; samples 23; roles command-tree 1266.9MB/175.9%, agent-process 1184.6MB/166.5%, status-cli 403.8MB/150.8%, agent-cli 82.3MB/34.7%
- agent: turn 9014ms; cold/warm 9014ms/8977ms; cold-warm delta 37ms; pre-provider 7202ms; provider 1639ms; metadata scans 12 (492.94ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9012.15ms; max 9014ms; pre-provider p95 7351.15ms
- agent CLI attribution: cold known 3796ms / unattributed 3406ms; warm known 3694ms / unattributed 3665ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2143.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1184.6 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1266.9 MB, agent-process 1184.6 MB, status-cli 403.8 MB
- Agent turns:
  - cold: total 9014ms; pre-provider 7202ms; provider 1639ms; post-provider 173ms; response true
    - active window: metadata scans 8 (314.18ms total, max 141.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7202ms; provider 1639ms; post-provider 173ms; unknown 5945.18ms; source plugins.metadata.scan 950.06ms; agent.prepare 306.76ms
  - warm: total 8977ms; pre-provider 7359ms; provider 1453ms; post-provider 165ms; response true
    - active window: metadata scans 4 (178.76ms total, max 135.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7359ms; provider 1453ms; post-provider 165ms; unknown 6102.18ms; source plugins.metadata.scan 950.06ms; agent.prepare 306.76ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7202 ms | 3796 ms | 3406 ms | 1639 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260914-052648-dcbe90/kova-agent-cold-warm-message-2c26dd1d-kova-260914-052648-dcbe90/openclaw/timeline.jsonl |
  | warm | 7359 ms | 3694 ms | 3665 ms | 1453 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260914-052648-dcbe90/kova-agent-cold-warm-message-2c26dd1d-kova-260914-052648-dcbe90/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 5771 ms | 1825 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 637 ms | 234 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 314 ms | 142 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 164 ms | 57 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5188 ms | 2143 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 813 ms | 343 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 178 ms | 135 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 143 ms | 43 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260914-052648-dcbe90-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260914-052648-dcbe90-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260914-052648-dcbe90-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260914-052648-dcbe90/kova-agent-cold-warm-message-2c26dd1d-kova-260914-052648-dcbe90

## Target Cleanup

- Runtime: `kova-local-mu0sw4b8-416-762a6ade`
- Result: removed
- Duration: 550ms

