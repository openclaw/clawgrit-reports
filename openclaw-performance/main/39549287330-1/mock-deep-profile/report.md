# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1936.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2139.4 MB, gateway 1936.7 MB, command-tree 1030.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1936.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2139.4 MB, gateway 1936.7 MB, command-tree 1030.9 MB |
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
| Run ID | `kova-261021-052535-926f25` |
| Generated | 2026-10-21T05:35:31.183Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1936.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2139.4 MB, gateway 1936.7 MB, command-tree 1030.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 59 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2139.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 59 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 16053ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2153.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (505ms), but OpenClaw spent 14260ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2153.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 59ms | 1936.7MB | n/a | 276.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 329.2% | 14951ms | 16053ms | 13694ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 59ms | 1936.7 MB | 2792.3 MB | n/a | n/a | gateway peak RSS 1936.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2139.4 MB, gateway 1936.7 MB, command-tree 1030.9 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2423.2 MB | 14951ms | 16053ms | warm agent turn took 16053ms, over threshold 15000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2351 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 393.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2153.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 329.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 2139.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 312% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 99.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 329.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1936.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 276.1% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1225.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 320.3% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 649.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 216.6% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 488.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 184% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261021-052535-926f25/kova-gateway-performance-man-d48bd949-kova-261021-052535-926f25
Measurements:
- startup: listening 0ms; health 59ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 59ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 59ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1936.7 MB; tracked total 2792.3 MB; max CPU 276.1%; samples 120; roles gateway-tree 2139.4MB/312%, command-tree 1030.9MB/320.3%, gateway 1936.7MB/276.1%, status-cli 1030.9MB/320.3%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2099.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 29/29/15
- Violations:
  - gateway peak RSS 1936.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2139.4 MB, gateway 1936.7 MB, command-tree 1030.9 MB
  - gateway-tree peak RSS 2139.4 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261021-052535-926f25/kova-agent-cold-warm-message-2c26dd1d-kova-261021-052535-926f25
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 2153.3 MB; tracked total 2423.2 MB; max CPU 329.2%; samples 160; roles command-tree 2351MB/393.2%, agent-process 2153.3MB/329.2%, status-cli 1225.9MB/312%, tool-runtime 99.2MB/329.2%; performance thresholds skipped 15 (instrumented)
- agent: turn 16053ms; cold/warm 14951ms/16053ms; cold-warm delta 0ms; pre-provider 14260ms; provider 505ms; metadata scans 14 (463.08ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15997.9ms; max 16053ms; pre-provider p95 14231.7ms
- agent CLI attribution: cold known 8684ms / unattributed 5010ms; warm known 10329ms / unattributed 3931ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 3048.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 78/44/4
- Violations:
  - warm agent turn took 16053ms, over threshold 15000ms
  - warm provider was fast (505ms), but OpenClaw spent 14260ms before provider work.
- Agent turns:
  - cold: total 14951ms; pre-provider 13694ms; provider 2ms; post-provider 1255ms; response true
    - active window: metadata scans 7 (217.98ms total, max 73.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13694ms; provider 2ms; post-provider 1255ms; unknown 3999.1ms; source agent.prepare 9109.18ms; plugins.metadata.scan 585.72ms
  - warm: total 16053ms; pre-provider 14260ms; provider 505ms; post-provider 1288ms; response true
    - active window: metadata scans 7 (245.1ms total, max 75.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14260ms; provider 505ms; post-provider 1288ms; unknown 4565.1ms; source agent.prepare 9109.18ms; plugins.metadata.scan 585.72ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 13694 ms | 8684 ms | 5010 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261021-052535-926f25/kova-agent-cold-warm-message-2c26dd1d-kova-261021-052535-926f25/openclaw/timeline.jsonl |
  | warm | 14260 ms | 10329 ms | 3931 ms | 505 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261021-052535-926f25/kova-agent-cold-warm-message-2c26dd1d-kova-261021-052535-926f25/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4480 ms | 1574 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3694 ms | 1769 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2945 ms | 953 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 247 ms | 247 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 217 ms | 74 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 5284 ms | 3049 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 4628 ms | 1617 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 2909 ms | 850 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 264 ms | 264 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 246 ms | 76 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261021-052535-926f25-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261021-052535-926f25-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261021-052535-926f25-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261021-052535-926f25/kova-gateway-performance-man-d48bd949-kova-261021-052535-926f25
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261021-052535-926f25/kova-agent-cold-warm-message-2c26dd1d-kova-261021-052535-926f25

## Target Cleanup

- Runtime: `kova-local-mvho52q3-3el-eba29bc0`
- Result: removed
- Duration: 533ms

