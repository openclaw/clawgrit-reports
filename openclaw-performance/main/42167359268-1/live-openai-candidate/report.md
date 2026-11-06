# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent message command finished without a usable assistant response

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent message command finished without a usable assistant response |
| Blocking findings | 12 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: incomplete: 1
- Required obligations: 21 total, 4 missing, 3 failed
- Categories: command: 6, invariant: 12, artifact: 1, cleanup: 1, collector: 1

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
| Run ID | `kova-261106-051816-ce2fc9` |
| Generated | 2026-11-06T05:21:51.385Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.22.1 |
| Repeat / parallel | 1 / 1 |
| Auth | live (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 1 |
| Scenarios | 1 |
| States | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 488.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 488.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 488.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 488.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | providerFinalMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 488.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 488.6 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | expected at least 2 agent turn(s), found 1 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | agent turn attribution count 1 was below required 2; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261106-051816-ce2fc9/kova-agent-cold-warm-message-2c26dd1d-kova-261106-051816-ce2fc9/provider/provider-evidence.json |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent total, pre-provider, provider, and post-provider latency windows were measured | expected at least 2 agent turn(s), found 1 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: no-service local agent env state and final health accounting were captured | post-agent status command did not pass |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 144.3% | 2833ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 585.5 MB | 2833ms | n/a | agent message command finished without a usable assistant response |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 585.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 488.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 144.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 96.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 119.9% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261106-051816-ce2fc9/kova-agent-cold-warm-message-2c26dd1d-kova-261106-051816-ce2fc9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 488.6 MB; tracked total 585.5 MB; max CPU 144.3%; samples 5; roles command-tree 585.5MB/154.3%, agent-process 488.6MB/144.3%, agent-cli 96.9MB/119.9%
- agent: turn 2833ms; cold/warm 2833ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (185.6ms); event-loop n/a; polls 0; cleanup n/a; diagnosis live-provider-timing-unavailable; leaks 0
- Agent turn stats: count 1; p95 2833ms; max 2833ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1086.99ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - providerFinalMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261106-051816-ce2fc9' -- agent --local...`
- Failure: \[openclaw\] The CLI command failed.
- Agent turns:
  - cold: total 2833ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (185.6ms total, max 94.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 2833ms; source plugins.metadata.scan 609.69ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261106-051816-ce2fc9/kova-agent-cold-warm-message-2c26dd1d-kova-261106-051816-ce2fc9/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261106-051816-ce2fc9-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261106-051816-ce2fc9-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-261106-051816-ce2fc9-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-261106-051816-ce2fc9/kova-agent-cold-warm-message-2c26dd1d-kova-261106-051816-ce2fc9

## Target Cleanup

- Runtime: `kova-local-mw4ixb5r-48u-c41201fb`
- Result: removed
- Duration: 543ms

