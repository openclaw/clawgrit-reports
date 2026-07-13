# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 947.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 947.6 MB, agent-process 947.6 MB, command-tree 947.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 947.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 947.6 MB, agent-process 947.6 MB, command-tree 947.6 MB |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 21 total, 0 missing, 0 failed
- Categories: command: 7, invariant: 12, artifact: 1, cleanup: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260713-061855-1c5652` |
| Generated | 2026-07-13T06:19:59.521Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 947.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 947.6 MB, agent-process 947.6 MB, command-tree 947.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 947.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 947.6 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 947.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 947.6 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 947.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 163.5% | 5244ms | 5332ms | 3756ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 947.6 MB | 5244ms | 5332ms | agent-cli peak RSS 947.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 947.6 MB, agent-process 947.6 MB, command-tree 947.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 947.6 MB; CPU 163.5%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 947.6 MB; CPU 163.5%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 947.6 MB; CPU 163.5%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 797.1 MB; CPU 160.5%; scenario agent-cold-warm-message/mock-openai-provider

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260713-061855-1c5652/kova-agent-cold-warm-message-2c26dd1d-kova-260713-061855-1c5652
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 947.6 MB; tracked total 947.6 MB; max CPU 163.5%; samples 18; roles agent-cli 947.6MB/163.5%, agent-process 947.6MB/163.5%, command-tree 947.6MB/163.5%, status-cli 797.1MB/160.5%
- agent: turn 5332ms; cold/warm 5244ms/5332ms; cold-warm delta 0ms; pre-provider 3657ms; provider 1582ms; metadata scans 8 (190.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5327.6ms; max 5332ms; pre-provider p95 3751.05ms
- agent CLI attribution: cold known 99ms / unattributed 3657ms; warm known 91ms / unattributed 3566ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 50.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 947.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 947.6 MB, agent-process 947.6 MB, command-tree 947.6 MB
  - agent-cli peak RSS 947.6 MB exceeded threshold 900 MB
  - agent-process peak RSS 947.6 MB exceeded threshold 900 MB
- Agent turns:
  - cold: total 5244ms; pre-provider 3756ms; provider 1367ms; post-provider 121ms; response true
    - active window: metadata scans 4 (99.02ms total, max 49.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3756ms; provider 1367ms; post-provider 121ms; unknown 3756ms; source none
  - warm: total 5332ms; pre-provider 3657ms; provider 1582ms; post-provider 93ms; response true
    - active window: metadata scans 4 (91.51ms total, max 50.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3657ms; provider 1582ms; post-provider 93ms; unknown 3657ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3756 ms | 99 ms | 3657 ms | 1367 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260713-061855-1c5652/kova-agent-cold-warm-message-2c26dd1d-kova-260713-061855-1c5652/openclaw/timeline.jsonl |
  | warm | 3657 ms | 91 ms | 3566 ms | 1582 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260713-061855-1c5652/kova-agent-cold-warm-message-2c26dd1d-kova-260713-061855-1c5652/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 99 ms | 50 ms |
  | warm | `plugins.metadata.scan` | `startup` x4 | 4 | 0 | 91 ms | 50 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260713-061855-1c5652-diagnostic.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260713-061855-1c5652-diagnostic.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260713-061855-1c5652-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260713-061855-1c5652/kova-agent-cold-warm-message-2c26dd1d-kova-260713-061855-1c5652

## Target Cleanup

- Runtime: `kova-local-1783923535911`
- Result: removed
- Duration: 415ms

