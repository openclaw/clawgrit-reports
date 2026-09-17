# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — cold agent spent 10910ms before provider work, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | cold agent spent 10910ms before provider work, over threshold 10000ms |
| Blocking findings | 3 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260917-052509-0c97f0` |
| Generated | 2026-09-17T05:26:58.207Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 1 / 1 |
| Auth | live (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 1 |
| Scenarios | 1 |
| States | 1 |
| FAIL | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10910ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 920.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 10910ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 920.5 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1993ms), but OpenClaw spent 10910ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 920.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 151.4% | 13149ms | 9623ms | 10910ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1011.2 MB | 13149ms | 9623ms | cold agent spent 10910ms before provider work, over threshold 10000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1011.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 161.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 920.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 425.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 149.8% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 206 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 145.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 90.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 39.9% (scenario agent-cold-warm-message/mock-openai-provider)
- runtime-management: RSS 89.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 15.4% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260917-052509-0c97f0/kova-agent-cold-warm-message-2c26dd1d-kova-260917-052509-0c97f0
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 920.5 MB; tracked total 1011.2 MB; max CPU 151.4%; samples 29; roles command-tree 1011.2MB/161.4%, agent-process 920.5MB/151.4%, status-cli 425.7MB/149.8%, package-manager 206MB/145.1%
- agent: turn 13149ms; cold/warm 13149ms/9623ms; cold-warm delta 3526ms; pre-provider 10910ms; provider 1993ms; metadata scans 19 (551.42ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12972.7ms; max 13149ms; pre-provider p95 10745.25ms
- agent CLI attribution: cold known 7518ms / unattributed 3392ms; warm known 4226ms / unattributed 3389ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 4249.41ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - cold agent spent 10910ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10910ms, over threshold 10000ms
  - cold provider was fast (1993ms), but OpenClaw spent 10910ms before provider work.
- Agent turns:
  - cold: total 13149ms; pre-provider 10910ms; provider 1993ms; post-provider 246ms; response true
    - active window: metadata scans 14 (400.06ms total, max 69.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10910ms; provider 1993ms; post-provider 246ms; unknown 9549.01ms; source plugins.metadata.scan 1082.8ms; agent.prepare 278.19ms
  - warm: total 9623ms; pre-provider 7615ms; provider 1877ms; post-provider 131ms; response true
    - active window: metadata scans 5 (151.36ms total, max 63.43ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7615ms; provider 1877ms; post-provider 131ms; unknown 6254.01ms; source plugins.metadata.scan 1082.8ms; agent.prepare 278.19ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10910 ms | 7518 ms | 3392 ms | 1993 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260917-052509-0c97f0/kova-agent-cold-warm-message-2c26dd1d-kova-260917-052509-0c97f0/openclaw/timeline.jsonl |
  | warm | 7615 ms | 4226 ms | 3389 ms | 1877 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260917-052509-0c97f0/kova-agent-cold-warm-message-2c26dd1d-kova-260917-052509-0c97f0/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x45 | 45 | 0 | 13616 ms | 4249 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 496 ms | 207 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x11, `startup`, `agent.startup` x2 | 14 | 0 | 400 ms | 69 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 145 ms | 52 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x11, `agent.startup` x2 | 13 | 0 | 21 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x13 | 13 | 0 | 6893 ms | 2681 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 585 ms | 306 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x2, `startup`, `agent.startup` x2 | 5 | 0 | 151 ms | 63 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 131 ms | 44 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 28 ms | 28 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260917-052509-0c97f0-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260917-052509-0c97f0-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260917-052509-0c97f0-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260917-052509-0c97f0/kova-agent-cold-warm-message-2c26dd1d-kova-260917-052509-0c97f0

## Target Cleanup

- Runtime: `kova-local-mu535kh8-40m-7450b097`
- Result: removed
- Duration: 497ms

