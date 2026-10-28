# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261028-052019-0913a9
- Generated: 2026-10-28T05:31:21.950Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,576 MB | 1,576 MB | 1,576 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,576 MB | 1,576 MB | 1,576 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 233 % | 233 % | 233 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 43.4 ms | 43.4 ms | 43.4 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,052 MB | 2,052 MB | 2,052 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 316 % | 316 % | 316 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 16,336 ms | 16,336 ms | 16,336 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 15,015 ms | 15,015 ms | 15,015 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 16,405 ms | 16,405 ms | 16,405 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 14,780 ms | 14,780 ms | 14,780 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,576 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,768 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":292.1,"upper":316} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 16,405 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 702c2957fadc79a4c3ba5d046842d918e2909f12
- Workflow ref: main
- Workflow SHA: 702c2957fadc79a4c3ba5d046842d918e2909f12
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12794298195](https://github.com/openclaw/openclaw/actions/runs/40637180378/artifacts/12794298195); its checksum is published under the bundles directory.
