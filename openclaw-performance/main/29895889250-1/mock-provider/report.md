# Kova OpenClaw Runtime Report

> **❌ [FAIL]** — final gateway state was backoff

## Verdict

| Field | Value |
|---|---|
| Verdict | FAIL |
| Reason | final gateway state was backoff |
| Blocking findings | 57 |
| Warnings | 0 |
| Records | 9 (FAIL:9) |

## Proof Completeness

- Completeness: incomplete: 9
- Required obligations: 133 total, 18 missing, 15 failed
- Categories: command: 70, artifact: 9, cleanup: 9, collector: 9, invariant: 36

| Scenario | Obligation | Status | Reason |
|---|---|---|---|
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |
| gateway-performance | collector:final-metrics | missing | final health evidence was not collected |
| bundled-runtime-deps | collector:final-metrics | missing | final health evidence was not collected |
| bundled-runtime-deps | collector:final-metrics | missing | final health evidence was not collected |
| bundled-runtime-deps | collector:final-metrics | missing | final health evidence was not collected |
| agent-cold-warm-message | invariant:agent-cli-command-receipts | missing | cold-agent-turn command 1: command exited 1 |
| agent-cold-warm-message | invariant:agent-cli-provider-proof | missing | agent turn attribution count 1 was below required 2 |

## Run

| Field | Value |
|---|---|
| Run ID | `kova-260722-061036-deb11b` |
| Generated | 2026-07-22T06:26:02.222Z |
| Mode | execution |
| Target | `local-build:/home/runner/_work/openclaw/openclaw` |
| Platform | linux 6.6.141 (x64) · v24.18.0 |
| Repeat / parallel | 3 / 1 |
| Auth | mock (openai) |
| Network frontage | port |

## Coverage

| Field | Value |
|---|---:|
| Records | 9 |
| Scenarios | 3 |
| States | 3 |
| FAIL | 9 |

## Findings

| Severity | Area | Scenario | Finding | Evidence |
|---|---|---|---|---|
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 538.3 MB, plugin-cli 538.3 MB, status-cli 526.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMbNotObserved: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMbNotObserved: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMbNotObserved: 0 |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 2 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530.6 MB, plugin-cli 530.6 MB, status-cli 521.4 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMbNotObserved: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMbNotObserved: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway hard failure: gateway TCP socket never accepted connections before the hard deadline | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMbNotObserved: 0 |
| diagnostic-gap | OpenClaw | gateway-performance/many-bundled-plugins | 2 expected OpenClaw diagnostics span(s) were not observed; user-path verdict is based on functional and performance checks | missing spans: gateway.ready, config.normalize |
| incomplete | OpenClaw | gateway-performance/many-bundled-plugins | collector proof missing: final service and health metrics were collected | final health evidence was not collected |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 760.8 MB, status-cli 760.8 MB, plugin-cli 531.5 MB | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMbNotObserved: 0 |
| fail | OpenClaw | gateway-performance/many-bundled-plugins | final gateway state was backoff | resourceScope: product; resourceContract: primary-role-product-scope-v2; gatewayRssMbNotObserved: 0 |
| info | Kova | report | 51 additional finding(s) omitted from Markdown | see summary JSON |

## Performance Summary

- Resource measurement scope: product
- Resource headline contract: `primary-role-product-scope-v2`

| Scenario | Samples | Status | Health Ready | Gateway RSS | Tracked RSS | CPU | Cold Turn | Warm Turn | Cold Pre-Provider |
|---|---:|---|---:|---:|---:|---:|---:|---:|---:|
| gateway-performance/many-bundled-plugins | 3 | FAIL:3 | n/a | 0MB | n/a | n/a | n/a | n/a | n/a |
| bundled-runtime-deps/missing-plugin-index | 3 | FAIL:3 | n/a | 303.7MB | n/a | 136% | n/a | n/a | n/a |
| agent-cold-warm-message/mock-openai-provider | 3 | FAIL:3 | n/a | 0MB | n/a | 152.7% | 1811ms | n/a | n/a |

