# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1480.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1580.7 MB, gateway 1480.1 MB, command-tree 848.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1480.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1580.7 MB, gateway 1480.1 MB, command-tree 848.9 MB |
| Blocking findings | 13 |
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
| Run ID | `kova-261111-051711-52eae4` |
| Generated | 2026-11-11T05:31:23.076Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1480.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1580.7 MB, gateway 1480.1 MB, command-tree 848.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1579 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1580.7 MB exceeded threshold 1440 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; readinessHealthReadyMs: 1579 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 902.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 902.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 902.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn ran with mock auth but no mock provider request was captured | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 902.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | No provider request happened during the agent turn. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 902.9 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1: command exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | expected at least 2 agent turn(s), found 1 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | agent turn attribution count 1 was below required 2; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261111-051711-52eae4/kova-agent-cold-warm-message-2c26dd1d-kova-261111-051711-52eae4/provider/provider-evidence.json |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent total, pre-provider, provider, and post-provider latency windows were measured | expected at least 2 agent turn(s), found 1 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 1579ms | 1480.1MB | n/a | 228.4% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 284.9% | 21009ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 1579ms | 1480.1 MB | 2503.1 MB | n/a | n/a | gateway peak RSS 1480.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1580.7 MB, gateway 1480.1 MB, command-tree 848.9 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1114.2 MB | 21009ms | n/a | agent message command finished without a usable assistant response |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- gateway-tree: RSS 1580.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 248% (scenario gateway-performance/many-bundled-plugins)
- command-tree: RSS 1042 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 381.1% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 1480.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 228.4% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 848.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 381.1% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 902.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 284.9% (scenario agent-cold-warm-message/mock-openai-provider)
- tool-runtime: RSS 48.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 284.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 496.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 193.8% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 468 MB (scenario gateway-performance/many-bundled-plugins); CPU 208% (scenario gateway-performance/many-bundled-plugins)

## Continuous Startup Resources

Gateway-tree observation from before the first phase command through matching readiness and terminal CPU read. Separate evidence; not added to command budget samples.

| Scenario / Phase | Coverage | Peak RSS | Max CPU |
|---|---|---:|---:|
| gateway-performance / cold-start | complete | 1335.8 MB | 344.2% |
| gateway-performance / warm-restart | complete | 1390.1 MB | 408% |

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261111-051711-52eae4/kova-gateway-performance-man-d48bd949-kova-261111-051711-52eae4
Measurements:
- startup: listening 0ms; health 1579ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 209ms; post-ready p95 3ms; failures 13; final failures 0; slowest startup-sample/warm-restart 209ms
- resources: scope product; contract primary-role-product-scope-v4; gateway RSS 1480.1 MB; tracked total 2503.1 MB; max CPU 228.4%; samples 129; roles gateway-tree 1580.7MB/248%, command-tree 848.9MB/381.1%, gateway 1480.1MB/228.4%, status-cli 848.9MB/381.1%; performance thresholds skipped 8 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 1710.74ms; embedded traces 0; liveness warnings 0; open spans 1 (0 required); node CPU/heap/trace 15/15/6
- Violations:
  - gateway peak RSS 1480.1 MB exceeded threshold 1177 MB; observed role gateway; top RSS roles: gateway-tree 1580.7 MB, gateway 1480.1 MB, command-tree 848.9 MB
  - gateway-tree peak RSS 1580.7 MB exceeded threshold 1440 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261111-051711-52eae4/kova-agent-cold-warm-message-2c26dd1d-kova-261111-051711-52eae4
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 902.9 MB; tracked total 1114.2 MB; max CPU 284.9%; samples 84; roles command-tree 1042MB/323.5%, agent-process 902.9MB/284.9%, agent-cli 249.9MB/196.5%, tool-runtime 48.3MB/284.9%; performance thresholds skipped 14 (instrumented)
- agent: turn 21009ms; cold/warm 21009ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 4 (367.74ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 21009ms; max 21009ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2787.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 3/3/2
- Violations:
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-261111-051711-52eae4' -- agent --local...`
- Failure: \[secrets\] agent: gateway secrets.resolve unavailable (Gateway not reachable at ws://127.0.0.1:18789 (ECONNREFUSED).
- Agent turns:
  - cold: total 21009ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 4 (367.74ms total, max 182.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 21009ms; source plugins.metadata.scan 479.35ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261111-051711-52eae4/kova-agent-cold-warm-message-2c26dd1d-kova-261111-051711-52eae4/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261111-051711-52eae4-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261111-051711-52eae4-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-261111-051711-52eae4-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261111-051711-52eae4/kova-gateway-performance-man-d48bd949-kova-261111-051711-52eae4
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-261111-051711-52eae4/kova-agent-cold-warm-message-2c26dd1d-kova-261111-051711-52eae4

## Target Cleanup

- Runtime: `kova-local-mwbo35qb-3hp-0ed72d41`
- Result: removed
- Duration: 734ms

