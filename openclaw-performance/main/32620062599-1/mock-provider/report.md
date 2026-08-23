# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1089.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1089.5 MB, gateway-tree 1089.5 MB, command-tree 456.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1089.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1089.5 MB, gateway-tree 1089.5 MB, command-tree 456.8 MB |
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
| Run ID | `kova-260823-052001-5289ca` |
| Generated | 2026-08-23T05:22:48.705Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU 212% exceeded threshold 200% | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5526 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1089.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1089.5 MB, gateway-tree 1089.5 MB, command-tree 456.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4876 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1079.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1079.6 MB, gateway-tree 1079.6 MB, command-tree 548.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4969 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU 250% exceeded threshold 200% | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4969 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4969ms | 1079.6MB | n/a | 149% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 149% | 3896ms | 3541ms | 3735ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5526ms | 1044.8 MB | 1624.3 MB | n/a | n/a | status-cli max CPU 212% exceeded threshold 200% |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4876ms | 1089.5 MB | 1615.6 MB | n/a | n/a | gateway peak RSS 1089.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1089.5 MB, gateway-tree 1089.5 MB, command-tree 456.8 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4969ms | 1079.6 MB | 1698.2 MB | n/a | n/a | gateway peak RSS 1079.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1079.6 MB, gateway-tree 1079.6 MB, command-tree 548.5 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1105.2 MB | 3896ms | 3541ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1142.7 MB | 3864ms | 3551ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1151.7 MB | 3915ms | 3486ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1089.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1079.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 250% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 1089.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 619.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 250% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 886.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 150% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 489 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 194.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 28.9% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 16.6% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-gateway-performance-man-005107f3-kova-260823-052001-5289ca
Measurements:
- startup: listening 4780ms; health 5526ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 554ms; post-ready p95 3ms; failures 29; final failures 0; slowest startup-sample/cold-start 746ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1044.8 MB; tracked total 1624.3 MB; max CPU 149%; samples 15; roles gateway 1044.8MB/149%, command-tree 509MB/212%, gateway-tree 1044.8MB/149%, status-cli 509MB/212%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 758.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - status-cli max CPU 212% exceeded threshold 200%

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-gateway-performance-man-1e8be6a8-kova-260823-052001-5289ca
Measurements:
- startup: listening 4267ms; health 4876ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 609ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/warm-restart 634ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1089.5 MB; tracked total 1615.6 MB; max CPU 151%; samples 15; roles gateway 1089.5MB/151%, gateway-tree 1089.5MB/151%, command-tree 456.8MB/147%, model-cli 456.8MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 689.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1089.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1089.5 MB, gateway-tree 1089.5 MB, command-tree 456.8 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-gateway-performance-man-958fde53-kova-260823-052001-5289ca
Measurements:
- startup: listening 4268ms; health 4969ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 683ms; post-ready p95 3ms; failures 27; final failures 0; slowest startup-sample/cold-start 701ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1079.6 MB; tracked total 1698.2 MB; max CPU 149%; samples 15; roles gateway 1079.6MB/149%, command-tree 548.5MB/250%, gateway-tree 1079.6MB/149%, status-cli 548.5MB/250%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 672.09ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1079.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1079.6 MB, gateway-tree 1079.6 MB, command-tree 548.5 MB
  - status-cli max CPU 250% exceeded threshold 200%

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-8e2a29af-kova-260823-052001-5289ca
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 842.8 MB; tracked total 1105.2 MB; max CPU 149%; samples 13; roles command-tree 1033.2MB/174.1%, agent-process 842.8MB/149%, status-cli 619.9MB/174.1%, agent-cli 194.5MB/28.9%
- agent: turn 3896ms; cold/warm 3896ms/3541ms; cold-warm delta 355ms; pre-provider 3735ms; provider 2ms; metadata scans 70 (980.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3878.25ms; max 3896ms; pre-provider p95 3717.65ms
- agent CLI attribution: cold known 698ms / unattributed 3037ms; warm known 505ms / unattributed 2883ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1562.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3896ms; pre-provider 3735ms; provider 2ms; post-provider 159ms; response true
    - active window: metadata scans 41 (579.67ms total, max 38.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3735ms; provider 2ms; post-provider 159ms; unknown 2175.68ms; source plugins.metadata.scan 1285.98ms; agent.prepare 273.34ms
  - warm: total 3541ms; pre-provider 3388ms; provider 0ms; post-provider 153ms; response true
    - active window: metadata scans 29 (401.22ms total, max 31.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3388ms; provider 0ms; post-provider 153ms; unknown 1828.68ms; source plugins.metadata.scan 1285.98ms; agent.prepare 273.34ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3735 ms | 698 ms | 3037 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-8e2a29af-kova-260823-052001-5289ca/openclaw/timeline.jsonl |
  | warm | 3388 ms | 505 ms | 2883 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-8e2a29af-kova-260823-052001-5289ca/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 556 ms | 39 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 142 ms | 49 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 373 ms | 31 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 132 ms | 40 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-2ab680e0-kova-260823-052001-5289ca
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 878.1 MB; tracked total 1142.7 MB; max CPU 149%; samples 13; roles command-tree 1070.6MB/174.4%, agent-process 878.1MB/149%, status-cli 619.4MB/174.4%, agent-cli 194.8MB/27.3%
- agent: turn 3864ms; cold/warm 3864ms/3551ms; cold-warm delta 313ms; pre-provider 3705ms; provider 2ms; metadata scans 70 (978.38ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3848.35ms; max 3864ms; pre-provider p95 3689.5ms
- agent CLI attribution: cold known 692ms / unattributed 3013ms; warm known 503ms / unattributed 2892ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1590.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3864ms; pre-provider 3705ms; provider 2ms; post-provider 157ms; response true
    - active window: metadata scans 41 (578.83ms total, max 38.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3705ms; provider 2ms; post-provider 157ms; unknown 2149.32ms; source plugins.metadata.scan 1289.96ms; agent.prepare 265.72ms
  - warm: total 3551ms; pre-provider 3395ms; provider 0ms; post-provider 156ms; response true
    - active window: metadata scans 29 (399.55ms total, max 33.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3395ms; provider 0ms; post-provider 156ms; unknown 1839.32ms; source plugins.metadata.scan 1289.96ms; agent.prepare 265.72ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3705 ms | 692 ms | 3013 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-2ab680e0-kova-260823-052001-5289ca/openclaw/timeline.jsonl |
  | warm | 3395 ms | 503 ms | 2892 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-2ab680e0-kova-260823-052001-5289ca/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 555 ms | 39 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 137 ms | 43 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 374 ms | 34 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 129 ms | 40 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-67b331a3-kova-260823-052001-5289ca
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 886.4 MB; tracked total 1151.7 MB; max CPU 150%; samples 13; roles command-tree 1079.8MB/173.4%, agent-process 886.4MB/150%, status-cli 618.7MB/173.4%, agent-cli 193.4MB/26.4%
- agent: turn 3915ms; cold/warm 3915ms/3486ms; cold-warm delta 429ms; pre-provider 3755ms; provider 2ms; metadata scans 70 (964.61ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3893.55ms; max 3915ms; pre-provider p95 3733.5ms
- agent CLI attribution: cold known 696ms / unattributed 3059ms; warm known 484ms / unattributed 2841ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1554.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3915ms; pre-provider 3755ms; provider 2ms; post-provider 158ms; response true
    - active window: metadata scans 41 (583.77ms total, max 38.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3755ms; provider 2ms; post-provider 158ms; unknown 2209.1ms; source plugins.metadata.scan 1279.1ms; agent.prepare 266.8ms
  - warm: total 3486ms; pre-provider 3325ms; provider 1ms; post-provider 160ms; response true
    - active window: metadata scans 29 (380.84ms total, max 32.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3325ms; provider 1ms; post-provider 160ms; unknown 1779.1ms; source plugins.metadata.scan 1279.1ms; agent.prepare 266.8ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3755 ms | 696 ms | 3059 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-67b331a3-kova-260823-052001-5289ca/openclaw/timeline.jsonl |
  | warm | 3325 ms | 484 ms | 2841 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-67b331a3-kova-260823-052001-5289ca/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 557 ms | 38 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 139 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 357 ms | 32 ms |
  | warm | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 127 ms | 43 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260823-052001-5289ca-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260823-052001-5289ca-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260823-052001-5289ca-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-gateway-performance-man-005107f3-kova-260823-052001-5289ca
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-gateway-performance-man-1e8be6a8-kova-260823-052001-5289ca
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-gateway-performance-man-958fde53-kova-260823-052001-5289ca
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-8e2a29af-kova-260823-052001-5289ca
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-2ab680e0-kova-260823-052001-5289ca
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260823-052001-5289ca/kova-agent-cold-warm-message-67b331a3-kova-260823-052001-5289ca

## Target Cleanup

- Runtime: `kova-local-mt5cyo8h-407-4dac8f0f`
- Result: removed
- Duration: 407ms

