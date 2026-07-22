# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 715.9 MB, status-cli 715.9 MB, plugin-cli 532.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 715.9 MB, status-cli 715.9 MB, plugin-cli 532.5 MB |
| Blocking findings | 104 |
| Warnings | 20 |
| Records | 18 (FAIL:18) |

## Proof Completeness

- Completeness: incomplete: 18
- Required obligations: 241 total, 27 missing, 33 failed
- Categories: command: 151, artifact: 18, cleanup: 18, collector: 18, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| fresh-install | collector:final-metrics | missing | final health evidence was not collected |
| fresh-install | collector:final-metrics | missing | final health evidence was not collected |
| fresh-install | collector:final-metrics | missing | final health evidence was not collected |
| fresh-install | collector:final-metrics | missing | final health evidence was not collected |
| fresh-install | collector:final-metrics | missing | final health evidence was not collected |
| fresh-install | collector:final-metrics | missing | final health evidence was not collected |
| bundled-runtime-deps | collector:final-metrics | missing | final health evidence was not collected |
| bundled-runtime-deps | collector:final-metrics | missing | final health evidence was not collected |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260722-171457-86caae` |
| Generated | 2026-07-22T17:48:41.382Z |
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
| FAIL | 18 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 18
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 18 blocking, 0 warning
  - primary: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 715.9 MB, status-cli 715.9 MB, plugin-cli 532.5 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 715.9 MB, status-cli 715.9 MB, plugin-cli 532.5 MB
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
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 715.9 MB, status-cli 715.9 MB, plugin-cli 532.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-171457-86caae' -- plugins list`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 734.3 MB, status-cli 734.3 MB, plugin-cli 528.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-171457-86caae' -- plugins list`
- BLOCKING fresh-install/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-171457-86caae' -- plugins list`
- BLOCKING fresh-install/onboarded-user: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-171457-86caae' -- plugins list`
- BLOCKING fresh-install/onboarded-user: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-171457-86caae' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530.9 MB, plugin-cli 530.9 MB, status-cli 521.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-171457-86caae' -- plugins list`
- BLOCKING bundled-runtime-deps/missing-plugin-index: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-runtime-deps/missing-plugin-index: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-runtime-deps/missing-plugin-index: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-4a0cbdf7-kova-260722-171457-86caae' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-809ede2b-kova-260722-171457-86caae' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-5377119f-kova-260722-171457-86caae' -- plugins list`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260722-171457-86caae' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260722-171457-86caae' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-67b331a3-kova-260722-171457-86caae' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 736.3 MB, status-cli 736.3 MB, plugin-cli 722.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-005107f3-kova-260722-171457-86caae' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-1e8be6a8-kova-260722-171457-86caae' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 746 MB, status-cli 746 MB, plugin-cli 727.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-958fde53-kova-260722-171457-86caae' -- plugins list`

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
| info | Kova | report | 127 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | n/a | 0MB | n/a | 100% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | n/a | 44MB | n/a | 25% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:3 | n/a | 135.7MB | n/a | 125% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | n/a | 59.2MB | n/a | 83.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 158.7% | 1991ms | n/a | n/a |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 0MB | n/a | 200% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 715.9 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 715.9 MB, status-cli 715.9 MB, plugin-cli 532.5 MB |
| 2 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 734.3 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 734.3 MB, status-cli 734.3 MB, plugin-cli 528.2 MB |
| 3 | FAIL | fresh-install/fresh |  | unknown | 92.3 MB | 721 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | fresh-install/onboarded-user |  | unknown | 46.9 MB | 759.2 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | fresh-install/onboarded-user |  | unknown | 44 MB | 751.7 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 530.9 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530.9 MB, plugin-cli 530.9 MB, status-cli 521.8 MB |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 303.8 MB | 308.8 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 63.4 MB | 63.4 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 135.7 MB | 135.7 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 719.8 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-plugin-startup/fresh |  | unknown | 60.2 MB | 719.2 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-plugin-startup/fresh |  | unknown | 59.2 MB | 529.7 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 522.4 MB | 1991ms | n/a | agent message command finished without a usable assistant response |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 524 MB | 1936ms | n/a | agent message command finished without a usable assistant response |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 485.9 MB | 2080ms | n/a | agent message command finished without a usable assistant response |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 736.3 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 736.3 MB, status-cli 736.3 MB, plugin-cli 722.5 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 59.3 MB | 742.4 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 746 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 746 MB, status-cli 746 MB, plugin-cli 727.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 759.2 MB (scenario fresh-install/onboarded-user); CPU 176.9% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 303.8 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 200% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 759.2 MB (scenario fresh-install/onboarded-user); CPU 176.9% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 303.8 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 200% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 727.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 173.4% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 524 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 524 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.9% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 20.1 MB (scenario bundled-plugin-startup/fresh); CPU 0% (scenario fresh-install/fresh)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-fresh-r1-697fad55-kova-260722-171457-86caae
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 2ms; post-ready p95 not-collected; failures at least 359; final failures not-collected; slowest startup-sample/provision 4ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 715.9 MB; max CPU unknown; samples 11; roles command-tree 715.9MB/160.9%, status-cli 715.9MB/160.9%, plugin-cli 532.5MB/156.6%, uncategorized 5.3MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 25.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 715.9 MB, status-cli 715.9 MB, plugin-cli 532.5 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-171457-86caae' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-fresh-r2-da880701-kova-260722-171457-86caae
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 734.3 MB; max CPU unknown; samples 11; roles command-tree 734.3MB/161.9%, status-cli 734.3MB/161.9%, plugin-cli 528.2MB/155.7%, uncategorized 4.8MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 24.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 734.3 MB, status-cli 734.3 MB, plugin-cli 528.2 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-171457-86caae' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-171457-86caae
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 92.3 MB; tracked total 721 MB; max CPU 100%; samples 11; roles command-tree 721MB/155.7%, status-cli 721MB/155.7%, plugin-cli 529.4MB/153.7%, gateway 92.3MB/100%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 22.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-171457-86caae' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-onboarded-9f99e904-kova-260722-171457-86caae
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 4ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 46.9 MB; tracked total 759.2 MB; max CPU 0%; samples 12; roles command-tree 759.2MB/173.4%, status-cli 759.2MB/158.6%, plugin-cli 723.4MB/173.4%, gateway 46.9MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 27.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-171457-86caae' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-onboarded-f9c24855-kova-260722-171457-86caae
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 3ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 44 MB; tracked total 751.7 MB; max CPU 50%; samples 11; roles command-tree 751.7MB/168.4%, status-cli 751.7MB/168.4%, plugin-cli 527.1MB/157.6%, gateway 44MB/50%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 25.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-171457-86caae' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-onboarded-fe872c26-kova-260722-171457-86caae
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 359; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 530.9 MB; max CPU unknown; samples 10; roles command-tree 530.9MB/159.7%, plugin-cli 530.9MB/159.7%, status-cli 521.8MB/153.8%, uncategorized 5.2MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 20.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530.9 MB, plugin-cli 530.9 MB, status-cli 521.8 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-171457-86caae' -- plugins list`
- Failure: OpenClaw config is invalid

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-171457-86caae
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 778; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 303.8 MB; tracked total 308.8 MB; max CPU 139%; samples 6; roles gateway 303.8MB/139%, gateway-tree 303.8MB/139%, command-tree 5.4MB/0%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-171457-86caae
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 779; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 63.4 MB; tracked total 63.4 MB; max CPU 100%; samples 6; roles gateway 63.4MB/100%, gateway-tree 28.3MB/0%, command-tree 5.3MB/0%, uncategorized 5.3MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-171457-86caae-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-171457-86caae-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-171457-86caae-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-fresh-r1-697fad55-kova-260722-171457-86caae
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-fresh-r2-da880701-kova-260722-171457-86caae
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-171457-86caae
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-onboarded-9f99e904-kova-260722-171457-86caae
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-onboarded-f9c24855-kova-260722-171457-86caae
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-fresh-install-onboarded-fe872c26-kova-260722-171457-86caae
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-171457-86caae
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-171457-86caae
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-171457-86caae/kova-bundled-runtime-deps-mi-150715ba-kova-260722-171457-86caae
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrwcetbo-40x-6a93fb70`
- Result: removed
- Duration: 507ms

