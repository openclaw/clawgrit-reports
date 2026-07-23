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
| Run ID | `kova-260723-141037-8de883` |
| Generated | 2026-07-23T14:18:57.370Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3161ms | 921.2MB | n/a | 152% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3027ms | 919.3MB | n/a | 137% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3198ms | 906.4MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3905ms | 923.1MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 163.7% | 5497ms | 5565ms | 5028ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3452ms | 927.5MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3962ms | 908.1 MB | 1635.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3040ms | 921.2 MB | 1685.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3161ms | 927.2 MB | 1690.2 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 2912ms | 919.3 MB | 1672.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3027ms | 921.7 MB | 1660.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3121ms | 917.1 MB | 1645.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3191ms | 906.4 MB | 911.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3198ms | 899.6 MB | 904.6 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3422ms | 908.1 MB | 908.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3222ms | 923.1 MB | 1450.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3905ms | 926.8 MB | 1726.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3987ms | 922.2 MB | 1468.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 951.2 MB | 4833ms | 5565ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 990.9 MB | 5824ms | 6149ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 981.6 MB | 5497ms | 5202ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3452ms | 914.5 MB | 1647.9 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4151ms | 927.5 MB | 1665.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3303ms | 929.3 MB | 1690.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 990.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 990.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 173.5% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 990.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 166.4% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 799.6 MB (scenario bundled-plugin-startup/fresh); CPU 173.5% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 764.5 MB (scenario fresh-install/fresh); CPU 168.5% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 929.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 929.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 598.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 163% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-agent-cold-warm-message-8e2a29af-kova-260723-141037-8de883
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 951.2 MB; tracked total 951.2 MB; max CPU 161.9%; samples 17; roles agent-cli 951.2MB/161.9%, agent-process 951.2MB/161.9%, command-tree 951.2MB/161.9%, status-cli 721.8MB/157.9%
- agent: turn 5565ms; cold/warm 4833ms/5565ms; cold-warm delta 0ms; pre-provider 5260ms; provider 1ms; metadata scans 14 (301.97ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5528.4ms; max 5565ms; pre-provider p95 5221.75ms
- agent CLI attribution: cold known 141ms / unattributed 4354ms; warm known 159ms / unattributed 5101ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 80.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4833ms; pre-provider 4495ms; provider 3ms; post-provider 335ms; response true
    - active window: metadata scans 7 (142.77ms total, max 59.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4495ms; provider 3ms; post-provider 335ms; unknown 3937.1ms; source plugins.metadata.scan 557.9ms
  - warm: total 5565ms; pre-provider 5260ms; provider 1ms; post-provider 304ms; response true
    - active window: metadata scans 7 (159.2ms total, max 73.83ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5260ms; provider 1ms; post-provider 304ms; unknown 4702.1ms; source plugins.metadata.scan 557.9ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4495 ms | 141 ms | 4354 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-agent-cold-warm-message-8e2a29af-kova-260723-141037-8de883/openclaw/timeline.jsonl |
  | warm | 5260 ms | 159 ms | 5101 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-agent-cold-warm-message-8e2a29af-kova-260723-141037-8de883/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 159 ms | 73 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-agent-cold-warm-message-2ab680e0-kova-260723-141037-8de883
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 990.9 MB; tracked total 990.9 MB; max CPU 166.4%; samples 19; roles agent-cli 990.9MB/166.4%, agent-process 990.9MB/166.4%, command-tree 990.9MB/166.4%, status-cli 751.3MB/160.3%
- agent: turn 6149ms; cold/warm 5824ms/6149ms; cold-warm delta 0ms; pre-provider 5859ms; provider 1ms; metadata scans 14 (364.14ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6132.75ms; max 6149ms; pre-provider p95 5838.4ms
- agent CLI attribution: cold known 188ms / unattributed 5259ms; warm known 176ms / unattributed 5683ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 93.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5824ms; pre-provider 5447ms; provider 3ms; post-provider 374ms; response true
    - active window: metadata scans 7 (189ms total, max 93.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5447ms; provider 3ms; post-provider 374ms; unknown 4842.24ms; source plugins.metadata.scan 604.76ms
  - warm: total 6149ms; pre-provider 5859ms; provider 1ms; post-provider 289ms; response true
    - active window: metadata scans 7 (175.14ms total, max 78.17ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5859ms; provider 1ms; post-provider 289ms; unknown 5254.24ms; source plugins.metadata.scan 604.76ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5447 ms | 188 ms | 5259 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-agent-cold-warm-message-2ab680e0-kova-260723-141037-8de883/openclaw/timeline.jsonl |
  | warm | 5859 ms | 176 ms | 5683 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-agent-cold-warm-message-2ab680e0-kova-260723-141037-8de883/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 188 ms | 94 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 176 ms | 78 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-agent-cold-warm-message-67b331a3-kova-260723-141037-8de883
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 981.6 MB; tracked total 981.6 MB; max CPU 163.7%; samples 18; roles agent-cli 981.6MB/163.7%, agent-process 981.6MB/163.7%, command-tree 981.6MB/163.7%, status-cli 721.8MB/159.6%
- agent: turn 5497ms; cold/warm 5497ms/5202ms; cold-warm delta 295ms; pre-provider 5028ms; provider 4ms; metadata scans 14 (346.47ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5482.25ms; max 5497ms; pre-provider p95 5021.1ms
- agent CLI attribution: cold known 176ms / unattributed 4852ms; warm known 173ms / unattributed 4717ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 80.48ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5497ms; pre-provider 5028ms; provider 4ms; post-provider 465ms; response true
    - active window: metadata scans 7 (174.92ms total, max 79.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5028ms; provider 4ms; post-provider 465ms; unknown 4446.04ms; source plugins.metadata.scan 581.96ms
  - warm: total 5202ms; pre-provider 4890ms; provider 1ms; post-provider 311ms; response true
    - active window: metadata scans 7 (171.55ms total, max 77.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4890ms; provider 1ms; post-provider 311ms; unknown 4308.04ms; source plugins.metadata.scan 581.96ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5028 ms | 176 ms | 4852 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-agent-cold-warm-message-67b331a3-kova-260723-141037-8de883/openclaw/timeline.jsonl |
  | warm | 4890 ms | 173 ms | 4717 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-agent-cold-warm-message-67b331a3-kova-260723-141037-8de883/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 176 ms | 80 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 173 ms | 77 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-141037-8de883-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-141037-8de883-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-141037-8de883-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-fresh-install-fresh-r1-697fad55-kova-260723-141037-8de883
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-fresh-install-fresh-r2-da880701-kova-260723-141037-8de883
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-141037-8de883
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-fresh-install-onboarded-9f99e904-kova-260723-141037-8de883
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-fresh-install-onboarded-f9c24855-kova-260723-141037-8de883
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-fresh-install-onboarded-fe872c26-kova-260723-141037-8de883
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-141037-8de883
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-141037-8de883
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-141037-8de883/kova-bundled-runtime-deps-mi-150715ba-kova-260723-141037-8de883
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxl9lut-40v-3eec6389`
- Result: removed
- Duration: 437ms

