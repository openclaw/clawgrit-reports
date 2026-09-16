# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260916-052510-d547ed
- Generated: 2026-09-16T05:27:27.442Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 955 MB | 955 MB | 955 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 187 % | 187 % | 187 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,818 ms | 14,818 ms | 14,818 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,977 ms | 14,977 ms | 14,977 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,801 ms | 11,801 ms | 11,801 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,274 ms | 12,274 ms | 12,274 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,412 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,412 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: db1d5d2dccbc9acaffc6232401dcd4f77855d51a
- Workflow ref: main
- Workflow SHA: db1d5d2dccbc9acaffc6232401dcd4f77855d51a
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10431288350](https://github.com/openclaw/openclaw/actions/runs/35059288153/artifacts/10431288350); its checksum is published under the bundles directory.
