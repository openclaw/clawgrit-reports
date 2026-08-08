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
| Run ID | `kova-260808-052624-d389ae` |
| Generated | 2026-08-08T05:27:49.274Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5226ms | 962.2MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 157% | 5326ms | 5032ms | 4709ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5226ms | 962.2 MB | 1613.6 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1364.9 MB | 5326ms | 5032ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1292.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 521.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1104.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 962.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 768.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 962.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 540.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 430.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 148% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260808-052624-d389ae/kova-agent-cold-warm-message-2c26dd1d-kova-260808-052624-d389ae
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1104.4 MB; tracked total 1364.9 MB; max CPU 157%; samples 55; roles command-tree 1292.3MB/200%, agent-cli 521.6MB/200%, agent-process 1104.4MB/157%, status-cli 768.1MB/193.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 5326ms; cold/warm 5326ms/5032ms; cold-warm delta 294ms; pre-provider 4709ms; provider 2ms; metadata scans 13 (185.35ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5311.3ms; max 5326ms; pre-provider p95 4698.85ms
- agent CLI attribution: cold known 495ms / unattributed 4214ms; warm known 424ms / unattributed 4082ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1482.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 5326ms; pre-provider 4709ms; provider 2ms; post-provider 615ms; response true
    - active window: metadata scans 8 (123.99ms total, max 42ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4709ms; provider 2ms; post-provider 615ms; unknown 3609.99ms; source agent.prepare 731.88ms; plugins.metadata.scan 367.13ms
  - warm: total 5032ms; pre-provider 4506ms; provider 1ms; post-provider 525ms; response true
    - active window: metadata scans 5 (61.36ms total, max 34.11ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4506ms; provider 1ms; post-provider 525ms; unknown 3406.99ms; source agent.prepare 731.88ms; plugins.metadata.scan 367.13ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4709 ms | 495 ms | 4214 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260808-052624-d389ae/kova-agent-cold-warm-message-2c26dd1d-kova-260808-052624-d389ae/openclaw/timeline.jsonl |
  | warm | 4506 ms | 424 ms | 4082 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260808-052624-d389ae/kova-agent-cold-warm-message-2c26dd1d-kova-260808-052624-d389ae/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 371 ms | 236 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x6, `startup`, `agent.startup` | 8 | 0 | 124 ms | 42 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 362 ms | 234 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` | 5 | 0 | 62 ms | 34 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260808-052624-d389ae-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260808-052624-d389ae-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260808-052624-d389ae-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260808-052624-d389ae/kova-gateway-performance-man-d48bd949-kova-260808-052624-d389ae
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260808-052624-d389ae/kova-agent-cold-warm-message-2c26dd1d-kova-260808-052624-d389ae

## Target Cleanup

- Runtime: `kova-local-msjxl3g1-3yw-00806b08`
- Result: removed
- Duration: 369ms

