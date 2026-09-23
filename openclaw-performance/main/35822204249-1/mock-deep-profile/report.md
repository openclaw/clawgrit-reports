# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[210.8%, 588.9%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[210.8%, 588.9%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 8 |
| Warnings | 0 |
| Records | 2 (BLOCKED:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260923-052508-463be7` |
| Generated | 2026-09-23T05:28:23.792Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 1 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 2 |
| Scenarios | 2 |
| States | 2 |
| BLOCKED | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[210.8%, 588.9%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 211 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 588.9%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 211 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[210.8%, 1766.7%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 211 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[171.7%, 247.8%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 211 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1217.6 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1217.6 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[280%, 343%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1217.6 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[280%, 304%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1217.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 211ms | 1076.5MB | n/a | 588.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | BLOCKED:1 | n/a | 0MB | n/a | 304% | 9449ms | 11062ms | 8593ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 211ms | 1076.5 MB | 1958.5 MB | n/a | n/a | gateway max CPU interval \[210.8%, 588.9%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1392.2 MB | 9449ms | 11062ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1320.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 343% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1161.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 1766.7% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1320.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 441.7% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 204.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 1177.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1217.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 304% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1076.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 588.9% (scenario gateway-performance/many-bundled-plugins)
- mock-provider: RSS 73 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 588.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 823.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 321% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260923-052508-463be7/kova-gateway-performance-man-d48bd949-kova-260923-052508-463be7
Measurements:
- startup: listening 1ms; health 211ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 210ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 210ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1076.5 MB; tracked total 1958.5 MB; max CPU 588.9%; samples 90; roles gateway-tree 1161.2MB/1766.7%, gateway 1076.5MB/588.9%, uncategorized 204.1MB/1177.8%, command-tree 726.1MB/441.7%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2495.62ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 14/14/13
- Violations:
  - gateway max CPU interval \[210.8%, 588.9%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 588.9%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[210.8%, 1766.7%\] crosses threshold 300%; CPU measurement is inconclusive
  - status-cli max CPU interval \[171.7%, 247.8%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260923-052508-463be7/kova-agent-cold-warm-message-2c26dd1d-kova-260923-052508-463be7
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1217.6 MB; tracked total 1392.2 MB; max CPU 304%; samples 105; roles agent-cli 1320.2MB/343%, command-tree 1320.2MB/343%, agent-process 1217.6MB/304%, status-cli 823.2MB/321%; performance thresholds skipped 15 (instrumented)
- agent: turn 11062ms; cold/warm 9449ms/11062ms; cold-warm delta 0ms; pre-provider 9964ms; provider 1ms; metadata scans 16 (659.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10981.35ms; max 11062ms; pre-provider p95 9895.45ms
- agent CLI attribution: cold known 5526ms / unattributed 3067ms; warm known 6883ms / unattributed 3081ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 3203.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 48/48/18
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-cli max CPU interval \[280%, 343%\] crosses threshold 300%; CPU measurement is inconclusive
  - agent-process max CPU interval \[280%, 304%\] crosses threshold 300%; CPU measurement is inconclusive
- Agent turns:
  - cold: total 9449ms; pre-provider 8593ms; provider 2ms; post-provider 854ms; response true
    - active window: metadata scans 9 (356.43ms total, max 67.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8593ms; provider 2ms; post-provider 854ms; unknown 5523.69ms; source agent.prepare 2282.03ms; plugins.metadata.scan 787.28ms
  - warm: total 11062ms; pre-provider 9964ms; provider 1ms; post-provider 1097ms; response true
    - active window: metadata scans 7 (303.16ms total, max 73.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9964ms; provider 1ms; post-provider 1097ms; unknown 6894.69ms; source agent.prepare 2282.03ms; plugins.metadata.scan 787.28ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8593 ms | 5526 ms | 3067 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260923-052508-463be7/kova-agent-cold-warm-message-2c26dd1d-kova-260923-052508-463be7/openclaw/timeline.jsonl |
  | warm | 9964 ms | 6883 ms | 3081 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260923-052508-463be7/kova-agent-cold-warm-message-2c26dd1d-kova-260923-052508-463be7/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x43 | 43 | 0 | 4933 ms | 1865 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1711 ms | 708 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1232 ms | 449 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` | 9 | 0 | 355 ms | 68 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 84 ms | 84 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 81 ms | 81 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 5812 ms | 3204 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1970 ms | 931 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1054 ms | 446 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x6 | 7 | 0 | 304 ms | 74 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 87 ms | 87 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 84 ms | 84 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260923-052508-463be7-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260923-052508-463be7-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260923-052508-463be7-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260923-052508-463be7/kova-gateway-performance-man-d48bd949-kova-260923-052508-463be7
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260923-052508-463be7/kova-agent-cold-warm-message-2c26dd1d-kova-260923-052508-463be7

## Target Cleanup

- Runtime: `kova-local-mudnsncn-3q2-19de1f1b`
- Result: removed
- Duration: 506ms

