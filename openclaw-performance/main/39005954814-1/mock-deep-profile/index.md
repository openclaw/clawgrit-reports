# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261017-052252-27584a
- Generated: 2026-10-17T05:32:52.275Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,631 MB | 1,631 MB | 1,631 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,631 MB | 1,631 MB | 1,631 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 220 % | 220 % | 220 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 42.2 ms | 42.2 ms | 42.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,899 MB | 1,899 MB | 1,899 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 312 % | 312 % | 312 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 16,915 ms | 16,915 ms | 16,915 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 16,927 ms | 16,927 ms | 16,927 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 16,677 ms | 16,677 ms | 16,677 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 15,229 ms | 15,229 ms | 15,229 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | resourceCpuCoverage | ["Product CPU interval or terminal wait accounting is incomplete"] | complete CPU interval evidence |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,631 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,784 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":282.4,"upper":312.3} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 16,677 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: a05b8f6e552c11340df8ab706e7a8ab180701dec
- Workflow ref: main
- Workflow SHA: a05b8f6e552c11340df8ab706e7a8ab180701dec
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12091525470](https://github.com/openclaw/openclaw/actions/runs/39005954814/artifacts/12091525470); its checksum is published under the bundles directory.
