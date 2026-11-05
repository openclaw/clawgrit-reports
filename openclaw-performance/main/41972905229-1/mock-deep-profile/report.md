# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — Product CPU interval evidence is incomplete

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | Product CPU interval evidence is incomplete |
| Blocking findings | 14 |
| Warnings | 0 |
| Records | 2 (PASS:1, FAIL:1) |

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
| Run ID | `kova-261105-051908-710456` |
| Generated | 2026-11-05T05:29:57.904Z |
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
| PASS | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1932.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree max CPU interval \[391.4%, 471.3%\] crosses threshold 450%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1932.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1932.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1932.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1932.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1932.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 20558ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1932.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1932.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1932.9 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | warm-agent-turn command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | warm-agent-turn responseOk was not true |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | warm-agent-turn had no attributed provider request; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261105-051908-710456/kova-agent-cold-warm-message-2c26dd1d-kova-261105-051908-710456/provider/provider-evidence.json |
| info | Kova | report | 2 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 20ms | 1589.5MB | n/a | 251% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 415.9% | 14262ms | 20558ms | 12820ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 20ms | 1589.5 MB | 2594.6 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2201.6 MB | 14262ms | 20558ms | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2129.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 471.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1932.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 415.9% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1693.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 267% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 828.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 361.4% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1589.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 251% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 511 MB (scenario gateway-performance/many-bundled-plugins); CPU 184.7% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 321.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 468.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 197.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261105-051908-710456/kova-agent-cold-warm-message-2c26dd1d-kova-261105-051908-710456
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1932.9 MB; tracked total 2201.6 MB; max CPU 415.9%; samples 143; roles command-tree 2129.6MB/471.3%, agent-process 1932.9MB/415.9%, agent-cli 321.1MB/212%, mock-provider 72.8MB/20.9%; performance thresholds skipped 14 (instrumented)
- agent: turn 20558ms; cold/warm 14262ms/20558ms; cold-warm delta 0ms; pre-provider n/a; provider n/a; metadata scans 11 (362.73ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 2; p95 20243.2ms; max 20558ms; pre-provider p95 12820ms
- agent CLI attribution: cold known 7742ms / unattributed 5078ms; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2917.4ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 33/33/8
- Violations:
  - Product CPU interval evidence is incomplete
  - command-tree max CPU interval \[391.4%, 471.3%\] crosses threshold 450%; CPU measurement is inconclusive
  - agent message command finished without a usable assistant response
  - warm agent turn did not produce the expected assistant response
  - warm agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - warm agent turn ran with mock auth but no mock provider request was captured
  - warm agent turn took 20558ms, over threshold 15000ms
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261105-051908-710456' -- agent --local...`
- Failure: \[secrets\] agent: gateway secrets.resolve unavailable (Gateway not reachable at ws://127.0.0.1:18789 (ECONNREFUSED).
- Agent turns:
  - cold: total 14262ms; pre-provider 12820ms; provider 2ms; post-provider 1440ms; response true
    - active window: metadata scans 7 (215.72ms total, max 71.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 12820ms; provider 2ms; post-provider 1440ms; unknown 9712.57ms; source agent.prepare 2673.98ms; plugins.metadata.scan 433.45ms
  - warm: total 20558ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (147.01ms total, max 75.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 20558ms; source agent.prepare 2673.98ms; plugins.metadata.scan 433.45ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 12820 ms | 7742 ms | 5078 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261105-051908-710456/kova-agent-cold-warm-message-2c26dd1d-kova-261105-051908-710456/openclaw/timeline.jsonl |
  | warm | unknown | unknown | unknown | 543 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261105-051908-710456/kova-agent-cold-warm-message-2c26dd1d-kova-261105-051908-710456/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 4153 ms | 1361 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3218 ms | 1510 ms |
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 2675 ms | 1093 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 253 ms | 253 ms |
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x3 | 7 | 0 | 215 ms | 71 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 24 ms | 24 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261105-051908-710456-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261105-051908-710456-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261105-051908-710456-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261105-051908-710456/kova-gateway-performance-man-d48bd949-kova-261105-051908-710456
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261105-051908-710456/kova-agent-cold-warm-message-2c26dd1d-kova-261105-051908-710456

## Target Cleanup

- Runtime: `kova-local-mw33ikcu-48s-bd4d3deb`
- Result: removed
- Duration: 538ms

