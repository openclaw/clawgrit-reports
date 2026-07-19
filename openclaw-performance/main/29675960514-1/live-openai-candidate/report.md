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
| Run ID | `kova-260719-060927-ccf9ea` |
| Generated | 2026-07-19T06:10:27.793Z |
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
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260719-060927-ccf9ea/kova-agent-cold-warm-message-2c26dd1d-kova-260719-060927-ccf9ea/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | INCOMPLETE:1 | n/a | 0MB | n/a | 158.9% | 5172ms | 5337ms | 3466ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | INCOMPLETE | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1000 MB | 5172ms | 5337ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1000 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1000 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1000 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 851.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: INCOMPLETE
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260719-060927-ccf9ea/kova-agent-cold-warm-message-2c26dd1d-kova-260719-060927-ccf9ea
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1000 MB; tracked total 1000 MB; max CPU 158.9%; samples 18; roles agent-cli 1000MB/158.9%, agent-process 1000MB/158.9%, command-tree 1000MB/158.9%, status-cli 851.1MB/156.8%
- agent: turn 5337ms; cold/warm 5172ms/5337ms; cold-warm delta 0ms; pre-provider 3465ms; provider 1695ms; metadata scans 8 (203.77ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5328.75ms; max 5337ms; pre-provider p95 3465.95ms
- agent CLI attribution: cold known 98ms / unattributed 3368ms; warm known 104ms / unattributed 3361ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5172ms; pre-provider 3466ms; provider 1533ms; post-provider 173ms; response true
    - active window: metadata scans 4 (99.29ms total, max 53.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3466ms; provider 1533ms; post-provider 173ms; unknown 2950.39ms; source plugins.metadata.scan 515.61ms
  - warm: total 5337ms; pre-provider 3465ms; provider 1695ms; post-provider 177ms; response true
    - active window: metadata scans 4 (104.48ms total, max 52.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3465ms; provider 1695ms; post-provider 177ms; unknown 2949.39ms; source plugins.metadata.scan 515.61ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3466 ms | 98 ms | 3368 ms | 1533 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260719-060927-ccf9ea/kova-agent-cold-warm-message-2c26dd1d-kova-260719-060927-ccf9ea/openclaw/timeline.jsonl |
  | warm | 3465 ms | 104 ms | 3361 ms | 1695 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260719-060927-ccf9ea/kova-agent-cold-warm-message-2c26dd1d-kova-260719-060927-ccf9ea/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 98 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 104 ms | 53 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260719-060927-ccf9ea-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260719-060927-ccf9ea-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260719-060927-ccf9ea-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260719-060927-ccf9ea/kova-agent-cold-warm-message-2c26dd1d-kova-260719-060927-ccf9ea

## Target Cleanup

- Runtime: `kova-local-mrrebfbz-420-3d840e09`
- Result: removed
- Duration: 359ms

