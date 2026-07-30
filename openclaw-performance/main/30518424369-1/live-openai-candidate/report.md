# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 1120.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1120.3 MB, agent-process 1120.3 MB, command-tree 1120.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 1120.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1120.3 MB, agent-process 1120.3 MB, command-tree 1120.3 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: incomplete: 1
- Required obligations: 22 total, 1 missing, 0 failed
- Categories: command: 7, invariant: 12, artifact: 1, cleanup: 1, collector: 1

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | cold-agent-turn had no valid provider HTTP response status evidence |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260730-060437-2a72ac` |
| Generated | 2026-07-30T06:05:46.779Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1120.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1120.3 MB, agent-process 1120.3 MB, command-tree 1120.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1120.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1120.3 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1120.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1120.3 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1120.3 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260730-060437-2a72ac/kova-agent-cold-warm-message-2c26dd1d-kova-260730-060437-2a72ac/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 177.7% | 6553ms | 6862ms | 5038ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1120.3 MB | 6553ms | 6862ms | agent-cli peak RSS 1120.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1120.3 MB, agent-process 1120.3 MB, command-tree 1120.3 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1120.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1120.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1120.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 961 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 177.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260730-060437-2a72ac/kova-agent-cold-warm-message-2c26dd1d-kova-260730-060437-2a72ac
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1120.3 MB; tracked total 1120.3 MB; max CPU 177.7%; samples 20; roles agent-cli 1120.3MB/177.7%, agent-process 1120.3MB/177.7%, command-tree 1120.3MB/177.7%, status-cli 961MB/177.2%
- agent: turn 6862ms; cold/warm 6553ms/6862ms; cold-warm delta 0ms; pre-provider 4799ms; provider 1293ms; metadata scans 112 (889.57ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6846.55ms; max 6862ms; pre-provider p95 5026.05ms
- agent CLI attribution: cold known 352ms / unattributed 4686ms; warm known 327ms / unattributed 4472ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 47.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1120.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1120.3 MB, agent-process 1120.3 MB, command-tree 1120.3 MB
  - agent-cli peak RSS 1120.3 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1120.3 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 6553ms; pre-provider 5038ms; provider 737ms; post-provider 778ms; response true
    - active window: metadata scans 56 (458.14ms total, max 41.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5038ms; provider 737ms; post-provider 778ms; unknown 3644.9ms; source plugins.metadata.scan 1393.1ms
  - warm: total 6862ms; pre-provider 4799ms; provider 1293ms; post-provider 770ms; response true
    - active window: metadata scans 56 (431.43ms total, max 47.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4799ms; provider 1293ms; post-provider 770ms; unknown 3405.9ms; source plugins.metadata.scan 1393.1ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5038 ms | 352 ms | 4686 ms | 737 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260730-060437-2a72ac/kova-agent-cold-warm-message-2c26dd1d-kova-260730-060437-2a72ac/openclaw/timeline.jsonl |
  | warm | 4799 ms | 327 ms | 4472 ms | 1293 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260730-060437-2a72ac/kova-agent-cold-warm-message-2c26dd1d-kova-260730-060437-2a72ac/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x39 | 39 | 0 | 352 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup` x39 | 39 | 0 | 327 ms | 47 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260730-060437-2a72ac-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260730-060437-2a72ac-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260730-060437-2a72ac-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260730-060437-2a72ac/kova-agent-cold-warm-message-2c26dd1d-kova-260730-060437-2a72ac

## Target Cleanup

- Runtime: `kova-local-ms73zktp-3yo-43903ee1`
- Result: removed
- Duration: 386ms

