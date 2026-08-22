# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1069.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1069.9 MB, gateway-tree 1062.4 MB, command-tree 471.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1069.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1069.9 MB, gateway-tree 1062.4 MB, command-tree 471.1 MB |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 6 (FAIL:2, PASS:4) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 109 total, 0 missing, 0 failed
- Categories: command: 55, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260822-051943-abbdc5` |
| Generated | 2026-08-22T05:22:24.194Z |
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
| FAIL | 2 |
| PASS | 4 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1069.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1069.9 MB, gateway-tree 1062.4 MB, command-tree 471.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5338 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1062.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1062.1 MB, gateway-tree 1061.3 MB, command-tree 491 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4738 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:2, PASS:1 | 4776ms | 1062.1MB | n/a | 149% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152% | 3742ms | 3439ms | 3586ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5338ms | 1069.9 MB | 1604.5 MB | n/a | n/a | gateway peak RSS 1069.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1069.9 MB, gateway-tree 1062.4 MB, command-tree 471.1 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4738ms | 1062.1 MB | 1623.6 MB | n/a | n/a | gateway peak RSS 1062.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1062.1 MB, gateway-tree 1061.3 MB, command-tree 491 MB |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4776ms | 1010.4 MB | 1556.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1142.3 MB | 3755ms | 3439ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1201.8 MB | 3722ms | 3464ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1150.2 MB | 3742ms | 3434ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1130.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1069.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 149% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 619 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1062.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 149% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 938 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 491 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 194.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 27.3% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 14.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-gateway-performance-man-005107f3-kova-260822-051943-abbdc5
Measurements:
- startup: listening 4531ms; health 5338ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 507ms; post-ready p95 2ms; failures 29; final failures 0; slowest startup-sample/cold-start 807ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1069.9 MB; tracked total 1604.5 MB; max CPU 147%; samples 15; roles gateway 1069.9MB/147%, gateway-tree 1062.4MB/147%, command-tree 471.1MB/145%, status-cli 471.1MB/135%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 716.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1069.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1069.9 MB, gateway-tree 1062.4 MB, command-tree 471.1 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-gateway-performance-man-1e8be6a8-kova-260822-051943-abbdc5
Measurements:
- startup: listening 4272ms; health 4738ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 466ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/warm-restart 683ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1062.1 MB; tracked total 1623.6 MB; max CPU 149%; samples 15; roles gateway 1062.1MB/149%, gateway-tree 1061.3MB/149%, command-tree 491MB/145%, model-cli 491MB/145%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 614.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1062.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1062.1 MB, gateway-tree 1061.3 MB, command-tree 491 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-8e2a29af-kova-260822-051943-abbdc5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 881.5 MB; tracked total 1142.3 MB; max CPU 152%; samples 13; roles command-tree 1070.5MB/175.4%, agent-process 881.5MB/152%, status-cli 618.5MB/175.4%, agent-cli 192.4MB/26.4%
- agent: turn 3755ms; cold/warm 3755ms/3439ms; cold-warm delta 316ms; pre-provider 3596ms; provider 1ms; metadata scans 70 (949.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3739.2ms; max 3755ms; pre-provider p95 3580.8ms
- agent CLI attribution: cold known 680ms / unattributed 2916ms; warm known 488ms / unattributed 2804ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1597.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3755ms; pre-provider 3596ms; provider 1ms; post-provider 158ms; response true
    - active window: metadata scans 41 (562.5ms total, max 37.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3596ms; provider 1ms; post-provider 158ms; unknown 2085.55ms; source plugins.metadata.scan 1247.51ms; agent.prepare 262.94ms
  - warm: total 3439ms; pre-provider 3292ms; provider 0ms; post-provider 147ms; response true
    - active window: metadata scans 29 (386.73ms total, max 32.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3292ms; provider 0ms; post-provider 147ms; unknown 1781.55ms; source plugins.metadata.scan 1247.51ms; agent.prepare 262.94ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3596 ms | 680 ms | 2916 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-8e2a29af-kova-260822-051943-abbdc5/openclaw/timeline.jsonl |
  | warm | 3292 ms | 488 ms | 2804 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-8e2a29af-kova-260822-051943-abbdc5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 541 ms | 38 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 139 ms | 49 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 363 ms | 32 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 125 ms | 38 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-2ab680e0-kova-260822-051943-abbdc5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 938 MB; tracked total 1201.8 MB; max CPU 155%; samples 13; roles command-tree 1130.4MB/174.4%, agent-process 938MB/155%, status-cli 619MB/174.4%, agent-cli 192.4MB/27.3%
- agent: turn 3722ms; cold/warm 3722ms/3464ms; cold-warm delta 258ms; pre-provider 3566ms; provider 2ms; metadata scans 70 (957.17ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3709.1ms; max 3722ms; pre-provider p95 3553.15ms
- agent CLI attribution: cold known 673ms / unattributed 2893ms; warm known 513ms / unattributed 2796ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1582.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3722ms; pre-provider 3566ms; provider 2ms; post-provider 154ms; response true
    - active window: metadata scans 41 (558.41ms total, max 36.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3566ms; provider 2ms; post-provider 154ms; unknown 2031.07ms; source plugins.metadata.scan 1270.15ms; agent.prepare 264.78ms
  - warm: total 3464ms; pre-provider 3309ms; provider 0ms; post-provider 155ms; response true
    - active window: metadata scans 29 (398.76ms total, max 33.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3309ms; provider 0ms; post-provider 155ms; unknown 1774.07ms; source plugins.metadata.scan 1270.15ms; agent.prepare 264.78ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3566 ms | 673 ms | 2893 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-2ab680e0-kova-260822-051943-abbdc5/openclaw/timeline.jsonl |
  | warm | 3309 ms | 513 ms | 2796 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-2ab680e0-kova-260822-051943-abbdc5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 541 ms | 36 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 132 ms | 39 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 381 ms | 33 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 132 ms | 45 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-67b331a3-kova-260822-051943-abbdc5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 886.1 MB; tracked total 1150.2 MB; max CPU 152%; samples 13; roles command-tree 1078.2MB/172.4%, agent-process 886.1MB/152%, status-cli 617.8MB/172.4%, agent-cli 194.4MB/26.1%
- agent: turn 3742ms; cold/warm 3742ms/3434ms; cold-warm delta 308ms; pre-provider 3586ms; provider 1ms; metadata scans 70 (958.26ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3726.6ms; max 3742ms; pre-provider p95 3570.55ms
- agent CLI attribution: cold known 689ms / unattributed 2897ms; warm known 495ms / unattributed 2782ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1573.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3742ms; pre-provider 3586ms; provider 1ms; post-provider 155ms; response true
    - active window: metadata scans 41 (569.73ms total, max 36.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3586ms; provider 1ms; post-provider 155ms; unknown 2063.64ms; source plugins.metadata.scan 1260.9ms; agent.prepare 261.46ms
  - warm: total 3434ms; pre-provider 3277ms; provider 0ms; post-provider 157ms; response true
    - active window: metadata scans 29 (388.53ms total, max 33.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3277ms; provider 0ms; post-provider 157ms; unknown 1754.64ms; source plugins.metadata.scan 1260.9ms; agent.prepare 261.46ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3586 ms | 689 ms | 2897 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-67b331a3-kova-260822-051943-abbdc5/openclaw/timeline.jsonl |
  | warm | 3277 ms | 495 ms | 2782 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-67b331a3-kova-260822-051943-abbdc5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 551 ms | 36 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 138 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 369 ms | 33 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 126 ms | 39 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260822-051943-abbdc5-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260822-051943-abbdc5-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260822-051943-abbdc5-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-gateway-performance-man-005107f3-kova-260822-051943-abbdc5
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-gateway-performance-man-1e8be6a8-kova-260822-051943-abbdc5
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-gateway-performance-man-958fde53-kova-260822-051943-abbdc5
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-8e2a29af-kova-260822-051943-abbdc5
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-2ab680e0-kova-260822-051943-abbdc5
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260822-051943-abbdc5/kova-agent-cold-warm-message-67b331a3-kova-260822-051943-abbdc5

## Target Cleanup

- Runtime: `kova-local-mt3xif25-41b-3595690b`
- Result: removed
- Duration: 418ms

