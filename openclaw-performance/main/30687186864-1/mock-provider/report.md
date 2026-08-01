# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 18 |
| Warnings | 0 |
| Records | 6 (FAIL:6) |

## Proof Completeness

- Completeness: incomplete: 3, complete: 3
- Required obligations: 109 total, 3 missing, 0 failed
- Categories: command: 55, artifact: 6, cleanup: 6, collector: 6, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260801-061018-30ae21` |
| Generated | 2026-08-01T06:14:41.744Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.1 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 6 |
| Scenarios | 2 |
| States | 2 |
| FAIL | 6 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 921.8 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 921.8 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 935.8 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 935.8 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 955.6 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMb: 955.6 |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1021.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1021.1 MB, agent-process 1021.1 MB, command-tree 1021.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1021.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-cli peak RSS 1021.1 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1021.1 |
| fail | OpenClaw | agent-cold-warm-message/mock-openai-provider | agent-process peak RSS 1021.1 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; agent-cliRssMb: 1021.1 |
| info | Kova | report | 6 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 935.8MB | n/a | 154% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 172.8% | 3274ms | 3291ms | 3134ms |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 921.8 MB | 1681.4 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 935.8 MB | 1686.2 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 955.6 MB | 1707.7 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1021.1 MB | 3296ms | 3305ms | agent-cli peak RSS 1021.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1021.1 MB, agent-process 1021.1 MB, command-tree 1021.1 MB |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1028.1 MB | 3274ms | 3291ms | agent-cli peak RSS 1028.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1028.1 MB, agent-process 1028.1 MB, command-tree 1028.1 MB |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1014 MB | 3252ms | 3239ms | agent-cli peak RSS 1014 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014 MB, agent-process 1014 MB, command-tree 1014 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- agent-cli: RSS 1028.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 1028.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- command-tree: RSS 1028.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 955.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 914.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 955.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 154% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 759.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 152% (scenario gateway-performance/many-bundled-plugins)
- model-cli: RSS 665.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 144% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-gateway-performance-man-005107f3-kova-260801-061018-30ae21
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 200; final failures not-collected; slowest startup-sample/cold-start 268ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 921.8 MB; tracked total 1681.4 MB; max CPU 153%; samples 20; roles gateway 921.8MB/153%, command-tree 759.6MB/153%, gateway-tree 921.8MB/153%, plugin-cli 759.6MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span plugins.load 308.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-gateway-performance-man-1e8be6a8-kova-260801-061018-30ae21
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 199; final failures not-collected; slowest startup-sample/cold-start 43ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 935.8 MB; tracked total 1686.2 MB; max CPU 154%; samples 19; roles gateway 935.8MB/154%, command-tree 752.3MB/154%, gateway-tree 935.8MB/154%, status-cli 752.3MB/154%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span plugins.load 322.59ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-gateway-performance-man-958fde53-kova-260801-061018-30ae21
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 1
- health: startup p95 1ms; post-ready p95 2ms; failures at least 200; final failures not-collected; slowest startup-sample/cold-start 246ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 955.6 MB; tracked total 1707.7 MB; max CPU 154%; samples 19; roles gateway 955.6MB/154%, gateway-tree 955.6MB/154%, command-tree 752.9MB/153%, status-cli 752.9MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span plugins.load 305.94ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-8e2a29af-kova-260801-061018-30ae21
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1021.1 MB; tracked total 1021.1 MB; max CPU 170.8%; samples 14; roles agent-cli 1021.1MB/170.8%, agent-process 1021.1MB/170.8%, command-tree 1021.1MB/170.8%, status-cli 914.8MB/170.6%
- agent: turn 3305ms; cold/warm 3296ms/3305ms; cold-warm delta 0ms; pre-provider 3185ms; provider 1ms; metadata scans 14 (146.29ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3304.55ms; max 3305ms; pre-provider p95 3184.6ms
- agent CLI attribution: cold known 206ms / unattributed 2971ms; warm known 199ms / unattributed 2986ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 45.23ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1021.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1021.1 MB, agent-process 1021.1 MB, command-tree 1021.1 MB
  - agent-cli peak RSS 1021.1 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1021.1 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3296ms; pre-provider 3177ms; provider 2ms; post-provider 117ms; response true
    - active window: metadata scans 7 (74.77ms total, max 33.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3177ms; provider 2ms; post-provider 117ms; unknown 2672.12ms; source agent.prepare 264.51ms; plugins.metadata.scan 240.37ms
  - warm: total 3305ms; pre-provider 3185ms; provider 1ms; post-provider 119ms; response true
    - active window: metadata scans 7 (71.52ms total, max 35.91ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3185ms; provider 1ms; post-provider 119ms; unknown 2680.12ms; source agent.prepare 264.51ms; plugins.metadata.scan 240.37ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3177 ms | 206 ms | 2971 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-8e2a29af-kova-260801-061018-30ae21/openclaw/timeline.jsonl |
  | warm | 3185 ms | 199 ms | 2986 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-8e2a29af-kova-260801-061018-30ae21/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 135 ms | 43 ms |
  | cold | `plugins.metadata.scan` | `startup` x6, `agent.prepare` | 7 | 0 | 75 ms | 33 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 131 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup` x6, `agent.prepare` | 7 | 0 | 72 ms | 36 ms |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-2ab680e0-kova-260801-061018-30ae21
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1028.1 MB; tracked total 1028.1 MB; max CPU 174.5%; samples 14; roles agent-cli 1028.1MB/174.5%, agent-process 1028.1MB/174.5%, command-tree 1028.1MB/174.5%, status-cli 895MB/174.5%
- agent: turn 3291ms; cold/warm 3274ms/3291ms; cold-warm delta 0ms; pre-provider 3168ms; provider 1ms; metadata scans 14 (139.95ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3290.15ms; max 3291ms; pre-provider p95 3166.2ms
- agent CLI attribution: cold known 208ms / unattributed 2924ms; warm known 198ms / unattributed 2970ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.prepare 44.6ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1028.1 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1028.1 MB, agent-process 1028.1 MB, command-tree 1028.1 MB
  - agent-cli peak RSS 1028.1 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1028.1 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3274ms; pre-provider 3132ms; provider 2ms; post-provider 140ms; response true
    - active window: metadata scans 7 (65.4ms total, max 31.85ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3132ms; provider 2ms; post-provider 140ms; unknown 2633.8ms; source agent.prepare 271.31ms; plugins.metadata.scan 226.89ms
  - warm: total 3291ms; pre-provider 3168ms; provider 1ms; post-provider 122ms; response true
    - active window: metadata scans 7 (74.55ms total, max 37.46ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3168ms; provider 1ms; post-provider 122ms; unknown 2669.8ms; source agent.prepare 271.31ms; plugins.metadata.scan 226.89ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3132 ms | 208 ms | 2924 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-2ab680e0-kova-260801-061018-30ae21/openclaw/timeline.jsonl |
  | warm | 3168 ms | 198 ms | 2970 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-2ab680e0-kova-260801-061018-30ae21/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x9 | 9 | 0 | 144 ms | 45 ms |
  | cold | `plugins.metadata.scan` | `startup` x6, `agent.prepare` | 7 | 0 | 68 ms | 32 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 127 ms | 38 ms |
  | warm | `plugins.metadata.scan` | `startup` x6, `agent.prepare` | 7 | 0 | 74 ms | 38 ms |

### agent-cold-warm-message sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-67b331a3-kova-260801-061018-30ae21
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 1014 MB; tracked total 1014 MB; max CPU 172.8%; samples 14; roles agent-cli 1014MB/172.8%, agent-process 1014MB/172.8%, command-tree 1014MB/172.8%, status-cli 913MB/172.5%
- agent: turn 3252ms; cold/warm 3252ms/3239ms; cold-warm delta 13ms; pre-provider 3134ms; provider 2ms; metadata scans 14 (150.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 3251.35ms; max 3252ms; pre-provider p95 3133.55ms
- agent CLI attribution: cold known 213ms / unattributed 2921ms; warm known 197ms / unattributed 2928ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span agent.prepare 43.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent-cli peak RSS 1014 MB exceeded threshold 1000 MB; observed role agent-cli; top RSS roles: agent-cli 1014 MB, agent-process 1014 MB, command-tree 1014 MB
  - agent-cli peak RSS 1014 MB exceeded threshold 1000 MB
  - agent-process peak RSS 1014 MB exceeded threshold 1000 MB
- Agent turns:
  - cold: total 3252ms; pre-provider 3134ms; provider 2ms; post-provider 116ms; response true
    - active window: metadata scans 7 (79.7ms total, max 33.28ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3134ms; provider 2ms; post-provider 116ms; unknown 2626.33ms; source agent.prepare 266.41ms; plugins.metadata.scan 241.26ms
  - warm: total 3239ms; pre-provider 3125ms; provider 1ms; post-provider 113ms; response true
    - active window: metadata scans 7 (70.94ms total, max 37.31ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 3125ms; provider 1ms; post-provider 113ms; unknown 2617.33ms; source agent.prepare 266.41ms; plugins.metadata.scan 241.26ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 3134 ms | 213 ms | 2921 ms | 2 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-67b331a3-kova-260801-061018-30ae21/openclaw/timeline.jsonl |
  | warm | 3125 ms | 197 ms | 2928 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-67b331a3-kova-260801-061018-30ae21/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 136 ms | 44 ms |
  | cold | `plugins.metadata.scan` | `startup` x6, `agent.prepare` | 7 | 0 | 80 ms | 33 ms |
  | warm | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 131 ms | 41 ms |
  | warm | `plugins.metadata.scan` | `startup` x6, `agent.prepare` | 7 | 0 | 69 ms | 37 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260801-061018-30ae21-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260801-061018-30ae21-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260801-061018-30ae21-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-gateway-performance-man-005107f3-kova-260801-061018-30ae21
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-gateway-performance-man-1e8be6a8-kova-260801-061018-30ae21
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-gateway-performance-man-958fde53-kova-260801-061018-30ae21
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-8e2a29af-kova-260801-061018-30ae21
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-2ab680e0-kova-260801-061018-30ae21
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260801-061018-30ae21/kova-agent-cold-warm-message-67b331a3-kova-260801-061018-30ae21

## Target Cleanup

- Runtime: `kova-local-ms9z2lhk-3yy-8ea78e42`
- Result: removed
- Duration: 368ms

