# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261027-052603-16231e
- Generated: 2026-10-27T05:36:20.872Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,844 MB | 1,844 MB | 1,844 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,844 MB | 1,844 MB | 1,844 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 244 % | 244 % | 244 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 69.4 ms | 69.4 ms | 69.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,076 MB | 2,076 MB | 2,076 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 330 % | 330 % | 330 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 15,361 ms | 15,361 ms | 15,361 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,663 ms | 14,663 ms | 14,663 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 15,398 ms | 15,398 ms | 15,398 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 13,963 ms | 13,963 ms | 13,963 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,844 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,947 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 15,398 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 59b1dddaa2f6691317a02ba4bf2dff52182a843e
- Workflow ref: main
- Workflow SHA: 59b1dddaa2f6691317a02ba4bf2dff52182a843e
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12712219343](https://github.com/openclaw/openclaw/actions/runs/40455115817/artifacts/12712219343); its checksum is published under the bundles directory.
