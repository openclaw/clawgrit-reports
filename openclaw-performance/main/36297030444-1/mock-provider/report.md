# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1201.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1369 MB, gateway 1201.9 MB, uncategorized 489.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1201.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1369 MB, gateway 1201.9 MB, uncategorized 489.5 MB |
| Blocking findings | 16 |
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
| Run ID | `kova-260927-052421-acb5bf` |
| Generated | 2026-09-27T05:28:45.139Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1331.3 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 24 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1201.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1369 MB, gateway 1201.9 MB, uncategorized 489.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 53 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1369 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 53 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1339.4 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 53 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1120.4 MB, command-tree 1120.4 MB, status-cli 599.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1120.4 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-8e2a29af-kova-260927-052421-acb5bf/resource-samples/cold-agent-turn-1.jsonl |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1109.7 MB, command-tree 1109.7 MB, status-cli 552.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1109.7 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| info | Kova | report | 4 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 53ms | 1172.3MB | n/a | 204.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | 4730ms | 5175ms | 4516ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 24ms | 1163.8 MB | 1944.7 MB | n/a | n/a | gateway-tree peak RSS 1331.3 MB exceeded threshold 1200 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 53ms | 1201.9 MB | 1888.8 MB | n/a | n/a | gateway peak RSS 1201.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1369 MB, gateway 1201.9 MB, uncategorized 489.5 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 53ms | 1172.3 MB | 1853 MB | n/a | n/a | gateway-tree peak RSS 1339.4 MB exceeded threshold 1200 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1192.2 MB | 5369ms | 5175ms | Product CPU interval evidence is incomplete |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1181.9 MB | 4730ms | 5321ms | Product CPU interval evidence is incomplete |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1173.7 MB | 4360ms | 4548ms | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1102.3 MB, command-tree 1102.3 MB, status-cli 438.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1369 MB (scenario gateway-performance/many-bundled-plugins); CPU 239.6% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 1120.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 251.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1201.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 218.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1120.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 251.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 599.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190.6% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 492.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 128.2% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 131.8% (scenario gateway-performance/many-bundled-plugins)
- mock-provider: RSS 72.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 10.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-gateway-performance-man-005107f3-kova-260927-052421-acb5bf
Measurements:
- startup: listening 1ms; health 24ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 23ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 23ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1163.8 MB; tracked total 1944.7 MB; max CPU 218.8%; samples 34; roles gateway-tree 1331.3MB/239.6%, gateway 1163.8MB/218.8%, command-tree 543.4MB/144.3%, status-cli 543.4MB/144.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 2142.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1331.3 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-gateway-performance-man-1e8be6a8-kova-260927-052421-acb5bf
Measurements:
- startup: listening 1ms; health 53ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 52ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 52ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1201.9 MB; tracked total 1888.8 MB; max CPU 204.3%; samples 33; roles gateway-tree 1369MB/220.4%, gateway 1201.9MB/204.3%, uncategorized 489.5MB/115.4%, command-tree 449.3MB/156.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1379.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1201.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1369 MB, gateway 1201.9 MB, uncategorized 489.5 MB
  - gateway-tree peak RSS 1369 MB exceeded threshold 1200 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-gateway-performance-man-958fde53-kova-260927-052421-acb5bf
