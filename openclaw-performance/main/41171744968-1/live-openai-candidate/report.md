# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1443.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1717.6 MB, agent-process 1443.3 MB, status-cli 1132.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1443.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1717.6 MB, agent-process 1443.3 MB, status-cli 1132.5 MB |
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
| Run ID | `kova-261031-051636-a09904` |
| Generated | 2026-10-31T05:20:16.121Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1443.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1717.6 MB, agent-process 1443.3 MB, status-cli 1132.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1717.6 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10843ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 11201ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 10843ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 11201ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1391ms), but OpenClaw spent 11201ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1443.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 204.2% | 12362ms | 12927ms | 10843ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1717.6 MB | 12362ms | 12927ms | agent-process peak RSS 1443.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1717.6 MB, agent-process 1443.3 MB, status-cli 1132.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1717.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 222.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1443.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 204.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1132.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 185.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 404.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 97.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261031-051636-a09904/kova-agent-cold-warm-message-2c26dd1d-kova-261031-051636-a09904
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1443.3 MB; tracked total 1717.6 MB; max CPU 204.2%; samples 37; roles command-tree 1717.6MB/222.2%, agent-process 1443.3MB/204.2%, status-cli 1132.5MB/185.4%, agent-cli 404.6MB/97.3%
- agent: turn 12927ms; cold/warm 12362ms/12927ms; cold-warm delta 0ms; pre-provider 11201ms; provider 1391ms; metadata scans 12 (462.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12898.75ms; max 12927ms; pre-provider p95 11183.1ms
- agent CLI attribution: cold known 7112ms / unattributed 3731ms; warm known 7172ms / unattributed 4029ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 3000.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1443.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1717.6 MB, agent-process 1443.3 MB, status-cli 1132.5 MB
  - command-tree peak RSS 1717.6 MB exceeded threshold 1600 MB
  - cold agent spent 10843ms before provider work, over threshold 10000ms
  - warm agent spent 11201ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10843ms, over threshold 10000ms
  - warm pre-provider latency was 11201ms, over threshold 10000ms
  - warm provider was fast (1391ms), but OpenClaw spent 11201ms before provider work.
- Agent turns:
  - cold: total 12362ms; pre-provider 10843ms; provider 1191ms; post-provider 328ms; response true
    - active window: metadata scans 6 (223.85ms total, max 101.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10843ms; provider 1191ms; post-provider 328ms; unknown 8262.75ms; source agent.prepare 1570.27ms; plugins.metadata.scan 1009.98ms
  - warm: total 12927ms; pre-provider 11201ms; provider 1391ms; post-provider 335ms; response true
    - active window: metadata scans 6 (238.88ms total, max 105.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11201ms; provider 1391ms; post-provider 335ms; unknown 8620.75ms; source agent.prepare 1570.27ms; plugins.metadata.scan 1009.98ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10843 ms | 7112 ms | 3731 ms | 1191 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261031-051636-a09904/kova-agent-cold-warm-message-2c26dd1d-kova-261031-051636-a09904/openclaw/timeline.jsonl |
  | warm | 11201 ms | 7172 ms | 4029 ms | 1391 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261031-051636-a09904/kova-agent-cold-warm-message-2c26dd1d-kova-261031-051636-a09904/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 7300 ms | 3000 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2892 ms | 1907 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 575 ms | 239 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 224 ms | 102 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 136 ms | 136 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 6406 ms | 2846 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3221 ms | 2101 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 995 ms | 448 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 240 ms | 106 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 137 ms | 137 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261031-051636-a09904-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261031-051636-a09904-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261031-051636-a09904-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261031-051636-a09904/kova-agent-cold-warm-message-2c26dd1d-kova-261031-051636-a09904

## Target Cleanup

- Runtime: `kova-local-mvvy8221-3f0-e6cf2dba`
- Result: removed
- Duration: 556ms

