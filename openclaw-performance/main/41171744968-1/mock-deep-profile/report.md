# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent message command finished without a usable assistant response

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent message command finished without a usable assistant response |
| Blocking findings | 14 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 1, incomplete: 1
- Required obligations: 119 total, 4 missing, 2 failed
- Categories: command: 101, artifact: 2, cleanup: 2, collector: 2, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | warm-agent-turn command 1: command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | warm-agent-turn had no attributed provider request |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | warm-agent-turn missing latency field(s): preProviderMs, providerFinalMs, postProviderMs |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |
| agent-cold-warm-message | command:warm-agent-turn:1 | failed | command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | warm-agent-turn responseOk was not true |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261031-051609-bdc50f` |
| Generated | 2026-10-31T05:25:50.645Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
| Repeat / parallel | 1 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 2 |
| Scenarios | 2 |
| States | 2 |
| BLOCKED | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[198.6%, 309.8%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 239 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[292.8%, 316%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 20774ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1899 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | warm-agent-turn command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | warm-agent-turn responseOk was not true |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | warm-agent-turn had no attributed provider request; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261031-051609-bdc50f/kova-agent-cold-warm-message-2c26dd1d-kova-261031-051609-bdc50f/provider/provider-evidence.json |
| info | Kova | report | 2 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 239ms | 1605MB | n/a | 289.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 316% | 13378ms | 20774ms | 11473ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 239ms | 1605 MB | 2824.7 MB | n/a | n/a | status-cli max CPU interval \[198.6%, 309.8%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2166.8 MB | 13378ms | 20774ms | agent-process max CPU interval \[292.8%, 316%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2094.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 384.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1899 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 316% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1798.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 322% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1605 MB (scenario gateway-performance/many-bundled-plugins); CPU 289.8% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1206.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 309.8% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 523.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 204.4% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 422.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 223.6% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 492.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.4% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261031-051609-bdc50f/kova-gateway-performance-man-d48bd949-kova-261031-051609-bdc50f
Measurements:
- startup: listening 0ms; health 239ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 239ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 239ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1605 MB; tracked total 2824.7 MB; max CPU 289.8%; samples 107; roles gateway-tree 1798.7MB/322%, gateway 1605MB/289.8%, command-tree 1206.4MB/309.8%, status-cli 1206.4MB/309.8%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 3870.25ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 23/23/12
- Violations:
  - status-cli max CPU interval \[198.6%, 309.8%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261031-051609-bdc50f/kova-agent-cold-warm-message-2c26dd1d-kova-261031-051609-bdc50f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1899 MB; tracked total 2166.8 MB; max CPU 316%; samples 141; roles command-tree 2094.7MB/384.5%, agent-process 1899MB/316%, agent-cli 422.3MB/223.6%, mock-provider 72.8MB/22.3%; performance thresholds skipped 14 (instrumented)
- agent: turn 20774ms; cold/warm 13378ms/20774ms; cold-warm delta 0ms; pre-provider n/a; provider n/a; metadata scans 11 (329.11ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 2; p95 20404.2ms; max 20774ms; pre-provider p95 11473ms
- agent CLI attribution: cold known 7062ms / unattributed 4411ms; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2650.4ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 34/34/10
- Violations:
  - agent-process max CPU interval \[292.8%, 316%\] crosses threshold 300%; CPU measurement is inconclusive
  - agent message command finished without a usable assistant response
  - warm agent turn did not produce the expected assistant response
  - warm agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - warm agent turn ran with mock auth but no mock provider request was captured
  - warm agent turn took 20774ms, over threshold 15000ms
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261031-051609-bdc50f' -- agent --local...`
- Failure: \[secrets\] agent: gateway secrets.resolve unavailable (Gateway not reachable at ws://127.0.0.1:18789 (ECONNREFUSED).
- Agent turns:
  - cold: total 13378ms; pre-provider 11473ms; provider 2ms; post-provider 1903ms; response true
    - active window: metadata scans 7 (212.12ms total, max 77.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 11473ms; provider 2ms; post-provider 1903ms; unknown 8674.16ms; source agent.prepare 2405.87ms; plugins.metadata.scan 392.97ms
  - warm: total 20774ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (116.99ms total, max 62.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 20774ms; source agent.prepare 2405.87ms; plugins.metadata.scan 392.97ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 11473 ms | 7062 ms | 4411 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261031-051609-bdc50f/kova-agent-cold-warm-message-2c26dd1d-kova-261031-051609-bdc50f/openclaw/timeline.jsonl |
  | warm | unknown | unknown | unknown | 250 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261031-051609-bdc50f/kova-agent-cold-warm-message-2c26dd1d-kova-261031-051609-bdc50f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3486 ms | 1130 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3158 ms | 1501 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2406 ms | 1000 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 226 ms | 226 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3 | 4 | 0 | 119 ms | 62 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261031-051609-bdc50f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261031-051609-bdc50f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261031-051609-bdc50f-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261031-051609-bdc50f/kova-gateway-performance-man-d48bd949-kova-261031-051609-bdc50f
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261031-051609-bdc50f/kova-agent-cold-warm-message-2c26dd1d-kova-261031-051609-bdc50f

## Target Cleanup

- Runtime: `kova-local-mvvy7gvw-3f3-302d3409`
- Result: removed
- Duration: 497ms

