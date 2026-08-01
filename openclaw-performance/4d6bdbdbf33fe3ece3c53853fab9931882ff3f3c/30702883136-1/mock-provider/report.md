# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — model-cli peak RSS 726.3 MB exceeded threshold 700 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | model-cli peak RSS 726.3 MB exceeded threshold 700 MB |
| Blocking findings | 6 |
| Warnings | 20 |
| Records | 15 (FAIL:3, PASS:12) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260801-140136-86a360` |
| Generated | 2026-08-01T14:09:45.286Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 15 |
| Scenarios | 4 |
| States | 4 |
| FAIL | 3 |
| PASS | 12 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 3
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 3 blocking, 0 warning
  - primary: model-cli peak RSS 726.3 MB exceeded threshold 700 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: model-cli peak RSS 726.3 MB exceeded threshold 700 MB
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
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage soak:baseline was not present in the report.
  - expected: requirement coverage soak:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage workspace-scan:baseline was not present in the report.
  - expected: requirement coverage workspace-scan:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-runtime:baseline was not present in the report.
  - expected: requirement coverage mcp-runtime:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cron-runtime:run-now was not present in the report.
  - expected: requirement coverage cron-runtime:run-now
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage exec-tool-safety:safe-and-blocked-exec was not present in the report.
  - expected: requirement coverage exec-tool-safety:safe-and-blocked-exec
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage mcp-tool-call:safe-tool-call was not present in the report.
  - expected: requirement coverage mcp-tool-call:safe-tool-call
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage tool-failure-containment:failure-attribution was not present in the report.
  - expected: requirement coverage tool-failure-containment:failure-attribution
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage browser-automation:baseline was not present in the report.
  - expected: requirement coverage browser-automation:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage media-understanding:baseline was not present in the report.
  - expected: requirement coverage media-understanding:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage network-offline:baseline was not present in the report.
  - expected: requirement coverage network-offline:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage cross-platform-smoke:baseline was not present in the report.
  - expected: requirement coverage cross-platform-smoke:baseline
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:list-survives-dirty-state was not present in the report.
  - expected: requirement coverage dirty-plugin-state:list-survives-dirty-state
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage dirty-plugin-state:doctor-preserves-user-files was not present in the report.
  - expected: requirement coverage dirty-plugin-state:doctor-preserves-user-files
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:plugin-failure-recovery was not present in the report.
  - expected: requirement coverage release-update-recovery:plugin-failure-recovery
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:doctor-repair-contract was not present in the report.
  - expected: requirement coverage release-update-recovery:doctor-repair-contract
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:update-retry-target-stability was not present in the report.
  - expected: requirement coverage release-update-recovery:update-retry-target-stability
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- WARNING gate: Required release gate requirement coverage release-update-recovery:rollback-available was not present in the report.
  - expected: requirement coverage release-update-recovery:rollback-available
  - actual: 4 requirement coverage item(s) executed
  - impact: The release gate is incomplete and cannot approve the OpenClaw build.
  - likely owner: Kova
- BLOCKING fresh-install/fresh: model-cli peak RSS 726.3 MB exceeded threshold 700 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 1011.4 MB exceeded threshold 1000 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING gateway-performance/many-bundled-plugins: model-cli peak RSS 707.5 MB exceeded threshold 650 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw

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
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:1, PASS:2 | 5035ms | 925.8MB | n/a | 155% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 4924ms | 935.5MB | n/a | 159% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:1, PASS:2 | 4989ms | 998.3MB | n/a | 157% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153% | 3599ms | 3639ms | 3482ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:1, PASS:2 | 5020ms | 978MB | n/a | 158% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 5578ms | 925.8 MB | 1785.4 MB | n/a | n/a | model-cli peak RSS 726.3 MB exceeded threshold 700 MB |
| 2 | PASS | fresh-install/fresh |  | 5035ms | 906.4 MB | 1711.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 4984ms | 941.9 MB | 1770 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 4881ms | 945.8 MB | 1767.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4956ms | 935.5 MB | 1757.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4924ms | 929.8 MB | 1756.5 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5014ms | 1011.4 MB | 1780.4 MB | n/a | n/a | gateway peak RSS 1011.4 MB exceeded threshold 1000 MB |
| 2 | PASS | bundled-plugin-startup/fresh |  | 4989ms | 998.3 MB | 1780.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 4974ms | 979 MB | 1794.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1095.1 MB | 3625ms | 3662ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1100.9 MB | 3564ms | 3639ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1105.4 MB | 3599ms | 3595ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4982ms | 985.3 MB | 1763.3 MB | n/a | n/a | model-cli peak RSS 707.5 MB exceeded threshold 650 MB |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5057ms | 937.1 MB | 1741.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5020ms | 978 MB | 1724.7 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1033.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1011.4 MB (scenario bundled-plugin-startup/fresh); CPU 160% (scenario fresh-install/onboarded-user)
- status-cli: RSS 924.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 954.7 MB (scenario bundled-plugin-startup/fresh); CPU 160% (scenario fresh-install/onboarded-user)
- agent-process: RSS 859.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 778.6 MB (scenario bundled-plugin-startup/fresh); CPU 153% (scenario fresh-install/onboarded-user)
- model-cli: RSS 726.3 MB (scenario fresh-install/fresh); CPU 144% (scenario fresh-install/fresh)
- agent-cli: RSS 175.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 24.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-fresh-install-fresh-r1-697fad55-kova-260801-140136-86a360
Measurements:
- startup: listening 5279ms; health 5578ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 3ms; post-ready p95 10ms; failures 21; final failures 0; slowest startup-sample/provision 299ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 925.8 MB; tracked total 1785.4 MB; max CPU 154%; samples 21; roles gateway 925.8MB/154%, gateway-tree 925.8MB/154%, command-tree 790.1MB/151%, status-cli 790.1MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.load 366.72ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 726.3 MB exceeded threshold 700 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-bundled-plugin-startup-4a0cbdf7-kova-260801-140136-86a360
Measurements:
- startup: listening 4770ms; health 5014ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 244ms; post-ready p95 3ms; failures 28; final failures 0; slowest startup-sample/restart 361ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1011.4 MB; tracked total 1780.4 MB; max CPU 157%; samples 16; roles gateway 1011.4MB/157%, gateway-tree 954.7MB/157%, command-tree 755.4MB/152%, plugin-cli 755.4MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 417.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1011.4 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-agent-cold-warm-message-8e2a29af-kova-260801-140136-86a360
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 848.6 MB; tracked total 1095.1 MB; max CPU 153%; samples 14; roles command-tree 1023.7MB/171.2%, status-cli 904MB/169.4%, agent-process 848.6MB/153%, agent-cli 175.1MB/24.2%
- agent: turn 3662ms; cold/warm 3625ms/3662ms; cold-warm delta 0ms; pre-provider 3550ms; provider 1ms; metadata scans 14 (175.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3660.15ms; max 3662ms; pre-provider p95 3547.7ms
- agent CLI attribution: cold known 87ms / unattributed 3417ms; warm known 91ms / unattributed 3459ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 52.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3625ms; pre-provider 3504ms; provider 3ms; post-provider 118ms; response true
    - active window: metadata scans 7 (84.61ms total, max 47.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3504ms; provider 3ms; post-provider 118ms; unknown 3179.41ms; source plugins.metadata.scan 324.59ms
  - warm: total 3662ms; pre-provider 3550ms; provider 1ms; post-provider 111ms; response true
    - active window: metadata scans 7 (91.13ms total, max 52.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3550ms; provider 1ms; post-provider 111ms; unknown 3225.41ms; source plugins.metadata.scan 324.59ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3504 ms | 87 ms | 3417 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-agent-cold-warm-message-8e2a29af-kova-260801-140136-86a360/openclaw/timeline.jsonl |
  | warm | 3550 ms | 91 ms | 3459 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-agent-cold-warm-message-8e2a29af-kova-260801-140136-86a360/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 87 ms | 48 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 91 ms | 53 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-agent-cold-warm-message-2ab680e0-kova-260801-140136-86a360
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 853.7 MB; tracked total 1100.9 MB; max CPU 154%; samples 14; roles command-tree 1029.3MB/175.6%, status-cli 924.1MB/173.3%, agent-process 853.7MB/154%, agent-cli 175.8MB/24.5%
- agent: turn 3639ms; cold/warm 3564ms/3639ms; cold-warm delta 0ms; pre-provider 3523ms; provider 1ms; metadata scans 14 (164.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3635.25ms; max 3639ms; pre-provider p95 3519.1ms
- agent CLI attribution: cold known 82ms / unattributed 3363ms; warm known 83ms / unattributed 3440ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 48.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3564ms; pre-provider 3445ms; provider 2ms; post-provider 117ms; response true
    - active window: metadata scans 7 (82.1ms total, max 45.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3445ms; provider 2ms; post-provider 117ms; unknown 3138.89ms; source plugins.metadata.scan 306.11ms
  - warm: total 3639ms; pre-provider 3523ms; provider 1ms; post-provider 115ms; response true
    - active window: metadata scans 7 (82.1ms total, max 45.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3523ms; provider 1ms; post-provider 115ms; unknown 3216.89ms; source plugins.metadata.scan 306.11ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3445 ms | 82 ms | 3363 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-agent-cold-warm-message-2ab680e0-kova-260801-140136-86a360/openclaw/timeline.jsonl |
  | warm | 3523 ms | 83 ms | 3440 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-agent-cold-warm-message-2ab680e0-kova-260801-140136-86a360/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 82 ms | 45 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 83 ms | 46 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-agent-cold-warm-message-67b331a3-kova-260801-140136-86a360
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 859.1 MB; tracked total 1105.4 MB; max CPU 153%; samples 14; roles command-tree 1033.8MB/173.3%, status-cli 920.2MB/173.3%, agent-process 859.1MB/153%, agent-cli 174.8MB/23.5%
- agent: turn 3599ms; cold/warm 3599ms/3595ms; cold-warm delta 4ms; pre-provider 3482ms; provider 3ms; metadata scans 14 (180.82ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3598.8ms; max 3599ms; pre-provider p95 3482.95ms
- agent CLI attribution: cold known 82ms / unattributed 3400ms; warm known 98ms / unattributed 3385ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.73ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3599ms; pre-provider 3482ms; provider 3ms; post-provider 114ms; response true
    - active window: metadata scans 7 (83.94ms total, max 47.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3482ms; provider 3ms; post-provider 114ms; unknown 3146.16ms; source plugins.metadata.scan 335.84ms
  - warm: total 3595ms; pre-provider 3483ms; provider 1ms; post-provider 111ms; response true
    - active window: metadata scans 7 (96.88ms total, max 53.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3483ms; provider 1ms; post-provider 111ms; unknown 3147.16ms; source plugins.metadata.scan 335.84ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3482 ms | 82 ms | 3400 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-agent-cold-warm-message-67b331a3-kova-260801-140136-86a360/openclaw/timeline.jsonl |
  | warm | 3483 ms | 98 ms | 3385 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-agent-cold-warm-message-67b331a3-kova-260801-140136-86a360/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 82 ms | 47 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 98 ms | 54 ms |

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-gateway-performance-man-005107f3-kova-260801-140136-86a360
Measurements:
- startup: listening 4525ms; health 4982ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 457ms; post-ready p95 2ms; failures 28; final failures 0; slowest startup-sample/warm-restart 488ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 985.3 MB; tracked total 1763.3 MB; max CPU 155%; samples 24; roles gateway 985.3MB/155%, gateway-tree 940.6MB/155%, command-tree 754.9MB/152%, plugin-cli 754.9MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 438.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - model-cli peak RSS 707.5 MB exceeded threshold 650 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260801-140136-86a360-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260801-140136-86a360-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260801-140136-86a360-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-fresh-install-fresh-r1-697fad55-kova-260801-140136-86a360
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-fresh-install-fresh-r2-da880701-kova-260801-140136-86a360
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-fresh-install-fresh-r3-82f8bdbd-kova-260801-140136-86a360
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-fresh-install-onboarded-9f99e904-kova-260801-140136-86a360
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-fresh-install-onboarded-f9c24855-kova-260801-140136-86a360
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-fresh-install-onboarded-fe872c26-kova-260801-140136-86a360
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-bundled-plugin-startup-4a0cbdf7-kova-260801-140136-86a360
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-bundled-plugin-startup-809ede2b-kova-260801-140136-86a360
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-140136-86a360/kova-bundled-plugin-startup-5377119f-kova-260801-140136-86a360
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msafwoou-3yx-cbb696a9`
- Result: removed
- Duration: 406ms

