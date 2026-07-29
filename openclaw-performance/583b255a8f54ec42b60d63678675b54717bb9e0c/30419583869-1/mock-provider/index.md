# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260729-032748-04bdad
- Generated: 2026-07-29T03:36:02.546Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 11, FAIL: 7
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 945 MB | 949 MB | 950 MB |
| fresh-install | fresh | Gateway RSS | 945 MB | 949 MB | 950 MB |
| fresh-install | fresh | Max CPU | 159 % | 162 % | 162 % |
| fresh-install | fresh | Event Loop Max | 14.2 ms | 17.6 ms | 18 ms |
| fresh-install | onboarded-user | Primary RSS | 945 MB | 947 MB | 947 MB |
| fresh-install | onboarded-user | Gateway RSS | 945 MB | 947 MB | 947 MB |
| fresh-install | onboarded-user | Max CPU | 158 % | 159 % | 159 % |
| fresh-install | onboarded-user | Event Loop Max | 10.9 ms | 16 ms | 16.5 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,026 MB | 1,065 MB | 1,070 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,026 MB | 1,065 MB | 1,070 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 162 % | 196 % | 200 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 19.8 ms | 23 ms | 23.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 991 MB | 993 MB | 993 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 991 MB | 993 MB | 993 MB |
| bundled-plugin-startup | fresh | Max CPU | 161 % | 164 % | 164 % |
| bundled-plugin-startup | fresh | Event Loop Max | 22.5 ms | 30.5 ms | 31.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,012 MB | 1,025 MB | 1,027 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 178 % | 179 % | 179 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,986 ms | 4,142 ms | 4,159 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,991 ms | 4,046 ms | 4,052 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,896 ms | 4,138 ms | 4,165 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,821 ms | 3,987 ms | 4,006 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 971 MB | 1,002 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 971 MB | 1,002 MB | 1,006 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 160 % | 160 % | 160 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.9 ms | 20 ms | 20 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,070 | <= 1050 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,012 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,012 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,012 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,027 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,027 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,027 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,005 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,005 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,005 | <= 1000 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 676 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 674 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 667 | <= 650 |

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
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 583b255a8f54ec42b60d63678675b54717bb9e0c
- Tested SHA: 583b255a8f54ec42b60d63678675b54717bb9e0c
- Workflow ref: main
- Workflow SHA: efec26b2dfab49845b45edcdc47281f2574328a0
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

The complete Kova bundle remains in [Actions artifact 8711544577](https://github.com/openclaw/openclaw/actions/runs/30419583869/artifacts/8711544577); its checksum is published under the bundles directory.
