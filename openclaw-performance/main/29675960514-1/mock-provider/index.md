# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260719-060931-ee3cdc
- Generated: 2026-07-19T06:13:57.194Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 907 MB | 946 MB | 950 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 907 MB | 946 MB | 950 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.3 ms | 10.6 ms | 10.6 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 917 MB | 918 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 917 MB | 918 MB | 918 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 10.5 ms | 10.6 ms | 10.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 968 MB | 968 MB | 968 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 159 % | 162 % | 162 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,264 ms | 3,300 ms | 3,304 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,268 ms | 3,305 ms | 3,309 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,211 ms | 3,230 ms | 3,232 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,098 ms | 3,126 ms | 3,129 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 29b4b74a5a5e0d6bec2efc6b59b5d50c6ec1aca6
- Workflow ref: main
- Workflow SHA: 29b4b74a5a5e0d6bec2efc6b59b5d50c6ec1aca6
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

The complete Kova bundle remains in [Actions artifact 8438927338](https://github.com/openclaw/openclaw/actions/runs/29675960514/artifacts/8438927338); its checksum is published under the bundles directory.
