# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1176.8 MB, command-tree 595.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1176.8 MB, command-tree 595.9 MB |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 2 (FAIL:1, PASS:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 37 total, 0 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260817-052255-0801d8` |
| Generated | 2026-08-17T05:25:07.610Z |
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
| FAIL | 1 |
| PASS | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1176.8 MB, command-tree 595.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5880 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 5880ms | 1253.3MB | n/a | 159% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 154% | 5371ms | 4953ms | 4710ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5880ms | 1253.3 MB | 1835.3 MB | n/a | n/a | gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1176.8 MB, command-tree 595.9 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1407.4 MB | 5371ms | 4953ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1333.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 223% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1253.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 808.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 223% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1176.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 613.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 216% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1129.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 574 MB (scenario gateway-performance/many-bundled-plugins); CPU 150% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 437.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260817-052255-0801d8/kova-gateway-performance-man-d48bd949-kova-260817-052255-0801d8
Measurements:
- startup: listening 5072ms; health 5880ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 4ms; post-ready p95 3ms; failures 76; final failures 0; slowest startup-sample/cold-start 808ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1253.3 MB; tracked total 1835.3 MB; max CPU 159%; samples 38; roles gateway 1253.3MB/159%, gateway-tree 1176.8MB/159%, command-tree 595.9MB/150%, status-cli 595.9MB/145%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 731.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 3/3/3
- Violations:
  - gateway peak RSS 1253.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1253.3 MB, gateway-tree 1176.8 MB, command-tree 595.9 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260817-052255-0801d8/kova-agent-cold-warm-message-2c26dd1d-kova-260817-052255-0801d8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1129.2 MB; tracked total 1407.4 MB; max CPU 154%; samples 57; roles command-tree 1333.5MB/223%, agent-process 1129.2MB/154%, status-cli 808.1MB/223%, agent-cli 613.3MB/216%; performance thresholds skipped 15 (instrumented)
- agent: turn 5371ms; cold/warm 5371ms/4953ms; cold-warm delta 418ms; pre-provider 4710ms; provider 3ms; metadata scans 32 (506.62ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5350.1ms; max 5371ms; pre-provider p95 4687.35ms
- agent CLI attribution: cold known 660ms / unattributed 4050ms; warm known 502ms / unattributed 3755ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1701.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 5371ms; pre-provider 4710ms; provider 3ms; post-provider 658ms; response true
    - active window: metadata scans 22 (344.46ms total, max 41.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4710ms; provider 3ms; post-provider 658ms; unknown 3190.22ms; source plugins.metadata.scan 865.3ms; agent.prepare 654.48ms
  - warm: total 4953ms; pre-provider 4257ms; provider 2ms; post-provider 694ms; response true
    - active window: metadata scans 10 (162.16ms total, max 37.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4257ms; provider 2ms; post-provider 694ms; unknown 2737.22ms; source plugins.metadata.scan 865.3ms; agent.prepare 654.48ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4710 ms | 660 ms | 4050 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260817-052255-0801d8/kova-agent-cold-warm-message-2c26dd1d-kova-260817-052255-0801d8/openclaw/timeline.jsonl |
  | warm | 4257 ms | 502 ms | 3755 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260817-052255-0801d8/kova-agent-cold-warm-message-2c26dd1d-kova-260817-052255-0801d8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 344 ms | 42 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 316 ms | 142 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 339 ms | 155 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 163 ms | 37 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260817-052255-0801d8-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260817-052255-0801d8-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260817-052255-0801d8-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260817-052255-0801d8/kova-gateway-performance-man-d48bd949-kova-260817-052255-0801d8
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260817-052255-0801d8/kova-agent-cold-warm-message-2c26dd1d-kova-260817-052255-0801d8

## Target Cleanup

- Runtime: `kova-local-mswsf9we-3xj-dea64ff3`
- Result: removed
- Duration: 432ms

