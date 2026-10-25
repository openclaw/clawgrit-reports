# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261025-052307-e07a33
- Generated: 2026-10-25T05:26:21.759Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,641 MB | 1,641 MB | 1,641 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 219 % | 219 % | 219 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 11,892 ms | 11,892 ms | 11,892 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,926 ms | 11,926 ms | 11,926 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,248 ms | 11,248 ms | 11,248 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,294 ms | 10,294 ms | 10,294 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,641 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,828 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,321 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,321 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: ebbe13ef1cb81bce3df81bae4332668a3a4ce236
- Workflow ref: main
- Workflow SHA: ebbe13ef1cb81bce3df81bae4332668a3a4ce236
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12588446020](https://github.com/openclaw/openclaw/actions/runs/40165246438/artifacts/12588446020); its checksum is published under the bundles directory.
