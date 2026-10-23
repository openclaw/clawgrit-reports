# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1876.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2123.9 MB, gateway 1876.8 MB, command-tree 1075.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1876.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2123.9 MB, gateway 1876.8 MB, command-tree 1075.1 MB |
| Blocking findings | 16 |
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
| Run ID | `kova-261023-052458-468ab5` |
| Generated | 2026-10-23T05:35:38.479Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1876.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2123.9 MB, gateway 1876.8 MB, command-tree 1075.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 114 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 2123.9 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 114 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | 1 event-loop delay signals found | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 114 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | Product CPU interval evidence is incomplete | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1524.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1524.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1524.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1524.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1524.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1524.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1524.9 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 1 |
| info | Kova | report | 4 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 114ms | 1876.8MB | n/a | 288.8% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 337.8% | 27253ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 114ms | 1876.8 MB | 3137.7 MB | n/a | n/a | gateway peak RSS 1876.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2123.9 MB, gateway 1876.8 MB, command-tree 1075.1 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1795 MB | 27253ms | n/a | Product CPU interval evidence is incomplete |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 2123.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 319.6% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1723.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 386.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1876.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 288.8% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1524.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 337.8% (scenario agent-cold-warm-message/mock-openai-provider)
- tool-runtime: RSS 70.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 337.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1075.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 323.4% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 639.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 231.1% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 505.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 192.1% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261023-052458-468ab5/kova-gateway-performance-man-d48bd949-kova-261023-052458-468ab5
Measurements:
- startup: listening 3ms; health 114ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 110ms; post-ready p95 2ms; failures 0; final failures 0; slowest startup-sample/cold-start 110ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1876.8 MB; tracked total 3137.7 MB; max CPU 288.8%; samples 146; roles gateway-tree 2123.9MB/319.6%, command-tree 1075.1MB/323.4%, gateway 1876.8MB/288.8%, status-cli 1075.1MB/323.4%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2951.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 28/28/15
- Violations:
  - gateway peak RSS 1876.8 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 2123.9 MB, gateway 1876.8 MB, command-tree 1075.1 MB
  - gateway-tree peak RSS 2123.9 MB exceeded threshold 1440 MB
  - 1 event-loop delay signals found

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261023-052458-468ab5/kova-agent-cold-warm-message-2c26dd1d-kova-261023-052458-468ab5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1524.9 MB; tracked total 1795 MB; max CPU 337.8%; samples 111; roles command-tree 1723.4MB/386.6%, agent-process 1524.9MB/337.8%, agent-cli 219.6MB/211.5%, tool-runtime 70.6MB/337.8%; performance thresholds skipped 14 (instrumented)
- agent: turn 27253ms; cold/warm 27253ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (209.09ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 27253ms; max 27253ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2168.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 5/5/4
- Violations:
  - Product CPU interval evidence is incomplete
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261023-052458-468ab5' -- agent --local...`
- Failure: \[secrets\] agent: gateway secrets.resolve unavailable (Gateway not reachable at ws://127.0.0.1:18789 (ECONNREFUSED).
- Agent turns:
  - cold: total 27253ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (209.09ms total, max 109.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 27253ms; source plugins.metadata.scan 298.96ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261023-052458-468ab5/kova-agent-cold-warm-message-2c26dd1d-kova-261023-052458-468ab5/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261023-052458-468ab5-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261023-052458-468ab5-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261023-052458-468ab5-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261023-052458-468ab5/kova-gateway-performance-man-d48bd949-kova-261023-052458-468ab5
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261023-052458-468ab5/kova-agent-cold-warm-message-2c26dd1d-kova-261023-052458-468ab5

## Target Cleanup

- Runtime: `kova-local-mvkj003m-3dg-3682bb71`
- Result: removed
- Duration: 605ms

