# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1103.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1290.2 MB, agent-process 1103.2 MB, status-cli 771.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1103.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1290.2 MB, agent-process 1103.2 MB, status-cli 771.7 MB |
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
| Run ID | `kova-260804-061149-4d0085` |
| Generated | 2026-08-04T06:13:21.339Z |
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
| PASS | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1103.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1290.2 MB, agent-process 1103.2 MB, status-cli 771.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; agent-processRssMb: 1103.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5382ms | 979.6MB | n/a | 156% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 157% | 5892ms | 5755ms | 5296ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5382ms | 979.6 MB | 1630.6 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1363.2 MB | 5892ms | 5755ms | agent-process peak RSS 1103.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1290.2 MB, agent-process 1103.2 MB, status-cli 771.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1290.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 220% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 530.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 220% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1103.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 979.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 771.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 197.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 979.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 156% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 535.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 397.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260804-061149-4d0085/kova-agent-cold-warm-message-2c26dd1d-kova-260804-061149-4d0085
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1103.2 MB; tracked total 1363.2 MB; max CPU 157%; samples 61; roles command-tree 1290.2MB/220%, agent-cli 530.4MB/220%, agent-process 1103.2MB/157%, status-cli 771.7MB/197.7%
- agent: turn 5892ms; cold/warm 5892ms/5755ms; cold-warm delta 137ms; pre-provider 5296ms; provider 2ms; metadata scans 12 (219.46ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5885.15ms; max 5892ms; pre-provider p95 5285.85ms
- agent CLI attribution: cold known 484ms / unattributed 4812ms; warm known 500ms / unattributed 4593ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1566.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Violations:
  - agent-process peak RSS 1103.2 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1290.2 MB, agent-process 1103.2 MB, status-cli 771.7 MB
- Agent turns:
  - cold: total 5892ms; pre-provider 5296ms; provider 2ms; post-provider 594ms; response true
    - active window: metadata scans 6 (112ms total, max 40.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5296ms; provider 2ms; post-provider 594ms; unknown 4080.72ms; source agent.prepare 764.08ms; plugins.metadata.scan 451.2ms
  - warm: total 5755ms; pre-provider 5093ms; provider 1ms; post-provider 661ms; response true
    - active window: metadata scans 6 (107.46ms total, max 46.92ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5093ms; provider 1ms; post-provider 661ms; unknown 3877.72ms; source agent.prepare 764.08ms; plugins.metadata.scan 451.2ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5296 ms | 484 ms | 4812 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260804-061149-4d0085/kova-agent-cold-warm-message-2c26dd1d-kova-260804-061149-4d0085/openclaw/timeline.jsonl |
  | warm | 5093 ms | 500 ms | 4593 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260804-061149-4d0085/kova-agent-cold-warm-message-2c26dd1d-kova-260804-061149-4d0085/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 373 ms | 169 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 6 | 0 | 111 ms | 40 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 392 ms | 191 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup` x3, `agent.startup` x2 | 6 | 0 | 108 ms | 47 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260804-061149-4d0085-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260804-061149-4d0085-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260804-061149-4d0085-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260804-061149-4d0085/kova-gateway-performance-man-d48bd949-kova-260804-061149-4d0085
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260804-061149-4d0085/kova-agent-cold-warm-message-2c26dd1d-kova-260804-061149-4d0085

## Target Cleanup

- Runtime: `kova-local-mse9g3h3-3z6-5265e264`
- Result: removed
- Duration: 445ms

