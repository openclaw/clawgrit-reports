# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-214308-89e262
- Generated: 2026-07-24T21:51:29.178Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 960 MB | 964 MB | 965 MB |
| fresh-install | fresh | Gateway RSS | 960 MB | 964 MB | 965 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 11.6 ms | 12.4 ms | 12.5 ms |
| fresh-install | onboarded-user | Primary RSS | 980 MB | 1,022 MB | 1,027 MB |
| fresh-install | onboarded-user | Gateway RSS | 980 MB | 1,022 MB | 1,027 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 155 % | 155 % |
| fresh-install | onboarded-user | Event Loop Max | 10.5 ms | 18.5 ms | 19.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 950 MB | 964 MB | 965 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 950 MB | 964 MB | 965 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.6 ms | 19.2 ms | 19.3 ms |
| bundled-plugin-startup | fresh | Primary RSS | 966 MB | 967 MB | 968 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 966 MB | 967 MB | 968 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 16 ms | 17 ms | 17.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 961 MB | 970 MB | 971 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 153 % | 154 % | 154 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,910 ms | 5,030 ms | 5,044 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,919 ms | 5,032 ms | 5,045 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,891 ms | 5,006 ms | 5,019 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,501 ms | 4,634 ms | 4,649 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 978 MB | 978 MB | 978 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 978 MB | 978 MB | 978 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.6 ms | 20.4 ms | 20.7 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 966 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 961 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 968 | <= 950 |

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
- Tested ref: 0db838e08d502abeacff2a78f75443ea57d4d14e
- Tested SHA: 0db838e08d502abeacff2a78f75443ea57d4d14e
- Workflow ref: main
- Workflow SHA: d734df9d0fcc5fd1bce2c86b962bf911d8828fdb
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

The complete Kova bundle remains in [Actions artifact 8610394036](https://github.com/openclaw/openclaw/actions/runs/30128583644/artifacts/8610394036); its checksum is published under the bundles directory.
