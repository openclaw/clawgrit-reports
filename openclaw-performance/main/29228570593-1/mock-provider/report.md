# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 12 |
| Warnings | 0 |
| Records | 9 (FAIL:5, PASS:4) |

## Proof Completeness

- Completeness: complete: 9
- Required obligations: 133 total, 0 missing, 0 failed
- Categories: command: 79, artifact: 9, cleanup: 9, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260713-061848-5751b5` |
| Generated | 2026-07-13T06:23:43.719Z |
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
| FAIL | 5 |
| PASS | 4 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 812.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 812.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 825.4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 825.4 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 813.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 813.7 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 924.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 924.8 MB, agent-process 924.8 MB, command-tree 924.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 924.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 924.8 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 924.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 924.8 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 924.8 |
| info | Kova | report | 3 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 813.7MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3058ms | 822.3MB | n/a | 138% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:2, PASS:1 | n/a | 0MB | n/a | 175.6% | 3864ms | 4024ms | 3724ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 812.2 MB | 1599.1 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 825.4 MB | 1624.5 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 813.7 MB | 1602.6 MB | n/a | n/a | final gateway state was backoff |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3716ms | 821.1 MB | 826 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3058ms | 822.8 MB | 827.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2991ms | 822.3 MB | 827.2 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 924.8 MB | 4339ms | 4628ms | agent-cli peak RSS 924.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 924.8 MB, agent-process 924.8 MB, command-tree 924.8 MB |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 887.4 MB | 3864ms | 3306ms |  |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 909.9 MB | 3573ms | 4024ms | agent-cli peak RSS 909.9 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 909.9 MB, agent-process 909.9 MB, command-tree 909.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 924.8 MB; CPU 179.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 924.8 MB; CPU 179.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 924.8 MB; CPU 179.7%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 825.4 MB; CPU 164%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 825.4 MB; CPU 164%; scenario gateway-performance/many-bundled-plugins
- plugin-cli: RSS 799.2 MB; CPU 179%; scenario gateway-performance/many-bundled-plugins
- status-cli: RSS 788.9 MB; CPU 175.5%; scenario gateway-performance/many-bundled-plugins
- model-cli: RSS 525.4 MB; CPU 173.9%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-gateway-performance-man-005107f3-kova-260713-061848-5751b5
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 2ms; post-ready p95 4ms; failures 194; final failures 0; slowest startup-sample/cold-start 472ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 812.2 MB; tracked total 1599.1 MB; max CPU 153%; samples 18; roles gateway 812.2MB/153%, gateway-tree 812.2MB/153%, command-tree 788.9MB/179%, status-cli 788.9MB/164%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 398.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-gateway-performance-man-1e8be6a8-kova-260713-061848-5751b5
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 2ms; post-ready p95 5ms; failures 192; final failures 0; slowest startup-sample/cold-start 311ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 825.4 MB; tracked total 1624.5 MB; max CPU 164%; samples 18; roles gateway 825.4MB/164%, gateway-tree 825.4MB/164%, command-tree 799.2MB/175.5%, plugin-cli 799.2MB/167.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 374.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-gateway-performance-man-958fde53-kova-260713-061848-5751b5
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 190; final failures 0; slowest startup-sample/cold-start 420ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 813.7 MB; tracked total 1602.6 MB; max CPU 137%; samples 17; roles gateway 813.7MB/137%, gateway-tree 813.7MB/137%, command-tree 789.1MB/173%, plugin-cli 789.1MB/173%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 332.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-8e2a29af-kova-260713-061848-5751b5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 924.8 MB; tracked total 924.8 MB; max CPU 179.7%; samples 16; roles agent-cli 924.8MB/179.7%, agent-process 924.8MB/179.7%, command-tree 924.8MB/179.7%, status-cli 784.4MB/170.6%
- agent: turn 4628ms; cold/warm 4339ms/4628ms; cold-warm delta 0ms; pre-provider 4492ms; provider 1ms; metadata scans 10 (260.45ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4613.55ms; max 4628ms; pre-provider p95 4476.25ms
- agent CLI attribution: cold known 124ms / unattributed 4053ms; warm known 135ms / unattributed 4357ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 66.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 924.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 924.8 MB, agent-process 924.8 MB, command-tree 924.8 MB
  - agent-cli peak RSS 924.8 MB exceeded threshold 900 MB
  - agent-process peak RSS 924.8 MB exceeded threshold 900 MB
- Agent turns:
  - cold: total 4339ms; pre-provider 4177ms; provider 3ms; post-provider 159ms; response true
    - active window: metadata scans 5 (125.15ms total, max 65.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4177ms; provider 3ms; post-provider 159ms; unknown 4177ms; source none
  - warm: total 4628ms; pre-provider 4492ms; provider 1ms; post-provider 135ms; response true
    - active window: metadata scans 5 (135.3ms total, max 66.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4492ms; provider 1ms; post-provider 135ms; unknown 4492ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4177 ms | 124 ms | 4053 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-8e2a29af-kova-260713-061848-5751b5/openclaw/timeline.jsonl |
  | warm | 4492 ms | 135 ms | 4357 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-8e2a29af-kova-260713-061848-5751b5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 124 ms | 65 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 135 ms | 66 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-2ab680e0-kova-260713-061848-5751b5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 887.4 MB; tracked total 887.4 MB; max CPU 175.6%; samples 14; roles agent-cli 887.4MB/175.6%, agent-process 887.4MB/175.6%, command-tree 887.4MB/175.6%, status-cli 758.5MB/162.9%
- agent: turn 3864ms; cold/warm 3864ms/3306ms; cold-warm delta 558ms; pre-provider 3724ms; provider 3ms; metadata scans 10 (236.93ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3836.1ms; max 3864ms; pre-provider p95 3697.25ms
- agent CLI attribution: cold known 113ms / unattributed 3611ms; warm known 123ms / unattributed 3066ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3864ms; pre-provider 3724ms; provider 3ms; post-provider 137ms; response true
    - active window: metadata scans 5 (112.77ms total, max 64.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3724ms; provider 3ms; post-provider 137ms; unknown 3724ms; source none
  - warm: total 3306ms; pre-provider 3189ms; provider 1ms; post-provider 116ms; response true
    - active window: metadata scans 5 (124.16ms total, max 59.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3189ms; provider 1ms; post-provider 116ms; unknown 3189ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3724 ms | 113 ms | 3611 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-2ab680e0-kova-260713-061848-5751b5/openclaw/timeline.jsonl |
  | warm | 3189 ms | 123 ms | 3066 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-2ab680e0-kova-260713-061848-5751b5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 113 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 123 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-67b331a3-kova-260713-061848-5751b5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 909.9 MB; tracked total 909.9 MB; max CPU 173.4%; samples 14; roles agent-cli 909.9MB/173.4%, agent-process 909.9MB/173.4%, command-tree 909.9MB/173.4%, status-cli 731.2MB/171.4%
- agent: turn 4024ms; cold/warm 3573ms/4024ms; cold-warm delta 0ms; pre-provider 3873ms; provider 1ms; metadata scans 10 (240.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4001.45ms; max 4024ms; pre-provider p95 3851.35ms
- agent CLI attribution: cold known 121ms / unattributed 3319ms; warm known 119ms / unattributed 3754ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.44ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 909.9 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 909.9 MB, agent-process 909.9 MB, command-tree 909.9 MB
  - agent-cli peak RSS 909.9 MB exceeded threshold 900 MB
  - agent-process peak RSS 909.9 MB exceeded threshold 900 MB
- Agent turns:
  - cold: total 3573ms; pre-provider 3440ms; provider 3ms; post-provider 130ms; response true
    - active window: metadata scans 5 (120.73ms total, max 61.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3440ms; provider 3ms; post-provider 130ms; unknown 3440ms; source none
  - warm: total 4024ms; pre-provider 3873ms; provider 1ms; post-provider 150ms; response true
    - active window: metadata scans 5 (119.79ms total, max 71.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3873ms; provider 1ms; post-provider 150ms; unknown 3873ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3440 ms | 121 ms | 3319 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-67b331a3-kova-260713-061848-5751b5/openclaw/timeline.jsonl |
  | warm | 3873 ms | 119 ms | 3754 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-67b331a3-kova-260713-061848-5751b5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 121 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 119 ms | 71 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-061848-5751b5-diagnostic.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-061848-5751b5-diagnostic.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-061848-5751b5-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-gateway-performance-man-005107f3-kova-260713-061848-5751b5
- collector-root gateway-performance#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-gateway-performance-man-1e8be6a8-kova-260713-061848-5751b5
- collector-root gateway-performance#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-gateway-performance-man-958fde53-kova-260713-061848-5751b5
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260713-061848-5751b5
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-bundled-runtime-deps-mi-39c08a4a-kova-260713-061848-5751b5
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-bundled-runtime-deps-mi-150715ba-kova-260713-061848-5751b5
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-8e2a29af-kova-260713-061848-5751b5
- collector-root agent-cold-warm-message#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-2ab680e0-kova-260713-061848-5751b5
- collector-root agent-cold-warm-message#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-061848-5751b5/kova-agent-cold-warm-message-67b331a3-kova-260713-061848-5751b5

## Target Cleanup

- Runtime: `kova-local-1783923528466`
- Result: removed
- Duration: 464ms

