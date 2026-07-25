# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 955.5 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 955.5 MB exceeded threshold 950 MB |
| Blocking findings | 6 |
| Warnings | 20 |
| Records | 18 (PASS:15, FAIL:3) |

## Proof Completeness

- Completeness: complete: 18
- Required obligations: 259 total, 0 missing, 0 failed
- Categories: command: 169, artifact: 18, cleanup: 18, collector: 18, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260725-180544-26db01` |
| Generated | 2026-07-25T18:13:34.952Z |
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
| PASS | 15 |
| FAIL | 3 |

## Release Gate

- Verdict: DO\_NOT\_SHIP
- Complete: no
- Partial: yes
- Missing required coverage/items: 44
- Blocking: 3
- Warnings: 20
- Info: 44

### Subsystems

- OpenClaw: 3 blocking, 0 warning
  - primary: gateway peak RSS 955.5 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 955.5 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 955.5 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 960.5 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 951.3 MB exceeded threshold 950 MB
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
| info | Kova | report | 20 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:3 | 5243ms | 882.3MB | n/a | 151% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5192ms | 891.3MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5284ms | 963.3MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5525ms | 955.5MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 155.9% | 4930ms | 4753ms | 4378ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5208ms | 911.3MB | n/a | 152% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5895ms | 887.7 MB | 1678 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5243ms | 853.5 MB | 1595.2 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5239ms | 882.3 MB | 1664.4 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5192ms | 900.4 MB | 1680.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5174ms | 891.3 MB | 1674.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5246ms | 840.6 MB | 1625.9 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5284ms | 963.3 MB | 963.3 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5388ms | 947.1 MB | 947.1 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5145ms | 966.1 MB | 966.1 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5434ms | 955.5 MB | 1639.7 MB | n/a | n/a | gateway peak RSS 955.5 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5669ms | 960.5 MB | 1640.1 MB | n/a | n/a | gateway peak RSS 960.5 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5525ms | 951.3 MB | 1322.5 MB | n/a | n/a | gateway peak RSS 951.3 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 949.1 MB | 5042ms | 4757ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 939.7 MB | 4930ms | 4742ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 941.9 MB | 4897ms | 4753ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5262ms | 893.4 MB | 1668.4 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5208ms | 956.6 MB | 1688.2 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5167ms | 911.3 MB | 1682.8 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 966.1 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 155% (scenario bundled-plugin-startup/fresh)
- agent-cli: RSS 949.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 949.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.9% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 949.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 905.2 MB (scenario bundled-plugin-startup/fresh); CPU 155% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 861.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152% (scenario fresh-install/onboarded-user)
- plugin-cli: RSS 752.7 MB (scenario bundled-plugin-startup/fresh); CPU 150% (scenario bundled-plugin-startup/fresh)
- model-cli: RSS 567.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-bundled-plugin-startup-4a0cbdf7-kova-260725-180544-26db01
Measurements:
- startup: listening 5025ms; health 5434ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 409ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/restart 565ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 955.5 MB; tracked total 1639.7 MB; max CPU 155%; samples 15; roles gateway 955.5MB/155%, gateway-tree 905.2MB/155%, command-tree 734.8MB/149%, plugin-cli 734.8MB/149%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 760.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 955.5 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-bundled-plugin-startup-809ede2b-kova-260725-180544-26db01
Measurements:
- startup: listening 5277ms; health 5669ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 392ms; post-ready p95 2ms; failures 31; final failures 0; slowest startup-sample/restart 609ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 960.5 MB; tracked total 1640.1 MB; max CPU 155%; samples 16; roles gateway 960.5MB/155%, gateway-tree 887.7MB/155%, command-tree 752.7MB/150%, plugin-cli 752.7MB/150%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 773.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 960.5 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-bundled-plugin-startup-5377119f-kova-260725-180544-26db01
Measurements:
- startup: listening 5024ms; health 5525ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 501ms; post-ready p95 3ms; failures 30; final failures 0; slowest startup-sample/restart 567ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 951.3 MB; tracked total 1322.5 MB; max CPU 153%; samples 15; roles gateway 951.3MB/153%, gateway-tree 893.2MB/153%, command-tree 429.7MB/145%, plugin-cli 429.7MB/145%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 769.85ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 951.3 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-agent-cold-warm-message-8e2a29af-kova-260725-180544-26db01
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 949.1 MB; tracked total 949.1 MB; max CPU 155.9%; samples 16; roles agent-cli 949.1MB/155.9%, agent-process 949.1MB/155.9%, command-tree 949.1MB/155.9%, status-cli 861.2MB/147.9%
- agent: turn 5042ms; cold/warm 5042ms/4757ms; cold-warm delta 285ms; pre-provider 4494ms; provider 2ms; metadata scans 14 (251.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5027.75ms; max 5042ms; pre-provider p95 4482.5ms
- agent CLI attribution: cold known 123ms / unattributed 4371ms; warm known 129ms / unattributed 4135ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 63.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5042ms; pre-provider 4494ms; provider 2ms; post-provider 546ms; response true
    - active window: metadata scans 7 (122.78ms total, max 53.19ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4494ms; provider 2ms; post-provider 546ms; unknown 4110.13ms; source plugins.metadata.scan 383.87ms
  - warm: total 4757ms; pre-provider 4264ms; provider 1ms; post-provider 492ms; response true
    - active window: metadata scans 7 (128.74ms total, max 63.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4264ms; provider 1ms; post-provider 492ms; unknown 3880.13ms; source plugins.metadata.scan 383.87ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4494 ms | 123 ms | 4371 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-agent-cold-warm-message-8e2a29af-kova-260725-180544-26db01/openclaw/timeline.jsonl |
  | warm | 4264 ms | 129 ms | 4135 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-agent-cold-warm-message-8e2a29af-kova-260725-180544-26db01/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 123 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 129 ms | 63 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-agent-cold-warm-message-2ab680e0-kova-260725-180544-26db01
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 939.7 MB; tracked total 939.7 MB; max CPU 153.9%; samples 16; roles agent-cli 939.7MB/153.9%, agent-process 939.7MB/153.9%, command-tree 939.7MB/153.9%, status-cli 849.7MB/151.9%
- agent: turn 4930ms; cold/warm 4930ms/4742ms; cold-warm delta 188ms; pre-provider 4378ms; provider 2ms; metadata scans 14 (234.21ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4920.6ms; max 4930ms; pre-provider p95 4371.2ms
- agent CLI attribution: cold known 115ms / unattributed 4263ms; warm known 120ms / unattributed 4122ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 62.78ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4930ms; pre-provider 4378ms; provider 2ms; post-provider 550ms; response true
    - active window: metadata scans 7 (115.37ms total, max 53.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4378ms; provider 2ms; post-provider 550ms; unknown 4000.68ms; source plugins.metadata.scan 377.32ms
  - warm: total 4742ms; pre-provider 4242ms; provider 1ms; post-provider 499ms; response true
    - active window: metadata scans 7 (118.84ms total, max 54.8ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4242ms; provider 1ms; post-provider 499ms; unknown 3864.68ms; source plugins.metadata.scan 377.32ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4378 ms | 115 ms | 4263 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-agent-cold-warm-message-2ab680e0-kova-260725-180544-26db01/openclaw/timeline.jsonl |
  | warm | 4242 ms | 120 ms | 4122 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-agent-cold-warm-message-2ab680e0-kova-260725-180544-26db01/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 115 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 120 ms | 54 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-agent-cold-warm-message-67b331a3-kova-260725-180544-26db01
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 941.9 MB; tracked total 941.9 MB; max CPU 159.9%; samples 16; roles agent-cli 941.9MB/159.9%, agent-process 941.9MB/159.9%, command-tree 941.9MB/159.9%, status-cli 857.1MB/150.9%
- agent: turn 4897ms; cold/warm 4897ms/4753ms; cold-warm delta 144ms; pre-provider 4374ms; provider 3ms; metadata scans 14 (250.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4889.8ms; max 4897ms; pre-provider p95 4368.3ms
- agent CLI attribution: cold known 119ms / unattributed 4255ms; warm known 132ms / unattributed 4128ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4897ms; pre-provider 4374ms; provider 3ms; post-provider 520ms; response true
    - active window: metadata scans 7 (119.33ms total, max 56.23ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4374ms; provider 3ms; post-provider 520ms; unknown 3991.52ms; source plugins.metadata.scan 382.48ms
  - warm: total 4753ms; pre-provider 4260ms; provider 1ms; post-provider 492ms; response true
    - active window: metadata scans 7 (131.16ms total, max 64.39ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4260ms; provider 1ms; post-provider 492ms; unknown 3877.52ms; source plugins.metadata.scan 382.48ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4374 ms | 119 ms | 4255 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-agent-cold-warm-message-67b331a3-kova-260725-180544-26db01/openclaw/timeline.jsonl |
  | warm | 4260 ms | 132 ms | 4128 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-agent-cold-warm-message-67b331a3-kova-260725-180544-26db01/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 119 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 132 ms | 65 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-180544-26db01-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-180544-26db01-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-180544-26db01-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-fresh-install-fresh-r1-697fad55-kova-260725-180544-26db01
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-fresh-install-fresh-r2-da880701-kova-260725-180544-26db01
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-180544-26db01
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-fresh-install-onboarded-9f99e904-kova-260725-180544-26db01
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-fresh-install-onboarded-f9c24855-kova-260725-180544-26db01
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-fresh-install-onboarded-fe872c26-kova-260725-180544-26db01
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-180544-26db01
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-180544-26db01
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-180544-26db01/kova-bundled-runtime-deps-mi-150715ba-kova-260725-180544-26db01
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-ms0ojocf-426-2a891ad5`
- Result: removed
- Duration: 407ms

