# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway resource evidence was not captured; configured primary resource role has active resource thresholds

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| Blocking findings | 18 |
| Warnings | 0 |
| Records | 2 (BLOCKED:2) |

## Proof Completeness

- Completeness: complete: 1, incomplete: 1
- Required obligations: 22 total, 10 missing, 6 failed
- Categories: command: 4, artifact: 2, cleanup: 2, collector: 2, invariant: 12

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
| Run ID | `kova-260812-054706-27f22e` |
| Generated | 2026-08-12T05:47:06.717Z |
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
| BLOCKED | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v3; gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted | resourceScope: product; resourceContract: primary-role-product-scope-v3; OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 3 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize, plugins.metadata.scan |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof failed: final service and health metrics were collected | ocm: environment "kova-gateway-performance-man-d48bd949-kova-260812-054706-27f22e" does not exist |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds | resourceScope: product; resourceContract: primary-role-product-scope-v3; agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |
| blocked | OpenClaw | agent-cold-warm-message/mock-openai-provider | OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted | resourceScope: product; resourceContract: primary-role-product-scope-v3; OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted |
| diagnostic-gap | OpenClaw | agent-cold-warm-message/mock-openai-provider | 1 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: plugins.metadata.scan |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | target-setup command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 0 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | expected at least 2 agent turn(s), found 0 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | agent turn attribution count 0 was below required 2; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260812-054706-27f22e/kova-agent-cold-warm-message-2c26dd1d-kova-260812-054706-27f22e/provider/provider-evidence.json |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent total, pre-provider, provider, and post-provider latency windows were measured | expected at least 2 agent turn(s), found 0 |
| info | Kova | report | 8 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | BLOCKED:1 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-process resource evidence was not captured; configured primary resource role has active resource thresholds |

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260812-054706-27f22e/kova-gateway-performance-man-d48bd949-kova-260812-054706-27f22e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none; performance thresholds skipped 0 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- Failed command: `ocm runtime build-local 'kova-local-mspo34g9-3yv-e43b1782' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

### agent-cold-warm-message sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260812-054706-27f22e/kova-agent-cold-warm-message-2c26dd1d-kova-260812-054706-27f22e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none; performance thresholds skipped 0 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process resource evidence was not captured; configured primary resource role has active resource thresholds
  - OpenClaw diagnostics timeline was required for profile 'diagnostic' on target kind 'local-build' but was not emitted
- Failed command: `ocm runtime build-local 'kova-local-mspo34g9-3yv-e43b1782' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: at parse (file:///home/runner/\_work/openclaw/openclaw/node\_modules/tsx/dist/index-CQhDiIsg.mjs:10:26570)

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260812-054706-27f22e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260812-054706-27f22e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260812-054706-27f22e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260812-054706-27f22e/kova-gateway-performance-man-d48bd949-kova-260812-054706-27f22e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260812-054706-27f22e/kova-agent-cold-warm-message-2c26dd1d-kova-260812-054706-27f22e

## Target Cleanup

- Runtime: `kova-local-mspo34g9-3yv-e43b1782`
- Result: already-absent
- Reason: target runtime was not present when cleanup ran
- Duration: 1ms

