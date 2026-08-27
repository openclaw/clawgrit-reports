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
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260827-074842-fe0fe0` |
| Generated | 2026-08-27T07:51:41.926Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5815ms | 604.5MB | n/a | 125% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 148% | 7332ms | 5564ms | 5890ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5815ms | 604.5 MB | 1178.5 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 918.2 MB | 7332ms | 5564ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 846.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 278.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 698.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 148% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 500.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 225% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 625.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 604.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 125% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 429.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 149% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 604.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 125% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 378.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260827-074842-fe0fe0/kova-agent-cold-warm-message-2c26dd1d-kova-260827-074842-fe0fe0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 698.1 MB; tracked total 918.2 MB; max CPU 148%; samples 66; roles command-tree 846.2MB/278.6%, agent-process 698.1MB/148%, agent-cli 500.1MB/225%, status-cli 625.9MB/196.5%; performance thresholds skipped 15 (instrumented)
- agent: turn 7332ms; cold/warm 7332ms/5564ms; cold-warm delta 1768ms; pre-provider 5890ms; provider 3ms; metadata scans 51 (1239.67ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 7243.6ms; max 7332ms; pre-provider p95 5829.45ms
- agent CLI attribution: cold known 4285ms / unattributed 1605ms; warm known 3058ms / unattributed 1621ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1438.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 8/8/8
- Agent turns:
  - cold: total 7332ms; pre-provider 5890ms; provider 3ms; post-provider 1439ms; response true
    - active window: metadata scans 30 (738.42ms total, max 71.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5890ms; provider 3ms; post-provider 1439ms; unknown 3428.09ms; source plugins.metadata.scan 1376.95ms; agent.prepare 1084.96ms
  - warm: total 5564ms; pre-provider 4679ms; provider 2ms; post-provider 883ms; response true
    - active window: metadata scans 21 (501.25ms total, max 63.72ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4679ms; provider 2ms; post-provider 883ms; unknown 2217.09ms; source plugins.metadata.scan 1376.95ms; agent.prepare 1084.96ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5890 ms | 4285 ms | 1605 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260827-074842-fe0fe0/kova-agent-cold-warm-message-2c26dd1d-kova-260827-074842-fe0fe0/openclaw/timeline.jsonl |
  | warm | 4679 ms | 3058 ms | 1621 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260827-074842-fe0fe0/kova-agent-cold-warm-message-2c26dd1d-kova-260827-074842-fe0fe0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x31 | 31 | 0 | 4507 ms | 1438 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 1096 ms | 448 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x8, `agent.startup` x3 | 28 | 0 | 697 ms | 73 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 496 ms | 283 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 149 ms | 149 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x15, `agent.startup` x2 | 17 | 0 | 29 ms | 3 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x13 | 13 | 0 | 2243 ms | 838 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 913 ms | 361 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 589 ms | 275 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x8, `startup` x8, `agent.startup` x3 | 19 | 0 | 420 ms | 61 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 113 ms | 113 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 18 ms | 18 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260827-074842-fe0fe0-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260827-074842-fe0fe0-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260827-074842-fe0fe0-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260827-074842-fe0fe0/kova-gateway-performance-man-d48bd949-kova-260827-074842-fe0fe0
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260827-074842-fe0fe0/kova-agent-cold-warm-message-2c26dd1d-kova-260827-074842-fe0fe0

## Target Cleanup

- Runtime: `kova-local-mtb81a6i-40z-17e76f40`
- Result: removed
- Duration: 530ms

