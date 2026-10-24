# OpenClaw Performance Report

- Lane: mock-deep-profile
- Run: kova-261024-052341-ea4722
- Generated: 2026-10-24T05:33:19.614Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 2
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| gateway-performance | many-bundled-plugins | Primary RSS | 1,863 MB | 1,863 MB | 1,863 MB |
| gateway-performance | many-bundled-plugins | Gateway RSS | 1,863 MB | 1,863 MB | 1,863 MB |
| gateway-performance | many-bundled-plugins | Max CPU | 228 % | 228 % | 228 % |
| gateway-performance | many-bundled-plugins | Event Loop Max | 133 ms | 133 ms | 133 ms |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,852 MB | 1,852 MB | 1,852 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 320 % | 320 % | 320 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,281 ms | 14,281 ms | 14,281 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,892 ms | 13,892 ms | 13,892 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 14,301 ms | 14,301 ms | 14,301 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,938 ms | 12,938 ms | 12,938 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| gateway-performance | many-bundled-plugins | peakRssMb | 1,863 | <= 1177 |
| gateway-performance | many-bundled-plugins | resourceByRole.gateway-tree.peakRssMb | 2,004 | <= 1440 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-process.maxCpuPercent | {"lower":297.6,"upper":319.7} | <= 300 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| gateway-performance | many-bundled-plugins | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 210a582b4658cfe82adf107d7e0004a1abe24e58
- Workflow ref: main
- Workflow SHA: 210a582b4658cfe82adf107d7e0004a1abe24e58
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: mock
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:fresh-install,scenario:gateway-performance,scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12549890929](https://github.com/openclaw/openclaw/actions/runs/40065944171/artifacts/12549890929); its checksum is published under the bundles directory.
