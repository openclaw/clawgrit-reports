# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway max CPU interval \[215.9%, 816.3%\] crosses threshold 250%; CPU measurement is inconclusive

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway max CPU interval \[215.9%, 816.3%\] crosses threshold 250%; CPU measurement is inconclusive |
| Blocking findings | 5 |
| Warnings | 0 |
| Records | 2 (BLOCKED:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260922-052659-a4250b` |
| Generated | 2026-09-22T05:31:26.929Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 1 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 2 |
| Scenarios | 2 |
| States | 2 |
| BLOCKED | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[215.9%, 816.3%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 10 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | mock-provider max CPU interval \[0%, 816.3%\] crosses threshold 150%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 10 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[215.9%, 2448.8%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 10 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[151.2%, 237.7%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 10 |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[262.8%, 317.2%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1101.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 10ms | 949.9MB | n/a | 816.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | BLOCKED:1 | n/a | 0MB | n/a | 283.5% | 7944ms | 9142ms | 7238ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 10ms | 949.9 MB | 1966.1 MB | n/a | n/a | gateway max CPU interval \[215.9%, 816.3%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1276.7 MB | 7944ms | 9142ms | agent-cli max CPU interval \[262.8%, 317.2%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1204.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 317.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1119.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 2448.8% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1204.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 408.2% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 174.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 1632.6% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 949.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 816.3% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1101.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 283.5% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 74.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 816.3% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 774.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 265.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260922-052659-a4250b/kova-gateway-performance-man-d48bd949-kova-260922-052659-a4250b
Measurements:
- startup: listening 1ms; health 10ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 9ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 9ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 949.9 MB; tracked total 1966.1 MB; max CPU 816.3%; samples 87; roles gateway-tree 1119.2MB/2448.8%, gateway 949.9MB/816.3%, uncategorized 174.5MB/1632.6%, command-tree 774.6MB/408.2%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2795.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 14/14/13
- Violations:
  - gateway max CPU interval \[215.9%, 816.3%\] crosses threshold 250%; CPU measurement is inconclusive
  - mock-provider max CPU interval \[0%, 816.3%\] crosses threshold 150%; CPU measurement is inconclusive
  - gateway-tree max CPU interval \[215.9%, 2448.8%\] crosses threshold 300%; CPU measurement is inconclusive
  - status-cli max CPU interval \[151.2%, 237.7%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260922-052659-a4250b/kova-agent-cold-warm-message-2c26dd1d-kova-260922-052659-a4250b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1101.5 MB; tracked total 1276.7 MB; max CPU 283.5%; samples 333; roles agent-cli 1204.6MB/317.2%, command-tree 1204.6MB/317.2%, agent-process 1101.5MB/283.5%, status-cli 756.5MB/265.4%; performance thresholds skipped 17 (instrumented)
- agent: turn 9142ms; cold/warm 7944ms/9142ms; cold-warm delta 0ms; pre-provider 8421ms; provider 1ms; metadata scans 16 (579.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9082.1ms; max 9142ms; pre-provider p95 8361.85ms
- agent CLI attribution: cold known 4996ms / unattributed 2242ms; warm known 6125ms / unattributed 2296ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 59537.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 46/46/19
- Violations:
  - agent-cli max CPU interval \[262.8%, 317.2%\] crosses threshold 300%; CPU measurement is inconclusive
- Agent turns:
  - cold: total 7944ms; pre-provider 7238ms; provider 2ms; post-provider 704ms; response true
    - active window: metadata scans 9 (299.14ms total, max 60.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7238ms; provider 2ms; post-provider 704ms; unknown 5046.33ms; source agent.prepare 1469.68ms; plugins.metadata.scan 721.99ms
  - warm: total 9142ms; pre-provider 8421ms; provider 1ms; post-provider 720ms; response true
    - active window: metadata scans 7 (280.36ms total, max 71.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8421ms; provider 1ms; post-provider 720ms; unknown 6229.33ms; source agent.prepare 1469.68ms; plugins.metadata.scan 721.99ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7238 ms | 4996 ms | 2242 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260922-052659-a4250b/kova-agent-cold-warm-message-2c26dd1d-kova-260922-052659-a4250b/openclaw/timeline.jsonl |
  | warm | 8421 ms | 6125 ms | 2296 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260922-052659-a4250b/kova-agent-cold-warm-message-2c26dd1d-kova-260922-052659-a4250b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x36 | 36 | 0 | 5015 ms | 1993 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1559 ms | 625 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 828 ms | 206 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x8 | 9 | 0 | 302 ms | 61 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 82 ms | 82 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 79 ms | 79 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x33 | 33 | 0 | 6091 ms | 3260 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1648 ms | 856 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 643 ms | 188 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 281 ms | 72 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 79 ms | 79 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 71 ms | 71 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260922-052659-a4250b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260922-052659-a4250b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260922-052659-a4250b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260922-052659-a4250b/kova-gateway-performance-man-d48bd949-kova-260922-052659-a4250b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260922-052659-a4250b/kova-agent-cold-warm-message-2c26dd1d-kova-260922-052659-a4250b

## Target Cleanup

- Runtime: `kova-local-muc8f6jo-3s4-99d70bad`
- Result: removed
- Duration: 663ms

