# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261030-052019-dc76bb
- Generated: 2026-10-30T05:30:04.281Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,507 MB | 1,507 MB | 1,507 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,507 MB | 1,507 MB | 1,507 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 279 % | 279 % | 279 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 34.2 ms | 34.2 ms | 34.2 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,931 MB | 1,931 MB | 1,931 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 296 % | 296 % | 296 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 13,746 ms | 13,746 ms | 13,746 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,178 ms | 13,178 ms | 13,178 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 13,776 ms | 13,776 ms | 13,776 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,273 ms | 12,273 ms | 12,273 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,507 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 1,815 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 3cd0dd6380a1a1586c6db4574b6fc231eb3367df
- Workflow ref: main
- Workflow SHA: 3cd0dd6380a1a1586c6db4574b6fc231eb3367df
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12956586879](https://github.com/openclaw/openclaw/actions/runs/41007629360/artifacts/12956586879); its checksum is published under the bundles directory.
