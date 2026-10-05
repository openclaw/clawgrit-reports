# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261005-053715-d059d9
- Generated: 2026-10-05T05:45:36.171Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,247 MB | 1,247 MB | 1,247 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,247 MB | 1,247 MB | 1,247 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 211 % | 211 % | 211 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 17.8 ms | 17.8 ms | 17.8 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,598 MB | 1,598 MB | 1,598 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 331 % | 331 % | 331 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,140 ms | 12,140 ms | 12,140 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,153 ms | 12,153 ms | 12,153 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,901 ms | 11,901 ms | 11,901 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,797 ms | 10,797 ms | 10,797 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,247 | <= 1177 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":282.2,"upper":330.7} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: f27df1d88709bebfb205bc11585ddb8e0b80b1c5
- Workflow ref: main
- Workflow SHA: f27df1d88709bebfb205bc11585ddb8e0b80b1c5
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11327463131](https://github.com/openclaw/openclaw/actions/runs/37268440705/artifacts/11327463131); its checksum is published under the bundles directory.
