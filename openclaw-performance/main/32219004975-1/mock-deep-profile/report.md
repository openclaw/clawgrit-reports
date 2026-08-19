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
| Run ID | `kova-260819-052026-5f73f9` |
| Generated | 2026-08-19T05:22:35.168Z |
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
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5701ms | 1047.7MB | n/a | 146% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 153% | 5918ms | 5215ms | 5229ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5701ms | 1047.7 MB | 1693.2 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1418.8 MB | 5918ms | 5215ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1347.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1142.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 801.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1047.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 636.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 203% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1035.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 587 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 443.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260819-052026-5f73f9/kova-agent-cold-warm-message-2c26dd1d-kova-260819-052026-5f73f9
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1142.9 MB; tracked total 1418.8 MB; max CPU 153%; samples 60; roles command-tree 1347.2MB/206%, agent-process 1142.9MB/153%, status-cli 801.1MB/206%, agent-cli 636.5MB/203%; performance thresholds skipped 15 (instrumented)
- agent: turn 5918ms; cold/warm 5918ms/5215ms; cold-warm delta 703ms; pre-provider 5229ms; provider 2ms; metadata scans 70 (1166.76ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5882.85ms; max 5918ms; pre-provider p95 5196.25ms
- agent CLI attribution: cold known 933ms / unattributed 4296ms; warm known 725ms / unattributed 3849ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1864.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 5918ms; pre-provider 5229ms; provider 2ms; post-provider 687ms; response true
    - active window: metadata scans 41 (724.47ms total, max 52.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5229ms; provider 2ms; post-provider 687ms; unknown 3154.59ms; source plugins.metadata.scan 1514.37ms; agent.prepare 560.04ms
  - warm: total 5215ms; pre-provider 4574ms; provider 1ms; post-provider 640ms; response true
    - active window: metadata scans 29 (442.29ms total, max 38.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4574ms; provider 1ms; post-provider 640ms; unknown 2499.59ms; source plugins.metadata.scan 1514.37ms; agent.prepare 560.04ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5229 ms | 933 ms | 4296 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260819-052026-5f73f9/kova-agent-cold-warm-message-2c26dd1d-kova-260819-052026-5f73f9/openclaw/timeline.jsonl |
  | warm | 4574 ms | 725 ms | 3849 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260819-052026-5f73f9/kova-agent-cold-warm-message-2c26dd1d-kova-260819-052026-5f73f9/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 674 ms | 52 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 259 ms | 157 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 424 ms | 39 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 301 ms | 183 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260819-052026-5f73f9-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260819-052026-5f73f9-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260819-052026-5f73f9-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260819-052026-5f73f9/kova-gateway-performance-man-d48bd949-kova-260819-052026-5f73f9
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260819-052026-5f73f9/kova-agent-cold-warm-message-2c26dd1d-kova-260819-052026-5f73f9

## Target Cleanup

- Runtime: `kova-local-mszn7sg6-3wv-b8771ad9`
- Result: removed
- Duration: 421ms

