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
| Run ID | `kova-260723-154844-a24c98` |
| Generated | 2026-07-23T15:58:10.402Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3956ms | 922.5MB | n/a | 152% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3468ms | 921.7MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3273ms | 913.2MB | n/a | 151% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3187ms | 921.8MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 160.8% | 4798ms | 4957ms | 4482ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 4168ms | 921.4MB | n/a | 150% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3956ms | 906.5 MB | 1637.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3395ms | 925.5 MB | 1669.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3985ms | 922.5 MB | 1684.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3807ms | 927.7 MB | 1711.7 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3468ms | 920.9 MB | 1701.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3216ms | 921.7 MB | 1677.1 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3202ms | 913.2 MB | 918.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4186ms | 916.5 MB | 921.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3273ms | 905.6 MB | 910.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3269ms | 921.8 MB | 1471.8 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3187ms | 918.9 MB | 1447.7 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 2874ms | 923.7 MB | 1459.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 970.1 MB | 4693ms | 4698ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 953.3 MB | 4798ms | 4957ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 967.6 MB | 5708ms | 5480ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3812ms | 928.3 MB | 1663.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 4229ms | 913.8 MB | 1641.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 4168ms | 921.4 MB | 1683.4 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 970.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 970.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 167% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 970.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 163.9% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 784.2 MB (scenario fresh-install/onboarded-user); CPU 167% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 781.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 928.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario fresh-install/fresh)
- gateway-tree: RSS 928.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario fresh-install/fresh)
- model-cli: RSS 600.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 162% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-agent-cold-warm-message-8e2a29af-kova-260723-154844-a24c98
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 970.1 MB; tracked total 970.1 MB; max CPU 160.8%; samples 16; roles agent-cli 970.1MB/160.8%, agent-process 970.1MB/160.8%, command-tree 970.1MB/160.8%, status-cli 781.7MB/153.8%
- agent: turn 4698ms; cold/warm 4693ms/4698ms; cold-warm delta 0ms; pre-provider 4436ms; provider 1ms; metadata scans 14 (299.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4697.75ms; max 4698ms; pre-provider p95 4434.05ms
- agent CLI attribution: cold known 145ms / unattributed 4252ms; warm known 151ms / unattributed 4285ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 71ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4693ms; pre-provider 4397ms; provider 2ms; post-provider 294ms; response true
    - active window: metadata scans 7 (146.33ms total, max 67.97ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4397ms; provider 2ms; post-provider 294ms; unknown 3886.88ms; source plugins.metadata.scan 510.12ms
  - warm: total 4698ms; pre-provider 4436ms; provider 1ms; post-provider 261ms; response true
    - active window: metadata scans 7 (152.91ms total, max 71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4436ms; provider 1ms; post-provider 261ms; unknown 3925.88ms; source plugins.metadata.scan 510.12ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4397 ms | 145 ms | 4252 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-agent-cold-warm-message-8e2a29af-kova-260723-154844-a24c98/openclaw/timeline.jsonl |
  | warm | 4436 ms | 151 ms | 4285 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-agent-cold-warm-message-8e2a29af-kova-260723-154844-a24c98/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 145 ms | 68 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 151 ms | 70 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-agent-cold-warm-message-2ab680e0-kova-260723-154844-a24c98
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 953.3 MB; tracked total 953.3 MB; max CPU 159.9%; samples 16; roles agent-cli 953.3MB/159.9%, command-tree 953.3MB/160.9%, agent-process 953.3MB/159.9%, status-cli 756.9MB/160.9%
- agent: turn 4957ms; cold/warm 4798ms/4957ms; cold-warm delta 0ms; pre-provider 4668ms; provider 1ms; metadata scans 14 (281.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4949.05ms; max 4957ms; pre-provider p95 4658.7ms
- agent CLI attribution: cold known 135ms / unattributed 4347ms; warm known 144ms / unattributed 4524ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 86.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4798ms; pre-provider 4482ms; provider 3ms; post-provider 313ms; response true
    - active window: metadata scans 7 (134.75ms total, max 56.86ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4482ms; provider 3ms; post-provider 313ms; unknown 3926.48ms; source plugins.metadata.scan 555.52ms
  - warm: total 4957ms; pre-provider 4668ms; provider 1ms; post-provider 288ms; response true
    - active window: metadata scans 7 (146.66ms total, max 63.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4668ms; provider 1ms; post-provider 288ms; unknown 4112.48ms; source plugins.metadata.scan 555.52ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4482 ms | 135 ms | 4347 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-agent-cold-warm-message-2ab680e0-kova-260723-154844-a24c98/openclaw/timeline.jsonl |
  | warm | 4668 ms | 144 ms | 4524 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-agent-cold-warm-message-2ab680e0-kova-260723-154844-a24c98/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 135 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 144 ms | 63 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-agent-cold-warm-message-67b331a3-kova-260723-154844-a24c98
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 967.6 MB; tracked total 967.6 MB; max CPU 163.9%; samples 18; roles agent-cli 967.6MB/163.9%, agent-process 967.6MB/163.9%, command-tree 967.6MB/163.9%, status-cli 743.3MB/161.6%
- agent: turn 5708ms; cold/warm 5708ms/5480ms; cold-warm delta 228ms; pre-provider 5336ms; provider 4ms; metadata scans 14 (346.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5696.6ms; max 5708ms; pre-provider p95 5327.4ms
- agent CLI attribution: cold known 173ms / unattributed 5163ms; warm known 174ms / unattributed 4990ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 96.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5708ms; pre-provider 5336ms; provider 4ms; post-provider 368ms; response true
    - active window: metadata scans 7 (174.47ms total, max 73.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5336ms; provider 4ms; post-provider 368ms; unknown 4668ms; source plugins.metadata.scan 668ms
  - warm: total 5480ms; pre-provider 5164ms; provider 1ms; post-provider 315ms; response true
    - active window: metadata scans 7 (172.02ms total, max 83.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5164ms; provider 1ms; post-provider 315ms; unknown 4496ms; source plugins.metadata.scan 668ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5336 ms | 173 ms | 5163 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-agent-cold-warm-message-67b331a3-kova-260723-154844-a24c98/openclaw/timeline.jsonl |
  | warm | 5164 ms | 174 ms | 4990 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-agent-cold-warm-message-67b331a3-kova-260723-154844-a24c98/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 173 ms | 73 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 174 ms | 84 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-154844-a24c98-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-154844-a24c98-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-154844-a24c98-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-fresh-install-fresh-r1-697fad55-kova-260723-154844-a24c98
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-fresh-install-fresh-r2-da880701-kova-260723-154844-a24c98
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-154844-a24c98
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-fresh-install-onboarded-9f99e904-kova-260723-154844-a24c98
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-fresh-install-onboarded-f9c24855-kova-260723-154844-a24c98
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-fresh-install-onboarded-fe872c26-kova-260723-154844-a24c98
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-154844-a24c98
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-154844-a24c98
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-154844-a24c98/kova-bundled-runtime-deps-mi-150715ba-kova-260723-154844-a24c98
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrxorsap-41d-4b2dee99`
- Result: removed
- Duration: 560ms

