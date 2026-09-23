# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260923-052640-63dc8d
- Generated: 2026-09-23T05:29:14.132Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,090 MB | 1,090 MB | 1,090 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 182 % | 182 % | 182 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 18,770 ms | 18,770 ms | 18,770 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 19,170 ms | 19,170 ms | 19,170 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,169 ms | 11,169 ms | 11,169 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 14,431 ms | 14,431 ms | 14,431 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,090 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 14,680 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | providerFinalMs | 4,082 | <= 3000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 14,680 | <= 10000 |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 5dd6d230ba802f260feb6d3ef346114392937b8b
- Workflow ref: main
- Workflow SHA: 5dd6d230ba802f260feb6d3ef346114392937b8b
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10733494342](https://github.com/openclaw/openclaw/actions/runs/35822204249/artifacts/10733494342); its checksum is published under the bundles directory.
