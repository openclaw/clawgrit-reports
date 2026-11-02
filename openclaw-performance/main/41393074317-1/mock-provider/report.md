# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1445 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1629 MB, agent-process 1445 MB, status-cli 1090.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1445 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1629 MB, agent-process 1445 MB, status-cli 1090.9 MB |
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
| Run ID | `kova-261102-051934-8f5515` |
| Generated | 2026-11-02T05:40:40.512Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1445 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1629 MB, agent-process 1445 MB, status-cli 1090.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1445 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1629 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1445 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1472.5 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1656 MB, agent-process 1472.5 MB, status-cli 1045.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1472.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1656 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1472.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1452.2 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1636.4 MB, agent-process 1452.2 MB, status-cli 957.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1452.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1636.4 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1452.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 28ms | 1606.9MB | n/a | 192% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 198.7% | 5992ms | 6704ms | 5748ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 21ms | 1609.1 MB | 2591.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 32ms | 1606.9 MB | 2567.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 28ms | 1531.7 MB | 2515.1 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1700.1 MB | 5998ms | 6748ms | agent-process peak RSS 1445 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1629 MB, agent-process 1445 MB, status-cli 1090.9 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1727.8 MB | 5992ms | 6684ms | agent-process peak RSS 1472.5 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1656 MB, agent-process 1472.5 MB, status-cli 1045.5 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1707.8 MB | 5990ms | 6704ms | agent-process peak RSS 1452.2 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1636.4 MB, agent-process 1452.2 MB, status-cli 957.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1712.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 206.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1656 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 218.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1609.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 192.1% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1472.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 205% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1090.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 186.5% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 460.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 137.2% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 290.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 150.1% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 362.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 136.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-8e2a29af-kova-261102-051934-8f5515
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1445 MB; tracked total 1700.1 MB; max CPU 205%; samples 23; roles command-tree 1629MB/218.5%, agent-process 1445MB/205%, status-cli 1090.9MB/186.5%, agent-cli 285.1MB/150.1%
- agent: turn 6748ms; cold/warm 5998ms/6748ms; cold-warm delta 0ms; pre-provider 6503ms; provider 0ms; metadata scans 8 (233.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6710.5ms; max 6748ms; pre-provider p95 6465.25ms
- agent CLI attribution: cold known 3653ms / unattributed 2095ms; warm known 4546ms / unattributed 1957ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1528.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1445 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1629 MB, agent-process 1445 MB, status-cli 1090.9 MB
  - command-tree peak RSS 1629 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 5998ms; pre-provider 5748ms; provider 2ms; post-provider 248ms; response true
    - active window: metadata scans 4 (115.67ms total, max 64.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5748ms; provider 2ms; post-provider 248ms; unknown 3056.93ms; source agent.prepare 2329.36ms; plugins.metadata.scan 361.71ms
  - warm: total 6748ms; pre-provider 6503ms; provider 0ms; post-provider 245ms; response true
    - active window: metadata scans 4 (117.64ms total, max 64.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6503ms; provider 0ms; post-provider 245ms; unknown 3811.93ms; source agent.prepare 2329.36ms; plugins.metadata.scan 361.71ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5748 ms | 3653 ms | 2095 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-8e2a29af-kova-261102-051934-8f5515/openclaw/timeline.jsonl |
  | warm | 6503 ms | 4546 ms | 1957 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-8e2a29af-kova-261102-051934-8f5515/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2394 ms | 839 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1475 ms | 770 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 985 ms | 486 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 116 ms | 64 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2356 ms | 1529 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 2008 ms | 725 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1344 ms | 468 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 116 ms | 65 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 114 ms | 114 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-2ab680e0-kova-261102-051934-8f5515
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1472.5 MB; tracked total 1727.8 MB; max CPU 198.1%; samples 23; roles command-tree 1656MB/211.8%, agent-process 1472.5MB/198.1%, status-cli 1045.5MB/175.1%, agent-cli 290.5MB/145.9%
- agent: turn 6684ms; cold/warm 5992ms/6684ms; cold-warm delta 0ms; pre-provider 6438ms; provider 1ms; metadata scans 8 (233.94ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6649.4ms; max 6684ms; pre-provider p95 6403.3ms
- agent CLI attribution: cold known 3643ms / unattributed 2101ms; warm known 4508ms / unattributed 1930ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1526.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1472.5 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1656 MB, agent-process 1472.5 MB, status-cli 1045.5 MB
  - command-tree peak RSS 1656 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 5992ms; pre-provider 5744ms; provider 2ms; post-provider 246ms; response true
    - active window: metadata scans 4 (115.25ms total, max 64.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5744ms; provider 2ms; post-provider 246ms; unknown 3030.02ms; source agent.prepare 2354.23ms; plugins.metadata.scan 359.75ms
  - warm: total 6684ms; pre-provider 6438ms; provider 1ms; post-provider 245ms; response true
    - active window: metadata scans 4 (118.69ms total, max 65.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6438ms; provider 1ms; post-provider 245ms; unknown 3724.02ms; source agent.prepare 2354.23ms; plugins.metadata.scan 359.75ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5744 ms | 3643 ms | 2101 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-2ab680e0-kova-261102-051934-8f5515/openclaw/timeline.jsonl |
  | warm | 6438 ms | 4508 ms | 1930 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-2ab680e0-kova-261102-051934-8f5515/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2385 ms | 836 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1468 ms | 771 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 988 ms | 481 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 116 ms | 65 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2317 ms | 1526 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1974 ms | 717 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1366 ms | 452 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 120 ms | 66 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-67b331a3-kova-261102-051934-8f5515
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1452.2 MB; tracked total 1707.8 MB; max CPU 198.7%; samples 23; roles command-tree 1636.4MB/212.1%, agent-process 1452.2MB/198.7%, status-cli 957.5MB/176.9%, agent-cli 289.5MB/141%
- agent: turn 6704ms; cold/warm 5990ms/6704ms; cold-warm delta 0ms; pre-provider 6475ms; provider 0ms; metadata scans 8 (231.16ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6668.3ms; max 6704ms; pre-provider p95 6439ms
- agent CLI attribution: cold known 3654ms / unattributed 2101ms; warm known 4537ms / unattributed 1938ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1515.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1452.2 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1636.4 MB, agent-process 1452.2 MB, status-cli 957.5 MB
  - command-tree peak RSS 1636.4 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 5990ms; pre-provider 5755ms; provider 2ms; post-provider 233ms; response true
    - active window: metadata scans 4 (115.23ms total, max 64.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5755ms; provider 2ms; post-provider 233ms; unknown 3010.94ms; source agent.prepare 2387.77ms; plugins.metadata.scan 356.29ms
  - warm: total 6704ms; pre-provider 6475ms; provider 0ms; post-provider 229ms; response true
    - active window: metadata scans 4 (115.93ms total, max 64.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6475ms; provider 0ms; post-provider 229ms; unknown 3730.94ms; source agent.prepare 2387.77ms; plugins.metadata.scan 356.29ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5755 ms | 3654 ms | 2101 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-67b331a3-kova-261102-051934-8f5515/openclaw/timeline.jsonl |
  | warm | 6475 ms | 4537 ms | 1938 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-67b331a3-kova-261102-051934-8f5515/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2381 ms | 835 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1455 ms | 768 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1029 ms | 496 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 114 ms | 64 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2334 ms | 1516 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1986 ms | 715 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1359 ms | 461 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 117 ms | 65 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 109 ms | 109 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261102-051934-8f5515-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261102-051934-8f5515-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261102-051934-8f5515-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-gateway-performance-man-005107f3-kova-261102-051934-8f5515
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-gateway-performance-man-1e8be6a8-kova-261102-051934-8f5515
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-gateway-performance-man-958fde53-kova-261102-051934-8f5515
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-8e2a29af-kova-261102-051934-8f5515
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-2ab680e0-kova-261102-051934-8f5515
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261102-051934-8f5515/kova-agent-cold-warm-message-67b331a3-kova-261102-051934-8f5515

## Target Cleanup

- Runtime: `kova-local-mvyt7ksa-3f1-865f9832`
- Result: removed
- Duration: 503ms

