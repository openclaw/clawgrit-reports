# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260722-171457-86caae
- Generated: 2026-07-22T17:48:39.965Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 0 MB | 83.1 MB | 92.3 MB |
| fresh-install | fresh | Gateway RSS | 0 MB | 83.1 MB | 92.3 MB |
| fresh-install | fresh | Max CPU | 100 % | 100 % | 100 % |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 44 MB | 46.6 MB | 46.9 MB |
| fresh-install | onboarded-user | Gateway RSS | 44 MB | 46.6 MB | 46.9 MB |
| fresh-install | onboarded-user | Max CPU | 25 % | 47.5 % | 50 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 136 MB | 287 MB | 304 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 136 MB | 287 MB | 304 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 125 % | 138 % | 139 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 60.2 MB | 654 MB | 720 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 59.2 MB | 60.1 MB | 60.2 MB |
| bundled-plugin-startup | fresh | Max CPU | 83.3 % | 158 % | 167 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 522 MB | 524 MB | 524 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 162 % | 162 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,991 ms | 2,071 ms | 2,080 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,991 ms | 2,071 ms | 2,080 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 0 MB | 53.4 MB | 59.3 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 0 MB | 53.4 MB | 59.3 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 200 % | 200 % | 200 % |
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
| fresh-install | onboarded-user | finalGatewayState | backoff | running |
| fresh-install | onboarded-user | readiness.classification | hard-failure | ready |
| fresh-install | onboarded-user | finalGatewayState | backoff | running |
| fresh-install | onboarded-user | readiness.classification | hard-failure | ready |
| fresh-install | onboarded-user | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| fresh-install | onboarded-user | finalGatewayState | backoff | running |
| fresh-install | onboarded-user | readiness.classification | hard-failure | ready |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |
| bundled-runtime-deps | missing-plugin-index | readiness.classification | hard-failure | ready |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |
| bundled-runtime-deps | missing-plugin-index | readiness.classification | hard-failure | ready |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |

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
- Tested ref: 4f33dee5bbf0649b12b11328d683a81dad5bc99a
- Tested SHA: 4f33dee5bbf0649b12b11328d683a81dad5bc99a
- Workflow ref: main
- Workflow SHA: 96d16c3c46a5eaecd19684d530a29d02978a8a2d
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

The complete Kova bundle remains in [Actions artifact 8539340700](https://github.com/openclaw/openclaw/actions/runs/29935697276/artifacts/8539340700); its checksum is published under the bundles directory.
