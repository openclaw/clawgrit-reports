# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway resource evidence was not captured; configured primary resource role has active resource thresholds

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| Blocking findings | 66 |
| Warnings | 0 |
| Records | 15 (BLOCKED:15) |

## Proof Completeness

- Completeness: complete: 12, incomplete: 3
- Required obligations: 111 total, 30 missing, 36 failed
- Categories: command: 30, artifact: 15, cleanup: 15, collector: 15, invariant: 36

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
| Run ID | `kova-260814-223903-8fbb90` |
| Generated | 2026-08-14T22:39:04.875Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 15 |
| Scenarios | 4 |
| States | 4 |
| BLOCKED | 15 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | fresh-install/fresh | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v3; gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| diagnostic-gap | OpenClaw | fresh-install/fresh | 3 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize, plugins.metadata.scan |
| incomplete | OpenClaw | fresh-install/fresh | collector proof failed: final service and health metrics were collected | ocm: environment "kova-fresh-install-fresh-r1-697fad55-kova-260814-223903-8fbb90" does not exist |
| blocked | OpenClaw | fresh-install/fresh | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v3; gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| diagnostic-gap | OpenClaw | fresh-install/fresh | 3 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize, plugins.metadata.scan |
| incomplete | OpenClaw | fresh-install/fresh | collector proof failed: final service and health metrics were collected | ocm: environment "kova-fresh-install-fresh-r2-da880701-kova-260814-223903-8fbb90" does not exist |
| blocked | OpenClaw | fresh-install/fresh | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v3; gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| diagnostic-gap | OpenClaw | fresh-install/fresh | 3 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize, plugins.metadata.scan |
| incomplete | OpenClaw | fresh-install/fresh | collector proof failed: final service and health metrics were collected | ocm: environment "kova-fresh-install-fresh-r3-82f8bdbd-kova-260814-223903-8fbb90" does not exist |
| blocked | OpenClaw | fresh-install/onboarded-user | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v3; gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| diagnostic-gap | OpenClaw | fresh-install/onboarded-user | 3 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize, plugins.metadata.scan |
| incomplete | OpenClaw | fresh-install/onboarded-user | collector proof failed: final service and health metrics were collected | ocm: environment "kova-fresh-install-onboarded-9f99e904-kova-260814-223903-8fbb90" does not exist |
| info | Kova | report | 69 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| gateway-performance/many-bundled-plugins | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | fresh-install/fresh |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 2 | BLOCKED | fresh-install/fresh |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 3 | BLOCKED | fresh-install/fresh |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 1 | BLOCKED | fresh-install/onboarded-user |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 2 | BLOCKED | fresh-install/onboarded-user |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 3 | BLOCKED | fresh-install/onboarded-user |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 1 | BLOCKED | bundled-plugin-startup/fresh |  | unknown | unknown | unknown | n/a | n/a | ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570) |
| 2 | BLOCKED | bundled-plugin-startup/fresh |  | unknown | unknown | unknown | n/a | n/a | ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570) |
| 3 | BLOCKED | bundled-plugin-startup/fresh |  | unknown | unknown | unknown | n/a | n/a | ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570) |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |
| 2 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |
| 3 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 2 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 3 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |

## Selected Sample Details

### fresh-install sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-fresh-r1-697fad55-kova-260814-223903-8fbb90
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mstj47kc-415-f3139aaf' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

### fresh-install sample 2

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-fresh-r2-da880701-kova-260814-223903-8fbb90
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mstj47kc-415-f3139aaf' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

### fresh-install sample 3

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-fresh-r3-82f8bdbd-kova-260814-223903-8fbb90
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mstj47kc-415-f3139aaf' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

### fresh-install sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-onboarded-9f99e904-kova-260814-223903-8fbb90
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mstj47kc-415-f3139aaf' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

### fresh-install sample 2

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-onboarded-f9c24855-kova-260814-223903-8fbb90
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mstj47kc-415-f3139aaf' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

### fresh-install sample 3

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-onboarded-fe872c26-kova-260814-223903-8fbb90
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mstj47kc-415-f3139aaf' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

### bundled-plugin-startup sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-bundled-plugin-startup-4a0cbdf7-kova-260814-223903-8fbb90
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; tracked total RSS unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Failed command: `ocm runtime build-local 'kova-local-mstj47kc-415-f3139aaf' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

### bundled-plugin-startup sample 2

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-bundled-plugin-startup-809ede2b-kova-260814-223903-8fbb90
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; tracked total RSS unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Failed command: `ocm runtime build-local 'kova-local-mstj47kc-415-f3139aaf' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260814-223903-8fbb90-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260814-223903-8fbb90-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260814-223903-8fbb90-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-fresh-r1-697fad55-kova-260814-223903-8fbb90
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-fresh-r2-da880701-kova-260814-223903-8fbb90
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-fresh-r3-82f8bdbd-kova-260814-223903-8fbb90
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-onboarded-9f99e904-kova-260814-223903-8fbb90
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-onboarded-f9c24855-kova-260814-223903-8fbb90
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-fresh-install-onboarded-fe872c26-kova-260814-223903-8fbb90
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-bundled-plugin-startup-4a0cbdf7-kova-260814-223903-8fbb90
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-bundled-plugin-startup-809ede2b-kova-260814-223903-8fbb90
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260814-223903-8fbb90/kova-bundled-plugin-startup-5377119f-kova-260814-223903-8fbb90
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mstj47kc-415-f3139aaf`
- Result: already-absent
- Reason: target runtime was not present when cleanup ran
- Duration: 1ms

