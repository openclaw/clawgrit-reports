# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261006-052832-065010
- Generated: 2026-10-06T05:37:52.512Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,270 MB | 1,270 MB | 1,270 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,270 MB | 1,270 MB | 1,270 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 238 % | 238 % | 238 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 19.9 ms | 19.9 ms | 19.9 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,642 MB | 1,642 MB | 1,642 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 325 % | 325 % | 325 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,152 ms | 14,152 ms | 14,152 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,169 ms | 14,169 ms | 14,169 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 13,819 ms | 13,819 ms | 13,819 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,714 ms | 12,714 ms | 12,714 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,270 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,557 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: d8612ec864bb4c872616cfda5340c53803655f5f
- Workflow ref: main
- Workflow SHA: d8612ec864bb4c872616cfda5340c53803655f5f
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11392551332](https://github.com/openclaw/openclaw/actions/runs/37418475569/artifacts/11392551332); its checksum is published under the bundles directory.
