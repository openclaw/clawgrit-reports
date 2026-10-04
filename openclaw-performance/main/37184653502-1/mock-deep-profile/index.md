# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261004-070539-8fe9a9
- Generated: 2026-10-04T07:13:31.091Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,301 MB | 1,301 MB | 1,301 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,301 MB | 1,301 MB | 1,301 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 220 % | 220 % | 220 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.6 ms | 19.6 ms | 19.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,063 MB | 1,063 MB | 1,063 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 283 % | 283 % | 283 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 13,071 ms | 13,071 ms | 13,071 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,071 ms | 13,071 ms | 13,071 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,301 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,475 | <= 1440 |
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
- Tested SHA: 9480581481a64c3f4050a6af9b8b615ce209dd05
- Workflow ref: main
- Workflow SHA: 9480581481a64c3f4050a6af9b8b615ce209dd05
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11297061329](https://github.com/openclaw/openclaw/actions/runs/37184653502/artifacts/11297061329); its checksum is published under the bundles directory.
