# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1505.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1691.8 MB, agent-process 1505.6 MB, status-cli 848.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1505.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1691.8 MB, agent-process 1505.6 MB, status-cli 848.4 MB |
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
| Run ID | `kova-261024-052331-99a319` |
| Generated | 2026-10-24T05:26:32.030Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1505.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1691.8 MB, agent-process 1505.6 MB, status-cli 848.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1505.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1691.8 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1505.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 213.4% | 11610ms | 11537ms | 9826ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1691.8 MB | 11610ms | 11537ms | agent-process peak RSS 1505.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1691.8 MB, agent-process 1505.6 MB, status-cli 848.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1691.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 227.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1505.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 848.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 236.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 135.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261024-052331-99a319/kova-agent-cold-warm-message-2c26dd1d-kova-261024-052331-99a319
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1505.6 MB; tracked total 1691.8 MB; max CPU 213.4%; samples 34; roles command-tree 1691.8MB/227.3%, agent-process 1505.6MB/213.4%, status-cli 848.4MB/175.2%, agent-cli 236.3MB/135.4%
- agent: turn 11610ms; cold/warm 11610ms/11537ms; cold-warm delta 73ms; pre-provider 9826ms; provider 1547ms; metadata scans 12 (384.01ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 11606.35ms; max 11610ms; pre-provider p95 9803.15ms
- agent CLI attribution: cold known 6290ms / unattributed 3536ms; warm known 5797ms / unattributed 3572ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2544.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1505.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1691.8 MB, agent-process 1505.6 MB, status-cli 848.4 MB
  - command-tree peak RSS 1691.8 MB exceeded threshold 1400 MB
- Agent turns:
  - cold: total 11610ms; pre-provider 9826ms; provider 1547ms; post-provider 237ms; response true
    - active window: metadata scans 6 (191.77ms total, max 76.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9826ms; provider 1547ms; post-provider 237ms; unknown 7425.64ms; source agent.prepare 1555.49ms; plugins.metadata.scan 844.87ms
  - warm: total 11537ms; pre-provider 9369ms; provider 1869ms; post-provider 299ms; response true
    - active window: metadata scans 6 (192.24ms total, max 73.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9369ms; provider 1869ms; post-provider 299ms; unknown 6968.64ms; source agent.prepare 1555.49ms; plugins.metadata.scan 844.87ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9826 ms | 6290 ms | 3536 ms | 1547 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261024-052331-99a319/kova-agent-cold-warm-message-2c26dd1d-kova-261024-052331-99a319/openclaw/timeline.jsonl |
  | warm | 9369 ms | 5797 ms | 3572 ms | 1869 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261024-052331-99a319/kova-agent-cold-warm-message-2c26dd1d-kova-261024-052331-99a319/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 6182 ms | 2545 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2662 ms | 1635 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 639 ms | 276 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 192 ms | 76 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 173 ms | 173 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 4969 ms | 2130 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2637 ms | 1594 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 918 ms | 414 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 192 ms | 74 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 168 ms | 168 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261024-052331-99a319-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261024-052331-99a319-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261024-052331-99a319-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261024-052331-99a319/kova-agent-cold-warm-message-2c26dd1d-kova-261024-052331-99a319

## Target Cleanup

- Runtime: `kova-local-mvlydznr-3ee-1e75f317`
- Result: removed
- Duration: 532ms

