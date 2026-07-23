# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260723-023248-868c3a` |
| Generated | 2026-07-23T02:39:52.428Z |
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

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3110ms | 914.5MB | n/a | 151% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3102ms | 918.2MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3033ms | 919.4MB | n/a | 150% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3054ms | 915.8MB | n/a | 151% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 154.8% | 4507ms | 4417ms | 4189ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3031ms | 921.2MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3811ms | 903.6 MB | 1605.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3064ms | 922 MB | 1684.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3110ms | 914.5 MB | 1701.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3073ms | 912.1 MB | 1643.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3216ms | 919.1 MB | 1678.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3102ms | 918.2 MB | 1703.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3141ms | 913.6 MB | 913.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3033ms | 935.7 MB | 940.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2916ms | 919.4 MB | 924.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2862ms | 915.8 MB | 1447.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3228ms | 912.1 MB | 1446.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3054ms | 916.3 MB | 1455.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 933.6 MB | 4521ms | 4417ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 950.5 MB | 4507ms | 4548ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 990.4 MB | 4286ms | 4204ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3031ms | 926.5 MB | 1697.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2991ms | 906.4 MB | 1696.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3115ms | 921.2 MB | 1688.1 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 990.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 990.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 990.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 935.7 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 152% (scenario bundled-runtime-deps/missing-plugin-index)
- plugin-cli: RSS 539.1 MB (scenario bundled-plugin-startup/fresh); CPU 159% (scenario fresh-install/fresh)
- gateway-tree: RSS 935.7 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 152% (scenario bundled-runtime-deps/missing-plugin-index)
- status-cli: RSS 790.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 157.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 591.5 MB (scenario fresh-install/onboarded-user); CPU 151% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-agent-cold-warm-message-8e2a29af-kova-260723-023248-868c3a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 933.6 MB; tracked total 933.6 MB; max CPU 154.8%; samples 16; roles agent-cli 933.6MB/154.8%, agent-process 933.6MB/154.8%, command-tree 933.6MB/154.8%, status-cli 730.9MB/152.7%
- agent: turn 4521ms; cold/warm 4521ms/4417ms; cold-warm delta 104ms; pre-provider 4206ms; provider 3ms; metadata scans 14 (281.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4515.8ms; max 4521ms; pre-provider p95 4203.95ms
- agent CLI attribution: cold known 136ms / unattributed 4070ms; warm known 146ms / unattributed 4019ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4521ms; pre-provider 4206ms; provider 3ms; post-provider 312ms; response true
    - active window: metadata scans 7 (136.03ms total, max 58.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4206ms; provider 3ms; post-provider 312ms; unknown 3708.65ms; source plugins.metadata.scan 497.35ms
  - warm: total 4417ms; pre-provider 4165ms; provider 1ms; post-provider 251ms; response true
    - active window: metadata scans 7 (145.41ms total, max 63.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4165ms; provider 1ms; post-provider 251ms; unknown 3667.65ms; source plugins.metadata.scan 497.35ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4206 ms | 136 ms | 4070 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-agent-cold-warm-message-8e2a29af-kova-260723-023248-868c3a/openclaw/timeline.jsonl |
  | warm | 4165 ms | 146 ms | 4019 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-agent-cold-warm-message-8e2a29af-kova-260723-023248-868c3a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 136 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 146 ms | 63 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-agent-cold-warm-message-2ab680e0-kova-260723-023248-868c3a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 950.5 MB; tracked total 950.5 MB; max CPU 159.7%; samples 16; roles agent-cli 950.5MB/159.7%, agent-process 950.5MB/159.7%, command-tree 950.5MB/159.7%, status-cli 786.1MB/151.7%
- agent: turn 4548ms; cold/warm 4507ms/4548ms; cold-warm delta 0ms; pre-provider 4277ms; provider 1ms; metadata scans 14 (272.62ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4545.95ms; max 4548ms; pre-provider p95 4272.6ms
- agent CLI attribution: cold known 132ms / unattributed 4057ms; warm known 144ms / unattributed 4133ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4507ms; pre-provider 4189ms; provider 4ms; post-provider 314ms; response true
    - active window: metadata scans 7 (130.01ms total, max 55.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4189ms; provider 4ms; post-provider 314ms; unknown 3721.94ms; source plugins.metadata.scan 467.06ms
  - warm: total 4548ms; pre-provider 4277ms; provider 1ms; post-provider 270ms; response true
    - active window: metadata scans 7 (142.61ms total, max 65.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4277ms; provider 1ms; post-provider 270ms; unknown 3809.94ms; source plugins.metadata.scan 467.06ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4189 ms | 132 ms | 4057 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-agent-cold-warm-message-2ab680e0-kova-260723-023248-868c3a/openclaw/timeline.jsonl |
  | warm | 4277 ms | 144 ms | 4133 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-agent-cold-warm-message-2ab680e0-kova-260723-023248-868c3a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 132 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 144 ms | 66 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-agent-cold-warm-message-67b331a3-kova-260723-023248-868c3a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 990.4 MB; tracked total 990.4 MB; max CPU 153.8%; samples 15; roles agent-cli 990.4MB/153.8%, command-tree 990.4MB/157.7%, agent-process 990.4MB/153.8%, status-cli 541.3MB/157.7%
- agent: turn 4286ms; cold/warm 4286ms/4204ms; cold-warm delta 82ms; pre-provider 3996ms; provider 3ms; metadata scans 14 (260.02ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4281.9ms; max 4286ms; pre-provider p95 3994.3ms
- agent CLI attribution: cold known 125ms / unattributed 3871ms; warm known 136ms / unattributed 3826ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 69.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4286ms; pre-provider 3996ms; provider 3ms; post-provider 287ms; response true
    - active window: metadata scans 7 (123.79ms total, max 54.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3996ms; provider 3ms; post-provider 287ms; unknown 3536.43ms; source plugins.metadata.scan 459.57ms
  - warm: total 4204ms; pre-provider 3962ms; provider 1ms; post-provider 241ms; response true
    - active window: metadata scans 7 (136.23ms total, max 61.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3962ms; provider 1ms; post-provider 241ms; unknown 3502.43ms; source plugins.metadata.scan 459.57ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3996 ms | 125 ms | 3871 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-agent-cold-warm-message-67b331a3-kova-260723-023248-868c3a/openclaw/timeline.jsonl |
  | warm | 3962 ms | 136 ms | 3826 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-agent-cold-warm-message-67b331a3-kova-260723-023248-868c3a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 136 ms | 62 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-023248-868c3a-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-023248-868c3a-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-023248-868c3a-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-fresh-install-fresh-r1-697fad55-kova-260723-023248-868c3a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-fresh-install-fresh-r2-da880701-kova-260723-023248-868c3a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-023248-868c3a
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-fresh-install-onboarded-9f99e904-kova-260723-023248-868c3a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-fresh-install-onboarded-f9c24855-kova-260723-023248-868c3a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-fresh-install-onboarded-fe872c26-kova-260723-023248-868c3a
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-023248-868c3a
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-023248-868c3a
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-023248-868c3a/kova-bundled-runtime-deps-mi-150715ba-kova-260723-023248-868c3a
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrwwc7ad-412-af5f182b`
- Result: removed
- Duration: 391ms

