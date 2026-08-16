# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — gateway peak RSS 1114.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.2 MB, gateway-tree 1114.1 MB, command-tree 467.1 MB

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | gateway peak RSS 1114.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.2 MB, gateway-tree 1114.1 MB, command-tree 467.1 MB |
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
| Run ID | `kova-260816-064030-ec26b8` |
| Generated | 2026-08-16T06:47:33.684Z |
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
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1114.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.2 MB, gateway-tree 1114.1 MB, command-tree 467.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 5086 |
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1105 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1105 MB, gateway-tree 1105 MB, command-tree 469.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4644 |
| fail | OpenClaw | fresh-install/fresh | gateway peak RSS 1145.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1145.9 MB, gateway-tree 1145.9 MB, command-tree 468.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4567 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1101.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101.6 MB, gateway-tree 1101.6 MB, command-tree 480.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4612 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1151.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1151.6 MB, gateway-tree 1151.6 MB, command-tree 471.2 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4576 |
| fail | OpenClaw | fresh-install/onboarded-user | gateway peak RSS 1101.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101.8 MB, gateway-tree 1101.8 MB, command-tree 479.3 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4651 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1103.6 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4470 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1134.7 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4541 |
| fail | OpenClaw | bundled-plugin-startup/fresh | gateway peak RSS 1154.6 MB exceeded threshold 1000 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4539 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1115.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1115.9 MB, gateway-tree 1115.9 MB, command-tree 469.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4547 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1104 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104 MB, gateway-tree 1104 MB, command-tree 466.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4461 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway peak RSS 1139.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1139.7 MB, gateway-tree 1104 MB, command-tree 462.1 MB | resourceScope: product; resourceContract: primary-role-product-scope-v3; readinessHealthReadyMs: 4582 |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v3`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| fresh-install/fresh | 3 | FAIL:3 | 4644ms | 1114.2MB | n/a | 156% | n/a | n/a | n/a |
| fresh-install/onboarded-user | 3 | FAIL:3 | 4612ms | 1101.8MB | n/a | 156% | n/a | n/a | n/a |
| bundled-plugin-startup/fresh | 3 | FAIL:3 | 4539ms | 1134.7MB | n/a | 160% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | PASS:3 | n/a | 0MB | n/a | 153% | 3271ms | 3052ms | 3162ms |
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | 4547ms | 1115.9MB | n/a | 155% | n/a | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | fresh-install/fresh |  | 5086ms | 1114.2 MB | 1652.6 MB | n/a | n/a | gateway peak RSS 1114.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.2 MB, gateway-tree 1114.1 MB, command-tree 467.1 MB |
| 2 | FAIL | fresh-install/fresh |  | 4644ms | 1105 MB | 1643.5 MB | n/a | n/a | gateway peak RSS 1105 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1105 MB, gateway-tree 1105 MB, command-tree 469.3 MB |
| 3 | FAIL | fresh-install/fresh |  | 4567ms | 1145.9 MB | 1685.6 MB | n/a | n/a | gateway peak RSS 1145.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1145.9 MB, gateway-tree 1145.9 MB, command-tree 468.4 MB |
| 1 | FAIL | fresh-install/onboarded-user |  | 4612ms | 1101.6 MB | 1649.3 MB | n/a | n/a | gateway peak RSS 1101.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101.6 MB, gateway-tree 1101.6 MB, command-tree 480.1 MB |
| 2 | FAIL | fresh-install/onboarded-user |  | 4576ms | 1151.6 MB | 1693.8 MB | n/a | n/a | gateway peak RSS 1151.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1151.6 MB, gateway-tree 1151.6 MB, command-tree 471.2 MB |
| 3 | FAIL | fresh-install/onboarded-user |  | 4651ms | 1101.8 MB | 1652.5 MB | n/a | n/a | gateway peak RSS 1101.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101.8 MB, gateway-tree 1101.8 MB, command-tree 479.3 MB |
| 1 | FAIL | bundled-plugin-startup/fresh |  | 4470ms | 1103.6 MB | 1180.4 MB | n/a | n/a | gateway peak RSS 1103.6 MB exceeded threshold 1000 MB |
| 2 | FAIL | bundled-plugin-startup/fresh |  | 4541ms | 1134.7 MB | 1189 MB | n/a | n/a | gateway peak RSS 1134.7 MB exceeded threshold 1000 MB |
| 3 | FAIL | bundled-plugin-startup/fresh |  | 4539ms | 1154.6 MB | 1186 MB | n/a | n/a | gateway peak RSS 1154.6 MB exceeded threshold 1000 MB |
| 1 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1202.1 MB | 3236ms | 3017ms |  |
| 2 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1166.4 MB | 3271ms | 3052ms |  |
| 3 | PASS | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 1196.5 MB | 3364ms | 3054ms |  |
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | 4547ms | 1115.9 MB | 1656.4 MB | n/a | n/a | gateway peak RSS 1115.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1115.9 MB, gateway-tree 1115.9 MB, command-tree 469.1 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | 4461ms | 1104 MB | 1641.1 MB | n/a | n/a | gateway peak RSS 1104 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1104 MB, gateway-tree 1104 MB, command-tree 466.1 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | 4582ms | 1139.7 MB | 1637.3 MB | n/a | n/a | gateway peak RSS 1139.7 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1139.7 MB, gateway-tree 1104 MB, command-tree 462.1 MB |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v3`
- gateway: RSS 1154.6 MB (scenario bundled-plugin-startup/fresh); CPU 161% (scenario bundled-plugin-startup/fresh)
- command-tree: RSS 1130.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.4% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 1151.6 MB (scenario fresh-install/onboarded-user); CPU 161% (scenario bundled-plugin-startup/fresh)
- status-cli: RSS 610.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 175.4% (scenario agent-cold-warm-message/mock-openai-provider)
- agent-process: RSS 944.7 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 154% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 480.1 MB (scenario fresh-install/onboarded-user); CPU 149% (scenario fresh-install/fresh)
- model-cli: RSS 471.2 MB (scenario fresh-install/onboarded-user); CPU 144% (scenario fresh-install/fresh)
- agent-cli: RSS 187 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 27.3% (scenario agent-cold-warm-message/mock-openai-provider)

