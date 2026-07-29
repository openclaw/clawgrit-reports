# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260729-042039-e5cd77
- Generated: 2026-07-29T04:29:01.787Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 11, FAIL: 7
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 926 MB | 935 MB | 936 MB |
| fresh-install | fresh | Gateway RSS | 926 MB | 935 MB | 936 MB |
| fresh-install | fresh | Max CPU | 157 % | 159 % | 159 % |
| fresh-install | fresh | Event Loop Max | 11.4 ms | 12.3 ms | 12.4 ms |
| fresh-install | onboarded-user | Primary RSS | 931 MB | 935 MB | 936 MB |
| fresh-install | onboarded-user | Gateway RSS | 931 MB | 935 MB | 936 MB |
| fresh-install | onboarded-user | Max CPU | 158 % | 160 % | 160 % |
| fresh-install | onboarded-user | Event Loop Max | 14.3 ms | 14.7 ms | 14.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 1,028 MB | 1,038 MB | 1,039 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 1,028 MB | 1,038 MB | 1,039 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 159 % | 161 % | 161 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21 ms | 21.7 ms | 21.8 ms |
| bundled-plugin-startup | fresh | Primary RSS | 969 MB | 1,037 MB | 1,045 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 969 MB | 1,037 MB | 1,045 MB |
| bundled-plugin-startup | fresh | Max CPU | 161 % | 162 % | 162 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.1 ms | 20.7 ms | 20.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,008 MB | 1,049 MB | 1,054 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 175 % | 176 % | 176 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,082 ms | 4,112 ms | 4,116 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,975 ms | 4,007 ms | 4,010 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,092 ms | 4,120 ms | 4,123 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 3,936 ms | 3,960 ms | 3,963 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 953 MB | 959 MB | 959 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 953 MB | 959 MB | 959 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 160 % | 161 % | 161 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.8 ms | 21.6 ms | 21.6 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 1,045 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,007 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,007 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,007 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,008 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,008 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,008 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,054 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,054 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,054 | <= 1000 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 668 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 678 | <= 650 |
| gateway-performance | many-bundled-plugins | resourceByRole.model-cli.peakRssMb | 670 | <= 650 |

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
- Tested ref: 52ef043a5b2b42e05c527531ceb8d9b30633c2c7
- Tested SHA: 52ef043a5b2b42e05c527531ceb8d9b30633c2c7
- Workflow ref: main
- Workflow SHA: 9c118dd38f5424d826c99413d3e48e919f3aa449
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

The complete Kova bundle remains in [Actions artifact 8712369257](https://github.com/openclaw/openclaw/actions/runs/30421959763/artifacts/8712369257); its checksum is published under the bundles directory.
