# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — agent-cli peak RSS 921.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 921.8 MB, agent-process 921.8 MB, command-tree 921.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | agent-cli peak RSS 921.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 921.8 MB, agent-process 921.8 MB, command-tree 921.8 MB |
| Blocking findings | 4 |
| Warnings | 20 |
| Records | 18 (PASS:16, FAIL:2) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260714-013518-732341` |
| Generated | 2026-07-14T01:42:06.785Z |
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
| PASS | 16 |
| FAIL | 2 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 2
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 2 blocking, 0 warning
  - primary: agent-cli peak RSS 921.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 921.8 MB, agent-process 921.8 MB, command-tree 921.8 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: agent-cli peak RSS 921.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 921.8 MB, agent-process 921.8 MB, command-tree 921.8 MB
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
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 921.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 921.8 MB, agent-process 921.8 MB, command-tree 921.8 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING agent-cold-warm-message/mock-openai-provider: agent-cli peak RSS 928.5 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 928.5 MB, agent-process 928.5 MB, command-tree 928.5 MB
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
| info | Kova | report | 18 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 3022ms | 835.8MB | n/a | 137% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2909ms | 841.3MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 2860ms | 822.2MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 2725ms | 831.8MB | n/a | 135% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:2, PASS:1 | n/a | 0MB | n/a | 166.4% | 3572ms | 3500ms | 3428ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3034ms | 836.2MB | n/a | 156% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3207ms | 822.3 MB | 1601.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3022ms | 842.6 MB | 1642.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 2777ms | 835.8 MB | 1673 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2909ms | 841.3 MB | 1672 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2767ms | 844.4 MB | 1727.7 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3320ms | 830 MB | 1610.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2884ms | 824.8 MB | 829.7 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2860ms | 821.9 MB | 827.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 2712ms | 822.2 MB | 827.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 2725ms | 845.6 MB | 1432.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2587ms | 831.8 MB | 1455.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2865ms | 828.9 MB | 1421.4 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 921.8 MB | 3572ms | 3667ms | agent-cli peak RSS 921.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 921.8 MB, agent-process 921.8 MB, command-tree 921.8 MB |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 842.5 MB | 3417ms | 3500ms |  |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 928.5 MB | 3801ms | 3238ms | agent-cli peak RSS 928.5 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 928.5 MB, agent-process 928.5 MB, command-tree 928.5 MB |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3221ms | 836.9 MB | 1681.8 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 2907ms | 834.6 MB | 1725.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3034ms | 836.2 MB | 1676.3 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 928.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 928.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 928.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.9% (scenario fresh-install/fresh)
- plugin-cli: RSS 894.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 168.9% (scenario fresh-install/fresh)
- status-cli: RSS 846.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 166.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 845.6 MB (scenario bundled-plugin-startup/fresh); CPU 160% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 530.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 162% (scenario fresh-install/fresh)
- gateway-tree: RSS 845.6 MB (scenario bundled-plugin-startup/fresh); CPU 160% (scenario bundled-plugin-startup/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-agent-cold-warm-message-8e2a29af-kova-260714-013518-732341
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 921.8 MB; tracked total 921.8 MB; max CPU 165.7%; samples 14; roles agent-cli 921.8MB/165.7%, agent-process 921.8MB/165.7%, command-tree 921.8MB/165.7%, status-cli 782.3MB/158.8%
- agent: turn 3667ms; cold/warm 3572ms/3667ms; cold-warm delta 0ms; pre-provider 3529ms; provider 1ms; metadata scans 10 (228.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3662.25ms; max 3667ms; pre-provider p95 3523.95ms
- agent CLI attribution: cold known 118ms / unattributed 3310ms; warm known 111ms / unattributed 3418ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 921.8 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 921.8 MB, agent-process 921.8 MB, command-tree 921.8 MB
- Agent turns:
  - cold: total 3572ms; pre-provider 3428ms; provider 3ms; post-provider 141ms; response true
    - active window: metadata scans 5 (118.52ms total, max 62.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3428ms; provider 3ms; post-provider 141ms; unknown 3097.07ms; source plugins.metadata.scan 330.93ms
  - warm: total 3667ms; pre-provider 3529ms; provider 1ms; post-provider 137ms; response true
    - active window: metadata scans 5 (109.59ms total, max 62.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3529ms; provider 1ms; post-provider 137ms; unknown 3198.07ms; source plugins.metadata.scan 330.93ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3428 ms | 118 ms | 3310 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-agent-cold-warm-message-8e2a29af-kova-260714-013518-732341/openclaw/timeline.jsonl |
  | warm | 3529 ms | 111 ms | 3418 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-agent-cold-warm-message-8e2a29af-kova-260714-013518-732341/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 118 ms | 62 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 111 ms | 62 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-agent-cold-warm-message-2ab680e0-kova-260714-013518-732341
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 842.5 MB; tracked total 842.5 MB; max CPU 166.4%; samples 14; roles agent-cli 842.5MB/166.4%, agent-process 842.5MB/166.4%, command-tree 842.5MB/166.4%, status-cli 785.6MB/166.4%
- agent: turn 3500ms; cold/warm 3417ms/3500ms; cold-warm delta 0ms; pre-provider 3371ms; provider 1ms; metadata scans 10 (231.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3495.85ms; max 3500ms; pre-provider p95 3367.25ms
- agent CLI attribution: cold known 114ms / unattributed 3182ms; warm known 119ms / unattributed 3252ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3417ms; pre-provider 3296ms; provider 2ms; post-provider 119ms; response true
    - active window: metadata scans 5 (113.28ms total, max 61.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3296ms; provider 2ms; post-provider 119ms; unknown 2978.18ms; source plugins.metadata.scan 317.82ms
  - warm: total 3500ms; pre-provider 3371ms; provider 1ms; post-provider 128ms; response true
    - active window: metadata scans 5 (118.56ms total, max 61.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3371ms; provider 1ms; post-provider 128ms; unknown 3053.18ms; source plugins.metadata.scan 317.82ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3296 ms | 114 ms | 3182 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-agent-cold-warm-message-2ab680e0-kova-260714-013518-732341/openclaw/timeline.jsonl |
  | warm | 3371 ms | 119 ms | 3252 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-agent-cold-warm-message-2ab680e0-kova-260714-013518-732341/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 114 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 119 ms | 62 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-agent-cold-warm-message-67b331a3-kova-260714-013518-732341
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 928.5 MB; tracked total 928.5 MB; max CPU 168.9%; samples 14; roles agent-cli 928.5MB/168.9%, agent-process 928.5MB/168.9%, command-tree 928.5MB/168.9%, status-cli 842MB/161.9%
- agent: turn 3801ms; cold/warm 3801ms/3238ms; cold-warm delta 563ms; pre-provider 3694ms; provider 2ms; metadata scans 10 (229.8ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3772.85ms; max 3801ms; pre-provider p95 3665.8ms
- agent CLI attribution: cold known 129ms / unattributed 3565ms; warm known 100ms / unattributed 3030ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 928.5 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 928.5 MB, agent-process 928.5 MB, command-tree 928.5 MB
- Agent turns:
  - cold: total 3801ms; pre-provider 3694ms; provider 2ms; post-provider 105ms; response true
    - active window: metadata scans 5 (130.66ms total, max 73.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3694ms; provider 2ms; post-provider 105ms; unknown 3385.69ms; source plugins.metadata.scan 308.31ms
  - warm: total 3238ms; pre-provider 3130ms; provider 1ms; post-provider 107ms; response true
    - active window: metadata scans 5 (99.14ms total, max 59.1ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3130ms; provider 1ms; post-provider 107ms; unknown 2821.69ms; source plugins.metadata.scan 308.31ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3694 ms | 129 ms | 3565 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-agent-cold-warm-message-67b331a3-kova-260714-013518-732341/openclaw/timeline.jsonl |
  | warm | 3130 ms | 100 ms | 3030 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-agent-cold-warm-message-67b331a3-kova-260714-013518-732341/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 129 ms | 74 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 100 ms | 59 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-013518-732341-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-013518-732341-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260714-013518-732341-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-fresh-install-fresh-r1-697fad55-kova-260714-013518-732341
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-fresh-install-fresh-r2-da880701-kova-260714-013518-732341
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-fresh-install-fresh-r3-82f8bdbd-kova-260714-013518-732341
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-fresh-install-onboarded-9f99e904-kova-260714-013518-732341
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-fresh-install-onboarded-f9c24855-kova-260714-013518-732341
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-fresh-install-onboarded-fe872c26-kova-260714-013518-732341
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260714-013518-732341
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-bundled-runtime-deps-mi-39c08a4a-kova-260714-013518-732341
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260714-013518-732341/kova-bundled-runtime-deps-mi-150715ba-kova-260714-013518-732341
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrjzblbl-3yx-98489fca`
- Result: removed
- Duration: 429ms

