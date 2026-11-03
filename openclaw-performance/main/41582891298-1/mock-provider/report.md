# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1479 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1662.6 MB, agent-process 1479 MB, status-cli 945.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1479 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1662.6 MB, agent-process 1479 MB, status-cli 945.5 MB |
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
| Run ID | `kova-261103-051830-26b415` |
| Generated | 2026-11-03T05:40:03.747Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1479 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1662.6 MB, agent-process 1479 MB, status-cli 945.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1479 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1662.6 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1479 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1466.8 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1650.8 MB, agent-process 1466.8 MB, status-cli 977.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1466.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1650.8 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1466.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1478.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1661.9 MB, agent-process 1478.3 MB, status-cli 936.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1478.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1661.9 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1478.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 20ms | 1564.9MB | n/a | 198.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 193.2% | 5887ms | 6813ms | 5642ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 152ms | 1564.9 MB | 2389.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4ms | 1582.5 MB | 2460.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 20ms | 1532 MB | 2421.2 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1733.9 MB | 5878ms | 6849ms | agent-process peak RSS 1479 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1662.6 MB, agent-process 1479 MB, status-cli 945.5 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1722.4 MB | 5887ms | 6813ms | agent-process peak RSS 1466.8 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1650.8 MB, agent-process 1466.8 MB, status-cli 977.2 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1733.7 MB | 5911ms | 6799ms | agent-process peak RSS 1478.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1661.9 MB, agent-process 1478.3 MB, status-cli 936.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1686 MB (scenario gateway-performance/many-bundled-plugins); CPU 262.9% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1582.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 262.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1662.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1479 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 977.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 179% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 470.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 137.3% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 248.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 149.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 369.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 134.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-8e2a29af-kova-261103-051830-26b415
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1479 MB; tracked total 1733.9 MB; max CPU 196%; samples 23; roles command-tree 1662.6MB/206%, agent-process 1479MB/196%, status-cli 945.5MB/176.7%, agent-cli 183.6MB/148.3%
- agent: turn 6849ms; cold/warm 5878ms/6849ms; cold-warm delta 0ms; pre-provider 6601ms; provider 1ms; metadata scans 8 (235.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6800.45ms; max 6849ms; pre-provider p95 6552.65ms
- agent CLI attribution: cold known 3552ms / unattributed 2082ms; warm known 4641ms / unattributed 1960ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1444.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1479 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1662.6 MB, agent-process 1479 MB, status-cli 945.5 MB
  - command-tree peak RSS 1662.6 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 5878ms; pre-provider 5634ms; provider 2ms; post-provider 242ms; response true
    - active window: metadata scans 4 (114.61ms total, max 63.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5634ms; provider 2ms; post-provider 242ms; unknown 2909.37ms; source agent.prepare 2362.28ms; plugins.metadata.scan 362.35ms
  - warm: total 6849ms; pre-provider 6601ms; provider 1ms; post-provider 247ms; response true
    - active window: metadata scans 4 (120.83ms total, max 67.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6601ms; provider 1ms; post-provider 247ms; unknown 3876.37ms; source agent.prepare 2362.28ms; plugins.metadata.scan 362.35ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5634 ms | 3552 ms | 2082 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-8e2a29af-kova-261103-051830-26b415/openclaw/timeline.jsonl |
  | warm | 6601 ms | 4641 ms | 1960 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-8e2a29af-kova-261103-051830-26b415/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2399 ms | 839 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1368 ms | 675 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 996 ms | 489 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 113 ms | 64 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2308 ms | 840 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2253 ms | 1444 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1368 ms | 489 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 121 ms | 67 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 109 ms | 109 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-2ab680e0-kova-261103-051830-26b415
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1466.8 MB; tracked total 1722.4 MB; max CPU 193.2%; samples 23; roles command-tree 1650.8MB/203.2%, agent-process 1466.8MB/193.2%, status-cli 977.2MB/177%, agent-cli 239.1MB/149.7%
- agent: turn 6813ms; cold/warm 5887ms/6813ms; cold-warm delta 0ms; pre-provider 6554ms; provider 0ms; metadata scans 8 (235.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6766.7ms; max 6813ms; pre-provider p95 6508.4ms
- agent CLI attribution: cold known 3543ms / unattributed 2099ms; warm known 4618ms / unattributed 1936ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1444.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1466.8 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1650.8 MB, agent-process 1466.8 MB, status-cli 977.2 MB
  - command-tree peak RSS 1650.8 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 5887ms; pre-provider 5642ms; provider 2ms; post-provider 243ms; response true
    - active window: metadata scans 4 (115.38ms total, max 63.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5642ms; provider 2ms; post-provider 243ms; unknown 2947.94ms; source agent.prepare 2329.79ms; plugins.metadata.scan 364.27ms
  - warm: total 6813ms; pre-provider 6554ms; provider 0ms; post-provider 259ms; response true
    - active window: metadata scans 4 (120.21ms total, max 69.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6554ms; provider 0ms; post-provider 259ms; unknown 3859.94ms; source agent.prepare 2329.79ms; plugins.metadata.scan 364.27ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5642 ms | 3543 ms | 2099 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-2ab680e0-kova-261103-051830-26b415/openclaw/timeline.jsonl |
  | warm | 6554 ms | 4618 ms | 1936 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-2ab680e0-kova-261103-051830-26b415/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2381 ms | 836 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1377 ms | 669 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 985 ms | 484 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 117 ms | 64 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 111 ms | 111 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2266 ms | 1444 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2261 ms | 830 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1344 ms | 451 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 69 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 111 ms | 111 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-67b331a3-kova-261103-051830-26b415
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1478.3 MB; tracked total 1733.7 MB; max CPU 193.2%; samples 23; roles command-tree 1661.9MB/203.2%, agent-process 1478.3MB/193.2%, status-cli 936.5MB/179%, agent-cli 248.2MB/149.3%
- agent: turn 6799ms; cold/warm 5911ms/6799ms; cold-warm delta 0ms; pre-provider 6551ms; provider 1ms; metadata scans 8 (232.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6754.6ms; max 6799ms; pre-provider p95 6506.55ms
- agent CLI attribution: cold known 3564ms / unattributed 2098ms; warm known 4615ms / unattributed 1936ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1443.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1478.3 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1661.9 MB, agent-process 1478.3 MB, status-cli 936.5 MB
  - command-tree peak RSS 1661.9 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 5911ms; pre-provider 5662ms; provider 2ms; post-provider 247ms; response true
    - active window: metadata scans 4 (113.89ms total, max 63.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5662ms; provider 2ms; post-provider 247ms; unknown 2907.93ms; source agent.prepare 2389.77ms; plugins.metadata.scan 364.3ms
  - warm: total 6799ms; pre-provider 6551ms; provider 1ms; post-provider 247ms; response true
    - active window: metadata scans 4 (118.42ms total, max 66.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6551ms; provider 1ms; post-provider 247ms; unknown 3796.93ms; source agent.prepare 2389.77ms; plugins.metadata.scan 364.3ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5662 ms | 3564 ms | 2098 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-67b331a3-kova-261103-051830-26b415/openclaw/timeline.jsonl |
  | warm | 6551 ms | 4615 ms | 1936 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-67b331a3-kova-261103-051830-26b415/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2376 ms | 836 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1382 ms | 678 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1013 ms | 482 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 115 ms | 63 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 113 ms | 113 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2278 ms | 838 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2240 ms | 1443 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1376 ms | 493 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 67 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261103-051830-26b415-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261103-051830-26b415-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261103-051830-26b415-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-gateway-performance-man-005107f3-kova-261103-051830-26b415
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-gateway-performance-man-1e8be6a8-kova-261103-051830-26b415
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-gateway-performance-man-958fde53-kova-261103-051830-26b415
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-8e2a29af-kova-261103-051830-26b415
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-2ab680e0-kova-261103-051830-26b415
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261103-051830-26b415/kova-agent-cold-warm-message-67b331a3-kova-261103-051830-26b415

## Target Cleanup

- Runtime: `kova-local-mw08m1gh-3hs-1dee6472`
- Result: removed
- Duration: 471ms

