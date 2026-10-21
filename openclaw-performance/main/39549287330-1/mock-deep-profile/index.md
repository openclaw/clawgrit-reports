# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261021-052535-926f25
- Generated: 2026-10-21T05:35:31.181Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,937 MB | 1,937 MB | 1,937 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,937 MB | 1,937 MB | 1,937 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 276 % | 276 % | 276 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 49.4 ms | 49.4 ms | 49.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,153 MB | 2,153 MB | 2,153 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 329 % | 329 % | 329 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 15,998 ms | 15,998 ms | 15,998 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,951 ms | 14,951 ms | 14,951 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 16,053 ms | 16,053 ms | 16,053 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 14,232 ms | 14,232 ms | 14,232 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,937 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,139 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 16,053 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 45aaaf3577c8179b0ad07da7bedb87350e33e7f2
- Workflow ref: main
- Workflow SHA: 45aaaf3577c8179b0ad07da7bedb87350e33e7f2
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12323347137](https://github.com/openclaw/openclaw/actions/runs/39549287330/artifacts/12323347137); its checksum is published under the bundles directory.
