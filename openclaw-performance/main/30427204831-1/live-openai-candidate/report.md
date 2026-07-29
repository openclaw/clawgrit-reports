# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 1105.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1105.9 MB, agent-process 1105.9 MB, command-tree 1105.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 1105.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1105.9 MB, agent-process 1105.9 MB, command-tree 1105.9 MB |
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
| Run ID | `kova-260729-060911-331475` |
| Generated | 2026-07-29T06:10:18.500Z |
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
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1105.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1105.9 MB, agent-process 1105.9 MB, command-tree 1105.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1105.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1105.9 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1105.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1105.9 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1105.9 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260729-060911-331475/kova-agent-cold-warm-message-2c26dd1d-kova-260729-060911-331475/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 173.4% | 6518ms | 6236ms | 4800ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1105.9 MB | 6518ms | 6236ms | agent-cli peak RSS 1105.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1105.9 MB, agent-process 1105.9 MB, command-tree 1105.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1105.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1105.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1105.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 887.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260729-060911-331475/kova-agent-cold-warm-message-2c26dd1d-kova-260729-060911-331475
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1105.9 MB; tracked total 1105.9 MB; max CPU 173.4%; samples 20; roles agent-cli 1105.9MB/173.4%, command-tree 1105.9MB/174.8%, agent-process 1105.9MB/173.4%, status-cli 887.6MB/174.8%
- agent: turn 6518ms; cold/warm 6518ms/6236ms; cold-warm delta 282ms; pre-provider 4800ms; provider 857ms; metadata scans 112 (1023.6ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6503.9ms; max 6518ms; pre-provider p95 4793.55ms
- agent CLI attribution: cold known 391ms / unattributed 4409ms; warm known 381ms / unattributed 4290ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 48.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1105.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1105.9 MB, agent-process 1105.9 MB, command-tree 1105.9 MB
  - agent-cli peak RSS 1105.9 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1105.9 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 6518ms; pre-provider 4800ms; provider 857ms; post-provider 861ms; response true
    - active window: metadata scans 56 (513.73ms total, max 48.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4800ms; provider 857ms; post-provider 861ms; unknown 3348.96ms; source plugins.metadata.scan 1451.04ms
  - warm: total 6236ms; pre-provider 4671ms; provider 730ms; post-provider 835ms; response true
    - active window: metadata scans 56 (509.87ms total, max 38.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4671ms; provider 730ms; post-provider 835ms; unknown 3219.96ms; source plugins.metadata.scan 1451.04ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4800 ms | 391 ms | 4409 ms | 857 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260729-060911-331475/kova-agent-cold-warm-message-2c26dd1d-kova-260729-060911-331475/openclaw/timeline.jsonl |
  | warm | 4671 ms | 381 ms | 4290 ms | 730 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260729-060911-331475/kova-agent-cold-warm-message-2c26dd1d-kova-260729-060911-331475/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x39 | 39 | 0 | 391 ms | 49 ms |
  | warm | `plugins.metadata.scan` | `startup` x39 | 39 | 0 | 381 ms | 38 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260729-060911-331475-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260729-060911-331475-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260729-060911-331475-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260729-060911-331475/kova-agent-cold-warm-message-2c26dd1d-kova-260729-060911-331475

## Target Cleanup

- Runtime: `kova-local-ms5oplem-404-f7fa69e1`
- Result: removed
- Duration: 384ms

