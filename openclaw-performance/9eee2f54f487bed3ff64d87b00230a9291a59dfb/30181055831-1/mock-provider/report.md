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
| Run ID | `kova-260726-002356-13c9c8` |
| Generated | 2026-07-26T00:31:43.648Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5280ms | 906.3MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5246ms | 901.4MB | n/a | 154% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5287ms | 932.9MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5279ms | 965.7MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 151.9% | 4804ms | 4701ms | 4246ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5252ms | 959.5MB | n/a | 154% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5803ms | 984.9 MB | 1705.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5238ms | 889.3 MB | 1681.4 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5280ms | 906.3 MB | 1696.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5246ms | 907.3 MB | 1695.6 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5176ms | 866.2 MB | 1653.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5253ms | 901.4 MB | 1641.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5274ms | 960.3 MB | 960.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5287ms | 932.9 MB | 932.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5306ms | 898.4 MB | 898.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5124ms | 945.7 MB | 1356.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5325ms | 977.7 MB | 1429.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5279ms | 965.7 MB | 1374.7 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 899.1 MB | 4804ms | 4701ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 907.5 MB | 4820ms | 4717ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 891.2 MB | 4763ms | 4637ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5252ms | 1011.2 MB | 1797.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5285ms | 959.5 MB | 1691.1 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5199ms | 930.6 MB | 1637.2 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 1011.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario fresh-install/fresh)
- gateway-tree: RSS 1011.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario fresh-install/fresh)
- agent-cli: RSS 907.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 907.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 907.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 859.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 565.7 MB (scenario fresh-install/fresh); CPU 144% (scenario fresh-install/fresh)
- plugin-cli: RSS 468.4 MB (scenario bundled-plugin-startup/fresh); CPU 148% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-agent-cold-warm-message-8e2a29af-kova-260726-002356-13c9c8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 899.1 MB; tracked total 899.1 MB; max CPU 153.4%; samples 16; roles agent-cli 899.1MB/153.4%, agent-process 899.1MB/153.4%, command-tree 899.1MB/153.4%, status-cli 814.7MB/151.7%
- agent: turn 4804ms; cold/warm 4804ms/4701ms; cold-warm delta 103ms; pre-provider 4246ms; provider 2ms; metadata scans 14 (251.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4798.85ms; max 4804ms; pre-provider p95 4244.3ms
- agent CLI attribution: cold known 133ms / unattributed 4113ms; warm known 118ms / unattributed 4094ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4804ms; pre-provider 4246ms; provider 2ms; post-provider 556ms; response true
    - active window: metadata scans 7 (132.05ms total, max 64.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4246ms; provider 2ms; post-provider 556ms; unknown 3865.6ms; source plugins.metadata.scan 380.4ms
  - warm: total 4701ms; pre-provider 4212ms; provider 1ms; post-provider 488ms; response true
    - active window: metadata scans 7 (119.73ms total, max 60.89ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4212ms; provider 1ms; post-provider 488ms; unknown 3831.6ms; source plugins.metadata.scan 380.4ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4246 ms | 133 ms | 4113 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-agent-cold-warm-message-8e2a29af-kova-260726-002356-13c9c8/openclaw/timeline.jsonl |
  | warm | 4212 ms | 118 ms | 4094 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-agent-cold-warm-message-8e2a29af-kova-260726-002356-13c9c8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 118 ms | 60 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-agent-cold-warm-message-2ab680e0-kova-260726-002356-13c9c8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 907.5 MB; tracked total 907.5 MB; max CPU 151.9%; samples 16; roles agent-cli 907.5MB/151.9%, command-tree 907.5MB/152.9%, agent-process 907.5MB/151.9%, status-cli 855.4MB/152.9%
- agent: turn 4820ms; cold/warm 4820ms/4717ms; cold-warm delta 103ms; pre-provider 4266ms; provider 3ms; metadata scans 14 (253.51ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4814.85ms; max 4820ms; pre-provider p95 4264.15ms
- agent CLI attribution: cold known 133ms / unattributed 4133ms; warm known 121ms / unattributed 4108ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.49ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4820ms; pre-provider 4266ms; provider 3ms; post-provider 551ms; response true
    - active window: metadata scans 7 (131.75ms total, max 59.45ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4266ms; provider 3ms; post-provider 551ms; unknown 3879.3ms; source plugins.metadata.scan 386.7ms
  - warm: total 4717ms; pre-provider 4229ms; provider 1ms; post-provider 487ms; response true
    - active window: metadata scans 7 (121.76ms total, max 63.01ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4229ms; provider 1ms; post-provider 487ms; unknown 3842.3ms; source plugins.metadata.scan 386.7ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4266 ms | 133 ms | 4133 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-agent-cold-warm-message-2ab680e0-kova-260726-002356-13c9c8/openclaw/timeline.jsonl |
  | warm | 4229 ms | 121 ms | 4108 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-agent-cold-warm-message-2ab680e0-kova-260726-002356-13c9c8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 121 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-agent-cold-warm-message-67b331a3-kova-260726-002356-13c9c8
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 891.2 MB; tracked total 891.2 MB; max CPU 151.9%; samples 16; roles agent-cli 891.2MB/151.9%, agent-process 891.2MB/151.9%, command-tree 891.2MB/151.9%, status-cli 859.4MB/151.8%
- agent: turn 4763ms; cold/warm 4763ms/4637ms; cold-warm delta 126ms; pre-provider 4200ms; provider 2ms; metadata scans 14 (250.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4756.7ms; max 4763ms; pre-provider p95 4197.3ms
- agent CLI attribution: cold known 127ms / unattributed 4073ms; warm known 126ms / unattributed 4020ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 66.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4763ms; pre-provider 4200ms; provider 2ms; post-provider 561ms; response true
    - active window: metadata scans 7 (124.77ms total, max 56.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4200ms; provider 2ms; post-provider 561ms; unknown 3820.16ms; source plugins.metadata.scan 379.84ms
  - warm: total 4637ms; pre-provider 4146ms; provider 1ms; post-provider 490ms; response true
    - active window: metadata scans 7 (126.11ms total, max 60.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4146ms; provider 1ms; post-provider 490ms; unknown 3766.16ms; source plugins.metadata.scan 379.84ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4200 ms | 127 ms | 4073 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-agent-cold-warm-message-67b331a3-kova-260726-002356-13c9c8/openclaw/timeline.jsonl |
  | warm | 4146 ms | 126 ms | 4020 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-agent-cold-warm-message-67b331a3-kova-260726-002356-13c9c8/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 127 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 60 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-002356-13c9c8-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-002356-13c9c8-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260726-002356-13c9c8-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-fresh-install-fresh-r1-697fad55-kova-260726-002356-13c9c8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-fresh-install-fresh-r2-da880701-kova-260726-002356-13c9c8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-fresh-install-fresh-r3-82f8bdbd-kova-260726-002356-13c9c8
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-fresh-install-onboarded-9f99e904-kova-260726-002356-13c9c8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-fresh-install-onboarded-f9c24855-kova-260726-002356-13c9c8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-fresh-install-onboarded-fe872c26-kova-260726-002356-13c9c8
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260726-002356-13c9c8
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-bundled-runtime-deps-mi-39c08a4a-kova-260726-002356-13c9c8
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260726-002356-13c9c8/kova-bundled-runtime-deps-mi-150715ba-kova-260726-002356-13c9c8
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms1221wd-41y-a5b21989`
- Result: removed
- Duration: 393ms

