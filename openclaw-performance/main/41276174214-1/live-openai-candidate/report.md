# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1460.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1644.8 MB, agent-process 1460.4 MB, status-cli 876.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1460.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1644.8 MB, agent-process 1460.4 MB, status-cli 876.5 MB |
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
| Run ID | `kova-261101-051715-df9bd1` |
| Generated | 2026-11-01T05:20:11.038Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1460.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1644.8 MB, agent-process 1460.4 MB, status-cli 876.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1644.8 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1460.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 194.8% | 10663ms | 10221ms | 9253ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1644.8 MB | 10663ms | 10221ms | agent-process peak RSS 1460.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1644.8 MB, agent-process 1460.4 MB, status-cli 876.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1644.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 208.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1460.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 194.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 876.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 316.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 116% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261101-051715-df9bd1/kova-agent-cold-warm-message-2c26dd1d-kova-261101-051715-df9bd1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1460.4 MB; tracked total 1644.8 MB; max CPU 194.8%; samples 32; roles command-tree 1644.8MB/208.6%, agent-process 1460.4MB/194.8%, status-cli 876.5MB/168.8%, agent-cli 316.6MB/116%
- agent: turn 10663ms; cold/warm 10663ms/10221ms; cold-warm delta 442ms; pre-provider 9253ms; provider 1141ms; metadata scans 12 (387.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10640.9ms; max 10663ms; pre-provider p95 9230.8ms
- agent CLI attribution: cold known 5978ms / unattributed 3275ms; warm known 5531ms / unattributed 3278ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2515.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1460.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1644.8 MB, agent-process 1460.4 MB, status-cli 876.5 MB
  - command-tree peak RSS 1644.8 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 10663ms; pre-provider 9253ms; provider 1141ms; post-provider 269ms; response true
    - active window: metadata scans 6 (191.64ms total, max 82.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9253ms; provider 1141ms; post-provider 269ms; unknown 7037.16ms; source agent.prepare 1369.96ms; plugins.metadata.scan 845.88ms
  - warm: total 10221ms; pre-provider 8809ms; provider 1148ms; post-provider 264ms; response true
    - active window: metadata scans 6 (195.47ms total, max 84.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8809ms; provider 1148ms; post-provider 264ms; unknown 6593.16ms; source agent.prepare 1369.96ms; plugins.metadata.scan 845.88ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9253 ms | 5978 ms | 3275 ms | 1141 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261101-051715-df9bd1/kova-agent-cold-warm-message-2c26dd1d-kova-261101-051715-df9bd1/openclaw/timeline.jsonl |
  | warm | 8809 ms | 5531 ms | 3278 ms | 1148 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261101-051715-df9bd1/kova-agent-cold-warm-message-2c26dd1d-kova-261101-051715-df9bd1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6104 ms | 2516 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2443 ms | 1588 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 501 ms | 208 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 190 ms | 82 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 109 ms | 109 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 4770 ms | 2084 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2494 ms | 1645 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 869 ms | 393 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 196 ms | 84 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 111 ms | 111 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261101-051715-df9bd1-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261101-051715-df9bd1-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261101-051715-df9bd1-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261101-051715-df9bd1/kova-agent-cold-warm-message-2c26dd1d-kova-261101-051715-df9bd1

## Target Cleanup

- Runtime: `kova-local-mvxdoqof-3ev-d05baf82`
- Result: removed
- Duration: 501ms

