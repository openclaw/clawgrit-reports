# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260715-055811-273d5d
- Generated: 2026-07-15T06:03:04.886Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 853 MB | 854 MB | 854 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 853 MB | 854 MB | 854 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 151 % | 163 % | 164 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 0 ms | 0 ms | 0 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 845 MB | 846 MB | 847 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 845 MB | 846 MB | 847 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 159 % | 160 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 0 ms | 0 ms | 0 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 864 MB | 872 MB | 873 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 166 % | 166 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,809 ms | 3,850 ms | 3,854 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,812 ms | 3,864 ms | 3,870 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,555 ms | 3,735 ms | 3,755 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,663 ms | 3,707 ms | 3,712 ms |

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
- Tested SHA: 701d02f24121c50fec79b29e1f58815c0cc7104b
- Workflow ref: main
- Workflow SHA: 701d02f24121c50fec79b29e1f58815c0cc7104b
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

The complete Kova bundle remains in [Actions artifact 8334011468](https://github.com/openclaw/openclaw/actions/runs/29392813779/artifacts/8334011468); its checksum is published under the bundles directory.
