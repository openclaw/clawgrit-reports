# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1507.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1775.1 MB, agent-process 1507.5 MB, status-cli 863.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1507.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1775.1 MB, agent-process 1507.5 MB, status-cli 863.2 MB |
| Blocking findings | 7 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 24 total, 0 missing, 0 failed
- Categories: command: 9, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261112-051827-b76521` |
| Generated | 2026-11-12T05:22:04.183Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1507.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1775.1 MB, agent-process 1507.5 MB, status-cli 863.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1507.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1775.1 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1507.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 11230ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1507.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 10699ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1507.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 11230ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1507.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 10699ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1507.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (2034ms), but OpenClaw spent 10699ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1507.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 190.5% | 12530ms | 13075ms | 11230ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1775.1 MB | 12530ms | 13075ms | agent-process peak RSS 1507.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1775.1 MB, agent-process 1507.5 MB, status-cli 863.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1775.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 208.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1507.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 863.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 191% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 373.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 145.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261112-051827-b76521/kova-agent-cold-warm-message-2c26dd1d-kova-261112-051827-b76521
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1507.5 MB; tracked total 1775.1 MB; max CPU 190.5%; samples 36; roles command-tree 1775.1MB/208.4%, agent-process 1507.5MB/190.5%, status-cli 863.2MB/191%, agent-cli 373.7MB/145.1%
- agent: turn 13075ms; cold/warm 12530ms/13075ms; cold-warm delta 0ms; pre-provider 10699ms; provider 2034ms; metadata scans 12 (508.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 13047.75ms; max 13075ms; pre-provider p95 11203.45ms
- agent CLI attribution: cold known 7070ms / unattributed 4160ms; warm known 6718ms / unattributed 3981ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 3352.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1507.5 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1775.1 MB, agent-process 1507.5 MB, status-cli 863.2 MB
  - command-tree peak RSS 1775.1 MB exceeded threshold 1400 MB
  - cold agent spent 11230ms before provider work, over threshold 10000ms
  - warm agent spent 10699ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 11230ms, over threshold 10000ms
  - warm pre-provider latency was 10699ms, over threshold 10000ms
  - warm provider was fast (2034ms), but OpenClaw spent 10699ms before provider work.
- Agent turns:
  - cold: total 12530ms; pre-provider 11230ms; provider 967ms; post-provider 333ms; response true
    - active window: metadata scans 6 (232.46ms total, max 101.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11230ms; provider 967ms; post-provider 333ms; unknown 8420.84ms; source agent.prepare 1733.89ms; plugins.metadata.scan 1075.27ms
  - warm: total 13075ms; pre-provider 10699ms; provider 2034ms; post-provider 342ms; response true
    - active window: metadata scans 6 (276.06ms total, max 139.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10699ms; provider 2034ms; post-provider 342ms; unknown 7889.84ms; source agent.prepare 1733.89ms; plugins.metadata.scan 1075.27ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11230 ms | 7070 ms | 4160 ms | 967 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261112-051827-b76521/kova-agent-cold-warm-message-2c26dd1d-kova-261112-051827-b76521/openclaw/timeline.jsonl |
  | warm | 10699 ms | 6718 ms | 3981 ms | 2034 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261112-051827-b76521/kova-agent-cold-warm-message-2c26dd1d-kova-261112-051827-b76521/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 8036 ms | 3353 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2406 ms | 1649 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 564 ms | 186 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 232 ms | 102 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 134 ms | 134 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6618 ms | 2924 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2434 ms | 1662 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1175 ms | 497 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 276 ms | 140 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 140 ms | 140 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261112-051827-b76521-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261112-051827-b76521-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261112-051827-b76521-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261112-051827-b76521/kova-agent-cold-warm-message-2c26dd1d-kova-261112-051827-b76521

## Target Cleanup

- Runtime: `kova-local-mwd3knfp-3ip-9cdff191`
- Result: removed
- Duration: 579ms

