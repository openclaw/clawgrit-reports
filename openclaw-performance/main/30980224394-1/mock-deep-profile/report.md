# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 2 (PASS:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 37 total, 0 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260805-060722-ffc368` |
| Generated | 2026-08-05T06:08:56.672Z |
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
| PASS | 2 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5632ms | 983.5MB | n/a | 160% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 156% | 5837ms | 6283ms | 5178ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5632ms | 983.5 MB | 1624 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1349.1 MB | 5837ms | 6283ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1275.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 530 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1087.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 983.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 765 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 983.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 160% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 567.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 161% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 405.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260805-060722-ffc368/kova-agent-cold-warm-message-2c26dd1d-kova-260805-060722-ffc368
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1087.7 MB; tracked total 1349.1 MB; max CPU 156%; samples 63; roles command-tree 1275.8MB/212%, agent-cli 530MB/212%, agent-process 1087.7MB/156%, status-cli 765MB/193.5%; performance thresholds skipped 15 (instrumented)
- agent: turn 6283ms; cold/warm 5837ms/6283ms; cold-warm delta 0ms; pre-provider 5553ms; provider 1ms; metadata scans 14 (257.24ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6260.7ms; max 6283ms; pre-provider p95 5534.25ms
- agent CLI attribution: cold known 503ms / unattributed 4675ms; warm known 501ms / unattributed 5052ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1780.35ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 5837ms; pre-provider 5178ms; provider 3ms; post-provider 656ms; response true
    - active window: metadata scans 8 (138.4ms total, max 38.63ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5178ms; provider 3ms; post-provider 656ms; unknown 3967.73ms; source agent.prepare 745.84ms; plugins.metadata.scan 464.43ms
  - warm: total 6283ms; pre-provider 5553ms; provider 1ms; post-provider 729ms; response true
    - active window: metadata scans 6 (118.84ms total, max 50.9ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5553ms; provider 1ms; post-provider 729ms; unknown 4342.73ms; source agent.prepare 745.84ms; plugins.metadata.scan 464.43ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5178 ms | 503 ms | 4675 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260805-060722-ffc368/kova-agent-cold-warm-message-2c26dd1d-kova-260805-060722-ffc368/openclaw/timeline.jsonl |
  | warm | 5553 ms | 501 ms | 5052 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260805-060722-ffc368/kova-agent-cold-warm-message-2c26dd1d-kova-260805-060722-ffc368/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 363 ms | 223 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 140 ms | 39 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 382 ms | 212 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 119 ms | 51 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260805-060722-ffc368-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260805-060722-ffc368-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260805-060722-ffc368-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260805-060722-ffc368/kova-gateway-performance-man-d48bd949-kova-260805-060722-ffc368
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260805-060722-ffc368/kova-agent-cold-warm-message-2c26dd1d-kova-260805-060722-ffc368

## Target Cleanup

- Runtime: `kova-local-msfoq89m-3yp-29483951`
- Result: removed
- Duration: 430ms

