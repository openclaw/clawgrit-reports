# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1525 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1708.8 MB, agent-process 1525 MB, status-cli 956.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1525 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1708.8 MB, agent-process 1525 MB, status-cli 956.1 MB |
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
| Run ID | `kova-261103-051853-9cb92d` |
| Generated | 2026-11-03T05:21:51.047Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1525 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1708.8 MB, agent-process 1525 MB, status-cli 956.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1525 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1708.8 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1525 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 190.2% | 11172ms | 10377ms | 9378ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1708.8 MB | 11172ms | 10377ms | agent-process peak RSS 1525 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1708.8 MB, agent-process 1525 MB, status-cli 956.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1708.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 204.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1525 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 956.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 300.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 90.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261103-051853-9cb92d/kova-agent-cold-warm-message-2c26dd1d-kova-261103-051853-9cb92d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1525 MB; tracked total 1708.8 MB; max CPU 190.2%; samples 33; roles command-tree 1708.8MB/204.3%, agent-process 1525MB/190.2%, status-cli 956.1MB/176.9%, agent-cli 300.9MB/90.1%
- agent: turn 11172ms; cold/warm 11172ms/10377ms; cold-warm delta 795ms; pre-provider 9378ms; provider 1516ms; metadata scans 12 (397.79ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 11132.25ms; max 11172ms; pre-provider p95 9359.9ms
- agent CLI attribution: cold known 6157ms / unattributed 3221ms; warm known 5687ms / unattributed 3329ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2694.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1525 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1708.8 MB, agent-process 1525 MB, status-cli 956.1 MB
  - command-tree peak RSS 1708.8 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 11172ms; pre-provider 9378ms; provider 1516ms; post-provider 278ms; response true
    - active window: metadata scans 6 (201.82ms total, max 84.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9378ms; provider 1516ms; post-provider 278ms; unknown 7140.91ms; source agent.prepare 1380.18ms; plugins.metadata.scan 856.91ms
  - warm: total 10377ms; pre-provider 9016ms; provider 1097ms; post-provider 264ms; response true
    - active window: metadata scans 6 (195.97ms total, max 84.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9016ms; provider 1097ms; post-provider 264ms; unknown 6778.91ms; source agent.prepare 1380.18ms; plugins.metadata.scan 856.91ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9378 ms | 6157 ms | 3221 ms | 1516 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261103-051853-9cb92d/kova-agent-cold-warm-message-2c26dd1d-kova-261103-051853-9cb92d/openclaw/timeline.jsonl |
  | warm | 9016 ms | 5687 ms | 3329 ms | 1097 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261103-051853-9cb92d/kova-agent-cold-warm-message-2c26dd1d-kova-261103-051853-9cb92d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6546 ms | 2695 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2379 ms | 1520 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 491 ms | 204 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 203 ms | 85 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 5105 ms | 2226 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2456 ms | 1580 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 889 ms | 400 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 195 ms | 84 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 111 ms | 111 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261103-051853-9cb92d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261103-051853-9cb92d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261103-051853-9cb92d-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261103-051853-9cb92d/kova-agent-cold-warm-message-2c26dd1d-kova-261103-051853-9cb92d

## Target Cleanup

- Runtime: `kova-local-mw08mjsi-3il-f2dc6429`
- Result: removed
- Duration: 474ms

