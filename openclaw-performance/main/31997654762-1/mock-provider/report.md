# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1221.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1221.9 MB, gateway-tree 1221.9 MB, command-tree 467.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1221.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1221.9 MB, gateway-tree 1221.9 MB, command-tree 467.1 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 6 (FAIL:3, PASS:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 109 total, 0 missing, 0 failed
- Categories: command: 55, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260817-052255-1a1b3e` |
| Generated | 2026-08-17T05:25:36.070Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1221.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1221.9 MB, gateway-tree 1221.9 MB, command-tree 467.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5337 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1221.9 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5337 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1236.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1236.3 MB, gateway-tree 1236.3 MB, command-tree 463.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4843 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1236.3 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4843 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1226.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1226.1 MB, gateway-tree 1226.1 MB, command-tree 467.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4831 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1226.1 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4831 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4843ms | 1226.1MB | n/a | 158% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153% | 3514ms | 3164ms | 3364ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5337ms | 1221.9 MB | 1759.8 MB | n/a | n/a | gateway peak RSS 1221.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1221.9 MB, gateway-tree 1221.9 MB, command-tree 467.1 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4843ms | 1236.3 MB | 1770.7 MB | n/a | n/a | gateway peak RSS 1236.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1236.3 MB, gateway-tree 1236.3 MB, command-tree 463.8 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4831ms | 1226.1 MB | 1763.9 MB | n/a | n/a | gateway peak RSS 1226.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1226.1 MB, gateway-tree 1226.1 MB, command-tree 467.5 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1139.9 MB | 3514ms | 3137ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1195.7 MB | 3438ms | 3164ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1191.6 MB | 3541ms | 3195ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1236.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1124.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 178.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1236.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 637.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 935.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 463.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 189.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 28.9% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 73.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 16.6% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-gateway-performance-man-005107f3-kova-260817-052255-1a1b3e
Measurements:
- startup: listening 4530ms; health 5337ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 700ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/cold-start 807ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1221.9 MB; tracked total 1759.8 MB; max CPU 155%; samples 15; roles gateway 1221.9MB/155%, gateway-tree 1221.9MB/155%, command-tree 467.1MB/144%, status-cli 467.1MB/141%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 699.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1221.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1221.9 MB, gateway-tree 1221.9 MB, command-tree 467.1 MB
  - gateway-tree peak RSS 1221.9 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-gateway-performance-man-1e8be6a8-kova-260817-052255-1a1b3e
Measurements:
- startup: listening 4271ms; health 4843ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 572ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/warm-restart 712ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1236.3 MB; tracked total 1770.7 MB; max CPU 158%; samples 15; roles gateway 1236.3MB/158%, gateway-tree 1236.3MB/158%, command-tree 463.8MB/146%, status-cli 463.8MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 639.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1236.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1236.3 MB, gateway-tree 1236.3 MB, command-tree 463.8 MB
  - gateway-tree peak RSS 1236.3 MB exceeded threshold 1200 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-gateway-performance-man-958fde53-kova-260817-052255-1a1b3e
Measurements:
- startup: listening 4268ms; health 4831ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 510ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/cold-start 563ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1226.1 MB; tracked total 1763.9 MB; max CPU 159%; samples 15; roles gateway 1226.1MB/159%, gateway-tree 1226.1MB/159%, command-tree 467.5MB/147%, status-cli 467.5MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 621.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1226.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1226.1 MB, gateway-tree 1226.1 MB, command-tree 467.5 MB
  - gateway-tree peak RSS 1226.1 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-8e2a29af-kova-260817-052255-1a1b3e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 877.5 MB; tracked total 1139.9 MB; max CPU 149%; samples 13; roles command-tree 1066.8MB/172.7%, agent-process 877.5MB/149%, status-cli 614.9MB/172.7%, agent-cli 189.3MB/27.3%
- agent: turn 3514ms; cold/warm 3514ms/3137ms; cold-warm delta 377ms; pre-provider 3364ms; provider 3ms; metadata scans 32 (438.71ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3495.15ms; max 3514ms; pre-provider p95 3346ms
- agent CLI attribution: cold known 437ms / unattributed 2927ms; warm known 256ms / unattributed 2748ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1445.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3514ms; pre-provider 3364ms; provider 3ms; post-provider 147ms; response true
    - active window: metadata scans 22 (300.6ms total, max 44.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3364ms; provider 3ms; post-provider 147ms; unknown 2363.59ms; source plugins.metadata.scan 747.68ms; agent.prepare 252.73ms
  - warm: total 3137ms; pre-provider 3004ms; provider 1ms; post-provider 132ms; response true
    - active window: metadata scans 10 (138.11ms total, max 43.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3004ms; provider 1ms; post-provider 132ms; unknown 2003.59ms; source plugins.metadata.scan 747.68ms; agent.prepare 252.73ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3364 ms | 437 ms | 2927 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-8e2a29af-kova-260817-052255-1a1b3e/openclaw/timeline.jsonl |
  | warm | 3004 ms | 256 ms | 2748 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-8e2a29af-kova-260817-052255-1a1b3e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 301 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 136 ms | 46 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 137 ms | 43 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 119 ms | 39 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-2ab680e0-kova-260817-052255-1a1b3e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 935.3 MB; tracked total 1195.7 MB; max CPU 155%; samples 13; roles command-tree 1124.5MB/175.1%, agent-process 935.3MB/155%, status-cli 637.8MB/173.1%, agent-cli 189.2MB/28.9%
- agent: turn 3438ms; cold/warm 3438ms/3164ms; cold-warm delta 274ms; pre-provider 3298ms; provider 3ms; metadata scans 32 (442.13ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3424.3ms; max 3438ms; pre-provider p95 3284.75ms
- agent CLI attribution: cold known 428ms / unattributed 2870ms; warm known 261ms / unattributed 2772ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1455.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3438ms; pre-provider 3298ms; provider 3ms; post-provider 137ms; response true
    - active window: metadata scans 22 (303.64ms total, max 43.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3298ms; provider 3ms; post-provider 137ms; unknown 2295.6ms; source plugins.metadata.scan 757.65ms; agent.prepare 244.75ms
  - warm: total 3164ms; pre-provider 3033ms; provider 1ms; post-provider 130ms; response true
    - active window: metadata scans 10 (138.49ms total, max 44.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3033ms; provider 1ms; post-provider 130ms; unknown 2030.6ms; source plugins.metadata.scan 757.65ms; agent.prepare 244.75ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3298 ms | 428 ms | 2870 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-2ab680e0-kova-260817-052255-1a1b3e/openclaw/timeline.jsonl |
  | warm | 3033 ms | 261 ms | 2772 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-2ab680e0-kova-260817-052255-1a1b3e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 304 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 124 ms | 39 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 138 ms | 44 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 123 ms | 44 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-67b331a3-kova-260817-052255-1a1b3e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 931.3 MB; tracked total 1191.6 MB; max CPU 153%; samples 13; roles command-tree 1120.3MB/178.3%, agent-process 931.3MB/153%, status-cli 637.7MB/174.1%, agent-cli 189MB/28.3%
- agent: turn 3541ms; cold/warm 3541ms/3195ms; cold-warm delta 346ms; pre-provider 3398ms; provider 3ms; metadata scans 32 (448.48ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3523.7ms; max 3541ms; pre-provider p95 3380.9ms
- agent CLI attribution: cold known 454ms / unattributed 2944ms; warm known 259ms / unattributed 2797ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1482.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3541ms; pre-provider 3398ms; provider 3ms; post-provider 140ms; response true
    - active window: metadata scans 22 (319.51ms total, max 43.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3398ms; provider 3ms; post-provider 140ms; unknown 2349.6ms; source plugins.metadata.scan 781.71ms; agent.prepare 266.69ms
  - warm: total 3195ms; pre-provider 3056ms; provider 1ms; post-provider 138ms; response true
    - active window: metadata scans 10 (128.97ms total, max 41.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3056ms; provider 1ms; post-provider 138ms; unknown 2007.6ms; source plugins.metadata.scan 781.71ms; agent.prepare 266.69ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3398 ms | 454 ms | 2944 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-67b331a3-kova-260817-052255-1a1b3e/openclaw/timeline.jsonl |
  | warm | 3056 ms | 259 ms | 2797 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-67b331a3-kova-260817-052255-1a1b3e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 321 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 133 ms | 41 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 132 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 127 ms | 41 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260817-052255-1a1b3e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260817-052255-1a1b3e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260817-052255-1a1b3e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-gateway-performance-man-005107f3-kova-260817-052255-1a1b3e
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-gateway-performance-man-1e8be6a8-kova-260817-052255-1a1b3e
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-gateway-performance-man-958fde53-kova-260817-052255-1a1b3e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-8e2a29af-kova-260817-052255-1a1b3e
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-2ab680e0-kova-260817-052255-1a1b3e
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260817-052255-1a1b3e/kova-agent-cold-warm-message-67b331a3-kova-260817-052255-1a1b3e

## Target Cleanup

- Runtime: `kova-local-mswsf9wn-3xp-ca6a792b`
- Result: removed
- Duration: 408ms

