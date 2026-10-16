# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 2070.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2275.3 MB, gateway 2070.8 MB, command-tree 1034.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 2070.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2275.3 MB, gateway 2070.8 MB, command-tree 1034.4 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261016-052449-cdf941` |
| Generated | 2026-10-16T05:35:26.866Z |
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
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 2070.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2275.3 MB, gateway 2070.8 MB, command-tree 1034.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 34 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2275.3 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 34 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[280.4%, 365.5%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1872.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[280.4%, 302.5%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1872.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 17493ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1872.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (184ms), but OpenClaw spent 15871ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1872.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 34ms | 2070.8MB | n/a | 298.7% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 302.5% | 17719ms | 17493ms | 15871ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 34ms | 2070.8 MB | 3033.4 MB | n/a | n/a | gateway peak RSS 2070.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2275.3 MB, gateway 2070.8 MB, command-tree 1034.4 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2156.9 MB | 17719ms | 17493ms | agent-cli max CPU interval \[280.4%, 365.5%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2275.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 329.3% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 2083.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 370.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1117.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 370.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 2070.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 298.7% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 318.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 365.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1872.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 302.5% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 621.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 244.8% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 529.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 196.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261016-052449-cdf941/kova-gateway-performance-man-d48bd949-kova-261016-052449-cdf941
Measurements:
- startup: listening 1ms; health 34ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 33ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 33ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 2070.8 MB; tracked total 3033.4 MB; max CPU 298.7%; samples 140; roles gateway-tree 2275.3MB/329.3%, command-tree 1034.4MB/337.5%, gateway 2070.8MB/298.7%, status-cli 1034.4MB/337.5%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1917.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 28/28/14
- Violations:
  - gateway peak RSS 2070.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2275.3 MB, gateway 2070.8 MB, command-tree 1034.4 MB
  - gateway-tree peak RSS 2275.3 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261016-052449-cdf941/kova-agent-cold-warm-message-2c26dd1d-kova-261016-052449-cdf941
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1872.1 MB; tracked total 2156.9 MB; max CPU 302.5%; samples 174; roles command-tree 2083.5MB/370.4%, agent-process 1872.1MB/302.5%, status-cli 1117.1MB/370.4%, agent-cli 318.6MB/365.5%; performance thresholds skipped 15 (instrumented)
- agent: turn 17719ms; cold/warm 17719ms/17493ms; cold-warm delta 226ms; pre-provider 15871ms; provider 184ms; metadata scans 14 (491.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 17707.7ms; max 17719ms; pre-provider p95 16175ms
- agent CLI attribution: cold known 9278ms / unattributed 6593ms; warm known 10519ms / unattributed 5672ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3548.71ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 65/45/10
- Violations:
  - agent-cli max CPU interval \[280.4%, 365.5%\] crosses threshold 300%; CPU measurement is inconclusive
  - agent-process max CPU interval \[280.4%, 302.5%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm agent turn took 17493ms, over threshold 15000ms
  - cold provider was fast (184ms), but OpenClaw spent 15871ms before provider work.
- Agent turns:
  - cold: total 17719ms; pre-provider 15871ms; provider 184ms; post-provider 1664ms; response true
    - active window: metadata scans 7 (223.29ms total, max 81.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 15871ms; provider 184ms; post-provider 1664ms; unknown 6913.06ms; source agent.prepare 8272.33ms; plugins.metadata.scan 685.61ms
  - warm: total 17493ms; pre-provider 16191ms; provider 1ms; post-provider 1301ms; response true
    - active window: metadata scans 7 (268.21ms total, max 97.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 16191ms; provider 1ms; post-provider 1301ms; unknown 7233.06ms; source agent.prepare 8272.33ms; plugins.metadata.scan 685.61ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 15871 ms | 9278 ms | 6593 ms | 184 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261016-052449-cdf941/kova-agent-cold-warm-message-2c26dd1d-kova-261016-052449-cdf941/openclaw/timeline.jsonl |
  | warm | 16191 ms | 10519 ms | 5672 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261016-052449-cdf941/kova-agent-cold-warm-message-2c26dd1d-kova-261016-052449-cdf941/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4624 ms | 2103 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4334 ms | 1564 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3845 ms | 1002 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 223 ms | 81 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 6060 ms | 3549 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3939 ms | 1406 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3717 ms | 1066 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 269 ms | 98 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261016-052449-cdf941-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261016-052449-cdf941-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261016-052449-cdf941-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261016-052449-cdf941/kova-gateway-performance-man-d48bd949-kova-261016-052449-cdf941
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261016-052449-cdf941/kova-agent-cold-warm-message-2c26dd1d-kova-261016-052449-cdf941

## Target Cleanup

- Runtime: `kova-local-mvaiwtzc-3cx-533c1e97`
- Result: removed
- Duration: 604ms