## Selected Sample Details

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-fresh-r1-697fad55-kova-260816-064030-ec26b8
Measurements:
- startup: listening 4528ms; health 5086ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 558ms; post-ready p95 3ms; failures 18; final failures 0; slowest startup-sample/provision 558ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1114.2 MB; tracked total 1652.6 MB; max CPU 156%; samples 15; roles gateway 1114.2MB/156%, gateway-tree 1114.1MB/156%, command-tree 467.1MB/149%, model-cli 467.1MB/144%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 634.33ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1114.2 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1114.2 MB, gateway-tree 1114.1 MB, command-tree 467.1 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-fresh-r2-da880701-kova-260816-064030-ec26b8
Measurements:
- startup: listening 4019ms; health 4644ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 625ms; post-ready p95 2ms; failures 16; final failures 0; slowest startup-sample/provision 625ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1105 MB; tracked total 1643.5 MB; max CPU 156%; samples 14; roles gateway 1105MB/156%, gateway-tree 1105MB/156%, command-tree 469.3MB/141%, model-cli 469.3MB/141%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 613.29ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1105 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1105 MB, gateway-tree 1105 MB, command-tree 469.3 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-064030-ec26b8
Measurements:
- startup: listening 4017ms; health 4567ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 550ms; post-ready p95 2ms; failures 16; final failures 0; slowest startup-sample/provision 550ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1145.9 MB; tracked total 1685.6 MB; max CPU 160%; samples 15; roles gateway 1145.9MB/160%, gateway-tree 1145.9MB/160%, command-tree 468.4MB/145%, model-cli 468.4MB/143%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 578.87ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1145.9 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1145.9 MB, gateway-tree 1145.9 MB, command-tree 468.4 MB

### fresh-install sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-onboarded-9f99e904-kova-260816-064030-ec26b8
Measurements:
- startup: listening 4019ms; health 4612ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 593ms; post-ready p95 2ms; failures 16; final failures 0; slowest startup-sample/provision 593ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1101.6 MB; tracked total 1649.3 MB; max CPU 156%; samples 15; roles gateway 1101.6MB/156%, gateway-tree 1101.6MB/156%, command-tree 480.1MB/147%, plugin-cli 480.1MB/147%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 572.89ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1101.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101.6 MB, gateway-tree 1101.6 MB, command-tree 480.1 MB

