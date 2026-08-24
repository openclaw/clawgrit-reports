# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1054.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1054.7 MB, gateway-tree 1054.7 MB, command-tree 461.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1054.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1054.7 MB, gateway-tree 1054.7 MB, command-tree 461.8 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 6 (FAIL:3, PASS:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 109 total, 0 missing, 0 failed
- Categories: command: 55, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260824-052540-944476` |
| Generated | 2026-08-24T05:28:33.028Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 6 |
| Scenarios | 2 |
| States | 2 |
| FAIL | 3 |
| PASS | 3 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1054.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1054.7 MB, gateway-tree 1054.7 MB, command-tree 461.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6099 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1103 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1103 MB, gateway-tree 1103 MB, command-tree 494.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4918 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU 241% exceeded threshold 200% | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4918 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU 245% exceeded threshold 200% | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5062 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5062ms | 1054.7MB | n/a | 146% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 150% | 3962ms | 3702ms | 3804ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 6099ms | 1054.7 MB | 1587.8 MB | n/a | n/a | gateway peak RSS 1054.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1054.7 MB, gateway-tree 1054.7 MB, command-tree 461.8 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4918ms | 1103 MB | 1668.3 MB | n/a | n/a | gateway peak RSS 1103 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1103 MB, gateway-tree 1103 MB, command-tree 494.6 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5062ms | 1029.3 MB | 1601 MB | n/a | n/a | status-cli max CPU 245% exceeded threshold 200% |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1129.5 MB | 3983ms | 3788ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1141.3 MB | 3962ms | 3702ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1180.4 MB | 3804ms | 3551ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1108.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 268.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1103 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 646.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 245% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 1103 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 913.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 150% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 486.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 284.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 130.1% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 16.3% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-gateway-performance-man-005107f3-kova-260824-052540-944476
Measurements:
- startup: listening 5289ms; health 6099ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 688ms; post-ready p95 2ms; failures 31; final failures 0; slowest startup-sample/cold-start 810ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1054.7 MB; tracked total 1587.8 MB; max CPU 146%; samples 15; roles gateway 1054.7MB/146%, gateway-tree 1054.7MB/146%, command-tree 461.8MB/144%, model-cli 461.8MB/144%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 879.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1054.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1054.7 MB, gateway-tree 1054.7 MB, command-tree 461.8 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-gateway-performance-man-1e8be6a8-kova-260824-052540-944476
Measurements:
- startup: listening 4270ms; health 4918ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 603ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/cold-start 648ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1103 MB; tracked total 1668.3 MB; max CPU 146%; samples 15; roles gateway 1103MB/146%, command-tree 494.6MB/241%, gateway-tree 1103MB/146%, status-cli 494.6MB/241%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 698.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1103 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1103 MB, gateway-tree 1103 MB, command-tree 494.6 MB
  - status-cli max CPU 241% exceeded threshold 200%

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-gateway-performance-man-958fde53-kova-260824-052540-944476
Measurements:
- startup: listening 4521ms; health 5062ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 541ms; post-ready p95 2ms; failures 29; final failures 0; slowest startup-sample/warm-restart 665ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1029.3 MB; tracked total 1601 MB; max CPU 148%; samples 15; roles gateway 1029.3MB/148%, command-tree 501.1MB/245%, gateway-tree 1029.3MB/148%, status-cli 501.1MB/245%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 703.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - status-cli max CPU 245% exceeded threshold 200%

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-8e2a29af-kova-260824-052540-944476
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 862.6 MB; tracked total 1129.5 MB; max CPU 150%; samples 13; roles command-tree 1057.5MB/268.1%, agent-process 862.6MB/150%, status-cli 619.7MB/179.5%, agent-cli 284.4MB/130.1%
- agent: turn 3983ms; cold/warm 3983ms/3788ms; cold-warm delta 195ms; pre-provider 3821ms; provider 2ms; metadata scans 70 (979.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3973.25ms; max 3983ms; pre-provider p95 3811.55ms
- agent CLI attribution: cold known 697ms / unattributed 3124ms; warm known 513ms / unattributed 3119ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1710.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3983ms; pre-provider 3821ms; provider 2ms; post-provider 160ms; response true
    - active window: metadata scans 41 (573.5ms total, max 45.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3821ms; provider 2ms; post-provider 160ms; unknown 2247.25ms; source plugins.metadata.scan 1295ms; agent.prepare 278.75ms
  - warm: total 3788ms; pre-provider 3632ms; provider 1ms; post-provider 155ms; response true
    - active window: metadata scans 29 (405.76ms total, max 34.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3632ms; provider 1ms; post-provider 155ms; unknown 2058.25ms; source plugins.metadata.scan 1295ms; agent.prepare 278.75ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3821 ms | 697 ms | 3124 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-8e2a29af-kova-260824-052540-944476/openclaw/timeline.jsonl |
  | warm | 3632 ms | 513 ms | 3119 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-8e2a29af-kova-260824-052540-944476/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 551 ms | 46 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 146 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 380 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 133 ms | 40 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-2ab680e0-kova-260824-052540-944476
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 877.8 MB; tracked total 1141.3 MB; max CPU 150%; samples 13; roles command-tree 1069.3MB/218.1%, agent-process 877.8MB/150%, status-cli 618.8MB/167.1%, agent-cli 239.2MB/77.1%
- agent: turn 3962ms; cold/warm 3962ms/3702ms; cold-warm delta 260ms; pre-provider 3804ms; provider 2ms; metadata scans 70 (991.72ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3949ms; max 3962ms; pre-provider p95 3790.8ms
- agent CLI attribution: cold known 701ms / unattributed 3103ms; warm known 504ms / unattributed 3036ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1605.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3962ms; pre-provider 3804ms; provider 2ms; post-provider 156ms; response true
    - active window: metadata scans 41 (584.3ms total, max 46.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3804ms; provider 2ms; post-provider 156ms; unknown 2243.62ms; source plugins.metadata.scan 1294.85ms; agent.prepare 265.53ms
  - warm: total 3702ms; pre-provider 3540ms; provider 1ms; post-provider 161ms; response true
    - active window: metadata scans 29 (407.42ms total, max 40.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3540ms; provider 1ms; post-provider 161ms; unknown 1979.62ms; source plugins.metadata.scan 1294.85ms; agent.prepare 265.53ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3804 ms | 701 ms | 3103 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-2ab680e0-kova-260824-052540-944476/openclaw/timeline.jsonl |
  | warm | 3540 ms | 504 ms | 3036 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-2ab680e0-kova-260824-052540-944476/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 563 ms | 46 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 138 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 379 ms | 41 ms |
  | warm | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 125 ms | 43 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-67b331a3-kova-260824-052540-944476
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 913.8 MB; tracked total 1180.4 MB; max CPU 150%; samples 13; roles command-tree 1108.5MB/177.3%, agent-process 913.8MB/150%, status-cli 646.6MB/177.3%, agent-cli 196.3MB/27.1%
- agent: turn 3804ms; cold/warm 3804ms/3551ms; cold-warm delta 253ms; pre-provider 3645ms; provider 2ms; metadata scans 70 (943.63ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3791.35ms; max 3804ms; pre-provider p95 3632.2ms
- agent CLI attribution: cold known 671ms / unattributed 2974ms; warm known 506ms / unattributed 2883ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1552.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3804ms; pre-provider 3645ms; provider 2ms; post-provider 157ms; response true
    - active window: metadata scans 41 (552.47ms total, max 45.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3645ms; provider 2ms; post-provider 157ms; unknown 2137.99ms; source plugins.metadata.scan 1241.49ms; agent.prepare 265.52ms
  - warm: total 3551ms; pre-provider 3389ms; provider 0ms; post-provider 162ms; response true
    - active window: metadata scans 29 (391.16ms total, max 32.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3389ms; provider 0ms; post-provider 162ms; unknown 1881.99ms; source plugins.metadata.scan 1241.49ms; agent.prepare 265.52ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3645 ms | 671 ms | 2974 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-67b331a3-kova-260824-052540-944476/openclaw/timeline.jsonl |
  | warm | 3389 ms | 506 ms | 2883 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-67b331a3-kova-260824-052540-944476/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 538 ms | 46 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 133 ms | 43 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 371 ms | 32 ms |
  | warm | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 135 ms | 45 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260824-052540-944476-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260824-052540-944476-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260824-052540-944476-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-gateway-performance-man-005107f3-kova-260824-052540-944476
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-gateway-performance-man-1e8be6a8-kova-260824-052540-944476
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-gateway-performance-man-958fde53-kova-260824-052540-944476
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-8e2a29af-kova-260824-052540-944476
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-2ab680e0-kova-260824-052540-944476
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260824-052540-944476/kova-agent-cold-warm-message-67b331a3-kova-260824-052540-944476

## Target Cleanup

- Runtime: `kova-local-mt6sls4u-409-96384e05`
- Result: removed
- Duration: 441ms

