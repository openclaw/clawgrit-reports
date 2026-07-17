# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260717-060117-75396f
- Generated: 2026-07-17T06:05:58.424Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 909 MB | 926 MB | 928 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 909 MB | 926 MB | 928 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 148 % | 153 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 10.5 ms | 10.9 ms | 10.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 917 MB | 920 MB | 920 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 917 MB | 920 MB | 920 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 11.5 ms | 13.2 ms | 13.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 919 MB | 942 MB | 945 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 163 % | 166 % | 166 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,717 ms | 3,970 ms | 3,998 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,732 ms | 3,979 ms | 4,006 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,565 ms | 3,816 ms | 3,844 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,535 ms | 3,758 ms | 3,783 ms |

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
- Tested SHA: a8fd558d6210fdd2dbdd500a5e3a875b383f9c67
- Workflow ref: main
- Workflow SHA: a8fd558d6210fdd2dbdd500a5e3a875b383f9c67
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

The complete Kova bundle remains in [Actions artifact 8398542272](https://github.com/openclaw/openclaw/actions/runs/29558821126/artifacts/8398542272); its checksum is published under the bundles directory.
