# OpenClaw Performance Report

- Lane: mock-provider
- Run: kova-2026-05-03T132838Z
- Generated: 2026-05-03T13:32:14.606Z
- Target: local-build:/home/runner/_work/openclaw/openclaw
- Statuses: FAIL: 3
- Repeat: 3
- Published report: https://github.com/openclaw/clawgrit-reports/tree/main/openclaw-performance/v2026.4.10/25280449149-1/mock-provider

## Key metrics

| Scenario | State | Metric | Median | p95 | Max |
| --- | --- | --- | ---: | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | Peak RSS | 679 MB | 680 MB | 680 MB |
| agent-cold-warm-message | mock-openai-provider | Gateway RSS | 0 MB | 0 MB | 0 MB |
| agent-cold-warm-message | mock-openai-provider | Max CPU | 156 % | 164 % | 165 % |
| agent-cold-warm-message | mock-openai-provider | Agent Turn p95 | 10,878 ms | 11,107 ms | 11,132 ms |
| agent-cold-warm-message | mock-openai-provider | Cold Agent Turn | 11,031 ms | 11,222 ms | 11,243 ms |
| agent-cold-warm-message | mock-openai-provider | Warm Agent Turn | 7,962 ms | 8,924 ms | 9,031 ms |
| agent-cold-warm-message | mock-openai-provider | Pre-Provider p95 | 10,764 ms | 11,046 ms | 11,077 ms |

## Threshold violations

| Scenario | State | Metric | Actual | Threshold |
| --- | --- | --- | ---: | ---: |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,914 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,914 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,188 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 11,188 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |
| agent-cold-warm-message | mock-openai-provider | openclawTimelineAvailable | 0 | available |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,348 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | preProviderMs | 10,348 | <= 10000 |
| agent-cold-warm-message | mock-openai-provider | agentLatencyDiagnosis | pre-provider-stall | no cold pre-provider stall |

## Records

| Scenario | State | Status | Failure |
| --- | --- | --- | --- |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |
| agent-cold-warm-message | mock-openai-provider | FAIL |  |

## Test scope

- Repository: openclaw/openclaw
- Tested ref: v2026.4.10
- Tested SHA: 44e5b62c27e088128e32e209c146de346c3ea7e6
- Workflow ref: main
- Workflow SHA: 97cdd73aa628ee6bcaacc20f71c5c7061b7d2f5f
- Kova repository: openclaw/Kova
- Kova ref: b63b6f9e20efb23641df00487e982230d81a90ac
- Kova profile: diagnostic
- Lane auth: mock
- Lane model: gpt-5.4
- Lane repeat: 3
- Include filters: scenario:fresh-install scenario:gateway-performance scenario:bundled-plugin-startup scenario:bundled-runtime-deps scenario:agent-cold-warm-message

## Source probes

Additional gateway boot, memory, plugin pressure, mock hello-loop, and CLI startup numbers are in [source/index.md](source/index.md).
