# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 734.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 734.3 MB |
| Blocking findings | 105 |
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
| Run ID | `kova-260722-090027-fbc683` |
| Generated | 2026-07-22T09:34:30.280Z |
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
  - primary: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 734.3 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 734.3 MB
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
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 734.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING fresh-install/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING fresh-install/fresh: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 753.3 MB, status-cli 753.3 MB, plugin-cli 529.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 724 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 529.1 MB, plugin-cli 529.1 MB, status-cli 522 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING fresh-install/onboarded-user: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 726.4 MB, status-cli 726.4 MB, plugin-cli 529.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-090027-fbc683' -- plugins list`
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
  - command: `ocm @'kova-bundled-plugin-startup-4a0cbdf7-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-809ede2b-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING bundled-plugin-startup/fresh: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-bundled-plugin-startup-5377119f-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260722-090027-fbc683' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260722-090027-fbc683' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent message command finished without a usable assistant response
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-agent-cold-warm-message-67b331a3-kova-260722-090027-fbc683' -- agent --local --agent main --session-id kova-agent-cold-warm --message 'Reply with exact ASCII text KOVA_AGENT_OK only.' --thinking off --timeout 120 --json`
- BLOCKING gateway-performance/many-bundled-plugins: gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 526.8 MB, plugin-cli 526.8 MB, status-cli 521.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-005107f3-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-1e8be6a8-kova-260722-090027-fbc683' -- plugins list`
- BLOCKING gateway-performance/many-bundled-plugins: final gateway state was backoff
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
  - command: `ocm @'kova-gateway-performance-man-958fde53-kova-260722-090027-fbc683' -- plugins list`

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
| info | Kova | report | 128 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | n/a | 0MB | n/a | 80% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:3 | n/a | 75.9MB | n/a | 100% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | n/a | 51.6MB | n/a | 66.6% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 153.7% | 1930ms | n/a | n/a |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 58MB | n/a | 100% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 743.4 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 734.3 MB |
| 2 | FAIL | fresh-install/fresh |  | unknown | 60.6 MB | 758.6 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | fresh-install/fresh |  | unknown | 0 MB | 753.3 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 753.3 MB, status-cli 753.3 MB, plugin-cli 529.1 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 743.4 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 724 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 529.1 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 529.1 MB, plugin-cli 529.1 MB, status-cli 522 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | unknown | 0 MB | 726.4 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 726.4 MB, status-cli 726.4 MB, plugin-cli 529.8 MB |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 75.9 MB | 75.9 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 57.5 MB | 57.5 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 83.3 MB | 83.3 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | bundled-plugin-startup/fresh |  | unknown | 51.6 MB | 529.9 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-plugin-startup/fresh |  | unknown | 0 MB | 530.8 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-plugin-startup/fresh |  | unknown | 59.2 MB | 529.5 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 522.3 MB | 1930ms | n/a | agent message command finished without a usable assistant response |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 520.8 MB | 1905ms | n/a | agent message command finished without a usable assistant response |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 520.5 MB | 1977ms | n/a | agent message command finished without a usable assistant response |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 526.8 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 526.8 MB, plugin-cli 526.8 MB, status-cli 521.8 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 58 MB | 759.2 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 71.5 MB | 774.9 MB | n/a | n/a | final gateway state was backoff |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 774.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 168.6% (scenario fresh-install/fresh)
- status-cli: RSS 774.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 168.6% (scenario fresh-install/fresh)
- plugin-cli: RSS 734.3 MB (scenario fresh-install/fresh); CPU 163.6% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 522.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 522.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 83.3 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 114% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 59.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 100% (scenario bundled-runtime-deps/missing-plugin-index)
- uncategorized: RSS 5.4 MB (scenario fresh-install/fresh); CPU 0% (scenario fresh-install/fresh)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-fresh-r1-697fad55-kova-260722-090027-fbc683
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 2ms; post-ready p95 not-collected; failures at least 359; final failures not-collected; slowest startup-sample/provision 4ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 743.4 MB; max CPU unknown; samples 12; roles command-tree 743.4MB/168.6%, status-cli 743.4MB/168.6%, plugin-cli 734.3MB/162.7%, uncategorized 5.2MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 28.3ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 734.3 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r1-697fad55-kova-260722-090027-fbc683' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-fresh-r2-da880701-kova-260722-090027-fbc683
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 358; final failures not-collected; slowest startup-sample/provision 5ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 60.6 MB; tracked total 758.6 MB; max CPU 80%; samples 11; roles command-tree 758.6MB/156.9%, status-cli 758.6MB/156.9%, plugin-cli 527.4MB/156.7%, gateway 60.6MB/80%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 23.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r2-da880701-kova-260722-090027-fbc683' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-090027-fbc683
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 753.3 MB; max CPU unknown; samples 11; roles command-tree 753.3MB/160.7%, status-cli 753.3MB/160.6%, plugin-cli 529.1MB/160.7%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 25.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 753.3 MB, status-cli 753.3 MB, plugin-cli 529.1 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-090027-fbc683' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-onboarded-9f99e904-kova-260722-090027-fbc683
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 359; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 743.4 MB; max CPU unknown; samples 12; roles command-tree 743.4MB/163.6%, status-cli 743.4MB/160.4%, plugin-cli 724MB/163.6%, uncategorized 5.1MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 31.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 743.4 MB, status-cli 743.4 MB, plugin-cli 724 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-9f99e904-kova-260722-090027-fbc683' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-onboarded-f9c24855-kova-260722-090027-fbc683
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 529.1 MB; max CPU unknown; samples 10; roles command-tree 529.1MB/156.7%, plugin-cli 529.1MB/156.7%, status-cli 522MB/150.8%, uncategorized 5.1MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 20.97ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 529.1 MB, plugin-cli 529.1 MB, status-cli 522 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-f9c24855-kova-260722-090027-fbc683' -- plugins list`
- Failure: OpenClaw config is invalid

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-onboarded-fe872c26-kova-260722-090027-fbc683
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/provision 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 726.4 MB; max CPU unknown; samples 11; roles command-tree 726.4MB/156.7%, status-cli 726.4MB/156.7%, plugin-cli 529.8MB/151.7%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 21.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 726.4 MB, status-cli 726.4 MB, plugin-cli 529.8 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-fresh-install-onboarded-fe872c26-kova-260722-090027-fbc683' -- plugins list`
- Failure: OpenClaw config is invalid

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-090027-fbc683
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 777; final failures not-collected; slowest startup-sample/warm-restart 3ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 75.9 MB; tracked total 75.9 MB; max CPU 114%; samples 6; roles gateway 75.9MB/114%, gateway-tree 57.4MB/100%, command-tree 5MB/0%, uncategorized 5MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-090027-fbc683
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 776; final failures not-collected; slowest startup-sample/cold-start 6ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 57.5 MB; tracked total 57.5 MB; max CPU 100%; samples 6; roles gateway 57.5MB/100%, command-tree 5.4MB/0%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 2.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-090027-fbc683-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-090027-fbc683-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-090027-fbc683-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-fresh-r1-697fad55-kova-260722-090027-fbc683
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-fresh-r2-da880701-kova-260722-090027-fbc683
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-fresh-r3-82f8bdbd-kova-260722-090027-fbc683
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-onboarded-9f99e904-kova-260722-090027-fbc683
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-onboarded-f9c24855-kova-260722-090027-fbc683
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-fresh-install-onboarded-fe872c26-kova-260722-090027-fbc683
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-090027-fbc683
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-090027-fbc683
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-090027-fbc683/kova-bundled-runtime-deps-mi-150715ba-kova-260722-090027-fbc683
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrvuqvye-411-8ff8149f`
- Result: removed
- Duration: 529ms

