# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1439.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1622.7 MB, agent-process 1439.1 MB, status-cli 935 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1439.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1622.7 MB, agent-process 1439.1 MB, status-cli 935 MB |
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
| Run ID | `kova-261108-051725-9c96a0` |
| Generated | 2026-11-08T05:43:17.330Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1439.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1622.7 MB, agent-process 1439.1 MB, status-cli 935 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1439.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1622.7 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1439.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1481.6 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1664.9 MB, agent-process 1481.6 MB, status-cli 882.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1481.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1664.9 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1481.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1470.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1654.7 MB, agent-process 1470.4 MB, status-cli 928.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1654.7 MB exceeded threshold 1600 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1470.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 26ms | 1605.1MB | n/a | 200.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 223.6% | 7886ms | 8617ms | 7528ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 26ms | 1605.1 MB | 2314.8 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 20ms | 1613.4 MB | 2365.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 61ms | 1605.1 MB | 2391.8 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1693.8 MB | 7886ms | 8965ms | agent-process peak RSS 1439.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1622.7 MB, agent-process 1439.1 MB, status-cli 935 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1736.4 MB | 8006ms | 8617ms | agent-process peak RSS 1481.6 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1664.9 MB, agent-process 1481.6 MB, status-cli 882.5 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1726.5 MB | 6789ms | 7712ms | agent-process peak RSS 1470.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1654.7 MB, agent-process 1470.4 MB, status-cli 928.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1716.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 222% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1664.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 248.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1481.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 234.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1613.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 212% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 935 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 194.6% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 473.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 148.9% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 288.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 361 MB (scenario gateway-performance/many-bundled-plugins); CPU 138.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-8e2a29af-kova-261108-051725-9c96a0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1439.1 MB; tracked total 1693.8 MB; max CPU 234.4%; samples 28; roles command-tree 1622.7MB/248.2%, agent-process 1439.1MB/234.4%, status-cli 935MB/194.6%, agent-cli 288.9MB/156%
- agent: turn 8965ms; cold/warm 7886ms/8965ms; cold-warm delta 0ms; pre-provider 8644ms; provider 1ms; metadata scans 8 (307.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8911.05ms; max 8965ms; pre-provider p95 8588.2ms
- agent CLI attribution: cold known 4649ms / unattributed 2879ms; warm known 5999ms / unattributed 2645ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1883.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1439.1 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1622.7 MB, agent-process 1439.1 MB, status-cli 935 MB
  - command-tree peak RSS 1622.7 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 7886ms; pre-provider 7528ms; provider 3ms; post-provider 355ms; response true
    - active window: metadata scans 4 (144.4ms total, max 79.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7528ms; provider 3ms; post-provider 355ms; unknown 3900.87ms; source agent.prepare 3147.59ms; plugins.metadata.scan 479.54ms
  - warm: total 8965ms; pre-provider 8644ms; provider 1ms; post-provider 320ms; response true
    - active window: metadata scans 4 (163.48ms total, max 89.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8644ms; provider 1ms; post-provider 320ms; unknown 5016.87ms; source agent.prepare 3147.59ms; plugins.metadata.scan 479.54ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7528 ms | 4649 ms | 2879 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-8e2a29af-kova-261108-051725-9c96a0/openclaw/timeline.jsonl |
  | warm | 8644 ms | 5999 ms | 2645 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-8e2a29af-kova-261108-051725-9c96a0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3235 ms | 1152 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1745 ms | 905 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1294 ms | 639 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 149 ms | 149 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 145 ms | 80 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3083 ms | 1129 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2783 ms | 1884 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1854 ms | 659 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 164 ms | 90 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 145 ms | 145 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-2ab680e0-kova-261108-051725-9c96a0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1481.6 MB; tracked total 1736.4 MB; max CPU 223.6%; samples 27; roles command-tree 1664.9MB/237.6%, agent-process 1481.6MB/223.6%, status-cli 882.5MB/181.8%, agent-cli 254.7MB/138.3%
- agent: turn 8617ms; cold/warm 8006ms/8617ms; cold-warm delta 0ms; pre-provider 8313ms; provider 1ms; metadata scans 8 (296.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8586.45ms; max 8617ms; pre-provider p95 8283.9ms
- agent CLI attribution: cold known 4874ms / unattributed 2857ms; warm known 5637ms / unattributed 2676ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1918.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1481.6 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1664.9 MB, agent-process 1481.6 MB, status-cli 882.5 MB
  - command-tree peak RSS 1664.9 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 8006ms; pre-provider 7731ms; provider 2ms; post-provider 273ms; response true
    - active window: metadata scans 4 (149.09ms total, max 82.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7731ms; provider 2ms; post-provider 273ms; unknown 4470.61ms; source agent.prepare 2803.11ms; plugins.metadata.scan 457.28ms
  - warm: total 8617ms; pre-provider 8313ms; provider 1ms; post-provider 303ms; response true
    - active window: metadata scans 4 (147.47ms total, max 83.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8313ms; provider 1ms; post-provider 303ms; unknown 5052.61ms; source agent.prepare 2803.11ms; plugins.metadata.scan 457.28ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7731 ms | 4874 ms | 2857 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-2ab680e0-kova-261108-051725-9c96a0/openclaw/timeline.jsonl |
  | warm | 8313 ms | 5637 ms | 2676 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-2ab680e0-kova-261108-051725-9c96a0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3418 ms | 1254 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1974 ms | 1009 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1209 ms | 584 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 149 ms | 82 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 147 ms | 147 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2820 ms | 1055 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2769 ms | 1918 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1593 ms | 546 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 148 ms | 83 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 134 ms | 134 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-67b331a3-kova-261108-051725-9c96a0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1470.4 MB; tracked total 1726.5 MB; max CPU 222.1%; samples 25; roles command-tree 1654.7MB/235.1%, agent-process 1470.4MB/222.1%, status-cli 928.4MB/173.8%, agent-cli 184.3MB/134.2%
- agent: turn 7712ms; cold/warm 6789ms/7712ms; cold-warm delta 0ms; pre-provider 7436ms; provider 0ms; metadata scans 8 (268.61ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7665.85ms; max 7712ms; pre-provider p95 7389.3ms
- agent CLI attribution: cold known 4069ms / unattributed 2433ms; warm known 5145ms / unattributed 2291ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1632.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1470.4 MB exceeded threshold 1400 MB; observed role agent-process; top RSS roles: command-tree 1654.7 MB, agent-process 1470.4 MB, status-cli 928.4 MB
  - command-tree peak RSS 1654.7 MB exceeded threshold 1600 MB
- Agent turns:
  - cold: total 6789ms; pre-provider 6502ms; provider 3ms; post-provider 284ms; response true
    - active window: metadata scans 4 (136.24ms total, max 76.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6502ms; provider 3ms; post-provider 284ms; unknown 3416.85ms; source agent.prepare 2666.51ms; plugins.metadata.scan 418.64ms
  - warm: total 7712ms; pre-provider 7436ms; provider 0ms; post-provider 276ms; response true
    - active window: metadata scans 4 (132.37ms total, max 75.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7436ms; provider 0ms; post-provider 276ms; unknown 4350.85ms; source agent.prepare 2666.51ms; plugins.metadata.scan 418.64ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6502 ms | 4069 ms | 2433 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-67b331a3-kova-261108-051725-9c96a0/openclaw/timeline.jsonl |
  | warm | 7436 ms | 5145 ms | 2291 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-67b331a3-kova-261108-051725-9c96a0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2839 ms | 1016 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1526 ms | 814 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1124 ms | 547 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 137 ms | 77 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 128 ms | 128 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2538 ms | 942 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2470 ms | 1632 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 1542 ms | 538 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 131 ms | 75 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 123 ms | 123 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261108-051725-9c96a0-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261108-051725-9c96a0-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261108-051725-9c96a0-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-gateway-performance-man-005107f3-kova-261108-051725-9c96a0
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-gateway-performance-man-1e8be6a8-kova-261108-051725-9c96a0
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-gateway-performance-man-958fde53-kova-261108-051725-9c96a0
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-8e2a29af-kova-261108-051725-9c96a0
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-2ab680e0-kova-261108-051725-9c96a0
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261108-051725-9c96a0/kova-agent-cold-warm-message-67b331a3-kova-261108-051725-9c96a0

## Target Cleanup

- Runtime: `kova-local-mw7drwnb-3in-56f3b907`
- Result: removed
- Duration: 487ms

