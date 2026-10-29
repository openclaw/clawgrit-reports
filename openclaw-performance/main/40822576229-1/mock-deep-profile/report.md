# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1515.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1823.2 MB, gateway 1515.9 MB, command-tree 1227.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1515.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1823.2 MB, gateway 1515.9 MB, command-tree 1227.1 MB |
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
| Run ID | `kova-261029-051952-ba7a4b` |
| Generated | 2026-10-29T05:30:17.789Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1515.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1823.2 MB, gateway 1515.9 MB, command-tree 1227.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 27 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1823.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 27 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[279%, 303.8%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1943.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (517ms), but OpenClaw spent 12961ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1943.8 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 27ms | 1515.9MB | n/a | 272% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 303.8% | 13975ms | 14515ms | 11860ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 27ms | 1515.9 MB | 3121.6 MB | n/a | n/a | gateway peak RSS 1515.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1823.2 MB, gateway 1515.9 MB, command-tree 1227.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2219.6 MB | 13975ms | 14515ms | agent-process max CPU interval \[279%, 303.8%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2146.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 376.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1943.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 303.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1280.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 362.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1823.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 304% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1515.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 272% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 638.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 216.2% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 412.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 227.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 480.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261029-051952-ba7a4b/kova-gateway-performance-man-d48bd949-kova-261029-051952-ba7a4b
Measurements:
- startup: listening 0ms; health 27ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 27ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 27ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1515.9 MB; tracked total 3121.6 MB; max CPU 272%; samples 116; roles gateway-tree 1823.2MB/304%, command-tree 1227.1MB/329.6%, gateway 1515.9MB/272%, status-cli 1227.1MB/329.6%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2738.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 23/23/12
- Violations:
  - gateway peak RSS 1515.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1823.2 MB, gateway 1515.9 MB, command-tree 1227.1 MB
  - gateway-tree peak RSS 1823.2 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261029-051952-ba7a4b/kova-agent-cold-warm-message-2c26dd1d-kova-261029-051952-ba7a4b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1943.8 MB; tracked total 2219.6 MB; max CPU 303.8%; samples 149; roles command-tree 2146.4MB/376.6%, agent-process 1943.8MB/303.8%, status-cli 1280.9MB/362.3%, agent-cli 412.2MB/227.9%; performance thresholds skipped 15 (instrumented)
- agent: turn 14515ms; cold/warm 13975ms/14515ms; cold-warm delta 0ms; pre-provider 12961ms; provider 517ms; metadata scans 14 (495.9ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14488ms; max 14515ms; pre-provider p95 12905.95ms
- agent CLI attribution: cold known 7319ms / unattributed 4541ms; warm known 8985ms / unattributed 3976ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2748.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 74/45/4
- Violations:
  - agent-process max CPU interval \[279%, 303.8%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm provider was fast (517ms), but OpenClaw spent 12961ms before provider work.
- Agent turns:
  - cold: total 13975ms; pre-provider 11860ms; provider 2ms; post-provider 2113ms; response true
    - active window: metadata scans 7 (251.59ms total, max 82.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11860ms; provider 2ms; post-provider 2113ms; unknown 5763.75ms; source agent.prepare 5457.38ms; plugins.metadata.scan 638.87ms
  - warm: total 14515ms; pre-provider 12961ms; provider 517ms; post-provider 1037ms; response true
    - active window: metadata scans 7 (244.31ms total, max 90.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12961ms; provider 517ms; post-provider 1037ms; unknown 6864.75ms; source agent.prepare 5457.38ms; plugins.metadata.scan 638.87ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11860 ms | 7319 ms | 4541 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261029-051952-ba7a4b/kova-agent-cold-warm-message-2c26dd1d-kova-261029-051952-ba7a4b/openclaw/timeline.jsonl |
  | warm | 12961 ms | 8985 ms | 3976 ms | 517 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261029-051952-ba7a4b/kova-agent-cold-warm-message-2c26dd1d-kova-261029-051952-ba7a4b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 3668 ms | 1176 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3200 ms | 1537 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2496 ms | 1043 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 232 ms | 232 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 167 ms | 82 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4648 ms | 2748 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3143 ms | 993 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2962 ms | 978 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 244 ms | 91 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 242 ms | 242 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261029-051952-ba7a4b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261029-051952-ba7a4b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261029-051952-ba7a4b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261029-051952-ba7a4b/kova-gateway-performance-man-d48bd949-kova-261029-051952-ba7a4b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261029-051952-ba7a4b/kova-agent-cold-warm-message-2c26dd1d-kova-261029-051952-ba7a4b

## Target Cleanup

- Runtime: `kova-local-mvt3gjl3-3f7-00c51bf6`
- Result: removed
- Duration: 533ms

