# OpenClaw Performance Report

- Lane: live-openai-candidate
- Run: kova-260918-052341-8b3e6d
- Generated: 2026-09-18T05:25:41.639Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 1
- Repeat: 1

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Primary RSS | 987 MB | 987 MB | 987 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 161 % | 161 % | 161 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 12,217 ms | 12,217 ms | 12,217 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 12,341 ms | 12,341 ms | 12,341 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 9,857 ms | 9,857 ms | 9,857 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,108 ms | 10,108 ms | 10,108 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,236 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,236 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: main
- Tested SHA: deb939dc004be671dc3e25e1dad1d310a3f45a61
- Workflow ref: main
- Workflow SHA: deb939dc004be671dc3e25e1dad1d310a3f45a61
- Kova repository: openclaw/Kova
- Kova ref: c2de7c24ea835ea054c416f8bf19d3cb22f104e9
- Kova profile: diagnostic
- Kova scenario timeout: 300000ms
- Lane auth: live
- Lane model: gpt-5.6-luna
- Lane repeat: 1
- Include filters: scenario:agent-cold-warm-message

## Full diagnostic artifact

The complete Kova bundle remains in [Actions artifact 10533457047](https://github.com/openclaw/openclaw/actions/runs/35310525361/artifacts/10533457047); its checksum is published under the bundles directory.
