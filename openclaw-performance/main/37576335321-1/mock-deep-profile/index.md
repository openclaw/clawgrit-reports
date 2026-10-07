# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261007-052908-05364e
- Generated: 2026-10-07T05:38:41.705Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,446 MB | 1,446 MB | 1,446 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,446 MB | 1,446 MB | 1,446 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 234 % | 234 % | 234 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 22 ms | 22 ms | 22 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,169 MB | 1,169 MB | 1,169 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 268 % | 268 % | 268 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 15,446 ms | 15,446 ms | 15,446 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 15,446 ms | 15,446 ms | 15,446 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,446 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,733 | <= 1440 |
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
- Tested SHA: 6041559b4eb155794bce6d87af5e828143cb3395
- Workflow ref: main
- Workflow SHA: 6041559b4eb155794bce6d87af5e828143cb3395
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11463550352](https://github.com/openclaw/openclaw/actions/runs/37576335321/artifacts/11463550352); its checksum is published under the bundles directory.
