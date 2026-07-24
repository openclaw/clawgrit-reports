# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260724-152430-8561b1
- Generated: 2026-07-24T15:34:47.746Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 17, FAIL: 1
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 949 MB | 971 MB | 974 MB |
| fresh-install | fresh | Gateway RSS | 949 MB | 971 MB | 974 MB |
| fresh-install | fresh | Max CPU | 153 % | 159 % | 160 % |
| fresh-install | fresh | Event Loop Max | 11.1 ms | 15.8 ms | 16.3 ms |
| fresh-install | onboarded-user | Primary RSS | 945 MB | 960 MB | 961 MB |
| fresh-install | onboarded-user | Gateway RSS | 945 MB | 960 MB | 961 MB |
| fresh-install | onboarded-user | Max CPU | 157 % | 159 % | 159 % |
| fresh-install | onboarded-user | Event Loop Max | 10.4 ms | 12.2 ms | 12.4 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 930 MB | 950 MB | 952 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 930 MB | 950 MB | 952 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 155 % | 155 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 21.1 ms | 22.9 ms | 23.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 943 MB | 945 MB | 945 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 943 MB | 945 MB | 945 MB |
| bundled-plugin-startup | fresh | Max CPU | 154 % | 155 % | 155 % |
| bundled-plugin-startup | fresh | Event Loop Max | 18.3 ms | 27.2 ms | 28.1 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 958 MB | 980 MB | 982 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 172 % | 182 % | 183 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 5,831 ms | 16,200 ms | 17,352 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 5,198 ms | 5,790 ms | 5,856 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 5,555 ms | 16,748 ms | 17,992 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 5,468 ms | 15,479 ms | 16,591 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 951 MB | 952 MB | 953 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 951 MB | 952 MB | 953 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 157 % | 158 % | 158 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 26.2 ms | 27.2 ms | 27.3 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,221 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 17,992 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,221 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

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
| bundled-plugin-startup | fresh | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | PASS |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 8251fe627757dcf318cc05661c1f11156e659693
- Tested SHA: 8251fe627757dcf318cc05661c1f11156e659693
- Workflow ref: main
- Workflow SHA: 049a17860c5b47a88cc470edee1a65f53bb79442
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

The complete Kova bundle remains in [Actions artifact 8601550547](https://github.com/openclaw/openclaw/actions/runs/30105050529/artifacts/8601550547); its checksum is published under the bundles directory.
