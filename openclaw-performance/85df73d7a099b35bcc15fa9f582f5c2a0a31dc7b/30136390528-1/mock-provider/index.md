# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-003013-babfe5
- Generated: 2026-07-25T00:37:46.537Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 15, FAIL: 3
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 983 MB | 983 MB | 983 MB |
| fresh-install | fresh | Gateway RSS | 983 MB | 983 MB | 983 MB |
| fresh-install | fresh | Max CPU | 153 % | 155 % | 155 % |
| fresh-install | fresh | Event Loop Max | 11.2 ms | 11.9 ms | 12 ms |
| fresh-install | onboarded-user | Primary RSS | 976 MB | 986 MB | 987 MB |
| fresh-install | onboarded-user | Gateway RSS | 976 MB | 986 MB | 987 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 11 ms | 12.2 ms | 12.3 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 965 MB | 970 MB | 971 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 965 MB | 970 MB | 971 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 153 % | 157 % | 157 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 18.8 ms | 25.3 ms | 26.1 ms |
| bundled-plugin-startup | fresh | Primary RSS | 977 MB | 980 MB | 980 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 977 MB | 980 MB | 980 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 19.4 ms | 24.9 ms | 25.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 985 MB | 997 MB | 999 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 155 % | 155 % | 155 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 4,549 ms | 4,598 ms | 4,603 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 4,553 ms | 4,603 ms | 4,608 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 4,504 ms | 4,515 ms | 4,516 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 4,140 ms | 4,184 ms | 4,188 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 980 MB | 986 MB | 986 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 980 MB | 986 MB | 986 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 152 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.8 ms | 19.8 ms | 20 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 975 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 977 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 980 | <= 950 |

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
- Tested ref: 85df73d7a099b35bcc15fa9f582f5c2a0a31dc7b
- Tested SHA: 85df73d7a099b35bcc15fa9f582f5c2a0a31dc7b
- Workflow ref: main
- Workflow SHA: 877ae06c1032bb8c3dc03aff4125eadde58d9b68
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

The complete Kova bundle remains in [Actions artifact 8613038339](https://github.com/openclaw/openclaw/actions/runs/30136390528/artifacts/8613038339); its checksum is published under the bundles directory.
