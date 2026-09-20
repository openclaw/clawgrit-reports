# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway max CPU interval \[185.5%, 593.8%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway max CPU interval \[185.5%, 593.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 2 (FAIL:1, BLOCKED:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260920-052236-80f30d` |
| Generated | 2026-09-20T05:25:22.567Z |
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
| FAIL | 1 |
| BLOCKED | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[185.5%, 593.8%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 306 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 593.8%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 306 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1276.7 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 306 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[185.5%, 1781.3%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 306 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[143.5%, 300.6%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 306 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[250.7%, 331%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1224.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 306ms | 1109.6MB | n/a | 593.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | BLOCKED:1 | n/a | 0MB | n/a | 293.8% | 7663ms | 8446ms | 6919ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 306ms | 1109.6 MB | 2182 MB | n/a | n/a | gateway max CPU interval \[185.5%, 593.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1400.5 MB | 7663ms | 8446ms | agent-cli max CPU interval \[250.7%, 331%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1327.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 331% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1276.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 1781.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1327.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 331% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 192.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 1187.6% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1109.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 593.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1224.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 293.8% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 76.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 593.8% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 900.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 300.6% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260920-052236-80f30d/kova-gateway-performance-man-d48bd949-kova-260920-052236-80f30d
Measurements:
- startup: listening 1ms; health 306ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 305ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 305ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1109.6 MB; tracked total 2182 MB; max CPU 593.8%; samples 85; roles gateway-tree 1276.7MB/1781.3%, gateway 1109.6MB/593.8%, uncategorized 192.6MB/1187.6%, command-tree 833.1MB/300.6%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2649.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 16/16/15
- Violations:
  - gateway max CPU interval \[185.5%, 593.8%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 593.8%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree peak RSS 1276.7 MB exceeded threshold 1200 MB
  - gateway-tree max CPU interval \[185.5%, 1781.3%\] crosses threshold 300%; CPU measurement is inconclusive
  - status-cli max CPU interval \[143.5%, 300.6%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260920-052236-80f30d/kova-agent-cold-warm-message-2c26dd1d-kova-260920-052236-80f30d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1224.7 MB; tracked total 1400.5 MB; max CPU 293.8%; samples 87; roles agent-cli 1327.4MB/331%, command-tree 1327.4MB/331%, agent-process 1224.7MB/293.8%, status-cli 900.7MB/258.9%; performance thresholds skipped 17 (instrumented)
- agent: turn 8446ms; cold/warm 7663ms/8446ms; cold-warm delta 0ms; pre-provider 7799ms; provider 2ms; metadata scans 14 (544.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8406.85ms; max 8446ms; pre-provider p95 7755ms
- agent CLI attribution: cold known 5295ms / unattributed 1624ms; warm known 5850ms / unattributed 1949ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2919.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 40/40/20
- Violations:
  - agent-cli max CPU interval \[250.7%, 331%\] crosses threshold 300%; CPU measurement is inconclusive
- Agent turns:
  - cold: total 7663ms; pre-provider 6919ms; provider 3ms; post-provider 741ms; response true
    - active window: metadata scans 8 (310.17ms total, max 77.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6919ms; provider 3ms; post-provider 741ms; unknown 4829.93ms; source agent.prepare 1383.35ms; plugins.metadata.scan 705.72ms
  - warm: total 8446ms; pre-provider 7799ms; provider 2ms; post-provider 645ms; response true
    - active window: metadata scans 6 (234.82ms total, max 61.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7799ms; provider 2ms; post-provider 645ms; unknown 5709.93ms; source agent.prepare 1383.35ms; plugins.metadata.scan 705.72ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6919 ms | 5295 ms | 1624 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260920-052236-80f30d/kova-agent-cold-warm-message-2c26dd1d-kova-260920-052236-80f30d/openclaw/timeline.jsonl |
  | warm | 7799 ms | 5850 ms | 1949 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260920-052236-80f30d/kova-agent-cold-warm-message-2c26dd1d-kova-260920-052236-80f30d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 6275 ms | 2496 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1415 ms | 606 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 686 ms | 215 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 311 ms | 77 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 88 ms | 88 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 87 ms | 87 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x32 | 32 | 0 | 6400 ms | 2919 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1631 ms | 857 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 695 ms | 218 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 234 ms | 62 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 73 ms | 73 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 72 ms | 72 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260920-052236-80f30d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260920-052236-80f30d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260920-052236-80f30d-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260920-052236-80f30d/kova-gateway-performance-man-d48bd949-kova-260920-052236-80f30d
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260920-052236-80f30d/kova-agent-cold-warm-message-2c26dd1d-kova-260920-052236-80f30d

## Target Cleanup

- Runtime: `kova-local-mu9ddubd-3pj-a268ff3d`
- Result: removed
- Duration: 492ms

