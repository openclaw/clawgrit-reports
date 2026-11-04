# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1425.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1609.2 MB, agent-process 1425.4 MB, status-cli 875.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1425.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1609.2 MB, agent-process 1425.4 MB, status-cli 875.9 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 6 (PASS:3, FAIL:3) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 358 total, 0 missing, 0 failed
- Categories: command: 304, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261104-051821-1c13a9` |
| Generated | 2026-11-04T05:45:02.323Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 6 |
| Scenarios | 2 |
| States | 2 |
| PASS | 3 |
| FAIL | 3 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1425.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1609.2 MB, agent-process 1425.4 MB, status-cli 875.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1425.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1609.2 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1425.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1480.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1663.9 MB, agent-process 1480.1 MB, status-cli 910.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1480.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1663.9 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1480.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1531.2 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1714.5 MB, agent-process 1531.2 MB, status-cli 990.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1531.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1714.5 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1531.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 48ms | 1570MB | n/a | 268.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 234.7% | 6958ms | 7840ms | 6680ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 48ms | 1573.4 MB | 2378 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 102ms | 1570 MB | 2213.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 20ms | 1566.2 MB | 2246.8 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1681.1 MB | 6958ms | 8186ms | agent-process peak RSS 1425.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1609.2 MB, agent-process 1425.4 MB, status-cli 875.9 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1735.4 MB | 6817ms | 7693ms | agent-process peak RSS 1480.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1663.9 MB, agent-process 1480.1 MB, status-cli 910.1 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1786.4 MB | 7058ms | 7840ms | agent-process peak RSS 1531.2 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1714.5 MB, agent-process 1531.2 MB, status-cli 990.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1714.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 256.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1677.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 298.5% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1573.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 281.7% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1531.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 242.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 990.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 198% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 470.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 144.8% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 276.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.6% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 359.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 142.6% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-8e2a29af-kova-261104-051821-1c13a9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1425.4 MB; tracked total 1681.1 MB; max CPU 231.2%; samples 27; roles command-tree 1609.2MB/241.3%, agent-process 1425.4MB/231.2%, status-cli 875.9MB/193.3%, agent-cli 276.5MB/147.3%
- agent: turn 8186ms; cold/warm 6958ms/8186ms; cold-warm delta 0ms; pre-provider 7861ms; provider 1ms; metadata scans 8 (281.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8124.6ms; max 8186ms; pre-provider p95 7801.95ms
- agent CLI attribution: cold known 4178ms / unattributed 2502ms; warm known 5471ms / unattributed 2390ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1760.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1425.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1609.2 MB, agent-process 1425.4 MB, status-cli 875.9 MB
  - command-tree peak RSS 1609.2 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6958ms; pre-provider 6680ms; provider 3ms; post-provider 275ms; response true
    - active window: metadata scans 4 (136.24ms total, max 74.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6680ms; provider 3ms; post-provider 275ms; unknown 3541.5ms; source agent.prepare 2711.89ms; plugins.metadata.scan 426.61ms
  - warm: total 8186ms; pre-provider 7861ms; provider 1ms; post-provider 324ms; response true
    - active window: metadata scans 4 (145.5ms total, max 80.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7861ms; provider 1ms; post-provider 324ms; unknown 4722.5ms; source agent.prepare 2711.89ms; plugins.metadata.scan 426.61ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6680 ms | 4178 ms | 2502 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-8e2a29af-kova-261104-051821-1c13a9/openclaw/timeline.jsonl |
  | warm | 7861 ms | 5471 ms | 2390 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-8e2a29af-kova-261104-051821-1c13a9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2919 ms | 1030 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1558 ms | 806 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1165 ms | 582 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 137 ms | 75 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 128 ms | 128 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2805 ms | 998 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2607 ms | 1760 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1551 ms | 532 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 146 ms | 81 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 138 ms | 138 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-2ab680e0-kova-261104-051821-1c13a9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1480.1 MB; tracked total 1735.4 MB; max CPU 234.7%; samples 25; roles command-tree 1663.9MB/248.7%, agent-process 1480.1MB/234.7%, status-cli 910.1MB/198%, agent-cli 183.8MB/161%
- agent: turn 7693ms; cold/warm 6817ms/7693ms; cold-warm delta 0ms; pre-provider 7385ms; provider 1ms; metadata scans 8 (266.48ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7649.2ms; max 7693ms; pre-provider p95 7343ms
- agent CLI attribution: cold known 4104ms / unattributed 2441ms; warm known 5098ms / unattributed 2287ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1612.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1480.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1663.9 MB, agent-process 1480.1 MB, status-cli 910.1 MB
  - command-tree peak RSS 1663.9 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6817ms; pre-provider 6545ms; provider 2ms; post-provider 270ms; response true
    - active window: metadata scans 4 (135.84ms total, max 74.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6545ms; provider 2ms; post-provider 270ms; unknown 3430.32ms; source agent.prepare 2701.93ms; plugins.metadata.scan 412.75ms
  - warm: total 7693ms; pre-provider 7385ms; provider 1ms; post-provider 307ms; response true
    - active window: metadata scans 4 (130.64ms total, max 73.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7385ms; provider 1ms; post-provider 307ms; unknown 4270.32ms; source agent.prepare 2701.93ms; plugins.metadata.scan 412.75ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6545 ms | 4104 ms | 2441 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-2ab680e0-kova-261104-051821-1c13a9/openclaw/timeline.jsonl |
  | warm | 7385 ms | 5098 ms | 2287 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-2ab680e0-kova-261104-051821-1c13a9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2880 ms | 1018 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1529 ms | 808 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1130 ms | 576 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 136 ms | 74 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 129 ms | 129 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2580 ms | 948 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2402 ms | 1613 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1569 ms | 555 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 130 ms | 73 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 123 ms | 123 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-67b331a3-kova-261104-051821-1c13a9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1531.2 MB; tracked total 1786.4 MB; max CPU 242.7%; samples 25; roles command-tree 1714.5MB/256.7%, agent-process 1531.2MB/242.7%, status-cli 990.5MB/191.7%, agent-cli 183.3MB/166.6%
- agent: turn 7840ms; cold/warm 7058ms/7840ms; cold-warm delta 0ms; pre-provider 7505ms; provider 1ms; metadata scans 8 (290.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7800.9ms; max 7840ms; pre-provider p95 7468.65ms
- agent CLI attribution: cold known 4255ms / unattributed 2523ms; warm known 5189ms / unattributed 2316ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1652.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1531.2 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1714.5 MB, agent-process 1531.2 MB, status-cli 990.5 MB
  - command-tree peak RSS 1714.5 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 7058ms; pre-provider 6778ms; provider 2ms; post-provider 278ms; response true
    - active window: metadata scans 4 (154.22ms total, max 77.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6778ms; provider 2ms; post-provider 278ms; unknown 3690.52ms; source agent.prepare 2643.82ms; plugins.metadata.scan 443.66ms
  - warm: total 7840ms; pre-provider 7505ms; provider 1ms; post-provider 334ms; response true
    - active window: metadata scans 4 (136.14ms total, max 77.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7505ms; provider 1ms; post-provider 334ms; unknown 4417.52ms; source agent.prepare 2643.82ms; plugins.metadata.scan 443.66ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6778 ms | 4255 ms | 2523 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-67b331a3-kova-261104-051821-1c13a9/openclaw/timeline.jsonl |
  | warm | 7505 ms | 5189 ms | 2316 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-67b331a3-kova-261104-051821-1c13a9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3029 ms | 1085 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1606 ms | 816 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1126 ms | 568 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 156 ms | 78 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 137 ms | 137 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2622 ms | 963 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2477 ms | 1653 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1519 ms | 559 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 136 ms | 77 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 126 ms | 126 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261104-051821-1c13a9-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261104-051821-1c13a9-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261104-051821-1c13a9-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-gateway-performance-man-005107f3-kova-261104-051821-1c13a9
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-gateway-performance-man-1e8be6a8-kova-261104-051821-1c13a9
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-gateway-performance-man-958fde53-kova-261104-051821-1c13a9
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-8e2a29af-kova-261104-051821-1c13a9
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-2ab680e0-kova-261104-051821-1c13a9
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261104-051821-1c13a9/kova-agent-cold-warm-message-67b331a3-kova-261104-051821-1c13a9

## Target Cleanup

- Runtime: `kova-local-mw1o1pqb-482-95d36bf2`
- Result: removed
- Duration: 565ms

