# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261023-052446-d359fc
- Generated: 2026-10-23T05:28:04.091Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,554 MB | 1,554 MB | 1,554 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 217 % | 217 % | 217 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,253 ms | 12,253 ms | 12,253 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,270 ms | 12,270 ms | 12,270 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,936 ms | 11,936 ms | 11,936 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,832 ms | 10,832 ms | 10,832 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,554 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,740 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,857 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,359 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,857 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,359 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 4c35e9503fd245a3a5222ece69953fbd4a429e2f
- Workflow ref: main
- Workflow SHA: 4c35e9503fd245a3a5222ece69953fbd4a429e2f
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12480921743](https://github.com/openclaw/openclaw/actions/runs/39905456802/artifacts/12480921743); its checksum is published under the bundles directory.
