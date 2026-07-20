# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 2 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260720-192149-968e14` |
| Generated | 2026-07-20T19:28:58.472Z |
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
| warning | OpenClaw | bundled-runtime-deps/missing-plugin-index | 3 OpenClaw diagnostics span(s) from a prior gateway PID were interrupted by an intentional restart | gateway.ready pid 19558; sidecars.total pid 19558 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| warning | OpenClaw | bundled-runtime-deps/missing-plugin-index | 3 OpenClaw diagnostics span(s) from a prior gateway PID were interrupted by an intentional restart | gateway.ready pid 20964; sidecars.total pid 20964 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 2475ms | 816.7MB | n/a | 141% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2311ms | 816.7MB | n/a | 135% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2529ms | 790.7MB | n/a | 149% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2950ms | 837.6MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.9% | 4135ms | 4034ms | 3891ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2708ms | 817.4MB | n/a | 149% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3087ms | 800.1 MB | 1470.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2288ms | 816.7 MB | 1331.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2475ms | 843.6 MB | 1433.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2706ms | 816.7 MB | 1367.3 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2311ms | 833.5 MB | 1418.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2202ms | 813 MB | 1402.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2334ms | 786.5 MB | 786.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2723ms | 790.7 MB | 795.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2529ms | 805.5 MB | 810.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2444ms | 838 MB | 1320.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2950ms | 837.6 MB | 1357.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3231ms | 806.8 MB | 1509.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 827.5 MB | 3755ms | 4034ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 850.7 MB | 4448ms | 4365ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 886.8 MB | 4135ms | 3994ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3211ms | 815 MB | 1496.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2661ms | 817.4 MB | 1484.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2708ms | 830.5 MB | 1540.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 886.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 886.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 886.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 684 MB (scenario gateway-performance/many-bundled-plugins); CPU 163.4% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 711.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 162.5% (scenario bundled-plugin-startup/fresh)
- gateway: RSS 843.6 MB (scenario fresh-install/fresh); CPU 153% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 843.6 MB (scenario fresh-install/fresh); CPU 153% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 554.6 MB (scenario fresh-install/onboarded-user); CPU 155% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-agent-cold-warm-message-8e2a29af-kova-260720-192149-968e14
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 827.5 MB; tracked total 827.5 MB; max CPU 160.8%; samples 13; roles agent-cli 827.5MB/160.8%, agent-process 827.5MB/160.8%, command-tree 827.5MB/160.8%, status-cli 580.9MB/145.7%
- agent: turn 4034ms; cold/warm 3755ms/4034ms; cold-warm delta 0ms; pre-provider 3756ms; provider 1ms; metadata scans 10 (263.08ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4020.05ms; max 4034ms; pre-provider p95 3744.1ms
- agent CLI attribution: cold known 111ms / unattributed 3407ms; warm known 152ms / unattributed 3604ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3755ms; pre-provider 3518ms; provider 3ms; post-provider 234ms; response true
    - active window: metadata scans 5 (111.95ms total, max 62.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3518ms; provider 3ms; post-provider 234ms; unknown 3149.16ms; source plugins.metadata.scan 368.84ms
  - warm: total 4034ms; pre-provider 3756ms; provider 1ms; post-provider 277ms; response true
    - active window: metadata scans 5 (151.13ms total, max 76.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3756ms; provider 1ms; post-provider 277ms; unknown 3387.16ms; source plugins.metadata.scan 368.84ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3518 ms | 111 ms | 3407 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-agent-cold-warm-message-8e2a29af-kova-260720-192149-968e14/openclaw/timeline.jsonl |
  | warm | 3756 ms | 152 ms | 3604 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-agent-cold-warm-message-8e2a29af-kova-260720-192149-968e14/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 111 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 152 ms | 76 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-agent-cold-warm-message-2ab680e0-kova-260720-192149-968e14
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 850.7 MB; tracked total 850.7 MB; max CPU 156.8%; samples 16; roles agent-cli 850.7MB/156.8%, command-tree 850.7MB/163.4%, agent-process 850.7MB/156.8%, status-cli 671.6MB/163.4%
- agent: turn 4448ms; cold/warm 4448ms/4365ms; cold-warm delta 83ms; pre-provider 4176ms; provider 4ms; metadata scans 10 (269ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4443.85ms; max 4448ms; pre-provider p95 4172.5ms
- agent CLI attribution: cold known 131ms / unattributed 4045ms; warm known 138ms / unattributed 3968ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 102.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4448ms; pre-provider 4176ms; provider 4ms; post-provider 268ms; response true
    - active window: metadata scans 5 (130.52ms total, max 65.26ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4176ms; provider 4ms; post-provider 268ms; unknown 3775.9ms; source plugins.metadata.scan 400.1ms
  - warm: total 4365ms; pre-provider 4106ms; provider 2ms; post-provider 257ms; response true
    - active window: metadata scans 5 (138.48ms total, max 71.96ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4106ms; provider 2ms; post-provider 257ms; unknown 3705.9ms; source plugins.metadata.scan 400.1ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4176 ms | 131 ms | 4045 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-agent-cold-warm-message-2ab680e0-kova-260720-192149-968e14/openclaw/timeline.jsonl |
  | warm | 4106 ms | 138 ms | 3968 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-agent-cold-warm-message-2ab680e0-kova-260720-192149-968e14/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 131 ms | 65 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 138 ms | 71 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-agent-cold-warm-message-67b331a3-kova-260720-192149-968e14
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 886.8 MB; tracked total 886.8 MB; max CPU 156.9%; samples 15; roles agent-cli 886.8MB/156.9%, command-tree 886.8MB/161.3%, agent-process 886.8MB/156.9%, status-cli 645.4MB/161.3%
- agent: turn 4135ms; cold/warm 4135ms/3994ms; cold-warm delta 141ms; pre-provider 3891ms; provider 3ms; metadata scans 10 (239.87ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4127.95ms; max 4135ms; pre-provider p95 3879.5ms
- agent CLI attribution: cold known 124ms / unattributed 3767ms; warm known 116ms / unattributed 3545ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4135ms; pre-provider 3891ms; provider 3ms; post-provider 241ms; response true
    - active window: metadata scans 5 (123.34ms total, max 57.4ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3891ms; provider 3ms; post-provider 241ms; unknown 3545.61ms; source plugins.metadata.scan 345.39ms
  - warm: total 3994ms; pre-provider 3661ms; provider 2ms; post-provider 331ms; response true
    - active window: metadata scans 5 (116.53ms total, max 65.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3661ms; provider 2ms; post-provider 331ms; unknown 3315.61ms; source plugins.metadata.scan 345.39ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3891 ms | 124 ms | 3767 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-agent-cold-warm-message-67b331a3-kova-260720-192149-968e14/openclaw/timeline.jsonl |
  | warm | 3661 ms | 116 ms | 3545 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-agent-cold-warm-message-67b331a3-kova-260720-192149-968e14/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 124 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 116 ms | 65 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-192149-968e14-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-192149-968e14-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260720-192149-968e14-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-fresh-install-fresh-r1-697fad55-kova-260720-192149-968e14
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-fresh-install-fresh-r2-da880701-kova-260720-192149-968e14
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-fresh-install-fresh-r3-82f8bdbd-kova-260720-192149-968e14
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-fresh-install-onboarded-9f99e904-kova-260720-192149-968e14
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-fresh-install-onboarded-f9c24855-kova-260720-192149-968e14
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-fresh-install-onboarded-fe872c26-kova-260720-192149-968e14
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260720-192149-968e14
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-bundled-runtime-deps-mi-39c08a4a-kova-260720-192149-968e14
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260720-192149-968e14/kova-bundled-runtime-deps-mi-150715ba-kova-260720-192149-968e14
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrtm29ke-40o-9742af5e`
- Result: removed
- Duration: 609ms

