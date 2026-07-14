# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 9 (FAIL:3, PASS:6) |

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
| Run ID | `kova-260714-055632-c89a50` |
| Generated | 2026-07-14T06:01:13.782Z |
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
| FAIL | 3 |
| PASS | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 826.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 826.6 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 844.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 844.3 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 849 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 849 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 844.3MB | n/a | 147% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2899ms | 835.6MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 163.9% | 3472ms | 3593ms | 3337ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 826.6 MB | 1640.9 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 844.3 MB | 1703.8 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 849 MB | 1682.3 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2716ms | 835.6 MB | 840.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2899ms | 837 MB | 842.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3637ms | 834.3 MB | 839.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 920.6 MB | 3472ms | 4129ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 922.2 MB | 3446ms | 3377ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 844.3 MB | 3794ms | 3593ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 922.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 922.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 922.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 867.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 174.9% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 849 MB (scenario gateway-performance/many-bundled-plugins); CPU 164% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 849 MB (scenario gateway-performance/many-bundled-plugins); CPU 164% (scenario bundled-runtime-deps/missing-plugin-index)
- status-cli: RSS 842.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 500.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-gateway-performance-man-005107f3-kova-260714-055632-c89a50
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 193; final failures not-collected; slowest startup-sample/cold-start 300ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 826.6 MB; tracked total 1640.9 MB; max CPU 147%; samples 19; roles gateway 826.6MB/147%, command-tree 815.1MB/174.9%, gateway-tree 826.6MB/147%, plugin-cli 674.4MB/174.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 361.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-gateway-performance-man-1e8be6a8-kova-260714-055632-c89a50
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 191; final failures not-collected; slowest startup-sample/cold-start 211ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 844.3 MB; tracked total 1703.8 MB; max CPU 153%; samples 17; roles command-tree 867.8MB/165%, plugin-cli 867.8MB/165%, gateway 844.3MB/153%, status-cli 836.4MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 320.71ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-gateway-performance-man-958fde53-kova-260714-055632-c89a50
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 191; final failures not-collected; slowest startup-sample/cold-start 163ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 849 MB; tracked total 1682.3 MB; max CPU 132%; samples 16; roles gateway 849MB/132%, command-tree 839.1MB/161%, gateway-tree 849MB/132%, plugin-cli 583.5MB/161%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 325.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-8e2a29af-kova-260714-055632-c89a50
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 920.6 MB; tracked total 920.6 MB; max CPU 171.9%; samples 15; roles agent-cli 920.6MB/171.9%, agent-process 920.6MB/171.9%, command-tree 920.6MB/171.9%, status-cli 823.2MB/161.4%
- agent: turn 4129ms; cold/warm 3472ms/4129ms; cold-warm delta 0ms; pre-provider 4010ms; provider 1ms; metadata scans 10 (262.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4096.15ms; max 4129ms; pre-provider p95 3976.35ms
- agent CLI attribution: cold known 112ms / unattributed 3225ms; warm known 150ms / unattributed 3860ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 81.67ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3472ms; pre-provider 3337ms; provider 2ms; post-provider 133ms; response true
    - active window: metadata scans 5 (112.38ms total, max 60.83ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3337ms; provider 2ms; post-provider 133ms; unknown 2984.7ms; source plugins.metadata.scan 352.3ms
  - warm: total 4129ms; pre-provider 4010ms; provider 1ms; post-provider 118ms; response true
    - active window: metadata scans 5 (149.86ms total, max 81.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4010ms; provider 1ms; post-provider 118ms; unknown 3657.7ms; source plugins.metadata.scan 352.3ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3337 ms | 112 ms | 3225 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-8e2a29af-kova-260714-055632-c89a50/openclaw/timeline.jsonl |
  | warm | 4010 ms | 150 ms | 3860 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-8e2a29af-kova-260714-055632-c89a50/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 112 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 150 ms | 82 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-2ab680e0-kova-260714-055632-c89a50
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 922.2 MB; tracked total 922.2 MB; max CPU 163.9%; samples 14; roles agent-cli 922.2MB/163.9%, agent-process 922.2MB/163.9%, command-tree 922.2MB/163.9%, status-cli 842.4MB/162.4%
- agent: turn 3446ms; cold/warm 3446ms/3377ms; cold-warm delta 69ms; pre-provider 3308ms; provider 3ms; metadata scans 10 (227.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3442.55ms; max 3446ms; pre-provider p95 3305.55ms
- agent CLI attribution: cold known 123ms / unattributed 3185ms; warm known 103ms / unattributed 3156ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3446ms; pre-provider 3308ms; provider 3ms; post-provider 135ms; response true
    - active window: metadata scans 5 (123.13ms total, max 63.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3308ms; provider 3ms; post-provider 135ms; unknown 2996.24ms; source plugins.metadata.scan 311.76ms
  - warm: total 3377ms; pre-provider 3259ms; provider 1ms; post-provider 117ms; response true
    - active window: metadata scans 5 (103.92ms total, max 61.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3259ms; provider 1ms; post-provider 117ms; unknown 2947.24ms; source plugins.metadata.scan 311.76ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3308 ms | 123 ms | 3185 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-2ab680e0-kova-260714-055632-c89a50/openclaw/timeline.jsonl |
  | warm | 3259 ms | 103 ms | 3156 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-2ab680e0-kova-260714-055632-c89a50/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 123 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 103 ms | 61 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-67b331a3-kova-260714-055632-c89a50
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 844.3 MB; tracked total 844.3 MB; max CPU 163.4%; samples 14; roles agent-cli 844.3MB/163.4%, agent-process 844.3MB/163.4%, command-tree 844.3MB/163.4%, status-cli 824.2MB/162.4%
- agent: turn 3794ms; cold/warm 3794ms/3593ms; cold-warm delta 201ms; pre-provider 3658ms; provider 3ms; metadata scans 10 (242.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3783.95ms; max 3794ms; pre-provider p95 3648.25ms
- agent CLI attribution: cold known 123ms / unattributed 3535ms; warm known 122ms / unattributed 3341ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3794ms; pre-provider 3658ms; provider 3ms; post-provider 133ms; response true
    - active window: metadata scans 5 (121.67ms total, max 65.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3658ms; provider 3ms; post-provider 133ms; unknown 3319.82ms; source plugins.metadata.scan 338.18ms
  - warm: total 3593ms; pre-provider 3463ms; provider 1ms; post-provider 129ms; response true
    - active window: metadata scans 5 (121.03ms total, max 69.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3463ms; provider 1ms; post-provider 129ms; unknown 3124.82ms; source plugins.metadata.scan 338.18ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3658 ms | 123 ms | 3535 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-67b331a3-kova-260714-055632-c89a50/openclaw/timeline.jsonl |
  | warm | 3463 ms | 122 ms | 3341 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-67b331a3-kova-260714-055632-c89a50/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 123 ms | 65 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 122 ms | 70 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-055632-c89a50-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-055632-c89a50-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-055632-c89a50-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-gateway-performance-man-005107f3-kova-260714-055632-c89a50
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-gateway-performance-man-1e8be6a8-kova-260714-055632-c89a50
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-gateway-performance-man-958fde53-kova-260714-055632-c89a50
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260714-055632-c89a50
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-bundled-runtime-deps-mi-39c08a4a-kova-260714-055632-c89a50
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-bundled-runtime-deps-mi-150715ba-kova-260714-055632-c89a50
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-8e2a29af-kova-260714-055632-c89a50
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-2ab680e0-kova-260714-055632-c89a50
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-055632-c89a50/kova-agent-cold-warm-message-67b331a3-kova-260714-055632-c89a50

## Target Cleanup

- Runtime: `kova-local-mrk8njye-3ym-45ff4e70`
- Result: removed
- Duration: 409ms

