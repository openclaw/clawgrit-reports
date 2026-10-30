# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1475.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1749.1 MB, agent-process 1475.4 MB, status-cli 968.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1475.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1749.1 MB, agent-process 1475.4 MB, status-cli 968.8 MB |
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
| Run ID | `kova-261030-052102-ed4ba7` |
| Generated | 2026-10-30T05:24:08.182Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1475.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1749.1 MB, agent-process 1475.4 MB, status-cli 968.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1475.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1749.1 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1475.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 190.2% | 10732ms | 10315ms | 9132ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1749.1 MB | 10732ms | 10315ms | agent-process peak RSS 1475.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1749.1 MB, agent-process 1475.4 MB, status-cli 968.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1749.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 208.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1475.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 968.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 278.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 105.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261030-052102-ed4ba7/kova-agent-cold-warm-message-2c26dd1d-kova-261030-052102-ed4ba7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1475.4 MB; tracked total 1749.1 MB; max CPU 190.2%; samples 32; roles command-tree 1749.1MB/208.2%, agent-process 1475.4MB/190.2%, status-cli 968.8MB/173.7%, agent-cli 278.6MB/105.3%
- agent: turn 10732ms; cold/warm 10732ms/10315ms; cold-warm delta 417ms; pre-provider 9132ms; provider 1323ms; metadata scans 12 (386.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10711.15ms; max 10732ms; pre-provider p95 9107.5ms
- agent CLI attribution: cold known 5957ms / unattributed 3175ms; warm known 5440ms / unattributed 3202ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2491.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1475.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1749.1 MB, agent-process 1475.4 MB, status-cli 968.8 MB
  - command-tree peak RSS 1749.1 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 10732ms; pre-provider 9132ms; provider 1323ms; post-provider 277ms; response true
    - active window: metadata scans 6 (195.08ms total, max 88.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9132ms; provider 1323ms; post-provider 277ms; unknown 7021.71ms; source agent.prepare 1256.93ms; plugins.metadata.scan 853.36ms
  - warm: total 10315ms; pre-provider 8642ms; provider 1406ms; post-provider 267ms; response true
    - active window: metadata scans 6 (191.46ms total, max 84.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8642ms; provider 1406ms; post-provider 267ms; unknown 6531.71ms; source agent.prepare 1256.93ms; plugins.metadata.scan 853.36ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9132 ms | 5957 ms | 3175 ms | 1323 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261030-052102-ed4ba7/kova-agent-cold-warm-message-2c26dd1d-kova-261030-052102-ed4ba7/openclaw/timeline.jsonl |
  | warm | 8642 ms | 5440 ms | 3202 ms | 1406 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261030-052102-ed4ba7/kova-agent-cold-warm-message-2c26dd1d-kova-261030-052102-ed4ba7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6046 ms | 2492 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2481 ms | 1596 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 451 ms | 181 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 197 ms | 88 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 107 ms | 107 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 4668 ms | 2040 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2483 ms | 1617 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 806 ms | 362 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 192 ms | 84 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261030-052102-ed4ba7-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261030-052102-ed4ba7-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261030-052102-ed4ba7-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261030-052102-ed4ba7/kova-agent-cold-warm-message-2c26dd1d-kova-261030-052102-ed4ba7

## Target Cleanup

- Runtime: `kova-local-mvuixvz7-3er-8770d8d4`
- Result: removed
- Duration: 512ms

