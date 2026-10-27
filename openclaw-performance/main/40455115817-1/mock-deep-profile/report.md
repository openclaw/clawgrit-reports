# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1843.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1946.5 MB, gateway 1843.8 MB, command-tree 1138.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1843.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1946.5 MB, gateway 1843.8 MB, command-tree 1138.2 MB |
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
| Run ID | `kova-261027-052603-16231e` |
| Generated | 2026-10-27T05:36:20.874Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1843.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1946.5 MB, gateway 1843.8 MB, command-tree 1138.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 26 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1946.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 26 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 15398ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2076.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (308ms), but OpenClaw spent 14005ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2076.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 26ms | 1843.8MB | n/a | 244% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 330.3% | 14663ms | 15398ms | 13174ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 26ms | 1843.8 MB | 2796.6 MB | n/a | n/a | gateway peak RSS 1843.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1946.5 MB, gateway 1843.8 MB, command-tree 1138.2 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2345.3 MB | 14663ms | 15398ms | warm agent turn took 15398ms, over threshold 15000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2273.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 396.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2076.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 330.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1240.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 333.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1946.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 260% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1843.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 244% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 516.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 192.8% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 321.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213.3% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 468.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 183.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261027-052603-16231e/kova-gateway-performance-man-d48bd949-kova-261027-052603-16231e
Measurements:
- startup: listening 0ms; health 26ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 26ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 26ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1843.8 MB; tracked total 2796.6 MB; max CPU 244%; samples 112; roles gateway-tree 1946.5MB/260%, command-tree 1138.2MB/316.6%, gateway 1843.8MB/244%, status-cli 1138.2MB/316.6%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2431.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 24/24/13
- Violations:
  - gateway peak RSS 1843.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1946.5 MB, gateway 1843.8 MB, command-tree 1138.2 MB
  - gateway-tree peak RSS 1946.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261027-052603-16231e/kova-agent-cold-warm-message-2c26dd1d-kova-261027-052603-16231e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 2076.4 MB; tracked total 2345.3 MB; max CPU 330.3%; samples 156; roles command-tree 2273.5MB/396.4%, agent-process 2076.4MB/330.3%, status-cli 1240.4MB/333.9%, agent-cli 321.8MB/213.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 15398ms; cold/warm 14663ms/15398ms; cold-warm delta 0ms; pre-provider 14005ms; provider 308ms; metadata scans 14 (482.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15361.25ms; max 15398ms; pre-provider p95 13963.45ms
- agent CLI attribution: cold known 8698ms / unattributed 4476ms; warm known 9603ms / unattributed 4402ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2605.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 80/41/4
- Violations:
  - warm agent turn took 15398ms, over threshold 15000ms
  - warm provider was fast (308ms), but OpenClaw spent 14005ms before provider work.
- Agent turns:
  - cold: total 14663ms; pre-provider 13174ms; provider 3ms; post-provider 1486ms; response true
    - active window: metadata scans 7 (258.48ms total, max 80.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13174ms; provider 3ms; post-provider 1486ms; unknown 4366.75ms; source agent.prepare 8170.63ms; plugins.metadata.scan 636.62ms
  - warm: total 15398ms; pre-provider 14005ms; provider 308ms; post-provider 1085ms; response true
    - active window: metadata scans 7 (223.72ms total, max 70.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14005ms; provider 308ms; post-provider 1085ms; unknown 5197.75ms; source agent.prepare 8170.63ms; plugins.metadata.scan 636.62ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 13174 ms | 8698 ms | 4476 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261027-052603-16231e/kova-agent-cold-warm-message-2c26dd1d-kova-261027-052603-16231e/openclaw/timeline.jsonl |
  | warm | 14005 ms | 9603 ms | 4402 ms | 308 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261027-052603-16231e/kova-agent-cold-warm-message-2c26dd1d-kova-261027-052603-16231e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4032 ms | 1677 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3616 ms | 1177 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3402 ms | 1579 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 310 ms | 310 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 258 ms | 81 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4385 ms | 2605 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4141 ms | 1622 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3229 ms | 993 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 313 ms | 313 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 224 ms | 70 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261027-052603-16231e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261027-052603-16231e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261027-052603-16231e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261027-052603-16231e/kova-gateway-performance-man-d48bd949-kova-261027-052603-16231e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261027-052603-16231e/kova-agent-cold-warm-message-2c26dd1d-kova-261027-052603-16231e

## Target Cleanup

- Runtime: `kova-local-mvq8ssgd-3es-e3e129f1`
- Result: removed
- Duration: 524ms

