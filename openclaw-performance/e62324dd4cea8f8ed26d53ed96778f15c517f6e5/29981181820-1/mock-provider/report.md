# Kova OpenClaw Runtime Report

> **⛔ [BLOCKED]** — gateway resource evidence was not captured; configured primary resource role has active resource thresholds

## Verdict

| Field | Value |
|---|---|
| Verdict | BLOCKED |
| Reason | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| Blocking findings | 90 |
| Warnings | 20 |
| Records | 18 (BLOCKED:18) |

## Proof Completeness

- Completeness: complete: 15, incomplete: 3
- Required obligations: 126 total, 30 missing, 42 failed
- Categories: command: 36, artifact: 18, cleanup: 18, collector: 18, invariant: 36

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
| Run ID | `kova-260723-050554-fc97de` |
| Generated | 2026-07-23T05:07:51.763Z |
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
| BLOCKED | 18 |

## Release Gate

- Verdict: BLOCKED
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 18
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 18 blocking, 0 warning
  - primary: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Kova: Required release gate platform coverage linux-arm64 was not present in the report.

### Failure Cards

- WARNING gate: Required release gate platform coverage linux-arm64 was not present in the report.
  - expected: platform coverage linux-arm64
  - actual: 3 platform coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate platform coverage wsl2 was not present in the report.
  - expected: platform coverage wsl2
  - actual: 3 platform coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage failure-containment:baseline was not present in the report.
  - expected: requirement coverage failure-containment:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage soak:baseline was not present in the report.
  - expected: requirement coverage soak:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage workspace-scan:baseline was not present in the report.
  - expected: requirement coverage workspace-scan:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-runtime:baseline was not present in the report.
  - expected: requirement coverage mcp-runtime:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cron-runtime:run-now was not present in the report.
  - expected: requirement coverage cron-runtime:run-now
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report.
  - expected: requirement coverage exec-tool-safety:safe-and-blocked-exec
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report.
  - expected: requirement coverage mcp-tool-call:safe-tool-call
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report.
  - expected: requirement coverage tool-failure-containment:failure-attribution
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage browser-automation:baseline was not present in the report.
  - expected: requirement coverage browser-automation:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage media-understanding:baseline was not present in the report.
  - expected: requirement coverage media-understanding:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage network-offline:baseline was not present in the report.
  - expected: requirement coverage network-offline:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cross-platform-smoke:baseline was not present in the report.
  - expected: requirement coverage cross-platform-smoke:baseline
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:list-survives-dirty-state was not present in the report.
  - expected: requirement coverage dirty-plugin-state:list-survives-dirty-state
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:doctor-preserves-user-files was not present in the report.
  - expected: requirement coverage dirty-plugin-state:doctor-preserves-user-files
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:plugin-failure-recovery was not present in the report.
  - expected: requirement coverage release-update-recovery:plugin-failure-recovery
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:doctor-repair-contract was not present in the report.
  - expected: requirement coverage release-update-recovery:doctor-repair-contract
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:update-retry-target-stability was not present in the report.
  - expected: requirement coverage release-update-recovery:update-retry-target-stability
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:rollback-available was not present in the report.
  - expected: requirement coverage release-update-recovery:rollback-available
  - actual: 5 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING bundled-runtime-deps/missing-plugin-index: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING bundled-runtime-deps/missing-plugin-index: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING bundled-runtime-deps/missing-plugin-index: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING bundled-plugin-startup/fresh: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING bundled-plugin-startup/fresh: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING bundled-plugin-startup/fresh: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds
  - expected: PASS for release gate
  - actual: BLOCKED
  - impact: The release gate could not complete enough evidence to approve the OpenClaw build.
  - likely owner: OpenClaw
  - command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/openclaw/openclaw' --force`

Info cards omitted from Markdown: 44. See JSON report for full gate coverage details.

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| warning | Kova | run | Required release gate platform coverage linux-arm64 was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate platform coverage wsl2 was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage failure-containment:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage soak:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage workspace-scan:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage mcp-runtime:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage cron-runtime:run-now was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage browser-automation:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| warning | Kova | run | Required release gate requirement coverage media-understanding:baseline was not present in the report. | The release gate is incomplete and cannot approve the OpenClaw build. |
| info | Kova | report | 116 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | BLOCKED:3 | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
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
| 1 | BLOCKED | bundled-runtime-deps/missing-plugin-index |  | unknown | unknown | unknown | n/a | n/a | ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs |
| 2 | BLOCKED | bundled-runtime-deps/missing-plugin-index |  | unknown | unknown | unknown | n/a | n/a | ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs |
| 3 | BLOCKED | bundled-runtime-deps/missing-plugin-index |  | unknown | unknown | unknown | n/a | n/a | ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs |
| 1 | BLOCKED | bundled-plugin-startup/fresh |  | unknown | unknown | unknown | n/a | n/a | ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs |
| 2 | BLOCKED | bundled-plugin-startup/fresh |  | unknown | unknown | unknown | n/a | n/a | ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs |
| 3 | BLOCKED | bundled-plugin-startup/fresh |  | unknown | unknown | unknown | n/a | n/a | ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs |
| 1 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-cli resource evidence was not captured; configured primary resource role has active resource thresholds |
| 2 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-cli resource evidence was not captured; configured primary resource role has active resource thresholds |
| 3 | BLOCKED | agent-cold-warm-message/mock-openai-provider |  | unknown | unknown | unknown | n/a | n/a | agent-cli resource evidence was not captured; configured primary resource role has active resource thresholds |
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 2 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |
| 3 | BLOCKED | gateway-performance/many-bundled-plugins |  | unknown | unknown | unknown | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds |

## Selected Sample Details

### fresh-install sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-fresh-r1-697fad55-kova-260723-050554-fc97de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs

### fresh-install sample 2

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-fresh-r2-da880701-kova-260723-050554-fc97de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs

### fresh-install sample 3

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-050554-fc97de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs

### fresh-install sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-onboarded-9f99e904-kova-260723-050554-fc97de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs

### fresh-install sample 2

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-onboarded-f9c24855-kova-260723-050554-fc97de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs

### fresh-install sample 3

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-onboarded-fe872c26-kova-260723-050554-fc97de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds
- Failed command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs

### bundled-runtime-deps sample 1

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-050554-fc97de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; tracked total RSS unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Failed command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs

### bundled-runtime-deps sample 2

- Status: BLOCKED
- Cleanup: already-absent
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-050554-fc97de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway unknown; restarts unknown
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; tracked total RSS unknown; tracked total unknown; max CPU unknown; samples 0; roles none
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps not-observed; plugin failures not-observed; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline unavailable; slowest span none n/a; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Failed command: `ocm runtime build-local 'kova-local-mrx1t3d3-41f-3fab30e0' --repo '/home/runner/_work/o...`
- Failure: ocm: failed to pack local OpenClaw build: $ node scripts/build-all.mjs

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-050554-fc97de-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-050554-fc97de-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-050554-fc97de-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-fresh-r1-697fad55-kova-260723-050554-fc97de
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-fresh-r2-da880701-kova-260723-050554-fc97de
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-050554-fc97de
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-onboarded-9f99e904-kova-260723-050554-fc97de
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-onboarded-f9c24855-kova-260723-050554-fc97de
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-fresh-install-onboarded-fe872c26-kova-260723-050554-fc97de
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-050554-fc97de
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-050554-fc97de
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-050554-fc97de/kova-bundled-runtime-deps-mi-150715ba-kova-260723-050554-fc97de
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrx1t3d3-41f-3fab30e0`
- Result: already-absent
- Reason: target runtime was not present when cleanup ran
- Duration: 2ms

