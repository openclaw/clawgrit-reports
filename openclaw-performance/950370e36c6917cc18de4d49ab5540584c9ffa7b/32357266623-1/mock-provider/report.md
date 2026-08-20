# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1122.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1122.4 MB, gateway-tree 1122.4 MB, command-tree 444.7 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1122.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1122.4 MB, gateway-tree 1122.4 MB, command-tree 444.7 MB |
| Blocking findings | 10 |
| Warnings | 0 |
| Records | 15 (PASS:5, FAIL:10) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260820-100759-0e6f70` |
| Generated | 2026-08-20T10:18:22.292Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.19.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 15 |
| Scenarios | 4 |
| States | 4 |
| PASS | 5 |
| FAIL | 10 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1122.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1122.4 MB, gateway-tree 1122.4 MB, command-tree 444.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6087 |
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1087.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1087.5 MB, gateway-tree 1087.4 MB, command-tree 478.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6950 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1131.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1131.1 MB, gateway-tree 1131.1 MB, command-tree 524.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7260 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1130.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1130.5 MB, gateway-tree 1130.5 MB, command-tree 479.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7000 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1090.7 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6467 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1060.7 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7342 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1098.3 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6774 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1087.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1087.1 MB, gateway-tree 1087.1 MB, command-tree 495.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6648 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1101 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101 MB, gateway-tree 1090.3 MB, command-tree 456.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6336 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1094.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1094.6 MB, gateway-tree 1094.6 MB, command-tree 492.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6282 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | PASS:1, FAIL:2 | 6950ms | 1087.5MB | n/a | 157% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | PASS:1, FAIL:2 | 7215ms | 1130.5MB | n/a | 159% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 6774ms | 1090.7MB | n/a | 159% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 169% | 6406ms | 5660ms | 6063ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 6336ms | 1094.6MB | n/a | 156% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | PASS | fresh-install/fresh |  | 7080ms | 992.5 MB | 1586.5 MB | n/a | n/a |  |
| 2 | FAIL | fresh-install/fresh |  | 6087ms | 1122.4 MB | 1638.7 MB | n/a | n/a | gateway peak RSS 1122.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1122.4 MB, gateway-tree 1122.4 MB, command-tree 444.7 MB |
| 3 | FAIL | fresh-install/fresh |  | 6950ms | 1087.5 MB | 1636.8 MB | n/a | n/a | gateway peak RSS 1087.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1087.5 MB, gateway-tree 1087.4 MB, command-tree 478.1 MB |
| 1 | PASS | fresh-install/onboarded-user |  | 7215ms | 1028.9 MB | 1618.9 MB | n/a | n/a |  |
| 2 | FAIL | fresh-install/onboarded-user |  | 7260ms | 1131.1 MB | 1721.6 MB | n/a | n/a | gateway peak RSS 1131.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1131.1 MB, gateway-tree 1131.1 MB, command-tree 524.3 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 7000ms | 1130.5 MB | 1679 MB | n/a | n/a | gateway peak RSS 1130.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1130.5 MB, gateway-tree 1130.5 MB, command-tree 479.3 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 6467ms | 1090.7 MB | 1568.3 MB | n/a | n/a | gateway peak RSS 1090.7 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 7342ms | 1060.7 MB | 1497.4 MB | n/a | n/a | gateway peak RSS 1060.7 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 6774ms | 1098.3 MB | 1466.4 MB | n/a | n/a | gateway peak RSS 1098.3 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1215 MB | 6406ms | 5007ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1177.2 MB | 5380ms | 5660ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1262.9 MB | 6788ms | 6425ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 6648ms | 1087.1 MB | 1651.9 MB | n/a | n/a | gateway peak RSS 1087.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1087.1 MB, gateway-tree 1087.1 MB, command-tree 495.1 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 6336ms | 1101 MB | 1618.4 MB | n/a | n/a | gateway peak RSS 1101 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101 MB, gateway-tree 1090.3 MB, command-tree 456.6 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 6282ms | 1094.6 MB | 1656.6 MB | n/a | n/a | gateway peak RSS 1094.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1094.6 MB, gateway-tree 1094.6 MB, command-tree 492.4 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1191.6 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 215.5% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-cli: RSS 560.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 215.5% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1131.1 MB (scenario fresh-install/onboarded-user); CPU 165% (scenario fresh-install/fresh)
- gateway-tree: RSS 1131.1 MB (scenario fresh-install/onboarded-user); CPU 165% (scenario fresh-install/fresh)
- status-cli: RSS 716.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 210.9% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 997.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 172% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 478.1 MB (scenario fresh-install/fresh); CPU 171% (scenario fresh-install/fresh)
- plugin-cli: RSS 417.6 MB (scenario fresh-install/fresh); CPU 158% (scenario fresh-install/onboarded-user)

## Selected Sample Details

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-fresh-r2-da880701-kova-260820-100759-0e6f70
Measurements:
- startup: listening 5284ms; health 6087ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 2ms; post-ready p95 4ms; failures 21; final failures 0; slowest startup-sample/provision 803ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1122.4 MB; tracked total 1638.7 MB; max CPU 157%; samples 15; roles gateway 1122.4MB/157%, command-tree 444.7MB/157%, gateway-tree 1122.4MB/157%, model-cli 444.7MB/157%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 854.82ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1122.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1122.4 MB, gateway-tree 1122.4 MB, command-tree 444.7 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-fresh-r3-82f8bdbd-kova-260820-100759-0e6f70
Measurements:
- startup: listening 5787ms; health 6950ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 2ms; post-ready p95 7ms; failures 23; final failures 0; slowest startup-sample/provision 1163ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1087.5 MB; tracked total 1636.8 MB; max CPU 165%; samples 15; roles gateway 1087.5MB/165%, gateway-tree 1087.4MB/165%, command-tree 478.1MB/160%, model-cli 478.1MB/160%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1118.22ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1087.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1087.5 MB, gateway-tree 1087.4 MB, command-tree 478.1 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-onboarded-f9c24855-kova-260820-100759-0e6f70
Measurements:
- startup: listening 6299ms; health 7260ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 2ms; post-ready p95 4ms; failures 25; final failures 0; slowest startup-sample/provision 961ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1131.1 MB; tracked total 1721.6 MB; max CPU 162%; samples 16; roles gateway 1131.1MB/162%, gateway-tree 1131.1MB/162%, command-tree 524.3MB/160%, status-cli 524.3MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1013.13ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1131.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1131.1 MB, gateway-tree 1131.1 MB, command-tree 524.3 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-onboarded-fe872c26-kova-260820-100759-0e6f70
Measurements:
- startup: listening 5799ms; health 7000ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 3ms; post-ready p95 11ms; failures 23; final failures 0; slowest startup-sample/provision 1201ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1130.5 MB; tracked total 1679 MB; max CPU 159%; samples 16; roles gateway 1130.5MB/159%, gateway-tree 1130.5MB/159%, command-tree 479.3MB/158%, status-cli 479.3MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1111.8ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1130.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1130.5 MB, gateway-tree 1130.5 MB, command-tree 479.3 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-bundled-plugin-startup-4a0cbdf7-kova-260820-100759-0e6f70
Measurements:
- startup: listening 5538ms; health 6467ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 929ms; post-ready p95 3ms; failures 36; final failures 0; slowest startup-sample/restart 1094ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1090.7 MB; tracked total 1568.3 MB; max CPU 158%; samples 12; roles gateway 1090.7MB/158%, command-tree 408.6MB/158%, gateway-tree 1088.3MB/158%, plugin-cli 408.6MB/158%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 969.37ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1090.7 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-bundled-plugin-startup-809ede2b-kova-260820-100759-0e6f70
Measurements:
- startup: listening 6303ms; health 7342ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 3ms; post-ready p95 5ms; failures 40; final failures 0; slowest startup-sample/restart 1299ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1060.7 MB; tracked total 1497.4 MB; max CPU 164%; samples 13; roles gateway 1060.7MB/164%, gateway-tree 1009.1MB/164%, command-tree 416.9MB/151%, plugin-cli 416.9MB/151%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1259.39ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1060.7 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-bundled-plugin-startup-5377119f-kova-260820-100759-0e6f70
Measurements:
- startup: listening 5792ms; health 6774ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 982ms; post-ready p95 5ms; failures 37; final failures 0; slowest startup-sample/restart 1038ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1098.3 MB; tracked total 1466.4 MB; max CPU 159%; samples 12; roles gateway 1098.3MB/159%, gateway-tree 985.2MB/159%, command-tree 409.9MB/152%, plugin-cli 409.9MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 993.57ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1098.3 MB exceeded threshold 1000 MB

### agent-cold-warm-message sample 1

- Status: PASS
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-agent-cold-warm-message-8e2a29af-kova-260820-100759-0e6f70
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v3; agent-process RSS 948.6 MB; tracked total 1215 MB; max CPU 168%; samples 18; roles command-tree 1143.4MB/207.5%, agent-cli 512.6MB/207.5%, agent-process 948.6MB/168%, status-cli 716.5MB/194.6%
- agent: turn 6406ms; cold/warm 6406ms/5007ms; cold-warm delta 1399ms; pre-provider 6063ms; provider 3ms; metadata scans 70 (1493.72ms); event-loop n/a; polls 0; cleanup n/a; diagnosis agent-latency-attributed; leaks 0
- Agent turn stats: count 2; p95 6336.05ms; max 6406ms; pre-provider p95 5999.4ms
- agent CLI attribution: cold known 1145ms / unattributed 4918ms; warm known 682ms / unattributed 4109ms
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 2389.04ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Agent turns:
  - cold: total 6406ms; pre-provider 6063ms; provider 3ms; post-provider 340ms; response true
    - active window: metadata scans 41 (965.3ms total, max 58.71ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 6063ms; provider 3ms; post-provider 340ms; unknown 3754.86ms; source plugins.metadata.scan 1916.34ms; agent.prepare 391.8ms
  - warm: total 5007ms; pre-provider 4791ms; provider 1ms; post-provider 215ms; response true
    - active window: metadata scans 29 (528.42ms total, max 52.12ms); event-loop samples 0 max unknown
    - breakdown: pre-provider 4791ms; provider 1ms; post-provider 215ms; unknown 2482.86ms; source plugins.metadata.scan 1916.34ms; agent.prepare 391.8ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | 6063 ms | 1145 ms | 4918 ms | 3 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-agent-cold-warm-message-8e2a29af-kova-260820-100759-0e6f70/openclaw/timeline.jsonl |
  | warm | 4791 ms | 682 ms | 4109 ms | 1 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-agent-cold-warm-message-8e2a29af-kova-260820-100759-0e6f70/openclaw/timeline.jsonl |

  | turn | span | phase(s) | count | errors | clipped | max |
  |---|---|---|---:|---:|---:|---:|
  | cold | `plugins.metadata.scan` | `cli.command-startup` x21, `startup` x10, `agent.startup` x8 | 39 | 0 | 927 ms | 59 ms |
  | cold | `agent.prepare` | `agent.prepare` x10 | 10 | 0 | 218 ms | 72 ms |
  | warm | `plugins.metadata.scan` | `cli.command-startup` x9, `startup` x10, `agent.startup` x8 | 27 | 0 | 507 ms | 52 ms |
  | warm | `agent.prepare` | `agent.prepare` x8 | 8 | 0 | 175 ms | 59 ms |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-100759-0e6f70-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-100759-0e6f70-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-100759-0e6f70-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-fresh-r1-697fad55-kova-260820-100759-0e6f70
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-fresh-r2-da880701-kova-260820-100759-0e6f70
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-fresh-r3-82f8bdbd-kova-260820-100759-0e6f70
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-onboarded-9f99e904-kova-260820-100759-0e6f70
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-onboarded-f9c24855-kova-260820-100759-0e6f70
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-fresh-install-onboarded-fe872c26-kova-260820-100759-0e6f70
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-bundled-plugin-startup-4a0cbdf7-kova-260820-100759-0e6f70
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-bundled-plugin-startup-809ede2b-kova-260820-100759-0e6f70
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-100759-0e6f70/kova-bundled-plugin-startup-5377119f-kova-260820-100759-0e6f70
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mt1cxfgy-3x6-66e9bb57`
- Result: removed
- Duration: 595ms

