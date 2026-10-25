# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261025-052310-ba2071
- Generated: 2026-10-25T05:33:24.389Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,998 MB | 1,998 MB | 1,998 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,998 MB | 1,998 MB | 1,998 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 251 % | 251 % | 251 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 116 ms | 116 ms | 116 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,958 MB | 1,958 MB | 1,958 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 319 % | 319 % | 319 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 15,103 ms | 15,103 ms | 15,103 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,179 ms | 14,179 ms | 14,179 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 15,152 ms | 15,152 ms | 15,152 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 13,731 ms | 13,731 ms | 13,731 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,998 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,210 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":293.7,"upper":318.7} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 15,152 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ebbe13ef1cb81bce3df81bae4332668a3a4ce236
- Workflow ref: main
- Workflow SHA: ebbe13ef1cb81bce3df81bae4332668a3a4ce236
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12588751251](https://github.com/openclaw/openclaw/actions/runs/40165246438/artifacts/12588751251); its checksum is published under the bundles directory.
