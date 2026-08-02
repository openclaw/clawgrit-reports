# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — agent-process peak RSS 1066.5 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1253 MB, agent-process 1066.5 MB, status-cli 1054.9 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | agent-process peak RSS 1066.5 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1253 MB, agent-process 1066.5 MB, status-cli 1054.9 MB |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 2 (FAIL:2) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 37 total, 0 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260802-061333-6468fb` |
| Generated | 2026-08-02T06:15:17.203Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
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
| fail | OpenClaw | gateway-performance/many-bundled-plugins | status-cli peak RSS 901.4 MB exceeded threshold 900 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5085 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1066.5 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1253 MB, agent-process 1066.5 MB, status-cli 1054.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; agent-processRssMb: 1066.5 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 5085ms | 983.5MB | n/a | 153% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | FAIL:1 | n/a | 0MB | n/a | 159% | 5329ms | 5345ms | 4720ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 5085ms | 983.5 MB | 1931.9 MB | n/a | n/a | status-cli peak RSS 901.4 MB exceeded threshold 900 MB |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1324.7 MB | 5329ms | 5345ms | agent-process peak RSS 1066.5 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1253 MB, agent-process 1066.5 MB, status-cli 1054.9 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1253 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1066.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 159% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 1054.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 212% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 532 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 211% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 983.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- gateway-tree: RSS 983.5 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 835.9 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 560.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 151% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260802-061333-6468fb/kova-gateway-performance-man-d48bd949-kova-260802-061333-6468fb
Measurements:
- startup: listening 4753ms; health 5085ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 1ms; post-ready p95 3ms; failures 79; final failures 0; slowest startup-sample/cold-start 332ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 983.5 MB; tracked total 1931.9 MB; max CPU 153%; samples 59; roles gateway 983.5MB/153%, command-tree 901.4MB/154%, gateway-tree 983.5MB/153%, plugin-cli 835.9MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 2691.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 3/3/3
- Violations:
  - status-cli peak RSS 901.4 MB exceeded threshold 900 MB

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260802-061333-6468fb/kova-agent-cold-warm-message-2c26dd1d-kova-260802-061333-6468fb
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1066.5 MB; tracked total 1324.7 MB; max CPU 159%; samples 62; roles command-tree 1253MB/212%, agent-process 1066.5MB/159%, status-cli 1054.9MB/212%, agent-cli 532MB/211%
- agent: turn 5345ms; cold/warm 5329ms/5345ms; cold-warm delta 0ms; pre-provider 4758ms; provider 1ms; metadata scans 14 (203.52ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 5344.2ms; max 5345ms; pre-provider p95 4756.1ms
- agent CLI attribution: cold known 457ms / unattributed 4263ms; warm known 435ms / unattributed 4323ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 1701.52ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Violations:
  - agent-process peak RSS 1066.5 MB exceeded threshold 1000 MB; observed role agent-process; top RSS roles: command-tree 1253 MB, agent-process 1066.5 MB, status-cli 1054.9 MB
- Agent turns:
  - cold: total 5329ms; pre-provider 4720ms; provider 3ms; post-provider 606ms; response true
    - active window: metadata scans 7 (98.34ms total, max 36.03ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4720ms; provider 3ms; post-provider 606ms; unknown 3614.45ms; source agent.prepare 692.31ms; plugins.metadata.scan 413.24ms
  - warm: total 5345ms; pre-provider 4758ms; provider 1ms; post-provider 586ms; response true
    - active window: metadata scans 7 (105.18ms total, max 40.84ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4758ms; provider 1ms; post-provider 586ms; unknown 3652.45ms; source agent.prepare 692.31ms; plugins.metadata.scan 413.24ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 4720 ms | 457 ms | 4263 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260802-061333-6468fb/kova-agent-cold-warm-message-2c26dd1d-kova-260802-061333-6468fb/openclaw/timeline.jsonl |
  | warm | 4758 ms | 435 ms | 4323 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260802-061333-6468fb/kova-agent-cold-warm-message-2c26dd1d-kova-260802-061333-6468fb/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 362 ms | 161 ms |
  | cold | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 7 | 0 | 99 ms | 36 ms |
  | warm | `agent.prepare` | `agent.prepare` x11 | 11 | 0 | 333 ms | 149 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x3, `startup`, `agent.startup` x2 | 7 | 0 | 105 ms | 41 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260802-061333-6468fb-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260802-061333-6468fb-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260802-061333-6468fb-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260802-061333-6468fb/kova-gateway-performance-man-d48bd949-kova-260802-061333-6468fb
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260802-061333-6468fb/kova-agent-cold-warm-message-2c26dd1d-kova-260802-061333-6468fb

## Target Cleanup

- Runtime: `kova-local-msbemm8t-3z5-92c5618a`
- Result: removed
- Duration: 393ms

