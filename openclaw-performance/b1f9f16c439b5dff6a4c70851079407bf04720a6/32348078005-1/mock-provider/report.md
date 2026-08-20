# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1075.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1075.4 MB, gateway-tree 1075.4 MB, command-tree 521.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1075.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1075.4 MB, gateway-tree 1075.4 MB, command-tree 521.5 MB |
| Blocking findings | 12 |
| Warnings | 0 |
| Records | 15 (FAIL:12, PASS:3) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260820-081837-8bb527` |
| Generated | 2026-08-20T08:27:53.247Z |
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
| FAIL | 12 |
| PASS | 3 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1075.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1075.4 MB, gateway-tree 1075.4 MB, command-tree 521.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 7208 |
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1088.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1088.1 MB, gateway-tree 1088 MB, command-tree 448.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6029 |
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1114.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.6 MB, gateway-tree 1114.6 MB, command-tree 478.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6587 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1084.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1084.2 MB, gateway-tree 1084.2 MB, command-tree 488.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6968 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1057.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1057.7 MB, gateway-tree 1057.6 MB, command-tree 467.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6052 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1085.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1085.3 MB, gateway-tree 1085.2 MB, command-tree 490.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5456 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1078 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5531 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1056.5 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6055 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1077.9 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6181 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1082.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1082.4 MB, gateway-tree 1061.8 MB, command-tree 458.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6161 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1078.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1078.9 MB, gateway-tree 1057.1 MB, command-tree 441.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5856 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1104 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104 MB, gateway-tree 1049.6 MB, command-tree 488.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 6144 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 6587ms | 1088.1MB | n/a | 155% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 6052ms | 1084.2MB | n/a | 152% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 6055ms | 1077.9MB | n/a | 155% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 160% | 4460ms | 4208ms | 4236ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 6144ms | 1082.4MB | n/a | 151% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 7208ms | 1075.4 MB | 1668.3 MB | n/a | n/a | gateway peak RSS 1075.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1075.4 MB, gateway-tree 1075.4 MB, command-tree 521.5 MB |
| 2 | FAIL | fresh-install/fresh |  | 6029ms | 1088.1 MB | 1608 MB | n/a | n/a | gateway peak RSS 1088.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1088.1 MB, gateway-tree 1088 MB, command-tree 448.5 MB |
| 3 | FAIL | fresh-install/fresh |  | 6587ms | 1114.6 MB | 1662.5 MB | n/a | n/a | gateway peak RSS 1114.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.6 MB, gateway-tree 1114.6 MB, command-tree 478.6 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 6968ms | 1084.2 MB | 1643.6 MB | n/a | n/a | gateway peak RSS 1084.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1084.2 MB, gateway-tree 1084.2 MB, command-tree 488.5 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 6052ms | 1057.7 MB | 1596.6 MB | n/a | n/a | gateway peak RSS 1057.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1057.7 MB, gateway-tree 1057.6 MB, command-tree 467.4 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 5456ms | 1085.3 MB | 1647.4 MB | n/a | n/a | gateway peak RSS 1085.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1085.3 MB, gateway-tree 1085.2 MB, command-tree 490.8 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 5531ms | 1078 MB | 1154.4 MB | n/a | n/a | gateway peak RSS 1078 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 6055ms | 1056.5 MB | 1133.8 MB | n/a | n/a | gateway peak RSS 1056.5 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 6181ms | 1077.9 MB | 1108.1 MB | n/a | n/a | gateway peak RSS 1077.9 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1188.8 MB | 4900ms | 4208ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1162.5 MB | 4460ms | 4028ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1263 MB | 4383ms | 4314ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 6161ms | 1082.4 MB | 1591.3 MB | n/a | n/a | gateway peak RSS 1082.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1082.4 MB, gateway-tree 1061.8 MB, command-tree 458.1 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 5856ms | 1078.9 MB | 1569.4 MB | n/a | n/a | gateway peak RSS 1078.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1078.9 MB, gateway-tree 1057.1 MB, command-tree 441.6 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 6144ms | 1104 MB | 1608.6 MB | n/a | n/a | gateway peak RSS 1104 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104 MB, gateway-tree 1049.6 MB, command-tree 488.3 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- command-tree: RSS 1191.9 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway: RSS 1114.6 MB (scenario fresh-install/fresh); CPU 159% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 716.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 196.8% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1114.6 MB (scenario fresh-install/fresh); CPU 159% (scenario bundled-plugin-startup/fresh)
- agent-cli: RSS 574 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 174.1% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 997.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 160% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 490.8 MB (scenario fresh-install/onboarded-user); CPU 162% (scenario fresh-install/fresh)
- plugin-cli: RSS 425.2 MB (scenario fresh-install/onboarded-user); CPU 158% (scenario fresh-install/fresh)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-fresh-r1-697fad55-kova-260820-081837-8bb527
Measurements:
- startup: listening 6054ms; health 7208ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 4ms; post-ready p95 4ms; failures 24; final failures 0; slowest startup-sample/provision 1154ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1075.4 MB; tracked total 1668.3 MB; max CPU 150%; samples 16; roles gateway 1075.4MB/150%, command-tree 521.5MB/158%, gateway-tree 1075.4MB/150%, plugin-cli 409.8MB/158%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1283.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1075.4 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1075.4 MB, gateway-tree 1075.4 MB, command-tree 521.5 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-fresh-r2-da880701-kova-260820-081837-8bb527
Measurements:
- startup: listening 5034ms; health 6029ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 1ms; post-ready p95 4ms; failures 20; final failures 0; slowest startup-sample/provision 995ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1088.1 MB; tracked total 1608 MB; max CPU 155%; samples 15; roles gateway 1088.1MB/155%, gateway-tree 1088MB/155%, command-tree 448.5MB/152%, model-cli 448.5MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1090.15ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1088.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1088.1 MB, gateway-tree 1088 MB, command-tree 448.5 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-fresh-r3-82f8bdbd-kova-260820-081837-8bb527
Measurements:
- startup: listening 5283ms; health 6587ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 1ms; post-ready p95 3ms; failures 21; final failures 0; slowest startup-sample/provision 1304ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1114.6 MB; tracked total 1662.5 MB; max CPU 157%; samples 15; roles gateway 1114.6MB/157%, command-tree 478.6MB/162%, gateway-tree 1114.6MB/157%, model-cli 478.6MB/162%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1278.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1114.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.6 MB, gateway-tree 1114.6 MB, command-tree 478.6 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-onboarded-9f99e904-kova-260820-081837-8bb527
Measurements:
- startup: listening 5789ms; health 6968ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 1ms; post-ready p95 3ms; failures 23; final failures 0; slowest startup-sample/provision 1179ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1084.2 MB; tracked total 1643.6 MB; max CPU 154%; samples 15; roles gateway 1084.2MB/154%, gateway-tree 1084.2MB/154%, command-tree 488.5MB/153%, model-cli 488.5MB/152%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1244.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1084.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1084.2 MB, gateway-tree 1084.2 MB, command-tree 488.5 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-onboarded-f9c24855-kova-260820-081837-8bb527
Measurements:
- startup: listening 5033ms; health 6052ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 4ms; post-ready p95 3ms; failures 20; final failures 0; slowest startup-sample/provision 1019ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1057.7 MB; tracked total 1596.6 MB; max CPU 152%; samples 15; roles gateway 1057.7MB/152%, command-tree 467.4MB/153%, gateway-tree 1057.6MB/152%, model-cli 467.4MB/153%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1030.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1057.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1057.7 MB, gateway-tree 1057.6 MB, command-tree 467.4 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-onboarded-fe872c26-kova-260820-081837-8bb527
Measurements:
- startup: listening 4528ms; health 5456ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 928ms; post-ready p95 3ms; failures 18; final failures 0; slowest startup-sample/provision 928ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1085.3 MB; tracked total 1647.4 MB; max CPU 150%; samples 15; roles gateway 1085.3MB/150%, gateway-tree 1085.2MB/150%, command-tree 490.8MB/147%, model-cli 490.8MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 1000.07ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1085.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1085.3 MB, gateway-tree 1085.2 MB, command-tree 490.8 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-bundled-plugin-startup-4a0cbdf7-kova-260820-081837-8bb527
Measurements:
- startup: listening 4522ms; health 5531ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 964ms; post-ready p95 2ms; failures 29; final failures 0; slowest startup-sample/gateway-start 1009ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1078 MB; tracked total 1154.4 MB; max CPU 154%; samples 11; roles gateway 1078MB/154%, gateway-tree 1078MB/154%, mock-provider 70.9MB/16.1%, runtime-staging 70.9MB/16.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1071.77ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1078 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-bundled-plugin-startup-809ede2b-kova-260820-081837-8bb527
Measurements:
- startup: listening 5030ms; health 6055ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 1025ms; post-ready p95 4ms; failures 31; final failures 0; slowest startup-sample/restart 1146ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1056.5 MB; tracked total 1133.8 MB; max CPU 159%; samples 11; roles gateway 1056.5MB/159%, gateway-tree 1056.5MB/159%, mock-provider 71.4MB/17.1%, runtime-staging 71.4MB/17.1%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 1055.86ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1056.5 MB exceeded threshold 1000 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-081837-8bb527-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-081837-8bb527-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260820-081837-8bb527-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-fresh-r1-697fad55-kova-260820-081837-8bb527
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-fresh-r2-da880701-kova-260820-081837-8bb527
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-fresh-r3-82f8bdbd-kova-260820-081837-8bb527
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-onboarded-9f99e904-kova-260820-081837-8bb527
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-onboarded-f9c24855-kova-260820-081837-8bb527
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-fresh-install-onboarded-fe872c26-kova-260820-081837-8bb527
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-bundled-plugin-startup-4a0cbdf7-kova-260820-081837-8bb527
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-bundled-plugin-startup-809ede2b-kova-260820-081837-8bb527
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260820-081837-8bb527/kova-bundled-plugin-startup-5377119f-kova-260820-081837-8bb527
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-mt190ser-3x0-ed7865e4`
- Result: removed
- Duration: 533ms

