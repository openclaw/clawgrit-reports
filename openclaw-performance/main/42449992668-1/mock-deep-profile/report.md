# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm agent turn took 15943ms, over threshold 15000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm agent turn took 15943ms, over threshold 15000ms |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261108-051726-9c45d8` |
| Generated | 2026-11-08T05:29:30.632Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[213.3%, 307.3%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 148 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[287.6%, 310.2%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1998 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 15943ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1998 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 14521ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1998 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 148ms | 1563.8MB | n/a | 215.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 310.2% | 15209ms | 15943ms | 13231ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 148ms | 1563.8 MB | 2580.1 MB | n/a | n/a | status-cli max CPU interval \[213.3%, 307.3%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2271.6 MB | 15209ms | 15943ms | agent-process max CPU interval \[287.6%, 310.2%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2198.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 372.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1998 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 310.2% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1236.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 372.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1668.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 250.5% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1563.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 215.6% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 98.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 310.2% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 502.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 192.2% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 477.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 198.5% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261108-051726-9c45d8/kova-gateway-performance-man-d48bd949-kova-261108-051726-9c45d8
Measurements:
- startup: listening 1ms; health 148ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 147ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 147ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1563.8 MB; tracked total 2580.1 MB; max CPU 215.6%; samples 124; roles gateway-tree 1668.1MB/250.5%, command-tree 900.7MB/307.3%, gateway 1563.8MB/215.6%, status-cli 900.7MB/307.3%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 1805.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/6
- Violations:
  - status-cli max CPU interval \[213.3%, 307.3%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261108-051726-9c45d8/kova-agent-cold-warm-message-2c26dd1d-kova-261108-051726-9c45d8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1998 MB; tracked total 2271.6 MB; max CPU 310.2%; samples 162; roles command-tree 2198.3MB/372.5%, agent-process 1998MB/310.2%, status-cli 1236.1MB/372.5%, agent-cli 312.9MB/207.9%; performance thresholds skipped 15 (instrumented)
- agent: turn 15943ms; cold/warm 15209ms/15943ms; cold-warm delta 0ms; pre-provider 14521ms; provider 1ms; metadata scans 14 (483.81ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15906.3ms; max 15943ms; pre-provider p95 14456.5ms
- agent CLI attribution: cold known 8148ms / unattributed 5083ms; warm known 10035ms / unattributed 4486ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2815.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 71/45/3
- Violations:
  - agent-process max CPU interval \[287.6%, 310.2%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm agent turn took 15943ms, over threshold 15000ms
  - warm provider was fast (1ms), but OpenClaw spent 14521ms before provider work.
- Agent turns:
  - cold: total 15209ms; pre-provider 13231ms; provider 4ms; post-provider 1974ms; response true
    - active window: metadata scans 7 (232.39ms total, max 72.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13231ms; provider 4ms; post-provider 1974ms; unknown 6244.15ms; source agent.prepare 6321.96ms; plugins.metadata.scan 664.89ms
  - warm: total 15943ms; pre-provider 14521ms; provider 1ms; post-provider 1421ms; response true
    - active window: metadata scans 7 (251.42ms total, max 94.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14521ms; provider 1ms; post-provider 1421ms; unknown 7534.15ms; source agent.prepare 6321.96ms; plugins.metadata.scan 664.89ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 13231 ms | 8148 ms | 5083 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261108-051726-9c45d8/kova-agent-cold-warm-message-2c26dd1d-kova-261108-051726-9c45d8/openclaw/timeline.jsonl |
  | warm | 14521 ms | 10035 ms | 4486 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261108-051726-9c45d8/kova-agent-cold-warm-message-2c26dd1d-kova-261108-051726-9c45d8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 4216 ms | 1364 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3488 ms | 1652 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2817 ms | 1097 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 266 ms | 266 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 165 ms | 72 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4891 ms | 2816 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 4135 ms | 1385 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3504 ms | 1100 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 257 ms | 257 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 250 ms | 95 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261108-051726-9c45d8-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261108-051726-9c45d8-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261108-051726-9c45d8-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261108-051726-9c45d8/kova-gateway-performance-man-d48bd949-kova-261108-051726-9c45d8
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261108-051726-9c45d8/kova-agent-cold-warm-message-2c26dd1d-kova-261108-051726-9c45d8

## Target Cleanup

- Runtime: `kova-local-mw7drxuh-3id-bd77ee11`
- Result: removed
- Duration: 548ms

