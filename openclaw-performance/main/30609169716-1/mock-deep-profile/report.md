# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1209.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1209.7 MB, gateway-tree 1209.7 MB, command-tree 935.4 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1209.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1209.7 MB, gateway-tree 1209.7 MB, command-tree 935.4 MB |
| Blocking findings | 10 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: incomplete: 1, complete: 1
- Required obligations: 37 total, 1 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, collector: 2, invariant: 12

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260731-061741-4c4125` |
| Generated | 2026-07-31T06:20:01.989Z |
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
| FAIL | 2 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1209.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1209.7 MB, gateway-tree 1209.7 MB, command-tree 935.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1209.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1209.7 MB exceeded threshold 1050 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1209.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1209.7 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1209.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 935.4 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1209.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1209.7 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1209.7 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1222.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1222.5 MB, agent-process 1222.5 MB, command-tree 1222.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1222.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1222.5 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1222.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1222.5 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1222.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | n/a | 1209.7MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 208.7% | 5862ms | 5867ms | 5260ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 1209.7 MB | 2115.2 MB | n/a | n/a | gateway peak RSS 1209.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1209.7 MB, gateway-tree 1209.7 MB, command-tree 935.4 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1222.5 MB | 5862ms | 5867ms | agent-cli peak RSS 1222.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1222.5 MB, agent-process 1222.5 MB, command-tree 1222.5 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1222.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 208.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1222.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 208.7% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1222.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 208.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1209.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1064.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 203% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1209.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 923 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 801.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260731-061741-4c4125/kova-gateway-performance-man-d48bd949-kova-260731-061741-4c4125
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 5ms; failures at least 520; final failures not-collected; slowest startup-sample/cold-start 1907ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1209.7 MB; tracked total 2115.2 MB; max CPU 152%; samples 74; roles gateway 1209.7MB/152%, command-tree 935.4MB/158%, gateway-tree 1209.7MB/152%, plugin-cli 923MB/158%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.session-locks 805.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 25/25/23
- Violations:
  - gateway peak RSS 1209.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1209.7 MB, gateway-tree 1209.7 MB, command-tree 935.4 MB
  - gateway peak RSS 1209.7 MB exceeded threshold 1050 MB
  - gateway-tree peak RSS 1209.7 MB exceeded threshold 1200 MB
  - status-cli peak RSS 935.4 MB exceeded threshold 900 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260731-061741-4c4125/kova-agent-cold-warm-message-2c26dd1d-kova-260731-061741-4c4125
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1222.5 MB; tracked total 1222.5 MB; max CPU 208.7%; samples 66; roles agent-cli 1222.5MB/208.7%, agent-process 1222.5MB/208.7%, command-tree 1222.5MB/208.7%, status-cli 1064.7MB/203%
- agent: turn 5867ms; cold/warm 5862ms/5867ms; cold-warm delta 0ms; pre-provider 5245ms; provider 1ms; metadata scans 14 (183.5ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5866.75ms; max 5867ms; pre-provider p95 5259.25ms
- agent CLI attribution: cold known 91ms / unattributed 5169ms; warm known 92ms / unattributed 5153ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 50.16ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/15
- Violations:
  - agent-cli peak RSS 1222.5 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1222.5 MB, agent-process 1222.5 MB, command-tree 1222.5 MB
  - agent-cli peak RSS 1222.5 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1222.5 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5862ms; pre-provider 5260ms; provider 4ms; post-provider 598ms; response true
    - active window: metadata scans 7 (91.92ms total, max 40.81ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5260ms; provider 4ms; post-provider 598ms; unknown 4903.03ms; source plugins.metadata.scan 356.97ms
  - warm: total 5867ms; pre-provider 5245ms; provider 1ms; post-provider 621ms; response true
    - active window: metadata scans 7 (91.58ms total, max 50.16ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5245ms; provider 1ms; post-provider 621ms; unknown 4888.03ms; source plugins.metadata.scan 356.97ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5260 ms | 91 ms | 5169 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260731-061741-4c4125/kova-agent-cold-warm-message-2c26dd1d-kova-260731-061741-4c4125/openclaw/timeline.jsonl |
  | warm | 5245 ms | 92 ms | 5153 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260731-061741-4c4125/kova-agent-cold-warm-message-2c26dd1d-kova-260731-061741-4c4125/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 91 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup` x7 | 7 | 0 | 92 ms | 50 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260731-061741-4c4125-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260731-061741-4c4125-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260731-061741-4c4125-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260731-061741-4c4125/kova-gateway-performance-man-d48bd949-kova-260731-061741-4c4125
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260731-061741-4c4125/kova-agent-cold-warm-message-2c26dd1d-kova-260731-061741-4c4125

## Target Cleanup

- Runtime: `kova-local-ms8jw86t-3z2-2f7de04e`
- Result: removed
- Duration: 404ms

