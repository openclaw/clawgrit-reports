# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1100.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1186.2 MB, agent-process 1100.2 MB, status-cli 427.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1100.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1186.2 MB, agent-process 1100.2 MB, status-cli 427.6 MB |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260915-052542-2a854e` |
| Generated | 2026-09-15T05:27:31.138Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1100.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1186.2 MB, agent-process 1100.2 MB, status-cli 427.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1100.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 153.1% | 9147ms | 9239ms | 7322ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1186.2 MB | 9147ms | 9239ms | agent-process peak RSS 1100.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1186.2 MB, agent-process 1100.2 MB, status-cli 427.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1186.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1100.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 427.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 149.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 86 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 107.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260915-052542-2a854e/kova-agent-cold-warm-message-2c26dd1d-kova-260915-052542-2a854e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1100.2 MB; tracked total 1186.2 MB; max CPU 153.1%; samples 25; roles command-tree 1186.2MB/162.9%, agent-process 1100.2MB/153.1%, status-cli 427.6MB/149.9%, agent-cli 86MB/107.2%
- agent: turn 9239ms; cold/warm 9147ms/9239ms; cold-warm delta 0ms; pre-provider 7108ms; provider 1973ms; metadata scans 12 (369.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9234.4ms; max 9239ms; pre-provider p95 7311.3ms
- agent CLI attribution: cold known 3895ms / unattributed 3427ms; warm known 3596ms / unattributed 3512ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2180.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1100.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1186.2 MB, agent-process 1100.2 MB, status-cli 427.6 MB
- Agent turns:
  - cold: total 9147ms; pre-provider 7322ms; provider 1604ms; post-provider 221ms; response true
    - active window: metadata scans 8 (264.27ms total, max 72.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7322ms; provider 1604ms; post-provider 221ms; unknown 6122.28ms; source plugins.metadata.scan 852.51ms; agent.prepare 347.21ms
  - warm: total 9239ms; pre-provider 7108ms; provider 1973ms; post-provider 158ms; response true
    - active window: metadata scans 4 (104.99ms total, max 61.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7108ms; provider 1973ms; post-provider 158ms; unknown 5908.28ms; source plugins.metadata.scan 852.51ms; agent.prepare 347.21ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7322 ms | 3895 ms | 3427 ms | 1604 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260915-052542-2a854e/kova-agent-cold-warm-message-2c26dd1d-kova-260915-052542-2a854e/openclaw/timeline.jsonl |
  | warm | 7108 ms | 3596 ms | 3512 ms | 1973 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260915-052542-2a854e/kova-agent-cold-warm-message-2c26dd1d-kova-260915-052542-2a854e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 6035 ms | 1878 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 636 ms | 251 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 266 ms | 72 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 171 ms | 64 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 5256 ms | 2180 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 692 ms | 291 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 179 ms | 74 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 104 ms | 61 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260915-052542-2a854e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260915-052542-2a854e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260915-052542-2a854e-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260915-052542-2a854e/kova-agent-cold-warm-message-2c26dd1d-kova-260915-052542-2a854e

## Target Cleanup

- Runtime: `kova-local-mu28akgi-42b-7db2d4f6`
- Result: removed
- Duration: 513ms

