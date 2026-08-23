# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1057.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1057.9 MB, gateway-tree 1053.2 MB, command-tree 597 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1057.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1057.9 MB, gateway-tree 1053.2 MB, command-tree 597 MB |
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
| Run ID | `kova-260823-052000-b0af8b` |
| Generated | 2026-08-23T05:22:13.333Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1057.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1057.9 MB, gateway-tree 1053.2 MB, command-tree 597 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5559 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 5559ms | 1057.9MB | n/a | 146% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 148% | 5685ms | 5134ms | 5059ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5559ms | 1057.9 MB | 1721.2 MB | n/a | n/a | gateway peak RSS 1057.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1057.9 MB, gateway-tree 1053.2 MB, command-tree 597 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1443.7 MB | 5685ms | 5134ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1372.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 263.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1163.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 148% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 838.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 263.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1057.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 565.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 192.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1053.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 146% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 577.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 450.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 141% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260823-052000-b0af8b/kova-gateway-performance-man-d48bd949-kova-260823-052000-b0af8b
Measurements:
- startup: listening 4748ms; health 5559ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures 71; final failures 0; slowest startup-sample/cold-start 811ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1057.9 MB; tracked total 1721.2 MB; max CPU 146%; samples 37; roles gateway 1057.9MB/146%, command-tree 597MB/180%, gateway-tree 1053.2MB/146%, status-cli 597MB/180%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 775.49ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 5/5/5
- Violations:
  - gateway peak RSS 1057.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1057.9 MB, gateway-tree 1053.2 MB, command-tree 597 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260823-052000-b0af8b/kova-agent-cold-warm-message-2c26dd1d-kova-260823-052000-b0af8b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1163.7 MB; tracked total 1443.7 MB; max CPU 148%; samples 59; roles command-tree 1372.4MB/263.6%, agent-process 1163.7MB/148%, status-cli 838.4MB/263.6%, agent-cli 565.6MB/192.3%; performance thresholds skipped 15 (instrumented)
- agent: turn 5685ms; cold/warm 5685ms/5134ms; cold-warm delta 551ms; pre-provider 5059ms; provider 2ms; metadata scans 70 (1090.32ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5657.45ms; max 5685ms; pre-provider p95 5032.45ms
- agent CLI attribution: cold known 898ms / unattributed 4161ms; warm known 755ms / unattributed 3773ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1718.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 9/9/9
- Agent turns:
  - cold: total 5685ms; pre-provider 5059ms; provider 2ms; post-provider 624ms; response true
    - active window: metadata scans 41 (628.79ms total, max 49.41ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5059ms; provider 2ms; post-provider 624ms; unknown 3032.1ms; source plugins.metadata.scan 1420.25ms; agent.prepare 606.65ms
  - warm: total 5134ms; pre-provider 4528ms; provider 0ms; post-provider 606ms; response true
    - active window: metadata scans 29 (461.53ms total, max 44.5ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4528ms; provider 0ms; post-provider 606ms; unknown 2501.1ms; source plugins.metadata.scan 1420.25ms; agent.prepare 606.65ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5059 ms | 898 ms | 4161 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260823-052000-b0af8b/kova-agent-cold-warm-message-2c26dd1d-kova-260823-052000-b0af8b/openclaw/timeline.jsonl |
  | warm | 4528 ms | 755 ms | 3773 ms | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260823-052000-b0af8b/kova-agent-cold-warm-message-2c26dd1d-kova-260823-052000-b0af8b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 605 ms | 49 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 293 ms | 162 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 443 ms | 44 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 312 ms | 171 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260823-052000-b0af8b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260823-052000-b0af8b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260823-052000-b0af8b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260823-052000-b0af8b/kova-gateway-performance-man-d48bd949-kova-260823-052000-b0af8b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260823-052000-b0af8b/kova-agent-cold-warm-message-2c26dd1d-kova-260823-052000-b0af8b

## Target Cleanup

- Runtime: `kova-local-mt5cynfi-40z-9af57b94`
- Result: removed
- Duration: 401ms

