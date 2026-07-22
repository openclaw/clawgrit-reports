# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 536.9 MB, plugin-cli 536.9 MB, status-cli 524.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 536.9 MB, plugin-cli 536.9 MB, status-cli 524.3 MB |
| Blocking findings | 108 |
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
| Run ID | `kova-260722-111024-600570` |
| Generated | 2026-07-22T11:43:23.065Z |
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
  - primary: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 536.9 MB, plugin-cli 536.9 MB, status-cli 524.3 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 536.9 MB, plugin-cli 536.9 MB, status-cli 524.3 MB
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
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 536.9 MB, plugin-cli 536.9 MB, status-cli 524.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-111024-600570' -- plugins list`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 750.8 MB, status-cli 750.8 MB, plugin-cli 737.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-111024-600570' -- plugins list`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 532.1 MB, plugin-cli 532.1 MB, status-cli 521.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-111024-600570' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 726.6 MB, status-cli 726.6 MB, plugin-cli 525.9 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-111024-600570' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 531.4 MB, plugin-cli 531.4 MB, status-cli 527.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-111024-600570' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530.7 MB, plugin-cli 530.7 MB, status-cli 526.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-111024-600570' -- plugins list`
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
  - command: `ocm @'kova-bundled-plugin-startup-4a0cbdf7-kova-260722-111024-600570' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-809ede2b-kova-260722-111024-600570' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-5377119f-kova-260722-111024-600570' -- plugins list`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260722-111024-600570' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260722-111024-600570' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-67b331a3-kova-260722-111024-600570' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530 MB, plugin-cli 530 MB, status-cli 529.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-005107f3-kova-260722-111024-600570' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 730.2 MB, plugin-cli 730.2 MB, status-cli 685.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-1e8be6a8-kova-260722-111024-600570' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 754.7 MB, status-cli 754.7 MB, plugin-cli 529.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-958fde53-kova-260722-111024-600570' -- plugins list`

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
| info | Kova | report | 131 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:3 | n/a | 106.3MB | n/a | 116% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | n/a | 0MB | n/a | 151.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 152.7% | 1675ms | n/a | n/a |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 536.9 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 536.9 MB, plugin-cli 536.9 MB, status-cli 524.3 MB |
| 2 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 750.8 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 750.8 MB, status-cli 750.8 MB, plugin-cli 737.7 MB |
| 3 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 532.1 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 532.1 MB, plugin-cli 532.1 MB, status-cli 521.7 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 726.6 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 726.6 MB, status-cli 726.6 MB, plugin-cli 525.9 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 531.4 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 531.4 MB, plugin-cli 531.4 MB, status-cli 527.8 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 530.7 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530.7 MB, plugin-cli 530.7 MB, status-cli 526.4 MB |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 296.4 MB | 301.5 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 91.3 MB | 91.3 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 106.3 MB | 106.3 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 544.6 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 728.2 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 533.6 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 523.8 MB | 1650ms | n/a | agent message command finished without a usable assistant response |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 522.8 MB | 1675ms | n/a | agent message command finished without a usable assistant response |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 492.5 MB | 1759ms | n/a | agent message command finished without a usable assistant response |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 530 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530 MB, plugin-cli 530 MB, status-cli 529.1 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 730.2 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 730.2 MB, plugin-cli 730.2 MB, status-cli 685.3 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 754.7 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 754.7 MB, status-cli 754.7 MB, plugin-cli 529.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 754.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 171.8% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 754.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 169.8% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 737.7 MB (scenario fresh-install/fresh); CPU 171.8% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 523.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 523.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 296.4 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 140% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 296.4 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 140% (scenario bundled-runtime-deps/missing-plugin-index)
- uncategorized: RSS 5.4 MB (scenario fresh-install/fresh); CPU 0% (scenario fresh-install/fresh)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-fresh-r1-697fad55-kova-260722-111024-600570
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 4ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 536.9 MB; max CPU unknown; samples 10; roles command-tree 536.9MB/151.8%, plugin-cli 536.9MB/151.8%, status-cli 524.3MB/150.8%, uncategorized 5.3MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 20.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 536.9 MB, plugin-cli 536.9 MB, status-cli 524.3 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-111024-600570' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-fresh-r2-da880701-kova-260722-111024-600570
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 750.8 MB; max CPU unknown; samples 12; roles command-tree 750.8MB/163.4%, status-cli 750.8MB/163.4%, plugin-cli 737.7MB/161.9%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 23.42ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 750.8 MB, status-cli 750.8 MB, plugin-cli 737.7 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-111024-600570' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-111024-600570
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 2ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 4ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 532.1 MB; max CPU unknown; samples 10; roles command-tree 532.1MB/158.7%, plugin-cli 532.1MB/158.7%, status-cli 521.7MB/153.7%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 21.02ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 532.1 MB, plugin-cli 532.1 MB, status-cli 521.7 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-111024-600570' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-onboarded-9f99e904-kova-260722-111024-600570
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 726.6 MB; max CPU unknown; samples 11; roles command-tree 726.6MB/169.8%, status-cli 726.6MB/169.8%, plugin-cli 525.9MB/162.8%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 23.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 726.6 MB, status-cli 726.6 MB, plugin-cli 525.9 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-111024-600570' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-onboarded-f9c24855-kova-260722-111024-600570
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 531.4 MB; max CPU unknown; samples 10; roles command-tree 531.4MB/157.7%, plugin-cli 531.4MB/157.7%, status-cli 527.8MB/155.7%, uncategorized 5.3MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 25.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 531.4 MB, plugin-cli 531.4 MB, status-cli 527.8 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-111024-600570' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-onboarded-fe872c26-kova-260722-111024-600570
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 530.7 MB; max CPU unknown; samples 10; roles command-tree 530.7MB/154.8%, plugin-cli 530.7MB/153.8%, status-cli 526.4MB/154.8%, uncategorized 5MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 20.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530.7 MB, plugin-cli 530.7 MB, status-cli 526.4 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-111024-600570' -- plugins list`
- Failure: OpenClaw config is invalid

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-111024-600570
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 779; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 296.4 MB; tracked total 301.5 MB; max CPU 140%; samples 6; roles gateway 296.4MB/140%, gateway-tree 296.4MB/140%, command-tree 5.4MB/0%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-111024-600570
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 779; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 91.3 MB; tracked total 91.3 MB; max CPU 116%; samples 6; roles gateway 91.3MB/116%, gateway-tree 61.4MB/100%, command-tree 5.3MB/0%, uncategorized 5.3MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-111024-600570-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-111024-600570-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-111024-600570-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-fresh-r1-697fad55-kova-260722-111024-600570
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-fresh-r2-da880701-kova-260722-111024-600570
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-111024-600570
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-onboarded-9f99e904-kova-260722-111024-600570
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-onboarded-f9c24855-kova-260722-111024-600570
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-fresh-install-onboarded-fe872c26-kova-260722-111024-600570
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-111024-600570
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-111024-600570
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-111024-600570/kova-bundled-runtime-deps-mi-150715ba-kova-260722-111024-600570
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrvze08l-40y-6dc5beef`
- Result: removed
- Duration: 509ms

