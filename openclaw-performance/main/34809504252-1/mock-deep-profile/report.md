# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[232.9%, 292.1%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[232.9%, 292.1%\] crosses threshold 250%; CPU measurement is inconclusive |
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
| Run ID | `kova-260914-052738-94ac58` |
| Generated | 2026-09-14T05:30:12.604Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[232.9%, 292.1%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 122 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[155.2%, 216.4%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 122 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 122ms | 986.8MB | n/a | 292.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 225.1% | 4885ms | 4976ms | 4316ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 122ms | 986.8 MB | 1713.4 MB | n/a | n/a | gateway max CPU interval \[232.9%, 292.1%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1024.6 MB | 4885ms | 4976ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 986.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 292.1% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 986.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 292.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 951.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 264.6% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 951.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 272.3% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 385.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 272.3% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 862.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 225.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 693.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 222.6% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 266.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 176% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260914-052738-94ac58/kova-gateway-performance-man-d48bd949-kova-260914-052738-94ac58
Measurements:
- startup: listening 0ms; health 122ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 122ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 122ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 986.8 MB; tracked total 1713.4 MB; max CPU 292.1%; samples 83; roles gateway 986.8MB/292.1%, gateway-tree 986.8MB/292.1%, command-tree 654.9MB/272.3%, status-cli 654.9MB/216.4%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 3286.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 13/13/12
- Violations:
  - gateway max CPU interval \[232.9%, 292.1%\] crosses threshold 250%; CPU measurement is inconclusive
  - status-cli max CPU interval \[155.2%, 216.4%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260914-052738-94ac58/kova-agent-cold-warm-message-2c26dd1d-kova-260914-052738-94ac58
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 862.3 MB; tracked total 1024.6 MB; max CPU 225.1%; samples 56; roles agent-cli 951.9MB/264.6%, command-tree 951.9MB/264.6%, agent-process 862.3MB/225.1%, status-cli 693.1MB/222.6%; performance thresholds skipped 17 (instrumented)
- agent: turn 4976ms; cold/warm 4885ms/4976ms; cold-warm delta 0ms; pre-provider 4500ms; provider 2ms; metadata scans 8 (367.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4971.45ms; max 4976ms; pre-provider p95 4490.8ms
- agent CLI attribution: cold known 3116ms / unattributed 1200ms; warm known 2957ms / unattributed 1543ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1212.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 31/31/26
- Agent turns:
  - cold: total 4885ms; pre-provider 4316ms; provider 2ms; post-provider 567ms; response true
    - active window: metadata scans 6 (195.46ms total, max 51.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4316ms; provider 2ms; post-provider 567ms; unknown 3153.34ms; source agent.prepare 680.48ms; plugins.metadata.scan 482.18ms
  - warm: total 4976ms; pre-provider 4500ms; provider 2ms; post-provider 474ms; response true
    - active window: metadata scans 2 (172.1ms total, max 143.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4500ms; provider 2ms; post-provider 474ms; unknown 3337.34ms; source agent.prepare 680.48ms; plugins.metadata.scan 482.18ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4316 ms | 3116 ms | 1200 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260914-052738-94ac58/kova-agent-cold-warm-message-2c26dd1d-kova-260914-052738-94ac58/openclaw/timeline.jsonl |
  | warm | 4500 ms | 2957 ms | 1543 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260914-052738-94ac58/kova-agent-cold-warm-message-2c26dd1d-kova-260914-052738-94ac58/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 3370 ms | 1212 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1094 ms | 389 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 307 ms | 108 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 196 ms | 52 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 59 ms | 59 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 50 ms | 50 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x12 | 12 | 0 | 2373 ms | 655 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1099 ms | 482 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 371 ms | 144 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 173 ms | 144 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 55 ms | 55 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 51 ms | 51 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260914-052738-94ac58-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260914-052738-94ac58-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260914-052738-94ac58-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260914-052738-94ac58/kova-gateway-performance-man-d48bd949-kova-260914-052738-94ac58
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260914-052738-94ac58/kova-agent-cold-warm-message-2c26dd1d-kova-260914-052738-94ac58

## Target Cleanup

- Runtime: `kova-local-mu0sx7hq-41t-9536fad3`
- Result: removed
- Duration: 492ms

