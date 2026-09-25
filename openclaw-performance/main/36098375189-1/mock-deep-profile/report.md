# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 8 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 1, incomplete: 1
- Required obligations: 40 total, 1 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-resource-proof | missing | resource peak RSS measurement was not captured |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260925-052511-4e424a` |
| Generated | 2026-09-25T05:28:33.539Z |
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
| BLOCKED | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[180.5%, 249.3%\] crosses threshold 200%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 183 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1382 MB, command-tree 1382 MB, status-cli 823.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli max CPU interval \[287.6%, 350.3%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 15053ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider was fast (1ms), but OpenClaw spent 13515ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMbNotObserved: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI resource samples and retained sample artifacts were captured | resource peak RSS measurement was not captured; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260925-052511-4e424a/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-4e424a/resource-samples/cold-agent-turn-1.jsonl |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 183ms | 985.1MB | n/a | 239.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | n/a | 12326ms | 15053ms | 10982ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 183ms | 985.1 MB | 1960.4 MB | n/a | n/a | status-cli max CPU interval \[180.5%, 249.3%\] crosses threshold 200%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1454.2 MB | 12326ms | 15053ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- agent-cli: RSS 1382 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 350.3% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1382 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 350.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1153.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 255.6% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 823.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 317% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 985.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 239.6% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 538.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 221.6% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 394.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 192% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 365 MB (scenario gateway-performance/many-bundled-plugins); CPU 200.3% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260925-052511-4e424a/kova-gateway-performance-man-d48bd949-kova-260925-052511-4e424a
Measurements:
- startup: listening 1ms; health 183ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 182ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 182ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 985.1 MB; tracked total 1960.4 MB; max CPU 239.6%; samples 126; roles gateway-tree 1153.4MB/255.6%, gateway 985.1MB/239.6%, command-tree 737.8MB/249.3%, status-cli 737.8MB/249.3%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2814.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 14/14/13
- Violations:
  - status-cli max CPU interval \[180.5%, 249.3%\] crosses threshold 200%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260925-052511-4e424a/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-4e424a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed 0 MB; tracked total 1454.2 MB; max CPU unknown; samples 145; roles agent-cli 1382MB/350.3%, command-tree 1382MB/350.3%, status-cli 823.2MB/317%, mock-provider 72.9MB/26.5%; performance thresholds skipped 14 (instrumented)
- agent: turn 15053ms; cold/warm 12326ms/15053ms; cold-warm delta 0ms; pre-provider 13515ms; provider 1ms; metadata scans 16 (842.14ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 14916.65ms; max 15053ms; pre-provider p95 13388.35ms
- agent CLI attribution: cold known 6650ms / unattributed 4332ms; warm known 9463ms / unattributed 4052ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4229.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 48/48/18
- Violations:
  - Product CPU interval evidence is incomplete
  - Product CPU interval evidence is incomplete
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: agent-cli 1382 MB, command-tree 1382 MB, status-cli 823.2 MB
  - agent-cli max CPU interval \[287.6%, 350.3%\] crosses threshold 300%; CPU measurement is inconclusive
  - warm agent turn took 15053ms, over threshold 15000ms
  - warm provider was fast (1ms), but OpenClaw spent 13515ms before provider work.
- Agent turns:
  - cold: total 12326ms; pre-provider 10982ms; provider 3ms; post-provider 1341ms; response true
    - active window: metadata scans 9 (440.59ms total, max 82.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10982ms; provider 3ms; post-provider 1341ms; unknown 6729.19ms; source agent.prepare 3155.67ms; plugins.metadata.scan 1097.14ms
  - warm: total 15053ms; pre-provider 13515ms; provider 1ms; post-provider 1537ms; response true
    - active window: metadata scans 7 (401.55ms total, max 109.05ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13515ms; provider 1ms; post-provider 1537ms; unknown 9262.19ms; source agent.prepare 3155.67ms; plugins.metadata.scan 1097.14ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10982 ms | 6650 ms | 4332 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260925-052511-4e424a/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-4e424a/openclaw/timeline.jsonl |
  | warm | 13515 ms | 9463 ms | 4052 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260925-052511-4e424a/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-4e424a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x39 | 39 | 0 | 5715 ms | 2231 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2237 ms | 871 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1430 ms | 599 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` | 9 | 0 | 442 ms | 83 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 86 ms | 86 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 32 ms | 32 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x37 | 37 | 0 | 7873 ms | 4230 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2721 ms | 1208 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1726 ms | 944 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` | 7 | 0 | 400 ms | 109 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 133 ms | 133 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 29 ms | 29 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260925-052511-4e424a-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260925-052511-4e424a-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260925-052511-4e424a-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260925-052511-4e424a/kova-gateway-performance-man-d48bd949-kova-260925-052511-4e424a
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260925-052511-4e424a/kova-agent-cold-warm-message-2c26dd1d-kova-260925-052511-4e424a

## Target Cleanup

- Runtime: `kova-local-mugiof5y-3sd-f5fab24d`
- Result: removed
- Duration: 632ms

