# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — cold agent spent 20400ms before provider work, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | cold agent spent 20400ms before provider work, over threshold 10000ms |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261007-052848-eecc3c` |
| Generated | 2026-10-07T05:31:38.506Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 20400ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1140.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent spent 19104ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1140.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 21293ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1140.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 20400ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1140.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm pre-provider latency was 19104ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1140.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1238ms), but OpenClaw spent 20400ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1140.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 180.2% | 22015ms | 21293ms | 20400ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1238.7 MB | 22015ms | 21293ms | cold agent spent 20400ms before provider work, over threshold 10000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1238.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1140.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 953.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 186.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 128.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 74.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261007-052848-eecc3c/kova-agent-cold-warm-message-2c26dd1d-kova-261007-052848-eecc3c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1140.7 MB; tracked total 1238.7 MB; max CPU 180.2%; samples 54; roles command-tree 1238.7MB/190%, agent-process 1140.7MB/180.2%, status-cli 953.3MB/186.3%, agent-cli 128.6MB/74.2%
- agent: turn 22015ms; cold/warm 22015ms/21293ms; cold-warm delta 722ms; pre-provider 20400ms; provider 1238ms; metadata scans 12 (389.8ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 21978.9ms; max 22015ms; pre-provider p95 20335.2ms
- agent CLI attribution: cold known 8096ms / unattributed 12304ms; warm known 7914ms / unattributed 11190ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 5559.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - cold agent spent 20400ms before provider work, over threshold 10000ms
  - warm agent spent 19104ms before provider work, over threshold 10000ms
  - warm agent turn took 21293ms, over threshold 15000ms
  - cold pre-provider latency was 20400ms, over threshold 10000ms
  - warm pre-provider latency was 19104ms, over threshold 10000ms
  - cold provider was fast (1238ms), but OpenClaw spent 20400ms before provider work.
- Agent turns:
  - cold: total 22015ms; pre-provider 20400ms; provider 1238ms; post-provider 377ms; response true
    - active window: metadata scans 6 (199.88ms total, max 84.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 20400ms; provider 1238ms; post-provider 377ms; unknown 18573.02ms; source agent.prepare 940.5ms; plugins.metadata.scan 886.48ms
  - warm: total 21293ms; pre-provider 19104ms; provider 1874ms; post-provider 315ms; response true
    - active window: metadata scans 6 (189.92ms total, max 83.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 19104ms; provider 1874ms; post-provider 315ms; unknown 17277.02ms; source agent.prepare 940.5ms; plugins.metadata.scan 886.48ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 20400 ms | 8096 ms | 12304 ms | 1238 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261007-052848-eecc3c/kova-agent-cold-warm-message-2c26dd1d-kova-261007-052848-eecc3c/openclaw/timeline.jsonl |
  | warm | 19104 ms | 7914 ms | 11190 ms | 1874 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261007-052848-eecc3c/kova-agent-cold-warm-message-2c26dd1d-kova-261007-052848-eecc3c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 12957 ms | 5559 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1096 ms | 631 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 342 ms | 136 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 200 ms | 85 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 11092 ms | 4939 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1530 ms | 1106 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 599 ms | 363 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 189 ms | 83 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261007-052848-eecc3c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261007-052848-eecc3c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261007-052848-eecc3c-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261007-052848-eecc3c/kova-agent-cold-warm-message-2c26dd1d-kova-261007-052848-eecc3c

## Target Cleanup

- Runtime: `kova-local-muxo3a79-3sg-b0c963fc`
- Result: removed
- Duration: 599ms

