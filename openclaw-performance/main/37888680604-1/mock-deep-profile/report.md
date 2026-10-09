# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1450 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1736.9 MB, gateway 1450 MB, command-tree 1178.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1450 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1736.9 MB, gateway 1450 MB, command-tree 1178.1 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261009-053020-24df8c` |
| Generated | 2026-10-09T05:40:40.334Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1450 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1736.9 MB, gateway 1450 MB, command-tree 1178.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 382 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1736.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 382 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 21729ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1865 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 19843ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1865 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 382ms | 1450MB | n/a | 230.7% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 327.3% | 20300ms | 21729ms | 18204ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 382ms | 1450 MB | 2788.9 MB | n/a | n/a | gateway peak RSS 1450 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1736.9 MB, gateway 1450 MB, command-tree 1178.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2047.7 MB | 20300ms | 21729ms | warm agent turn took 21729ms, over threshold 15000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1973.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 362.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 213.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 362.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1865 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 327.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1736.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 280.2% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1450 MB (scenario gateway-performance/many-bundled-plugins); CPU 230.7% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1178.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 307.3% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 629.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 231.4% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 419.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 196.7% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261009-053020-24df8c/kova-gateway-performance-man-d48bd949-kova-261009-053020-24df8c
Measurements:
- startup: listening 1ms; health 382ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 381ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 381ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1450 MB; tracked total 2788.9 MB; max CPU 230.7%; samples 147; roles gateway-tree 1736.9MB/280.2%, gateway 1450MB/230.7%, command-tree 1178.1MB/270.4%, status-cli 1178.1MB/270.4%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1708.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 18/18/11
- Violations:
  - gateway peak RSS 1450 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1736.9 MB, gateway 1450 MB, command-tree 1178.1 MB
  - gateway-tree peak RSS 1736.9 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261009-053020-24df8c/kova-agent-cold-warm-message-2c26dd1d-kova-261009-053020-24df8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1865 MB; tracked total 2047.7 MB; max CPU 327.3%; samples 212; roles command-tree 1973.6MB/362.5%, agent-cli 213.4MB/362.5%, agent-process 1865MB/327.3%, status-cli 1156.2MB/307.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 21729ms; cold/warm 20300ms/21729ms; cold-warm delta 0ms; pre-provider 19843ms; provider 1ms; metadata scans 10 (426.65ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 21657.55ms; max 21729ms; pre-provider p95 19761.05ms
- agent CLI attribution: cold known 9509ms / unattributed 8695ms; warm known 10628ms / unattributed 9215ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3357.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 68/50/10
- Violations:
  - warm agent turn took 21729ms, over threshold 15000ms
  - warm provider was fast (1ms), but OpenClaw spent 19843ms before provider work.
- Agent turns:
  - cold: total 20300ms; pre-provider 18204ms; provider 14ms; post-provider 2082ms; response true
    - active window: metadata scans 5 (210.16ms total, max 96.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 18204ms; provider 14ms; post-provider 2082ms; unknown 10262.16ms; source agent.prepare 7269.38ms; plugins.metadata.scan 672.46ms
  - warm: total 21729ms; pre-provider 19843ms; provider 1ms; post-provider 1885ms; response true
    - active window: metadata scans 5 (216.49ms total, max 89.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 19843ms; provider 1ms; post-provider 1885ms; unknown 11901.16ms; source agent.prepare 7269.38ms; plugins.metadata.scan 672.46ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 18204 ms | 9509 ms | 8695 ms | 14 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261009-053020-24df8c/kova-agent-cold-warm-message-2c26dd1d-kova-261009-053020-24df8c/openclaw/timeline.jsonl |
  | warm | 19843 ms | 10628 ms | 9215 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261009-053020-24df8c/kova-agent-cold-warm-message-2c26dd1d-kova-261009-053020-24df8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4427 ms | 2386 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 3916 ms | 1773 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3226 ms | 843 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 211 ms | 96 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x4 | 4 | 0 | 24 ms | 9 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 5044 ms | 3358 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 4190 ms | 1139 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 3353 ms | 1618 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 215 ms | 90 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 42 ms | 42 ms |
  | warm | `plugins.metadata.freeze` | `cli.command-startup` x4 | 4 | 0 | 29 ms | 11 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261009-053020-24df8c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261009-053020-24df8c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261009-053020-24df8c-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261009-053020-24df8c/kova-gateway-performance-man-d48bd949-kova-261009-053020-24df8c
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261009-053020-24df8c/kova-agent-cold-warm-message-2c26dd1d-kova-261009-053020-24df8c

## Target Cleanup

- Runtime: `kova-local-mv0j0z55-3tj-49e0d115`
- Result: removed
- Duration: 659ms

