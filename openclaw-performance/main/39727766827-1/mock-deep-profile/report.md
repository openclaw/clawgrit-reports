# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1850.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2068.5 MB, gateway 1850.3 MB, command-tree 1069.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1850.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2068.5 MB, gateway 1850.3 MB, command-tree 1069.6 MB |
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
| Run ID | `kova-261022-052459-574c52` |
| Generated | 2026-10-22T05:35:51.681Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1850.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2068.5 MB, gateway 1850.3 MB, command-tree 1069.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 19 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2068.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 19 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 20065ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2099.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1184ms), but OpenClaw spent 17193ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2099.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 19ms | 1850.3MB | n/a | 268.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 337.9% | 19236ms | 20065ms | 17562ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 19ms | 1850.3 MB | 3129.9 MB | n/a | n/a | gateway peak RSS 1850.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2068.5 MB, gateway 1850.3 MB, command-tree 1069.6 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2369.5 MB | 19236ms | 20065ms | warm agent turn took 20065ms, over threshold 15000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2297.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 397.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2099.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 337.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 2068.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 316.7% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 80.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 337.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1850.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 268.6% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1124.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 332.2% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 622.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 230.7% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 498.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 184.3% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261022-052459-574c52/kova-gateway-performance-man-d48bd949-kova-261022-052459-574c52
Measurements:
- startup: listening 1ms; health 19ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 18ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 18ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1850.3 MB; tracked total 3129.9 MB; max CPU 268.6%; samples 138; roles gateway-tree 2068.5MB/316.7%, command-tree 1069.6MB/332.2%, gateway 1850.3MB/268.6%, status-cli 1069.6MB/332.2%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2710.13ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 28/28/15
- Violations:
  - gateway peak RSS 1850.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2068.5 MB, gateway 1850.3 MB, command-tree 1069.6 MB
  - gateway-tree peak RSS 2068.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261022-052459-574c52/kova-agent-cold-warm-message-2c26dd1d-kova-261022-052459-574c52
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 2099.1 MB; tracked total 2369.5 MB; max CPU 337.9%; samples 197; roles command-tree 2297.2MB/397.8%, agent-process 2099.1MB/337.9%, status-cli 1124.2MB/312.7%, tool-runtime 80.7MB/337.9%; performance thresholds skipped 15 (instrumented)
- agent: turn 20065ms; cold/warm 19236ms/20065ms; cold-warm delta 0ms; pre-provider 17193ms; provider 1184ms; metadata scans 14 (589.07ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 20023.55ms; max 20065ms; pre-provider p95 17543.55ms
- agent CLI attribution: cold known 11043ms / unattributed 6519ms; warm known 12779ms / unattributed 4414ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3632.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 77/44/4
- Violations:
  - warm agent turn took 20065ms, over threshold 15000ms
  - warm provider was fast (1184ms), but OpenClaw spent 17193ms before provider work.
- Agent turns:
  - cold: total 19236ms; pre-provider 17562ms; provider 2ms; post-provider 1672ms; response true
    - active window: metadata scans 7 (300.91ms total, max 104.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 17562ms; provider 2ms; post-provider 1672ms; unknown 5457.85ms; source agent.prepare 11358.85ms; plugins.metadata.scan 745.3ms
  - warm: total 20065ms; pre-provider 17193ms; provider 1184ms; post-provider 1688ms; response true
    - active window: metadata scans 7 (288.16ms total, max 94.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 17193ms; provider 1184ms; post-provider 1688ms; unknown 5088.85ms; source agent.prepare 11358.85ms; plugins.metadata.scan 745.3ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 17562 ms | 11043 ms | 6519 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261022-052459-574c52/kova-agent-cold-warm-message-2c26dd1d-kova-261022-052459-574c52/openclaw/timeline.jsonl |
  | warm | 17193 ms | 12779 ms | 4414 ms | 1184 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261022-052459-574c52/kova-agent-cold-warm-message-2c26dd1d-kova-261022-052459-574c52/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 5229 ms | 1910 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4801 ms | 2284 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 3977 ms | 1262 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 305 ms | 305 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 301 ms | 104 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 60 ms | 60 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 6473 ms | 3632 ms |
  | warm | `agent.prepare` | `agent.prepare` x12 | 12 | 0 | 6000 ms | 1893 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3587 ms | 1025 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 314 ms | 314 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 289 ms | 95 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261022-052459-574c52-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261022-052459-574c52-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261022-052459-574c52-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261022-052459-574c52/kova-gateway-performance-man-d48bd949-kova-261022-052459-574c52
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261022-052459-574c52/kova-agent-cold-warm-message-2c26dd1d-kova-261022-052459-574c52

## Target Cleanup

- Runtime: `kova-local-mvj3k60z-3dr-391ae389`
- Result: removed
- Duration: 586ms

