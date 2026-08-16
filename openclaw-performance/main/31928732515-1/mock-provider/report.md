# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1249.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1249.3 MB, gateway-tree 1140.6 MB, command-tree 472.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1249.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1249.3 MB, gateway-tree 1140.6 MB, command-tree 472.8 MB |
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
| Run ID | `kova-260816-052008-59c396` |
| Generated | 2026-08-16T05:22:39.470Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1249.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1249.3 MB, gateway-tree 1140.6 MB, command-tree 472.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5071 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1119.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1119.6 MB, gateway-tree 1102.3 MB, command-tree 470.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4484 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1147 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1147 MB, gateway-tree 1147 MB, command-tree 470.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4537 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4537ms | 1147MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152% | 3295ms | 2930ms | 3181ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5071ms | 1249.3 MB | 1684.6 MB | n/a | n/a | gateway peak RSS 1249.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1249.3 MB, gateway-tree 1140.6 MB, command-tree 472.8 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4484ms | 1119.6 MB | 1644 MB | n/a | n/a | gateway peak RSS 1119.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1119.6 MB, gateway-tree 1102.3 MB, command-tree 470.7 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4537ms | 1147 MB | 1688.7 MB | n/a | n/a | gateway peak RSS 1147 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1147 MB, gateway-tree 1147 MB, command-tree 470.8 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1143.7 MB | 3304ms | 2959ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1142 MB | 3289ms | 2928ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1145 MB | 3295ms | 2930ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1249.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1073.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 178.1% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1147 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 637.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 178.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 887.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 472.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 187 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 26.4% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 73.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 17.8% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-gateway-performance-man-005107f3-kova-260816-052008-59c396
Measurements:
- startup: listening 4525ms; health 5071ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 546ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/warm-restart 677ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1249.3 MB; tracked total 1684.6 MB; max CPU 151%; samples 15; roles gateway 1249.3MB/151%, gateway-tree 1140.6MB/151%, command-tree 472.8MB/147%, model-cli 472.8MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 638.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1249.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1249.3 MB, gateway-tree 1140.6 MB, command-tree 472.8 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-gateway-performance-man-1e8be6a8-kova-260816-052008-59c396
Measurements:
- startup: listening 4016ms; health 4484ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 411ms; post-ready p95 2ms; failures 26; final failures 0; slowest startup-sample/cold-start 468ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1119.6 MB; tracked total 1644 MB; max CPU 157%; samples 15; roles gateway 1119.6MB/157%, gateway-tree 1102.3MB/157%, command-tree 470.7MB/143%, model-cli 470.7MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 578.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1119.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1119.6 MB, gateway-tree 1102.3 MB, command-tree 470.7 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-gateway-performance-man-958fde53-kova-260816-052008-59c396
Measurements:
- startup: listening 4019ms; health 4537ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 518ms; post-ready p95 2ms; failures 25; final failures 0; slowest startup-sample/warm-restart 664ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1147 MB; tracked total 1688.7 MB; max CPU 156%; samples 15; roles gateway 1147MB/156%, gateway-tree 1147MB/156%, command-tree 470.8MB/144%, model-cli 470.8MB/144%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 586.84ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1147 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1147 MB, gateway-tree 1147 MB, command-tree 470.8 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-8e2a29af-kova-260816-052008-59c396
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 886.3 MB; tracked total 1143.7 MB; max CPU 152%; samples 12; roles command-tree 1072.5MB/174.4%, agent-process 886.3MB/152%, status-cli 609.6MB/174.4%, agent-cli 186.2MB/26.4%
- agent: turn 3304ms; cold/warm 3304ms/2959ms; cold-warm delta 345ms; pre-provider 3185ms; provider 2ms; metadata scans 32 (403.46ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3286.75ms; max 3304ms; pre-provider p95 3168.5ms
- agent CLI attribution: cold known 409ms / unattributed 2776ms; warm known 239ms / unattributed 2616ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1386.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3304ms; pre-provider 3185ms; provider 2ms; post-provider 117ms; response true
    - active window: metadata scans 22 (282.93ms total, max 45.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3185ms; provider 2ms; post-provider 117ms; unknown 2238.47ms; source plugins.metadata.scan 698.28ms; agent.prepare 248.25ms
  - warm: total 2959ms; pre-provider 2855ms; provider 1ms; post-provider 103ms; response true
    - active window: metadata scans 10 (120.53ms total, max 36.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2855ms; provider 1ms; post-provider 103ms; unknown 1908.47ms; source plugins.metadata.scan 698.28ms; agent.prepare 248.25ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3185 ms | 409 ms | 2776 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-8e2a29af-kova-260816-052008-59c396/openclaw/timeline.jsonl |
  | warm | 2855 ms | 239 ms | 2616 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-8e2a29af-kova-260816-052008-59c396/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 281 ms | 45 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 128 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 122 ms | 37 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 117 ms | 39 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-2ab680e0-kova-260816-052008-59c396
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 883.7 MB; tracked total 1142 MB; max CPU 151%; samples 12; roles command-tree 1070.2MB/178.1%, agent-process 883.7MB/151%, status-cli 615.1MB/178.1%, agent-cli 186.8MB/26.4%
- agent: turn 3289ms; cold/warm 3289ms/2928ms; cold-warm delta 361ms; pre-provider 3181ms; provider 3ms; metadata scans 32 (403.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3270.95ms; max 3289ms; pre-provider p95 3162.9ms
- agent CLI attribution: cold known 407ms / unattributed 2774ms; warm known 237ms / unattributed 2582ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1359.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3289ms; pre-provider 3181ms; provider 3ms; post-provider 105ms; response true
    - active window: metadata scans 22 (290.28ms total, max 43.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3181ms; provider 3ms; post-provider 105ms; unknown 2246.85ms; source plugins.metadata.scan 697.15ms; agent.prepare 237ms
  - warm: total 2928ms; pre-provider 2819ms; provider 1ms; post-provider 108ms; response true
    - active window: metadata scans 10 (113.59ms total, max 38.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2819ms; provider 1ms; post-provider 108ms; unknown 1884.85ms; source plugins.metadata.scan 697.15ms; agent.prepare 237ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3181 ms | 407 ms | 2774 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-2ab680e0-kova-260816-052008-59c396/openclaw/timeline.jsonl |
  | warm | 2819 ms | 237 ms | 2582 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-2ab680e0-kova-260816-052008-59c396/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 289 ms | 43 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 118 ms | 37 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 121 ms | 39 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 116 ms | 39 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-67b331a3-kova-260816-052008-59c396
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 887.6 MB; tracked total 1145 MB; max CPU 153%; samples 12; roles command-tree 1073.4MB/174.4%, agent-process 887.6MB/153%, status-cli 637.3MB/174.4%, agent-cli 187MB/26.4%
- agent: turn 3295ms; cold/warm 3295ms/2930ms; cold-warm delta 365ms; pre-provider 3181ms; provider 2ms; metadata scans 32 (411.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3276.75ms; max 3295ms; pre-provider p95 3163ms
- agent CLI attribution: cold known 406ms / unattributed 2775ms; warm known 246ms / unattributed 2575ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1390.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3295ms; pre-provider 3181ms; provider 2ms; post-provider 112ms; response true
    - active window: metadata scans 22 (286.77ms total, max 46.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3181ms; provider 2ms; post-provider 112ms; unknown 2228.62ms; source plugins.metadata.scan 710.38ms; agent.prepare 242ms
  - warm: total 2930ms; pre-provider 2821ms; provider 1ms; post-provider 108ms; response true
    - active window: metadata scans 10 (125.2ms total, max 36.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2821ms; provider 1ms; post-provider 108ms; unknown 1868.62ms; source plugins.metadata.scan 710.38ms; agent.prepare 242ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3181 ms | 406 ms | 2775 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-67b331a3-kova-260816-052008-59c396/openclaw/timeline.jsonl |
  | warm | 2821 ms | 246 ms | 2575 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-67b331a3-kova-260816-052008-59c396/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 285 ms | 47 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 121 ms | 42 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 124 ms | 36 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 122 ms | 41 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-052008-59c396-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-052008-59c396-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-052008-59c396-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-gateway-performance-man-005107f3-kova-260816-052008-59c396
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-gateway-performance-man-1e8be6a8-kova-260816-052008-59c396
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-gateway-performance-man-958fde53-kova-260816-052008-59c396
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-8e2a29af-kova-260816-052008-59c396
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-2ab680e0-kova-260816-052008-59c396
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-052008-59c396/kova-agent-cold-warm-message-67b331a3-kova-260816-052008-59c396

## Target Cleanup

- Runtime: `kova-local-msvcvupw-3zd-cd3103c3`
- Result: removed
- Duration: 395ms

