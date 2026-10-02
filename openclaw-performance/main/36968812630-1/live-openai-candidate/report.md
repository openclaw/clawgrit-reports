# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 1 (PASS:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261002-052638-e0c1ea` |
| Generated | 2026-10-02T05:28:47.069Z |
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
| PASS | 1 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 204.8% | 9923ms | 9274ms | 8128ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1211.2 MB | 9923ms | 9274ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1211.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 214.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1114.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 204.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 650.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 187.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 139.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 68.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261002-052638-e0c1ea/kova-agent-cold-warm-message-2c26dd1d-kova-261002-052638-e0c1ea
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1114.2 MB; tracked total 1211.2 MB; max CPU 204.8%; samples 29; roles command-tree 1211.2MB/214.6%, agent-process 1114.2MB/204.8%, status-cli 650.3MB/187.8%, agent-cli 139.5MB/68.6%
- agent: turn 9923ms; cold/warm 9923ms/9274ms; cold-warm delta 649ms; pre-provider 8128ms; provider 1504ms; metadata scans 12 (363.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9890.55ms; max 9923ms; pre-provider p95 8107.2ms
- agent CLI attribution: cold known 4163ms / unattributed 3965ms; warm known 3928ms / unattributed 3784ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2196.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 9923ms; pre-provider 8128ms; provider 1504ms; post-provider 291ms; response true
    - active window: metadata scans 6 (172.53ms total, max 72.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8128ms; provider 1504ms; post-provider 291ms; unknown 6477.94ms; source agent.prepare 871.55ms; plugins.metadata.scan 778.51ms
  - warm: total 9274ms; pre-provider 7712ms; provider 1274ms; post-provider 288ms; response true
    - active window: metadata scans 6 (191.03ms total, max 91.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7712ms; provider 1274ms; post-provider 288ms; unknown 6061.94ms; source agent.prepare 871.55ms; plugins.metadata.scan 778.51ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8128 ms | 4163 ms | 3965 ms | 1504 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261002-052638-e0c1ea/kova-agent-cold-warm-message-2c26dd1d-kova-261002-052638-e0c1ea/openclaw/timeline.jsonl |
  | warm | 7712 ms | 3928 ms | 3784 ms | 1274 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261002-052638-e0c1ea/kova-agent-cold-warm-message-2c26dd1d-kova-261002-052638-e0c1ea/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 5145 ms | 2196 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1128 ms | 758 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 362 ms | 134 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 172 ms | 73 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 3833 ms | 1601 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1374 ms | 964 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 509 ms | 273 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 191 ms | 92 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261002-052638-e0c1ea-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261002-052638-e0c1ea-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261002-052638-e0c1ea-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261002-052638-e0c1ea/kova-agent-cold-warm-message-2c26dd1d-kova-261002-052638-e0c1ea

## Target Cleanup

- Runtime: `kova-local-muqit8zy-3tf-d397d0bd`
- Result: removed
- Duration: 506ms

