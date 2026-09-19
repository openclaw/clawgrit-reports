# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[218.7%, 253.8%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[218.7%, 253.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 2 (BLOCKED:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260919-052224-a54357` |
| Generated | 2026-09-19T05:24:51.527Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[218.7%, 253.8%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 167 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[145.7%, 265.5%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 167 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[254.6%, 335.5%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 988.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 167ms | 995.7MB | n/a | 253.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | BLOCKED:1 | n/a | 0MB | n/a | 292.1% | 5900ms | 6984ms | 5292ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 167ms | 995.7 MB | 1950.7 MB | n/a | n/a | gateway max CPU interval \[218.7%, 253.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1159.5 MB | 5900ms | 6984ms | agent-cli max CPU interval \[254.6%, 335.5%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1161.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 299.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 1087 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 335.5% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1087 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 335.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 995.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 253.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 988.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 292.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 778.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 265.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 373.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.2% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 362.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 192.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260919-052224-a54357/kova-gateway-performance-man-d48bd949-kova-260919-052224-a54357
Measurements:
- startup: listening 1ms; health 167ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 166ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 166ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 995.7 MB; tracked total 1950.7 MB; max CPU 253.8%; samples 72; roles gateway-tree 1161.2MB/299.9%, gateway 995.7MB/253.8%, command-tree 717.4MB/265.5%, status-cli 717.4MB/265.5%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1715.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 16/16/15
- Violations:
  - gateway max CPU interval \[218.7%, 253.8%\] crosses threshold 250%; CPU measurement is inconclusive
  - status-cli max CPU interval \[145.7%, 265.5%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260919-052224-a54357/kova-agent-cold-warm-message-2c26dd1d-kova-260919-052224-a54357
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 988.5 MB; tracked total 1159.5 MB; max CPU 292.1%; samples 70; roles agent-cli 1087MB/335.5%, command-tree 1087MB/335.5%, agent-process 988.5MB/292.1%, status-cli 778.9MB/247.1%; performance thresholds skipped 17 (instrumented)
- agent: turn 6984ms; cold/warm 5900ms/6984ms; cold-warm delta 0ms; pre-provider 6377ms; provider 1ms; metadata scans 14 (513.85ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6929.8ms; max 6984ms; pre-provider p95 6322.75ms
- agent CLI attribution: cold known 3773ms / unattributed 1519ms; warm known 4661ms / unattributed 1716ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2164.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 39/39/22
- Violations:
  - agent-cli max CPU interval \[254.6%, 335.5%\] crosses threshold 300%; CPU measurement is inconclusive
- Agent turns:
  - cold: total 5900ms; pre-provider 5292ms; provider 2ms; post-provider 606ms; response true
    - active window: metadata scans 8 (282.85ms total, max 57.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5292ms; provider 2ms; post-provider 606ms; unknown 3441.56ms; source agent.prepare 1223.22ms; plugins.metadata.scan 627.22ms
  - warm: total 6984ms; pre-provider 6377ms; provider 1ms; post-provider 606ms; response true
    - active window: metadata scans 6 (231ms total, max 69.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6377ms; provider 1ms; post-provider 606ms; unknown 4526.56ms; source agent.prepare 1223.22ms; plugins.metadata.scan 627.22ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5292 ms | 3773 ms | 1519 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260919-052224-a54357/kova-agent-cold-warm-message-2c26dd1d-kova-260919-052224-a54357/openclaw/timeline.jsonl |
  | warm | 6377 ms | 4661 ms | 1716 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260919-052224-a54357/kova-agent-cold-warm-message-2c26dd1d-kova-260919-052224-a54357/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x39 | 39 | 0 | 3816 ms | 1340 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1117 ms | 519 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 625 ms | 181 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 283 ms | 58 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 71 ms | 71 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 4426 ms | 2165 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1332 ms | 683 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 598 ms | 187 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x5, `startup` | 6 | 0 | 231 ms | 70 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 74 ms | 74 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 66 ms | 66 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260919-052224-a54357-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260919-052224-a54357-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260919-052224-a54357-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260919-052224-a54357/kova-gateway-performance-man-d48bd949-kova-260919-052224-a54357
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260919-052224-a54357/kova-agent-cold-warm-message-2c26dd1d-kova-260919-052224-a54357

## Target Cleanup

- Runtime: `kova-local-mu7xxqgf-3pi-ecdcb0a6`
- Result: removed
- Duration: 469ms

