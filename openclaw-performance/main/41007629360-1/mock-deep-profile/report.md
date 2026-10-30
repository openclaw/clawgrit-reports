# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1507.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.3 MB, gateway 1507.2 MB, command-tree 1141.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1507.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.3 MB, gateway 1507.2 MB, command-tree 1141.6 MB |
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
| Run ID | `kova-261030-052019-dc76bb` |
| Generated | 2026-10-30T05:30:04.282Z |
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
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1507.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.3 MB, gateway 1507.2 MB, command-tree 1141.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 40 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1815.3 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 40 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 12326ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1931.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 40ms | 1507.2MB | n/a | 278.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 296.4% | 13178ms | 13776ms | 11274ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 40ms | 1507.2 MB | 3028.7 MB | n/a | n/a | gateway peak RSS 1507.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.3 MB, gateway 1507.2 MB, command-tree 1141.6 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2292.8 MB | 13178ms | 13776ms | warm provider was fast (1ms), but OpenClaw spent 12326ms before provider work. |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2220.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 372.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1931.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 296.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1315 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 367.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1815.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 310.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1507.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 278.9% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 577.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 224.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 494.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 180.2% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 449 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 222.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261030-052019-dc76bb/kova-gateway-performance-man-d48bd949-kova-261030-052019-dc76bb
Measurements:
- startup: listening 1ms; health 40ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 3
- health: startup p95 39ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 39ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1507.2 MB; tracked total 3028.7 MB; max CPU 278.9%; samples 108; roles gateway-tree 1815.3MB/310.8%, gateway 1507.2MB/278.9%, command-tree 1141.6MB/295.3%, status-cli 1141.6MB/295.3%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1660.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 23/23/12
- Violations:
  - gateway peak RSS 1507.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1815.3 MB, gateway 1507.2 MB, command-tree 1141.6 MB
  - gateway-tree peak RSS 1815.3 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261030-052019-dc76bb/kova-agent-cold-warm-message-2c26dd1d-kova-261030-052019-dc76bb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1931.4 MB; tracked total 2292.8 MB; max CPU 296.4%; samples 141; roles command-tree 2220.2MB/372.2%, agent-process 1931.4MB/296.4%, status-cli 1315MB/367.7%, agent-cli 449MB/222.6%; performance thresholds skipped 15 (instrumented)
- agent: turn 13776ms; cold/warm 13178ms/13776ms; cold-warm delta 0ms; pre-provider 12326ms; provider 1ms; metadata scans 14 (455.65ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 13746.1ms; max 13776ms; pre-provider p95 12273.4ms
- agent CLI attribution: cold known 6907ms / unattributed 4367ms; warm known 8458ms / unattributed 3868ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2589.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 74/45/4
- Violations:
  - warm provider was fast (1ms), but OpenClaw spent 12326ms before provider work.
- Agent turns:
  - cold: total 13178ms; pre-provider 11274ms; provider 2ms; post-provider 1902ms; response true
    - active window: metadata scans 7 (247.64ms total, max 79.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11274ms; provider 2ms; post-provider 1902ms; unknown 5711.56ms; source agent.prepare 4937.63ms; plugins.metadata.scan 624.81ms
  - warm: total 13776ms; pre-provider 12326ms; provider 1ms; post-provider 1449ms; response true
    - active window: metadata scans 7 (208.01ms total, max 62.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12326ms; provider 1ms; post-provider 1449ms; unknown 6763.56ms; source agent.prepare 4937.63ms; plugins.metadata.scan 624.81ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11274 ms | 6907 ms | 4367 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261030-052019-dc76bb/kova-agent-cold-warm-message-2c26dd1d-kova-261030-052019-dc76bb/openclaw/timeline.jsonl |
  | warm | 12326 ms | 8458 ms | 3868 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261030-052019-dc76bb/kova-agent-cold-warm-message-2c26dd1d-kova-261030-052019-dc76bb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3547 ms | 1137 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3148 ms | 1443 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2186 ms | 980 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 223 ms | 223 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 158 ms | 79 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4509 ms | 2590 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2966 ms | 948 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2755 ms | 973 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 223 ms | 223 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 208 ms | 63 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261030-052019-dc76bb-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261030-052019-dc76bb-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261030-052019-dc76bb-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261030-052019-dc76bb/kova-gateway-performance-man-d48bd949-kova-261030-052019-dc76bb
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261030-052019-dc76bb/kova-agent-cold-warm-message-2c26dd1d-kova-261030-052019-dc76bb

## Target Cleanup

- Runtime: `kova-local-mvuiwzji-3et-6ab20ec8`
- Result: removed
- Duration: 513ms

