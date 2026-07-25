# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 978.1 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 978.1 MB exceeded threshold 950 MB |
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
| Run ID | `kova-260725-030412-0b9533` |
| Generated | 2026-07-25T03:11:40.590Z |
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
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 978.1 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5186 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 966.3 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5343 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 976.6 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5004 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5016ms | 978.2MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 4966ms | 977MB | n/a | 154% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5185ms | 962MB | n/a | 155% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5186ms | 976.6MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 151.9% | 4682ms | 4633ms | 4262ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5020ms | 963.8MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5542ms | 978.2 MB | 1689.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5016ms | 989.6 MB | 1686.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 4981ms | 976.2 MB | 1648.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4966ms | 974.1 MB | 1690.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4936ms | 977 MB | 1642.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4974ms | 983.1 MB | 1682.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5017ms | 962 MB | 967.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5251ms | 961.1 MB | 966.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5185ms | 962 MB | 967.2 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5186ms | 978.1 MB | 1456.5 MB | n/a | n/a | gateway peak RSS 978.1 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5343ms | 966.3 MB | 1441.4 MB | n/a | n/a | gateway peak RSS 966.3 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5004ms | 976.6 MB | 1455.4 MB | n/a | n/a | gateway peak RSS 976.6 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 954.3 MB | 4571ms | 4667ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 974.1 MB | 4727ms | 4633ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 961.8 MB | 4682ms | 4572ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5074ms | 963.8 MB | 1665.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5020ms | 982.8 MB | 1699.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5005ms | 951.7 MB | 1656.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 989.6 MB (scenario fresh-install/fresh); CPU 156% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 989.6 MB (scenario fresh-install/fresh); CPU 156% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-cli: RSS 974.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 974.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 974.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 776.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 549 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario fresh-install/fresh)
- plugin-cli: RSS 481 MB (scenario fresh-install/onboarded-user); CPU 153% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-bundled-plugin-startup-4a0cbdf7-kova-260725-030412-0b9533
Measurements:
- startup: listening 4522ms; health 5186ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 600ms; post-ready p95 3ms; failures 27; final failures 0; slowest startup-sample/gateway-start 664ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 978.1 MB; tracked total 1456.5 MB; max CPU 153%; samples 14; roles gateway 978.1MB/153%, gateway-tree 978.1MB/153%, command-tree 478.7MB/148%, plugin-cli 478.7MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 768.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 978.1 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-bundled-plugin-startup-809ede2b-kova-260725-030412-0b9533
Measurements:
- startup: listening 4774ms; health 5343ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 569ms; post-ready p95 1ms; failures 28; final failures 0; slowest startup-sample/restart 614ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 966.3 MB; tracked total 1441.4 MB; max CPU 156%; samples 14; roles gateway 966.3MB/156%, gateway-tree 966.3MB/156%, command-tree 475.4MB/150%, plugin-cli 475.4MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 745.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 966.3 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-bundled-plugin-startup-5377119f-kova-260725-030412-0b9533
Measurements:
- startup: listening 4517ms; health 5004ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 487ms; post-ready p95 1ms; failures 27; final failures 0; slowest startup-sample/restart 516ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 976.6 MB; tracked total 1455.4 MB; max CPU 153%; samples 14; roles gateway 976.6MB/153%, gateway-tree 976.6MB/153%, command-tree 478.8MB/149%, plugin-cli 478.8MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 719.43ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 976.6 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-agent-cold-warm-message-8e2a29af-kova-260725-030412-0b9533
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 954.3 MB; tracked total 954.3 MB; max CPU 151.9%; samples 16; roles agent-cli 954.3MB/151.9%, command-tree 954.3MB/152.8%, agent-process 954.3MB/151.9%, status-cli 776.4MB/152.8%
- agent: turn 4667ms; cold/warm 4571ms/4667ms; cold-warm delta 0ms; pre-provider 4303ms; provider 1ms; metadata scans 14 (261.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4662.2ms; max 4667ms; pre-provider p95 4295.4ms
- agent CLI attribution: cold known 126ms / unattributed 4025ms; warm known 135ms / unattributed 4168ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4571ms; pre-provider 4151ms; provider 3ms; post-provider 417ms; response true
    - active window: metadata scans 7 (125.85ms total, max 57.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4151ms; provider 3ms; post-provider 417ms; unknown 3690.9ms; source plugins.metadata.scan 460.1ms
  - warm: total 4667ms; pre-provider 4303ms; provider 1ms; post-provider 363ms; response true
    - active window: metadata scans 7 (135.91ms total, max 64.74ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4303ms; provider 1ms; post-provider 363ms; unknown 3842.9ms; source plugins.metadata.scan 460.1ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4151 ms | 126 ms | 4025 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-agent-cold-warm-message-8e2a29af-kova-260725-030412-0b9533/openclaw/timeline.jsonl |
  | warm | 4303 ms | 135 ms | 4168 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-agent-cold-warm-message-8e2a29af-kova-260725-030412-0b9533/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 65 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-agent-cold-warm-message-2ab680e0-kova-260725-030412-0b9533
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 974.1 MB; tracked total 974.1 MB; max CPU 154.7%; samples 16; roles agent-cli 974.1MB/154.7%, agent-process 974.1MB/154.7%, command-tree 974.1MB/154.7%, status-cli 741.6MB/152.7%
- agent: turn 4727ms; cold/warm 4727ms/4633ms; cold-warm delta 94ms; pre-provider 4314ms; provider 3ms; metadata scans 14 (263.3ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4722.3ms; max 4727ms; pre-provider p95 4311.8ms
- agent CLI attribution: cold known 130ms / unattributed 4184ms; warm known 131ms / unattributed 4139ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4727ms; pre-provider 4314ms; provider 3ms; post-provider 410ms; response true
    - active window: metadata scans 7 (131.06ms total, max 57.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4314ms; provider 3ms; post-provider 410ms; unknown 3852.91ms; source plugins.metadata.scan 461.09ms
  - warm: total 4633ms; pre-provider 4270ms; provider 1ms; post-provider 362ms; response true
    - active window: metadata scans 7 (132.24ms total, max 63.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4270ms; provider 1ms; post-provider 362ms; unknown 3808.91ms; source plugins.metadata.scan 461.09ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4314 ms | 130 ms | 4184 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-agent-cold-warm-message-2ab680e0-kova-260725-030412-0b9533/openclaw/timeline.jsonl |
  | warm | 4270 ms | 131 ms | 4139 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-agent-cold-warm-message-2ab680e0-kova-260725-030412-0b9533/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-agent-cold-warm-message-67b331a3-kova-260725-030412-0b9533
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 961.8 MB; tracked total 961.8 MB; max CPU 151.9%; samples 16; roles agent-cli 961.8MB/151.9%, command-tree 961.8MB/154.7%, agent-process 961.8MB/151.9%, status-cli 759.5MB/154.7%
- agent: turn 4682ms; cold/warm 4682ms/4572ms; cold-warm delta 110ms; pre-provider 4262ms; provider 3ms; metadata scans 14 (265.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4676.5ms; max 4682ms; pre-provider p95 4259.95ms
- agent CLI attribution: cold known 134ms / unattributed 4128ms; warm known 128ms / unattributed 4093ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4682ms; pre-provider 4262ms; provider 3ms; post-provider 417ms; response true
    - active window: metadata scans 7 (133.7ms total, max 63.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4262ms; provider 3ms; post-provider 417ms; unknown 3789.15ms; source plugins.metadata.scan 472.85ms
  - warm: total 4572ms; pre-provider 4221ms; provider 1ms; post-provider 350ms; response true
    - active window: metadata scans 7 (131.53ms total, max 62.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4221ms; provider 1ms; post-provider 350ms; unknown 3748.15ms; source plugins.metadata.scan 472.85ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4262 ms | 134 ms | 4128 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-agent-cold-warm-message-67b331a3-kova-260725-030412-0b9533/openclaw/timeline.jsonl |
  | warm | 4221 ms | 128 ms | 4093 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-agent-cold-warm-message-67b331a3-kova-260725-030412-0b9533/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 134 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 62 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-030412-0b9533-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-030412-0b9533-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-030412-0b9533-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-fresh-install-fresh-r1-697fad55-kova-260725-030412-0b9533
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-fresh-install-fresh-r2-da880701-kova-260725-030412-0b9533
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-030412-0b9533
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-fresh-install-onboarded-9f99e904-kova-260725-030412-0b9533
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-fresh-install-onboarded-f9c24855-kova-260725-030412-0b9533
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-fresh-install-onboarded-fe872c26-kova-260725-030412-0b9533
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-030412-0b9533
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-030412-0b9533
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-030412-0b9533/kova-bundled-runtime-deps-mi-150715ba-kova-260725-030412-0b9533
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzscatj-420-548d0a71`
- Result: removed
- Duration: 417ms

