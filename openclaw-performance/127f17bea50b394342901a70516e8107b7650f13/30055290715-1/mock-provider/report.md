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
| Run ID | `kova-260724-000909-3ce02c` |
| Generated | 2026-07-24T00:17:54.234Z |
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
| fresh-install/fresh | 3 | PASS:3 | 3654ms | 956.2MB | n/a | 144% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 4119ms | 954MB | n/a | 151% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 4101ms | 943MB | n/a | 150% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 3887ms | 935.8MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 156.7% | 4529ms | 4393ms | 4234ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 3111ms | 959.5MB | n/a | 150% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 3654ms | 915.4 MB | 1656.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 3578ms | 965.5 MB | 1687.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 6253ms | 956.2 MB | 1709.5 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 3521ms | 996.3 MB | 1714.4 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 4386ms | 954 MB | 1721.6 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 4119ms | 941 MB | 1665.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4101ms | 940.5 MB | 945.4 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 4365ms | 943 MB | 943 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 3884ms | 943.7 MB | 943.7 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 4110ms | 925.5 MB | 1683.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 3887ms | 935.8 MB | 1653.5 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 3210ms | 946.5 MB | 1482.8 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 966.7 MB | 4299ms | 4514ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 961.1 MB | 5587ms | 4389ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 955.3 MB | 4529ms | 4393ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 2942ms | 959.5 MB | 1737.5 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 3111ms | 961.2 MB | 1725.9 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 3291ms | 930.4 MB | 1678 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 996.3 MB (scenario fresh-install/onboarded-user); CPU 162% (scenario fresh-install/fresh)
- command-tree: RSS 966.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.5% (scenario fresh-install/onboarded-user)
- gateway-tree: RSS 996.3 MB (scenario fresh-install/onboarded-user); CPU 162% (scenario fresh-install/fresh)
- plugin-cli: RSS 758.4 MB (scenario bundled-plugin-startup/fresh); CPU 175.5% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 966.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 660.9 MB (scenario fresh-install/onboarded-user); CPU 173% (scenario fresh-install/onboarded-user)
- agent-process: RSS 966.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 778.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 169% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-agent-cold-warm-message-8e2a29af-kova-260724-000909-3ce02c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 966.7 MB; tracked total 966.7 MB; max CPU 156.7%; samples 16; roles agent-cli 966.7MB/156.7%, agent-process 966.7MB/156.7%, command-tree 966.7MB/156.7%, status-cli 768.7MB/152.7%
- agent: turn 4514ms; cold/warm 4299ms/4514ms; cold-warm delta 0ms; pre-provider 4252ms; provider 2ms; metadata scans 14 (257.75ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4503.25ms; max 4514ms; pre-provider p95 4239.5ms
- agent CLI attribution: cold known 117ms / unattributed 3885ms; warm known 141ms / unattributed 4111ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4299ms; pre-provider 4002ms; provider 2ms; post-provider 295ms; response true
    - active window: metadata scans 7 (116.72ms total, max 55.2ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4002ms; provider 2ms; post-provider 295ms; unknown 3557.13ms; source plugins.metadata.scan 444.87ms
  - warm: total 4514ms; pre-provider 4252ms; provider 2ms; post-provider 260ms; response true
    - active window: metadata scans 7 (141.03ms total, max 62.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4252ms; provider 2ms; post-provider 260ms; unknown 3807.13ms; source plugins.metadata.scan 444.87ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4002 ms | 117 ms | 3885 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-agent-cold-warm-message-8e2a29af-kova-260724-000909-3ce02c/openclaw/timeline.jsonl |
  | warm | 4252 ms | 141 ms | 4111 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-agent-cold-warm-message-8e2a29af-kova-260724-000909-3ce02c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 117 ms | 55 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 62 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-agent-cold-warm-message-2ab680e0-kova-260724-000909-3ce02c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 961.1 MB; tracked total 961.1 MB; max CPU 156.9%; samples 17; roles agent-cli 961.1MB/156.9%, agent-process 961.1MB/156.9%, command-tree 961.1MB/156.9%, status-cli 714.7MB/152.8%
- agent: turn 5587ms; cold/warm 5587ms/4389ms; cold-warm delta 1198ms; pre-provider 5279ms; provider 3ms; metadata scans 14 (289.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5527.1ms; max 5587ms; pre-provider p95 5221.95ms
- agent CLI attribution: cold known 144ms / unattributed 5135ms; warm known 144ms / unattributed 3994ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 66.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5587ms; pre-provider 5279ms; provider 3ms; post-provider 305ms; response true
    - active window: metadata scans 7 (144.34ms total, max 60.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5279ms; provider 3ms; post-provider 305ms; unknown 4795.77ms; source plugins.metadata.scan 483.23ms
  - warm: total 4389ms; pre-provider 4138ms; provider 1ms; post-provider 250ms; response true
    - active window: metadata scans 7 (144.9ms total, max 66.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4138ms; provider 1ms; post-provider 250ms; unknown 3654.77ms; source plugins.metadata.scan 483.23ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5279 ms | 144 ms | 5135 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-agent-cold-warm-message-2ab680e0-kova-260724-000909-3ce02c/openclaw/timeline.jsonl |
  | warm | 4138 ms | 144 ms | 3994 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-agent-cold-warm-message-2ab680e0-kova-260724-000909-3ce02c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 144 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 144 ms | 66 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-agent-cold-warm-message-67b331a3-kova-260724-000909-3ce02c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 955.3 MB; tracked total 955.3 MB; max CPU 153.9%; samples 16; roles agent-cli 955.3MB/153.9%, agent-process 955.3MB/153.9%, command-tree 955.3MB/153.9%, status-cli 735.1MB/153.8%
- agent: turn 4529ms; cold/warm 4529ms/4393ms; cold-warm delta 136ms; pre-provider 4234ms; provider 2ms; metadata scans 14 (253.3ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4522.2ms; max 4529ms; pre-provider p95 4229.65ms
- agent CLI attribution: cold known 125ms / unattributed 4109ms; warm known 130ms / unattributed 4017ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 78.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4529ms; pre-provider 4234ms; provider 2ms; post-provider 293ms; response true
    - active window: metadata scans 7 (124.29ms total, max 59.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4234ms; provider 2ms; post-provider 293ms; unknown 3767.14ms; source plugins.metadata.scan 466.86ms
  - warm: total 4393ms; pre-provider 4147ms; provider 2ms; post-provider 244ms; response true
    - active window: metadata scans 7 (129.01ms total, max 62.6ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4147ms; provider 2ms; post-provider 244ms; unknown 3680.14ms; source plugins.metadata.scan 466.86ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4234 ms | 125 ms | 4109 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-agent-cold-warm-message-67b331a3-kova-260724-000909-3ce02c/openclaw/timeline.jsonl |
  | warm | 4147 ms | 130 ms | 4017 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-agent-cold-warm-message-67b331a3-kova-260724-000909-3ce02c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 125 ms | 59 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 62 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-000909-3ce02c-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-000909-3ce02c-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260724-000909-3ce02c-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-fresh-install-fresh-r1-697fad55-kova-260724-000909-3ce02c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-fresh-install-fresh-r2-da880701-kova-260724-000909-3ce02c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-fresh-install-fresh-r3-82f8bdbd-kova-260724-000909-3ce02c
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-fresh-install-onboarded-9f99e904-kova-260724-000909-3ce02c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-fresh-install-onboarded-f9c24855-kova-260724-000909-3ce02c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-fresh-install-onboarded-fe872c26-kova-260724-000909-3ce02c
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260724-000909-3ce02c
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-bundled-runtime-deps-mi-39c08a4a-kova-260724-000909-3ce02c
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260724-000909-3ce02c/kova-bundled-runtime-deps-mi-150715ba-kova-260724-000909-3ce02c
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mry6nbn9-43x-53fc20c9`
- Result: removed
- Duration: 449ms

