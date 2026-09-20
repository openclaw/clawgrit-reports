# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260920-052235-cfb785
- Generated: 2026-09-20T05:24:34.782Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,134 MB | 1,134 MB | 1,134 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 203 % | 203 % | 203 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,232 ms | 14,232 ms | 14,232 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,401 ms | 14,401 ms | 14,401 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,029 ms | 11,029 ms | 11,029 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 11,971 ms | 11,971 ms | 11,971 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,134 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,133 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,133 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 9cf4837995ff570f0b25e1f404eb8ec069debf03
- Workflow ref: main
- Workflow SHA: 9cf4837995ff570f0b25e1f404eb8ec069debf03
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10599098261](https://github.com/openclaw/openclaw/actions/runs/35491455305/artifacts/10599098261); its checksum is published under the bundles directory.
