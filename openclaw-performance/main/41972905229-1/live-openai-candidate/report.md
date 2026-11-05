# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1578.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1761.7 MB, agent-process 1578.3 MB, status-cli 928.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1578.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1761.7 MB, agent-process 1578.3 MB, status-cli 928.1 MB |
| Blocking findings | 7 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261105-051809-10cca1` |
| Generated | 2026-11-05T05:22:15.150Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1578.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1761.7 MB, agent-process 1578.3 MB, status-cli 928.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1578.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1761.7 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1578.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 11004ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1578.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 11073ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1578.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 11004ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1578.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 11073ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1578.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1181ms), but OpenClaw spent 11073ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1578.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 219.1% | 12435ms | 12679ms | 11004ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1761.7 MB | 12435ms | 12679ms | agent-process peak RSS 1578.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1761.7 MB, agent-process 1578.3 MB, status-cli 928.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1761.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 233.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1578.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 219.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 928.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 316 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261105-051809-10cca1/kova-agent-cold-warm-message-2c26dd1d-kova-261105-051809-10cca1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1578.3 MB; tracked total 1761.7 MB; max CPU 219.1%; samples 37; roles command-tree 1761.7MB/233.2%, agent-process 1578.3MB/219.1%, status-cli 928.1MB/196.5%, agent-cli 316MB/158.3%
- agent: turn 12679ms; cold/warm 12435ms/12679ms; cold-warm delta 0ms; pre-provider 11073ms; provider 1181ms; metadata scans 12 (466.79ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12666.8ms; max 12679ms; pre-provider p95 11069.55ms
- agent CLI attribution: cold known 7152ms / unattributed 3852ms; warm known 6998ms / unattributed 4075ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 3299.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1578.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1761.7 MB, agent-process 1578.3 MB, status-cli 928.1 MB
  - command-tree peak RSS 1761.7 MB exceeded threshold 1600 MB
  - cold agent spent 11004ms before provider work, over threshold 10000ms
  - warm agent spent 11073ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 11004ms, over threshold 10000ms
  - warm pre-provider latency was 11073ms, over threshold 10000ms
  - warm provider was fast (1181ms), but OpenClaw spent 11073ms before provider work.
- Agent turns:
  - cold: total 12435ms; pre-provider 11004ms; provider 1055ms; post-provider 376ms; response true
    - active window: metadata scans 6 (218.64ms total, max 93.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11004ms; provider 1055ms; post-provider 376ms; unknown 8455.08ms; source agent.prepare 1537.51ms; plugins.metadata.scan 1011.41ms
  - warm: total 12679ms; pre-provider 11073ms; provider 1181ms; post-provider 425ms; response true
    - active window: metadata scans 6 (248.15ms total, max 108.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11073ms; provider 1181ms; post-provider 425ms; unknown 8524.08ms; source agent.prepare 1537.51ms; plugins.metadata.scan 1011.41ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11004 ms | 7152 ms | 3852 ms | 1055 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261105-051809-10cca1/kova-agent-cold-warm-message-2c26dd1d-kova-261105-051809-10cca1/openclaw/timeline.jsonl |
  | warm | 11073 ms | 6998 ms | 4075 ms | 1181 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261105-051809-10cca1/kova-agent-cold-warm-message-2c26dd1d-kova-261105-051809-10cca1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 7853 ms | 3299 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 2681 ms | 1820 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 515 ms | 211 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 221 ms | 94 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 128 ms | 128 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6571 ms | 2858 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2894 ms | 1944 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1023 ms | 456 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 247 ms | 109 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 130 ms | 130 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261105-051809-10cca1-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261105-051809-10cca1-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261105-051809-10cca1-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261105-051809-10cca1/kova-agent-cold-warm-message-2c26dd1d-kova-261105-051809-10cca1

## Target Cleanup

- Runtime: `kova-local-mw33hb3j-468-dbfb548e`
- Result: removed
- Duration: 567ms

