# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1222 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1394.6 MB, gateway 1222 MB, command-tree 1078 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1222 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1394.6 MB, gateway 1222 MB, command-tree 1078 MB |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261001-052646-6474ea` |
| Generated | 2026-10-01T05:30:06.271Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1222 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1394.6 MB, gateway 1222 MB, command-tree 1078 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 83 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (2ms), but OpenClaw spent 10658ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1445.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 83ms | 1222MB | n/a | 311.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 324.4% | 10674ms | 12048ms | 9508ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 83ms | 1222 MB | 2488 MB | n/a | n/a | gateway peak RSS 1222 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1394.6 MB, gateway 1222 MB, command-tree 1078 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1627.9 MB | 10674ms | 12048ms | warm provider was fast (2ms), but OpenClaw spent 10658ms before provider work. |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1554.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 363.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1445.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 324.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1078 MB (scenario gateway-performance/many-bundled-plugins); CPU 339% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1394.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 311.1% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1222 MB (scenario gateway-performance/many-bundled-plugins); CPU 311.1% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 582.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 207.7% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 407.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 179.8% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 350.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 200.3% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261001-052646-6474ea/kova-gateway-performance-man-d48bd949-kova-261001-052646-6474ea
Measurements:
- startup: listening 0ms; health 83ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 83ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 83ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1222 MB; tracked total 2488 MB; max CPU 311.1%; samples 111; roles gateway-tree 1394.6MB/311.1%, gateway 1222MB/311.1%, command-tree 1078MB/304.3%, status-cli 1078MB/304.3%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.control-ui-assets 1782.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 20/20/14
- Violations:
  - gateway peak RSS 1222 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1394.6 MB, gateway 1222 MB, command-tree 1078 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261001-052646-6474ea/kova-agent-cold-warm-message-2c26dd1d-kova-261001-052646-6474ea
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1445.5 MB; tracked total 1627.9 MB; max CPU 324.4%; samples 121; roles command-tree 1554.5MB/363.5%, agent-process 1445.5MB/324.4%, status-cli 1075.2MB/339%, agent-cli 203.5MB/193.1%; performance thresholds skipped 15 (instrumented)
- agent: turn 12048ms; cold/warm 10674ms/12048ms; cold-warm delta 0ms; pre-provider 10658ms; provider 2ms; metadata scans 10 (323.91ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 11979.3ms; max 12048ms; pre-provider p95 10600.5ms
- agent CLI attribution: cold known 6723ms / unattributed 2785ms; warm known 6865ms / unattributed 3793ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1984.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 53/47/14
- Violations:
  - warm provider was fast (2ms), but OpenClaw spent 10658ms before provider work.
- Agent turns:
  - cold: total 10674ms; pre-provider 9508ms; provider 162ms; post-provider 1004ms; response true
    - active window: metadata scans 5 (121.17ms total, max 68.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 9508ms; provider 162ms; post-provider 1004ms; unknown 4349.88ms; source agent.prepare 4683.86ms; plugins.metadata.scan 474.26ms
  - warm: total 12048ms; pre-provider 10658ms; provider 2ms; post-provider 1388ms; response true
    - active window: metadata scans 5 (202.74ms total, max 74.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10658ms; provider 2ms; post-provider 1388ms; unknown 5499.88ms; source agent.prepare 4683.86ms; plugins.metadata.scan 474.26ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 9508 ms | 6723 ms | 2785 ms | 162 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261001-052646-6474ea/kova-agent-cold-warm-message-2c26dd1d-kova-261001-052646-6474ea/openclaw/timeline.jsonl |
  | warm | 10658 ms | 6865 ms | 3793 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261001-052646-6474ea/kova-agent-cold-warm-message-2c26dd1d-kova-261001-052646-6474ea/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2705 ms | 1635 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2692 ms | 737 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 2475 ms | 1039 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 122 ms | 69 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x4 | 4 | 0 | 53 ms | 46 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3055 ms | 1985 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x8 | 8 | 0 | 2801 ms | 732 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 2209 ms | 1018 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x4 | 5 | 0 | 203 ms | 74 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 65 ms | 65 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261001-052646-6474ea-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261001-052646-6474ea-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261001-052646-6474ea-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261001-052646-6474ea/kova-gateway-performance-man-d48bd949-kova-261001-052646-6474ea
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261001-052646-6474ea/kova-agent-cold-warm-message-2c26dd1d-kova-261001-052646-6474ea

## Target Cleanup

- Runtime: `kova-local-mup3dk74-3sd-048e183b`
- Result: removed
- Duration: 561ms

