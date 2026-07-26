# Kova OpenClaw Runtime Report

> **◐ [INCOMPLETE]** — invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn

## Verdict

| Field | Value |
|---|---|
| Verdict | INCOMPLETE |
| Reason | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn |
| Blocking findings | 1 |
| Warnings | 0 |
| Records | 1 (INCOMPLETE:1) |

## Proof Completeness

- Completeness: incomplete: 1
- Required obligations: 22 total, 1 missing, 0 failed
- Categories: command: 7, invariant: 12, artifact: 1, cleanup: 1, collector: 1

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | cold-agent-turn had no valid provider HTTP response status evidence |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260726-061325-13232d` |
| Generated | 2026-07-26T06:14:35.614Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
| Repeat / parallel | 1 / 1 |
| Auth | live (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 1 |
| Scenarios | 1 |
| States | 1 |
| INCOMPLETE | 1 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| incomplete | OpenClaw | agent-cold-warm-message/mock-openai-provider | invariant proof missing: mock provider request/response evidence was captured and attributed to every successful agent turn | cold-agent-turn had no valid provider HTTP response status evidence; /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260726-061325-13232d/kova-agent-cold-warm-message-2c26dd1d-kova-260726-061325-13232d/provider/provider-evidence.json |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| agent-cold-warm-message/mock-openai-provider | 1 | INCOMPLETE:1 | n/a | 0MB | n/a | 149.4% | 7851ms | 8430ms | 5362ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | INCOMPLETE | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 991.3 MB | 7851ms | 8430ms |  |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 991.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 149.4% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 991.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.8% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 991.3 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 149.4% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 856.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152.8% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### agent-cold-warm-message sample 1

- Status: INCOMPLETE
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260726-061325-13232d/kova-agent-cold-warm-message-2c26dd1d-kova-260726-061325-13232d
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 991.3 MB; tracked total 991.3 MB; max CPU 149.4%; samples 23; roles agent-cli 991.3MB/149.4%, command-tree 991.3MB/152.8%, agent-process 991.3MB/149.4%, status-cli 856.8MB/152.8%
- agent: turn 8430ms; cold/warm 7851ms/8430ms; cold-warm delta 0ms; pre-provider 5439ms; provider 1756ms; metadata scans 114 (923.38ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 8401.05ms; max 8430ms; pre-provider p95 5435.15ms
- agent CLI attribution: cold known 358ms / unattributed 5004ms; warm known 361ms / unattributed 5078ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 64.58ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 7851ms; pre-provider 5362ms; provider 1217ms; post-provider 1272ms; response true
    - active window: metadata scans 57 (462.01ms total, max 64.58ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5362ms; provider 1217ms; post-provider 1272ms; unknown 3942.25ms; source plugins.metadata.scan 1419.75ms
  - warm: total 8430ms; pre-provider 5439ms; provider 1756ms; post-provider 1235ms; response true
    - active window: metadata scans 57 (461.37ms total, max 62.94ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 5439ms; provider 1756ms; post-provider 1235ms; unknown 4019.25ms; source plugins.metadata.scan 1419.75ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 5362 ms | 358 ms | 5004 ms | 1217 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260726-061325-13232d/kova-agent-cold-warm-message-2c26dd1d-kova-260726-061325-13232d/openclaw/timeline.jsonl |
  | warm | 5439 ms | 361 ms | 5078 ms | 1756 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260726-061325-13232d/kova-agent-cold-warm-message-2c26dd1d-kova-260726-061325-13232d/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `startup` x40 | 40 | 0 | 358 ms | 64 ms |
  | warm | `plugins.metadata.scan` | `startup` x40 | 40 | 0 | 361 ms | 63 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260726-061325-13232d-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260726-061325-13232d-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/live-openai-candidate/kova-260726-061325-13232d-diagnostic.summary.json
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/live-openai-candidate/artifacts/kova-260726-061325-13232d/kova-agent-cold-warm-message-2c26dd1d-kova-260726-061325-13232d

## Target Cleanup

- Runtime: `kova-local-ms1ejhjm-41j-f699ad47`
- Result: removed
- Duration: 370ms

