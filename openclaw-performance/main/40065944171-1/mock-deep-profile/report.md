# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1862.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2004.4 MB, gateway 1862.6 MB, command-tree 1081.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1862.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2004.4 MB, gateway 1862.6 MB, command-tree 1081.3 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261024-052341-ea4722` |
| Generated | 2026-10-24T05:33:19.616Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1862.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2004.4 MB, gateway 1862.6 MB, command-tree 1081.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 140 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2004.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 140 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[297.6%, 319.7%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1852.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 12970ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1852.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 140ms | 1862.6MB | n/a | 227.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 319.7% | 13892ms | 14301ms | 12322ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 140ms | 1862.6 MB | 2815.6 MB | n/a | n/a | gateway peak RSS 1862.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2004.4 MB, gateway 1862.6 MB, command-tree 1081.3 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2122.2 MB | 13892ms | 14301ms | agent-process max CPU interval \[297.6%, 319.7%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2049.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 369.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 2004.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 272.8% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1192.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 323.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1862.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 227.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1852.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 319.7% (scenario agent-cold-warm-message/mock-openai-provider)
- tool-runtime: RSS 100.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 319.7% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 628.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 208.2% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 486.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 179.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261024-052341-ea4722/kova-gateway-performance-man-d48bd949-kova-261024-052341-ea4722
Measurements:
- startup: listening 1ms; health 140ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 139ms; post-ready p95 1ms; failures 0; final failures 0; slowest startup-sample/cold-start 139ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1862.6 MB; tracked total 2815.6 MB; max CPU 227.9%; samples 114; roles gateway-tree 2004.4MB/272.8%, command-tree 1081.3MB/288.5%, gateway 1862.6MB/227.9%, status-cli 1081.3MB/288.5%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1827.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 28/28/15
- Violations:
  - gateway peak RSS 1862.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2004.4 MB, gateway 1862.6 MB, command-tree 1081.3 MB
  - gateway-tree peak RSS 2004.4 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261024-052341-ea4722/kova-agent-cold-warm-message-2c26dd1d-kova-261024-052341-ea4722
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1852.1 MB; tracked total 2122.2 MB; max CPU 319.7%; samples 150; roles command-tree 2049.5MB/369.9%, agent-process 1852.1MB/319.7%, status-cli 1192.9MB/323.2%, agent-cli 315.1MB/179.2%; performance thresholds skipped 15 (instrumented)
- agent: turn 14301ms; cold/warm 13892ms/14301ms; cold-warm delta 0ms; pre-provider 12970ms; provider 1ms; metadata scans 14 (544.3ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14280.55ms; max 14301ms; pre-provider p95 12937.6ms
- agent CLI attribution: cold known 7610ms / unattributed 4712ms; warm known 8635ms / unattributed 4335ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2573.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 77/44/4
- Violations:
  - agent-process max CPU interval \[297.6%, 319.7%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm provider was fast (1ms), but OpenClaw spent 12970ms before provider work.
- Agent turns:
  - cold: total 13892ms; pre-provider 12322ms; provider 2ms; post-provider 1568ms; response true
    - active window: metadata scans 7 (274.48ms total, max 97.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12322ms; provider 2ms; post-provider 1568ms; unknown 5971.42ms; source agent.prepare 5651.08ms; plugins.metadata.scan 699.5ms
  - warm: total 14301ms; pre-provider 12970ms; provider 1ms; post-provider 1330ms; response true
    - active window: metadata scans 7 (269.82ms total, max 110.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12970ms; provider 1ms; post-provider 1330ms; unknown 6619.42ms; source agent.prepare 5651.08ms; plugins.metadata.scan 699.5ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12322 ms | 7610 ms | 4712 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261024-052341-ea4722/kova-agent-cold-warm-message-2c26dd1d-kova-261024-052341-ea4722/openclaw/timeline.jsonl |
  | warm | 12970 ms | 8635 ms | 4335 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261024-052341-ea4722/kova-agent-cold-warm-message-2c26dd1d-kova-261024-052341-ea4722/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3578 ms | 1694 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 3066 ms | 971 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2731 ms | 906 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 289 ms | 289 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 275 ms | 97 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4556 ms | 2574 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2919 ms | 934 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2809 ms | 821 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 287 ms | 287 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 270 ms | 110 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261024-052341-ea4722-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261024-052341-ea4722-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261024-052341-ea4722-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261024-052341-ea4722/kova-gateway-performance-man-d48bd949-kova-261024-052341-ea4722
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261024-052341-ea4722/kova-agent-cold-warm-message-2c26dd1d-kova-261024-052341-ea4722

## Target Cleanup

- Runtime: `kova-local-mvlye6wv-3f6-44886ee0`
- Result: removed
- Duration: 612ms

