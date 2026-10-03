# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Gateway runtime identity was not trusted: missing-service-identity

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Gateway runtime identity was not trusted: missing-service-identity |
| Blocking findings | 30 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 3, incomplete: 3
- Required obligations: 91 total, 15 missing, 12 failed
- Categories: command: 37, artifact: 6, cleanup: 6, collector: 6, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | config-preflight command 1: command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 0 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 0 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |
| agent-cold-warm-message | invariant:agent-cli-resource-proof | missing | resource samples were not collected |
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | config-preflight command 1: command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 0 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 0 |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261003-053324-5a97b3` |
| Generated | 2026-10-03T05:35:25.003Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 6 |
| Scenarios | 2 |
| States | 2 |
| FAIL | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 2 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 2 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 2 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v4; missingDependencyErrors: 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | config-preflight command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 0 |
| info | Kova | report | 21 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-gateway-performance-man-005107f3-kova-261003-053324-5a97b3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 35.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `node '/home/runner/_work/_temp/kova-src'/support/assert-many-plugin-pressure-state.mjs ...`
- Failure: openclaw: doctor exited 1: \[32m\[state-migrations\]\[39m \[33mPlugin "matrix" data/settings upgrade is unfinished: The configured plugin package is missing or has not converged. Your existing data and settings have been kept. Run "openclaw update repair", th...

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-gateway-performance-man-1e8be6a8-kova-261003-053324-5a97b3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 34.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `node '/home/runner/_work/_temp/kova-src'/support/assert-many-plugin-pressure-state.mjs ...`
- Failure: openclaw: doctor exited 1: \[32m\[state-migrations\]\[39m \[33mPlugin "matrix" data/settings upgrade is unfinished: The configured plugin package is missing or has not converged. Your existing data and settings have been kept. Run "openclaw update repair", th...

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-gateway-performance-man-958fde53-kova-261003-053324-5a97b3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 36.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `node '/home/runner/_work/_temp/kova-src'/support/assert-many-plugin-pressure-state.mjs ...`
- Failure: openclaw: doctor exited 1: \[32m\[state-migrations\]\[39m \[33mPlugin "matrix" data/settings upgrade is unfinished: The configured plugin package is missing or has not converged. Your existing data and settings have been kept. Run "openclaw update repair", th...

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-agent-cold-warm-message-8e2a29af-kova-261003-053324-5a97b3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.main.core-imports 109.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm @'kova-agent-cold-warm-message-8e2a29af-kova-261003-053324-5a97b3' -- config valida...`
- Failure: "error": {

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-agent-cold-warm-message-2ab680e0-kova-261003-053324-5a97b3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.main.core-imports 110.36ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm @'kova-agent-cold-warm-message-2ab680e0-kova-261003-053324-5a97b3' -- config valida...`
- Failure: "error": {

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-agent-cold-warm-message-67b331a3-kova-261003-053324-5a97b3
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.main.core-imports 113.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm @'kova-agent-cold-warm-message-67b331a3-kova-261003-053324-5a97b3' -- config valida...`
- Failure: "error": {

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261003-053324-5a97b3-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261003-053324-5a97b3-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261003-053324-5a97b3-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-gateway-performance-man-005107f3-kova-261003-053324-5a97b3
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-gateway-performance-man-1e8be6a8-kova-261003-053324-5a97b3
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-gateway-performance-man-958fde53-kova-261003-053324-5a97b3
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-agent-cold-warm-message-8e2a29af-kova-261003-053324-5a97b3
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-agent-cold-warm-message-2ab680e0-kova-261003-053324-5a97b3
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261003-053324-5a97b3/kova-agent-cold-warm-message-67b331a3-kova-261003-053324-5a97b3

## Target Cleanup

- Runtime: `kova-local-muryhsy7-3to-cdae2109`
- Result: removed
- Duration: 486ms

