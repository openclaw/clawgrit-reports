# Kova OpenClaw Runtime Report

> **❌ [DO-NOT-SHIP] FAIL** — gateway peak RSS 921.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 921.5 MB, gateway-tree 921.5 MB, command-tree 807.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO_NOT_SHIP |
| Reason | gateway peak RSS 921.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 921.5 MB, gateway-tree 921.5 MB, command-tree 807.7 MB |
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
| Run ID | `kova-260710-212859-61099f` |
| Generated | 2026-07-10T21:34:28.935Z |
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
  - primary: gateway peak RSS 921.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 921.5 MB, gateway-tree 921.5 MB, command-tree 807.7 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 921.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 921.5 MB, gateway-tree 921.5 MB, command-tree 807.7 MB
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
- BLOCKING fresh-install/fresh: gateway peak RSS 921.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 921.5 MB, gateway-tree 921.5 MB, command-tree 807.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING fresh-install/onboarded-user: gateway peak RSS 939.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 939.2 MB, gateway-tree 939 MB, command-tree 802.1 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 952.7 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 952.7 MB, agent-process 952.7 MB, command-tree 952.7 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: gateway peak RSS 902 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 902 MB, gateway-tree 902 MB, command-tree 806.5 MB
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
| fresh-install/fresh | 1 | FAIL:1 | 10900ms | 921.5MB | n/a | 137% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 1 | FAIL:1 | 9304ms | 939.2MB | n/a | 139% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 153% | 4157ms | 4115ms | 3598ms |
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 9893ms | 902MB | n/a | 136% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 10900ms | 921.5 MB | 1716.9 MB | n/a | n/a | gateway peak RSS 921.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 921.5 MB, gateway-tree 921.5 MB, command-tree 807.7 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 9304ms | 939.2 MB | 1718.3 MB | n/a | n/a | gateway peak RSS 939.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 939.2 MB, gateway-tree 939 MB, command-tree 802.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 952.7 MB | 4157ms | 4115ms | agent-cli peak RSS 952.7 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 952.7 MB, agent-process 952.7 MB, command-tree 952.7 MB |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 9893ms | 902 MB | 1549.7 MB | n/a | n/a | gateway peak RSS 902 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 902 MB, gateway-tree 902 MB, command-tree 806.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 952.7 MB; CPU 153%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 952.7 MB; CPU 153%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 952.7 MB; CPU 153%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 939.2 MB; CPU 139%; scenario fresh-install/onboarded-user
- gateway-tree: RSS 939 MB; CPU 139%; scenario fresh-install/onboarded-user
- status-cli: RSS 807.7 MB; CPU 149.9%; scenario fresh-install/fresh
- plugin-cli: RSS 798.3 MB; CPU 144.5%; scenario fresh-install/fresh
- model-cli: RSS 659 MB; CPU 152.2%; scenario fresh-install/fresh

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-fresh-install-fresh-8da406d9-kova-260710-212859-61099f
Measurements:
- startup: listening 10020ms; health 10900ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 1ms; post-ready p95 7ms; failures 107; final failures 0; slowest startup-sample/provision 880ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 921.5 MB; tracked total 1716.9 MB; max CPU 137%; samples 63; roles gateway 921.5MB/137%, gateway-tree 921.5MB/137%, command-tree 807.7MB/144.5%, status-cli 807.7MB/136.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span sidecars.model-prewarm 667.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 20/20/18
- Violations:
  - gateway peak RSS 921.5 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 921.5 MB, gateway-tree 921.5 MB, command-tree 807.7 MB
  - gateway peak RSS 921.5 MB exceeded threshold 800 MB
  - plugin-cli peak RSS 798.3 MB exceeded threshold 600 MB
  - status-cli peak RSS 807.7 MB exceeded threshold 500 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-fresh-install-onboarded-1bcfbc31-kova-260710-212859-61099f
