# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1514.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1701.1 MB, agent-process 1514.8 MB, status-cli 1129.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1514.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1701.1 MB, agent-process 1514.8 MB, status-cli 1129.8 MB |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261020-052435-27fc7d` |
| Generated | 2026-10-20T05:29:15.080Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1514.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1701.1 MB, agent-process 1514.8 MB, status-cli 1129.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1701.1 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 42823ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 45033ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 42873ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 45033ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 42823ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 42873ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1868ms), but OpenClaw spent 42873ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1514.8 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 217.8% | 44351ms | 45033ms | 42823ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1701.1 MB | 44351ms | 45033ms | agent-process peak RSS 1514.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1701.1 MB, agent-process 1514.8 MB, status-cli 1129.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1701.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 231% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1514.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 217.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1129.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 285 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 66.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261020-052435-27fc7d/kova-agent-cold-warm-message-2c26dd1d-kova-261020-052435-27fc7d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1514.8 MB; tracked total 1701.1 MB; max CPU 217.8%; samples 101; roles command-tree 1701.1MB/231%, agent-process 1514.8MB/217.8%, status-cli 1129.8MB/176.8%, agent-cli 285MB/66.6%
- agent: turn 45033ms; cold/warm 44351ms/45033ms; cold-warm delta 0ms; pre-provider 42873ms; provider 1868ms; metadata scans 12 (364.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 44998.9ms; max 45033ms; pre-provider p95 42870.5ms
- agent CLI attribution: cold known 22808ms / unattributed 20015ms; warm known 22751ms / unattributed 20122ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 18574.43ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1514.8 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1701.1 MB, agent-process 1514.8 MB, status-cli 1129.8 MB
  - command-tree peak RSS 1701.1 MB exceeded threshold 1400 MB
  - cold agent spent 42823ms before provider work, over threshold 10000ms
  - warm agent turn took 45033ms, over threshold 45000ms
  - warm agent spent 42873ms before provider work, over threshold 10000ms
  - warm agent turn took 45033ms, over threshold 15000ms
  - cold pre-provider latency was 42823ms, over threshold 10000ms
  - warm pre-provider latency was 42873ms, over threshold 10000ms
  - warm provider was fast (1868ms), but OpenClaw spent 42873ms before provider work.
- Agent turns:
  - cold: total 44351ms; pre-provider 42823ms; provider 1251ms; post-provider 277ms; response true
    - active window: metadata scans 6 (179.44ms total, max 84.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 42823ms; provider 1251ms; post-provider 277ms; unknown 39689.52ms; source agent.prepare 2308.62ms; plugins.metadata.scan 824.86ms
  - warm: total 45033ms; pre-provider 42873ms; provider 1868ms; post-provider 292ms; response true
    - active window: metadata scans 6 (184.83ms total, max 84.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 42873ms; provider 1868ms; post-provider 292ms; unknown 39739.52ms; source agent.prepare 2308.62ms; plugins.metadata.scan 824.86ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 42823 ms | 22808 ms | 20015 ms | 1251 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261020-052435-27fc7d/kova-agent-cold-warm-message-2c26dd1d-kova-261020-052435-27fc7d/openclaw/timeline.jsonl |
  | warm | 42873 ms | 22751 ms | 20122 ms | 1868 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261020-052435-27fc7d/kova-agent-cold-warm-message-2c26dd1d-kova-261020-052435-27fc7d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 38275 ms | 18574 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2946 ms | 1829 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 980 ms | 436 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 179 ms | 85 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 149 ms | 149 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 37468 ms | 18367 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3121 ms | 1987 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1329 ms | 616 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 186 ms | 85 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 169 ms | 169 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261020-052435-27fc7d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261020-052435-27fc7d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261020-052435-27fc7d-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261020-052435-27fc7d/kova-agent-cold-warm-message-2c26dd1d-kova-261020-052435-27fc7d

## Target Cleanup

- Runtime: `kova-local-mvg8ny6m-3cc-b08d0bb4`
- Result: removed
- Duration: 518ms

