# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 1 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260720-201325-2381df` |
| Generated | 2026-07-20T20:21:03.457Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 18 |
| Scenarios | 5 |
| States | 5 |
| PASS | 18 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| warning | OpenClaw | gateway-performance/many-bundled-plugins | 1 OpenClaw diagnostics span(s) from a prior gateway PID were interrupted by an intentional restart | plugins.metadata.scan pid 34481 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 2722ms | 809.3MB | n/a | 142% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2905ms | 818.1MB | n/a | 148% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2749ms | 810.8MB | n/a | 145% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3091ms | 817.3MB | n/a | 145% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 169.3% | 5234ms | 4763ms | 4789ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3049ms | 813.9MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3451ms | 809.3 MB | 1446.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2722ms | 808.8 MB | 1366.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2532ms | 830.8 MB | 1363.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2540ms | 818.1 MB | 1493.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2905ms | 829.1 MB | 1475.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3109ms | 817.8 MB | 1500 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3372ms | 813.6 MB | 818.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2710ms | 804.9 MB | 809.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2749ms | 810.8 MB | 815.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3370ms | 817.3 MB | 1537.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3091ms | 814.4 MB | 1344.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2607ms | 836 MB | 1396.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 830.8 MB | 4029ms | 4763ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 901.3 MB | 5365ms | 4688ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 881.2 MB | 5234ms | 4865ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2993ms | 813.9 MB | 1502.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3049ms | 812.5 MB | 1465.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3212ms | 817.1 MB | 1500.9 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 901.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 901.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 901.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 836 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario bundled-plugin-startup/fresh)
- plugin-cli: RSS 720.2 MB (scenario bundled-plugin-startup/fresh); CPU 169% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 836 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 689.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 167.5% (scenario fresh-install/onboarded-user)
- model-cli: RSS 519.8 MB (scenario fresh-install/fresh); CPU 163% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-agent-cold-warm-message-8e2a29af-kova-260720-201325-2381df
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 830.8 MB; tracked total 830.8 MB; max CPU 160.3%; samples 15; roles agent-cli 830.8MB/160.3%, agent-process 830.8MB/160.3%, command-tree 830.8MB/160.3%, status-cli 643.6MB/159.8%
- agent: turn 4763ms; cold/warm 4029ms/4763ms; cold-warm delta 0ms; pre-provider 4477ms; provider 2ms; metadata scans 10 (264.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4726.3ms; max 4763ms; pre-provider p95 4442.55ms
- agent CLI attribution: cold known 126ms / unattributed 3662ms; warm known 139ms / unattributed 4338ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 81.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4029ms; pre-provider 3788ms; provider 3ms; post-provider 238ms; response true
    - active window: metadata scans 5 (125.62ms total, max 60.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3788ms; provider 3ms; post-provider 238ms; unknown 3406.77ms; source plugins.metadata.scan 381.23ms
  - warm: total 4763ms; pre-provider 4477ms; provider 2ms; post-provider 284ms; response true
    - active window: metadata scans 5 (138.49ms total, max 67.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4477ms; provider 2ms; post-provider 284ms; unknown 4095.77ms; source plugins.metadata.scan 381.23ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3788 ms | 126 ms | 3662 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-agent-cold-warm-message-8e2a29af-kova-260720-201325-2381df/openclaw/timeline.jsonl |
  | warm | 4477 ms | 139 ms | 4338 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-agent-cold-warm-message-8e2a29af-kova-260720-201325-2381df/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 126 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 139 ms | 68 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-agent-cold-warm-message-2ab680e0-kova-260720-201325-2381df
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 901.3 MB; tracked total 901.3 MB; max CPU 169.3%; samples 17; roles agent-cli 901.3MB/169.3%, agent-process 901.3MB/169.3%, command-tree 901.3MB/169.3%, status-cli 672.3MB/165.8%
- agent: turn 5365ms; cold/warm 5365ms/4688ms; cold-warm delta 677ms; pre-provider 4986ms; provider 3ms; metadata scans 10 (301.77ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5331.15ms; max 5365ms; pre-provider p95 4951.35ms
- agent CLI attribution: cold known 167ms / unattributed 4819ms; warm known 136ms / unattributed 4157ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 80.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5365ms; pre-provider 4986ms; provider 3ms; post-provider 376ms; response true
    - active window: metadata scans 5 (165.57ms total, max 80.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4986ms; provider 3ms; post-provider 376ms; unknown 4549.48ms; source plugins.metadata.scan 436.52ms
  - warm: total 4688ms; pre-provider 4293ms; provider 2ms; post-provider 393ms; response true
    - active window: metadata scans 5 (136.2ms total, max 79.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4293ms; provider 2ms; post-provider 393ms; unknown 3856.48ms; source plugins.metadata.scan 436.52ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4986 ms | 167 ms | 4819 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-agent-cold-warm-message-2ab680e0-kova-260720-201325-2381df/openclaw/timeline.jsonl |
  | warm | 4293 ms | 136 ms | 4157 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-agent-cold-warm-message-2ab680e0-kova-260720-201325-2381df/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 167 ms | 81 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 136 ms | 79 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-agent-cold-warm-message-67b331a3-kova-260720-201325-2381df
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 881.2 MB; tracked total 881.2 MB; max CPU 174.5%; samples 17; roles agent-cli 881.2MB/174.5%, agent-process 881.2MB/174.5%, command-tree 881.2MB/174.5%, status-cli 650.9MB/159.3%
- agent: turn 5234ms; cold/warm 5234ms/4865ms; cold-warm delta 369ms; pre-provider 4789ms; provider 13ms; metadata scans 10 (292.69ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5215.55ms; max 5234ms; pre-provider p95 4781.8ms
- agent CLI attribution: cold known 162ms / unattributed 4627ms; warm known 132ms / unattributed 4513ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 90.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5234ms; pre-provider 4789ms; provider 13ms; post-provider 432ms; response true
    - active window: metadata scans 5 (161.87ms total, max 90.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4789ms; provider 13ms; post-provider 432ms; unknown 4396.67ms; source plugins.metadata.scan 392.33ms
  - warm: total 4865ms; pre-provider 4645ms; provider 2ms; post-provider 218ms; response true
    - active window: metadata scans 5 (130.82ms total, max 74.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4645ms; provider 2ms; post-provider 218ms; unknown 4252.67ms; source plugins.metadata.scan 392.33ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4789 ms | 162 ms | 4627 ms | 13 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-agent-cold-warm-message-67b331a3-kova-260720-201325-2381df/openclaw/timeline.jsonl |
  | warm | 4645 ms | 132 ms | 4513 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-agent-cold-warm-message-67b331a3-kova-260720-201325-2381df/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 162 ms | 91 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 132 ms | 75 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-201325-2381df-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-201325-2381df-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-201325-2381df-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-fresh-install-fresh-r1-697fad55-kova-260720-201325-2381df
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-fresh-install-fresh-r2-da880701-kova-260720-201325-2381df
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-fresh-install-fresh-r3-82f8bdbd-kova-260720-201325-2381df
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-fresh-install-onboarded-9f99e904-kova-260720-201325-2381df
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-fresh-install-onboarded-f9c24855-kova-260720-201325-2381df
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-fresh-install-onboarded-fe872c26-kova-260720-201325-2381df
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260720-201325-2381df
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-bundled-runtime-deps-mi-39c08a4a-kova-260720-201325-2381df
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-201325-2381df/kova-bundled-runtime-deps-mi-150715ba-kova-260720-201325-2381df
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrtnwlxd-40z-e2e4161c`
- Result: removed
- Duration: 576ms

