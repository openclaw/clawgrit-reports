# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-260725-162602-3cc6f9
- Generated: 2026-07-25T16:33:19.116Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: PASS: 13, FAIL: 5
- Repeat: 3

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| fresh-install | fresh | Primary RSS | 890 MB | 891 MB | 891 MB |
| fresh-install | fresh | Gateway RSS | 890 MB | 891 MB | 891 MB |
| fresh-install | fresh | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | fresh | Event Loop Max | 12 ms | 16.5 ms | 16.9 ms |
| fresh-install | onboarded-user | Primary RSS | 901 MB | 904 MB | 904 MB |
| fresh-install | onboarded-user | Gateway RSS | 901 MB | 904 MB | 904 MB |
| fresh-install | onboarded-user | Max CPU | 153 % | 154 % | 154 % |
| fresh-install | onboarded-user | Event Loop Max | 14.6 ms | 15.8 ms | 16 ms |
| bundled-runtime-deps | missing-plugin-index | Primary RSS | 940 MB | 948 MB | 949 MB |
| bundled-runtime-deps | missing-plugin-index | Gateway RSS | 940 MB | 948 MB | 949 MB |
| bundled-runtime-deps | missing-plugin-index | Max CPU | 154 % | 154 % | 154 % |
| bundled-runtime-deps | missing-plugin-index | Event Loop Max | 19.3 ms | 20.1 ms | 20.2 ms |
| bundled-plugin-startup | fresh | Primary RSS | 952 MB | 954 MB | 954 MB |
| bundled-plugin-startup | fresh | Gateway RSS | 952 MB | 954 MB | 954 MB |
| bundled-plugin-startup | fresh | Max CPU | 153 % | 154 % | 154 % |
| bundled-plugin-startup | fresh | Event Loop Max | 21.3 ms | 23.9 ms | 24.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 934 MB | 935 MB | 935 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 152 % | 152 % | 152 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 3,108 ms | 3,163 ms | 3,169 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 3,108 ms | 3,163 ms | 3,169 ms |
| gateway-performance | many-bundled-plugins | Primary RSS | 979 MB | 998 MB | 1,000 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 979 MB | 998 MB | 1,000 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 153 % | 154 % | 154 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.1 ms | 20.1 ms | 20.2 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 952 | <= 950 |
| bundled-plugin-startup | fresh | resourceByRole.gateway.peakRssMb | 954 | <= 950 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |

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
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |
| gateway-performance | many-bundled-plugins | PASS |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: 4e1c08182b753772a17dbdcc2a25f7e5c3c3000f
- Tested SHA: 4e1c08182b753772a17dbdcc2a25f7e5c3c3000f
- Workflow ref: main
- Workflow SHA: dd606796c1b16b3a498982b0b63c3528f6cda09b
- Kova repository: openclaw/Kova
- Kova ref: 1bf080f6dbf8800a3187591493f2551824e4ccc7
- Kova profile: release
- Kova scenario timeout: 900000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 3
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:bundled-plugin-startup,scenario:bundled-runtime-deps,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 8621541233](https://github.com/openclaw/openclaw/actions/runs/30165582760/artifacts/8621541233); its checksum is published under the bundles directory.