## Samples

| Sample | Status | Scenario | Upgrade From | Health Ready | Gateway RSS | Tracked RSS | Cold Turn | Warm Turn | Blocker |
|---:|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 538.3 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 538.3 MB, plugin-cli 538.3 MB, status-cli 526.4 MB |
| 2 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 530.6 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530.6 MB, plugin-cli 530.6 MB, status-cli 521.4 MB |
| 3 | FAIL | gateway-performance/many-bundled-plugins |  | unknown | 0 MB | 760.8 MB | n/a | n/a | gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 760.8 MB, status-cli 760.8 MB, plugin-cli 531.5 MB |
| 1 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 303.7 MB | 308.5 MB | n/a | n/a | final gateway state was backoff |
| 2 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 688.4 MB | 693.3 MB | n/a | n/a | final gateway state was backoff |
| 3 | FAIL | bundled-runtime-deps/missing-plugin-index |  | unknown | 219 MB | 224.1 MB | n/a | n/a | final gateway state was backoff |
| 1 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 522.2 MB | 1729ms | n/a | agent message command finished without a usable assistant response |
| 2 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 520.6 MB | 1872ms | n/a | agent message command finished without a usable assistant response |
| 3 | FAIL | agent-cold-warm-message/mock-openai-provider |  | unknown | 0 MB | 518.6 MB | 1811ms | n/a | agent message command finished without a usable assistant response |

## Resource Roles

- Measurement scope: product
- Headline contract: `primary-role-product-scope-v2`
- command-tree: RSS 760.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 158.8% (scenario gateway-performance/many-bundled-plugins)
- status-cli: RSS 760.8 MB (scenario gateway-performance/many-bundled-plugins); CPU 158.8% (scenario gateway-performance/many-bundled-plugins)
- gateway: RSS 688.4 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 152% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-cli: RSS 522.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.7% (scenario agent-cold-warm-message/mock-openai-provider)
- gateway-tree: RSS 688.4 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 152% (scenario bundled-runtime-deps/missing-plugin-index)
- agent-process: RSS 522.2 MB (scenario agent-cold-warm-message/mock-openai-provider); CPU 158.7% (scenario agent-cold-warm-message/mock-openai-provider)
- plugin-cli: RSS 538.3 MB (scenario gateway-performance/many-bundled-plugins); CPU 157.8% (scenario gateway-performance/many-bundled-plugins)
- uncategorized: RSS 5.4 MB (scenario bundled-runtime-deps/missing-plugin-index); CPU 0% (scenario gateway-performance/many-bundled-plugins)

## Selected Sample Details