Measurements:
- startup: listening 8487ms; health 9304ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 5
- health: startup p95 1ms; post-ready p95 5ms; failures 94; final failures 0; slowest startup-sample/provision 817ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 939.2 MB; tracked total 1718.3 MB; max CPU 139%; samples 64; roles gateway 939.2MB/139%, gateway-tree 939MB/139%, command-tree 802.1MB/152.2%, status-cli 802.1MB/143.9%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span sidecars.model-prewarm 659.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 21/21/19
- Violations:
  - gateway peak RSS 939.2 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 939.2 MB, gateway-tree 939 MB, command-tree 802.1 MB
  - gateway peak RSS 939.2 MB exceeded threshold 800 MB
  - plugin-cli peak RSS 793.1 MB exceeded threshold 600 MB
  - status-cli peak RSS 802.1 MB exceeded threshold 500 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-agent-cold-warm-message-2c26dd1d-kova-260710-212859-61099f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 952.7 MB; tracked total 952.7 MB; max CPU 153%; samples 49; roles agent-cli 952.7MB/153%, agent-process 952.7MB/153%, command-tree 952.7MB/153%, status-cli 763.8MB/149.9%
- agent: turn 4157ms; cold/warm 4157ms/4115ms; cold-warm delta 42ms; pre-provider 3598ms; provider 4ms; metadata scans 10 (192.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4154.9ms; max 4157ms; pre-provider p95 3594.4ms
- agent CLI attribution: cold known 94ms / unattributed 3504ms; warm known 97ms / unattributed 3429ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 46.45ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 12/12/12
- Violations:
  - agent-cli peak RSS 952.7 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 952.7 MB, agent-process 952.7 MB, command-tree 952.7 MB
  - agent-cli peak RSS 952.7 MB exceeded threshold 900 MB
  - agent-process peak RSS 952.7 MB exceeded threshold 900 MB
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA_AGENT_OK
  - warm agent turn did not produce the expected assistant response
  - warm agent turn response did not exactly match expected text KOVA_AGENT_OK
- Agent turns:
  - cold: total 4157ms; pre-provider 3598ms; provider 4ms; post-provider 555ms; response false
    - active window: metadata scans 5 (94.38ms total, max 41.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3598ms; provider 4ms; post-provider 555ms; unknown 3598ms; source none
  - warm: total 4115ms; pre-provider 3526ms; provider 2ms; post-provider 587ms; response false
    - active window: metadata scans 5 (98.12ms total, max 46.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3526ms; provider 2ms; post-provider 587ms; unknown 3526ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3598 ms | 94 ms | 3504 ms | 4 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-agent-cold-warm-message-2c26dd1d-kova-260710-212859-61099f/openclaw/timeline.jsonl |
  | warm | 3526 ms | 97 ms | 3429 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-agent-cold-warm-message-2c26dd1d-kova-260710-212859-61099f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 94 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 97 ms | 46 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-gateway-performance-man-d48bd949-kova-260710-212859-61099f
Measurements:
- startup: listening 9007ms; health 9893ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 6
- health: startup p95 1ms; post-ready p95 34ms; failures 89; final failures 0; slowest startup-sample/cold-start 886ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 902 MB; tracked total 1549.7 MB; max CPU 136%; samples 40; roles gateway 902MB/136%, gateway-tree 902MB/136%, command-tree 806.5MB/144.4%, status-cli 806.5MB/140.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.model-prewarm 846.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 19/19/17
- Violations:
  - gateway peak RSS 902 MB exceeded threshold 900 MB; observed role gateway; top RSS roles: gateway 902 MB, gateway-tree 902 MB, command-tree 806.5 MB
  - gateway peak RSS 902 MB exceeded threshold 800 MB
  - plugin-cli peak RSS 796.1 MB exceeded threshold 650 MB
  - status-cli peak RSS 806.5 MB exceeded threshold 500 MB

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260710-212859-61099f-release.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260710-212859-61099f-release.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260710-212859-61099f-release.summary.json
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-fresh-install-fresh-8da406d9-kova-260710-212859-61099f
- collector-root fresh-install#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-fresh-install-onboarded-1bcfbc31-kova-260710-212859-61099f
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-agent-cold-warm-message-2c26dd1d-kova-260710-212859-61099f
- collector-root gateway-performance#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260710-212859-61099f/kova-gateway-performance-man-d48bd949-kova-260710-212859-61099f

## Target Cleanup

- Runtime: `kova-local-1783718939137`
- Result: removed
- Duration: 428ms

