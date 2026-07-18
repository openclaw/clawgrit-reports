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
| Run ID | `kova-260718-055410-b796af` |
| Generated | 2026-07-18T05:55:09.071Z |
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
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260718-055410-b796af/kova-agent-cold-warm-message-2c26dd1d-kova-260718-055410-b796af/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | INCOMPLETE:1 | n/a | 0MB | n/a | 162.9% | 4973ms | 4913ms | 3458ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | INCOMPLETE | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 982.7 MB | 4973ms | 4913ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 982.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 982.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 982.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 858.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: INCOMPLETE
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260718-055410-b796af/kova-agent-cold-warm-message-2c26dd1d-kova-260718-055410-b796af
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 982.7 MB; tracked total 982.7 MB; max CPU 162.9%; samples 16; roles agent-cli 982.7MB/162.9%, agent-process 982.7MB/162.9%, command-tree 982.7MB/162.9%, status-cli 858.6MB/154.9%
- agent: turn 4973ms; cold/warm 4973ms/4913ms; cold-warm delta 60ms; pre-provider 3458ms; provider 1355ms; metadata scans 8 (209.77ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4970ms; max 4973ms; pre-provider p95 3455.25ms
- agent CLI attribution: cold known 104ms / unattributed 3354ms; warm known 107ms / unattributed 3296ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.01ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4973ms; pre-provider 3458ms; provider 1355ms; post-provider 160ms; response true
    - active window: metadata scans 4 (103.87ms total, max 51.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3458ms; provider 1355ms; post-provider 160ms; unknown 2909.51ms; source plugins.metadata.scan 548.49ms
  - warm: total 4913ms; pre-provider 3403ms; provider 1359ms; post-provider 151ms; response true
    - active window: metadata scans 4 (105.9ms total, max 51.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3403ms; provider 1359ms; post-provider 151ms; unknown 2854.51ms; source plugins.metadata.scan 548.49ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3458 ms | 104 ms | 3354 ms | 1355 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260718-055410-b796af/kova-agent-cold-warm-message-2c26dd1d-kova-260718-055410-b796af/openclaw/timeline.jsonl |
  | warm | 3403 ms | 107 ms | 3296 ms | 1359 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260718-055410-b796af/kova-agent-cold-warm-message-2c26dd1d-kova-260718-055410-b796af/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 104 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 107 ms | 51 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260718-055410-b796af-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260718-055410-b796af-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260718-055410-b796af-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260718-055410-b796af/kova-agent-cold-warm-message-2c26dd1d-kova-260718-055410-b796af

## Target Cleanup

- Runtime: `kova-local-mrpybwlx-3zx-e76d1ba1`
- Result: removed
- Duration: 362ms

