# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-011945-1ad5ba
- Generated: 2026-07-25T01:27:11.241Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 970 MB | 981 MB | 982 MB |
| fresh-install | fresh | Gateway RSS | 970 MB | 981 MB | 982 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 10.3 ms | 10.6 ms | 10.7 ms |
| fresh-install | onboarded-user | Primary RSS | 983 MB | 984 MB | 985 MB |
| fresh-install | onboarded-user | Gateway RSS | 983 MB | 984 MB | 985 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.3 ms | 10.3 ms | 10.3 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 949 MB | 960 MB | 961 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 949 MB | 960 MB | 961 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 152 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 17.4 ms | 19.1 ms | 19.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 969 MB | 977 MB | 978 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 969 MB | 977 MB | 978 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.4 ms | 26.6 ms | 27.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 990 MB | 990 MB | 991 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 156 % | 156 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,544 ms | 4,594 ms | 4,599 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,548 ms | 4,600 ms | 4,606 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,476 ms | 4,485 ms | 4,486 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,135 ms | 4,188 ms | 4,194 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 967 MB | 976 MB | 977 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 967 MB | 976 MB | 977 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 152 % | 152 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 13 ms | 17.6 ms | 18.1 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 978 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 961 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 969 | <= 950 |

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
- Tested ref: 4582b93845b8c5775e12adc7f344f718d2c7a600
- Tested SHA: 4582b93845b8c5775e12adc7f344f718d2c7a600
- Workflow ref: main
- Workflow SHA: ab04b2103e850f94fbb92c8d634b83474389363b
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

The complete Kova bundle remains in [Actions artifact 8613644932](https://github.com/openclaw/openclaw/actions/runs/30138236894/artifacts/8613644932); its checksum is published under the bundles directory.
