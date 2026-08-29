# Kova OpenClaw Runtime Report

> **✅ [PASS]** — all executed scenarios passed

## Verdict

| Field | Value |
|---|---|
| Verdict | PASS |
| Reason | all executed scenarios passed |
| Blocking findings | 0 |
| Warnings | 0 |
| Records | 2 (PASS:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 40 total, 0 missing, 0 failed
- Categories: command: 22, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260829-052022-fb1548` |
| Generated | 2026-08-29T05:22:26.847Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 1 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 2 |
| Scenarios | 2 |
| States | 2 |
| PASS | 2 |

## Findings

- No blocking findings.

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | PASS:1 | 8ms | 583.6MB | n/a | 142% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 138% | 3742ms | 3556ms | 3087ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | gateway-performance/many-bundled-plugins |  | 8ms | 583.6 MB | 1146 MB | n/a | n/a |  |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 874.8 MB | 3742ms | 3556ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 800.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 259.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 670.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 138% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 408.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 193.5% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 617.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 189% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 583.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 427.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 583.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 142% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 362.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 137% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260829-052022-fb1548/kova-agent-cold-warm-message-2c26dd1d-kova-260829-052022-fb1548
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 670.4 MB; tracked total 874.8 MB; max CPU 138%; samples 41; roles command-tree 800.7MB/259.5%, agent-process 670.4MB/138%, agent-cli 408.5MB/193.5%, status-cli 617.1MB/189%; performance thresholds skipped 15 (instrumented)
- agent: turn 3742ms; cold/warm 3742ms/3556ms; cold-warm delta 186ms; pre-provider 3087ms; provider 2ms; metadata scans 10 (271.96ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3732.7ms; max 3742ms; pre-provider p95 3076.65ms
- agent CLI attribution: cold known 2125ms / unattributed 962ms; warm known 1904ms / unattributed 976ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 652.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 8/8/8
- Agent turns:
  - cold: total 3742ms; pre-provider 3087ms; provider 2ms; post-provider 653ms; response true
    - active window: metadata scans 7 (179.35ms total, max 50.02ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3087ms; provider 2ms; post-provider 653ms; unknown 1907.09ms; source agent.prepare 746.78ms; plugins.metadata.scan 433.13ms
  - warm: total 3556ms; pre-provider 2880ms; provider 1ms; post-provider 675ms; response true
    - active window: metadata scans 3 (92.61ms total, max 46.47ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 2880ms; provider 1ms; post-provider 675ms; unknown 1700.09ms; source agent.prepare 746.78ms; plugins.metadata.scan 433.13ms
- Agent CLI pre-provider attribution:
  - Spans are clipped to the active turn timestamp window; collector-specific name and phase rules select attributed work.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3087 ms | 2125 ms | 962 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260829-052022-fb1548/kova-agent-cold-warm-message-2c26dd1d-kova-260829-052022-fb1548/openclaw/timeline.jsonl |
  | warm | 2880 ms | 1904 ms | 976 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260829-052022-fb1548/kova-agent-cold-warm-message-2c26dd1d-kova-260829-052022-fb1548/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `cli.command-startup` | `cli.command-startup` x27 | 27 | 0 | 2103 ms | 652 ms |
  | cold | `agent.startup` | `agent.startup` x9 | 9 | 0 | 572 ms | 219 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 368 ms | 174 ms |
  | cold | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` x5 | 7 | 0 | 180 ms | 50 ms |
  | cold | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 37 ms | 37 ms |
  | cold | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 14 ms | 14 ms |
  | warm | `cli.command-startup` | `cli.command-startup` x11 | 11 | 0 | 1533 ms | 597 ms |
  | warm | `agent.startup` | `agent.startup` x9 | 9 | 0 | 521 ms | 149 ms |
  | warm | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 377 ms | 228 ms |
  | warm | `plugins.metadata.scan` | `startup` x2, `cli.command-startup` | 3 | 0 | 93 ms | 47 ms |
  | warm | `cli.main.dotenv` | `cli.startup` | 1 | 0 | 36 ms | 36 ms |
  | warm | `cli.main.core-imports` | `cli.startup` | 1 | 0 | 21 ms | 21 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260829-052022-fb1548-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260829-052022-fb1548-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260829-052022-fb1548-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260829-052022-fb1548/kova-gateway-performance-man-d48bd949-kova-260829-052022-fb1548
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260829-052022-fb1548/kova-agent-cold-warm-message-2c26dd1d-kova-260829-052022-fb1548

## Target Cleanup

- Runtime: `kova-local-mtdxm80w-3vg-99ac3cec`
- Result: removed
- Duration: 534ms

