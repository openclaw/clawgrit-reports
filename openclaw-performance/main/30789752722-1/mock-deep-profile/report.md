# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1093.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1279.8 MB, agent-process 1093.2 MB, status-cli 774.2 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1093.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1279.8 MB, agent-process 1093.2 MB, status-cli 774.2 MB |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 2 (PASS:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 37 total, 0 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260803-061909-aeffc5` |
| Generated | 2026-08-03T06:20:47.150Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
| Repeat / parallel | 1 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 2 |
| Scenarios | 2 |
| States | 2 |
| PASS | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1093.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1279.8 MB, agent-process 1093.2 MB, status-cli 774.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; agent-processRssMb: 1093.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5893ms | 1004.6MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 157% | 6381ms | 6759ms | 5572ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5893ms | 1004.6 MB | 1618.1 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1352 MB | 6381ms | 6759ms | agent-process peak RSS 1093.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1279.8 MB, agent-process 1093.2 MB, status-cli 774.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1279.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 571.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1093.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1004.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 774.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 194.2% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 986.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 537.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 394.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260803-061909-aeffc5/kova-agent-cold-warm-message-2c26dd1d-kova-260803-061909-aeffc5
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1093.2 MB; tracked total 1352 MB; max CPU 157%; samples 68; roles command-tree 1279.8MB/213%, agent-cli 571.7MB/213%, agent-process 1093.2MB/157%, status-cli 774.2MB/194.2%
- agent: turn 6759ms; cold/warm 6381ms/6759ms; cold-warm delta 0ms; pre-provider 5794ms; provider 2ms; metadata scans 12 (227.53ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6740.1ms; max 6759ms; pre-provider p95 5782.9ms
- agent CLI attribution: cold known 547ms / unattributed 5025ms; warm known 691ms / unattributed 5103ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1617.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Violations:
  - agent-process peak RSS 1093.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1279.8 MB, agent-process 1093.2 MB, status-cli 774.2 MB
- Agent turns:
  - cold: total 6381ms; pre-provider 5572ms; provider 3ms; post-provider 806ms; response true
    - active window: metadata scans 6 (128.31ms total, max 42.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5572ms; provider 3ms; post-provider 806ms; unknown 4120.62ms; source agent.prepare 1011.1ms; plugins.metadata.scan 440.28ms
  - warm: total 6759ms; pre-provider 5794ms; provider 2ms; post-provider 963ms; response true
    - active window: metadata scans 6 (99.22ms total, max 46.55ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5794ms; provider 2ms; post-provider 963ms; unknown 4342.62ms; source agent.prepare 1011.1ms; plugins.metadata.scan 440.28ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5572 ms | 547 ms | 5025 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260803-061909-aeffc5/kova-agent-cold-warm-message-2c26dd1d-kova-260803-061909-aeffc5/openclaw/timeline.jsonl |
  | warm | 5794 ms | 691 ms | 5103 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260803-061909-aeffc5/kova-agent-cold-warm-message-2c26dd1d-kova-260803-061909-aeffc5/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 419 ms | 238 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 128 ms | 43 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 592 ms | 266 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 99 ms | 46 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260803-061909-aeffc5-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260803-061909-aeffc5-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260803-061909-aeffc5-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260803-061909-aeffc5/kova-gateway-performance-man-d48bd949-kova-260803-061909-aeffc5
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260803-061909-aeffc5/kova-agent-cold-warm-message-2c26dd1d-kova-260803-061909-aeffc5

## Target Cleanup

- Runtime: `kova-local-mscu9o2i-3yw-7de39a7f`
- Result: removed
- Duration: 473ms

