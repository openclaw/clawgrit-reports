# Kova OpenClaw Runtime Report

> **◐ [INCOMPLETE]** — invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn

## Verdict

| Field | Value |
|---|---|
| Verdict | INCOMPLETE |
| Reason | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 1 (INCOMPLETE:1) |

## Proof Completeness

- Completeness: incomplete: 1
- Required obligations: 22 total, 1 missing, 0 failed
- Categories: command: 7, invariant: 12, artifact: 1, cleanup: 1, collector: 1

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | cold-agent-turn had no valid provider HTTP response status evidence |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260717-060119-fde0c3` |
| Generated | 2026-07-17T06:02:35.673Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
| Repeat / parallel | 1 / 1 |
| Auth | live (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 1 |
| Scenarios | 1 |
| States | 1 |
| INCOMPLETE | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260717-060119-fde0c3/kova-agent-cold-warm-message-2c26dd1d-kova-260717-060119-fde0c3/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | INCOMPLETE:1 | n/a | 0MB | n/a | 180.3% | 6918ms | 6913ms | 5199ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | INCOMPLETE | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 964.3 MB | 6918ms | 6913ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 964.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 964.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 964.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 778.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: INCOMPLETE
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260717-060119-fde0c3/kova-agent-cold-warm-message-2c26dd1d-kova-260717-060119-fde0c3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 964.3 MB; tracked total 964.3 MB; max CPU 180.3%; samples 20; roles agent-cli 964.3MB/180.3%, agent-process 964.3MB/180.3%, command-tree 964.3MB/180.3%, status-cli 778.3MB/165.6%
- agent: turn 6918ms; cold/warm 6918ms/6913ms; cold-warm delta 5ms; pre-provider 5199ms; provider 1452ms; metadata scans 8 (298.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6917.75ms; max 6918ms; pre-provider p95 5209.45ms
- agent CLI attribution: cold known 156ms / unattributed 5043ms; warm known 143ms / unattributed 5067ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6918ms; pre-provider 5199ms; provider 1452ms; post-provider 267ms; response true
    - active window: metadata scans 4 (155.97ms total, max 67.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5199ms; provider 1452ms; post-provider 267ms; unknown 4390.5ms; source plugins.metadata.scan 808.5ms
  - warm: total 6913ms; pre-provider 5210ms; provider 1405ms; post-provider 298ms; response true
    - active window: metadata scans 4 (142.23ms total, max 75.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5210ms; provider 1405ms; post-provider 298ms; unknown 4401.5ms; source plugins.metadata.scan 808.5ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5199 ms | 156 ms | 5043 ms | 1452 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260717-060119-fde0c3/kova-agent-cold-warm-message-2c26dd1d-kova-260717-060119-fde0c3/openclaw/timeline.jsonl |
  | warm | 5210 ms | 143 ms | 5067 ms | 1405 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260717-060119-fde0c3/kova-agent-cold-warm-message-2c26dd1d-kova-260717-060119-fde0c3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 156 ms | 68 ms |
  | warm | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 143 ms | 75 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260717-060119-fde0c3-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260717-060119-fde0c3-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260717-060119-fde0c3-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260717-060119-fde0c3/kova-agent-cold-warm-message-2c26dd1d-kova-260717-060119-fde0c3

## Target Cleanup

- Runtime: `kova-local-mroj59bz-404-de21ce60`
- Result: removed
- Duration: 432ms

