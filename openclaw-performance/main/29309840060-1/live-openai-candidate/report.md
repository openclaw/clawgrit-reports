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
| Run ID | `kova-260714-055643-6ab04b` |
| Generated | 2026-07-14T05:57:54.950Z |
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
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260714-055643-6ab04b/kova-agent-cold-warm-message-2c26dd1d-kova-260714-055643-6ab04b/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | INCOMPLETE:1 | n/a | 0MB | n/a | 163.9% | 5276ms | 5237ms | 3683ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | INCOMPLETE | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 945 MB | 5276ms | 5237ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 945 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 945 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 945 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 828.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: INCOMPLETE
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260714-055643-6ab04b/kova-agent-cold-warm-message-2c26dd1d-kova-260714-055643-6ab04b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 945 MB; tracked total 945 MB; max CPU 163.9%; samples 18; roles agent-cli 945MB/163.9%, agent-process 945MB/163.9%, command-tree 945MB/163.9%, status-cli 828.8MB/161.4%
- agent: turn 5276ms; cold/warm 5276ms/5237ms; cold-warm delta 39ms; pre-provider 3683ms; provider 1484ms; metadata scans 8 (209.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5274.05ms; max 5276ms; pre-provider p95 3673.15ms
- agent CLI attribution: cold known 114ms / unattributed 3569ms; warm known 98ms / unattributed 3388ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 54.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5276ms; pre-provider 3683ms; provider 1484ms; post-provider 109ms; response true
    - active window: metadata scans 4 (112.96ms total, max 54.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3683ms; provider 1484ms; post-provider 109ms; unknown 3099.2ms; source plugins.metadata.scan 583.8ms
  - warm: total 5237ms; pre-provider 3486ms; provider 1647ms; post-provider 104ms; response true
    - active window: metadata scans 4 (96.82ms total, max 52.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3486ms; provider 1647ms; post-provider 104ms; unknown 2902.2ms; source plugins.metadata.scan 583.8ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3683 ms | 114 ms | 3569 ms | 1484 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260714-055643-6ab04b/kova-agent-cold-warm-message-2c26dd1d-kova-260714-055643-6ab04b/openclaw/timeline.jsonl |
  | warm | 3486 ms | 98 ms | 3388 ms | 1647 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260714-055643-6ab04b/kova-agent-cold-warm-message-2c26dd1d-kova-260714-055643-6ab04b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 114 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 98 ms | 52 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260714-055643-6ab04b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260714-055643-6ab04b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260714-055643-6ab04b-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260714-055643-6ab04b/kova-agent-cold-warm-message-2c26dd1d-kova-260714-055643-6ab04b

## Target Cleanup

- Runtime: `kova-local-mrk8ns0a-3xi-0e74a49a`
- Result: removed
- Duration: 396ms

