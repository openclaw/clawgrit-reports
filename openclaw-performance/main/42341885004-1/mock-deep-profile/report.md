# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm agent turn took 18696ms, over threshold 15000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm agent turn took 18696ms, over threshold 15000ms |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261107-051642-ebbc7e` |
| Generated | 2026-11-07T05:29:38.103Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
| Repeat / parallel | 1 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 2 |
| Scenarios | 2 |
| States | 2 |
| BLOCKED | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[211.9%, 309.7%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 25 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 18696ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1983.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (274ms), but OpenClaw spent 16976ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1983.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 25ms | 1518.4MB | n/a | 234.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 327.3% | 17347ms | 18696ms | 15564ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 25ms | 1518.4 MB | 2512 MB | n/a | n/a | status-cli max CPU interval \[211.9%, 309.7%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2258.3 MB | 17347ms | 18696ms | warm agent turn took 18696ms, over threshold 15000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2184 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 383.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1983.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 327.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1216.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 370.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1622.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 271.9% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1518.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 234.4% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 90.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 327.3% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 542.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 203.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 511 MB (scenario gateway-performance/many-bundled-plugins); CPU 180.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261107-051642-ebbc7e/kova-gateway-performance-man-d48bd949-kova-261107-051642-ebbc7e
Measurements:
- startup: listening 1ms; health 25ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 24ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 24ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1518.4 MB; tracked total 2512 MB; max CPU 234.4%; samples 135; roles gateway-tree 1622.1MB/271.9%, command-tree 839.1MB/309.7%, gateway 1518.4MB/234.4%, status-cli 839.1MB/309.7%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2346.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/6
- Violations:
  - status-cli max CPU interval \[211.9%, 309.7%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261107-051642-ebbc7e/kova-agent-cold-warm-message-2c26dd1d-kova-261107-051642-ebbc7e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1983.1 MB; tracked total 2258.3 MB; max CPU 327.3%; samples 186; roles command-tree 2184MB/383.1%, agent-process 1983.1MB/327.3%, status-cli 1216.7MB/370.3%, agent-cli 324.1MB/218.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 18696ms; cold/warm 17347ms/18696ms; cold-warm delta 0ms; pre-provider 16976ms; provider 274ms; metadata scans 14 (576.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 18628.55ms; max 18696ms; pre-provider p95 16905.4ms
- agent CLI attribution: cold known 9301ms / unattributed 6263ms; warm known 11850ms / unattributed 5126ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3392.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 71/45/3
- Violations:
  - warm agent turn took 18696ms, over threshold 15000ms
  - warm provider was fast (274ms), but OpenClaw spent 16976ms before provider work.
- Agent turns:
  - cold: total 17347ms; pre-provider 15564ms; provider 5ms; post-provider 1778ms; response true
    - active window: metadata scans 7 (323.3ms total, max 125.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 15564ms; provider 5ms; post-provider 1778ms; unknown 6225.39ms; source agent.prepare 8564.65ms; plugins.metadata.scan 773.96ms
  - warm: total 18696ms; pre-provider 16976ms; provider 274ms; post-provider 1446ms; response true
    - active window: metadata scans 7 (253.54ms total, max 79.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 16976ms; provider 274ms; post-provider 1446ms; unknown 7637.39ms; source agent.prepare 8564.65ms; plugins.metadata.scan 773.96ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 15564 ms | 9301 ms | 6263 ms | 5 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261107-051642-ebbc7e/kova-agent-cold-warm-message-2c26dd1d-kova-261107-051642-ebbc7e/openclaw/timeline.jsonl |
  | warm | 16976 ms | 11850 ms | 5126 ms | 274 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261107-051642-ebbc7e/kova-agent-cold-warm-message-2c26dd1d-kova-261107-051642-ebbc7e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 4541 ms | 1493 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3880 ms | 1822 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3762 ms | 1125 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 325 ms | 126 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 268 ms | 268 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 5632 ms | 3392 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4805 ms | 1598 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 4720 ms | 1567 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 338 ms | 338 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 253 ms | 80 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261107-051642-ebbc7e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261107-051642-ebbc7e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261107-051642-ebbc7e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261107-051642-ebbc7e/kova-gateway-performance-man-d48bd949-kova-261107-051642-ebbc7e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261107-051642-ebbc7e/kova-agent-cold-warm-message-2c26dd1d-kova-261107-051642-ebbc7e

## Target Cleanup

- Runtime: `kova-local-mw5yb4rs-3h5-b692a449`
- Result: removed
- Duration: 648ms

