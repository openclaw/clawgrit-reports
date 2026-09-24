# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[226.1%, 272%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[226.1%, 272%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 2 (BLOCKED:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260924-052625-965469` |
| Generated | 2026-09-24T05:29:29.525Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[226.1%, 272%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 63 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 212%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 63 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[226.1%, 635.9%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 63 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[163.3%, 280.1%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 63 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[285.7%, 343.4%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1294.6 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[285.7%, 307.7%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1294.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 63ms | 995.1MB | n/a | 272% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | BLOCKED:1 | n/a | 0MB | n/a | 307.7% | 9813ms | 10975ms | 8934ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 63ms | 995.1 MB | 1938.7 MB | n/a | n/a | gateway max CPU interval \[226.1%, 272%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1468.9 MB | 9813ms | 10975ms | agent-cli max CPU interval \[285.7%, 343.4%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1397.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 343.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1164.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 635.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1397.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 343.4% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 193.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 423.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1294.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 307.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 995.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 272% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 822.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 332.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 383.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 180.4% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260924-052625-965469/kova-gateway-performance-man-d48bd949-kova-260924-052625-965469
Measurements:
- startup: listening 1ms; health 63ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 62ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 62ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 995.1 MB; tracked total 1938.7 MB; max CPU 272%; samples 87; roles gateway-tree 1164.4MB/635.9%, gateway 995.1MB/272%, uncategorized 193.7MB/423.9%, command-tree 702.4MB/280.1%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2688ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 14/14/13
- Violations:
  - gateway max CPU interval \[226.1%, 272%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 212%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[226.1%, 635.9%\] crosses threshold 300%; CPU measurement is inconclusive
  - status-cli max CPU interval \[163.3%, 280.1%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260924-052625-965469/kova-agent-cold-warm-message-2c26dd1d-kova-260924-052625-965469
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1294.6 MB; tracked total 1468.9 MB; max CPU 307.7%; samples 106; roles agent-cli 1397.3MB/343.4%, command-tree 1397.3MB/343.4%, agent-process 1294.6MB/307.7%, status-cli 822.9MB/332.7%; performance thresholds skipped 15 (instrumented)
- agent: turn 10975ms; cold/warm 9813ms/10975ms; cold-warm delta 0ms; pre-provider 9935ms; provider 1ms; metadata scans 16 (604.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10916.9ms; max 10975ms; pre-provider p95 9884.95ms
- agent CLI attribution: cold known 5558ms / unattributed 3376ms; warm known 6649ms / unattributed 3286ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2993.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 48/48/18
- Violations:
  - agent-cli max CPU interval \[285.7%, 343.4%\] crosses threshold 300%; CPU measurement is inconclusive
  - agent-process max CPU interval \[285.7%, 307.7%\] crosses threshold 300%; CPU measurement is inconclusive
- Agent turns:
  - cold: total 9813ms; pre-provider 8934ms; provider 2ms; post-provider 877ms; response true
    - active window: metadata scans 9 (336.16ms total, max 57.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8934ms; provider 2ms; post-provider 877ms; unknown 5427.87ms; source agent.prepare 2782.29ms; plugins.metadata.scan 723.84ms
  - warm: total 10975ms; pre-provider 9935ms; provider 1ms; post-provider 1039ms; response true
    - active window: metadata scans 7 (268.83ms total, max 84.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9935ms; provider 1ms; post-provider 1039ms; unknown 6428.87ms; source agent.prepare 2782.29ms; plugins.metadata.scan 723.84ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8934 ms | 5558 ms | 3376 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260924-052625-965469/kova-agent-cold-warm-message-2c26dd1d-kova-260924-052625-965469/openclaw/timeline.jsonl |
  | warm | 9935 ms | 6649 ms | 3286 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260924-052625-965469/kova-agent-cold-warm-message-2c26dd1d-kova-260924-052625-965469/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 4255 ms | 1603 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1722 ms | 817 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1648 ms | 600 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 334 ms | 57 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 69 ms | 69 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 5597 ms | 2994 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2032 ms | 908 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1060 ms | 541 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 271 ms | 84 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 72 ms | 72 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260924-052625-965469-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260924-052625-965469-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260924-052625-965469-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260924-052625-965469/kova-gateway-performance-man-d48bd949-kova-260924-052625-965469
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260924-052625-965469/kova-agent-cold-warm-message-2c26dd1d-kova-260924-052625-965469

## Target Cleanup

- Runtime: `kova-local-muf3a5bd-3r2-6782e7af`
- Result: removed
- Duration: 508ms

