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
- Required obligations: 109 total, 0 missing, 0 failed
- Categories: command: 55, artifact: 6, cleanup: 6, collector: 6, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260803-061908-68d390` |
| Generated | 2026-08-03T06:21:35.674Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
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
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5026ms | 970.3MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154% | 3717ms | 3821ms | 3580ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5785ms | 970.3 MB | 1487.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5026ms | 959.4 MB | 1483.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4984ms | 970.4 MB | 1493.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1054.7 MB | 3717ms | 3711ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1090.8 MB | 3898ms | 3821ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1102.9 MB | 3605ms | 3969ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1032.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 970.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 600.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 969.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 857.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 457.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 175.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 30.5% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 72.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 17.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-8e2a29af-kova-260803-061908-68d390
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 808.7 MB; tracked total 1054.7 MB; max CPU 153%; samples 13; roles command-tree 984.4MB/180.3%, agent-process 808.7MB/153%, status-cli 598.4MB/174.4%, agent-cli 175.7MB/27.3%
- agent: turn 3717ms; cold/warm 3717ms/3711ms; cold-warm delta 6ms; pre-provider 3580ms; provider 4ms; metadata scans 12 (211.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3716.7ms; max 3717ms; pre-provider p95 3579.75ms
- agent CLI attribution: cold known 243ms / unattributed 3337ms; warm known 244ms / unattributed 3331ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1336.71ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3717ms; pre-provider 3580ms; provider 4ms; post-provider 133ms; response true
    - active window: metadata scans 6 (102.95ms total, max 33.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3580ms; provider 4ms; post-provider 133ms; unknown 2881.21ms; source plugins.metadata.scan 425.48ms; agent.prepare 273.31ms
  - warm: total 3711ms; pre-provider 3575ms; provider 1ms; post-provider 135ms; response true
    - active window: metadata scans 6 (108.78ms total, max 40.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3575ms; provider 1ms; post-provider 135ms; unknown 2876.21ms; source plugins.metadata.scan 425.48ms; agent.prepare 273.31ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3580 ms | 243 ms | 3337 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-8e2a29af-kova-260803-061908-68d390/openclaw/timeline.jsonl |
  | warm | 3575 ms | 244 ms | 3331 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-8e2a29af-kova-260803-061908-68d390/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 140 ms | 44 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 103 ms | 34 ms |
  | warm | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 135 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 109 ms | 41 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-2ab680e0-kova-260803-061908-68d390
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 844.9 MB; tracked total 1090.8 MB; max CPU 154%; samples 13; roles command-tree 1020.3MB/179.5%, agent-process 844.9MB/154%, status-cli 600.5MB/175.5%, agent-cli 175.6MB/30.5%
- agent: turn 3898ms; cold/warm 3898ms/3821ms; cold-warm delta 77ms; pre-provider 3737ms; provider 3ms; metadata scans 12 (202.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3894.15ms; max 3898ms; pre-provider p95 3734.25ms
- agent CLI attribution: cold known 238ms / unattributed 3499ms; warm known 249ms / unattributed 3433ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1368.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3898ms; pre-provider 3737ms; provider 3ms; post-provider 158ms; response true
    - active window: metadata scans 6 (96.24ms total, max 36.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3737ms; provider 3ms; post-provider 158ms; unknown 3058.57ms; source plugins.metadata.scan 393.36ms; agent.prepare 285.07ms
  - warm: total 3821ms; pre-provider 3682ms; provider 1ms; post-provider 138ms; response true
    - active window: metadata scans 6 (106.25ms total, max 39.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3682ms; provider 1ms; post-provider 138ms; unknown 3003.57ms; source plugins.metadata.scan 393.36ms; agent.prepare 285.07ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3737 ms | 238 ms | 3499 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-2ab680e0-kova-260803-061908-68d390/openclaw/timeline.jsonl |
  | warm | 3682 ms | 249 ms | 3433 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-2ab680e0-kova-260803-061908-68d390/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 142 ms | 40 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 96 ms | 36 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 143 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 106 ms | 39 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-67b331a3-kova-260803-061908-68d390
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 857.3 MB; tracked total 1102.9 MB; max CPU 154%; samples 13; roles command-tree 1032.9MB/176.4%, agent-process 857.3MB/154%, status-cli 600.1MB/176.4%, agent-cli 175.6MB/27.7%
- agent: turn 3969ms; cold/warm 3605ms/3969ms; cold-warm delta 0ms; pre-provider 3835ms; provider 1ms; metadata scans 12 (221.55ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3950.8ms; max 3969ms; pre-provider p95 3816.6ms
- agent CLI attribution: cold known 242ms / unattributed 3225ms; warm known 268ms / unattributed 3567ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1352.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3605ms; pre-provider 3467ms; provider 2ms; post-provider 136ms; response true
    - active window: metadata scans 6 (99.6ms total, max 35.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3467ms; provider 2ms; post-provider 136ms; unknown 2743.74ms; source plugins.metadata.scan 435ms; agent.prepare 288.26ms
  - warm: total 3969ms; pre-provider 3835ms; provider 1ms; post-provider 133ms; response true
    - active window: metadata scans 6 (121.95ms total, max 60.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3835ms; provider 1ms; post-provider 133ms; unknown 3111.74ms; source plugins.metadata.scan 435ms; agent.prepare 288.26ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3467 ms | 242 ms | 3225 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-67b331a3-kova-260803-061908-68d390/openclaw/timeline.jsonl |
  | warm | 3835 ms | 268 ms | 3567 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-67b331a3-kova-260803-061908-68d390/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 140 ms | 39 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 102 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 148 ms | 50 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 120 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260803-061908-68d390-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260803-061908-68d390-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260803-061908-68d390-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-gateway-performance-man-005107f3-kova-260803-061908-68d390
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-gateway-performance-man-1e8be6a8-kova-260803-061908-68d390
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-gateway-performance-man-958fde53-kova-260803-061908-68d390
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-8e2a29af-kova-260803-061908-68d390
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-2ab680e0-kova-260803-061908-68d390
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260803-061908-68d390/kova-agent-cold-warm-message-67b331a3-kova-260803-061908-68d390

## Target Cleanup

- Runtime: `kova-local-mscu9n9v-3z2-f9bc73dc`
- Result: removed
- Duration: 448ms

