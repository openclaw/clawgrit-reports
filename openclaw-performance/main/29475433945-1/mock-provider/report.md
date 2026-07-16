# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 9 (FAIL:3, PASS:6) |

## Proof Completeness

- Completeness: incomplete: 3, complete: 6
- Required obligations: 142 total, 3 missing, 0 failed
- Categories: command: 79, artifact: 9, cleanup: 9, collector: 9, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260716-060120-107a3e` |
| Generated | 2026-07-16T06:06:29.677Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 9 |
| Scenarios | 3 |
| States | 3 |
| FAIL | 3 |
| PASS | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 847.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 847.6 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 862 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 862 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 856.8 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 856.8 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 856.8MB | n/a | 156% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3384ms | 848.9MB | n/a | 159% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 170.9% | 4246ms | 4287ms | 4032ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 847.6 MB | 1616.9 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 862 MB | 1706.5 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 856.8 MB | 1692.9 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3384ms | 847.9 MB | 853.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3302ms | 848.9 MB | 853.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4020ms | 849.2 MB | 854.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 951.6 MB | 4396ms | 4376ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 925.8 MB | 4246ms | 4287ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 937.6 MB | 4167ms | 4049ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 951.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 951.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 188.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 951.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 619.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 836.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 177.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 862 MB (scenario gateway-performance/many-bundled-plugins); CPU 169% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 847.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 172% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 862 MB (scenario gateway-performance/many-bundled-plugins); CPU 169% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-gateway-performance-man-005107f3-kova-260716-060120-107a3e
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 2ms; post-ready p95 4ms; failures at least 195; final failures not-collected; slowest startup-sample/cold-start 441ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 847.6 MB; tracked total 1616.9 MB; max CPU 156%; samples 18; roles gateway 847.6MB/156%, command-tree 776.8MB/174%, gateway-tree 847.6MB/156%, model-cli 491.1MB/174%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 543.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-gateway-performance-man-1e8be6a8-kova-260716-060120-107a3e
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 3ms; post-ready p95 4ms; failures at least 191; final failures not-collected; slowest startup-sample/cold-start 423ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 862 MB; tracked total 1706.5 MB; max CPU 155%; samples 18; roles gateway 862MB/155%, command-tree 847.9MB/188.9%, gateway-tree 862MB/155%, model-cli 543.5MB/188.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 391.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-gateway-performance-man-958fde53-kova-260716-060120-107a3e
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 2ms; post-ready p95 4ms; failures at least 196; final failures not-collected; slowest startup-sample/cold-start 661ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 856.8 MB; tracked total 1692.9 MB; max CPU 169%; samples 19; roles gateway 856.8MB/169%, command-tree 836.6MB/181%, gateway-tree 856.8MB/169%, model-cli 619.2MB/181%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 564.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-8e2a29af-kova-260716-060120-107a3e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 951.6 MB; tracked total 951.6 MB; max CPU 167.4%; samples 16; roles agent-cli 951.6MB/167.4%, command-tree 951.6MB/172.4%, agent-process 951.6MB/167.4%, status-cli 736.7MB/172.4%
- agent: turn 4396ms; cold/warm 4396ms/4376ms; cold-warm delta 20ms; pre-provider 4200ms; provider 4ms; metadata scans 10 (321.72ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4395ms; max 4396ms; pre-provider p95 4213.3ms
- agent CLI attribution: cold known 170ms / unattributed 4030ms; warm known 153ms / unattributed 4061ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 113.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4396ms; pre-provider 4200ms; provider 4ms; post-provider 192ms; response true
    - active window: metadata scans 5 (169.32ms total, max 113.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4200ms; provider 4ms; post-provider 192ms; unknown 3769.87ms; source plugins.metadata.scan 430.13ms
  - warm: total 4376ms; pre-provider 4214ms; provider 1ms; post-provider 161ms; response true
    - active window: metadata scans 5 (152.4ms total, max 81.83ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4214ms; provider 1ms; post-provider 161ms; unknown 3783.87ms; source plugins.metadata.scan 430.13ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4200 ms | 170 ms | 4030 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-8e2a29af-kova-260716-060120-107a3e/openclaw/timeline.jsonl |
  | warm | 4214 ms | 153 ms | 4061 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-8e2a29af-kova-260716-060120-107a3e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 170 ms | 113 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 153 ms | 82 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-2ab680e0-kova-260716-060120-107a3e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 925.8 MB; tracked total 925.8 MB; max CPU 171.8%; samples 17; roles agent-cli 925.8MB/171.8%, command-tree 925.8MB/177.4%, agent-process 925.8MB/171.8%, status-cli 832.6MB/177.4%
- agent: turn 4287ms; cold/warm 4246ms/4287ms; cold-warm delta 0ms; pre-provider 4122ms; provider 2ms; metadata scans 10 (264.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4284.95ms; max 4287ms; pre-provider p95 4117.5ms
- agent CLI attribution: cold known 123ms / unattributed 3909ms; warm known 142ms / unattributed 3980ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 95.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4246ms; pre-provider 4032ms; provider 3ms; post-provider 211ms; response true
    - active window: metadata scans 5 (122.59ms total, max 76.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4032ms; provider 3ms; post-provider 211ms; unknown 3634.69ms; source plugins.metadata.scan 397.31ms
  - warm: total 4287ms; pre-provider 4122ms; provider 2ms; post-provider 163ms; response true
    - active window: metadata scans 5 (141.98ms total, max 88.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4122ms; provider 2ms; post-provider 163ms; unknown 3724.69ms; source plugins.metadata.scan 397.31ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4032 ms | 123 ms | 3909 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-2ab680e0-kova-260716-060120-107a3e/openclaw/timeline.jsonl |
  | warm | 4122 ms | 142 ms | 3980 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-2ab680e0-kova-260716-060120-107a3e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 123 ms | 76 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 142 ms | 89 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-67b331a3-kova-260716-060120-107a3e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 937.6 MB; tracked total 937.6 MB; max CPU 170.9%; samples 15; roles agent-cli 937.6MB/170.9%, command-tree 937.6MB/174.3%, agent-process 937.6MB/170.9%, status-cli 747.4MB/174.3%
- agent: turn 4167ms; cold/warm 4167ms/4049ms; cold-warm delta 118ms; pre-provider 3981ms; provider 3ms; metadata scans 10 (262.03ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4161.1ms; max 4167ms; pre-provider p95 3974.5ms
- agent CLI attribution: cold known 124ms / unattributed 3857ms; warm known 137ms / unattributed 3714ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4167ms; pre-provider 3981ms; provider 3ms; post-provider 183ms; response true
    - active window: metadata scans 5 (124.1ms total, max 73.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3981ms; provider 3ms; post-provider 183ms; unknown 3616.05ms; source plugins.metadata.scan 364.95ms
  - warm: total 4049ms; pre-provider 3851ms; provider 2ms; post-provider 196ms; response true
    - active window: metadata scans 5 (137.93ms total, max 70.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3851ms; provider 2ms; post-provider 196ms; unknown 3486.05ms; source plugins.metadata.scan 364.95ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3981 ms | 124 ms | 3857 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-67b331a3-kova-260716-060120-107a3e/openclaw/timeline.jsonl |
  | warm | 3851 ms | 137 ms | 3714 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-67b331a3-kova-260716-060120-107a3e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 124 ms | 73 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 137 ms | 71 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260716-060120-107a3e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260716-060120-107a3e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260716-060120-107a3e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-gateway-performance-man-005107f3-kova-260716-060120-107a3e
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-gateway-performance-man-1e8be6a8-kova-260716-060120-107a3e
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-gateway-performance-man-958fde53-kova-260716-060120-107a3e
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260716-060120-107a3e
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-bundled-runtime-deps-mi-39c08a4a-kova-260716-060120-107a3e
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-bundled-runtime-deps-mi-150715ba-kova-260716-060120-107a3e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-8e2a29af-kova-260716-060120-107a3e
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-2ab680e0-kova-260716-060120-107a3e
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260716-060120-107a3e/kova-agent-cold-warm-message-67b331a3-kova-260716-060120-107a3e

## Target Cleanup

- Runtime: `kova-local-mrn3pfa6-3z3-8e514aec`
- Result: removed
- Duration: 498ms

