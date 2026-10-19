# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1774.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1990.5 MB, gateway 1774.2 MB, command-tree 1100.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1774.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1990.5 MB, gateway 1774.2 MB, command-tree 1100.2 MB |
| Blocking findings | 16 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 1, incomplete: 1
- Required obligations: 118 total, 4 missing, 4 failed
- Categories: command: 100, artifact: 2, cleanup: 2, collector: 2, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1: command exited 13 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 1 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |
| agent-cold-warm-message | command:cold-agent-turn:1 | failed | command exited 13 |
| agent-cold-warm-message | invariant:agent-cli-local-transport-proof | failed | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-missing-runtime-dependency-errors | failed | missingDependencyErrors was 1 |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261019-052635-d934df` |
| Generated | 2026-10-19T05:36:31.511Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1774.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1990.5 MB, gateway 1774.2 MB, command-tree 1100.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 37 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1990.5 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 37 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | 1 missing dependency/plugin load error patterns found | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1575.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1575.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1575.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1575.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1575.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1575.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1575.2 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1: command exited 13 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | expected at least 2 agent turn(s), found 1 |
| info | Kova | report | 4 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 37ms | 1774.2MB | n/a | 271.1% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 335% | 13927ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 37ms | 1774.2 MB | 2907.1 MB | n/a | n/a | gateway peak RSS 1774.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1990.5 MB, gateway 1774.2 MB, command-tree 1100.2 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1843.4 MB | 13927ms | n/a | 1 missing dependency/plugin load error patterns found |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1990.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 303% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1772.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 389% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1774.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 271.1% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1575.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 335% (scenario agent-cold-warm-message/mock-openai-provider)
- tool-runtime: RSS 83.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 335% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1100.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 312.6% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 626.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 225.6% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 497.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 207.3% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261019-052635-d934df/kova-gateway-performance-man-d48bd949-kova-261019-052635-d934df
Measurements:
- startup: listening 0ms; health 37ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 36ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 36ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1774.2 MB; tracked total 2907.1 MB; max CPU 271.1%; samples 129; roles gateway-tree 1990.5MB/303%, command-tree 1100.2MB/312.6%, gateway 1774.2MB/271.1%, status-cli 1100.2MB/312.6%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2263.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 29/29/15
- Violations:
  - gateway peak RSS 1774.2 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1990.5 MB, gateway 1774.2 MB, command-tree 1100.2 MB
  - gateway-tree peak RSS 1990.5 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261019-052635-d934df/kova-agent-cold-warm-message-2c26dd1d-kova-261019-052635-d934df
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1575.2 MB; tracked total 1843.4 MB; max CPU 335%; samples 58; roles command-tree 1772.1MB/389%, agent-process 1575.2MB/335%, agent-cli 216.9MB/185.5%, tool-runtime 83.4MB/335%; performance thresholds skipped 14 (instrumented)
- agent: turn 13927ms; cold/warm 13927ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (165.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 13927ms; max 13927ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 1; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2130.68ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 19/19/4
- Violations:
  - 1 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261019-052635-d934df' -- agent --local...`
- Failure: \[31m\[memory\]\[39m \[33mfile worker unavailable; restarting in 500 ms: Cannot find module '/home/runner/.ocm/runtimes/kova-local-mvetants-3cw-0f59569a/files/node\_modules/openclaw/dist/worker/memory-worker-entry.js'\[39m
- Agent turns:
  - cold: total 13927ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (165.24ms total, max 75.99ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 13927ms; source agent.prepare 333.72ms; plugins.metadata.scan 236.91ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261019-052635-d934df/kova-agent-cold-warm-message-2c26dd1d-kova-261019-052635-d934df/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261019-052635-d934df-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261019-052635-d934df-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261019-052635-d934df-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261019-052635-d934df/kova-gateway-performance-man-d48bd949-kova-261019-052635-d934df
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261019-052635-d934df/kova-agent-cold-warm-message-2c26dd1d-kova-261019-052635-d934df

## Target Cleanup

- Runtime: `kova-local-mvetants-3cw-0f59569a`
- Result: removed
- Duration: 547ms

