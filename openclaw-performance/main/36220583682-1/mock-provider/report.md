# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 17 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 3, incomplete: 3
- Required obligations: 118 total, 3 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-resource-proof | missing | resource peak RSS measurement was not captured |
| agent-cold-warm-message | invariant:agent-cli-resource-proof | missing | resource peak RSS measurement was not captured |
| agent-cold-warm-message | invariant:agent-cli-resource-proof | missing | resource peak RSS measurement was not captured |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260926-052333-fb3a3d` |
| Generated | 2026-09-26T05:27:40.646Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 6 |
| Scenarios | 2 |
| States | 2 |
| FAIL | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1289.3 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 237 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1280.5 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 5 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1302.2 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 119 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1076.6 MB, command-tree 1076.6 MB, status-cli 526.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1076.6 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-8e2a29af-kova-260926-052333-fb3a3d/resource-samples/cold-agent-turn-1.jsonl |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1108.5 MB, command-tree 1108.5 MB, status-cli 614.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1108.5 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| info | Kova | report | 5 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 119ms | 1121.9MB | n/a | 235.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | 4633ms | 4716ms | 4240ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 237ms | 1121.9 MB | 1692.7 MB | n/a | n/a | gateway-tree peak RSS 1289.3 MB exceeded threshold 1200 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5ms | 1112.8 MB | 1699.7 MB | n/a | n/a | gateway-tree peak RSS 1280.5 MB exceeded threshold 1200 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 119ms | 1134.5 MB | 1727.8 MB | n/a | n/a | gateway-tree peak RSS 1302.2 MB exceeded threshold 1200 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1147.9 MB | 4633ms | 4716ms | Product CPU interval evidence is incomplete |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1180.4 MB | 4421ms | 4563ms | Product CPU interval evidence is incomplete |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1195 MB | 4711ms | 5029ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1302.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 252.3% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1134.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 236.3% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 1123.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1123.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 614.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 516.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 134.3% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 141.9% (scenario gateway-performance/many-bundled-plugins)
- mock-provider: RSS 72.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 10% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-gateway-performance-man-005107f3-kova-260926-052333-fb3a3d
Measurements:
- startup: listening 0ms; health 237ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 237ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 237ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1121.9 MB; tracked total 1692.7 MB; max CPU 235.8%; samples 34; roles gateway-tree 1289.3MB/251.8%, gateway 1121.9MB/235.8%, uncategorized 516.2MB/134.3%, command-tree 421.1MB/166.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1177.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1289.3 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-gateway-performance-man-1e8be6a8-kova-260926-052333-fb3a3d
Measurements:
- startup: listening 0ms; health 5ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 5ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 8ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1112.8 MB; tracked total 1699.7 MB; max CPU 236.3%; samples 33; roles gateway-tree 1280.5MB/252.3%, gateway 1112.8MB/236.3%, uncategorized 486.9MB/124.1%, command-tree 439.1MB/157.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1342.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1280.5 MB exceeded threshold 1200 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-gateway-performance-man-958fde53-kova-260926-052333-fb3a3d
Measurements:
- startup: listening 1ms; health 119ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 118ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 118ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1134.5 MB; tracked total 1727.8 MB; max CPU 228%; samples 33; roles gateway-tree 1302.2MB/244%, gateway 1134.5MB/228%, uncategorized 507.8MB/120.3%, command-tree 495.4MB/165.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1122.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1302.2 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-8e2a29af-kova-260926-052333-fb3a3d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1147.9 MB; max CPU unknown; samples 19; roles agent-cli 1076.6MB/213.7%, command-tree 1076.6MB/213.7%, status-cli 526.7MB/170.6%, mock-provider 72.4MB/8.4%
- agent: turn 4716ms; cold/warm 4633ms/4716ms; cold-warm delta 0ms; pre-provider 4342ms; provider 1ms; metadata scans 8 (212.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4711.85ms; max 4716ms; pre-provider p95 4336.9ms
- agent CLI attribution: cold known 2376ms / unattributed 1864ms; warm known 2360ms / unattributed 1982ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 471.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1076.6 MB, command-tree 1076.6 MB, status-cli 526.7 MB
  - agent-cli peak RSS 1076.6 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4633ms; pre-provider 4240ms; provider 3ms; post-provider 390ms; response true
    - active window: metadata scans 4 (107.42ms total, max 59.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4240ms; provider 3ms; post-provider 390ms; unknown 2288.63ms; source agent.prepare 1616.86ms; plugins.metadata.scan 334.51ms
  - warm: total 4716ms; pre-provider 4342ms; provider 1ms; post-provider 373ms; response true
    - active window: metadata scans 4 (105.46ms total, max 57.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4342ms; provider 1ms; post-provider 373ms; unknown 2390.63ms; source agent.prepare 1616.86ms; plugins.metadata.scan 334.51ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4240 ms | 2376 ms | 1864 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-8e2a29af-kova-260926-052333-fb3a3d/openclaw/timeline.jsonl |
  | warm | 4342 ms | 2360 ms | 1982 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-8e2a29af-kova-260926-052333-fb3a3d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1769 ms | 466 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 866 ms | 444 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 496 ms | 202 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 108 ms | 59 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1600 ms | 472 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 751 ms | 339 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 690 ms | 358 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 105 ms | 58 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 34 ms | 34 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-2ab680e0-kova-260926-052333-fb3a3d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1180.4 MB; max CPU unknown; samples 19; roles agent-cli 1108.5MB/208.6%, command-tree 1108.5MB/208.6%, status-cli 614.3MB/173.8%, mock-provider 72.4MB/7.4%
- agent: turn 4563ms; cold/warm 4421ms/4563ms; cold-warm delta 0ms; pre-provider 4164ms; provider 1ms; metadata scans 8 (201.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4555.9ms; max 4563ms; pre-provider p95 4158.15ms
- agent CLI attribution: cold known 2248ms / unattributed 1799ms; warm known 2286ms / unattributed 1878ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 462.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1108.5 MB, command-tree 1108.5 MB, status-cli 614.3 MB
  - agent-cli peak RSS 1108.5 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4421ms; pre-provider 4047ms; provider 2ms; post-provider 372ms; response true
    - active window: metadata scans 4 (99.97ms total, max 53.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4047ms; provider 2ms; post-provider 372ms; unknown 2171.09ms; source agent.prepare 1561.09ms; plugins.metadata.scan 314.82ms
  - warm: total 4563ms; pre-provider 4164ms; provider 1ms; post-provider 398ms; response true
    - active window: metadata scans 4 (101.57ms total, max 57.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4164ms; provider 1ms; post-provider 398ms; unknown 2288.09ms; source agent.prepare 1561.09ms; plugins.metadata.scan 314.82ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4047 ms | 2248 ms | 1799 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-2ab680e0-kova-260926-052333-fb3a3d/openclaw/timeline.jsonl |
  | warm | 4164 ms | 2286 ms | 1878 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-2ab680e0-kova-260926-052333-fb3a3d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 1705 ms | 463 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 822 ms | 415 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 459 ms | 204 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 100 ms | 53 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1517 ms | 442 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 739 ms | 341 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 673 ms | 356 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 103 ms | 58 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-67b331a3-kova-260926-052333-fb3a3d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1195 MB; max CPU unknown; samples 19; roles agent-cli 1123.7MB/200.9%, command-tree 1123.7MB/200.9%, status-cli 575.9MB/174.2%, mock-provider 72.5MB/8.9%
- agent: turn 5029ms; cold/warm 4711ms/5029ms; cold-warm delta 0ms; pre-provider 4588ms; provider 5ms; metadata scans 8 (209.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5013.1ms; max 5029ms; pre-provider p95 4574.85ms
- agent CLI attribution: cold known 2421ms / unattributed 1904ms; warm known 2498ms / unattributed 2090ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 507.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1123.7 MB, command-tree 1123.7 MB, status-cli 575.9 MB
  - agent-cli peak RSS 1123.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4711ms; pre-provider 4325ms; provider 3ms; post-provider 383ms; response true
    - active window: metadata scans 4 (107.25ms total, max 56.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4325ms; provider 3ms; post-provider 383ms; unknown 2332.72ms; source agent.prepare 1662.46ms; plugins.metadata.scan 329.82ms
  - warm: total 5029ms; pre-provider 4588ms; provider 5ms; post-provider 436ms; response true
    - active window: metadata scans 4 (101.8ms total, max 57.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4588ms; provider 5ms; post-provider 436ms; unknown 2595.72ms; source agent.prepare 1662.46ms; plugins.metadata.scan 329.82ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4325 ms | 2421 ms | 1904 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-67b331a3-kova-260926-052333-fb3a3d/openclaw/timeline.jsonl |
  | warm | 4588 ms | 2498 ms | 2090 ms | 5 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-67b331a3-kova-260926-052333-fb3a3d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1876 ms | 499 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 890 ms | 449 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 478 ms | 213 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 107 ms | 56 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1703 ms | 508 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 774 ms | 354 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 757 ms | 397 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 102 ms | 57 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260926-052333-fb3a3d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260926-052333-fb3a3d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260926-052333-fb3a3d-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-gateway-performance-man-005107f3-kova-260926-052333-fb3a3d
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-gateway-performance-man-1e8be6a8-kova-260926-052333-fb3a3d
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-gateway-performance-man-958fde53-kova-260926-052333-fb3a3d
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-8e2a29af-kova-260926-052333-fb3a3d
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-2ab680e0-kova-260926-052333-fb3a3d
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260926-052333-fb3a3d/kova-agent-cold-warm-message-67b331a3-kova-260926-052333-fb3a3d

## Target Cleanup

- Runtime: `kova-local-muhy26d9-3sd-dbe75c84`
- Result: removed
- Duration: 504ms

