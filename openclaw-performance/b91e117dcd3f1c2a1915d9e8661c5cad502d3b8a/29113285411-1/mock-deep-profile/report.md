# Kova OpenClaw Runtime Report

> **❌ [DO-NOT-SHIP] FAIL** — gateway peak RSS 917.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 917.2 MB, gateway-tree 917.2 MB, command-tree 798.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO_NOT_SHIP |
| Reason | gateway peak RSS 917.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 917.2 MB, gateway-tree 917.2 MB, command-tree 798.3 MB |
| Blocking findings | 25 |
| Warnings | 20 |
| Records | 4 (FAIL:4) |

## Proof Completeness

- Completeness: complete: 4
- Required obligations: 54 total, 0 missing, 1 failed
- Categories: command: 34, artifact: 4, cleanup: 4, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | cold-agent-turn responseOk was not true |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260710-180612-91f1fa` |
| Generated | 2026-07-10T18:11:09.560Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.13.0 |
| Repeat / parallel | 1 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 4 |
| Scenarios | 3 |
| States | 4 |
| FAIL | 4 |

## Release Gate

- Verdict: DO_NOT_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 48
- Blocking: 4
- Warnings: 20
- Info: 48

### Subsystems

- OpenClaw: 4 blocking, 0 warning
  - primary: gateway peak RSS 917.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 917.2 MB, gateway-tree 917.2 MB, command-tree 798.3 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 917.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 917.2 MB, gateway-tree 917.2 MB, command-tree 798.3 MB
- Kova: Required release gate platform coverage linux-arm64 was not present in the report.

### Failure Cards

- WARNING gate: Required release gate platform coverage linux-arm64 was not present in the report.
  - expected: platform coverage linux-arm64
  - actual: linux/x64
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate platform coverage wsl2 was not present in the report.
  - expected: platform coverage wsl2
  - actual: linux/x64
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage failure-containment:baseline was not present in the report.
  - expected: requirement coverage failure-containment:baseline
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage soak:baseline was not present in the report.
  - expected: requirement coverage soak:baseline
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage workspace-scan:baseline was not present in the report.
  - expected: requirement coverage workspace-scan:baseline
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-runtime:baseline was not present in the report.
  - expected: requirement coverage mcp-runtime:baseline
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cron-runtime:run-now was not present in the report.
  - expected: requirement coverage cron-runtime:run-now
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report.
  - expected: requirement coverage exec-tool-safety:safe-and-blocked-exec
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report.
  - expected: requirement coverage mcp-tool-call:safe-tool-call
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report.
  - expected: requirement coverage tool-failure-containment:failure-attribution
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage browser-automation:baseline was not present in the report.
  - expected: requirement coverage browser-automation:baseline
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage media-understanding:baseline was not present in the report.
  - expected: requirement coverage media-understanding:baseline
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage network-offline:baseline was not present in the report.
  - expected: requirement coverage network-offline:baseline
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cross-platform-smoke:baseline was not present in the report.
  - expected: requirement coverage cross-platform-smoke:baseline
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:list-survives-dirty-state was not present in the report.
  - expected: requirement coverage dirty-plugin-state:list-survives-dirty-state
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:doctor-preserves-user-files was not present in the report.
  - expected: requirement coverage dirty-plugin-state:doctor-preserves-user-files
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:plugin-failure-recovery was not present in the report.
  - expected: requirement coverage release-update-recovery:plugin-failure-recovery
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:doctor-repair-contract was not present in the report.
  - expected: requirement coverage release-update-recovery:doctor-repair-contract
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:update-retry-target-stability was not present in the report.
  - expected: requirement coverage release-update-recovery:update-retry-target-stability
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:rollback-available was not present in the report.
  - expected: requirement coverage release-update-recovery:rollback-available
  - actual: 3 requirement obligation(s) present
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- BLOCKING fresh-install/fresh: gateway peak RSS 917.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 917.2 MB, gateway-tree 917.2 MB, command-tree 798.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 947.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 947.5 MB, gateway-tree 947.3 MB, command-tree 831.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 965.3 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 965.3 MB, agent-process 965.3 MB, command-tree 965.3 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 985.7 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 985.7 MB, gateway-tree 985.4 MB, command-tree 783.4 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw

Info cards omitted from Markdown: 48. See JSON report for full gate coverage details.

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
| info | Kova | report | 36 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 1 | FAIL:1 | 11705ms | 917.2MB | n/a | 139% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 1 | FAIL:1 | 9220ms | 947.5MB | n/a | 143% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 145.5% | 4491ms | 5176ms | 3860ms |
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 8082ms | 985.7MB | n/a | 137% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 11705ms | 917.2 MB | 1715.5 MB | n/a | n/a | gateway peak RSS 917.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 917.2 MB, gateway-tree 917.2 MB, command-tree 798.3 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 9220ms | 947.5 MB | 1734.8 MB | n/a | n/a | gateway peak RSS 947.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 947.5 MB, gateway-tree 947.3 MB, command-tree 831.4 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 965.3 MB | 4491ms | 5176ms | agent-cli peak RSS 965.3 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 965.3 MB, agent-process 965.3 MB, command-tree 965.3 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 8082ms | 985.7 MB | 1624.8 MB | n/a | n/a | gateway peak RSS 985.7 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 985.7 MB, gateway-tree 985.4 MB, command-tree 783.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 985.7 MB; CPU 143%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 985.4 MB; CPU 143%; scenario gateway-performance/many-bundled-plugins
- command-tree: RSS 965.3 MB; CPU 155.7%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 965.3 MB; CPU 145.5%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 965.3 MB; CPU 145.5%; scenario agent-cold-warm-message/mock-openai-provider
- status-cli: RSS 831.4 MB; CPU 155.7%; scenario fresh-install/onboarded-user
- plugin-cli: RSS 799.7 MB; CPU 149%; scenario fresh-install/onboarded-user
- model-cli: RSS 641.3 MB; CPU 152.7%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-fresh-install-fresh-8da406d9-kova-260710-180612-91f1fa
Measurements:
- startup: listening 10833ms; health 11705ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 1ms; post-ready p95 5ms; failures 117; final failures 0; slowest startup-sample/provision 872ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 917.2 MB; tracked total 1715.5 MB; max CPU 139%; samples 62; roles gateway 917.2MB/139%, gateway-tree 917.2MB/139%, command-tree 798.3MB/152.7%, plugin-cli 798.3MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span sidecars.model-prewarm 534.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 20/20/18
- Violations:
  - gateway peak RSS 917.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 917.2 MB, gateway-tree 917.2 MB, command-tree 798.3 MB
  - gateway peak RSS 917.2 MB exceeded threshold 800 MB
  - plugin-cli peak RSS 798.3 MB exceeded threshold 600 MB
  - status-cli peak RSS 793.6 MB exceeded threshold 500 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-fresh-install-onboarded-1bcfbc31-kova-260710-180612-91f1fa
Measurements:
- startup: listening 8297ms; health 9220ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 1ms; post-ready p95 5ms; failures 92; final failures 0; slowest startup-sample/provision 923ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 947.5 MB; tracked total 1734.8 MB; max CPU 143%; samples 73; roles gateway 947.5MB/143%, gateway-tree 947.3MB/143%, command-tree 831.4MB/155.7%, status-cli 831.4MB/155.7%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span sidecars.model-prewarm 938.91ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 21/21/19
- Violations:
  - gateway peak RSS 947.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 947.5 MB, gateway-tree 947.3 MB, command-tree 831.4 MB
  - gateway peak RSS 947.5 MB exceeded threshold 800 MB
  - plugin-cli peak RSS 799.7 MB exceeded threshold 600 MB
  - status-cli peak RSS 831.4 MB exceeded threshold 500 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-agent-cold-warm-message-2c26dd1d-kova-260710-180612-91f1fa
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 965.3 MB; tracked total 965.3 MB; max CPU 145.5%; samples 56; roles agent-cli 965.3MB/145.5%, agent-process 965.3MB/145.5%, command-tree 965.3MB/146.5%, status-cli 770.5MB/146.5%
- agent: turn 5176ms; cold/warm 4491ms/5176ms; cold-warm delta 0ms; pre-provider 4512ms; provider 2ms; metadata scans 10 (222.03ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5141.75ms; max 5176ms; pre-provider p95 4479.4ms
- agent CLI attribution: cold known 100ms / unattributed 3760ms; warm known 123ms / unattributed 4389ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 57.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 12/12/12
- Violations:
  - agent-cli peak RSS 965.3 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 965.3 MB, agent-process 965.3 MB, command-tree 965.3 MB
  - agent-cli peak RSS 965.3 MB exceeded threshold 900 MB
  - agent-process peak RSS 965.3 MB exceeded threshold 900 MB
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA_AGENT_OK
  - warm agent turn did not produce the expected assistant response
  - warm agent turn response did not exactly match expected text KOVA_AGENT_OK
- Agent turns:
  - cold: total 4491ms; pre-provider 3860ms; provider 4ms; post-provider 627ms; response false
    - active window: metadata scans 5 (100.26ms total, max 45.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3860ms; provider 4ms; post-provider 627ms; unknown 3860ms; source none
  - warm: total 5176ms; pre-provider 4512ms; provider 2ms; post-provider 662ms; response false
    - active window: metadata scans 5 (121.77ms total, max 57.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4512ms; provider 2ms; post-provider 662ms; unknown 4512ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3860 ms | 100 ms | 3760 ms | 4 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-agent-cold-warm-message-2c26dd1d-kova-260710-180612-91f1fa/openclaw/timeline.jsonl |
  | warm | 4512 ms | 123 ms | 4389 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-agent-cold-warm-message-2c26dd1d-kova-260710-180612-91f1fa/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 100 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 123 ms | 58 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-gateway-performance-man-d48bd949-kova-260710-180612-91f1fa
Measurements:
- startup: listening 7278ms; health 8082ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 6
- health: startup p95 1ms; post-ready p95 60ms; failures 72; final failures 0; slowest startup-sample/cold-start 804ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 985.7 MB; tracked total 1624.8 MB; max CPU 137%; samples 38; roles gateway 985.7MB/137%, gateway-tree 985.4MB/137%, command-tree 783.4MB/149.2%, status-cli 783.4MB/149.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.model-prewarm 834.74ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 19/19/17
- Violations:
  - gateway peak RSS 985.7 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 985.7 MB, gateway-tree 985.4 MB, command-tree 783.4 MB
  - gateway peak RSS 985.7 MB exceeded threshold 800 MB
  - plugin-cli peak RSS 780.1 MB exceeded threshold 650 MB
  - status-cli peak RSS 783.4 MB exceeded threshold 500 MB

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260710-180612-91f1fa-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260710-180612-91f1fa-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260710-180612-91f1fa-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-fresh-install-fresh-8da406d9-kova-260710-180612-91f1fa
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-fresh-install-onboarded-1bcfbc31-kova-260710-180612-91f1fa
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-agent-cold-warm-message-2c26dd1d-kova-260710-180612-91f1fa
- collector-root gateway-performance#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-180612-91f1fa/kova-gateway-performance-man-d48bd949-kova-260710-180612-91f1fa

## Target Cleanup

- Runtime: `kova-local-1783706772241`
- Result: removed
- Duration: 521ms

