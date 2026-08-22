# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1104 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104 MB, gateway-tree 1035.7 MB, command-tree 601 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1104 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104 MB, gateway-tree 1035.7 MB, command-tree 601 MB |
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
| Run ID | `kova-260822-051943-e211a2` |
| Generated | 2026-08-22T05:21:52.791Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1104 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104 MB, gateway-tree 1035.7 MB, command-tree 601 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5347 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 5347ms | 1104MB | n/a | 146% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 155% | 5555ms | 5180ms | 4946ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5347ms | 1104 MB | 1697.3 MB | n/a | n/a | gateway peak RSS 1104 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104 MB, gateway-tree 1035.7 MB, command-tree 601 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1397.9 MB | 5555ms | 5180ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1325.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 210% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 566.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 210% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1119.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1104 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 800.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 190.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1035.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 587.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 458.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260822-051943-e211a2/kova-gateway-performance-man-d48bd949-kova-260822-051943-e211a2
Measurements:
- startup: listening 4551ms; health 5347ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures 70; final failures 0; slowest startup-sample/cold-start 796ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1104 MB; tracked total 1697.3 MB; max CPU 146%; samples 36; roles gateway 1104MB/146%, command-tree 601MB/151%, gateway-tree 1035.7MB/146%, model-cli 587.7MB/151%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 689.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 3/3/3
- Violations:
  - gateway peak RSS 1104 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104 MB, gateway-tree 1035.7 MB, command-tree 601 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260822-051943-e211a2/kova-agent-cold-warm-message-2c26dd1d-kova-260822-051943-e211a2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1119.2 MB; tracked total 1397.9 MB; max CPU 155%; samples 57; roles command-tree 1325.8MB/210%, agent-cli 566.5MB/210%, agent-process 1119.2MB/155%, status-cli 800.8MB/190.9%; performance thresholds skipped 15 (instrumented)
- agent: turn 5555ms; cold/warm 5555ms/5180ms; cold-warm delta 375ms; pre-provider 4946ms; provider 2ms; metadata scans 70 (1071.9ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5536.25ms; max 5555ms; pre-provider p95 4926.4ms
- agent CLI attribution: cold known 944ms / unattributed 4002ms; warm known 722ms / unattributed 3832ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1773.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 5555ms; pre-provider 4946ms; provider 2ms; post-provider 607ms; response true
    - active window: metadata scans 41 (630.36ms total, max 47.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4946ms; provider 2ms; post-provider 607ms; unknown 2898.71ms; source plugins.metadata.scan 1402.68ms; agent.prepare 644.61ms
  - warm: total 5180ms; pre-provider 4554ms; provider 0ms; post-provider 626ms; response true
    - active window: metadata scans 29 (441.54ms total, max 35.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4554ms; provider 0ms; post-provider 626ms; unknown 2506.71ms; source plugins.metadata.scan 1402.68ms; agent.prepare 644.61ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4946 ms | 944 ms | 4002 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260822-051943-e211a2/kova-agent-cold-warm-message-2c26dd1d-kova-260822-051943-e211a2/openclaw/timeline.jsonl |
  | warm | 4554 ms | 722 ms | 3832 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260822-051943-e211a2/kova-agent-cold-warm-message-2c26dd1d-kova-260822-051943-e211a2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 605 ms | 47 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 339 ms | 185 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 422 ms | 36 ms |
  | warm | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 300 ms | 168 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260822-051943-e211a2-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260822-051943-e211a2-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260822-051943-e211a2-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260822-051943-e211a2/kova-gateway-performance-man-d48bd949-kova-260822-051943-e211a2
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260822-051943-e211a2/kova-agent-cold-warm-message-2c26dd1d-kova-260822-051943-e211a2

## Target Cleanup

- Runtime: `kova-local-mt3xifbm-41d-d2ab8d8e`
- Result: removed
- Duration: 428ms

