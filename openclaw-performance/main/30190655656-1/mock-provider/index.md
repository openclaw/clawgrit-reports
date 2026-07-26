# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260726-061328-b0c51b
- Generated: 2026-07-26T06:18:44.520Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3, PASS: 6
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 898 MB | 977 MB | 986 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 898 MB | 977 MB | 986 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.5 ms | 17.8 ms | 18 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,001 MB | 1,016 MB | 1,018 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,001 MB | 1,016 MB | 1,018 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 13.1 ms | 17.7 ms | 18.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 903 MB | 947 MB | 952 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 153 % | 153 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,700 ms | 4,707 ms | 4,708 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,702 ms | 4,711 ms | 4,712 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,665 ms | 4,681 ms | 4,683 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,181 ms | 4,193 ms | 4,194 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | finalGatewayState | backoff | running |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
| gateway-performance | many-bundled-plugins | readiness.classification | hard-failure | ready |
| gateway-performance | many-bundled-plugins | openclawOpenRequiredSpanCount | 1 | 0 |
| gateway-performance | many-bundled-plugins | finalHealthFailures | 3 | <= 0 |
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
- Tested SHA: 9dfb2a131818aa308def4fff7e10e5ecb9c48d5f
- Workflow ref: main
- Workflow SHA: 9dfb2a131818aa308def4fff7e10e5ecb9c48d5f
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8628498043](https://github.com/openclaw/openclaw/actions/runs/30190655656/artifacts/8628498043); its checksum is published under the bundles directory.
