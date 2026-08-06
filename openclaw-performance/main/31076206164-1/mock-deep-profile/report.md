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
| Run ID | `kova-260806-060822-85be4c` |
| Generated | 2026-08-06T06:09:46.612Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5315ms | 980MB | n/a | 157% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 155% | 5454ms | 5129ms | 4916ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5315ms | 980 MB | 1627.9 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1315.5 MB | 5454ms | 5129ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1241.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 220% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 530.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 220% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1053.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 980 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 783.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 980 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 533.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 409.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260806-060822-85be4c/kova-agent-cold-warm-message-2c26dd1d-kova-260806-060822-85be4c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1053.3 MB; tracked total 1315.5 MB; max CPU 155%; samples 57; roles command-tree 1241.6MB/220%, agent-cli 530.1MB/220%, agent-process 1053.3MB/155%, status-cli 783.9MB/212%; performance thresholds skipped 15 (instrumented)
- agent: turn 5454ms; cold/warm 5454ms/5129ms; cold-warm delta 325ms; pre-provider 4916ms; provider 3ms; metadata scans 15 (231.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5437.75ms; max 5454ms; pre-provider p95 4900.1ms
- agent CLI attribution: cold known 450ms / unattributed 4466ms; warm known 419ms / unattributed 4179ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1587.44ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 5454ms; pre-provider 4916ms; provider 3ms; post-provider 535ms; response true
    - active window: metadata scans 9 (144.64ms total, max 41.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4916ms; provider 3ms; post-provider 535ms; unknown 3865.59ms; source agent.prepare 637.81ms; plugins.metadata.scan 412.6ms
  - warm: total 5129ms; pre-provider 4598ms; provider 1ms; post-provider 530ms; response true
    - active window: metadata scans 6 (86.89ms total, max 33.34ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4598ms; provider 1ms; post-provider 530ms; unknown 3547.59ms; source agent.prepare 637.81ms; plugins.metadata.scan 412.6ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4916 ms | 450 ms | 4466 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260806-060822-85be4c/kova-agent-cold-warm-message-2c26dd1d-kova-260806-060822-85be4c/openclaw/timeline.jsonl |
  | warm | 4598 ms | 419 ms | 4179 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260806-060822-85be4c/kova-agent-cold-warm-message-2c26dd1d-kova-260806-060822-85be4c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 306 ms | 205 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` x2 | 9 | 0 | 144 ms | 42 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 332 ms | 173 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 87 ms | 33 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260806-060822-85be4c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260806-060822-85be4c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260806-060822-85be4c-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260806-060822-85be4c/kova-gateway-performance-man-d48bd949-kova-260806-060822-85be4c
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260806-060822-85be4c/kova-agent-cold-warm-message-2c26dd1d-kova-260806-060822-85be4c

## Target Cleanup

- Runtime: `kova-local-msh47d4e-3yx-f550d29b`
- Result: removed
- Duration: 412ms

