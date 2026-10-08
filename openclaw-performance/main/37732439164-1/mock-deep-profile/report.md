# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1448.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1734.8 MB, gateway 1448.4 MB, command-tree 1102.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1448.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1734.8 MB, gateway 1448.4 MB, command-tree 1102.2 MB |
| Blocking findings | 15 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 1, incomplete: 1
- Required obligations: 118 total, 4 missing, 4 failed
- Categories: command: 100, artifact: 2, cleanup: 2, collector: 2, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1: command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 1 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |
| gateway-performance | cleanup:env-cleanup | failed | env destroy command failed |
| agent-cold-warm-message | command:cold-agent-turn:1 | failed | command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-local-transport-proof | failed | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | expected at least 2 agent turn(s), found 1 |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-261008-052859-4fd699` |
| Generated | 2026-10-08T05:38:33.960Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1448.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1734.8 MB, gateway 1448.4 MB, command-tree 1102.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 108 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1734.8 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 108 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | cleanup proof failed: disposable Kova env cleanup completed or was explicitly accounted for | env destroy command failed |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1069.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1069.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1069.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1069.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1069.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1069.8 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | expected at least 2 agent turn(s), found 1 |
| info | Kova | report | 3 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 108ms | 1448.4MB | n/a | 236.5% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 195.5% | 16713ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 108ms | 1448.4 MB | 2860.3 MB | n/a | n/a | gateway peak RSS 1448.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1734.8 MB, gateway 1448.4 MB, command-tree 1102.2 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1251.7 MB | 16713ms | n/a | agent message command finished without a usable assistant response |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1734.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 289.6% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1179.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 298.7% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1448.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 236.5% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1102.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 298.7% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 633.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 250% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1069.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 195.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 206.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 239.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 416.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 197.2% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroy-failed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261008-052859-4fd699/kova-gateway-performance-man-d48bd949-kova-261008-052859-4fd699
Measurements:
- startup: listening 1ms; health 108ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 107ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 107ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1448.4 MB; tracked total 2860.3 MB; max CPU 236.5%; samples 127; roles gateway-tree 1734.8MB/289.6%, command-tree 1102.2MB/298.7%, gateway 1448.4MB/236.5%, status-cli 1102.2MB/298.7%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1351.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 18/18/11
- Violations:
  - gateway peak RSS 1448.4 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1734.8 MB, gateway 1448.4 MB, command-tree 1102.2 MB
  - gateway-tree peak RSS 1734.8 MB exceeded threshold 1440 MB
- Failed command: `ocm env destroy 'kova-gateway-performance-man-d48bd949-kova-261008-052859-4fd699' --yes`
- Failure: ocm: environment process state changed during inspection; retry the command

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261008-052859-4fd699/kova-agent-cold-warm-message-2c26dd1d-kova-261008-052859-4fd699
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1069.8 MB; tracked total 1251.7 MB; max CPU 195.5%; samples 69; roles command-tree 1179.4MB/239.9%, agent-cli 206.9MB/239.9%, agent-process 1069.8MB/195.5%, mock-provider 72.3MB/21.8%; performance thresholds skipped 14 (instrumented)
- agent: turn 16713ms; cold/warm 16713ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (140.43ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 16713ms; max 16713ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 2274.18ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/5
- Violations:
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261008-052859-4fd699' -- agent --local...`
- Failure: \[secrets\] agent: gateway secrets.resolve unavailable (Gateway not reachable at ws://127.0.0.1:18900 (ECONNREFUSED).
- Agent turns:
  - cold: total 16713ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (140.43ms total, max 85.36ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 16713ms; source plugins.metadata.scan 211.07ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261008-052859-4fd699/kova-agent-cold-warm-message-2c26dd1d-kova-261008-052859-4fd699/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261008-052859-4fd699-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261008-052859-4fd699-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261008-052859-4fd699-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261008-052859-4fd699/kova-gateway-performance-man-d48bd949-kova-261008-052859-4fd699
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261008-052859-4fd699/kova-agent-cold-warm-message-2c26dd1d-kova-261008-052859-4fd699

## Target Cleanup

- Runtime: `kova-local-muz3jdsb-3sz-3e86ce80`
- Result: remove-failed
- Duration: 3ms

