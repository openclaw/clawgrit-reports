# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1694.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1914.4 MB, gateway 1694.3 MB, command-tree 865.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1694.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1914.4 MB, gateway 1694.3 MB, command-tree 865.3 MB |
| Blocking findings | 56 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: complete: 3, incomplete: 3
- Required obligations: 352 total, 12 missing, 12 failed
- Categories: command: 298, artifact: 6, cleanup: 6, collector: 6, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1: command exited 13 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 1 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1: command exited 13 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 1 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261018-052245-3a5971` |
| Generated | 2026-10-18T05:43:28.776Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 6 |
| Scenarios | 2 |
| States | 2 |
| FAIL | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1694.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1914.4 MB, gateway 1694.3 MB, command-tree 865.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 39 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1914.4 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 39 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1653.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1872.6 MB, gateway 1653.5 MB, command-tree 1056.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1872.6 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 1056.3 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 447ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1719.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1937.8 MB, gateway 1719.3 MB, command-tree 875.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 17 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1937.8 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 17 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1300 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1482.6 MB, agent-process 1300 MB, agent-cli 182.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1300 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 1482.6 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1300 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | 1 missing dependency/plugin load error patterns found | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1300 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1300 |
| info | Kova | report | 44 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 17ms | 1694.3MB | n/a | 258.2% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 227.1% | 5974ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 39ms | 1694.3 MB | 2692.2 MB | n/a | n/a | gateway peak RSS 1694.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1914.4 MB, gateway 1694.3 MB, command-tree 865.3 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 2ms | 1653.5 MB | 2863.3 MB | n/a | n/a | gateway peak RSS 1653.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1872.6 MB, gateway 1653.5 MB, command-tree 1056.3 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 17ms | 1719.3 MB | 2690.3 MB | n/a | n/a | gateway peak RSS 1719.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1937.8 MB, gateway 1719.3 MB, command-tree 875.7 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1554.1 MB | 5974ms | n/a | agent-process peak RSS 1300 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1482.6 MB, agent-process 1300 MB, agent-cli 182.6 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1534.4 MB | 6010ms | n/a | agent-process peak RSS 1280.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1463.1 MB, agent-process 1280.4 MB, agent-cli 182.7 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1578.9 MB | 5911ms | n/a | agent-process peak RSS 1324.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1507.5 MB, agent-process 1324.6 MB, agent-cli 182.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1937.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 279.7% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1719.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 270.7% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1507.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 242.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1324.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 228.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1056.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 170.1% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 637.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 136.2% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 182.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.1% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 388.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 141.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-gateway-performance-man-005107f3-kova-261018-052245-3a5971
Measurements:
- startup: listening 1ms; health 39ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 38ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 1700ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1694.3 MB; tracked total 2692.2 MB; max CPU 250.6%; samples 37; roles gateway-tree 1914.4MB/269.4%, gateway 1694.3MB/250.6%, command-tree 865.3MB/162.6%, status-cli 865.3MB/162.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1233.08ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1694.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1914.4 MB, gateway 1694.3 MB, command-tree 865.3 MB
  - gateway-tree peak RSS 1914.4 MB exceeded threshold 1440 MB

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-gateway-performance-man-1e8be6a8-kova-261018-052245-3a5971
Measurements:
- startup: listening 0ms; health 2ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 2ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 74ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1653.5 MB; tracked total 2863.3 MB; max CPU 270.7%; samples 36; roles gateway-tree 1872.6MB/279.7%, gateway 1653.5MB/270.7%, command-tree 1056.3MB/170.1%, status-cli 1056.3MB/170.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1299.3ms; embedded traces 0; liveness warnings 0; open spans 3 (1 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1653.5 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1872.6 MB, gateway 1653.5 MB, command-tree 1056.3 MB
  - gateway-tree peak RSS 1872.6 MB exceeded threshold 1440 MB
  - status-cli peak RSS 1056.3 MB exceeded threshold 900 MB
  - 1 required OpenClaw diagnostics span(s) were left open; slowest gateway.ready age 447ms

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-gateway-performance-man-958fde53-kova-261018-052245-3a5971
Measurements:
- startup: listening 0ms; health 17ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 17ms; post-ready p95 2ms; failures 0; final failures 0; slowest final/final 1668ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1719.3 MB; tracked total 2690.3 MB; max CPU 258.2%; samples 37; roles gateway-tree 1937.8MB/275%, gateway 1719.3MB/258.2%, command-tree 875.7MB/160%, status-cli 875.7MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1225.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1719.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1937.8 MB, gateway 1719.3 MB, command-tree 875.7 MB
  - gateway-tree peak RSS 1937.8 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-agent-cold-warm-message-8e2a29af-kova-261018-052245-3a5971
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1300 MB; tracked total 1554.1 MB; max CPU 228.6%; samples 8; roles command-tree 1482.6MB/242.9%, agent-process 1300MB/228.6%, agent-cli 182.6MB/146.2%, mock-provider 71.5MB/5%
- agent: turn 5974ms; cold/warm 5974ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (109.1ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 5974ms; max 5974ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 1; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 955.35ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1300 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1482.6 MB, agent-process 1300 MB, agent-cli 182.6 MB
  - command-tree peak RSS 1482.6 MB exceeded threshold 1400 MB
  - 1 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-8e2a29af-kova-261018-052245-3a5971' -- agent --local...`
