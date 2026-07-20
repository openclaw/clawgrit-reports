# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 2361.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 2361.2 MB, agent-process 2361.2 MB, command-tree 2361.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 2361.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 2361.2 MB, agent-process 2361.2 MB, command-tree 2361.2 MB |
| Blocking findings | 18 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: incomplete: 1
- Required obligations: 20 total, 4 missing, 4 failed
- Categories: command: 5, invariant: 12, artifact: 1, cleanup: 1, collector: 1

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1: command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 1 was below required 2 |
| agent-cold-warm-message | invariant:agent-cli-latency-windows | missing | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-service-health-proof | missing | post-agent status command did not pass |
| agent-cold-warm-message | command:cold-agent-turn:1 | failed | command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-local-transport-proof | failed | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-response-proof | failed | expected at least 2 agent turn(s), found 1 |
| agent-cold-warm-message | invariant:agent-cli-no-missing-runtime-dependency-errors | failed | missingDependencyErrors was 2 |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260720-061833-e92c9f` |
| Generated | 2026-07-20T06:19:35.468Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 2361.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 2361.2 MB, agent-process 2361.2 MB, command-tree 2361.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | command-tree peak RSS 2361.2 MB exceeded threshold 1400 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 2361.2 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 2361.2 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | 2 missing dependency/plugin load error patterns found | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent message command finished without a usable assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn did not produce the expected assistant response | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | providerFinalMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 2361.2 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: agent CLI provision, turn, status, and collector command receipts were captured | cold-agent-turn command 1: command exited 1 |
| info | Kova | report | 6 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 170.3% | 16107ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 2361.2 MB | 16107ms | n/a | agent-cli peak RSS 2361.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 2361.2 MB, agent-process 2361.2 MB, command-tree 2361.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 2361.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 2361.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.3% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 2361.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260720-061833-e92c9f/kova-agent-cold-warm-message-2c26dd1d-kova-260720-061833-e92c9f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 2361.2 MB; tracked total 2361.2 MB; max CPU 170.3%; samples 18; roles agent-cli 2361.2MB/170.3%, agent-process 2361.2MB/170.3%, command-tree 2361.2MB/170.3%
- agent: turn 16107ms; cold/warm 16107ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 2 (73.98ms); event-loop n/a; polls 0; cleanup n/a; diagnosis live-provider-timing-unavailable; leaks 0
- Agent turn stats: count 1; p95 16107ms; max 16107ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 2; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.81ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 2361.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 2361.2 MB, agent-process 2361.2 MB, command-tree 2361.2 MB
  - command-tree peak RSS 2361.2 MB exceeded threshold 1400 MB
  - agent-cli peak RSS 2361.2 MB exceeded threshold 1000 MB
  - agent-process peak RSS 2361.2 MB exceeded threshold 1000 MB
  - 2 missing dependency/plugin load error patterns found
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - providerFinalMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
- Failed command: `ocm @'kova-agent-cold-warm-message-2c26dd1d-kova-260720-061833-e92c9f' -- agent --local...`
- Failure: \[35m\[plugins\]\[39m \[31mcodex failed to load from /home/runner/.ocm/envs/kova-agent-cold-warm-message-2c26dd1d-kova-260720-061833-e92c9f/.openclaw/npm/projects/openclaw-codex-8902d781d4/node\_modules/@openclaw/codex/dist/index.js: Error \[ERR\_PACKAGE\_PATH\_NO...
- Agent turns:
  - cold: total 16107ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 2 (73.98ms total, max 48.54ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 16107ms; source plugins.metadata.scan 320.74ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260720-061833-e92c9f/kova-agent-cold-warm-message-2c26dd1d-kova-260720-061833-e92c9f/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260720-061833-e92c9f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260720-061833-e92c9f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260720-061833-e92c9f-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260720-061833-e92c9f/kova-agent-cold-warm-message-2c26dd1d-kova-260720-061833-e92c9f

## Target Cleanup

- Runtime: `kova-local-mrsu2zaz-3zy-ece29817`
- Result: removed
- Duration: 364ms

