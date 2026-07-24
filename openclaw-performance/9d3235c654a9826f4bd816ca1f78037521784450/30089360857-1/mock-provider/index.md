# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-112359-8da1a4
- Generated: 2026-07-24T11:31:34.794Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 16, FAIL: 2
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 948 MB | 956 MB | 957 MB |
| fresh-install | fresh | Gateway RSS | 948 MB | 956 MB | 957 MB |
| fresh-install | fresh | Max CPU | 150 % | 156 % | 157 % |
| fresh-install | fresh | Event Loop Max | 10.3 ms | 10.4 ms | 10.4 ms |
| fresh-install | onboarded-user | Primary RSS | 940 MB | 946 MB | 946 MB |
| fresh-install | onboarded-user | Gateway RSS | 940 MB | 946 MB | 946 MB |
| fresh-install | onboarded-user | Max CPU | 152 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 12 ms | 12.9 ms | 13 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 923 MB | 930 MB | 931 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 923 MB | 930 MB | 931 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 149 % | 153 % | 153 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 16.1 ms | 19.8 ms | 20.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 954 MB | 973 MB | 976 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 954 MB | 973 MB | 976 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.8 ms | 19.3 ms | 19.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 983 MB | 984 MB | 984 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 157 % | 158 % | 158 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,564 ms | 4,944 ms | 4,987 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,566 ms | 4,955 ms | 4,998 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,517 ms | 4,748 ms | 4,774 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,243 ms | 4,617 ms | 4,658 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 949 MB | 949 MB | 949 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 949 MB | 949 MB | 949 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 154 % | 157 % | 157 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 18 ms | 20.5 ms | 20.8 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 954 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 976 | <= 950 |

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
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 9d3235c654a9826f4bd816ca1f78037521784450
- Tested SHA: 9d3235c654a9826f4bd816ca1f78037521784450
- Workflow ref: main
- Workflow SHA: 3bfc23c6760bf94f691805f2b2f950b11035cd9f
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

The complete Kova bundle remains in [Actions artifact 8595213341](https://github.com/openclaw/openclaw/actions/runs/30089360857/artifacts/8595213341); its checksum is published under the bundles directory.
