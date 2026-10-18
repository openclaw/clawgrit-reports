# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261018-052247-f5335f
- Generated: 2026-10-18T05:32:08.545Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,664 MB | 1,664 MB | 1,664 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,664 MB | 1,664 MB | 1,664 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 244 % | 244 % | 244 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 37.2 ms | 37.2 ms | 37.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,588 MB | 1,588 MB | 1,588 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 311 % | 311 % | 311 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,328 ms | 11,328 ms | 11,328 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,328 ms | 11,328 ms | 11,328 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,664 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,795 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":282.5,"upper":311.3} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | missingDependencyErrors | 1 | <= 0 |
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
- Tested SHA: 0a80f9e0b10e5bec3bbfe342ce8fd70e9135ae86
- Workflow ref: main
- Workflow SHA: 0a80f9e0b10e5bec3bbfe342ce8fd70e9135ae86
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12126487471](https://github.com/openclaw/openclaw/actions/runs/39100239041/artifacts/12126487471); its checksum is published under the bundles directory.
