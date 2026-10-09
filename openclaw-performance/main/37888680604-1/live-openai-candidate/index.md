# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261009-053021-f1539d
- Generated: 2026-10-09T05:33:23.062Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,470 MB | 1,470 MB | 1,470 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 162 % | 162 % | 162 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 18,669 ms | 18,669 ms | 18,669 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 18,673 ms | 18,673 ms | 18,673 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 18,586 ms | 18,586 ms | 18,586 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 16,972 ms | 16,972 ms | 16,972 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,470 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,568 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 16,984 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 16,744 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 18,586 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 16,984 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 16,744 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: e825e5918c2e98aaaa98c5a84417635256ef2025
- Workflow ref: main
- Workflow SHA: e825e5918c2e98aaaa98c5a84417635256ef2025
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 11597328806](https://github.com/openclaw/openclaw/actions/runs/37888680604/artifacts/11597328806); its checksum is published under the bundles directory.
