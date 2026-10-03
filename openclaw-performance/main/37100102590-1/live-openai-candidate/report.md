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
| Run ID | `kova-261003-053345-f775d4` |
| Generated | 2026-10-03T05:35:58.353Z |
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
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 201.9% | 10296ms | 9672ms | 8779ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1165.2 MB | 10296ms | 9672ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1165.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 211.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1065.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 201.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 585.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 99.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 88.9% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261003-053345-f775d4/kova-agent-cold-warm-message-2c26dd1d-kova-261003-053345-f775d4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1065.4 MB; tracked total 1165.2 MB; max CPU 201.9%; samples 30; roles command-tree 1165.2MB/211.6%, agent-process 1065.4MB/201.9%, status-cli 585.7MB/171.4%, agent-cli 99.8MB/88.9%
- agent: turn 10296ms; cold/warm 10296ms/9672ms; cold-warm delta 624ms; pre-provider 8779ms; provider 1222ms; metadata scans 12 (374.75ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10264.8ms; max 10296ms; pre-provider p95 8749.2ms
- agent CLI attribution: cold known 4427ms / unattributed 4352ms; warm known 4393ms / unattributed 3790ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2270.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 10296ms; pre-provider 8779ms; provider 1222ms; post-provider 295ms; response true
    - active window: metadata scans 6 (187.87ms total, max 79.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8779ms; provider 1222ms; post-provider 295ms; unknown 7179.2ms; source agent.prepare 804.75ms; plugins.metadata.scan 795.05ms
  - warm: total 9672ms; pre-provider 8183ms; provider 1200ms; post-provider 289ms; response true
    - active window: metadata scans 6 (186.88ms total, max 81.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8183ms; provider 1200ms; post-provider 289ms; unknown 6583.2ms; source agent.prepare 804.75ms; plugins.metadata.scan 795.05ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8779 ms | 4427 ms | 4352 ms | 1222 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261003-053345-f775d4/kova-agent-cold-warm-message-2c26dd1d-kova-261003-053345-f775d4/openclaw/timeline.jsonl |
  | warm | 8183 ms | 4393 ms | 3790 ms | 1200 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261003-053345-f775d4/kova-agent-cold-warm-message-2c26dd1d-kova-261003-053345-f775d4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 5426 ms | 2271 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1329 ms | 926 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 293 ms | 120 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 187 ms | 79 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 4097 ms | 1689 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1716 ms | 1133 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 513 ms | 293 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 185 ms | 81 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261003-053345-f775d4-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261003-053345-f775d4-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261003-053345-f775d4-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261003-053345-f775d4/kova-agent-cold-warm-message-2c26dd1d-kova-261003-053345-f775d4

## Target Cleanup

- Runtime: `kova-local-muryi9gw-3tk-8a335f94`
- Result: removed
- Duration: 495ms

