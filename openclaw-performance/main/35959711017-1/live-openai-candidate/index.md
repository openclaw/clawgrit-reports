# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260924-052501-d75407
- Generated: 2026-09-24T05:27:16.561Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,124 MB | 1,124 MB | 1,124 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 166 % | 166 % | 166 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,447 ms | 14,447 ms | 14,447 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,583 ms | 14,583 ms | 14,583 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,859 ms | 11,859 ms | 11,859 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,681 ms | 12,681 ms | 12,681 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,124 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,825 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,825 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: fef6b1290e412761888865da5b61ee1c0ce29586
- Workflow ref: main
- Workflow SHA: fef6b1290e412761888865da5b61ee1c0ce29586
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10792061511](https://github.com/openclaw/openclaw/actions/runs/35959711017/artifacts/10792061511); its checksum is published under the bundles directory.
