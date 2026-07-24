# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 1014.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014.7 MB, agent-process 1014.7 MB, command-tree 1014.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 1014.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014.7 MB, agent-process 1014.7 MB, command-tree 1014.7 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 18 (PASS:14, FAIL:4) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260724-210805-7525d6` |
| Generated | 2026-07-24T21:17:19.834Z |
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
| PASS | 14 |
| FAIL | 4 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 974.2 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 5356 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 961.7 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 6019 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 988.5 MB exceeded threshold 950 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 6141 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1014.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014.7 MB, agent-process 1014.7 MB, command-tree 1014.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1014.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1014.7 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1014.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1014.7 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1014.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 6078ms | 980.1MB | n/a | 156% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5729ms | 979.9MB | n/a | 154% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5321ms | 964.1MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 6019ms | 974.2MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:1, PASS:2 | n/a | 0MB | n/a | 157.9% | 5126ms | 5309ms | 4642ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 6178ms | 977.2MB | n/a | 157% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 6078ms | 980.1 MB | 1683 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 6426ms | 984.9 MB | 1651.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5562ms | 960.3 MB | 1676.8 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5699ms | 979.9 MB | 1685.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5788ms | 966.1 MB | 1673.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5729ms | 980.5 MB | 1641.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5321ms | 964.1 MB | 969.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5107ms | 961.6 MB | 966.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5814ms | 966.9 MB | 972.3 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5356ms | 974.2 MB | 1686.7 MB | n/a | n/a | gateway peak RSS 974.2 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 6019ms | 961.7 MB | 1421.5 MB | n/a | n/a | gateway peak RSS 961.7 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 6141ms | 988.5 MB | 1693.7 MB | n/a | n/a | gateway peak RSS 988.5 MB exceeded threshold 950 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1014.7 MB | 5300ms | 6168ms | agent-cli peak RSS 1014.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014.7 MB, agent-process 1014.7 MB, command-tree 1014.7 MB |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 997.8 MB | 5123ms | 5309ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 998.2 MB | 5126ms | 5269ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5834ms | 977.3 MB | 1687.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 6178ms | 963.8 MB | 1654 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 7579ms | 977.2 MB | 1698 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1014.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.3% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1014.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1014.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 756 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 988.5 MB (scenario bundled-plugin-startup/fresh); CPU 167% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 988.5 MB (scenario bundled-plugin-startup/fresh); CPU 167% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 719.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 166% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 612.3 MB (scenario fresh-install/fresh); CPU 164% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-bundled-plugin-startup-4a0cbdf7-kova-260724-210805-7525d6
Measurements:
- startup: listening 4770ms; health 5356ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 586ms; post-ready p95 2ms; failures 29; final failures 0; slowest startup-sample/restart 737ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 974.2 MB; tracked total 1686.7 MB; max CPU 152%; samples 16; roles gateway 974.2MB/152%, command-tree 712.7MB/153%, gateway-tree 974.2MB/152%, plugin-cli 712.7MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 872.09ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 974.2 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-bundled-plugin-startup-809ede2b-kova-260724-210805-7525d6
Measurements:
- startup: listening 5534ms; health 6019ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 485ms; post-ready p95 3ms; failures 33; final failures 0; slowest startup-sample/restart 589ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 961.7 MB; tracked total 1421.5 MB; max CPU 156%; samples 16; roles gateway 961.7MB/156%, gateway-tree 961.7MB/156%, command-tree 460.1MB/151%, plugin-cli 460.1MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 852.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 961.7 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-bundled-plugin-startup-5377119f-kova-260724-210805-7525d6
Measurements:
- startup: listening 5284ms; health 6141ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 720ms; post-ready p95 2ms; failures 31; final failures 0; slowest startup-sample/gateway-start 857ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 988.5 MB; tracked total 1693.7 MB; max CPU 158%; samples 17; roles gateway 988.5MB/158%, command-tree 705.2MB/164%, gateway-tree 988.5MB/158%, plugin-cli 705.2MB/164%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 977.71ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 988.5 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-agent-cold-warm-message-8e2a29af-kova-260724-210805-7525d6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1014.7 MB; tracked total 1014.7 MB; max CPU 169.3%; samples 19; roles agent-cli 1014.7MB/169.3%, agent-process 1014.7MB/169.3%, command-tree 1014.7MB/169.3%, status-cli 754.2MB/158.9%
- agent: turn 6168ms; cold/warm 5300ms/6168ms; cold-warm delta 0ms; pre-provider 5675ms; provider 1ms; metadata scans 14 (300.81ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6124.6ms; max 6168ms; pre-provider p95 5630.9ms
- agent CLI attribution: cold known 136ms / unattributed 4657ms; warm known 168ms / unattributed 5507ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1014.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014.7 MB, agent-process 1014.7 MB, command-tree 1014.7 MB
  - agent-cli peak RSS 1014.7 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1014.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5300ms; pre-provider 4793ms; provider 4ms; post-provider 503ms; response true
    - active window: metadata scans 7 (134.87ms total, max 63.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4793ms; provider 4ms; post-provider 503ms; unknown 4261.01ms; source plugins.metadata.scan 531.99ms
  - warm: total 6168ms; pre-provider 5675ms; provider 1ms; post-provider 492ms; response true
    - active window: metadata scans 7 (165.94ms total, max 81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5675ms; provider 1ms; post-provider 492ms; unknown 5143.01ms; source plugins.metadata.scan 531.99ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4793 ms | 136 ms | 4657 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-agent-cold-warm-message-8e2a29af-kova-260724-210805-7525d6/openclaw/timeline.jsonl |
  | warm | 5675 ms | 168 ms | 5507 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-agent-cold-warm-message-8e2a29af-kova-260724-210805-7525d6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 136 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 168 ms | 81 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-agent-cold-warm-message-2ab680e0-kova-260724-210805-7525d6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 997.8 MB; tracked total 997.8 MB; max CPU 156.9%; samples 18; roles agent-cli 997.8MB/156.9%, command-tree 997.8MB/161.7%, agent-process 997.8MB/156.9%, status-cli 756MB/161.7%
- agent: turn 5309ms; cold/warm 5123ms/5309ms; cold-warm delta 0ms; pre-provider 4900ms; provider 1ms; metadata scans 14 (302.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5299.7ms; max 5309ms; pre-provider p95 4886.45ms
- agent CLI attribution: cold known 140ms / unattributed 4489ms; warm known 163ms / unattributed 4737ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 81.44ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5123ms; pre-provider 4629ms; provider 3ms; post-provider 491ms; response true
    - active window: metadata scans 7 (140.78ms total, max 63.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4629ms; provider 3ms; post-provider 491ms; unknown 4092.17ms; source plugins.metadata.scan 536.83ms
  - warm: total 5309ms; pre-provider 4900ms; provider 1ms; post-provider 408ms; response true
    - active window: metadata scans 7 (161.78ms total, max 81.44ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4900ms; provider 1ms; post-provider 408ms; unknown 4363.17ms; source plugins.metadata.scan 536.83ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4629 ms | 140 ms | 4489 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-agent-cold-warm-message-2ab680e0-kova-260724-210805-7525d6/openclaw/timeline.jsonl |
  | warm | 4900 ms | 163 ms | 4737 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-agent-cold-warm-message-2ab680e0-kova-260724-210805-7525d6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 140 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 163 ms | 81 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-agent-cold-warm-message-67b331a3-kova-260724-210805-7525d6
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 998.2 MB; tracked total 998.2 MB; max CPU 157.9%; samples 18; roles agent-cli 998.2MB/157.9%, command-tree 998.2MB/160.9%, agent-process 998.2MB/157.9%, status-cli 754.4MB/160.9%
- agent: turn 5269ms; cold/warm 5126ms/5269ms; cold-warm delta 0ms; pre-provider 4870ms; provider 1ms; metadata scans 14 (304.65ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5261.85ms; max 5269ms; pre-provider p95 4858.6ms
- agent CLI attribution: cold known 152ms / unattributed 4490ms; warm known 152ms / unattributed 4718ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5126ms; pre-provider 4642ms; provider 3ms; post-provider 481ms; response true
    - active window: metadata scans 7 (153.06ms total, max 71.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4642ms; provider 3ms; post-provider 481ms; unknown 4120.69ms; source plugins.metadata.scan 521.31ms
  - warm: total 5269ms; pre-provider 4870ms; provider 1ms; post-provider 398ms; response true
    - active window: metadata scans 7 (151.59ms total, max 72.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4870ms; provider 1ms; post-provider 398ms; unknown 4348.69ms; source plugins.metadata.scan 521.31ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4642 ms | 152 ms | 4490 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-agent-cold-warm-message-67b331a3-kova-260724-210805-7525d6/openclaw/timeline.jsonl |
  | warm | 4870 ms | 152 ms | 4718 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-agent-cold-warm-message-67b331a3-kova-260724-210805-7525d6/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 152 ms | 71 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 152 ms | 72 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-210805-7525d6-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-210805-7525d6-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-210805-7525d6-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-fresh-install-fresh-r1-697fad55-kova-260724-210805-7525d6
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-fresh-install-fresh-r2-da880701-kova-260724-210805-7525d6
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-210805-7525d6
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-fresh-install-onboarded-9f99e904-kova-260724-210805-7525d6
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-fresh-install-onboarded-f9c24855-kova-260724-210805-7525d6
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-fresh-install-onboarded-fe872c26-kova-260724-210805-7525d6
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-210805-7525d6
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-210805-7525d6
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-210805-7525d6/kova-bundled-runtime-deps-mi-150715ba-kova-260724-210805-7525d6
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzfmbub-41v-36a84ff4`
- Result: removed
- Duration: 450ms

