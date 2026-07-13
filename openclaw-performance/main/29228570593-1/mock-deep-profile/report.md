# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 7 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 35 total, 0 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260713-061852-67ce79` |
| Generated | 2026-07-13T06:20:47.615Z |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 934.3 MB exceeded threshold 850 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1026.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | plugin-cli peak RSS 952.5 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1026.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1026.2 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 1026.2 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1052.1 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 1052.1 MB, agent-process 1052.1 MB, command-tree 1052.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1052.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1052.1 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1052.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1052.1 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1052.1 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | n/a | 1026.2MB | n/a | 146% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 164.4% | 4162ms | 4062ms | 3677ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 1026.2 MB | 1960.2 MB | n/a | n/a | status-cli peak RSS 934.3 MB exceeded threshold 850 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1052.1 MB | 4162ms | 4062ms | agent-cli peak RSS 1052.1 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 1052.1 MB, agent-process 1052.1 MB, command-tree 1052.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 1052.1 MB; CPU 165%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 1052.1 MB; CPU 164.4%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 1052.1 MB; CPU 164.4%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 1026.2 MB; CPU 146%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 1026.2 MB; CPU 146%; scenario gateway-performance/many-bundled-plugins
- plugin-cli: RSS 952.5 MB; CPU 165%; scenario gateway-performance/many-bundled-plugins
- status-cli: RSS 935.8 MB; CPU 160.8%; scenario agent-cold-warm-message/mock-openai-provider
- model-cli: RSS 685 MB; CPU 153.6%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260713-061852-67ce79/kova-gateway-performance-man-d48bd949-kova-260713-061852-67ce79
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures 491; final failures 0; slowest startup-sample/cold-start 1053ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 1026.2 MB; tracked total 1960.2 MB; max CPU 146%; samples 45; roles gateway 1026.2MB/146%, gateway-tree 1026.2MB/146%, command-tree 952.5MB/165%, plugin-cli 952.5MB/165%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span sidecars.model-prewarm 684.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 20/20/19
- Violations:
  - status-cli peak RSS 934.3 MB exceeded threshold 850 MB
  - plugin-cli peak RSS 952.5 MB exceeded threshold 800 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260713-061852-67ce79/kova-agent-cold-warm-message-2c26dd1d-kova-260713-061852-67ce79
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1052.1 MB; tracked total 1052.1 MB; max CPU 164.4%; samples 50; roles agent-cli 1052.1MB/164.4%, agent-process 1052.1MB/164.4%, command-tree 1052.1MB/164.4%, status-cli 935.8MB/160.8%
- agent: turn 4162ms; cold/warm 4162ms/4062ms; cold-warm delta 100ms; pre-provider 3677ms; provider 3ms; metadata scans 10 (217.82ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4157ms; max 4162ms; pre-provider p95 3672.9ms
- agent CLI attribution: cold known 108ms / unattributed 3569ms; warm known 110ms / unattributed 3485ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 56.61ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 12/12/12
- Violations:
  - agent-cli peak RSS 1052.1 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 1052.1 MB, agent-process 1052.1 MB, command-tree 1052.1 MB
  - agent-cli peak RSS 1052.1 MB exceeded threshold 900 MB
  - agent-process peak RSS 1052.1 MB exceeded threshold 900 MB
- Agent turns:
  - cold: total 4162ms; pre-provider 3677ms; provider 3ms; post-provider 482ms; response true
    - active window: metadata scans 5 (108.29ms total, max 56.61ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3677ms; provider 3ms; post-provider 482ms; unknown 3677ms; source none
  - warm: total 4062ms; pre-provider 3595ms; provider 1ms; post-provider 466ms; response true
    - active window: metadata scans 5 (109.53ms total, max 55.38ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3595ms; provider 1ms; post-provider 466ms; unknown 3595ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3677 ms | 108 ms | 3569 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260713-061852-67ce79/kova-agent-cold-warm-message-2c26dd1d-kova-260713-061852-67ce79/openclaw/timeline.jsonl |
  | warm | 3595 ms | 110 ms | 3485 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260713-061852-67ce79/kova-agent-cold-warm-message-2c26dd1d-kova-260713-061852-67ce79/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 108 ms | 56 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 110 ms | 56 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260713-061852-67ce79-diagnostic.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260713-061852-67ce79-diagnostic.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260713-061852-67ce79-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260713-061852-67ce79/kova-gateway-performance-man-d48bd949-kova-260713-061852-67ce79
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260713-061852-67ce79/kova-agent-cold-warm-message-2c26dd1d-kova-260713-061852-67ce79

## Target Cleanup

- Runtime: `kova-local-1783923531983`
- Result: removed
- Duration: 347ms

