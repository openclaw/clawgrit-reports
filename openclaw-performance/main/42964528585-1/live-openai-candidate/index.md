# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261111-051808-db17ed
- Generated: 2026-11-11T05:22:35.458Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,496 MB | 1,496 MB | 1,496 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 193 % | 193 % | 193 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,873 ms | 14,873 ms | 14,873 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,892 ms | 14,892 ms | 14,892 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 14,511 ms | 14,511 ms | 14,511 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 13,341 ms | 13,341 ms | 13,341 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,496 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,678 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 13,371 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,771 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 13,371 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,771 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 36aa3b591d54def192ec6f189e4b7f96e824ed91
- Workflow ref: main
- Workflow SHA: 36aa3b591d54def192ec6f189e4b7f96e824ed91
- Kova repository: openclaw/Kova
- Kova ref: a50c81c878f417e7e56dc64b7063d9a117db5ad3
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13830663116](https://github.com/openclaw/openclaw/actions/runs/42964528585/artifacts/13830663116); its checksum is published under the bundles directory.
