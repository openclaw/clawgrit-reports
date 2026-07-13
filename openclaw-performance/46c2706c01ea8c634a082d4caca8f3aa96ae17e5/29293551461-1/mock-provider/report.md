# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 925.5 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 925.5 MB, agent-process 925.5 MB, command-tree 925.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 925.5 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 925.5 MB, agent-process 925.5 MB, command-tree 925.5 MB |
| Blocking findings | 11 |
| Warnings | 0 |
| Records | 18 (FAIL:7, PASS:11) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 241 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260713-233736-0f3350` |
| Generated | 2026-07-13T23:45:01.326Z |
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
| FAIL | 7 |
| PASS | 11 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | fresh-install/fresh | plugin-cli peak RSS 849.4 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 3749 |
| fail | OpenClaw | fresh-install/fresh | plugin-cli peak RSS 844.1 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 2961 |
| fail | OpenClaw | fresh-install/fresh | plugin-cli peak RSS 824.5 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 2965 |
| fail | OpenClaw | fresh-install/onboarded-user | plugin-cli peak RSS 824.6 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 3496 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | plugin-cli peak RSS 817.3 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 3458 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 925.5 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 925.5 MB, agent-process 925.5 MB, command-tree 925.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 925.5 |
| info | Kova | report | 5 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 2965ms | 835.8MB | n/a | 158% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:2, FAIL:1 | 3496ms | 834.5MB | n/a | 160% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3833ms | 822.6MB | n/a | 158% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:2, FAIL:1 | 3458ms | 834MB | n/a | 162% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:1, FAIL:2 | n/a | 0MB | n/a | 169.4% | 3879ms | 3851ms | 3703ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3541ms | 833.1MB | n/a | 142% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 3749ms | 820.6 MB | 1669.9 MB | n/a | n/a | plugin-cli peak RSS 849.4 MB exceeded threshold 800 MB |
| 2 | FAIL | fresh-install/fresh |  | 2961ms | 835.8 MB | 1676.9 MB | n/a | n/a | plugin-cli peak RSS 844.1 MB exceeded threshold 800 MB |
| 3 | FAIL | fresh-install/fresh |  | 2965ms | 840.5 MB | 1665 MB | n/a | n/a | plugin-cli peak RSS 824.5 MB exceeded threshold 800 MB |
| 1 | PASS | fresh-install/onboarded-user |  | 3634ms | 834.5 MB | 1623.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2896ms | 835.3 MB | 1628.3 MB | n/a | n/a |  |
| 3 | FAIL | fresh-install/onboarded-user |  | 3496ms | 833.1 MB | 1657.6 MB | n/a | n/a | plugin-cli peak RSS 824.6 MB exceeded threshold 800 MB |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3841ms | 819.9 MB | 824.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3833ms | 828.4 MB | 849.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3348ms | 822.6 MB | 827.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3437ms | 834 MB | 1609.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3502ms | 832.8 MB | 1621.6 MB | n/a | n/a |  |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 3458ms | 840.6 MB | 1645.3 MB | n/a | n/a | plugin-cli peak RSS 817.3 MB exceeded threshold 800 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 845.4 MB | 3879ms | 3777ms |  |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 925.5 MB | 3990ms | 4354ms | agent-cli peak RSS 925.5 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 925.5 MB, agent-process 925.5 MB, command-tree 925.5 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 921 MB | 3788ms | 3851ms | agent-cli peak RSS 921 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 921 MB, agent-process 921 MB, command-tree 921 MB |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3647ms | 833 MB | 1625 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3541ms | 833.1 MB | 1610.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3245ms | 833.5 MB | 1624.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 925.5 MB; CPU 190%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 925.5 MB; CPU 174.3%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 925.5 MB; CPU 174.3%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 849.4 MB; CPU 173.5%; scenario fresh-install/fresh
- gateway: RSS 840.6 MB; CPU 166%; scenario bundled-plugin-startup/fresh
- gateway-tree: RSS 840.5 MB; CPU 166%; scenario fresh-install/fresh
- status-cli: RSS 839.7 MB; CPU 176.8%; scenario fresh-install/fresh
- model-cli: RSS 525.6 MB; CPU 190%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-fresh-r1-697fad55-kova-260713-233736-0f3350
Measurements:
- startup: listening 3530ms; health 3749ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 219ms; post-ready p95 3ms; failures 14; final failures 0; slowest startup-sample/provision 219ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 820.6 MB; tracked total 1669.9 MB; max CPU 153%; samples 19; roles command-tree 849.4MB/163.9%, plugin-cli 849.4MB/163.9%, gateway 820.6MB/153%, gateway-tree 820.5MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 360.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 849.4 MB exceeded threshold 800 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-fresh-r2-da880701-kova-260713-233736-0f3350
Measurements:
- startup: listening 2766ms; health 2961ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 195ms; post-ready p95 3ms; failures 11; final failures 0; slowest startup-sample/provision 195ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 835.8 MB; tracked total 1676.9 MB; max CPU 158%; samples 19; roles command-tree 844.1MB/165%, plugin-cli 844.1MB/165%, status-cli 839.7MB/159.9%, gateway 835.8MB/158%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 332.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 844.1 MB exceeded threshold 800 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-fresh-r3-82f8bdbd-kova-260713-233736-0f3350
Measurements:
- startup: listening 2769ms; health 2965ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 196ms; post-ready p95 5ms; failures 11; final failures 0; slowest startup-sample/provision 196ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 840.5 MB; tracked total 1665 MB; max CPU 159%; samples 19; roles gateway 840.5MB/159%, gateway-tree 840.5MB/159%, command-tree 829.8MB/190%, status-cli 829.8MB/169.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 342.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 824.5 MB exceeded threshold 800 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-onboarded-fe872c26-kova-260713-233736-0f3350
Measurements:
- startup: listening 3019ms; health 3496ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 477ms; post-ready p95 4ms; failures 12; final failures 0; slowest startup-sample/provision 477ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 833.1 MB; tracked total 1657.6 MB; max CPU 160%; samples 20; roles gateway 833.1MB/160%, gateway-tree 833.1MB/160%, command-tree 824.6MB/179%, plugin-cli 824.6MB/171.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 455.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 824.6 MB exceeded threshold 800 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-bundled-plugin-startup-5377119f-kova-260713-233736-0f3350
Measurements:
- startup: listening 3036ms; health 3458ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 402ms; post-ready p95 88ms; failures 22; final failures 0; slowest startup-sample/restart 422ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 840.6 MB; tracked total 1645.3 MB; max CPU 150%; samples 14; roles gateway 840.6MB/150%, gateway-tree 833.1MB/139%, command-tree 817.3MB/171%, plugin-cli 817.3MB/171%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 436.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 817.3 MB exceeded threshold 800 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-agent-cold-warm-message-8e2a29af-kova-260713-233736-0f3350
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 845.4 MB; tracked total 845.4 MB; max CPU 169.4%; samples 14; roles agent-cli 845.4MB/169.4%, agent-process 845.4MB/169.4%, command-tree 845.4MB/172.4%, status-cli 750.9MB/172.4%
- agent: turn 3879ms; cold/warm 3879ms/3777ms; cold-warm delta 102ms; pre-provider 3703ms; provider 3ms; metadata scans 10 (253.13ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3873.9ms; max 3879ms; pre-provider p95 3699.65ms
- agent CLI attribution: cold known 126ms / unattributed 3577ms; warm known 127ms / unattributed 3509ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 72.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3879ms; pre-provider 3703ms; provider 3ms; post-provider 173ms; response true
    - active window: metadata scans 5 (125.09ms total, max 62.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3703ms; provider 3ms; post-provider 173ms; unknown 3703ms; source none
  - warm: total 3777ms; pre-provider 3636ms; provider 2ms; post-provider 139ms; response true
    - active window: metadata scans 5 (128.04ms total, max 72.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3636ms; provider 2ms; post-provider 139ms; unknown 3636ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3703 ms | 126 ms | 3577 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-agent-cold-warm-message-8e2a29af-kova-260713-233736-0f3350/openclaw/timeline.jsonl |
  | warm | 3636 ms | 127 ms | 3509 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-agent-cold-warm-message-8e2a29af-kova-260713-233736-0f3350/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 126 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 127 ms | 72 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-agent-cold-warm-message-2ab680e0-kova-260713-233736-0f3350
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 925.5 MB; tracked total 925.5 MB; max CPU 174.3%; samples 15; roles agent-cli 925.5MB/174.3%, agent-process 925.5MB/174.3%, command-tree 925.5MB/176.8%, status-cli 695.2MB/176.8%
- agent: turn 4354ms; cold/warm 3990ms/4354ms; cold-warm delta 0ms; pre-provider 4190ms; provider 1ms; metadata scans 10 (250.34ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4335.8ms; max 4354ms; pre-provider p95 4172.15ms
- agent CLI attribution: cold known 129ms / unattributed 3704ms; warm known 121ms / unattributed 4069ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 925.5 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 925.5 MB, agent-process 925.5 MB, command-tree 925.5 MB
  - agent-cli peak RSS 925.5 MB exceeded threshold 900 MB
  - agent-process peak RSS 925.5 MB exceeded threshold 900 MB
- Agent turns:
  - cold: total 3990ms; pre-provider 3833ms; provider 3ms; post-provider 154ms; response true
    - active window: metadata scans 5 (128.85ms total, max 65.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3833ms; provider 3ms; post-provider 154ms; unknown 3833ms; source none
  - warm: total 4354ms; pre-provider 4190ms; provider 1ms; post-provider 163ms; response true
    - active window: metadata scans 5 (121.49ms total, max 70.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4190ms; provider 1ms; post-provider 163ms; unknown 4190ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3833 ms | 129 ms | 3704 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-agent-cold-warm-message-2ab680e0-kova-260713-233736-0f3350/openclaw/timeline.jsonl |
  | warm | 4190 ms | 121 ms | 4069 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-agent-cold-warm-message-2ab680e0-kova-260713-233736-0f3350/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 129 ms | 65 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 121 ms | 70 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-agent-cold-warm-message-67b331a3-kova-260713-233736-0f3350
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 921 MB; tracked total 921 MB; max CPU 164.4%; samples 14; roles agent-cli 921MB/164.4%, agent-process 921MB/164.4%, command-tree 921MB/164.4%, status-cli 798.6MB/162.9%
- agent: turn 3851ms; cold/warm 3788ms/3851ms; cold-warm delta 0ms; pre-provider 3706ms; provider 2ms; metadata scans 10 (230.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3847.85ms; max 3851ms; pre-provider p95 3701.85ms
- agent CLI attribution: cold known 115ms / unattributed 3508ms; warm known 117ms / unattributed 3589ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.79ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 921 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 921 MB, agent-process 921 MB, command-tree 921 MB
  - agent-cli peak RSS 921 MB exceeded threshold 900 MB
  - agent-process peak RSS 921 MB exceeded threshold 900 MB
- Agent turns:
  - cold: total 3788ms; pre-provider 3623ms; provider 3ms; post-provider 162ms; response true
    - active window: metadata scans 5 (115.19ms total, max 60.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3623ms; provider 3ms; post-provider 162ms; unknown 3623ms; source none
  - warm: total 3851ms; pre-provider 3706ms; provider 2ms; post-provider 143ms; response true
    - active window: metadata scans 5 (115.65ms total, max 66.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3706ms; provider 2ms; post-provider 143ms; unknown 3706ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3623 ms | 115 ms | 3508 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-agent-cold-warm-message-67b331a3-kova-260713-233736-0f3350/openclaw/timeline.jsonl |
  | warm | 3706 ms | 117 ms | 3589 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-agent-cold-warm-message-67b331a3-kova-260713-233736-0f3350/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 115 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 117 ms | 67 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-233736-0f3350-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-233736-0f3350-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-233736-0f3350-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-fresh-r1-697fad55-kova-260713-233736-0f3350
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-fresh-r2-da880701-kova-260713-233736-0f3350
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-fresh-r3-82f8bdbd-kova-260713-233736-0f3350
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-onboarded-9f99e904-kova-260713-233736-0f3350
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-onboarded-f9c24855-kova-260713-233736-0f3350
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-fresh-install-onboarded-fe872c26-kova-260713-233736-0f3350
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260713-233736-0f3350
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-bundled-runtime-deps-mi-39c08a4a-kova-260713-233736-0f3350
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-233736-0f3350/kova-bundled-runtime-deps-mi-150715ba-kova-260713-233736-0f3350
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783985856718`
- Result: removed
- Duration: 478ms

