# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1055.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1055.6 MB, gateway-tree 1055.6 MB, command-tree 750.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1055.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1055.6 MB, gateway-tree 1055.6 MB, command-tree 750.4 MB |
| Blocking findings | 20 |
| Warnings | 0 |
| Records | 9 (FAIL:6, PASS:3) |

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
| Run ID | `kova-260730-060433-edb7fe` |
| Generated | 2026-07-30T06:09:50.336Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1055.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1055.6 MB, gateway-tree 1055.6 MB, command-tree 750.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1055.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1055.6 MB exceeded threshold 1050 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1055.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1055.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1055.6 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 957.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 957.3 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 942.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 942.1 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| info | Kova | report | 11 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 957.3MB | n/a | 158% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4956ms | 923.2MB | n/a | 159% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 171.8% | 3591ms | 3618ms | 3474ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 1055.6 MB | 1802.8 MB | n/a | n/a | gateway peak RSS 1055.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1055.6 MB, gateway-tree 1055.6 MB, command-tree 750.4 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 957.3 MB | 1702.2 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 942.1 MB | 1688 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4943ms | 923.2 MB | 928.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4956ms | 920.1 MB | 920.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5059ms | 932.8 MB | 932.8 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1025.9 MB | 3656ms | 3691ms | agent-cli peak RSS 1025.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1025.9 MB, agent-process 1025.9 MB, command-tree 1025.9 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1022.5 MB | 3570ms | 3618ms | agent-cli peak RSS 1022.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1022.5 MB, agent-process 1022.5 MB, command-tree 1022.5 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1024 MB | 3591ms | 3598ms | agent-cli peak RSS 1024 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1024 MB, agent-process 1024 MB, command-tree 1024 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1055.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario bundled-runtime-deps/missing-plugin-index)
- command-tree: RSS 1025.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 178.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1055.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario bundled-runtime-deps/missing-plugin-index)
- status-cli: RSS 901.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 178.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 1025.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1025.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.5% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 750.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 679.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 149% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-gateway-performance-man-005107f3-kova-260730-060433-edb7fe
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 200; final failures not-collected; slowest startup-sample/cold-start 496ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1055.6 MB; tracked total 1802.8 MB; max CPU 156%; samples 25; roles gateway 1055.6MB/156%, gateway-tree 1055.6MB/156%, command-tree 750.4MB/155%, plugin-cli 750.4MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 621.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1055.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1055.6 MB, gateway-tree 1055.6 MB, command-tree 750.4 MB
  - gateway peak RSS 1055.6 MB exceeded threshold 1050 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-gateway-performance-man-1e8be6a8-kova-260730-060433-edb7fe
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 199; final failures not-collected; slowest startup-sample/cold-start 216ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 957.3 MB; tracked total 1702.2 MB; max CPU 158%; samples 25; roles gateway 957.3MB/158%, gateway-tree 957.3MB/158%, command-tree 748.6MB/153%, plugin-cli 748.6MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 511.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-gateway-performance-man-958fde53-kova-260730-060433-edb7fe
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 199; final failures not-collected; slowest startup-sample/cold-start 451ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 942.1 MB; tracked total 1688 MB; max CPU 158%; samples 25; roles gateway 942.1MB/158%, gateway-tree 942.1MB/158%, command-tree 745.9MB/153%, status-cli 745.9MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 532.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-8e2a29af-kova-260730-060433-edb7fe
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1025.9 MB; tracked total 1025.9 MB; max CPU 171.3%; samples 14; roles agent-cli 1025.9MB/171.3%, command-tree 1025.9MB/178.5%, agent-process 1025.9MB/171.3%, status-cli 901.4MB/178.5%
- agent: turn 3691ms; cold/warm 3656ms/3691ms; cold-warm delta 0ms; pre-provider 3574ms; provider 1ms; metadata scans 14 (177.07ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3689.25ms; max 3691ms; pre-provider p95 3571.85ms
- agent CLI attribution: cold known 85ms / unattributed 3446ms; warm known 93ms / unattributed 3481ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 48.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1025.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1025.9 MB, agent-process 1025.9 MB, command-tree 1025.9 MB
  - agent-cli peak RSS 1025.9 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1025.9 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3656ms; pre-provider 3531ms; provider 3ms; post-provider 122ms; response true
    - active window: metadata scans 7 (84.18ms total, max 47.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3531ms; provider 3ms; post-provider 122ms; unknown 3212.9ms; source plugins.metadata.scan 318.1ms
  - warm: total 3691ms; pre-provider 3574ms; provider 1ms; post-provider 116ms; response true
    - active window: metadata scans 7 (92.89ms total, max 48.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3574ms; provider 1ms; post-provider 116ms; unknown 3255.9ms; source plugins.metadata.scan 318.1ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3531 ms | 85 ms | 3446 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-8e2a29af-kova-260730-060433-edb7fe/openclaw/timeline.jsonl |
  | warm | 3574 ms | 93 ms | 3481 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-8e2a29af-kova-260730-060433-edb7fe/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 85 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 93 ms | 49 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-2ab680e0-kova-260730-060433-edb7fe
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1022.5 MB; tracked total 1022.5 MB; max CPU 173.5%; samples 14; roles agent-cli 1022.5MB/173.5%, agent-process 1022.5MB/173.5%, command-tree 1022.5MB/173.5%, status-cli 898.3MB/171.5%
- agent: turn 3618ms; cold/warm 3570ms/3618ms; cold-warm delta 0ms; pre-provider 3502ms; provider 1ms; metadata scans 14 (175.62ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3615.6ms; max 3618ms; pre-provider p95 3499.45ms
- agent CLI attribution: cold known 83ms / unattributed 3368ms; warm known 94ms / unattributed 3408ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 49.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1022.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1022.5 MB, agent-process 1022.5 MB, command-tree 1022.5 MB
  - agent-cli peak RSS 1022.5 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1022.5 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3570ms; pre-provider 3451ms; provider 3ms; post-provider 116ms; response true
    - active window: metadata scans 7 (81.36ms total, max 45.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3451ms; provider 3ms; post-provider 116ms; unknown 3131.39ms; source plugins.metadata.scan 319.61ms
  - warm: total 3618ms; pre-provider 3502ms; provider 1ms; post-provider 115ms; response true
    - active window: metadata scans 7 (94.26ms total, max 49.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3502ms; provider 1ms; post-provider 115ms; unknown 3182.39ms; source plugins.metadata.scan 319.61ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3451 ms | 83 ms | 3368 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-2ab680e0-kova-260730-060433-edb7fe/openclaw/timeline.jsonl |
  | warm | 3502 ms | 94 ms | 3408 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-2ab680e0-kova-260730-060433-edb7fe/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 83 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 94 ms | 49 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-67b331a3-kova-260730-060433-edb7fe
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1024 MB; tracked total 1024 MB; max CPU 171.8%; samples 14; roles agent-cli 1024MB/171.8%, command-tree 1024MB/174.5%, agent-process 1024MB/171.8%, status-cli 895.3MB/174.5%
- agent: turn 3598ms; cold/warm 3591ms/3598ms; cold-warm delta 0ms; pre-provider 3483ms; provider 1ms; metadata scans 14 (175.9ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3597.65ms; max 3598ms; pre-provider p95 3482.55ms
- agent CLI attribution: cold known 89ms / unattributed 3385ms; warm known 91ms / unattributed 3392ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 52.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1024 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1024 MB, agent-process 1024 MB, command-tree 1024 MB
  - agent-cli peak RSS 1024 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1024 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3591ms; pre-provider 3474ms; provider 3ms; post-provider 114ms; response true
    - active window: metadata scans 7 (87.25ms total, max 49.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3474ms; provider 3ms; post-provider 114ms; unknown 3156.44ms; source plugins.metadata.scan 317.56ms
  - warm: total 3598ms; pre-provider 3483ms; provider 1ms; post-provider 114ms; response true
    - active window: metadata scans 7 (88.65ms total, max 52.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3483ms; provider 1ms; post-provider 114ms; unknown 3165.44ms; source plugins.metadata.scan 317.56ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3474 ms | 89 ms | 3385 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-67b331a3-kova-260730-060433-edb7fe/openclaw/timeline.jsonl |
  | warm | 3483 ms | 91 ms | 3392 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-67b331a3-kova-260730-060433-edb7fe/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 89 ms | 50 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 91 ms | 53 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260730-060433-edb7fe-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260730-060433-edb7fe-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260730-060433-edb7fe-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-gateway-performance-man-005107f3-kova-260730-060433-edb7fe
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-gateway-performance-man-1e8be6a8-kova-260730-060433-edb7fe
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-gateway-performance-man-958fde53-kova-260730-060433-edb7fe
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260730-060433-edb7fe
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-bundled-runtime-deps-mi-39c08a4a-kova-260730-060433-edb7fe
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-bundled-runtime-deps-mi-150715ba-kova-260730-060433-edb7fe
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-8e2a29af-kova-260730-060433-edb7fe
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-2ab680e0-kova-260730-060433-edb7fe
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260730-060433-edb7fe/kova-agent-cold-warm-message-67b331a3-kova-260730-060433-edb7fe

## Target Cleanup

- Runtime: `kova-local-ms73zi1c-3yy-7804e969`
- Result: removed
- Duration: 394ms

