# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1176.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1176.1 MB, gateway-tree 1154.7 MB, command-tree 606.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1176.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1176.1 MB, gateway-tree 1154.7 MB, command-tree 606.5 MB |
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
| Run ID | `kova-260816-052008-5e114b` |
| Generated | 2026-08-16T05:22:09.176Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1176.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1176.1 MB, gateway-tree 1154.7 MB, command-tree 606.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4998 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 4998ms | 1176.1MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 154% | 4833ms | 4405ms | 4355ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4998ms | 1176.1 MB | 1808.3 MB | n/a | n/a | gateway peak RSS 1176.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1176.1 MB, gateway-tree 1154.7 MB, command-tree 606.5 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1361.4 MB | 4833ms | 4405ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1288.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 226% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1176.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 808.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 226% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1154.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 563.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1086.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 606.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 157% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 451.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260816-052008-5e114b/kova-gateway-performance-man-d48bd949-kova-260816-052008-5e114b
Measurements:
- startup: listening 4349ms; health 4998ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures 66; final failures 0; slowest startup-sample/cold-start 649ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1176.1 MB; tracked total 1808.3 MB; max CPU 152%; samples 36; roles gateway 1176.1MB/152%, command-tree 606.5MB/157%, gateway-tree 1154.7MB/152%, model-cli 606.5MB/157%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 626ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 3/3/3
- Violations:
  - gateway peak RSS 1176.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1176.1 MB, gateway-tree 1154.7 MB, command-tree 606.5 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260816-052008-5e114b/kova-agent-cold-warm-message-2c26dd1d-kova-260816-052008-5e114b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1086.1 MB; tracked total 1361.4 MB; max CPU 154%; samples 52; roles command-tree 1288.4MB/226%, agent-process 1086.1MB/154%, status-cli 808.4MB/226%, agent-cli 563.3MB/200%; performance thresholds skipped 15 (instrumented)
- agent: turn 4833ms; cold/warm 4833ms/4405ms; cold-warm delta 428ms; pre-provider 4355ms; provider 2ms; metadata scans 32 (449.65ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4811.6ms; max 4833ms; pre-provider p95 4335.05ms
- agent CLI attribution: cold known 550ms / unattributed 3805ms; warm known 404ms / unattributed 3552ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1543.88ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 4833ms; pre-provider 4355ms; provider 2ms; post-provider 476ms; response true
    - active window: metadata scans 22 (305.21ms total, max 47.13ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4355ms; provider 2ms; post-provider 476ms; unknown 3057ms; source plugins.metadata.scan 791.41ms; agent.prepare 506.59ms
  - warm: total 4405ms; pre-provider 3956ms; provider 1ms; post-provider 448ms; response true
    - active window: metadata scans 10 (144.44ms total, max 42.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3956ms; provider 1ms; post-provider 448ms; unknown 2658ms; source plugins.metadata.scan 791.41ms; agent.prepare 506.59ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4355 ms | 550 ms | 3805 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260816-052008-5e114b/kova-agent-cold-warm-message-2c26dd1d-kova-260816-052008-5e114b/openclaw/timeline.jsonl |
  | warm | 3956 ms | 404 ms | 3552 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260816-052008-5e114b/kova-agent-cold-warm-message-2c26dd1d-kova-260816-052008-5e114b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 304 ms | 47 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 246 ms | 134 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 262 ms | 173 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 142 ms | 42 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260816-052008-5e114b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260816-052008-5e114b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260816-052008-5e114b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260816-052008-5e114b/kova-gateway-performance-man-d48bd949-kova-260816-052008-5e114b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260816-052008-5e114b/kova-agent-cold-warm-message-2c26dd1d-kova-260816-052008-5e114b

## Target Cleanup

- Runtime: `kova-local-msvcvuu4-3z3-9d051f94`
- Result: removed
- Duration: 394ms

