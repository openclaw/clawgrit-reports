# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260722-111024-600570
- Generated: 2026-07-22T11:43:21.419Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 0 MB | 0 MB | 0 MB |
| fresh-install | fresh | Gateway RSS | 0 MB | 0 MB | 0 MB |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 0 MB | 0 MB | 0 MB |
| fresh-install | onboarded-user | Gateway RSS | 0 MB | 0 MB | 0 MB |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 106 MB | 277 MB | 296 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 106 MB | 277 MB | 296 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 116 % | 138 % | 140 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 545 MB | 710 MB | 728 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 0 MB | 0 MB | 0 MB |
| bundled-plugin-startup | fresh | Max CPU | 152 % | 165 % | 167 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 523 MB | 524 MB | 524 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,675 ms | 1,751 ms | 1,759 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,675 ms | 1,751 ms | 1,759 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 0 MB | 0 MB | 0 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 0 MB | 0 MB | 0 MB |
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
| fresh-install | fresh | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | fresh | finalGatewayState | backoff | running |
| fresh-install | fresh | readiness.classification | hard-failure | ready |
| fresh-install | onboarded-user | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | onboarded-user | finalGatewayState | backoff | running |
| fresh-install | onboarded-user | readiness.classification | hard-failure | ready |
| fresh-install | onboarded-user | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | onboarded-user | finalGatewayState | backoff | running |
| fresh-install | onboarded-user | readiness.classification | hard-failure | ready |
| fresh-install | onboarded-user | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | onboarded-user | finalGatewayState | backoff | running |
| fresh-install | onboarded-user | readiness.classification | hard-failure | ready |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |
| bundled-runtime-deps | missing-plugin-index | readiness.classification | hard-failure | ready |

_Only first 20 of 57 violations shown._

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
- Tested ref: 2695c0d60e3dbc6a6ad229f10d1e01f8251e8e91
- Tested SHA: 2695c0d60e3dbc6a6ad229f10d1e01f8251e8e91
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

The complete Kova bundle remains in [Actions artifact 8528207160](https://github.com/openclaw/openclaw/actions/runs/29914603871/artifacts/8528207160); its checksum is published under the bundles directory.
