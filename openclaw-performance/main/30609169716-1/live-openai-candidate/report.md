# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 1102.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1102.9 MB, agent-process 1102.9 MB, command-tree 1102.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 1102.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1102.9 MB, agent-process 1102.9 MB, command-tree 1102.9 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

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
| Run ID | `kova-260731-061758-540945` |
| Generated | 2026-07-31T06:19:13.068Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1102.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1102.9 MB, agent-process 1102.9 MB, command-tree 1102.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1102.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1102.9 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1102.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1102.9 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1102.9 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260731-061758-540945/kova-agent-cold-warm-message-2c26dd1d-kova-260731-061758-540945/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 177.4% | 6496ms | 7117ms | 4770ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1102.9 MB | 6496ms | 7117ms | agent-cli peak RSS 1102.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1102.9 MB, agent-process 1102.9 MB, command-tree 1102.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1102.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1102.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1102.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 943.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260731-061758-540945/kova-agent-cold-warm-message-2c26dd1d-kova-260731-061758-540945
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1102.9 MB; tracked total 1102.9 MB; max CPU 177.4%; samples 21; roles agent-cli 1102.9MB/177.4%, command-tree 1102.9MB/180.4%, agent-process 1102.9MB/177.4%, status-cli 943.2MB/180.4%
- agent: turn 7117ms; cold/warm 6496ms/7117ms; cold-warm delta 0ms; pre-provider 5395ms; provider 1083ms; metadata scans 56 (574.94ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7085.95ms; max 7117ms; pre-provider p95 5363.75ms
- agent CLI attribution: cold known 247ms / unattributed 4523ms; warm known 267ms / unattributed 5128ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 54.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1102.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1102.9 MB, agent-process 1102.9 MB, command-tree 1102.9 MB
  - agent-cli peak RSS 1102.9 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1102.9 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 6496ms; pre-provider 4770ms; provider 1069ms; post-provider 657ms; response true
    - active window: metadata scans 28 (275.11ms total, max 44.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4770ms; provider 1069ms; post-provider 657ms; unknown 3707.9ms; source plugins.metadata.scan 1062.1ms
  - warm: total 7117ms; pre-provider 5395ms; provider 1083ms; post-provider 639ms; response true
    - active window: metadata scans 28 (299.83ms total, max 54.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5395ms; provider 1083ms; post-provider 639ms; unknown 4332.9ms; source plugins.metadata.scan 1062.1ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4770 ms | 247 ms | 4523 ms | 1069 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260731-061758-540945/kova-agent-cold-warm-message-2c26dd1d-kova-260731-061758-540945/openclaw/timeline.jsonl |
  | warm | 5395 ms | 267 ms | 5128 ms | 1083 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260731-061758-540945/kova-agent-cold-warm-message-2c26dd1d-kova-260731-061758-540945/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x25 | 25 | 0 | 247 ms | 44 ms |
  | warm | `plugins.metadata.scan` | `startup` x25 | 25 | 0 | 267 ms | 55 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260731-061758-540945-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260731-061758-540945-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260731-061758-540945-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260731-061758-540945/kova-agent-cold-warm-message-2c26dd1d-kova-260731-061758-540945

## Target Cleanup

- Runtime: `kova-local-ms8jwli9-3z0-8f281e51`
- Result: removed
- Duration: 437ms