- Failure: \[31m\[memory\]\[39m \[33mfile worker unavailable; restarting in 500 ms: Cannot find module '/home/runner/.ocm/runtimes/kova-local-mvddpvwj-3dc-c92e1938/files/node\_modules/openclaw/dist/worker/memory-worker-entry.js'\[39m
- Agent turns:
  - cold: total 5974ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (109.1ms total, max 62.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 5974ms; source plugins.metadata.scan 163.79ms; agent.prepare 105.84ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-agent-cold-warm-message-8e2a29af-kova-261018-052245-3a5971/openclaw/timeline.jsonl |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-agent-cold-warm-message-2ab680e0-kova-261018-052245-3a5971
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1280.4 MB; tracked total 1534.4 MB; max CPU 227.1%; samples 8; roles command-tree 1463.1MB/241.1%, agent-process 1280.4MB/227.1%, agent-cli 182.7MB/147.1%, mock-provider 71.3MB/5.1%
- agent: turn 6010ms; cold/warm 6010ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (117.61ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 6010ms; max 6010ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 1; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 984.65ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1280.4 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1463.1 MB, agent-process 1280.4 MB, agent-cli 182.7 MB
  - command-tree peak RSS 1463.1 MB exceeded threshold 1400 MB
  - 1 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2ab680e0-kova-261018-052245-3a5971' -- agent --local...`
- Failure: \[31m\[memory\]\[39m \[33mfile worker unavailable; restarting in 500 ms: Cannot find module '/home/runner/.ocm/runtimes/kova-local-mvddpvwj-3dc-c92e1938/files/node\_modules/openclaw/dist/worker/memory-worker-entry.js'\[39m
- Agent turns:
  - cold: total 6010ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (117.61ms total, max 63.87ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 6010ms; source plugins.metadata.scan 178.1ms; agent.prepare 98.21ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-agent-cold-warm-message-2ab680e0-kova-261018-052245-3a5971/openclaw/timeline.jsonl |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-agent-cold-warm-message-67b331a3-kova-261018-052245-3a5971
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1324.6 MB; tracked total 1578.9 MB; max CPU 224.2%; samples 8; roles command-tree 1507.5MB/238.6%, agent-process 1324.6MB/224.2%, agent-cli 182.9MB/152.1%, mock-provider 71.4MB/4.9%
- agent: turn 5911ms; cold/warm 5911ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (115.25ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 5911ms; max 5911ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 1; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 963.77ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1324.6 MB exceeded threshold 1150 MB; observed role agent-process; top RSS roles: command-tree 1507.5 MB, agent-process 1324.6 MB, agent-cli 182.9 MB
  - command-tree peak RSS 1507.5 MB exceeded threshold 1400 MB
  - 1 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-67b331a3-kova-261018-052245-3a5971' -- agent --local...`
- Failure: \[31m\[memory\]\[39m \[33mfile worker unavailable; restarting in 500 ms: Cannot find module '/home/runner/.ocm/runtimes/kova-local-mvddpvwj-3dc-c92e1938/files/node\_modules/openclaw/dist/worker/memory-worker-entry.js'\[39m
- Agent turns:
  - cold: total 5911ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (115.25ms total, max 65.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 5911ms; source plugins.metadata.scan 174.99ms; agent.prepare 105.56ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-agent-cold-warm-message-67b331a3-kova-261018-052245-3a5971/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261018-052245-3a5971-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261018-052245-3a5971-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-261018-052245-3a5971-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-gateway-performance-man-005107f3-kova-261018-052245-3a5971
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-gateway-performance-man-1e8be6a8-kova-261018-052245-3a5971
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-gateway-performance-man-958fde53-kova-261018-052245-3a5971
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-agent-cold-warm-message-8e2a29af-kova-261018-052245-3a5971
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-agent-cold-warm-message-2ab680e0-kova-261018-052245-3a5971
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-261018-052245-3a5971/kova-agent-cold-warm-message-67b331a3-kova-261018-052245-3a5971

## Target Cleanup

- Runtime: `kova-local-mvddpvwj-3dc-c92e1938`
- Result: removed
- Duration: 447ms

