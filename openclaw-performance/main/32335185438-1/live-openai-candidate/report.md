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
| Run ID | `kova-260820-052053-10cf1b` |
| Generated | 2026-08-20T05:22:44.411Z |
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
| PASS | 1 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 157% | 5614ms | 5361ms | 4302ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1115.4 MB | 5614ms | 5361ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1115.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 919.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 157% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 615.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 180.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 196 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 30.5% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260820-052053-10cf1b/kova-agent-cold-warm-message-2c26dd1d-kova-260820-052053-10cf1b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 919.4 MB; tracked total 1115.4 MB; max CPU 157%; samples 17; roles command-tree 1115.4MB/180.1%, agent-process 919.4MB/157%, status-cli 615.8MB/180.1%, agent-cli 196MB/30.5%
- agent: turn 5614ms; cold/warm 5614ms/5361ms; cold-warm delta 253ms; pre-provider 4302ms; provider 1119ms; metadata scans 74 (1252.88ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5601.35ms; max 5614ms; pre-provider p95 4281.1ms
- agent CLI attribution: cold known 804ms / unattributed 3498ms; warm known 603ms / unattributed 3281ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1760.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 5614ms; pre-provider 4302ms; provider 1119ms; post-provider 193ms; response true
    - active window: metadata scans 42 (712.64ms total, max 43.62ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4302ms; provider 1119ms; post-provider 193ms; unknown 1743.15ms; source plugins.metadata.scan 2349.18ms; agent.prepare 209.67ms
  - warm: total 5361ms; pre-provider 3884ms; provider 1294ms; post-provider 183ms; response true
    - active window: metadata scans 32 (540.24ms total, max 34.22ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3884ms; provider 1294ms; post-provider 183ms; unknown 1325.15ms; source plugins.metadata.scan 2349.18ms; agent.prepare 209.67ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4302 ms | 804 ms | 3498 ms | 1119 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260820-052053-10cf1b/kova-agent-cold-warm-message-2c26dd1d-kova-260820-052053-10cf1b/openclaw/timeline.jsonl |
  | warm | 3884 ms | 603 ms | 3281 ms | 1294 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260820-052053-10cf1b/kova-agent-cold-warm-message-2c26dd1d-kova-260820-052053-10cf1b/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x17, `startup` x12, `agent.startup` x11 | 40 | 0 | 688 ms | 44 ms |
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 116 ms | 30 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x7, `startup` x12, `agent.startup` x11 | 30 | 0 | 510 ms | 34 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 93 ms | 24 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260820-052053-10cf1b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260820-052053-10cf1b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260820-052053-10cf1b-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260820-052053-10cf1b/kova-agent-cold-warm-message-2c26dd1d-kova-260820-052053-10cf1b

## Target Cleanup

- Runtime: `kova-local-mt12o8ds-3ws-be2cd42b`
- Result: removed
- Duration: 465ms

