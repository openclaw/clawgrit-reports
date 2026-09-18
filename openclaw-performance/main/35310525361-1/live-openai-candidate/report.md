# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — cold agent spent 10236ms before provider work, over threshold 10000ms

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | cold agent spent 10236ms before provider work, over threshold 10000ms |
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
| Run ID | `kova-260918-052341-8b3e6d` |
| Generated | 2026-09-18T05:25:41.641Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold agent spent 10236ms before provider work, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 986.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold pre-provider latency was 10236ms, over threshold 10000ms | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 986.8 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | cold provider was fast (1942ms), but OpenClaw spent 10236ms before provider work. | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 986.8 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 160.7% | 12341ms | 9857ms | 10236ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1077 MB | 12341ms | 9857ms | cold agent spent 10236ms before provider work, over threshold 10000ms |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1077 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 170.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 986.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160.7% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 441.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 151.9% (scenario agent-cold-warm-message/mock-openai-provider)
- package-manager: RSS 148.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 146.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 90.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 97.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260918-052341-8b3e6d/kova-agent-cold-warm-message-2c26dd1d-kova-260918-052341-8b3e6d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 986.8 MB; tracked total 1077 MB; max CPU 160.7%; samples 28; roles command-tree 1077MB/170.8%, agent-process 986.8MB/160.7%, status-cli 441.2MB/151.9%, package-manager 148.6MB/146.1%
- agent: turn 12341ms; cold/warm 12341ms/9857ms; cold-warm delta 2484ms; pre-provider 10236ms; provider 1942ms; metadata scans 19 (552.41ms); event-loop n/a; polls 0; cleanup n/a; diagnosis pre-provider-stall; leaks 0
- Agent turn stats: count 2; p95 12216.8ms; max 12341ms; pre-provider p95 10108.45ms
- agent CLI attribution: cold known 6801ms / unattributed 3435ms; warm known 4229ms / unattributed 3456ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 3573.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - cold agent spent 10236ms before provider work, over threshold 10000ms
  - cold pre-provider latency was 10236ms, over threshold 10000ms
  - cold provider was fast (1942ms), but OpenClaw spent 10236ms before provider work.
- Agent turns:
  - cold: total 12341ms; pre-provider 10236ms; provider 1942ms; post-provider 163ms; response true
    - active window: metadata scans 14 (400.36ms total, max 70.68ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 10236ms; provider 1942ms; post-provider 163ms; unknown 8821.39ms; source plugins.metadata.scan 1118.58ms; agent.prepare 296.03ms
  - warm: total 9857ms; pre-provider 7685ms; provider 2019ms; post-provider 153ms; response true
    - active window: metadata scans 5 (152.05ms total, max 63.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 7685ms; provider 2019ms; post-provider 153ms; unknown 6270.39ms; source plugins.metadata.scan 1118.58ms; agent.prepare 296.03ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 10236 ms | 6801 ms | 3435 ms | 1942 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260918-052341-8b3e6d/kova-agent-cold-warm-message-2c26dd1d-kova-260918-052341-8b3e6d/openclaw/timeline.jsonl |
  | warm | 7685 ms | 4229 ms | 3456 ms | 2019 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260918-052341-8b3e6d/kova-agent-cold-warm-message-2c26dd1d-kova-260918-052341-8b3e6d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x41 | 41 | 0 | 12132 ms | 3573 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 499 ms | 212 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x11, `startup`, `agent.startup` x2 | 14 | 0 | 403 ms | 71 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 149 ms | 51 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 31 ms | 31 ms |
  | cold | `plugins.metadata.freeze` | `cli.command-startup` x11, `agent.startup` x2 | 13 | 0 | 21 ms | 3 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x14 | 14 | 0 | 6744 ms | 2670 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 609 ms | 318 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x2, `startup`, `agent.startup` x2 | 5 | 0 | 153 ms | 64 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 148 ms | 50 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 26 ms | 26 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260918-052341-8b3e6d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260918-052341-8b3e6d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260918-052341-8b3e6d-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260918-052341-8b3e6d/kova-agent-cold-warm-message-2c26dd1d-kova-260918-052341-8b3e6d

## Target Cleanup

- Runtime: `kova-local-mu6ijj2t-3pe-a42de50b`
- Result: removed
- Duration: 522ms

