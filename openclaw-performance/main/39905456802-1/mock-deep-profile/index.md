# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261023-052458-468ab5
- Generated: 2026-10-23T05:35:38.477Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,877 MB | 1,877 MB | 1,877 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,877 MB | 1,877 MB | 1,877 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 289 % | 289 % | 289 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 2,378 ms | 2,378 ms | 2,378 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,525 MB | 1,525 MB | 1,525 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 338 % | 338 % | 338 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 27,253 ms | 27,253 ms | 27,253 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 27,253 ms | 27,253 ms | 27,253 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,877 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,124 | <= 1440 |
| gateway-performance | many-bundled-plugins | eventLoopDelayMentions | 1 | <= 0 |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU census lost unobserved process roles before counters could be captured"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | null | finite non-negative turn measurement |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 4c35e9503fd245a3a5222ece69953fbd4a429e2f
- Workflow ref: main
- Workflow SHA: 4c35e9503fd245a3a5222ece69953fbd4a429e2f
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12480867085](https://github.com/openclaw/openclaw/actions/runs/39905456802/artifacts/12480867085); its checksum is published under the bundles directory.
