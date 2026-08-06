# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 1 (PASS:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 22 total, 0 missing, 0 failed
- Categories: command: 7, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260806-060857-df3f08` |
| Generated | 2026-08-06T06:10:13.029Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 1 / 1 |
| Auth | live (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 1 |
| Scenarios | 1 |
| States | 1 |
| PASS | 1 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 155% | 5533ms | 5201ms | 4313ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1100.2 MB | 5533ms | 5201ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1100.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 924.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 608.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 168.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 175.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 22.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260806-060857-df3f08/kova-agent-cold-warm-message-2c26dd1d-kova-260806-060857-df3f08
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 924.8 MB; tracked total 1100.2 MB; max CPU 155%; samples 17; roles command-tree 1100.2MB/168.5%, agent-process 924.8MB/155%, status-cli 608.2MB/168.5%, agent-cli 175.4MB/22.8%
- agent: turn 5533ms; cold/warm 5533ms/5201ms; cold-warm delta 332ms; pre-provider 4313ms; provider 932ms; metadata scans 56 (872.84ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5516.4ms; max 5533ms; pre-provider p95 4290.1ms
- agent CLI attribution: cold known 536ms / unattributed 3777ms; warm known 480ms / unattributed 3375ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1572.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5533ms; pre-provider 4313ms; provider 932ms; post-provider 288ms; response true
    - active window: metadata scans 29 (445.75ms total, max 21.21ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4313ms; provider 932ms; post-provider 288ms; unknown 1991.98ms; source plugins.metadata.scan 1611.89ms; agent.prepare 709.13ms
  - warm: total 5201ms; pre-provider 3855ms; provider 1070ms; post-provider 276ms; response true
    - active window: metadata scans 27 (427.09ms total, max 21.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3855ms; provider 1070ms; post-provider 276ms; unknown 1533.98ms; source plugins.metadata.scan 1611.89ms; agent.prepare 709.13ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4313 ms | 536 ms | 3777 ms | 932 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260806-060857-df3f08/kova-agent-cold-warm-message-2c26dd1d-kova-260806-060857-df3f08/openclaw/timeline.jsonl |
  | warm | 3855 ms | 480 ms | 3375 ms | 1070 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260806-060857-df3f08/kova-agent-cold-warm-message-2c26dd1d-kova-260806-060857-df3f08/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4, `agent.startup` x4, `cli.command-startup` x4 | 26 | 0 | 389 ms | 21 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 373 ms | 201 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `agent.startup` x4, `cli.command-startup` x2 | 24 | 0 | 379 ms | 21 ms |
  | warm | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 337 ms | 199 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260806-060857-df3f08-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260806-060857-df3f08-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260806-060857-df3f08-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260806-060857-df3f08/kova-agent-cold-warm-message-2c26dd1d-kova-260806-060857-df3f08

## Target Cleanup

- Runtime: `kova-local-msh4844i-3z7-620e985f`
- Result: removed
- Duration: 377ms

