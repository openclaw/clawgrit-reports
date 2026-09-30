# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 6 (PASS:6) |

## Proof Completeness

- Completeness: complete: 6
- Required obligations: 118 total, 0 missing, 0 failed
- Categories: command: 64, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260930-052736-dd4614` |
| Generated | 2026-09-30T05:33:03.606Z |
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
| PASS | 6 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 47ms | 1169MB | n/a | 306.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 219.8% | 5588ms | 5912ms | 5383ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 35ms | 1176.1 MB | 1945.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 47ms | 1169 MB | 2009.9 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 182ms | 1161.7 MB | 1965.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1157.6 MB | 5880ms | 7196ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1159.1 MB | 5588ms | 5912ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1169.7 MB | 5469ms | 5881ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1349.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 346.1% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1176.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 330.1% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1098.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 250.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1002.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 240.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 756.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 215.9% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 509.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 143% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 111.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.3% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 10.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-8e2a29af-kova-260930-052736-dd4614
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 989.3 MB; tracked total 1157.6 MB; max CPU 240.5%; samples 23; roles command-tree 1085.5MB/250.1%, agent-process 989.3MB/240.5%, status-cli 582.6MB/215.9%, agent-cli 96.2MB/160.3%
- agent: turn 7196ms; cold/warm 5880ms/7196ms; cold-warm delta 0ms; pre-provider 6685ms; provider 1ms; metadata scans 8 (262.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7130.2ms; max 7196ms; pre-provider p95 6634.4ms
- agent CLI attribution: cold known 3885ms / unattributed 1788ms; warm known 4459ms / unattributed 2226ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1465.71ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5880ms; pre-provider 5673ms; provider 3ms; post-provider 204ms; response true
    - active window: metadata scans 4 (128.01ms total, max 72.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5673ms; provider 3ms; post-provider 204ms; unknown 3017.35ms; source agent.prepare 2247.42ms; plugins.metadata.scan 408.23ms
  - warm: total 7196ms; pre-provider 6685ms; provider 1ms; post-provider 510ms; response true
    - active window: metadata scans 4 (134.26ms total, max 74.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6685ms; provider 1ms; post-provider 510ms; unknown 4029.35ms; source agent.prepare 2247.42ms; plugins.metadata.scan 408.23ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5673 ms | 3885 ms | 1788 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-8e2a29af-kova-260930-052736-dd4614/openclaw/timeline.jsonl |
  | warm | 6685 ms | 4459 ms | 2226 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-8e2a29af-kova-260930-052736-dd4614/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2194 ms | 564 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1670 ms | 1227 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1004 ms | 500 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 128 ms | 72 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2399 ms | 708 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1874 ms | 1466 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1244 ms | 545 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 134 ms | 74 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 22 ms | 14 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-2ab680e0-kova-260930-052736-dd4614
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 991.5 MB; tracked total 1159.1 MB; max CPU 215.7%; samples 21; roles command-tree 1087.7MB/225.3%, agent-process 991.5MB/215.7%, status-cli 657.1MB/202.3%, agent-cli 111.3MB/134%
- agent: turn 5912ms; cold/warm 5588ms/5912ms; cold-warm delta 0ms; pre-provider 5619ms; provider 0ms; metadata scans 8 (230.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5895.8ms; max 5912ms; pre-provider p95 5607.2ms
- agent CLI attribution: cold known 3553ms / unattributed 1830ms; warm known 3674ms / unattributed 1945ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1307.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5588ms; pre-provider 5383ms; provider 2ms; post-provider 203ms; response true
    - active window: metadata scans 4 (109.49ms total, max 61.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5383ms; provider 2ms; post-provider 203ms; unknown 3082.21ms; source agent.prepare 1932.29ms; plugins.metadata.scan 368.5ms
  - warm: total 5912ms; pre-provider 5619ms; provider 0ms; post-provider 293ms; response true
    - active window: metadata scans 4 (121.48ms total, max 67.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5619ms; provider 0ms; post-provider 293ms; unknown 3318.21ms; source agent.prepare 1932.29ms; plugins.metadata.scan 368.5ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5383 ms | 3553 ms | 1830 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-2ab680e0-kova-260930-052736-dd4614/openclaw/timeline.jsonl |
  | warm | 5619 ms | 3674 ms | 1945 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-2ab680e0-kova-260930-052736-dd4614/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2071 ms | 540 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1397 ms | 1068 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 990 ms | 498 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 109 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1926 ms | 561 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1649 ms | 1308 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 943 ms | 387 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 122 ms | 67 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-67b331a3-kova-260930-052736-dd4614
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1002.3 MB; tracked total 1169.7 MB; max CPU 219.8%; samples 21; roles command-tree 1098.8MB/229.7%, agent-process 1002.3MB/219.8%, status-cli 670.1MB/196.9%, agent-cli 96.5MB/135.7%
- agent: turn 5881ms; cold/warm 5469ms/5881ms; cold-warm delta 0ms; pre-provider 5556ms; provider 1ms; metadata scans 8 (227.15ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5860.4ms; max 5881ms; pre-provider p95 5540.8ms
- agent CLI attribution: cold known 3511ms / unattributed 1741ms; warm known 3635ms / unattributed 1921ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1297.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5469ms; pre-provider 5252ms; provider 2ms; post-provider 215ms; response true
    - active window: metadata scans 4 (112.28ms total, max 62.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5252ms; provider 2ms; post-provider 215ms; unknown 2977.07ms; source agent.prepare 1922.32ms; plugins.metadata.scan 352.61ms
  - warm: total 5881ms; pre-provider 5556ms; provider 1ms; post-provider 324ms; response true
    - active window: metadata scans 4 (114.87ms total, max 65.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5556ms; provider 1ms; post-provider 324ms; unknown 3281.07ms; source agent.prepare 1922.32ms; plugins.metadata.scan 352.61ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5252 ms | 3511 ms | 1741 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-67b331a3-kova-260930-052736-dd4614/openclaw/timeline.jsonl |
  | warm | 5556 ms | 3635 ms | 1921 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-67b331a3-kova-260930-052736-dd4614/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2063 ms | 551 ms |
  | cold | `agent.startup` | `agent.startup` x8 | 8 | 0 | 1340 ms | 1007 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1018 ms | 499 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 112 ms | 62 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 1934 ms | 548 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1638 ms | 1297 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 903 ms | 366 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 115 ms | 66 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260930-052736-dd4614-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260930-052736-dd4614-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260930-052736-dd4614-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-gateway-performance-man-005107f3-kova-260930-052736-dd4614
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-gateway-performance-man-1e8be6a8-kova-260930-052736-dd4614
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-gateway-performance-man-958fde53-kova-260930-052736-dd4614
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-8e2a29af-kova-260930-052736-dd4614
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-2ab680e0-kova-260930-052736-dd4614
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260930-052736-dd4614/kova-agent-cold-warm-message-67b331a3-kova-260930-052736-dd4614

## Target Cleanup

- Runtime: `kova-local-munnys4t-3t1-b2e3fd8b`
- Result: removed
- Duration: 612ms

