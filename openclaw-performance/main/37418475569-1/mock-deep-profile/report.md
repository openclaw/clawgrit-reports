# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1270.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1556.8 MB, gateway 1270.4 MB, command-tree 677.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1270.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1556.8 MB, gateway 1270.4 MB, command-tree 677.1 MB |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 119 total, 0 missing, 3 failed
- Categories: command: 101, artifact: 2, cleanup: 2, collector: 2, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | command:api-latency:1 | failed | command exited 1 |
| gateway-performance | command:api-latency:2 | failed | not executed because command:api-latency:1 in phase "api-latency" failed: ocm @'kova-gateway-performance-man-d48bd949-kova-261006-052832-065010' -- status (command exited 1) |
| gateway-performance | command:api-latency:3 | failed | not executed because command:api-latency:1 in phase "api-latency" failed: ocm @'kova-gateway-performance-man-d48bd949-kova-261006-052832-065010' -- status (command exited 1) |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261006-052832-065010` |
| Generated | 2026-10-06T05:37:52.514Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1270.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1556.8 MB, gateway 1270.4 MB, command-tree 677.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 80 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1556.8 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 80 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (3ms), but OpenClaw spent 12715ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1641.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 80ms | 1270.4MB | n/a | 238.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 324.8% | 14169ms | 13819ms | 12715ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 80ms | 1270.4 MB | 2261 MB | n/a | n/a | gateway peak RSS 1270.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1556.8 MB, gateway 1270.4 MB, command-tree 677.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1843.7 MB | 14169ms | 13819ms | cold provider was fast (3ms), but OpenClaw spent 12715ms before provider work. |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1771.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 370.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1641.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 324.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1140.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 340.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1556.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 272.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1270.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 238.1% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 292.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 192.6% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 212.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 27.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261006-052832-065010/kova-gateway-performance-man-d48bd949-kova-261006-052832-065010
Measurements:
- startup: listening 1ms; health 80ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 79ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 79ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1270.4 MB; tracked total 2261 MB; max CPU 238.1%; samples 61; roles gateway-tree 1556.8MB/272.8%, command-tree 677.1MB/294.5%, gateway 1270.4MB/238.1%, status-cli 677.1MB/294.5%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.main.gateway-run-select-environment 1045.93ms; embedded traces 0; liveness warnings 0; open spans 3 (0 required); node CPU/heap/trace 5/5/6
- Violations:
  - gateway peak RSS 1270.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1556.8 MB, gateway 1270.4 MB, command-tree 677.1 MB
  - gateway-tree peak RSS 1556.8 MB exceeded threshold 1440 MB
- Failed command: `ocm @'kova-gateway-performance-man-d48bd949-kova-261006-052832-065010' -- status`
- Failure: command exited with status 1

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261006-052832-065010/kova-agent-cold-warm-message-2c26dd1d-kova-261006-052832-065010
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1641.9 MB; tracked total 1843.7 MB; max CPU 324.8%; samples 143; roles command-tree 1771.7MB/370.9%, agent-process 1641.9MB/324.8%, status-cli 1140.7MB/340.3%, agent-cli 212.3MB/175.8%; performance thresholds skipped 15 (instrumented)
- agent: turn 14169ms; cold/warm 14169ms/13819ms; cold-warm delta 350ms; pre-provider 12715ms; provider 3ms; metadata scans 10 (357.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14151.5ms; max 14169ms; pre-provider p95 12714.3ms
- agent CLI attribution: cold known 6403ms / unattributed 6312ms; warm known 6554ms / unattributed 6147ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2078.32ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 65/47/10
- Violations:
  - cold provider was fast (3ms), but OpenClaw spent 12715ms before provider work.
- Agent turns:
  - cold: total 14169ms; pre-provider 12715ms; provider 3ms; post-provider 1451ms; response true
    - active window: metadata scans 5 (200.8ms total, max 61.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12715ms; provider 3ms; post-provider 1451ms; unknown 8541.36ms; source agent.prepare 3681.81ms; plugins.metadata.scan 491.83ms
  - warm: total 13819ms; pre-provider 12701ms; provider 3ms; post-provider 1115ms; response true
    - active window: metadata scans 5 (156.56ms total, max 72.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12701ms; provider 3ms; post-provider 1115ms; unknown 8527.36ms; source agent.prepare 3681.81ms; plugins.metadata.scan 491.83ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12715 ms | 6403 ms | 6312 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261006-052832-065010/kova-agent-cold-warm-message-2c26dd1d-kova-261006-052832-065010/openclaw/timeline.jsonl |
  | warm | 12701 ms | 6554 ms | 6147 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261006-052832-065010/kova-agent-cold-warm-message-2c26dd1d-kova-261006-052832-065010/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3446 ms | 1721 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2880 ms | 751 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1804 ms | 1018 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x4, `startup` | 5 | 0 | 200 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 78 ms | 78 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3166 ms | 2078 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2682 ms | 683 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1875 ms | 1149 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x4, `startup` | 5 | 0 | 157 ms | 72 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 94 ms | 94 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x4 | 4 | 0 | 27 ms | 15 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261006-052832-065010-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261006-052832-065010-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261006-052832-065010-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261006-052832-065010/kova-gateway-performance-man-d48bd949-kova-261006-052832-065010
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261006-052832-065010/kova-agent-cold-warm-message-2c26dd1d-kova-261006-052832-065010

## Target Cleanup

- Runtime: `kova-local-muw8n3e6-3tk-2d0e0497`
- Result: removed
- Duration: 535ms

