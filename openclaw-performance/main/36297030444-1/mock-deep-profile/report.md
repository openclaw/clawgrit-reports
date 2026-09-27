# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1200.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1367.8 MB, gateway 1200.8 MB, command-tree 740.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1200.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1367.8 MB, gateway 1200.8 MB, command-tree 740.4 MB |
| Blocking findings | 9 |
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
| Run ID | `kova-260927-052421-462006` |
| Generated | 2026-09-27T05:27:33.934Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1200.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1367.8 MB, gateway 1200.8 MB, command-tree 740.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 164 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1367.8 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 164 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[146.9%, 259.1%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 164 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1375.6 MB, command-tree 1375.6 MB, status-cli 802.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[275.5%, 334.6%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260927-052421-462006/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-462006/resource-samples/cold-agent-turn-1.jsonl |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 164ms | 1200.8MB | n/a | 225.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | n/a | 9403ms | 10423ms | 8409ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 164ms | 1200.8 MB | 2109.3 MB | n/a | n/a | gateway peak RSS 1200.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1367.8 MB, gateway 1200.8 MB, command-tree 740.4 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1448.7 MB | 9403ms | 10423ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1375.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 334.6% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1375.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 334.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1367.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 246.3% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 802.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 304.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1200.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 225.8% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 514 MB (scenario gateway-performance/many-bundled-plugins); CPU 228.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 404.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.7% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 366.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 191.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260927-052421-462006/kova-gateway-performance-man-d48bd949-kova-260927-052421-462006
Measurements:
- startup: listening 1ms; health 164ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 163ms; post-ready p95 4ms; failures 0; final failures 0; slowest startup-sample/cold-start 163ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1200.8 MB; tracked total 2109.3 MB; max CPU 225.8%; samples 109; roles gateway-tree 1367.8MB/246.3%, command-tree 740.4MB/262.5%, gateway 1200.8MB/225.8%, status-cli 740.4MB/259.1%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1489.62ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 14/14/13
- Violations:
  - gateway peak RSS 1200.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1367.8 MB, gateway 1200.8 MB, command-tree 740.4 MB
  - gateway-tree peak RSS 1367.8 MB exceeded threshold 1200 MB
  - status-cli max CPU interval \[146.9%, 259.1%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260927-052421-462006/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-462006
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1448.7 MB; max CPU unknown; samples 108; roles agent-cli 1375.6MB/334.6%, command-tree 1375.6MB/334.9%, status-cli 802.3MB/304.5%, mock-provider 73.3MB/20.4%; performance thresholds skipped 14 (instrumented)
- agent: turn 10423ms; cold/warm 9403ms/10423ms; cold-warm delta 0ms; pre-provider 9240ms; provider 1ms; metadata scans 8 (286.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 10372ms; max 10423ms; pre-provider p95 9198.45ms
- agent CLI attribution: cold known 5032ms / unattributed 3377ms; warm known 5246ms / unattributed 3994ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 954.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 39/39/22
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1375.6 MB, command-tree 1375.6 MB, status-cli 802.3 MB
  - agent-cli max CPU interval \[275.5%, 334.6%\] crosses threshold 300%; CPU measurement is inconclusive
- Agent turns:
  - cold: total 9403ms; pre-provider 8409ms; provider 2ms; post-provider 992ms; response true
    - active window: metadata scans 4 (134.05ms total, max 61.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8409ms; provider 2ms; post-provider 992ms; unknown 4588.25ms; source agent.prepare 3386.81ms; plugins.metadata.scan 433.94ms
  - warm: total 10423ms; pre-provider 9240ms; provider 1ms; post-provider 1182ms; response true
    - active window: metadata scans 4 (152.51ms total, max 73.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9240ms; provider 1ms; post-provider 1182ms; unknown 5419.25ms; source agent.prepare 3386.81ms; plugins.metadata.scan 433.94ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8409 ms | 5032 ms | 3377 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260927-052421-462006/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-462006/openclaw/timeline.jsonl |
  | warm | 9240 ms | 5246 ms | 3994 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260927-052421-462006/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-462006/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2822 ms | 746 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1847 ms | 752 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1611 ms | 710 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 134 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 73 ms | 73 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2598 ms | 672 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2019 ms | 922 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1778 ms | 742 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` | 4 | 0 | 153 ms | 74 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 69 ms | 69 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260927-052421-462006-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260927-052421-462006-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260927-052421-462006-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260927-052421-462006/kova-gateway-performance-man-d48bd949-kova-260927-052421-462006
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260927-052421-462006/kova-agent-cold-warm-message-2c26dd1d-kova-260927-052421-462006

## Target Cleanup

- Runtime: `kova-local-mujdj299-3st-64ef2281`
- Result: removed
- Duration: 575ms

