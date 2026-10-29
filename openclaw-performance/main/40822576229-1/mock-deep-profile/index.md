# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261029-051952-ba7a4b
- Generated: 2026-10-29T05:30:17.787Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,516 MB | 1,516 MB | 1,516 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,516 MB | 1,516 MB | 1,516 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 272 % | 272 % | 272 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 32.9 ms | 32.9 ms | 32.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,944 MB | 1,944 MB | 1,944 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 304 % | 304 % | 304 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,488 ms | 14,488 ms | 14,488 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,975 ms | 13,975 ms | 13,975 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 14,515 ms | 14,515 ms | 14,515 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,906 ms | 12,906 ms | 12,906 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,516 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,823 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":279,"upper":303.8} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: c419c72cf8451e611a2728cf3e3a8c7e306cc6ff
- Workflow ref: main
- Workflow SHA: c419c72cf8451e611a2728cf3e3a8c7e306cc6ff
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12875627704](https://github.com/openclaw/openclaw/actions/runs/40822576229/artifacts/12875627704); its checksum is published under the bundles directory.
