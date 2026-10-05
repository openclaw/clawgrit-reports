# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1278.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1455.7 MB, gateway 1278.7 MB, command-tree 791.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1278.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1455.7 MB, gateway 1278.7 MB, command-tree 791.6 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 6 (FAIL:3, PASS:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261005-053714-d01089` |
| Generated | 2026-10-05T05:55:51.186Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1278.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1455.7 MB, gateway 1278.7 MB, command-tree 791.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 19 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1455.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 19 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1258.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1436 MB, gateway 1258.3 MB, command-tree 871.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1241 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1416.6 MB, gateway 1241 MB, command-tree 894.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 10 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 10ms | 1258.3MB | n/a | 196.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 198.3% | 6403ms | 6216ms | 6185ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 19ms | 1278.7 MB | 2319.8 MB | n/a | n/a | gateway peak RSS 1278.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1455.7 MB, gateway 1278.7 MB, command-tree 791.6 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1258.3 MB | 2380.4 MB | n/a | n/a | gateway peak RSS 1258.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1436 MB, gateway 1258.3 MB, command-tree 871.7 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 10ms | 1241 MB | 2383.1 MB | n/a | n/a | gateway peak RSS 1241 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1416.6 MB, gateway 1241 MB, command-tree 894.8 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1285.6 MB | 6400ms | 6216ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1298.4 MB | 6409ms | 6207ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1292.1 MB | 6403ms | 6236ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1455.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 223.7% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1278.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 205% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1225.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 211.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1126 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 202% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 894.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 194.4% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 533.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 124.2% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 0 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 176.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 79.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-gateway-performance-man-005107f3-kova-261005-053714-d01089
Measurements:
- startup: listening 1ms; health 19ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 18ms; post-ready p95 52ms; failures 0; final failures 0; slowest post-ready/api-latency 52ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1278.7 MB; tracked total 2319.8 MB; max CPU 205%; samples 36; roles gateway-tree 1455.7MB/223.7%, gateway 1278.7MB/205%, command-tree 791.6MB/194.4%, status-cli 791.6MB/194.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1048.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1278.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1455.7 MB, gateway 1278.7 MB, command-tree 791.6 MB
  - gateway-tree peak RSS 1455.7 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-gateway-performance-man-1e8be6a8-kova-261005-053714-d01089
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 139ms; failures 0; final failures 0; slowest post-ready/api-latency 139ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1258.3 MB; tracked total 2380.4 MB; max CPU 189.7%; samples 36; roles gateway-tree 1436MB/207.4%, gateway 1258.3MB/189.7%, command-tree 871.7MB/185.6%, status-cli 871.7MB/185.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1085.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1258.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1436 MB, gateway 1258.3 MB, command-tree 871.7 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-gateway-performance-man-958fde53-kova-261005-053714-d01089
Measurements:
- startup: listening 0ms; health 10ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 10ms; post-ready p95 111ms; failures 0; final failures 0; slowest post-ready/api-latency 111ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1241 MB; tracked total 2383.1 MB; max CPU 196.5%; samples 36; roles gateway-tree 1416.6MB/215.4%, gateway 1241MB/196.5%, command-tree 894.8MB/180%, status-cli 894.8MB/180%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 1042.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1241 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1416.6 MB, gateway 1241 MB, command-tree 894.8 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-8e2a29af-kova-261005-053714-d01089
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1115.4 MB; tracked total 1285.6 MB; max CPU 196.4%; samples 23; roles command-tree 1213.5MB/206.1%, agent-process 1115.4MB/196.4%, status-cli 582.6MB/167.7%, agent-cli 176.2MB/70.6%
- agent: turn 6400ms; cold/warm 6400ms/6216ms; cold-warm delta 184ms; pre-provider 6162ms; provider 2ms; metadata scans 8 (223.93ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6390.8ms; max 6400ms; pre-provider p95 6153.95ms
- agent CLI attribution: cold known 3033ms / unattributed 3129ms; warm known 3356ms / unattributed 2645ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1132.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6400ms; pre-provider 6162ms; provider 2ms; post-provider 236ms; response true
    - active window: metadata scans 4 (107.72ms total, max 56.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6162ms; provider 2ms; post-provider 236ms; unknown 4198.39ms; source agent.prepare 1629.5ms; plugins.metadata.scan 334.11ms
  - warm: total 6216ms; pre-provider 6001ms; provider 1ms; post-provider 214ms; response true
    - active window: metadata scans 4 (116.21ms total, max 60.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6001ms; provider 1ms; post-provider 214ms; unknown 4037.39ms; source agent.prepare 1629.5ms; plugins.metadata.scan 334.11ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6162 ms | 3033 ms | 3129 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-8e2a29af-kova-261005-053714-d01089/openclaw/timeline.jsonl |
  | warm | 6001 ms | 3356 ms | 2645 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-8e2a29af-kova-261005-053714-d01089/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1783 ms | 493 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1227 ms | 901 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 825 ms | 516 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 107 ms | 56 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1701 ms | 521 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1603 ms | 1133 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 805 ms | 529 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 118 ms | 61 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-2ab680e0-kova-261005-053714-d01089
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1126 MB; tracked total 1298.4 MB; max CPU 198.3%; samples 23; roles command-tree 1225.9MB/208.2%, agent-process 1126MB/198.3%, status-cli 606.6MB/169.8%, agent-cli 100.3MB/68.5%
- agent: turn 6409ms; cold/warm 6409ms/6207ms; cold-warm delta 202ms; pre-provider 6185ms; provider 2ms; metadata scans 8 (224.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6398.9ms; max 6409ms; pre-provider p95 6175.85ms
- agent CLI attribution: cold known 3041ms / unattributed 3144ms; warm known 3346ms / unattributed 2656ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1134.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6409ms; pre-provider 6185ms; provider 2ms; post-provider 222ms; response true
    - active window: metadata scans 4 (112.61ms total, max 59.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6185ms; provider 2ms; post-provider 222ms; unknown 4240.98ms; source agent.prepare 1606.53ms; plugins.metadata.scan 337.49ms
  - warm: total 6207ms; pre-provider 6002ms; provider 0ms; post-provider 205ms; response true
    - active window: metadata scans 4 (112.27ms total, max 59.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6002ms; provider 0ms; post-provider 205ms; unknown 4057.98ms; source agent.prepare 1606.53ms; plugins.metadata.scan 337.49ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6185 ms | 3041 ms | 3144 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-2ab680e0-kova-261005-053714-d01089/openclaw/timeline.jsonl |
  | warm | 6002 ms | 3346 ms | 2656 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-2ab680e0-kova-261005-053714-d01089/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1758 ms | 487 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1269 ms | 944 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 797 ms | 496 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 112 ms | 59 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |
  | warm | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1633 ms | 1134 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1627 ms | 480 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 811 ms | 525 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 59 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-67b331a3-kova-261005-053714-d01089
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1120.9 MB; tracked total 1292.1 MB; max CPU 202%; samples 23; roles command-tree 1219.9MB/211.5%, agent-process 1120.9MB/202%, status-cli 609.9MB/167.1%, agent-cli 99MB/79.5%
- agent: turn 6403ms; cold/warm 6403ms/6236ms; cold-warm delta 167ms; pre-provider 6189ms; provider 2ms; metadata scans 8 (232.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6394.65ms; max 6403ms; pre-provider p95 6180.55ms
- agent CLI attribution: cold known 3052ms / unattributed 3137ms; warm known 3375ms / unattributed 2645ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1150.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6403ms; pre-provider 6189ms; provider 2ms; post-provider 212ms; response true
    - active window: metadata scans 4 (113.03ms total, max 59.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6189ms; provider 2ms; post-provider 212ms; unknown 4217.68ms; source agent.prepare 1625.54ms; plugins.metadata.scan 345.78ms
  - warm: total 6236ms; pre-provider 6020ms; provider 1ms; post-provider 215ms; response true
    - active window: metadata scans 4 (119.96ms total, max 65.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6020ms; provider 1ms; post-provider 215ms; unknown 4048.68ms; source agent.prepare 1625.54ms; plugins.metadata.scan 345.78ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6189 ms | 3052 ms | 3137 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-67b331a3-kova-261005-053714-d01089/openclaw/timeline.jsonl |
  | warm | 6020 ms | 3375 ms | 2645 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-67b331a3-kova-261005-053714-d01089/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1790 ms | 501 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1265 ms | 943 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 797 ms | 490 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 60 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1629 ms | 1150 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 1624 ms | 484 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 828 ms | 547 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 66 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261005-053714-d01089-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261005-053714-d01089-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261005-053714-d01089-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-gateway-performance-man-005107f3-kova-261005-053714-d01089
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-gateway-performance-man-1e8be6a8-kova-261005-053714-d01089
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-gateway-performance-man-958fde53-kova-261005-053714-d01089
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-8e2a29af-kova-261005-053714-d01089
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-2ab680e0-kova-261005-053714-d01089
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261005-053714-d01089/kova-agent-cold-warm-message-67b331a3-kova-261005-053714-d01089

## Target Cleanup

- Runtime: `kova-local-muutifu6-3ts-de538c83`
- Result: removed
- Duration: 480ms

