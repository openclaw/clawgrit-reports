# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1133.7 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1227.7 MB, agent-process 1133.7 MB, status-cli 650.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1133.7 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1227.7 MB, agent-process 1133.7 MB, status-cli 650.6 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260920-052235-cfb785` |
| Generated | 2026-09-20T05:24:34.784Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1133.7 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1227.7 MB, agent-process 1133.7 MB, status-cli 650.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1133.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 12133ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1133.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 12133ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1133.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (2081ms), but OpenClaw spent 12133ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1133.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 203.1% | 14401ms | 11029ms | 12133ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1227.7 MB | 14401ms | 11029ms | agent-process peak RSS 1133.7 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1227.7 MB, agent-process 1133.7 MB, status-cli 650.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1227.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1133.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 203.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 650.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 233 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 148.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 148.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 92.7% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260920-052235-cfb785/kova-agent-cold-warm-message-2c26dd1d-kova-260920-052235-cfb785
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1133.7 MB; tracked total 1227.7 MB; max CPU 203.1%; samples 32; roles command-tree 1227.7MB/213.2%, agent-process 1133.7MB/203.1%, status-cli 650.6MB/152.9%, package-manager 233MB/148.4%
- agent: turn 14401ms; cold/warm 14401ms/11029ms; cold-warm delta 3372ms; pre-provider 12133ms; provider 2081ms; metadata scans 19 (608.07ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14232.4ms; max 14401ms; pre-provider p95 11971.25ms
- agent CLI attribution: cold known 8336ms / unattributed 3797ms; warm known 5121ms / unattributed 3777ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4630.09ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1133.7 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1227.7 MB, agent-process 1133.7 MB, status-cli 650.6 MB
  - cold agent spent 12133ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 12133ms, over threshold 10000ms
  - cold provider was fast (2081ms), but OpenClaw spent 12133ms before provider work.
- Agent turns:
  - cold: total 14401ms; pre-provider 12133ms; provider 2081ms; post-provider 187ms; response true
    - active window: metadata scans 14 (440.9ms total, max 81.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12133ms; provider 2081ms; post-provider 187ms; unknown 10405.66ms; source plugins.metadata.scan 1161.34ms; agent.prepare 566ms
  - warm: total 11029ms; pre-provider 8898ms; provider 1976ms; post-provider 155ms; response true
    - active window: metadata scans 5 (167.17ms total, max 67.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8898ms; provider 1976ms; post-provider 155ms; unknown 7170.66ms; source plugins.metadata.scan 1161.34ms; agent.prepare 566ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12133 ms | 8336 ms | 3797 ms | 2081 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260920-052235-cfb785/kova-agent-cold-warm-message-2c26dd1d-kova-260920-052235-cfb785/openclaw/timeline.jsonl |
  | warm | 8898 ms | 5121 ms | 3777 ms | 1976 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260920-052235-cfb785/kova-agent-cold-warm-message-2c26dd1d-kova-260920-052235-cfb785/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x42 | 42 | 0 | 14901 ms | 4630 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 543 ms | 235 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x11, `startup`, `agent.startup` x2 | 14 | 0 | 440 ms | 82 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 279 ms | 143 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x11, `agent.startup` x2 | 13 | 0 | 28 ms | 6 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x13 | 13 | 0 | 8048 ms | 2939 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 720 ms | 423 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 287 ms | 144 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x2, `startup`, `agent.startup` x2 | 5 | 0 | 168 ms | 68 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260920-052235-cfb785-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260920-052235-cfb785-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260920-052235-cfb785-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260920-052235-cfb785/kova-agent-cold-warm-message-2c26dd1d-kova-260920-052235-cfb785

## Target Cleanup

- Runtime: `kova-local-mu9ddtjb-3pd-05133232`
- Result: removed
- Duration: 501ms

