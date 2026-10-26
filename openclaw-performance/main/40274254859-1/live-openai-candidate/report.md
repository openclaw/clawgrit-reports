# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1487.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1670.7 MB, agent-process 1487.2 MB, status-cli 1022.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1487.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1670.7 MB, agent-process 1487.2 MB, status-cli 1022.5 MB |
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
| Run ID | `kova-261026-052901-836b63` |
| Generated | 2026-10-26T05:32:13.612Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1487.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1670.7 MB, agent-process 1487.2 MB, status-cli 1022.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1487.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1670.7 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1487.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 213.3% | 11544ms | 11136ms | 9928ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1670.7 MB | 11544ms | 11136ms | agent-process peak RSS 1487.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1670.7 MB, agent-process 1487.2 MB, status-cli 1022.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1670.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 227.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1487.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1022.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 182.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 297.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 91.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261026-052901-836b63/kova-agent-cold-warm-message-2c26dd1d-kova-261026-052901-836b63
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1487.2 MB; tracked total 1670.7 MB; max CPU 213.3%; samples 35; roles command-tree 1670.7MB/227.4%, agent-process 1487.2MB/213.3%, status-cli 1022.5MB/182.4%, agent-cli 297.1MB/91.7%
- agent: turn 11544ms; cold/warm 11544ms/11136ms; cold-warm delta 408ms; pre-provider 9928ms; provider 1375ms; metadata scans 12 (396.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 11523.6ms; max 11544ms; pre-provider p95 9909.85ms
- agent CLI attribution: cold known 6428ms / unattributed 3500ms; warm known 5908ms / unattributed 3657ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2474.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1487.2 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1670.7 MB, agent-process 1487.2 MB, status-cli 1022.5 MB
  - command-tree peak RSS 1670.7 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 11544ms; pre-provider 9928ms; provider 1375ms; post-provider 241ms; response true
    - active window: metadata scans 6 (197.04ms total, max 74.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9928ms; provider 1375ms; post-provider 241ms; unknown 7480.64ms; source agent.prepare 1601.93ms; plugins.metadata.scan 845.43ms
  - warm: total 11136ms; pre-provider 9565ms; provider 1314ms; post-provider 257ms; response true
    - active window: metadata scans 6 (199.46ms total, max 83.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9565ms; provider 1314ms; post-provider 257ms; unknown 7117.64ms; source agent.prepare 1601.93ms; plugins.metadata.scan 845.43ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9928 ms | 6428 ms | 3500 ms | 1375 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261026-052901-836b63/kova-agent-cold-warm-message-2c26dd1d-kova-261026-052901-836b63/openclaw/timeline.jsonl |
  | warm | 9565 ms | 5908 ms | 3657 ms | 1314 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261026-052901-836b63/kova-agent-cold-warm-message-2c26dd1d-kova-261026-052901-836b63/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6382 ms | 2474 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2723 ms | 1813 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 682 ms | 298 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 198 ms | 74 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 144 ms | 144 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 5011 ms | 2042 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2748 ms | 1806 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 921 ms | 414 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 199 ms | 83 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 144 ms | 144 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261026-052901-836b63-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261026-052901-836b63-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261026-052901-836b63-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261026-052901-836b63/kova-agent-cold-warm-message-2c26dd1d-kova-261026-052901-836b63

## Target Cleanup

- Runtime: `kova-local-mvotgrh7-3d5-2090f78a`
- Result: removed
- Duration: 512ms

