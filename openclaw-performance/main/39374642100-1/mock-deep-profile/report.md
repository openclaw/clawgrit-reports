# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1913.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2051.6 MB, gateway 1913.6 MB, command-tree 1046.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1913.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2051.6 MB, gateway 1913.6 MB, command-tree 1046.1 MB |
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
| Run ID | `kova-261020-052507-bbe591` |
| Generated | 2026-10-20T05:35:23.160Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1913.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2051.6 MB, gateway 1913.6 MB, command-tree 1046.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 179 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2051.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 179 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 16570ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2101.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (113ms), but OpenClaw spent 16345ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2101.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 179ms | 1913.6MB | n/a | 270.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 338.4% | 17936ms | 16570ms | 16345ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 179ms | 1913.6 MB | 2756.6 MB | n/a | n/a | gateway peak RSS 1913.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2051.6 MB, gateway 1913.6 MB, command-tree 1046.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2373.1 MB | 17936ms | 16570ms | warm agent turn took 16570ms, over threshold 15000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2299.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 399.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2101.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 338.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 2051.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 318.4% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 98.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 338.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1913.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 270.6% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1159.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 334.3% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 649.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 204.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 504.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 184% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261020-052507-bbe591/kova-gateway-performance-man-d48bd949-kova-261020-052507-bbe591
Measurements:
- startup: listening 1ms; health 179ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 178ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 178ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1913.6 MB; tracked total 2756.6 MB; max CPU 270.6%; samples 122; roles gateway-tree 2051.6MB/318.4%, command-tree 1046.1MB/327.5%, gateway 1913.6MB/270.6%, status-cli 1046.1MB/327.5%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2040ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 29/29/15
- Violations:
  - gateway peak RSS 1913.6 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2051.6 MB, gateway 1913.6 MB, command-tree 1046.1 MB
  - gateway-tree peak RSS 2051.6 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261020-052507-bbe591/kova-agent-cold-warm-message-2c26dd1d-kova-261020-052507-bbe591
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 2101.3 MB; tracked total 2373.1 MB; max CPU 338.4%; samples 173; roles command-tree 2299.2MB/399.9%, agent-process 2101.3MB/338.4%, status-cli 1159.8MB/334.3%, tool-runtime 98.7MB/338.4%; performance thresholds skipped 15 (instrumented)
- agent: turn 17936ms; cold/warm 17936ms/16570ms; cold-warm delta 1366ms; pre-provider 16345ms; provider 113ms; metadata scans 14 (467.34ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 17867.7ms; max 17936ms; pre-provider p95 16291.8ms
- agent CLI attribution: cold known 9821ms / unattributed 6524ms; warm known 10196ms / unattributed 5085ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2964.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 76/46/4
- Violations:
  - warm agent turn took 16570ms, over threshold 15000ms
  - cold provider was fast (113ms), but OpenClaw spent 16345ms before provider work.
- Agent turns:
  - cold: total 17936ms; pre-provider 16345ms; provider 113ms; post-provider 1478ms; response true
    - active window: metadata scans 7 (279.55ms total, max 108.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 16345ms; provider 113ms; post-provider 1478ms; unknown 6068.48ms; source agent.prepare 9685.19ms; plugins.metadata.scan 591.33ms
  - warm: total 16570ms; pre-provider 15281ms; provider 1ms; post-provider 1288ms; response true
    - active window: metadata scans 7 (187.79ms total, max 71.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 15281ms; provider 1ms; post-provider 1288ms; unknown 5004.48ms; source agent.prepare 9685.19ms; plugins.metadata.scan 591.33ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 16345 ms | 9821 ms | 6524 ms | 113 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261020-052507-bbe591/kova-agent-cold-warm-message-2c26dd1d-kova-261020-052507-bbe591/openclaw/timeline.jsonl |
  | warm | 15281 ms | 10196 ms | 5085 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261020-052507-bbe591/kova-agent-cold-warm-message-2c26dd1d-kova-261020-052507-bbe591/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4902 ms | 1813 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4384 ms | 2109 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3105 ms | 907 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 279 ms | 108 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 265 ms | 265 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 47 ms | 47 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 5032 ms | 2964 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4785 ms | 1489 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2890 ms | 855 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 260 ms | 260 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 189 ms | 71 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 38 ms | 38 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261020-052507-bbe591-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261020-052507-bbe591-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261020-052507-bbe591-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261020-052507-bbe591/kova-gateway-performance-man-d48bd949-kova-261020-052507-bbe591
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261020-052507-bbe591/kova-agent-cold-warm-message-2c26dd1d-kova-261020-052507-bbe591

## Target Cleanup

- Runtime: `kova-local-mvg8omld-3dn-db9943a0`
- Result: removed
- Duration: 474ms

