# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm agent turn took 15954ms, over threshold 15000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm agent turn took 15954ms, over threshold 15000ms |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 2 (PASS:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261106-051813-978061` |
| Generated | 2026-11-06T05:29:34.729Z |
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
| PASS | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree max CPU interval \[390.2%, 469.8%\] crosses threshold 450%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2012 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 15954ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2012 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (295ms), but OpenClaw spent 14616ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2012 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 153ms | 1616.6MB | n/a | 276.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 414.6% | 14801ms | 15954ms | 13347ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 153ms | 1616.6 MB | 2712 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2286.3 MB | 14801ms | 15954ms | command-tree max CPU interval \[390.2%, 469.8%\] crosses threshold 450%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2212.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 469.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2012 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 414.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1720.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 292.2% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 98.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 414.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1616.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 276.2% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1279.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 381.6% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 511 MB (scenario gateway-performance/many-bundled-plugins); CPU 184.8% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 466.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 200.7% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261106-051813-978061/kova-agent-cold-warm-message-2c26dd1d-kova-261106-051813-978061
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 2012 MB; tracked total 2286.3 MB; max CPU 414.6%; samples 159; roles command-tree 2212.3MB/469.8%, agent-process 2012MB/414.6%, status-cli 1279.1MB/381.6%, tool-runtime 98.2MB/414.6%; performance thresholds skipped 15 (instrumented)
- agent: turn 15954ms; cold/warm 14801ms/15954ms; cold-warm delta 0ms; pre-provider 14616ms; provider 295ms; metadata scans 14 (433.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 15896.35ms; max 15954ms; pre-provider p95 14552.55ms
- agent CLI attribution: cold known 8103ms / unattributed 5244ms; warm known 10091ms / unattributed 4525ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2966.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 71/45/3
- Violations:
  - command-tree max CPU interval \[390.2%, 469.8%\] crosses threshold 450%; CPU measurement is inconclusive
  - warm agent turn took 15954ms, over threshold 15000ms
  - warm provider was fast (295ms), but OpenClaw spent 14616ms before provider work.
- Agent turns:
  - cold: total 14801ms; pre-provider 13347ms; provider 3ms; post-provider 1451ms; response true
    - active window: metadata scans 7 (208.64ms total, max 71.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13347ms; provider 3ms; post-provider 1451ms; unknown 6624.9ms; source agent.prepare 6112.33ms; plugins.metadata.scan 609.77ms
  - warm: total 15954ms; pre-provider 14616ms; provider 295ms; post-provider 1043ms; response true
    - active window: metadata scans 7 (224.8ms total, max 71.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 14616ms; provider 295ms; post-provider 1043ms; unknown 7893.9ms; source agent.prepare 6112.33ms; plugins.metadata.scan 609.77ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 13347 ms | 8103 ms | 5244 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261106-051813-978061/kova-agent-cold-warm-message-2c26dd1d-kova-261106-051813-978061/openclaw/timeline.jsonl |
  | warm | 14616 ms | 10091 ms | 4525 ms | 295 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261106-051813-978061/kova-agent-cold-warm-message-2c26dd1d-kova-261106-051813-978061/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 4227 ms | 1377 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3467 ms | 1581 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2770 ms | 1121 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 262 ms | 262 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 208 ms | 71 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 4959 ms | 2967 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 4160 ms | 1411 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3345 ms | 1120 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 280 ms | 280 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 224 ms | 71 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 25 ms | 25 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261106-051813-978061-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261106-051813-978061-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261106-051813-978061-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261106-051813-978061/kova-gateway-performance-man-d48bd949-kova-261106-051813-978061
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261106-051813-978061/kova-agent-cold-warm-message-2c26dd1d-kova-261106-051813-978061

## Target Cleanup

- Runtime: `kova-local-mw4ix8nk-49w-ca02fbbb`
- Result: removed
- Duration: 559ms

