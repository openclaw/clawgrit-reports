# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[216.3%, 273.6%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[216.3%, 273.6%\] crosses threshold 250%; CPU measurement is inconclusive |
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
| Run ID | `kova-260918-052346-6dc7e2` |
| Generated | 2026-09-18T05:26:17.803Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[216.3%, 273.6%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 140 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 151.7%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 140 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[216.3%, 311.3%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 140 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[139.6%, 219.8%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 140 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 140ms | 973.5MB | n/a | 273.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 223.4% | 5696ms | 6800ms | 5158ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 140ms | 973.5 MB | 1809.5 MB | n/a | n/a | gateway max CPU interval \[216.3%, 273.6%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1027.3 MB | 5696ms | 6800ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1040.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 311.3% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 973.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 273.6% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 954.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 270.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 954.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 270.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 854.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 223.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 734 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 237.1% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 377.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 189.6% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 349.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 187.7% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260918-052346-6dc7e2/kova-gateway-performance-man-d48bd949-kova-260918-052346-6dc7e2
Measurements:
- startup: listening 0ms; health 140ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 140ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 140ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 973.5 MB; tracked total 1809.5 MB; max CPU 273.6%; samples 76; roles gateway-tree 1040.3MB/311.3%, gateway 973.5MB/273.6%, command-tree 697.9MB/219.8%, status-cli 697.9MB/219.8%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1821.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 16/16/15
- Violations:
  - gateway max CPU interval \[216.3%, 273.6%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 151.7%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[216.3%, 311.3%\] crosses threshold 300%; CPU measurement is inconclusive
  - status-cli max CPU interval \[139.6%, 219.8%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260918-052346-6dc7e2/kova-agent-cold-warm-message-2c26dd1d-kova-260918-052346-6dc7e2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 854.9 MB; tracked total 1027.3 MB; max CPU 223.4%; samples 68; roles agent-cli 954.1MB/270.9%, command-tree 954.1MB/270.9%, agent-process 854.9MB/223.4%, status-cli 734MB/237.1%; performance thresholds skipped 17 (instrumented)
- agent: turn 6800ms; cold/warm 5696ms/6800ms; cold-warm delta 0ms; pre-provider 6211ms; provider 2ms; metadata scans 14 (551.43ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6744.8ms; max 6800ms; pre-provider p95 6158.35ms
- agent CLI attribution: cold known 3838ms / unattributed 1320ms; warm known 4426ms / unattributed 1785ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2123.51ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 32/32/27
- Agent turns:
  - cold: total 5696ms; pre-provider 5158ms; provider 3ms; post-provider 535ms; response true
    - active window: metadata scans 8 (300.39ms total, max 60.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5158ms; provider 3ms; post-provider 535ms; unknown 3641.35ms; source agent.prepare 825.48ms; plugins.metadata.scan 691.17ms
  - warm: total 6800ms; pre-provider 6211ms; provider 2ms; post-provider 587ms; response true
    - active window: metadata scans 6 (251.04ms total, max 59.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6211ms; provider 2ms; post-provider 587ms; unknown 4694.35ms; source agent.prepare 825.48ms; plugins.metadata.scan 691.17ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5158 ms | 3838 ms | 1320 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260918-052346-6dc7e2/kova-agent-cold-warm-message-2c26dd1d-kova-260918-052346-6dc7e2/openclaw/timeline.jsonl |
  | warm | 6211 ms | 4426 ms | 1785 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260918-052346-6dc7e2/kova-agent-cold-warm-message-2c26dd1d-kova-260918-052346-6dc7e2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x38 | 38 | 0 | 3698 ms | 1348 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1365 ms | 636 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 474 ms | 194 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 302 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 71 ms | 71 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 57 ms | 57 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x31 | 31 | 0 | 4697 ms | 2123 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1311 ms | 647 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 351 ms | 122 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x5, `startup` | 6 | 0 | 251 ms | 59 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 72 ms | 72 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 63 ms | 63 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260918-052346-6dc7e2-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260918-052346-6dc7e2-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260918-052346-6dc7e2-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260918-052346-6dc7e2/kova-gateway-performance-man-d48bd949-kova-260918-052346-6dc7e2
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260918-052346-6dc7e2/kova-agent-cold-warm-message-2c26dd1d-kova-260918-052346-6dc7e2

## Target Cleanup

- Runtime: `kova-local-mu6ijn2n-3pf-4dcde43e`
- Result: removed
- Duration: 491ms

