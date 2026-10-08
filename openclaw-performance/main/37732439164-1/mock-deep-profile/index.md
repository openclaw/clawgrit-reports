# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261008-052859-4fd699
- Generated: 2026-10-08T05:38:33.958Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,448 MB | 1,448 MB | 1,448 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,448 MB | 1,448 MB | 1,448 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 237 % | 237 % | 237 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.6 ms | 17.6 ms | 17.6 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,070 MB | 1,070 MB | 1,070 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 196 % | 196 % | 196 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 16,713 ms | 16,713 ms | 16,713 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 16,713 ms | 16,713 ms | 16,713 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,448 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,735 | <= 1440 |
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
- Tested SHA: 6dd7b2e00b3edaf07383052660f2cb8cddf8575d
- Workflow ref: main
- Workflow SHA: 6dd7b2e00b3edaf07383052660f2cb8cddf8575d
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11530857312](https://github.com/openclaw/openclaw/actions/runs/37732439164/artifacts/11530857312); its checksum is published under the bundles directory.
