# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261026-052901-739c6d
- Generated: 2026-10-26T05:38:58.412Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,842 MB | 1,842 MB | 1,842 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,842 MB | 1,842 MB | 1,842 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 252 % | 252 % | 252 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 100 ms | 100 ms | 100 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,134 MB | 2,134 MB | 2,134 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 318 % | 318 % | 318 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 16,301 ms | 16,301 ms | 16,301 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,645 ms | 14,645 ms | 14,645 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 16,388 ms | 16,388 ms | 16,388 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 13,203 ms | 13,203 ms | 13,203 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,842 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,056 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":288.8,"upper":317.8} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentResponseOk | 0 | true |
| agent-cold-warm-message | mock-openai-provider | agentTurn.responseOk | none | usable assistant response |
| agent-cold-warm-message | mock-openai-provider | agentTurn.expectedTextPresent | none | KOVA_AGENT_OK |
| agent-cold-warm-message | mock-openai-provider | agentProviderRequestMissing | none | provider request during agent command |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 16,388 | <= 15000 |
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
- Tested SHA: 75a1bcebd6a9b5eae2ca6c1d82bed61507d7d706
- Workflow ref: main
- Workflow SHA: 75a1bcebd6a9b5eae2ca6c1d82bed61507d7d706
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12629618937](https://github.com/openclaw/openclaw/actions/runs/40274254859/artifacts/12629618937); its checksum is published under the bundles directory.
