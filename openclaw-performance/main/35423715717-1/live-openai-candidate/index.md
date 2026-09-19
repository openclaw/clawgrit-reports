# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260919-052222-3b0e95
- Generated: 2026-09-19T05:24:17.161Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 994 MB | 994 MB | 994 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 189 % | 189 % | 189 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,350 ms | 12,350 ms | 12,350 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,403 ms | 12,403 ms | 12,403 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,349 ms | 11,349 ms | 11,349 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,217 ms | 10,217 ms | 10,217 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,332 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | providerFinalMs | 3,110 | <= 3000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,332 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 95b8e03354505bd05875dd7a94e0f67d6fa528cb
- Workflow ref: main
- Workflow SHA: 95b8e03354505bd05875dd7a94e0f67d6fa528cb
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10578267246](https://github.com/openclaw/openclaw/actions/runs/35423715717/artifacts/10578267246); its checksum is published under the bundles directory.
