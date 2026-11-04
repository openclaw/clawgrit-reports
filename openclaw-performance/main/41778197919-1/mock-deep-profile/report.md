# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm agent turn took 17946ms, over threshold 15000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm agent turn took 17946ms, over threshold 15000ms |
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
| Run ID | `kova-261104-051820-14bf46` |
| Generated | 2026-11-04T05:29:39.687Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[219.2%, 366.1%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 191 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree max CPU interval \[400.6%, 477%\] crosses threshold 450%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1961.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 17946ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1961.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (649ms), but OpenClaw spent 16022ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1961.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 191ms | 1622.5MB | n/a | 229.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 424% | 16278ms | 17946ms | 14584ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 191ms | 1622.5 MB | 2623.7 MB | n/a | n/a | status-cli max CPU interval \[219.2%, 366.1%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2236.3 MB | 16278ms | 17946ms | command-tree max CPU interval \[400.6%, 477%\] crosses threshold 450%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2161.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 477% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1961.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 424% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1726.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 265.9% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 95.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 424% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1622.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 229.5% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1269.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 413.5% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 506.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 184.4% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 321.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 234.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261104-051820-14bf46/kova-gateway-performance-man-d48bd949-kova-261104-051820-14bf46
Measurements:
- startup: listening 1ms; health 191ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 190ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 190ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1622.5 MB; tracked total 2623.7 MB; max CPU 229.5%; samples 128; roles gateway-tree 1726.3MB/265.9%, command-tree 887.9MB/366.1%, gateway 1622.5MB/229.5%, status-cli 887.9MB/366.1%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2227.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/6
- Violations:
  - status-cli max CPU interval \[219.2%, 366.1%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261104-051820-14bf46/kova-agent-cold-warm-message-2c26dd1d-kova-261104-051820-14bf46
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1961.9 MB; tracked total 2236.3 MB; max CPU 424%; samples 176; roles command-tree 2161.8MB/477%, agent-process 1961.9MB/424%, status-cli 1269.4MB/413.5%, tool-runtime 95.5MB/424%; performance thresholds skipped 15 (instrumented)
- agent: turn 17946ms; cold/warm 16278ms/17946ms; cold-warm delta 0ms; pre-provider 16022ms; provider 649ms; metadata scans 14 (529.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 17862.6ms; max 17946ms; pre-provider p95 15950.1ms
- agent CLI attribution: cold known 8753ms / unattributed 5831ms; warm known 11286ms / unattributed 4736ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3223.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 71/45/3
- Violations:
  - command-tree max CPU interval \[400.6%, 477%\] crosses threshold 450%; CPU measurement is inconclusive
  - warm agent turn took 17946ms, over threshold 15000ms
  - warm provider was fast (649ms), but OpenClaw spent 16022ms before provider work.
- Agent turns:
  - cold: total 16278ms; pre-provider 14584ms; provider 3ms; post-provider 1691ms; response true
    - active window: metadata scans 7 (240.63ms total, max 73.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14584ms; provider 3ms; post-provider 1691ms; unknown 6647.65ms; source agent.prepare 7242.51ms; plugins.metadata.scan 693.84ms
  - warm: total 17946ms; pre-provider 16022ms; provider 649ms; post-provider 1275ms; response true
    - active window: metadata scans 7 (289.1ms total, max 116.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 16022ms; provider 649ms; post-provider 1275ms; unknown 8085.65ms; source agent.prepare 7242.51ms; plugins.metadata.scan 693.84ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 14584 ms | 8753 ms | 5831 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261104-051820-14bf46/kova-agent-cold-warm-message-2c26dd1d-kova-261104-051820-14bf46/openclaw/timeline.jsonl |
  | warm | 16022 ms | 11286 ms | 4736 ms | 649 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261104-051820-14bf46/kova-agent-cold-warm-message-2c26dd1d-kova-261104-051820-14bf46/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 4564 ms | 1480 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3813 ms | 1745 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2915 ms | 1188 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 297 ms | 297 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 242 ms | 74 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 5356 ms | 3223 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 4542 ms | 1514 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4330 ms | 1315 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 290 ms | 117 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 289 ms | 289 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261104-051820-14bf46-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261104-051820-14bf46-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261104-051820-14bf46-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261104-051820-14bf46/kova-gateway-performance-man-d48bd949-kova-261104-051820-14bf46
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261104-051820-14bf46/kova-agent-cold-warm-message-2c26dd1d-kova-261104-051820-14bf46

## Target Cleanup

- Runtime: `kova-local-mw1o1obc-47x-943be896`
- Result: removed
- Duration: 608ms

