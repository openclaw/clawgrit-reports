# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — cold agent spent 12412ms before provider work, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | cold agent spent 12412ms before provider work, over threshold 10000ms |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260916-052510-d547ed` |
| Generated | 2026-09-16T05:27:27.445Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 12412ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 955.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 12412ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 955.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (2369ms), but OpenClaw spent 12412ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 955.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 186.5% | 14977ms | 11801ms | 12412ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1041.2 MB | 14977ms | 11801ms | cold agent spent 12412ms before provider work, over threshold 10000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1041.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 195.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 955.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 186.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 578.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.4% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 265.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 86.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 51.9% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260916-052510-d547ed/kova-agent-cold-warm-message-2c26dd1d-kova-260916-052510-d547ed
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 955.4 MB; tracked total 1041.2 MB; max CPU 186.5%; samples 33; roles command-tree 1041.2MB/195.7%, agent-process 955.4MB/186.5%, status-cli 578.8MB/160.4%, package-manager 265.9MB/151.7%
- agent: turn 14977ms; cold/warm 14977ms/11801ms; cold-warm delta 3176ms; pre-provider 12412ms; provider 2369ms; metadata scans 19 (652.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14818.2ms; max 14977ms; pre-provider p95 12274.05ms
- agent CLI attribution: cold known 8520ms / unattributed 3892ms; warm known 5189ms / unattributed 4464ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4470.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - cold agent spent 12412ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 12412ms, over threshold 10000ms
  - cold provider was fast (2369ms), but OpenClaw spent 12412ms before provider work.
- Agent turns:
  - cold: total 14977ms; pre-provider 12412ms; provider 2369ms; post-provider 196ms; response true
    - active window: metadata scans 14 (466.46ms total, max 90.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12412ms; provider 2369ms; post-provider 196ms; unknown 10598.2ms; source plugins.metadata.scan 1373.92ms; agent.prepare 439.88ms
  - warm: total 11801ms; pre-provider 9653ms; provider 1944ms; post-provider 204ms; response true
    - active window: metadata scans 5 (186.1ms total, max 77.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9653ms; provider 1944ms; post-provider 204ms; unknown 7839.2ms; source plugins.metadata.scan 1373.92ms; agent.prepare 439.88ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12412 ms | 8520 ms | 3892 ms | 2369 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260916-052510-d547ed/kova-agent-cold-warm-message-2c26dd1d-kova-260916-052510-d547ed/openclaw/timeline.jsonl |
  | warm | 9653 ms | 5189 ms | 4464 ms | 1944 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260916-052510-d547ed/kova-agent-cold-warm-message-2c26dd1d-kova-260916-052510-d547ed/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x40 | 40 | 0 | 14992 ms | 4470 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 723 ms | 294 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x11, `startup`, `agent.startup` x2 | 14 | 0 | 467 ms | 91 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 187 ms | 69 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x11, `agent.startup` x2 | 13 | 0 | 28 ms | 4 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x14 | 14 | 0 | 7788 ms | 3021 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 971 ms | 419 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 252 ms | 109 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x2, `agent.startup` x2 | 5 | 0 | 186 ms | 78 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260916-052510-d547ed-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260916-052510-d547ed-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260916-052510-d547ed-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260916-052510-d547ed/kova-agent-cold-warm-message-2c26dd1d-kova-260916-052510-d547ed

## Target Cleanup

- Runtime: `kova-local-mu3npq4r-41t-1aa0060c`
- Result: removed
- Duration: 664ms

