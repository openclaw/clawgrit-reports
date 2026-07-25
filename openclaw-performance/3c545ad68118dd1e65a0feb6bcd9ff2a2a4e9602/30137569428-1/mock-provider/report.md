# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 958.8 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 958.8 MB exceeded threshold 950 MB |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 18 (PASS:15, FAIL:3) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260725-010119-43bd72` |
| Generated | 2026-07-25T01:08:58.408Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 18 |
| Scenarios | 5 |
| States | 5 |
| PASS | 15 |
| FAIL | 3 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 958.8 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 4996 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 959.7 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5145 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 951.1 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5149 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5369ms | 949.1MB | n/a | 152% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5280ms | 977.8MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5060ms | 966.2MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5145ms | 958.8MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.9% | 4920ms | 5023ms | 4467ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5205ms | 976.8MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5557ms | 949.1 MB | 1657.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5369ms | 938.3 MB | 1636 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5185ms | 979.7 MB | 1675.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5238ms | 977.8 MB | 1691 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5280ms | 959.6 MB | 1625.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5435ms | 977.9 MB | 1690.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5003ms | 969.3 MB | 974.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5234ms | 966.2 MB | 971.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5060ms | 945.6 MB | 950.6 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4996ms | 958.8 MB | 1432.3 MB | n/a | n/a | gateway peak RSS 958.8 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5145ms | 959.7 MB | 1435.2 MB | n/a | n/a | gateway peak RSS 959.7 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5149ms | 951.1 MB | 1424.2 MB | n/a | n/a | gateway peak RSS 951.1 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 959.5 MB | 4920ms | 5023ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 973.8 MB | 4891ms | 4918ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 935.1 MB | 4960ms | 5122ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5466ms | 976.1 MB | 1694 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5173ms | 976.8 MB | 1694.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5205ms | 978.9 MB | 1701.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 979.7 MB (scenario fresh-install/fresh); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 973.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 979.7 MB (scenario fresh-install/fresh); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 973.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 973.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 778.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 549.8 MB (scenario fresh-install/fresh); CPU 146% (scenario fresh-install/fresh)
- plugin-cli: RSS 475.5 MB (scenario bundled-plugin-startup/fresh); CPU 153% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-bundled-plugin-startup-4a0cbdf7-kova-260725-010119-43bd72
Measurements:
- startup: listening 4520ms; health 4996ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 476ms; post-ready p95 1ms; failures 27; final failures 0; slowest startup-sample/restart 544ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 958.8 MB; tracked total 1432.3 MB; max CPU 155%; samples 14; roles gateway 958.8MB/155%, gateway-tree 958.8MB/155%, command-tree 473.5MB/149%, plugin-cli 473.5MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 707.51ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 958.8 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-bundled-plugin-startup-809ede2b-kova-260725-010119-43bd72
Measurements:
- startup: listening 4523ms; health 5145ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 563ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/gateway-start 622ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 959.7 MB; tracked total 1435.2 MB; max CPU 152%; samples 14; roles gateway 959.7MB/152%, gateway-tree 959.7MB/152%, command-tree 475.5MB/148%, plugin-cli 475.5MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 735.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 959.7 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-bundled-plugin-startup-5377119f-kova-260725-010119-43bd72
Measurements:
- startup: listening 4771ms; health 5149ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 378ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/restart 624ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 951.1 MB; tracked total 1424.2 MB; max CPU 155%; samples 14; roles gateway 951.1MB/155%, gateway-tree 951.1MB/155%, command-tree 473.2MB/148%, plugin-cli 473.2MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 780.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 951.1 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-agent-cold-warm-message-8e2a29af-kova-260725-010119-43bd72
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 959.5 MB; tracked total 959.5 MB; max CPU 155.9%; samples 16; roles agent-cli 959.5MB/155.9%, agent-process 959.5MB/155.9%, command-tree 959.5MB/155.9%, status-cli 756.3MB/155.7%
- agent: turn 5023ms; cold/warm 4920ms/5023ms; cold-warm delta 0ms; pre-provider 4632ms; provider 2ms; metadata scans 14 (274.82ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5017.85ms; max 5023ms; pre-provider p95 4623.75ms
- agent CLI attribution: cold known 134ms / unattributed 4333ms; warm known 142ms / unattributed 4490ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4920ms; pre-provider 4467ms; provider 3ms; post-provider 450ms; response true
    - active window: metadata scans 7 (133.69ms total, max 59.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4467ms; provider 3ms; post-provider 450ms; unknown 3973.73ms; source plugins.metadata.scan 493.27ms
  - warm: total 5023ms; pre-provider 4632ms; provider 2ms; post-provider 389ms; response true
    - active window: metadata scans 7 (141.13ms total, max 66.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4632ms; provider 2ms; post-provider 389ms; unknown 4138.73ms; source plugins.metadata.scan 493.27ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4467 ms | 134 ms | 4333 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-agent-cold-warm-message-8e2a29af-kova-260725-010119-43bd72/openclaw/timeline.jsonl |
  | warm | 4632 ms | 142 ms | 4490 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-agent-cold-warm-message-8e2a29af-kova-260725-010119-43bd72/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 134 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 66 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-agent-cold-warm-message-2ab680e0-kova-260725-010119-43bd72
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 973.8 MB; tracked total 973.8 MB; max CPU 156.4%; samples 16; roles agent-cli 973.8MB/156.4%, agent-process 973.8MB/156.4%, command-tree 973.8MB/156.4%, status-cli 778.5MB/153.9%
- agent: turn 4918ms; cold/warm 4891ms/4918ms; cold-warm delta 0ms; pre-provider 4534ms; provider 1ms; metadata scans 14 (263.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4916.65ms; max 4918ms; pre-provider p95 4529.9ms
- agent CLI attribution: cold known 127ms / unattributed 4325ms; warm known 135ms / unattributed 4399ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4891ms; pre-provider 4452ms; provider 3ms; post-provider 436ms; response true
    - active window: metadata scans 7 (128.37ms total, max 59.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4452ms; provider 3ms; post-provider 436ms; unknown 3979.59ms; source plugins.metadata.scan 472.41ms
  - warm: total 4918ms; pre-provider 4534ms; provider 1ms; post-provider 383ms; response true
    - active window: metadata scans 7 (134.68ms total, max 65.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4534ms; provider 1ms; post-provider 383ms; unknown 4061.59ms; source plugins.metadata.scan 472.41ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4452 ms | 127 ms | 4325 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-agent-cold-warm-message-2ab680e0-kova-260725-010119-43bd72/openclaw/timeline.jsonl |
  | warm | 4534 ms | 135 ms | 4399 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-agent-cold-warm-message-2ab680e0-kova-260725-010119-43bd72/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 66 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-agent-cold-warm-message-67b331a3-kova-260725-010119-43bd72
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 935.1 MB; tracked total 935.1 MB; max CPU 154.9%; samples 17; roles agent-cli 935.1MB/154.9%, agent-process 935.1MB/154.9%, command-tree 935.1MB/154.9%, status-cli 712.9MB/154.4%
- agent: turn 5122ms; cold/warm 4960ms/5122ms; cold-warm delta 0ms; pre-provider 4666ms; provider 1ms; metadata scans 14 (285.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5113.9ms; max 5122ms; pre-provider p95 4658.6ms
- agent CLI attribution: cold known 133ms / unattributed 4385ms; warm known 153ms / unattributed 4513ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 84.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4960ms; pre-provider 4518ms; provider 3ms; post-provider 439ms; response true
    - active window: metadata scans 7 (131.87ms total, max 61.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4518ms; provider 3ms; post-provider 439ms; unknown 4006.5ms; source plugins.metadata.scan 511.5ms
  - warm: total 5122ms; pre-provider 4666ms; provider 1ms; post-provider 455ms; response true
    - active window: metadata scans 7 (153.67ms total, max 72.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4666ms; provider 1ms; post-provider 455ms; unknown 4154.5ms; source plugins.metadata.scan 511.5ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4518 ms | 133 ms | 4385 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-agent-cold-warm-message-67b331a3-kova-260725-010119-43bd72/openclaw/timeline.jsonl |
  | warm | 4666 ms | 153 ms | 4513 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-agent-cold-warm-message-67b331a3-kova-260725-010119-43bd72/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 153 ms | 73 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-010119-43bd72-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-010119-43bd72-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-010119-43bd72-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-fresh-install-fresh-r1-697fad55-kova-260725-010119-43bd72
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-fresh-install-fresh-r2-da880701-kova-260725-010119-43bd72
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-010119-43bd72
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-fresh-install-onboarded-9f99e904-kova-260725-010119-43bd72
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-fresh-install-onboarded-f9c24855-kova-260725-010119-43bd72
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-fresh-install-onboarded-fe872c26-kova-260725-010119-43bd72
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-010119-43bd72
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-010119-43bd72
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-010119-43bd72/kova-bundled-runtime-deps-mi-150715ba-kova-260725-010119-43bd72
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzny9bh-4vb-dd21cc45`
- Result: removed
- Duration: 433ms

