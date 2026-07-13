# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 924.1 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 924.1 MB, agent-process 924.1 MB, command-tree 924.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 924.1 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 924.1 MB, agent-process 924.1 MB, command-tree 924.1 MB |
| Blocking findings | 9 |
| Warnings | 0 |
| Records | 18 (PASS:11, FAIL:7) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 241 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260713-232943-33e3cb` |
| Generated | 2026-07-13T23:39:35.162Z |
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
| PASS | 11 |
| FAIL | 7 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | fresh-install/fresh | plugin-cli peak RSS 891.3 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 3844 |
| fail | OpenClaw | fresh-install/onboarded-user | plugin-cli peak RSS 832.5 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 4151 |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| diagnostic-gap | OpenClaw | bundled-runtime-deps/missing-plugin-index | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | plugin-cli peak RSS 810 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 3410 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | plugin-cli peak RSS 823.9 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 3316 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | bundled-plugin-startup/fresh | plugin-cli peak RSS 824.8 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 3256 |
| diagnostic-gap | OpenClaw | bundled-plugin-startup/fresh | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: runtimeDeps.stage |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 924.1 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 924.1 MB, agent-process 924.1 MB, command-tree 924.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 924.1 |
| info | Kova | report | 3 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:2, FAIL:1 | 4198ms | 833.5MB | n/a | 156% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:1, PASS:2 | 3532ms | 835.1MB | n/a | 141% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3456ms | 821.8MB | n/a | 157% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 3316ms | 834.8MB | n/a | 160% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:2, FAIL:1 | n/a | 0MB | n/a | 175.9% | 4650ms | 4568ms | 4470ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:2, FAIL:1 | 4055ms | 834.2MB | n/a | 148% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4830ms | 824.2 MB | 1632.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 4198ms | 836.2 MB | 1657.9 MB | n/a | n/a |  |
| 3 | FAIL | fresh-install/fresh |  | 3844ms | 833.5 MB | 1724.8 MB | n/a | n/a | plugin-cli peak RSS 891.3 MB exceeded threshold 800 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 4151ms | 835.1 MB | 1658.5 MB | n/a | n/a | plugin-cli peak RSS 832.5 MB exceeded threshold 800 MB |
| 2 | PASS | fresh-install/onboarded-user |  | 3532ms | 836.4 MB | 1612.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3514ms | 834.4 MB | 1572.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3506ms | 820.9 MB | 825.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3456ms | 821.8 MB | 826.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3257ms | 828 MB | 832.8 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 3410ms | 833 MB | 1637.4 MB | n/a | n/a | plugin-cli peak RSS 810 MB exceeded threshold 800 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 3316ms | 834.8 MB | 1651.5 MB | n/a | n/a | plugin-cli peak RSS 823.9 MB exceeded threshold 800 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 3256ms | 836.2 MB | 1653.4 MB | n/a | n/a | plugin-cli peak RSS 824.8 MB exceeded threshold 800 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 840.3 MB | 3821ms | 4568ms |  |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 924.1 MB | 5276ms | 4419ms | agent-cli peak RSS 924.1 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 924.1 MB, agent-process 924.1 MB, command-tree 924.1 MB |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 841.4 MB | 4650ms | 5964ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3997ms | 834.2 MB | 1663.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4055ms | 833.6 MB | 1524.7 MB | n/a | n/a |  |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4697ms | 848.4 MB | 1695.5 MB | n/a | n/a | plugin-cli peak RSS 859.8 MB exceeded threshold 800 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 924.1 MB; CPU 181.2%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 924.1 MB; CPU 181.2%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 924.1 MB; CPU 181.2%; scenario agent-cold-warm-message/mock-openai-provider
- plugin-cli: RSS 891.3 MB; CPU 177.6%; scenario fresh-install/fresh
- gateway: RSS 848.4 MB; CPU 166%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 848.4 MB; CPU 166%; scenario gateway-performance/many-bundled-plugins
- status-cli: RSS 840.3 MB; CPU 180.3%; scenario fresh-install/fresh
- model-cli: RSS 671 MB; CPU 180.9%; scenario fresh-install/fresh

## Selected Sample Details

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-fresh-install-fresh-r3-82f8bdbd-kova-260713-232943-33e3cb
Measurements:
- startup: listening 3279ms; health 3844ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 565ms; post-ready p95 6ms; failures 13; final failures 0; slowest startup-sample/provision 565ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 833.5 MB; tracked total 1724.8 MB; max CPU 147%; samples 23; roles command-tree 891.3MB/178.9%, plugin-cli 891.3MB/173.9%, status-cli 840.3MB/172%, gateway 833.5MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 470.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 891.3 MB exceeded threshold 800 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-fresh-install-onboarded-9f99e904-kova-260713-232943-33e3cb
Measurements:
- startup: listening 3532ms; health 4151ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 619ms; post-ready p95 57ms; failures 14; final failures 0; slowest startup-sample/provision 619ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 835.1 MB; tracked total 1658.5 MB; max CPU 158%; samples 24; roles gateway 835.1MB/158%, gateway-tree 835.1MB/158%, command-tree 832.5MB/180.3%, plugin-cli 832.5MB/171.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 546.75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 832.5 MB exceeded threshold 800 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-bundled-plugin-startup-4a0cbdf7-kova-260713-232943-33e3cb
Measurements:
- startup: listening 3023ms; health 3410ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 387ms; post-ready p95 4ms; failures 22; final failures 0; slowest startup-sample/restart 531ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 833 MB; tracked total 1637.4 MB; max CPU 160%; samples 14; roles gateway 833MB/160%, gateway-tree 833MB/160%, command-tree 810MB/163.4%, plugin-cli 810MB/163.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 496.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 810 MB exceeded threshold 800 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-bundled-plugin-startup-809ede2b-kova-260713-232943-33e3cb
Measurements:
- startup: listening 3016ms; health 3316ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 300ms; post-ready p95 3ms; failures 21; final failures 0; slowest startup-sample/restart 534ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 834.8 MB; tracked total 1651.5 MB; max CPU 157%; samples 14; roles gateway 834.8MB/157%, gateway-tree 834.8MB/157%, command-tree 823.9MB/166.8%, plugin-cli 823.9MB/166.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 450.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 823.9 MB exceeded threshold 800 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-bundled-plugin-startup-5377119f-kova-260713-232943-33e3cb
Measurements:
- startup: listening 3021ms; health 3256ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 235ms; post-ready p95 9ms; failures 22; final failures 0; slowest startup-sample/restart 325ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 836.2 MB; tracked total 1653.4 MB; max CPU 160%; samples 14; roles gateway 836.2MB/160%, gateway-tree 836.2MB/160%, command-tree 824.8MB/163.4%, plugin-cli 824.8MB/163.4%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 430.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - plugin-cli peak RSS 824.8 MB exceeded threshold 800 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-agent-cold-warm-message-8e2a29af-kova-260713-232943-33e3cb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 840.3 MB; tracked total 840.3 MB; max CPU 167.6%; samples 15; roles agent-cli 840.3MB/167.6%, agent-process 840.3MB/167.6%, command-tree 840.3MB/167.6%, status-cli 727.3MB/165.8%
- agent: turn 4568ms; cold/warm 3821ms/4568ms; cold-warm delta 0ms; pre-provider 4415ms; provider 1ms; metadata scans 10 (258.47ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4530.65ms; max 4568ms; pre-provider p95 4375.85ms
- agent CLI attribution: cold known 123ms / unattributed 3509ms; warm known 136ms / unattributed 4279ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.54ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3821ms; pre-provider 3632ms; provider 4ms; post-provider 185ms; response true
    - active window: metadata scans 5 (120.98ms total, max 65.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3632ms; provider 4ms; post-provider 185ms; unknown 3632ms; source none
  - warm: total 4568ms; pre-provider 4415ms; provider 1ms; post-provider 152ms; response true
    - active window: metadata scans 5 (137.49ms total, max 78.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4415ms; provider 1ms; post-provider 152ms; unknown 4415ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3632 ms | 123 ms | 3509 ms | 4 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-agent-cold-warm-message-8e2a29af-kova-260713-232943-33e3cb/openclaw/timeline.jsonl |
  | warm | 4415 ms | 136 ms | 4279 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-agent-cold-warm-message-8e2a29af-kova-260713-232943-33e3cb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 123 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 136 ms | 78 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-agent-cold-warm-message-2ab680e0-kova-260713-232943-33e3cb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 924.1 MB; tracked total 924.1 MB; max CPU 175.9%; samples 17; roles agent-cli 924.1MB/175.9%, agent-process 924.1MB/175.9%, command-tree 924.1MB/175.9%, status-cli 743.2MB/163.3%
- agent: turn 5276ms; cold/warm 5276ms/4419ms; cold-warm delta 857ms; pre-provider 5100ms; provider 5ms; metadata scans 10 (347.13ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5233.15ms; max 5276ms; pre-provider p95 5058.65ms
- agent CLI attribution: cold known 204ms / unattributed 4896ms; warm known 144ms / unattributed 4129ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 89.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 924.1 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 924.1 MB, agent-process 924.1 MB, command-tree 924.1 MB
  - agent-cli peak RSS 924.1 MB exceeded threshold 900 MB
  - agent-process peak RSS 924.1 MB exceeded threshold 900 MB
- Agent turns:
  - cold: total 5276ms; pre-provider 5100ms; provider 5ms; post-provider 171ms; response true
    - active window: metadata scans 5 (203.42ms total, max 83.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5100ms; provider 5ms; post-provider 171ms; unknown 5100ms; source none
  - warm: total 4419ms; pre-provider 4273ms; provider 2ms; post-provider 144ms; response true
    - active window: metadata scans 5 (143.71ms total, max 89.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4273ms; provider 2ms; post-provider 144ms; unknown 4273ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5100 ms | 204 ms | 4896 ms | 5 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-agent-cold-warm-message-2ab680e0-kova-260713-232943-33e3cb/openclaw/timeline.jsonl |
  | warm | 4273 ms | 144 ms | 4129 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-agent-cold-warm-message-2ab680e0-kova-260713-232943-33e3cb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 204 ms | 84 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 144 ms | 89 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-agent-cold-warm-message-67b331a3-kova-260713-232943-33e3cb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 841.4 MB; tracked total 841.4 MB; max CPU 181.2%; samples 18; roles agent-cli 841.4MB/181.2%, agent-process 841.4MB/181.2%, command-tree 841.4MB/181.2%, status-cli 827.2MB/174.3%
- agent: turn 5964ms; cold/warm 4650ms/5964ms; cold-warm delta 0ms; pre-provider 5760ms; provider 3ms; metadata scans 10 (353.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5898.3ms; max 5964ms; pre-provider p95 5695.5ms
- agent CLI attribution: cold known 145ms / unattributed 4325ms; warm known 207ms / unattributed 5553ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 98.43ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4650ms; pre-provider 4470ms; provider 4ms; post-provider 176ms; response true
    - active window: metadata scans 5 (145.46ms total, max 84.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4470ms; provider 4ms; post-provider 176ms; unknown 4470ms; source none
  - warm: total 5964ms; pre-provider 5760ms; provider 3ms; post-provider 201ms; response true
    - active window: metadata scans 5 (207.72ms total, max 98.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5760ms; provider 3ms; post-provider 201ms; unknown 5760ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4470 ms | 145 ms | 4325 ms | 4 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-agent-cold-warm-message-67b331a3-kova-260713-232943-33e3cb/openclaw/timeline.jsonl |
  | warm | 5760 ms | 207 ms | 5553 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-agent-cold-warm-message-67b331a3-kova-260713-232943-33e3cb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 145 ms | 85 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 207 ms | 98 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-232943-33e3cb-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-232943-33e3cb-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260713-232943-33e3cb-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-fresh-install-fresh-r1-697fad55-kova-260713-232943-33e3cb
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-fresh-install-fresh-r2-da880701-kova-260713-232943-33e3cb
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-fresh-install-fresh-r3-82f8bdbd-kova-260713-232943-33e3cb
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-fresh-install-onboarded-9f99e904-kova-260713-232943-33e3cb
- collector-root fresh-install#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-fresh-install-onboarded-f9c24855-kova-260713-232943-33e3cb
- collector-root fresh-install#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-fresh-install-onboarded-fe872c26-kova-260713-232943-33e3cb
- collector-root bundled-runtime-deps#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260713-232943-33e3cb
- collector-root bundled-runtime-deps#2: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-bundled-runtime-deps-mi-39c08a4a-kova-260713-232943-33e3cb
- collector-root bundled-runtime-deps#3: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260713-232943-33e3cb/kova-bundled-runtime-deps-mi-150715ba-kova-260713-232943-33e3cb
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-1783985382903`
- Result: removed
- Duration: 560ms

