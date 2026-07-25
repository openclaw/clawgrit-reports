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
| Run ID | `kova-260725-220425-8d0d21` |
| Generated | 2026-07-25T22:12:20.129Z |
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
| fresh-install/fresh | 3 | PASS:3 | 5298ms | 904MB | n/a | 153% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5237ms | 897.9MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5226ms | 954.1MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 5260ms | 940.1MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 151.4% | 4776ms | 4758ms | 4229ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5301ms | 965.7MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5852ms | 889.4 MB | 1673.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5229ms | 904 MB | 1685.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5298ms | 909.7 MB | 1622.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5276ms | 965.4 MB | 1699.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5209ms | 864.1 MB | 1603.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5237ms | 897.9 MB | 1616.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5199ms | 954.1 MB | 954.1 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5283ms | 901.3 MB | 901.3 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5226ms | 983.1 MB | 983.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 5302ms | 957.3 MB | 1364.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 5260ms | 910.2 MB | 1358.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 5231ms | 940.1 MB | 1351.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 906.9 MB | 4776ms | 4758ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 883.8 MB | 4787ms | 4671ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 898.2 MB | 4770ms | 4832ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5207ms | 965.7 MB | 1696.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5302ms | 966.5 MB | 1689.4 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5301ms | 932 MB | 1599.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 983.1 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 154% (scenario fresh-install/fresh)
- gateway-tree: RSS 965.4 MB (scenario fresh-install/onboarded-user); CPU 154% (scenario fresh-install/fresh)
- agent-cli: RSS 906.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 906.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 906.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 846.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 703.3 MB (scenario fresh-install/onboarded-user); CPU 148% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 565 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario fresh-install/fresh)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-agent-cold-warm-message-8e2a29af-kova-260725-220425-8d0d21
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 906.9 MB; tracked total 906.9 MB; max CPU 151.4%; samples 16; roles agent-cli 906.9MB/151.4%, command-tree 906.9MB/151.7%, agent-process 906.9MB/151.4%, status-cli 783.7MB/151.7%
- agent: turn 4776ms; cold/warm 4776ms/4758ms; cold-warm delta 18ms; pre-provider 4229ms; provider 2ms; metadata scans 14 (246.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4775.1ms; max 4776ms; pre-provider p95 4254.65ms
- agent CLI attribution: cold known 123ms / unattributed 4106ms; warm known 124ms / unattributed 4132ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4776ms; pre-provider 4229ms; provider 2ms; post-provider 545ms; response true
    - active window: metadata scans 7 (121.46ms total, max 57.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4229ms; provider 2ms; post-provider 545ms; unknown 3845.87ms; source plugins.metadata.scan 383.13ms
  - warm: total 4758ms; pre-provider 4256ms; provider 1ms; post-provider 501ms; response true
    - active window: metadata scans 7 (124.78ms total, max 60.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4256ms; provider 1ms; post-provider 501ms; unknown 3872.87ms; source plugins.metadata.scan 383.13ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4229 ms | 123 ms | 4106 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-agent-cold-warm-message-8e2a29af-kova-260725-220425-8d0d21/openclaw/timeline.jsonl |
  | warm | 4256 ms | 124 ms | 4132 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-agent-cold-warm-message-8e2a29af-kova-260725-220425-8d0d21/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 124 ms | 60 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-agent-cold-warm-message-2ab680e0-kova-260725-220425-8d0d21
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 883.8 MB; tracked total 883.8 MB; max CPU 150.9%; samples 16; roles agent-cli 883.8MB/150.9%, command-tree 883.8MB/152.9%, agent-process 883.8MB/150.9%, status-cli 780MB/152.9%
- agent: turn 4787ms; cold/warm 4787ms/4671ms; cold-warm delta 116ms; pre-provider 4265ms; provider 2ms; metadata scans 14 (269.25ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4781.2ms; max 4787ms; pre-provider p95 4260.95ms
- agent CLI attribution: cold known 126ms / unattributed 4139ms; warm known 141ms / unattributed 4043ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4787ms; pre-provider 4265ms; provider 2ms; post-provider 520ms; response true
    - active window: metadata scans 7 (127.68ms total, max 58.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4265ms; provider 2ms; post-provider 520ms; unknown 3857.06ms; source plugins.metadata.scan 407.94ms
  - warm: total 4671ms; pre-provider 4184ms; provider 1ms; post-provider 486ms; response true
    - active window: metadata scans 7 (141.57ms total, max 63.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4184ms; provider 1ms; post-provider 486ms; unknown 3776.06ms; source plugins.metadata.scan 407.94ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4265 ms | 126 ms | 4139 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-agent-cold-warm-message-2ab680e0-kova-260725-220425-8d0d21/openclaw/timeline.jsonl |
  | warm | 4184 ms | 141 ms | 4043 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-agent-cold-warm-message-2ab680e0-kova-260725-220425-8d0d21/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-agent-cold-warm-message-67b331a3-kova-260725-220425-8d0d21
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 898.2 MB; tracked total 898.2 MB; max CPU 153.9%; samples 16; roles agent-cli 898.2MB/153.9%, agent-process 898.2MB/153.9%, command-tree 898.2MB/153.9%, status-cli 846.8MB/151.9%
- agent: turn 4832ms; cold/warm 4770ms/4832ms; cold-warm delta 0ms; pre-provider 4320ms; provider 1ms; metadata scans 14 (259.79ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4828.9ms; max 4832ms; pre-provider p95 4315.35ms
- agent CLI attribution: cold known 126ms / unattributed 4101ms; warm known 133ms / unattributed 4187ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4770ms; pre-provider 4227ms; provider 2ms; post-provider 541ms; response true
    - active window: metadata scans 7 (127.41ms total, max 56.65ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4227ms; provider 2ms; post-provider 541ms; unknown 3827.45ms; source plugins.metadata.scan 399.55ms
  - warm: total 4832ms; pre-provider 4320ms; provider 1ms; post-provider 511ms; response true
    - active window: metadata scans 7 (132.38ms total, max 60.73ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4320ms; provider 1ms; post-provider 511ms; unknown 3920.45ms; source plugins.metadata.scan 399.55ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4227 ms | 126 ms | 4101 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-agent-cold-warm-message-67b331a3-kova-260725-220425-8d0d21/openclaw/timeline.jsonl |
  | warm | 4320 ms | 133 ms | 4187 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-agent-cold-warm-message-67b331a3-kova-260725-220425-8d0d21/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 126 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-220425-8d0d21-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-220425-8d0d21-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-220425-8d0d21-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-fresh-install-fresh-r1-697fad55-kova-260725-220425-8d0d21
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-fresh-install-fresh-r2-da880701-kova-260725-220425-8d0d21
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-220425-8d0d21
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-fresh-install-onboarded-9f99e904-kova-260725-220425-8d0d21
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-fresh-install-onboarded-f9c24855-kova-260725-220425-8d0d21
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-fresh-install-onboarded-fe872c26-kova-260725-220425-8d0d21
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-220425-8d0d21
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-220425-8d0d21
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-220425-8d0d21/kova-bundled-runtime-deps-mi-150715ba-kova-260725-220425-8d0d21
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms0x2miq-4ag-8a594144`
- Result: removed
- Duration: 398ms

