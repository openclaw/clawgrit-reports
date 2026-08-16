# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1240.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1240.1 MB, gateway-tree 1240.1 MB, command-tree 464 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1240.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1240.1 MB, gateway-tree 1240.1 MB, command-tree 464 MB |
| Blocking findings | 13 |
| Warnings | 0 |
| Records | 15 (FAIL:12, PASS:3) |

## Proof Completeness

- Completeness: complete: 15
- Required obligations: 226 total, 0 missing, 0 failed
- Categories: command: 145, artifact: 15, cleanup: 15, collector: 15, invariant: 36

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260816-041654-d92cc6` |
| Generated | 2026-08-16T04:23:52.942Z |
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
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1240.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1240.1 MB, gateway-tree 1240.1 MB, command-tree 464 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5054 |
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1213.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1213.2 MB, gateway-tree 1213.2 MB, command-tree 468.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4508 |
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1137.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1137.6 MB, gateway-tree 1137.6 MB, command-tree 466.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4454 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1165.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1165.9 MB, gateway-tree 1165.9 MB, command-tree 479.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4528 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1106 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1106 MB, gateway-tree 1106 MB, command-tree 483.8 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4426 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1101.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101.7 MB, gateway-tree 1101.7 MB, command-tree 476.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4465 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1094 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4403 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1134.4 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4446 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1140.5 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4365 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1272.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1272.7 MB, gateway-tree 1272.7 MB, command-tree 484 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4458 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway-tree peak RSS 1272.7 MB exceeded threshold 1200 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4458 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1102.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1102.6 MB, gateway-tree 1102.6 MB, command-tree 466.7 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4434 |
| info | Kova | report | 1 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 4508ms | 1213.2MB | n/a | 162% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 4465ms | 1106MB | n/a | 158% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 4403ms | 1134.4MB | n/a | 162% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 152% | 3282ms | 2933ms | 3162ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4458ms | 1137.5MB | n/a | 157% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 5054ms | 1240.1 MB | 1775.1 MB | n/a | n/a | gateway peak RSS 1240.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1240.1 MB, gateway-tree 1240.1 MB, command-tree 464 MB |
| 2 | FAIL | fresh-install/fresh |  | 4508ms | 1213.2 MB | 1752.9 MB | n/a | n/a | gateway peak RSS 1213.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1213.2 MB, gateway-tree 1213.2 MB, command-tree 468.4 MB |
| 3 | FAIL | fresh-install/fresh |  | 4454ms | 1137.6 MB | 1675.4 MB | n/a | n/a | gateway peak RSS 1137.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1137.6 MB, gateway-tree 1137.6 MB, command-tree 466.4 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 4528ms | 1165.9 MB | 1714.4 MB | n/a | n/a | gateway peak RSS 1165.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1165.9 MB, gateway-tree 1165.9 MB, command-tree 479.2 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 4426ms | 1106 MB | 1660.1 MB | n/a | n/a | gateway peak RSS 1106 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1106 MB, gateway-tree 1106 MB, command-tree 483.8 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 4465ms | 1101.7 MB | 1648.5 MB | n/a | n/a | gateway peak RSS 1101.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101.7 MB, gateway-tree 1101.7 MB, command-tree 476.4 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4403ms | 1094 MB | 1188 MB | n/a | n/a | gateway peak RSS 1094 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 4446ms | 1134.4 MB | 1170.5 MB | n/a | n/a | gateway peak RSS 1134.4 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 4365ms | 1140.5 MB | 1217.5 MB | n/a | n/a | gateway peak RSS 1140.5 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1174.4 MB | 3246ms | 2958ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1153.2 MB | 3282ms | 2933ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1178.5 MB | 3295ms | 2929ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4458ms | 1272.7 MB | 1828.2 MB | n/a | n/a | gateway peak RSS 1272.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1272.7 MB, gateway-tree 1272.7 MB, command-tree 484 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4434ms | 1102.6 MB | 1640.5 MB | n/a | n/a | gateway peak RSS 1102.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1102.6 MB, gateway-tree 1102.6 MB, command-tree 466.7 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4486ms | 1137.5 MB | 1647.4 MB | n/a | n/a | gateway peak RSS 1137.5 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1137.5 MB, gateway-tree 1107.4 MB, command-tree 468.7 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1272.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 163% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 1107.1 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.6% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1272.7 MB (scenario gateway-performance/many-bundled-plugins); CPU 163% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 640.8 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.6% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 921.4 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 152% (scenario agent-cold-warm-message/mock-openai-provider)
- model-cli: RSS 484 MB (scenario gateway-performance/many-bundled-plugins); CPU 145% (scenario fresh-install/fresh)
- plugin-cli: RSS 456.2 MB (scenario fresh-install/fresh); CPU 148% (scenario fresh-install/onboarded-user)
- agent-cli: RSS 186.5 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 26.6% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-fresh-r1-697fad55-kova-260816-041654-d92cc6
Measurements:
- startup: listening 4527ms; health 5054ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 527ms; post-ready p95 3ms; failures 18; final failures 0; slowest startup-sample/provision 527ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1240.1 MB; tracked total 1775.1 MB; max CPU 156%; samples 15; roles gateway 1240.1MB/156%, gateway-tree 1240.1MB/156%, command-tree 464MB/147%, model-cli 464MB/144%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 633.69ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1240.1 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1240.1 MB, gateway-tree 1240.1 MB, command-tree 464 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-fresh-r2-da880701-kova-260816-041654-d92cc6
Measurements:
- startup: listening 4021ms; health 4508ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 487ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 487ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1213.2 MB; tracked total 1752.9 MB; max CPU 162%; samples 15; roles gateway 1213.2MB/162%, gateway-tree 1213.2MB/162%, command-tree 468.4MB/147%, model-cli 468.4MB/142%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 562.38ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1213.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1213.2 MB, gateway-tree 1213.2 MB, command-tree 468.4 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-041654-d92cc6
Measurements:
- startup: listening 4020ms; health 4454ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 434ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 434ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1137.6 MB; tracked total 1675.4 MB; max CPU 162%; samples 15; roles gateway 1137.6MB/162%, gateway-tree 1137.6MB/162%, command-tree 466.4MB/147%, model-cli 466.4MB/145%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 556ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1137.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1137.6 MB, gateway-tree 1137.6 MB, command-tree 466.4 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-onboarded-9f99e904-kova-260816-041654-d92cc6
Measurements:
- startup: listening 4016ms; health 4528ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 512ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 512ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1165.9 MB; tracked total 1714.4 MB; max CPU 158%; samples 14; roles gateway 1165.9MB/158%, gateway-tree 1165.9MB/158%, command-tree 479.2MB/141%, status-cli 479.2MB/141%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 566.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1165.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1165.9 MB, gateway-tree 1165.9 MB, command-tree 479.2 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-onboarded-f9c24855-kova-260816-041654-d92cc6
Measurements:
- startup: listening 4014ms; health 4426ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 412ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 412ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1106 MB; tracked total 1660.1 MB; max CPU 158%; samples 15; roles gateway 1106MB/158%, gateway-tree 1106MB/158%, command-tree 483.8MB/147%, model-cli 483.8MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 543.76ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1106 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1106 MB, gateway-tree 1106 MB, command-tree 483.8 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-onboarded-fe872c26-kova-260816-041654-d92cc6
Measurements:
- startup: listening 4015ms; health 4465ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 450ms; post-ready p95 3ms; failures 16; final failures 0; slowest startup-sample/provision 450ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1101.7 MB; tracked total 1648.5 MB; max CPU 157%; samples 15; roles gateway 1101.7MB/157%, gateway-tree 1101.7MB/157%, command-tree 476.4MB/148%, model-cli 476.4MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 564.92ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1101.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101.7 MB, gateway-tree 1101.7 MB, command-tree 476.4 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-041654-d92cc6
Measurements:
- startup: listening 4019ms; health 4403ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 384ms; post-ready p95 2ms; failures 25; final failures 0; slowest startup-sample/restart 583ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1094 MB; tracked total 1188 MB; max CPU 162%; samples 11; roles gateway 1094MB/162%, gateway-tree 1094MB/162%, mock-provider 70.9MB/14.8%, runtime-staging 70.9MB/14.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 550.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1094 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-bundled-plugin-startup-809ede2b-kova-260816-041654-d92cc6
Measurements:
- startup: listening 4016ms; health 4446ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 424ms; post-ready p95 2ms; failures 26; final failures 0; slowest startup-sample/gateway-start 430ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1134.4 MB; tracked total 1170.5 MB; max CPU 161%; samples 11; roles gateway 1134.4MB/161%, gateway-tree 1093.6MB/161%, mock-provider 71.4MB/18.5%, runtime-staging 71.4MB/18.5%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 559.68ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1134.4 MB exceeded threshold 1000 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-041654-d92cc6-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-041654-d92cc6-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-041654-d92cc6-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-fresh-r1-697fad55-kova-260816-041654-d92cc6
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-fresh-r2-da880701-kova-260816-041654-d92cc6
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-041654-d92cc6
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-onboarded-9f99e904-kova-260816-041654-d92cc6
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-onboarded-f9c24855-kova-260816-041654-d92cc6
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-fresh-install-onboarded-fe872c26-kova-260816-041654-d92cc6
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-041654-d92cc6
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-bundled-plugin-startup-809ede2b-kova-260816-041654-d92cc6
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-041654-d92cc6/kova-bundled-plugin-startup-5377119f-kova-260816-041654-d92cc6
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msvamj3g-3zi-d49db340`
- Result: removed
- Duration: 424ms

