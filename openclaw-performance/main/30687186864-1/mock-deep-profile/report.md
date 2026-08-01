# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1203.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1203.3 MB, gateway-tree 1203.3 MB, command-tree 926.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1203.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1203.3 MB, gateway-tree 1203.3 MB, command-tree 926.6 MB |
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
| Run ID | `kova-260801-061144-ef45db` |
| Generated | 2026-08-01T06:13:57.888Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1203.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1203.3 MB, gateway-tree 1203.3 MB, command-tree 926.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1203.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1203.3 MB exceeded threshold 1050 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1203.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1203.3 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1203.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 926.6 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1203.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1203.3 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1203.3 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1237.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1237.9 MB, agent-process 1237.9 MB, command-tree 1237.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1237.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1237.9 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1237.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1237.9 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1237.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | n/a | 1203.3MB | n/a | 152% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 200.3% | 5247ms | 5203ms | 4661ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 1203.3 MB | 2129.9 MB | n/a | n/a | gateway peak RSS 1203.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1203.3 MB, gateway-tree 1203.3 MB, command-tree 926.6 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1237.9 MB | 5247ms | 5203ms | agent-cli peak RSS 1237.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1237.9 MB, agent-process 1237.9 MB, command-tree 1237.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1237.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.3% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1237.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.3% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1237.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 200.3% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1203.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 1057.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1203.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 895.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 155% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 743 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260801-061144-ef45db/kova-gateway-performance-man-d48bd949-kova-260801-061144-ef45db
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures at least 517; final failures not-collected; slowest startup-sample/cold-start 1031ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1203.3 MB; tracked total 2129.9 MB; max CPU 152%; samples 62; roles gateway 1203.3MB/152%, command-tree 926.6MB/155%, gateway-tree 1203.3MB/152%, plugin-cli 895.1MB/155%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 705.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 25/25/23
- Violations:
  - gateway peak RSS 1203.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1203.3 MB, gateway-tree 1203.3 MB, command-tree 926.6 MB
  - gateway peak RSS 1203.3 MB exceeded threshold 1050 MB
  - gateway-tree peak RSS 1203.3 MB exceeded threshold 1200 MB
  - status-cli peak RSS 926.6 MB exceeded threshold 900 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260801-061144-ef45db/kova-agent-cold-warm-message-2c26dd1d-kova-260801-061144-ef45db
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1237.9 MB; tracked total 1237.9 MB; max CPU 200.3%; samples 60; roles agent-cli 1237.9MB/200.3%, agent-process 1237.9MB/200.3%, command-tree 1237.9MB/200.3%, status-cli 1057.9MB/193.7%
- agent: turn 5247ms; cold/warm 5247ms/5203ms; cold-warm delta 44ms; pre-provider 4661ms; provider 3ms; metadata scans 14 (193.59ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5244.8ms; max 5247ms; pre-provider p95 4660ms
- agent CLI attribution: cold known 391ms / unattributed 4270ms; warm known 389ms / unattributed 4252ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.prepare 202.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 15/15/15
- Violations:
  - agent-cli peak RSS 1237.9 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1237.9 MB, agent-process 1237.9 MB, command-tree 1237.9 MB
  - agent-cli peak RSS 1237.9 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1237.9 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 5247ms; pre-provider 4661ms; provider 3ms; post-provider 583ms; response true
    - active window: metadata scans 7 (104.62ms total, max 34.57ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4661ms; provider 3ms; post-provider 583ms; unknown 3769.67ms; source agent.prepare 595.74ms; plugins.metadata.scan 295.59ms
  - warm: total 5203ms; pre-provider 4641ms; provider 1ms; post-provider 561ms; response true
    - active window: metadata scans 7 (88.97ms total, max 38.93ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4641ms; provider 1ms; post-provider 561ms; unknown 3749.67ms; source agent.prepare 595.74ms; plugins.metadata.scan 295.59ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4661 ms | 391 ms | 4270 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260801-061144-ef45db/kova-agent-cold-warm-message-2c26dd1d-kova-260801-061144-ef45db/openclaw/timeline.jsonl |
  | warm | 4641 ms | 389 ms | 4252 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260801-061144-ef45db/kova-agent-cold-warm-message-2c26dd1d-kova-260801-061144-ef45db/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 292 ms | 189 ms |
  | cold | `plugins.metadata.scan` | `startup` x6, `agent.prepare` | 7 | 0 | 102 ms | 34 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 304 ms | 203 ms |
  | warm | `plugins.metadata.scan` | `startup` x6, `agent.prepare` | 7 | 0 | 89 ms | 39 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260801-061144-ef45db-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260801-061144-ef45db-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260801-061144-ef45db-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260801-061144-ef45db/kova-gateway-performance-man-d48bd949-kova-260801-061144-ef45db
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260801-061144-ef45db/kova-agent-cold-warm-message-2c26dd1d-kova-260801-061144-ef45db

## Target Cleanup

- Runtime: `kova-local-ms9z4fm7-41p-8be07b7b`
- Result: removed
- Duration: 373ms

