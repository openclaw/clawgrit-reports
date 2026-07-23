# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260723-061024-70cbbd
- Generated: 2026-07-23T06:15:12.449Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 918 MB | 920 MB | 920 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 918 MB | 920 MB | 920 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.7 ms | 10.9 ms | 10.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 915 MB | 917 MB | 917 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 915 MB | 917 MB | 917 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 13.1 ms | 13.1 ms | 13.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 977 MB | 994 MB | 996 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 157 % | 157 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,342 ms | 4,356 ms | 4,358 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,349 ms | 4,362 ms | 4,363 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,252 ms | 4,264 ms | 4,265 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,044 ms | 4,064 ms | 4,066 ms |

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
- Tested SHA: 07f671724cfe691f368f3e2595d854143ee7a801
- Workflow ref: main
- Workflow SHA: 07f671724cfe691f368f3e2595d854143ee7a801
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8554446179](https://github.com/openclaw/openclaw/actions/runs/29984202055/artifacts/8554446179); its checksum is published under the bundles directory.
