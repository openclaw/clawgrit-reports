# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 976.3 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 976.3 MB exceeded threshold 950 MB |
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
| Run ID | `kova-260724-205900-8be1f3` |
| Generated | 2026-07-24T21:09:01.605Z |
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
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 976.3 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5503 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 958.9 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5640 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 974.9 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5590 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 6408ms | 976.8MB | n/a | 157% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5892ms | 966.4MB | n/a | 155% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5519ms | 951.3MB | n/a | 154% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5590ms | 974.9MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 158.4% | 5019ms | 4950ms | 4565ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5443ms | 962.7MB | n/a | 154% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 6917ms | 980.5 MB | 1648.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 6408ms | 975.5 MB | 1673.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5716ms | 976.8 MB | 1662.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 6198ms | 964.3 MB | 1647.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5046ms | 975.5 MB | 1678.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5892ms | 966.4 MB | 1648.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5813ms | 951.3 MB | 956.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5467ms | 949.9 MB | 955.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5519ms | 962.3 MB | 967.7 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5503ms | 976.3 MB | 1446 MB | n/a | n/a | gateway peak RSS 976.3 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5640ms | 958.9 MB | 1410.9 MB | n/a | n/a | gateway peak RSS 958.9 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5590ms | 974.9 MB | 1444.6 MB | n/a | n/a | gateway peak RSS 974.9 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 966.4 MB | 4835ms | 5056ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 976.7 MB | 5149ms | 4824ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 959 MB | 5019ms | 4950ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5443ms | 962.7 MB | 1680 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5397ms | 949.8 MB | 1667.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5469ms | 978.7 MB | 1695.7 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 980.5 MB (scenario fresh-install/fresh); CPU 160% (scenario fresh-install/fresh)
- command-tree: RSS 976.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173% (scenario fresh-install/fresh)
- gateway-tree: RSS 980.5 MB (scenario fresh-install/fresh); CPU 160% (scenario fresh-install/fresh)
- plugin-cli: RSS 694.6 MB (scenario fresh-install/fresh); CPU 173% (scenario fresh-install/fresh)
- agent-cli: RSS 976.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 768.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170% (scenario fresh-install/fresh)
- agent-process: RSS 976.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 554.5 MB (scenario fresh-install/onboarded-user); CPU 157% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-bundled-plugin-startup-4a0cbdf7-kova-260724-205900-8be1f3
Measurements:
- startup: listening 4771ms; health 5503ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 732ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/restart 734ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 976.3 MB; tracked total 1446 MB; max CPU 154%; samples 14; roles gateway 976.3MB/154%, gateway-tree 976.3MB/154%, command-tree 470MB/146%, plugin-cli 470MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 822.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 976.3 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-bundled-plugin-startup-809ede2b-kova-260724-205900-8be1f3
Measurements:
- startup: listening 5025ms; health 5640ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 555ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/gateway-start 615ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 958.9 MB; tracked total 1410.9 MB; max CPU 152%; samples 14; roles gateway 958.9MB/152%, gateway-tree 958.9MB/152%, command-tree 452.3MB/149%, plugin-cli 452.3MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 811.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 958.9 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-bundled-plugin-startup-5377119f-kova-260724-205900-8be1f3
Measurements:
- startup: listening 5028ms; health 5590ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 481ms; post-ready p95 2ms; failures 30; final failures 0; slowest startup-sample/gateway-start 562ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 974.9 MB; tracked total 1444.6 MB; max CPU 157%; samples 14; roles gateway 974.9MB/157%, gateway-tree 974.9MB/157%, command-tree 470MB/150%, plugin-cli 470MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 799.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 974.9 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-agent-cold-warm-message-8e2a29af-kova-260724-205900-8be1f3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 966.4 MB; tracked total 966.4 MB; max CPU 158.8%; samples 16; roles agent-cli 966.4MB/158.8%, agent-process 966.4MB/158.8%, command-tree 966.4MB/158.8%, status-cli 756.8MB/156.9%
- agent: turn 5056ms; cold/warm 4835ms/5056ms; cold-warm delta 0ms; pre-provider 4670ms; provider 2ms; metadata scans 14 (268.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5044.95ms; max 5056ms; pre-provider p95 4657.2ms
- agent CLI attribution: cold known 127ms / unattributed 4287ms; warm known 143ms / unattributed 4527ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 70.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4835ms; pre-provider 4414ms; provider 3ms; post-provider 418ms; response true
    - active window: metadata scans 7 (126.13ms total, max 59.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4414ms; provider 3ms; post-provider 418ms; unknown 3937.07ms; source plugins.metadata.scan 476.93ms
  - warm: total 5056ms; pre-provider 4670ms; provider 2ms; post-provider 384ms; response true
    - active window: metadata scans 7 (142.23ms total, max 70.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4670ms; provider 2ms; post-provider 384ms; unknown 4193.07ms; source plugins.metadata.scan 476.93ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4414 ms | 127 ms | 4287 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-agent-cold-warm-message-8e2a29af-kova-260724-205900-8be1f3/openclaw/timeline.jsonl |
  | warm | 4670 ms | 143 ms | 4527 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-agent-cold-warm-message-8e2a29af-kova-260724-205900-8be1f3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 143 ms | 71 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-agent-cold-warm-message-2ab680e0-kova-260724-205900-8be1f3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 976.7 MB; tracked total 976.7 MB; max CPU 158.4%; samples 17; roles agent-cli 976.7MB/158.4%, agent-process 976.7MB/158.4%, command-tree 976.7MB/158.4%, status-cli 760.8MB/154.7%
- agent: turn 5149ms; cold/warm 5149ms/4824ms; cold-warm delta 325ms; pre-provider 4690ms; provider 3ms; metadata scans 14 (280.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5132.75ms; max 5149ms; pre-provider p95 4676.95ms
- agent CLI attribution: cold known 137ms / unattributed 4553ms; warm known 144ms / unattributed 4285ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5149ms; pre-provider 4690ms; provider 3ms; post-provider 456ms; response true
    - active window: metadata scans 7 (136.63ms total, max 66.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4690ms; provider 3ms; post-provider 456ms; unknown 4191.13ms; source plugins.metadata.scan 498.87ms
  - warm: total 4824ms; pre-provider 4429ms; provider 1ms; post-provider 394ms; response true
    - active window: metadata scans 7 (144.13ms total, max 67.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4429ms; provider 1ms; post-provider 394ms; unknown 3930.13ms; source plugins.metadata.scan 498.87ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4690 ms | 137 ms | 4553 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-agent-cold-warm-message-2ab680e0-kova-260724-205900-8be1f3/openclaw/timeline.jsonl |
  | warm | 4429 ms | 144 ms | 4285 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-agent-cold-warm-message-2ab680e0-kova-260724-205900-8be1f3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 144 ms | 67 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-agent-cold-warm-message-67b331a3-kova-260724-205900-8be1f3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 959 MB; tracked total 959 MB; max CPU 157.7%; samples 16; roles agent-cli 959MB/157.7%, command-tree 959MB/157.9%, agent-process 959MB/157.7%, status-cli 768.5MB/157.9%
- agent: turn 5019ms; cold/warm 5019ms/4950ms; cold-warm delta 69ms; pre-provider 4565ms; provider 3ms; metadata scans 14 (290.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5015.55ms; max 5019ms; pre-provider p95 4567.85ms
- agent CLI attribution: cold known 154ms / unattributed 4411ms; warm known 135ms / unattributed 4433ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5019ms; pre-provider 4565ms; provider 3ms; post-provider 451ms; response true
    - active window: metadata scans 7 (152.79ms total, max 65.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4565ms; provider 3ms; post-provider 451ms; unknown 4050.6ms; source plugins.metadata.scan 514.4ms
  - warm: total 4950ms; pre-provider 4568ms; provider 1ms; post-provider 381ms; response true
    - active window: metadata scans 7 (137.32ms total, max 66.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4568ms; provider 1ms; post-provider 381ms; unknown 4053.6ms; source plugins.metadata.scan 514.4ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4565 ms | 154 ms | 4411 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-agent-cold-warm-message-67b331a3-kova-260724-205900-8be1f3/openclaw/timeline.jsonl |
  | warm | 4568 ms | 135 ms | 4433 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-agent-cold-warm-message-67b331a3-kova-260724-205900-8be1f3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 154 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 67 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-205900-8be1f3-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-205900-8be1f3-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-205900-8be1f3-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-fresh-install-fresh-r1-697fad55-kova-260724-205900-8be1f3
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-fresh-install-fresh-r2-da880701-kova-260724-205900-8be1f3
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-205900-8be1f3
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-fresh-install-onboarded-9f99e904-kova-260724-205900-8be1f3
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-fresh-install-onboarded-f9c24855-kova-260724-205900-8be1f3
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-fresh-install-onboarded-fe872c26-kova-260724-205900-8be1f3
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-205900-8be1f3
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-205900-8be1f3
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-205900-8be1f3/kova-bundled-runtime-deps-mi-150715ba-kova-260724-205900-8be1f3
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzfan63-427-0a3c828d`
- Result: removed
- Duration: 461ms

