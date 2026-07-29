# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260729-183225-a4358e
- Generated: 2026-07-29T18:41:44.326Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 8, FAIL: 10
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 926 MB | 1,052 MB | 1,066 MB |
| fresh-install | fresh | Gateway RSS | 926 MB | 1,052 MB | 1,066 MB |
| fresh-install | fresh | Max CPU | 162 % | 166 % | 166 % |
| fresh-install | fresh | Event Loop Max | 12 ms | 13.9 ms | 14.1 ms |
| fresh-install | onboarded-user | Primary RSS | 928 MB | 938 MB | 939 MB |
| fresh-install | onboarded-user | Gateway RSS | 928 MB | 938 MB | 939 MB |
| fresh-install | onboarded-user | Max CPU | 157 % | 157 % | 157 % |
| fresh-install | onboarded-user | Event Loop Max | 14.7 ms | 14.8 ms | 14.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 967 MB | 1,008 MB | 1,012 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 967 MB | 1,008 MB | 1,012 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 157 % | 157 % | 157 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 13.6 ms | 17.4 ms | 17.8 ms |
| bundled-plugin-startup | fresh | Primary RSS | 1,036 MB | 1,053 MB | 1,055 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 1,036 MB | 1,053 MB | 1,055 MB |
| bundled-plugin-startup | fresh | Max CPU | 159 % | 160 % | 160 % |
| bundled-plugin-startup | fresh | Event Loop Max | 24.5 ms | 27.9 ms | 28.3 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,013 MB | 1,034 MB | 1,036 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 173 % | 174 % | 174 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,918 ms | 4,257 ms | 4,295 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,779 ms | 3,911 ms | 3,926 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 3,899 ms | 4,288 ms | 4,331 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,799 ms | 4,115 ms | 4,150 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,047 MB | 1,066 MB | 1,069 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,047 MB | 1,066 MB | 1,069 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 162 % | 166 % | 166 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 22.9 ms | 36.1 ms | 37.6 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| fresh-install | fresh | peakRssMb | 1,066 | <= 1050 |
| fresh-install | fresh | resourceByRole.gateway.peakRssMb | 1,066 | <= 1050 |
| fresh-install | onboarded-user | resourceByRole.model-cli.peakRssMb | 753 | <= 700 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,055 | <= 1000 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,036 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,012 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,012 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,012 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,013 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,013 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,013 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,036 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,036 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,036 | <= 1000 |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,069 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway.peakRssMb | 1,069 | <= 1050 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 687 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 668 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 675 | <= 650 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | PASS |  |
| fresh-install | fresh | FAIL |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | PASS |  |
| fresh-install | onboarded-user | FAIL |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-runtime-deps | missing-plugin-index | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
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
- Tested ref: 2cf3aefdd00cd98875b97ad92fb0f7a16634e2ed
- Tested SHA: 2cf3aefdd00cd98875b97ad92fb0f7a16634e2ed
- Workflow ref: main
- Workflow SHA: 97d374b357ebe2d389a9d512d70e689fd1af85cb
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

The complete Kova bundle remains in [Actions artifact 8735655448](https://github.com/openclaw/openclaw/actions/runs/30480284039/artifacts/8735655448); its checksum is published under the bundles directory.
