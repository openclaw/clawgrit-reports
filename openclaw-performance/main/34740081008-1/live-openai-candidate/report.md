# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1051.3 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1130.9 MB, agent-process 1051.3 MB, status-cli 395.6 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1051.3 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1130.9 MB, agent-process 1051.3 MB, status-cli 395.6 MB |
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
| Run ID | `kova-260913-052632-c9a94c` |
| Generated | 2026-09-13T05:28:12.035Z |
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
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1051.3 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1130.9 MB, agent-process 1051.3 MB, status-cli 395.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v4; agent-processRssMb: 1051.3 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v4`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 155.9% | 9136ms | 9785ms | 6913ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1130.9 MB | 9136ms | 9785ms | agent-process peak RSS 1051.3 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1130.9 MB, agent-process 1051.3 MB, status-cli 395.6 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v4`
- command-tree: RSS 1130.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 165.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1051.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 155.9% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 395.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 149.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 79.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 37.2% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260913-052632-c9a94c/kova-agent-cold-warm-message-2c26dd1d-kova-260913-052632-c9a94c
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v4; agent-process RSS 1051.3 MB; tracked total 1130.9 MB; max CPU 155.9%; samples 25; roles command-tree 1130.9MB/165.7%, agent-process 1051.3MB/155.9%, status-cli 395.6MB/149.4%, agent-cli 79.8MB/37.2%
- agent: turn 9785ms; cold/warm 9136ms/9785ms; cold-warm delta 0ms; pre-provider 6868ms; provider 2765ms; metadata scans 12 (546.25ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 9752.55ms; max 9785ms; pre-provider p95 6910.75ms
- agent CLI attribution: cold known 3653ms / unattributed 3260ms; warm known 3507ms / unattributed 3361ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2094.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-process peak RSS 1051.3 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1130.9 MB, agent-process 1051.3 MB, status-cli 395.6 MB
- Agent turns:
  - cold: total 9136ms; pre-provider 6913ms; provider 2048ms; post-provider 175ms; response true
    - active window: metadata scans 8 (338.36ms total, max 168.32ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6913ms; provider 2048ms; post-provider 175ms; unknown 5646.25ms; source plugins.metadata.scan 977.35ms; agent.prepare 289.4ms
  - warm: total 9785ms; pre-provider 6868ms; provider 2765ms; post-provider 152ms; response true
    - active window: metadata scans 4 (207.89ms total, max 161.78ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6868ms; provider 2765ms; post-provider 152ms; unknown 5601.25ms; source plugins.metadata.scan 977.35ms; agent.prepare 289.4ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6913 ms | 3653 ms | 3260 ms | 2048 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260913-052632-c9a94c/kova-agent-cold-warm-message-2c26dd1d-kova-260913-052632-c9a94c/openclaw/timeline.jsonl |
  | warm | 6868 ms | 3507 ms | 3361 ms | 2765 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260913-052632-c9a94c/kova-agent-cold-warm-message-2c26dd1d-kova-260913-052632-c9a94c/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x25 | 25 | 0 | 5173 ms | 1935 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 592 ms | 228 ms |
  | cold | `plugins.metadata.scan` | `startup`, `cli.command-startup` x5, `agent.startup` x2 | 8 | 0 | 338 ms | 169 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 157 ms | 53 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | cold | `entry.run-main-import` | `cli.startup` | 1 | 0 | 17 ms | 17 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x13 | 13 | 0 | 4653 ms | 2095 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 714 ms | 340 ms |
  | warm | `plugins.metadata.scan` | `startup`, `cli.command-startup`, `agent.startup` x2 | 4 | 0 | 208 ms | 162 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 133 ms | 39 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 23 ms | 23 ms |
  | warm | `entry.run-main-import` | `cli.startup` | 1 | 0 | 16 ms | 16 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260913-052632-c9a94c-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260913-052632-c9a94c-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260913-052632-c9a94c-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260913-052632-c9a94c/kova-agent-cold-warm-message-2c26dd1d-kova-260913-052632-c9a94c

## Target Cleanup

- Runtime: `kova-local-mtzdfxfq-40y-5465ed67`
- Result: removed
- Duration: 469ms

