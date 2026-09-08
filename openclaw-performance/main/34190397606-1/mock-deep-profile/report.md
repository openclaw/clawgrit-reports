# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[128.5%, 992.8%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[128.5%, 992.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, PASS:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260908-052444-07c7ae` |
| Generated | 2026-09-08T05:26:47.009Z |
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
| BLOCKED | 1 |
| PASS | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[128.5%, 992.8%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 20 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | command-tree max CPU interval \[152%, 496.4%\] crosses threshold 450%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 20 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[128.5%, 992.8%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 20 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 20ms | 610.1MB | n/a | 992.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 291.7% | 4507ms | 4268ms | 4046ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 20ms | 610.1 MB | 1264.9 MB | n/a | n/a | gateway max CPU interval \[128.5%, 992.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 922.9 MB | 4507ms | 4268ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 850.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 291.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 610.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 992.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 850.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 496.4% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 610.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 992.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 759.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 291.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 667.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 78.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 496.4% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 424.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 168.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260908-052444-07c7ae/kova-gateway-performance-man-d48bd949-kova-260908-052444-07c7ae
Measurements:
- startup: listening 1ms; health 20ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 19ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 19ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 610.1 MB; tracked total 1264.9 MB; max CPU 992.8%; samples 58; roles gateway 610.1MB/992.8%, gateway-tree 610.1MB/992.8%, command-tree 583.8MB/496.4%, status-cli 583.8MB/162.6%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1560.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 7/7/7
- Violations:
  - gateway max CPU interval \[128.5%, 992.8%\] crosses threshold 250%; CPU measurement is inconclusive
  - command-tree max CPU interval \[152%, 496.4%\] crosses threshold 450%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[128.5%, 992.8%\] crosses threshold 300%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260908-052444-07c7ae/kova-agent-cold-warm-message-2c26dd1d-kova-260908-052444-07c7ae
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 759.7 MB; tracked total 922.9 MB; max CPU 291.7%; samples 48; roles agent-cli 850.5MB/291.7%, command-tree 850.5MB/291.7%, agent-process 759.7MB/291.7%, status-cli 667.8MB/180.2%; performance thresholds skipped 15 (instrumented)
- agent: turn 4507ms; cold/warm 4507ms/4268ms; cold-warm delta 239ms; pre-provider 4046ms; provider 3ms; metadata scans 7 (339.15ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4495.05ms; max 4507ms; pre-provider p95 4030.55ms
- agent CLI attribution: cold known 3012ms / unattributed 1034ms; warm known 2314ms / unattributed 1423ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 893.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/13
- Agent turns:
  - cold: total 4507ms; pre-provider 4046ms; provider 3ms; post-provider 458ms; response true
    - active window: metadata scans 5 (167.71ms total, max 55.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4046ms; provider 3ms; post-provider 458ms; unknown 2782.46ms; source agent.prepare 789.24ms; plugins.metadata.scan 474.3ms
  - warm: total 4268ms; pre-provider 3737ms; provider 1ms; post-provider 530ms; response true
    - active window: metadata scans 2 (171.44ms total, max 154.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3737ms; provider 1ms; post-provider 530ms; unknown 2473.46ms; source agent.prepare 789.24ms; plugins.metadata.scan 474.3ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4046 ms | 3012 ms | 1034 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260908-052444-07c7ae/kova-agent-cold-warm-message-2c26dd1d-kova-260908-052444-07c7ae/openclaw/timeline.jsonl |
  | warm | 3737 ms | 2314 ms | 1423 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260908-052444-07c7ae/kova-agent-cold-warm-message-2c26dd1d-kova-260908-052444-07c7ae/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 2633 ms | 893 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 996 ms | 371 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 453 ms | 186 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 168 ms | 55 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 89 ms | 89 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 46 ms | 46 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1647 ms | 624 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 743 ms | 207 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 337 ms | 141 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 172 ms | 155 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 96 ms | 96 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 49 ms | 49 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260908-052444-07c7ae-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260908-052444-07c7ae-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260908-052444-07c7ae-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260908-052444-07c7ae/kova-gateway-performance-man-d48bd949-kova-260908-052444-07c7ae
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260908-052444-07c7ae/kova-agent-cold-warm-message-2c26dd1d-kova-260908-052444-07c7ae

## Target Cleanup

- Runtime: `kova-local-mts86dbu-41g-2cc3e195`
- Result: removed
- Duration: 470ms

