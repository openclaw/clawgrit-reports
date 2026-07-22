# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260722-113218-ed2e13
- Generated: 2026-07-22T12:05:00.116Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 0 MB | 53.4 MB | 59.3 MB |
| fresh-install | fresh | Gateway RSS | 0 MB | 53.4 MB | 59.3 MB |
| fresh-install | fresh | Max CPU | 50 % | 50 % | 50 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 0 MB | 61 MB | 67.8 MB |
| fresh-install | onboarded-user | Gateway RSS | 0 MB | 61 MB | 67.8 MB |
| fresh-install | onboarded-user | Max CPU | 100 % | 100 % | 100 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 126 MB | 408 MB | 439 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 126 MB | 408 MB | 439 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 140 % | 194 % | 200 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 530 MB | 530 MB | 530 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 0 MB | 53.4 MB | 59.3 MB |
| bundled-plugin-startup | fresh | Max CPU | 151 % | 158 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 521 MB | 522 MB | 522 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 155 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,862 ms | 1,993 ms | 2,008 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,862 ms | 1,993 ms | 2,008 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 59.3 MB | 75.3 MB | 77.1 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 59.3 MB | 75.3 MB | 77.1 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 87.5 % | 98.8 % | 100 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | fresh | finalGatewayState | backoff | running |
| fresh-install | fresh | readiness.classification | hard-failure | ready |
| fresh-install | fresh | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | fresh | finalGatewayState | backoff | running |
| fresh-install | fresh | readiness.classification | hard-failure | ready |
| fresh-install | fresh | finalGatewayState | backoff | running |
| fresh-install | fresh | readiness.classification | hard-failure | ready |
| fresh-install | onboarded-user | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | onboarded-user | finalGatewayState | backoff | running |
| fresh-install | onboarded-user | readiness.classification | hard-failure | ready |
| fresh-install | onboarded-user | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | onboarded-user | finalGatewayState | backoff | running |
| fresh-install | onboarded-user | readiness.classification | hard-failure | ready |
| fresh-install | onboarded-user | finalGatewayState | backoff | running |
| fresh-install | onboarded-user | readiness.classification | hard-failure | ready |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |
| bundled-runtime-deps | missing-plugin-index | readiness.classification | hard-failure | ready |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |
| bundled-runtime-deps | missing-plugin-index | readiness.classification | hard-failure | ready |

_Only first 20 of 53 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: b20e06c335c078170d1fb0e8e914195b9ba675d9
- Tested SHA: b20e06c335c078170d1fb0e8e914195b9ba675d9
- Workflow ref: main
- Workflow SHA: a71ac339280b492b5844775d740793157da386c4
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8528764541](https://github.com/openclaw/openclaw/actions/runs/29915993700/artifacts/8528764541); its checksum is published under the bundles directory.
