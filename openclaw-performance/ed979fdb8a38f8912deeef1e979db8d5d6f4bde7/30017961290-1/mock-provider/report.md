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
| Run ID | `kova-260723-153708-7f351a` |
| Generated | 2026-07-23T15:45:13.405Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3211ms | 924.5MB | n/a | 150% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3140ms | 923MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3198ms | 903.7MB | n/a | 153% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3345ms | 922.4MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 166.8% | 7010ms | 6359ms | 6518ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3245ms | 923.1MB | n/a | 139% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3690ms | 926.1 MB | 1656.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3211ms | 924.5 MB | 1667.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3173ms | 923.5 MB | 1684.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3140ms | 923 MB | 1669.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 2893ms | 922.1 MB | 1697.5 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3235ms | 924.5 MB | 1692.5 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3353ms | 903.7 MB | 908.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3105ms | 921 MB | 925.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3198ms | 901.4 MB | 904.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3345ms | 922.1 MB | 1664.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3361ms | 923.8 MB | 1455.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3164ms | 922.4 MB | 1458.4 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 951.8 MB | 8017ms | 8067ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 988.4 MB | 7010ms | 6359ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 983.6 MB | 4723ms | 6226ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3245ms | 923.1 MB | 1681.1 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3000ms | 918 MB | 1686.6 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3372ms | 924.2 MB | 1678.2 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 988.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 988.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 988.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 926.1 MB (scenario fresh-install/fresh); CPU 156% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 775.9 MB (scenario fresh-install/onboarded-user); CPU 174.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 926.1 MB (scenario fresh-install/fresh); CPU 156% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 597.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 166.9% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 748.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 165% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-agent-cold-warm-message-8e2a29af-kova-260723-153708-7f351a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 951.8 MB; tracked total 951.8 MB; max CPU 162.8%; samples 23; roles agent-cli 951.8MB/162.8%, command-tree 951.8MB/165.3%, agent-process 951.8MB/162.8%, status-cli 719.8MB/165.3%
- agent: turn 8067ms; cold/warm 8017ms/8067ms; cold-warm delta 0ms; pre-provider 7568ms; provider 6ms; metadata scans 14 (495.18ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8064.5ms; max 8067ms; pre-provider p95 7564.45ms
- agent CLI attribution: cold known 231ms / unattributed 7266ms; warm known 265ms / unattributed 7303ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 151.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 8017ms; pre-provider 7497ms; provider 4ms; post-provider 516ms; response true
    - active window: metadata scans 7 (230.55ms total, max 111.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7497ms; provider 4ms; post-provider 516ms; unknown 6551.21ms; source plugins.metadata.scan 945.79ms
  - warm: total 8067ms; pre-provider 7568ms; provider 6ms; post-provider 493ms; response true
    - active window: metadata scans 7 (264.63ms total, max 135.04ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7568ms; provider 6ms; post-provider 493ms; unknown 6622.21ms; source plugins.metadata.scan 945.79ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 7497 ms | 231 ms | 7266 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-agent-cold-warm-message-8e2a29af-kova-260723-153708-7f351a/openclaw/timeline.jsonl |
  | warm | 7568 ms | 265 ms | 7303 ms | 6 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-agent-cold-warm-message-8e2a29af-kova-260723-153708-7f351a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 231 ms | 112 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 265 ms | 135 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-agent-cold-warm-message-2ab680e0-kova-260723-153708-7f351a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 988.4 MB; tracked total 988.4 MB; max CPU 175.8%; samples 20; roles agent-cli 988.4MB/175.8%, agent-process 988.4MB/175.8%, command-tree 988.4MB/175.8%, status-cli 752.4MB/161.9%
- agent: turn 7010ms; cold/warm 7010ms/6359ms; cold-warm delta 651ms; pre-provider 6518ms; provider 4ms; metadata scans 14 (383.35ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6977.45ms; max 7010ms; pre-provider p95 6492.75ms
- agent CLI attribution: cold known 193ms / unattributed 6325ms; warm known 191ms / unattributed 5822ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 82.88ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7010ms; pre-provider 6518ms; provider 4ms; post-provider 488ms; response true
    - active window: metadata scans 7 (192.51ms total, max 82.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6518ms; provider 4ms; post-provider 488ms; unknown 5898.4ms; source plugins.metadata.scan 619.6ms
  - warm: total 6359ms; pre-provider 6013ms; provider 2ms; post-provider 344ms; response true
    - active window: metadata scans 7 (190.84ms total, max 82.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6013ms; provider 2ms; post-provider 344ms; unknown 5393.4ms; source plugins.metadata.scan 619.6ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6518 ms | 193 ms | 6325 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-agent-cold-warm-message-2ab680e0-kova-260723-153708-7f351a/openclaw/timeline.jsonl |
  | warm | 6013 ms | 191 ms | 5822 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-agent-cold-warm-message-2ab680e0-kova-260723-153708-7f351a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 193 ms | 82 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 191 ms | 83 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-agent-cold-warm-message-67b331a3-kova-260723-153708-7f351a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 983.6 MB; tracked total 983.6 MB; max CPU 166.8%; samples 20; roles agent-cli 983.6MB/166.8%, command-tree 983.6MB/174.9%, agent-process 983.6MB/166.8%, status-cli 747.9MB/174.9%
- agent: turn 6226ms; cold/warm 4723ms/6226ms; cold-warm delta 0ms; pre-provider 5873ms; provider 1ms; metadata scans 14 (332.96ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6150.85ms; max 6226ms; pre-provider p95 5799.7ms
- agent CLI attribution: cold known 137ms / unattributed 4270ms; warm known 195ms / unattributed 5678ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 105.71ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4723ms; pre-provider 4407ms; provider 3ms; post-provider 313ms; response true
    - active window: metadata scans 7 (137.59ms total, max 66.76ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4407ms; provider 3ms; post-provider 313ms; unknown 3663.04ms; source plugins.metadata.scan 743.96ms
  - warm: total 6226ms; pre-provider 5873ms; provider 1ms; post-provider 352ms; response true
    - active window: metadata scans 7 (195.37ms total, max 79.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5873ms; provider 1ms; post-provider 352ms; unknown 5129.04ms; source plugins.metadata.scan 743.96ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4407 ms | 137 ms | 4270 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-agent-cold-warm-message-67b331a3-kova-260723-153708-7f351a/openclaw/timeline.jsonl |
  | warm | 5873 ms | 195 ms | 5678 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-agent-cold-warm-message-67b331a3-kova-260723-153708-7f351a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 137 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 195 ms | 79 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-153708-7f351a-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-153708-7f351a-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-153708-7f351a-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-fresh-install-fresh-r1-697fad55-kova-260723-153708-7f351a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-fresh-install-fresh-r2-da880701-kova-260723-153708-7f351a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-153708-7f351a
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-fresh-install-onboarded-9f99e904-kova-260723-153708-7f351a
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-fresh-install-onboarded-f9c24855-kova-260723-153708-7f351a
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-fresh-install-onboarded-fe872c26-kova-260723-153708-7f351a
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-153708-7f351a
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-153708-7f351a
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-153708-7f351a/kova-bundled-runtime-deps-mi-150715ba-kova-260723-153708-7f351a
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxocv9x-421-dc6c040f`
- Result: removed
- Duration: 396ms

