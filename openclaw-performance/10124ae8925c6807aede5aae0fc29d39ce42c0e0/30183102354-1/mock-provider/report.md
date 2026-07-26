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
| Run ID | `kova-260726-013515-ad177d` |
| Generated | 2026-07-26T01:43:05.150Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5276ms | 883.4MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5234ms | 896.8MB | n/a | 154% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5252ms | 960.2MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5235ms | 966.8MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.4% | 4778ms | 4705ms | 4215ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5231ms | 960.5MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5752ms | 879.9 MB | 1597.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5276ms | 1003.3 MB | 1740.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5187ms | 883.4 MB | 1682 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5234ms | 899.7 MB | 1689.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5187ms | 890.1 MB | 1674.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5249ms | 896.8 MB | 1610.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5212ms | 936.1 MB | 936.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5252ms | 960.2 MB | 960.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5328ms | 960.3 MB | 960.3 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5236ms | 966.8 MB | 1344.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5235ms | 967.4 MB | 1349.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5225ms | 933.2 MB | 1341.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 937.6 MB | 4800ms | 4705ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 946.2 MB | 4748ms | 4703ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 893.6 MB | 4778ms | 4772ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5202ms | 971.1 MB | 1621.6 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5239ms | 936.3 MB | 1695.8 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5231ms | 960.5 MB | 1688.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1003.3 MB (scenario fresh-install/fresh); CPU 155% (scenario fresh-install/fresh)
- gateway-tree: RSS 1003.3 MB (scenario fresh-install/fresh); CPU 155% (scenario fresh-install/fresh)
- agent-cli: RSS 946.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 946.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 946.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 857.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.8% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 567.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 457.4 MB (scenario bundled-plugin-startup/fresh); CPU 148% (scenario bundled-plugin-startup/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-agent-cold-warm-message-8e2a29af-kova-260726-013515-ad177d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 937.6 MB; tracked total 937.6 MB; max CPU 152.4%; samples 16; roles agent-cli 937.6MB/152.4%, command-tree 937.6MB/153.8%, agent-process 937.6MB/152.4%, status-cli 857.9MB/153.8%
- agent: turn 4800ms; cold/warm 4800ms/4705ms; cold-warm delta 95ms; pre-provider 4248ms; provider 3ms; metadata scans 14 (256.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4795.25ms; max 4800ms; pre-provider p95 4246.45ms
- agent CLI attribution: cold known 128ms / unattributed 4120ms; warm known 127ms / unattributed 4090ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.2ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4800ms; pre-provider 4248ms; provider 3ms; post-provider 549ms; response true
    - active window: metadata scans 7 (128.56ms total, max 59.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4248ms; provider 3ms; post-provider 549ms; unknown 3864.2ms; source plugins.metadata.scan 383.8ms
  - warm: total 4705ms; pre-provider 4217ms; provider 1ms; post-provider 487ms; response true
    - active window: metadata scans 7 (127.49ms total, max 64.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4217ms; provider 1ms; post-provider 487ms; unknown 3833.2ms; source plugins.metadata.scan 383.8ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4248 ms | 128 ms | 4120 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-agent-cold-warm-message-8e2a29af-kova-260726-013515-ad177d/openclaw/timeline.jsonl |
  | warm | 4217 ms | 127 ms | 4090 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-agent-cold-warm-message-8e2a29af-kova-260726-013515-ad177d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 128 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 64 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-agent-cold-warm-message-2ab680e0-kova-260726-013515-ad177d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 946.2 MB; tracked total 946.2 MB; max CPU 153.4%; samples 16; roles agent-cli 946.2MB/153.4%, agent-process 946.2MB/153.4%, command-tree 946.2MB/153.4%, status-cli 785.6MB/152.8%
- agent: turn 4748ms; cold/warm 4748ms/4703ms; cold-warm delta 45ms; pre-provider 4215ms; provider 3ms; metadata scans 14 (260.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4745.75ms; max 4748ms; pre-provider p95 4214.45ms
- agent CLI attribution: cold known 133ms / unattributed 4082ms; warm known 130ms / unattributed 4074ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.66ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4748ms; pre-provider 4215ms; provider 3ms; post-provider 530ms; response true
    - active window: metadata scans 7 (132.58ms total, max 59.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4215ms; provider 3ms; post-provider 530ms; unknown 3823.85ms; source plugins.metadata.scan 391.15ms
  - warm: total 4703ms; pre-provider 4204ms; provider 1ms; post-provider 498ms; response true
    - active window: metadata scans 7 (127.96ms total, max 62.66ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4204ms; provider 1ms; post-provider 498ms; unknown 3812.85ms; source plugins.metadata.scan 391.15ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4215 ms | 133 ms | 4082 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-agent-cold-warm-message-2ab680e0-kova-260726-013515-ad177d/openclaw/timeline.jsonl |
  | warm | 4204 ms | 130 ms | 4074 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-agent-cold-warm-message-2ab680e0-kova-260726-013515-ad177d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-agent-cold-warm-message-67b331a3-kova-260726-013515-ad177d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 893.6 MB; tracked total 893.6 MB; max CPU 151.9%; samples 16; roles agent-cli 893.6MB/151.9%, agent-process 893.6MB/151.9%, command-tree 893.6MB/151.9%, status-cli 782.3MB/149.8%
- agent: turn 4778ms; cold/warm 4778ms/4772ms; cold-warm delta 6ms; pre-provider 4214ms; provider 2ms; metadata scans 14 (257.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4777.7ms; max 4778ms; pre-provider p95 4277.65ms
- agent CLI attribution: cold known 122ms / unattributed 4092ms; warm known 132ms / unattributed 4149ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4778ms; pre-provider 4214ms; provider 2ms; post-provider 562ms; response true
    - active window: metadata scans 7 (124.26ms total, max 55.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4214ms; provider 2ms; post-provider 562ms; unknown 3826.36ms; source plugins.metadata.scan 387.64ms
  - warm: total 4772ms; pre-provider 4281ms; provider 1ms; post-provider 490ms; response true
    - active window: metadata scans 7 (133.05ms total, max 63.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4281ms; provider 1ms; post-provider 490ms; unknown 3893.36ms; source plugins.metadata.scan 387.64ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4214 ms | 122 ms | 4092 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-agent-cold-warm-message-67b331a3-kova-260726-013515-ad177d/openclaw/timeline.jsonl |
  | warm | 4281 ms | 132 ms | 4149 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-agent-cold-warm-message-67b331a3-kova-260726-013515-ad177d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 122 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 132 ms | 63 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-013515-ad177d-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-013515-ad177d-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-013515-ad177d-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-fresh-install-fresh-r1-697fad55-kova-260726-013515-ad177d
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-fresh-install-fresh-r2-da880701-kova-260726-013515-ad177d
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-fresh-install-fresh-r3-82f8bdbd-kova-260726-013515-ad177d
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-fresh-install-onboarded-9f99e904-kova-260726-013515-ad177d
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-fresh-install-onboarded-f9c24855-kova-260726-013515-ad177d
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-fresh-install-onboarded-fe872c26-kova-260726-013515-ad177d
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-013515-ad177d
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-013515-ad177d
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-013515-ad177d/kova-bundled-runtime-deps-mi-150715ba-kova-260726-013515-ad177d
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms14lr9p-42i-6298bf09`
- Result: removed
- Duration: 405ms

