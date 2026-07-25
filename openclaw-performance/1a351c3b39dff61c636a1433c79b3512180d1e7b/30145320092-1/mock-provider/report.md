# Kova OpenClaw Runtime Report

> **[DO\_NOT\_SHIP]** — gateway peak RSS 952.7 MB exceeded threshold 950 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | DO\_NOT\_SHIP |
| Reason | gateway peak RSS 952.7 MB exceeded threshold 950 MB |
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
| Run ID | `kova-260725-051218-c963dd` |
| Generated | 2026-07-25T05:19:48.761Z |
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
  - primary: gateway peak RSS 952.7 MB exceeded threshold 950 MB
- Kova: 0 blocking, 20 warning
  - primary: Required release gate platform coverage linux-arm64 was not present in the report.

### Fixer Briefs

- OpenClaw: gateway peak RSS 952.7 MB exceeded threshold 950 MB
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
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 952.7 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 972.4 MB exceeded threshold 950 MB
  - expected: PASS for release gate
  - actual: FAIL
  - impact: This is a blocking OpenClaw release risk until fixed or explicitly reclassified.
  - likely owner: OpenClaw
- BLOCKING bundled-plugin-startup/fresh: gateway peak RSS 988.1 MB exceeded threshold 950 MB
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
| fresh-install/fresh | 3 | PASS:3 | 5169ms | 879MB | n/a | 150% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:3 | 5105ms | 961MB | n/a | 152% | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | PASS:3 | 5148ms | 959.9MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 5074ms | 972.4MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152.9% | 4618ms | 4609ms | 4131ms |
| gateway-performance/many-bundled-plugins | 3 | PASS:3 | 5070ms | 929.9MB | n/a | 153% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 5603ms | 879 MB | 1664.9 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/fresh |  | 5057ms | 868.6 MB | 1659.8 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/fresh |  | 5169ms | 962.9 MB | 1701.6 MB | n/a | n/a |  |
| 1 | PASS | fresh-install/onboarded-user |  | 5030ms | 975.3 MB | 1755 MB | n/a | n/a |  |
| 2 | PASS | fresh-install/onboarded-user |  | 5105ms | 961 MB | 1744.1 MB | n/a | n/a |  |
| 3 | PASS | fresh-install/onboarded-user |  | 5112ms | 876.2 MB | 1661.2 MB | n/a | n/a |  |
| 1 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5086ms | 960.3 MB | 965.6 MB | n/a | n/a |  |
| 2 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5148ms | 944.9 MB | 944.9 MB | n/a | n/a |  |
| 3 | PASS | bundled-runtime-deps/missing-plugin-index |  | 5162ms | 959.9 MB | 959.9 MB | n/a | n/a |  |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5074ms | 952.7 MB | 1416.2 MB | n/a | n/a | gateway peak RSS 952.7 MB exceeded threshold 950 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 5023ms | 972.4 MB | 1491.8 MB | n/a | n/a | gateway peak RSS 972.4 MB exceeded threshold 950 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 5096ms | 988.1 MB | 1483 MB | n/a | n/a | gateway peak RSS 988.1 MB exceeded threshold 950 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 943.6 MB | 4597ms | 4609ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 900.5 MB | 4618ms | 4623ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 903.8 MB | 4666ms | 4597ms |  |
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5043ms | 901.7 MB | 1649.3 MB | n/a | n/a |  |
| 2 | PASS | gateway-performance/many-bundled-plugins |  | 5070ms | 929.9 MB | 1686.7 MB | n/a | n/a |  |
| 3 | PASS | gateway-performance/many-bundled-plugins |  | 5092ms | 934.8 MB | 1606.5 MB | n/a | n/a |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- gateway: RSS 988.1 MB (scenario bundled-plugin-startup/fresh); CPU 154% (scenario fresh-install/fresh)
- command-tree: RSS 943.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 988.1 MB (scenario bundled-plugin-startup/fresh); CPU 154% (scenario fresh-install/fresh)
- status-cli: RSS 852.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 943.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 943.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 564.1 MB (scenario fresh-install/onboarded-user); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 520.2 MB (scenario bundled-plugin-startup/fresh); CPU 150% (scenario fresh-install/fresh)

