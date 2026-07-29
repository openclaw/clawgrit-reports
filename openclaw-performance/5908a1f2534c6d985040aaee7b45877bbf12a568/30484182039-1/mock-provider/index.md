# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260729-192440-177d0f
- Generated: 2026-07-29T19:34:45.659Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 7, FAIL: 11
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 931 MB | 944 MB | 946 MB |
| fresh-install | fresh | Gateway RSS | 931 MB | 944 MB | 946 MB |
| fresh-install | fresh | Max CPU | 159 % | 159 % | 159 % |
| fresh-install | fresh | Event Loop Max | 16.1 ms | 16.9 ms | 16.9 ms |
| fresh-install | onboarded-user | Primary RSS | 933 MB | 944 MB | 945 MB |
| fresh-install | onboarded-user | Gateway RSS | 933 MB | 944 MB | 945 MB |
| fresh-install | onboarded-user | Max CPU | 157 % | 162 % | 162 % |
| fresh-install | onboarded-user | Event Loop Max | 13.8 ms | 14.3 ms | 14.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,053 MB | 1,055 MB | 1,055 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,053 MB | 1,055 MB | 1,055 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 165 % | 165 % | 165 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 19.4 ms | 23.1 ms | 23.5 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,067 MB | 1,082 MB | 1,084 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,067 MB | 1,082 MB | 1,084 MB |
| bundled-plugin-startup | fresh | Max CPU | 168 % | 170 % | 170 % |
| bundled-plugin-startup | fresh | Event Loop Max | 27.1 ms | 52.9 ms | 55.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,008 MB | 1,027 MB | 1,030 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 184 % | 192 % | 193 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,421 ms | 5,668 ms | 5,695 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,441 ms | 5,682 ms | 5,709 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,038 ms | 5,396 ms | 5,436 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,237 ms | 5,451 ms | 5,474 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 977 MB | 1,046 MB | 1,054 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 977 MB | 1,046 MB | 1,054 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 166 % | 168 % | 168 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 27.6 ms | 30.1 ms | 30.4 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,053 | <= 1050 |
| bundled-runtime-deps | missing-plugin-index | resourceByRole.gateway.peakRssMb | 1,055 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,067 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,084 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,032 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,030 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,030 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,030 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,006 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,006 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,006 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,008 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,008 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,008 | <= 1000 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 688 | <= 650 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,054 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 1,054 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 682 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 675 | <= 650 |

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
| bundled-runtime-deps | missing-plugin-index | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 5908a1f2534c6d985040aaee7b45877bbf12a568
- Tested SHA: 5908a1f2534c6d985040aaee7b45877bbf12a568
- Workflow ref: main
- Workflow SHA: 066241a0d0664074927cf3393cb63cff84280e7c
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

The complete Kova bundle remains in [Actions artifact 8737242443](https://github.com/openclaw/openclaw/actions/runs/30484182039/artifacts/8737242443); its checksum is published under the bundles directory.
