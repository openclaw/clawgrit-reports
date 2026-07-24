# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 981.7 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 981.7 MB exceeded threshold 950 MB |
| Blocking findings | 3 |
| Warnings | 1 |
| Records | 18 (PASS:15, FAIL:3) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260724-205536-161bc8` |
| Generated | 2026-07-24T21:05:41.480Z |
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
| warning | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 OpenClaw diagnostics span(s) from a prior gateway PID were interrupted by an intentional restart | plugins.metadata.scan pid 19602 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 981.7 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5055 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 977 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5112 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 981.8 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 4980 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 6646ms | 977.7MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 6654ms | 964.4MB | n/a | 155% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5142ms | 968.1MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5055ms | 981.7MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153.7% | 4650ms | 4821ms | 4243ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5249ms | 966.3MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 7352ms | 974.2 MB | 1677.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 6140ms | 977.7 MB | 1668.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 6646ms | 978.2 MB | 1689.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 8886ms | 957.7 MB | 1663 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 6654ms | 980.8 MB | 1683.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 6014ms | 964.4 MB | 1647.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 6865ms | 968.1 MB | 973.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5142ms | 968.5 MB | 974 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4985ms | 962.1 MB | 967.5 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5055ms | 981.7 MB | 1453.7 MB | n/a | n/a | gateway peak RSS 981.7 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5112ms | 977 MB | 1452.1 MB | n/a | n/a | gateway peak RSS 977 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 4980ms | 981.8 MB | 1454.5 MB | n/a | n/a | gateway peak RSS 981.8 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 959 MB | 4646ms | 4654ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 974.6 MB | 4650ms | 4901ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 954.7 MB | 4787ms | 4821ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5373ms | 982.8 MB | 1688.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5030ms | 958 MB | 1664 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5249ms | 966.3 MB | 1680.5 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 982.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario fresh-install/onboarded-user)
- command-tree: RSS 974.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 982.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario fresh-install/onboarded-user)
- status-cli: RSS 759.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 974.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 711.2 MB (scenario fresh-install/fresh); CPU 167% (scenario fresh-install/fresh)
- agent-process: RSS 974.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 552.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-bundled-plugin-startup-4a0cbdf7-kova-260724-205536-161bc8
Measurements:
- startup: listening 4521ms; health 5055ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 484ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/gateway-start 534ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 981.7 MB; tracked total 1453.7 MB; max CPU 151%; samples 14; roles gateway 981.7MB/151%, gateway-tree 981.7MB/151%, command-tree 472.3MB/149%, plugin-cli 472.3MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 726.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 981.7 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-bundled-plugin-startup-809ede2b-kova-260724-205536-161bc8
Measurements:
- startup: listening 4521ms; health 5112ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 552ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/gateway-start 591ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 977 MB; tracked total 1452.1 MB; max CPU 155%; samples 14; roles gateway 977MB/155%, gateway-tree 977MB/155%, command-tree 475.4MB/150%, plugin-cli 475.4MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 720.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 977 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-bundled-plugin-startup-5377119f-kova-260724-205536-161bc8
Measurements:
- startup: listening 4520ms; health 4980ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 460ms; post-ready p95 1ms; failures 27; final failures 0; slowest startup-sample/restart 543ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 981.8 MB; tracked total 1454.5 MB; max CPU 153%; samples 14; roles gateway 981.8MB/153%, gateway-tree 981.8MB/153%, command-tree 472.7MB/150%, plugin-cli 472.7MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 744.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 981.8 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-agent-cold-warm-message-8e2a29af-kova-260724-205536-161bc8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 959 MB; tracked total 959 MB; max CPU 153.7%; samples 16; roles agent-cli 959MB/153.7%, agent-process 959MB/153.7%, command-tree 959MB/153.7%, status-cli 756.3MB/152.8%
- agent: turn 4654ms; cold/warm 4646ms/4654ms; cold-warm delta 0ms; pre-provider 4300ms; provider 1ms; metadata scans 14 (253.62ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4653.6ms; max 4654ms; pre-provider p95 4294.3ms
- agent CLI attribution: cold known 120ms / unattributed 4066ms; warm known 133ms / unattributed 4167ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 70.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4646ms; pre-provider 4186ms; provider 3ms; post-provider 457ms; response true
    - active window: metadata scans 7 (122.03ms total, max 56.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4186ms; provider 3ms; post-provider 457ms; unknown 3715.23ms; source plugins.metadata.scan 470.77ms
  - warm: total 4654ms; pre-provider 4300ms; provider 1ms; post-provider 353ms; response true
    - active window: metadata scans 7 (131.59ms total, max 62.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4300ms; provider 1ms; post-provider 353ms; unknown 3829.23ms; source plugins.metadata.scan 470.77ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4186 ms | 120 ms | 4066 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-agent-cold-warm-message-8e2a29af-kova-260724-205536-161bc8/openclaw/timeline.jsonl |
  | warm | 4300 ms | 133 ms | 4167 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-agent-cold-warm-message-8e2a29af-kova-260724-205536-161bc8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 120 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 63 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-agent-cold-warm-message-2ab680e0-kova-260724-205536-161bc8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 974.6 MB; tracked total 974.6 MB; max CPU 151.4%; samples 16; roles agent-cli 974.6MB/151.4%, agent-process 974.6MB/151.4%, command-tree 974.6MB/151.4%, status-cli 759.4MB/150.8%
- agent: turn 4901ms; cold/warm 4650ms/4901ms; cold-warm delta 0ms; pre-provider 4525ms; provider 1ms; metadata scans 14 (272.33ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4888.45ms; max 4901ms; pre-provider p95 4510.9ms
- agent CLI attribution: cold known 130ms / unattributed 4113ms; warm known 143ms / unattributed 4382ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4650ms; pre-provider 4243ms; provider 3ms; post-provider 404ms; response true
    - active window: metadata scans 7 (129.34ms total, max 61.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4243ms; provider 3ms; post-provider 404ms; unknown 3762.64ms; source plugins.metadata.scan 480.36ms
  - warm: total 4901ms; pre-provider 4525ms; provider 1ms; post-provider 375ms; response true
    - active window: metadata scans 7 (142.99ms total, max 65.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4525ms; provider 1ms; post-provider 375ms; unknown 4044.64ms; source plugins.metadata.scan 480.36ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4243 ms | 130 ms | 4113 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-agent-cold-warm-message-2ab680e0-kova-260724-205536-161bc8/openclaw/timeline.jsonl |
  | warm | 4525 ms | 143 ms | 4382 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-agent-cold-warm-message-2ab680e0-kova-260724-205536-161bc8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 143 ms | 65 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-agent-cold-warm-message-67b331a3-kova-260724-205536-161bc8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 954.7 MB; tracked total 954.7 MB; max CPU 154.9%; samples 16; roles agent-cli 954.7MB/154.9%, agent-process 954.7MB/154.9%, command-tree 954.7MB/154.9%, status-cli 730.2MB/154.9%
- agent: turn 4821ms; cold/warm 4787ms/4821ms; cold-warm delta 0ms; pre-provider 4446ms; provider 1ms; metadata scans 14 (265.69ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4819.3ms; max 4821ms; pre-provider p95 4441.45ms
- agent CLI attribution: cold known 126ms / unattributed 4229ms; warm known 142ms / unattributed 4304ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4787ms; pre-provider 4355ms; provider 3ms; post-provider 429ms; response true
    - active window: metadata scans 7 (123.77ms total, max 57.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4355ms; provider 3ms; post-provider 429ms; unknown 3891.61ms; source plugins.metadata.scan 463.39ms
  - warm: total 4821ms; pre-provider 4446ms; provider 1ms; post-provider 374ms; response true
    - active window: metadata scans 7 (141.92ms total, max 69.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4446ms; provider 1ms; post-provider 374ms; unknown 3982.61ms; source plugins.metadata.scan 463.39ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4355 ms | 126 ms | 4229 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-agent-cold-warm-message-67b331a3-kova-260724-205536-161bc8/openclaw/timeline.jsonl |
  | warm | 4446 ms | 142 ms | 4304 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-agent-cold-warm-message-67b331a3-kova-260724-205536-161bc8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 70 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-205536-161bc8-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-205536-161bc8-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-205536-161bc8-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-fresh-install-fresh-r1-697fad55-kova-260724-205536-161bc8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-fresh-install-fresh-r2-da880701-kova-260724-205536-161bc8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-205536-161bc8
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-fresh-install-onboarded-9f99e904-kova-260724-205536-161bc8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-fresh-install-onboarded-f9c24855-kova-260724-205536-161bc8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-fresh-install-onboarded-fe872c26-kova-260724-205536-161bc8
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-205536-161bc8
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-205536-161bc8
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205536-161bc8/kova-bundled-runtime-deps-mi-150715ba-kova-260724-205536-161bc8
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzf69ie-42e-58d50da1`
- Result: removed
- Duration: 597ms

