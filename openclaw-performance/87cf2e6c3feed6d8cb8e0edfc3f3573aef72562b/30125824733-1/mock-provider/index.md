# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-205536-161bc8
- Generated: 2026-07-24T21:05:41.476Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 978 MB | 978 MB | 978 MB |
| fresh-install | fresh | Gateway RSS | 978 MB | 978 MB | 978 MB |
| fresh-install | fresh | Max CPU | 154 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 10.5 ms | 10.6 ms | 10.6 ms |
| fresh-install | onboarded-user | Primary RSS | 964 MB | 979 MB | 981 MB |
| fresh-install | onboarded-user | Gateway RSS | 964 MB | 979 MB | 981 MB |
| fresh-install | onboarded-user | Max CPU | 155 % | 160 % | 161 % |
| fresh-install | onboarded-user | Event Loop Max | 10.9 ms | 12.5 ms | 12.6 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 968 MB | 968 MB | 969 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 968 MB | 968 MB | 969 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 19.5 ms | 19.7 ms | 19.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 982 MB | 982 MB | 982 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 982 MB | 982 MB | 982 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.3 ms | 23.8 ms | 24.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 959 MB | 973 MB | 975 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,819 ms | 4,882 ms | 4,888 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,650 ms | 4,773 ms | 4,787 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,821 ms | 4,893 ms | 4,901 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,441 ms | 4,504 ms | 4,511 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 966 MB | 981 MB | 983 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 966 MB | 981 MB | 983 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 22.1 ms | 27.8 ms | 28.5 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 982 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 977 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 982 | <= 950 |

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
- Tested ref: 87cf2e6c3feed6d8cb8e0edfc3f3573aef72562b
- Tested SHA: 87cf2e6c3feed6d8cb8e0edfc3f3573aef72562b
- Workflow ref: main
- Workflow SHA: 2ee8730450dc5e8d0f75976262014a363c7d71be
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

The complete Kova bundle remains in [Actions artifact 8609423837](https://github.com/openclaw/openclaw/actions/runs/30125824733/artifacts/8609423837); its checksum is published under the bundles directory.
