# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1253.3 MB, command-tree 458.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1253.3 MB, command-tree 458.4 MB |
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
| Run ID | `kova-260818-052001-256f20` |
| Generated | 2026-08-18T05:23:06.540Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1253.3 MB, command-tree 458.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6259 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1253.3 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6259 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1252.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1252.8 MB, gateway-tree 1252.8 MB, command-tree 459.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5739 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1252.8 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5739 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1247.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1247.5 MB, gateway-tree 1247.5 MB, command-tree 456 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5204 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1247.5 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5204 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 5739ms | 1252.8MB | n/a | 164% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 161% | 4174ms | 3819ms | 3999ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 6259ms | 1253.3 MB | 1783 MB | n/a | n/a | gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1253.3 MB, command-tree 458.4 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5739ms | 1252.8 MB | 1784.1 MB | n/a | n/a | gateway peak RSS 1252.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1252.8 MB, gateway-tree 1252.8 MB, command-tree 459.8 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 5204ms | 1247.5 MB | 1774 MB | n/a | n/a | gateway peak RSS 1247.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1247.5 MB, gateway-tree 1247.5 MB, command-tree 456 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1163 MB | 4152ms | 3509ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1221.8 MB | 4174ms | 3844ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1205.9 MB | 4598ms | 3819ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1253.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 165% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1148.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 195.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1253.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 165% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 679.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 195.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 568 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 188.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 960.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 459.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- mock-provider: RSS 74.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 17.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-gateway-performance-man-005107f3-kova-260818-052001-256f20
Measurements:
- startup: listening 5537ms; health 6259ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 2
- health: startup p95 678ms; post-ready p95 3ms; failures 34; final failures 0; slowest startup-sample/cold-start 722ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1253.3 MB; tracked total 1783 MB; max CPU 158%; samples 15; roles gateway 1253.3MB/158%, gateway-tree 1253.3MB/158%, command-tree 458.4MB/152%, model-cli 458.4MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 816.44ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1253.3 MB, command-tree 458.4 MB
  - gateway-tree peak RSS 1253.3 MB exceeded threshold 1200 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-gateway-performance-man-1e8be6a8-kova-260818-052001-256f20
