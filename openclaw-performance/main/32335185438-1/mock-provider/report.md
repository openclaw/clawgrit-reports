# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1077.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1077.6 MB, gateway-tree 1055.4 MB, command-tree 499.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1077.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1077.6 MB, gateway-tree 1055.4 MB, command-tree 499.4 MB |
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
| Run ID | `kova-260820-052049-a24fd3` |
| Generated | 2026-08-20T05:23:50.245Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1077.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1077.6 MB, gateway-tree 1055.4 MB, command-tree 499.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7017 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1085.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1085.9 MB, gateway-tree 1058.7 MB, command-tree 471.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6624 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1077.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1077.2 MB, gateway-tree 974.9 MB, command-tree 471.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5663 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 6624ms | 1077.6MB | n/a | 151% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153% | 4031ms | 3642ms | 3865ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 7017ms | 1077.6 MB | 1626.3 MB | n/a | n/a | gateway peak RSS 1077.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1077.6 MB, gateway-tree 1055.4 MB, command-tree 499.4 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 6624ms | 1085.9 MB | 1600.8 MB | n/a | n/a | gateway peak RSS 1085.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1085.9 MB, gateway-tree 1058.7 MB, command-tree 471.7 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5663ms | 1077.2 MB | 1515.7 MB | n/a | n/a | gateway peak RSS 1077.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1077.2 MB, gateway-tree 974.9 MB, command-tree 471.8 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1168.4 MB | 4032ms | 3753ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1170.6 MB | 4031ms | 3642ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1202.4 MB | 3905ms | 3527ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1131.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1085.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 647 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1058.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 479.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 935.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 196.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 30.1% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72 MB (scenario gateway-performance/many-bundled-plugins); CPU 16.6% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-gateway-performance-man-005107f3-kova-260820-052049-a24fd3
Measurements:
- startup: listening 5794ms; health 7017ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 874ms; post-ready p95 3ms; failures 35; final failures 0; slowest startup-sample/cold-start 1223ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1077.6 MB; tracked total 1626.3 MB; max CPU 151%; samples 16; roles gateway 1077.6MB/151%, command-tree 499.4MB/156%, gateway-tree 1055.4MB/151%, model-cli 479.6MB/156%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1292.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1077.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1077.6 MB, gateway-tree 1055.4 MB, command-tree 499.4 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-gateway-performance-man-1e8be6a8-kova-260820-052049-a24fd3
Measurements:
- startup: listening 5540ms; health 6624ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 1084ms; post-ready p95 3ms; failures 35; final failures 0; slowest startup-sample/warm-restart 1239ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1085.9 MB; tracked total 1600.8 MB; max CPU 155%; samples 15; roles gateway 1085.9MB/155%, gateway-tree 1058.7MB/155%, command-tree 471.7MB/151%, model-cli 471.7MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1220.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1085.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1085.9 MB, gateway-tree 1058.7 MB, command-tree 471.7 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-gateway-performance-man-958fde53-kova-260820-052049-a24fd3
Measurements:
- startup: listening 4773ms; health 5663ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 890ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/warm-restart 1088ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1077.2 MB; tracked total 1515.7 MB; max CPU 146%; samples 15; roles gateway 1077.2MB/146%, gateway-tree 974.9MB/146%, command-tree 471.8MB/143%, status-cli 471.8MB/141%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1027.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1077.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1077.2 MB, gateway-tree 974.9 MB, command-tree 471.8 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-8e2a29af-kova-260820-052049-a24fd3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 902 MB; tracked total 1168.4 MB; max CPU 153%; samples 13; roles command-tree 1096.5MB/174.9%, agent-process 902MB/153%, status-cli 621.8MB/173.4%, agent-cli 195.5MB/28.9%
- agent: turn 4032ms; cold/warm 4032ms/3753ms; cold-warm delta 279ms; pre-provider 3867ms; provider 2ms; metadata scans 70 (995.45ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4018.05ms; max 4032ms; pre-provider p95 3853.4ms
- agent CLI attribution: cold known 742ms / unattributed 3125ms; warm known 522ms / unattributed 3073ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1797.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4032ms; pre-provider 3867ms; provider 2ms; post-provider 163ms; response true
    - active window: metadata scans 41 (584.32ms total, max 45.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3867ms; provider 2ms; post-provider 163ms; unknown 2254.3ms; source plugins.metadata.scan 1300.58ms; agent.prepare 312.12ms
  - warm: total 3753ms; pre-provider 3595ms; provider 1ms; post-provider 157ms; response true
    - active window: metadata scans 29 (411.13ms total, max 35.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3595ms; provider 1ms; post-provider 157ms; unknown 1982.3ms; source plugins.metadata.scan 1300.58ms; agent.prepare 312.12ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3867 ms | 742 ms | 3125 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-8e2a29af-kova-260820-052049-a24fd3/openclaw/timeline.jsonl |
  | warm | 3595 ms | 522 ms | 3073 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-8e2a29af-kova-260820-052049-a24fd3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 564 ms | 46 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 178 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 388 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 134 ms | 45 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-2ab680e0-kova-260820-052049-a24fd3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 905.1 MB; tracked total 1170.6 MB; max CPU 154%; samples 13; roles command-tree 1099.1MB/177.6%, agent-process 905.1MB/154%, status-cli 623.9MB/177.6%, agent-cli 194.7MB/28.5%
- agent: turn 4031ms; cold/warm 4031ms/3642ms; cold-warm delta 389ms; pre-provider 3865ms; provider 2ms; metadata scans 70 (998.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4011.55ms; max 4031ms; pre-provider p95 3845.2ms
- agent CLI attribution: cold known 713ms / unattributed 3152ms; warm known 524ms / unattributed 2945ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1685.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4031ms; pre-provider 3865ms; provider 2ms; post-provider 164ms; response true
    - active window: metadata scans 41 (593.25ms total, max 44.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3865ms; provider 2ms; post-provider 164ms; unknown 2278.65ms; source plugins.metadata.scan 1305.91ms; agent.prepare 280.44ms
  - warm: total 3642ms; pre-provider 3469ms; provider 1ms; post-provider 172ms; response true
    - active window: metadata scans 29 (405.59ms total, max 34.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3469ms; provider 1ms; post-provider 172ms; unknown 1882.65ms; source plugins.metadata.scan 1305.91ms; agent.prepare 280.44ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3865 ms | 713 ms | 3152 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-2ab680e0-kova-260820-052049-a24fd3/openclaw/timeline.jsonl |
  | warm | 3469 ms | 524 ms | 2945 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-2ab680e0-kova-260820-052049-a24fd3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 570 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 143 ms | 43 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 385 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 139 ms | 48 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-67b331a3-kova-260820-052049-a24fd3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 935.6 MB; tracked total 1202.4 MB; max CPU 150%; samples 13; roles command-tree 1131.1MB/174.1%, agent-process 935.6MB/150%, status-cli 647MB/173.7%, agent-cli 196.1MB/30.1%
- agent: turn 3905ms; cold/warm 3905ms/3527ms; cold-warm delta 378ms; pre-provider 3746ms; provider 2ms; metadata scans 70 (967.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3886.1ms; max 3905ms; pre-provider p95 3726.8ms
- agent CLI attribution: cold known 689ms / unattributed 3057ms; warm known 502ms / unattributed 2860ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1664.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3905ms; pre-provider 3746ms; provider 2ms; post-provider 157ms; response true
    - active window: metadata scans 41 (571.71ms total, max 36.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3746ms; provider 2ms; post-provider 157ms; unknown 2214.06ms; source plugins.metadata.scan 1267.2ms; agent.prepare 264.74ms
  - warm: total 3527ms; pre-provider 3362ms; provider 1ms; post-provider 164ms; response true
    - active window: metadata scans 29 (396.18ms total, max 34.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3362ms; provider 1ms; post-provider 164ms; unknown 1830.06ms; source plugins.metadata.scan 1267.2ms; agent.prepare 264.74ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3746 ms | 689 ms | 3057 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-67b331a3-kova-260820-052049-a24fd3/openclaw/timeline.jsonl |
  | warm | 3362 ms | 502 ms | 2860 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-67b331a3-kova-260820-052049-a24fd3/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 551 ms | 37 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 138 ms | 44 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 375 ms | 34 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 127 ms | 44 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-052049-a24fd3-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-052049-a24fd3-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-052049-a24fd3-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-gateway-performance-man-005107f3-kova-260820-052049-a24fd3
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-gateway-performance-man-1e8be6a8-kova-260820-052049-a24fd3
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-gateway-performance-man-958fde53-kova-260820-052049-a24fd3
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-8e2a29af-kova-260820-052049-a24fd3
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-2ab680e0-kova-260820-052049-a24fd3
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-052049-a24fd3/kova-agent-cold-warm-message-67b331a3-kova-260820-052049-a24fd3

## Target Cleanup

- Runtime: `kova-local-mt12o4yh-3wo-8016127e`
- Result: removed
- Duration: 414ms

