# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 10 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261113-051841-d58949` |
| Generated | 2026-11-13T05:41:36.204Z |
| Mode | execution |
| Target | `local-build:/home/runner/work/openclaw/openclaw` |
| Platform | linux 7.0.0-1017-azure (x64) · v24.22.1 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4372 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Startup resource coverage for warm-restart is incomplete: cpu-incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4372 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | ocm service restart 'kova-gateway-performance-man-d48bd949-kova-261113-051841-d58949' took 18936ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4372 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1735.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1945.4 MB, gateway 1735.1 MB, command-tree 967 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4372 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1945.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 4372 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree max CPU interval \[296.3%, 474.6%\] crosses threshold 450%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1878.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[157%, 303.6%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1878.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[296.3%, 317.5%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1878.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 38161ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1878.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1001ms), but OpenClaw spent 34236ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1878.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 4372ms | 1735.1MB | n/a | 268.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 317.5% | 34959ms | 38161ms | 29789ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4372ms | 1735.1 MB | 2672.1 MB | n/a | n/a | Product CPU interval evidence is incomplete |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2235.8 MB | 34959ms | 38161ms | command-tree max CPU interval \[296.3%, 474.6%\] crosses threshold 450%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2161.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 474.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1945.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 357.7% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1299.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 447.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1878.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 317.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1735.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 268.3% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 95.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 317.5% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 637.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 243.2% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 462 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 303.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU |
|---|---|---:|---:|
| gateway-performance / cold-start | complete | 1372.1 MB | 383.1% |
| gateway-performance / warm-restart | incomplete: cpu-incomplete | 1993.5 MB | 430.6% |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261113-051841-d58949/kova-gateway-performance-man-d48bd949-kova-261113-051841-d58949
Measurements:
- startup: listening 1ms; health 4372ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 167ms; post-ready p95 3ms; failures 39; final failures 0; slowest startup-sample/warm-restart 288ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1735.1 MB; tracked total 2672.1 MB; max CPU 268.3%; samples 219; roles gateway-tree 1945.4MB/357.7%, command-tree 967MB/401%, gateway 1735.1MB/268.3%, status-cli 967MB/390.4%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 4120.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 19/19/7
- Violations:
  - Product CPU interval evidence is incomplete
  - Startup resource coverage for warm-restart is incomplete: cpu-incomplete
  - ocm service restart 'kova-gateway-performance-man-d48bd949-kova-261113-051841-d58949' took 18936ms, over threshold 15000ms
  - gateway peak RSS 1735.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1945.4 MB, gateway 1735.1 MB, command-tree 967 MB
  - gateway-tree peak RSS 1945.4 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261113-051841-d58949/kova-agent-cold-warm-message-2c26dd1d-kova-261113-051841-d58949
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1878.5 MB; tracked total 2235.8 MB; max CPU 317.5%; samples 364; roles command-tree 2161.3MB/474.6%, agent-process 1878.5MB/317.5%, status-cli 1299.2MB/447.6%, agent-cli 462MB/303.6%; performance thresholds skipped 17 (instrumented)
- agent: turn 38161ms; cold/warm 34959ms/38161ms; cold-warm delta 0ms; pre-provider 34236ms; provider 1001ms; metadata scans 14 (1266.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 38000.9ms; max 38161ms; pre-provider p95 34013.65ms
- agent CLI attribution: cold known 17652ms / unattributed 12137ms; warm known 23015ms / unattributed 11221ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 6392.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 74/43/3
- Violations:
  - command-tree max CPU interval \[296.3%, 474.6%\] crosses threshold 450%; CPU measurement is inconclusive
  - agent-cli max CPU interval \[157%, 303.6%\] crosses threshold 300%; CPU measurement is inconclusive
  - agent-process max CPU interval \[296.3%, 317.5%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm agent turn took 38161ms, over threshold 15000ms
  - warm provider was fast (1001ms), but OpenClaw spent 34236ms before provider work.
- Agent turns:
  - cold: total 34959ms; pre-provider 29789ms; provider 7ms; post-provider 5163ms; response true
    - active window: metadata scans 7 (622.14ms total, max 203.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 29789ms; provider 7ms; post-provider 5163ms; unknown 10683.57ms; source agent.prepare 17487.21ms; plugins.metadata.scan 1618.22ms
  - warm: total 38161ms; pre-provider 34236ms; provider 1001ms; post-provider 2924ms; response true
    - active window: metadata scans 7 (644.39ms total, max 235.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 34236ms; provider 1001ms; post-provider 2924ms; unknown 15130.57ms; source agent.prepare 17487.21ms; plugins.metadata.scan 1618.22ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 29789 ms | 17652 ms | 12137 ms | 7 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261113-051841-d58949/kova-agent-cold-warm-message-2c26dd1d-kova-261113-051841-d58949/openclaw/timeline.jsonl |
  | warm | 34236 ms | 23015 ms | 11221 ms | 1001 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261113-051841-d58949/kova-agent-cold-warm-message-2c26dd1d-kova-261113-051841-d58949/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 9322 ms | 3091 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 7462 ms | 3628 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 7215 ms | 2678 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 628 ms | 628 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 382 ms | 203 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 54 ms | 54 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 11036 ms | 6392 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 10272 ms | 4171 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 8939 ms | 3119 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 645 ms | 236 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 637 ms | 637 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 56 ms | 56 ms |

## Artifacts

- markdown-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261113-051841-d58949-diagnostic.md
- json-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261113-051841-d58949-diagnostic.json
- summary-json: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261113-051841-d58949-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261113-051841-d58949/kova-gateway-performance-man-d48bd949-kova-261113-051841-d58949
- collector-root agent-cold-warm-message#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261113-051841-d58949/kova-agent-cold-warm-message-2c26dd1d-kova-261113-051841-d58949

## Target Cleanup

- Runtime: `kova-local-mwej0suc-2hc-38419fa4`
- Result: removed
- Duration: 6175ms

