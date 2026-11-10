# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1420.9 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1602.1 MB, agent-process 1420.9 MB, status-cli 851 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1420.9 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1602.1 MB, agent-process 1420.9 MB, status-cli 851 MB |
| Blocking findings | 7 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261110-051851-a64117` |
| Generated | 2026-11-10T05:23:22.330Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1420.9 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1602.1 MB, agent-process 1420.9 MB, status-cli 851 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1420.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1602.1 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1420.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 15153ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1420.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 13442ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1420.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 15153ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1420.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 13442ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1420.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (991ms), but OpenClaw spent 15153ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1420.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 203.3% | 16546ms | 14858ms | 15153ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1602.1 MB | 16546ms | 14858ms | agent-process peak RSS 1420.9 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1602.1 MB, agent-process 1420.9 MB, status-cli 851 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1602.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 217.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1420.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 203.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 851 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 185.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 269.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 101.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261110-051851-a64117/kova-agent-cold-warm-message-2c26dd1d-kova-261110-051851-a64117
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1420.9 MB; tracked total 1602.1 MB; max CPU 203.3%; samples 43; roles command-tree 1602.1MB/217.4%, agent-process 1420.9MB/203.3%, status-cli 851MB/185.2%, agent-cli 269.1MB/101.7%
- agent: turn 16546ms; cold/warm 16546ms/14858ms; cold-warm delta 1688ms; pre-provider 15153ms; provider 991ms; metadata scans 12 (581.37ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 16461.6ms; max 16546ms; pre-provider p95 15067.45ms
- agent CLI attribution: cold known 9767ms / unattributed 5386ms; warm known 8278ms / unattributed 5164ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4567.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1420.9 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1602.1 MB, agent-process 1420.9 MB, status-cli 851 MB
  - command-tree peak RSS 1602.1 MB exceeded threshold 1600 MB
  - cold agent spent 15153ms before provider work, over threshold 10000ms
  - warm agent spent 13442ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 15153ms, over threshold 10000ms
  - warm pre-provider latency was 13442ms, over threshold 10000ms
  - cold provider was fast (991ms), but OpenClaw spent 15153ms before provider work.
- Agent turns:
  - cold: total 16546ms; pre-provider 15153ms; provider 991ms; post-provider 402ms; response true
    - active window: metadata scans 6 (297.66ms total, max 118.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 15153ms; provider 991ms; post-provider 402ms; unknown 11348.48ms; source agent.prepare 2480.61ms; plugins.metadata.scan 1323.91ms
  - warm: total 14858ms; pre-provider 13442ms; provider 1069ms; post-provider 347ms; response true
    - active window: metadata scans 6 (283.71ms total, max 122.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13442ms; provider 1069ms; post-provider 347ms; unknown 9637.48ms; source agent.prepare 2480.61ms; plugins.metadata.scan 1323.91ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 15153 ms | 9767 ms | 5386 ms | 991 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261110-051851-a64117/kova-agent-cold-warm-message-2c26dd1d-kova-261110-051851-a64117/openclaw/timeline.jsonl |
  | warm | 13442 ms | 8278 ms | 5164 ms | 1069 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261110-051851-a64117/kova-agent-cold-warm-message-2c26dd1d-kova-261110-051851-a64117/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 11114 ms | 4567 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3275 ms | 2201 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 911 ms | 338 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 296 ms | 118 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 175 ms | 175 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 7884 ms | 3454 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3128 ms | 2168 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1571 ms | 652 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 283 ms | 123 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 150 ms | 150 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261110-051851-a64117-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261110-051851-a64117-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261110-051851-a64117-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261110-051851-a64117/kova-agent-cold-warm-message-2c26dd1d-kova-261110-051851-a64117

## Target Cleanup

- Runtime: `kova-local-mwa8pgcu-3mq-56420ec3`
- Result: removed
- Duration: 633ms

