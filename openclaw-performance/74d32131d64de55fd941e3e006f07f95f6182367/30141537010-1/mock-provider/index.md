# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-030412-0b9533
- Generated: 2026-07-25T03:11:40.588Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 978 MB | 988 MB | 990 MB |
| fresh-install | fresh | Gateway RSS | 978 MB | 988 MB | 990 MB |
| fresh-install | fresh | Max CPU | 153 % | 155 % | 155 % |
| fresh-install | fresh | Event Loop Max | 11.9 ms | 12.1 ms | 12.1 ms |
| fresh-install | onboarded-user | Primary RSS | 977 MB | 982 MB | 983 MB |
| fresh-install | onboarded-user | Gateway RSS | 977 MB | 982 MB | 983 MB |
| fresh-install | onboarded-user | Max CPU | 154 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 10.5 ms | 11.4 ms | 11.5 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 962 MB | 962 MB | 962 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 962 MB | 962 MB | 962 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 155 % | 156 % | 156 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.7 ms | 19.3 ms | 19.4 ms |
| bundled-plugin-startup | fresh | Primary RSS | 977 MB | 978 MB | 978 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 977 MB | 978 MB | 978 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 156 % | 156 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.7 ms | 19.8 ms | 19.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 962 MB | 973 MB | 974 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 154 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,677 ms | 4,718 ms | 4,722 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,682 ms | 4,723 ms | 4,727 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,633 ms | 4,664 ms | 4,667 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,295 ms | 4,310 ms | 4,312 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 964 MB | 981 MB | 983 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 964 MB | 981 MB | 983 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 153 % | 153 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 12.9 ms | 21.1 ms | 22 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 978 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 966 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 977 | <= 950 |

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
- Tested ref: 74d32131d64de55fd941e3e006f07f95f6182367
- Tested SHA: 74d32131d64de55fd941e3e006f07f95f6182367
- Workflow ref: main
- Workflow SHA: d4a90c7bbb69b78990582a3b8952ff99f1812fa3
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

The complete Kova bundle remains in [Actions artifact 8614694126](https://github.com/openclaw/openclaw/actions/runs/30141537010/artifacts/8614694126); its checksum is published under the bundles directory.
