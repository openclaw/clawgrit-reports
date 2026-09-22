# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260922-052651-313472
- Generated: 2026-09-22T05:31:51.131Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 983 MB | 983 MB | 983 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 250 % | 250 % | 250 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 27,702 ms | 27,702 ms | 27,702 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 28,155 ms | 28,155 ms | 28,155 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 19,086 ms | 19,086 ms | 19,086 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 25,421 ms | 25,421 ms | 25,421 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | resourceCpuCoverage | ["CPU interval baseline is missing for a late-discovered product process","Product CPU interval or terminal wait accounting is incomplete"] | complete CPU interval evidence |
| agent-cold-warm-message | mock-openai-provider | statusMs | 63,027 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | resourceByRole.agent-cli.peakRssMb | 1,078 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 25,857 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,136 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | totalTurnMs | 19,086 | <= 15000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 25,857 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 17,136 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: b7f812464c4509191e201249237e52069e5b35bb
- Workflow ref: main
- Workflow SHA: b7f812464c4509191e201249237e52069e5b35bb
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10677489642](https://github.com/openclaw/openclaw/actions/runs/35690492922/artifacts/10677489642); its checksum is published under the bundles directory.
