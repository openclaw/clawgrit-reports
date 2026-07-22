# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 541.3 MB, plugin-cli 541.3 MB, status-cli 531.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 541.3 MB, plugin-cli 541.3 MB, status-cli 531.5 MB |
| Blocking findings | 106 |
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
| Run ID | `kova-260722-102227-688485` |
| Generated | 2026-07-22T10:55:17.230Z |
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
  - primary: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 541.3 MB, plugin-cli 541.3 MB, status-cli 531.5 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 541.3 MB, plugin-cli 541.3 MB, status-cli 531.5 MB
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
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 541.3 MB, plugin-cli 541.3 MB, status-cli 531.5 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-102227-688485' -- plugins list`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 533.4 MB, plugin-cli 533.4 MB, status-cli 525.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-102227-688485' -- plugins list`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 529.8 MB, plugin-cli 529.8 MB, status-cli 519.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-102227-688485' -- plugins list`
- BLOCKING fresh-install/onboarded-user: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-102227-688485' -- plugins list`
- BLOCKING fresh-install/onboarded-user: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-102227-688485' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 725.8 MB, status-cli 725.8 MB, plugin-cli 533.2 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-102227-688485' -- plugins list`
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
  - command: `ocm @'kova-bundled-plugin-startup-4a0cbdf7-kova-260722-102227-688485' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-809ede2b-kova-260722-102227-688485' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-5377119f-kova-260722-102227-688485' -- plugins list`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260722-102227-688485' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260722-102227-688485' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-67b331a3-kova-260722-102227-688485' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 781.6 MB, status-cli 781.6 MB, plugin-cli 725.9 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-005107f3-kova-260722-102227-688485' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 558.6 MB, status-cli 558.6 MB, plugin-cli 539.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-1e8be6a8-kova-260722-102227-688485' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 726.2 MB, status-cli 726.2 MB, plugin-cli 528.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-958fde53-kova-260722-102227-688485' -- plugins list`

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
| info | Kova | report | 129 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | n/a | 64.4MB | n/a | 74.95% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:3 | n/a | 126.9MB | n/a | 131% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | n/a | 0MB | n/a | 155.7% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 164.4% | 2175ms | n/a | n/a |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 541.3 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 541.3 MB, plugin-cli 541.3 MB, status-cli 531.5 MB |
| 2 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 533.4 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 533.4 MB, plugin-cli 533.4 MB, status-cli 525.2 MB |
| 3 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 529.8 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 529.8 MB, plugin-cli 529.8 MB, status-cli 519.4 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | unknown | 64.4 MB | 769.3 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | fresh-install/onboarded-user |  | unknown | 74.3 MB | 712.1 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 725.8 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 725.8 MB, status-cli 725.8 MB, plugin-cli 533.2 MB |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 302.9 MB | 307.7 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 126.1 MB | 126.1 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 126.9 MB | 126.9 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | bundled-plugin-startup/fresh |  | unknown | 56.7 MB | 725.2 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 527.2 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 535.9 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 728.7 MB | 2311ms | n/a | agent message command finished without a usable assistant response |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 728.9 MB | 2175ms | n/a | agent message command finished without a usable assistant response |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 520.2 MB | 1861ms | n/a | agent message command finished without a usable assistant response |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 781.6 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 781.6 MB, status-cli 781.6 MB, plugin-cli 725.9 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 558.6 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 558.6 MB, status-cli 558.6 MB, plugin-cli 539.3 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 726.2 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 726.2 MB, status-cli 726.2 MB, plugin-cli 528.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 781.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 171.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 728.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 781.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 165.9% (scenario fresh-install/onboarded-user)
- agent-process: RSS 728.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 171.3% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 725.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 165.9% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 302.9 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 134% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 302.9 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 134% (scenario bundled-runtime-deps/missing-plugin-index)
- uncategorized: RSS 5.4 MB (scenario fresh-install/fresh); CPU 0% (scenario fresh-install/fresh)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-fresh-r1-697fad55-kova-260722-102227-688485
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 4ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 541.3 MB; max CPU unknown; samples 10; roles command-tree 541.3MB/152.8%, plugin-cli 541.3MB/148.8%, status-cli 531.5MB/152.8%, uncategorized 5.2MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 26.34ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 541.3 MB, plugin-cli 541.3 MB, status-cli 531.5 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-102227-688485' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-fresh-r2-da880701-kova-260722-102227-688485
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 1ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 533.4 MB; max CPU unknown; samples 10; roles command-tree 533.4MB/153.8%, plugin-cli 533.4MB/153.8%, status-cli 525.2MB/149.8%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 20.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 533.4 MB, plugin-cli 533.4 MB, status-cli 525.2 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-102227-688485' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-102227-688485
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 1ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 529.8 MB; max CPU unknown; samples 10; roles command-tree 529.8MB/156.7%, plugin-cli 529.8MB/150.7%, status-cli 519.4MB/156.7%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 21.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 529.8 MB, plugin-cli 529.8 MB, status-cli 519.4 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-102227-688485' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-onboarded-9f99e904-kova-260722-102227-688485
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 64.4 MB; tracked total 769.3 MB; max CPU 66.6%; samples 11; roles command-tree 769.3MB/165.9%, status-cli 769.3MB/165.9%, plugin-cli 530.8MB/156.7%, gateway 64.4MB/66.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 27.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-102227-688485' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-onboarded-f9c24855-kova-260722-102227-688485
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 74.3 MB; tracked total 712.1 MB; max CPU 83.3%; samples 11; roles command-tree 712.1MB/161.9%, status-cli 712.1MB/161.9%, plugin-cli 531.5MB/158.6%, gateway 74.3MB/83.3%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 30.31ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-102227-688485' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-onboarded-fe872c26-kova-260722-102227-688485
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 725.8 MB; max CPU unknown; samples 11; roles command-tree 725.8MB/157.8%, status-cli 725.8MB/157.8%, plugin-cli 533.2MB/157.7%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 24.11ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 725.8 MB, status-cli 725.8 MB, plugin-cli 533.2 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-102227-688485' -- plugins list`
- Failure: OpenClaw config is invalid

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-102227-688485
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 782; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 302.9 MB; tracked total 307.7 MB; max CPU 134%; samples 6; roles gateway 302.9MB/134%, gateway-tree 302.9MB/134%, command-tree 5.1MB/0%, uncategorized 5.1MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-102227-688485
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 2ms; post-ready p95 not-collected; failures at least 776; final failures not-collected; slowest startup-sample/cold-start 3ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 126.1 MB; tracked total 126.1 MB; max CPU 131%; samples 6; roles gateway 126.1MB/131%, gateway-tree 93.5MB/120%, command-tree 5.4MB/0%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-102227-688485-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-102227-688485-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-102227-688485-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-fresh-r1-697fad55-kova-260722-102227-688485
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-fresh-r2-da880701-kova-260722-102227-688485
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-102227-688485
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-onboarded-9f99e904-kova-260722-102227-688485
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-onboarded-f9c24855-kova-260722-102227-688485
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-fresh-install-onboarded-fe872c26-kova-260722-102227-688485
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-102227-688485
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-102227-688485
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-102227-688485/kova-bundled-runtime-deps-mi-150715ba-kova-260722-102227-688485
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrvxobmx-417-1b326ed7`
- Result: removed
- Duration: 521ms

