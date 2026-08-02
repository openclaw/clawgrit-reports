# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 1 (PASS:1) |

## Proof Completeness

- Completeness: complete: 1
- Required obligations: 22 total, 0 missing, 0 failed
- Categories: command: 7, invariant: 12, artifact: 1, cleanup: 1, collector: 1

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260802-061510-25c633` |
| Generated | 2026-08-02T06:16:22.727Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
| Repeat / parallel | 1 / 1 |
| Auth | live (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 1 |
| Scenarios | 1 |
| States | 1 |
| PASS | 1 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 152% | 5708ms | 5683ms | 4325ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1064.1 MB | 5708ms | 5683ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1064.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 888.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 875.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 169.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 175.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 23.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260802-061510-25c633/kova-agent-cold-warm-message-2c26dd1d-kova-260802-061510-25c633
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 888.4 MB; tracked total 1064.1 MB; max CPU 152%; samples 18; roles command-tree 1064.1MB/169.6%, agent-process 888.4MB/152%, status-cli 875.9MB/169.6%, agent-cli 175.7MB/23.8%
- agent: turn 5708ms; cold/warm 5708ms/5683ms; cold-warm delta 25ms; pre-provider 4325ms; provider 1000ms; metadata scans 54 (530.4ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5706.75ms; max 5708ms; pre-provider p95 4322.6ms
- agent CLI attribution: cold known 350ms / unattributed 3975ms; warm known 360ms / unattributed 3917ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1538.55ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5708ms; pre-provider 4325ms; provider 1000ms; post-provider 383ms; response true
    - active window: metadata scans 27 (261.44ms total, max 45.35ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4325ms; provider 1000ms; post-provider 383ms; unknown 2796.08ms; source plugins.metadata.scan 1083.42ms; agent.prepare 445.5ms
  - warm: total 5683ms; pre-provider 4277ms; provider 1032ms; post-provider 374ms; response true
    - active window: metadata scans 27 (268.96ms total, max 44.59ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4277ms; provider 1032ms; post-provider 374ms; unknown 2748.08ms; source plugins.metadata.scan 1083.42ms; agent.prepare 445.5ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4325 ms | 350 ms | 3975 ms | 1000 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260802-061510-25c633/kova-agent-cold-warm-message-2c26dd1d-kova-260802-061510-25c633/openclaw/timeline.jsonl |
  | warm | 4277 ms | 360 ms | 3917 ms | 1032 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260802-061510-25c633/kova-agent-cold-warm-message-2c26dd1d-kova-260802-061510-25c633/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x4, `cli.command-startup` x2, `agent.startup` x4 | 24 | 0 | 232 ms | 45 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 224 ms | 115 ms |
  | warm | `plugins.metadata.scan` | `startup` x4, `agent.startup` x4, `cli.command-startup` x2 | 24 | 0 | 246 ms | 44 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 223 ms | 120 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260802-061510-25c633-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260802-061510-25c633-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260802-061510-25c633-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260802-061510-25c633/kova-agent-cold-warm-message-2c26dd1d-kova-260802-061510-25c633

## Target Cleanup

- Runtime: `kova-local-msbeootd-40b-ba5f58b0`
- Result: removed
- Duration: 388ms

