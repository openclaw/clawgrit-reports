# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1800.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway 1800.3 MB, gateway-tree 1530.9 MB, command-tree 897.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1800.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway 1800.3 MB, gateway-tree 1530.9 MB, command-tree 897.1 MB |
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
| Run ID | `kova-261122-051800-2c8ff4` |
| Generated | 2026-11-22T05:37:41.870Z |
| Mode | execution |
| Target | `local-build:/home/runner/work/openclaw/openclaw` |
| Platform | linux 7.0.0-1014-aws (x64) · v24.22.1 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1800.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway 1800.3 MB, gateway-tree 1530.9 MB, command-tree 897.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3017 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1530.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 3017 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree max CPU interval \[288.3%, 564.4%\] crosses threshold 450%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1844.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[288.3%, 310.7%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1844.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 28810ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1844.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (2ms), but OpenClaw spent 25963ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1844.8 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 3017ms | 1800.3MB | n/a | 267.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 310.7% | 27222ms | 28810ms | 23641ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 3017ms | 1800.3 MB | 2500.9 MB | n/a | n/a | gateway peak RSS 1800.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway 1800.3 MB, gateway-tree 1530.9 MB, command-tree 897.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2347 MB | 27222ms | 28810ms | command-tree max CPU interval \[288.3%, 564.4%\] crosses threshold 450%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2273.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 564.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1844.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 310.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1297.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 491.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1800.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 267.2% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 1530.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 336.3% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 69.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 310.7% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 603.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 235% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 550.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 294.9% (scenario agent-cold-warm-message/mock-openai-provider)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU | Settled RSS |
|---|---|---:|---:|---|
| gateway-performance / cold-start | complete | 2028.5 MB | 460.1% | 1429.8 MB at +120.0 s |
| gateway-performance / warm-restart | complete | 1927.6 MB | 452.4% | — |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261122-051800-2c8ff4/kova-gateway-performance-man-d48bd949-kova-261122-051800-2c8ff4
Measurements:
- startup: listening 1ms; health 3017ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 117ms; post-ready p95 2ms; failures 44; final failures 0; slowest startup-sample/warm-restart 156ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1800.3 MB; tracked total 2500.9 MB; max CPU 267.2%; samples 164; roles gateway 1800.3MB/267.2%, command-tree 897.1MB/419.8%, gateway-tree 1530.9MB/336.3%, status-cli 897.1MB/377.5%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 3187.07ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 14/14/7
- Violations:
  - gateway peak RSS 1800.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway 1800.3 MB, gateway-tree 1530.9 MB, command-tree 897.1 MB
  - gateway-tree peak RSS 1530.9 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261122-051800-2c8ff4/kova-agent-cold-warm-message-2c26dd1d-kova-261122-051800-2c8ff4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1844.8 MB; tracked total 2347 MB; max CPU 310.7%; samples 276; roles command-tree 2273.3MB/564.4%, agent-process 1844.8MB/310.7%, status-cli 1297.5MB/491.4%, agent-cli 550.6MB/294.9%; performance thresholds skipped 17 (instrumented)
- agent: turn 28810ms; cold/warm 27222ms/28810ms; cold-warm delta 0ms; pre-provider 25963ms; provider 2ms; metadata scans 14 (909.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 28730.6ms; max 28810ms; pre-provider p95 25846.9ms
- agent CLI attribution: cold known 15348ms / unattributed 8293ms; warm known 17611ms / unattributed 8352ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 4531.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 77/40/5
- Violations:
  - command-tree max CPU interval \[288.3%, 564.4%\] crosses threshold 450%; CPU measurement is inconclusive
  - agent-process max CPU interval \[288.3%, 310.7%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm agent turn took 28810ms, over threshold 15000ms
  - warm provider was fast (2ms), but OpenClaw spent 25963ms before provider work.
- Agent turns:
  - cold: total 27222ms; pre-provider 23641ms; provider 4ms; post-provider 3577ms; response true
    - active window: metadata scans 7 (430.67ms total, max 150.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 23641ms; provider 4ms; post-provider 3577ms; unknown 8006.81ms; source agent.prepare 14472.27ms; plugins.metadata.scan 1161.92ms
  - warm: total 28810ms; pre-provider 25963ms; provider 2ms; post-provider 2845ms; response true
    - active window: metadata scans 7 (479.04ms total, max 154.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 25963ms; provider 2ms; post-provider 2845ms; unknown 10328.81ms; source agent.prepare 14472.27ms; plugins.metadata.scan 1161.92ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 23641 ms | 15348 ms | 8293 ms | 4 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261122-051800-2c8ff4/kova-agent-cold-warm-message-2c26dd1d-kova-261122-051800-2c8ff4/openclaw/timeline.jsonl |
  | warm | 25963 ms | 17611 ms | 8352 ms | 2 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261122-051800-2c8ff4/kova-agent-cold-warm-message-2c26dd1d-kova-261122-051800-2c8ff4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 7712 ms | 2719 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 6586 ms | 2391 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 6537 ms | 3484 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 469 ms | 469 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x3 | 5 | 0 | 403 ms | 151 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 8040 ms | 4531 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 7888 ms | 3024 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 7629 ms | 2715 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 481 ms | 481 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 479 ms | 154 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |

## Artifacts

- markdown-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261122-051800-2c8ff4-diagnostic.md
- json-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261122-051800-2c8ff4-diagnostic.json
- summary-json: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261122-051800-2c8ff4-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261122-051800-2c8ff4/kova-gateway-performance-man-d48bd949-kova-261122-051800-2c8ff4
- collector-root agent-cold-warm-message#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261122-051800-2c8ff4/kova-agent-cold-warm-message-2c26dd1d-kova-261122-051800-2c8ff4

## Target Cleanup

- Runtime: `kova-local-mwrdylc6-2dr-530f046c`
- Result: removed
- Duration: 438ms

