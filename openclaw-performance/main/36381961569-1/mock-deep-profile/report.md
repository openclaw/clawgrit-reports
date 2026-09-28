# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 7 |
| Warnings | 0 |
| Records | 2 (FAIL:1, BLOCKED:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260928-053550-99b1a2` |
| Generated | 2026-09-28T05:38:42.293Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 58 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1183.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1354.7 MB, gateway 1183.4 MB, command-tree 733.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 58 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU at least 302.2% exceeded threshold 250% (upper bound 308.4%) | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 58 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1354.7 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 58 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU at least 302.2% exceeded threshold 300% (upper bound 324.4%) | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 58 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[165.1%, 273%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 58 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1329.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 58ms | 1183.4MB | n/a | 308.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | BLOCKED:1 | n/a | 0MB | n/a | 293.9% | 8904ms | 8815ms | 8072ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 58ms | 1183.4 MB | 2081 MB | n/a | n/a | Product CPU interval evidence is incomplete |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1506.7 MB | 8904ms | 8815ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1433.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 334.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1354.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 324.4% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 741.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 329.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1329.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 293.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1183.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 308.4% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 517.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 216.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 396.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 184.2% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 362.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 193% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260928-053550-99b1a2/kova-gateway-performance-man-d48bd949-kova-260928-053550-99b1a2
Measurements:
- startup: listening 1ms; health 58ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 57ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 57ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1183.4 MB; tracked total 2081 MB; max CPU 308.4%; samples 95; roles gateway-tree 1354.7MB/324.4%, gateway 1183.4MB/308.4%, command-tree 733.7MB/303.8%, status-cli 733.7MB/273%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1629.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/14
- Violations:
  - Product CPU interval evidence is incomplete
  - gateway peak RSS 1183.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1354.7 MB, gateway 1183.4 MB, command-tree 733.7 MB
  - gateway max CPU at least 302.2% exceeded threshold 250% (upper bound 308.4%)
  - gateway-tree peak RSS 1354.7 MB exceeded threshold 1200 MB
  - gateway-tree max CPU at least 302.2% exceeded threshold 300% (upper bound 324.4%)
  - status-cli max CPU interval \[165.1%, 273%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260928-053550-99b1a2/kova-agent-cold-warm-message-2c26dd1d-kova-260928-053550-99b1a2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1329.6 MB; tracked total 1506.7 MB; max CPU 293.9%; samples 94; roles command-tree 1433.8MB/334.2%, agent-process 1329.6MB/293.9%, status-cli 741.4MB/329.1%, agent-cli 211MB/187.6%; performance thresholds skipped 17 (instrumented)
- agent: turn 8904ms; cold/warm 8904ms/8815ms; cold-warm delta 89ms; pre-provider 8072ms; provider 2ms; metadata scans 8 (255.6ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8899.55ms; max 8904ms; pre-provider p95 8064.85ms
- agent CLI attribution: cold known 5622ms / unattributed 2450ms; warm known 5205ms / unattributed 2724ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1704.51ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 40/40/20
- Violations:
  - Product CPU interval evidence is incomplete
- Agent turns:
  - cold: total 8904ms; pre-provider 8072ms; provider 2ms; post-provider 830ms; response true
    - active window: metadata scans 4 (130.12ms total, max 68.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8072ms; provider 2ms; post-provider 830ms; unknown 4691.04ms; source agent.prepare 3002.21ms; plugins.metadata.scan 378.75ms
  - warm: total 8815ms; pre-provider 7929ms; provider 1ms; post-provider 885ms; response true
    - active window: metadata scans 4 (125.48ms total, max 64.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7929ms; provider 1ms; post-provider 885ms; unknown 4548.04ms; source agent.prepare 3002.21ms; plugins.metadata.scan 378.75ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8072 ms | 5622 ms | 2450 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260928-053550-99b1a2/kova-agent-cold-warm-message-2c26dd1d-kova-260928-053550-99b1a2/openclaw/timeline.jsonl |
  | warm | 7929 ms | 5205 ms | 2724 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260928-053550-99b1a2/kova-agent-cold-warm-message-2c26dd1d-kova-260928-053550-99b1a2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2559 ms | 1532 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2523 ms | 683 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1652 ms | 701 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 129 ms | 68 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 60 ms | 60 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2606 ms | 1705 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2254 ms | 604 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1351 ms | 514 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 126 ms | 65 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 58 ms | 58 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260928-053550-99b1a2-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260928-053550-99b1a2-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260928-053550-99b1a2-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260928-053550-99b1a2/kova-gateway-performance-man-d48bd949-kova-260928-053550-99b1a2
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260928-053550-99b1a2/kova-agent-cold-warm-message-2c26dd1d-kova-260928-053550-99b1a2

## Target Cleanup

- Runtime: `kova-local-muktdodi-3sm-5f81bfbc`
- Result: removed
- Duration: 470ms

