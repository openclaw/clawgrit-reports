# Kova OpenClaw Runtime Report

> **⚠️ [PARTIAL]** — Required release gate platform coverage linux-arm64 was not present in the report.

## Verdict

| Field | Value |
|---|---|
| Verdict | PARTIAL |
| Reason | Required release gate platform coverage linux-arm64 was not present in the report. |
| Blocking findings | 0 |
| Warnings | 20 |
| Records | 18 (PASS:18) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260723-221207-df9555` |
| Generated | 2026-07-23T22:20:37.817Z |
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
| info | Kova | report | 14 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3773ms | 933MB | n/a | 152% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3482ms | 933.2MB | n/a | 142% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4490ms | 924.3MB | n/a | 160% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 4462ms | 937.7MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 158.9% | 5137ms | 4872ms | 4795ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3532ms | 925.6MB | n/a | 151% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3773ms | 917.5 MB | 1652.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3312ms | 940.3 MB | 1667 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 4258ms | 933 MB | 1679.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4278ms | 930.9 MB | 1728.8 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3482ms | 933.2 MB | 1664.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3482ms | 937.7 MB | 1658.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4185ms | 935.1 MB | 940.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5164ms | 922 MB | 927 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4490ms | 924.3 MB | 926 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5482ms | 945.5 MB | 1550.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 4462ms | 928.1 MB | 1640.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 4431ms | 937.7 MB | 1647.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 984.9 MB | 5693ms | 5137ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 971 MB | 5137ms | 4872ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 956.2 MB | 5130ms | 4718ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3315ms | 934.3 MB | 1662.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3631ms | 924.3 MB | 1649.9 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3532ms | 925.6 MB | 1690.6 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 984.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 984.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.5% (scenario fresh-install/fresh)
- agent-process: RSS 984.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 798.2 MB (scenario fresh-install/onboarded-user); CPU 173.5% (scenario fresh-install/fresh)
- model-cli: RSS 614.8 MB (scenario fresh-install/fresh); CPU 171% (scenario fresh-install/onboarded-user)
- gateway: RSS 945.5 MB (scenario bundled-plugin-startup/fresh); CPU 169% (scenario bundled-runtime-deps/missing-plugin-index)
- gateway-tree: RSS 945.5 MB (scenario bundled-plugin-startup/fresh); CPU 169% (scenario bundled-runtime-deps/missing-plugin-index)
- status-cli: RSS 765.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 167.6% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-agent-cold-warm-message-8e2a29af-kova-260723-221207-df9555
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 984.9 MB; tracked total 984.9 MB; max CPU 164.9%; samples 18; roles agent-cli 984.9MB/164.9%, agent-process 984.9MB/164.9%, command-tree 984.9MB/164.9%, status-cli 741.7MB/164.9%
- agent: turn 5693ms; cold/warm 5693ms/5137ms; cold-warm delta 556ms; pre-provider 5299ms; provider 3ms; metadata scans 14 (331.14ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5665.2ms; max 5693ms; pre-provider p95 5277.25ms
- agent CLI attribution: cold known 173ms / unattributed 5126ms; warm known 157ms / unattributed 4707ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 77.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5693ms; pre-provider 5299ms; provider 3ms; post-provider 391ms; response true
    - active window: metadata scans 7 (173.64ms total, max 77.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5299ms; provider 3ms; post-provider 391ms; unknown 4681.94ms; source plugins.metadata.scan 617.06ms
  - warm: total 5137ms; pre-provider 4864ms; provider 1ms; post-provider 272ms; response true
    - active window: metadata scans 7 (157.5ms total, max 74.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4864ms; provider 1ms; post-provider 272ms; unknown 4246.94ms; source plugins.metadata.scan 617.06ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5299 ms | 173 ms | 5126 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-agent-cold-warm-message-8e2a29af-kova-260723-221207-df9555/openclaw/timeline.jsonl |
  | warm | 4864 ms | 157 ms | 4707 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-agent-cold-warm-message-8e2a29af-kova-260723-221207-df9555/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 173 ms | 77 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 157 ms | 75 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-agent-cold-warm-message-2ab680e0-kova-260723-221207-df9555
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 971 MB; tracked total 971 MB; max CPU 158.9%; samples 17; roles agent-cli 971MB/158.9%, command-tree 971MB/159.7%, agent-process 971MB/158.9%, status-cli 726.6MB/159.7%
- agent: turn 5137ms; cold/warm 5137ms/4872ms; cold-warm delta 265ms; pre-provider 4795ms; provider 3ms; metadata scans 14 (282.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5123.75ms; max 5137ms; pre-provider p95 4785.4ms
- agent CLI attribution: cold known 137ms / unattributed 4658ms; warm known 147ms / unattributed 4456ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5137ms; pre-provider 4795ms; provider 3ms; post-provider 339ms; response true
    - active window: metadata scans 7 (137.26ms total, max 66.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4795ms; provider 3ms; post-provider 339ms; unknown 4272.26ms; source plugins.metadata.scan 522.74ms
  - warm: total 4872ms; pre-provider 4603ms; provider 1ms; post-provider 268ms; response true
    - active window: metadata scans 7 (145.27ms total, max 73.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4603ms; provider 1ms; post-provider 268ms; unknown 4080.26ms; source plugins.metadata.scan 522.74ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4795 ms | 137 ms | 4658 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-agent-cold-warm-message-2ab680e0-kova-260723-221207-df9555/openclaw/timeline.jsonl |
  | warm | 4603 ms | 147 ms | 4456 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-agent-cold-warm-message-2ab680e0-kova-260723-221207-df9555/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 66 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 147 ms | 73 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-agent-cold-warm-message-67b331a3-kova-260723-221207-df9555
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 956.2 MB; tracked total 956.2 MB; max CPU 153.9%; samples 17; roles agent-cli 956.2MB/153.9%, agent-process 956.2MB/153.9%, command-tree 956.2MB/153.9%, status-cli 732MB/153.7%
- agent: turn 5130ms; cold/warm 5130ms/4718ms; cold-warm delta 412ms; pre-provider 4753ms; provider 3ms; metadata scans 14 (281.21ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5109.4ms; max 5130ms; pre-provider p95 4737.9ms
- agent CLI attribution: cold known 140ms / unattributed 4613ms; warm known 141ms / unattributed 4310ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 66.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5130ms; pre-provider 4753ms; provider 3ms; post-provider 374ms; response true
    - active window: metadata scans 7 (138.48ms total, max 64.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4753ms; provider 3ms; post-provider 374ms; unknown 4243.15ms; source plugins.metadata.scan 509.85ms
  - warm: total 4718ms; pre-provider 4451ms; provider 1ms; post-provider 266ms; response true
    - active window: metadata scans 7 (142.73ms total, max 66.14ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4451ms; provider 1ms; post-provider 266ms; unknown 3941.15ms; source plugins.metadata.scan 509.85ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4753 ms | 140 ms | 4613 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-agent-cold-warm-message-67b331a3-kova-260723-221207-df9555/openclaw/timeline.jsonl |
  | warm | 4451 ms | 141 ms | 4310 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-agent-cold-warm-message-67b331a3-kova-260723-221207-df9555/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 140 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 66 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-221207-df9555-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-221207-df9555-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-221207-df9555-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-fresh-install-fresh-r1-697fad55-kova-260723-221207-df9555
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-fresh-install-fresh-r2-da880701-kova-260723-221207-df9555
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-221207-df9555
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-fresh-install-onboarded-9f99e904-kova-260723-221207-df9555
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-fresh-install-onboarded-f9c24855-kova-260723-221207-df9555
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-fresh-install-onboarded-fe872c26-kova-260723-221207-df9555
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-221207-df9555
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-221207-df9555
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-221207-df9555/kova-bundled-runtime-deps-mi-150715ba-kova-260723-221207-df9555
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mry2gttp-426-1f581071`
- Result: removed
- Duration: 475ms

