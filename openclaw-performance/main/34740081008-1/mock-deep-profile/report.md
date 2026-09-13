# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[227.2%, 251.6%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[227.2%, 251.6%\] crosses threshold 250%; CPU measurement is inconclusive |
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
| Run ID | `kova-260913-052545-0165a1` |
| Generated | 2026-09-13T05:28:11.754Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[227.2%, 251.6%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 13 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[151.8%, 243.2%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 13 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 731 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 13ms | 981.9MB | n/a | 251.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | BLOCKED:1 | n/a | 0MB | n/a | 239.3% | 5173ms | 6576ms | 4344ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 13ms | 981.9 MB | 1659.1 MB | n/a | n/a | gateway max CPU interval \[227.2%, 251.6%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 892.5 MB | 5173ms | 6576ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway: RSS 981.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 251.6% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 819.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 308.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 981.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 298.2% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 662.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 308.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 819.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 274% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 731 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 239.3% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 367.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 212.8% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 312.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 189.3% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260913-052545-0165a1/kova-gateway-performance-man-d48bd949-kova-260913-052545-0165a1
Measurements:
- startup: listening 2ms; health 13ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 11ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 11ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 981.9 MB; tracked total 1659.1 MB; max CPU 251.6%; samples 97; roles gateway 981.9MB/251.6%, gateway-tree 981.9MB/298.2%, command-tree 605MB/243.2%, status-cli 605MB/243.2%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 4367.42ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 12/12/12
- Violations:
  - gateway max CPU interval \[227.2%, 251.6%\] crosses threshold 250%; CPU measurement is inconclusive
  - status-cli max CPU interval \[151.8%, 243.2%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260913-052545-0165a1/kova-agent-cold-warm-message-2c26dd1d-kova-260913-052545-0165a1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 731 MB; tracked total 892.5 MB; max CPU 239.3%; samples 64; roles agent-cli 819.2MB/274%, command-tree 819.2MB/308.2%, status-cli 662.3MB/308.2%, agent-process 731MB/239.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 6576ms; cold/warm 5173ms/6576ms; cold-warm delta 0ms; pre-provider 6059ms; provider 2ms; metadata scans 8 (573.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6505.85ms; max 6576ms; pre-provider p95 5973.25ms
- agent CLI attribution: cold known 2904ms / unattributed 1440ms; warm known 3987ms / unattributed 2072ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1028.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 26/26/24
- Violations:
  - Product CPU interval evidence is incomplete
- Agent turns:
  - cold: total 5173ms; pre-provider 4344ms; provider 4ms; post-provider 825ms; response true
    - active window: metadata scans 6 (187.98ms total, max 54.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4344ms; provider 4ms; post-provider 825ms; unknown 2964.18ms; source plugins.metadata.scan 690.59ms; agent.prepare 689.23ms
  - warm: total 6576ms; pre-provider 6059ms; provider 2ms; post-provider 515ms; response true
    - active window: metadata scans 2 (385.22ms total, max 363.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6059ms; provider 2ms; post-provider 515ms; unknown 4679.18ms; source plugins.metadata.scan 690.59ms; agent.prepare 689.23ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4344 ms | 2904 ms | 1440 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260913-052545-0165a1/kova-agent-cold-warm-message-2c26dd1d-kova-260913-052545-0165a1/openclaw/timeline.jsonl |
  | warm | 6059 ms | 3987 ms | 2072 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260913-052545-0165a1/kova-agent-cold-warm-message-2c26dd1d-kova-260913-052545-0165a1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 2226 ms | 759 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1211 ms | 501 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 370 ms | 145 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 187 ms | 54 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 90 ms | 90 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 56 ms | 56 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2365 ms | 1029 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1421 ms | 631 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` | 2 | 0 | 385 ms | 364 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 318 ms | 111 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 150 ms | 150 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 102 ms | 102 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260913-052545-0165a1-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260913-052545-0165a1-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260913-052545-0165a1-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260913-052545-0165a1/kova-gateway-performance-man-d48bd949-kova-260913-052545-0165a1
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260913-052545-0165a1/kova-agent-cold-warm-message-2c26dd1d-kova-260913-052545-0165a1

## Target Cleanup

- Runtime: `kova-local-mtzdexms-41o-c23cce21`
- Result: removed
- Duration: 498ms

