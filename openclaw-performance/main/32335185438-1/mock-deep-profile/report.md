# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1088.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1088.4 MB, gateway-tree 1058.3 MB, command-tree 599.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1088.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1088.4 MB, gateway-tree 1058.3 MB, command-tree 599.4 MB |
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
| Run ID | `kova-260820-052053-d50402` |
| Generated | 2026-08-20T05:23:08.818Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1088.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1088.4 MB, gateway-tree 1058.3 MB, command-tree 599.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6059 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 6059ms | 1088.4MB | n/a | 145% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 153% | 5989ms | 5497ms | 5331ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 6059ms | 1088.4 MB | 1728.9 MB | n/a | n/a | gateway peak RSS 1088.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1088.4 MB, gateway-tree 1058.3 MB, command-tree 599.4 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1405.1 MB | 5989ms | 5497ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1333.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1123.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 803 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 213% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1088.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 642.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1058.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 484.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 567.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260820-052053-d50402/kova-gateway-performance-man-d48bd949-kova-260820-052053-d50402
Measurements:
- startup: listening 4870ms; health 6059ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 3ms; post-ready p95 3ms; failures 74; final failures 0; slowest startup-sample/cold-start 1189ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1088.4 MB; tracked total 1728.9 MB; max CPU 145%; samples 37; roles gateway 1088.4MB/145%, command-tree 599.4MB/155%, gateway-tree 1058.3MB/145%, plugin-cli 484.9MB/155%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1147.25ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 3/3/3
- Violations:
  - gateway peak RSS 1088.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1088.4 MB, gateway-tree 1058.3 MB, command-tree 599.4 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260820-052053-d50402/kova-agent-cold-warm-message-2c26dd1d-kova-260820-052053-d50402
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1123.2 MB; tracked total 1405.1 MB; max CPU 153%; samples 61; roles command-tree 1333.1MB/213%, agent-process 1123.2MB/153%, status-cli 803MB/213%, agent-cli 642.3MB/212%; performance thresholds skipped 15 (instrumented)
- agent: turn 5989ms; cold/warm 5989ms/5497ms; cold-warm delta 492ms; pre-provider 5331ms; provider 2ms; metadata scans 70 (1187.54ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5964.4ms; max 5989ms; pre-provider p95 5305.65ms
- agent CLI attribution: cold known 996ms / unattributed 4335ms; warm known 716ms / unattributed 4108ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1994.12ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 5989ms; pre-provider 5331ms; provider 2ms; post-provider 656ms; response true
    - active window: metadata scans 41 (706.08ms total, max 50.37ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5331ms; provider 2ms; post-provider 656ms; unknown 3208.84ms; source plugins.metadata.scan 1539.83ms; agent.prepare 582.33ms
  - warm: total 5497ms; pre-provider 4824ms; provider 1ms; post-provider 672ms; response true
    - active window: metadata scans 29 (481.46ms total, max 46.79ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4824ms; provider 1ms; post-provider 672ms; unknown 2701.84ms; source plugins.metadata.scan 1539.83ms; agent.prepare 582.33ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5331 ms | 996 ms | 4335 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260820-052053-d50402/kova-agent-cold-warm-message-2c26dd1d-kova-260820-052053-d50402/openclaw/timeline.jsonl |
  | warm | 4824 ms | 716 ms | 4108 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260820-052053-d50402/kova-agent-cold-warm-message-2c26dd1d-kova-260820-052053-d50402/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 671 ms | 50 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 325 ms | 194 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 457 ms | 47 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 259 ms | 158 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260820-052053-d50402-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260820-052053-d50402-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260820-052053-d50402-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260820-052053-d50402/kova-gateway-performance-man-d48bd949-kova-260820-052053-d50402
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260820-052053-d50402/kova-agent-cold-warm-message-2c26dd1d-kova-260820-052053-d50402

## Target Cleanup

- Runtime: `kova-local-mt12o8cq-3wk-adc2e59c`
- Result: removed
- Duration: 424ms

