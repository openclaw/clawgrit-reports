# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm provider was fast (483ms), but OpenClaw spent 12786ms before provider work.

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm provider was fast (483ms), but OpenClaw spent 12786ms before provider work. |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261101-051716-7fd175` |
| Generated | 2026-11-01T05:26:53.858Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[189.3%, 286.2%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 128 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[280.9%, 302.9%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1939.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (483ms), but OpenClaw spent 12786ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1939.7 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 128ms | 1659.7MB | n/a | 249.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 302.9% | 13633ms | 14178ms | 11705ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 128ms | 1659.7 MB | 2730.6 MB | n/a | n/a | status-cli max CPU interval \[189.3%, 286.2%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2208.7 MB | 13633ms | 14178ms | agent-process max CPU interval \[280.9%, 302.9%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2136.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 355.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1939.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 302.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1210.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 339.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1763.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 249.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1659.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 249.8% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 491.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.1% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 372.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 214.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 447.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261101-051716-7fd175/kova-gateway-performance-man-d48bd949-kova-261101-051716-7fd175
Measurements:
- startup: listening 1ms; health 128ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 127ms; post-ready p95 1ms; failures 0; final failures 0; slowest startup-sample/cold-start 127ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1659.7 MB; tracked total 2730.6 MB; max CPU 249.8%; samples 112; roles gateway-tree 1763.5MB/249.8%, command-tree 1154.5MB/286.2%, gateway 1659.7MB/249.8%, status-cli 1154.5MB/286.2%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 9650.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 23/23/12
- Violations:
  - status-cli max CPU interval \[189.3%, 286.2%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261101-051716-7fd175/kova-agent-cold-warm-message-2c26dd1d-kova-261101-051716-7fd175
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1939.7 MB; tracked total 2208.7 MB; max CPU 302.9%; samples 146; roles command-tree 2136.5MB/355.5%, agent-process 1939.7MB/302.9%, status-cli 1210.3MB/339.7%, agent-cli 372.3MB/214.9%; performance thresholds skipped 15 (instrumented)
- agent: turn 14178ms; cold/warm 13633ms/14178ms; cold-warm delta 0ms; pre-provider 12786ms; provider 483ms; metadata scans 14 (418.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14150.75ms; max 14178ms; pre-provider p95 12731.95ms
- agent CLI attribution: cold known 7285ms / unattributed 4420ms; warm known 8629ms / unattributed 4157ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2666.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 74/45/4
- Violations:
  - agent-process max CPU interval \[280.9%, 302.9%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm provider was fast (483ms), but OpenClaw spent 12786ms before provider work.
- Agent turns:
  - cold: total 13633ms; pre-provider 11705ms; provider 4ms; post-provider 1924ms; response true
    - active window: metadata scans 7 (213.23ms total, max 62.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11705ms; provider 4ms; post-provider 1924ms; unknown 5703.77ms; source agent.prepare 5445.71ms; plugins.metadata.scan 555.52ms
  - warm: total 14178ms; pre-provider 12786ms; provider 483ms; post-provider 909ms; response true
    - active window: metadata scans 7 (204.95ms total, max 65.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12786ms; provider 483ms; post-provider 909ms; unknown 6784.77ms; source agent.prepare 5445.71ms; plugins.metadata.scan 555.52ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11705 ms | 7285 ms | 4420 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261101-051716-7fd175/kova-agent-cold-warm-message-2c26dd1d-kova-261101-051716-7fd175/openclaw/timeline.jsonl |
  | warm | 12786 ms | 8629 ms | 4157 ms | 483 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261101-051716-7fd175/kova-agent-cold-warm-message-2c26dd1d-kova-261101-051716-7fd175/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3638 ms | 1185 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3262 ms | 1504 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2477 ms | 1012 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 229 ms | 229 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 145 ms | 63 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 39 ms | 39 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4367 ms | 2666 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3169 ms | 1019 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2971 ms | 983 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 237 ms | 237 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 205 ms | 66 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261101-051716-7fd175-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261101-051716-7fd175-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261101-051716-7fd175-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261101-051716-7fd175/kova-gateway-performance-man-d48bd949-kova-261101-051716-7fd175
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261101-051716-7fd175/kova-agent-cold-warm-message-2c26dd1d-kova-261101-051716-7fd175

## Target Cleanup

- Runtime: `kova-local-mvxdordl-3f6-e267cab5`
- Result: removed
- Duration: 504ms

