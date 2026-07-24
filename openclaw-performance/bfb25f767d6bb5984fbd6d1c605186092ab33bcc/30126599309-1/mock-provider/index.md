# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-210805-7525d6
- Generated: 2026-07-24T21:17:19.832Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 14, FAIL: 4
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 980 MB | 984 MB | 985 MB |
| fresh-install | fresh | Gateway RSS | 980 MB | 984 MB | 985 MB |
| fresh-install | fresh | Max CPU | 156 % | 161 % | 162 % |
| fresh-install | fresh | Event Loop Max | 12.8 ms | 13.2 ms | 13.3 ms |
| fresh-install | onboarded-user | Primary RSS | 980 MB | 980 MB | 981 MB |
| fresh-install | onboarded-user | Gateway RSS | 980 MB | 980 MB | 981 MB |
| fresh-install | onboarded-user | Max CPU | 154 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.7 ms | 11.7 ms | 11.8 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 964 MB | 967 MB | 967 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 964 MB | 967 MB | 967 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 151 % | 157 % | 158 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 20.6 ms | 24.8 ms | 25.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 974 MB | 987 MB | 989 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 974 MB | 987 MB | 989 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 158 % | 158 % |
| bundled-plugin-startup | fresh | Event Loop Max | 20.8 ms | 20.9 ms | 20.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 998 MB | 1,013 MB | 1,015 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 158 % | 168 % | 169 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,300 ms | 6,042 ms | 6,125 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,126 ms | 5,283 ms | 5,300 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,309 ms | 6,082 ms | 6,168 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,886 ms | 5,556 ms | 5,631 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 977 MB | 977 MB | 977 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 977 MB | 977 MB | 977 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 166 % | 167 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18.9 ms | 20.4 ms | 20.6 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 974 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 962 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 989 | <= 950 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,015 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,015 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.peakRssMb | 1,015 | <= 1000 |

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
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: bfb25f767d6bb5984fbd6d1c605186092ab33bcc
- Tested SHA: bfb25f767d6bb5984fbd6d1c605186092ab33bcc
- Workflow ref: main
- Workflow SHA: c0c12da9f25bd91fe91d54cf5d1ec999b6eebcdf
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

The complete Kova bundle remains in [Actions artifact 8609677372](https://github.com/openclaw/openclaw/actions/runs/30126599309/artifacts/8609677372); its checksum is published under the bundles directory.
