# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 6 |
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
| Run ID | `kova-260720-061831-d77c3a` |
| Generated | 2026-07-20T06:20:23.013Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 991.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 991.6 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1002.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1002.2 MB, agent-process 1002.2 MB, command-tree 1002.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1002.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1002.2 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1002.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1002.2 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1002.2 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | n/a | 991.6MB | n/a | 149% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 155.6% | 4452ms | 4382ms | 3884ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 991.6 MB | 1743.6 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1002.2 MB | 4452ms | 4382ms | agent-cli peak RSS 1002.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1002.2 MB, agent-process 1002.2 MB, command-tree 1002.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1002.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.6% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1002.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 156.6% (scenario gateway-performance/many-bundled-plugins)
- agent-process: RSS 1002.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.6% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 751 MB (scenario gateway-performance/many-bundled-plugins); CPU 156.6% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 991.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 149% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 991.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 149% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 780.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153.9% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 659.2 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260720-061831-d77c3a/kova-gateway-performance-man-d48bd949-kova-260720-061831-d77c3a
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 485; final failures not-collected; slowest startup-sample/cold-start 454ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 991.6 MB; tracked total 1743.6 MB; max CPU 149%; samples 42; roles gateway 991.6MB/149%, command-tree 776.9MB/156.6%, gateway-tree 991.6MB/149%, plugin-cli 751MB/156.6%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1487ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 24/24/22
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260720-061831-d77c3a/kova-agent-cold-warm-message-2c26dd1d-kova-260720-061831-d77c3a
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1002.2 MB; tracked total 1002.2 MB; max CPU 155.6%; samples 50; roles agent-cli 1002.2MB/155.6%, agent-process 1002.2MB/155.6%, command-tree 1002.2MB/155.6%, status-cli 780.9MB/153.9%
- agent: turn 4452ms; cold/warm 4452ms/4382ms; cold-warm delta 70ms; pre-provider 3884ms; provider 3ms; metadata scans 10 (204.55ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4448.5ms; max 4452ms; pre-provider p95 3879.6ms
- agent CLI attribution: cold known 97ms / unattributed 3787ms; warm known 106ms / unattributed 3690ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 53.96ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 17/17/15
- Violations:
  - agent-cli peak RSS 1002.2 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1002.2 MB, agent-process 1002.2 MB, command-tree 1002.2 MB
  - agent-cli peak RSS 1002.2 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1002.2 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 4452ms; pre-provider 3884ms; provider 3ms; post-provider 565ms; response true
    - active window: metadata scans 5 (97.88ms total, max 52.18ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3884ms; provider 3ms; post-provider 565ms; unknown 3600.43ms; source plugins.metadata.scan 283.57ms
  - warm: total 4382ms; pre-provider 3796ms; provider 2ms; post-provider 584ms; response true
    - active window: metadata scans 5 (106.67ms total, max 51.49ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3796ms; provider 2ms; post-provider 584ms; unknown 3512.43ms; source plugins.metadata.scan 283.57ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3884 ms | 97 ms | 3787 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260720-061831-d77c3a/kova-agent-cold-warm-message-2c26dd1d-kova-260720-061831-d77c3a/openclaw/timeline.jsonl |
  | warm | 3796 ms | 106 ms | 3690 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260720-061831-d77c3a/kova-agent-cold-warm-message-2c26dd1d-kova-260720-061831-d77c3a/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 97 ms | 52 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 106 ms | 51 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260720-061831-d77c3a-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260720-061831-d77c3a-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260720-061831-d77c3a-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260720-061831-d77c3a/kova-gateway-performance-man-d48bd949-kova-260720-061831-d77c3a
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260720-061831-d77c3a/kova-agent-cold-warm-message-2c26dd1d-kova-260720-061831-d77c3a

## Target Cleanup

- Runtime: `kova-local-mrsu2xha-40d-cb85e65c`
- Result: removed
- Duration: 371ms

