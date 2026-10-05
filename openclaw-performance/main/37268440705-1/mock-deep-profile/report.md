# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1246.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1423.4 MB, gateway 1246.5 MB, command-tree 1144.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1246.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1423.4 MB, gateway 1246.5 MB, command-tree 1144.7 MB |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261005-053715-d059d9` |
| Generated | 2026-10-05T05:45:36.173Z |
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
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1246.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1423.4 MB, gateway 1246.5 MB, command-tree 1144.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 111 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[282.2%, 330.7%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1597.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (2ms), but OpenClaw spent 10801ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1597.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 111ms | 1246.5MB | n/a | 211.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 330.7% | 12153ms | 11901ms | 10801ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 111ms | 1246.5 MB | 2563.4 MB | n/a | n/a | gateway peak RSS 1246.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1423.4 MB, gateway 1246.5 MB, command-tree 1144.7 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1778 MB | 12153ms | 11901ms | agent-process max CPU interval \[282.2%, 330.7%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1706.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 374.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1597.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 330.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1178.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 334.2% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 1423.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 239.7% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1246.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 211.3% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 528.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 218.4% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 416.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 191.4% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 354.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 199.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261005-053715-d059d9/kova-gateway-performance-man-d48bd949-kova-261005-053715-d059d9
Measurements:
- startup: listening 1ms; health 111ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 110ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 110ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1246.5 MB; tracked total 2563.4 MB; max CPU 211.3%; samples 113; roles gateway-tree 1423.4MB/239.7%, command-tree 1144.7MB/334.2%, gateway 1246.5MB/211.3%, status-cli 1144.7MB/334.2%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1374.32ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 21/21/14
- Violations:
  - gateway peak RSS 1246.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1423.4 MB, gateway 1246.5 MB, command-tree 1144.7 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261005-053715-d059d9/kova-agent-cold-warm-message-2c26dd1d-kova-261005-053715-d059d9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1597.6 MB; tracked total 1778 MB; max CPU 330.7%; samples 126; roles command-tree 1706.2MB/374.3%, agent-process 1597.6MB/330.7%, status-cli 1178.7MB/305.5%, agent-cli 209.5MB/175.5%; performance thresholds skipped 15 (instrumented)
- agent: turn 12153ms; cold/warm 12153ms/11901ms; cold-warm delta 252ms; pre-provider 10801ms; provider 2ms; metadata scans 10 (266.03ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12140.4ms; max 12153ms; pre-provider p95 10796.6ms
- agent CLI attribution: cold known 5614ms / unattributed 5187ms; warm known 5869ms / unattributed 4844ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1818.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 65/47/10
- Violations:
  - agent-process max CPU interval \[282.2%, 330.7%\] crosses threshold 300%; CPU measurement is inconclusive
  - cold provider was fast (2ms), but OpenClaw spent 10801ms before provider work.
- Agent turns:
  - cold: total 12153ms; pre-provider 10801ms; provider 2ms; post-provider 1350ms; response true
    - active window: metadata scans 5 (133.75ms total, max 64.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10801ms; provider 2ms; post-provider 1350ms; unknown 7130.95ms; source agent.prepare 3282.84ms; plugins.metadata.scan 387.21ms
  - warm: total 11901ms; pre-provider 10713ms; provider 1ms; post-provider 1187ms; response true
    - active window: metadata scans 5 (132.28ms total, max 63.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10713ms; provider 1ms; post-provider 1187ms; unknown 7042.95ms; source agent.prepare 3282.84ms; plugins.metadata.scan 387.21ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10801 ms | 5614 ms | 5187 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261005-053715-d059d9/kova-agent-cold-warm-message-2c26dd1d-kova-261005-053715-d059d9/openclaw/timeline.jsonl |
  | warm | 10713 ms | 5869 ms | 4844 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261005-053715-d059d9/kova-agent-cold-warm-message-2c26dd1d-kova-261005-053715-d059d9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2556 ms | 645 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2514 ms | 1551 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1688 ms | 924 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 130 ms | 65 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 75 ms | 75 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 21 ms | 14 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2968 ms | 1819 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2345 ms | 615 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1597 ms | 946 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 127 ms | 64 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 84 ms | 84 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x3 | 3 | 0 | 26 ms | 19 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261005-053715-d059d9-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261005-053715-d059d9-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261005-053715-d059d9-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261005-053715-d059d9/kova-gateway-performance-man-d48bd949-kova-261005-053715-d059d9
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261005-053715-d059d9/kova-agent-cold-warm-message-2c26dd1d-kova-261005-053715-d059d9

## Target Cleanup

- Runtime: `kova-local-muutigcx-3ub-1d58e01d`
- Result: removed
- Duration: 515ms

