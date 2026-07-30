# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260730-152430-be95f5
- Generated: 2026-07-30T15:36:19.750Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 6, PASS: 12
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 933 MB | 963 MB | 966 MB |
| fresh-install | fresh | Gateway RSS | 933 MB | 963 MB | 966 MB |
| fresh-install | fresh | Max CPU | 163 % | 163 % | 163 % |
| fresh-install | fresh | Event Loop Max | 12.5 ms | 13.5 ms | 13.6 ms |
| fresh-install | onboarded-user | Primary RSS | 936 MB | 955 MB | 957 MB |
| fresh-install | onboarded-user | Gateway RSS | 936 MB | 955 MB | 957 MB |
| fresh-install | onboarded-user | Max CPU | 158 % | 162 % | 162 % |
| fresh-install | onboarded-user | Event Loop Max | 23.2 ms | 26.8 ms | 27.2 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 954 MB | 965 MB | 966 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 954 MB | 965 MB | 966 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 164 % | 166 % | 166 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 22.1 ms | 23.3 ms | 23.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 946 MB | 993 MB | 999 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 946 MB | 993 MB | 999 MB |
| bundled-plugin-startup | fresh | Max CPU | 164 % | 164 % | 164 % |
| bundled-plugin-startup | fresh | Event Loop Max | 25.6 ms | 35.3 ms | 36.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,019 MB | 1,026 MB | 1,027 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 184 % | 187 % | 188 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,136 ms | 5,816 ms | 5,892 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,051 ms | 5,138 ms | 5,148 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,994 ms | 5,863 ms | 5,960 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,893 ms | 5,585 ms | 5,662 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,012 MB | 1,078 MB | 1,085 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,012 MB | 1,078 MB | 1,085 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 166 % | 167 % | 167 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 26.6 ms | 34.7 ms | 35.6 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | resourceByRole.model-cli.peakRssMb | 710 | <= 700 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,016 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,016 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,016 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,027 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,027 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,027 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,019 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,019 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,019 | <= 1000 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 686 | <= 650 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,085 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 1,085 | <= 1050 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | FAIL |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: c4df1a26b63d05635b1455a761bca88c53793658
- Tested SHA: c4df1a26b63d05635b1455a761bca88c53793658
- Workflow ref: main
- Workflow SHA: 90a22b4f50226b13735e77dde81a92340ae724cf
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

The complete Kova bundle remains in [Actions artifact 8765397579](https://github.com/openclaw/openclaw/actions/runs/30556401811/artifacts/8765397579); its checksum is published under the bundles directory.
