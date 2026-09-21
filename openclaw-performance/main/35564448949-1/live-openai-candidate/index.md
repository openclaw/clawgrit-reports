# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260921-052945-247fb7
- Generated: 2026-09-21T05:32:48.300Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 1,123 MB | 1,123 MB | 1,123 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 190 % | 190 % | 190 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 14,318 ms | 14,318 ms | 14,318 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 14,474 ms | 14,474 ms | 14,474 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 11,351 ms | 11,351 ms | 11,351 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 12,535 ms | 12,535 ms | 12,535 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | statusMs | 61,917 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | peakRssMb | 1,123 | <= 1000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,672 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 12,672 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: 90a39a0547e833231a1419aa52716327a86bf777
- Workflow ref: main
- Workflow SHA: 90a39a0547e833231a1419aa52716327a86bf777
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10623412796](https://github.com/openclaw/openclaw/actions/runs/35564448949/artifacts/10623412796); its checksum is published under the bundles directory.
