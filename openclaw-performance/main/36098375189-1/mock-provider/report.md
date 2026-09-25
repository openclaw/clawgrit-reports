# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 13 |
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
| Run ID | `kova-260925-052510-030db8` |
| Generated | 2026-09-25T05:29:43.139Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1304.7 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 136 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1273.9 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 45 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1282.9 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 212 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1025.2 MB, command-tree 1025.2 MB, status-cli 522.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1025.2 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-8e2a29af-kova-260925-052510-030db8/resource-samples/cold-agent-turn-1.jsonl |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 989.9 MB, command-tree 989.9 MB, status-cli 522.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-2ab680e0-kova-260925-052510-030db8/resource-samples/cold-agent-turn-1.jsonl |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1055.3 MB, command-tree 1055.3 MB, status-cli 559.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1055.3 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 136ms | 1115MB | n/a | 222% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | 4807ms | 6170ms | 4636ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 136ms | 1136.7 MB | 1727.7 MB | n/a | n/a | gateway-tree peak RSS 1304.7 MB exceeded threshold 1200 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 45ms | 1105.6 MB | 1679.5 MB | n/a | n/a | gateway-tree peak RSS 1273.9 MB exceeded threshold 1200 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 212ms | 1115 MB | 1834.9 MB | n/a | n/a | gateway-tree peak RSS 1282.9 MB exceeded threshold 1200 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1096.6 MB | 5165ms | 6667ms | Product CPU interval evidence is incomplete |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1062 MB | 4807ms | 5628ms | Product CPU interval evidence is incomplete |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1126.7 MB | 4460ms | 6170ms | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1055.3 MB, command-tree 1055.3 MB, status-cli 559.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1304.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 253.5% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1136.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 237.6% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 1055.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 240.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1055.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 240.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 559.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.4% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 487.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 141.8% (scenario gateway-performance/many-bundled-plugins)
- mock-provider: RSS 72.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 10.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 136.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-gateway-performance-man-005107f3-kova-260925-052510-030db8
Measurements:
- startup: listening 1ms; health 136ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 135ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 135ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1136.7 MB; tracked total 1727.7 MB; max CPU 222%; samples 36; roles gateway-tree 1304.7MB/238%, gateway 1136.7MB/222%, command-tree 486.8MB/162%, status-cli 486.8MB/162%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2268.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1304.7 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-gateway-performance-man-1e8be6a8-kova-260925-052510-030db8
Measurements:
- startup: listening 1ms; health 45ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 44ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 44ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1105.6 MB; tracked total 1679.5 MB; max CPU 237.6%; samples 36; roles gateway-tree 1273.9MB/253.5%, gateway 1105.6MB/237.6%, uncategorized 487.9MB/110.4%, command-tree 432.1MB/157.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2354.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1273.9 MB exceeded threshold 1200 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-gateway-performance-man-958fde53-kova-260925-052510-030db8
Measurements:
- startup: listening 0ms; health 212ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 212ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 212ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1115 MB; tracked total 1834.9 MB; max CPU 216.8%; samples 36; roles gateway-tree 1282.9MB/232.7%, gateway 1115MB/216.8%, uncategorized 487.7MB/114.1%, command-tree 479.6MB/141.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2482.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway-tree peak RSS 1282.9 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-8e2a29af-kova-260925-052510-030db8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1096.6 MB; max CPU unknown; samples 22; roles agent-cli 1025.2MB/240.9%, command-tree 1025.2MB/240.9%, status-cli 522.8MB/170.9%, mock-provider 72.5MB/9%
- agent: turn 6667ms; cold/warm 5165ms/6667ms; cold-warm delta 0ms; pre-provider 6055ms; provider 1ms; metadata scans 16 (597.4ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6591.9ms; max 6667ms; pre-provider p95 5999.3ms
- agent CLI attribution: cold known 2949ms / unattributed 1992ms; warm known 4120ms / unattributed 1935ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2205.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1025.2 MB, command-tree 1025.2 MB, status-cli 522.8 MB
  - agent-cli peak RSS 1025.2 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5165ms; pre-provider 4941ms; provider 2ms; post-provider 222ms; response true
    - active window: metadata scans 9 (312ms total, max 61.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4941ms; provider 2ms; post-provider 222ms; unknown 2865.62ms; source agent.prepare 1344.8ms; plugins.metadata.scan 730.58ms
  - warm: total 6667ms; pre-provider 6055ms; provider 1ms; post-provider 611ms; response true
    - active window: metadata scans 7 (285.4ms total, max 74.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6055ms; provider 1ms; post-provider 611ms; unknown 3979.62ms; source agent.prepare 1344.8ms; plugins.metadata.scan 730.58ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4941 ms | 2949 ms | 1992 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-8e2a29af-kova-260925-052510-030db8/openclaw/timeline.jsonl |
  | warm | 6055 ms | 4120 ms | 1935 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-8e2a29af-kova-260925-052510-030db8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x35 | 35 | 0 | 3300 ms | 1128 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 733 ms | 242 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 583 ms | 248 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 310 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 4247 ms | 2206 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 808 ms | 474 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 615 ms | 285 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x6 | 7 | 0 | 286 ms | 74 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-2ab680e0-kova-260925-052510-030db8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1062 MB; max CPU unknown; samples 20; roles agent-cli 989.9MB/240.1%, command-tree 989.9MB/240.1%, status-cli 522.6MB/174%, mock-provider 72.5MB/10.9%
- agent: turn 5628ms; cold/warm 4807ms/5628ms; cold-warm delta 0ms; pre-provider 5351ms; provider 1ms; metadata scans 16 (557ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5586.95ms; max 5628ms; pre-provider p95 5315.25ms
- agent CLI attribution: cold known 2660ms / unattributed 1976ms; warm known 3657ms / unattributed 1694ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2054.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 989.9 MB, command-tree 989.9 MB, status-cli 522.6 MB
- Agent turns:
  - cold: total 4807ms; pre-provider 4636ms; provider 2ms; post-provider 169ms; response true
    - active window: metadata scans 9 (286.24ms total, max 57.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4636ms; provider 2ms; post-provider 169ms; unknown 2763.72ms; source agent.prepare 1179.5ms; plugins.metadata.scan 692.78ms
  - warm: total 5628ms; pre-provider 5351ms; provider 1ms; post-provider 276ms; response true
    - active window: metadata scans 7 (270.76ms total, max 70.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5351ms; provider 1ms; post-provider 276ms; unknown 3478.72ms; source agent.prepare 1179.5ms; plugins.metadata.scan 692.78ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4636 ms | 2660 ms | 1976 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-2ab680e0-kova-260925-052510-030db8/openclaw/timeline.jsonl |
  | warm | 5351 ms | 3657 ms | 1694 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-2ab680e0-kova-260925-052510-030db8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x34 | 34 | 0 | 3032 ms | 1048 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 657 ms | 215 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 503 ms | 228 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 285 ms | 57 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x30 | 30 | 0 | 3876 ms | 2054 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 666 ms | 343 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 520 ms | 249 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 271 ms | 71 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-67b331a3-kova-260925-052510-030db8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1126.7 MB; max CPU unknown; samples 21; roles agent-cli 1055.3MB/234.7%, command-tree 1055.3MB/234.7%, status-cli 559.8MB/206.4%, mock-provider 72.4MB/9.1%
- agent: turn 6170ms; cold/warm 4460ms/6170ms; cold-warm delta 0ms; pre-provider 5883ms; provider 1ms; metadata scans 16 (554.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6084.5ms; max 6170ms; pre-provider p95 5803.1ms
- agent CLI attribution: cold known 2533ms / unattributed 1752ms; warm known 4048ms / unattributed 1835ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2201.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1055.3 MB, command-tree 1055.3 MB, status-cli 559.8 MB
  - agent-cli peak RSS 1055.3 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4460ms; pre-provider 4285ms; provider 2ms; post-provider 173ms; response true
    - active window: metadata scans 9 (285.84ms total, max 56.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4285ms; provider 2ms; post-provider 173ms; unknown 2408.77ms; source agent.prepare 1171.38ms; plugins.metadata.scan 704.85ms
  - warm: total 6170ms; pre-provider 5883ms; provider 1ms; post-provider 286ms; response true
    - active window: metadata scans 7 (268.7ms total, max 61.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5883ms; provider 1ms; post-provider 286ms; unknown 4006.77ms; source agent.prepare 1171.38ms; plugins.metadata.scan 704.85ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4285 ms | 2533 ms | 1752 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-67b331a3-kova-260925-052510-030db8/openclaw/timeline.jsonl |
  | warm | 5883 ms | 4048 ms | 1835 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-67b331a3-kova-260925-052510-030db8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 2892 ms | 1002 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 577 ms | 209 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 517 ms | 206 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 286 ms | 57 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x33 | 33 | 0 | 4143 ms | 2201 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 822 ms | 414 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 596 ms | 281 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x6 | 7 | 0 | 270 ms | 62 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260925-052510-030db8-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260925-052510-030db8-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260925-052510-030db8-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-gateway-performance-man-005107f3-kova-260925-052510-030db8
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-gateway-performance-man-1e8be6a8-kova-260925-052510-030db8
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-gateway-performance-man-958fde53-kova-260925-052510-030db8
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-8e2a29af-kova-260925-052510-030db8
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-2ab680e0-kova-260925-052510-030db8
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260925-052510-030db8/kova-agent-cold-warm-message-67b331a3-kova-260925-052510-030db8

## Target Cleanup

- Runtime: `kova-local-mugioe4f-3sj-62563e36`
- Result: removed
- Duration: 593ms

