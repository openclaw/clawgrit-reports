# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-261110-051851-a64117
- Generated: 2026-11-10T05:23:22.328Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,421 MB | 1,421 MB | 1,421 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 203 % | 203 % | 203 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 16,462 ms | 16,462 ms | 16,462 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 16,546 ms | 16,546 ms | 16,546 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 14,858 ms | 14,858 ms | 14,858 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 15,067 ms | 15,067 ms | 15,067 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,421 | <= 1400 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.command-tree.peakRssMb | 1,602 | <= 1600 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 15,153 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 13,442 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 15,153 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 13,442 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 8aa3ef4425c14dbfd32cc2ffb912fa4ea3dec646
- Workflow ref: main
- Workflow SHA: 8aa3ef4425c14dbfd32cc2ffb912fa4ea3dec646
- Kova repository: openclaw/Kova
- Kova ref: 869493d1be0dcf10b7ddf96371cf35239a9efbd6
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 13738340873](https://github.com/openclaw/openclaw/actions/runs/42761036365/artifacts/13738340873); its checksum is published under the bundles directory.
