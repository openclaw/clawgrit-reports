# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 966.2 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 966.2 MB exceeded threshold 950 MB |
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
| Run ID | `kova-260724-214308-89e262` |
| Generated | 2026-07-24T21:51:29.181Z |
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
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 966.2 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5221 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 960.5 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5066 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 967.5 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5365 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5209ms | 959.9MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5937ms | 979.5MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5247ms | 950.1MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5221ms | 966.2MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153.4% | 4919ms | 4891ms | 4421ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5322ms | 977.8MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 6010ms | 948.3 MB | 1639.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5148ms | 959.9 MB | 1665.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5209ms | 964.5 MB | 1682.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5412ms | 973.9 MB | 1679 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 6106ms | 1027 MB | 1725.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5937ms | 979.5 MB | 1695.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5155ms | 965.2 MB | 970.9 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5247ms | 950.1 MB | 955.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6295ms | 940.2 MB | 945.4 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5221ms | 966.2 MB | 1436.4 MB | n/a | n/a | gateway peak RSS 966.2 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5066ms | 960.5 MB | 1433.4 MB | n/a | n/a | gateway peak RSS 960.5 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5365ms | 967.5 MB | 1441.8 MB | n/a | n/a | gateway peak RSS 967.5 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 919.6 MB | 4919ms | 4741ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 960.6 MB | 4829ms | 4891ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 971.4 MB | 5045ms | 5019ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5485ms | 976.9 MB | 1690.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5130ms | 978 MB | 1676.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5322ms | 977.8 MB | 1638.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1027 MB (scenario fresh-install/onboarded-user); CPU 155% (scenario fresh-install/onboarded-user)
- command-tree: RSS 971.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163% (scenario fresh-install/fresh)
- gateway-tree: RSS 1027 MB (scenario fresh-install/onboarded-user); CPU 155% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 715.9 MB (scenario fresh-install/onboarded-user); CPU 163% (scenario fresh-install/fresh)
- agent-cli: RSS 971.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 759.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 971.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 609.9 MB (scenario fresh-install/fresh); CPU 146% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-bundled-plugin-startup-4a0cbdf7-kova-260724-214308-89e262
Measurements:
- startup: listening 4770ms; health 5221ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 451ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/restart 643ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 966.2 MB; tracked total 1436.4 MB; max CPU 155%; samples 14; roles gateway 966.2MB/155%, gateway-tree 966.2MB/155%, command-tree 470.5MB/146%, plugin-cli 470.5MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 768.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 966.2 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-bundled-plugin-startup-809ede2b-kova-260724-214308-89e262
Measurements:
- startup: listening 4521ms; health 5066ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 545ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/restart 724ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 960.5 MB; tracked total 1433.4 MB; max CPU 153%; samples 14; roles gateway 960.5MB/153%, gateway-tree 960.5MB/153%, command-tree 473.1MB/148%, plugin-cli 473.1MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 787.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 960.5 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-bundled-plugin-startup-5377119f-kova-260724-214308-89e262
Measurements:
- startup: listening 4777ms; health 5365ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 508ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/gateway-start 588ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 967.5 MB; tracked total 1441.8 MB; max CPU 154%; samples 14; roles gateway 967.5MB/154%, gateway-tree 967.5MB/154%, command-tree 474.6MB/149%, plugin-cli 474.6MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 720.26ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 967.5 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-agent-cold-warm-message-8e2a29af-kova-260724-214308-89e262
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 919.6 MB; tracked total 919.6 MB; max CPU 151.9%; samples 16; roles agent-cli 919.6MB/151.9%, command-tree 919.6MB/154.7%, agent-process 919.6MB/151.9%, status-cli 759.5MB/154.7%
- agent: turn 4919ms; cold/warm 4919ms/4741ms; cold-warm delta 178ms; pre-provider 4421ms; provider 3ms; metadata scans 14 (260.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4910.1ms; max 4919ms; pre-provider p95 4417.6ms
- agent CLI attribution: cold known 130ms / unattributed 4291ms; warm known 132ms / unattributed 4221ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4919ms; pre-provider 4421ms; provider 3ms; post-provider 495ms; response true
    - active window: metadata scans 7 (129.52ms total, max 58.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4421ms; provider 3ms; post-provider 495ms; unknown 3957.27ms; source plugins.metadata.scan 463.73ms
  - warm: total 4741ms; pre-provider 4353ms; provider 1ms; post-provider 387ms; response true
    - active window: metadata scans 7 (130.59ms total, max 65.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4353ms; provider 1ms; post-provider 387ms; unknown 3889.27ms; source plugins.metadata.scan 463.73ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4421 ms | 130 ms | 4291 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-agent-cold-warm-message-8e2a29af-kova-260724-214308-89e262/openclaw/timeline.jsonl |
  | warm | 4353 ms | 132 ms | 4221 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-agent-cold-warm-message-8e2a29af-kova-260724-214308-89e262/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 132 ms | 66 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-agent-cold-warm-message-2ab680e0-kova-260724-214308-89e262
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 960.6 MB; tracked total 960.6 MB; max CPU 153.4%; samples 16; roles agent-cli 960.6MB/153.4%, command-tree 960.6MB/156.9%, agent-process 960.6MB/153.4%, status-cli 757.4MB/156.9%
- agent: turn 4891ms; cold/warm 4829ms/4891ms; cold-warm delta 0ms; pre-provider 4507ms; provider 1ms; metadata scans 14 (272.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4887.9ms; max 4891ms; pre-provider p95 4501.45ms
- agent CLI attribution: cold known 127ms / unattributed 4269ms; warm known 145ms / unattributed 4362ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4829ms; pre-provider 4396ms; provider 3ms; post-provider 430ms; response true
    - active window: metadata scans 7 (128.3ms total, max 58.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4396ms; provider 3ms; post-provider 430ms; unknown 3904.33ms; source plugins.metadata.scan 491.67ms
  - warm: total 4891ms; pre-provider 4507ms; provider 1ms; post-provider 383ms; response true
    - active window: metadata scans 7 (144.41ms total, max 68.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4507ms; provider 1ms; post-provider 383ms; unknown 4015.33ms; source plugins.metadata.scan 491.67ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4396 ms | 127 ms | 4269 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-agent-cold-warm-message-2ab680e0-kova-260724-214308-89e262/openclaw/timeline.jsonl |
  | warm | 4507 ms | 145 ms | 4362 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-agent-cold-warm-message-2ab680e0-kova-260724-214308-89e262/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 145 ms | 68 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-agent-cold-warm-message-67b331a3-kova-260724-214308-89e262
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 971.4 MB; tracked total 971.4 MB; max CPU 153.9%; samples 16; roles agent-cli 971.4MB/153.9%, command-tree 971.4MB/156.7%, agent-process 971.4MB/153.9%, status-cli 759.2MB/156.7%
- agent: turn 5045ms; cold/warm 5045ms/5019ms; cold-warm delta 26ms; pre-provider 4609ms; provider 2ms; metadata scans 14 (290.37ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5043.7ms; max 5045ms; pre-provider p95 4648.9ms
- agent CLI attribution: cold known 141ms / unattributed 4468ms; warm known 151ms / unattributed 4500ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5045ms; pre-provider 4609ms; provider 2ms; post-provider 434ms; response true
    - active window: metadata scans 7 (141.77ms total, max 66.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4609ms; provider 2ms; post-provider 434ms; unknown 4080.71ms; source plugins.metadata.scan 528.29ms
  - warm: total 5019ms; pre-provider 4651ms; provider 1ms; post-provider 367ms; response true
    - active window: metadata scans 7 (148.6ms total, max 75.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4651ms; provider 1ms; post-provider 367ms; unknown 4122.71ms; source plugins.metadata.scan 528.29ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4609 ms | 141 ms | 4468 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-agent-cold-warm-message-67b331a3-kova-260724-214308-89e262/openclaw/timeline.jsonl |
  | warm | 4651 ms | 151 ms | 4500 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-agent-cold-warm-message-67b331a3-kova-260724-214308-89e262/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 151 ms | 76 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-214308-89e262-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-214308-89e262-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-214308-89e262-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-fresh-install-fresh-r1-697fad55-kova-260724-214308-89e262
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-fresh-install-fresh-r2-da880701-kova-260724-214308-89e262
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-214308-89e262
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-fresh-install-onboarded-9f99e904-kova-260724-214308-89e262
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-fresh-install-onboarded-f9c24855-kova-260724-214308-89e262
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-fresh-install-onboarded-fe872c26-kova-260724-214308-89e262
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-214308-89e262
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-214308-89e262
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-214308-89e262/kova-bundled-runtime-deps-mi-150715ba-kova-260724-214308-89e262
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzgveno-423-2c0914d8`
- Result: removed
- Duration: 406ms

