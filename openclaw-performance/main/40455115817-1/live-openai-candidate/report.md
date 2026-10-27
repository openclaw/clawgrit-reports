# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1437 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1620.1 MB, agent-process 1437 MB, status-cli 878.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1437 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1620.1 MB, agent-process 1437 MB, status-cli 878.7 MB |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261027-052603-3a86d5` |
| Generated | 2026-10-27T05:29:15.244Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1437 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1620.1 MB, agent-process 1437 MB, status-cli 878.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1437 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1620.1 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1437 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 204.4% | 11290ms | 10919ms | 9734ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1620.1 MB | 11290ms | 10919ms | agent-process peak RSS 1437 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1620.1 MB, agent-process 1437 MB, status-cli 878.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1620.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 218.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1437 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 204.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 878.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 282.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 78.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261027-052603-3a86d5/kova-agent-cold-warm-message-2c26dd1d-kova-261027-052603-3a86d5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1437 MB; tracked total 1620.1 MB; max CPU 204.4%; samples 33; roles command-tree 1620.1MB/218.5%, agent-process 1437MB/204.4%, status-cli 878.7MB/172.1%, agent-cli 282.3MB/78.1%
- agent: turn 11290ms; cold/warm 11290ms/10919ms; cold-warm delta 371ms; pre-provider 9734ms; provider 1300ms; metadata scans 12 (397.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 11271.45ms; max 11290ms; pre-provider p95 9714.85ms
- agent CLI attribution: cold known 6458ms / unattributed 3276ms; warm known 5882ms / unattributed 3469ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2560.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1437 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1620.1 MB, agent-process 1437 MB, status-cli 878.7 MB
  - command-tree peak RSS 1620.1 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 11290ms; pre-provider 9734ms; provider 1300ms; post-provider 256ms; response true
    - active window: metadata scans 6 (193.01ms total, max 83.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9734ms; provider 1300ms; post-provider 256ms; unknown 7185.47ms; source agent.prepare 1687.17ms; plugins.metadata.scan 861.36ms
  - warm: total 10919ms; pre-provider 9351ms; provider 1310ms; post-provider 258ms; response true
    - active window: metadata scans 6 (204.25ms total, max 87.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9351ms; provider 1310ms; post-provider 258ms; unknown 6802.47ms; source agent.prepare 1687.17ms; plugins.metadata.scan 861.36ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9734 ms | 6458 ms | 3276 ms | 1300 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261027-052603-3a86d5/kova-agent-cold-warm-message-2c26dd1d-kova-261027-052603-3a86d5/openclaw/timeline.jsonl |
  | warm | 9351 ms | 5882 ms | 3469 ms | 1310 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261027-052603-3a86d5/kova-agent-cold-warm-message-2c26dd1d-kova-261027-052603-3a86d5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6367 ms | 2561 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2565 ms | 1654 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 802 ms | 360 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 192 ms | 83 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 191 ms | 191 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x13 | 13 | 0 | 5074 ms | 2138 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2587 ms | 1667 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 885 ms | 395 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 205 ms | 88 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 196 ms | 196 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261027-052603-3a86d5-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261027-052603-3a86d5-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261027-052603-3a86d5-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261027-052603-3a86d5/kova-agent-cold-warm-message-2c26dd1d-kova-261027-052603-3a86d5

## Target Cleanup

- Runtime: `kova-local-mvq8ssam-3ed-96caf223`
- Result: removed
- Duration: 515ms

