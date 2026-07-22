# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260722-090027-fbc683
- Generated: 2026-07-22T09:34:28.763Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 0 MB | 54.5 MB | 60.6 MB |
| fresh-install | fresh | Gateway RSS | 0 MB | 54.5 MB | 60.6 MB |
| fresh-install | fresh | Max CPU | 80 % | 80 % | 80 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 0 MB | 0 MB | 0 MB |
| fresh-install | onboarded-user | Gateway RSS | 0 MB | 0 MB | 0 MB |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 75.9 MB | 82.6 MB | 83.3 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 75.9 MB | 82.6 MB | 83.3 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 100 % | 113 % | 114 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 59.2 MB | 484 MB | 531 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 51.6 MB | 58.4 MB | 59.2 MB |
| bundled-plugin-startup | fresh | Max CPU | 66.6 % | 151 % | 161 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 521 MB | 522 MB | 522 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 157 % | 158 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,930 ms | 1,972 ms | 1,977 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,930 ms | 1,972 ms | 1,977 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 58 MB | 70.2 MB | 71.5 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 58 MB | 70.2 MB | 71.5 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 100 % | 100 % | 100 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | fresh | finalGatewayState | backoff | running |
| fresh-install | fresh | readiness.classification | hard-failure | ready |
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
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |

_Only first 20 of 54 violations shown._

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
- Tested ref: 72df77c19ba61d6e0faeac4236a8c9860a6c9de0
- Tested SHA: 72df77c19ba61d6e0faeac4236a8c9860a6c9de0
- Workflow ref: main
- Workflow SHA: 0b080b9c2ed7a2aec6237f9cb483b132b7e665e5
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

The complete Kova bundle remains in [Actions artifact 8524845236](https://github.com/openclaw/openclaw/actions/runs/29906077280/artifacts/8524845236); its checksum is published under the bundles directory.
