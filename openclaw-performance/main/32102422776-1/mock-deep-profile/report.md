# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1264.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1264.7 MB, gateway-tree 1264.7 MB, command-tree 596.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1264.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1264.7 MB, gateway-tree 1264.7 MB, command-tree 596.7 MB |
| Blocking findings | 2 |
| Warnings | 0 |
| Records | 2 (FAIL:1, PASS:1) |

## Proof Completeness

- Completeness: complete: 2
- Required obligations: 37 total, 0 missing, 0 failed
- Categories: command: 19, artifact: 2, cleanup: 2, collector: 2, invariant: 12

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260818-052002-9deaee` |
| Generated | 2026-08-18T05:22:41.594Z |
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
| FAIL | 1 |
| PASS | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1264.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1264.7 MB, gateway-tree 1264.7 MB, command-tree 596.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7415 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1264.7 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7415 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 1 | FAIL:1 | 7415ms | 1264.7MB | n/a | 164% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 1 | PASS:1 | n/a | 0MB | n/a | 164% | 6389ms | 6077ms | 5558ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 7415ms | 1264.7 MB | 1932.8 MB | n/a | n/a | gateway peak RSS 1264.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1264.7 MB, gateway-tree 1264.7 MB, command-tree 596.7 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1396.9 MB | 6389ms | 6077ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1323.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 207.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1264.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 164% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 828.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 207.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1264.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 164% (scenario gateway-performance/many-bundled-plugins)
- agent-cli: RSS 600.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 206.7% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1119.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 164% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 574.1 MB (scenario gateway-performance/many-bundled-plugins); CPU 158% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 473.4 MB (scenario gateway-performance/many-bundled-plugins); CPU 153% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260818-052002-9deaee/kova-gateway-performance-man-d48bd949-kova-260818-052002-9deaee
Measurements:
- startup: listening 6337ms; health 7415ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 2ms; post-ready p95 5ms; failures 92; final failures 0; slowest startup-sample/cold-start 1078ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1264.7 MB; tracked total 1932.8 MB; max CPU 164%; samples 48; roles gateway 1264.7MB/164%, gateway-tree 1264.7MB/164%, command-tree 596.7MB/158%, status-cli 596.7MB/153%; performance thresholds skipped 6 (instrumented)
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 967.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 3/3/3
- Violations:
  - gateway peak RSS 1264.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1264.7 MB, gateway-tree 1264.7 MB, command-tree 596.7 MB
  - gateway-tree peak RSS 1264.7 MB exceeded threshold 1200 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260818-052002-9deaee/kova-agent-cold-warm-message-2c26dd1d-kova-260818-052002-9deaee
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 1119.4 MB; tracked total 1396.9 MB; max CPU 164%; samples 69; roles command-tree 1323.5MB/207.4%, agent-process 1119.4MB/164%, status-cli 828.6MB/207.4%, agent-cli 600.5MB/206.7%; performance thresholds skipped 15 (instrumented)
- agent: turn 6389ms; cold/warm 6389ms/6077ms; cold-warm delta 312ms; pre-provider 5558ms; provider 4ms; metadata scans 32 (651.44ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6373.4ms; max 6389ms; pre-provider p95 5540.4ms
- agent CLI attribution: cold known 805ms / unattributed 4753ms; warm known 608ms / unattributed 4598ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2053.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 6/6/6
- Agent turns:
  - cold: total 6389ms; pre-provider 5558ms; provider 4ms; post-provider 827ms; response true
    - active window: metadata scans 22 (424.24ms total, max 46.88ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5558ms; provider 4ms; post-provider 827ms; unknown 3689.23ms; source plugins.metadata.scan 1107.9ms; agent.prepare 760.87ms
  - warm: total 6077ms; pre-provider 5206ms; provider 2ms; post-provider 869ms; response true
    - active window: metadata scans 10 (227.2ms total, max 45.29ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5206ms; provider 2ms; post-provider 869ms; unknown 3337.23ms; source plugins.metadata.scan 1107.9ms; agent.prepare 760.87ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5558 ms | 805 ms | 4753 ms | 4 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260818-052002-9deaee/kova-agent-cold-warm-message-2c26dd1d-kova-260818-052002-9deaee/openclaw/timeline.jsonl |
  | warm | 5206 ms | 608 ms | 4598 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260818-052002-9deaee/kova-agent-cold-warm-message-2c26dd1d-kova-260818-052002-9deaee/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x18, `startup` x2, `agent.startup` x2 | 22 | 0 | 423 ms | 47 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 382 ms | 235 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 381 ms | 170 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x6, `startup` x2, `agent.startup` x2 | 10 | 0 | 227 ms | 46 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260818-052002-9deaee-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260818-052002-9deaee-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-deep-profile/kova-260818-052002-9deaee-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260818-052002-9deaee/kova-gateway-performance-man-d48bd949-kova-260818-052002-9deaee
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-deep-profile/artifacts/kova-260818-052002-9deaee/kova-agent-cold-warm-message-2c26dd1d-kova-260818-052002-9deaee

## Target Cleanup

- Runtime: `kova-local-msy7rfo6-3xm-60438c10`
- Result: removed
- Duration: 504ms

