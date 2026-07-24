# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-184208-66fb37
- Generated: 2026-07-24T18:51:45.089Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 16, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 945 MB | 947 MB | 947 MB |
| fresh-install | fresh | Gateway RSS | 945 MB | 947 MB | 947 MB |
| fresh-install | fresh | Max CPU | 155 % | 157 % | 157 % |
| fresh-install | fresh | Event Loop Max | 11.1 ms | 17.2 ms | 17.9 ms |
| fresh-install | onboarded-user | Primary RSS | 952 MB | 955 MB | 956 MB |
| fresh-install | onboarded-user | Gateway RSS | 952 MB | 955 MB | 956 MB |
| fresh-install | onboarded-user | Max CPU | 159 % | 164 % | 164 % |
| fresh-install | onboarded-user | Event Loop Max | 12.9 ms | 13.9 ms | 14 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 924 MB | 936 MB | 937 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 924 MB | 936 MB | 937 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 159 % | 159 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 15.9 ms | 17.5 ms | 17.7 ms |
| bundled-plugin-startup | fresh | Primary RSS | 955 MB | 956 MB | 956 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 955 MB | 956 MB | 956 MB |
| bundled-plugin-startup | fresh | Max CPU | 156 % | 158 % | 158 % |
| bundled-plugin-startup | fresh | Event Loop Max | 23.7 ms | 24.7 ms | 24.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 985 MB | 990 MB | 991 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 164 % | 166 % | 166 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,510 ms | 5,525 ms | 5,527 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,287 ms | 5,511 ms | 5,536 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,356 ms | 5,505 ms | 5,522 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,176 ms | 5,180 ms | 5,180 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 942 MB | 945 MB | 946 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 942 MB | 945 MB | 946 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 156 % | 156 % | 156 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 20.2 ms | 20.9 ms | 21 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 956 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 955 | <= 950 |

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
| bundled-plugin-startup | fresh | PASS |  |
| bundled-plugin-startup | fresh | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 677ec06fefd0a68329c25db3dda19d04afc1ec0f
- Tested SHA: 677ec06fefd0a68329c25db3dda19d04afc1ec0f
- Workflow ref: main
- Workflow SHA: ab5e2c34efd1af0a1f47591a46a48a9257f15020
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

The complete Kova bundle remains in [Actions artifact 8606416856](https://github.com/openclaw/openclaw/actions/runs/30117859726/artifacts/8606416856); its checksum is published under the bundles directory.
