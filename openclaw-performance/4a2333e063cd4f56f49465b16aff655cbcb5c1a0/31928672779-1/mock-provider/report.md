# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1096.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1096.8 MB, gateway-tree 1096.7 MB, command-tree 473.5 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1096.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1096.8 MB, gateway-tree 1096.7 MB, command-tree 473.5 MB |
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
| Run ID | `kova-260816-051848-a946b7` |
| Generated | 2026-08-16T05:25:41.149Z |
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
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1096.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1096.8 MB, gateway-tree 1096.7 MB, command-tree 473.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4954 |
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1093.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1093.3 MB, gateway-tree 1093.2 MB, command-tree 468.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4477 |
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1105.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1105.1 MB, gateway-tree 1105.1 MB, command-tree 465.9 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4383 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1103 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1103 MB, gateway-tree 1102.9 MB, command-tree 465.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4475 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1098.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1098.2 MB, gateway-tree 1098.2 MB, command-tree 465 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4445 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1108.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1108.5 MB, gateway-tree 1108.5 MB, command-tree 466.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4424 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1104.4 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4471 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1097.4 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4530 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1109.1 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4489 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1142 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1142 MB, gateway-tree 1103.4 MB, command-tree 472.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4475 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1133.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1133.9 MB, gateway-tree 1107.4 MB, command-tree 480.6 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4485 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1090.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1090.6 MB, gateway-tree 1090.6 MB, command-tree 469.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4449 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 4477ms | 1096.8MB | n/a | 161% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 4445ms | 1103MB | n/a | 156% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 4489ms | 1104.4MB | n/a | 160% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153% | 3267ms | 2966ms | 3151ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4475ms | 1133.9MB | n/a | 157% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 4954ms | 1096.8 MB | 1641.6 MB | n/a | n/a | gateway peak RSS 1096.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1096.8 MB, gateway-tree 1096.7 MB, command-tree 473.5 MB |
| 2 | FAIL | fresh-install/fresh |  | 4477ms | 1093.3 MB | 1632.5 MB | n/a | n/a | gateway peak RSS 1093.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1093.3 MB, gateway-tree 1093.2 MB, command-tree 468.3 MB |
| 3 | FAIL | fresh-install/fresh |  | 4383ms | 1105.1 MB | 1641.2 MB | n/a | n/a | gateway peak RSS 1105.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1105.1 MB, gateway-tree 1105.1 MB, command-tree 465.9 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 4475ms | 1103 MB | 1639.8 MB | n/a | n/a | gateway peak RSS 1103 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1103 MB, gateway-tree 1102.9 MB, command-tree 465.5 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 4445ms | 1098.2 MB | 1632.7 MB | n/a | n/a | gateway peak RSS 1098.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1098.2 MB, gateway-tree 1098.2 MB, command-tree 465 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 4424ms | 1108.5 MB | 1642.3 MB | n/a | n/a | gateway peak RSS 1108.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1108.5 MB, gateway-tree 1108.5 MB, command-tree 466.4 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4471ms | 1104.4 MB | 1181.5 MB | n/a | n/a | gateway peak RSS 1104.4 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 4530ms | 1097.4 MB | 1188.9 MB | n/a | n/a | gateway peak RSS 1097.4 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 4489ms | 1109.1 MB | 1186.1 MB | n/a | n/a | gateway peak RSS 1109.1 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1200.4 MB | 3272ms | 2974ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1169.2 MB | 3267ms | 2966ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1175.6 MB | 3248ms | 2954ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4475ms | 1142 MB | 1647.4 MB | n/a | n/a | gateway peak RSS 1142 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1142 MB, gateway-tree 1103.4 MB, command-tree 472.6 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4485ms | 1133.9 MB | 1659.4 MB | n/a | n/a | gateway peak RSS 1133.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1133.9 MB, gateway-tree 1107.4 MB, command-tree 480.6 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4449ms | 1090.6 MB | 1631.3 MB | n/a | n/a | gateway peak RSS 1090.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1090.6 MB, gateway-tree 1090.6 MB, command-tree 469.2 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1142 MB (scenario gateway-performance/many-bundled-plugins); CPU 162% (scenario fresh-install/fresh)
- command-tree: RSS 1129 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.6% (scenario agent-cold-warm-message/mock-openai-provider)
- status-cli: RSS 616.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 176.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1109.1 MB (scenario bundled-plugin-startup/fresh); CPU 162% (scenario fresh-install/fresh)
- agent-process: RSS 943.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 153% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 480.6 MB (scenario gateway-performance/many-bundled-plugins); CPU 147% (scenario gateway-performance/many-bundled-plugins)
- plugin-cli: RSS 459.9 MB (scenario fresh-install/fresh); CPU 150% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 186.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 26.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-fresh-r1-697fad55-kova-260816-051848-a946b7
Measurements:
- startup: listening 4523ms; health 4954ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 431ms; post-ready p95 3ms; failures 18; final failures 0; slowest startup-sample/provision 431ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1096.8 MB; tracked total 1641.6 MB; max CPU 156%; samples 15; roles gateway 1096.8MB/156%, gateway-tree 1096.7MB/156%, command-tree 473.5MB/149%, model-cli 473.5MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 605.1ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1096.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1096.8 MB, gateway-tree 1096.7 MB, command-tree 473.5 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-fresh-r2-da880701-kova-260816-051848-a946b7
Measurements:
- startup: listening 4023ms; health 4477ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 454ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 454ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1093.3 MB; tracked total 1632.5 MB; max CPU 161%; samples 15; roles gateway 1093.3MB/161%, gateway-tree 1093.2MB/161%, command-tree 468.3MB/148%, model-cli 468.3MB/144%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 554.28ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1093.3 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1093.3 MB, gateway-tree 1093.2 MB, command-tree 468.3 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-051848-a946b7
Measurements:
- startup: listening 3772ms; health 4383ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 611ms; post-ready p95 3ms; failures 15; final failures 0; slowest startup-sample/provision 611ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1105.1 MB; tracked total 1641.2 MB; max CPU 162%; samples 15; roles gateway 1105.1MB/162%, gateway-tree 1105.1MB/162%, command-tree 465.9MB/148%, model-cli 465.9MB/141%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 546.09ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1105.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1105.1 MB, gateway-tree 1105.1 MB, command-tree 465.9 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-onboarded-9f99e904-kova-260816-051848-a946b7
Measurements:
- startup: listening 4018ms; health 4475ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 457ms; post-ready p95 2ms; failures 16; final failures 0; slowest startup-sample/provision 457ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1103 MB; tracked total 1639.8 MB; max CPU 156%; samples 15; roles gateway 1103MB/156%, gateway-tree 1102.9MB/156%, command-tree 465.5MB/150%, model-cli 465.5MB/144%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 565.19ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1103 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1103 MB, gateway-tree 1102.9 MB, command-tree 465.5 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-onboarded-f9c24855-kova-260816-051848-a946b7
Measurements:
- startup: listening 4022ms; health 4445ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 423ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 423ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1098.2 MB; tracked total 1632.7 MB; max CPU 159%; samples 15; roles gateway 1098.2MB/159%, gateway-tree 1098.2MB/159%, command-tree 465MB/146%, model-cli 465MB/139%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 550.46ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1098.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1098.2 MB, gateway-tree 1098.2 MB, command-tree 465 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-onboarded-fe872c26-kova-260816-051848-a946b7
Measurements:
- startup: listening 4018ms; health 4424ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 406ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 406ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1108.5 MB; tracked total 1642.3 MB; max CPU 156%; samples 14; roles gateway 1108.5MB/156%, gateway-tree 1108.5MB/156%, command-tree 466.4MB/144%, model-cli 466.4MB/144%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 540.7ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1108.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1108.5 MB, gateway-tree 1108.5 MB, command-tree 466.4 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-051848-a946b7
Measurements:
- startup: listening 4015ms; health 4471ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 427ms; post-ready p95 2ms; failures 26; final failures 0; slowest startup-sample/gateway-start 456ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1104.4 MB; tracked total 1181.5 MB; max CPU 162%; samples 11; roles gateway 1104.4MB/162%, gateway-tree 1104.4MB/162%, mock-provider 71.2MB/14.2%, runtime-staging 71.2MB/14.2%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 558.06ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1104.4 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-bundled-plugin-startup-809ede2b-kova-260816-051848-a946b7
Measurements:
- startup: listening 4015ms; health 4530ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 515ms; post-ready p95 2ms; failures 25; final failures 0; slowest startup-sample/restart 613ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1097.4 MB; tracked total 1188.9 MB; max CPU 160%; samples 11; roles gateway 1097.4MB/160%, gateway-tree 1097.4MB/160%, mock-provider 70.9MB/17.8%, runtime-staging 70.9MB/17.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 551.44ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1097.4 MB exceeded threshold 1000 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-051848-a946b7-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-051848-a946b7-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-051848-a946b7-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-fresh-r1-697fad55-kova-260816-051848-a946b7
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-fresh-r2-da880701-kova-260816-051848-a946b7
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-051848-a946b7
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-onboarded-9f99e904-kova-260816-051848-a946b7
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-onboarded-f9c24855-kova-260816-051848-a946b7
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-fresh-install-onboarded-fe872c26-kova-260816-051848-a946b7
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-051848-a946b7
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-bundled-plugin-startup-809ede2b-kova-260816-051848-a946b7
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-051848-a946b7/kova-bundled-plugin-startup-5377119f-kova-260816-051848-a946b7
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msvcu4r6-3z7-fe61fbd5`
- Result: removed
- Duration: 427ms

