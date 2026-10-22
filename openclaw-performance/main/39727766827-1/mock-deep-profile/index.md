# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261022-052459-574c52
- Generated: 2026-10-22T05:35:51.679Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,850 MB | 1,850 MB | 1,850 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,850 MB | 1,850 MB | 1,850 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 269 % | 269 % | 269 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 59.5 ms | 59.5 ms | 59.5 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 2,099 MB | 2,099 MB | 2,099 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 338 % | 338 % | 338 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 20,024 ms | 20,024 ms | 20,024 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 19,236 ms | 19,236 ms | 19,236 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 20,065 ms | 20,065 ms | 20,065 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 17,544 ms | 17,544 ms | 17,544 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,850 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,069 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 20,065 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: c439431bb101f279adc5f57cc118c8a09ad13fd5
- Workflow ref: main
- Workflow SHA: c439431bb101f279adc5f57cc118c8a09ad13fd5
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12403689708](https://github.com/openclaw/openclaw/actions/runs/39727766827/artifacts/12403689708); its checksum is published under the bundles directory.
