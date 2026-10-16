# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1523.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1719.5 MB, agent-process 1523.9 MB, status-cli 1015.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1523.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1719.5 MB, agent-process 1523.9 MB, status-cli 1015.2 MB |
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
| Run ID | `kova-261016-052447-9e1af0` |
| Generated | 2026-10-16T05:27:51.308Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1523.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1719.5 MB, agent-process 1523.9 MB, status-cli 1015.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1523.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1719.5 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1523.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 12122ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1523.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 10300ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1523.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 12122ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1523.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 10300ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1523.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1401ms), but OpenClaw spent 12122ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1523.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 213.1% | 13854ms | 12356ms | 12122ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1719.5 MB | 13854ms | 12356ms | agent-process peak RSS 1523.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1719.5 MB, agent-process 1523.9 MB, status-cli 1015.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1719.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 226.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1523.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1015.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 195.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 89.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261016-052447-9e1af0/kova-agent-cold-warm-message-2c26dd1d-kova-261016-052447-9e1af0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1523.9 MB; tracked total 1719.5 MB; max CPU 213.1%; samples 38; roles command-tree 1719.5MB/226.7%, agent-process 1523.9MB/213.1%, status-cli 1015.2MB/171.3%, agent-cli 195.7MB/89.6%
- agent: turn 13854ms; cold/warm 13854ms/12356ms; cold-warm delta 1498ms; pre-provider 12122ms; provider 1401ms; metadata scans 12 (407.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 13779.1ms; max 13854ms; pre-provider p95 12030.9ms
- agent CLI attribution: cold known 7463ms / unattributed 4659ms; warm known 5958ms / unattributed 4342ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2437.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1523.9 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1719.5 MB, agent-process 1523.9 MB, status-cli 1015.2 MB
  - command-tree peak RSS 1719.5 MB exceeded threshold 1400 MB
  - cold agent spent 12122ms before provider work, over threshold 10000ms
  - warm agent spent 10300ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 12122ms, over threshold 10000ms
  - warm pre-provider latency was 10300ms, over threshold 10000ms
  - cold provider was fast (1401ms), but OpenClaw spent 12122ms before provider work.
- Agent turns:
  - cold: total 13854ms; pre-provider 12122ms; provider 1401ms; post-provider 331ms; response true
    - active window: metadata scans 6 (215.03ms total, max 79.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12122ms; provider 1401ms; post-provider 331ms; unknown 8724.33ms; source agent.prepare 2533.87ms; plugins.metadata.scan 863.8ms
  - warm: total 12356ms; pre-provider 10300ms; provider 1738ms; post-provider 318ms; response true
    - active window: metadata scans 6 (192.41ms total, max 81.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10300ms; provider 1738ms; post-provider 318ms; unknown 6902.33ms; source agent.prepare 2533.87ms; plugins.metadata.scan 863.8ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12122 ms | 7463 ms | 4659 ms | 1401 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261016-052447-9e1af0/kova-agent-cold-warm-message-2c26dd1d-kova-261016-052447-9e1af0/openclaw/timeline.jsonl |
  | warm | 10300 ms | 5958 ms | 4342 ms | 1738 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261016-052447-9e1af0/kova-agent-cold-warm-message-2c26dd1d-kova-261016-052447-9e1af0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 7066 ms | 2438 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 3277 ms | 2059 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1079 ms | 469 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 214 ms | 79 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 14 ms | 4 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 4326 ms | 1626 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3019 ms | 1913 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1457 ms | 669 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 191 ms | 81 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 11 ms | 4 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261016-052447-9e1af0-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261016-052447-9e1af0-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261016-052447-9e1af0-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261016-052447-9e1af0/kova-agent-cold-warm-message-2c26dd1d-kova-261016-052447-9e1af0

## Target Cleanup

- Runtime: `kova-local-mvaiwskr-3ct-16134842`
- Result: removed
- Duration: 614ms

