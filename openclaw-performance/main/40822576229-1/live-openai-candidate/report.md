# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1449.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1724 MB, agent-process 1449.2 MB, status-cli 1136.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1449.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1724 MB, agent-process 1449.2 MB, status-cli 1136.8 MB |
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
| Run ID | `kova-261029-052019-334bf9` |
| Generated | 2026-10-29T05:23:49.472Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1449.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1724 MB, agent-process 1449.2 MB, status-cli 1136.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1449.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1724 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1449.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10805ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1449.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 10465ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1449.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 10805ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1449.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 10465ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1449.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1476ms), but OpenClaw spent 10805ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1449.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 208% | 12629ms | 12459ms | 10805ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1724 MB | 12629ms | 12459ms | agent-process peak RSS 1449.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1724 MB, agent-process 1449.2 MB, status-cli 1136.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1724 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 226% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1449.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 208% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1136.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 366.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 121.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261029-052019-334bf9/kova-agent-cold-warm-message-2c26dd1d-kova-261029-052019-334bf9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1449.2 MB; tracked total 1724 MB; max CPU 208%; samples 37; roles command-tree 1724MB/226%, agent-process 1449.2MB/208%, status-cli 1136.8MB/183.9%, agent-cli 366.3MB/121.7%
- agent: turn 12629ms; cold/warm 12629ms/12459ms; cold-warm delta 170ms; pre-provider 10805ms; provider 1476ms; metadata scans 12 (469.67ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12620.5ms; max 12629ms; pre-provider p95 10788ms
- agent CLI attribution: cold known 7005ms / unattributed 3800ms; warm known 6486ms / unattributed 3979ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2927.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1449.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1724 MB, agent-process 1449.2 MB, status-cli 1136.8 MB
  - command-tree peak RSS 1724 MB exceeded threshold 1400 MB
  - cold agent spent 10805ms before provider work, over threshold 10000ms
  - warm agent spent 10465ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10805ms, over threshold 10000ms
  - warm pre-provider latency was 10465ms, over threshold 10000ms
  - cold provider was fast (1476ms), but OpenClaw spent 10805ms before provider work.
- Agent turns:
  - cold: total 12629ms; pre-provider 10805ms; provider 1476ms; post-provider 348ms; response true
    - active window: metadata scans 6 (244.75ms total, max 110.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10805ms; provider 1476ms; post-provider 348ms; unknown 8204.56ms; source agent.prepare 1554.27ms; plugins.metadata.scan 1046.17ms
  - warm: total 12459ms; pre-provider 10465ms; provider 1625ms; post-provider 369ms; response true
    - active window: metadata scans 6 (224.92ms total, max 103.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10465ms; provider 1625ms; post-provider 369ms; unknown 7864.56ms; source agent.prepare 1554.27ms; plugins.metadata.scan 1046.17ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10805 ms | 7005 ms | 3800 ms | 1476 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261029-052019-334bf9/kova-agent-cold-warm-message-2c26dd1d-kova-261029-052019-334bf9/openclaw/timeline.jsonl |
  | warm | 10465 ms | 6486 ms | 3979 ms | 1625 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261029-052019-334bf9/kova-agent-cold-warm-message-2c26dd1d-kova-261029-052019-334bf9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 7110 ms | 2927 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2906 ms | 1880 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 532 ms | 217 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 244 ms | 110 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 127 ms | 127 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 5353 ms | 2366 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3048 ms | 1962 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1021 ms | 455 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 226 ms | 104 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 129 ms | 129 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261029-052019-334bf9-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261029-052019-334bf9-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261029-052019-334bf9-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261029-052019-334bf9/kova-agent-cold-warm-message-2c26dd1d-kova-261029-052019-334bf9

## Target Cleanup

- Runtime: `kova-local-mvt3h4i8-3ed-fe99c18a`
- Result: removed
- Duration: 581ms

