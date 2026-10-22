# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261022-052516-8f0f17
- Generated: 2026-10-22T05:30:04.318Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,443 MB | 1,443 MB | 1,443 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 231 % | 231 % | 231 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 45,550 ms | 45,550 ms | 45,550 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 45,568 ms | 45,568 ms | 45,568 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 45,208 ms | 45,208 ms | 45,208 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 43,832 ms | 43,832 ms | 43,832 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,443 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,629 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 45,568 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 43,859 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 45,208 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 43,318 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 45,568 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 45,208 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 43,859 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 43,318 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
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
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12403398752](https://github.com/openclaw/openclaw/actions/runs/39727766827/artifacts/12403398752); its checksum is published under the bundles directory.
