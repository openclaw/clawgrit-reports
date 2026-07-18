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
| Run ID | `kova-260718-185714-a9ee8c` |
| Generated | 2026-07-18T19:02:40.995Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.13.0 |
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
| fresh-install/fresh | 3 | PASS:3 | 1762ms | 858.5MB | n/a | 104% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 1917ms | 863.4MB | n/a | 124% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 1790ms | 630.7MB | n/a | 126% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | PASS:3 | 1809ms | 647MB | n/a | 128% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 142.8% | 2312ms | 2312ms | 2221ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 1838ms | 660.5MB | n/a | 125% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 2297ms | 858.5 MB | 1198.1 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 1762ms | 882.9 MB | 1373.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 1711ms | 842 MB | 1251.7 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 1953ms | 862.8 MB | 1235.5 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 1771ms | 870.3 MB | 1376.9 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 1917ms | 863.4 MB | 1362.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 1790ms | 630.7 MB | 635.5 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 1889ms | 632.9 MB | 636.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 1789ms | 608.1 MB | 612.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-plugin-startup/fresh |  | 1980ms | 645 MB | 1215.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-plugin-startup/fresh |  | 1760ms | 650 MB | 1207.2 MB | n/a | n/a |  |
| 3 | PASS | bundled-plugin-startup/fresh |  | 1809ms | 647 MB | 1199.1 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 715.2 MB | 2368ms | 2312ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 730.3 MB | 2277ms | 2277ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 730 MB | 2312ms | 2320ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 1858ms | 660.5 MB | 1204.2 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 1838ms | 653.3 MB | 1202 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 1790ms | 690.8 MB | 1201.6 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 882.9 MB (scenario fresh-install/fresh); CPU 133% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 730.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 145% (scenario bundled-plugin-startup/fresh)
- gateway-tree: RSS 882.9 MB (scenario fresh-install/fresh); CPU 133% (scenario bundled-plugin-startup/fresh)
- plugin-cli: RSS 580 MB (scenario fresh-install/fresh); CPU 145% (scenario bundled-plugin-startup/fresh)
- agent-cli: RSS 730.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 730.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 623 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 143% (scenario fresh-install/onboarded-user)
- model-cli: RSS 506.6 MB (scenario fresh-install/onboarded-user); CPU 130% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-agent-cold-warm-message-8e2a29af-kova-260718-185714-a9ee8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 715.2 MB; tracked total 715.2 MB; max CPU 139.8%; samples 11; roles agent-cli 715.2MB/139.8%, agent-process 715.2MB/139.8%, command-tree 715.2MB/139.8%, status-cli 623MB/136.8%
- agent: turn 2368ms; cold/warm 2368ms/2312ms; cold-warm delta 56ms; pre-provider 2268ms; provider 2ms; metadata scans 10 (125.91ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2365.2ms; max 2368ms; pre-provider p95 2265.85ms
- agent CLI attribution: cold known 64ms / unattributed 2204ms; warm known 61ms / unattributed 2164ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 41.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2368ms; pre-provider 2268ms; provider 2ms; post-provider 98ms; response true
    - active window: metadata scans 5 (65.08ms total, max 32.25ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2268ms; provider 2ms; post-provider 98ms; unknown 2081.38ms; source plugins.metadata.scan 186.62ms
  - warm: total 2312ms; pre-provider 2225ms; provider 1ms; post-provider 86ms; response true
    - active window: metadata scans 5 (60.83ms total, max 34.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2225ms; provider 1ms; post-provider 86ms; unknown 2038.38ms; source plugins.metadata.scan 186.62ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2268 ms | 64 ms | 2204 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-agent-cold-warm-message-8e2a29af-kova-260718-185714-a9ee8c/openclaw/timeline.jsonl |
  | warm | 2225 ms | 61 ms | 2164 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-agent-cold-warm-message-8e2a29af-kova-260718-185714-a9ee8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x3 | 3 | 0 | 64 ms | 32 ms |
  | warm | `plugins.metadata.scan` | `startup` x3 | 3 | 0 | 61 ms | 34 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-agent-cold-warm-message-2ab680e0-kova-260718-185714-a9ee8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 730.3 MB; tracked total 730.3 MB; max CPU 144.8%; samples 11; roles agent-cli 730.3MB/144.8%, agent-process 730.3MB/144.8%, command-tree 730.3MB/144.8%, status-cli 621.7MB/141.8%
- agent: turn 2277ms; cold/warm 2277ms/2277ms; cold-warm delta 0ms; pre-provider 2190ms; provider 3ms; metadata scans 10 (120.31ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2277ms; max 2277ms; pre-provider p95 2194.75ms
- agent CLI attribution: cold known 61ms / unattributed 2129ms; warm known 59ms / unattributed 2136ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 41.25ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2277ms; pre-provider 2190ms; provider 3ms; post-provider 84ms; response true
    - active window: metadata scans 5 (61.04ms total, max 32.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2190ms; provider 3ms; post-provider 84ms; unknown 2011.1ms; source plugins.metadata.scan 178.9ms
  - warm: total 2277ms; pre-provider 2195ms; provider 0ms; post-provider 82ms; response true
    - active window: metadata scans 5 (59.27ms total, max 32.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2195ms; provider 0ms; post-provider 82ms; unknown 2016.1ms; source plugins.metadata.scan 178.9ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2190 ms | 61 ms | 2129 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-agent-cold-warm-message-2ab680e0-kova-260718-185714-a9ee8c/openclaw/timeline.jsonl |
  | warm | 2195 ms | 59 ms | 2136 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-agent-cold-warm-message-2ab680e0-kova-260718-185714-a9ee8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x3 | 3 | 0 | 61 ms | 32 ms |
  | warm | `plugins.metadata.scan` | `startup` x3 | 3 | 0 | 59 ms | 31 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-agent-cold-warm-message-67b331a3-kova-260718-185714-a9ee8c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 730 MB; tracked total 730 MB; max CPU 142.8%; samples 11; roles agent-cli 730MB/142.8%, agent-process 730MB/142.8%, command-tree 730MB/142.8%, status-cli 560MB/139.8%
- agent: turn 2320ms; cold/warm 2312ms/2320ms; cold-warm delta 0ms; pre-provider 2232ms; provider 1ms; metadata scans 10 (120.89ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 2319.6ms; max 2320ms; pre-provider p95 2231.45ms
- agent CLI attribution: cold known 60ms / unattributed 2161ms; warm known 60ms / unattributed 2172ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 37.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 2312ms; pre-provider 2221ms; provider 2ms; post-provider 89ms; response true
    - active window: metadata scans 5 (60.94ms total, max 32.06ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2221ms; provider 2ms; post-provider 89ms; unknown 2044.7ms; source plugins.metadata.scan 176.3ms
  - warm: total 2320ms; pre-provider 2232ms; provider 1ms; post-provider 87ms; response true
    - active window: metadata scans 5 (59.95ms total, max 32.08ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2232ms; provider 1ms; post-provider 87ms; unknown 2055.7ms; source plugins.metadata.scan 176.3ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 2221 ms | 60 ms | 2161 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-agent-cold-warm-message-67b331a3-kova-260718-185714-a9ee8c/openclaw/timeline.jsonl |
  | warm | 2232 ms | 60 ms | 2172 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-agent-cold-warm-message-67b331a3-kova-260718-185714-a9ee8c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x3 | 3 | 0 | 60 ms | 32 ms |
  | warm | `plugins.metadata.scan` | `startup` x3 | 3 | 0 | 60 ms | 32 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260718-185714-a9ee8c-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260718-185714-a9ee8c-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260718-185714-a9ee8c-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-fresh-install-fresh-r1-697fad55-kova-260718-185714-a9ee8c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-fresh-install-fresh-r2-da880701-kova-260718-185714-a9ee8c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-fresh-install-fresh-r3-82f8bdbd-kova-260718-185714-a9ee8c
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-fresh-install-onboarded-9f99e904-kova-260718-185714-a9ee8c
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-fresh-install-onboarded-f9c24855-kova-260718-185714-a9ee8c
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-fresh-install-onboarded-fe872c26-kova-260718-185714-a9ee8c
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260718-185714-a9ee8c
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-bundled-runtime-deps-mi-39c08a4a-kova-260718-185714-a9ee8c
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260718-185714-a9ee8c/kova-bundled-runtime-deps-mi-150715ba-kova-260718-185714-a9ee8c
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrqqaxm5-3yb-381b640c`
- Result: removed
- Duration: 378ms

