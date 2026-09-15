# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[226.1%, 844.9%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[226.1%, 844.9%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, PASS:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260915-052544-ba5231` |
| Generated | 2026-09-15T05:28:04.067Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[226.1%, 844.9%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 30 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 482.8%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 30 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[226.1%, 844.9%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 30 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[152.3%, 232.2%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 30 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 30ms | 1005.6MB | n/a | 844.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 215.2% | 5491ms | 5682ms | 4883ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 30ms | 1005.6 MB | 1749.5 MB | n/a | n/a | gateway max CPU interval \[226.1%, 844.9%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 990.1 MB | 5491ms | 5682ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 1005.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 844.9% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 1005.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 844.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 917.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 256.6% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 74.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 482.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 917.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 334.2% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 824.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 215.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 185.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 334.2% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 701.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 243% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260915-052544-ba5231/kova-gateway-performance-man-d48bd949-kova-260915-052544-ba5231
Measurements:
- startup: listening 1ms; health 30ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 29ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 29ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1005.6 MB; tracked total 1749.5 MB; max CPU 844.9%; samples 76; roles gateway 1005.6MB/844.9%, gateway-tree 1005.6MB/844.9%, command-tree 672.1MB/334.2%, mock-provider 72.3MB/482.8%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 2984.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 13/13/12
- Violations:
  - gateway max CPU interval \[226.1%, 844.9%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 482.8%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[226.1%, 844.9%\] crosses threshold 300%; CPU measurement is inconclusive
  - status-cli max CPU interval \[152.3%, 232.2%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260915-052544-ba5231/kova-agent-cold-warm-message-2c26dd1d-kova-260915-052544-ba5231
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 824.4 MB; tracked total 990.1 MB; max CPU 215.2%; samples 61; roles agent-cli 917.2MB/256.6%, command-tree 917.2MB/256.6%, agent-process 824.4MB/215.2%, status-cli 701.2MB/243%; performance thresholds skipped 17 (instrumented)
- agent: turn 5682ms; cold/warm 5491ms/5682ms; cold-warm delta 0ms; pre-provider 5170ms; provider 1ms; metadata scans 8 (296.48ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5672.45ms; max 5682ms; pre-provider p95 5155.65ms
- agent CLI attribution: cold known 3520ms / unattributed 1363ms; warm known 3388ms / unattributed 1782ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1186.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 30/30/25
- Agent turns:
  - cold: total 5491ms; pre-provider 4883ms; provider 3ms; post-provider 605ms; response true
    - active window: metadata scans 6 (213.41ms total, max 56.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4883ms; provider 3ms; post-provider 605ms; unknown 3563.05ms; source agent.prepare 906.49ms; plugins.metadata.scan 413.46ms
  - warm: total 5682ms; pre-provider 5170ms; provider 1ms; post-provider 511ms; response true
    - active window: metadata scans 2 (83.07ms total, max 52.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5170ms; provider 1ms; post-provider 511ms; unknown 3850.05ms; source agent.prepare 906.49ms; plugins.metadata.scan 413.46ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4883 ms | 3520 ms | 1363 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260915-052544-ba5231/kova-agent-cold-warm-message-2c26dd1d-kova-260915-052544-ba5231/openclaw/timeline.jsonl |
  | warm | 5170 ms | 3388 ms | 1782 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260915-052544-ba5231/kova-agent-cold-warm-message-2c26dd1d-kova-260915-052544-ba5231/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x26 | 26 | 0 | 3320 ms | 1187 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1289 ms | 597 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 476 ms | 193 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 215 ms | 56 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 51 ms | 51 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2703 ms | 712 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1332 ms | 573 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 431 ms | 135 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 83 ms | 52 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 74 ms | 74 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 53 ms | 53 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260915-052544-ba5231-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260915-052544-ba5231-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260915-052544-ba5231-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260915-052544-ba5231/kova-gateway-performance-man-d48bd949-kova-260915-052544-ba5231
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260915-052544-ba5231/kova-agent-cold-warm-message-2c26dd1d-kova-260915-052544-ba5231

## Target Cleanup

- Runtime: `kova-local-mu28alyn-413-d01d9b33`
- Result: removed
- Duration: 454ms

