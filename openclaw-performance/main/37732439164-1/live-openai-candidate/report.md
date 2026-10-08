# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1178.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1279.1 MB, agent-process 1178.7 MB, status-cli 610.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1178.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1279.1 MB, agent-process 1178.7 MB, status-cli 610.3 MB |
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
| Run ID | `kova-261008-052837-5b15b5` |
| Generated | 2026-10-08T05:31:25.676Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1178.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1279.1 MB, agent-process 1178.7 MB, status-cli 610.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1178.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 19197ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1178.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 18506ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1178.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 20380ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1178.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 19197ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1178.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 18506ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1178.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1450ms), but OpenClaw spent 19197ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1178.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 184.2% | 21038ms | 20380ms | 19197ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1279.1 MB | 21038ms | 20380ms | agent-process peak RSS 1178.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1279.1 MB, agent-process 1178.7 MB, status-cli 610.3 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1279.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 195.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1178.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 184.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 610.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 195.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 188.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 82.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261008-052837-5b15b5/kova-agent-cold-warm-message-2c26dd1d-kova-261008-052837-5b15b5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1178.7 MB; tracked total 1279.1 MB; max CPU 184.2%; samples 52; roles command-tree 1279.1MB/195.3%, agent-process 1178.7MB/184.2%, status-cli 610.3MB/195.3%, agent-cli 188.2MB/82.1%
- agent: turn 21038ms; cold/warm 21038ms/20380ms; cold-warm delta 658ms; pre-provider 19197ms; provider 1450ms; metadata scans 12 (382.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 21005.1ms; max 21038ms; pre-provider p95 19162.45ms
- agent CLI attribution: cold known 7456ms / unattributed 11741ms; warm known 7925ms / unattributed 10581ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 5129.43ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1178.7 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1279.1 MB, agent-process 1178.7 MB, status-cli 610.3 MB
  - cold agent spent 19197ms before provider work, over threshold 10000ms
  - warm agent spent 18506ms before provider work, over threshold 10000ms
  - warm agent turn took 20380ms, over threshold 15000ms
  - cold pre-provider latency was 19197ms, over threshold 10000ms
  - warm pre-provider latency was 18506ms, over threshold 10000ms
  - cold provider was fast (1450ms), but OpenClaw spent 19197ms before provider work.
- Agent turns:
  - cold: total 21038ms; pre-provider 19197ms; provider 1450ms; post-provider 391ms; response true
    - active window: metadata scans 6 (174.82ms total, max 77.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 19197ms; provider 1450ms; post-provider 391ms; unknown 17067.76ms; source agent.prepare 1289.11ms; plugins.metadata.scan 840.13ms
  - warm: total 20380ms; pre-provider 18506ms; provider 1521ms; post-provider 353ms; response true
    - active window: metadata scans 6 (208.17ms total, max 96.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 18506ms; provider 1521ms; post-provider 353ms; unknown 16376.76ms; source agent.prepare 1289.11ms; plugins.metadata.scan 840.13ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 19197 ms | 7456 ms | 11741 ms | 1450 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261008-052837-5b15b5/kova-agent-cold-warm-message-2c26dd1d-kova-261008-052837-5b15b5/openclaw/timeline.jsonl |
  | warm | 18506 ms | 7925 ms | 10581 ms | 1521 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261008-052837-5b15b5/kova-agent-cold-warm-message-2c26dd1d-kova-261008-052837-5b15b5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 11822 ms | 5129 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 964 ms | 592 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 456 ms | 199 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 176 ms | 77 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 15 ms | 4 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 10848 ms | 4823 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1424 ms | 1046 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 832 ms | 592 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 208 ms | 97 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3, `agent.startup` x2 | 5 | 0 | 20 ms | 5 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261008-052837-5b15b5-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261008-052837-5b15b5-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261008-052837-5b15b5-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261008-052837-5b15b5/kova-agent-cold-warm-message-2c26dd1d-kova-261008-052837-5b15b5

## Target Cleanup

- Runtime: `kova-local-muz3iwjm-3se-cfdc7935`
- Result: removed
- Duration: 498ms

