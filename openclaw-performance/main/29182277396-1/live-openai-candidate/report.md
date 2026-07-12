# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — 2 missing dependency/plugin load error patterns found

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | 2 missing dependency/plugin load error patterns found |
| Blocking findings | 11 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: incomplete: 1
- Required obligations: 19 total, 4 missing, 4 failed
- Categories: command: 5, invariant: 12, artifact: 1, cleanup: 1

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1 exited 1 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | provider request log not found and OpenClaw timeline contained no provider.request events |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |
| agent-cold-warm-message | command:cold-agent-turn:1 | failed | command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-local-transport-proof | failed | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-missing-runtime-dependency-errors | failed | missingDependencyErrors was 2 |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260712-061159-556f88` |
| Generated | 2026-07-12T06:12:45.694Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.13.0 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | 2 missing dependency/plugin load error patterns found | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 553.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 553.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 553.7 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA_AGENT_OK | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 553.7 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1 exited 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns used the local embedded agent CLI path, not Gateway session RPC | expected at least 2 agent turn(s), found 1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent turns produced the expected assistant marker or expected failure evidence | expected at least 2 agent turn(s), found 1 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | provider request log not found and OpenClaw timeline contained no provider.request events; /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260712-061159-556f88/kova-agent-cold-warm-message-2c26dd1d-kova-260712-061159-556f88/provider/provider-evidence.json |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent total, pre-provider, provider, and post-provider latency windows were measured | expected at least 2 agent turn(s), found 1 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: no-service local agent env state and final health accounting were captured | post-agent status command did not pass |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof failed: agent CLI logs and command output contain no missing runtime dependency errors | missingDependencyErrors was 2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 137.8% | 1990ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 553.7 MB | 1990ms | n/a | 2 missing dependency/plugin load error patterns found |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 553.7 MB; CPU 137.8%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 553.7 MB; CPU 137.8%; scenario agent-cold-warm-message/mock-openai-provider
- command-tree: RSS 553.7 MB; CPU 137.8%; scenario agent-cold-warm-message/mock-openai-provider

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260712-061159-556f88/kova-agent-cold-warm-message-2c26dd1d-kova-260712-061159-556f88
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 553.7 MB; tracked total 553.7 MB; max CPU 137.8%; samples 3; roles agent-cli 553.7MB/137.8%, agent-process 553.7MB/137.8%, command-tree 553.7MB/137.8%
- agent: turn 1990ms; cold/warm 1990ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 2 (65.2ms); event-loop n/a; polls 0; cleanup n/a; diagnosis live-provider-timing-unavailable; leaks 0
- Agent turn stats: count 1; p95 1990ms; max 1990ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 2; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 46.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - 2 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA_AGENT_OK
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-260712-061159-556f88' -- agent --local...`
- Failure: [35m[plugins][39m [31mcodex failed to load from /home/runner/.ocm/envs/kova-agent-cold-warm-message-2c26dd1d-kova-260712-061159-556f88/.openclaw/npm/projects/openclaw-codex-8902d781d4/node_modules/@openclaw/codex/dist/index.js: Error [ERR_INTERNAL_ASSERT...
- Agent turns:
  - cold: total 1990ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 2 (65.2ms total, max 46.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 0ms; provider 0ms; post-provider 0ms; unknown 0ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260712-061159-556f88/kova-agent-cold-warm-message-2c26dd1d-kova-260712-061159-556f88/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260712-061159-556f88-diagnostic.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260712-061159-556f88-diagnostic.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260712-061159-556f88-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260712-061159-556f88/kova-agent-cold-warm-message-2c26dd1d-kova-260712-061159-556f88

## Target Cleanup

- Runtime: `kova-local-1783836719199`
- Result: removed
- Duration: 352ms

