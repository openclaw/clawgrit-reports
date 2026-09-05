# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — warm provider work took 3013ms, over threshold 3000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | warm provider work took 3013ms, over threshold 3000ms |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 1 (FAIL:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 23 total, 0 missing, 0 failed
- Categories: command: 8, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260905-052250-a4c08f` |
| Generated | 2026-09-05T05:24:17.641Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | warm provider work took 3013ms, over threshold 3000ms | resourceScope: product; resourceContract: primary-role-product-scope-v3; agent-processRssMb: 638.4 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 127% | 4138ms | 4781ms | 1834ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 767.7 MB | 4138ms | 4781ms | warm provider work took 3013ms, over threshold 3000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 767.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 145.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 638.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 127% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 129.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 18.8% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 5.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 0% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260905-052250-a4c08f/kova-agent-cold-warm-message-2c26dd1d-kova-260905-052250-a4c08f
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 638.4 MB; tracked total 767.7 MB; max CPU 127%; samples 14; roles command-tree 767.7MB/145.8%, agent-process 638.4MB/127%, agent-cli 129.5MB/18.8%, status-cli 5.9MB/0%
- agent: turn 4781ms; cold/warm 4138ms/4781ms; cold-warm delta 0ms; pre-provider 1615ms; provider 3013ms; metadata scans 12 (273.16ms); event-loop n/a; polls 0; cleanup n/a; diagnosis provider-slow; leaks 0
- Agent turn stats: count 2; p95 4748.85ms; max 4781ms; pre-provider p95 1823.05ms
- agent CLI attribution: cold known 1283ms / unattributed 551ms; warm known 1021ms / unattributed 594ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 513.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - warm provider work took 3013ms, over threshold 3000ms
- Agent turns:
  - cold: total 4138ms; pre-provider 1834ms; provider 2189ms; post-provider 115ms; response true
    - active window: metadata scans 8 (191.69ms total, max 58.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1834ms; provider 2189ms; post-provider 115ms; unknown 1007.94ms; source plugins.metadata.scan 615.68ms; agent.prepare 210.38ms
  - warm: total 4781ms; pre-provider 1615ms; provider 3013ms; post-provider 153ms; response true
    - active window: metadata scans 4 (81.47ms total, max 43.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 1615ms; provider 3013ms; post-provider 153ms; unknown 788.94ms; source plugins.metadata.scan 615.68ms; agent.prepare 210.38ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 1834 ms | 1283 ms | 551 ms | 2189 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260905-052250-a4c08f/kova-agent-cold-warm-message-2c26dd1d-kova-260905-052250-a4c08f/openclaw/timeline.jsonl |
  | warm | 1615 ms | 1021 ms | 594 ms | 3013 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260905-052250-a4c08f/kova-agent-cold-warm-message-2c26dd1d-kova-260905-052250-a4c08f/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x28 | 28 | 0 | 1792 ms | 494 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x5, `startup`, `agent.startup` x2 | 8 | 0 | 191 ms | 58 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 190 ms | 91 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 111 ms | 33 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x5, `agent.startup` x2 | 7 | 0 | 10 ms | 2 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x10 | 10 | 0 | 1241 ms | 513 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 203 ms | 103 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 99 ms | 23 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 81 ms | 43 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 30 ms | 30 ms |
  | warm | `plugins.metadata.freeze` | `agent.startup` x2, `cli.command-startup` | 3 | 0 | 5 ms | 2 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260905-052250-a4c08f-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260905-052250-a4c08f-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260905-052250-a4c08f-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260905-052250-a4c08f/kova-agent-cold-warm-message-2c26dd1d-kova-260905-052250-a4c08f

## Target Cleanup

- Runtime: `kova-local-mtnxsd25-3zw-ed301a14`
- Result: removed
- Duration: 439ms

