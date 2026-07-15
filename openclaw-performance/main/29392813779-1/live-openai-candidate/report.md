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
| Run ID | `kova-260715-055811-ae380f` |
| Generated | 2026-07-15T05:59:24.518Z |
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
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260715-055811-ae380f/kova-agent-cold-warm-message-2c26dd1d-kova-260715-055811-ae380f/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | INCOMPLETE:1 | n/a | 0MB | n/a | 164.7% | 7722ms | 5485ms | 5130ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | INCOMPLETE | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 949.1 MB | 7722ms | 5485ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 949.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 949.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 949.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 776.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: INCOMPLETE
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260715-055811-ae380f/kova-agent-cold-warm-message-2c26dd1d-kova-260715-055811-ae380f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 949.1 MB; tracked total 949.1 MB; max CPU 164.7%; samples 20; roles agent-cli 949.1MB/164.7%, agent-process 949.1MB/164.7%, command-tree 949.1MB/164.7%, status-cli 776.6MB/161.8%
- agent: turn 7722ms; cold/warm 7722ms/5485ms; cold-warm delta 2237ms; pre-provider 5130ms; provider 2452ms; metadata scans 8 (262.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7610.15ms; max 7722ms; pre-provider p95 5073.3ms
- agent CLI attribution: cold known 150ms / unattributed 4980ms; warm known 111ms / unattributed 3885ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7722ms; pre-provider 5130ms; provider 2452ms; post-provider 140ms; response true
    - active window: metadata scans 4 (151.52ms total, max 59.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5130ms; provider 2452ms; post-provider 140ms; unknown 4462.81ms; source plugins.metadata.scan 667.19ms
  - warm: total 5485ms; pre-provider 3996ms; provider 1359ms; post-provider 130ms; response true
    - active window: metadata scans 4 (111.47ms total, max 60.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3996ms; provider 1359ms; post-provider 130ms; unknown 3328.81ms; source plugins.metadata.scan 667.19ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5130 ms | 150 ms | 4980 ms | 2452 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260715-055811-ae380f/kova-agent-cold-warm-message-2c26dd1d-kova-260715-055811-ae380f/openclaw/timeline.jsonl |
  | warm | 3996 ms | 111 ms | 3885 ms | 1359 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260715-055811-ae380f/kova-agent-cold-warm-message-2c26dd1d-kova-260715-055811-ae380f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 150 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 111 ms | 59 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260715-055811-ae380f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260715-055811-ae380f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260715-055811-ae380f-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260715-055811-ae380f/kova-agent-cold-warm-message-2c26dd1d-kova-260715-055811-ae380f

## Target Cleanup

- Runtime: `kova-local-mrlo5iqt-3yi-643654dd`
- Result: removed
- Duration: 456ms

