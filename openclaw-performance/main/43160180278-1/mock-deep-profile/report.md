# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1500.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1774.9 MB, gateway 1500.7 MB, command-tree 937.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1500.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1774.9 MB, gateway 1500.7 MB, command-tree 937.1 MB |
| Blocking findings | 6 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 120 total, 0 missing, 0 failed
- Categories: command: 102, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261112-051848-c7f757` |
| Generated | 2026-11-12T05:28:45.244Z |
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
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1500.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1774.9 MB, gateway 1500.7 MB, command-tree 937.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 642 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway max CPU interval \[207.7%, 822.3%\] crosses threshold 340%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 642 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1774.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 642 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree max CPU interval \[213.3%, 822.3%\] crosses threshold 360%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 642 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[292%, 314.9%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1983.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (2ms), but OpenClaw spent 13039ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1983.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 642ms | 1500.7MB | n/a | 822.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 314.9% | 12871ms | 14267ms | 11881ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 642ms | 1500.7 MB | 2741.5 MB | n/a | n/a | gateway peak RSS 1500.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1774.9 MB, gateway 1500.7 MB, command-tree 937.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2340.1 MB | 12871ms | 14267ms | agent-process max CPU interval \[292%, 314.9%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2266.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 384.3% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 573.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 869.3% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1983.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 314.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1500.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 822.3% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 1774.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 822.3% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1319.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 340.6% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 499.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 184% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 412.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 219.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU |
|---|---|---:|---:|
| gateway-performance / cold-start | complete | 1447.5 MB | 271.9% |
| gateway-performance / warm-restart | complete | 1565.6 MB | 343.9% |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261112-051848-c7f757/kova-gateway-performance-man-d48bd949-kova-261112-051848-c7f757
Measurements:
- startup: listening 0ms; health 642ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 155ms; post-ready p95 2ms; failures 6; final failures 0; slowest startup-sample/cold-start 155ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1500.7 MB; tracked total 2741.5 MB; max CPU 822.3%; samples 104; roles gateway-tree 1774.9MB/822.3%, uncategorized 573.6MB/869.3%, gateway 1500.7MB/822.3%, command-tree 937.1MB/321.2%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2109.89ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 15/15/6
- Violations:
  - gateway peak RSS 1500.7 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1774.9 MB, gateway 1500.7 MB, command-tree 937.1 MB
  - gateway max CPU interval \[207.7%, 822.3%\] crosses threshold 340%; CPU measurement is inconclusive
  - gateway-tree peak RSS 1774.9 MB exceeded threshold 1440 MB
  - gateway-tree max CPU interval \[213.3%, 822.3%\] crosses threshold 360%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261112-051848-c7f757/kova-agent-cold-warm-message-2c26dd1d-kova-261112-051848-c7f757
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1983.9 MB; tracked total 2340.1 MB; max CPU 314.9%; samples 141; roles command-tree 2266.5MB/384.3%, agent-process 1983.9MB/314.9%, status-cli 1319.8MB/340.6%, agent-cli 412.7MB/219.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 14267ms; cold/warm 12871ms/14267ms; cold-warm delta 0ms; pre-provider 13039ms; provider 2ms; metadata scans 11 (396.39ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14197.2ms; max 14267ms; pre-provider p95 12981.1ms
- agent CLI attribution: cold known 7277ms / unattributed 4604ms; warm known 8837ms / unattributed 4202ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2284.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 69/47/3
- Violations:
  - agent-process max CPU interval \[292%, 314.9%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm provider was fast (2ms), but OpenClaw spent 13039ms before provider work.
- Agent turns:
  - cold: total 12871ms; pre-provider 11881ms; provider 2ms; post-provider 988ms; response true
    - active window: metadata scans 4 (144.75ms total, max 65.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11881ms; provider 2ms; post-provider 988ms; unknown 5125.56ms; source agent.prepare 6219.8ms; plugins.metadata.scan 535.64ms
  - warm: total 14267ms; pre-provider 13039ms; provider 2ms; post-provider 1226ms; response true
    - active window: metadata scans 7 (251.64ms total, max 72.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13039ms; provider 2ms; post-provider 1226ms; unknown 6283.56ms; source agent.prepare 6219.8ms; plugins.metadata.scan 535.64ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11881 ms | 7277 ms | 4604 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261112-051848-c7f757/kova-agent-cold-warm-message-2c26dd1d-kova-261112-051848-c7f757/openclaw/timeline.jsonl |
  | warm | 13039 ms | 8837 ms | 4202 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261112-051848-c7f757/kova-agent-cold-warm-message-2c26dd1d-kova-261112-051848-c7f757/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3567 ms | 1158 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2940 ms | 1402 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2748 ms | 955 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 223 ms | 223 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` | 4 | 0 | 144 ms | 66 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3912 ms | 2285 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 3579 ms | 1194 ms |
  | warm | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3474 ms | 967 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 253 ms | 73 ms |
  | warm | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 228 ms | 228 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261112-051848-c7f757-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261112-051848-c7f757-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261112-051848-c7f757-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261112-051848-c7f757/kova-gateway-performance-man-d48bd949-kova-261112-051848-c7f757
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261112-051848-c7f757/kova-agent-cold-warm-message-2c26dd1d-kova-261112-051848-c7f757

## Target Cleanup

- Runtime: `kova-local-mwd3l3i1-3jo-ebfe03b4`
- Result: removed
- Duration: 472ms

