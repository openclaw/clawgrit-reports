# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 740.7 MB, status-cli 740.7 MB, plugin-cli 715.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 740.7 MB, status-cli 740.7 MB, plugin-cli 715.5 MB |
| Blocking findings | 107 |
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
| Run ID | `kova-260722-145232-9e160f` |
| Generated | 2026-07-22T15:27:03.541Z |
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
  - primary: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 740.7 MB, status-cli 740.7 MB, plugin-cli 715.5 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 740.7 MB, status-cli 740.7 MB, plugin-cli 715.5 MB
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
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 740.7 MB, status-cli 740.7 MB, plugin-cli 715.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 747.7 MB, status-cli 747.7 MB, plugin-cli 527.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 720.2 MB, status-cli 720.2 MB, plugin-cli 532.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 771.1 MB, status-cli 771.1 MB, plugin-cli 528.9 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 747.1 MB, status-cli 747.1 MB, plugin-cli 715.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING fresh-install/onboarded-user: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-145232-9e160f' -- plugins list`
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
  - command: `ocm @'kova-bundled-plugin-startup-4a0cbdf7-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-809ede2b-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-5377119f-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260722-145232-9e160f' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260722-145232-9e160f' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-67b331a3-kova-260722-145232-9e160f' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 725.8 MB, plugin-cli 725.8 MB, status-cli 693.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-005107f3-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 729 MB, status-cli 729 MB, plugin-cli 726.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-1e8be6a8-kova-260722-145232-9e160f' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 749.4 MB, status-cli 749.4 MB, plugin-cli 724.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-958fde53-kova-260722-145232-9e160f' -- plugins list`

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
| info | Kova | report | 130 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | n/a | 0MB | n/a | 100% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:3 | n/a | 103.2MB | n/a | 118% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | n/a | 0MB | n/a | 155.7% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 165.9% | 2164ms | n/a | n/a |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 740.7 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 740.7 MB, status-cli 740.7 MB, plugin-cli 715.5 MB |
| 2 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 747.7 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 747.7 MB, status-cli 747.7 MB, plugin-cli 527.3 MB |
| 3 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 720.2 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 720.2 MB, status-cli 720.2 MB, plugin-cli 532.2 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 771.1 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 771.1 MB, status-cli 771.1 MB, plugin-cli 528.9 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 747.1 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 747.1 MB, status-cli 747.1 MB, plugin-cli 715.7 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | unknown | 57.1 MB | 531.6 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 103.2 MB | 103.2 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 59.4 MB | 59.4 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 295 MB | 299.9 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 528.4 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 528.8 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 529.3 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 734.2 MB | 2164ms | n/a | agent message command finished without a usable assistant response |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 521.2 MB | 1948ms | n/a | agent message command finished without a usable assistant response |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 731.5 MB | 2321ms | n/a | agent message command finished without a usable assistant response |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 725.8 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 725.8 MB, plugin-cli 725.8 MB, status-cli 693.4 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 729 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 729 MB, status-cli 729 MB, plugin-cli 726.3 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 749.4 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 749.4 MB, status-cli 749.4 MB, plugin-cli 724.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 771.1 MB (scenario fresh-install/onboarded-user); CPU 175.6% (scenario fresh-install/onboarded-user)
- status-cli: RSS 771.1 MB (scenario fresh-install/onboarded-user); CPU 169.4% (scenario fresh-install/fresh)
- plugin-cli: RSS 726.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 175.6% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 734.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 734.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 295 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 142% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 295 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 142% (scenario bundled-runtime-deps/missing-plugin-index)
- uncategorized: RSS 21.6 MB (scenario fresh-install/onboarded-user); CPU 0% (scenario fresh-install/fresh)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-fresh-r1-697fad55-kova-260722-145232-9e160f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 2ms; post-ready p95 not-collected; failures at least 358; final failures not-collected; slowest startup-sample/provision 5ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 740.7 MB; max CPU unknown; samples 12; roles command-tree 740.7MB/169.6%, status-cli 740.7MB/169.4%, plugin-cli 715.5MB/169.6%, uncategorized 19.6MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 33.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 740.7 MB, status-cli 740.7 MB, plugin-cli 715.5 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-145232-9e160f' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-fresh-r2-da880701-kova-260722-145232-9e160f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 358; final failures not-collected; slowest startup-sample/provision 4ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 747.7 MB; max CPU unknown; samples 12; roles command-tree 747.7MB/160.8%, status-cli 747.7MB/160.8%, plugin-cli 527.3MB/153.7%, uncategorized 5.3MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 31.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 747.7 MB, status-cli 747.7 MB, plugin-cli 527.3 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-145232-9e160f' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-145232-9e160f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 359; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 720.2 MB; max CPU unknown; samples 11; roles command-tree 720.2MB/158.7%, status-cli 720.2MB/157.9%, plugin-cli 532.2MB/158.7%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 24.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 720.2 MB, status-cli 720.2 MB, plugin-cli 532.2 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-145232-9e160f' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-onboarded-9f99e904-kova-260722-145232-9e160f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 2ms; post-ready p95 not-collected; failures at least 358; final failures not-collected; slowest startup-sample/provision 3ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 771.1 MB; max CPU unknown; samples 11; roles command-tree 771.1MB/160.8%, status-cli 771.1MB/160.8%, plugin-cli 528.9MB/154.8%, uncategorized 4.8MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 20.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 771.1 MB, status-cli 771.1 MB, plugin-cli 528.9 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-145232-9e160f' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-onboarded-f9c24855-kova-260722-145232-9e160f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 3ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 747.1 MB; max CPU unknown; samples 13; roles command-tree 747.1MB/175.6%, status-cli 747.1MB/160.9%, plugin-cli 715.7MB/175.6%, uncategorized 4.9MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 49.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 747.1 MB, status-cli 747.1 MB, plugin-cli 715.7 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-145232-9e160f' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-onboarded-fe872c26-kova-260722-145232-9e160f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 2ms; post-ready p95 not-collected; failures at least 358; final failures not-collected; slowest startup-sample/provision 3ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 57.1 MB; tracked total 531.6 MB; max CPU 100%; samples 10; roles command-tree 531.6MB/155.7%, plugin-cli 531.6MB/154.8%, status-cli 518.6MB/155.7%, gateway 57.1MB/100%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 24.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-145232-9e160f' -- plugins list`
- Failure: OpenClaw config is invalid

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-145232-9e160f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 778; final failures not-collected; slowest startup-sample/cold-start 3ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 103.2 MB; tracked total 103.2 MB; max CPU 118%; samples 6; roles gateway 103.2MB/118%, gateway-tree 91.8MB/111%, command-tree 5.3MB/0%, uncategorized 5.3MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-145232-9e160f
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 779; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 59.4 MB; tracked total 59.4 MB; max CPU 100%; samples 6; roles gateway 59.4MB/100%, gateway-tree 48.8MB/50%, command-tree 5.2MB/0%, uncategorized 5.2MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.4ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-145232-9e160f-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-145232-9e160f-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-145232-9e160f-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-fresh-r1-697fad55-kova-260722-145232-9e160f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-fresh-r2-da880701-kova-260722-145232-9e160f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-145232-9e160f
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-onboarded-9f99e904-kova-260722-145232-9e160f
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-onboarded-f9c24855-kova-260722-145232-9e160f
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-fresh-install-onboarded-fe872c26-kova-260722-145232-9e160f
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-145232-9e160f
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-145232-9e160f
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-145232-9e160f/kova-bundled-runtime-deps-mi-150715ba-kova-260722-145232-9e160f
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrw7bnuz-40q-c1723d39`
- Result: removed
- Duration: 545ms

