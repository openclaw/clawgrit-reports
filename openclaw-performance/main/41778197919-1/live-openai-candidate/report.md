# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1637.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1820.8 MB, agent-process 1637.4 MB, status-cli 777.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1637.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1820.8 MB, agent-process 1637.4 MB, status-cli 777.1 MB |
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
| Run ID | `kova-261104-051807-f79e4f` |
| Generated | 2026-11-04T05:21:29.369Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1637.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1820.8 MB, agent-process 1637.4 MB, status-cli 777.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1637.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1820.8 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1637.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10978ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1637.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 10410ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1637.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 10978ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1637.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 10410ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1637.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1130ms), but OpenClaw spent 10978ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1637.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 218.7% | 12470ms | 11766ms | 10978ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1820.8 MB | 12470ms | 11766ms | agent-process peak RSS 1637.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1820.8 MB, agent-process 1637.4 MB, status-cli 777.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1820.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 232.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1637.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 218.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 777.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 188.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 293.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261104-051807-f79e4f/kova-agent-cold-warm-message-2c26dd1d-kova-261104-051807-f79e4f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1637.4 MB; tracked total 1820.8 MB; max CPU 218.7%; samples 35; roles command-tree 1820.8MB/232.6%, agent-process 1637.4MB/218.7%, status-cli 777.1MB/188.1%, agent-cli 293.3MB/172.5%
- agent: turn 12470ms; cold/warm 12470ms/11766ms; cold-warm delta 704ms; pre-provider 10978ms; provider 1130ms; metadata scans 12 (455.92ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12434.8ms; max 12470ms; pre-provider p95 10949.6ms
- agent CLI attribution: cold known 7214ms / unattributed 3764ms; warm known 6523ms / unattributed 3887ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 3261.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1637.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1820.8 MB, agent-process 1637.4 MB, status-cli 777.1 MB
  - command-tree peak RSS 1820.8 MB exceeded threshold 1600 MB
  - cold agent spent 10978ms before provider work, over threshold 10000ms
  - warm agent spent 10410ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10978ms, over threshold 10000ms
  - warm pre-provider latency was 10410ms, over threshold 10000ms
  - cold provider was fast (1130ms), but OpenClaw spent 10978ms before provider work.
- Agent turns:
  - cold: total 12470ms; pre-provider 10978ms; provider 1130ms; post-provider 362ms; response true
    - active window: metadata scans 6 (215.05ms total, max 92.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10978ms; provider 1130ms; post-provider 362ms; unknown 8527.9ms; source agent.prepare 1458.35ms; plugins.metadata.scan 991.75ms
  - warm: total 11766ms; pre-provider 10410ms; provider 1051ms; post-provider 305ms; response true
    - active window: metadata scans 6 (240.87ms total, max 105.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10410ms; provider 1051ms; post-provider 305ms; unknown 7959.9ms; source agent.prepare 1458.35ms; plugins.metadata.scan 991.75ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10978 ms | 7214 ms | 3764 ms | 1130 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261104-051807-f79e4f/kova-agent-cold-warm-message-2c26dd1d-kova-261104-051807-f79e4f/openclaw/timeline.jsonl |
  | warm | 10410 ms | 6523 ms | 3887 ms | 1051 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261104-051807-f79e4f/kova-agent-cold-warm-message-2c26dd1d-kova-261104-051807-f79e4f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 7801 ms | 3262 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2794 ms | 1825 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 518 ms | 212 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 215 ms | 93 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 124 ms | 124 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 6080 ms | 2642 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2707 ms | 1788 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 941 ms | 422 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 240 ms | 105 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 141 ms | 141 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261104-051807-f79e4f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261104-051807-f79e4f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261104-051807-f79e4f-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261104-051807-f79e4f/kova-agent-cold-warm-message-2c26dd1d-kova-261104-051807-f79e4f

## Target Cleanup

- Runtime: `kova-local-mw1o1euu-47l-c4c85d5a`
- Result: removed
- Duration: 557ms

