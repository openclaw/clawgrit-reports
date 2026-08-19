# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1066.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1066.2 MB, gateway-tree 1055.9 MB, command-tree 469.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1066.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1066.2 MB, gateway-tree 1055.9 MB, command-tree 469.3 MB |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 6 (FAIL:3, PASS:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 109 total, 0 missing, 0 failed
- Categories: command: 55, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260819-052019-24dc28` |
| Generated | 2026-08-19T05:23:14.104Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1066.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1066.2 MB, gateway-tree 1055.9 MB, command-tree 469.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5795 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1111.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1111.1 MB, gateway-tree 1076 MB, command-tree 460.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5022 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1074.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1074.9 MB, gateway-tree 1074.9 MB, command-tree 457 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5412 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5412ms | 1074.9MB | n/a | 148% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156% | 4172ms | 3890ms | 3992ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5795ms | 1066.2 MB | 1595.8 MB | n/a | n/a | gateway peak RSS 1066.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1066.2 MB, gateway-tree 1055.9 MB, command-tree 469.3 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5022ms | 1111.1 MB | 1608.4 MB | n/a | n/a | gateway peak RSS 1111.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1111.1 MB, gateway-tree 1076 MB, command-tree 460.8 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5412ms | 1074.9 MB | 1603 MB | n/a | n/a | gateway peak RSS 1074.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1074.9 MB, gateway-tree 1074.9 MB, command-tree 457 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1218.5 MB | 4168ms | 4078ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1182.8 MB | 4250ms | 3864ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1168.7 MB | 4172ms | 3890ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1147.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1111.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 639.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 183.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1076 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 956.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 191.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.6% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 465.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- mock-provider: RSS 72 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 18.7% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-gateway-performance-man-005107f3-kova-260819-052019-24dc28
Measurements:
- startup: listening 4780ms; health 5795ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 904ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/cold-start 1015ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1066.2 MB; tracked total 1595.8 MB; max CPU 144%; samples 16; roles gateway 1066.2MB/144%, command-tree 469.3MB/144%, gateway-tree 1055.9MB/144%, status-cli 469.3MB/139%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1054.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1066.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1066.2 MB, gateway-tree 1055.9 MB, command-tree 469.3 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-gateway-performance-man-1e8be6a8-kova-260819-052019-24dc28
Measurements:
- startup: listening 4269ms; health 5022ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 753ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/warm-restart 856ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1111.1 MB; tracked total 1608.4 MB; max CPU 148%; samples 15; roles gateway 1111.1MB/148%, gateway-tree 1076MB/148%, command-tree 460.8MB/145%, model-cli 460.8MB/144%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 975.42ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1111.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1111.1 MB, gateway-tree 1076 MB, command-tree 460.8 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-gateway-performance-man-958fde53-kova-260819-052019-24dc28
Measurements:
- startup: listening 4531ms; health 5412ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 872ms; post-ready p95 3ms; failures 29; final failures 0; slowest startup-sample/cold-start 881ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1074.9 MB; tracked total 1603 MB; max CPU 151%; samples 15; roles gateway 1074.9MB/151%, gateway-tree 1074.9MB/151%, command-tree 457MB/146%, model-cli 457MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 997.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1074.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1074.9 MB, gateway-tree 1074.9 MB, command-tree 457 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-8e2a29af-kova-260819-052019-24dc28
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 956.7 MB; tracked total 1218.5 MB; max CPU 160%; samples 15; roles command-tree 1147.3MB/183.8%, agent-process 956.7MB/160%, status-cli 637.3MB/183.8%, agent-cli 190.9MB/158.6%
- agent: turn 4168ms; cold/warm 4168ms/4078ms; cold-warm delta 90ms; pre-provider 3982ms; provider 2ms; metadata scans 70 (1101.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4163.5ms; max 4168ms; pre-provider p95 3977.9ms
- agent CLI attribution: cold known 762ms / unattributed 3220ms; warm known 612ms / unattributed 3288ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1918.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4168ms; pre-provider 3982ms; provider 2ms; post-provider 184ms; response true
    - active window: metadata scans 41 (629.37ms total, max 40.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3982ms; provider 2ms; post-provider 184ms; unknown 2216.15ms; source plugins.metadata.scan 1445.04ms; agent.prepare 320.81ms
  - warm: total 4078ms; pre-provider 3900ms; provider 1ms; post-provider 177ms; response true
    - active window: metadata scans 29 (471.94ms total, max 40.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3900ms; provider 1ms; post-provider 177ms; unknown 2134.15ms; source plugins.metadata.scan 1445.04ms; agent.prepare 320.81ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3982 ms | 762 ms | 3220 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-8e2a29af-kova-260819-052019-24dc28/openclaw/timeline.jsonl |
  | warm | 3900 ms | 612 ms | 3288 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-8e2a29af-kova-260819-052019-24dc28/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 607 ms | 40 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 155 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 445 ms | 41 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 167 ms | 64 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-2ab680e0-kova-260819-052019-24dc28
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 920.1 MB; tracked total 1182.8 MB; max CPU 153%; samples 14; roles command-tree 1111.2MB/180.4%, agent-process 920.1MB/153%, status-cli 639.5MB/178.3%, agent-cli 191.1MB/30.4%
- agent: turn 4250ms; cold/warm 4250ms/3864ms; cold-warm delta 386ms; pre-provider 4038ms; provider 2ms; metadata scans 70 (1100.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4230.7ms; max 4250ms; pre-provider p95 4020.85ms
- agent CLI attribution: cold known 776ms / unattributed 3262ms; warm known 558ms / unattributed 3137ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1818.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4250ms; pre-provider 4038ms; provider 2ms; post-provider 210ms; response true
    - active window: metadata scans 41 (658.19ms total, max 42.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4038ms; provider 2ms; post-provider 210ms; unknown 2296.54ms; source plugins.metadata.scan 1458.19ms; agent.prepare 283.27ms
  - warm: total 3864ms; pre-provider 3695ms; provider 1ms; post-provider 168ms; response true
    - active window: metadata scans 29 (442.33ms total, max 36.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3695ms; provider 1ms; post-provider 168ms; unknown 1953.54ms; source plugins.metadata.scan 1458.19ms; agent.prepare 283.27ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4038 ms | 776 ms | 3262 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-2ab680e0-kova-260819-052019-24dc28/openclaw/timeline.jsonl |
  | warm | 3695 ms | 558 ms | 3137 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-2ab680e0-kova-260819-052019-24dc28/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 630 ms | 43 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 146 ms | 43 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 419 ms | 37 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 139 ms | 43 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-67b331a3-kova-260819-052019-24dc28
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 906.5 MB; tracked total 1168.7 MB; max CPU 156%; samples 14; roles command-tree 1097MB/178.3%, agent-process 906.5MB/156%, status-cli 638.8MB/178.3%, agent-cli 190.5MB/28.9%
- agent: turn 4172ms; cold/warm 4172ms/3890ms; cold-warm delta 282ms; pre-provider 3992ms; provider 2ms; metadata scans 70 (1060.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4157.9ms; max 4172ms; pre-provider p95 3978.6ms
- agent CLI attribution: cold known 762ms / unattributed 3230ms; warm known 534ms / unattributed 3190ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1871.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4172ms; pre-provider 3992ms; provider 2ms; post-provider 178ms; response true
    - active window: metadata scans 41 (635.76ms total, max 41.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3992ms; provider 2ms; post-provider 178ms; unknown 2313.91ms; source plugins.metadata.scan 1400.38ms; agent.prepare 277.71ms
  - warm: total 3890ms; pre-provider 3724ms; provider 1ms; post-provider 165ms; response true
    - active window: metadata scans 29 (425.11ms total, max 35.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3724ms; provider 1ms; post-provider 165ms; unknown 2045.91ms; source plugins.metadata.scan 1400.38ms; agent.prepare 277.71ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3992 ms | 762 ms | 3230 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-67b331a3-kova-260819-052019-24dc28/openclaw/timeline.jsonl |
  | warm | 3724 ms | 534 ms | 3190 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-67b331a3-kova-260819-052019-24dc28/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 618 ms | 42 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 144 ms | 46 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 400 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 134 ms | 42 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260819-052019-24dc28-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260819-052019-24dc28-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260819-052019-24dc28-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-gateway-performance-man-005107f3-kova-260819-052019-24dc28
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-gateway-performance-man-1e8be6a8-kova-260819-052019-24dc28
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-gateway-performance-man-958fde53-kova-260819-052019-24dc28
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-8e2a29af-kova-260819-052019-24dc28
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-2ab680e0-kova-260819-052019-24dc28
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260819-052019-24dc28/kova-agent-cold-warm-message-67b331a3-kova-260819-052019-24dc28

## Target Cleanup

- Runtime: `kova-local-mszn7mwq-3x5-bddd794d`
- Result: removed
- Duration: 465ms

