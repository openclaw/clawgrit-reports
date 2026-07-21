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
| Run ID | `kova-260721-205804-e41d10` |
| Generated | 2026-07-21T21:06:38.789Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3479ms | 907MB | n/a | 155% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2919ms | 910.6MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3172ms | 907.3MB | n/a | 157% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3682ms | 915.6MB | n/a | 149% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 172.8% | 6020ms | 6027ms | 5505ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3549ms | 909.3MB | n/a | 157% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 4212ms | 900.2 MB | 1626 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3479ms | 907 MB | 1656.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3203ms | 910.8 MB | 1665.3 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2952ms | 918.3 MB | 1697.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2919ms | 910.6 MB | 1672.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2672ms | 909.1 MB | 1668.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3147ms | 907.3 MB | 912.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3394ms | 900.2 MB | 905.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3172ms | 917.9 MB | 922.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3019ms | 920 MB | 1446.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3682ms | 915.6 MB | 1623.8 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3769ms | 909.8 MB | 1645.3 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 933 MB | 6020ms | 6027ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 953.5 MB | 5475ms | 5664ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 946.8 MB | 7060ms | 6537ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 4036ms | 919.1 MB | 1677.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3474ms | 909.3 MB | 1632.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3549ms | 907.5 MB | 1650.3 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 953.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 953.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 953.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 768.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.9% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 920 MB (scenario bundled-plugin-startup/fresh); CPU 160% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 920 MB (scenario bundled-plugin-startup/fresh); CPU 160% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 779 MB (scenario fresh-install/onboarded-user); CPU 171% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 509.8 MB (scenario fresh-install/onboarded-user); CPU 161.9% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-agent-cold-warm-message-8e2a29af-kova-260721-205804-e41d10
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 933 MB; tracked total 933 MB; max CPU 172.8%; samples 19; roles agent-cli 933MB/172.8%, agent-process 933MB/172.8%, command-tree 933MB/172.8%, status-cli 753.3MB/169.9%
- agent: turn 6027ms; cold/warm 6020ms/6027ms; cold-warm delta 0ms; pre-provider 5534ms; provider 3ms; metadata scans 10 (313.27ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6026.65ms; max 6027ms; pre-provider p95 5532.55ms
- agent CLI attribution: cold known 170ms / unattributed 5335ms; warm known 144ms / unattributed 5390ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 116.25ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6020ms; pre-provider 5505ms; provider 4ms; post-provider 511ms; response true
    - active window: metadata scans 5 (169ms total, max 104.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5505ms; provider 4ms; post-provider 511ms; unknown 5042.3ms; source plugins.metadata.scan 462.7ms
  - warm: total 6027ms; pre-provider 5534ms; provider 3ms; post-provider 490ms; response true
    - active window: metadata scans 5 (144.27ms total, max 79.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5534ms; provider 3ms; post-provider 490ms; unknown 5071.3ms; source plugins.metadata.scan 462.7ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5505 ms | 170 ms | 5335 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-agent-cold-warm-message-8e2a29af-kova-260721-205804-e41d10/openclaw/timeline.jsonl |
  | warm | 5534 ms | 144 ms | 5390 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-agent-cold-warm-message-8e2a29af-kova-260721-205804-e41d10/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 170 ms | 104 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 144 ms | 80 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-agent-cold-warm-message-2ab680e0-kova-260721-205804-e41d10
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 953.5 MB; tracked total 953.5 MB; max CPU 172.8%; samples 19; roles agent-cli 953.5MB/172.8%, agent-process 953.5MB/172.8%, command-tree 953.5MB/172.8%, status-cli 768.5MB/169.2%
- agent: turn 5664ms; cold/warm 5475ms/5664ms; cold-warm delta 0ms; pre-provider 5289ms; provider 2ms; metadata scans 10 (299.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5654.55ms; max 5664ms; pre-provider p95 5272.55ms
- agent CLI attribution: cold known 148ms / unattributed 4812ms; warm known 151ms / unattributed 5138ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 119.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5475ms; pre-provider 4960ms; provider 3ms; post-provider 512ms; response true
    - active window: metadata scans 5 (147.87ms total, max 76.95ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4960ms; provider 3ms; post-provider 512ms; unknown 4491.54ms; source plugins.metadata.scan 468.46ms
  - warm: total 5664ms; pre-provider 5289ms; provider 2ms; post-provider 373ms; response true
    - active window: metadata scans 5 (151.57ms total, max 86.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5289ms; provider 2ms; post-provider 373ms; unknown 4820.54ms; source plugins.metadata.scan 468.46ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4960 ms | 148 ms | 4812 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-agent-cold-warm-message-2ab680e0-kova-260721-205804-e41d10/openclaw/timeline.jsonl |
  | warm | 5289 ms | 151 ms | 5138 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-agent-cold-warm-message-2ab680e0-kova-260721-205804-e41d10/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 148 ms | 77 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 151 ms | 86 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-agent-cold-warm-message-67b331a3-kova-260721-205804-e41d10
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 946.8 MB; tracked total 946.8 MB; max CPU 168.5%; samples 21; roles agent-cli 946.8MB/168.5%, agent-process 946.8MB/168.5%, command-tree 946.8MB/168.5%, status-cli 755.4MB/162.4%
- agent: turn 7060ms; cold/warm 7060ms/6537ms; cold-warm delta 523ms; pre-provider 6456ms; provider 4ms; metadata scans 10 (338.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7033.85ms; max 7060ms; pre-provider p95 6439.65ms
- agent CLI attribution: cold known 182ms / unattributed 6274ms; warm known 158ms / unattributed 5971ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 117.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7060ms; pre-provider 6456ms; provider 4ms; post-provider 600ms; response true
    - active window: metadata scans 5 (181.23ms total, max 102.7ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6456ms; provider 4ms; post-provider 600ms; unknown 5966.01ms; source plugins.metadata.scan 489.99ms
  - warm: total 6537ms; pre-provider 6129ms; provider 2ms; post-provider 406ms; response true
    - active window: metadata scans 5 (157.74ms total, max 84.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6129ms; provider 2ms; post-provider 406ms; unknown 5639.01ms; source plugins.metadata.scan 489.99ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6456 ms | 182 ms | 6274 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-agent-cold-warm-message-67b331a3-kova-260721-205804-e41d10/openclaw/timeline.jsonl |
  | warm | 6129 ms | 158 ms | 5971 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-agent-cold-warm-message-67b331a3-kova-260721-205804-e41d10/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 182 ms | 103 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 158 ms | 85 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205804-e41d10-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205804-e41d10-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205804-e41d10-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-fresh-install-fresh-r1-697fad55-kova-260721-205804-e41d10
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-fresh-install-fresh-r2-da880701-kova-260721-205804-e41d10
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-205804-e41d10
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-fresh-install-onboarded-9f99e904-kova-260721-205804-e41d10
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-fresh-install-onboarded-f9c24855-kova-260721-205804-e41d10
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-fresh-install-onboarded-fe872c26-kova-260721-205804-e41d10
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-205804-e41d10
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-205804-e41d10
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205804-e41d10/kova-bundled-runtime-deps-mi-150715ba-kova-260721-205804-e41d10
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrv4xwe1-411-dd3aa4bc`
- Result: removed
- Duration: 475ms

