# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Gateway runtime identity was not trusted: missing-service-identity

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Gateway runtime identity was not trusted: missing-service-identity |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 6 (FAIL:3, PASS:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 100 total, 0 missing, 3 failed
- Categories: command: 46, artifact: 6, cleanup: 6, collector: 6, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | command:state-env-create:3 | failed | command exited 1 |
| gateway-performance | command:state-env-create:3 | failed | command exited 1 |
| gateway-performance | command:state-env-create:3 | failed | command exited 1 |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261002-052638-a9375c` |
| Generated | 2026-10-02T05:29:31.741Z |
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
| FAIL | 3 |
| PASS | 3 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 2 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 2 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 2 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 221% | 5157ms | 5349ms | 4953ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1236.4 MB | 5382ms | 5295ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1187.9 MB | 5040ms | 5470ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1231.1 MB | 5157ms | 5349ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1164.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 232% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1067.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 222.1% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 750.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 187.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 189.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.6% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 9.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-gateway-performance-man-005107f3-kova-261002-052638-a9375c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 37.62ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `node '/home/runner/_work/_temp/kova-src'/support/assert-many-plugin-pressure-state.mjs ...`
- Failure: openclaw: doctor exited 1: \[35m\[config\]\[39m \[33mwarnings: agents.entries: Removed retired agents.entries.\*.default markers.\[39m

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-gateway-performance-man-1e8be6a8-kova-261002-052638-a9375c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 38.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `node '/home/runner/_work/_temp/kova-src'/support/assert-many-plugin-pressure-state.mjs ...`
- Failure: openclaw: doctor exited 1: \[35m\[config\]\[39m \[33mwarnings: agents.entries: Removed retired agents.entries.\*.default markers.\[39m

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-gateway-performance-man-958fde53-kova-261002-052638-a9375c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 36.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `node '/home/runner/_work/_temp/kova-src'/support/assert-many-plugin-pressure-state.mjs ...`
- Failure: openclaw: doctor exited 1: \[35m\[config\]\[39m \[33mwarnings: agents.entries: Removed retired agents.entries.\*.default markers.\[39m

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-8e2a29af-kova-261002-052638-a9375c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1067.8 MB; tracked total 1236.4 MB; max CPU 222.1%; samples 21; roles command-tree 1164.2MB/232%, agent-process 1067.8MB/222.1%, status-cli 599MB/169.5%, agent-cli 96.4MB/60.5%
- agent: turn 5382ms; cold/warm 5382ms/5295ms; cold-warm delta 87ms; pre-provider 5110ms; provider 2ms; metadata scans 8 (224.15ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5377.65ms; max 5382ms; pre-provider p95 5108.75ms
- agent CLI attribution: cold known 3215ms / unattributed 1895ms; warm known 3033ms / unattributed 2052ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 998.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5382ms; pre-provider 5110ms; provider 2ms; post-provider 270ms; response true
    - active window: metadata scans 4 (105.31ms total, max 54.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5110ms; provider 2ms; post-provider 270ms; unknown 3094.51ms; source agent.prepare 1681.95ms; plugins.metadata.scan 333.54ms
  - warm: total 5295ms; pre-provider 5085ms; provider 0ms; post-provider 210ms; response true
    - active window: metadata scans 4 (118.84ms total, max 60.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5085ms; provider 0ms; post-provider 210ms; unknown 3069.51ms; source agent.prepare 1681.95ms; plugins.metadata.scan 333.54ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5110 ms | 3215 ms | 1895 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-8e2a29af-kova-261002-052638-a9375c/openclaw/timeline.jsonl |
  | warm | 5085 ms | 3033 ms | 2052 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-8e2a29af-kova-261002-052638-a9375c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1933 ms | 624 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1251 ms | 834 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 899 ms | 480 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 105 ms | 54 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1569 ms | 506 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1361 ms | 998 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 784 ms | 509 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 117 ms | 60 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-2ab680e0-kova-261002-052638-a9375c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1020 MB; tracked total 1187.9 MB; max CPU 216.3%; samples 20; roles command-tree 1116.3MB/226.2%, agent-process 1020MB/216.3%, status-cli 596.3MB/184.6%, agent-cli 166.8MB/140.3%
- agent: turn 5470ms; cold/warm 5040ms/5470ms; cold-warm delta 0ms; pre-provider 5273ms; provider 1ms; metadata scans 8 (240.46ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5448.5ms; max 5470ms; pre-provider p95 5251.25ms
- agent CLI attribution: cold known 2968ms / unattributed 1870ms; warm known 3120ms / unattributed 2153ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1059.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5040ms; pre-provider 4838ms; provider 2ms; post-provider 200ms; response true
    - active window: metadata scans 4 (116.67ms total, max 60.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4838ms; provider 2ms; post-provider 200ms; unknown 2835.31ms; source agent.prepare 1650.3ms; plugins.metadata.scan 352.39ms
  - warm: total 5470ms; pre-provider 5273ms; provider 1ms; post-provider 196ms; response true
    - active window: metadata scans 4 (123.79ms total, max 66.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5273ms; provider 1ms; post-provider 196ms; unknown 3270.31ms; source agent.prepare 1650.3ms; plugins.metadata.scan 352.39ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4838 ms | 2968 ms | 1870 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-2ab680e0-kova-261002-052638-a9375c/openclaw/timeline.jsonl |
  | warm | 5273 ms | 3120 ms | 2153 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-2ab680e0-kova-261002-052638-a9375c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1815 ms | 538 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1096 ms | 791 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 857 ms | 483 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1648 ms | 529 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1398 ms | 1060 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 795 ms | 530 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 124 ms | 66 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-67b331a3-kova-261002-052638-a9375c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1058 MB; tracked total 1231.1 MB; max CPU 221%; samples 21; roles command-tree 1159.2MB/231.1%, agent-process 1058MB/221%, status-cli 750.3MB/187.3%, agent-cli 189.6MB/157.6%
- agent: turn 5349ms; cold/warm 5157ms/5349ms; cold-warm delta 0ms; pre-provider 5159ms; provider 1ms; metadata scans 8 (230.81ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5339.4ms; max 5349ms; pre-provider p95 5148.7ms
- agent CLI attribution: cold known 3020ms / unattributed 1933ms; warm known 3057ms / unattributed 2102ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1036.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5157ms; pre-provider 4953ms; provider 2ms; post-provider 202ms; response true
    - active window: metadata scans 4 (112.59ms total, max 59.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4953ms; provider 2ms; post-provider 202ms; unknown 2955.59ms; source agent.prepare 1657.66ms; plugins.metadata.scan 339.75ms
  - warm: total 5349ms; pre-provider 5159ms; provider 1ms; post-provider 189ms; response true
    - active window: metadata scans 4 (118.22ms total, max 60.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5159ms; provider 1ms; post-provider 189ms; unknown 3161.59ms; source agent.prepare 1657.66ms; plugins.metadata.scan 339.75ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4953 ms | 3020 ms | 1933 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-67b331a3-kova-261002-052638-a9375c/openclaw/timeline.jsonl |
  | warm | 5159 ms | 3057 ms | 2102 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-67b331a3-kova-261002-052638-a9375c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1778 ms | 521 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1154 ms | 850 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 867 ms | 481 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 112 ms | 59 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x7 | 7 | 0 | 1590 ms | 523 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1372 ms | 1036 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 791 ms | 528 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 60 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261002-052638-a9375c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261002-052638-a9375c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261002-052638-a9375c-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-gateway-performance-man-005107f3-kova-261002-052638-a9375c
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-gateway-performance-man-1e8be6a8-kova-261002-052638-a9375c
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-gateway-performance-man-958fde53-kova-261002-052638-a9375c
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-8e2a29af-kova-261002-052638-a9375c
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-2ab680e0-kova-261002-052638-a9375c
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261002-052638-a9375c/kova-agent-cold-warm-message-67b331a3-kova-261002-052638-a9375c

## Target Cleanup

- Runtime: `kova-local-muqit8wm-3tr-08d5dccd`
- Result: removed
- Duration: 539ms

