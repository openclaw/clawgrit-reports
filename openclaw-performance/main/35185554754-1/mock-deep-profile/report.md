# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm provider was fast (2ms), but OpenClaw spent 10548ms before provider work.

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm provider was fast (2ms), but OpenClaw spent 10548ms before provider work. |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260917-052508-1ca6d4` |
| Generated | 2026-09-17T05:28:09.823Z |
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
| BLOCKED | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[220.3%, 299.4%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 239 |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[169%, 229.8%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 239 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[254.6%, 322%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 869 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (2ms), but OpenClaw spent 10548ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 869 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 239ms | 956.9MB | n/a | 299.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 278.8% | 6662ms | 11548ms | 5841ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 239ms | 956.9 MB | 1720.4 MB | n/a | n/a | gateway max CPU interval \[220.3%, 299.4%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1041.4 MB | 6662ms | 11548ms | agent-cli max CPU interval \[254.6%, 322%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 968.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 322% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 968.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 322% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 956.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 299.4% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 956.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 299.4% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 869 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 278.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 733.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 267.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 369.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 186.2% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 350.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 204.3% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260917-052508-1ca6d4/kova-gateway-performance-man-d48bd949-kova-260917-052508-1ca6d4
Measurements:
- startup: listening 1ms; health 239ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 238ms; post-ready p95 4ms; failures 0; final failures 0; slowest startup-sample/cold-start 238ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 956.9 MB; tracked total 1720.4 MB; max CPU 299.4%; samples 108; roles gateway 956.9MB/299.4%, gateway-tree 956.9MB/299.4%, command-tree 691MB/277.4%, status-cli 691MB/229.8%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-bootstrap 2855.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 16/16/15
- Violations:
  - gateway max CPU interval \[220.3%, 299.4%\] crosses threshold 250%; CPU measurement is inconclusive
  - status-cli max CPU interval \[169%, 229.8%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260917-052508-1ca6d4/kova-agent-cold-warm-message-2c26dd1d-kova-260917-052508-1ca6d4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 869 MB; tracked total 1041.4 MB; max CPU 278.8%; samples 96; roles agent-cli 968.1MB/322%, command-tree 968.1MB/322%, agent-process 869MB/278.8%, status-cli 733.7MB/267.4%; performance thresholds skipped 15 (instrumented)
- agent: turn 11548ms; cold/warm 6662ms/11548ms; cold-warm delta 0ms; pre-provider 10548ms; provider 2ms; metadata scans 14 (581.66ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 11303.7ms; max 11548ms; pre-provider p95 10312.65ms
- agent CLI attribution: cold known 3996ms / unattributed 1845ms; warm known 7536ms / unattributed 3012ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2622.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 31/31/26
- Violations:
  - agent-cli max CPU interval \[254.6%, 322%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm provider was fast (2ms), but OpenClaw spent 10548ms before provider work.
- Agent turns:
  - cold: total 6662ms; pre-provider 5841ms; provider 3ms; post-provider 818ms; response true
    - active window: metadata scans 8 (314.99ms total, max 63.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5841ms; provider 3ms; post-provider 818ms; unknown 3873.75ms; source agent.prepare 1200.17ms; plugins.metadata.scan 767.08ms
  - warm: total 11548ms; pre-provider 10548ms; provider 2ms; post-provider 998ms; response true
    - active window: metadata scans 6 (266.67ms total, max 66.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10548ms; provider 2ms; post-provider 998ms; unknown 8580.75ms; source agent.prepare 1200.17ms; plugins.metadata.scan 767.08ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5841 ms | 3996 ms | 1845 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260917-052508-1ca6d4/kova-agent-cold-warm-message-2c26dd1d-kova-260917-052508-1ca6d4/openclaw/timeline.jsonl |
  | warm | 10548 ms | 7536 ms | 3012 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260917-052508-1ca6d4/kova-agent-cold-warm-message-2c26dd1d-kova-260917-052508-1ca6d4/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x41 | 41 | 0 | 4180 ms | 1543 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1303 ms | 644 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 465 ms | 145 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x7 | 8 | 0 | 315 ms | 63 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 110 ms | 110 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 67 ms | 67 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x35 | 35 | 0 | 6299 ms | 2622 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3301 ms | 1459 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 736 ms | 211 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5 | 6 | 0 | 267 ms | 67 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 116 ms | 116 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260917-052508-1ca6d4-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260917-052508-1ca6d4-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260917-052508-1ca6d4-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260917-052508-1ca6d4/kova-gateway-performance-man-d48bd949-kova-260917-052508-1ca6d4
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260917-052508-1ca6d4/kova-agent-cold-warm-message-2c26dd1d-kova-260917-052508-1ca6d4

## Target Cleanup

- Runtime: `kova-local-mu535jho-435-42a21168`
- Result: removed
- Duration: 630ms

