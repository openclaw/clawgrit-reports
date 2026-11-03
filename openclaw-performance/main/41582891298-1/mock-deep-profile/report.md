# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent message command finished without a usable assistant response

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent message command finished without a usable assistant response |
| Blocking findings | 13 |
| Warnings | 0 |
| Records | 2 (BLOCKED:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 1, incomplete: 1
- Required obligations: 118 total, 4 missing, 3 failed
- Categories: command: 100, artifact: 2, cleanup: 2, collector: 2, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1: command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 1 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |
| agent-cold-warm-message | command:cold-agent-turn:1 | failed | command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-local-transport-proof | failed | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | expected at least 2 agent turn(s), found 1 |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261103-051853-dce54c` |
| Generated | 2026-11-03T05:28:33.678Z |
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
| blocked | OpenClaw | gateway-performance/many-bundled-plugins | status-cli max CPU interval \[199.8%, 328%\] crosses threshold 250%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 29 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1059.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1059.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1059.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1059.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1059.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1059.9 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | expected at least 2 agent turn(s), found 1 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | agent turn attribution count 1 was below required 2; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261103-051853-dce54c/kova-agent-cold-warm-message-2c26dd1d-kova-261103-051853-dce54c/provider/provider-evidence.json |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent total, pre-provider, provider, and post-provider latency windows were measured | expected at least 2 agent turn(s), found 1 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | BLOCKED:1 | 29ms | 1635.1MB | n/a | 220.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 206.3% | 12893ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | BLOCKED | gateway-performance/many-bundled-plugins |  | 29ms | 1635.1 MB | 2664.2 MB | n/a | n/a | status-cli max CPU interval \[199.8%, 328%\] crosses threshold 250%; CPU measurement is inconclusive |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1236.6 MB | 12893ms | n/a | agent message command finished without a usable assistant response |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1738.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 236.5% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1165.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 328% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1635.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 220.5% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1109.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 328% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1059.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.3% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 489.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 184% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 240.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.1% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 458.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 188% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: BLOCKED
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261103-051853-dce54c/kova-gateway-performance-man-d48bd949-kova-261103-051853-dce54c
Measurements:
- startup: listening 0ms; health 29ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 29ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/warm-restart 29ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1635.1 MB; tracked total 2664.2 MB; max CPU 220.5%; samples 110; roles gateway-tree 1738.9MB/236.5%, command-tree 1109.3MB/328%, gateway 1635.1MB/220.5%, status-cli 1109.3MB/328%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span post-ready.gateway-data.plugins 2090.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 19/19/9
- Violations:
  - status-cli max CPU interval \[199.8%, 328%\] crosses threshold 250%; CPU measurement is inconclusive

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261103-051853-dce54c/kova-agent-cold-warm-message-2c26dd1d-kova-261103-051853-dce54c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1059.9 MB; tracked total 1236.6 MB; max CPU 206.3%; samples 54; roles command-tree 1165.6MB/245.3%, agent-process 1059.9MB/206.3%, agent-cli 240.9MB/196.1%, mock-provider 71MB/22.2%; performance thresholds skipped 14 (instrumented)
- agent: turn 12893ms; cold/warm 12893ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (136.75ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 12893ms; max 12893ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1396.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 3/3/2
- Violations:
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261103-051853-dce54c' -- agent --local...`
- Failure: \[secrets\] agent: gateway secrets.resolve unavailable (Gateway not reachable at ws://127.0.0.1:18789 (ECONNREFUSED).
- Agent turns:
  - cold: total 12893ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (136.75ms total, max 62.33ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 12893ms; source plugins.metadata.scan 205.66ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261103-051853-dce54c/kova-agent-cold-warm-message-2c26dd1d-kova-261103-051853-dce54c/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261103-051853-dce54c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261103-051853-dce54c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261103-051853-dce54c-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261103-051853-dce54c/kova-gateway-performance-man-d48bd949-kova-261103-051853-dce54c
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261103-051853-dce54c/kova-agent-cold-warm-message-2c26dd1d-kova-261103-051853-dce54c

## Target Cleanup

- Runtime: `kova-local-mw08mjg0-3is-2eeae43a`
- Result: removed
- Duration: 471ms

