# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1664.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1795.2 MB, gateway 1664.3 MB, command-tree 1094.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1664.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1795.2 MB, gateway 1664.3 MB, command-tree 1094.8 MB |
| Blocking findings | 17 |
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
| Run ID | `kova-261018-052247-f5335f` |
| Generated | 2026-10-18T05:32:08.547Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1664.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1795.2 MB, gateway 1664.3 MB, command-tree 1094.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 64 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1795.2 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 64 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process max CPU interval \[282.5%, 311.3%\] crosses threshold 300%; CPU measurement is inconclusive | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1588.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | 1 missing dependency/plugin load error patterns found | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1588.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1588.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1588.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1588.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1588.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1588.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1588.1 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1: command exited 13 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 1 |
| info | Kova | report | 5 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 64ms | 1664.3MB | n/a | 243.9% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 311.3% | 11328ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 64ms | 1664.3 MB | 2909.9 MB | n/a | n/a | gateway peak RSS 1664.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1795.2 MB, gateway 1664.3 MB, command-tree 1094.8 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1857 MB | 11328ms | n/a | agent-process max CPU interval \[282.5%, 311.3%\] crosses threshold 300%; CPU measurement is inconclusive |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1795.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 291.9% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1785.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 382% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1588.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 311.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1664.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 243.9% (scenario gateway-performance/many-bundled-plugins)
- tool-runtime: RSS 97.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 311.3% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1094.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 290.9% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 644.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 203.5% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 479.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 188.4% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261018-052247-f5335f/kova-gateway-performance-man-d48bd949-kova-261018-052247-f5335f
Measurements:
- startup: listening 1ms; health 64ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 4
- health: startup p95 63ms; post-ready p95 3ms; failures 0; final failures 0; slowest startup-sample/cold-start 63ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1664.3 MB; tracked total 2909.9 MB; max CPU 243.9%; samples 116; roles gateway-tree 1795.2MB/291.9%, gateway 1664.3MB/243.9%, command-tree 1094.8MB/290.9%, status-cli 1094.8MB/290.9%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1746.9ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 29/29/15
- Violations:
  - gateway peak RSS 1664.3 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1795.2 MB, gateway 1664.3 MB, command-tree 1094.8 MB
  - gateway-tree peak RSS 1795.2 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261018-052247-f5335f/kova-agent-cold-warm-message-2c26dd1d-kova-261018-052247-f5335f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1588.1 MB; tracked total 1857 MB; max CPU 311.3%; samples 47; roles command-tree 1785.3MB/382%, agent-process 1588.1MB/311.3%, agent-cli 223.4MB/179.6%, tool-runtime 97.4MB/311.3%; performance thresholds skipped 14 (instrumented)
- agent: turn 11328ms; cold/warm 11328ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (160.98ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 11328ms; max 11328ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 1; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.startup 1668.88ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 19/19/4
- Violations:
  - agent-process max CPU interval \[282.5%, 311.3%\] crosses threshold 300%; CPU measurement is inconclusive
  - 1 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261018-052247-f5335f' -- agent --local...`
- Failure: \[31m\[memory\]\[39m \[33mfile worker unavailable; restarting in 500 ms: Cannot find module '/home/runner/.ocm/runtimes/kova-local-mvddpx02-3dc-8c30c1df/files/node\_modules/openclaw/dist/worker/memory-worker-entry.js'\[39m
- Agent turns:
  - cold: total 11328ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (160.98ms total, max 78.98ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 11328ms; source agent.prepare 301.76ms; plugins.metadata.scan 219.99ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261018-052247-f5335f/kova-agent-cold-warm-message-2c26dd1d-kova-261018-052247-f5335f/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261018-052247-f5335f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261018-052247-f5335f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261018-052247-f5335f-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261018-052247-f5335f/kova-gateway-performance-man-d48bd949-kova-261018-052247-f5335f
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261018-052247-f5335f/kova-agent-cold-warm-message-2c26dd1d-kova-261018-052247-f5335f

## Target Cleanup

- Runtime: `kova-local-mvddpx02-3dc-8c30c1df`
- Result: removed
- Duration: 477ms

