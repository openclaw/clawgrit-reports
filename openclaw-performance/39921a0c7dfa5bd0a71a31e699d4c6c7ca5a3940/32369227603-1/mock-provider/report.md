# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1064.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1064.1 MB, gateway-tree 1064.1 MB, command-tree 456.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1064.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1064.1 MB, gateway-tree 1064.1 MB, command-tree 456.2 MB |
| Blocking findings | 8 |
| Warnings | 0 |
| Records | 15 (PASS:7, FAIL:8) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260820-123208-5df88e` |
| Generated | 2026-08-20T12:44:22.163Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 15 |
| Scenarios | 4 |
| States | 4 |
| PASS | 7 |
| FAIL | 8 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1064.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1064.1 MB, gateway-tree 1064.1 MB, command-tree 456.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5425 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1089.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1089.8 MB, gateway-tree 1089.8 MB, command-tree 486.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5264 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1125.1 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6518 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1085.4 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5830 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1091 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7400 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1097.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1097.9 MB, gateway-tree 1097.9 MB, command-tree 520.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6984 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1118.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1118.6 MB, gateway-tree 1024 MB, command-tree 521.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 8572 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1073 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1073 MB, gateway-tree 1034.4 MB, command-tree 515.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7421 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 9978ms | 1043.7MB | n/a | 160% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:2, PASS:1 | 5425ms | 1064.1MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 6518ms | 1091MB | n/a | 158% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 159% | 4663ms | 4287ms | 4461ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 7421ms | 1097.9MB | n/a | 158% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 11452ms | 1043.8 MB | 1635.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 9978ms | 1043.3 MB | 1602.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 7842ms | 1043.7 MB | 1573.8 MB | n/a | n/a |  |
| 1 | FAIL | fresh-install/onboarded-user |  | 5425ms | 1064.1 MB | 1589.8 MB | n/a | n/a | gateway peak RSS 1064.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1064.1 MB, gateway-tree 1064.1 MB, command-tree 456.2 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 5264ms | 1089.8 MB | 1646.4 MB | n/a | n/a | gateway peak RSS 1089.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1089.8 MB, gateway-tree 1089.8 MB, command-tree 486.7 MB |
| 3 | PASS | fresh-install/onboarded-user |  | 5510ms | 1038.7 MB | 1599.4 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 6518ms | 1125.1 MB | 1202.7 MB | n/a | n/a | gateway peak RSS 1125.1 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5830ms | 1085.4 MB | 1565.8 MB | n/a | n/a | gateway peak RSS 1085.4 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 7400ms | 1091 MB | 1158.5 MB | n/a | n/a | gateway peak RSS 1091 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1190.1 MB | 4511ms | 4129ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1208 MB | 4663ms | 4287ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1188.4 MB | 5202ms | 4287ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 6984ms | 1097.9 MB | 1688.3 MB | n/a | n/a | gateway peak RSS 1097.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1097.9 MB, gateway-tree 1097.9 MB, command-tree 520.8 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 8572ms | 1118.6 MB | 1614.8 MB | n/a | n/a | gateway peak RSS 1118.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1118.6 MB, gateway-tree 1024 MB, command-tree 521.4 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 7421ms | 1073 MB | 1619.8 MB | n/a | n/a | gateway peak RSS 1073 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1073 MB, gateway-tree 1034.4 MB, command-tree 515.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1136.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 199.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 578.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 199.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1125.1 MB (scenario bundled-plugin-startup/fresh); CPU 163% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 1125.1 MB (scenario bundled-plugin-startup/fresh); CPU 163% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 715.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 194% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 940.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 492.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 169% (scenario fresh-install/fresh)
- plugin-cli: RSS 427.9 MB (scenario fresh-install/fresh); CPU 164% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-fresh-install-onboarded-9f99e904-kova-260820-123208-5df88e
Measurements:
- startup: listening 4772ms; health 5425ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 2ms; post-ready p95 3ms; failures 19; final failures 0; slowest startup-sample/provision 653ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1064.1 MB; tracked total 1589.8 MB; max CPU 150%; samples 15; roles gateway 1064.1MB/150%, command-tree 456.2MB/150%, gateway-tree 1064.1MB/150%, model-cli 456.2MB/142%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 796.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1064.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1064.1 MB, gateway-tree 1064.1 MB, command-tree 456.2 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-fresh-install-onboarded-f9c24855-kova-260820-123208-5df88e
Measurements:
- startup: listening 4520ms; health 5264ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 744ms; post-ready p95 4ms; failures 18; final failures 0; slowest startup-sample/provision 744ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1089.8 MB; tracked total 1646.4 MB; max CPU 151%; samples 15; roles gateway 1089.8MB/151%, command-tree 486.7MB/157%, gateway-tree 1089.8MB/151%, plugin-cli 413.4MB/157%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 790.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1089.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1089.8 MB, gateway-tree 1089.8 MB, command-tree 486.7 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-bundled-plugin-startup-4a0cbdf7-kova-260820-123208-5df88e
Measurements:
- startup: listening 5537ms; health 6518ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 707ms; post-ready p95 3ms; failures 33; final failures 0; slowest startup-sample/gateway-start 981ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1125.1 MB; tracked total 1202.7 MB; max CPU 158%; samples 11; roles gateway 1125.1MB/158%, gateway-tree 1125.1MB/158%, mock-provider 72MB/15.6%, runtime-staging 72MB/15.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1001.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1125.1 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-bundled-plugin-startup-809ede2b-kova-260820-123208-5df88e
Measurements:
- startup: listening 4779ms; health 5830ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 868ms; post-ready p95 4ms; failures 32; final failures 0; slowest startup-sample/gateway-start 1051ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1085.4 MB; tracked total 1565.8 MB; max CPU 156%; samples 12; roles gateway 1085.4MB/156%, gateway-tree 1085.4MB/156%, command-tree 409MB/143%, plugin-cli 409MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 976.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1085.4 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-bundled-plugin-startup-5377119f-kova-260820-123208-5df88e
Measurements:
- startup: listening 6305ms; health 7400ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 683ms; post-ready p95 3ms; failures 37; final failures 0; slowest startup-sample/gateway-start 1095ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1091 MB; tracked total 1158.5 MB; max CPU 159%; samples 11; roles gateway 1091MB/159%, gateway-tree 1081.7MB/159%, mock-provider 71.1MB/13.6%, runtime-staging 71.1MB/13.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1033.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1091 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-agent-cold-warm-message-8e2a29af-kova-260820-123208-5df88e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 923.3 MB; tracked total 1190.1 MB; max CPU 156%; samples 16; roles command-tree 1118MB/192.2%, agent-process 923.3MB/156%, status-cli 673.5MB/192.2%, agent-cli 196MB/30.1%
- agent: turn 4511ms; cold/warm 4511ms/4129ms; cold-warm delta 382ms; pre-provider 4299ms; provider 2ms; metadata scans 70 (1161.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4491.9ms; max 4511ms; pre-provider p95 4279.3ms
- agent CLI attribution: cold known 815ms / unattributed 3484ms; warm known 630ms / unattributed 3275ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1897.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4511ms; pre-provider 4299ms; provider 2ms; post-provider 210ms; response true
    - active window: metadata scans 41 (675.07ms total, max 52.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4299ms; provider 2ms; post-provider 210ms; unknown 2436.03ms; source plugins.metadata.scan 1528.98ms; agent.prepare 333.99ms
  - warm: total 4129ms; pre-provider 3905ms; provider 1ms; post-provider 223ms; response true
    - active window: metadata scans 29 (486.02ms total, max 37.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3905ms; provider 1ms; post-provider 223ms; unknown 2042.03ms; source plugins.metadata.scan 1528.98ms; agent.prepare 333.99ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4299 ms | 815 ms | 3484 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-agent-cold-warm-message-8e2a29af-kova-260820-123208-5df88e/openclaw/timeline.jsonl |
  | warm | 3905 ms | 630 ms | 3275 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-agent-cold-warm-message-8e2a29af-kova-260820-123208-5df88e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 652 ms | 53 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 163 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 459 ms | 38 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 171 ms | 52 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-agent-cold-warm-message-2ab680e0-kova-260820-123208-5df88e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 940.7 MB; tracked total 1208 MB; max CPU 159%; samples 16; roles command-tree 1136.3MB/194%, agent-process 940.7MB/159%, status-cli 670.3MB/194%, agent-cli 578.5MB/174.7%
- agent: turn 4663ms; cold/warm 4663ms/4287ms; cold-warm delta 376ms; pre-provider 4461ms; provider 3ms; metadata scans 70 (1164.85ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4644.2ms; max 4663ms; pre-provider p95 4442.65ms
- agent CLI attribution: cold known 815ms / unattributed 3646ms; warm known 610ms / unattributed 3484ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1994.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4663ms; pre-provider 4461ms; provider 3ms; post-provider 199ms; response true
    - active window: metadata scans 41 (683.29ms total, max 45.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4461ms; provider 3ms; post-provider 199ms; unknown 2571.26ms; source plugins.metadata.scan 1572.79ms; agent.prepare 316.95ms
  - warm: total 4287ms; pre-provider 4094ms; provider 1ms; post-provider 192ms; response true
    - active window: metadata scans 29 (481.56ms total, max 40.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4094ms; provider 1ms; post-provider 192ms; unknown 2204.26ms; source plugins.metadata.scan 1572.79ms; agent.prepare 316.95ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4461 ms | 815 ms | 3646 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-agent-cold-warm-message-2ab680e0-kova-260820-123208-5df88e/openclaw/timeline.jsonl |
  | warm | 4094 ms | 610 ms | 3484 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-agent-cold-warm-message-2ab680e0-kova-260820-123208-5df88e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 653 ms | 45 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 162 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 453 ms | 41 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 157 ms | 52 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-agent-cold-warm-message-67b331a3-kova-260820-123208-5df88e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 925.6 MB; tracked total 1188.4 MB; max CPU 159%; samples 17; roles command-tree 1116.2MB/199.3%, agent-cli 577.1MB/199.3%, agent-process 925.6MB/159%, status-cli 715.8MB/182.1%
- agent: turn 5202ms; cold/warm 5202ms/4287ms; cold-warm delta 915ms; pre-provider 4953ms; provider 2ms; metadata scans 70 (1211.22ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5156.25ms; max 5202ms; pre-provider p95 4909.6ms
- agent CLI attribution: cold known 863ms / unattributed 4090ms; warm known 614ms / unattributed 3471ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2005.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5202ms; pre-provider 4953ms; provider 2ms; post-provider 247ms; response true
    - active window: metadata scans 41 (725.98ms total, max 54.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4953ms; provider 2ms; post-provider 247ms; unknown 3041.32ms; source plugins.metadata.scan 1598.87ms; agent.prepare 312.81ms
  - warm: total 4287ms; pre-provider 4085ms; provider 1ms; post-provider 201ms; response true
    - active window: metadata scans 29 (485.24ms total, max 48.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4085ms; provider 1ms; post-provider 201ms; unknown 2173.32ms; source plugins.metadata.scan 1598.87ms; agent.prepare 312.81ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4953 ms | 863 ms | 4090 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-agent-cold-warm-message-67b331a3-kova-260820-123208-5df88e/openclaw/timeline.jsonl |
  | warm | 4085 ms | 614 ms | 3471 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-agent-cold-warm-message-67b331a3-kova-260820-123208-5df88e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 702 ms | 54 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 161 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 460 ms | 48 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 154 ms | 52 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-123208-5df88e-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-123208-5df88e-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-123208-5df88e-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-fresh-install-fresh-r1-697fad55-kova-260820-123208-5df88e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-fresh-install-fresh-r2-da880701-kova-260820-123208-5df88e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-fresh-install-fresh-r3-82f8bdbd-kova-260820-123208-5df88e
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-fresh-install-onboarded-9f99e904-kova-260820-123208-5df88e
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-fresh-install-onboarded-f9c24855-kova-260820-123208-5df88e
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-fresh-install-onboarded-fe872c26-kova-260820-123208-5df88e
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-bundled-plugin-startup-4a0cbdf7-kova-260820-123208-5df88e
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-bundled-plugin-startup-809ede2b-kova-260820-123208-5df88e
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-123208-5df88e/kova-bundled-plugin-startup-5377119f-kova-260820-123208-5df88e
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mt1i2szi-3wy-c2364dd6`
- Result: removed
- Duration: 546ms

