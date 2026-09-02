# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — Gateway runtime identity was not trusted: missing-service-identity

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | Gateway runtime identity was not trusted: missing-service-identity |
| Blocking findings | 57 |
| Warnings | 0 |
| Records | 6 (BLOCKED:6) |

## Proof Completeness

- Completeness: complete: 3, incomplete: 3
- Required obligations: 66 total, 30 missing, 18 failed
- Categories: command: 12, artifact: 6, cleanup: 6, collector: 6, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | target-setup command 1: command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 0 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 0 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | final gateway state was missing |
| agent-cold-warm-message | invariant:agent-cli-resource-proof | missing | resource samples were not collected |
| agent-cold-warm-message | invariant:agent-cli-diagnostic-timeline-proof | missing | OpenClaw diagnostic timeline was not available |
| agent-cold-warm-message | invariant:agent-cli-logs-captured | missing | log artifact path was not recorded |
| agent-cold-warm-message | invariant:agent-cli-no-missing-runtime-dependency-errors | missing | missingDependencyErrors measurement was not collected |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260902-052819-f273a0` |
| Generated | 2026-09-02T05:29:02.748Z |
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
| BLOCKED | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v3; Gateway runtime identity was not trusted: missing-service-identity |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v3; gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted | resourceScope: product; resourceContract: primary-role-product-scope-v3; OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 3 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize, plugins.metadata.scan |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof failed: final service and health metrics were collected | ocm: environment "kova-gateway-performance-man-005107f3-kova-260902-052819-f273a0" does not exist |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v3; Gateway runtime identity was not trusted: missing-service-identity |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v3; gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted | resourceScope: product; resourceContract: primary-role-product-scope-v3; OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 3 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize, plugins.metadata.scan |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof failed: final service and health metrics were collected | ocm: environment "kova-gateway-performance-man-1e8be6a8-kova-260902-052819-f273a0" does not exist |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | Gateway runtime identity was not trusted: missing-service-identity | resourceScope: product; resourceContract: primary-role-product-scope-v3; Gateway runtime identity was not trusted: missing-service-identity |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v3; gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| info | Kova | report | 51 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 2 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 3 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | Gateway runtime identity was not trusted: missing-service-identity |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |
| 2 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |
| 3 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-gateway-performance-man-005107f3-kova-260902-052819-f273a0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- Failed command: `ocm runtime build-local 'kova-local-mtjnnum0-42x-118b70c3' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: \[build-all\] plugins:assets:build

### gateway-performance sample 2

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-gateway-performance-man-1e8be6a8-kova-260902-052819-f273a0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- Failed command: `ocm runtime build-local 'kova-local-mtjnnum0-42x-118b70c3' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: \[build-all\] plugins:assets:build

### gateway-performance sample 3

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-gateway-performance-man-958fde53-kova-260902-052819-f273a0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - Gateway runtime identity was not trusted: missing-service-identity
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- Failed command: `ocm runtime build-local 'kova-local-mtjnnum0-42x-118b70c3' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: \[build-all\] plugins:assets:build

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-agent-cold-warm-message-8e2a29af-kova-260902-052819-f273a0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds
  - OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- Failed command: `ocm runtime build-local 'kova-local-mtjnnum0-42x-118b70c3' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: \[build-all\] plugins:assets:build

### agent-cold-warm-message sample 2

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-agent-cold-warm-message-2ab680e0-kova-260902-052819-f273a0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds
  - OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- Failed command: `ocm runtime build-local 'kova-local-mtjnnum0-42x-118b70c3' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: \[build-all\] plugins:assets:build

### agent-cold-warm-message sample 3

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-agent-cold-warm-message-67b331a3-kova-260902-052819-f273a0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds
  - OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- Failed command: `ocm runtime build-local 'kova-local-mtjnnum0-42x-118b70c3' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: \[build-all\] plugins:assets:build

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260902-052819-f273a0-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260902-052819-f273a0-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260902-052819-f273a0-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-gateway-performance-man-005107f3-kova-260902-052819-f273a0
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-gateway-performance-man-1e8be6a8-kova-260902-052819-f273a0
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-gateway-performance-man-958fde53-kova-260902-052819-f273a0
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-agent-cold-warm-message-8e2a29af-kova-260902-052819-f273a0
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-agent-cold-warm-message-2ab680e0-kova-260902-052819-f273a0
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260902-052819-f273a0/kova-agent-cold-warm-message-67b331a3-kova-260902-052819-f273a0

## Target Cleanup

- Runtime: `kova-local-mtjnnum0-42x-118b70c3`
- Result: already-absent
- Reason: target runtime was not present when cleanup ran
- Duration: 2ms

