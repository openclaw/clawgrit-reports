# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261020-052435-27fc7d
- Generated: 2026-10-20T05:29:15.077Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,515 MB | 1,515 MB | 1,515 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 218 % | 218 % | 218 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 44,999 ms | 44,999 ms | 44,999 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 44,351 ms | 44,351 ms | 44,351 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 45,033 ms | 45,033 ms | 45,033 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 42,871 ms | 42,871 ms | 42,871 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,515 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,701 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 42,823 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 45,033 | <= 45000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 42,873 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 45,033 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 42,823 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 42,873 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 4763b77ba572eefaef3bed12c0c17c305cd12738
- Workflow ref: main
- Workflow SHA: 4763b77ba572eefaef3bed12c0c17c305cd12738
- Kova repository: openclaw/Kova
- Kova ref: 88d9a7efa5e6569f902bf8d298fd6a21c6be2e7b
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 12243371296](https://github.com/openclaw/openclaw/actions/runs/39374642100/artifacts/12243371296); its checksum is published under the bundles directory.
