# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260716-060120-107a3e
- Generated: 2026-07-16T06:06:29.675Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 857 MB | 861 MB | 862 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 857 MB | 861 MB | 862 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 168 % | 169 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 849 MB | 849 MB | 849 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 849 MB | 849 MB | 849 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 159 % | 159 % | 159 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 938 MB | 950 MB | 952 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 171 % | 172 % | 172 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,285 ms | 4,384 ms | 4,395 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,246 ms | 4,381 ms | 4,396 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,287 ms | 4,367 ms | 4,376 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,118 ms | 4,204 ms | 4,213 ms |

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
- Tested SHA: 98fc55ca96c6ab9df64998e99bdb0ef6b733714f
- Workflow ref: main
- Workflow SHA: 98fc55ca96c6ab9df64998e99bdb0ef6b733714f
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

The complete Kova bundle remains in [Actions artifact 8366466609](https://github.com/openclaw/openclaw/actions/runs/29475433945/artifacts/8366466609); its checksum is published under the bundles directory.
