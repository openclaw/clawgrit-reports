# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 1008.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1008.8 MB, agent-process 1008.8 MB, command-tree 1008.8 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 1008.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1008.8 MB, agent-process 1008.8 MB, command-tree 1008.8 MB |
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
| Run ID | `kova-260725-060201-607986` |
| Generated | 2026-07-25T06:03:09.696Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1008.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1008.8 MB, agent-process 1008.8 MB, command-tree 1008.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1008.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1008.8 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1008.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1008.8 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1008.8 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260725-060201-607986/kova-agent-cold-warm-message-2c26dd1d-kova-260725-060201-607986/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 151.7% | 8189ms | 8225ms | 5413ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1008.8 MB | 8189ms | 8225ms | agent-cli peak RSS 1008.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1008.8 MB, agent-process 1008.8 MB, command-tree 1008.8 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1008.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1008.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1008.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 822.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260725-060201-607986/kova-agent-cold-warm-message-2c26dd1d-kova-260725-060201-607986
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1008.8 MB; tracked total 1008.8 MB; max CPU 151.7%; samples 24; roles agent-cli 1008.8MB/151.7%, command-tree 1008.8MB/152.4%, agent-process 1008.8MB/151.7%, status-cli 822.3MB/152.4%
- agent: turn 8225ms; cold/warm 8189ms/8225ms; cold-warm delta 0ms; pre-provider 5314ms; provider 1700ms; metadata scans 114 (997.05ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8223.2ms; max 8225ms; pre-provider p95 5408.05ms
- agent CLI attribution: cold known 393ms / unattributed 5020ms; warm known 371ms / unattributed 4943ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 61.53ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1008.8 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1008.8 MB, agent-process 1008.8 MB, command-tree 1008.8 MB
  - agent-cli peak RSS 1008.8 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1008.8 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 8189ms; pre-provider 5413ms; provider 1522ms; post-provider 1254ms; response true
    - active window: metadata scans 57 (511.4ms total, max 58.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5413ms; provider 1522ms; post-provider 1254ms; unknown 3800.76ms; source plugins.metadata.scan 1612.24ms
  - warm: total 8225ms; pre-provider 5314ms; provider 1700ms; post-provider 1211ms; response true
    - active window: metadata scans 57 (485.65ms total, max 61.53ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5314ms; provider 1700ms; post-provider 1211ms; unknown 3701.76ms; source plugins.metadata.scan 1612.24ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5413 ms | 393 ms | 5020 ms | 1522 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260725-060201-607986/kova-agent-cold-warm-message-2c26dd1d-kova-260725-060201-607986/openclaw/timeline.jsonl |
  | warm | 5314 ms | 371 ms | 4943 ms | 1700 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260725-060201-607986/kova-agent-cold-warm-message-2c26dd1d-kova-260725-060201-607986/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x40 | 40 | 0 | 393 ms | 58 ms |
  | warm | `plugins.metadata.scan` | `startup` x40 | 40 | 0 | 371 ms | 62 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260725-060201-607986-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260725-060201-607986-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260725-060201-607986-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260725-060201-607986/kova-agent-cold-warm-message-2c26dd1d-kova-260725-060201-607986

## Target Cleanup

- Runtime: `kova-local-mrzyoyz6-41q-99c10c01`
- Result: removed
- Duration: 370ms

