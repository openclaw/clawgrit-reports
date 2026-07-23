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
| Run ID | `kova-260723-052342-ae98de` |
| Generated | 2026-07-23T05:30:54.288Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3248ms | 921.2MB | n/a | 154% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 3257ms | 924.4MB | n/a | 153% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 3136ms | 910.3MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3064ms | 927.8MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.4% | 4488ms | 4405ms | 4170ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3143ms | 933.3MB | n/a | 151% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3835ms | 909.5 MB | 1605.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3169ms | 936.5 MB | 1695 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 3248ms | 921.2 MB | 1637.9 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3257ms | 924.4 MB | 1644.2 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 3272ms | 920.2 MB | 1673.3 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 3166ms | 924.8 MB | 1682.6 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3064ms | 910.3 MB | 915.2 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3136ms | 903.6 MB | 909 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3280ms | 928.2 MB | 933.4 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 3064ms | 927.8 MB | 1478.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3180ms | 921.9 MB | 1471.4 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3017ms | 940.2 MB | 1474.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 964.3 MB | 5254ms | 4630ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 969.4 MB | 4488ms | 4405ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 966.5 MB | 4417ms | 4372ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 3143ms | 920.9 MB | 1679.7 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3084ms | 947 MB | 1710.5 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3245ms | 933.3 MB | 1659 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 969.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 969.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 969.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 162.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 947 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 792.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 158.7% (scenario fresh-install/fresh)
- gateway-tree: RSS 940.2 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 550.8 MB (scenario bundled-plugin-startup/fresh); CPU 158% (scenario fresh-install/onboarded-user)
- model-cli: RSS 594.5 MB (scenario fresh-install/onboarded-user); CPU 151% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-agent-cold-warm-message-8e2a29af-kova-260723-052342-ae98de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 964.3 MB; tracked total 964.3 MB; max CPU 162.4%; samples 17; roles agent-cli 964.3MB/162.4%, agent-process 964.3MB/162.4%, command-tree 964.3MB/162.4%, status-cli 770.3MB/154.7%
- agent: turn 5254ms; cold/warm 5254ms/4630ms; cold-warm delta 624ms; pre-provider 4882ms; provider 3ms; metadata scans 14 (322.78ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5222.8ms; max 5254ms; pre-provider p95 4857ms
- agent CLI attribution: cold known 161ms / unattributed 4721ms; warm known 161ms / unattributed 4221ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 75ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5254ms; pre-provider 4882ms; provider 3ms; post-provider 369ms; response true
    - active window: metadata scans 7 (162.1ms total, max 67.09ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4882ms; provider 3ms; post-provider 369ms; unknown 4348.16ms; source plugins.metadata.scan 533.84ms
  - warm: total 4630ms; pre-provider 4382ms; provider 1ms; post-provider 247ms; response true
    - active window: metadata scans 7 (160.68ms total, max 75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4382ms; provider 1ms; post-provider 247ms; unknown 3848.16ms; source plugins.metadata.scan 533.84ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4882 ms | 161 ms | 4721 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-agent-cold-warm-message-8e2a29af-kova-260723-052342-ae98de/openclaw/timeline.jsonl |
  | warm | 4382 ms | 161 ms | 4221 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-agent-cold-warm-message-8e2a29af-kova-260723-052342-ae98de/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 161 ms | 67 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 161 ms | 75 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-agent-cold-warm-message-2ab680e0-kova-260723-052342-ae98de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 969.4 MB; tracked total 969.4 MB; max CPU 154.4%; samples 16; roles agent-cli 969.4MB/154.4%, command-tree 969.4MB/155.7%, agent-process 969.4MB/154.4%, status-cli 743.8MB/155.7%
- agent: turn 4488ms; cold/warm 4488ms/4405ms; cold-warm delta 83ms; pre-provider 4170ms; provider 3ms; metadata scans 14 (276.91ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4483.85ms; max 4488ms; pre-provider p95 4168.85ms
- agent CLI attribution: cold known 130ms / unattributed 4040ms; warm known 147ms / unattributed 4000ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 65.98ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4488ms; pre-provider 4170ms; provider 3ms; post-provider 315ms; response true
    - active window: metadata scans 7 (129.24ms total, max 59.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4170ms; provider 3ms; post-provider 315ms; unknown 3690.94ms; source plugins.metadata.scan 479.06ms
  - warm: total 4405ms; pre-provider 4147ms; provider 1ms; post-provider 257ms; response true
    - active window: metadata scans 7 (147.67ms total, max 65.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4147ms; provider 1ms; post-provider 257ms; unknown 3667.94ms; source plugins.metadata.scan 479.06ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4170 ms | 130 ms | 4040 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-agent-cold-warm-message-2ab680e0-kova-260723-052342-ae98de/openclaw/timeline.jsonl |
  | warm | 4147 ms | 147 ms | 4000 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-agent-cold-warm-message-2ab680e0-kova-260723-052342-ae98de/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 147 ms | 66 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-agent-cold-warm-message-67b331a3-kova-260723-052342-ae98de
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 966.5 MB; tracked total 966.5 MB; max CPU 156.4%; samples 16; roles agent-cli 966.5MB/156.4%, agent-process 966.5MB/156.4%, command-tree 966.5MB/156.4%, status-cli 766.4MB/154.8%
- agent: turn 4417ms; cold/warm 4417ms/4372ms; cold-warm delta 45ms; pre-provider 4114ms; provider 2ms; metadata scans 14 (263.55ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4414.75ms; max 4417ms; pre-provider p95 4124.45ms
- agent CLI attribution: cold known 133ms / unattributed 3981ms; warm known 130ms / unattributed 3995ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 73.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4417ms; pre-provider 4114ms; provider 2ms; post-provider 301ms; response true
    - active window: metadata scans 7 (134.03ms total, max 57.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4114ms; provider 2ms; post-provider 301ms; unknown 3635.1ms; source plugins.metadata.scan 478.9ms
  - warm: total 4372ms; pre-provider 4125ms; provider 1ms; post-provider 246ms; response true
    - active window: metadata scans 7 (129.52ms total, max 61.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4125ms; provider 1ms; post-provider 246ms; unknown 3646.1ms; source plugins.metadata.scan 478.9ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4114 ms | 133 ms | 3981 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-agent-cold-warm-message-67b331a3-kova-260723-052342-ae98de/openclaw/timeline.jsonl |
  | warm | 4125 ms | 130 ms | 3995 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-agent-cold-warm-message-67b331a3-kova-260723-052342-ae98de/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 133 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 62 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-052342-ae98de-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-052342-ae98de-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260723-052342-ae98de-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-fresh-install-fresh-r1-697fad55-kova-260723-052342-ae98de
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-fresh-install-fresh-r2-da880701-kova-260723-052342-ae98de
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-fresh-install-fresh-r3-82f8bdbd-kova-260723-052342-ae98de
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-fresh-install-onboarded-9f99e904-kova-260723-052342-ae98de
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-fresh-install-onboarded-f9c24855-kova-260723-052342-ae98de
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-fresh-install-onboarded-fe872c26-kova-260723-052342-ae98de
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260723-052342-ae98de
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-bundled-runtime-deps-mi-39c08a4a-kova-260723-052342-ae98de
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260723-052342-ae98de/kova-bundled-runtime-deps-mi-150715ba-kova-260723-052342-ae98de
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrx2g02x-40s-f25e5a15`
- Result: removed
- Duration: 469ms

