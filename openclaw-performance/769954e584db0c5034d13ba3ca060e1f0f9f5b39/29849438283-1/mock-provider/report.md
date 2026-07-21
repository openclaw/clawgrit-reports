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
| Run ID | `kova-260721-205900-5a1681` |
| Generated | 2026-07-21T21:06:52.790Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3013ms | 912.6MB | n/a | 148% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 2944ms | 911.1MB | n/a | 144% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3379ms | 919.4MB | n/a | 144% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3043ms | 911.6MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.8% | 3972ms | 4015ms | 3665ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3266ms | 909.3MB | n/a | 156% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3773ms | 899.3 MB | 1677.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 2938ms | 912.6 MB | 1663 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3013ms | 920.9 MB | 1684.2 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2944ms | 911.1 MB | 1665.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3210ms | 903 MB | 1670.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 2918ms | 916 MB | 1673.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3379ms | 919.4 MB | 924.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3161ms | 905.2 MB | 910 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3444ms | 928 MB | 932.8 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3062ms | 911.6 MB | 1688.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 2866ms | 914.6 MB | 1682.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3043ms | 911 MB | 1435.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 939.4 MB | 4072ms | 4025ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 931 MB | 3972ms | 3909ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 934 MB | 3776ms | 4015ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3266ms | 917.7 MB | 1670.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3491ms | 909.3 MB | 1661.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3039ms | 903.4 MB | 1690.2 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 939.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 939.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.9% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 939.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.4% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 787.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 169.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 778.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.5% (scenario fresh-install/fresh)
- gateway: RSS 928 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 928 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 501.8 MB (scenario fresh-install/fresh); CPU 156.9% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-agent-cold-warm-message-8e2a29af-kova-260721-205900-5a1681
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 939.4 MB; tracked total 939.4 MB; max CPU 156.8%; samples 15; roles agent-cli 939.4MB/156.8%, agent-process 939.4MB/156.8%, command-tree 939.4MB/156.8%, status-cli 778.4MB/156.7%
- agent: turn 4072ms; cold/warm 4072ms/4025ms; cold-warm delta 47ms; pre-provider 3757ms; provider 2ms; metadata scans 10 (228.16ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4069.65ms; max 4072ms; pre-provider p95 3755.65ms
- agent CLI attribution: cold known 113ms / unattributed 3644ms; warm known 115ms / unattributed 3615ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4072ms; pre-provider 3757ms; provider 2ms; post-provider 313ms; response true
    - active window: metadata scans 5 (113.07ms total, max 65.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3757ms; provider 2ms; post-provider 313ms; unknown 3440.84ms; source plugins.metadata.scan 316.16ms
  - warm: total 4025ms; pre-provider 3730ms; provider 1ms; post-provider 294ms; response true
    - active window: metadata scans 5 (115.09ms total, max 64.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3730ms; provider 1ms; post-provider 294ms; unknown 3413.84ms; source plugins.metadata.scan 316.16ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3757 ms | 113 ms | 3644 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-agent-cold-warm-message-8e2a29af-kova-260721-205900-5a1681/openclaw/timeline.jsonl |
  | warm | 3730 ms | 115 ms | 3615 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-agent-cold-warm-message-8e2a29af-kova-260721-205900-5a1681/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 113 ms | 65 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 115 ms | 64 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-agent-cold-warm-message-2ab680e0-kova-260721-205900-5a1681
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 931 MB; tracked total 931 MB; max CPU 155.4%; samples 14; roles agent-cli 931MB/155.4%, agent-process 931MB/155.4%, command-tree 931MB/155.4%, status-cli 760.7MB/154.5%
- agent: turn 3972ms; cold/warm 3972ms/3909ms; cold-warm delta 63ms; pre-provider 3665ms; provider 3ms; metadata scans 10 (214.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3968.85ms; max 3972ms; pre-provider p95 3663.9ms
- agent CLI attribution: cold known 106ms / unattributed 3559ms; warm known 111ms / unattributed 3532ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 76.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3972ms; pre-provider 3665ms; provider 3ms; post-provider 304ms; response true
    - active window: metadata scans 5 (104.1ms total, max 60.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3665ms; provider 3ms; post-provider 304ms; unknown 3349.83ms; source plugins.metadata.scan 315.17ms
  - warm: total 3909ms; pre-provider 3643ms; provider 1ms; post-provider 265ms; response true
    - active window: metadata scans 5 (110.64ms total, max 63.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3643ms; provider 1ms; post-provider 265ms; unknown 3327.83ms; source plugins.metadata.scan 315.17ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3665 ms | 106 ms | 3559 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-agent-cold-warm-message-2ab680e0-kova-260721-205900-5a1681/openclaw/timeline.jsonl |
  | warm | 3643 ms | 111 ms | 3532 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-agent-cold-warm-message-2ab680e0-kova-260721-205900-5a1681/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 111 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-agent-cold-warm-message-67b331a3-kova-260721-205900-5a1681
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 934 MB; tracked total 934 MB; max CPU 158.4%; samples 14; roles agent-cli 934MB/158.4%, command-tree 934MB/160.9%, agent-process 934MB/158.4%, status-cli 760.6MB/160.9%
- agent: turn 4015ms; cold/warm 3776ms/4015ms; cold-warm delta 0ms; pre-provider 3743ms; provider 2ms; metadata scans 10 (221.38ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4003.05ms; max 4015ms; pre-provider p95 3729.05ms
- agent CLI attribution: cold known 104ms / unattributed 3360ms; warm known 118ms / unattributed 3625ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 3776ms; pre-provider 3464ms; provider 3ms; post-provider 309ms; response true
    - active window: metadata scans 5 (103.65ms total, max 57.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3464ms; provider 3ms; post-provider 309ms; unknown 3143.35ms; source plugins.metadata.scan 320.65ms
  - warm: total 4015ms; pre-provider 3743ms; provider 2ms; post-provider 270ms; response true
    - active window: metadata scans 5 (117.73ms total, max 64.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3743ms; provider 2ms; post-provider 270ms; unknown 3422.35ms; source plugins.metadata.scan 320.65ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3464 ms | 104 ms | 3360 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-agent-cold-warm-message-67b331a3-kova-260721-205900-5a1681/openclaw/timeline.jsonl |
  | warm | 3743 ms | 118 ms | 3625 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-agent-cold-warm-message-67b331a3-kova-260721-205900-5a1681/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 104 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 118 ms | 65 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205900-5a1681-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205900-5a1681-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260721-205900-5a1681-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-fresh-install-fresh-r1-697fad55-kova-260721-205900-5a1681
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-fresh-install-fresh-r2-da880701-kova-260721-205900-5a1681
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-fresh-install-fresh-r3-82f8bdbd-kova-260721-205900-5a1681
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-fresh-install-onboarded-9f99e904-kova-260721-205900-5a1681
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-fresh-install-onboarded-f9c24855-kova-260721-205900-5a1681
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-fresh-install-onboarded-fe872c26-kova-260721-205900-5a1681
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260721-205900-5a1681
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-bundled-runtime-deps-mi-39c08a4a-kova-260721-205900-5a1681
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260721-205900-5a1681/kova-bundled-runtime-deps-mi-150715ba-kova-260721-205900-5a1681
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrv4z3au-412-4c705a6d`
- Result: removed
- Duration: 480ms

