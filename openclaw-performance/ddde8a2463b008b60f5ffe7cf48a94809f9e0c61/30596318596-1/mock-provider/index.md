# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260731-012714-fdd268
- Generated: 2026-07-31T01:36:41.454Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 8, FAIL: 10
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 935 MB | 948 MB | 949 MB |
| fresh-install | fresh | Gateway RSS | 935 MB | 948 MB | 949 MB |
| fresh-install | fresh | Max CPU | 157 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 13 ms | 15.9 ms | 16.3 ms |
| fresh-install | onboarded-user | Primary RSS | 930 MB | 960 MB | 963 MB |
| fresh-install | onboarded-user | Gateway RSS | 930 MB | 960 MB | 963 MB |
| fresh-install | onboarded-user | Max CPU | 156 % | 157 % | 157 % |
| fresh-install | onboarded-user | Event Loop Max | 12.8 ms | 13.9 ms | 14 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,005 MB | 1,074 MB | 1,081 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,005 MB | 1,074 MB | 1,081 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 160 % | 163 % | 163 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 13.8 ms | 17.4 ms | 17.8 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,009 MB | 1,040 MB | 1,044 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,009 MB | 1,040 MB | 1,044 MB |
| bundled-plugin-startup | fresh | Max CPU | 159 % | 159 % | 159 % |
| bundled-plugin-startup | fresh | Event Loop Max | 14.8 ms | 17.9 ms | 18.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,025 MB | 1,026 MB | 1,026 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 173 % | 179 % | 180 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,860 ms | 4,145 ms | 4,177 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,786 ms | 4,143 ms | 4,183 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,865 ms | 4,037 ms | 4,056 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,746 ms | 4,016 ms | 4,046 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,005 MB | 1,007 MB | 1,007 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,005 MB | 1,007 MB | 1,007 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 158 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.9 ms | 22.1 ms | 22.4 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | onboarded-user | resourceByRole.model-cli.peakRssMb | 741 | <= 700 |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,081 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,009 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,044 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,024 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,024 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,024 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,025 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,025 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,025 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,026 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,026 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,026 | <= 1000 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 735 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 672 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 660 | <= 650 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: ddde8a2463b008b60f5ffe7cf48a94809f9e0c61
- Tested SHA: ddde8a2463b008b60f5ffe7cf48a94809f9e0c61
- Workflow ref: main
- Workflow SHA: 32036c473dec656b16c315581280cc807da2a6aa
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

The complete Kova bundle remains in [Actions artifact 8780402091](https://github.com/openclaw/openclaw/actions/runs/30596318596/artifacts/8780402091); its checksum is published under the bundles directory.
