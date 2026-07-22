# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260722-061036-deb11b
- Generated: 2026-07-22T06:26:02.220Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 9
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 0 MB | 0 MB | 0 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 0 MB | 0 MB | 0 MB |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 304 MB | 650 MB | 688 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 304 MB | 650 MB | 688 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 136 % | 150 % | 152 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 521 MB | 522 MB | 522 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 158 % | 159 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 1,811 ms | 1,866 ms | 1,872 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 1,811 ms | 1,866 ms | 1,872 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.missing | missing | configured primary resource role observed in product samples |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |
| bundled-runtime-deps | missing-plugin-index | readiness.classification | hard-failure | ready |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |
| bundled-runtime-deps | missing-plugin-index | readiness.classification | hard-failure | ready |
| bundled-runtime-deps | missing-plugin-index | finalGatewayState | backoff | running |
| bundled-runtime-deps | missing-plugin-index | readiness.classification | hard-failure | ready |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |

_Only first 20 of 33 violations shown._

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 849ffb8a994b822739cf8a1b503443ec07e6dfbe
- Workflow ref: main
- Workflow SHA: 849ffb8a994b822739cf8a1b503443ec07e6dfbe
- Kova repository: openclaw/Kova
- Kova ref: f3d037b5b8aacd6adf8ef1dd2ea4c1d778ec7c6c
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8520256863](https://github.com/openclaw/openclaw/actions/runs/29895889250/artifacts/8520256863); its checksum is published under the bundles directory.
