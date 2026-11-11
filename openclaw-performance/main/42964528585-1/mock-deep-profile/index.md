# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261111-051711-52eae4
- Generated: 2026-11-11T05:31:23.074Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,480 MB | 1,480 MB | 1,480 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,480 MB | 1,480 MB | 1,480 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 228 % | 228 % | 228 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 51.4 ms | 51.4 ms | 51.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 903 MB | 903 MB | 903 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 285 % | 285 % | 285 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 21,009 ms | 21,009 ms | 21,009 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 21,009 ms | 21,009 ms | 21,009 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,480 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,581 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | no-provider-request | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 36aa3b591d54def192ec6f189e4b7f96e824ed91
- Workflow ref: main
- Workflow SHA: 36aa3b591d54def192ec6f189e4b7f96e824ed91
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13831037421](https://github.com/openclaw/openclaw/actions/runs/42964528585/artifacts/13831037421); its checksum is published under the bundles directory.
