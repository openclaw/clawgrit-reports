# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261010-052549-07ab0a
- Generated: 2026-10-10T05:28:19.948Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,477 MB | 1,477 MB | 1,477 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 165 % | 165 % | 165 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 13,545 ms | 13,545 ms | 13,545 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 13,554 ms | 13,554 ms | 13,554 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 13,373 ms | 13,373 ms | 13,373 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 11,937 ms | 11,937 ms | 11,937 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,477 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,578 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,947 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,746 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,947 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,746 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 6866e219d8ed1cadd539e5de2a2db20ac1c1a095
- Workflow ref: main
- Workflow SHA: 6866e219d8ed1cadd539e5de2a2db20ac1c1a095
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11661205850](https://github.com/openclaw/openclaw/actions/runs/38027394276/artifacts/11661205850); its checksum is published under the bundles directory.
