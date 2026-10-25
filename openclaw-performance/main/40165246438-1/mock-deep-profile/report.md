# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1997.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2210.2 MB, gateway 1997.6 MB, command-tree 1164.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1997.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2210.2 MB, gateway 1997.6 MB, command-tree 1164.3 MB |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261025-052310-ba2071` |
| Generated | 2026-10-25T05:33:24.391Z |
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
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1997.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2210.2 MB, gateway 1997.6 MB, command-tree 1164.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 105 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2210.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 105 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[293.7%, 318.7%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1958.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 15152ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1958.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (199ms), but OpenClaw spent 13772ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1958.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 105ms | 1997.6MB | n/a | 251.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 318.7% | 14179ms | 15152ms | 12950ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 105ms | 1997.6 MB | 3099.1 MB | n/a | n/a | gateway peak RSS 1997.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2210.2 MB, gateway 1997.6 MB, command-tree 1164.3 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2227.2 MB | 14179ms | 15152ms | agent-process max CPU interval \[293.7%, 318.7%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2210.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 307.2% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 2155.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 402.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1190.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 347.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1997.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 251.4% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1958.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 318.7% (scenario agent-cold-warm-message/mock-openai-provider)
- tool-runtime: RSS 100.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 318.7% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 639.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 208.4% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 522 MB (scenario gateway-performance/many-bundled-plugins); CPU 184% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261025-052310-ba2071/kova-gateway-performance-man-d48bd949-kova-261025-052310-ba2071
Measurements:
- startup: listening 0ms; health 105ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 104ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 104ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1997.6 MB; tracked total 3099.1 MB; max CPU 251.4%; samples 116; roles gateway-tree 2210.2MB/307.2%, command-tree 1164.3MB/313.9%, gateway 1997.6MB/251.4%, status-cli 1164.3MB/313.9%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2170.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 26/26/13
- Violations:
  - gateway peak RSS 1997.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2210.2 MB, gateway 1997.6 MB, command-tree 1164.3 MB
  - gateway-tree peak RSS 2210.2 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261025-052310-ba2071/kova-agent-cold-warm-message-2c26dd1d-kova-261025-052310-ba2071
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1958.2 MB; tracked total 2227.2 MB; max CPU 318.7%; samples 153; roles command-tree 2155.4MB/402.5%, agent-process 1958.2MB/318.7%, status-cli 1190.2MB/347.6%, agent-cli 318.6MB/197.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 15152ms; cold/warm 14179ms/15152ms; cold-warm delta 0ms; pre-provider 13772ms; provider 199ms; metadata scans 14 (404.22ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15103.35ms; max 15152ms; pre-provider p95 13730.9ms
- agent CLI attribution: cold known 7779ms / unattributed 5171ms; warm known 9297ms / unattributed 4475ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2993.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 77/44/4
- Violations:
  - agent-process max CPU interval \[293.7%, 318.7%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm agent turn took 15152ms, over threshold 15000ms
  - warm provider was fast (199ms), but OpenClaw spent 13772ms before provider work.
- Agent turns:
  - cold: total 14179ms; pre-provider 12950ms; provider 2ms; post-provider 1227ms; response true
    - active window: metadata scans 7 (217.23ms total, max 73.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12950ms; provider 2ms; post-provider 1227ms; unknown 6383.86ms; source agent.prepare 5994.84ms; plugins.metadata.scan 571.3ms
  - warm: total 15152ms; pre-provider 13772ms; provider 199ms; post-provider 1181ms; response true
    - active window: metadata scans 7 (186.99ms total, max 67.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13772ms; provider 199ms; post-provider 1181ms; unknown 7205.86ms; source agent.prepare 5994.84ms; plugins.metadata.scan 571.3ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12950 ms | 7779 ms | 5171 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261025-052310-ba2071/kova-agent-cold-warm-message-2c26dd1d-kova-261025-052310-ba2071/openclaw/timeline.jsonl |
  | warm | 13772 ms | 9297 ms | 4475 ms | 199 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261025-052310-ba2071/kova-agent-cold-warm-message-2c26dd1d-kova-261025-052310-ba2071/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3580 ms | 1733 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3273 ms | 994 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2912 ms | 995 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 232 ms | 232 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 219 ms | 74 ms |
  | cold | `cli.main.route-import` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 5139 ms | 2994 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3082 ms | 950 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3053 ms | 868 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 256 ms | 256 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 187 ms | 67 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261025-052310-ba2071-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261025-052310-ba2071-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261025-052310-ba2071-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261025-052310-ba2071/kova-gateway-performance-man-d48bd949-kova-261025-052310-ba2071
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261025-052310-ba2071/kova-agent-cold-warm-message-2c26dd1d-kova-261025-052310-ba2071

## Target Cleanup

- Runtime: `kova-local-mvndtdqu-3ed-80140abc`
- Result: removed
- Duration: 508ms

