# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-cli peak RSS 999.9 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 999.9 MB, agent-process 999.9 MB, command-tree 999.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-cli peak RSS 999.9 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 999.9 MB, agent-process 999.9 MB, command-tree 999.9 MB |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 2 (PASS:1, FAIL:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 35 total, 0 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260712-064709-033b22` |
| Generated | 2026-07-12T06:48:42.673Z |
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
| PASS | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 999.9 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 999.9 MB, agent-process 999.9 MB, command-tree 999.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 999.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 999.9 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 999.9 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 999.9 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 999.9 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 5884ms | 994.5MB | n/a | 139% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 148.9% | 4529ms | 5225ms | 3952ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 5884ms | 994.5 MB | 1789.8 MB | n/a | n/a |  |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 999.9 MB | 4529ms | 5225ms | agent-cli peak RSS 999.9 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 999.9 MB, agent-process 999.9 MB, command-tree 999.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 999.9 MB; CPU 156.6%; scenario agent-cold-warm-message/mock-openai-provider
- agent-cli: RSS 999.9 MB; CPU 148.9%; scenario agent-cold-warm-message/mock-openai-provider
- agent-process: RSS 999.9 MB; CPU 148.9%; scenario agent-cold-warm-message/mock-openai-provider
- gateway: RSS 994.5 MB; CPU 139%; scenario gateway-performance/many-bundled-plugins
- gateway-tree: RSS 994.5 MB; CPU 139%; scenario gateway-performance/many-bundled-plugins
- status-cli: RSS 807.5 MB; CPU 156.6%; scenario gateway-performance/many-bundled-plugins
- plugin-cli: RSS 742 MB; CPU 152%; scenario gateway-performance/many-bundled-plugins
- model-cli: RSS 647.5 MB; CPU 147.8%; scenario gateway-performance/many-bundled-plugins

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-064709-033b22/kova-agent-cold-warm-message-2c26dd1d-kova-260712-064709-033b22
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures 0; final failures 0
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 999.9 MB; tracked total 999.9 MB; max CPU 148.9%; samples 55; roles agent-cli 999.9MB/148.9%, agent-process 999.9MB/148.9%, command-tree 999.9MB/156.6%, status-cli 798.5MB/156.6%
- agent: turn 5225ms; cold/warm 4529ms/5225ms; cold-warm delta 0ms; pre-provider 4673ms; provider 2ms; metadata scans 10 (257.1ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5190.2ms; max 5225ms; pre-provider p95 4636.95ms
- agent CLI attribution: cold known 129ms / unattributed 3823ms; warm known 126ms / unattributed 4547ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 81.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 12/12/12
- Violations:
  - agent-cli peak RSS 999.9 MB exceeded threshold 900 MB; observed role agent-cli; top RSS roles: agent-cli 999.9 MB, agent-process 999.9 MB, command-tree 999.9 MB
  - agent-cli peak RSS 999.9 MB exceeded threshold 900 MB
  - agent-process peak RSS 999.9 MB exceeded threshold 900 MB
- Agent turns:
  - cold: total 4529ms; pre-provider 3952ms; provider 4ms; post-provider 573ms; response true
    - active window: metadata scans 5 (128.65ms total, max 72.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3952ms; provider 4ms; post-provider 573ms; unknown 3952ms; source none
  - warm: total 5225ms; pre-provider 4673ms; provider 2ms; post-provider 550ms; response true
    - active window: metadata scans 5 (128.45ms total, max 81.77ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4673ms; provider 2ms; post-provider 550ms; unknown 4673ms; source none
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3952 ms | 129 ms | 3823 ms | 4 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-064709-033b22/kova-agent-cold-warm-message-2c26dd1d-kova-260712-064709-033b22/openclaw/timeline.jsonl |
  | warm | 4673 ms | 126 ms | 4547 ms | 2 ms | /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-064709-033b22/kova-agent-cold-warm-message-2c26dd1d-kova-260712-064709-033b22/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 129 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `startup` x5 | 5 | 0 | 126 ms | 81 ms |

## Artifacts

- markdown-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260712-064709-033b22-diagnostic.md
- json-report: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260712-064709-033b22-diagnostic.json
- summary-json: /home/runner/_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260712-064709-033b22-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-064709-033b22/kova-gateway-performance-man-d48bd949-kova-260712-064709-033b22
- collector-root agent-cold-warm-message#1: /home/runner/_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260712-064709-033b22/kova-agent-cold-warm-message-2c26dd1d-kova-260712-064709-033b22

## Target Cleanup

- Runtime: `kova-local-1783838829717`
- Result: removed
- Duration: 423ms

