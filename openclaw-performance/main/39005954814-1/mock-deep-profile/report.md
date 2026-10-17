# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
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
| Run ID | `kova-261017-052252-27584a` |
| Generated | 2026-10-17T05:32:52.276Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 139 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1630.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1783.5 MB, gateway 1630.6 MB, command-tree 1185.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 139 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1783.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 139 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[282.4%, 312.3%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 16677ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (86ms), but OpenClaw spent 15081ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 139ms | 1630.6MB | n/a | 220.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 312.3% | 16927ms | 16677ms | 15081ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 139ms | 1630.6 MB | 3036.9 MB | n/a | n/a | Product CPU interval evidence is incomplete |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2187.2 MB | 16927ms | 16677ms | agent-process max CPU interval \[282.4%, 312.3%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2113.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 380.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1899 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 312.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1185.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 343.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1783.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 270.7% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1630.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 220.3% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 97.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 312.3% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 628 MB (scenario gateway-performance/many-bundled-plugins); CPU 233% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 537.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 196.7% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261017-052252-27584a/kova-gateway-performance-man-d48bd949-kova-261017-052252-27584a
Measurements:
- startup: listening 1ms; health 139ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 138ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 138ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1630.6 MB; tracked total 3036.9 MB; max CPU 220.3%; samples 119; roles gateway-tree 1783.5MB/270.7%, command-tree 1185.4MB/332.3%, gateway 1630.6MB/220.3%, status-cli 1185.4MB/322%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1631.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 28/28/14
- Violations:
  - Product CPU interval evidence is incomplete
  - gateway peak RSS 1630.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1783.5 MB, gateway 1630.6 MB, command-tree 1185.4 MB
  - gateway-tree peak RSS 1783.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261017-052252-27584a/kova-agent-cold-warm-message-2c26dd1d-kova-261017-052252-27584a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1899 MB; tracked total 2187.2 MB; max CPU 312.3%; samples 167; roles command-tree 2113.7MB/380.6%, agent-process 1899MB/312.3%, status-cli 1170.8MB/343.5%, agent-cli 313.4MB/226.2%; performance thresholds skipped 15 (instrumented)
- agent: turn 16927ms; cold/warm 16927ms/16677ms; cold-warm delta 250ms; pre-provider 15081ms; provider 86ms; metadata scans 14 (466.91ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 16914.5ms; max 16927ms; pre-provider p95 15229.2ms
- agent CLI attribution: cold known 8482ms / unattributed 6599ms; warm known 9875ms / unattributed 5362ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3047.73ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 67/47/6
- Violations:
  - agent-process max CPU interval \[282.4%, 312.3%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm agent turn took 16677ms, over threshold 15000ms
  - cold provider was fast (86ms), but OpenClaw spent 15081ms before provider work.
- Agent turns:
  - cold: total 16927ms; pre-provider 15081ms; provider 86ms; post-provider 1760ms; response true
    - active window: metadata scans 7 (215.75ms total, max 70.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 15081ms; provider 86ms; post-provider 1760ms; unknown 6347.27ms; source agent.prepare 8090.09ms; plugins.metadata.scan 643.64ms
  - warm: total 16677ms; pre-provider 15237ms; provider 1ms; post-provider 1439ms; response true
    - active window: metadata scans 7 (251.16ms total, max 84.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 15237ms; provider 1ms; post-provider 1439ms; unknown 6503.27ms; source agent.prepare 8090.09ms; plugins.metadata.scan 643.64ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 15081 ms | 8482 ms | 6599 ms | 86 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261017-052252-27584a/kova-agent-cold-warm-message-2c26dd1d-kova-261017-052252-27584a/openclaw/timeline.jsonl |
  | warm | 15237 ms | 9875 ms | 5362 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261017-052252-27584a/kova-agent-cold-warm-message-2c26dd1d-kova-261017-052252-27584a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4546 ms | 2044 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4257 ms | 1564 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2805 ms | 825 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 217 ms | 71 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 5510 ms | 3048 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3833 ms | 1447 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3728 ms | 1096 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 252 ms | 85 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261017-052252-27584a-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261017-052252-27584a-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261017-052252-27584a-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261017-052252-27584a/kova-gateway-performance-man-d48bd949-kova-261017-052252-27584a
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261017-052252-27584a/kova-agent-cold-warm-message-2c26dd1d-kova-261017-052252-27584a

## Target Cleanup

- Runtime: `kova-local-mvbya68g-3dl-51026697`
- Result: removed
- Duration: 559ms

