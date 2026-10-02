# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Gateway runtime identity was not trusted: missing-service-identity

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Gateway runtime identity was not trusted: missing-service-identity |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 2 (FAIL:1, PASS:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 34 total, 0 missing, 1 failed
- Categories: command: 16, artifact: 2, cleanup: 2, collector: 2, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | command:state-env-create:3 | failed | command exited 1 |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261002-052639-1884e1` |
| Generated | 2026-10-02T05:28:54.576Z |
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
| FAIL | 1 |
| PASS | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 2 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 291.7% | 9519ms | 9770ms | 8480ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1578.4 MB | 9519ms | 9770ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1505.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 343% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1396.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 291.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1163.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 343% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 185.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 108.8% (scenario agent-cold-warm-message/mock-openai-provider)
- mock-provider: RSS 73.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 22.1% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261002-052639-1884e1/kova-gateway-performance-man-d48bd949-kova-261002-052639-1884e1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none; performance thresholds skipped 0 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 35.88ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `node '/home/runner/_work/_temp/kova-src'/support/assert-many-plugin-pressure-state.mjs ...`
- Failure: openclaw: doctor exited 1: \[35m\[config\]\[39m \[33mwarnings: agents.entries: Removed retired agents.entries.\*.default markers.\[39m

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261002-052639-1884e1/kova-agent-cold-warm-message-2c26dd1d-kova-261002-052639-1884e1
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1396.9 MB; tracked total 1578.4 MB; max CPU 291.7%; samples 105; roles command-tree 1505.6MB/343%, agent-process 1396.9MB/291.7%, status-cli 1163.9MB/343%, agent-cli 185.9MB/108.8%; performance thresholds skipped 15 (instrumented)
- agent: turn 9770ms; cold/warm 9519ms/9770ms; cold-warm delta 0ms; pre-provider 8775ms; provider 1ms; metadata scans 10 (253.45ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9757.45ms; max 9770ms; pre-provider p95 8760.25ms
- agent CLI attribution: cold known 5330ms / unattributed 3150ms; warm known 5252ms / unattributed 3523ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1603.42ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 53/47/14
- Agent turns:
  - cold: total 9519ms; pre-provider 8480ms; provider 2ms; post-provider 1037ms; response true
    - active window: metadata scans 5 (121.92ms total, max 68.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8480ms; provider 2ms; post-provider 1037ms; unknown 5103.57ms; source agent.prepare 2970.65ms; plugins.metadata.scan 405.78ms
  - warm: total 9770ms; pre-provider 8775ms; provider 1ms; post-provider 994ms; response true
    - active window: metadata scans 5 (131.53ms total, max 58.42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 8775ms; provider 1ms; post-provider 994ms; unknown 5398.57ms; source agent.prepare 2970.65ms; plugins.metadata.scan 405.78ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 8480 ms | 5330 ms | 3150 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261002-052639-1884e1/kova-agent-cold-warm-message-2c26dd1d-kova-261002-052639-1884e1/openclaw/timeline.jsonl |
  | warm | 8775 ms | 5252 ms | 3523 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261002-052639-1884e1/kova-agent-cold-warm-message-2c26dd1d-kova-261002-052639-1884e1/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2518 ms | 731 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2349 ms | 1317 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1559 ms | 793 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 115 ms | 68 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 62 ms | 62 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 19 ms | 19 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 2560 ms | 1603 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x9 | 9 | 0 | 2315 ms | 655 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 1414 ms | 813 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 127 ms | 59 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 64 ms | 64 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 20 ms | 20 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261002-052639-1884e1-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261002-052639-1884e1-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261002-052639-1884e1-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261002-052639-1884e1/kova-gateway-performance-man-d48bd949-kova-261002-052639-1884e1
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261002-052639-1884e1/kova-agent-cold-warm-message-2c26dd1d-kova-261002-052639-1884e1

## Target Cleanup

- Runtime: `kova-local-muqita0o-3tn-851cc91b`
- Result: removed
- Duration: 618ms

