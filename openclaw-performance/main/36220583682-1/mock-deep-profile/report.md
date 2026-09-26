# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 8 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 1, incomplete: 1
- Required obligations: 40 total, 1 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-resource-proof | missing | resource peak RSS measurement was not captured |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260926-052331-9de591` |
| Generated | 2026-09-26T05:26:21.561Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1237.3 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 101 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[171.3%, 299.3%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 101 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1370.6 MB, command-tree 1370.6 MB, status-cli 801 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[283.4%, 358.2%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260926-052331-9de591/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052331-9de591/resource-samples/cold-agent-turn-1.jsonl |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 101ms | 1069.8MB | n/a | 226.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | n/a | 8246ms | 8670ms | 7416ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 101ms | 1069.8 MB | 2045.4 MB | n/a | n/a | gateway-tree peak RSS 1237.3 MB exceeded threshold 1200 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1443.3 MB | 8246ms | 8670ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1370.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 358.2% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1370.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 358.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1237.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 242.2% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 801 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 309.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1069.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 226.2% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 515.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 220.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 388.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 187.8% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 358.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 194.4% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260926-052331-9de591/kova-gateway-performance-man-d48bd949-kova-260926-052331-9de591
Measurements:
- startup: listening 1ms; health 101ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 100ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 100ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1069.8 MB; tracked total 2045.4 MB; max CPU 226.2%; samples 91; roles gateway-tree 1237.3MB/242.2%, command-tree 736.8MB/299.3%, gateway 1069.8MB/226.2%, status-cli 736.8MB/299.3%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1174.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 14/14/13
- Violations:
  - gateway-tree peak RSS 1237.3 MB exceeded threshold 1200 MB
  - status-cli max CPU interval \[171.3%, 299.3%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260926-052331-9de591/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052331-9de591
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1443.3 MB; max CPU unknown; samples 92; roles agent-cli 1370.6MB/358.2%, command-tree 1370.6MB/358.2%, status-cli 801MB/309.8%, mock-provider 73.3MB/21.3%; performance thresholds skipped 14 (instrumented)
- agent: turn 8670ms; cold/warm 8246ms/8670ms; cold-warm delta 0ms; pre-provider 7761ms; provider 1ms; metadata scans 8 (237.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8648.8ms; max 8670ms; pre-provider p95 7743.75ms
- agent CLI attribution: cold known 4422ms / unattributed 2994ms; warm known 4448ms / unattributed 3313ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 971.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 41/41/18
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1370.6 MB, command-tree 1370.6 MB, status-cli 801 MB
  - agent-cli max CPU interval \[283.4%, 358.2%\] crosses threshold 300%; CPU measurement is inconclusive
- Agent turns:
  - cold: total 8246ms; pre-provider 7416ms; provider 2ms; post-provider 828ms; response true
    - active window: metadata scans 4 (118.53ms total, max 55.83ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7416ms; provider 2ms; post-provider 828ms; unknown 4068.49ms; source agent.prepare 2985.89ms; plugins.metadata.scan 361.62ms
  - warm: total 8670ms; pre-provider 7761ms; provider 1ms; post-provider 908ms; response true
    - active window: metadata scans 4 (119.44ms total, max 56.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7761ms; provider 1ms; post-provider 908ms; unknown 4413.49ms; source agent.prepare 2985.89ms; plugins.metadata.scan 361.62ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7416 ms | 4422 ms | 2994 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260926-052331-9de591/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052331-9de591/openclaw/timeline.jsonl |
  | warm | 7761 ms | 4448 ms | 3313 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260926-052331-9de591/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052331-9de591/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2450 ms | 665 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1564 ms | 805 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1499 ms | 565 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 56 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 58 ms | 58 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2310 ms | 604 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1736 ms | 793 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1421 ms | 497 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 56 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260926-052331-9de591-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260926-052331-9de591-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260926-052331-9de591-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260926-052331-9de591/kova-gateway-performance-man-d48bd949-kova-260926-052331-9de591
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260926-052331-9de591/kova-agent-cold-warm-message-2c26dd1d-kova-260926-052331-9de591

## Target Cleanup

- Runtime: `kova-local-muhy24px-3s7-fd1edc5f`
- Result: removed
- Duration: 461ms