### gateway-performance sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-gateway-performance-man-005107f3-kova-260722-061036-deb11b
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/cold-start 4ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 538.3 MB; max CPU unknown; samples 10; roles command-tree 538.3MB/154.8%, plugin-cli 538.3MB/154.8%, status-cli 526.4MB/151.8%, uncategorized 5.2MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 19.27ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 538.3 MB, plugin-cli 538.3 MB, status-cli 526.4 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-gateway-performance-man-005107f3-kova-260722-061036-deb11b' -- plugins list`
- Failure: \[32m\[state-migrations\]\[39m \[33mLegacy state migration warnings:\[39m

### gateway-performance sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-gateway-performance-man-1e8be6a8-kova-260722-061036-deb11b
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 530.6 MB; max CPU unknown; samples 11; roles command-tree 530.6MB/158.8%, plugin-cli 530.6MB/157.8%, status-cli 521.4MB/158.8%, uncategorized 5.1MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 23.65ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 530.6 MB, plugin-cli 530.6 MB, status-cli 521.4 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-gateway-performance-man-1e8be6a8-kova-260722-061036-deb11b' -- plugins list`
- Failure: \[32m\[state-migrations\]\[39m \[33mLegacy state migration warnings:\[39m

### gateway-performance sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-gateway-performance-man-958fde53-kova-260722-061036-deb11b
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 4
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 360; final failures not-collected; slowest startup-sample/cold-start 1ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS not observed 0 MB; tracked total 760.8 MB; max CPU unknown; samples 11; roles command-tree 760.8MB/155.9%, status-cli 760.8MB/155.9%, plugin-cli 531.5MB/155.7%, uncategorized 5.2MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 22.21ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - gateway resource evidence was not captured; configured primary resource role has active resource thresholds; configured role not observed; top RSS roles: command-tree 760.8 MB, status-cli 760.8 MB, plugin-cli 531.5 MB
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline
- Failed command: `ocm @'kova-gateway-performance-man-958fde53-kova-260722-061036-deb11b' -- plugins list`
- Failure: \[32m\[state-migrations\]\[39m \[33mLegacy state migration warnings:\[39m

### bundled-runtime-deps sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-061036-deb11b
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 778; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 303.7 MB; tracked total 308.5 MB; max CPU 136%; samples 6; roles gateway 303.7MB/136%, gateway-tree 303.7MB/136%, command-tree 4.8MB/0%, uncategorized 4.8MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.03ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### bundled-runtime-deps sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-061036-deb11b
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 781; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 688.4 MB; tracked total 693.3 MB; max CPU 152%; samples 6; roles gateway 688.4MB/152%, gateway-tree 688.4MB/152%, command-tree 5.3MB/0%, uncategorized 5.3MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 0.93ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### bundled-runtime-deps sample 3

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-bundled-runtime-deps-mi-150715ba-kova-260722-061036-deb11b
Measurements:
- startup: listening unknown; health unknown; readiness hard-failure (gateway TCP socket never accepted connections before the hard deadline); gateway backoff; restarts 8
- health: startup p95 1ms; post-ready p95 not-collected; failures at least 778; final failures not-collected; slowest startup-sample/cold-start 2ms
- resources: scope product; contract primary-role-product-scope-v2; gateway RSS 219 MB; tracked total 224.1 MB; max CPU 129%; samples 6; roles gateway 219MB/129%, gateway-tree 219MB/129%, command-tree 5.4MB/0%, uncategorized 5.4MB/0%
- agent: not-run
- Agent turn stats: count 0; p95 n/a; max n/a; pre-provider p95 n/a
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages 0; warm reuse true
- diagnostics: timeline available; slowest span config.load 1.95ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - final gateway state was backoff
  - gateway hard failure: gateway TCP socket never accepted connections before the hard deadline

### agent-cold-warm-message sample 1

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-agent-cold-warm-message-8e2a29af-kova-260722-061036-deb11b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 522.2 MB; tracked total 522.2 MB; max CPU 151.7%; samples 3; roles agent-cli 522.2MB/151.7%, agent-process 522.2MB/151.7%, command-tree 522.2MB/151.7%
- agent: turn 1729ms; cold/warm 1729ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 1 (18.56ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 1729ms; max 1729ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 18.56ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-8e2a29af-kova-260722-061036-deb11b' -- agent --local...`
- Failure: OpenClaw config is invalid
- Agent turns:
  - cold: total 1729ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 1 (18.56ms total, max 18.56ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 1729ms; source plugins.metadata.scan 18.56ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-agent-cold-warm-message-8e2a29af-kova-260722-061036-deb11b/openclaw/timeline.jsonl |

### agent-cold-warm-message sample 2

- Status: FAIL
- Cleanup: destroyed
- Artifact root: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-agent-cold-warm-message-2ab680e0-kova-260722-061036-deb11b
Measurements:
- startup: listening unknown; health unknown; readiness unknown; gateway disabled; restarts 0
- health: startup p95 not-collected; post-ready p95 not-collected; failures at least 0; final failures not-collected
- resources: scope product; contract primary-role-product-scope-v2; agent-cli RSS 520.6 MB; tracked total 520.6 MB; max CPU 158.7%; samples 3; roles agent-cli 520.6MB/158.7%, agent-process 520.6MB/158.7%, command-tree 520.6MB/158.7%
- agent: turn 1872ms; cold/warm 1872ms/n/a; cold-warm delta n/a; pre-provider n/a; provider n/a; metadata scans 1 (20.64ms); event-loop n/a; polls 0; cleanup n/a; diagnosis no-provider-request; leaks 0
- Agent turn stats: count 1; p95 1872ms; max 1872ms; pre-provider p95 n/a
- agent CLI attribution: cold known unknown / unattributed unknown; warm known unknown / unattributed unknown
- plugins/runtime: missing deps 0; plugin failures 0; runtime deps not-observed; warm restages n/a; warm reuse n/a
- diagnostics: timeline available; slowest span plugins.metadata.scan 20.64ms; embedded traces 0; liveness warnings 0; open spans 0 (0 required); node CPU/heap/trace 0/0/0
- Violations:
  - agent message command finished without a usable assistant response
  - cold agent turn did not produce the expected assistant response
  - cold agent turn response did not exactly match expected text KOVA\_AGENT\_OK
  - cold agent turn ran with mock auth but no mock provider request was captured
  - preProviderMs contained malformed Kova evidence: expected finite non-negative turn measurement, got null
  - No provider request happened during the agent turn.
- Failed command: `ocm @'kova-agent-cold-warm-message-2ab680e0-kova-260722-061036-deb11b' -- agent --local...`
- Failure: OpenClaw config is invalid
- Agent turns:
  - cold: total 1872ms; pre-provider unknown; provider unknown; post-provider unknown; response false
    - active window: metadata scans 1 (20.64ms total, max 20.64ms); event-loop samples 0 max unknown
    - breakdown: pre-provider unknown; provider unknown; post-provider unknown; unknown 1872ms; source plugins.metadata.scan 20.64ms
- Agent CLI pre-provider attribution:
  - Spans are selected by active turn timestamp window; timeline phase is descriptive, not a startup/turn classifier.

  | turn | pre-provider | known | unattributed | provider | timeline |
  |---|---:|---:|---:|---:|---|
  | cold | unknown | unknown | unknown | 0 ms | /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-agent-cold-warm-message-2ab680e0-kova-260722-061036-deb11b/openclaw/timeline.jsonl |

## Artifacts

- markdown-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-061036-deb11b-diagnostic.md
- json-report: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-061036-deb11b-diagnostic.json
- summary-json: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/reports/mock-provider/kova-260722-061036-deb11b-diagnostic.summary.json
- collector-root gateway-performance#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-gateway-performance-man-005107f3-kova-260722-061036-deb11b
- collector-root gateway-performance#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-gateway-performance-man-1e8be6a8-kova-260722-061036-deb11b
- collector-root gateway-performance#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-gateway-performance-man-958fde53-kova-260722-061036-deb11b
- collector-root bundled-runtime-deps#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-bundled-runtime-deps-mi-3d8ba94e-kova-260722-061036-deb11b
- collector-root bundled-runtime-deps#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-bundled-runtime-deps-mi-39c08a4a-kova-260722-061036-deb11b
- collector-root bundled-runtime-deps#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-bundled-runtime-deps-mi-150715ba-kova-260722-061036-deb11b
- collector-root agent-cold-warm-message#1: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-agent-cold-warm-message-8e2a29af-kova-260722-061036-deb11b
- collector-root agent-cold-warm-message#2: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-agent-cold-warm-message-2ab680e0-kova-260722-061036-deb11b
- collector-root agent-cold-warm-message#3: /home/runner/\_work/openclaw/openclaw/.artifacts/kova/home/mock-provider/artifacts/kova-260722-061036-deb11b/kova-agent-cold-warm-message-67b331a3-kova-260722-061036-deb11b

## Target Cleanup

- Runtime: `kova-local-mrvoogsd-415-dcbff6c1`
- Result: removed
- Duration: 428ms

