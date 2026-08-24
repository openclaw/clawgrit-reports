# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1063.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1063.1 MB, gateway-tree 1063.1 MB, command-tree 609.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1063.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1063.1 MB, gateway-tree 1063.1 MB, command-tree 609.1 MB |
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
| Run ID | `kova-260824-052538-16844e` |
| Generated | 2026-08-24T05:27:51.710Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1063.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1063.1 MB, gateway-tree 1063.1 MB, command-tree 609.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5406 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 5406ms | 1063.1MB | n/a | 147% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 149% | 5694ms | 5289ms | 5061ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5406ms | 1063.1 MB | 1742.4 MB | n/a | n/a | gateway peak RSS 1063.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1063.1 MB, gateway-tree 1063.1 MB, command-tree 609.1 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1390.1 MB | 5694ms | 5289ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1318.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 267.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1107.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 149% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 832.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 267.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1063.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 638.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 216% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1063.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 582.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 461.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 140% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260824-052538-16844e/kova-gateway-performance-man-d48bd949-kova-260824-052538-16844e
Measurements:
- startup: listening 4653ms; health 5406ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 3ms; post-ready p95 3ms; failures 71; final failures 0; slowest startup-sample/cold-start 753ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1063.1 MB; tracked total 1742.4 MB; max CPU 147%; samples 37; roles gateway 1063.1MB/147%, command-tree 609.1MB/181%, gateway-tree 1063.1MB/147%, status-cli 609.1MB/181%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 739.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 5/5/5
- Violations:
  - gateway peak RSS 1063.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1063.1 MB, gateway-tree 1063.1 MB, command-tree 609.1 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260824-052538-16844e/kova-agent-cold-warm-message-2c26dd1d-kova-260824-052538-16844e
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1107.3 MB; tracked total 1390.1 MB; max CPU 149%; samples 59; roles command-tree 1318.5MB/267.5%, agent-process 1107.3MB/149%, status-cli 832.3MB/267.5%, agent-cli 638.9MB/216%; performance thresholds skipped 15 (instrumented)
- agent: turn 5694ms; cold/warm 5694ms/5289ms; cold-warm delta 405ms; pre-provider 5061ms; provider 2ms; metadata scans 70 (1066.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5673.75ms; max 5694ms; pre-provider p95 5039.35ms
- agent CLI attribution: cold known 979ms / unattributed 4082ms; warm known 694ms / unattributed 3934ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1741.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 9/9/9
- Agent turns:
  - cold: total 5694ms; pre-provider 5061ms; provider 2ms; post-provider 631ms; response true
    - active window: metadata scans 41 (649.48ms total, max 49.07ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5061ms; provider 2ms; post-provider 631ms; unknown 2995.78ms; source plugins.metadata.scan 1403.58ms; agent.prepare 661.64ms
  - warm: total 5289ms; pre-provider 4628ms; provider 1ms; post-provider 660ms; response true
    - active window: metadata scans 29 (417.51ms total, max 45.3ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4628ms; provider 1ms; post-provider 660ms; unknown 2562.78ms; source plugins.metadata.scan 1403.58ms; agent.prepare 661.64ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5061 ms | 979 ms | 4082 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260824-052538-16844e/kova-agent-cold-warm-message-2c26dd1d-kova-260824-052538-16844e/openclaw/timeline.jsonl |
  | warm | 4628 ms | 694 ms | 3934 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260824-052538-16844e/kova-agent-cold-warm-message-2c26dd1d-kova-260824-052538-16844e/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 612 ms | 49 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 367 ms | 209 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 398 ms | 46 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 296 ms | 166 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260824-052538-16844e-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260824-052538-16844e-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260824-052538-16844e-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260824-052538-16844e/kova-gateway-performance-man-d48bd949-kova-260824-052538-16844e
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260824-052538-16844e/kova-agent-cold-warm-message-2c26dd1d-kova-260824-052538-16844e

## Target Cleanup

- Runtime: `kova-local-mt6slqws-40r-d21ff4b4`
- Result: removed
- Duration: 428ms

