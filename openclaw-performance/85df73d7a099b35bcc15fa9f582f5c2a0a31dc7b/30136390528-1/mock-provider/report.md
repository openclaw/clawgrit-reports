# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 975.3 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 975.3 MB exceeded threshold 950 MB |
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
| Run ID | `kova-260725-003013-babfe5` |
| Generated | 2026-07-25T00:37:46.539Z |
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
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 975.3 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5117 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 977.3 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 4981 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 979.9 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5061 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5041ms | 982.5MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5004ms | 976.2MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5271ms | 965.3MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5061ms | 977.3MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.9% | 4553ms | 4504ms | 4141ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5008ms | 979.6MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5570ms | 974.4 MB | 1672.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5041ms | 982.8 MB | 1699.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5033ms | 982.5 MB | 1521.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5021ms | 986.8 MB | 1703.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5004ms | 964 MB | 1669.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4997ms | 976.2 MB | 1697.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5193ms | 965.3 MB | 970.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5330ms | 944.9 MB | 944.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5271ms | 971 MB | 976.3 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5117ms | 975.3 MB | 1450.1 MB | n/a | n/a | gateway peak RSS 975.3 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 4981ms | 977.3 MB | 1453 MB | n/a | n/a | gateway peak RSS 977.3 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5061ms | 979.9 MB | 1453.6 MB | n/a | n/a | gateway peak RSS 979.9 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 979.4 MB | 4608ms | 4516ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 998.8 MB | 4508ms | 4504ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 984.5 MB | 4553ms | 4481ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 4998ms | 970.2 MB | 1699.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5019ms | 986.4 MB | 1708 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5008ms | 979.6 MB | 1710 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 998.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 986.8 MB (scenario fresh-install/onboarded-user); CPU 157% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-process: RSS 998.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 986.8 MB (scenario fresh-install/onboarded-user); CPU 157% (scenario bundled-runtime-deps/missing-plugin-index)
- command-tree: RSS 998.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 762.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 608 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 478.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-bundled-plugin-startup-4a0cbdf7-kova-260725-003013-babfe5
Measurements:
- startup: listening 4521ms; health 5117ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 485ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/gateway-start 596ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 975.3 MB; tracked total 1450.1 MB; max CPU 154%; samples 14; roles gateway 975.3MB/154%, gateway-tree 975.3MB/154%, command-tree 474.8MB/149%, plugin-cli 474.8MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 743.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 975.3 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-bundled-plugin-startup-809ede2b-kova-260725-003013-babfe5
Measurements:
- startup: listening 4519ms; health 4981ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 462ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/restart 491ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 977.3 MB; tracked total 1453 MB; max CPU 155%; samples 14; roles gateway 977.3MB/155%, gateway-tree 977.3MB/155%, command-tree 475.7MB/150%, plugin-cli 475.7MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 737.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 977.3 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-bundled-plugin-startup-5377119f-kova-260725-003013-babfe5
Measurements:
- startup: listening 4519ms; health 5061ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 521ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/gateway-start 542ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 979.9 MB; tracked total 1453.6 MB; max CPU 154%; samples 14; roles gateway 979.9MB/154%, gateway-tree 979.9MB/154%, command-tree 473.7MB/147%, plugin-cli 473.7MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 708.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 979.9 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-agent-cold-warm-message-8e2a29af-kova-260725-003013-babfe5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 979.4 MB; tracked total 979.4 MB; max CPU 154.9%; samples 16; roles agent-cli 979.4MB/154.9%, agent-process 979.4MB/154.9%, command-tree 979.4MB/154.9%, status-cli 738.8MB/154.8%
- agent: turn 4608ms; cold/warm 4608ms/4516ms; cold-warm delta 92ms; pre-provider 4190ms; provider 3ms; metadata scans 14 (250.58ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4603.4ms; max 4608ms; pre-provider p95 4188.4ms
- agent CLI attribution: cold known 124ms / unattributed 4066ms; warm known 127ms / unattributed 4031ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4608ms; pre-provider 4190ms; provider 3ms; post-provider 415ms; response true
    - active window: metadata scans 7 (124.8ms total, max 56.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4190ms; provider 3ms; post-provider 415ms; unknown 3741.81ms; source plugins.metadata.scan 448.19ms
  - warm: total 4516ms; pre-provider 4158ms; provider 1ms; post-provider 357ms; response true
    - active window: metadata scans 7 (125.78ms total, max 62.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4158ms; provider 1ms; post-provider 357ms; unknown 3709.81ms; source plugins.metadata.scan 448.19ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4190 ms | 124 ms | 4066 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-agent-cold-warm-message-8e2a29af-kova-260725-003013-babfe5/openclaw/timeline.jsonl |
  | warm | 4158 ms | 127 ms | 4031 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-agent-cold-warm-message-8e2a29af-kova-260725-003013-babfe5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 124 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 63 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-agent-cold-warm-message-2ab680e0-kova-260725-003013-babfe5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 998.8 MB; tracked total 998.8 MB; max CPU 152.9%; samples 16; roles agent-cli 998.8MB/152.9%, agent-process 998.8MB/152.9%, command-tree 998.8MB/152.9%, status-cli 762.1MB/152.8%
- agent: turn 4508ms; cold/warm 4508ms/4504ms; cold-warm delta 4ms; pre-provider 4112ms; provider 2ms; metadata scans 14 (250.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4507.8ms; max 4508ms; pre-provider p95 4136.7ms
- agent CLI attribution: cold known 122ms / unattributed 3990ms; warm known 126ms / unattributed 4012ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4508ms; pre-provider 4112ms; provider 2ms; post-provider 394ms; response true
    - active window: metadata scans 7 (124.04ms total, max 58.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4112ms; provider 2ms; post-provider 394ms; unknown 3659.54ms; source plugins.metadata.scan 452.46ms
  - warm: total 4504ms; pre-provider 4138ms; provider 1ms; post-provider 365ms; response true
    - active window: metadata scans 7 (126.5ms total, max 61.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4138ms; provider 1ms; post-provider 365ms; unknown 3685.54ms; source plugins.metadata.scan 452.46ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4112 ms | 122 ms | 3990 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-agent-cold-warm-message-2ab680e0-kova-260725-003013-babfe5/openclaw/timeline.jsonl |
  | warm | 4138 ms | 126 ms | 4012 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-agent-cold-warm-message-2ab680e0-kova-260725-003013-babfe5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 122 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 61 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-agent-cold-warm-message-67b331a3-kova-260725-003013-babfe5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 984.5 MB; tracked total 984.5 MB; max CPU 154.9%; samples 16; roles agent-cli 984.5MB/154.9%, agent-process 984.5MB/154.9%, command-tree 984.5MB/154.9%, status-cli 762.8MB/154.7%
- agent: turn 4553ms; cold/warm 4553ms/4481ms; cold-warm delta 72ms; pre-provider 4141ms; provider 2ms; metadata scans 14 (249.1ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4549.4ms; max 4553ms; pre-provider p95 4140.05ms
- agent CLI attribution: cold known 125ms / unattributed 4016ms; warm known 125ms / unattributed 3997ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 70.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4553ms; pre-provider 4141ms; provider 2ms; post-provider 410ms; response true
    - active window: metadata scans 7 (124.15ms total, max 57.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4141ms; provider 2ms; post-provider 410ms; unknown 3682.92ms; source plugins.metadata.scan 458.08ms
  - warm: total 4481ms; pre-provider 4122ms; provider 1ms; post-provider 358ms; response true
    - active window: metadata scans 7 (124.95ms total, max 59.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4122ms; provider 1ms; post-provider 358ms; unknown 3663.92ms; source plugins.metadata.scan 458.08ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4141 ms | 125 ms | 4016 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-agent-cold-warm-message-67b331a3-kova-260725-003013-babfe5/openclaw/timeline.jsonl |
  | warm | 4122 ms | 125 ms | 3997 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-agent-cold-warm-message-67b331a3-kova-260725-003013-babfe5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 59 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-003013-babfe5-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-003013-babfe5-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-003013-babfe5-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-fresh-install-fresh-r1-697fad55-kova-260725-003013-babfe5
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-fresh-install-fresh-r2-da880701-kova-260725-003013-babfe5
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-003013-babfe5
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-fresh-install-onboarded-9f99e904-kova-260725-003013-babfe5
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-fresh-install-onboarded-f9c24855-kova-260725-003013-babfe5
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-fresh-install-onboarded-fe872c26-kova-260725-003013-babfe5
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-003013-babfe5
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-003013-babfe5
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-003013-babfe5/kova-bundled-runtime-deps-mi-150715ba-kova-260725-003013-babfe5
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzmu9si-41t-f7fcdd80`
- Result: removed
- Duration: 405ms