## Selected Sample Details

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-bundled-plugin-startup-4a0cbdf7-kova-260725-051218-c963dd
Measurements:
- startup: listening 4518ms; health 5074ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 556ms; post-ready p95 1ms; failures 27; final failures 0; slowest startup-sample/restart 573ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 952.7 MB; tracked total 1416.2 MB; max CPU 154%; samples 14; roles gateway 952.7MB/154%, gateway-tree 896.2MB/154%, command-tree 520.2MB/145%, plugin-cli 520.2MB/145%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 704.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 952.7 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-bundled-plugin-startup-809ede2b-kova-260725-051218-c963dd
Measurements:
- startup: listening 4518ms; health 5023ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 505ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/restart 528ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 972.4 MB; tracked total 1491.8 MB; max CPU 154%; samples 14; roles gateway 972.4MB/154%, gateway-tree 972.4MB/154%, command-tree 519.7MB/148%, plugin-cli 519.7MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 719.51ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 972.4 MB exceeded threshold 950 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-bundled-plugin-startup-5377119f-kova-260725-051218-c963dd
Measurements:
- startup: listening 4518ms; health 5096ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 578ms; post-ready p95 2ms; failures 27; final failures 0; slowest startup-sample/restart 631ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 988.1 MB; tracked total 1483 MB; max CPU 154%; samples 14; roles gateway 988.1MB/154%, gateway-tree 988.1MB/154%, command-tree 495.1MB/148%, plugin-cli 495.1MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 725.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 988.1 MB exceeded threshold 950 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-agent-cold-warm-message-8e2a29af-kova-260725-051218-c963dd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 943.6 MB; tracked total 943.6 MB; max CPU 151.9%; samples 16; roles agent-cli 943.6MB/151.9%, agent-process 943.6MB/151.9%, command-tree 943.6MB/151.9%, status-cli 845.9MB/150.9%
- agent: turn 4609ms; cold/warm 4597ms/4609ms; cold-warm delta 0ms; pre-provider 4147ms; provider 1ms; metadata scans 14 (260.1ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4608.4ms; max 4609ms; pre-provider p95 4145.2ms
- agent CLI attribution: cold known 118ms / unattributed 3993ms; warm known 141ms / unattributed 4006ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 59.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4597ms; pre-provider 4111ms; provider 2ms; post-provider 484ms; response true
    - active window: metadata scans 7 (118.82ms total, max 53.69ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4111ms; provider 2ms; post-provider 484ms; unknown 3659.38ms; source plugins.metadata.scan 451.62ms
  - warm: total 4609ms; pre-provider 4147ms; provider 1ms; post-provider 461ms; response true
    - active window: metadata scans 7 (141.28ms total, max 59.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4147ms; provider 1ms; post-provider 461ms; unknown 3695.38ms; source plugins.metadata.scan 451.62ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4111 ms | 118 ms | 3993 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-agent-cold-warm-message-8e2a29af-kova-260725-051218-c963dd/openclaw/timeline.jsonl |
  | warm | 4147 ms | 141 ms | 4006 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-agent-cold-warm-message-8e2a29af-kova-260725-051218-c963dd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 118 ms | 53 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 141 ms | 60 ms |

### agent-cold-warm-message sample 2

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-agent-cold-warm-message-2ab680e0-kova-260725-051218-c963dd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 900.5 MB; tracked total 900.5 MB; max CPU 153.9%; samples 16; roles agent-cli 900.5MB/153.9%, command-tree 900.5MB/156.7%, agent-process 900.5MB/153.9%, status-cli 805MB/156.7%
- agent: turn 4623ms; cold/warm 4618ms/4623ms; cold-warm delta 0ms; pre-provider 4191ms; provider 1ms; metadata scans 14 (270.36ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4622.75ms; max 4623ms; pre-provider p95 4188ms
- agent CLI attribution: cold known 131ms / unattributed 4000ms; warm known 140ms / unattributed 4051ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 59.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4618ms; pre-provider 4131ms; provider 3ms; post-provider 484ms; response true
    - active window: metadata scans 7 (130.62ms total, max 57.27ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4131ms; provider 3ms; post-provider 484ms; unknown 3659.09ms; source plugins.metadata.scan 471.91ms
  - warm: total 4623ms; pre-provider 4191ms; provider 1ms; post-provider 431ms; response true
    - active window: metadata scans 7 (139.74ms total, max 59.15ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4191ms; provider 1ms; post-provider 431ms; unknown 3719.09ms; source plugins.metadata.scan 471.91ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4131 ms | 131 ms | 4000 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-agent-cold-warm-message-2ab680e0-kova-260725-051218-c963dd/openclaw/timeline.jsonl |
  | warm | 4191 ms | 140 ms | 4051 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-agent-cold-warm-message-2ab680e0-kova-260725-051218-c963dd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 131 ms | 57 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 140 ms | 59 ms |

### agent-cold-warm-message sample 3

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-agent-cold-warm-message-67b331a3-kova-260725-051218-c963dd
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 903.8 MB; tracked total 903.8 MB; max CPU 152.9%; samples 16; roles agent-cli 903.8MB/152.9%, agent-process 903.8MB/152.9%, command-tree 903.8MB/152.9%, status-cli 852.7MB/151.7%
- agent: turn 4666ms; cold/warm 4666ms/4597ms; cold-warm delta 69ms; pre-provider 4163ms; provider 3ms; metadata scans 14 (261.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4662.55ms; max 4666ms; pre-provider p95 4162.8ms
- agent CLI attribution: cold known 130ms / unattributed 4033ms; warm known 132ms / unattributed 4027ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 60.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 4666ms; pre-provider 4163ms; provider 3ms; post-provider 500ms; response true
    - active window: metadata scans 7 (130.03ms total, max 59.82ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4163ms; provider 3ms; post-provider 500ms; unknown 3712.78ms; source plugins.metadata.scan 450.22ms
  - warm: total 4597ms; pre-provider 4159ms; provider 0ms; post-provider 438ms; response true
    - active window: metadata scans 7 (131.46ms total, max 60.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4159ms; provider 0ms; post-provider 438ms; unknown 3708.78ms; source plugins.metadata.scan 450.22ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4163 ms | 130 ms | 4033 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-agent-cold-warm-message-67b331a3-kova-260725-051218-c963dd/openclaw/timeline.jsonl |
  | warm | 4159 ms | 132 ms | 4027 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-agent-cold-warm-message-67b331a3-kova-260725-051218-c963dd/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 130 ms | 60 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 132 ms | 61 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-051218-c963dd-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-051218-c963dd-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260725-051218-c963dd-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-fresh-install-fresh-r1-697fad55-kova-260725-051218-c963dd
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-fresh-install-fresh-r2-da880701-kova-260725-051218-c963dd
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-fresh-install-fresh-r3-82f8bdbd-kova-260725-051218-c963dd
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-fresh-install-onboarded-9f99e904-kova-260725-051218-c963dd
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-fresh-install-onboarded-f9c24855-kova-260725-051218-c963dd
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-fresh-install-onboarded-fe872c26-kova-260725-051218-c963dd
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260725-051218-c963dd
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-bundled-runtime-deps-mi-39c08a4a-kova-260725-051218-c963dd
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260725-051218-c963dd/kova-bundled-runtime-deps-mi-150715ba-kova-260725-051218-c963dd
- 9 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mrzwx103-41y-a0508778`
- Result: removed
- Duration: 399ms

