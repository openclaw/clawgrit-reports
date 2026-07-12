# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 989.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 989.6 MB, agent-process 989.6 MB, command-tree 989.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 989.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 989.6 MB, agent-process 989.6 MB, command-tree 989.6 MB |
| Blocking findings | 4 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 35 total, 0 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260712-061200-e8f433` |
| Generated | 2026-07-12T06:13:27.695Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.13.0 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | plugin-cli peak RSS 872.8 MB exceeded threshold 800 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; readinessHealthReadyMs: 8446 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 989.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 989.6 MB, agent-process 989.6 MB, command-tree 989.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 989.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 989.6 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 989.6 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 989.6 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 989.6 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 8446ms | 979.2MB | n/a | 142% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 146.9% | 4112ms | 4287ms | 3635ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 8446ms | 979.2 MB | 1851.7 MB | n/a | n/a | plugin-cli peak RSS 872.8 MB exceeded threshold 800 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 989.6 MB | 4112ms | 4287ms | agent-cli peak RSS 989.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 989.6 MB, agent-process 989.6 MB, command-tree 989.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 989.6 MB; CPU 148%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 989.6 MB; CPU 146.9%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 989.6 MB; CPU 146.9%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 979.2 MB; CPU 142%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 979.2 MB; CPU 142%; scenario gateway-performance/many-bundled-plugins
- plugin-cli: RSS 872.8 MB; CPU 148%; scenario gateway-performance/many-bundled-plugins
- status-cli: RSS 806.2 MB; CPU 146.4%; scenario gateway-performance/many-bundled-plugins
- model-cli: RSS 653.8 MB; CPU 143%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-061200-e8f433/kova-gateway-performance-man-d48bd949-kova-260712-061200-e8f433
Measurements:
- startup: listening 106ms; health 8446ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 3ms; post-ready p95 88ms; failures 97; final failures 0; slowest startup-sample/cold-start 1864ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 979.2 MB; tracked total 1851.7 MB; max CPU 142%; samples 51; roles gateway 979.2MB/142%, gateway-tree 979.2MB/142%, command-tree 872.8MB/148%, plugin-cli 872.8MB/148%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1098.17ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 17/17/15
- Violations:
  - plugin-cli peak RSS 872.8 MB exceeded threshold 800 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-061200-e8f433/kova-agent-cold-warm-message-2c26dd1d-kova-260712-061200-e8f433
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 989.6 MB; tracked total 989.6 MB; max CPU 146.9%; samples 50; roles agent-cli 989.6MB/146.9%, agent-process 989.6MB/146.9%, command-tree 989.6MB/146.9%, status-cli 804.9MB/146.4%
- agent: turn 4287ms; cold/warm 4112ms/4287ms; cold-warm delta 0ms; pre-provider 3776ms; provider 1ms; metadata scans 10 (234.99ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 4278.25ms; max 4287ms; pre-provider p95 3768.95ms
- agent CLI attribution: cold known 120ms / unattributed 3515ms; warm known 116ms / unattributed 3660ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 67.5ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 12/12/12
- Violations:
  - agent-cli peak RSS 989.6 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 989.6 MB, agent-process 989.6 MB, command-tree 989.6 MB
  - agent-cli peak RSS 989.6 MB exceeded threshold 900 MB
  - agent-process peak RSS 989.6 MB exceeded threshold 900 MB
- Agent turns:
  - cold: total 4112ms; pre-provider 3635ms; provider 3ms; post-provider 474ms; response true
    - active window: metadata scans 5 (119.65ms total, max 60.48ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3635ms; provider 3ms; post-provider 474ms; unknown 3635ms; source none
  - warm: total 4287ms; pre-provider 3776ms; provider 1ms; post-provider 510ms; response true
    - active window: metadata scans 5 (115.34ms total, max 61.51ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3776ms; provider 1ms; post-provider 510ms; unknown 3776ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3635 ms | 120 ms | 3515 ms | 3 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-061200-e8f433/kova-agent-cold-warm-message-2c26dd1d-kova-260712-061200-e8f433/openclaw/timeline.jsonl |
  | warm | 3776 ms | 116 ms | 3660 ms | 1 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-061200-e8f433/kova-agent-cold-warm-message-2c26dd1d-kova-260712-061200-e8f433/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 120 ms | 61 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 116 ms | 62 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260712-061200-e8f433-diagnostic.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260712-061200-e8f433-diagnostic.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260712-061200-e8f433-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-061200-e8f433/kova-gateway-performance-man-d48bd949-kova-260712-061200-e8f433
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-061200-e8f433/kova-agent-cold-warm-message-2c26dd1d-kova-260712-061200-e8f433

## Target Cleanup

- Runtime: `kova-local-1783836720872`
- Result: removed
- Duration: 398ms

