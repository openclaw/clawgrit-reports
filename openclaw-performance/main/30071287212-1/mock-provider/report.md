# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — 3 final health check(s) failed, over threshold 0

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | 3 final health check(s) failed, over threshold 0 |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 9 (FAIL:4, PASS:5) |

## Proof Completeness

- Completeness: complete: 9
- Required obligations: 142 total, 0 missing, 0 failed
- Categories: command: 79, artifact: 9, cleanup: 9, collector: 9, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260724-060705-144320` |
| Generated | 2026-07-24T06:12:11.469Z |
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
| FAIL | 4 |
| PASS | 5 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 937 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 937 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 956.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 956.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 958.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 958.2 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1000.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1000.6 MB, agent-process 1000.6 MB, command-tree 1000.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1000.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1000.6 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1000.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1000.6 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1000.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 956.7MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4836ms | 949MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:1, PASS:2 | n/a | 0MB | n/a | 155.9% | 4534ms | 4341ms | 4216ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 937 MB | 1623.5 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 956.7 MB | 1605.4 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 958.2 MB | 1684.6 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4865ms | 922.8 MB | 928.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4836ms | 954.2 MB | 959.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4697ms | 949 MB | 954.3 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1000.6 MB | 4534ms | 4341ms | agent-cli peak RSS 1000.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1000.6 MB, agent-process 1000.6 MB, command-tree 1000.6 MB |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 963 MB | 4578ms | 4425ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 978.1 MB | 4340ms | 4302ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1000.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1000.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1000.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 958.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 740.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 958.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 537.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 477.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-gateway-performance-man-005107f3-kova-260724-060705-144320
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 203; final failures 3; slowest startup-sample/cold-start 619ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 937 MB; tracked total 1623.5 MB; max CPU 153%; samples 22; roles gateway 937MB/153%, command-tree 687MB/153%, gateway-tree 937MB/151%, status-cli 687MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 747.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-gateway-performance-man-1e8be6a8-kova-260724-060705-144320
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures 201; final failures 3; slowest startup-sample/cold-start 545ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 956.7 MB; tracked total 1605.4 MB; max CPU 154%; samples 22; roles gateway 956.7MB/154%, command-tree 649.3MB/154%, gateway-tree 956.7MB/154%, status-cli 649.3MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 670.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-gateway-performance-man-958fde53-kova-260724-060705-144320
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 201; final failures 3; slowest startup-sample/cold-start 486ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 958.2 MB; tracked total 1684.6 MB; max CPU 151%; samples 22; roles gateway 958.2MB/151%, command-tree 726.8MB/151%, gateway-tree 958.2MB/151%, status-cli 726.8MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 647.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-8e2a29af-kova-260724-060705-144320
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1000.6 MB; tracked total 1000.6 MB; max CPU 155.9%; samples 16; roles agent-cli 1000.6MB/155.9%, agent-process 1000.6MB/155.9%, command-tree 1000.6MB/155.9%, status-cli 730.2MB/155.4%
- agent: turn 4534ms; cold/warm 4534ms/4341ms; cold-warm delta 193ms; pre-provider 4216ms; provider 3ms; metadata scans 14 (247.19ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4524.35ms; max 4534ms; pre-provider p95 4209.8ms
- agent CLI attribution: cold known 124ms / unattributed 4092ms; warm known 125ms / unattributed 3967ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1000.6 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1000.6 MB, agent-process 1000.6 MB, command-tree 1000.6 MB
  - agent-cli peak RSS 1000.6 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1000.6 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4534ms; pre-provider 4216ms; provider 3ms; post-provider 315ms; response true
    - active window: metadata scans 7 (122.87ms total, max 56.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4216ms; provider 3ms; post-provider 315ms; unknown 3760.15ms; source plugins.metadata.scan 455.85ms
  - warm: total 4341ms; pre-provider 4092ms; provider 1ms; post-provider 248ms; response true
    - active window: metadata scans 7 (124.32ms total, max 60.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4092ms; provider 1ms; post-provider 248ms; unknown 3636.15ms; source plugins.metadata.scan 455.85ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4216 ms | 124 ms | 4092 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-8e2a29af-kova-260724-060705-144320/openclaw/timeline.jsonl |
  | warm | 4092 ms | 125 ms | 3967 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-8e2a29af-kova-260724-060705-144320/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 124 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 60 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-2ab680e0-kova-260724-060705-144320
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 963 MB; tracked total 963 MB; max CPU 156.8%; samples 16; roles agent-cli 963MB/156.8%, agent-process 963MB/156.8%, command-tree 963MB/156.8%, status-cli 729.1MB/154.7%
- agent: turn 4578ms; cold/warm 4578ms/4425ms; cold-warm delta 153ms; pre-provider 4258ms; provider 2ms; metadata scans 14 (258.63ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4570.35ms; max 4578ms; pre-provider p95 4253.25ms
- agent CLI attribution: cold known 130ms / unattributed 4128ms; warm known 131ms / unattributed 4032ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4578ms; pre-provider 4258ms; provider 2ms; post-provider 318ms; response true
    - active window: metadata scans 7 (128.75ms total, max 61.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4258ms; provider 2ms; post-provider 318ms; unknown 3788.34ms; source plugins.metadata.scan 469.66ms
  - warm: total 4425ms; pre-provider 4163ms; provider 1ms; post-provider 261ms; response true
    - active window: metadata scans 7 (129.88ms total, max 64.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4163ms; provider 1ms; post-provider 261ms; unknown 3693.34ms; source plugins.metadata.scan 469.66ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4258 ms | 130 ms | 4128 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-2ab680e0-kova-260724-060705-144320/openclaw/timeline.jsonl |
  | warm | 4163 ms | 131 ms | 4032 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-2ab680e0-kova-260724-060705-144320/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 64 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-67b331a3-kova-260724-060705-144320
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 978.1 MB; tracked total 978.1 MB; max CPU 155.7%; samples 16; roles agent-cli 978.1MB/155.7%, agent-process 978.1MB/155.7%, command-tree 978.1MB/155.7%, status-cli 740.6MB/154.9%
- agent: turn 4340ms; cold/warm 4340ms/4302ms; cold-warm delta 38ms; pre-provider 4052ms; provider 2ms; metadata scans 14 (275.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4338.1ms; max 4340ms; pre-provider p95 4062.45ms
- agent CLI attribution: cold known 134ms / unattributed 3918ms; warm known 142ms / unattributed 3921ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4340ms; pre-provider 4052ms; provider 2ms; post-provider 286ms; response true
    - active window: metadata scans 7 (133.56ms total, max 54.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4052ms; provider 2ms; post-provider 286ms; unknown 3579.38ms; source plugins.metadata.scan 472.62ms
  - warm: total 4302ms; pre-provider 4063ms; provider 1ms; post-provider 238ms; response true
    - active window: metadata scans 7 (141.85ms total, max 60.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4063ms; provider 1ms; post-provider 238ms; unknown 3590.38ms; source plugins.metadata.scan 472.62ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4052 ms | 134 ms | 3918 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-67b331a3-kova-260724-060705-144320/openclaw/timeline.jsonl |
  | warm | 4063 ms | 142 ms | 3921 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-67b331a3-kova-260724-060705-144320/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 134 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 142 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-060705-144320-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-060705-144320-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-060705-144320-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-gateway-performance-man-005107f3-kova-260724-060705-144320
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-gateway-performance-man-1e8be6a8-kova-260724-060705-144320
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-gateway-performance-man-958fde53-kova-260724-060705-144320
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-060705-144320
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-060705-144320
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-bundled-runtime-deps-mi-150715ba-kova-260724-060705-144320
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-8e2a29af-kova-260724-060705-144320
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-2ab680e0-kova-260724-060705-144320
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-060705-144320/kova-agent-cold-warm-message-67b331a3-kova-260724-060705-144320

## Target Cleanup

- Runtime: `kova-local-mryjfn6o-41d-452db034`
- Result: removed
- Duration: 386ms

