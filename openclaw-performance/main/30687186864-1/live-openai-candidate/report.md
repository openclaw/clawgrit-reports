# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 1108.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1108.3 MB, agent-process 1108.3 MB, command-tree 1108.3 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 1108.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1108.3 MB, agent-process 1108.3 MB, command-tree 1108.3 MB |
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
| Run ID | `kova-260801-061210-e3dfc0` |
| Generated | 2026-08-01T06:13:23.125Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1108.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1108.3 MB, agent-process 1108.3 MB, command-tree 1108.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1108.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1108.3 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1108.3 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1108.3 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1108.3 |
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260801-061210-e3dfc0/kova-agent-cold-warm-message-2c26dd1d-kova-260801-061210-e3dfc0/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 175.5% | 5629ms | 5447ms | 4259ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1108.3 MB | 5629ms | 5447ms | agent-cli peak RSS 1108.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1108.3 MB, agent-process 1108.3 MB, command-tree 1108.3 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1108.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.5% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1108.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1108.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 886.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260801-061210-e3dfc0/kova-agent-cold-warm-message-2c26dd1d-kova-260801-061210-e3dfc0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1108.3 MB; tracked total 1108.3 MB; max CPU 175.5%; samples 18; roles agent-cli 1108.3MB/175.5%, command-tree 1108.3MB/175.8%, agent-process 1108.3MB/175.5%, status-cli 886.4MB/175.8%
- agent: turn 5629ms; cold/warm 5629ms/5447ms; cold-warm delta 182ms; pre-provider 4259ms; provider 988ms; metadata scans 54 (400.08ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5619.9ms; max 5629ms; pre-provider p95 4250.85ms
- agent CLI attribution: cold known 347ms / unattributed 3912ms; warm known 352ms / unattributed 3744ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.prepare 125.01ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1108.3 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1108.3 MB, agent-process 1108.3 MB, command-tree 1108.3 MB
  - agent-cli peak RSS 1108.3 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1108.3 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5629ms; pre-provider 4259ms; provider 988ms; post-provider 382ms; response true
    - active window: metadata scans 27 (200.06ms total, max 35.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4259ms; provider 988ms; post-provider 382ms; unknown 3055.14ms; source plugins.metadata.scan 719.41ms; agent.prepare 484.45ms
  - warm: total 5447ms; pre-provider 4096ms; provider 986ms; post-provider 365ms; response true
    - active window: metadata scans 27 (200.02ms total, max 38.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4096ms; provider 986ms; post-provider 365ms; unknown 2892.14ms; source plugins.metadata.scan 719.41ms; agent.prepare 484.45ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4259 ms | 347 ms | 3912 ms | 988 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260801-061210-e3dfc0/kova-agent-cold-warm-message-2c26dd1d-kova-260801-061210-e3dfc0/openclaw/timeline.jsonl |
  | warm | 4096 ms | 352 ms | 3744 ms | 986 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260801-061210-e3dfc0/kova-agent-cold-warm-message-2c26dd1d-kova-260801-061210-e3dfc0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 242 ms | 124 ms |
  | cold | `plugins.metadata.scan` | `startup` x10, `agent.prepare` x14 | 24 | 0 | 181 ms | 35 ms |
  | warm | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 244 ms | 125 ms |
  | warm | `plugins.metadata.scan` | `startup` x10, `agent.prepare` x14 | 24 | 0 | 184 ms | 39 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260801-061210-e3dfc0-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260801-061210-e3dfc0-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260801-061210-e3dfc0-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260801-061210-e3dfc0/kova-agent-cold-warm-message-2c26dd1d-kova-260801-061210-e3dfc0

## Target Cleanup

- Runtime: `kova-local-ms9z4z8z-420-a55c77f1`
- Result: removed
- Duration: 374ms

