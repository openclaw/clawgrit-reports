# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260722-102227-688485
- Generated: 2026-07-22T10:55:15.641Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 18
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 0 MB | 0 MB | 0 MB |
| fresh-install | fresh | Gateway RSS | 0 MB | 0 MB | 0 MB |
| fresh-install | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| fresh-install | onboarded-user | Primary RSS | 64.4 MB | 73.3 MB | 74.3 MB |
| fresh-install | onboarded-user | Gateway RSS | 64.4 MB | 73.3 MB | 74.3 MB |
| fresh-install | onboarded-user | Max CPU | 75 % | 82.5 % | 83.3 % |
| fresh-install | onboarded-user | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 127 MB | 285 MB | 303 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 127 MB | 285 MB | 303 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 131 % | 134 % | 134 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-plugin-startup | fresh | Primary RSS | 527 MB | 535 MB | 536 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 0 MB | 51 MB | 56.7 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 158 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 729 MB | 729 MB | 729 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 171 % | 171 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 2,175 ms | 2,297 ms | 2,311 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 2,175 ms | 2,297 ms | 2,311 ms |
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

_Only first 20 of 55 violations shown._

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
- Tested ref: cb5179f0da4737db1f8b7485a9868aed6cc069e9
- Tested SHA: cb5179f0da4737db1f8b7485a9868aed6cc069e9
- Workflow ref: main
- Workflow SHA: 92540b873573b9e3d65944701b5b4ebdbf11fb29
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

The complete Kova bundle remains in [Actions artifact 8526966634](https://github.com/openclaw/openclaw/actions/runs/29911569506/artifacts/8526966634); its checksum is published under the bundles directory.
