# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1691.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1977.5 MB, gateway 1691.4 MB, command-tree 1183.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1691.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1977.5 MB, gateway 1691.4 MB, command-tree 1183.7 MB |
| Blocking findings | 14 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

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
| Run ID | `kova-261010-052549-6c710b` |
| Generated | 2026-10-10T05:34:17.391Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1691.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1977.5 MB, gateway 1691.4 MB, command-tree 1183.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 131 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1977.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 131 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1188.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1188.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1188.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1188.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1188.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1188.3 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | expected at least 2 agent turn(s), found 1 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | agent turn attribution count 1 was below required 2; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261010-052549-6c710b/kova-agent-cold-warm-message-2c26dd1d-kova-261010-052549-6c710b/provider/provider-evidence.json |
| info | Kova | report | 2 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 131ms | 1691.4MB | n/a | 236.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 258.9% | 14152ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 131ms | 1691.4 MB | 3004.6 MB | n/a | n/a | gateway peak RSS 1691.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1977.5 MB, gateway 1691.4 MB, command-tree 1183.7 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1368.9 MB | 14152ms | n/a | agent message command finished without a usable assistant response |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1977.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 285.1% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1297.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 305% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1691.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 236.9% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1183.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 305% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1188.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 258.9% (scenario agent-cold-warm-message/mock-openai-provider)
- uncategorized: RSS 700.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 230.7% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 419.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 187.1% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 357.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 196.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261010-052549-6c710b/kova-gateway-performance-man-d48bd949-kova-261010-052549-6c710b
Measurements:
- startup: listening 0ms; health 131ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 131ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/warm-restart 131ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1691.4 MB; tracked total 3004.6 MB; max CPU 236.9%; samples 124; roles gateway-tree 1977.5MB/285.1%, command-tree 1183.7MB/305%, gateway 1691.4MB/236.9%, status-cli 1183.7MB/305%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.main.gateway-run-select-environment 1446.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 19/19/12
- Violations:
  - gateway peak RSS 1691.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1977.5 MB, gateway 1691.4 MB, command-tree 1183.7 MB
  - gateway-tree peak RSS 1977.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261010-052549-6c710b/kova-agent-cold-warm-message-2c26dd1d-kova-261010-052549-6c710b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1188.3 MB; tracked total 1368.9 MB; max CPU 258.9%; samples 59; roles command-tree 1297.4MB/300%, agent-process 1188.3MB/258.9%, agent-cli 185.8MB/110.4%, mock-provider 71.8MB/22.1%; performance thresholds skipped 14 (instrumented)
- agent: turn 14152ms; cold/warm 14152ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (127.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 14152ms; max 14152ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1501.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/5
- Violations:
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261010-052549-6c710b' -- agent --local...`
- Failure: \[secrets\] agent: gateway secrets.resolve unavailable (Gateway not reachable at ws://127.0.0.1:18789 (ECONNREFUSED).
- Agent turns:
  - cold: total 14152ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (127.09ms total, max 59.75ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 14152ms; source plugins.metadata.scan 195.33ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261010-052549-6c710b/kova-agent-cold-warm-message-2c26dd1d-kova-261010-052549-6c710b/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261010-052549-6c710b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261010-052549-6c710b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261010-052549-6c710b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261010-052549-6c710b/kova-gateway-performance-man-d48bd949-kova-261010-052549-6c710b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261010-052549-6c710b/kova-agent-cold-warm-message-2c26dd1d-kova-261010-052549-6c710b

## Target Cleanup

- Runtime: `kova-local-mv1yb0m6-3tz-ba67549e`
- Result: removed
- Duration: 514ms

