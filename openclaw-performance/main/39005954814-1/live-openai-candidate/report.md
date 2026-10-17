# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1555.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1752.2 MB, agent-process 1555.3 MB, status-cli 1003.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1555.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1752.2 MB, agent-process 1555.3 MB, status-cli 1003.1 MB |
| Blocking findings | 11 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261017-052252-cba596` |
| Generated | 2026-10-17T05:27:38.410Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1555.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1752.2 MB, agent-process 1555.3 MB, status-cli 1003.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1752.2 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn took 46574ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 44730ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 46821ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 45206ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn took 46574ms, over threshold 45000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 46821ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 44730ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 45206ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1190ms), but OpenClaw spent 45206ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1555.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 213.4% | 46574ms | 46821ms | 44730ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1752.2 MB | 46574ms | 46821ms | agent-process peak RSS 1555.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1752.2 MB, agent-process 1555.3 MB, status-cli 1003.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1752.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 228.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1555.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1003.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 178.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 197 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261017-052252-cba596/kova-agent-cold-warm-message-2c26dd1d-kova-261017-052252-cba596
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1555.3 MB; tracked total 1752.2 MB; max CPU 213.4%; samples 105; roles command-tree 1752.2MB/228.2%, agent-process 1555.3MB/213.4%, status-cli 1003.1MB/178.6%, agent-cli 197MB/160.4%
- agent: turn 46821ms; cold/warm 46574ms/46821ms; cold-warm delta 0ms; pre-provider 45206ms; provider 1190ms; metadata scans 12 (387.22ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 46808.65ms; max 46821ms; pre-provider p95 45182.2ms
- agent CLI attribution: cold known 23269ms / unattributed 21461ms; warm known 23325ms / unattributed 21881ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 19121.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1555.3 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1752.2 MB, agent-process 1555.3 MB, status-cli 1003.1 MB
  - command-tree peak RSS 1752.2 MB exceeded threshold 1400 MB
  - cold agent turn took 46574ms, over threshold 45000ms
  - cold agent spent 44730ms before provider work, over threshold 10000ms
  - warm agent turn took 46821ms, over threshold 45000ms
  - warm agent spent 45206ms before provider work, over threshold 10000ms
  - cold agent turn took 46574ms, over threshold 45000ms
  - warm agent turn took 46821ms, over threshold 15000ms
  - cold pre-provider latency was 44730ms, over threshold 10000ms
  - warm pre-provider latency was 45206ms, over threshold 10000ms
  - warm provider was fast (1190ms), but OpenClaw spent 45206ms before provider work.
- Agent turns:
  - cold: total 46574ms; pre-provider 44730ms; provider 1519ms; post-provider 325ms; response true
    - active window: metadata scans 6 (191.21ms total, max 84.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 44730ms; provider 1519ms; post-provider 325ms; unknown 41408.14ms; source agent.prepare 2478.95ms; plugins.metadata.scan 842.91ms
  - warm: total 46821ms; pre-provider 45206ms; provider 1190ms; post-provider 425ms; response true
    - active window: metadata scans 6 (196.01ms total, max 80.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 45206ms; provider 1190ms; post-provider 425ms; unknown 41884.14ms; source agent.prepare 2478.95ms; plugins.metadata.scan 842.91ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 44730 ms | 23269 ms | 21461 ms | 1519 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261017-052252-cba596/kova-agent-cold-warm-message-2c26dd1d-kova-261017-052252-cba596/openclaw/timeline.jsonl |
  | warm | 45206 ms | 23325 ms | 21881 ms | 1190 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261017-052252-cba596/kova-agent-cold-warm-message-2c26dd1d-kova-261017-052252-cba596/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 39689 ms | 19121 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2850 ms | 1702 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 988 ms | 431 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 190 ms | 85 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 16 ms | 6 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 38855 ms | 18881 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3085 ms | 1794 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1492 ms | 676 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 196 ms | 80 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 10 ms | 3 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261017-052252-cba596-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261017-052252-cba596-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261017-052252-cba596-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261017-052252-cba596/kova-agent-cold-warm-message-2c26dd1d-kova-261017-052252-cba596

## Target Cleanup

- Runtime: `kova-local-mvbya6xd-3dc-a16e66cb`
- Result: removed
- Duration: 619ms

