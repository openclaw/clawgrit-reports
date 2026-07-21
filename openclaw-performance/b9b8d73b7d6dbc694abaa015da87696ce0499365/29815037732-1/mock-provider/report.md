# Kova OpenClaw Runtime Report

> **⚠️ [PARTIAL]** — Required release gate platform coverage linux-arm64 was not present in the report.

## Verdict

| Field | Value |
|---|---|
| Verdict | PARTIAL |
| Reason | Required release gate platform coverage linux-arm64 was not present in the report. |
| Blocking findings | 0 |
| Warnings | 21 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260721-083904-47cd66` |
| Generated | 2026-07-21T08:45:19.850Z |
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
| PASS | 18 |

## Release Gate

- Verdict: PARTIAL
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 0
- Warnings: 20
- Info: 44

### Subsystems

- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

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
| info | Kova | report | 15 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 2687ms | 907.9MB | n/a | 148% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2942ms | 909.7MB | n/a | 158% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3139ms | 911.9MB | n/a | 158% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2773ms | 909.5MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 159.4% | 3882ms | 3741ms | 3575ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 2761ms | 914.1MB | n/a | 147% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3320ms | 908 MB | 1645.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2687ms | 907.9 MB | 1440.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2650ms | 907.2 MB | 1665.1 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2942ms | 903.2 MB | 1672.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2827ms | 909.7 MB | 1687.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3252ms | 910.2 MB | 1674.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2789ms | 894.8 MB | 899.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3139ms | 911.9 MB | 917 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3195ms | 918.3 MB | 923.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2837ms | 909.8 MB | 1443.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2771ms | 909.5 MB | 1443.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2773ms | 903.1 MB | 1423 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 896.2 MB | 4012ms | 3741ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 912 MB | 3654ms | 3942ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 909.9 MB | 3882ms | 3738ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2761ms | 914.1 MB | 1701.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3006ms | 927.9 MB | 1706.3 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 2645ms | 912.3 MB | 1674 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 927.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 200% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 927.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario fresh-install/onboarded-user)
- command-tree: RSS 912 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 912 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.7% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 764.6 MB (scenario fresh-install/onboarded-user); CPU 163% (scenario fresh-install/onboarded-user)
- agent-process: RSS 912 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.7% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 503.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 159.9% (scenario fresh-install/onboarded-user)
- status-cli: RSS 788 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-agent-cold-warm-message-8e2a29af-kova-260721-083904-47cd66
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 896.2 MB; tracked total 896.2 MB; max CPU 154.9%; samples 13; roles agent-cli 896.2MB/154.9%, agent-process 896.2MB/154.9%, command-tree 896.2MB/154.9%, status-cli 523.2MB/152.7%
- agent: turn 4012ms; cold/warm 4012ms/3741ms; cold-warm delta 271ms; pre-provider 3678ms; provider 3ms; metadata scans 10 (217.25ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3998.45ms; max 4012ms; pre-provider p95 3668.5ms
- agent CLI attribution: cold known 107ms / unattributed 3571ms; warm known 108ms / unattributed 3380ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4012ms; pre-provider 3678ms; provider 3ms; post-provider 331ms; response true
    - active window: metadata scans 5 (107.75ms total, max 64.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3678ms; provider 3ms; post-provider 331ms; unknown 3371.03ms; source plugins.metadata.scan 306.97ms
  - warm: total 3741ms; pre-provider 3488ms; provider 1ms; post-provider 252ms; response true
    - active window: metadata scans 5 (109.5ms total, max 68.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3488ms; provider 1ms; post-provider 252ms; unknown 3181.03ms; source plugins.metadata.scan 306.97ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3678 ms | 107 ms | 3571 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-agent-cold-warm-message-8e2a29af-kova-260721-083904-47cd66/openclaw/timeline.jsonl |
  | warm | 3488 ms | 108 ms | 3380 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-agent-cold-warm-message-8e2a29af-kova-260721-083904-47cd66/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 107 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 108 ms | 68 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-agent-cold-warm-message-2ab680e0-kova-260721-083904-47cd66
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 912 MB; tracked total 912 MB; max CPU 159.4%; samples 13; roles agent-cli 912MB/159.4%, agent-process 912MB/159.4%, command-tree 912MB/159.4%, status-cli 520.9MB/155.8%
- agent: turn 3942ms; cold/warm 3654ms/3942ms; cold-warm delta 0ms; pre-provider 3664ms; provider 1ms; metadata scans 10 (199.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3927.6ms; max 3942ms; pre-provider p95 3649.6ms
- agent CLI attribution: cold known 99ms / unattributed 3277ms; warm known 103ms / unattributed 3561ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 79.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3654ms; pre-provider 3376ms; provider 2ms; post-provider 276ms; response true
    - active window: metadata scans 5 (96.87ms total, max 54.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3376ms; provider 2ms; post-provider 276ms; unknown 3073.21ms; source plugins.metadata.scan 302.79ms
  - warm: total 3942ms; pre-provider 3664ms; provider 1ms; post-provider 277ms; response true
    - active window: metadata scans 5 (102.86ms total, max 57.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3664ms; provider 1ms; post-provider 277ms; unknown 3361.21ms; source plugins.metadata.scan 302.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3376 ms | 99 ms | 3277 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-agent-cold-warm-message-2ab680e0-kova-260721-083904-47cd66/openclaw/timeline.jsonl |
  | warm | 3664 ms | 103 ms | 3561 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-agent-cold-warm-message-2ab680e0-kova-260721-083904-47cd66/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 99 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 103 ms | 57 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-agent-cold-warm-message-67b331a3-kova-260721-083904-47cd66
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 909.9 MB; tracked total 909.9 MB; max CPU 159.7%; samples 13; roles agent-cli 909.9MB/159.7%, agent-process 909.9MB/159.7%, command-tree 909.9MB/159.7%, status-cli 526.2MB/156.7%
- agent: turn 3882ms; cold/warm 3882ms/3738ms; cold-warm delta 144ms; pre-provider 3575ms; provider 3ms; metadata scans 10 (222.86ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3874.8ms; max 3882ms; pre-provider p95 3571.2ms
- agent CLI attribution: cold known 109ms / unattributed 3466ms; warm known 112ms / unattributed 3387ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 68.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3882ms; pre-provider 3575ms; provider 3ms; post-provider 304ms; response true
    - active window: metadata scans 5 (109.26ms total, max 63.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3575ms; provider 3ms; post-provider 304ms; unknown 3261.07ms; source plugins.metadata.scan 313.93ms
  - warm: total 3738ms; pre-provider 3499ms; provider 1ms; post-provider 238ms; response true
    - active window: metadata scans 5 (113.6ms total, max 68.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3499ms; provider 1ms; post-provider 238ms; unknown 3185.07ms; source plugins.metadata.scan 313.93ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3575 ms | 109 ms | 3466 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-agent-cold-warm-message-67b331a3-kova-260721-083904-47cd66/openclaw/timeline.jsonl |
  | warm | 3499 ms | 112 ms | 3387 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-agent-cold-warm-message-67b331a3-kova-260721-083904-47cd66/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 109 ms | 63 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 112 ms | 68 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-083904-47cd66-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-083904-47cd66-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-083904-47cd66-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-fresh-install-fresh-r1-697fad55-kova-260721-083904-47cd66
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-fresh-install-fresh-r2-da880701-kova-260721-083904-47cd66
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-083904-47cd66
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-fresh-install-onboarded-9f99e904-kova-260721-083904-47cd66
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-fresh-install-onboarded-f9c24855-kova-260721-083904-47cd66
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-fresh-install-onboarded-fe872c26-kova-260721-083904-47cd66
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-083904-47cd66
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-083904-47cd66
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-083904-47cd66/kova-bundled-runtime-deps-mi-150715ba-kova-260721-083904-47cd66
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mruejj1l-42y-74d2f2fb`
- Result: removed
- Duration: 403ms

