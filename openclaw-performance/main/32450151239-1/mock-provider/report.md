# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1080.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1080.8 MB, gateway-tree 1080.8 MB, command-tree 459.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1080.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1080.8 MB, gateway-tree 1080.8 MB, command-tree 459.3 MB |
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
| Run ID | `kova-260821-052037-33925c` |
| Generated | 2026-08-21T05:23:33.829Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1080.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1080.8 MB, gateway-tree 1080.8 MB, command-tree 459.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5925 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1114.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.3 MB, gateway-tree 1114.3 MB, command-tree 458.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5277 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1082.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1082.7 MB, gateway-tree 1082.7 MB, command-tree 471.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5189 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5277ms | 1082.7MB | n/a | 150% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154% | 4221ms | 3775ms | 4025ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5925ms | 1080.8 MB | 1611.3 MB | n/a | n/a | gateway peak RSS 1080.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1080.8 MB, gateway-tree 1080.8 MB, command-tree 459.3 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5277ms | 1114.3 MB | 1643.6 MB | n/a | n/a | gateway peak RSS 1114.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.3 MB, gateway-tree 1114.3 MB, command-tree 458.8 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5189ms | 1082.7 MB | 1624.4 MB | n/a | n/a | gateway peak RSS 1082.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1082.7 MB, gateway-tree 1082.7 MB, command-tree 471.1 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1166.9 MB | 4358ms | 3721ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1169.4 MB | 4221ms | 4052ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1205.6 MB | 4181ms | 3775ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1134 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1114.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 150% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 714.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1114.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 150% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 567.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 188.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 942.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 459.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- mock-provider: RSS 72.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 16.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-gateway-performance-man-005107f3-kova-260821-052037-33925c
Measurements:
- startup: listening 5037ms; health 5925ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 729ms; post-ready p95 3ms; failures 31; final failures 0; slowest startup-sample/cold-start 888ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1080.8 MB; tracked total 1611.3 MB; max CPU 146%; samples 15; roles gateway 1080.8MB/146%, command-tree 459.3MB/147%, gateway-tree 1080.8MB/146%, model-cli 459.3MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 895.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1080.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1080.8 MB, gateway-tree 1080.8 MB, command-tree 459.3 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-gateway-performance-man-1e8be6a8-kova-260821-052037-33925c
Measurements:
- startup: listening 4522ms; health 5277ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 755ms; post-ready p95 3ms; failures 29; final failures 0; slowest startup-sample/warm-restart 791ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1114.3 MB; tracked total 1643.6 MB; max CPU 150%; samples 15; roles gateway 1114.3MB/150%, gateway-tree 1114.3MB/150%, command-tree 458.8MB/144%, status-cli 458.8MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 791.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1114.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.3 MB, gateway-tree 1114.3 MB, command-tree 458.8 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-gateway-performance-man-958fde53-kova-260821-052037-33925c
Measurements:
- startup: listening 4520ms; health 5189ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 669ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/warm-restart 877ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1082.7 MB; tracked total 1624.4 MB; max CPU 150%; samples 15; roles gateway 1082.7MB/150%, gateway-tree 1082.7MB/150%, command-tree 471.1MB/145%, status-cli 471.1MB/145%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 781.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1082.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1082.7 MB, gateway-tree 1082.7 MB, command-tree 471.1 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-8e2a29af-kova-260821-052037-33925c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 904.5 MB; tracked total 1166.9 MB; max CPU 154%; samples 14; roles command-tree 1095.4MB/188.4%, agent-cli 567.8MB/188.4%, agent-process 904.5MB/154%, status-cli 639.5MB/177.9%
- agent: turn 4358ms; cold/warm 4358ms/3721ms; cold-warm delta 637ms; pre-provider 4176ms; provider 3ms; metadata scans 70 (1043.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4326.15ms; max 4358ms; pre-provider p95 4144.35ms
- agent CLI attribution: cold known 772ms / unattributed 3404ms; warm known 525ms / unattributed 3018ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1716.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4358ms; pre-provider 4176ms; provider 3ms; post-provider 179ms; response true
    - active window: metadata scans 41 (635.4ms total, max 43.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4176ms; provider 3ms; post-provider 179ms; unknown 2467.59ms; source plugins.metadata.scan 1409.63ms; agent.prepare 298.78ms
  - warm: total 3721ms; pre-provider 3543ms; provider 1ms; post-provider 177ms; response true
    - active window: metadata scans 29 (408.36ms total, max 35.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3543ms; provider 1ms; post-provider 177ms; unknown 1834.59ms; source plugins.metadata.scan 1409.63ms; agent.prepare 298.78ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4176 ms | 772 ms | 3404 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-8e2a29af-kova-260821-052037-33925c/openclaw/timeline.jsonl |
  | warm | 3543 ms | 525 ms | 3018 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-8e2a29af-kova-260821-052037-33925c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 613 ms | 43 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 159 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 384 ms | 36 ms |
  | warm | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 141 ms | 49 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-2ab680e0-kova-260821-052037-33925c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 907.3 MB; tracked total 1169.4 MB; max CPU 158%; samples 14; roles command-tree 1097.7MB/177.1%, agent-process 907.3MB/158%, status-cli 644.1MB/177.1%, agent-cli 190.7MB/29.9%
- agent: turn 4221ms; cold/warm 4221ms/4052ms; cold-warm delta 169ms; pre-provider 4025ms; provider 2ms; metadata scans 70 (1090.63ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4212.55ms; max 4221ms; pre-provider p95 4016.4ms
- agent CLI attribution: cold known 743ms / unattributed 3282ms; warm known 615ms / unattributed 3238ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1869.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4221ms; pre-provider 4025ms; provider 2ms; post-provider 194ms; response true
    - active window: metadata scans 41 (618.34ms total, max 39.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4025ms; provider 2ms; post-provider 194ms; unknown 2267.97ms; source plugins.metadata.scan 1442.91ms; agent.prepare 314.12ms
  - warm: total 4052ms; pre-provider 3853ms; provider 0ms; post-provider 199ms; response true
    - active window: metadata scans 29 (472.29ms total, max 34.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3853ms; provider 0ms; post-provider 199ms; unknown 2095.97ms; source plugins.metadata.scan 1442.91ms; agent.prepare 314.12ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4025 ms | 743 ms | 3282 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-2ab680e0-kova-260821-052037-33925c/openclaw/timeline.jsonl |
  | warm | 3853 ms | 615 ms | 3238 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-2ab680e0-kova-260821-052037-33925c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 593 ms | 40 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 150 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 449 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 166 ms | 57 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-67b331a3-kova-260821-052037-33925c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 942.8 MB; tracked total 1205.6 MB; max CPU 154%; samples 15; roles command-tree 1134MB/192.3%, agent-process 942.8MB/154%, status-cli 714.9MB/192.3%, agent-cli 191.3MB/28.5%
- agent: turn 4181ms; cold/warm 4181ms/3775ms; cold-warm delta 406ms; pre-provider 3994ms; provider 2ms; metadata scans 70 (1050.12ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4160.7ms; max 4181ms; pre-provider p95 3975ms
- agent CLI attribution: cold known 746ms / unattributed 3248ms; warm known 569ms / unattributed 3045ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1763.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4181ms; pre-provider 3994ms; provider 2ms; post-provider 185ms; response true
    - active window: metadata scans 41 (614.84ms total, max 39.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3994ms; provider 2ms; post-provider 185ms; unknown 2244.09ms; source plugins.metadata.scan 1438.79ms; agent.prepare 311.12ms
  - warm: total 3775ms; pre-provider 3614ms; provider 0ms; post-provider 161ms; response true
    - active window: metadata scans 29 (435.28ms total, max 34.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3614ms; provider 0ms; post-provider 161ms; unknown 1864.09ms; source plugins.metadata.scan 1438.79ms; agent.prepare 311.12ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3994 ms | 746 ms | 3248 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-67b331a3-kova-260821-052037-33925c/openclaw/timeline.jsonl |
  | warm | 3614 ms | 569 ms | 3045 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-67b331a3-kova-260821-052037-33925c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 593 ms | 40 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 153 ms | 51 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 413 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 156 ms | 48 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260821-052037-33925c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260821-052037-33925c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260821-052037-33925c-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-gateway-performance-man-005107f3-kova-260821-052037-33925c
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-gateway-performance-man-1e8be6a8-kova-260821-052037-33925c
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-gateway-performance-man-958fde53-kova-260821-052037-33925c
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-8e2a29af-kova-260821-052037-33925c
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-2ab680e0-kova-260821-052037-33925c
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260821-052037-33925c/kova-agent-cold-warm-message-67b331a3-kova-260821-052037-33925c

## Target Cleanup

- Runtime: `kova-local-mt2i3qfe-3zk-20fdd73b`
- Result: removed
- Duration: 620ms