Measurements:
- startup: listening 4787ms; health 5739ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 694ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/cold-start 952ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1252.8 MB; tracked total 1784.1 MB; max CPU 165%; samples 15; roles gateway 1252.8MB/165%, gateway-tree 1252.8MB/165%, command-tree 459.8MB/147%, model-cli 459.8MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 833.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1252.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1252.8 MB, gateway-tree 1252.8 MB, command-tree 459.8 MB
  - gateway-tree peak RSS 1252.8 MB exceeded threshold 1200 MB

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-gateway-performance-man-958fde53-kova-260818-052001-256f20
Measurements:
- startup: listening 4531ms; health 5204ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 673ms; post-ready p95 4ms; failures 31; final failures 0; slowest startup-sample/warm-restart 751ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1247.5 MB; tracked total 1774 MB; max CPU 164%; samples 15; roles gateway 1247.5MB/164%, gateway-tree 1247.5MB/164%, command-tree 456MB/152%, status-cli 456MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 740.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1247.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1247.5 MB, gateway-tree 1247.5 MB, command-tree 456 MB
  - gateway-tree peak RSS 1247.5 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-8e2a29af-kova-260818-052001-256f20
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 900.7 MB; tracked total 1163 MB; max CPU 158%; samples 14; roles command-tree 1089.8MB/182.4%, agent-process 900.7MB/158%, status-cli 636MB/182.4%, agent-cli 189.3MB/31.4%
- agent: turn 4152ms; cold/warm 4152ms/3509ms; cold-warm delta 643ms; pre-provider 3997ms; provider 2ms; metadata scans 32 (523.7ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4119.85ms; max 4152ms; pre-provider p95 3964.95ms
- agent CLI attribution: cold known 551ms / unattributed 3446ms; warm known 276ms / unattributed 3080ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1675.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4152ms; pre-provider 3997ms; provider 2ms; post-provider 153ms; response true
    - active window: metadata scans 22 (379.17ms total, max 52.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3997ms; provider 2ms; post-provider 153ms; unknown 2840.49ms; source plugins.metadata.scan 855.92ms; agent.prepare 300.59ms
  - warm: total 3509ms; pre-provider 3356ms; provider 1ms; post-provider 152ms; response true
    - active window: metadata scans 10 (144.53ms total, max 50.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3356ms; provider 1ms; post-provider 152ms; unknown 2199.49ms; source plugins.metadata.scan 855.92ms; agent.prepare 300.59ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3997 ms | 551 ms | 3446 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-8e2a29af-kova-260818-052001-256f20/openclaw/timeline.jsonl |
  | warm | 3356 ms | 276 ms | 3080 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-8e2a29af-kova-260818-052001-256f20/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 379 ms | 53 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 172 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 145 ms | 51 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 131 ms | 50 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-2ab680e0-kova-260818-052001-256f20
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 960.3 MB; tracked total 1221.8 MB; max CPU 163%; samples 15; roles command-tree 1148.7MB/195.4%, agent-process 960.3MB/163%, status-cli 679.2MB/195.4%, agent-cli 189MB/37.2%
- agent: turn 4174ms; cold/warm 4174ms/3844ms; cold-warm delta 330ms; pre-provider 3999ms; provider 2ms; metadata scans 32 (521.28ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4157.5ms; max 4174ms; pre-provider p95 3980.7ms
- agent CLI attribution: cold known 507ms / unattributed 3492ms; warm known 358ms / unattributed 3275ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1704.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4174ms; pre-provider 3999ms; provider 2ms; post-provider 173ms; response true
    - active window: metadata scans 22 (348.7ms total, max 57.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3999ms; provider 2ms; post-provider 173ms; unknown 2703.23ms; source plugins.metadata.scan 950.4ms; agent.prepare 345.37ms
  - warm: total 3844ms; pre-provider 3633ms; provider 1ms; post-provider 210ms; response true
    - active window: metadata scans 10 (172.58ms total, max 50.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3633ms; provider 1ms; post-provider 210ms; unknown 2337.23ms; source plugins.metadata.scan 950.4ms; agent.prepare 345.37ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3999 ms | 507 ms | 3492 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-2ab680e0-kova-260818-052001-256f20/openclaw/timeline.jsonl |
  | warm | 3633 ms | 358 ms | 3275 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-2ab680e0-kova-260818-052001-256f20/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 352 ms | 57 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 155 ms | 49 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 187 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 171 ms | 51 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-67b331a3-kova-260818-052001-256f20
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 945.1 MB; tracked total 1205.9 MB; max CPU 161%; samples 14; roles command-tree 1134.5MB/188.3%, agent-cli 568MB/188.3%, agent-process 945.1MB/161%, status-cli 640.5MB/184.5%
- agent: turn 4598ms; cold/warm 4598ms/3819ms; cold-warm delta 779ms; pre-provider 4416ms; provider 3ms; metadata scans 32 (570.15ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4559.05ms; max 4598ms; pre-provider p95 4378.5ms
- agent CLI attribution: cold known 576ms / unattributed 3840ms; warm known 301ms / unattributed 3365ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1776.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4598ms; pre-provider 4416ms; provider 3ms; post-provider 179ms; response true
    - active window: metadata scans 22 (413.99ms total, max 48.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4416ms; provider 3ms; post-provider 179ms; unknown 3195.37ms; source plugins.metadata.scan 918.03ms; agent.prepare 302.6ms
  - warm: total 3819ms; pre-provider 3666ms; provider 1ms; post-provider 152ms; response true
    - active window: metadata scans 10 (156.16ms total, max 39.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3666ms; provider 1ms; post-provider 152ms; unknown 2445.37ms; source plugins.metadata.scan 918.03ms; agent.prepare 302.6ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4416 ms | 576 ms | 3840 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-67b331a3-kova-260818-052001-256f20/openclaw/timeline.jsonl |
  | warm | 3666 ms | 301 ms | 3365 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-67b331a3-kova-260818-052001-256f20/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 416 ms | 48 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 160 ms | 49 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 157 ms | 40 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 144 ms | 52 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260818-052001-256f20-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260818-052001-256f20-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260818-052001-256f20-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-gateway-performance-man-005107f3-kova-260818-052001-256f20
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-gateway-performance-man-1e8be6a8-kova-260818-052001-256f20
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-gateway-performance-man-958fde53-kova-260818-052001-256f20
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-8e2a29af-kova-260818-052001-256f20
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-2ab680e0-kova-260818-052001-256f20
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260818-052001-256f20/kova-agent-cold-warm-message-67b331a3-kova-260818-052001-256f20

## Target Cleanup

- Runtime: `kova-local-msy7re8a-3y0-ab80102c`
- Result: removed
- Duration: 476ms

