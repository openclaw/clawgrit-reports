# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 8 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261114-051749-56bb36` |
| Generated | 2026-11-14T05:35:39.098Z |
| Mode | execution |
| Target | `local-build:/home/runner/work/openclaw/openclaw` |
| Platform | linux 7.0.0-1014-aws (x64) · v24.22.1 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2691 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Startup resource coverage for warm-restart is incomplete: cpu-incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2691 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1700.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1964.5 MB, gateway 1700.9 MB, command-tree 943.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2691 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1964.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2691 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree max CPU interval \[290.3%, 522.6%\] crosses threshold 450%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1895.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[290.3%, 311.2%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1895.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 27788ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1895.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (3ms), but OpenClaw spent 25324ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1895.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 2691ms | 1700.9MB | n/a | 286.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 311.2% | 26895ms | 27788ms | 23210ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 2691ms | 1700.9 MB | 2776.2 MB | n/a | n/a | Product CPU interval evidence is incomplete |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2252.6 MB | 26895ms | 27788ms | command-tree max CPU interval \[290.3%, 522.6%\] crosses threshold 450%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2178.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 522.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1964.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 341.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1295 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 444.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1895.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 311.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1700.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 286.6% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 69.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 311.2% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 634.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 242.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 497.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 220.3% (scenario gateway-performance/many-bundled-plugins)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU |
|---|---|---:|---:|
| gateway-performance / cold-start | complete | 1441.1 MB | 393.3% |
| gateway-performance / warm-restart | incomplete: cpu-incomplete | 2001.1 MB | 431.9% |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261114-051749-56bb36/kova-gateway-performance-man-d48bd949-kova-261114-051749-56bb36
Measurements:
- startup: listening 0ms; health 2691ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 134ms; post-ready p95 3ms; failures 26; final failures 0; slowest startup-sample/cold-start 260ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1700.9 MB; tracked total 2776.2 MB; max CPU 286.6%; samples 164; roles gateway-tree 1964.5MB/341.9%, command-tree 943.3MB/403.1%, gateway 1700.9MB/286.6%, status-cli 943.3MB/375.6%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 3068.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 19/19/7
- Violations:
  - Product CPU interval evidence is incomplete
  - Startup resource coverage for warm-restart is incomplete: cpu-incomplete
  - gateway peak RSS 1700.9 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1964.5 MB, gateway 1700.9 MB, command-tree 943.3 MB
  - gateway-tree peak RSS 1964.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261114-051749-56bb36/kova-agent-cold-warm-message-2c26dd1d-kova-261114-051749-56bb36
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1895.6 MB; tracked total 2252.6 MB; max CPU 311.2%; samples 269; roles command-tree 2178.5MB/522.6%, agent-process 1895.6MB/311.2%, status-cli 1295MB/444.2%, agent-cli 414.5MB/267.5%; performance thresholds skipped 17 (instrumented)
- agent: turn 27788ms; cold/warm 26895ms/27788ms; cold-warm delta 0ms; pre-provider 25324ms; provider 3ms; metadata scans 14 (948.62ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 27743.35ms; max 27788ms; pre-provider p95 25218.3ms
- agent CLI attribution: cold known 14304ms / unattributed 8906ms; warm known 17017ms / unattributed 8307ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 4811.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 77/40/4
- Violations:
  - command-tree max CPU interval \[290.3%, 522.6%\] crosses threshold 450%; CPU measurement is inconclusive
  - agent-process max CPU interval \[290.3%, 311.2%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm agent turn took 27788ms, over threshold 15000ms
  - warm provider was fast (3ms), but OpenClaw spent 25324ms before provider work.
- Agent turns:
  - cold: total 26895ms; pre-provider 23210ms; provider 5ms; post-provider 3680ms; response true
    - active window: metadata scans 7 (515.07ms total, max 158.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 23210ms; provider 5ms; post-provider 3680ms; unknown 8382.15ms; source agent.prepare 13613.52ms; plugins.metadata.scan 1214.33ms
  - warm: total 27788ms; pre-provider 25324ms; provider 3ms; post-provider 2461ms; response true
    - active window: metadata scans 7 (433.55ms total, max 157.52ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 25324ms; provider 3ms; post-provider 2461ms; unknown 10496.15ms; source agent.prepare 13613.52ms; plugins.metadata.scan 1214.33ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 23210 ms | 14304 ms | 8906 ms | 5 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261114-051749-56bb36/kova-agent-cold-warm-message-2c26dd1d-kova-261114-051749-56bb36/openclaw/timeline.jsonl |
  | warm | 25324 ms | 17017 ms | 8307 ms | 3 ms | /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261114-051749-56bb36/kova-agent-cold-warm-message-2c26dd1d-kova-261114-051749-56bb36/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6994 ms | 2314 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 6356 ms | 3099 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 5981 ms | 2244 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 455 ms | 455 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x3 | 5 | 0 | 437 ms | 158 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 8321 ms | 4812 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 7630 ms | 3080 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 6552 ms | 2261 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 456 ms | 456 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 432 ms | 157 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 35 ms | 35 ms |

## Artifacts

- markdown-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261114-051749-56bb36-diagnostic.md
- json-report: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261114-051749-56bb36-diagnostic.json
- summary-json: /home/runner/work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261114-051749-56bb36-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261114-051749-56bb36/kova-gateway-performance-man-d48bd949-kova-261114-051749-56bb36
- collector-root agent-cold-warm-message#1: /home/runner/work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261114-051749-56bb36/kova-agent-cold-warm-message-2c26dd1d-kova-261114-051749-56bb36

## Target Cleanup

- Runtime: `kova-local-mwfyfjfn-2c4-eba65f8f`
- Result: removed
- Duration: 431ms

