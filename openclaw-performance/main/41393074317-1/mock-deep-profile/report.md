# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm provider was fast (1ms), but OpenClaw spent 12612ms before provider work.

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm provider was fast (1ms), but OpenClaw spent 12612ms before provider work. |
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
| Run ID | `kova-261102-051908-fc6b38` |
| Generated | 2026-11-02T05:28:51.117Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[179.9%, 279.4%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 137 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[290.2%, 312.3%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1968.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 12612ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1968.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 137ms | 1611.4MB | n/a | 231.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 312.3% | 13381ms | 13960ms | 11498ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 137ms | 1611.4 MB | 2892.8 MB | n/a | n/a | status-cli max CPU interval \[179.9%, 279.4%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2239.8 MB | 13381ms | 13960ms | agent-process max CPU interval \[290.2%, 312.3%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2167.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 363.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1968.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 312.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1174.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 332.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1715 MB (scenario gateway-performance/many-bundled-plugins); CPU 245.7% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1611.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 231.6% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 495.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 184.7% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 334.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 209.6% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 438.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261102-051908-fc6b38/kova-gateway-performance-man-d48bd949-kova-261102-051908-fc6b38
Measurements:
- startup: listening 1ms; health 137ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 136ms; post-ready p95 1ms; failures 0; final failures 0; slowest startup-sample/cold-start 136ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1611.4 MB; tracked total 2892.8 MB; max CPU 231.6%; samples 112; roles gateway-tree 1715MB/245.7%, command-tree 1148.4MB/279.4%, gateway 1611.4MB/231.6%, status-cli 1148.4MB/279.4%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 1709.43ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 23/23/12
- Violations:
  - status-cli max CPU interval \[179.9%, 279.4%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261102-051908-fc6b38/kova-agent-cold-warm-message-2c26dd1d-kova-261102-051908-fc6b38
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1968.5 MB; tracked total 2239.8 MB; max CPU 312.3%; samples 143; roles command-tree 2167.1MB/363.2%, agent-process 1968.5MB/312.3%, status-cli 1174.6MB/332.9%, agent-cli 334.8MB/209.6%; performance thresholds skipped 15 (instrumented)
- agent: turn 13960ms; cold/warm 13381ms/13960ms; cold-warm delta 0ms; pre-provider 12612ms; provider 1ms; metadata scans 14 (413.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 13931.05ms; max 13960ms; pre-provider p95 12556.3ms
- agent CLI attribution: cold known 7134ms / unattributed 4364ms; warm known 8669ms / unattributed 3943ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2601.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 74/45/4
- Violations:
  - agent-process max CPU interval \[290.2%, 312.3%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm provider was fast (1ms), but OpenClaw spent 12612ms before provider work.
- Agent turns:
  - cold: total 13381ms; pre-provider 11498ms; provider 2ms; post-provider 1881ms; response true
    - active window: metadata scans 7 (207.68ms total, max 62.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11498ms; provider 2ms; post-provider 1881ms; unknown 5544.18ms; source agent.prepare 5404.74ms; plugins.metadata.scan 549.08ms
  - warm: total 13960ms; pre-provider 12612ms; provider 1ms; post-provider 1347ms; response true
    - active window: metadata scans 7 (205.88ms total, max 71.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12612ms; provider 1ms; post-provider 1347ms; unknown 6658.18ms; source agent.prepare 5404.74ms; plugins.metadata.scan 549.08ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11498 ms | 7134 ms | 4364 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261102-051908-fc6b38/kova-agent-cold-warm-message-2c26dd1d-kova-261102-051908-fc6b38/openclaw/timeline.jsonl |
  | warm | 12612 ms | 8669 ms | 3943 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261102-051908-fc6b38/kova-agent-cold-warm-message-2c26dd1d-kova-261102-051908-fc6b38/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3563 ms | 1150 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3161 ms | 1506 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2419 ms | 965 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 229 ms | 229 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 135 ms | 62 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4532 ms | 2601 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3132 ms | 1011 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2985 ms | 961 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 225 ms | 225 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 206 ms | 71 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261102-051908-fc6b38-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261102-051908-fc6b38-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261102-051908-fc6b38-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261102-051908-fc6b38/kova-gateway-performance-man-d48bd949-kova-261102-051908-fc6b38
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261102-051908-fc6b38/kova-agent-cold-warm-message-2c26dd1d-kova-261102-051908-fc6b38

## Target Cleanup

- Runtime: `kova-local-mvyt708n-3f3-d32d4064`
- Result: removed
- Duration: 503ms

