# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1470 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1568.2 MB, agent-process 1470 MB, status-cli 836.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1470 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1568.2 MB, agent-process 1470 MB, status-cli 836.5 MB |
| Blocking findings | 8 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261009-053021-f1539d` |
| Generated | 2026-10-09T05:33:23.064Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1470 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1568.2 MB, agent-process 1470 MB, status-cli 836.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1568.2 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 16984ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 16744ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 18586ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 16984ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 16744ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1330ms), but OpenClaw spent 16984ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 161.5% | 18673ms | 18586ms | 16984ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1568.2 MB | 18673ms | 18586ms | agent-process peak RSS 1470 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1568.2 MB, agent-process 1470 MB, status-cli 836.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1568.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 214.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1470 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 836.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 214.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 172.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 123.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261009-053021-f1539d/kova-agent-cold-warm-message-2c26dd1d-kova-261009-053021-f1539d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1470 MB; tracked total 1568.2 MB; max CPU 161.5%; samples 49; roles command-tree 1568.2MB/214.5%, agent-process 1470MB/161.5%, status-cli 836.5MB/214.5%, agent-cli 172.3MB/123.2%
- agent: turn 18673ms; cold/warm 18673ms/18586ms; cold-warm delta 87ms; pre-provider 16984ms; provider 1330ms; metadata scans 12 (483.48ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 18668.65ms; max 18673ms; pre-provider p95 16972ms
- agent CLI attribution: cold known 7289ms / unattributed 9695ms; warm known 7819ms / unattributed 8925ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4353.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1470 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1568.2 MB, agent-process 1470 MB, status-cli 836.5 MB
  - command-tree peak RSS 1568.2 MB exceeded threshold 1400 MB
  - cold agent spent 16984ms before provider work, over threshold 10000ms
  - warm agent spent 16744ms before provider work, over threshold 10000ms
  - warm agent turn took 18586ms, over threshold 15000ms
  - cold pre-provider latency was 16984ms, over threshold 10000ms
  - warm pre-provider latency was 16744ms, over threshold 10000ms
  - cold provider was fast (1330ms), but OpenClaw spent 16984ms before provider work.
- Agent turns:
  - cold: total 18673ms; pre-provider 16984ms; provider 1330ms; post-provider 359ms; response true
    - active window: metadata scans 6 (206.55ms total, max 91.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 16984ms; provider 1330ms; post-provider 359ms; unknown 14283.71ms; source agent.prepare 1674.08ms; plugins.metadata.scan 1026.21ms
  - warm: total 18586ms; pre-provider 16744ms; provider 1501ms; post-provider 341ms; response true
    - active window: metadata scans 6 (276.93ms total, max 127.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 16744ms; provider 1501ms; post-provider 341ms; unknown 14043.71ms; source agent.prepare 1674.08ms; plugins.metadata.scan 1026.21ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 16984 ms | 7289 ms | 9695 ms | 1330 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261009-053021-f1539d/kova-agent-cold-warm-message-2c26dd1d-kova-261009-053021-f1539d/openclaw/timeline.jsonl |
  | warm | 16744 ms | 7819 ms | 8925 ms | 1501 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261009-053021-f1539d/kova-agent-cold-warm-message-2c26dd1d-kova-261009-053021-f1539d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 10540 ms | 4353 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1341 ms | 899 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 526 ms | 243 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 205 ms | 91 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 18 ms | 5 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 9137 ms | 3867 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1821 ms | 1387 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1152 ms | 886 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 278 ms | 128 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 21 ms | 6 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261009-053021-f1539d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261009-053021-f1539d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261009-053021-f1539d-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261009-053021-f1539d/kova-agent-cold-warm-message-2c26dd1d-kova-261009-053021-f1539d

## Target Cleanup

- Runtime: `kova-local-mv0j0zwt-3t9-f300af5d`
- Result: removed
- Duration: 582ms

