# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260728-061438-2bc597
- Generated: 2026-07-28T06:22:42.713Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 16, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 964 MB | 973 MB | 974 MB |
| fresh-install | fresh | Gateway RSS | 964 MB | 973 MB | 974 MB |
| fresh-install | fresh | Max CPU | 156 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 12.8 ms | 13.9 ms | 14 ms |
| fresh-install | onboarded-user | Primary RSS | 974 MB | 987 MB | 989 MB |
| fresh-install | onboarded-user | Gateway RSS | 974 MB | 987 MB | 989 MB |
| fresh-install | onboarded-user | Max CPU | 155 % | 156 % | 156 % |
| fresh-install | onboarded-user | Event Loop Max | 16 ms | 16.3 ms | 16.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,019 MB | 1,053 MB | 1,057 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,019 MB | 1,053 MB | 1,057 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 156 % | 157 % | 157 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.2 ms | 15.4 ms | 15.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,000 MB | 1,052 MB | 1,057 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,000 MB | 1,052 MB | 1,057 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.5 ms | 21.9 ms | 21.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 993 MB | 995 MB | 995 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 172 % | 175 % | 176 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,071 ms | 4,207 ms | 4,222 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,016 ms | 4,069 ms | 4,075 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,997 ms | 4,218 ms | 4,242 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,927 ms | 4,061 ms | 4,076 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 992 MB | 1,006 MB | 1,008 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 992 MB | 1,006 MB | 1,008 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 16.2 ms | 18.2 ms | 18.5 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,057 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,057 | <= 1000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 282b16d3e0e56d85297fff3d8b03bc513fb4dc79
- Tested SHA: 282b16d3e0e56d85297fff3d8b03bc513fb4dc79
- Workflow ref: main
- Workflow SHA: faa7b2fe11328993ee4b540c28507ec159911e22
- Kova repository: openclaw/Kova
- Kova ref: 517952b835640a368c4af6dfe6dc8365ae841b57
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, CLI startup, and SQLite state smoke numbers are in [source/index.md](source/index.md).

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8678633205](https://github.com/openclaw/openclaw/actions/runs/30334103320/artifacts/8678633205); its checksum is published under the bundles directory.
