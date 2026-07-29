# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260729-164106-7fac65
- Generated: 2026-07-29T16:53:48.881Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 10, FAIL: 8
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 926 MB | 1,054 MB | 1,068 MB |
| fresh-install | fresh | Gateway RSS | 926 MB | 1,054 MB | 1,068 MB |
| fresh-install | fresh | Max CPU | 167 % | 169 % | 169 % |
| fresh-install | fresh | Event Loop Max | 16.8 ms | 22.3 ms | 22.9 ms |
| fresh-install | onboarded-user | Primary RSS | 928 MB | 947 MB | 949 MB |
| fresh-install | onboarded-user | Gateway RSS | 928 MB | 947 MB | 949 MB |
| fresh-install | onboarded-user | Max CPU | 166 % | 172 % | 173 % |
| fresh-install | onboarded-user | Event Loop Max | 28.2 ms | 43 ms | 44.7 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 997 MB | 1,009 MB | 1,010 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 997 MB | 1,009 MB | 1,010 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 164 % | 167 % | 167 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21.3 ms | 21.5 ms | 21.6 ms |
| bundled-plugin-startup | fresh | Primary RSS | 987 MB | 1,034 MB | 1,039 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 987 MB | 1,034 MB | 1,039 MB |
| bundled-plugin-startup | fresh | Max CPU | 166 % | 167 % | 167 % |
| bundled-plugin-startup | fresh | Event Loop Max | 30.5 ms | 33.3 ms | 33.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,026 MB | 1,027 MB | 1,027 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 189 % | 191 % | 191 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,410 ms | 6,008 ms | 6,075 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,431 ms | 6,040 ms | 6,108 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,007 ms | 5,402 ms | 5,446 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,242 ms | 5,814 ms | 5,877 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,036 MB | 1,055 MB | 1,057 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,036 MB | 1,055 MB | 1,057 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 170 % | 171 % | 171 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 25.7 ms | 28.2 ms | 28.5 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,068 | <= 1050 |
| fresh-install | fresh | resourceByRole.gateway.peakRssMb | 1,068 | <= 1050 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,039 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,013 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,013 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,013 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,027 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,027 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,027 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,026 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,026 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,026 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,057 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 1,057 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 699 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 667 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 680 | <= 650 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |
| gateway-performance | many-bundled-plugins | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 003a275fc0bf73c822caca8cbdae80f8f181dd9b
- Tested SHA: 003a275fc0bf73c822caca8cbdae80f8f181dd9b
- Workflow ref: main
- Workflow SHA: 4229e96e0ec3394ab9d154d09992d825c64d8685
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

The complete Kova bundle remains in [Actions artifact 8732372148](https://github.com/openclaw/openclaw/actions/runs/30471761630/artifacts/8732372148); its checksum is published under the bundles directory.
