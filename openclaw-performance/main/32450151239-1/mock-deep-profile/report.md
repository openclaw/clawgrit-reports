# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1094 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1094 MB, gateway-tree 1045.5 MB, command-tree 602.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1094 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1094 MB, gateway-tree 1045.5 MB, command-tree 602.4 MB |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 2 (FAIL:1, PASS:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 37 total, 0 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260821-052037-0e73e2` |
| Generated | 2026-08-21T05:23:05.206Z |
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
| FAIL | 1 |
| PASS | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1094 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1094 MB, gateway-tree 1045.5 MB, command-tree 602.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7298 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 7298ms | 1094MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 156% | 6702ms | 6123ms | 5897ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 7298ms | 1094 MB | 1700.7 MB | n/a | n/a | gateway peak RSS 1094 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1094 MB, gateway-tree 1045.5 MB, command-tree 602.4 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1445.5 MB | 6702ms | 6123ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1373.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 613.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1167.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1094 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 804.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 198.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1045.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 563.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 159% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 477.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260821-052037-0e73e2/kova-gateway-performance-man-d48bd949-kova-260821-052037-0e73e2
Measurements:
- startup: listening 106ms; health 7298ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 3ms; post-ready p95 32ms; failures 89; final failures 0; slowest startup-sample/cold-start 1174ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1094 MB; tracked total 1700.7 MB; max CPU 153%; samples 40; roles gateway 1094MB/153%, command-tree 602.4MB/159%, gateway-tree 1045.5MB/153%, model-cli 563.6MB/159%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1131.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 3/3/3
- Violations:
  - gateway peak RSS 1094 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1094 MB, gateway-tree 1045.5 MB, command-tree 602.4 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260821-052037-0e73e2/kova-agent-cold-warm-message-2c26dd1d-kova-260821-052037-0e73e2
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1167.6 MB; tracked total 1445.5 MB; max CPU 156%; samples 68; roles command-tree 1373.5MB/200%, agent-cli 613.3MB/200%, agent-process 1167.6MB/156%, status-cli 804.4MB/198.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 6702ms; cold/warm 6702ms/6123ms; cold-warm delta 579ms; pre-provider 5897ms; provider 2ms; metadata scans 70 (1391.23ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6673.05ms; max 6702ms; pre-provider p95 5870.45ms
- agent CLI attribution: cold known 1068ms / unattributed 4829ms; warm known 823ms / unattributed 4543ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2194ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 6702ms; pre-provider 5897ms; provider 2ms; post-provider 803ms; response true
    - active window: metadata scans 41 (817.19ms total, max 59.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5897ms; provider 2ms; post-provider 803ms; unknown 3487.96ms; source plugins.metadata.scan 1794.85ms; agent.prepare 614.19ms
  - warm: total 6123ms; pre-provider 5366ms; provider 1ms; post-provider 756ms; response true
    - active window: metadata scans 29 (574.04ms total, max 45.24ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5366ms; provider 1ms; post-provider 756ms; unknown 2956.96ms; source plugins.metadata.scan 1794.85ms; agent.prepare 614.19ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5897 ms | 1068 ms | 4829 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260821-052037-0e73e2/kova-agent-cold-warm-message-2c26dd1d-kova-260821-052037-0e73e2/openclaw/timeline.jsonl |
  | warm | 5366 ms | 823 ms | 4543 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260821-052037-0e73e2/kova-agent-cold-warm-message-2c26dd1d-kova-260821-052037-0e73e2/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 756 ms | 59 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 312 ms | 193 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 522 ms | 45 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 301 ms | 191 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260821-052037-0e73e2-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260821-052037-0e73e2-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260821-052037-0e73e2-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260821-052037-0e73e2/kova-gateway-performance-man-d48bd949-kova-260821-052037-0e73e2
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260821-052037-0e73e2/kova-agent-cold-warm-message-2c26dd1d-kova-260821-052037-0e73e2

## Target Cleanup

- Runtime: `kova-local-mt2i3q4a-3zb-97680134`
- Result: removed
- Duration: 471ms

