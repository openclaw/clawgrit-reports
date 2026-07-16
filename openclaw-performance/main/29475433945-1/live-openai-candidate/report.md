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
| Run ID | `kova-260716-060117-48a413` |
| Generated | 2026-07-16T06:02:51.927Z |
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
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260716-060117-48a413/kova-agent-cold-warm-message-2c26dd1d-kova-260716-060117-48a413/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | INCOMPLETE:1 | n/a | 0MB | n/a | 171.8% | 7061ms | 6868ms | 5160ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | INCOMPLETE | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 957.9 MB | 7061ms | 6868ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 957.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 957.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 957.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 853.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: INCOMPLETE
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260716-060117-48a413/kova-agent-cold-warm-message-2c26dd1d-kova-260716-060117-48a413
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 957.9 MB; tracked total 957.9 MB; max CPU 171.8%; samples 21; roles agent-cli 957.9MB/171.8%, agent-process 957.9MB/171.8%, command-tree 957.9MB/171.8%, status-cli 853.6MB/171.3%
- agent: turn 7061ms; cold/warm 7061ms/6868ms; cold-warm delta 193ms; pre-provider 5160ms; provider 1725ms; metadata scans 8 (320.65ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7051.35ms; max 7061ms; pre-provider p95 5157.45ms
- agent CLI attribution: cold known 148ms / unattributed 5012ms; warm known 171ms / unattributed 4938ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 88.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7061ms; pre-provider 5160ms; provider 1725ms; post-provider 176ms; response true
    - active window: metadata scans 4 (149.17ms total, max 74.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5160ms; provider 1725ms; post-provider 176ms; unknown 4313.11ms; source plugins.metadata.scan 846.89ms
  - warm: total 6868ms; pre-provider 5109ms; provider 1518ms; post-provider 241ms; response true
    - active window: metadata scans 4 (171.48ms total, max 88.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5109ms; provider 1518ms; post-provider 241ms; unknown 4262.11ms; source plugins.metadata.scan 846.89ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5160 ms | 148 ms | 5012 ms | 1725 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260716-060117-48a413/kova-agent-cold-warm-message-2c26dd1d-kova-260716-060117-48a413/openclaw/timeline.jsonl |
  | warm | 5109 ms | 171 ms | 4938 ms | 1518 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260716-060117-48a413/kova-agent-cold-warm-message-2c26dd1d-kova-260716-060117-48a413/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 148 ms | 74 ms |
  | warm | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 171 ms | 88 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260716-060117-48a413-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260716-060117-48a413-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260716-060117-48a413-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260716-060117-48a413/kova-agent-cold-warm-message-2c26dd1d-kova-260716-060117-48a413

## Target Cleanup

- Runtime: `kova-local-mrn3pd8r-3ya-67d19ee4`
- Result: removed
- Duration: 543ms

