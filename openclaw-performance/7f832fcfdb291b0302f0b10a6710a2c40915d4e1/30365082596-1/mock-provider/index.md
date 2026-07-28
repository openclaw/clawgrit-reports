# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260728-134810-87a9f1
- Generated: 2026-07-28T13:57:58.751Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 11, FAIL: 7
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 926 MB | 934 MB | 935 MB |
| fresh-install | fresh | Gateway RSS | 926 MB | 934 MB | 935 MB |
| fresh-install | fresh | Max CPU | 162 % | 164 % | 164 % |
| fresh-install | fresh | Event Loop Max | 15.9 ms | 17 ms | 17.1 ms |
| fresh-install | onboarded-user | Primary RSS | 921 MB | 949 MB | 952 MB |
| fresh-install | onboarded-user | Gateway RSS | 921 MB | 949 MB | 952 MB |
| fresh-install | onboarded-user | Max CPU | 160 % | 164 % | 164 % |
| fresh-install | onboarded-user | Event Loop Max | 13.7 ms | 18.2 ms | 18.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,038 MB | 1,071 MB | 1,075 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,038 MB | 1,071 MB | 1,075 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 157 % | 161 % | 161 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 23.1 ms | 39.9 ms | 41.8 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,004 MB | 1,023 MB | 1,025 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,004 MB | 1,023 MB | 1,025 MB |
| bundled-plugin-startup | fresh | Max CPU | 164 % | 164 % | 164 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.6 ms | 29.4 ms | 30.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,063 MB | 1,094 MB | 1,098 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 186 % | 186 % | 186 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,691 ms | 4,876 ms | 4,897 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,324 ms | 4,842 ms | 4,900 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,710 ms | 4,819 ms | 4,831 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,519 ms | 4,697 ms | 4,717 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,006 MB | 1,048 MB | 1,053 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,006 MB | 1,048 MB | 1,053 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 158 % | 161 % | 161 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 31.2 ms | 34.1 ms | 34.4 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,075 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,004 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,025 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,098 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,098 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,098 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,063 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,063 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,063 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,019 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,019 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,019 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,053 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 1,053 | <= 1050 |

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
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 7f832fcfdb291b0302f0b10a6710a2c40915d4e1
- Tested SHA: 7f832fcfdb291b0302f0b10a6710a2c40915d4e1
- Workflow ref: main
- Workflow SHA: 285cee7a48faf5ede81b6ff25c2568ed3e455005
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

The complete Kova bundle remains in [Actions artifact 8690789262](https://github.com/openclaw/openclaw/actions/runs/30365082596/artifacts/8690789262); its checksum is published under the bundles directory.
