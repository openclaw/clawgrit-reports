# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261021-052532-340fdc
- Generated: 2026-10-21T05:30:06.374Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,550 MB | 1,550 MB | 1,550 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 218 % | 218 % | 218 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 43,657 ms | 43,657 ms | 43,657 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 43,689 ms | 43,689 ms | 43,689 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 43,044 ms | 43,044 ms | 43,044 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 41,945 ms | 41,945 ms | 41,945 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,550 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,737 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 41,971 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 41,452 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 43,044 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 41,971 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 41,452 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 45aaaf3577c8179b0ad07da7bedb87350e33e7f2
- Workflow ref: main
- Workflow SHA: 45aaaf3577c8179b0ad07da7bedb87350e33e7f2
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12322678928](https://github.com/openclaw/openclaw/actions/runs/39549287330/artifacts/12322678928); its checksum is published under the bundles directory.
