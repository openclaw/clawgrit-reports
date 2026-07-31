# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 18 |
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
| Run ID | `kova-260731-061756-4bfd15` |
| Generated | 2026-07-31T06:23:11.394Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 952.9 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 952.9 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 945.4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 945.4 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 963.1 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 963.1 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| info | Kova | report | 9 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 952.9MB | n/a | 155% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5234ms | 941.9MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 172.4% | 3712ms | 3692ms | 3596ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 952.9 MB | 1658.6 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 945.4 MB | 1658.8 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 963.1 MB | 1688.3 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5297ms | 938.1 MB | 940.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5171ms | 951.8 MB | 957.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5234ms | 941.9 MB | 941.9 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1031.4 MB | 3724ms | 3751ms | agent-cli peak RSS 1031.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1031.4 MB, agent-process 1031.4 MB, command-tree 1031.4 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1033.1 MB | 3712ms | 3656ms | agent-cli peak RSS 1033.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1033.1 MB, agent-process 1033.1 MB, command-tree 1033.1 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1034.7 MB | 3635ms | 3692ms | agent-cli peak RSS 1034.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1034.7 MB, agent-process 1034.7 MB, command-tree 1034.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1034.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1034.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1034.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 904.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 963.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 963.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 725.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 149% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 563 MB (scenario gateway-performance/many-bundled-plugins); CPU 143% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-gateway-performance-man-005107f3-kova-260731-061756-4bfd15
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 203; final failures not-collected; slowest startup-sample/cold-start 497ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 952.9 MB; tracked total 1658.6 MB; max CPU 155%; samples 20; roles gateway 952.9MB/155%, command-tree 707.1MB/155%, gateway-tree 952.9MB/155%, plugin-cli 707.1MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span plugins.load 385.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-gateway-performance-man-1e8be6a8-kova-260731-061756-4bfd15
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 199; final failures not-collected; slowest startup-sample/cold-start 445ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 945.4 MB; tracked total 1658.8 MB; max CPU 150%; samples 20; roles gateway 945.4MB/150%, command-tree 713.4MB/154%, gateway-tree 945.4MB/150%, status-cli 713.4MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 332.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-gateway-performance-man-958fde53-kova-260731-061756-4bfd15
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 200; final failures not-collected; slowest startup-sample/cold-start 483ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 963.1 MB; tracked total 1688.3 MB; max CPU 157%; samples 20; roles gateway 963.1MB/157%, gateway-tree 963.1MB/157%, command-tree 725.4MB/156%, plugin-cli 725.4MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span plugins.load 333.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-8e2a29af-kova-260731-061756-4bfd15
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1031.4 MB; tracked total 1031.4 MB; max CPU 172.4%; samples 14; roles agent-cli 1031.4MB/172.4%, command-tree 1031.4MB/176.7%, agent-process 1031.4MB/172.4%, status-cli 903.1MB/176.7%
- agent: turn 3751ms; cold/warm 3724ms/3751ms; cold-warm delta 0ms; pre-provider 3632ms; provider 1ms; metadata scans 14 (185.08ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3749.65ms; max 3751ms; pre-provider p95 3630.4ms
- agent CLI attribution: cold known 82ms / unattributed 3518ms; warm known 102ms / unattributed 3530ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 55.42ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1031.4 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1031.4 MB, agent-process 1031.4 MB, command-tree 1031.4 MB
  - agent-cli peak RSS 1031.4 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1031.4 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3724ms; pre-provider 3600ms; provider 2ms; post-provider 122ms; response true
    - active window: metadata scans 7 (82.74ms total, max 40.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3600ms; provider 2ms; post-provider 122ms; unknown 3268.35ms; source plugins.metadata.scan 331.65ms
  - warm: total 3751ms; pre-provider 3632ms; provider 1ms; post-provider 118ms; response true
    - active window: metadata scans 7 (102.34ms total, max 55.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3632ms; provider 1ms; post-provider 118ms; unknown 3300.35ms; source plugins.metadata.scan 331.65ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3600 ms | 82 ms | 3518 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-8e2a29af-kova-260731-061756-4bfd15/openclaw/timeline.jsonl |
  | warm | 3632 ms | 102 ms | 3530 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-8e2a29af-kova-260731-061756-4bfd15/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 82 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 102 ms | 55 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-2ab680e0-kova-260731-061756-4bfd15
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1033.1 MB; tracked total 1033.1 MB; max CPU 170.2%; samples 14; roles agent-cli 1033.1MB/170.2%, command-tree 1033.1MB/174.2%, agent-process 1033.1MB/170.2%, status-cli 904.5MB/174.2%
- agent: turn 3712ms; cold/warm 3712ms/3656ms; cold-warm delta 56ms; pre-provider 3596ms; provider 3ms; metadata scans 14 (168.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3709.2ms; max 3712ms; pre-provider p95 3593.4ms
- agent CLI attribution: cold known 83ms / unattributed 3513ms; warm known 85ms / unattributed 3459ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 50.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1033.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1033.1 MB, agent-process 1033.1 MB, command-tree 1033.1 MB
  - agent-cli peak RSS 1033.1 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1033.1 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3712ms; pre-provider 3596ms; provider 3ms; post-provider 113ms; response true
    - active window: metadata scans 7 (82.29ms total, max 38.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3596ms; provider 3ms; post-provider 113ms; unknown 3285.58ms; source plugins.metadata.scan 310.42ms
  - warm: total 3656ms; pre-provider 3544ms; provider 1ms; post-provider 111ms; response true
    - active window: metadata scans 7 (86.45ms total, max 42.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3544ms; provider 1ms; post-provider 111ms; unknown 3233.58ms; source plugins.metadata.scan 310.42ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3596 ms | 83 ms | 3513 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-2ab680e0-kova-260731-061756-4bfd15/openclaw/timeline.jsonl |
  | warm | 3544 ms | 85 ms | 3459 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-2ab680e0-kova-260731-061756-4bfd15/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 83 ms | 38 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 85 ms | 42 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-67b331a3-kova-260731-061756-4bfd15
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1034.7 MB; tracked total 1034.7 MB; max CPU 174.5%; samples 14; roles agent-cli 1034.7MB/174.5%, agent-process 1034.7MB/174.5%, command-tree 1034.7MB/174.5%, status-cli 903.3MB/171.5%
- agent: turn 3692ms; cold/warm 3635ms/3692ms; cold-warm delta 0ms; pre-provider 3574ms; provider 1ms; metadata scans 14 (177.42ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3689.15ms; max 3692ms; pre-provider p95 3571.3ms
- agent CLI attribution: cold known 81ms / unattributed 3439ms; warm known 96ms / unattributed 3478ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 50.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1034.7 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1034.7 MB, agent-process 1034.7 MB, command-tree 1034.7 MB
  - agent-cli peak RSS 1034.7 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1034.7 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3635ms; pre-provider 3520ms; provider 3ms; post-provider 112ms; response true
    - active window: metadata scans 7 (81.4ms total, max 38.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3520ms; provider 3ms; post-provider 112ms; unknown 3200.43ms; source plugins.metadata.scan 319.57ms
  - warm: total 3692ms; pre-provider 3574ms; provider 1ms; post-provider 117ms; response true
    - active window: metadata scans 7 (96.02ms total, max 50.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3574ms; provider 1ms; post-provider 117ms; unknown 3254.43ms; source plugins.metadata.scan 319.57ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3520 ms | 81 ms | 3439 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-67b331a3-kova-260731-061756-4bfd15/openclaw/timeline.jsonl |
  | warm | 3574 ms | 96 ms | 3478 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-67b331a3-kova-260731-061756-4bfd15/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 81 ms | 38 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 96 ms | 50 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260731-061756-4bfd15-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260731-061756-4bfd15-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260731-061756-4bfd15-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-gateway-performance-man-005107f3-kova-260731-061756-4bfd15
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-gateway-performance-man-1e8be6a8-kova-260731-061756-4bfd15
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-gateway-performance-man-958fde53-kova-260731-061756-4bfd15
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260731-061756-4bfd15
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-bundled-runtime-deps-mi-39c08a4a-kova-260731-061756-4bfd15
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-bundled-runtime-deps-mi-150715ba-kova-260731-061756-4bfd15
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-8e2a29af-kova-260731-061756-4bfd15
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-2ab680e0-kova-260731-061756-4bfd15
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260731-061756-4bfd15/kova-agent-cold-warm-message-67b331a3-kova-260731-061756-4bfd15

## Target Cleanup

- Runtime: `kova-local-ms8jwjzz-3z8-d3b16f5f`
- Result: removed
- Duration: 406ms

