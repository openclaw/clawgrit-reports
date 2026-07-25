# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-023419-5c08e2
- Generated: 2026-07-25T02:41:44.572Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 984 MB | 987 MB | 988 MB |
| fresh-install | fresh | Gateway RSS | 984 MB | 987 MB | 988 MB |
| fresh-install | fresh | Max CPU | 154 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 11 ms | 11.6 ms | 11.7 ms |
| fresh-install | onboarded-user | Primary RSS | 976 MB | 977 MB | 977 MB |
| fresh-install | onboarded-user | Gateway RSS | 976 MB | 977 MB | 977 MB |
| fresh-install | onboarded-user | Max CPU | 155 % | 155 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 10.7 ms | 11.8 ms | 11.9 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 970 MB | 972 MB | 972 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 970 MB | 972 MB | 972 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.1 ms | 23.9 ms | 24.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 959 MB | 976 MB | 978 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 959 MB | 976 MB | 978 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.8 ms | 22.2 ms | 22.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 980 MB | 985 MB | 986 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 154 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,535 ms | 4,574 ms | 4,578 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,537 ms | 4,577 ms | 4,581 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,505 ms | 4,527 ms | 4,529 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,150 ms | 4,181 ms | 4,185 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 964 MB | 982 MB | 984 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 964 MB | 982 MB | 984 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 15.9 ms | 18 ms | 18.3 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 959 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 978 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 952 | <= 950 |

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
- Tested ref: 0ec7068eef8b8d8a2ee855bff0e18ce52eadfe8e
- Tested SHA: 0ec7068eef8b8d8a2ee855bff0e18ce52eadfe8e
- Workflow ref: main
- Workflow SHA: d4a90c7bbb69b78990582a3b8952ff99f1812fa3
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

The complete Kova bundle remains in [Actions artifact 8614399606](https://github.com/openclaw/openclaw/actions/runs/30140643614/artifacts/8614399606); its checksum is published under the bundles directory.