Measurements:
- startup: listening 0ms; health 53ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 53ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 53ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1172.3 MB; tracked total 1853 MB; max CPU 199.9%; samples 33; roles gateway-tree 1339.4MB/219.7%, gateway 1172.3MB/199.9%, uncategorized 492.5MB/118.4%, command-tree 445.9MB/156.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1325.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1339.4 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-8e2a29af-kova-260927-052421-acb5bf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1192.2 MB; max CPU unknown; samples 21; roles agent-cli 1120.4MB/243.8%, command-tree 1120.4MB/243.8%, status-cli 599.7MB/190.6%, mock-provider 72.1MB/9%
- agent: turn 5369ms; cold/warm 5369ms/5175ms; cold-warm delta 194ms; pre-provider 5140ms; provider 2ms; metadata scans 8 (228.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5359.3ms; max 5369ms; pre-provider p95 5127.15ms
- agent CLI attribution: cold known 2926ms / unattributed 2214ms; warm known 2633ms / unattributed 2250ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 640.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1120.4 MB, command-tree 1120.4 MB, status-cli 599.7 MB
  - agent-cli peak RSS 1120.4 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5369ms; pre-provider 5140ms; provider 2ms; post-provider 227ms; response true
    - active window: metadata scans 4 (114.11ms total, max 58.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5140ms; provider 2ms; post-provider 227ms; unknown 3092.38ms; source agent.prepare 1697.88ms; plugins.metadata.scan 349.74ms
  - warm: total 5175ms; pre-provider 4883ms; provider 1ms; post-provider 291ms; response true
    - active window: metadata scans 4 (114.78ms total, max 59.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4883ms; provider 1ms; post-provider 291ms; unknown 2835.38ms; source agent.prepare 1697.88ms; plugins.metadata.scan 349.74ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5140 ms | 2926 ms | 2214 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-8e2a29af-kova-260927-052421-acb5bf/openclaw/timeline.jsonl |
  | warm | 4883 ms | 2633 ms | 2250 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-8e2a29af-kova-260927-052421-acb5bf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2411 ms | 641 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 925 ms | 480 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 658 ms | 288 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 114 ms | 58 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 47 ms | 47 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1898 ms | 577 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 785 ms | 467 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 774 ms | 327 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 114 ms | 59 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-2ab680e0-kova-260927-052421-acb5bf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1181.9 MB; max CPU unknown; samples 20; roles agent-cli 1109.7MB/251.7%, command-tree 1109.7MB/251.7%, status-cli 552.8MB/190%, mock-provider 72.5MB/8.9%
- agent: turn 5321ms; cold/warm 4730ms/5321ms; cold-warm delta 0ms; pre-provider 5029ms; provider 1ms; metadata scans 8 (218.06ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5291.45ms; max 5321ms; pre-provider p95 5003.35ms
- agent CLI attribution: cold known 2441ms / unattributed 2075ms; warm known 2636ms / unattributed 2393ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 525.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1109.7 MB, command-tree 1109.7 MB, status-cli 552.8 MB
  - agent-cli peak RSS 1109.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4730ms; pre-provider 4516ms; provider 2ms; post-provider 212ms; response true
    - active window: metadata scans 4 (105.52ms total, max 56.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4516ms; provider 2ms; post-provider 212ms; unknown 2510.81ms; source agent.prepare 1631.88ms; plugins.metadata.scan 373.31ms
  - warm: total 5321ms; pre-provider 5029ms; provider 1ms; post-provider 291ms; response true
    - active window: metadata scans 4 (112.54ms total, max 62.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5029ms; provider 1ms; post-provider 291ms; unknown 3023.81ms; source agent.prepare 1631.88ms; plugins.metadata.scan 373.31ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4516 ms | 2441 ms | 2075 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-2ab680e0-kova-260927-052421-acb5bf/openclaw/timeline.jsonl |
  | warm | 5029 ms | 2636 ms | 2393 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-2ab680e0-kova-260927-052421-acb5bf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 1912 ms | 521 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 858 ms | 423 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 501 ms | 219 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 105 ms | 57 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1770 ms | 526 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 852 ms | 522 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 773 ms | 342 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 112 ms | 62 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-67b331a3-kova-260927-052421-acb5bf
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1173.7 MB; max CPU unknown; samples 19; roles agent-cli 1102.3MB/231.5%, command-tree 1102.3MB/231.5%, status-cli 438.4MB/164.3%, mock-provider 72.4MB/9.2%
- agent: turn 4548ms; cold/warm 4360ms/4548ms; cold-warm delta 0ms; pre-provider 4290ms; provider 1ms; metadata scans 8 (210.07ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4538.6ms; max 4548ms; pre-provider p95 4283.9ms
- agent CLI attribution: cold known 2269ms / unattributed 1899ms; warm known 2353ms / unattributed 1937ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 468.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1102.3 MB, command-tree 1102.3 MB, status-cli 438.4 MB
  - agent-cli peak RSS 1102.3 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4360ms; pre-provider 4168ms; provider 2ms; post-provider 190ms; response true
    - active window: metadata scans 4 (102.04ms total, max 53.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4168ms; provider 2ms; post-provider 190ms; unknown 2284.61ms; source agent.prepare 1556.84ms; plugins.metadata.scan 326.55ms
  - warm: total 4548ms; pre-provider 4290ms; provider 1ms; post-provider 257ms; response true
    - active window: metadata scans 4 (108.03ms total, max 62.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4290ms; provider 1ms; post-provider 257ms; unknown 2406.61ms; source agent.prepare 1556.84ms; plugins.metadata.scan 326.55ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4168 ms | 2269 ms | 1899 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-67b331a3-kova-260927-052421-acb5bf/openclaw/timeline.jsonl |
  | warm | 4290 ms | 2353 ms | 1937 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-67b331a3-kova-260927-052421-acb5bf/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1711 ms | 459 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 822 ms | 425 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 475 ms | 211 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 104 ms | 54 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 33 ms | 33 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 1596 ms | 468 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 734 ms | 329 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 708 ms | 433 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 110 ms | 63 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 27 ms | 27 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260927-052421-acb5bf-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260927-052421-acb5bf-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260927-052421-acb5bf-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-gateway-performance-man-005107f3-kova-260927-052421-acb5bf
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-gateway-performance-man-1e8be6a8-kova-260927-052421-acb5bf
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-gateway-performance-man-958fde53-kova-260927-052421-acb5bf
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-8e2a29af-kova-260927-052421-acb5bf
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-2ab680e0-kova-260927-052421-acb5bf
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260927-052421-acb5bf/kova-agent-cold-warm-message-67b331a3-kova-260927-052421-acb5bf

## Target Cleanup

- Runtime: `kova-local-mujdj1m9-3sf-0add2389`
- Result: removed
- Duration: 477ms

