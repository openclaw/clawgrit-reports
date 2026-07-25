# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-010119-43bd72
- Generated: 2026-07-25T01:08:58.406Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 949 MB | 977 MB | 980 MB |
| fresh-install | fresh | Gateway RSS | 949 MB | 977 MB | 980 MB |
| fresh-install | fresh | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 10.7 ms | 11.6 ms | 11.7 ms |
| fresh-install | onboarded-user | Primary RSS | 978 MB | 978 MB | 978 MB |
| fresh-install | onboarded-user | Gateway RSS | 978 MB | 978 MB | 978 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 13 ms | 13.4 ms | 13.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 966 MB | 969 MB | 969 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 966 MB | 969 MB | 969 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.2 ms | 24.1 ms | 24.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 959 MB | 960 MB | 960 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 959 MB | 960 MB | 960 MB |
| bundled-plugin-startup | fresh | Max CPU | 155 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 16.8 ms | 25.7 ms | 26.7 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 960 MB | 972 MB | 974 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,018 ms | 5,104 ms | 5,114 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,920 ms | 4,956 ms | 4,960 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,023 ms | 5,112 ms | 5,122 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,624 ms | 4,655 ms | 4,659 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 977 MB | 979 MB | 979 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 977 MB | 979 MB | 979 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 155 % | 156 % | 156 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.4 ms | 20 ms | 20.1 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 959 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 960 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 951 | <= 950 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 3c545ad68118dd1e65a0feb6bcd9ff2a2a4e9602
- Tested SHA: 3c545ad68118dd1e65a0feb6bcd9ff2a2a4e9602
- Workflow ref: main
- Workflow SHA: 4e51e7addaf2d876d63dce486cbc3c6602be04c1
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8613448156](https://github.com/openclaw/openclaw/actions/runs/30137569428/artifacts/8613448156); its checksum is published under the bundles directory.
