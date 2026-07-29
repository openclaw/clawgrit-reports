# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 16 |
| Warnings | 0 |
| Records | 9 (FAIL:6, PASS:3) |

## Proof Completeness

- Completeness: incomplete: 1, complete: 8
- Required obligations: 142 total, 1 missing, 0 failed
- Categories: command: 79, artifact: 9, cleanup: 9, collector: 9, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260729-060913-46de6e` |
| Generated | 2026-07-29T06:14:28.401Z |
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
| FAIL | 6 |
| PASS | 3 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 932 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 932 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 946.8 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 946.8 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 3 final health check(s) failed, over threshold 0 | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 956.5 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 956.5 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1015.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.2 MB, agent-process 1015.2 MB, command-tree 1015.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1015.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1015.2 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1015.2 |
| info | Kova | report | 7 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 946.8MB | n/a | 157% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4892ms | 909.5MB | n/a | 157% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 171.2% | 3627ms | 3632ms | 3511ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 932 MB | 1683.3 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 946.8 MB | 1687.3 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 956.5 MB | 1693.5 MB | n/a | n/a | 3 final health check(s) failed, over threshold 0 |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4862ms | 909.4 MB | 909.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4892ms | 909.5 MB | 912.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5046ms | 930.8 MB | 930.8 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1015.2 MB | 3665ms | 3632ms | agent-cli peak RSS 1015.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.2 MB, agent-process 1015.2 MB, command-tree 1015.2 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1015.9 MB | 3601ms | 3582ms | agent-cli peak RSS 1015.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.9 MB, agent-process 1015.9 MB, command-tree 1015.9 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1020.8 MB | 3627ms | 3646ms | agent-cli peak RSS 1020.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1020.8 MB, agent-process 1020.8 MB, command-tree 1020.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1020.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1020.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1020.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 954.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 956.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 956.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 740.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 680.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-gateway-performance-man-005107f3-kova-260729-060913-46de6e
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 203; final failures not-collected; slowest startup-sample/cold-start 305ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 932 MB; tracked total 1683.3 MB; max CPU 158%; samples 24; roles gateway 932MB/158%, gateway-tree 932MB/158%, command-tree 751.8MB/154%, status-cli 751.8MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 573.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-gateway-performance-man-1e8be6a8-kova-260729-060913-46de6e
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 203; final failures 3; slowest startup-sample/cold-start 498ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 946.8 MB; tracked total 1687.3 MB; max CPU 157%; samples 24; roles gateway 946.8MB/157%, gateway-tree 946.8MB/157%, command-tree 740.5MB/151%, plugin-cli 740.5MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 572.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-gateway-performance-man-958fde53-kova-260729-060913-46de6e
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 202; final failures 3; slowest startup-sample/cold-start 296ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 956.5 MB; tracked total 1693.5 MB; max CPU 157%; samples 23; roles gateway 956.5MB/157%, gateway-tree 956.5MB/157%, command-tree 737.7MB/153%, status-cli 737.7MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 513.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - 3 final health check(s) failed, over threshold 0
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-8e2a29af-kova-260729-060913-46de6e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1015.2 MB; tracked total 1015.2 MB; max CPU 171.2%; samples 14; roles agent-cli 1015.2MB/171.2%, command-tree 1015.2MB/174.2%, agent-process 1015.2MB/171.2%, status-cli 954.7MB/174.2%
- agent: turn 3665ms; cold/warm 3665ms/3632ms; cold-warm delta 33ms; pre-provider 3542ms; provider 2ms; metadata scans 14 (171.86ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3663.35ms; max 3665ms; pre-provider p95 3540.55ms
- agent CLI attribution: cold known 86ms / unattributed 3456ms; warm known 85ms / unattributed 3428ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 49.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1015.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.2 MB, agent-process 1015.2 MB, command-tree 1015.2 MB
  - agent-cli peak RSS 1015.2 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1015.2 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3665ms; pre-provider 3542ms; provider 2ms; post-provider 121ms; response true
    - active window: metadata scans 7 (85.88ms total, max 47.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3542ms; provider 2ms; post-provider 121ms; unknown 3265.96ms; source plugins.metadata.scan 276.04ms
  - warm: total 3632ms; pre-provider 3513ms; provider 1ms; post-provider 118ms; response true
    - active window: metadata scans 7 (85.98ms total, max 49.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3513ms; provider 1ms; post-provider 118ms; unknown 3236.96ms; source plugins.metadata.scan 276.04ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3542 ms | 86 ms | 3456 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-8e2a29af-kova-260729-060913-46de6e/openclaw/timeline.jsonl |
  | warm | 3513 ms | 85 ms | 3428 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-8e2a29af-kova-260729-060913-46de6e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 86 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 85 ms | 49 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-2ab680e0-kova-260729-060913-46de6e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1015.9 MB; tracked total 1015.9 MB; max CPU 171.8%; samples 14; roles agent-cli 1015.9MB/171.8%, agent-process 1015.9MB/171.8%, command-tree 1015.9MB/171.8%, status-cli 902.7MB/170.2%
- agent: turn 3601ms; cold/warm 3601ms/3582ms; cold-warm delta 19ms; pre-provider 3481ms; provider 2ms; metadata scans 14 (173.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3600.05ms; max 3601ms; pre-provider p95 3480.4ms
- agent CLI attribution: cold known 84ms / unattributed 3397ms; warm known 90ms / unattributed 3379ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 49.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1015.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1015.9 MB, agent-process 1015.9 MB, command-tree 1015.9 MB
  - agent-cli peak RSS 1015.9 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1015.9 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3601ms; pre-provider 3481ms; provider 2ms; post-provider 118ms; response true
    - active window: metadata scans 7 (83.03ms total, max 45.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3481ms; provider 2ms; post-provider 118ms; unknown 3200.8ms; source plugins.metadata.scan 280.2ms
  - warm: total 3582ms; pre-provider 3469ms; provider 1ms; post-provider 112ms; response true
    - active window: metadata scans 7 (90.84ms total, max 49.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3469ms; provider 1ms; post-provider 112ms; unknown 3188.8ms; source plugins.metadata.scan 280.2ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3481 ms | 84 ms | 3397 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-2ab680e0-kova-260729-060913-46de6e/openclaw/timeline.jsonl |
  | warm | 3469 ms | 90 ms | 3379 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-2ab680e0-kova-260729-060913-46de6e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 84 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 90 ms | 49 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-67b331a3-kova-260729-060913-46de6e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1020.8 MB; tracked total 1020.8 MB; max CPU 170.5%; samples 14; roles agent-cli 1020.8MB/170.5%, command-tree 1020.8MB/172.8%, agent-process 1020.8MB/170.5%, status-cli 891.8MB/172.8%
- agent: turn 3646ms; cold/warm 3627ms/3646ms; cold-warm delta 0ms; pre-provider 3529ms; provider 1ms; metadata scans 14 (172.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3645.05ms; max 3646ms; pre-provider p95 3528.1ms
- agent CLI attribution: cold known 83ms / unattributed 3428ms; warm known 87ms / unattributed 3442ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 52.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1020.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1020.8 MB, agent-process 1020.8 MB, command-tree 1020.8 MB
  - agent-cli peak RSS 1020.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1020.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3627ms; pre-provider 3511ms; provider 2ms; post-provider 114ms; response true
    - active window: metadata scans 7 (83.07ms total, max 45.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3511ms; provider 2ms; post-provider 114ms; unknown 3233.19ms; source plugins.metadata.scan 277.81ms
  - warm: total 3646ms; pre-provider 3529ms; provider 1ms; post-provider 116ms; response true
    - active window: metadata scans 7 (89.49ms total, max 52.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3529ms; provider 1ms; post-provider 116ms; unknown 3251.19ms; source plugins.metadata.scan 277.81ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3511 ms | 83 ms | 3428 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-67b331a3-kova-260729-060913-46de6e/openclaw/timeline.jsonl |
  | warm | 3529 ms | 87 ms | 3442 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-67b331a3-kova-260729-060913-46de6e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 83 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 52 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-060913-46de6e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-060913-46de6e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260729-060913-46de6e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-gateway-performance-man-005107f3-kova-260729-060913-46de6e
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-gateway-performance-man-1e8be6a8-kova-260729-060913-46de6e
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-gateway-performance-man-958fde53-kova-260729-060913-46de6e
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260729-060913-46de6e
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-bundled-runtime-deps-mi-39c08a4a-kova-260729-060913-46de6e
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-bundled-runtime-deps-mi-150715ba-kova-260729-060913-46de6e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-8e2a29af-kova-260729-060913-46de6e
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-2ab680e0-kova-260729-060913-46de6e
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260729-060913-46de6e/kova-agent-cold-warm-message-67b331a3-kova-260729-060913-46de6e

## Target Cleanup

- Runtime: `kova-local-ms5opnfa-41b-39606ba6`
- Result: removed
- Duration: 384ms

