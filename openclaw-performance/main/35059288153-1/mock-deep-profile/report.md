# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[245.7%, 295.8%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[245.7%, 295.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, PASS:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260916-052518-b9fad9` |
| Generated | 2026-09-16T05:28:20.176Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[245.7%, 295.8%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 49 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[146.3%, 256%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 49 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 49ms | 936.7MB | n/a | 295.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 241.4% | 7186ms | 7682ms | 6436ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 49ms | 936.7 MB | 1664.5 MB | n/a | n/a | gateway max CPU interval \[245.7%, 295.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1018.1 MB | 7186ms | 7682ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 944.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 274.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 936.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 295.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 944.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 274.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 936.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 295.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 852.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 241.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 733.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 256% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 367.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 203.7% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 343.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 191.5% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260916-052518-b9fad9/kova-gateway-performance-man-d48bd949-kova-260916-052518-b9fad9
Measurements:
- startup: listening 0ms; health 49ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 49ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 49ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 936.7 MB; tracked total 1664.5 MB; max CPU 295.8%; samples 85; roles gateway 936.7MB/295.8%, gateway-tree 936.7MB/295.8%, command-tree 656.4MB/256%, status-cli 656.4MB/256%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2361.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 16/16/15
- Violations:
  - gateway max CPU interval \[245.7%, 295.8%\] crosses threshold 250%; CPU measurement is inconclusive
  - status-cli max CPU interval \[146.3%, 256%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260916-052518-b9fad9/kova-agent-cold-warm-message-2c26dd1d-kova-260916-052518-b9fad9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 852.5 MB; tracked total 1018.1 MB; max CPU 241.4%; samples 81; roles agent-cli 944.7MB/274.4%, command-tree 944.7MB/274.4%, agent-process 852.5MB/241.4%, status-cli 733.3MB/250%; performance thresholds skipped 17 (instrumented)
- agent: turn 7682ms; cold/warm 7186ms/7682ms; cold-warm delta 0ms; pre-provider 6932ms; provider 1ms; metadata scans 14 (618.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7657.2ms; max 7682ms; pre-provider p95 6907.2ms
- agent CLI attribution: cold known 4652ms / unattributed 1784ms; warm known 4954ms / unattributed 1978ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2348.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 31/31/26
- Agent turns:
  - cold: total 7186ms; pre-provider 6436ms; provider 4ms; post-provider 746ms; response true
    - active window: metadata scans 8 (337.83ms total, max 74.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6436ms; provider 4ms; post-provider 746ms; unknown 4772.88ms; source agent.prepare 873.48ms; plugins.metadata.scan 789.64ms
  - warm: total 7682ms; pre-provider 6932ms; provider 1ms; post-provider 749ms; response true
    - active window: metadata scans 6 (281.06ms total, max 74.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6932ms; provider 1ms; post-provider 749ms; unknown 5268.88ms; source agent.prepare 873.48ms; plugins.metadata.scan 789.64ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6436 ms | 4652 ms | 1784 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260916-052518-b9fad9/kova-agent-cold-warm-message-2c26dd1d-kova-260916-052518-b9fad9/openclaw/timeline.jsonl |
  | warm | 6932 ms | 4954 ms | 1978 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260916-052518-b9fad9/kova-agent-cold-warm-message-2c26dd1d-kova-260916-052518-b9fad9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x39 | 39 | 0 | 4400 ms | 1564 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1853 ms | 832 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 442 ms | 134 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 339 ms | 75 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 85 ms | 85 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 81 ms | 81 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x35 | 35 | 0 | 5268 ms | 2349 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1369 ms | 559 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 431 ms | 146 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 280 ms | 75 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 132 ms | 132 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 70 ms | 70 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260916-052518-b9fad9-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260916-052518-b9fad9-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260916-052518-b9fad9-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260916-052518-b9fad9/kova-gateway-performance-man-d48bd949-kova-260916-052518-b9fad9
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260916-052518-b9fad9/kova-agent-cold-warm-message-2c26dd1d-kova-260916-052518-b9fad9

## Target Cleanup

- Runtime: `kova-local-mu3npwdn-432-1b676683`
- Result: removed
- Duration: 567ms

