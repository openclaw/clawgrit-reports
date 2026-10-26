# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1841.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2056 MB, gateway 1841.8 MB, command-tree 1173.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1841.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2056 MB, gateway 1841.8 MB, command-tree 1173.6 MB |
| Blocking findings | 15 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

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
| Run ID | `kova-261026-052901-739c6d` |
| Generated | 2026-10-26T05:38:58.414Z |
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
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1841.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2056 MB, gateway 1841.8 MB, command-tree 1173.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 46 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2056 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 46 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[288.8%, 317.8%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2134.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2134.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2134.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2134.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2134.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm agent turn took 16388ms, over threshold 15000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2134.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2134.4 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 2134.4 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | warm-agent-turn command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | warm-agent-turn responseOk was not true |
| info | Kova | report | 3 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 46ms | 1841.8MB | n/a | 252.3% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 317.8% | 14645ms | 16388ms | 13203ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 46ms | 1841.8 MB | 2981.5 MB | n/a | n/a | gateway peak RSS 1841.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2056 MB, gateway 1841.8 MB, command-tree 1173.6 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2402.2 MB | 14645ms | 16388ms | agent-process max CPU interval \[288.8%, 317.8%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 2330.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 384.2% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2134.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 317.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1173.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 318.8% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 2056 MB (scenario gateway-performance/many-bundled-plugins); CPU 291.3% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1841.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 252.3% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 638.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 208.8% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 369.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 210.4% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 532.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 184.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261026-052901-739c6d/kova-gateway-performance-man-d48bd949-kova-261026-052901-739c6d
Measurements:
- startup: listening 1ms; health 46ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 45ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 45ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1841.8 MB; tracked total 2981.5 MB; max CPU 252.3%; samples 118; roles gateway-tree 2056MB/291.3%, command-tree 1173.6MB/334.8%, gateway 1841.8MB/252.3%, status-cli 1173.6MB/318.8%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2174.83ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 26/26/13
- Violations:
  - gateway peak RSS 1841.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2056 MB, gateway 1841.8 MB, command-tree 1173.6 MB
  - gateway-tree peak RSS 2056 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261026-052901-739c6d/kova-agent-cold-warm-message-2c26dd1d-kova-261026-052901-739c6d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 2134.4 MB; tracked total 2402.2 MB; max CPU 317.8%; samples 129; roles command-tree 2330.4MB/384.2%, agent-process 2134.4MB/317.8%, agent-cli 369.1MB/210.4%, mock-provider 72.5MB/23.4%; performance thresholds skipped 14 (instrumented)
- agent: turn 16388ms; cold/warm 14645ms/16388ms; cold-warm delta 0ms; pre-provider n/a; provider n/a; metadata scans 11 (378.49ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 2; p95 16300.85ms; max 16388ms; pre-provider p95 13203ms
- agent CLI attribution: cold known 8259ms / unattributed 4944ms; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2979.14ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 36/36/12
- Violations:
  - agent-process max CPU interval \[288.8%, 317.8%\] crosses threshold 300%; CPU measurement is inconclusive
  - agent message command finished without a usable assistant response
  - warm agent turn did not produce the expected assistant response
  - warm agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - warm agent turn ran with mock auth but no mock provider request was captured
  - warm agent turn took 16388ms, over threshold 15000ms
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261026-052901-739c6d' -- agent --local...`
- Failure: \[secrets\] agent: gateway secrets.resolve unavailable (Gateway not reachable at ws://127.0.0.1:18789 (ECONNREFUSED).
- Agent turns:
  - cold: total 14645ms; pre-provider 13203ms; provider 2ms; post-provider 1440ms; response true
    - active window: metadata scans 7 (239.45ms total, max 75.67ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 13203ms; provider 2ms; post-provider 1440ms; unknown 8850.71ms; source agent.prepare 3919.48ms; plugins.metadata.scan 432.81ms
  - warm: total 16388ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (139.04ms total, max 65.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 16388ms; source agent.prepare 3919.48ms; plugins.metadata.scan 432.81ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 13203 ms | 8259 ms | 4944 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261026-052901-739c6d/kova-agent-cold-warm-message-2c26dd1d-kova-261026-052901-739c6d/openclaw/timeline.jsonl |
  | warm | unknown | unknown | unknown | 350 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261026-052901-739c6d/kova-agent-cold-warm-message-2c26dd1d-kova-261026-052901-739c6d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x13 | 13 | 0 | 3921 ms | 1587 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 3378 ms | 1752 ms |
  | cold | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 3235 ms | 992 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup` x4 | 7 | 0 | 241 ms | 75 ms |
  | cold | `cli.main.database-engine-selection` | `cli.startup` | 1 | 0 | 230 ms | 230 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 22 ms | 22 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261026-052901-739c6d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261026-052901-739c6d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261026-052901-739c6d-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261026-052901-739c6d/kova-gateway-performance-man-d48bd949-kova-261026-052901-739c6d
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261026-052901-739c6d/kova-agent-cold-warm-message-2c26dd1d-kova-261026-052901-739c6d

## Target Cleanup

- Runtime: `kova-local-mvotgr5s-3eo-e9b90966`
- Result: removed
- Duration: 502ms