### fresh-install sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-onboarded-f9c24855-kova-260816-064030-ec26b8
Measurements:
- startup: listening 4025ms; health 4576ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 551ms; post-ready p95 5ms; failures 16; final failures 0; slowest startup-sample/provision 551ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1151.6 MB; tracked total 1693.8 MB; max CPU 157%; samples 14; roles gateway 1151.6MB/157%, gateway-tree 1151.6MB/157%, command-tree 471.2MB/142%, model-cli 471.2MB/141%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span gateway.ready 614.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1151.6 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1151.6 MB, gateway-tree 1151.6 MB, command-tree 471.2 MB

### fresh-install sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-onboarded-fe872c26-kova-260816-064030-ec26b8
Measurements:
- startup: listening 4017ms; health 4651ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 0
- health: startup p95 634ms; post-ready p95 2ms; failures 16; final failures 0; slowest startup-sample/provision 634ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1101.8 MB; tracked total 1652.5 MB; max CPU 155%; samples 15; roles gateway 1101.8MB/155%, gateway-tree 1101.8MB/155%, command-tree 479.3MB/146%, plugin-cli 479.3MB/146%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span cli.command-startup 583.47ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1101.8 MB exceeded threshold 1050 MB; observed role gateway; top RSS roles: gateway 1101.8 MB, gateway-tree 1101.8 MB, command-tree 479.3 MB

### bundled-plugin-startup sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-064030-ec26b8
Measurements:
- startup: listening 4019ms; health 4470ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 451ms; post-ready p95 2ms; failures 26; final failures 0; slowest startup-sample/restart 534ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1103.6 MB; tracked total 1180.4 MB; max CPU 161%; samples 11; roles gateway 1103.6MB/161%, gateway-tree 1103.6MB/161%, mock-provider 71.3MB/17.8%, runtime-staging 71.3MB/17.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span gateway.ready 576.05ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1103.6 MB exceeded threshold 1000 MB

### bundled-plugin-startup sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-bundled-plugin-startup-809ede2b-kova-260816-064030-ec26b8
Measurements:
- startup: listening 4015ms; health 4541ms; readiness ready (gateway became healthy within the readiness threshold); gateway running; restarts 1
- health: startup p95 403ms; post-ready p95 3ms; failures 26; final failures 0; slowest startup-sample/gateway-start 526ms
- resources: scope product; contract primary-role-product-scope-v3; gateway RSS 1134.7 MB; tracked total 1189 MB; max CPU 160%; samples 11; roles gateway 1134.7MB/160%, gateway-tree 1111.7MB/160%, mock-provider 71.5MB/17.8%, runtime-staging 71.5MB/17.8%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span cli.command-startup 560.63ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway peak RSS 1134.7 MB exceeded threshold 1000 MB

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-064030-ec26b8-release.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-064030-ec26b8-release.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260816-064030-ec26b8-release.summary.json
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-fresh-r1-697fad55-kova-260816-064030-ec26b8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-fresh-r2-da880701-kova-260816-064030-ec26b8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-fresh-r3-82f8bdbd-kova-260816-064030-ec26b8
- collector-root fresh-install#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-onboarded-9f99e904-kova-260816-064030-ec26b8
- collector-root fresh-install#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-onboarded-f9c24855-kova-260816-064030-ec26b8
- collector-root fresh-install#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-fresh-install-onboarded-fe872c26-kova-260816-064030-ec26b8
- collector-root bundled-plugin-startup#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-bundled-plugin-startup-4a0cbdf7-kova-260816-064030-ec26b8
- collector-root bundled-plugin-startup#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-bundled-plugin-startup-809ede2b-kova-260816-064030-ec26b8
- collector-root bundled-plugin-startup#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260816-064030-ec26b8/kova-bundled-plugin-startup-5377119f-kova-260816-064030-ec26b8
- 6 additional artifact reference(s) omitted from Markdown. See summary JSON.

## Target Cleanup

- Runtime: `kova-local-msvfr722-3zd-36eb06e4`
- Result: removed
- Duration: 435ms

