# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261122-051756-4cc036
- Generated: 2026-11-22T05:23:13.935Z
- Target: local-build:/home/runner/work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,562 MB | 1,562 MB | 1,562 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 210 % | 210 % | 210 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 19,269 ms | 19,269 ms | 19,269 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 19,335 ms | 19,335 ms | 19,335 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 18,011 ms | 18,011 ms | 18,011 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 17,648 ms | 17,648 ms | 17,648 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,562 | <= 1150 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,947 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,699 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 16,686 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 18,011 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,699 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 16,686 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: c0e3bc0fbff265919efaf4e5b52688c5feed28b2
- Workflow ref: main
- Workflow SHA: c0e3bc0fbff265919efaf4e5b52688c5feed28b2
- Kova repository: openclaw/Kova
- Kova ref: 7c162a3276a31fbbb60c362d94124b6cad5187ca
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 14741231584](https://github.com/openclaw/openclaw/actions/runs/44988557519/artifacts/14741231584); its checksum is published under the bundles directory.
